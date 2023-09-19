import load from 'load-script';

let clientId = 'OhPrintMe.ohprint.me';
let scope = 'email';
let redirectURI = '/callback/apple';
let usePopup = true;

export const asyncScript = (api) => {
	let fullUrl = api+redirectURI;
	return new Promise((resolve, reject) => {
		load(`https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js`, { charset: 'utf-8' }, (error, script) => {
			if(!error){
				window['AppleID']['auth']['init']({
					clientId: clientId,
					scope: scope,
					redirectURI: fullUrl,
					usePopup : usePopup
				});
				resolve(script);
			}else{
				reject(error);
			}
		});
	});
};
