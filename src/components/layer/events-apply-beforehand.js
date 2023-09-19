

import React from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';
import { Field, reduxForm, change } from 'redux-form';

import { PHONE_NUMBER } from 'configs/index';
import { LayerTypes } from 'constants/index';
import { getHeight } from 'utils/dom';
import { getDeepValue } from 'utils/json';
import { parseDateByTimestamp } from 'utils/date';
import * as Validate from 'utils/validate';
import { ActionEvents } from 'actions/index';

import { TextAreaField, CheckBoxField, SelectField, InputField } from 'components/common/fields';

class EventsApplyPre extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			showType: null,
			toDate: ''
		};

		this.onClickClose = this.onClickClose.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onClickPrivacy = this.onClickPrivacy.bind(this);
		this.onClickReceiveAlarm = this.onClickReceiveAlarm.bind(this);
		this.onClickHideAgreement = this.onClickHideAgreement.bind(this);
		this.onChangeSelectAll = this.onChangeSelectAll.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	onSubmit(values) {
		let { options, actions } = this.props;
		let { handleOpenAlertLayer, handleCloseContentsLayer, handleCreateEventsCommentsByIdx } = actions;

		let params = {
			'attribute03': values[ 'phoneNumbers' ].join('-'),
			'receiveSMSAgree' : true
		};

		return handleOpenAlertLayer({
			description: `입력하신 번호를 확인해주세요.<br/>${values[ 'phoneNumbers' ].join('-')}`,
			confirm: true,
			callback: (confirmed) => {
				confirmed && handleCreateEventsCommentsByIdx(10, params).then(result => {
					let message = result[ 'message' ] || '';
					message.match(/응모 완료/)
						?
						this.changeShowType('complete')
						:
						handleOpenAlertLayer({
							description: message,
							callback: () => {
								handleCloseContentsLayer();
							}
						});
				}).catch(error => {
					handleOpenAlertLayer({
						description: error,
						callback: () => {
							handleCloseContentsLayer();
						}
					})
				});

			}
		});
	}

	onClickPrivacy(event) {
		this.changeShowType('privacy');
	}

	onClickReceiveAlarm(event) {
		this.changeShowType('alarm');
	}

	onClickHideAgreement(event) {
		this.changeShowType(null);
	}

	onChangeSelectAll(event, bool) {
		let { actions: { handleChangeFormValue } } = this.props;

		handleChangeFormValue(`agreement-privacy`, bool);
		handleChangeFormValue(`agreement-alarm`, bool);
	}

	changeShowType(showType) {
		let { actions: { handleUpdateLayer } } = this.props;

		Promise.all([
			this.setState({ showType })
		]).then(() => {
			handleUpdateLayer();
		});
	}

	componentDidMount() {
		let date = parseDateByTimestamp();

		this.setState(update(this.state, {
			toDate: { $set: `${date[ 'YYYY' ]}년 ${date[ 'MM' ]}월 ${date[ 'DD' ]}일` }
		}));
	}

	render() {
		let { states: { ui: { view: { height } }, currentForm }, handleSubmit, valid } = this.props;
		let { showType, toDate } = this.state;

		let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
			? height - (50 + 60 + getHeight(this.bottom))
			: null;

		let syncErrors = getDeepValue(currentForm, 'syncErrors') || {};

		return (
			<div className={`events-apply-beforehand-layer-wrap popup`}>

				<div className="container" style={showType ? { display: 'none', height: '0' } : null}>
					<form onSubmit={handleSubmit(this.onSubmit)}>
						<div className="top">
							<h2>휴대폰 번호 입력하기</h2>
						</div>

						<div className="middle" style={{ height: middleHeight ? `${middleHeight}px` : '' }}>
							<div className="inner" ref={(c) => {this.inner = c;}}>
								<table border={0}>
									<colgroup>
										<col style={{ width: '120px' }}/>
										<col style={{ width: '320px' }}/>
									</colgroup>
									<tbody>
									<tr>
										<th>연락처</th>
										<td className="form">
											<Field name="phoneNumbers[0]"
											       className="box"
											       maxLength={3}
											       component={InputField}
											       validate={[ Validate.required, Validate.shortMinLength2, Validate.number ]}/>

											<span>-</span>

											<Field name="phoneNumbers[1]"
											       className="box"
											       maxLength={4}
											       component={InputField}
											       validate={[ Validate.required, Validate.shortMinLength3, Validate.number ]}/>

											<span>-</span>

											<Field name="phoneNumbers[2]"
											       className="box"
											       maxLength={4}
											       component={InputField}
											       validate={[ Validate.required, Validate.shortMinLength4, Validate.number ]}/>
										</td>
									</tr>
									</tbody>
								</table>

								<Field name="agreement-all"
								       label={'아래 내용을 확인하였으며, 모두 동의 합니다.'}
								       component={CheckBoxField}
								       onChange={this.onChangeSelectAll}/>

								<Field name="agreement-privacy"
								       label={(
									       <span className="desc">개인정보 수집 및 이용 동의
										       <button type="button" onClick={this.onClickPrivacy}>[자세히 보기]</button>
									       </span>
								       )}
								       component={CheckBoxField}
								       validate={[ Validate.required ]}/>
								<Field name="agreement-alarm"
								       label={(
									       <span className="desc">이벤트 및 프로모션 알림 수신 동의
										       <button type="button" onClick={this.onClickReceiveAlarm}>[자세히 보기]</button>
									       </span>
								       )}
								       component={CheckBoxField}
								       validate={[ Validate.required ]}/>
							</div>
						</div>

						<div className="bottom" ref={(c) => {this.bottom = c;}}>
							<button type="submit"
							        className={`btn-${valid ? 'blue' : 'gray'}-medium`}>완료
							</button>
						</div>
					</form>
				</div>


				{(showType || '').match(/privacy/) && (
					<div className="container">
						<form>
							<div className="top">
								<h2>개인정보 수집 및 제 3자 제공 이용 동의</h2>
							</div>

							<div className="middle">
								<div className="inner agreement">
									<h4>㈜스냅스는 다음과 같이 개인정보를 수집 및 이용하고 있습니다.</h4>
									<table>
										<colgroup>
											<col style={{ width: '170px' }}/>
											<col style={{ width: '100px' }}/>
											<col style={{ width: '170px' }}/>
										</colgroup>
										<tbody>
										<tr>
											<th>수집 및 이용 목적</th>
											<th>항목</th>
											<th>보유 및 이용 기간</th>
										</tr>
										<tr>
											<td>이벤트 및 프로모션 알림 전송</td>
											<td>휴대폰 번호</td>
											<td>수집일로부터 1년</td>
										</tr>
										</tbody>
									</table>

									<dl>
										<dd>동의를 거부할 경우 사전예약이 불가능 합니다.</dd>
										<dd>전송이력은 전송일로부터 6개월간 보관 할 수 있습니다.</dd>
									</dl>
								</div>
							</div>

							<div className="bottom" ref={(c) => {this.bottom = c;}}>
								<button type="button"
								        className="btn-blue-medium"
								        onClick={this.onClickHideAgreement}>확인
								</button>
							</div>
						</form>
					</div>
				)}

				{(showType || '').match(/alarm/) && (
					<div className="container">
						<form>
							<div className="top">
								<h2>이벤트 및 프로모션 알림 수신 동의</h2>
							</div>

							<div className="middle">
								<div className="inner">
									<em>
										㈜스냅스가 운영하는 오프린트미 인터넷 사이트를<br/>
										통하여 제공하는 모든 서비스 및 이벤트와 관련된<br/>
										프로모션 알림 수신에 동의합니다.
									</em>
								</div>
							</div>

							<div className="bottom" ref={(c) => {this.bottom = c;}}>
								<button type="button"
								        className="btn-blue-medium"
								        onClick={this.onClickHideAgreement}>확인
								</button>
							</div>
						</form>
					</div>
				)}

				{(showType || '').match(/complete/) && (
					<div className="container">
						<form>
							<div className="top">
								<h2>사전예약 신청 완료</h2>
							</div>

							<div className="middle">
								<div className="inner complete">
									<h3>사전예약 신청이 완료 되었습니다.</h3>
									<div>
										㈜스냅스 {toDate}<br/>
										이벤트 및 프로모션 알림 수신 동의가 처리되었습니다.<br/>
										5월 <em>신상품 ‘커스텀 티셔츠’</em> 출시 후<br/>
										<em>얼리버드 40% 할인 쿠폰이 문자</em>로 발송 됩니다.
									</div>
									<dl>
										<dd>광고문자 수신 동의 및 사전예약 신청 동의 철회를 원하실 경우,</dd>
										<dd>고객센터 1577-4703 으로 문의해주시기 바랍니다.</dd>
									</dl>
								</div>
							</div>

							<div className="bottom" ref={(c) => {this.bottom = c;}}>
								<button type="button"
								        className="btn-blue-medium"
								        onClick={this.onClickClose}>확인
								</button>
							</div>
						</form>
					</div>
				)}

				<button className="icon icon-close-w-1414 close"
				        type="button"
				        onClick={this.onClickClose}/>
			</div>
		);
	}
}

const formName = 'layer-events-apply-pre';

const mapStateToProps = (state, ownerProps) => {
	return {
		states: {
			...ownerProps.states,

			currentForm: state.form[ formName ]
		}
	};
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleCreateEventsCommentsByIdx: (eventIdx, formData) => dispatch(ActionEvents.createEventsCommentsByIdx(eventIdx, formData)),

			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value))
		}
	};
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName
})(EventsApplyPre));
