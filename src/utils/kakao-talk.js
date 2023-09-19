

import load from 'load-script';

export const apiKey = 'a829211e12b4f1b286e6ddb7e475215b';

const asyncScript = () => {
  return new Promise((resolve, reject) => {

    if(window[ 'Kakao' ]){
      delete window.Kakao;
    }

    load('https://developers.kakao.com/sdk/js/kakao.min.js', { charset: 'utf-8' }, (error, script) => {
      !error
        ?
        Promise.all([
          window[ 'Kakao' ].init(apiKey)
        ]).then(() => {
          resolve(script);
        })
        :
        reject(error);
    })
  });
};

export const share = (content) => {
  asyncScript().then(() => {
    let { title, description, imageUrl, imageWidth, imageHeight, mobileWebUrl } = content;

    window[ 'Kakao' ].Link[ 'sendDefault' ]({
      objectType: 'feed',
      content: {
        title,
        description,
        imageUrl,
        imageWidth: imageWidth || 1200,
        imageHeight: imageHeight || 630,
        link: {
          mobileWebUrl
        }
      },
      installTalk: true
    });
  })
};
