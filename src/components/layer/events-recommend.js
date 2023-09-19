

import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, change } from 'redux-form';

import { LayerTypes } from 'constants/index';
import { getHeight } from 'utils/dom';
import { getDeepValue } from 'utils/json';
import { ActionEvents } from 'actions/index';

import * as Validate from 'utils/validate';

import { InputField } from 'components/common/fields';

class EventsRecommend extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickClose = this.onClickClose.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	onSubmit(values) {
		let { options, actions } = this.props;
		let { eventIdx, callback } = options;
		let { handleOpenAlertLayer, handleCloseContentsLayer, handleCreateEventsFriendByIdx } = actions;

		let { recommendUserId } = values;

		return handleCreateEventsFriendByIdx(eventIdx, { recommendUserId }).then(() => {
			handleOpenAlertLayer({
				description: '추천인 ID 등록이 완료되었습니다.',
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
				callback: () => {
					handleCloseContentsLayer();
				}
			})
		});
	}

	render() {
		let { states: { ui: { view: { height } } }, handleSubmit, valid, submitting } = this.props;

		let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
			? height - (50 + 60 + getHeight(this.bottom))
			: null;

		return (
			<div className={`events-recommend-layer-wrap popup`}>

				<div className="container">
					<form onSubmit={handleSubmit(this.onSubmit)}>
						<div className="top">
							<h2>추천인 ID 입력하기</h2>
						</div>

						<div className="middle"
						     style={{ height: middleHeight ? `${middleHeight}px` : '' }}>

							<div className="inner"
							     ref={(c) => {this.inner = c}}>

								<table frameBorder={0}>
									<colgroup>
										<col style={{ width: '120px' }}/>
										<col style={{ width: '320px' }}/>
									</colgroup>
									<tbody>
									<tr>
										<th>추천인 ID</th>
										<td className="form">
											<Field type="text"
											       name="recommendUserId"
											       className="box"
											       placeholder="이메일 (@을 포함한 이메일 주소 입력)"
											       component={InputField}
											       validate={[ Validate.required, Validate.email ]}/>
										</td>
									</tr>
									</tbody>
								</table>
							</div>

							<div className="notice">
								<p>가입일 기준 7일 내에 해당하는 경우에만 추천인 ID 입력이 가능합니다.</p>
							</div>
						</div>

						<div className="bottom"
						     ref={(c) => {this.bottom = c;}}>

							<button type="submit"
							        disabled={submitting}
							        className={`btn-${valid ? 'blue' : 'gray'}-medium`}>확인
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

const formName = 'layer-events-recommend';

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

			handleCreateEventsFriendByIdx: (eventIdx, formData) => dispatch(ActionEvents.createEventsFriendByIdx(eventIdx, formData))
		}
	};
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName
})(EventsRecommend));


