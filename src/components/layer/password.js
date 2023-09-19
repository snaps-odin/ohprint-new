

import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { ActionUser } from 'actions/index';
import { InputField } from 'components/common/fields';
import { breaklines } from 'utils/string';
import * as Validate from 'utils/validate';

import Attention from 'components/common/attention';

class Password extends React.Component {
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
		let { actions: { handleUpdateUserResetPassword, handleOpenAlertLayer } } = this.props;

		handleUpdateUserResetPassword(values).then(() => {
			handleOpenAlertLayer({
				description: `등록한 이메일 주소로<br/>임시 비밀번호가 발송되었습니다.<br/>로그인 후 비밀번호를 꼭 변경해 주세요.`
			});
		});
	}

	componentDidMount() {
		let { actions: { handleResetUserError } } = this.props;

		handleResetUserError();
	}

	render() {
		let { states: { user }, handleSubmit, valid, submitting } = this.props;

		return (
			<div className="password-layer-wrap">
				<div className="container">
					<form onSubmit={handleSubmit(this.onSubmit)}>
						<div className="top">
							<h1>비밀번호 찾기</h1>

							<Field name="userId"
							       type="text"
							       placeholder="이메일"
							       component={InputField}
							       validate={[ Validate.required, Validate.email ]}/>

							<Field name="userName"
							       type="text"
							       placeholder="이름"
							       component={InputField}
							       validate={[ Validate.required ]}/>

							{user[ 'fetchErrorMessage' ] && (
								<span className="error"
								      dangerouslySetInnerHTML={ { __html: breaklines(user[ 'fetchErrorMessage' ]) } }/>
							)}
						</div>
						<div className="middle">
							{React.cloneElement(<Attention/>, {
								value: {
									title: '<span>유의사항</span>',
									children: [
										{ value: '이메일 확인이 불가능한 경우, <em>고객센터(1577-4703)</em>로 연락 주시기 바랍니다.' },
										{ value: '회원님의 이메일 주소로 임시 비밀번호가 발송됩니다.' },
										{ value: '로그인 후 비밀번호를 꼭 변경해 주세요.' }
									]
								}
							})}
						</div>

						<div className="bottom">
							<button type="submit"
							        className={`btn-${valid ? 'blue' : 'gray'}-big`}
							        disabled={submitting}>임시비밀번호 전송하기
							</button>
						</div>
					</form>
				</div>
				<button type="button" className="icon-close-1414 close" onClick={this.onClickClose}/>
			</div>
		)
	}
}

const formName = 'layer-password';

const mapStateToProps = (state, ownerProps) => {
	return {
		states: {
			...ownerProps.states,

			user: state.user
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleResetUserError: () => dispatch(ActionUser.resetUserError()),
			handleUpdateUserResetPassword: (params) => dispatch(ActionUser.updateUserResetPassword(params))
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName
})(Password));