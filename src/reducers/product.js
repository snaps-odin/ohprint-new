

import update from 'react-addons-update';

import { PRODUCT_GROUP } from 'configs/index';
import { ActionTypes } from 'constants/index';

const initialState = {
	productGroups: null
};

export default function product(state = initialState, action) {
	let { type } = action;

	switch (type) {
		case ActionTypes.UPDATE_PRODUCT_GROUP:
			return update(state, {
				productGroups: {
					$set: PRODUCT_GROUP.reduce((target, item) => {
						let group = action[ 'productGroups' ].find(productGroup => productGroup[ 'attr' ] === item[ 'keyName' ]);

						group && target.push(Object.assign(item, group));

						return target;
					}, [])
				}
			});
			break;

		default:
			return state;
			break;
	}
}