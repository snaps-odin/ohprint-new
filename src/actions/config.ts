import { ActionTypes, ApiMethods } from 'constants/index';
import { requestAPI } from 'utils/api';
import { getLastVersion, getCurrentVersion, setCurrentVersion, getConfig, setConfig } from 'utils/storage';
import {ThunkAction} from "redux-thunk";
import {AnyAction} from "redux";

const updateConfig = (data:any) => {
	return { type: ActionTypes.UPDATE_CONFIG, data }
};

export const requestConfig = ():ThunkAction<void, any, unknown, AnyAction> => {
	return (dispatch) => {
		let lastVersion = getLastVersion();
		let currentVersion = getCurrentVersion();
		let config = getConfig();

		if ((lastVersion !== currentVersion) || !config) {
			return requestAPI({
				method: ApiMethods.GET,
				url: '/hello'
			}).then(result => {
				let { data } = result;

				setCurrentVersion(lastVersion);
				setConfig(JSON.stringify(data));

				dispatch(updateConfig(data));
			}).catch(error => {
				throw error;
			});
		} else {
			dispatch(updateConfig(JSON.parse(getConfig() as string)));

			return Promise.resolve();
		}
	}
};
