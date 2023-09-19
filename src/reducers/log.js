

import update from 'react-addons-update';

import { ActionTypes } from 'constants/index';

const initialState = {
	usedHistory: false,
	usedConversion: false
};

export default function log(state = initialState, action) {
	let { type } = action;

	switch (type) {
		case ActionTypes.UPDATE_LOG_USED_HISTORY:
			return update(state, { usedHistory: { $set: true } });
			break;

		case ActionTypes.UPDATE_LOG_USED_CONVERSION:
			return update(state, { usedConversion: { $set: true } });
			break;

		default:
			return state;
			break;
	}
}