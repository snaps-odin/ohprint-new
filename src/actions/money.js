

import { ApiMethods } from 'constants/index';
import { requestAPI } from 'utils/api';

export const requestUserMoney = () => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/account/money'
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestUserMoneyHistory = (offset) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/account/money/history',
			params: {
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