import { ActionTypes, ApiMethods } from 'constants/index';
import { requestAPI, requestJSON } from 'utils/api';


export const requestStoreFairCreator = (params) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.GET,
      url: `/store/fair/creator`,
      params
    }).then(result => {
      let { data } = result;

      return data;
    }).catch(error => {
      throw error;
    });
  }
};



export const requestStoreFairCreatorDetail = (creatorType,params) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.GET,
      url: `/store/fair/creator/product/${creatorType}`,
      params
    }).then(result => {
      let { data } = result;

      return data;
    }).catch(error => {
      throw error;
    });
  }
};


export const createStoreFairCart = (projectCode, itemCnt, params) => {

  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.POST,
      url: `/store/fair/${projectCode}/copy/${itemCnt}`,
      params
    }).then(result => {
      let { data } = result;

      return data;
    }).catch(error => {
      throw error;
    });
  }
};
