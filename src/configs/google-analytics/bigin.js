import {PRODUCT_TYPE} from "./common";
import {getEnv} from "../../utils/url";
import {getMarketingData} from "../../utils/storage";

const EVENT_TYPE = {
  "BIGIN_VIEW_ITEM" : "bigin_view_item",
  "BIGIN_CART_ADD" : "bigin_cart_add"
}

export const bigin_view_item = () => {
  const data = getMarketingData() || null;
  if(!data) return;

  const { category, price, quantity } = data;

  let product_type = PRODUCT_TYPE[category];
  sendDataLayer({
    'event' : EVENT_TYPE.BIGIN_VIEW_ITEM,
    'id': product_type,
    'name': product_type,
    'price': price,
    'thumbnail': [],
    'brand': '',
    'quantity' : quantity,
    'category': product_type
  })
}

export const bigin_cart_add = () => {
  const data = getMarketingData() || null;
  if(!data) return;

  const { category, price, quantity } = data;

  let product_type = PRODUCT_TYPE[category];
  sendDataLayer({
    'event' : EVENT_TYPE.BIGIN_CART_ADD,
    'id': product_type,
    'name': product_type,
    'price': price,
    'thumbnail': [],
    'brand': '',
    'quantity' : quantity,
    'category': product_type
  })
}



const sendDataLayer = (params) => {
  let checkEnv = (getEnv() === "prd");
  console.debug("dataLayer :: ",params);
  if(checkEnv){
    dataLayer.push({
      ...params
    })
  }

}