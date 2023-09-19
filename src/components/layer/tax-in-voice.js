

import React from 'react';
import { connect } from 'react-redux';
import { change, Field, reduxForm } from 'redux-form';

import { ActionOrderHistory } from 'actions/index';
import { getHeight } from 'utils/dom';
import { toCash } from 'utils/format';
import { embedZipCode } from 'utils/daum';
import * as Validate from 'utils/validate';

import { CheckBoxField, RadioField, InputField, InputCalendarField, SelectField, TextAreaField } from 'components/common/fields';
import Attention from 'components/common/attention';

class TaxInVoice extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			data: null,
			zipCodeMode: false
		};

		this.existZipCode = false;

		this.field = 'edit';

		this.onClickClose = this.onClickClose.bind(this);
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
			handleChangeFormValue(`${field}.zipCode`, data[ 'zonecode' ]),
			handleChangeFormValue(`${field}.address1`, `${data[ 'userSelectedType' ].match(/R/i) ? data[ 'roadAddress' ] : data[ 'jibunAddress' ]} ${data[ 'buildingName' ] || ''}`),
			handleChangeFormValue(`${field}.address2`, null)
		]).then(() => {
			this.setState({ zipCodeMode: false })
		}).then(() => {
			handleUpdateLayer();
		});
	}

	onSubmit(values) {
		let { actions: { handleCreateOrderHistoryTaxInVoice, handleCloseContentsLayer, handleOpenAlertLayer } } = this.props;
		let { data } = this.state;

		let { edit } = values;

		let params = {
			orderCode: data[ 'orderCode' ],
			billProductName: data[ 'productName' ],
			amount: data[ 'settlementAmount' ],
			supplyAmount: data[ 'supplyAmount' ],
			vatAmount: data[ 'vatAmount' ],
			cutYN: edit[ 'cutYN' ] ? 'Y' : 'N',
			bizRegisterNumber: edit[ 'bizRegisterNumbers' ].join(''),
			corporationName: edit[ 'corporationName' ],
			ceoName: edit[ 'ceoName' ],
			bizStatus: edit[ 'bizStatus' ],
			bizType: edit[ 'bizType' ],
			addr1: edit[ 'address1' ],
			addr2: edit[ 'address2' ],
			demandBill: edit[ 'demandBill' ],
			publicationDate: edit[ 'publicationDate' ] ? edit[ 'publicationDate' ].replace(/\//g, '') : null,
			personName: null,
			personEmail: edit[ 'personEmail' ],
			personMobil: edit[ 'personCellPhoneNumbers' ].join(''),
			note: edit[ 'note' ]
		};

		handleCreateOrderHistoryTaxInVoice(params).then(() => {
			handleOpenAlertLayer({
				description: '세금계산서가 발급 신청되었습니다',
				callback: () => {
					handleCloseContentsLayer();
				}
			});
		}).catch(error => {
			handleOpenAlertLayer({
				description: error
			})
		});
	}

	componentDidMount() {
		let { actions: { handleRequestOrderHistoryTaxInVoiceByOrderCode, handleUpdateLayer, handleCloseContentsLayer, handleOpenAlertLayer }, options: { orderCode } } = this.props;

		handleRequestOrderHistoryTaxInVoiceByOrderCode(orderCode).then(result => {
			this.setState({ data: result });
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
		let { states: { ui: { view: { height } } }, handleSubmit, valid } = this.props;
		let { data, zipCodeMode } = this.state;

		let field = this.field;
		let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
			? height - (50 + 60 + getHeight(this.bottom))
			: null;

		return data &&
			(
				<div className={`tax-in-voice-layer-wrap popup ${zipCodeMode ? 'zipcode' : ''}`}>
					<div className="container">
						<form onSubmit={handleSubmit(this.onSubmit)}>
							<div className="top">
								<h2>세금계산서 발급 신청</h2>
							</div>

							<div className="middle" style={middleHeight ? { height: `${middleHeight}px` } : null}>
								<div className="inner" ref={(c) => {this.inner = c;}}>
									<div className="zipcode" style={!zipCodeMode ? { display: 'none' } : null}
									     ref={(c) => {this.zipcode = c;}}/>

									<table border={0} style={zipCodeMode ? { display: 'none' } : null}>
										<caption><span className="blind">세금계산서</span></caption>
										<colgroup>
											<col style={{ width: '160px' }}/>
											<col style={{ width: '230px' }}/>
											<col style={{ width: '160px' }}/>
											<col style={{ width: '230px' }}/>
										</colgroup>
										<tbody>
										<tr>
											<th>품목</th>
											<td colSpan={3}>{data[ 'productName' ]}</td>
										</tr>
										<tr>
											<th>합계금액</th>
											<td colSpan={2}>
												<em>{toCash(data[ 'settlementAmount' ])}원</em>
											</td>
											<td className="check">
											<span>
												<Field name={`${field}.cutYN`}
												       label="원단위 절사"
												       component={CheckBoxField}/>
											</span>
											</td>
										</tr>
										<tr>
											<th>공급가액</th>
											<td>{toCash(data[ 'supplyAmount' ])}원</td>
											<th>세액</th>
											<td>{toCash(data[ 'vatAmount' ])}원</td>
										</tr>
										</tbody>
									</table>

									<table border={0} style={zipCodeMode ? { display: 'none' } : null}>
										<caption><span className="blind">세금계산서</span></caption>
										<colgroup>
											<col style={{ width: '160px' }}/>
											<col style={{ width: '230px' }}/>
											<col style={{ width: '160px' }}/>
											<col style={{ width: '230px' }}/>
										</colgroup>
										<tbody className="style">
										<tr>
											<th>사업자 등록번호<span>*</span></th>
											<td colSpan={3}>
												{[ 3, 2, 5 ].reduce((target, item, index) => {
													index > 0 && target.push(<span>-</span>);

													target.push(<Field name={`${field}.bizRegisterNumbers[${index}]`}
													                   className="box small"
													                   maxLength={item}
													                   component={InputField}
													                   validate={[ Validate.required, Validate[ `shortMinLength${item}` ], Validate.number ]}/>);

													return target;
												}, [])}
											</td>
										</tr>
										<tr>
											<th>상호<span>*</span></th>
											<td>
												<Field name={`${field}.corporationName`}
												       className="box medium"
												       component={InputField}
												       validate={[ Validate.required ]}/>
											</td>
											<th>대표자<span>*</span></th>
											<td>
												<Field name={`${field}.ceoName`}
												       className="box medium"
												       component={InputField}
												       validate={[ Validate.required ]}/>
											</td>
										</tr>
										<tr>
											<th>업태</th>
											<td>
												<Field name={`${field}.bizStatus`}
												       className="box medium"
												       component={InputField}/>
											</td>
											<th>종목</th>
											<td>
												<Field name={`${field}.bizType`}
												       className="box medium"
												       component={InputField}/>
											</td>
										</tr>
										<tr>
											<th>사업장 주소<span>*</span></th>
											<td colSpan={3} className="address">
											<span className="fields">
												<Field name={`${field}.zipCode`}
												       className="box medium"
												       readOnly={true}
												       component={InputField}
												       validate={[ Validate.required ]}/>

											<button type="button"
											        className="btn-white-small"
											        onClick={this.onClickZipCode}>우편번호 조회
											</button>

											<Field name={`${field}.address1`}
											       className="box large"
											       readOnly={true}
											       component={InputField}
											       validate={[ Validate.required ]}/>

											<Field name={`${field}.address2`}
											       className="box large"
											       placeholder="상세주소"
											       component={InputField}
											       validate={[ Validate.required ]}/>
											</span>
											</td>
										</tr>
										<tr>
											<th>발행 구분<span>*</span></th>
											<td colSpan={3}>
												{[ { label: '영수', value: '2' }, { label: '청구', value: '1' } ].map(item => (
													<Field name={`${field}.demandBill`}
													       label={item[ 'label' ]}
													       keyValue={item[ 'value' ]}
													       component={RadioField}/>
												))}
											</td>
										</tr>
										<tr>
											<th>발행 요청일<span>*</span></th>
											<td colSpan={3}>
												<Field name={`${field}.publicationDate`}
												       component={InputCalendarField}
                               validate={[ Validate.required ]}
                        />
											</td>
										</tr>
										</tbody>
									</table>

									<table border={0} style={zipCodeMode ? { display: 'none' } : null}>
										<caption><span className="blind">세금계산서</span></caption>
										<colgroup>
											<col style={{ width: '160px' }}/>
											<col style={{ width: '230px' }}/>
											<col style={{ width: '160px' }}/>
											<col style={{ width: '230px' }}/>
										</colgroup>
										<tbody className="style">
										<tr>
											<th>담당자 이메일<span>*</span></th>
											<td>
												<Field name={`${field}.personEmail`}
												       className="box medium"
												       component={InputField}
												       validate={[ Validate.required, Validate.email ]}/>
											</td>
											<th>담당자 연락처<span>*</span></th>
											<td>
												<Field name={`${field}.personCellPhoneNumbers[0]`}
												       className="box small"
												       maxLength={3}
												       component={InputField}
												       validate={[ Validate.required, Validate.shortMinLength2, Validate.number ]}/>

												<span>-</span>

												<Field name={`${field}.personCellPhoneNumbers[1]`}
												       className="box small"
												       maxLength={4}
												       component={InputField}
												       validate={[ Validate.required, Validate.shortMinLength3, Validate.number ]}/>

												<span>-</span>

												<Field name={`${field}.personCellPhoneNumbers[2]`}
												       className="box small"
												       maxLength={4}
												       component={InputField}
												       validate={[ Validate.required, Validate.shortMinLength4, Validate.number ]}/>
											</td>
										</tr>
										<tr>
											<th>추가 요청사항</th>
											<td colSpan={3}>
												<Field name={`${field}.note`}
												       className="box"
												       component={TextAreaField}/>
											</td>
										</tr>
										</tbody>
									</table>

									<div style={zipCodeMode ? { display: 'none' } : null}>
										{React.cloneElement(<Attention/>, {
											value: {
												title: '<span>유의사항</span>',
												children: [
													{ value: '세금계산서는 입금 완료 후 익월 5일까지만 발행이 가능합니다.(6일 이후부터는 발행 불가)' }
												]
											}
										})}
									</div>
								</div>
							</div>

							<div className="bottom" style={zipCodeMode ? { display: 'none' } : null} ref={(c) => {this.bottom = c;}}>
								<button type="button"
								        className="btn-white-medium"
								        onClick={this.onClickClose}>취소
								</button>

								<button type="submit"
								        className={`btn-${valid ? 'blue' : 'gray'}-medium`}>신청
								</button>
							</div>
						</form>
					</div>

					<button type="button"
					        className="icon icon-close-w-1414 close"
					        onClick={this.onClickClose}/>
				</div>
			)
	}
}

const formName = 'layer-tax-in-voice';

const mapStateToProps = (state, ownerProps) => {
	return {
		states: {
			...ownerProps.states
		},
		initialValues: {
			edit: {
				bizRegisterNumbers: [],
				personMobiles: [],
				demandBill: '2'
			}
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),

			handleRequestOrderHistoryTaxInVoiceByOrderCode: (orderCode) => dispatch(ActionOrderHistory.requestOrderHistoryTaxInVoiceByOrderCode(orderCode)),
			handleCreateOrderHistoryTaxInVoice: (params) => dispatch(ActionOrderHistory.createOrderHistoryTaxInVoice(params))
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName
})(TaxInVoice));
