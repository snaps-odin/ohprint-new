

import { ActionTypes, ApiMethods, CSTypes } from 'constants/index';
import { requestAPI } from 'utils/api';

export const appearCS = () => {
	return { type: ActionTypes.APPEAR_CS }
};

export const openCS = () => {
	return { type: ActionTypes.OPEN_CS }
};

export const closeCS = () => {
	return { type: ActionTypes.CLOSE_CS }
};

export const touchCS = () => {
	return { type: ActionTypes.TOUCH_CS }
};

export const changeCSTitleBack = (func) => {
	return { type: ActionTypes.CHANGE_CS_TITLE_BACK, func }
};

export const changeCSTitlePop = (func) => {
	return { type: ActionTypes.CHANGE_CS_TITLE_POP, func }
};

export const changeCSTabWidth = (width) => {
	return { type: ActionTypes.CHANGE_CS_TAB_WIDTH, width }
};

export const changeCSTabFocus = (index) => {
	return { type: ActionTypes.CHANGE_CS_TAB_FOCUS, index }
};

export const resetCSContentHeight = (height) => {
	return { type: ActionTypes.RESET_CS_CONTENT_HEIGHT, height }
};

export const changeCSContentHeight = (height) => {
	return { type: ActionTypes.CHANGE_CS_CONTENT_HEIGHT, height }
};

export const updateCSPopItem = (item, mode) => {
	return { type: ActionTypes.UPDATE_CS_POP_ITEM, item, mode }
};

export const deleteCSQNAPopItems = () => {
	return { type: ActionTypes.DELETE_CS_QNA_POP_ITEMS }
};

export const touchCSPopItem = (touched) => {
	return { type: ActionTypes.TOUCH_CS_POP_ITEM, touched }
};

export const dragCSPopItem = (dragging) => {
	return { type: ActionTypes.DRAG_CS_POP_ITEM, dragging }
};

export const updateCSTalkConnect = (connected) => {
	return { type: ActionTypes.UPDATE_CS_TALK_CONNECT, connected }
};

export const setCSTopScrollShow = (show) => {
	return { type: ActionTypes.SET_CS_TOP_SCROLL_SHOW, show }
};
