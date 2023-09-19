import Router from 'next/router';

const browserHistory = [];
import {format, parse} from 'url';

import {openCenter} from 'utils/window';

import {MENUS} from 'src/configs';

import {AssetsUrl} from 'constants/index';

import {
  dataLayerMainpageGNB,
  dataLayerMainpageBanner,
  dataLayerMainpageSlide,
  dataLayerOverviewBanner,
  dataLayerMainPageGnbSub,
  dataLayerMainpageSlideDimension
} from 'src/configs/google-analytics/ga';
import {ENV} from "../configs";

export const prdNameList = {
  "business-card" : "명함",
  "sticker" : "스티커",
  "apparel" : "어패럴",
  "banner" : "배너/현수막",
  "signs-posters" : "사인/포스터",
  "pr" : "홍보물",
  "md" : "MD",
  "card" : "카드",
  "accessory" : "액세서리",
  "calendar-desk" : "캘린더",
  "shoppingbag" : "쇼핑백",
  "planKraftShoppingBag": "무지 크라프트 쇼핑백",
  "packaging": "봉투/쇼핑백"
}
/**
 * prd stg dev
 * @returns {string}
 */
export const getEnv = () => {
  let now = (typeof window !== 'undefined') ? window.location.hostname.split('.ohprint.me')[ 0 ] : '';
  let env = 'dev';

  switch(now){
    case 'www':
    case 'm':
      env = 'prd';
      break;

    case 'stg-www':
    case 'temp-www':
    case 'temp2-www':
    case 'stg-m':
    case 'temp-m':
    case 'temp2-m':
      env = 'stg';
      break;

    case 'dev-www':
      env = 'dev';
      break;

    default:
      env = 'stg';
      break;
  }

  return env;

}

export const isReleaseDomain = () => Object.is(window.location.hostname, 'www.ohprint.me');

export const isForceLoginPathName = (pathname) => !!(pathname || '').match(/\/callback\/(login|kick-out)/i);

export const isErrorModeByPathName = (pathname) => !!(pathname || '').match(/\/error/i);

export const isFullModeByPathName = (pathname) => !!(pathname || '').match(/\/editor/i);

export const isBlankModeByPathName = (pathname) => [
  {path: '/callback/', restricts: []},
  {path: '/payment/', restricts: ['/payment/complete', '/payment/failure']},
  {path: '/print/', restricts: []}
].reduce((target, item) => {
  (
    !target &&
    String(pathname).toLowerCase().indexOf(item['path']) !== -1 && !item['restricts'].find(restrict => String(pathname).toLowerCase().indexOf(restrict) !== -1)
  ) && (target = true);

  return target;
}, false);

export const isBlankModeByPathNamePattern = (pathname) => [
  {pattern: new RegExp(/\/events\/\d{1,}\/board|previewBoard/i)}
].reduce((target, item) => {
  (
    !target &&
    item['pattern'].exec(pathname)
  ) && (target = true);

  return target;
}, false);

export const getLocationOrigin = () => (typeof window !== 'undefined') ? `${window.location.protocol}//${window.location.host}` : '';

export const getParamsByUrl = (path) => parse(path, true)['query'] || {};

export const addDomain = (domain, url) => {
  let path = (url && !url.match('://')) ? `${domain}${url.indexOf('/') === 0 ? '' : '/'}${url}` : url;

  return toggleProtocol(path);
};

export const addCdn = (url) => { return AssetsUrl.IMAGE + url; }

export const addTemplateCdn = (url) => {
  let path = '';

  switch (window.location.hostname.split('.ohprint.me')[ 0 ]) {
    case 'www':
      path = AssetsUrl.IMAGE_SERVER;
      break;

    default:
      path = AssetsUrl.IMAGE_SERVER_STG;
      break;
  }

  return path + url;
}

export const toggleProtocol = (url) => {
  if (url) {
    switch (window.location.protocol) {
      case 'http:':
        return url.replace('https:', 'http:');
        break;

      case 'https:':
        return url.replace('http:', 'https:');
        break;
    }
  } else {
    return url;
  }
};

export const isApplyCreator = (creator) => {
  let matched = true;

  switch (`${creator}`) {
    case 'TEST002':
      break;

    default:
      matched = false;
      break;
  }

  return matched;

}

export const isStoreByPathParams = (category, subCategory) => {
  let matched = true;

	switch (`${category}/${subCategory}`) {
	  //캘린더
    case 'calendar-desk/defaults':

		case 'business-card/basic':
		case 'business-card/opm':
		case 'business-card/square':
		case 'business-card/standard':
		case 'business-card/original':
		case 'business-card/luxe':
		case 'business-card/linen':
		case 'business-card/felt':
		case 'business-card/pearl':
		case 'business-card/craft':
		case 'business-card/transparency':
    case 'business-card/matt_black':
    case 'business-card/recycle':
    case 'business-card/foil_print':
    case 'business-card/pressure':
    case 'business-card/scodix':

    //옵셋
    case 'business-card/soft':
    case 'business-card/premium_soft':
    case 'business-card/premium_matt':

    case 'sticker/diy':
    case 'sticker/circle':
    case 'sticker/square':
    case 'sticker/rectangle':
    case 'sticker/wide':
    case 'sticker/free-size':
    case 'sticker/standard':
    case 'sticker/craft':
    case 'sticker/hologram':
    case 'sticker/transparency':
    case 'sticker/repp80':
    case 'sticker/roll':
    case 'color-decal/defaults':
    case 'graphic-decal/defaults':

    //봉투
    case 'envelope/defaults':
    case 'shoppingbag/defaults':

    //판촉물(md)
    case 'straight-glass/defaults':
    case 'translucent-reusable-cup/defaults':
    case 'new-stack-glass/defaults':
    case 'reusable-cup/defaults':
    case 'eco-tumbler/defaults':
    case 'note-pad/defaults':
    case 'memo-pad/defaults':
    case 'pvc-diary/defaults':
    case 'soft-diary/defaults':
    case 'hard-diary/defaults':
    case 'standard-pen/defaults':
    case 'basic-pen/defaults':
    case 'light-pen/defaults':
    case 'eco-pen/defaults':
    case 'acrylic-keyring/defaults':
    case 'pin-button/defaults':
    case 'magnet-button/defaults':
    case 'mirror-button/defaults':
    case 'smart-tok/defaults':
    case 'fan/defaults':


    //옵셋
    case 'sticker/soft2':
    case 'sticker/matt':

    case 'flyer/defaults':
    case 'brochure/defaults':
    case 'menu/defaults':
    case 'post-card/defaults':
    case 'coupon/defaults':

    case 'card/flat':
    case 'card/folder':
    case 'card/70x98':
    case 'card/4x6':
    case 'card/5x7':
    case 'card/standard':
    case 'card/original':
    case 'card/luxe':
    case 'card/glossy':
    case 'card/gold':
    case 'card/silver':
    case 'card/soft':
    case 'card/premium_soft':
    case 'card/premium_matt':

    case 'accessory/leather-wallet':
    case 'accessory/aluminium-case':
    case 'accessory/magnetic-case':
    case 'accessory/envelope':
    case 'accessory/acrylic-holder':
    case 'accessory/stand':
    case 'accessory/easel':
    case 'accessory/dispenser':
    case 'accessory/plain-kraft-shopping-bag':
    case 'accessory/pen-pouch':
    case 'accessory/slide-zipperbag':
    case 'accessory/reusable-straw':


    case 'placard-banner/defaults':
    case 'standard-banner/defaults':
    case 'double-side-banner/defaults':
    case 'rollup-banner/defaults':
    case 'mini-banner/defaults':

    case 'poster/defaults':

    case 'board-sign/defaults':
    case 'acrylic-sign/defaults':
    case 'metal-sign/defaults':
    case 'wooden-frame-sign/defaults':
    case 'table-top-sign/defaults':
    case 'a-frame-sign/defaults':
    case 'car-magnet/defaults':
    //case 'window-decal/defaults':

    case 'apparel/gildan-ha00':
    case 'apparel/gildan-2300':
    case 'apparel/gildan-63v00':
    case 'apparel/gildan-63v00l':
    case 'apparel/gildan-76500':
    case 'apparel/gildan-76600':
    case 'apparel/gildan-42000':
    case 'apparel/gildan-73800':
    case 'apparel/gildan-73800l':
    case 'apparel/american-apparel-2001w':
    case 'apparel/american-apparel-2102w':
    case 'apparel/american-apparel-tr480w':
    case 'apparel/anvil-6750':
    case 'apparel/aaa-1301':
    case 'apparel/printstar-085-cvt':
    case 'apparel/printstar-195-byp':
    case 'apparel/glimmer-331-abp':
    case 'apparel/glimmer-315-ayb':
    case 'apparel/printstar-085-cvt-kids':
    case 'apparel/ohprintme-opm-100219-kids':
    case 'apparel/ohprintme-opm-100218-kids':
    case 'apparel/ohprintme-opm-100216-kids':
    case 'apparel/ohprintme-opm-100217-kids':
    case 'apparel/ohprintme-opm-100342-kids':
    case 'apparel/ohprintme-opm-100346':
    case 'apparel/ohprintme-opm-100347':
    case 'apparel/ohprintme-opm-100348':
    case 'apparel/ohprintme-opm-100219':
    case 'apparel/ohprintme-opm-100216':
    case 'apparel/ohprintme-opm-100217':
    case 'apparel/ohprintme-opm-100342':
    case 'apparel/ohprintme-opm-100218':
    case 'apparel/ohprintme-opm-100777l':
    case 'apparel/ohprintme-opm-100777m':
    case 'apparel/ohprintme-opm-100777s':

    case 'apparel/printstar-00102-cvl':
    case 'apparel/printstar-00102-cvl-kids':

    case 'apparel/gildan-2000':
    case 'apparel/gildan-76000':
    case 'apparel/gildan-76000p':
    //case 'apparel/gildan-6800':
    //case 'apparel/gildan-4bi00':

    case 'apparel/champion-t425':

    case 'apparel/ohprintme-opm-p22001':
    case 'apparel/ohprintme-opm-p22011m':
    case 'apparel/ohprintme-opm-p22012m':
    case 'apparel/ohprintme-opm-p22013l':
    case 'apparel/ohprintme-opm-p22014m':
    case 'apparel/ohprintme-opm-p22015l':
    case 'apparel/ohprintme-opm-p22016':

    case 'apparel/printstar-083-bbt':
    case 'apparel/glimmer-300-act':
    case 'apparel/glimmer-300-act-kids':
    //case 'apparel/moccasom-mcd1-ts2061':
    case 'apparel/moccasom-mcd1-ts2062':
    //case 'apparel/moccasom-mcd3-ts105':
    case 'apparel/moccasom-mce4-ts101':
    //case 'apparel/moccasom-mce1-ts109':
    //case 'apparel/moccasom-mce4-ts103':
    //case 'apparel/moccasom-mcd3-ts106':
    case 'apparel/comfort-colors-1717':
    case 'apparel/ohprintme-opm-p32101':
    case 'apparel/ohprintme-opm-p32102':
    case 'apparel/ohprintme-opm-p32103':
    case 'apparel/ohprintme-opm-p32104':
    case 'apparel/ohprintme-opm-p32111':
    case 'apparel/ohprintme-opm-p32112':
    case 'apparel/ohprintme-opm-p32113':
    case 'apparel/ohprintme-opm-p32114':
      break;


    default:
      matched = false;
      break;
  }

  return matched;
};

export const isStoreOverviewByPathParams = (category) => {
  let matched = true;

  switch (category) {
    case 'business-card':
    case 'sticker':
    case 'banner':
    case 'signs-posters':
    case 'pr':
    case 'card':
    case 'accessory':
    case 'apparel':
    case 'md':
    case 'calendar-desk':
    case 'packaging':

			break;

    default:
      matched = false;
      break;
  }

  return matched;
};

export const goBack = () => {
  browserHistory.goBack();
};

export const goHome = () => {
  Router.push('/');
};

export const replaceHome = (params) => {
  window.location.replace(`/${params ? format({query: params}) : ''}`);
};

export const goGiftCard = () => {
  Router.push('/gift-card');
};

export const goMemberProfile = () => {
  Router.push('/member/profile');
};

export const goMemberOrder = () => {
  Router.push('/member/order');
};

export const goMemberWithdraw = () => {
  Router.push('/member/withdraw');
};

export const goMemberBag = () => {
  Router.push('/member/bag');
};

export const goMemberCart = () => {
  Router.push('/member/cart');
};

export const goMemberDelivery = () => {
  Router.push('/member/delivery');
};

export const goMemberCoupon = () => {
  Router.push('/member/coupon');
};

export const goMemberBenefit = () => {
  Router.push('/member/benefit');
};

export const goTutorial = () => {
  Router.push('/tutorial');
}

export const goPayment = (type, params) => {
  Router.push(`/payment/${type}${params ? format({query: params}) : ''}`);
};

export const replacePayment = (type, params) => {
  window.location.replace(`/payment/${type}${params ? format({query: params}) : ''}`);
};

export const goStore = (type, category, subCategory, params, ga) => {


  ga && dataLayerSend(ga);
  //calendar-desk/intro/defaults
  Router.push(`/store/${category}/${type}${subCategory ? `/${subCategory}` : ''}${params ? format({query: params}) : ''}`);
};

export const goEvents = (seq) => {
  Router.push(`/events${seq ? `/${seq}` : ''}`);
};

export const goEditor = () => {
  Router.push(`/editor`);
};

export const goOverview = (type) => {
  Router.push(`/overview${type ? `/${type}` : ''}`);
};

export const goPolicy = (type) => {
  Router.push(`/policy/${type}`);
};


export const goCS = (type) => {
  Router.push(`/cs/${type}`);
};

export const goError = (statusCode) => {
  window.location.replace(`/error/${statusCode}`);
};

export const goKickOut = () => {
  window.location.replace('/callback/kick-out');
};

export const goPrint = (type, params) => {
  openCenter(`/print/${type}${params ? format({query: params}) : ''}`, 'oh-print-me-print', 800, 800);
};

export const goLink = (path, ga) => {

  ga && dataLayerSend(ga);

  Router.push(path ? path : '/');
};



export const modifyProductName = (prdName, params = {}) => {
  let pattern_eng = /[a-zA-Z]/;
  let word = {
    parent : null,
    child : prdName
  };

  if(!pattern_eng.test(prdNameList[prdName])){
    word[ 'child' ] = prdNameList[prdName];

    return word;
  }

  if(params){
    try {
      let parent = [];
      let child = [];

      if(params.subCategory === "defaults"){
        parent = (MENUS || []).find((parent) => (parent.children).find((child)=>(child.gaKey || "") === params.category));
        parent && (child = (parent.children || []).find((child) => (child.gaKey || "") === params.category));
      }else{
        parent = (MENUS || []).find((parent) =>((parent.gaKey || "") === params.category));
        parent && (child = (parent.children || []).find((child) => (child.gaKey || "") === params.subCategory));
      }

      word[ 'parent' ] = parent.name;
      word[ 'child' ] = child.name;
    }catch (e){
      console.error("GA ERROR -> ", e);
    }
  }


  return word;
}

const dataLayerSend = (ga) => {
  switch (ga.location) {
    case 'MENU':
      dataLayerMainpageGNB(ga.etAction);
      break;

    case 'MAIN_OVERVIEW':
      dataLayerMainpageBanner(ga.etAction);
      break;

    case 'BANNER':
      dataLayerMainpageSlide(ga.etAction);
      break;

    case 'BANNER_DIMENSION':
      dataLayerMainpageSlideDimension(ga.etAction, ga.dimension);
      break;

    case 'OVERVIEW_BANNER':
      let check = !!(ga.dimension4.match(/business-card|sticker|card|apparel|calendar-desk|eraser/i) );
      dataLayerOverviewBanner(ga.etAction, (check ? modifyProductName(ga.dimension4).child : ga.etAction), ga);
      break;

    case 'SUB_MENU':
      let sb_check = !!(ga.dimension4.match(/명함|스티커|카드|어패럴|작업가이드|캘린더/i) );
      let sb_param2 = !!sb_check ? ga.dimension4 : ga.etAction;

      dataLayerMainPageGnbSub(ga.etAction,sb_param2,ga);
      break;

  }

}

export const replaceLink = (path, params) => {
  window.location.replace(`${path ? path : '/'}${params ? format({query: params}) : ''}`);
};

export const goMobile = (pathname, params) => {
  let subHostName;

  switch ((window.location.hostname || '').replace(/.ohprint.me/i, '')) {
    case 'www':
      subHostName = 'm';
      break;

/*    case 'stg-www':
      subHostName = 'stg-m';
      break;*/

    default:
      subHostName = 'stg-m';
      break;
  }

  window.location.replace(`https://${subHostName}.ohprint.me${pathname || ''}${format({query: params})}`);
};

export const goGooglePlay = () => {
  window.open('https://play.google.com/store/apps/details?id=mobile.me.ohprint.com.ohprintme', '_blank');
};

export const goAppStore = () => {
  window.open('https://itunes.apple.com/kr/app/%EC%98%A4%ED%94%84%EB%A6%B0%ED%8A%B8%EB%AF%B8-%EB%82%98%EB%A5%BC-%ED%94%84%EB%A6%B0%ED%8A%B8-%ED%95%98%EB%8B%A4/id1440009234?mt=8', '_blank');
};

export const getEditorDomainUrl = () => {
  return ENV.EDITOR_URL;
};
