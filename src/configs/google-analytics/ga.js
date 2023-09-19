import reactGTM from "utils/react-gtm-module";
import React from "react";

export const dataLayerLogin = (data, userGrade) => {
  const { userNo, userLevel } = data;
  let userRank = (((userGrade || []).find((grade)=> grade[ 'userLevel' ] === userLevel)) || userLevel);

  let dataLayer = {
      'event': 'login',
      'et_category': 'Log In',
      'et_action': (userRank === userLevel) ? userLevel : userRank.userLevelName, //회원등급
      'et_label': userNo+"", //유저 ID
      'userId': userNo+"",
      'dimension10': 'true', // 로그인한 세션 여부
      //빅인
      "id" : data.userId || "",
      "email" : data.email || "",
      "name" : data.userName || "",
      "phoneNumber" : data.phoneNumber ? data.phoneNumber : "",
      "phoneCell" : data.phoneCell ? data.phoneCell : "",
      "emailAgree" : data.emailAgree || "",
      "phoneAgree" : data.phoneAgree || ""
  }

  sendLayer(dataLayer);
};

export const dataLayerJoinAndLogin = (userNo, userLevel, userGrade) => {
  let userRank = (((userGrade || []).find((grade)=> grade[ 'userLevel' ] === userLevel)) || userLevel);

  let dataLayer = {
    'event': 'registration',
    'et_category': 'Registration',
    'et_action': (userRank === userLevel) ? userLevel : userRank.userLevelName, //회원등급
    'userId': userNo+"", //유저 ID
    'dimension10': 'true', //로그인한 세션 여부
  };

  sendLayer(dataLayer);
};


export const dataLayerSample_package1 = () => {

  let dataLayer = {
    'event': 'sample_package1',
    'et_category': 'Sample Package',
    'et_action': '샘플 팩 알아보기',
    'et_label': undefined
  }

  sendLayer(dataLayer);
};

export const dataLayerSample_package2 = () => {
  let dataLayer = {
    'event': 'sample_package2',
    'et_category': 'Sample Package',
    'et_action': '샘플 팩 무료 구매하기',
    'et_label': undefined
  }

  sendLayer(dataLayer);
};

export const dataLayerMemberOrder = (products, handleGetTemplateSpec) => {
  let dataLayer={};
  let productList = (products || []).reduce((target,item,idx) => {

    let optionQuantityList = item.optionQuantityList;
    let handleVariant = handleGetTemplateSpec(item);
    let productName = item.productName;

    let variant = (handleVariant || []).reduce((target, option) => {
      let { label, value, optionQuantityList } = option;

      if(!(label || '').match(/수량/i)){
        target = (target ? target+"::"+value : value);
      }

      return target;
    }, "");

    productName && (variant = ((!variant || variant === "") ? productName : productName+"::"+variant));

    if(optionQuantityList && optionQuantityList.length > 0){
      (optionQuantityList || []).reduce((listTarget,size,idx) => {
        let quan = size.quantity;
        (quan > 0) && target.push({
          name : item.productGroupName,
          id : item.projectCode,
          category : ((item.productGroupCode.substr(0,1)) === "9" ? "accessory" : "designable"),
          quantity : Number(quan),
          variant : variant+ "::" + size.name,
          brand : item.templateName
        });

      },[]);
    }else{
      target.push({
        name : item.productGroupName,
        id : item.projectCode,
        category : ((item.productGroupCode.substr(0,1)) === "9" ? "accessory" : "designable"),
        quantity : Number(item.quantity),
        variant : variant,
        brand : item.templateName
      });
    }



    return target;

  },[]);

    dataLayer = {
      'event': 'eec.checkout1',
      'ecommerce': {
        'checkout': {
          'actionField': { 'step': 1 },
          'products' : productList
        }
      }
    };


  sendLayer(dataLayer);
};

export const dataLayerMemberOrderVisited = () => {
  let dataLayer = {
    'event': 'eec.checkout2',
    'ecommerce': {
      'checkout': {
        'actionField': {
          'step': 2
        }
      }
    }
  }

  sendLayer(dataLayer);
};

export const dataLayerPayment = () => {
  let dataLayer = {
    'event': 'eec.checkout6',
    'ecommerce': {
      'checkout': {
        'actionField': {
          'step': 6
        }
      }
    }
  }

  sendLayer(dataLayer);
};

export const dataLayerTranscation = (orderInfo,handleGetTemplateSpec, paymentMethods) => {
  let detailProductList = (orderInfo.orderDetailList || []);

  let isFreeDelivery = "na";

  let totalDiscountMoney = (orderInfo.orderUseCouponList || []).reduce((target, option) => {
    let { couponType, projectCode, useAmount } = option;

    if(!projectCode){
      if(couponType === "C"){
        isFreeDelivery = "무료배송쿠폰";
      }else{
        target += useAmount;
      }
    }

    return target;
  }, 0);

  let productList = (detailProductList || []).reduce((target,item,idx) => {

    let optionQuantityList = item.optionQuantityList;
    let handleVariant = handleGetTemplateSpec(item);
    let productName = item.productName;
    let coupons = (orderInfo.orderUseCouponList || []).find((coupon) => (coupon.projectCode && (coupon.projectCode === item.projectCode) ));
    let isFair = (!!item.creatorProjCode);
    let itemPrice = Number(item.settlementAmount);
    let quantity = Number(item.quantity);

    let variant = (handleVariant || []).reduce((target, option) => {
      let { label, value, optionQuantityList } = option;

      if(!(label || '').match(/수량/i)){
        target = (target ? target+"::"+value : value);
      }

      return target;
    }, "");

    item.productEtcName && (variant =variant + "::" + (item.productEtcName).replace(/,/g,'::'))

    productName && (variant = ((!variant || variant === "") ? productName : productName+"::"+variant));

    if(optionQuantityList && optionQuantityList.length > 0){
      (optionQuantityList || []).reduce((listTarget,size,idx) => {
        let quan = Number(size.quantity);
        (quan > 0) && target.push({
          name : item.productGroupName,
          id : item.projectCode,
          category : (isFair ? 'fair' : ((item.productGroupCode.substr(0,1)) === "9" ? "accessory" : "designable")),
          quantity : quan,
          variant : variant+ "::" + size.name,
          brand : (isFair ? 'na' : item.templateName),
          price : (itemPrice/quantity).toFixed(2),
          coupon : (coupons ? coupons.joinCompany : "na"),
          metric4 : ((item.useCouponAmount/quantity)*quan).toFixed(2),
        });

      },[]);
    }else{

      target.push({
        name : item.productGroupName,
        id : item.projectCode,
        category : (isFair ? 'fair' : ((item.productGroupCode.substr(0,1)) === "9" ? "accessory" : "designable")),
        quantity : quantity,
        variant : variant,
        brand : (isFair ? 'na' : item.templateName),
        price : (itemPrice/quantity).toFixed(2),
        coupon : (coupons ? coupons.joinCompany : "na"),
        metric4 : (item.useCouponAmount).toFixed(2)
      });
    }

    return target;

  },[]);

  let dataLayer = {
    'event': 'eec.purchase',
    'ecommerce': {
      'currencyCode': 'KRW',
      'purchase': {
        'actionField': {
          'id': orderInfo.orderCode,
          'revenue': orderInfo.settlementAmount,
          'coupon': (orderInfo.orderUseCouponList || []).reduce((target, item, idx) => {

            if(!item.projectCode && item.couponType !== "C"){
              target = (target === "na" ? item.joinCompany : target + "::" + item.joinCompany);
            }

            return target;
          },"na"),
          'shipping' : orderInfo.deliveryAmount,
          'metric1' : totalDiscountMoney,
          'metric2' : orderInfo.userMoney,
          'metric3' :
            Number(totalDiscountMoney)+
            (Number(orderInfo.useCouponAmount)-Number(totalDiscountMoney))+
            Number(orderInfo.userMoney)
          ,
          'dimension14' : paymentMethods.find(method => method[ 'value' ] === orderInfo.settlementMethod)[ 'label' ],
          'dimension15' : isFreeDelivery
        },
        'products': productList
      }
    }
  };

  sendLayer(dataLayer);
};

export const dataLayerEditorTransactionTemplateSelect = (options, selectAccessory, templateName, category, handleRequestStoreAccessoryOptionName, quan) => {
  let accessoryArr = [];
  let dataLayer = {
    'product_name' : category,
    'product_template' : (templateName && templateName === "내 디자인 업로드" ? "na" : templateName === "직접 디자인 하기" ? "my-design-upload" : templateName ),
    'product_option' : (options || []).reduce((target,item,idx) => {
      target = (idx === 0  ? item : target + "::" + item);
      return target;
    },[]),
  };

  if(selectAccessory){
    ((selectAccessory || []).reduce((target,item,idx)=>{
      Promise.all([
        handleRequestStoreAccessoryOptionName(item.productCode)
      ]).then((result)=>{
        //(result && result.length>0) && accessoryArr.push(result[0].accessoryName);
        (result && result.length>0) && accessoryArr.push({
          'label' : result[0].accessoryName,
          'value' : item.quantity
        });

        if(selectAccessory.length  === accessoryArr.length){

          dataLayer[ 'accessory_info' ] = (accessoryArr || []).reduce((target,item,idx) => {

            target.push({
              'name' : item.label,
              'quantity' : item.value
            });

            return target;
          },[])

          quan && (dataLayer[ 'product_option' ] += "::" + quan);


        }
      })
    },[]));

  }else{
    dataLayer[ 'accessory_info' ] = 'na';

    quan && (dataLayer[ 'product_option' ] += "::" + quan);

  }

  sendLayer(dataLayer);
};




export const dataLayerEditorTransactionSticker = (productName, productTemplate, productOption, accessory) => {
  let dataLayer = {
    'product_name' : productName,
    'product_template' : (productTemplate && productTemplate === "내 디자인 업로드" ? "na" : productTemplate === "직접 디자인 하기" ? "my-design-upload" : productTemplate ),
    'product_option' : productOption
  };

  if((accessory || []).length === 0){
    dataLayer[ 'accessory_info' ] = "na";
  }else{

    dataLayer[ 'accessory_info' ] = (accessory || []).reduce((target,item,idx) => {

      target.push({
        'name' : item.label,
        'quantity' : item.value
      });

      return target;
    },[]);
  }

  reactGTM.dataLayer({
    dataLayer
  });
};

export const dataLayerMainpageGNB = (itemName)=>{
  let dataLayer = {
    'event': 'to_product_overview',
    'et_category': 'To Product Overview',
    'et_action': `${itemName}`,
    'et_label': 'Mainpage GNB'
  }

   sendLayer(dataLayer);
}

export const dataLayerMainpageBanner = (itemName)=>{
  let dataLayer = {
    'event': 'to_product_overview',
    'et_category': 'To Product Overview',
    'et_action': `${itemName}`,
    'et_label': 'Mainpage Banner'
  }

   sendLayer(dataLayer);
}

export const dataLayerMainpageSlideDimension = (itemName, dimension) => {
  let dataLayer = {
    'event': 'to_product_overview',
    'et_category': 'To Product Overview',
    'et_action': `${itemName}`,
    'et_label': 'Mainpage Slide',
    'dimension4' : dimension
  }

   sendLayer(dataLayer);
}

export const dataLayerMainpageSlide = (itemName) => {
  let dataLayer = {
    'event': 'to_product_overview',
    'et_category': 'To Product Overview',
    'et_action': `${itemName}`,
    'et_label': 'Mainpage Slide'
  }

   sendLayer(dataLayer);
}


export const dataLayerOverviewBanner = (itemName, option, data) => {
  let dataLayer = {
    'event': 'to_product_detail',
    'et_category': 'To Product Detail',
    'et_action' : `${itemName}`,
    'et_label': 'Overview Banner',
    'dimension4': `${option}`,
    id : data.id || "",
    name : data.name || "",
    price : data.price || 0,
    category : data.category || ""
  }

   sendLayer(dataLayer);
}


export const dataLayerMainPageGnbSub = (itemName, option, data)=>{
  let dataLayer = {
    'event': 'to_product_detail',
    'et_category': 'To Product Detail',
    'et_action': `${itemName}`,
    'et_label': 'Mainpage GNB',
    'dimension4': `${option}`,
    id : data.id || "",
    name : data.name || "",
    price : data.price || 0,
    category : data.category || ""

  }

   sendLayer(dataLayer);
}


export const dataLayerBtnStart = (productName, productTemplate, productOption, accessory)=>{
  let dataLayer = {
    'event': 'pd_cta',
    'et_category': 'Product Detail CTA',
    'et_action': productName, //상품명
    'et_label': productOption,
    'dimension4': productName, //상품명
    'dimension5': productOption, //옵션명
    'dimension6': (accessory.length > 0)
  }

   sendLayer(dataLayer);
}

export const dataLayerSelectTemplate = (productName, productTemplate, productOption, accessory)=>{
  let dataLayer = {
    'event': 'select_template',
    'et_category': 'Select Template',
    'et_action': productName,
    'et_label': productTemplate, //ex)내 디자인 업로드
    'dimension4': productName, //상품명
    'dimension5': productOption,
    'dimension6': (accessory.length > 0), //악세서리 선택 여부
    'dimension8': ( productTemplate === "na" ) ? '직접 디자인 하기' : "내 디자인 업로드" //템플릿명
  }


   sendLayer(dataLayer);
}

export const dataLayerSelectTemplateCTA = (options, selectAccessory, templateName, category, handleRequestStoreAccessoryOptionName, quan) => {

  let dataLayer = {
    'event': 'template_cta',
    'et_category': 'Template CTA',
    'et_action': category,
    'et_label': templateName, //ex)내 디자인 업로드
    'dimension4': category, //상품명
    'dimension5': (options || []).reduce((target, item, idx) => {
      target = (idx === 0 ? item : target + "::" + item);
      return target;
    }, "na"),
    'dimension6': !!(selectAccessory), //악세서리 선택 여부
    'dimension8': templateName //템플릿명
  }

  //quan && (dataLayer[ 'dimension5' ] += "::" + quan);

   sendLayer(dataLayer);
};


export const dataLayerSelectTemplateDetail = (options, selectAccessory, templateName, category, handleRequestStoreAccessoryOptionName, quan) => {

  let dataLayer = {
    'event': 'select_template',
    'et_category': 'Select Template',
    'et_action': category,
    'et_label': templateName, //ex)내 디자인 업로드
    'dimension4': category, //상품명
    'dimension5': (options || []).reduce((target, item, idx) => {
      target = (idx === 0 ? item : target + "::" + item);
      return target;
    }, "na"),
    'dimension6': !!(selectAccessory), //악세서리 선택 여부
    'dimension8': templateName //템플릿명
  }

  //quan && (dataLayer[ 'dimension5' ] += "::" + quan);

   sendLayer(dataLayer);
};

export const dataLayerFavoriteCtaAdd = (options, selectAccessory, templateName, category, liked) => {

  let dataLayer = {
    'event': (!!liked ? 'favorite_cta' : 'remove_favorite_cta'),
    'et_category': 'Favorite CTA',
    'et_action':  (!!liked ? 'Add' : 'Remove'),
    'et_label': templateName, //ex)내 디자인 업로드
    'dimension4': category, //상품명
    'dimension5': (options || []).reduce((target, item, idx) => {
      target = (idx === 0 ? item : target + "::" + item);
      return target;
    }, "na"),
    'dimension6': !!(selectAccessory), //악세서리 선택 여부
    'dimension8': templateName //템플릿명
  }

   sendLayer(dataLayer);
};

export const dataLayerPromotionView = (promotionName) => {

  let dataLayer = {
    'event': 'promotion_view',
    'et_category': 'Promotion',
    'et_action': 'Pageview',
    'et_label': promotionName //프로모션 이름
  }

   sendLayer(dataLayer);
};

export const dataLayerMoveSnaps = (userInfo, userGrade) => {

  let dataLayer = {
    'event': 'service_switch',
    'et_category': 'Service Switch',
    'et_action': 'Snaps',
    'et_label': null,
    'dimension1': (userInfo ? userInfo.userId : null),
    'dimension3': (userInfo ? (((userGrade || []).find((grade)=> grade[ 'userLevel' ] === userInfo.userLevel)) || userInfo.userLevel).userLevelName : null),
    'dimension9': null
  }

   sendLayer(dataLayer);
};

export const dataLayerBigInCartVisit = (products) => {
  let dataLayer = {
    'event': 'cart_visit',
    products
  }

  sendLayer(dataLayer);
};

export const dataLayerBigInCartDelete = (products) => {
  let dataLayer = {
    'event': 'cart_delete',
    products
  }

  sendLayer(dataLayer);
};

export const dataLayerBigInCartOrder = (products) => {
  let dataLayer = {
    'event': 'cart_order',
    step: 0,
    products
  }

  sendLayer(dataLayer);
};

export const dataLayerBigInCartOrderSend = (paymentType, products) => {
  let dataLayer = {
    'event': 'cart_order_send',
    option : paymentType || "",
    step: 1,
    products
  }

  sendLayer(dataLayer);
}

export const dataLayerBigInCartPurchase = (info) => {
  let dataLayer = {
    'event': 'cart_purchase',
    ...info
  }

  sendLayer(dataLayer);
}



const sendLayer = (dataLayer) => {
  console.log("dataLayer :: ",dataLayer);
  reactGTM.dataLayer({
    dataLayer
  });
}


