import React from 'react';
import { Field } from 'redux-form';

import { LayerTypes } from 'constants/index';
import { InputField } from 'components/common/fields';
import { getHeight } from 'utils/dom';
import { toCash, toNumberOnly } from 'utils/format';
import * as Normalize from 'utils/normalize';
import update from "react-addons-update";

export default class OrderDiscount extends React.Component {
	constructor(...args) {
		super(...args);

		this.field = 'discount';

		this.state = {
			isChecked : true
		}

		this.onClickFocus = this.onClickFocus.bind(this);
		this.onClickNextFocus = this.onClickNextFocus.bind(this);
		this.onClickCoupon = this.onClickCoupon.bind(this);
		this.onClickMoney = this.onClickMoney.bind(this);
		this.onBlurMoney = this.onBlurMoney.bind(this);
		this.onClickDeliveryCoupon = this.onClickDeliveryCoupon.bind(this);
	}

	onClickFocus(event) {
		let { actions: { handleFocusStep }, index } = this.props;

		handleFocusStep(index);
	}

	onClickNextFocus(event) {
		let { actions: { handleFocusStep }, index } = this.props;

		handleFocusStep(index + 1);
	}

	onClickCoupon(event) {
		let { states, actions } = this.props;
		let { currentForm: { values: { discount: { extraCouponCode }, total: { normalizeCoupons } } } } = states;
		let { handleOpenContentsLayer, handleChangeFormValue } = actions;

		let field = this.field;

		normalizeCoupons.length > 0 && handleOpenContentsLayer(LayerTypes.COUPON, {
			extraCouponCode,
			callback: (extraCouponCode, extraCouponDiscount, isChecked) => {



				Promise.all([
					handleChangeFormValue(`${field}.extraCouponCode`, extraCouponCode || null),
					handleChangeFormValue(`${field}.extraCouponDiscount`, extraCouponDiscount || 0),
					handleChangeFormValue(`${field}.useUserMoney`, 0)
				]).then(() => {
					handleChangeFormValue('payment.paymentMethodCode', null);
					this.setState( {isChecked: isChecked });
				});
			}
		});
	}

	onClickMoney(event) {
		let { actions: { handleChangeFormValue } } = this.props;

		let field = this.field;

		handleChangeFormValue(`${field}.useUserMoney`, this.getEnabledMaxUserMoney());
	}

	onBlurMoney(event, value) {
		let { actions: { handleChangeFormValue } } = this.props;

		toNumberOnly(value) <= this.getEnabledMaxUserMoney() && handleChangeFormValue('payment.paymentMethodCode', null);
	}

	onClickDeliveryCoupon(event) {
		let { states, actions } = this.props;
		let { currentForm: { values: { discount: { deliveryCouponCode }, total: { sellPrice } } } } = states;
		let { handleOpenContentsLayer, handleChangeFormValue } = actions;

		let field = this.field;

		handleOpenContentsLayer(LayerTypes.DELIVERY_COUPON, {
			deliveryCouponCode,
			sellPrice,
			callback: (deliveryCouponCode, deliveryCouponUseLimitAmount) => {
				Promise.all([
					handleChangeFormValue(`${field}.deliveryCouponCode`, deliveryCouponCode || null),
					handleChangeFormValue(`${field}.deliveryCouponUseLimitAmount`, deliveryCouponUseLimitAmount || null),
					handleChangeFormValue(`${field}.useUserMoney`, 0)
				]).then(() => {
					handleChangeFormValue('payment.paymentMethodCode', null);
				});
			}
		});
	}

	getEnabledMaxUserMoney() {
		let { states: { currentForm: { values: { discount, total } } } } = this.props;

		let settlePrice = total[ 'sellPrice' ] + total[ 'deliveryPrice' ];

		return settlePrice <= discount[ 'maxLimitUserMoney' ] ? settlePrice : discount[ 'maxLimitUserMoney' ];
	}

	showError() {}

	render() {
		let { states: { currentForm: { values: { discount, total }, syncErrors } }, active } = this.props;
		let { isChecked } = this.state;

		let field = this.field;
		let valid = !syncErrors || (syncErrors && !syncErrors[ field ]);
		let style = active ? { height: `${51 + getHeight(this.bottom) }px` } : null;

		let disableCoupon = total[ 'normalizeCoupons' ].length <= 0;
		let disableMoney = Number(total[ 'userMoney' ]) <= 0;
		let disableDeliveryCoupon = (discount[ 'deliveryCoupons' ] || []).length < 1 || (total[ 'sellDeliveryPrice' ] >= discount[ 'deliveryEnableLimitAmount' ]);


		return (
			<li className="order-discount-wrap" style={style}>
				<div className={`top ${active ? 'active' : ''}`} onClick={this.onClickFocus}>
					<span className={`title ${(active || valid) ? 'active' : ''}`}>할인 / 배송비</span>
					{!active && (
						<span className="notice">
							<em className="icon">{toCash(discount[ 'deliveryEnableLimitAmount' ])}원 이상 무료배송</em>
						</span>
					)}
					{!active && (<span className="icon"/>)}
					{!active && (
						<span className="desc">
							쿠폰 할인 <em>{discount[ 'sellDiscount' ]}원</em> / 머니 <em>{discount[ 'useUserMoney' ]}원</em> / 배송비 <em>{discount[ 'deliveryPrice' ] <= 0 ? '무료' : `${toCash(discount[ 'deliveryPrice' ])}원`}</em>
						</span>
					)}

					{(active && total[ 'sellDiscount' ] > 0 && isChecked) && (
						<span className="desc">
							<em className="icon">최대 할인 혜택을 받고 계십니다.(장바구니 쿠폰 제외)</em>
						</span>
					)}
				</div>

				<div className="bottom" ref={(c) => {this.bottom = c;}}>
					<table frameBorder={0}>
						<caption>
							<span className="blind">할인 / 배송비</span>
						</caption>
						<colgroup>
							<col style={{ width: '160px' }}/>
							<col style={{ width: '588px' }}/>
						</colgroup>
						<tbody>
						<tr>
							<th>할인 금액</th>
							<td>
								<Field name={`${field}.sellDiscount`}
								       className="box medium red"
								       disabled={disableCoupon}
								       readOnly={true}
								       component={InputField}/>
								<span className="unit">원</span>

								<button type="button"
								        className="btn-white-small"
								        disabled={disableCoupon}
								        onClick={this.onClickCoupon}>쿠폰 변경
								</button>

								<span>(사용 쿠폰 <em>{total[ 'usedCoupons' ]}장</em> / 사용 가능 쿠폰 <em>{(total[ 'normalizeCoupons' ] || []).length}장</em>)</span>
							</td>
						</tr>

						<tr>
							<th>머니</th>
							<td>
								<Field name={`${field}.useUserMoney`}
								       className="box medium red"
								       disabled={disableMoney}
								       onBlur={this.onBlurMoney}
								       component={InputField}
								       normalize={Normalize.underValue(this.getEnabledMaxUserMoney(), '- ')}/>
								<span className="unit">원</span>

								<button type="button"
								        className="btn-white-small"
								        disabled={disableMoney}
								        onClick={this.onClickMoney}>전액 사용
								</button>

								<span>(보유 머니 <em>{toCash(discount[ 'maxLimitUserMoney' ])}원</em>)</span>
							</td>
						</tr>

						<tr>
							<th>배송비</th>
							<td>
								<Field name={`${field}.deliveryPrice`}
								       className="box medium"
								       readOnly={true}
								       disabled={disableDeliveryCoupon}
								       component={InputField}/>
								<span className="unit">원</span>

								<button type="button"
								        className="btn-white-small"
								        disabled={disableDeliveryCoupon}
								        onClick={this.onClickDeliveryCoupon}>쿠폰 사용
								</button>
								<span>(사용 쿠폰 <em>{discount[ 'deliveryCouponCode' ] ? 1 : 0}장</em> / 사용 가능 쿠폰 <em>{(discount[ 'deliveryCoupons' ] || []).length}장</em>)</span>
							</td>
						</tr>
						</tbody>
					</table>

					<span className="notice">
						기본 배송비는 {toCash(discount[ 'deliveryEnableAmount' ])}원 이며, <em>총 결제 금액이 {toCash(discount[ 'deliveryEnableLimitAmount' ])}원 이상일 경우 무료배송입니다.</em>
					</span>

					<span className="btn">
							<button type="button"
							        className={`btn-${valid ? 'blue' : 'gray'}-medium`}
							        onClick={this.onClickNextFocus}>다음</button>
						</span>
				</div>
			</li>
		)
	}
}
