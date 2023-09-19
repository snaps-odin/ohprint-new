

import update from 'react-addons-update';

import { ActionTypes } from 'constants/index';

const initialState = {};

export default function config(state = initialState, action) {
	let { type } = action;

	switch (type) {
		case ActionTypes.UPDATE_CONFIG:
			return update(state, { $merge: action[ 'data' ] });
			break;

		default:
			return state;
			break;
	}
}