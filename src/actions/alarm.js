

import { ApiMethods, ActionTypes } from 'constants/index';
import { requestAPI } from 'utils/api';

const updateAlarmCount = (count) => {
	return { type: ActionTypes.UPDATE_ALARM_COUNT, count }
};

const updateAlarmQNACount = (count) => {
	return { type: ActionTypes.UPDATE_QNA_COUNT, count }
};

export const resetAllCount = () => {
	return { type: ActionTypes.RESET_ALL_COUNT }
};

export const requestAlarmCount = () => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/alarm/count'
		}).then(result => {
			let { data } = result;

			return Promise.all([
				dispatch(updateAlarmCount(data[ 'count' ]))
			]).then(() => {
				return data;
			});
		}).catch(error => {
			throw error;
		});
	}
};

export const requestAlarm = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/alarm',
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const updateAlarm = (alarmNo) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.PUT,
			url: `/alarm/${alarmNo}`
		}).then(() => {

			return Promise.all([
				dispatch(requestAlarmCount())
			]).then(() => {
				return { isUpdate: true };
			});
		}).catch(error => {
			return { isUpdate: false };
		});
	}
};

export const requestAlarmQNACount = () => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/alarm/qna/count'
		}).then(result => {
			let { data } = result;

			Promise.all([
				dispatch(updateAlarmQNACount(data[ 'count' ]))
			]).then(() => {
				return data;
			});
		}).catch(error => {
			throw error;
		});
	}
};

export const updateAlarmQNAView = () => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.PUT,
			url: `/alarm/qna/view`
		}).then(() => {

			Promise.all([
				dispatch(requestAlarmQNACount())
			]).then(() => {
				return { isUpdate: true };
			});

		}).catch(error => {
			throw error;
		});
	}
};