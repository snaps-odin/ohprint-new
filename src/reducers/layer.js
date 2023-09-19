

import update from 'react-addons-update';

import { ActionTypes } from 'constants/index';
import { getTimestamp } from 'utils/date';

const initialState = {
	timestamp: null,
	transparentMode: false,
	roundMode: false,
	contents: {
		type: null,
		options: null
	},
	alert: {
		options: null
	},
	loading: false
};

export default function layer(state = initialState, action) {
	let { type } = action;

	switch (type) {
		case ActionTypes.UPDATE_LAYER:
			return update(state, { timestamp: { $set: getTimestamp() } });
			break;

		case ActionTypes.UPDATE_TRANSPARENT_MODE_LAYER:
			return update(state, { transparentMode: { $set: action[ 'bool' ] } });
			break;

		case ActionTypes.UPDATE_ROUND_MODE_LAYER:
			return update(state, { roundMode: { $set: action[ 'bool' ] } });
			break;

		case ActionTypes.OPEN_CONTENTS_LAYER:
			return update(state, { contents: { $set: action[ 'contents' ] } });
			break;

		case ActionTypes.CLOSE_CONTENTS_LAYER:
			return update(state, { contents: { $set: initialState[ 'contents' ] } });
			break;

		case ActionTypes.OPEN_ALERT_LAYER:
			return update(state, { alert: { $set: action[ 'alert' ] } });
			break;

		case ActionTypes.CLOSE_ALERT_LAYER:
			return update(state, { alert: { $set: initialState[ 'alert' ] } });
			break;

		case ActionTypes.OPEN_LOADING_LAYER:
			return update(state, { loading: { $set: true } });
			break;

		case ActionTypes.CLOSE_LOADING_LAYER:
			return update(state, { loading: { $set: false } });
			break;

		case ActionTypes.CLOSE_LAYER:
			return update(state, { $set: initialState });
			break;

		default:
			return state;
			break;
	}
}