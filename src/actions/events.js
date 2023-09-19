import { ActionTypes, ApiMethods } from "constants/index";
import { requestAPI } from "utils/api";

export const saveEventData = (eventList, styled) => {
  return { type: ActionTypes.SAVE_EVENT, eventList, styled };
};

export const requestEvents = (params) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.GET,
      url: "/event",
      params,
    })
      .then((result) => {
        let { data } = result;

        return data;
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const requestEvents2 = (params) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.GET,
      url: "/event",
      params,
    })
      .then((result) => {
        let { data } = result;

        return data;
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const eventAlready = (eventIdx, params = {}) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.GET,
      url: `/event/bbs/${eventIdx}/joined`,
      params,
    })
      .then((result) => {
        return {
          ...result.data,
        };
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const requestEventsDetailByIdx = (idx) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.GET,
      url: `/event/${idx}`,
      params: { idx },
    })
      .then((result) => {
        let { data } = result;

        return data;
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const requestEventsOthersByIdx = (idx) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.GET,
      url: `/event/other/${idx}`,
      params: { idx },
    })
      .then((result) => {
        let { data } = result;

        return data;
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const requestEventsCommentsByIdx = (eventIdx, params) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.GET,
      url: `/event/bbs/${eventIdx}`,
      params,
    })
      .then((result) => {
        let { data } = result;

        return data;
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const createEventsCommentsByIdx = (eventIdx, params) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.POST,
      url: `/event/bbs/${eventIdx}`,
      params,
    })
      .then((result) => {
        let { data } = result;

        return data;
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const requestEventsWinnerByIdx = (idx) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.GET,
      url: `/event/winner/${idx}`,
      params: { idx },
    })
      .then((result) => {
        let { data } = result;

        return data;
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const createEventsCouponByIdx = (idx) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.POST,
      url: `/event/coupon/${idx}`,
    })
      .then((result) => {
        let { data } = result;

        return data;
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const requestEventsCouponByIdx = (idx) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.GET,
      url: `/event/coupon/${idx}`,
    })
      .then((result) => {
        let { data } = result;

        return data;
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const createEventsFriendByIdx = (idx, params) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.POST,
      url: `/event/bbs/${idx}/friend`,
      params,
    })
      .then((result) => {
        let { data } = result;

        return data;
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const createFormBBS = (formData, eventIdx) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.POST,
      url: `/event/bbs/${eventIdx}/file`,
      params: formData,
    })
      .then((result) => {
        let { data } = result;

        return data;
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const createGiftCard = (formData) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.POST,
      url: `/voucher`,
      params: formData,
    })
      .then((result) => {
        let { data } = result;

        return data;
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const requestGiftCardPriceInfo = () => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.GET,
      url: `/voucher/priceInfo`,
    })
      .then((result) => {
        let { data } = result;

        return data;
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const createCollaborationStoreCart = (params) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.POST,
      url: `/store/collabo/cart`,
      params,
    })
      .then((result) => {
        let { data } = result;

        return data;
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const saveZeroDeal = (isZeroDeal) => {
  return {
    type: "SAVE_ZERO_DEAL",
    payload: isZeroDeal,
  };
};

export const setMarketingAgree = (eventIdx, emailAgree, smsAgree) => {
  return (dispatch, getState) => {
    let params = {
      receiveEmailAgree: emailAgree,
      receiveSMSAgree: smsAgree,
    };

    return requestAPI({
      method: ApiMethods.POST,
      url: `/event/bbs/${eventIdx}`,
      params,
    })
      .then((result) => {
        let { data } = result;

        return data;
      })
      .catch((error) => {
        throw error;
      });
  };
};
