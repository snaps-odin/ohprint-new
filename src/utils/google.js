

import load from 'load-script';

import { LogTypes } from 'constants/index';

const GA_TRACKING_ID = 'UA-104975567-1';
const SA_CONVERSION_ID = 835672934;

const asyncScript = (type) => {
	return new Promise((resolve, reject) => {
		switch (String(type).toUpperCase()) {
			case 'GA':
				!window[ 'gtag' ]
					?
					load(`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`, { charset: 'utf-8' }, (error, script) => {
						!error
							?
							Promise.all([
								(window[ 'dataLayer' ] = window[ 'dataLayer' ] || []),
								(window[ 'gtag' ] = function () {window[ 'dataLayer' ].push(arguments);}),
								(window[ 'gtag' ]('js', new Date())),
								(window[ 'gtag' ]('config', GA_TRACKING_ID))
							]).then(() => {
								resolve(script);
							})
							: reject(error);
					})
					: resolve();
				break;

			case 'SA':
				!window[ 'google_trackConversion' ]
					?
					load('https://www.googleadservices.com/pagead/conversion_async.js', { charset: 'utf-8' }, (error, script) => {
						!error ? resolve(script) : reject();
					})
					: resolve();
				break;
		}

	});
};

export const history = (pathname) => {
	asyncScript('GA').then(() => {
		window[ 'gtag' ]('config', GA_TRACKING_ID, {
			page_path: pathname
		});
	})
};

export const conversion = (type, params) => {
	conversionGA(type, params);
	conversionSA(type, params);
};

const conversionGA = (type, params) => {
	type && asyncScript('GA').then(() => {
		switch (type) {
			case LogTypes.JOIN:
				window[ 'gtag' ]('config', GA_TRACKING_ID, {
					page_path: '/member/join/complete'
				});
				break;

			case LogTypes.PAYMENT:
				window[ 'gtag' ]('event', 'purchase', {
					transaction_id: params[ 'orderCode' ],
					affiliation: params[ 'orderEmail' ],
					value: params[ 'orderDetailList' ].reduce((target, item) => {
						target += item[ 'settlementAmount' ];

						return target;
					}, params[ 'deliveryAmount' ] || 0),
					currency: 'KRW',
					shipping: params[ 'deliveryAmount' ],
					items: params[ 'orderDetailList' ].reduce((target, item) => {
						target.push({
							id: item[ 'projectCode' ],
							name: `[${item[ 'productGroupName' ]}] ${item[ 'projectName' ]}`,
							category: item[ 'productGroupName' ],
							quantity: 1,
							price: item[ 'settlementAmount' ]
						});

						return target;
					}, [])
				});
				break;
		}
	});
};

const conversionSA = (type, params) => {
	type && asyncScript('SA').then(() => {
		let values = {
			google_conversion_id: SA_CONVERSION_ID,
			google_conversion_language: 'en',
			google_conversion_format: '3',
			google_conversion_color: 'ffffff',
			google_remarketing_only: false
		};

		switch (type) {
			case LogTypes.JOIN:
				window[ 'google_trackConversion' ](Object.assign(values, {
					google_conversion_label: 'WKMhCJeMt3QQ5ra9jgM'
				}));
				break;

			case LogTypes.PAYMENT:
				window[ 'google_trackConversion' ](Object.assign(values, {
					transaction_id: params[ 'orderCode' ],
					google_conversion_label: 'APRzCIqez3QQ5ra9jgM',
					google_conversion_value: params[ 'orderDetailList' ].reduce((target, item) => {
						target += item[ 'settlementAmount' ];

						return target;
					}, params[ 'deliveryAmount' ] || 0),
					google_conversion_currency: 'KRW'
				}));
				break;
		}
	})
};

export const share = (url) => {
	let path = `https://plus.google.com/share?url=${url}`;

	let popup = window.open(path, 'share-google');
	popup && popup.focus();
};
