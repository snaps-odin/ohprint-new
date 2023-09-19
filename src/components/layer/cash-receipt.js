

import React from 'react';
import { connect } from 'react-redux';
import { change, Field, reduxForm } from 'redux-form';

import { ActionOrderHistory } from 'actions/index';
import { getHeight } from 'utils/dom';
import { toCash } from 'utils/format';
import { getDeepValue } from 'utils/json';
import * as Validate from 'utils/validate';

import { InputField, SelectField, RadioField } from 'components/common/fields';
import Attention from 'components/common/attention';

class CashReceipt extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			data: null,
			ready: false
		};

		this.field = 'edit';

		this.fields = [
			[
				[ { minLength: 2, maxLength: 3 },
					{ minLength: 3, maxLength: 4 },
					{ minLength: 4, maxLength: 4 }
				],
				[
					{ minLength: 6, maxLength: 6 },
					{ minLength: 7, maxLength: 7 }
				],
				[
					{ minLength: 4, maxLength: 4 },
					{ minLength: 4, maxLength: 4 },
					{ minLength: 4, maxLength: 4 },
					{ minLength: 4, maxLength: 4 }
				]
			],
			[
				[
					{ minLength: 3, maxLength: 3 },
					{ minLength: 2, maxLength: 2 },
					{ minLength: 5, maxLength: 5 }
				]
			]
		];

		this.onClickClose = this.onClickClose.bind(this);
		this.onChangeRegisterField = this.onChangeRegisterField.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	onChangeRegisterField(event, value) {
		let { actions: { handleChangeFormValue }, untouch } = this.props;

		let field = this.field;

		Promise.all([
			handleChangeFormValue(`${field}.registerNumbers`, null)
		]).then(() => {
			new Array(4).fill(true).map((item, index) => untouch(`${field}.registerNumbers[${index}]`));
		});
	}

	onSubmit(values) {
		let { actions, options: { orderCode } } = this.props;
		let { handleCreateOrderHistoryCashReceiptByOrderCode, handleCloseContentsLayer, handleOpenAlertLayer } = actions;

		let { edit } = values;

		let params = {
			orderName: edit[ 'orderName' ],
			orderEmail: edit[ 'orderEmail' ],
			orderPhone: edit[ 'orderCellPhoneNumbers' ].join(''),
			useIssue: edit[ 'useIssue' ],
			registerNumber: edit[ 'registerNumbers' ].join('')
		};

		handleCreateOrderHistoryCashReceiptByOrderCode(orderCode, params).then(() => {
			handleCloseContentsLayer();
		}).catch(error => {
			handleOpenAlertLayer({
				description: error
			});
		});
	}

	componentDidMount() {
		let { actions: { handleRequestOrderHistoryCashReceiptByOrderCode, handleOpenAlertLayer, handleCloseContentsLayer }, options: { orderCode } } = this.props;

		handleRequestOrderHistoryCashReceiptByOrderCode(orderCode).then(result => {
			let { settlementAmount } = result;

			settlementAmount > 0
				? this.setState({ data: result, ready: true })
				: handleOpenAlertLayer({
					description: '현금영수증 신청대상금액이 0원입니다.',
					callback: () => {
						handleCloseContentsLayer();
					}
				});
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
		let { states: { ui: { view: { height } }, currentForm }, handleSubmit, valid } = this.props;
		let { data, ready } = this.state;

		let field = this.field;
		let edit = getDeepValue(currentForm, 'values.edit');

		let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
			? height - (50 + 60 + getHeight(this.bottom))
			: null;

		return ready && (
				<div className="cash-receipt-layer-wrap popup">
					<div className="container">
						<form onSubmit={handleSubmit(this.onSubmit)}>
							<div className="top">
								<h2>현금영수증 발행요청</h2>
							</div>

							<div className="middle" style={middleHeight ? { height: `${middleHeight}px` } : null}>
								<div className="inner" ref={(c) => {this.inner = c;}}>
									<table border={0}>
										<caption><span className="blind">현금영수증</span></caption>
										<colgroup>
											<col style={{ width: '120px' }}/>
											<col style={{ width: '320px' }}/>
										</colgroup>
										<tbody>
										<tr>
											<th>상품명</th>
											<td>{data[ 'productName' ]}</td>
										</tr>
										<tr>
											<th>발급대상금액</th>
											<td>
												<em>{toCash(data[ 'settlementAmount' ])}원</em>
											</td>
										</tr>
										<tr>
											<th>공급가액</th>
											<td>{toCash(data[ 'supplyAmount' ])}원</td>
										</tr>
										<tr>
											<th>부가세</th>
											<td>{toCash(data[ 'vatAmount' ])}원</td>
										</tr>
										<tr>
											<th>구매자명</th>
											<td>
												<Field name={`${field}.orderName`}
												       className="box large"
												       component={InputField}
												       validate={[ Validate.required ]}/>
											</td>
										</tr>
										<tr>
											<th>전자우편</th>
											<td>
												<Field name={`${field}.orderEmail`}
												       className="box large"
												       component={InputField}
												       validate={[ Validate.required, Validate.email ]}/>
											</td>
										</tr>
										<tr>
											<th>연락처</th>
											<td className="numbers">
												<Field name={`${field}.orderCellPhoneNumbers[0]`}
												       className="box small"
												       maxLength={3}
												       component={InputField}
												       validate={[ Validate.required, Validate.shortMinLength2, Validate.number ]}/>

												<span>-</span>

												<Field name={`${field}.orderCellPhoneNumbers[1]`}
												       className="box small"
												       maxLength={4}
												       component={InputField}
												       validate={[ Validate.required, Validate.shortMinLength3, Validate.number ]}/>

												<span>-</span>

												<Field name={`${field}.orderCellPhoneNumbers[2]`}
												       className="box small"
												       maxLength={4}
												       component={InputField}
												       validate={[ Validate.required, Validate.shortMinLength4, Validate.number ]}/>
											</td>
										</tr>
										<tr>
											<th>발행용도<span>*</span></th>
											<td>
												{[
													{ label: '소득공제용', value: '0' },
													{ label: '지출증빙용', value: '1' }
												].map(item => (
													<Field name={`${field}.useIssue`}
													       label={item[ 'label' ]}
													       keyValue={item[ 'value' ]}
													       onChange={this.onChangeRegisterField}
													       component={RadioField}/>
												))}
											</td>
										</tr>
										<tr>
											<th>발행번호</th>
											<td className="numbers">
										<span className="title">
											{!edit || edit[ 'useIssue' ] === '0'
												? (
													<Field name={`${field}.registerType`}
													       className="box"
													       width={102}
													       placeholder="선택"
													       options={[
														       { label: '휴대전화', value: 0 },
														       { label: '주민등록번호', value: 1 },
														       { label: '카드번호', value: 2 }
													       ]}
													       onChange={this.onChangeRegisterField}
													       component={SelectField}/>
												)
												: (
													<span>사업자등록번호</span>
												)
											}
										</span>

												{(edit
														? this.fields[ edit[ 'useIssue' ] ][ edit[ 'useIssue' ] === '1' ? 0 : edit[ 'registerType' ] ]
														: []
												).reduce((target, item, index, array) => {
													let { minLength, maxLength } = item;

													let className = '';

													switch (array.length) {
														case 4:
															className = 'small2';
															break;

														case 2:
															className = 'medium';
															break;

														default:
															className = 'small';
															break;
													}

													index !== 0 && target.push(<span>-</span>);

													target.push(React.cloneElement(<Field/>, {
														name: `${field}.registerNumbers[${index}]`,
														className: `box ${className}`,
														minLength: minLength,
														maxLength: maxLength,
														component: InputField,
														validate: [ Validate.required, Validate.number ].concat(minLength ? [ Validate[ `shortMinLength${minLength}` ] ] : [])
													}));

													return target;
												}, [])}
											</td>
										</tr>
										</tbody>
									</table>

									{React.cloneElement(<Attention/>, {
										value: {
											title: '<span>유의사항</span>',
											children: [
												{ value: '현금영수증은 입금 완료 후 당 월까지만 발행이 가능합니다.' }
											]
										}
									})}
								</div>
							</div>

							<div className="bottom" ref={(c) => {this.bottom = c;}}>
								<button type="button"
								        className="btn-white-medium"
								        onClick={this.onClickClose}>취소
								</button>

								<button type="submit"
								        className={`btn-${valid ? 'blue' : 'gray'}-medium`}>발행
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

const formName = 'layer-cash-receipt';

const mapStateToProps = (state, ownerProps) => {
	return {
		states: {
			...ownerProps.states,

			currentForm: state.form[ formName ]
		},
		initialValues: {
			edit: {
				useIssue: '0',
				registerType: '0'
			}
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),

			handleRequestOrderHistoryCashReceiptByOrderCode: (orderCode) => dispatch(ActionOrderHistory.requestOrderHistoryCashReceiptByOrderCode(orderCode)),
			handleCreateOrderHistoryCashReceiptByOrderCode: (orderCode, params) => dispatch(ActionOrderHistory.createOrderHistoryCashReceiptByOrderCode(orderCode, params))
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName
})(CashReceipt));