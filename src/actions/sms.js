

import { ApiMethods } from 'constants/index';
import { requestAPI } from 'utils/api';

export const requestSMSApp = (phoneNumber) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/sms/app/${phoneNumber}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		})
	}
};