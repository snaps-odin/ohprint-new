

import { ActionTypes } from 'constants/index';
import { lockScroll } from 'utils/scroll';

const updateUILockedOwner = (owners) => {
	return { type: ActionTypes.UPDATE_UI_LOCKED_OWNER, owners }
};

export const resizeUIView = ({ innerWidth, innerHeight } = rect) => {
	return { type: ActionTypes.RESIZE_UI_VIEW, innerWidth, innerHeight }
};

export const resetUIScroll = () => {
	return { type: ActionTypes.RESET_UI_SCROLL }
};

export const updateUIScroll = (targetY, easingType) => {
  console.log("updateUIScroll => ", targetY, easingType)
	return { type: ActionTypes.UPDATE_UI_SCROLL, targetY, easingType }
};

export const updateUILocked = (locked, ownerName) => {
	return (dispatch, getState) => {
		let { ui: { scroll: { owners } } } = getState();

		let filteredCount = (owners.filter((owner) => owner === ownerName)).length;

		if ((locked && !filteredCount) || (!locked && filteredCount)) {
			locked
				? (owners.push(ownerName))
				: ( owners = owners.filter((owner) => owner !== ownerName));

			lockScroll(owners.length > 0);
			dispatch(updateUILockedOwner(owners));
		}
	}
};
