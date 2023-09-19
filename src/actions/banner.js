

import { ApiMethods } from 'constants/index';
import { requestAPI } from 'utils/api';

export const requestBanner = () => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/banner`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};