

import update from 'react-addons-update';

import { ActionTypes } from 'constants/index';

const initialState = {
	eventList: [],
  isZeroDeal:false
};

export default function event(state = initialState, action) {
	let { type } = action;

	switch (type) {
		case ActionTypes.SAVE_EVENT:
			return update(state, {
				eventList: { $set: action[ 'eventList' ] },
        eventStyle: { $set: action[ 'styled' ] }
			});
			break;


    case ActionTypes.SAVE_ZERO_DEAL:
      return update(state,{isZeroDeal:{$set: action['payload']}})
      break;

		default:
			return state;
			break;
	}
}
