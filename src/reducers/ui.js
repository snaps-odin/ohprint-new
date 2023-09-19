

import update from 'react-addons-update';

import { ActionTypes } from 'constants/index';

const initialState = {
	view: {
		width: null,
		height: null
	},
	scroll: {
		targetY: null,
		easingType: null,
		owners: []
	}
};

export default function ui(state = initialState, action) {
	let { type } = action;

	switch (type) {
		case ActionTypes.RESIZE_UI_VIEW:
			return update(state, {
				$merge: {
					view: {
						width: action[ 'innerWidth' ],
						height: action[ 'innerHeight' ]
					}
				}
			});
			break;

		case ActionTypes.RESET_UI_SCROLL:
			return update(state, {
				scroll: {
					targetY: { $set: null },
					easingType: { $set: null }
				}
			});
			break;

		case ActionTypes.UPDATE_UI_SCROLL:
			return update(state, {
				scroll: {
					targetY: { $set: action[ 'targetY' ] },
					easingType: { $set: action[ 'easingType' ] || null }
				}
			});
			break;

		case ActionTypes.UPDATE_UI_LOCKED_OWNER:
			return update(state, {
				scroll: {
					owners: { $set: action[ 'owners' ] || [] }
				}
			});
			break;

		default:
			return state;
			break;
	}
}