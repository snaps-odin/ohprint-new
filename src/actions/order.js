

import { ActionTypes, ApiMethods } from 'constants/index';
import { ActionCart } from 'actions/index';
import { requestAPI } from 'utils/api';
import { getTimestamp } from 'utils/date';

export const updateOrderCode = (code) => {
	return { type: ActionTypes.UPDATE_ORDER_CODE, code }
};

export const updateOrderProducts = (products) => {
	return { type: ActionTypes.UPDATE_ORDER_PRODUCTS, products }
};

const updateOrderProductsByCoupon = (coupon) => {
	return { type: ActionTypes.UPDATE_ORDER_PRODUCTS_BY_COUPON, coupon }
};

const updateOrderUser = (user) => {
	return { type: ActionTypes.UPDATE_ORDER_USER, user }
};

const updateOrderCoupons = (coupons) => {
	return { type: ActionTypes.UPDATE_ORDER_COUPONS, coupons }
};

const updateOrderExtraCoupons = (extraCoupons) => {
	return { type: ActionTypes.UPDATE_ORDER_EXTRA_COUPONS, extraCoupons }
};

const updateOrderDeliveryCoupons = (deliveryCoupons) => {
	return { type: ActionTypes.UPDATE_ORDER_DELIVERY_COUPONS, deliveryCoupons }
};

const updateOrderLowestDiscountCoupons = (lowestDiscountCoupons) => {
	return { type: ActionTypes.UPDATE_ORDER_LOWEST_DISCOUNT_COUPONS, lowestDiscountCoupons }
};

export const updateOrderUseLowest = (useLowest) => {
	return { type: ActionTypes.UPDATE_ORDER_USE_LOWEST, useLowest }
};

export const updateOrderPaymentOption = (option, userId) => {
	return { type: ActionTypes.UPDATE_ORDER_PAYMENT_OPTION, option, userId }
};

export const getOrderPaymentMethodByKeyName = (keyName) => {
	return (dispatch, getState) => {
		let { order: { paymentMethods } } = getState();

		return (paymentMethods || []).find(method => method[ 'keyName' ] === keyName);
	}
};

export const getOrderPaymentMethodByCode = (code) => {
	return (dispatch, getState) => {
		let { order: { paymentMethods } } = getState();

		return (paymentMethods || []).find(method => method[ 'value' ] === code);
	}
};

export const getOrderDeliveryMethodByKeyName = (keyName) => {
	return (dispatch, getState) => {
		let { order: { deliveryMethods } } = getState();

		return (deliveryMethods || []).find(method => method[ 'keyName' ] === keyName);
	}
};

export const getOrderDeliveryMethodByCode = (code) => {
	return (dispatch, getState) => {
		let { order: { deliveryMethods } } = getState();

		return (deliveryMethods || []).find(method => method[ 'value' ] === code);
	}
};

export const getOrderDeliveryPrices = () => {
	return (dispatch, getState) => {
		let { order: { offsetTimestamp, deliveryAmount } } = getState();

		let nowTimestamp = getTimestamp() + offsetTimestamp;
		let isEventTimezone = deliveryAmount ? (getTimestamp(deliveryAmount[ 'eventStartDate' ]) <= nowTimestamp && getTimestamp(deliveryAmount[ 'eventEndDate' ]) >= nowTimestamp) : false;

		return {
			isEventTimezone,
			enableLimitAmount: deliveryAmount ? (isEventTimezone ? deliveryAmount[ 'eventLimitAmount' ] : deliveryAmount[ 'defaultLimitAmount' ]) : 0,
			enableAmount: deliveryAmount ? (isEventTimezone ? deliveryAmount[ 'eventAmount' ] : deliveryAmount[ 'defaultAmount' ]) : 0
		}
	}
};

export const getOrderCreditCartByKeyName = (keyName) => {
	return (dispatch, getState) => {
		let { order: { creditCards } } = getState();

		return (creditCards || []).find(method => method[ 'keyName' ] === keyName);
	}
};

export const getOrderCreditCartByCode = (code) => {
	return (dispatch, getState) => {
		let { order: { creditCards } } = getState();

		return (creditCards || []).find(method => method[ 'value' ] === code);
	}
};

export const getOrderQuotasByCode = (code) => {
	return (dispatch, getState) => {
		let { order: { creditCardQuotas } } = getState();

		return (creditCardQuotas || []).find(method => method[ 'value' ] === code);
	}
};

export const setOrderLowestDiscounts = () => {
	return (dispatch, getState) => {
		let { order: { products, coupons } } = getState();

		let sortedCouponsByCouponCode = coupons.slice(0).reduce((target, coupon) => {
			coupon.map(couponItem => {
				let { projectCode, couponCode, discount } = couponItem;

				let findIndex = target.findIndex(item => String(item[ 'couponCode' ]) === String(couponCode));

				!~findIndex
					?
					target.push({
						couponCode,
						projectCode,
						discount
					})
					:
					(discount > target[ findIndex ][ 'discount' ]) && (target[ findIndex ] = {
						couponCode,
						projectCode,
						discount
					});
			});

			return target;
		}, []).sort((a, b) => {
			let discounts = [ a[ 'discount' ], b[ 'discount' ] ];

			return discounts[ 0 ] === discounts[ 1 ]
				? 0
				: discounts[ 0 ] < discounts[ 1 ] ? 1 : -1;
		});

		let sortedCouponsByMaxDiscount = coupons.slice(0).sort((a, b) => {
			let discounts = [ a, b ].reduce((target, item, index) => {
				target[ index ] = item.reduce((subTarget, subItem) => {
					subTarget = Math.max(subTarget, subItem[ 'discount' ]);

					return subTarget;
				}, 0);

				return target;
			}, []);

			return discounts[ 0 ] === discounts[ 1 ]
				? 0
				: discounts[ 0 ] < discounts[ 1 ] ? 1 : -1;
		});

		let sortedCoupons = sortedCouponsByCouponCode.reduce((target, coupon, index) => {
			let { projectCode } = coupon;

			if (!~target[ 'usedProjectCode' ].findIndex(code => String(code) === String(projectCode))) {
				let findIndex = target[ 'sortedCouponsByMaxDiscount' ].findIndex(item => item.length > 0 && String(item[ 0 ][ 'projectCode' ]) === String(projectCode));

				let selectedCoupon = target[ 'sortedCouponsByMaxDiscount' ].slice(findIndex, findIndex + 1);

				target[ 'sortedCouponsByMaxDiscount' ].splice(findIndex, 1);
				target[ 'sortedCouponsByMaxDiscount' ].splice(index, 0, selectedCoupon[ 0 ]);
				target[ 'usedProjectCode' ].push(projectCode);
			}

			return target;
		}, {
			sortedCouponsByMaxDiscount: sortedCouponsByMaxDiscount.slice(0),
			usedProjectCode: []
		});

		let computedDiscountCoupons = sortedCoupons[ 'sortedCouponsByMaxDiscount' ].reduce((target, coupon, index) => {
			let discountedCoupon = coupon.reduce((subTarget, couponItem) => {
				let { defaultDiscount, couponType, couponCode, isUnique, discount, maxLimitAmount, projectCode } = couponItem;

				let useDiscount = null;
				let useUnique = false;

				if (isUnique) {
					if (!target[ 'useUniqueCouponCodes' ].find(uniqueCouponCode => uniqueCouponCode === couponCode)) {
						useUnique = true;
						useDiscount = discount;
					} else {
						useDiscount = 0;
					}
				} else {
					switch (couponType) {
						case 'AMOUNT_DISCOUNT':
							let prevUsedAmount = target[ 'useCouponCodes' ].reduce((prevAmount, prevCouponCode, prevIndex) => {
								prevCouponCode === couponCode && (prevAmount += target[ 'useDiscountAmounts' ][ prevIndex ]);

								return prevAmount;
							}, 0);

							useDiscount = (maxLimitAmount - prevUsedAmount) - discount >= 0 ? discount : maxLimitAmount - prevUsedAmount;
							break;

						case 'DISCOUNT_RATE':
							useDiscount = discount;
							break;
					}
				}

				(useDiscount > defaultDiscount && useDiscount > subTarget[ 'useDiscount' ]) && (subTarget = {
					useDiscount,
					useCouponCode: couponCode,
					useUnique,
					useProjectCode: projectCode
				});

				return subTarget;
			}, { useDiscount: 0, useCouponCode: null, useUnique: false, useProjectCode: null });

			target[ 'discounts' ] += discountedCoupon[ 'useDiscount' ];
			target[ 'useDiscountAmounts' ].push(discountedCoupon[ 'useDiscount' ]);
			target[ 'useCouponCodes' ].push(discountedCoupon[ 'useCouponCode' ]);
			target[ 'useProjectCodes' ].push(discountedCoupon[ 'useProjectCode' ]);
			discountedCoupon[ 'useUnique' ] && target[ 'useUniqueCouponCodes' ].push(discountedCoupon[ 'useCouponCode' ]);

			return target;
		}, { discounts: 0, useDiscountAmounts: [], useCouponCodes: [], useUniqueCouponCodes: [], useProjectCodes: [] });

		let lowestDiscountCoupons = products.reduce((target, product, index) => {
			let { projectCode } = product;

			let findIndex = computedDiscountCoupons[ 'useProjectCodes' ].findIndex(code => String(code) === String(projectCode));

			target[ 'useDiscountAmounts' ][ index ] = findIndex !== -1 ? computedDiscountCoupons[ 'useDiscountAmounts' ][ findIndex ] : null;
			target[ 'useCouponCodes' ][ index ] = findIndex !== -1 ? computedDiscountCoupons[ 'useCouponCodes' ][ findIndex ] : null;

			return target;
		}, { discounts: computedDiscountCoupons[ 'discounts' ], useDiscountAmounts: [], useCouponCodes: [] });

		return Promise.all([
			dispatch(updateOrderLowestDiscountCoupons(lowestDiscountCoupons)),
			dispatch(updateOrderProductsByCoupon(lowestDiscountCoupons))
		]).then(() => {
			return lowestDiscountCoupons
		});
	}
};

export const createOrder = (projectCodes) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: '/order',
			params: { projectCodeList: projectCodes }
		}).then(result => {
			let { data } = result;

			return Promise.all([
				dispatch(updateOrderCode(data[ 'orderCode' ])),
				dispatch(ActionCart.requestCartCount())
			]).then(() => {
				return data;
			});
		}).catch(error => {
			throw error;
		});
	}
};

export const requestOrderProducts = () => {
	return (dispatch, getState) => {
		let { order: { code: orderCode } } = getState();

		return requestAPI({
			method: ApiMethods.GET,
			url: `/order/${orderCode}`
		}).then(result => {
			let { data } = result;

			return Promise.all([
				dispatch(updateOrderProducts(data))
			]).then(() => {
				return data;
			});
		}).catch(error => {
			throw error;
		});
	}
};

export const requestOrderUser = () => {
	return (dispatch, getState) => {
		let { order: { code: orderCode } } = getState();

		return requestAPI({
			method: ApiMethods.GET,
			url: `/order/${orderCode}/user`
		}).then(result => {
			let { data } = result;

			return Promise.all([
				dispatch(updateOrderUser(data))
			]).then(() => {
				return data;
			});
		}).catch(error => {
			throw error;
		});
	}
};

export const requestOrderCoupons = () => {
	return (dispatch, getState) => {
		let { order: { code: orderCode } } = getState();

		return requestAPI({
			method: ApiMethods.GET,
			url: `/order/${orderCode}/coupon`
		}).then(result => {
			let { data } = result;

			return Promise.all([
				dispatch(updateOrderCoupons(data))
			]).then(() => {
				return data;
			});
		}).catch(error => {
			throw error;
		});
	}
};

export const requestDeliveryCj = (ordercode, invoicenumber) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/order/${ordercode}/delivery/${invoicenumber}`
		}).then(result => {
			let { data }  = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestOrderExtraCoupons = () => {
	return (dispatch, getState) => {
		let { order: { code: orderCode } } = getState();

		return requestAPI({
			method: ApiMethods.GET,
			url: `/order/${orderCode}/extraCoupon`
		}).then(result => {
			let { data } = result;

			return Promise.all([
				dispatch(updateOrderExtraCoupons(data))
			]).then(() => {
				return data;
			});
		}).catch(error => {
			throw error;
		});
	}
};

export const requestOrderDeliveryCoupons = () => {
	return (dispatch, getState) => {
		let { order: { code: orderCode } } = getState();

		return requestAPI({
			method: ApiMethods.GET,
			url: `/order/${orderCode}/deliveryCoupon`
		}).then(result => {
			let { data } = result;

			return Promise.all([
				dispatch(updateOrderDeliveryCoupons(data))
			]).then(() => {
				return data;
			});
		}).catch(error => {
			throw error;
		});
	}
};

export const requestOrderPaymentOption = () => {
	return (dispatch, getState) => {
		let { user: { userId }, order: { deliveryAmount } } = getState();

		return !deliveryAmount
			?
			requestAPI({
				method: ApiMethods.GET,
				url: `/order/paymentOption`
			}).then(result => {
				let { data } = result;

				return Promise.all([
					dispatch(updateOrderPaymentOption(data, userId))
				]).then(() => {
					return data;
				});
			}).catch(error => {
				throw error;
			})
			:
			Promise.resolve();
	}
};

export const requestOrderExistence = () => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/order/existence'
		}).then(result => {
			let { data }  = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const checkCjStrike = (zipCode,apiSn) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.GET,
      url: `/order/strike/${zipCode}/${apiSn}`
    }).then(result => {
      let { data }  = result;

      return data;
    }).catch(error => {
      throw error;
    });
  }
};
