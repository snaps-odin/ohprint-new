

import React from 'react';
import { connect } from 'react-redux';
import { change, Field, reduxForm } from 'redux-form';

import { ActionOrder } from 'actions/index';
import { getHeight } from 'utils/dom';
import { toDate } from 'utils/format';

import { RadioField } from 'components/common/fields';

class DeliveryCoupon extends React.Component {
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
		let { states: { order: { deliveryCoupons } }, actions: { handleCloseContentsLayer }, options: { callback } } = this.props;
		let { deliveryCouponCode } = values;

		let useLimitAmount = (deliveryCoupons.find(coupon => coupon[ 'couponCode' ] === deliveryCouponCode) || {})[ 'useLimitAmount' ];

		Promise.all([
			callback(deliveryCouponCode, useLimitAmount)
		]).then(() => {
			handleCloseContentsLayer();
		});
	}

	componentDidMount() {
		let { actions: { handleChangeFormValue }, options: { deliveryCouponCode } } = this.props;

		handleChangeFormValue('deliveryCouponCode', deliveryCouponCode);
	}

	render() {
		let { states: { ui: { view: { height } }, order: { deliveryCoupons } }, handleSubmit, options: { sellPrice } } = this.props;

		let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
			? height - (50 + 60 + getHeight(this.bottom))
			: null;

		return (
			<div className="delivery-coupon-layer-wrap popup">
				<div className="container">
					<form onSubmit={handleSubmit(this.onSubmit)}>
						<div className="top">
							<h2>배송 쿠폰 선택</h2>
						</div>

						<div className="middle"
						     style={middleHeight ? { height: `${middleHeight}px` } : null}>

							<div className="inner"
							     ref={(c) => {this.inner = c;}}>

								<div className="title">
									<h3>무료 배송 쿠폰</h3>
								</div>

								<ul>
									{[
										{ couponCode: '', couponDescription: '적용안함' }
									].concat(deliveryCoupons).reduce((target, coupon, index) => {
										(
											index === 0
											|| sellPrice >= coupon[ 'useLimitAmount' ]
										) && target.push(
											<li>
												<span className="left">
													<Field name="deliveryCouponCode"
													       label={coupon[ 'couponDescription' ]}
													       keyValue={coupon[ 'couponCode' ]}
													       component={RadioField}/>
												</span>

												{coupon[ 'expirationDate' ] && (
													<span className="right">
														<span className="date">~ {toDate(coupon[ 'expirationDate' ], 'YYYY.MM.DD')}</span>
													</span>
												)}
											</li>
										);

										return target;
									}, [])}
								</ul>

								<p>배송 쿠폰은 중복 사용이 불가합니다.</p>
							</div>
						</div>

						<div className="bottom"
						     ref={(c) => {this.bottom = c;}}>

							<button type="button"
							        className="btn-white-medium"
							        onClick={this.onClickClose}>취소
							</button>

							<button type="submit"
							        className="btn-blue-medium">쿠폰 적용
							</button>
						</div>
					</form>
				</div>

				<button className="icon icon-close-w-1414 close"
				        type="button"
				        onClick={this.onClickClose}/>
			</div>
		)
	}
}

const formName = 'layer-delivery-coupon';

const mapStateToProps = (state, ownerProps) => {
	let { order } = state;

	return {
		states: {
			...ownerProps.states,

			order,
			currentForm: state.form[ formName ]
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value))
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName,
	enableReinitialize: true
})(DeliveryCoupon));