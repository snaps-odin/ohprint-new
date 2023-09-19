

import update from 'react-addons-update';

import { ActionTypes } from 'constants/index';

const initialState = {
	alarmCount: 0,
	qnaCount: 0
};

export default function alarm(state = initialState, action) {
	let { type } = action;

	switch (type) {
		case ActionTypes.UPDATE_ALARM_COUNT:
			return update(state, {
				alarmCount: { $set: action[ 'count' ] }
			});
			break;

		case ActionTypes.UPDATE_QNA_COUNT:
			return update(state, {
				qnaCount: { $set: action[ 'count' ] }
			});
			break;

		case ActionTypes.RESET_ALL_COUNT:
			return update(state, {
				alarmCount: { $set: 0 },
				qnaCount: { $set: 0 }
			});
			break;

		default:
			return state;
			break;
	}
}