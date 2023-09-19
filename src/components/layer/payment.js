

import React from 'react';
import { format } from 'url';
import {connect} from "react-redux";
import {withRouter} from "next/router";

import { openCenter } from 'utils/window';

import LoadingAnimation from 'components/common/loading-animation';

class Payment extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			ready: false
		};

		this.popup = null;

		this.interval = {
			id: null,
			sec: 500
		};

		this.onClickClose = this.onClickClose.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	checkExistPopup() {
		let { actions: { handleCloseContentsLayer } } = this.props;

		Promise.all([
			this.interval.id && window.clearInterval(this.interval.id)
		]).then(() => {
			(!this.popup || (this.popup && this.popup.closed))
				? handleCloseContentsLayer()
				: this.interval.id = window.setInterval(() => {this.checkExistPopup();}, this.interval.sec);
		});
	}

	closePopup() {
		this.popup && Promise.all([
			this.popup.focus()
		]).then(() => {
			this.popup.close();
		});
	}

	componentDidMount() {
		let { actions: { handleUpdateTransparentModeLayer, handleCloseContentsLayer, handleOpenAlertLayer }, options } = this.props;
		let { values: { methodName }, signature: { paymentUrl }, isTransparentMode } = options;

		let isNaverPay = (methodName || '').match(/NAVER_PAY/i);

		Promise.all([
			handleUpdateTransparentModeLayer(isTransparentMode)
		]).then(() => {
			window[ 'changePaymentStatus' ] = (type, messageCode) => {
				let message;

				switch (messageCode) {
					case 'userCancel':
						message = '결제를 취소하셨습니다.<br/>주문 내용 확인 후 다시 결제해주세요.';
						break;

					case 'ownerAuthFail':
						message = '타인 명의 카드는 결제가 불가능합니다.<br/>회원 본인 명의의 카드로 결제해주세요.';
						break;

					case 'paymentTimeExpire':
						message = '결제 가능한 시간이 지났습니다.<br/>주문 내용 확인 후 다시 결제해주세요.';
						break;
				}

				Promise.all([
					handleCloseContentsLayer()
				]).then(() => {
					message && handleOpenAlertLayer({
						description: message
					})
				}).then(() => {
					this.closePopup();
				});
			};
		}).then(() => {
			window.setTimeout(() => {this.setState({ ready: true });}, 500);
		}).then(() => {
			isNaverPay && (this.popup = openCenter(paymentUrl, 'oh-print-me-payment', 800, 1000));
		}).then(() => {
			(isNaverPay && !this.popup) && Promise.all([
				handleCloseContentsLayer()
			]).then(() => {
				handleOpenAlertLayer({
					description: '팝업이 차단되었습니다.<br/>팝업 허용후 다시 시도해 주세요.'
				});
			})
		}).then(() => {
			(isNaverPay && this.popup) && this.checkExistPopup();
		});
	}

	componentWillUnmount() {
		let { actions: { handleUpdateTransparentModeLayer } } = this.props;

		Promise.all([
			handleUpdateTransparentModeLayer(false)
		]).then(() => {
			this.closePopup();
		}).then(() => {
			delete window[ 'changePaymentStatus' ];
		});
	}

	render() {
		let { options: { values, signature, isCard, isTransparentMode } } = this.props;
		let { methodName } = values;
		let { paymentUrl } = signature;
		let { ready } = this.state;

		let isNaverPay = (methodName || '').match(/NAVER_PAY/);
		let isKakaoPay = (methodName || '').match(/KAKAO_PAY/);
		let isToss = (methodName || '').match(/TOSS/i);
		let params = Object.assign(signature, values);

		return (
			<div className={`payment-layer-wrap popup ${(isKakaoPay || isToss) ? 'small' : ''}`}>
				<div className="container">

					{!isTransparentMode && (
						<div className="top">
							<h2>결제</h2>
						</div>
					)}

					<div className="middle">
						{(ready && !isNaverPay) && (
							<iframe src={(isKakaoPay || isToss) ? paymentUrl : `/payment/open${format({ query: params })}`}
							        style={(!isCard && isTransparentMode) ? { width: 0, height: 0 } : null}
							        frameBorder={0}
							        scrolling="no"/>
						)}

						{(!isCard && isTransparentMode) && (
							<div>
								<LoadingAnimation isBig={true}/>
							</div>
						)}
					</div>
				</div>

				{!isTransparentMode && (
					<button type="button"
					        className="icon icon-close-w-1414 close"
					        onClick={this.onClickClose}/>
				)}
			</div>
		)
	}
}

const mapStateToProps = (state, ownerProps) => {
	return {
		states: {
			...ownerProps.states,
		},
	};
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,
		}
	};
};

module.exports = connect(mapStateToProps, mapDispatchToProps)((withRouter(Payment)));