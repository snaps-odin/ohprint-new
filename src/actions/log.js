

import { ActionTypes, ApiMethods } from 'constants/index';
import { ActionStore } from 'actions/index';
import { isReleaseDomain } from 'utils/url';
import { requestAPI } from 'utils/api';
import * as GOOGLE from 'utils/google';
import * as FACEBOOK from 'utils/facebook';
import * as NAVER from 'utils/naver';
import * as DAUM from 'utils/daum';
import * as MOBON from 'utils/mobon';
import * as REALCLICK from 'utils/real-click';
import * as CRITEO from 'utils/criteo';

const updateLogHistory = () => {
	return { type: ActionTypes.UPDATE_LOG_USED_HISTORY }
};

const updateLogConversion = () => {
	return { type: ActionTypes.UPDATE_LOG_USED_CONVERSION }
};

export const changeLogHistory = (pathname, params) => {
	return (dispatch, getState) => {
		let { log: { usedHistory } } = getState();

    let isReal = isReleaseDomain();

		return new Promise((resolve, reject) => {
			isReal
				?
				Promise.all([
					GOOGLE.history(pathname),
					FACEBOOK.history(pathname),
					NAVER.history(pathname),
          CRITEO.history(pathname, params),
					!usedHistory && MOBON.history(params),
					!usedHistory && REALCLICK.history(),
				]).then(() => {
					dispatch(updateLogHistory());
				}).then(() => {
					resolve();
				})
				:
				resolve();
		});
	}
};

export const changeLogProduct = (type, params, selectedIndex) => {
	return (dispatch, getState) => {
    let isReal = isReleaseDomain();

		return new Promise((resolve, reject) => {
			Promise.all(
				[
					dispatch(ActionStore.requestStoreDesignDetail((type || '').match(/EDIT_ITEM/) ? 'editItem' : 'viewItem', params, selectedIndex))
				].concat(isReal
					?
					[
						MOBON.product(type, params)
					]
					:
					[]
				)).then(() => {
				resolve();
			})
		});
	}
};

export const changeLogConversion = (type, params) => {
	return (dispatch, getState) => {
		let { log: { usedConversion } } = getState();

    let enabled = (isReleaseDomain() && !usedConversion);


		return new Promise((resolve, reject) => {
			enabled
				?
				Promise.all([
					GOOGLE.conversion(type, params),
					FACEBOOK.conversion(type, params),
					NAVER.conversion(type, params),
					DAUM.conversion(type, params),
					MOBON.conversion(type, params)
				]).then(() => {
					dispatch(updateLogConversion());
				}).then(() => {
					resolve();
				})
				:
				resolve();
		})
	}
};

export const updateLogVisit = () => {
	return (dispatch, getState) => {
		let isReal = isReleaseDomain();

		return new Promise(resolve => {
			isReal
				?
				requestAPI({
					method: ApiMethods.PUT,
					url: `/log/visit`
				}).then(() => {
					resolve();
				}).catch(() => {
					resolve();
				})
				:
				resolve();
		});
	}
};
