

import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { LayerTypes } from 'constants/index';
import { getDeepValue } from 'utils/json';
import * as Validate from 'utils/validate';
import { ActionSMS } from 'actions/index';

import { InputField } from 'components/common/fields';

class SMS extends React.Component {
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
		let { actions: { handleOpenAlertLayer, handleCloseContentsLayer, handleRequestSMSApp } } = this.props;

		let phoneNumber = values[ 'phoneNumbers' ].join('');

		return handleRequestSMSApp(phoneNumber).then(result => {
			handleOpenAlertLayer({
				description: '전송이 완료되었습니다.',
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

	render() {
		let { states: { currentForm }, handleSubmit, valid, submitting } = this.props;

		let syncErrors = getDeepValue(currentForm, 'syncErrors') || {};

		return (
			<div className="sms-layer-wrap popup">
				<div className="container">
					<form onSubmit={handleSubmit(this.onSubmit)}>
						<div className="top">
							<h2>휴대폰 번호 입력하기</h2>
						</div>

						<div className="middle">
							<div className="inner">
								<table border={0}>
									<colgroup>
										<col style={{ width: '120px' }}/>
										<col style={{ width: '320px' }}/>
									</colgroup>
									<tbody>
									<tr>
										<th>문자 전송</th>
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
								<p>[이용료 무료] 입력하신 번호는 저장되지 않습니다.</p>
							</div>
						</div>

						<div className="bottom">
							<button type="submit"
							        className={`btn-${valid ? 'blue' : 'gray'}-medium`}
							        disabled={submitting}>전송
							</button>
						</div>
					</form>
				</div>


				<button className="icon icon-close-w-1414 close"
				        type="button"
				        onClick={this.onClickClose}/>
			</div>
		);
	}
}

const formName = 'layer-sms';

const mapStateToProps = (state, ownerProps) => {
	return {
		states: {
			...ownerProps.states,

			currentForm: state.form[ formName ]
		},
		initialValues: {
			phoneNumbers: []
		}
	};
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleRequestSMSApp: (phoneNumber) => dispatch(ActionSMS.requestSMSApp(phoneNumber))
		}
	};
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName
})(SMS));