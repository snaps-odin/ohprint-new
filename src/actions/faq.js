

import { ActionTypes, ApiMethods, CSTypes } from 'constants/index';
import { requestAPI } from 'utils/api';

export const getFAQCategoryInfoByPathname = (pathname) => {
	return (dispatch, getState) => {
		let { product: { productGroups }, editor: { data: { productCode } } } = getState();

		let code = null;

		let pathNames = pathname.substring(1).split('/');

		switch (pathNames[ 0 ]) {
			case 'store':
				switch (pathNames[ 1 ]) {
					case 'signs-posters':
						code = 'signs-posters_overview';
						break;

					case 'pr':
						code = 'pr_overview';
						break;

					default:
						code = `${pathNames[ 1 ]}_${pathNames[ 2 ]}`;
						break;
				}
				break;

			case 'member':
				switch (pathNames[ 1 ]) {
					case 'profile':
						code = 'member_profile';
						break;

					case 'withdraw':
						code = 'member_withdraw';
						break;

					case 'coupon':
						code = 'member_coupon';
						break;

					case 'delivery':
						code = 'member_delivery';
						break;

					case 'bag':
						code = 'member_bag';
						break;

					case 'cart':
						code = 'member_cart';
						break;

					case 'order':
						code = 'member_order';
						break;
				}
				break;

			case 'payment':
				code = 'payment';
				break;

			case 'events':
				code = 'event';
				break;

			case 'tutorial':
				code = 'tutorial';
				break;

			case 'editor':
				let group = (productGroups.find(item => (Object.is(item[ 'value' ], (productCode || '').slice(0, 3)))) || {});

				code = group[ 'category' ] ? `${group[ 'category' ]}_editor` : 'FAQ_EDITOR';
				break;

			case 'policy':
				switch (pathNames[ 1 ]) {
					case 'terms':
						code = 'policy_terms';
						break;

					case 'privacy':
						code = 'policy_privacy';
						break;
				}
				break;

			default:
				code = 'home';
				break;
		}

		return { code };
	}
};

export const requestFAQCategories = () => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/help/faq/category'
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		})
	}
};

export const requestFAQList = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/help/faq',
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestFAQByBoardId = (boardId, listMode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/help/faq/${boardId}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			return error;
		})
	}
};

export const updateFAQEvaluationByBoardId = (boardId, evaluation) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.PUT,
			url: `/help/faq/${boardId}`,
			params: { evaluation }
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			return error;
		})
	}
};

export const updateFAQViewCountByBoardId = (boardId) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.PUT,
			url: `/help/faq/${boardId}/view`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			return error;
		})
	}
};
