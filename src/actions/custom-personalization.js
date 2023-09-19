import { ActionTypes, ApiMethods } from "constants/index";
import { requestAPI } from "utils/api";

export const requestProductList = params => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.GET,
      url: "/help/request-custom-order/product"
    })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  };
};

export const submitCustomPersonalization = params => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.POST,
      url: "/help/request-custom-order",
      params
    })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  };
};
