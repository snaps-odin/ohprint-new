

import React from 'react';
import { connect } from 'react-redux';
import { change, Field, reduxForm } from 'redux-form';

import { LayerTypes } from 'constants/index';
import { ActionOrder, ActionOrderHistory, ActionPayment } from 'actions/index';
import { getHeight } from 'utils/dom';
import { toCash, toDate, toPhoneNumber } from 'utils/format';
import { getDeepValue } from 'utils/json';
import * as Validate from 'utils/validate';

import { InputField, RadioField, CheckBoxField, SelectField } from 'components/common/fields';

class PaymentChange extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			data: null
		};

		this.field = 'edit';

		this.onClickClose = this.onClickClose.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	onSubmit(values) {
		let { states, actions } = this.props;
		let { order: { paymentMethods } } = states;
		let { handleCreatePaymentChangeSignature, handleGetOrderCreditCartByCode, handleOpenContentsLayer, handleOpenAlertLayer } = actions;
		let { edit: editValue } = values;

		let paymentCardMethodCode = paymentMethods.find(method => method[ 'keyName' ].match(/CREDIT_CARD/i))[ 'value' ];
		let paymentMethodName = paymentMethods.find(method => method[ 'value' ] === editValue[ 'paymentMethodCode' ])[ 'keyName' ];

		let params = {
			orderCode: editValue[ 'orderCode' ],
			settlementAmount: editValue[ 'settlementAmount' ],
			orderUserPhone: editValue[ 'orderUserPhones' ].join('-'),
			settlementMethod: editValue[ 'paymentMethodCode' ],
			cardTypeCode: paymentCardMethodCode.match(editValue[ 'paymentMethodCode' ]) ? editValue[ 'cardTypeCode' ] : null,
			cardQuota: paymentCardMethodCode.match(editValue[ 'paymentMethodCode' ]) ? editValue[ 'cardQuotaCode' ] : null
		};

		let rejectMessage = null;

		switch (paymentMethodName) {
			case 'CREDIT_CARD':
			case 'KAKAO_PAY':
			case 'PAYCO':
			case 'SSP_PAY':
				params[ 'settlementAmount' ] < 1000 && (rejectMessage = '신용카드 최소 결제금액 1000원');
				break;

			case 'NAVER_PAY':
				params[ 'settlementAmount' ] < 100 && (rejectMessage = '네이버페이 카드/계좌 간편결제 최소 결제금액 100원');
				break;
		}

		rejectMessage
			?
			handleOpenAlertLayer({
				description: rejectMessage
			})
			:
			handleCreatePaymentChangeSignature(params).then(result => {
				let cardTypeKeyName = params[ 'cardTypeCode' ] ? handleGetOrderCreditCartByCode(params[ 'cardTypeCode' ])[ 'keyName' ] : '';

				handleOpenContentsLayer(LayerTypes.PAYMENT, {
					values: {
						userNo: editValue[ 'userNo' ],
						userName: editValue[ 'orderUserName' ],
						userCellPhoneNumber: params[ 'orderUserPhone' ],
						userEmail: editValue[ 'orderUserEmail' ],
						title: editValue[ 'productName' ],
						methodName: paymentMethodName,
						cardTypeKeyName,
						cardTypeCode: params[ 'cardTypeCode' ],
						cardQuotaCode: params[ 'cardQuota' ],
						escrow: 'N',
						change: 'Y'
					},
					signature: result,
					isCard: !!paymentMethodName.match(/CREDIT_CARD/i),
					isTransparentMode: !!paymentMethodName.match(/CREDIT_CARD|NAVER_PAY|PAYCO|SSP_PAY/i) && !cardTypeKeyName.match(/KAKAOBANK/i)
				});
			}).catch(error => {
				handleOpenAlertLayer({
					description: error
				});
			});
	}

	componentDidUpdate(prevProps, prevState) {
		let { actions: { handleChangeFormValue } } = this.props;
		let { data: prevData } = prevState;
		let { data: currentData } = this.state;

		let field = this.field;

		!prevData && currentData && currentData[ 'settlementAmount' ] < 50000 && handleChangeFormValue(`${field}.cardQuotaCode`, '00');
	}

	componentDidMount() {
		let { states, actions, options: { orderCode } } = this.props;
		let { order: { paymentMethods } } = states;
		let { handleRequestOrderPaymentOption, handleRequestOrderHistorySimpleByOrderCode, handleChangeFormValue, handleUpdateLayer, handleCloseContentsLayer, handleOpenAlertLayer } = actions;

		let field = this.field;

		Promise.all([
			handleRequestOrderPaymentOption(),
			handleRequestOrderHistorySimpleByOrderCode(orderCode)
		]).then(results => {
			let data = results[ 1 ];

			handleChangeFormValue(field, Object.assign({}, data, {
				orderUserPhones: toPhoneNumber(data[ 'orderUserPhone' ]).split('-'),
				paymentMethodCode: paymentMethods.find(method => method[ 'keyName' ].match(/CREDIT_CARD/i))[ 'value' ]
			}));

			this.setState({ data });
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
		let { states: { ui: { view: { height } }, order: { paymentMethods, creditCards, creditCardQuotas }, currentForm }, handleSubmit, valid } = this.props;
		let { data } = this.state;

		let field = this.field;
		let currentPaymentMethodCode = getDeepValue(currentForm, `values.${field}.paymentMethodCode`);
		let paymentCardMethodCode = paymentMethods.find(method => method[ 'keyName' ].match(/CREDIT_CARD/i))[ 'value' ];
		let disableQuotas = data && data[ 'settlementAmount' ] < 50000;

		let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
			? height - (50 + 60 + getHeight(this.bottom))
			: null;

		return (
			<div className="payment-change-layer-wrap popup">
				<div className="container">
					<form onSubmit={handleSubmit(this.onSubmit)}>
						<div className="top">
							<h2>결제방법 변경</h2>
						</div>

						{data && (
							<div className="middle" style={middleHeight ? { height: `${middleHeight}px` } : null}>
								<div className="inner" ref={(c) => {this.inner = c;}}>
									<table frameBorder={0}>
										<caption><span className="blind">주문정보</span></caption>
										<colgroup>
											<col style={{ width: '120px' }}/>
											<col style={{ width: '320px' }}/>
										</colgroup>
										<thead>
										<tr>
											<td colSpan={2}>주문 정보</td>
										</tr>
										</thead>
										<tbody>
										<tr>
											<th>주문번호</th>
											<td>{data[ 'orderCode' ]}</td>
										</tr>
										<tr>
											<th>결제 금액</th>
											<td>
												<em>{toCash(data[ 'settlementAmount' ])}원</em>
											</td>
										</tr>
										<tr>
											<th>연락처</th>
											<td className="form">
												<Field name={`${field}.orderUserPhones[0]`}
												       className="box small"
												       maxLength={3}
												       component={InputField}
												       validate={[ Validate.required, Validate.shortMinLength2, Validate.number ]}/>

												<span>-</span>

												<Field name={`${field}.orderUserPhones[1]`}
												       className="box small"
												       maxLength={4}
												       component={InputField}
												       validate={[ Validate.required, Validate.shortMinLength3, Validate.number ]}/>

												<span>-</span>

												<Field name={`${field}.orderUserPhones[2]`}
												       className="box small"
												       maxLength={4}
												       component={InputField}
												       validate={[ Validate.required, Validate.shortMinLength4, Validate.number ]}/>
											</td>
										</tr>
										</tbody>
									</table>

									<table frameBorder={0}>
										<caption><span className="blind">결제수단</span></caption>
										<colgroup>
											<col style={{ width: '145px' }}/>
											<col style={{ width: '145px' }}/>
											<col style={{ width: '145px' }}/>
										</colgroup>
										<thead>
										<tr>
											<td colSpan={2}>
												결제 수단 선택
											</td>
										</tr>
										</thead>
										<tbody>
										{(paymentMethods || [])
											.filter(item => !item[ 'icon' ])
											.reduce((target, method) => {
												let { label, value, keyName } = method;

												!(keyName || '').match(/VIRTUAL_BANK|OHPRINT_MONEY/i) && target.push(
													<tr>
														<td className="form radio"
														    colSpan={keyName.match(/CREDIT_CARD/i) ? null : 3}>

															<Field name={`${field}.paymentMethodCode`}
															       label={label}
															       keyValue={value}
															       component={RadioField}/>
														</td>

														{keyName.match(/CREDIT_CARD/i) && (
															<td className="form select">
																<Field name={`${field}.cardTypeCode`}
																       className="box"
																       width={130}
																       height={138}
																       placeholder="카드사 선택"
																       options={creditCards}
																       component={SelectField}
																       validate={paymentCardMethodCode.match(currentPaymentMethodCode) ? [ Validate.required ] : null}/>
															</td>
														)}

														{keyName.match(/CREDIT_CARD/i) && (
															<td className="form select">
																<Field name={`${field}.cardQuotaCode`}
																       className="box"
																       width={130}
																       height={138}
																       placeholder="할부 선택"
																       disabled={disableQuotas}
																       options={creditCardQuotas}
																       component={SelectField}
																       validate={paymentCardMethodCode.match(currentPaymentMethodCode) ? [ Validate.required ] : null}/>
															</td>
														)}
													</tr>
												);

												return target;
											}, [])}

										{(paymentMethods || [])
											.filter(item => item[ 'icon' ])
											.reduce((target, method, index) => {
												let posIndex = Math.floor(index / 3);

												!target[ posIndex ] && (target[ posIndex ] = []);
												target[ posIndex ].push(method);

												return target;
											}, [])
											.reduce((target, methods) => {
												let total = methods.length;
												let colSpan = 3 - (total - 1);

												target.push(
													<tr>
														{methods.map((method, index) => {
															return (
																<td className="icon" colSpan={index === total - 1 ? Math.max(colSpan, 1) : null}>
																	<Field name={`${field}.paymentMethodCode`}
																	       label={(
																		       <span
																			       className={`icon icon-pay-${method[ 'keyName' ].toLowerCase().replace(/_/g, '-')}`}/>
																	       )}
																	       keyValue={method[ 'value' ]}
																	       component={RadioField}
																	       validate={[ Validate.required ]}/>
																</td>
															)
														})}
													</tr>
												);

												return target;
											}, [])}
										</tbody>
									</table>

									<Field name={`${field}.agreement`}
									       label="구매 진행 동의"
									       component={CheckBoxField}
									       validate={[ Validate.required ]}/>
								</div>
							</div>
						)}

						<div className="bottom" ref={(c) => {this.bottom = c;}}>
							<button type="submit"
							        className={`btn-${valid ? 'blue' : 'gray'}-medium`}>확인
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

const formName = 'layer-payment-change';

const mapStateToProps = (state, ownerProps) => {
	return {
		states: {
			...ownerProps.states,

			order: state.order,
			currentForm: state.form[ formName ]
		},
		initialValues: {}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),

			handleRequestOrderPaymentOption: () => dispatch(ActionOrder.requestOrderPaymentOption()),
			handleGetOrderCreditCartByCode: (code) => dispatch(ActionOrder.getOrderCreditCartByCode(code)),

			handleRequestOrderHistorySimpleByOrderCode: (orderCode) => dispatch(ActionOrderHistory.requestOrderHistorySimpleByOrderCode(orderCode)),

			handleCreatePaymentChangeSignature: (params) => dispatch(ActionPayment.createPaymentChangeSignature(params))
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName,
	enableReinitialize: true
})(PaymentChange));