

import { ActionTypes, ApiMethods } from 'constants/index';
import { requestAPI } from 'utils/api';

export const updateProductGroup = (productGroups) => {
	return { type: ActionTypes.UPDATE_PRODUCT_GROUP, productGroups }
};

export const getProductByCategory = (category) => {
	return (dispatch, getState) => {
		let { product: { productGroups } } = getState();

    return productGroups.find(item => (Object.is(item[ 'category' ], category) && !item[ 'disabled' ])) || null;
	}
};

export const getProductGroupCodeByCategory = (categories) => {
	return (dispatch, getState) => {
		let { product: { productGroups } } = getState();

    return (categories || []).reduce((target, category) => {

      let group = productGroups.find(item => Object.is(item[ 'category' ], category) && !item[ 'disabled' ]);

      group && target.push(group[ 'value' ]);

      return target;
    }, []);
	}
};

export const getProductByProductGroupCode = (productGroupCode) => {
	return (dispatch, getState) => {
		let { product: { productGroups } } = getState();

		let group = productGroups ? productGroups.find(item => item[ 'value' ] === productGroupCode) : null;

		return group;
	}
};

export const requestProductGroup = () => {
	console.log("?")
	return (dispatch, getState) => {
		let { product: { productGroups } } = getState();

		console.log("productGroups  " , productGroups)

		if (!productGroups) {
			return requestAPI({
				method: ApiMethods.GET,
				url: '/product/group'
			}).then(result => {
				let { data } = result;

				return Promise.all([
					dispatch(updateProductGroup(data)),
					getState()
				]).then(results => {
					return results[ 1 ][ 'product' ][ 'productGroups' ];
				});
			}).catch(error => {
				throw error;
			});
		} else {
			return Promise.resolve(productGroups);
		}
	}
};
