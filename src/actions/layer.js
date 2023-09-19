

import { ActionTypes } from 'constants/index';

export const updateLayer = () => {
	return { type: ActionTypes.UPDATE_LAYER }
};

export const updateTransparentModeLayer = (bool) => {
	return { type: ActionTypes.UPDATE_TRANSPARENT_MODE_LAYER, bool }
};

export const updateRoundModeLayer = (bool) => {
	return { type: ActionTypes.UPDATE_ROUND_MODE_LAYER, bool }
};

export const openContentsLayer = (type, options) => {
	return { type: ActionTypes.OPEN_CONTENTS_LAYER, contents: { type, options } }
};

export const closeContentsLayer = () => {
	return { type: ActionTypes.CLOSE_CONTENTS_LAYER }
};

export const openAlertLayer = (options) => {
	return { type: ActionTypes.OPEN_ALERT_LAYER, alert: { options } }
};

export const closeAlertLayer = () => {
	return { type: ActionTypes.CLOSE_ALERT_LAYER }
};

export const openLoadingLayer = () => {
	return { type: ActionTypes.OPEN_LOADING_LAYER }
};

export const closeLoadingLayer = () => {
	return { type: ActionTypes.CLOSE_LOADING_LAYER }
};

export const closeLayer = () => {
	return { type: ActionTypes.CLOSE_LAYER }
};