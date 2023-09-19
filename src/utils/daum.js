

import load from 'load-script';

import { LogTypes } from 'constants/index';

const asyncScript = (type) => {
	return new Promise((resolve, reject) => {
		switch (String(type).toUpperCase()) {
			case 'ZIPCODE':
				!window[ 'daum' ]
					?
					load('https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js', { charset: 'utf-8' }, (error, script) => {
						!error ? resolve(script) : reject(error);
					})
					: resolve();
				break;

			case 'CLIX':
				load('https://t1.daumcdn.net/cssjs/common/cts/vr200/dcts.js', { charset: 'utf-8' }, (error, script) => {
					!error ? resolve(script) : reject(error);
				});
				break;
		}
	});
};

export const embedZipCode = (targetEl, callback) => {
	asyncScript('zipCode').then(() => {
		window[ 'daum' ][ 'postcode' ][ 'load' ](() => {
			new window[ 'daum' ][ 'Postcode' ]({
				oncomplete: (data) => {
					callback && callback(data)
				},
				width: '100%',
				height: '100%'
			}).embed(targetEl, { autoClose: false });
		});
	});
};

export const conversion = (type, params) => {
	let query = '';

	switch (type) {
		case LogTypes.JOIN:
			query = `type=M`;
			break;

		case LogTypes.PAYMENT:
			query = `type=P,orderID=${params[ 'orderCode' ]},amount=${params[ 'orderDetailList' ].reduce((target, item) => {
				target += item[ 'settlementAmount' ];

				return target;
			}, 0)}`;
			break;
	}

	type && Promise.all([
		(window[ 'DaumConversionDctSv' ] = query),
		(window[ 'DaumConversionAccountID' ] = 'D..UaUCyck9-F6Z3A9a14g00')
	]).then(() => {
		asyncScript('clix');
	});
};
