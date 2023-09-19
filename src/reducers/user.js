

import update from 'react-addons-update';

import { ActionTypes } from 'constants/index';
import { getUserId } from 'utils/storage';

const initialState = {
	userId: (typeof window !== "undefined") ? getUserId() : '',
	loggedIn: false,
	fetching: false,
	fetchErrorMessage: null
};

export default function user(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.FETCH_USER:
			return update(state, { fetching: { $set: true } });
			break;

		case ActionTypes.SUCCESS_USER:
			return update(state, {
				fetching: { $set: false },
				fetchErrorMessage: { $set: null }
			});
			break;

		case ActionTypes.FAILURE_USER:
			return update(state, {
				fetching: { $set: false },
				fetchErrorMessage: { $set: action[ 'message' ] }
			});
			break;

		case ActionTypes.UPDATE_USER_LOGGED_IN:
			return update(state, { loggedIn: { $set: action[ 'loggedIn' ] } });
			break;

		case ActionTypes.UPDATE_USER_INFO:
			return update(state, { $merge: action[ 'info' ] });
			break;

		case ActionTypes.RESET_USER_INFO:
			return update(initialState, { userId: { $set: getUserId() } });
			break;

		case ActionTypes.RESET_USER_ERROR:
			return update(state, { fetchErrorMessage: { $set: null } });
			break;

		case ActionTypes.CHANGE_USER_ERROR:
			return update(state, { fetchErrorMessage: { $set: action[ 'message' ] } });
			break;

		default:
			return state;
			break;
	}
}