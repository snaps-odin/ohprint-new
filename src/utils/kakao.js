import load from 'load-script';

import {apiKey as talkKey} from "./kakao-talk";

let kakaoPixelKey = '8013282016780400769';

//let apiKey = '5591f45d8a258a42469474e4919ac1e9';
let apiKey = 'cb06bd27eb0194864d8ed6dbe411b9cf';

export const share = (url) => {
	let path = `https://story.kakao.com/share?url=${url}`;

	let popup = window.open(path, 'share-kakao-story');
	popup && popup.focus();
};


export const getApiKey = () =>{
  return apiKey;
}

/*
 */
export const shareTalk = (obj) => {
  load(`http://developers.kakao.com/sdk/js/kakao.min.js`, { charset: 'utf-8' }, (error, script) => {
    Promise.all([
      (window['Kakao']['init'](apiKey))
/*      (window['Kakao']['Link']['createDefaultButton']({
        container: '#kakao-link-btn',  // 컨테이너는 아까 위에 버튼이 쓰여진 부분 id
        objectType: 'feed',
        content: {  // 여기부터 실제 내용이 들어갑니다.
          title: '딸기 치즈 케익', // 본문 제목
          description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',  // 본문 바로 아래 들어가는 영역?
          imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png', // 이미지
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com'
          }
        },
        social: {  /!* 공유하면 소셜 정보도 같이 줄 수 있는데, 이 부분은 기반 서비스마다 적용이 쉬울수도 어려울 수도 있을듯 합니다. 전 연구해보고 안되면 제거할 예정 (망할 google  blogger...) *!/
          likeCount: 286,
          commentCount: 45,
          sharedCount: 845
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com'
            }
          },
          {
            title: '앱으로 보기',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com'
            }
          }
        ]
      })),*/
    ]).then(()=>{
      (window['Kakao']['Link']['createDefaultButton'](obj))
    })
  })
}

const asyncScript = () => {
	return new Promise((resolve, reject) => {
		load(`https://t1.daumcdn.net/adfit/static/kp.js`, { charset: 'utf-8' }, (error, script) => {
			!error ?
					resolve(script)
				:
					reject(error)
		});
	});
};


export const pageView = () => {
	asyncScript().then(() => {
		(window['kakaoPixel'](kakaoPixelKey)['pageView']())
	})
}

export const completeRegistration = () => {
	asyncScript().then(() => {
		(window['kakaoPixel'](kakaoPixelKey)['pageView']());
		(window['kakaoPixel'](kakaoPixelKey)['completeRegistration']());
	})
}

export const viewCart = () => {
	asyncScript().then(() => {
		(window['kakaoPixel'](kakaoPixelKey)['pageView']());
		(window['kakaoPixel'](kakaoPixelKey)['viewCart']());
	})
}

export const purchase = (productInfo) => {
	asyncScript().then(() => {
		(window['kakaoPixel'](kakaoPixelKey)['pageView']());
		(window['kakaoPixel'](kakaoPixelKey)['purchase'](productInfo));
	})
}

export const plusChannel = (channelPublicId) => {
  load(`https://developers.kakao.com/sdk/js/kakao.min.js`, { charset: 'utf-8' }, (error, script) => {
    Promise.all([
      (window['Kakao']['init']("58689966cfafaac2e8c6079742f9e2a2"))
    ]).then(()=>{
      window['Kakao']["Channel"]["addChannel"]({
        channelPublicId
      })
    })
  })
}
