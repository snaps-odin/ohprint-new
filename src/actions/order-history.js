

import { ActionTypes, ApiMethods } from 'constants/index';
import { requestAPI } from 'utils/api';

export const requestOrderHistories = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/order/history',
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestOrderHistoryByOrderCode = (orderCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/order/history/${orderCode}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestOrderHistoryDepositByOrderCode = (orderCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/order/history/${orderCode}/deposit`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const updateOrderHistoryDeliveryAddressByOrderCode = (orderCode, params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.PUT,
			url: `/order/history/${orderCode}/deliveryAddress`,
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestOrderHistorySimpleByOrderCode = (orderCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/order/history/${orderCode}/simple`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestOrderHistoryTaxByOrderCode = (orderCode, receiptType) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/order/history/tax/${orderCode}`,
			params: { receiptType: receiptType || 'RECEIPT' }
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		})
	}
};

export const requestOrderHistoryTaxInVoiceByOrderCode = (orderCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/order/history/tax/receipt/${orderCode}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const createOrderHistoryTaxInVoice = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: '/order/history/tax',
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const createOrderHistoryReOrderByOrderCode = (orderCode, projectCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: `/order/history/${orderCode}/project/${projectCode}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const deleteOrderHistoryByOrderCode = (orderCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.DELETE,
			url: `/order/history/${orderCode}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestOrderHistoryCashReceiptByOrderCode = (orderCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/order/history/${orderCode}/cashReceipt`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const createOrderHistoryCashReceiptByOrderCode = (orderCode, params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: `/order/history/${orderCode}/cashReceipt`,
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestOrderHistoryReOrderByOrderCode = (orderCode, projectCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/order/history/${orderCode}/project/${projectCode}/attach`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};