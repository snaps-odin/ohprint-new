

import fetchJsonp from 'fetch-jsonp';
import load from 'load-script';

import { ApiMethods, LogTypes } from 'constants/index';
import { setNaverState, getNaverState, removeNaverState } from 'utils/storage';
import { getLocationOrigin } from 'utils/url';
import { openCenter } from 'utils/window';

const redirectUri = `${getLocationOrigin()}/callback/naver`;
const responseType = 'token';
const authorizeUrl = 'https://nid.naver.com/oauth2.0/authorize';
const profileUrl = 'https://openapi.naver.com/v1/nid/getUserProfile.json';

let oauthParams = null;

const parseCallback = () => {
	let params = {};
	let queryString = (document.location + '').substring(1);
	let regex = /([^#?&=]+)=([^&]*)/g;
	let match;

	while ((match = regex.exec(queryString)) !== null) {
		params[ decodeURIComponent(match[ 1 ]) ] = decodeURIComponent(match[ 2 ]);
	}

	return params;
};

const getUniqState = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
	let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);

	return v.toString(16);
});

const getNaverIdLoginLink = (clientId) => {
	let state = getUniqState();

	setNaverState(state);

	return `${authorizeUrl}?response_type=${responseType}&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`;
};

export const isCallback = () => {
	return Promise.all([
		(oauthParams = parseCallback())
	]).then(() => {
		return oauthParams[ 'access_token' ];
	});
};

export const requestProfileAPI = () => {
	let path = `${profileUrl}?response_type=json&access_token=${encodeURIComponent(oauthParams[ 'access_token' ])}`;

	return fetchJsonp(path, {
		jsonpCallback: 'oauth_callback'
	}).then(response => {
		return response.json()
	}).then(json => {
		return json;
	});
};

export const login = (appId) => {
	let clientId = !window.location.port ? appId : 'LdrfEGajOsZJbGj_WJ13';
	let path = getNaverIdLoginLink(clientId);

	return new Promise((resolve, reject) => {
		oauthParams = parseCallback();

		let popup = openCenter(path, 'oh-print-me-naver-login', 460, 526);

		window[ 'completeNaverLogin' ] = (error, result) => {
			!error ? resolve(result) : reject(error);

			popup && Promise.all([
				popup.focus()
			]).then(() => {
				popup.close();
			});
		}
	}).then(result => {
		return result;
	});
};

const asyncScript = () => {
	return new Promise((resolve, reject) => {
		!window[ 'wcs' ]
			?
			load('https://wcs.naver.net/wcslog.js', { charset: 'utf-8' }, (error, script) => {
				!error
					?
					Promise.all([
						!window[ '_nasa' ] && (window[ '_nasa' ] = {}),
						!window[ 'wcs_add' ] && (window[ 'wcs_add' ] = {}),
						(window[ 'wcs_add' ][ 'wa' ] = 's_1a831f47c50f')
					]).then(() => {
						resolve(script);
					})
					: reject(error);
			})
			: resolve();
	});
};

export const history = (pathname) => {
	!pathname.match(/\/payment\/complete/) && asyncScript().then(() => {
		window[ 'wcs' ][ 'inflow' ]('ohprint.me');
	}).then(() => {
		window[ 'wcs_do' ]();
	});
};

export const conversion = (type, params) => {
	type && asyncScript().then(() => {
		switch (type) {
			case LogTypes.JOIN:
				window[ '_nasa' ][ 'cnv' ] = window[ 'wcs' ][ 'cnv' ]('2', '10');
				break;

			case LogTypes.PAYMENT:
				window[ '_nasa' ][ 'cnv' ] = window[ 'wcs' ][ 'cnv' ]('1', String(params[ 'orderDetailList' ].reduce((target, item) => {
					target += item[ 'settlementAmount' ];

					return target;
				}, 0)));
				break;
		}
	}).then(() => {
		window[ 'wcs' ][ 'inflow' ]('ohprint.me');
	}).then(() => {
		window[ 'wcs_do' ](window[ '_nasa' ]);
	});
};