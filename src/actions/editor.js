

import { ActionTypes } from 'constants/index';

import { setEditorPreviousUrl } from 'utils/storage';

export const updateEditorParams = (data, templateUseType) => {
	return { type: ActionTypes.UPDATE_EDITOR_PARAMS, data, templateUseType };
};

export const resetEditorParams = () => {
	return { type: ActionTypes.RESET_EDITOR_PARAMS };
};

export const updateGAParams = (data) => {
  return { type: ActionTypes.UPDATE_GA_PARAMS, data };
};

export const updateEditor = (data, templateUseType) => {
	return (dispatch, getState) => {
		return Promise.all([
			setEditorPreviousUrl(`${window.location.pathname}${window.location.search ? window.location.search : ''}`)
		]).then(() => {
			dispatch(updateEditorParams(data, templateUseType || "ALL"));
		});
	}
};

export const resetEditor = () => {
	return (dispatch, getState) => {
		dispatch(resetEditorParams());
	}
};

export const updateGAData = (data) => {
  return (dispatch, getState) => {
    dispatch(updateGAParams(data));
  }
}
