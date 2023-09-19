

import { ActionTypes, ApiMethods } from 'constants/index';
import { requestAPI } from 'utils/api';

export const resetCart = () => {
	return { type: ActionTypes.RESET_CART }
};

const updateCarts = (data) => {
	return { type: ActionTypes.UPDATE_CART, list: data }
};

const updateCartCount = (count) => {
	return { type: ActionTypes.UPDATE_CART_COUNT, count }
};

export const updateCartItem = (data, mode) => {
	return { type: ActionTypes.UPDATE_CART_ITEM, item: data, mode }
};

const searchCarts = (data, keyword, searchType) => {
  return { type: ActionTypes.SEARCH_CART, list: data, keyword, searchType }
};

export const keywordSortCarts = (data, keyword, searchType) => {
  return (dispatch, getState) => {
    Promise.all([
      dispatch(searchCarts({ 'webCartList': data }, keyword, searchType || 'null')),
      dispatch(requestCartCount())
    ]).then((res)=>{
      return (res[0] || []);
    })
  }
}

export const requestCartsNotUpdate = (params) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.GET,
      url: '/cart',
      params
    }).then(result => {
      let { data } = result;

      return data;
    }).catch(error => {
      throw error;
    });
  }
};

export const requestCarts = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/cart',
			params
		}).then(result => {
			let { data } = result;

			return Promise.all([
				dispatch(updateCarts({ 'webCartList': data })),
				dispatch(requestCartCount())
			]).then(() => {
				return data;
			});
		}).catch(error => {
			throw error;
		});
	}
};

export const requestCartCount = () => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/cart/count'
		}).then(result => {
			let { data } = result;

			return Promise.all([
				dispatch(updateCartCount(data[ 'count' ]))
			]).then(() => {
				return data;
			}).catch(error => {
				throw error;
			});
		})
	}
};

export const requestCartByProjectCode = (projectCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/cart/project/${projectCode}`
		}).then(result => {
			let { data } = result;

			return data
		}).catch(error => {
			throw error;
		});
	}
};

export const deleteCartByProjectCode = (projectCodes) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.DELETE,
			url: `/cart/project/${projectCodes}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const updateCartQuantityByProjectCode = (projectCode, quantity, params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.PUT,
			url: `/cart/project/${projectCode}/quantity/${quantity}`,
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const createCartByProjectCode = (projectCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: `/cart/project/${projectCode}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestCartEditCheck = (projectCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/cart/project/${projectCode}/edit-check`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const createCartSaveAs = (projectCode, projectName) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: `/cart/project/${projectCode}/save-as`,
			params: {
				projectName
			}
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestCartEstimate = (projectCodes) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/cart/estimate/${projectCodes}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const createCartCopyByProjectCode = (projectCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: `/cart/project/${projectCode}/copy`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const updateCartProjectNameByProjectCode = (projectCode, params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.PUT,
			url: `/cart/project/${projectCode}/name`,
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	};
};

export const updateCartOptionByProjectCode = (projectCode, params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.PUT,
			url: `/cart/project/${projectCode}/option`,
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	};
};
