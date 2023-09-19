

import React from 'react';
import { connect } from 'react-redux';
import { change, Field, reduxForm } from 'redux-form';

import { ActionOrder } from 'actions/index';
import { getHeight } from 'utils/dom';
import { toCash, toDate } from 'utils/format';
import { getDeepValue } from 'utils/json';

import { CheckBoxField, SelectField } from 'components/common/fields';
import update from "react-addons-update";

class Coupon extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			options: [],
			extraOptions: [],
			ready: false
		};

		this.onClickClose = this.onClickClose.bind(this);
		this.onChangeUseLowest = this.onChangeUseLowest.bind(this);
		this.onChangeCoupon = this.onChangeCoupon.bind(this);
		this.onChangeExtraCoupon = this.onChangeExtraCoupon.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	onChangeUseLowest(event, value) {

		value && this.executeLowestCoupons();
	}

	onChangeCoupon(productIndex, couponCode) {
		let { actions: { handleChangeFormValue } } = this.props;

		Promise.all([
			handleChangeFormValue(`extraCouponCode`, null)
		]).then(() => {
			this.updateCouponDiscount(productIndex, couponCode);
		});
	}

	onChangeExtraCoupon(couponCode) {
		let { states: { currentForm: { values: { extraCoupons } } } } = this.props;

		let extraCoupon = (extraCoupons || []).find(coupon => Object.is(coupon[ 'couponCode' ], couponCode));

		getDeepValue(extraCoupon, 'isUnique') && this.removeCoupons();
	}

	onSubmit(values) {
		let { actions: { handleUpdateOrderUseLowest, handleUpdateOrderProducts, handleCloseContentsLayer }, options: { callback } } = this.props;


		let { useLowest, products, extraCouponCode } = values;
		let { extraDiscount: extraCouponDiscount } = this.getTotalPrices();

		Promise.all([
			handleUpdateOrderUseLowest(useLowest || false),
			handleUpdateOrderProducts(products)
		]).then(() => {
			callback && callback(extraCouponCode, extraCouponDiscount, useLowest);
			handleCloseContentsLayer();
		});
	}

	executeLowestCoupons() {
		let { states: { currentForm: { values: { products, lowestDiscountCoupons } } }, actions: { handleChangeFormValue } } = this.props;

		lowestDiscountCoupons && Promise.all([
			products.map((product, index) => {
				handleChangeFormValue(`products[${index}].couponCode`, lowestDiscountCoupons[ 'useCouponCodes' ][ index ]);
				handleChangeFormValue(`products[${index}].couponDiscount`, lowestDiscountCoupons[ 'useDiscountAmounts' ][ index ]);
			}),
			handleChangeFormValue(`extraCouponCode`, null)
		]).then(() => {
			this.updateCouponOptions();
		});
	}

	removeCoupons() {
		let { states: { currentForm: { values: { products } } }, actions: { handleChangeFormValue } } = this.props;

		Promise.all([
			products.map((product, index) => {
				handleChangeFormValue(`products[${index}].couponCode`, null);
				handleChangeFormValue(`products[${index}].couponDiscount`, null);
			})
		]).then(() => {
			this.updateCouponOptions();
			this.updateUseLowest();
		});
	}

	updateCouponDiscount(productIndex, couponCode) {
		let { states: { currentForm: { values: { products, coupons } } }, actions: { handleChangeFormValue } } = this.props;

		let couponData = coupons[ productIndex ].find(coupon => coupon[ 'couponCode' ] === couponCode);
		let couponDiscount = null;

		if (couponData) {
			if (couponData[ 'isUnique' ]) {
				couponDiscount = couponData[ 'discount' ];
			} else {
				switch (couponData[ 'couponType' ]) {
					case 'AMOUNT_DISCOUNT':
						let usedCouponDiscount = products
							.filter((product, index) => productIndex !== index && product[ 'couponCode' ] === couponCode)
							.reduce((target, product) => {
								target -= product[ 'couponDiscount' ];
								target = Math.max(target, 0);

								return target;
							}, couponData[ 'maxLimitAmount' ]);

						couponDiscount = Math.min(couponData[ 'discount' ], usedCouponDiscount);
						break;

					case 'DISCOUNT_RATE':
						couponDiscount = couponData[ 'discount' ];
						break;
				}
			}
		}

		Promise.all([
			handleChangeFormValue(`products[${productIndex}].couponDiscount`, couponDiscount)
		]).then(() => {
			this.updateCouponOptions();
			this.updateUseLowest();
		});
	}

	updateCouponOptions() {
		let { states: { currentForm: { values: { products, coupons, extraCoupons } } } } = this.props;

		let { price, discount } = this.getTotalPrices();
		let sellPrice = price - discount;

		this.setState({
			options: (products || []).reduce((target, item, index) => {
				let { projectCode: productProjectCode, couponCode: productCouponCode } = item;

				target.push(coupons[ index ].reduce((subTarget, coupon) => {
					let { projectCode, couponType, couponCode, isUnique, maxLimitAmount } = coupon;

					let usedCouponDiscount = products
						.filter(product => product[ 'couponCode' ] === couponCode)
						.reduce((target, product) => {
							target += product[ 'projectCode' ] !== projectCode ? product[ 'couponDiscount' ] : 0;

							return target
						}, 0);

					(
						productCouponCode === couponCode ||
						(
							(
								isUnique
								&& !products.find(product => product[ 'projectCode' ] !== productProjectCode && product[ 'couponCode' ] === couponCode)
							) ||
							(
								!isUnique && (
									couponType.match(/DISCOUNT_RATE/) ||
									(
										couponType.match(/AMOUNT_DISCOUNT/) &&
										maxLimitAmount - usedCouponDiscount > 0
									)
								)
							)
						)
					) && subTarget.push({
						label: (
							<span>
								{coupon[ 'couponDescription' ]}{coupon[ 'expirationDate' ] ? ` ~ ${toDate(coupon[ 'expirationDate' ], 'YYYY/MM/DD')}` : ''}
								&nbsp;
								{/**<em>-{toCash((isUnique || couponType.match(/DISCOUNT_RATE/)) ? coupon[ 'discount' ] : (maxLimitAmount - usedCouponDiscount))}원</em>*/}
								<em> -{coupon[ 'discountText' ]}</em>
							</span>
						),
						value: couponCode
					});

					return subTarget;
				}, [ { label: '적용 안함', value: '' } ]));

				return target;
			}, []),
			extraOptions: (extraCoupons || []).reduce((target, coupon, index) => {
				let { couponDescription, couponCode, useLimitAmount } = coupon;

				(
					sellPrice > 0
					&& sellPrice >= useLimitAmount
				) && target.push({
					label: couponDescription,
					value: couponCode
				});

				return target;
			}, [ { label: '적용 안함', value: '' } ])
		});
	}

	updateUseLowest() {
		let { states: { currentForm: { values: { products, lowestDiscountCoupons } } }, actions: { handleChangeFormValue } } = this.props;

		let lowestDiscount = lowestDiscountCoupons[ 'discounts' ];
		let couponDiscounts = products.reduce((target, product) => {
			target += product[ 'couponDiscount' ] ? product[ 'couponDiscount' ] : 0;

			return target;
		}, 0);

		handleChangeFormValue('useLowest', lowestDiscount === couponDiscounts);
	}

	getTotalCoupons() {
		let { states: { currentForm } } = this.props;

		return (getDeepValue(currentForm, 'values.coupons') || []).reduce((target, coupon) => {
			coupon.map(item => {
				let { couponCode } = item;

				target.indexOf(couponCode) === -1 && target.push(couponCode);
			});

			return target;
		}, []);
	}

	getTotalPrices() {
		let { states: { currentForm } } = this.props;

		let prices = (getDeepValue(currentForm, 'values.products') || []).reduce((target, product) => {
			target[ 'price' ] += product[ 'price' ];
			target[ 'discount' ] += product[ 'couponDiscount' ]
				? product[ 'couponDiscount' ]
				: (product[ 'price' ] - product[ 'sellPrice' ]);

			return target;
		}, { price: 0, discount: 0, extraDiscount: 0 });

		let extraCouponCode = getDeepValue(currentForm, 'values.extraCouponCode') || '';
		let extraCoupon = (getDeepValue(currentForm, 'values.extraCoupons') || []).find(coupon => Object.is(coupon[ 'couponCode' ], extraCouponCode));

		if (extraCoupon) {
			let { couponType, discount, discountRate, isMaxLimit, maxLimitAmount } = extraCoupon;

			let extraDiscount = 0;

			switch (couponType) {
				case 'AMOUNT_DISCOUNT':
					extraDiscount = discount;
					break;

				case 'DISCOUNT_RATE':
					extraDiscount = Math.floor((prices[ 'price' ] - prices[ 'discount' ]) * (discountRate / 100));
					break;
			}

			extraDiscount > 0 && (
				prices[ 'extraDiscount' ] = isMaxLimit
					? Math.min(maxLimitAmount, extraDiscount)
					: Math.min(extraDiscount, prices[ 'price' ] - prices[ 'discount' ])
			);
		}

		return prices;
	}

	componentDidUpdate(prevProps, prevState) {
		let { states: { currentForm: prevForm } } = prevProps;
		let { states: { currentForm } } = this.props;

		!prevForm && currentForm && Promise.all([
			this.updateCouponOptions()
		]).then(() => {
			this.setState({ ready: true });
		});
	}

	componentDidMount() {
		let { actions: { handleChangeFormValue }, options: { extraCouponCode } } = this.props;

		extraCouponCode && handleChangeFormValue('extraCouponCode', extraCouponCode);
	}

	render() {
		let { states: { ui: { view: { height } }, currentForm }, handleSubmit } = this.props;
		let { options, extraOptions, ready } = this.state;

		let totalCoupons = this.getTotalCoupons().length;
		let totalPrices = this.getTotalPrices();

		let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
			? height - (50 + 60 + getHeight(this.bottom))
			: null;

		return ready &&
			(
				<div className="coupon-layer-wrap popup">
					<div className="container">
						<form onSubmit={handleSubmit(this.onSubmit)}>
							<div className="top">
								<h2>쿠폰 변경</h2>
							</div>

							<div className="middle" style={middleHeight ? { height: `${middleHeight}px` } : null}>
								<div className="inner" ref={(c) => {this.inner = c;}}>
									<div className="title">
										<h3>상품 할인 <span>(사용 가능 상품 <em>{totalCoupons}</em>개)</span></h3>
										<div>
											<Field name="useLowest"
											       label="최대 할인 적용"
											       onChange={this.onChangeUseLowest}
											       component={CheckBoxField}/>
										</div>
									</div>

									<ul className="coupon">
										{currentForm[ 'values' ][ 'products' ].reduce((target, item, index) => {
											let sellPrice = item[ 'couponDiscount' ]
												? (Number(item[ 'price' ] - Number(item[ 'couponDiscount' ])))
												: item[ 'sellPrice' ];

											(options[ index ] || []).length > 1 && target.push(
												<li className="label">
													<Field name={`products[${index}].couponCode`}
													       className="box"
													       label={`${item[ 'productGroupName' ]} [${item[ 'projectName' ]}]`}
													       width={626}
													       height={34 * 4}
													       stepHeight={34}
													       resize={true}
													       placeholder="적용안함"
													       options={options[ index ] || []}
													       onChange={(event, value) => {this.onChangeCoupon(index, value);}}
													       component={SelectField}/>

													<div className="price">
														{item[ 'price' ] !== sellPrice && (
															<span className="sale">{toCash(item[ 'price' ])}원</span>
														)}
														<span className="sale-price">{toCash(sellPrice)}원</span>
													</div>
												</li>
											);

											return target;
										}, [])}
									</ul>

									<div className="title">
										<h3>장바구니 할인</h3>
									</div>

									<div className="coupon-extra">
										<Field name={`extraCouponCode`}
										       className="box"
										       width={626}
										       height={34 * 4}
										       stepHeight={34}
										       resize={true}
										       placeholder="적용안함"
										       options={extraOptions}
										       onChange={(event, value) => {this.onChangeExtraCoupon(value);}}
										       component={SelectField}/>
									</div>

									<div className="title">
										<h3>결제 예정 금액</h3>
									</div>

									<div className="total">
										<dl className="top">
											<dd>
												<span>상품 금액</span>
												<span className="price">
													{toCash(totalPrices[ 'price' ])}원
												</span>
											</dd>
											<dd className="icon">
												<span className="icon icon-minus-2828"/>
											</dd>
											<dd>
												<span>상품 할인</span>
												<span className="price sale">
													{toCash(totalPrices[ 'discount' ])}원
												</span>
											</dd>
											<dd className="icon">
												<span className="icon icon-minus-2828"/>
											</dd>
											<dd>
												<span>장바구니 할인</span>
												<span className="price sale">
													{toCash(totalPrices[ 'extraDiscount' ])}원
												</span>
											</dd>
											<dd className="icon">
												<span className="icon icon-total-2828"/>
											</dd>
											<dd>
												<span>결제 예정 금액</span>
												<span className="price sale">
													{toCash(totalPrices[ 'price' ] - (totalPrices[ 'discount' ] + totalPrices[ 'extraDiscount' ]))}원
												</span>
											</dd>
										</dl>

										<div className="bottom"/>
									</div>

									<p>사용 가능한 쿠폰만 보여집니다.</p>
								</div>
							</div>

							<div className="bottom" ref={(c) => {this.bottom = c;}}>
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

					<button type="button"
					        className="icon icon-close-w-1414 close"
					        onClick={this.onClickClose}/>
				</div>
			)
	}
}

const formName = 'layer-coupon';

const mapStateToProps = (state, ownerProps) => {
	let { order: { useLowest, products, coupons, lowestDiscountCoupons, extraCoupons } } = state;

	return {
		states: {
			...ownerProps.states,

			currentForm: state.form[ formName ]
		},
		initialValues: {
			useLowest,
			products,
			coupons,
			lowestDiscountCoupons,
			extraCoupons
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,
			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),

			handleUpdateOrderProducts: (products) => dispatch(ActionOrder.updateOrderProducts(products)),
			handleUpdateOrderUseLowest: (useLowest) => dispatch(ActionOrder.updateOrderUseLowest(useLowest))
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName,
	enableReinitialize: true
})(Coupon));