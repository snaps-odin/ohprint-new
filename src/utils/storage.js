

import Cookies from 'js-cookie';

export const getUserToken = () => window.localStorage.getItem('OH_PRINT_ME_USER_TOKEN') || '';

export const setUserToken = (token) => window.localStorage.setItem('OH_PRINT_ME_USER_TOKEN', token);

export const removeUserToken = () => window.localStorage.removeItem('OH_PRINT_ME_USER_TOKEN');

export const getUserId = () => window.localStorage.getItem('OH_PRINT_ME_USER_ID') || null;

export const setUserId = (id) => window.localStorage.setItem('OH_PRINT_ME_USER_ID', id);

export const removeUserId = () => window.localStorage.removeItem('OH_PRINT_ME_USER_ID');

export const getLastVersion = () => '[___VERSION___]';

export const getCurrentVersion = () => window.localStorage.getItem('OH_PRINT_ME_BUILD_VERSION') || null;

export const setCurrentVersion = (version) => window.localStorage.setItem('OH_PRINT_ME_BUILD_VERSION', version);

//export const getConfig = () => window.localStorage.getItem('OH_PRINT_ME_CONFIG') || null;
export const getConfig = () => window.localStorage.getItem("OH_PRINT_ME_CONFIG");

export const setConfig = (config) => window.localStorage.setItem("OH_PRINT_ME_CONFIG",config);

export const getFilterVisited = () => window.localStorage.getItem('OH_PRINT_ME_FILTER_VISITED') || false;

export const setFilterVisited = () => { window.localStorage.setItem('OH_PRINT_ME_FILTER_VISITED', true) };

export const setEditorParams = (params) => window.localStorage.setItem('OH_PRINT_ME_EDITOR_PARAMS', params);

export const getEditorParams = () => window.localStorage.getItem('OH_PRINT_ME_EDITOR_PARAMS') || null;

export const clearEditorParams = () => window.localStorage.removeItem('OH_PRINT_ME_EDITOR_PARAMS');

export const setEditorPreviousUrl = (url) => window.localStorage.setItem('OH_PRINT_ME_EDITOR_PREVIOUS_URL', url);

export const getEditorPreviousUrl = () => window.localStorage.getItem('OH_PRINT_ME_EDITOR_PREVIOUS_URL') || null;

export const clearEditorPreviousUrl = () => window.localStorage.removeItem('OH_PRINT_ME_EDITOR_PREVIOUS_URL');

export const setNaverState = (state) => window.localStorage.setItem('nil_state', state);

export const getNaverState = () => window.localStorage.getItem('nil_state') || null;

export const removeNaverState = () => window.localStorage.removeItem('nil_state');

export const setRelease = () => window.localStorage.setItem('OH_PRINT_ME_RELEASE', true);

export const getRelease = () => window.localStorage.getItem('OH_PRINT_ME_RELEASE') || null;

export const setReviewNotificationHide = (yn) => window.localStorage.setItem('OH_PRINT_ME_REVIEW_NOTIFICATION_HIDE', yn);

export const getReviewNotificationHide = () => window.localStorage.getItem('OH_PRINT_ME_REVIEW_NOTIFICATION_HIDE') || null;

export const setEventBannerHide = (yn) => window.localStorage.setItem('OH_PRINT_ME_EVENT_BANNER_HIDE', yn);

export const getEventBannerHide = () => window.localStorage.getItem('OH_PRINT_ME_EVENT_BANNER_HIDE') || null;

export const setCartVisited = () => window.localStorage.setItem('OH_PRINT_ME_CART_VISITED', true);

export const getCartVisited = () => window.localStorage.getItem('OH_PRINT_ME_CART_VISITED') || false;

export const setOffsetNoticePopupVisited = () => window.localStorage.setItem('OH_PRINT_ME_OFFSET_NOTICE_POPUP_VISITED', true);

export const getOffsetNoticePopupVisited = () => window.localStorage.getItem('OH_PRINT_ME_OFFSET_NOTICE_POPUP_VISITED') || false;

export const setMarketingAgreePopupVisited = () => window.localStorage.setItem('OH_PRINT_ME_MARKETING_AGREE_POPUP_VISITED', true);

export const clearMarketingAgreePopupVisited = () => window.localStorage.removeItem('OH_PRINT_ME_MARKETING_AGREE_POPUP_VISITED');

export const getMarketingAgreePopupVisited = () => window.localStorage.getItem('OH_PRINT_ME_MARKETING_AGREE_POPUP_VISITED') || false;

export const setToastBanner = (isCheck) => window.localStorage.setItem('OHPRINT_TOAST_BANNER_WEB', isCheck);

export const getToastBanner = () => window.localStorage.getItem('OHPRINT_TOAST_BANNER_WEB');

export const getGaCID = () => window.localStorage.getItem('_ga') || "";

export const setMarketingData = (data) => {
  const r_data = {
    ...getMarketingData(),
    ...data
  }
  window.localStorage.setItem('MARKETING_DATA', JSON.stringify(r_data || {}))
};

export const getMarketingData = (data) => {
  let item = window.localStorage.getItem('MARKETING_DATA');
  item = JSON.parse(item);

  return item || {};
};


export const setLocalStorageItem = (key, value) => window.localStorage.setItem(key, value);
export const getLocalStorageItem = (key) => window.localStorage.getItem(key);
