

import { ApiMethods } from 'constants/index';
import { ActionCart } from 'actions/index';
import { requestAPI } from 'utils/api';

export const requestBags = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/bag',
			params
		}).then(result => {
			let { data } = result;

			return Promise.all([
				dispatch(ActionCart.requestCartCount())
			]).then(() => {
				return data;
			});
		}).catch(error => {
			throw error;
		});
	}
};

export const requestBagCount = () => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/bag/count'
		}).then(result => {
			let { data } = result;

			return data;
		})
	}
};

export const deleteBagByProjectCodes = (projectCodes) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.DELETE,
			url: `/bag/project/${projectCodes}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const createBagCopyByProjectCode = (projectCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: `/bag/project/${projectCode}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestBagEditCheck = (projectCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/bag/project/${projectCode}/edit-check`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const createBagSaveAs = (projectCode, projectName) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: `/bag/project/${projectCode}/save-as`,
			params: {
				projectName
			}
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};