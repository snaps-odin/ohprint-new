

import React from 'react';
import { connect } from 'react-redux';

import { ActionUser } from 'actions/index';

class Welcome extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickClose = this.onClickClose.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	componentDidMount() {
		let { actions: { handleRequestUserByToken } } = this.props;

		handleRequestUserByToken();
	}

	render() {
		let { states: { user: { userEmail, userName },isZeroDeal }, options: { isCouponIssue } } = this.props;

		return (
			<div className="welcome-layer-wrap">
				<div className="container">
					<div className="top">
						<h1 className="icon icon-logo-13341"/>

						오프린트미의 가족이 되신 것을<br/>
						진심으로 환영합니다!

            {!isZeroDeal && (isCouponIssue
              ? (<span>회원가입 감사의 선물로 쿠폰을 발급하였습니다.<br/>지금 쿠폰 함을 확인 해 보세요.</span>)
              : (<span>회원가입 감사쿠폰이 메일로 발송되었습니다.</span>))
            }
					</div>

					<div className="middle">
						<table border="0">
							<caption><span className="blind">환영합니다</span></caption>
							<colgroup>
								<col style={{ width: '75px' }}/>
								<col style={{ width: '285px' }}/>
							</colgroup>
							<tbody>
							<tr>
								<th>이메일</th>
								<td>{userEmail}</td>
							</tr>
							<tr>
								<th>이름</th>
								<td>{userName}</td>
							</tr>
							</tbody>
						</table>
					</div>

					<div className="bottom">
						<button onClick={this.onClickClose}>오프린트미 시작하기</button>
					</div>
				</div>

				<button type="button" className="icon-close-1414 close" onClick={this.onClickClose}/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownerProps) => {
	return {
		states: {
			...ownerProps.states,
			user: state.user,
      isZeroDeal: state.event.isZeroDeal
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,
			handleRequestUserByToken: () => dispatch(ActionUser.requestUserByToken())
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Welcome);
