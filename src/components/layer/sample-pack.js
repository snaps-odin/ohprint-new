

import React from 'react';
import { connect } from 'react-redux';

import { LayerTypes } from 'constants/index';
import { ActionStore, ActionCommon } from 'actions/index';
import { goMemberCart, addCdn } from 'utils/url';
import { getHeight } from 'utils/dom';

import LoadingAnimation from 'components/common/loading-animation';

import {dataLayerSample_package2} from 'configs/google-analytics/ga'

class SamplePack extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickClose = this.onClickClose.bind(this);
		this.onClickAddToCart = this.onClickAddToCart.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer }, options } = this.props;
		let { callback } = options || {};

		callback && callback(false);
		handleCloseContentsLayer();
	}

	onClickAddToCart(event) {
		let { actions: { handleExecuteAfterUserLogin }, options } = this.props;
		let { useLoading } = options || {};

		handleExecuteAfterUserLogin().then(() => {
      dataLayerSample_package2();
			this.executeAddToCart();
		}).catch(error => {});
	}

	executeAddToCart() {
		let { actions: { handleCreateStoreCart, handleCloseContentsLayer, handleOpenAlertLayer }, options } = this.props;
		let { callback } = options || {};

		let params = {
			productCode: '999001000001',
			templateCode: '045021074349',
			quantity: 1
		};

		handleCreateStoreCart(params).then(result => {
			let { projectCode } = result;

			!callback ? goMemberCart() : callback(true, projectCode);
		}).then(() => {
			handleCloseContentsLayer()
		}).catch(error => {
			handleOpenAlertLayer({
				description: error
			})
		});
	}

	componentDidMount() {
		let { states: { user: { loggedIn } }, actions: { handleUpdateRoundModeLayer, handleOpenContentsLayer }, options } = this.props;
		let { useLoading } = options || {};

		useLoading && (
			loggedIn
				?
				Promise.all([
					handleUpdateRoundModeLayer(true)
				]).then(() => {
					this.executeAddToCart()
				})
				:
				handleOpenContentsLayer(LayerTypes.LOGIN, {
					redirect: () => {this.executeAddToCart()}
				})
		);
	}

	componentWillUnmount() {
		let { actions: { handleUpdateRoundModeLayer } } = this.props;

		handleUpdateRoundModeLayer(false);
	}

	render() {
		let { states: { ui: { view: { height } } }, options } = this.props;
		let { useLoading } = options || {};

		let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
			? height - (50 + 60 + getHeight(this.bottom))
			: null;

		return !useLoading
			?
			(
				<div className="sample-pack-layer-wrap popup">
					<div className="container">
						<div className="top">
							<h2>오프린트미 샘플 팩</h2>
						</div>
						<div className="middle" style={middleHeight ? { height: `${middleHeight}px` } : null}>
							<div className="inner" ref={(c) => {this.inner = c;}}>
								<div className="top">
									<img src={addCdn("/images/home/popup-img.jpg")}/>
								</div>

								<div className="middle">
									<h2>스페셜한 명함을 무료로 경험해 보세요.</h2>
									<span>(총 26종 구성)</span>
								</div>

								<div className="bottom">
									<ul>
										{[
											{ title: '사이즈', productNames: '표준, OPM, 정사각' },
											{ title: '용지', productNames: '소프트, 프리미엄 소프트, 프리미엄 매트, 오리지널, 럭스, 리넨, 펠트, 펄, 크라프트, 투명, 매트블랙, 리사이클' },
											{ title: '효과', productNames: `박 : 골드 유/무광, 실버 유/무광, 로즈골드, 홀로그램, 블랙, 블루<br/>형압 : 고정형, 자율형<br/>스코딕스 : 투명글로시, 골드, 실버, 홀로그램` }
										].reduce((target, item) => {
											target.push(
												<li>
													<span className="title">{item[ 'title' ]}</span>
													<span className={(item[ 'title' ] === "용지") ? `paperCustom`  : ``} dangerouslySetInnerHTML={ { __html: item[ 'productNames' ] } }/>

												</li>
											);

											return target;
										}, [])}
									</ul>
									<div>* 신청하신 샘플 팩은 무료 제공됩니다. (배송비 별도)</div>
								</div>
							</div>
						</div>

						<div className="bottom" ref={(c) => {this.bottom = c;}}>
							<button type="button" className="btn-blue-medium" onClick={this.onClickAddToCart}>샘플 팩 무료 구매하기</button>
						</div>
					</div>

					<button className="icon icon-close-w-1414 close" onClick={this.onClickClose}/>
				</div>
			)
			:
			(
				<div className="loading-layer-wrap">
					<div className="container">
						<LoadingAnimation isBig={true}/>
					</div>
				</div>
			)
	}
}

const mapStateToProps = (state, ownerProps) => {
	return {
		states: {
			...ownerProps.states,

			ui: state.ui,
			user: state.user
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleCreateStoreCart: (data) => dispatch(ActionStore.createStoreCart(data)),

			handleExecuteAfterUserLogin: () => dispatch(ActionCommon.executeAfterUserLogin())
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(SamplePack);
