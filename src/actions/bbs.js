

import { ActionTypes, ApiMethods } from 'constants/index';
import { requestAPI } from 'utils/api';

const updateDesignQNAProductGroupCode = (data) => {
	return { type: ActionTypes.UPDATE_DESIGN_QNA_PRODUCT_GROUP_CODE, products: data }
};

export const requestDesignQNA = () => {
	return (dispatch, getState) => {
		let { bbs: { products } } = getState();

		if (!products) {
			return requestAPI({
				method: ApiMethods.GET,
				url: '/bbs/design/product'
			}).then(result => {
				let { data } = result;

				return Promise.all([
					dispatch(updateDesignQNAProductGroupCode(data))
				]).then(() => {
					return data;
				});
			}).catch(error => {
				throw error;
			});
		} else {
			return Promise.resolve();
		}
	}
};

export const requestDesignQNAFilterByProductGroupCode = (productGroupCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/bbs/design/filter',
			params: { productGroupCode }
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const createDesignQNA = (data) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: '/bbs/design/qna',
			params: data
		})
	}
};