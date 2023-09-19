

import update from 'react-addons-update';

import { PAYMENT_METHOD, DELIVERY_METHOD, CREDIT_CARD } from 'configs/index';
import { ActionTypes } from 'constants/index';
import { toPhoneNumber, addZero } from 'utils/format';
import { getTimestamp } from 'utils/date';

const initialState = {
	code: null,
	offsetTimestamp: null,
	products: null,
	user: null,
	userHistories: null,
	userPayment: null,
	coupons: null,
	extraCoupons: null,
	deliveryMethods: null,
	deliveryAmountCheck: false,
	deliveryAmount: null,
	deliveryCoupons: null,
	lowestDiscountCoupons: null,
	useLowest: true,
	paymentMethods: null,
	creditCards: null,
	creditCardQuotas: null
};

export default function order(state = initialState, action) {
	let { type } = action;

	switch (type) {
		case ActionTypes.UPDATE_ORDER_CODE:
			return update(state, { code: { $set: action[ 'code' ] } });
			break;

		case ActionTypes.UPDATE_ORDER_PRODUCTS:
			return update(state, { products: { $set: action[ 'products' ] } });
			break;

		case ActionTypes.UPDATE_ORDER_PRODUCTS_BY_COUPON:
			return update(state, {
				products: {
					$set: state[ 'products' ].reduce((target, product, index) => {
						target.push(Object.assign(product, {
							couponCode: action[ 'coupon' ][ 'useCouponCodes' ][ index ],
							couponDiscount: action[ 'coupon' ][ 'useDiscountAmounts' ][ index ]
						}));

						return target;
					}, [])
				}
			});
			break;

		case ActionTypes.UPDATE_ORDER_USER:
			return update(state, {
				user: { $set: action[ 'user' ][ 'orderUserInfo' ] },
				userHistories: {
					$set: action[ 'user' ][ 'orderDeliveryHistoryList' ].reduce((target, item) => {
						target.push({
							userName: item[ 'name' ],
							userCellPhoneNumber: toPhoneNumber(item[ 'cellPhoneNumber' ]),
							userCellPhoneNumbers: toPhoneNumber(item[ 'cellPhoneNumber' ]).split('-'),
							userZipCode: item[ 'zipCode' ],
							userAddress0: item[ 'address1' ],
							userAddress1: item[ 'address2' ]
						});

						return target;
					}, [])
				},
				userPayment: { $set: action[ 'user' ][ 'userPaymentInfo' ] }
			});
			break;

		case ActionTypes.UPDATE_ORDER_COUPONS:
			return update(state, {
				coupons: {
					$set: state[ 'products' ].reduce((target, item, index) => {
						let coupon = action[ 'coupons' ].find(coupon => item[ 'projectCode' ] === coupon[ 'projectCode' ]);

						target.push(coupon
							?
							coupon[ 'couponDataList' ].reduce((subTarget, couponItem) => {
								subTarget.push(Object.assign(couponItem, {
									projectName: item[ 'projectName' ],
									projectCode: item[ 'projectCode' ],
									defaultDiscount: item[ 'price' ] - item[ 'sellPrice' ]
								}));

								return subTarget;
							}, [])
							:
							[]
						);

						return target;
					}, [])
				}
			});
			break;

		case ActionTypes.UPDATE_ORDER_EXTRA_COUPONS:
			return update(state, { extraCoupons: { $set: action[ 'extraCoupons' ] } });
			break;

		case ActionTypes.UPDATE_ORDER_DELIVERY_COUPONS:
			return update(state, { deliveryCoupons: { $set: action[ 'deliveryCoupons' ] } });
			break;

		case ActionTypes.UPDATE_ORDER_LOWEST_DISCOUNT_COUPONS:
			return update(state, { lowestDiscountCoupons: { $set: action[ 'lowestDiscountCoupons' ] } });
			break;

		case ActionTypes.UPDATE_ORDER_USE_LOWEST:
			return update(state, { useLowest: { $set: action[ 'useLowest' ] } });
			break;

		case ActionTypes.UPDATE_ORDER_PAYMENT_OPTION:
			return update(state, {
				offsetTimestamp: { $set: getTimestamp(action[ 'option' ][ 'now' ]) - getTimestamp() },
				paymentMethods: {
					$set: PAYMENT_METHOD.reduce((target, item) => {
						let method = action[ 'option' ][ 'paymentMethod' ].find(paymentMethod => paymentMethod[ 'name' ] === item[ 'keyName' ]);

						method && target.push(Object.assign(item, { value: method[ 'code' ] }));

						return target;
					}, [])
				},
				creditCards: {
					$set: CREDIT_CARD.reduce((target, item) => {
						let card = action[ 'option' ][ 'creditCard' ].find(creditCard => creditCard[ 'name' ] === item[ 'keyName' ]);

						card && target.push(Object.assign(item, { value: card[ 'code' ] }));

						return target;
					}, [])
				},
				creditCardQuotas: {
					$set: new Array(12).fill(true).reduce((target, item, index) => {
						target.push({
							label: index <= 0 ? '일시불' : `${addZero(index + 1, 2)}개월`,
							value: index <= 0 ? '00' : addZero(index + 1, 2)
						});

						return target;
					}, [])
				},
				deliveryMethods: {
					$set: DELIVERY_METHOD.reduce((target, item) => {
						let method = action[ 'option' ][ 'deliveryMethod' ].find(deliveryMethod => deliveryMethod[ 'name' ] === item[ 'keyName' ]);

						method && target.push(Object.assign(item, { value: method[ 'code' ] }));

						return target;
					}, [])
				},
				deliveryAmount: { $set: action[ 'option' ][ 'deliveryAmountInfo' ] }
			});
			break;

		default:
			return state;
			break;
	}
}