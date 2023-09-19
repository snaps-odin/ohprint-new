

import React from 'react';

class PolicyNotification extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickClose = this.onClickClose.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	render() {
		return (
			<div className="policy-notification-layer-wrap popup">
				<div className="container">
					<div className="top">
						<h2>오프린트미 안내</h2>
					</div>
					<div className="middle">
						<div className="inner">
							<div className="top">
								<h3>서비스 개선 작업 안내</h3>
								<p>
                  안녕하세요. <em>오프린트미</em> 입니다.<br/>
                  항상 오프린트미를 믿고 이용해 주시는 고객님께 깊은 감사를 전합니다.<br/>
                  DB 성능 개선 작업에 따라<br/>아래 작업시간 동안 전체 웹 사이트 및 서비스 이용이 <em className="red">일시 중단</em>됩니다.
								</p>
							</div>
							<div className="bottom">
                <div>
                  <em>서비스 중단 일시</em><br/>
                  <dl>
                    <dd>2021년 04월 22일 (화) 03:00 ~ 05:00</dd>
                  </dl>
                </div>

							</div>
						</div>
					</div>

					<div className="bottom">
						<button type="button" className="btn-blue-medium" onClick={this.onClickClose}>확인</button>
					</div>
				</div>

				<button type="button" className="icon-close-w-1414 close" onClick={this.onClickClose}/>
			</div>
		)
	}
}

module.exports = PolicyNotification;
