

import { ActionTypes, ApiMethods } from 'constants/index';
import { ActionStore, ActionProduct } from 'actions/index';
import { requestAPI } from 'utils/api';

export const requestReviews = (params, productApparelCode) => {
	return (dispatch, getState) => {
		let { category, subCategory } = params;

		let categories = [];

		switch (category) {
			case 'banner':
				categories = [
					'placard-banner',
					'standard-banner',
					'double-side-banner',
					'rollup-banner',
					'mini-banner'
				];
				break;

			case 'signs-posters':
				categories = [
					'board-sign',
					'acrylic-sign',
					'metal-sign',
					'wooden-frame-sign',
					'table-top-sign',
					'a-frame-sign',
					'car-magnet',
					'poster'
				];
				break;

			case 'pr':
				categories = [
					'flyer',
					'brochure',
					'menu',
					'post-card',
					'coupon'
				];
				break;


      case 'md':
        categories = [
          'acrylic-keyring',
          'pin-button',
          'mirror-button',
          'magnet-button',
          'smart-tok'
        ];
        break;

      case 'packaging':
        categories = [
          'envelope',
          'shoppingbag'
        ];
        break;

			default:
				categories = [ category ];
				break;
		}
    //https://dev-www.ohprint.me/v1/review/?category=&offset=0&limit=5&reviewType=NORMAL&&storeOptionType=

		let productGroupCode = dispatch(ActionProduct.getProductGroupCodeByCategory(categories));

		if(category === "apparel"){
			productGroupCode = (productGroupCode || []).reduce((target,item) =>{
				if(!subCategory){
					(category && category==="apparel") && target.push("7");
				}else{
					(category && category==="apparel") && target.push(productApparelCode);
				}
				return target;
			},[]);
		}

		let prodType = ((category && category === "fair") ? "CREATOR" : "NORMAL");


		let storeOptionType = (category && subCategory)
			? ActionStore.getStoreOptionTypes(category, subCategory)
			: null;

		return requestAPI({
			method: ApiMethods.GET,
			url: '/review',
			params: {
				...params,
				productGroupCode,
				storeOptionType,
        prodType
			}
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		})
	}
};

export const requestReviewByOrderCode = (orderCode, projectCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/review/${orderCode}`,
			params: { projectCode }
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const createReview = (formData) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: '/review',
			params: formData
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestReviewNotification = () => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/review/notification'
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};
