

import load from 'load-script';

import { LogTypes } from 'constants/index';
import { getLocationOrigin } from 'utils/url';

const FB_PIXEL_ID = '334132157011726';

const asyncScript = (type, appId) => {
	return new Promise((resolve, reject) => {
		switch (String(type).toUpperCase()) {
			case 'PIXEL':
        !window['fbq']
          ? Promise.all([
            (window['fbq'] = function() {
              window['fbq']['callMethod']
                ? window['fbq']['callMethod'].apply(window['fbq'], arguments)
                : window['fbq']['queue'].push(arguments);
            }),
            !window['_fbq'] && (window['_fbq'] = window['fbq']),
            (window['fbq']['push'] = window['fbq']),
            (window['fbq']['queue'] = [])
          ]).then(() => {
            load('https://connect.facebook.net/en_US/fbevents.js', { charset: 'utf-8' }, (error, script) => {
              !error
                ? Promise.all([window['fbq']('init', FB_PIXEL_ID)]).then(() => {
                  resolve(script);
                })
                : reject(error);
            });
          })
          : resolve();
				break;

			default:
				!window[ 'FB' ]
					?
					load('https://connect.facebook.net/en_US/all.js', { charset: 'utf-8' }, (error, script) => {
						!error
							?
							window[ 'fbAsyncInit' ] = () => {
								Promise.all([
									window[ 'FB' ].init({
										appId,
										status: true,
										xfbml: true,
										version: 'v2.9'
									})
								]).then(() => {
									resolve(script)
								})
							}
							: reject(error);
					})
					: resolve();
				break;
		}
	});
};

export const login = (appId) => {
	return new Promise((resolve, reject) => {
		return asyncScript(null, appId).then(() => {
			window[ 'FB' ].login(response => {
				response[ 'authResponse' ]
					?
					window[ 'FB' ].api('/me', { fields: 'name, email' }, function (user) {
						resolve(user);
					})
					:
					reject('페이스북 로그인이 실패하였습니다.');
			}, { scope: 'public_profile, email' });
		});
	});
};

export const history = (pathname) => {
	asyncScript('PIXEL').then(() => {
		window[ 'fbq' ]('track', 'PageView');
	})
};

export const conversion = (type, params) => {
	type && asyncScript('PIXEL').then(() => {
		switch (type) {
			case LogTypes.JOIN:
				window[ 'fbq' ]('track', 'CompleteRegistration');
				break;

			case LogTypes.PAYMENT:
				window[ 'fbq' ]('track', 'Purchase', {
					value: params[ 'orderDetailList' ].reduce((target, item) => {
						target += item[ 'settlementAmount' ];

						return target;
					}, params[ 'deliveryAmount' ] || 0),
					currency: 'KRW'
				});
				break;
		}
	});
};

export const share = (url, appId) => {
	let path = `https://www.facebook.com/dialog/share?app_id=${appId}&display=popup&href=${url}&redirect_uri=${getLocationOrigin()}/callback/facebook`;

	let popup = window.open(path, 'share-facebook');
	popup && popup.focus();
};
