

import { ActionTypes, ApiMethods, CSTypes } from 'constants/index';
import { ActionCS } from 'actions/index';
import { requestAPI } from 'utils/api';
import * as Validate from 'utils/validate';

export const updateQNALastItem = (item) => {
	return { type: ActionTypes.UPDATE_QNA_LAST_ITEM, item }
};

export const getQNABrowserType = () => {
	return (dispatch, getState) => {
		return (Validate.browserType() || '')
			.replace(/msie9/, 'IE_9')
			.replace(/msie10/, 'IE_10')
			.replace(/msie11/, 'IE_11')
			.replace(/unknown-browser/, 'ETC')
			.toUpperCase();
	}
};

export const requestQNACategories = () => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/help/qna/category'
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestQNAList = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/help/qna',
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const createQNA = (formData) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: '/help/qna',
			params: formData
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestQNAOrders = () => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/help/qna/orderHistory'
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};
export const requestQNAByBoardIdForDelete = (boardId, mode) => {
  return (dispatch, getState) => {
    dispatch(updateQNALastItem({ boardId }));
    dispatch(ActionCS.updateCSPopItem({ type: CSTypes.QNA, value: { boardId } }, CSTypes.REMOVE))
  }
}


export const requestQNAByBoardId = (boardId, mode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/help/qna/${boardId}`
		}).then(result => {
			let { data } = result;

			return Promise.all([
				dispatch(updateQNALastItem(data)),
				mode !== CSTypes.APPEND && dispatch(ActionCS.updateCSPopItem({ type: CSTypes.QNA, value: data }, mode))
			]).then(() => {
				return data;
			});

		}).catch(error => {
			Promise.all([
				dispatch(updateQNALastItem({ boardId })),
				dispatch(ActionCS.updateCSPopItem({ type: CSTypes.QNA, value: { boardId } }, CSTypes.REMOVE))
			]).then(() => {
				throw error;
			});
		})
	}
};

export const createQNAByBoardId = (boardId, formData) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: `/help/qna/${boardId}`,
			params: formData
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		})
	}
};

export const createQNAByBoardIdSeq = (boardId, boardSeq, formData) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: `/help/qna/${boardId}/${boardSeq}`,
			params: formData
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		})
	}
};

export const deleteQNAByBoardId = (boardId, boardSeq) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.DELETE,
			url: `/help/qna/${boardId}/${boardSeq}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		})
	}
};
