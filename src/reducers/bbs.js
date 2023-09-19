

import update from 'react-addons-update';

import { ActionTypes } from 'constants/index';

const initialState = {
	products: null
};

export default function bbs(state = initialState, action) {
	let { type } = action;

	switch (type) {
		case ActionTypes.UPDATE_DESIGN_QNA_PRODUCT_GROUP_CODE:
			return update(state, {
				products: { $set: action[ 'products' ] }
			});
			break;

		default:
			return state;
			break;
	}
}