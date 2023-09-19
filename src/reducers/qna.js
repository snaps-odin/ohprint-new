

import update from 'react-addons-update';

import { ActionTypes, CSTypes } from 'constants/index';
import { ActionCS } from 'actions/index';

const initialState = {
	lastUpdateItem: null
};

export default function qna(state = initialState, action) {
	let { type } = action;

	switch (type) {
		case ActionTypes.UPDATE_QNA_LAST_ITEM:
			return update(state, { lastUpdateItem: { $set: action[ 'item' ] } });
			break;

		default:
			return state;
			break;
	}
}