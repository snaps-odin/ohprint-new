

import { ApiMethods } from 'constants/index';
import { requestAPI } from 'utils/api';

export const requestCoupons = (sort, offset) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/coupon',
			params: {
				sort,
				offset
			}
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestCouponsCount = () => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/coupon/count'
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const createCouponByCouponCode = (couponCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: `/coupon/${couponCode}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const createCouponByCouponCodeChoice = (params) => {
  let { idx, couponNumber } = params;

  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.POST,
      url: `/event/${idx}/${couponNumber}`
    }).then(result => {
      let { data } = result;

      return data;
    }).catch(error => {
      throw error;
    });
  }
};

export const createCouponBySeq = (seq) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: `/coupon/${seq}/join`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};
