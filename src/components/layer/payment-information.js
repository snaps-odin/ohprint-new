

import React from 'react';
import { connect } from 'react-redux';
import { change, Field, reduxForm } from 'redux-form';

import { LayerTypes } from 'constants/index';
import { ActionOrder, ActionOrderHistory } from 'actions/index';
import { getHeight } from 'utils/dom';
import { toCash, toDate, toPhoneNumber } from 'utils/format';
import { embedZipCode } from 'utils/daum';
import * as Validate from 'utils/validate';
import * as Normalize from 'utils/normalize';

import { InputField, SelectField } from 'components/common/fields';

import { dataLayerTranscation } from 'configs/google-analytics/ga';

class PaymentInformation extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			data: null,
			editMode: false,
			zipCodeMode: false
		};

		this.existZipCode = false;

		this.field = 'edit';

		this.onClickClose = this.onClickClose.bind(this);
		this.onClickPaymentChange = this.onClickPaymentChange.bind(this);
		this.onClickOpenEdit = this.onClickOpenEdit.bind(this);
		this.onClickCloseEdit = this.onClickCloseEdit.bind(this);
		this.onClickZipCode = this.onClickZipCode.bind(this);
		this.onSelectedZipCode = this.onSelectedZipCode.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer, handleUpdateLayer } } = this.props;
		let { zipCodeMode } = this.state;

		!zipCodeMode
			?
			handleCloseContentsLayer()
			:
			Promise.all([
				this.setState({ zipCodeMode: false })
			]).then(() => {
				handleUpdateLayer();
			});
	}

	onClickPaymentChange(event) {
		let { actions: { handleOpenContentsLayer }, options: { orderCode } } = this.props;

		handleOpenContentsLayer(LayerTypes.PAYMENT_CHANGE, { orderCode });
	}

	onClickOpenEdit(event) {
		let { actions: { handleChangeFormValue } } = this.props;
		let { data } = this.state;

		let field = this.field;
		let recipientPhones = toPhoneNumber(data[ 'recipientPhone' ]).split('-');

		Promise.all([
			handleChangeFormValue(field, Object.assign(data, {
				recipientPhone0: recipientPhones[ 0 ],
				recipientPhone1: recipientPhones[ 1 ],
				recipientPhone2: recipientPhones[ 2 ]
			}))
		]).then(() => {
			this.setState({ editMode: true });
		});
	}

	onClickCloseEdit(event) {
		this.setState({ editMode: false });
	}

	onClickZipCode(event) {
		let { actions: { handleUpdateLayer } } = this.props;

		Promise.all([
			this.setState({ zipCodeMode: true })
		]).then(() => {
			handleUpdateLayer();
		}).then(() => {
			!this.existZipCode && window.setTimeout(() => {
				embedZipCode(this.zipcode, this.onSelectedZipCode);
			}, 500);

			this.existZipCode = true;
		});
	}

	onSelectedZipCode(data) {
		let { actions: { handleChangeFormValue, handleUpdateLayer } } = this.props;

		let field = this.field;

		Promise.all([
			handleChangeFormValue(`${field}.recipientZip`, data[ 'zonecode' ]),
			handleChangeFormValue(`${field}.recipientAddress1`, `${data[ 'userSelectedType' ].match(/R/i) ? data[ 'roadAddress' ] : data[ 'jibunAddress' ]} ${data[ 'buildingName' ] || ''}`),
			handleChangeFormValue(`${field}.recipientAddress2`, null)
		]).then(() => {
			this.setState({ zipCodeMode: false });
		}).then(() => {
			handleUpdateLayer();
		});
	}

	onSubmit(values) {
		let { actions: { handleUpdateOrderHistoryDeliveryAddressByOrderCode, handleRequestOrderHistoryByOrderCode, handleOpenAlertLayer }, options: { orderCode } } = this.props;
		let { edit } = values;

		handleUpdateOrderHistoryDeliveryAddressByOrderCode(orderCode, {
			deliveryRequirements: edit[ 'deliveryRequirements' ],
			recipientAddress1: edit[ 'recipientAddress1' ],
			recipientAddress2: edit[ 'recipientAddress2' ],
			recipientAddress3: '',
			recipientName: edit[ 'recipientName' ],
			recipientPhone: `${edit[ 'recipientPhone0' ]}-${edit[ 'recipientPhone1' ]}-${edit[ 'recipientPhone2' ]}`,
			recipientZipCode: edit[ 'recipientZip' ]
		}).then(() => {
			return handleRequestOrderHistoryByOrderCode(orderCode);
		}).then(result => {
			this.setState({ editMode: false, data: result });
		}).catch(error => {
			handleOpenAlertLayer({
				description: error
			});
		});
	}

	componentDidMount() {
		let { actions: { handleRequestOrderPaymentOption, handleRequestOrderHistoryByOrderCode, handleUpdateLayer, handleOpenAlertLayer, handleCloseContentsLayer, handleGetTemplateSpec }, options: { orderCode }, states: { order: { paymentMethods } } } = this.props;

		Promise.all([
			handleRequestOrderPaymentOption(),
			handleRequestOrderHistoryByOrderCode(orderCode)
		]).then(results => {
		  //GA테스트 전용
      //console.log(results);
      //dataLayerTranscation(results[1], handleGetTemplateSpec, paymentMethods);
			this.setState({ data: results[ 1 ] });
		}).then(() => {
			handleUpdateLayer();
		}).catch(error => {
			Promise.all([
				handleOpenAlertLayer({
					description: error
				})
			]).then(() => {
				handleCloseContentsLayer();
			});
		});
	}

	render() {
		let { states: { ui: { view: { height } }, order: { paymentMethods } }, handleSubmit } = this.props;
		let { data, editMode, zipCodeMode } = this.state;

		let field = this.field;
		let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
			? height - (50 + 60 + getHeight(this.bottom))
			: null;

		return data &&
			(
				<div className={`payment-info-layer-wrap popup ${zipCodeMode ? 'zipcode' : ''}`}>
					<div className="container">
						<form onSubmit={handleSubmit(this.onSubmit)}>
							<div className="top">
								<h2>결제/배송 정보</h2>
							</div>

							<div className="middle"
							     style={middleHeight ? { height: `${middleHeight}px` } : null}>

								<div className="inner"
								     ref={(c) => {this.inner = c;}}>

									<div className="zipcode"
									     style={!zipCodeMode ? { display: 'none' } : null}
									     ref={(c) => {this.zipcode = c;}}/>

									<table frameBorder={0}
									       style={zipCodeMode ? { display: 'none' } : null}>

										<caption>
											<span className="blind">결제정보</span>
										</caption>
										<colgroup>
											<col style={{ width: '160px' }}/>
											<col style={{ width: '230px' }}/>
											<col style={{ width: '160px' }}/>
											<col style={{ width: '230px' }}/>
										</colgroup>
										<thead>
										<tr>
											<th>결제 정보</th>
											<td colSpan="3">
												{data[ 'isPaymentChange' ] && (
													<button type="button"
													        className="btn-white-small"
													        onClick={this.onClickPaymentChange}>결제 방법 변경</button>
												)}
											</td>
										</tr>
										</thead>
										<tbody>
										<tr>
											<th>결제 방법</th>
											<td colSpan={3}>
												{paymentMethods.find(method => method[ 'value' ] === data[ 'settlementMethod' ])[ 'label' ]}
											</td>
										</tr>
										<tr>
											<th>상품 총 금액</th>
											<td>{toCash(data[ 'amount' ])}원</td>
											<th>배송비</th>
											<td>{toCash(data[ 'deliveryAmount' ])}원</td>
										</tr>
										<tr>
											<th>쿠폰할인 / 머니</th>
											<td>
												{data[ 'useCouponAmount' ] ? `-${toCash(data[ 'useCouponAmount' ])}` : '0'}원
												/ {data[ 'userMoney' ] ? `-${toCash(data[ 'userMoney' ])}` : '0'}원
											</td>
											<th>총 결제 금액</th>
											<td><em>{toCash(data[ 'settlementAmount' ])}원</em></td>
										</tr>
										{data[ 'settlementMethod' ].match(/012004/) && (
											<tr>
												<th>입금 계좌</th>
												<td>
													{data[ 'bankName' ]} {data[ 'account' ]}<br/>
													(예금주 : 주식회사 위블링)
												</td>

												<th>{data[ 'expirationDate' ] ? '입금 기한일' : '입금 확인일'}</th>
												<td>
													<em>
														{toDate(data[ 'expirationDate' ] || data[ 'paymentDate' ], `YYYY년 MM월 DD일${data[ 'expirationDate' ] ? ' 까지' : ''}`)}
													</em>
												</td>
											</tr>
										)}
										</tbody>
									</table>

									<table frameBorder={0}
									       style={zipCodeMode ? { display: 'none' } : null}>

										<caption>
											<span className="blind">배송정보</span>
										</caption>
										<colgroup>
											<col style={{ width: '160px' }}/>
											<col style={{ width: '230px' }}/>
											<col style={{ width: '160px' }}/>
											<col style={{ width: '230px' }}/>
										</colgroup>
										<thead>
										<tr>
											<th>배송 정보</th>
											{!editMode
												? (
													<td colSpan={3}>
														{data[ 'isAddressChange' ] && (
															<button type="button"
															        className="btn-white-small"
															        onClick={this.onClickOpenEdit}>배송 정보 변경
															</button>
														)}
													</td>
												)
												: (
													<td colSpan={3}>
														<button type="button"
														        className="btn-white-small"
														        onClick={this.onClickCloseEdit}>취소
														</button>

														<button type="submit"
														        className="btn-black-small">저장
														</button>
													</td>
												)
											}

										</tr>
										</thead>
										<tbody className={editMode ? 'edit' : null}>
										<tr>
											<th>받는사람 이름</th>
											{!editMode
												? (<td>{data[ 'recipientName' ]}</td>)
												: (
													<td>
														<Field name={`${field}.recipientName`}
														       className="box medium"
														       component={InputField}
														       validate={[ Validate.required ]}/>
													</td>
												)
											}

											<th>연락처</th>
											{!editMode
												? (<td>{data[ 'recipientPhone' ]}</td>)
												: (
													<td className="phone">
														<Field name={`${field}.recipientPhone0`}
														       className="box small"
														       maxLength={3}
														       component={InputField}
														       validate={[ Validate.required, Validate.shortMinLength2, Validate.number ]}/>

														<span className="line"/>

														<Field name={`${field}.recipientPhone1`}
														       className="box small"
														       maxLength={4}
														       component={InputField}
														       validate={[ Validate.required, Validate.shortMinLength3, Validate.number ]}/>

														<span className="line"/>

														<Field name={`${field}.recipientPhone2`}
														       className="box small"
														       maxLength={4}
														       component={InputField}
														       validate={[ Validate.required, Validate.shortMinLength4, Validate.number ]}/>
													</td>
												)
											}

										</tr>
										<tr>
											<th>주소</th>
											{!editMode
												? (
													<td className="address" colSpan={3}>
														({data[ 'recipientZip' ]})<br/>
														{data[ 'recipientAddress1' ]}<br/>
														{data[ 'recipientAddress2' ]}
													</td>
												)
												: (
													<td className="address" colSpan={3}>
														<Field name={`${field}.recipientZip`}
														       className="box medium"
														       readOnly={true}
														       component={InputField}
														       validate={[ Validate.required ]}/>

														<button type="button"
														        className="btn-white-small"
														        onClick={this.onClickZipCode}>우편번호 조회
														</button>

														<Field name={`${field}.recipientAddress1`}
														       className="box large"
														       readOnly={true}
														       component={InputField}
														       validate={[ Validate.required ]}/>

														<Field name={`${field}.recipientAddress2`}
														       className="box large"
														       component={InputField}
														       maxLength={45}
														       showLength={true}
														       validate={[ Validate.required ]}
														       normalize={Normalize.maxLength(45)}/>

													</td>
												)
											}

										</tr>
										<tr>
											<th>배송 시 요청사항</th>
											{!editMode
												? (<td colSpan={3}>{data[ 'deliveryRequirements' ]}</td>)
												: (
													<td colSpan={3}>
														<Field name={`${field}.deliveryRequirements`}
														       className="box large"
														       maxLength={20}
														       showLength={true}
														       component={InputField}
														       normalize={Normalize.maxLength(20)}/>
													</td>
												)
											}

										</tr>
										<tr>
											<th>주문 상품 및 수량</th>
											<td className="products" colSpan={3}>
												{data[ 'orderDetailList' ].map(item => (
													<span>{item[ 'projectName' ]} {item[ 'quantity' ]}{item[ 'productUnitName' ]}</span>
												))}
											</td>
										</tr>
										</tbody>
									</table>
								</div>
							</div>

							<div className="bottom"
							     style={zipCodeMode ? { display: 'none' } : null}
							     ref={(c) => {this.bottom = c;}}>

								<button type="button"
								        className={`btn-${editMode ? 'gray' : 'blue'}-medium`}
								        disabled={editMode}
								        onClick={this.onClickClose}>확인
								</button>
							</div>
						</form>
					</div>

					<button type="button"
					        className="icon icon-close-w-1414 close"
					        onClick={this.onClickClose}/>
				</div>
			);
	}
}

const formName = 'layer-payment-information';

const mapStateToProps = (state, ownerProps) => {
	return {
		states: {
			...ownerProps.states,

			order: state.order
		},
		initialValues: {}
	};
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),

			handleRequestOrderPaymentOption: () => dispatch(ActionOrder.requestOrderPaymentOption()),
      handleCheckCjStrike: (zipCode,apiSn) => dispatch(ActionOrder.checkCjStrike(zipCode,apiSn)),

			handleRequestOrderHistoryByOrderCode: (orderCode) => dispatch(ActionOrderHistory.requestOrderHistoryByOrderCode(orderCode)),
			handleUpdateOrderHistoryDeliveryAddressByOrderCode: (orderCode, params) => dispatch(ActionOrderHistory.updateOrderHistoryDeliveryAddressByOrderCode(orderCode, params))
		}
	};
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName,
	enableReinitialize: true
})(PaymentInformation));
