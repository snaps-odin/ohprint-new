

import load from 'load-script';

import { LogTypes } from 'constants/index';

const asyncScript = () => {
	return new Promise((resolve, reject) => {
		!window[ 'EN' ]
			?
			load('https://cdn.megadata.co.kr/js/enliple_min2.js', { charset: 'utf-8' }, (error, script) => {
				!error ? resolve(script) : reject(error);
			})
			: resolve();
	});
};

export const history = () => {
	asyncScript().then(script => {
		if (script) {
			let rf = new window[ 'EN' ]();

			rf[ 'setSSL' ](true);
			rf[ 'sendRf' ]();
		}
	})
};

export const product = (type, params) => {
	type && asyncScript().then(() => {
		switch (type) {
			case 'VIEW_ITEM':
				let sh = new window[ 'EN' ]();

				sh[ 'setData' ]('sc', '53905bd517edb5de863daab86085d2d3');
				sh[ 'setData' ]('userid', 'ohprint');
				sh[ 'setData' ]('pcode', params[ 'templateCode' ]);
				sh[ 'setData' ]('pnm', encodeURIComponent(encodeURIComponent(params[ 'templateName' ])));
				sh[ 'setData' ]('img', encodeURIComponent(params[ 'templateImageUrl' ]));
				sh[ 'setData' ]('price', params[ 'priceInfo' ][ 'sellPrice' ]);
				sh[ 'setSSL' ](true);
				sh[ 'sendRfShop' ]();
				break;

			case 'VIEW_ITEM_PACKAGE':
			case 'EDIT_ITEM':
			default:
				break;
		}
	})
};

export const conversion = (type, params) => {
	type && asyncScript().then(() => {
		switch (type) {
			case LogTypes.PAYMENT:
				let cn = new window[ 'EN' ]();

				cn[ 'setData' ]("uid", "ohprint");
				cn[ 'setData' ]("ordcode", params[ 'orderCode' ]);
				cn[ 'setData' ]("pcode", params[ 'orderDetailList' ][ 0 ][ 'projectCode' ]);
				cn[ 'setData' ]("qty", (params[ 'orderDetailList' ] || []).length);
				cn[ 'setData' ]("price", params[ 'orderDetailList' ].reduce((target, item) => {
					target += item[ 'settlementAmount' ];

					return target;
				}, params[ 'deliveryAmount' ] || 0));
				cn[ 'setData' ]("pnm", encodeURIComponent(encodeURIComponent(params[ 'orderDetailList' ][ 0 ][ 'projectName' ])));
				cn[ 'setSSL' ](true);
				cn[ 'sendConv' ]();
				break;
		}
	})
};
