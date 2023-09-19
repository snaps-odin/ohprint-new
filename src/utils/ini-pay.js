

import load from 'load-script';

const asyncScript = () => {
	return new Promise((resolve, reject) => {
		!window[ 'INIStdPay' ]
			?
			load('https://stdpay.inicis.com/stdjs/INIStdPay.js', { charset: 'utf-8' }, (error, script) => {
				!error ? resolve(script) : reject(error);
			})
			: resolve()
	})
};

export const embedPay = (formId) => {
	asyncScript().then(() => {
		window[ 'INIStdPay' ][ 'pay' ](formId);
	})
};