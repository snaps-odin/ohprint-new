

import { ActionTypes, ApiMethods } from 'constants/index';
import { requestAPI } from 'utils/api';

export const requestHomeBestReview = () => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/home/review/best'
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		})
	}
};

export const requestHomeLatelyBag = () => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/home/lately/bag'
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		})
	}
};