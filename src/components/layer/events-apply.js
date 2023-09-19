

import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { PHONE_NUMBER } from 'configs/index';
import { LayerTypes } from 'constants/index';
import { ActionOrder } from 'actions/index';
import { getHeight } from 'utils/dom';
import { getDeepValue } from 'utils/json';
import * as Validate from 'utils/validate';
import * as Normalize from 'utils/normalize';
import { ActionEvents } from 'actions/index';

import { TextAreaField, CheckBoxField, SelectField, InputField } from 'components/common/fields';

class EventsApply extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			showType: null
		};

		this.onClickClose = this.onClickClose.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onClickPrivacy = this.onClickPrivacy.bind(this);
		this.onClickHidePolicy = this.onClickHidePolicy.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	onSubmit(values) {
		let { options, actions } = this.props;
		let { eventIdx, callback } = options;
		let { handleOpenAlertLayer, handleCloseContentsLayer, handleCreateEventsCommentsByIdx } = actions;

		let params = {
			'attribute06': values[ 'userName' ],
			'attribute08': values[ 'phone' ],
			'bbsContents': values[ 'contents' ],
			'attribute04': values[ 'school' ],
			'attribute07': values[ 'product' ]
		};

		return handleCreateEventsCommentsByIdx(eventIdx, params).then(result => {
			handleOpenAlertLayer({
				description: result[ 'message' ] || '응모가 완료되었습니다.',
				callback: () => {
					Promise.all([
						callback && callback()
					]).then(() => {
						handleCloseContentsLayer();
					});
				}
			});
		}).catch(error => {
			handleOpenAlertLayer({
				description: error,
				callback: () => { handleCloseContentsLayer(); }
			})
		});
	}

	onClickPrivacy(event) {
		this.changeShowType('privacy');
	}

	onClickHidePolicy(event) {
		this.changeShowType(null);
	}

	changeShowType(showType) {
		let { actions: { handleUpdateLayer } } = this.props;

		Promise.all([
			this.setState({ showType })
		]).then(() => {
			handleUpdateLayer();
		});
	}

	render() {
		let { options, states: { ui: { view: { height } }, currentForm }, handleSubmit, valid } = this.props;
		let { showType } = this.state;
		let { data: { title, width } } = options;

		let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
			? height - (50 + 60 + getHeight(this.bottom))
			: null;

		let syncErrors = getDeepValue(currentForm, 'syncErrors') || {};

		return (
			<div className={`events-apply-layer-wrap ${showType ? 'events-policy' : ''} popup`}
			     style={{ width: `${width}px` }}>

				<div className="container" style={showType ? { display: 'none', height: '0' } : null}>
					<form onSubmit={handleSubmit(this.onSubmit)}>
						<div className="top">
							<h2>{title}</h2>
						</div>

						<div className="middle" style={{ height: middleHeight ? `${middleHeight}px` : '' }}>
							<div className="inner" ref={(c) => {this.inner = c;}}>
								<table border={0}>
									<colgroup>
										<col style={{ width: '114px' }}/>
										<col style={{ width: '246px' }}/>
									</colgroup>
									<tbody>
									<tr>
										<th>이름 <em>*</em></th>
										<td>
											<Field name="userName"
											       className="box"
											       width={246}
											       maxLength={15}
											       placeholder="이름"
											       component={InputField}
											       validate={[ Validate.required ]}/>
										</td>
									</tr>
									<tr>
										<th>연락처 <em>*</em></th>
										<td>
											<Field type="text"
											       name="phone"
											       className="box"
											       placeholder="연락처를 입력해 주세요."
											       component={InputField}
											       validate={[ Validate.required, Validate.phoneNumber ]}/>
										</td>
									</tr>
									<tr>
										<th>학교/학과명 <em>*</em></th>
										<td>
											<Field name="school"
											       className="box"
											       width={246}
											       maxLength={15}
											       placeholder={`학교/학과명을 입력해 주세요.`}
											       component={InputField}/>
										</td>
									</tr>
									<tr>
										<th>필요 상품</th>
										<td>
											<Field name="product"
											       className="box"
											       width={246}
											       maxLength={15}
											       placeholder="필요 상품을 입력해 주세요."
											       component={InputField}/>
										</td>
									</tr>
									<tr>
										<th>응모 내용 <em>*</em></th>
										<td>
											<Field name="contents"
											       className="box"
											       placeholder="응모 내용을 입력해 주세요."
											       maxLength={500}
											       showLength={false}
											       component={TextAreaField}
											       validate={[ Validate.required, Validate.minLength20 ]}
											       normalize={Normalize.maxLength(500)}/>
										</td>
									</tr>
									</tbody>
								</table>

								<Field name="agreement"
								       label={(
									       <span className="desc">본 이벤트 참여를 위해&nbsp;
										       <button type="button" onClick={this.onClickPrivacy}>개인정보 수집 및 이용</button>에 대한
											       내용을 확인하고 동의합니다.
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


				{showType && (
					<div className="container">
						<form>
							<div className="top">
								<h2>개인정보 수집 및 제 3자 제공 이용 동의</h2>
							</div>

							<div className="middle">
								<section>
									<div>
										(주)스냅스 (오프린트미) 는 개인정보 관련 법률 (개인정보보호법, 정보통신망 이용촉진 및 정보보호에 관한 법률)을<br/>
										준수하며 수집된 개인 정보는 해당 서비스 외에 다른 용도로 절대 사용하지 않으며, 사용자 요청 시 바로 삭제할 수 있습니다.<br/>
									</div>
								</section>
								<section>
									<h1 id="section-1">1. 수집항목 및 이용목적</h1>
									<ul>
										<li>수집항목 : 이름, 연락처, 상호명, 주소</li>
										<li>이용목적 : 이벤트 당첨 시 경품 배송</li>
									</ul>
								</section>
								<section>
									<h1 id="section-2">2. 개인정보를 제공받는 자</h1>
									<ul>
										<li>㈜ 소셜엠씨</li>
									</ul>
								</section>
								<section>
									<h1 id="section-3">3. 보유 및 이용 기간</h1>
									<ul>
										<li>당첨자 발표 후 1개월 (이벤트 참여 고객 응대를 위함)</li>
									</ul>
								</section>
								<section>
									<div>
										귀하는 개인정보 제공에 동의하지 않으실 권리가 있습니다.<br/>
										단, 개인정보 제공에 동의하지 않을 경우 이벤트에 참여 하실 수 없습니다.<br/><br/>
										그 밖의 사항은 개인정보취급방침을 준수합니다.
									</div>
								</section>
							</div>

							<div className="bottom" ref={(c) => {this.bottom = c;}}>
								<button type="button"
								        className="btn-black-medium"
								        onClick={this.onClickHidePolicy}>확인
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

const formName = 'layer-events-apply';

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

			handleCreateEventsCommentsByIdx: (eventIdx, formData) => dispatch(ActionEvents.createEventsCommentsByIdx(eventIdx, formData))
		}
	};
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName
})(EventsApply));