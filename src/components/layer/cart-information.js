

import React from 'react';
import { connect } from 'react-redux';

import { getHeight } from 'utils/dom';

import Attention from 'components/common/attention';
import { addCdn } from 'utils/url';

class CartInformation extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickClose = this.onClickClose.bind(this);
		this.onLoadImage = this.onLoadImage.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	onLoadImage(event) {
		let { actions: { handleUpdateLayer } } = this.props;

		handleUpdateLayer();
	}

	render() {
		let { states: { ui: { view: { height } } } } = this.props;

		let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
			? height - (50 + 60 + getHeight(this.bottom))
			: null;

		return (
			<div className="cart-information-layer-wrap popup">
				<div className="container">
					<div className="top" ref={(c) => {this.top = c}}>
						<h2>안내</h2>
					</div>

					<div className="middle" style={{ height: middleHeight ? `${middleHeight}px` : null }}>
						<div className="inner"
						     ref={(c) => {this.inner = c;}}>
							<div className="top">
								<h2>저장함 + 장바구니 통합<br/>필요한 기능은 여기에 다 있어요!</h2>
								<p>이제 <em className="blue">장바구니에서 수정부터 주문까지</em> 한 번에 관리하세요.</p>
							</div>

							<div className="middle">
								<img src={addCdn("/images/layer/cart-information/cart-img@2x.jpg")}
								     onLoad={this.onLoadImage} alt=""/>
							</div>

							<div className="bottom">
								{React.cloneElement(<Attention/>, {
									value: {
										children: [
											{ value: '기존 <em class="blue">저장함에 있던 상품</em>도 <em class="blue">모두 장바구니에 통합</em>되었어요.'},
											{ value: '내가 담은 모든 상품은 장바구니에서 <em class="blue">한번에 관리하고 바로 주문</em>하세요. ' },
											{ value: '디자인 이름이나 상품 옵션 등 <em class="blue">장바구니에서 모두 변경</em>할 수 있어요.' },
											{ value: '저장한 상품은 내가 직접 삭제할 때까지 자동 삭제되지 않아요. <em class="gray">(휴면계정은 별도 정책에 따름)</em>' }
										]
									}
								})}
							</div>
						</div>
					</div>

					<div className="bottom" ref={(c) => {this.bottom = c}}>
						<button type="button" className="btn-blue-medium" onClick={this.onClickClose}>확인</button>
					</div>
				</div>

				<button type="button"
				        className="icon icon-close-2222 close"
				        onClick={this.onClickClose}/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownerProps) => {

	return {
		states: {
			...ownerProps.states
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(CartInformation);
