

import { ActionTypes, ApiMethods } from 'constants/index';
import { requestAPI } from 'utils/api';

export const createPayment = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: '/payment',
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const createPaymentSignature = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: '/payment/signature',
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const createPaymentChangeSignature = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: '/payment/change/signature',
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};