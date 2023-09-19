

import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { addDomain, goMemberDelivery } from 'utils/url';
import { setReviewNotificationHide } from 'utils/storage';

import { CheckBoxField } from 'components/common/fields';
import ThumbnailProduct from 'components/common/thumbnail-product';

class ReviewNotification extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickClose = this.onClickClose.bind(this);
		this.onClickGoDelivery = this.onClickGoDelivery.bind(this);
		this.onChangeHideToday = this.onChangeHideToday.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	onClickGoDelivery(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		goMemberDelivery();
		handleCloseContentsLayer();
	}

	onChangeHideToday(event, value) {
		setReviewNotificationHide(value ? 'Y' : 'N');
	}

	render() {
		let { states: { config: { url: { cdn: cdnUrl } } }, options } = this.props;

		return (
			<div className="review-notification-layer-wrap popup">
				<div className="container">
					<div className="top">
						<h2>리뷰 작성 안내</h2>
					</div>
					<div className="middle">
						<div className="left">
							{(React.cloneElement(<ThumbnailProduct/>, {
								imageUrl: addDomain(cdnUrl, options[ 'thumbnailImageUrl' ] || options[ 'templateThumbnailImageUrl' ]),
                paperCode: options[ 'paperCode' ],
								productCode: options[ 'productCode' ],
								frameCode: options[ 'frameCode' ],
								directionType: options[ 'thumbnailDirectionType' ],
								skinVersion: options[ 'skinVersion' ],
								type: 'defaults'
							}))}
						</div>
						<div className="right">
							<span className="title">
								<strong>{`${options[ 'userName' ]}`}</strong>님,<br/>
								주문하신 상품은 마음에 드셨나요?
							</span>

							<span className="sub-desc">
								고객님의 생생한 리뷰를 작성해주세요.<br/>
								<em>전 상품 할인 쿠폰</em>을 선물로 드립니다.
							</span>
						</div>
					</div>

					<div className="bottom">
						<span className="top">
							<button type="button" className="btn-white-medium" onClick={this.onClickClose}>취소</button>
							<button type="button" className="btn-blue-medium" onClick={this.onClickGoDelivery}>리뷰 쓰기</button>
						</span>

						<span className="bottom">
							<Field name="hideToday"
							       label="오늘 하루 그만 보기"
							       onChange={this.onChangeHideToday}
							       component={CheckBoxField}/>
						</span>
					</div>
				</div>
				<button className="icon icon-close-w-1414 close" onClick={this.onClickClose}/>
			</div>
		)
	}
}

const formName = 'layer-review-notification';

const mapStateToProps = (state, ownerProps) => {
	return {}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName
})(ReviewNotification));
