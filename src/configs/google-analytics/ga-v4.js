import reactGTM from "utils/react-gtm-module";
import React from "react";
import {getEnv} from "utils/url";
import { getGaCID } from 'utils/storage';
import {MENUS} from "../menus";

const NULL_STR = '';
const CHANNEL = 'WEB';

const getCID = () => {
  const cidOrigin = getGaCID().split(".");
  if(cidOrigin.length > 0){
    return cidOrigin[2];

  }else if(cidOrigin.length === 0){
    return "";
  }
}

const getCategories = (path) => {
  let CP_MENUS = JSON.parse(JSON.stringify(MENUS));

  return CP_MENUS.reduce((target, menu, idx) => {
    if(menu.path === path) {
      target.push(menu.name);
      CP_MENUS.splice(idx);
    } else {
      const idx = menu.children.findIndex(child => child.path === path);

      if(idx >= 0) {
        const parents = menu.children.filter((child, parentIdx) => child.type ==='title' && parentIdx < idx );

        if(parents.length > 0) target.push(menu.name, parents[parents.length-1].name, menu.children[idx].name);
        else target.push(menu.name, menu.children[idx].name);
        CP_MENUS.splice(idx);
      }
    }
    return target;
  }, [])
}

export const getBrandName = (type) => {
  switch(type) {
    case 'ALL':
      return '오프린트미 템플릿 사용하기';
    case 'SELF_MADE':
      return '직접 디자인 하기';
    case 'USER_MADE':
      return '내 디자인 업로드';
    default :
      return type;
  }
}

export const getConcatCoupons = (coupons) => {
  return coupons.reduce((target, coupon) => target.concat(coupon), []);
}

export const gtmV4_user_property = (data, userGrade) => {
  const { userNo, userLevel } = data;
  let userRank = (((userGrade || []).find((grade)=> grade[ 'userLevel' ] === userLevel)) || userLevel);

  sendLayer({
    member_cid: getCID()+"",
    uid: userNo+"",
    member_gender: NULL_STR,
    member_age: NULL_STR,
    member_channel: CHANNEL,
    member_level: (userRank === userLevel) ? userLevel : userRank.userLevelName,
    member_nationality: 'KR'
  })
}

export const gtmV4_click_banner_main = (data) => {
  sendLayer({
    event: 'click_banner_main',
    click_text: data.click_text || NULL_STR,
    alt_tag: data.alt_tag || NULL_STR,
    img_url: data.img_url || NULL_STR,
    position: '5'
  })
}

export const gtmV4_login = (data) => {
  const { method, uid } = data;

  sendLayer({
    event: 'login_ga4',
    method: method
  })
}

export const gtmV4_sign_up = (data) => {
  const { method, uid } = data;

  sendLayer({
    event: 'sign_up',
    method: method
  })
}

export const gtmV4_begin_registration_layer = () => {
  sendLayer({
    event: 'begin_registration_layer',
    click_text: '로그인레이어_회원가입'
  })
}

export const gtmV4_click_cs = (click_txt) => {
  sendLayer({
    event: 'click_cs',
    click_text: click_txt
  })
}

export const gtmV4_click_banner_toast = (url) => {
  sendLayer({
    event: 'click_banner_toast',
    click_text: '메인_토스트',
    alt_tag: '메인_토스트',
    // img_url: url
  })
}

export const gtmV4_move_to_cart = () => {
  sendLayer({
    event: 'move_to_cart',
    click_text: '장바구니 가기'
  })
}

export const gtmV4_select_template_detail = (data) => {
  const { idx, text, type } = data;
  sendLayer({
    event: 'select_template_detail',
    position: idx,
    click_text: text,
    design_type: type
  })
}

export const gtmV4_select_editor = (evt_name, position, text) => {
  sendLayer({
    event: evt_name,
    position: position,
    click_text: text
  })
}

export const gtmV4_submit = (options) => {
  sendLayer({
    event: 'submit',
    item_variant: options,
    click_text: '시작하기'
  })
}

export const gtmV4_select_item = (options) => {
  const { path, name, price, img, brandName } = options;
  const [category1, category2, category3] = getCategories(path);

  sendLayer({
    event: 'select_item',
    ecommerce: {
      currency:'KRW',
      items: [
        {
          item_name: name,  // 상품이름
          price: price || 0,  //상품 가격
          item_brand: brandName || NULL_STR, //상품 브랜드
          item_category: category1 || NULL_STR,
          item_category2: category2 || NULL_STR,
          item_category3: category3 || NULL_STR,
          // img_url: img || NULL_STR
        }
      ]
    }
  })
}

export const gtmV4_view_item = (options, handleUpdateGAData) => {
  const { path, name, price, img, brandName } = options;
  const [category1, category2, category3] = getCategories(path);

  const params = {
    item_name: name,  // 상품이름
    price: price || 0,  //상품 가격
    item_brand: brandName || NULL_STR, //상품 브랜드
    item_category: category1 || NULL_STR,
    item_category2: category2 || NULL_STR,
    item_category3: category3 || NULL_STR,
    // img_url: img || NULL_STR
  };

  handleUpdateGAData(params);

  sendLayer({
    event: 'view_item',
    ecommerce: {
      currency:'KRW',
      items: [
        params
      ]
    }
  })
}

export const gtmV4_remove_from_cart = (options) => {
  sendLayer({
    event: 'remove_from_cart',
    ecommerce: {
      currency: 'KRW',
      items: options
    }

  })
}

export const gtmV4_order = (type, options, payment_type) => {
  let ecommerce = {
    currency: 'KRW',
    items: options
  }
  if(!!payment_type) ecommerce['payment_type'] = payment_type;

  sendLayer({
    event: type,
    ecommerce: ecommerce
  })
}

export const gtmV4_refund = (data) => {
  let { orderCode, payment_type, shipping, totalPrice, coupon, discount_coupon, discount_point, discount_items_coupon, options } = data;
  sendLayer({
    event: 'refund',
    ecommerce: {
      payment_type: payment_type,                         //최종 결제 수단 전송
      currency: 'KRW',
      value: totalPrice,                              //쿠폰, 포인트 등 할인 적용된 가격
      shipping: shipping,
      transaction_id: orderCode,
      coupon: coupon,                             //거래 적용 쿠폰
      discount_coupon: discount_coupon,             //전체 할인 금액
      discount_point: discount_point,               //포인트 할인 금액
      discount_items_coupon: discount_items_coupon, //총 상품 쿠폰 금액
      discount_cart: 0,                             //장바구니 할인 금액
      items: options
    }
  })
}

export const gtmV4_purchase = (options, items) => {
  const { bankName, settlementAmount, deliveryAmount, orderCode, useCouponAmount, userMoney, orderUseCouponList } = options;

  let coupon = orderUseCouponList.reduce((target, item) => {
    if(!item.projectCode) target.push(item.joinCompany);
    return target;
  }, []).join(" / ");

  sendLayer({
    event: 'purchase_ga4',
    ecommerce: {
      payment_type: bankName,
      currency: 'KRW',
      value: settlementAmount,
      shipping: deliveryAmount,
      transaction_id: orderCode,
      coupon: coupon,
      discount_coupon: useCouponAmount,
      discount_point: userMoney,
      discount_items_coupon: useCouponAmount,         // discount_cart랑 구분 불가 (쿠폰코드 같음)
      discount_cart: useCouponAmount,                 //장바구니 할인 금액
      items: items
    }
  })
}

export const gtmV4_add_to_cart = (options, templateUseType) => {
  sendLayer({
    event: 'add_to_cart',
    ecommerce:{
      currency:'KRW',
      design_type: getBrandName(templateUseType),
      items:[
        options
      ]
    }
  })
}

const sendLayer = (dataLayer) => {
  let convertEnv = (getEnv() || '').toUpperCase();

  if(convertEnv === 'PRD') {
    if("ecommerce" in dataLayer){
      reactGTM.dataLayer({
        dataLayer : {
          ecommerce: null
        }
      });
    }
    reactGTM.dataLayer({dataLayer});
  }
  else console.debug("v4_dataLayer :: ",dataLayer);
}


