import { ApiMethods, ActionTypes } from 'constants/index';
import { requestAPI } from 'utils/api';

export const requestNotice = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/help/notice`,
      params
		}).then((res) => {
		  return res.data;
		}).catch(error => {
			throw error;
		});
	}
};
