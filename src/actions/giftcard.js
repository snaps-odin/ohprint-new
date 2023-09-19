import { ApiMethods } from 'constants/index';
import { requestAPI } from 'utils/api';

export const requestGiftcardHistory = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/voucher/history',
      params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const registerGiftcard = (couponCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: `/account/money/giftCard/${couponCode}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestGiftcardCount = (params) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.GET,
      url: '/voucher/history/totalCount',
      params
    }).then(result => {
      let { data } = result;

      return data;
    }).catch(error => {
      throw error;
    });
  }
};
