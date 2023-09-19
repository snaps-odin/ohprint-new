

import { format } from 'url';
import { ApiMethods } from 'constants/index';
import { getUserToken, removeUserToken } from 'utils/storage';
import { goKickOut } from 'utils/url';
import {ENV} from "src/configs/index";

const getDomainPath = () => `${ENV.API_URL || ""}/v1`;

const getChannelName = () => 'WEB';

const getLanguage = () => window.localStorage.getItem('TEST_CHANNEL') || 'KOR';

export const requestAPI = (data) => {
	let isFormData = data[ 'params' ] instanceof FormData;

	let headers = new Headers();
	headers.append('X-OHPRINT-CHANNEL', getChannelName());
	headers.append('X-OHPRINT-LANGUAGE', getLanguage());
	headers.append('X-OHPRINT-TOKEN', getUserToken());
	!isFormData && headers.append('Content-Type', 'application/json; charset=UTF-8');

	let path = `${getDomainPath()}${data[ 'url' ]}`;

	let options = {
		method: data[ 'method' ],
		headers: headers,
		mode: 'cors'
	};

	switch (data.method) {
		case ApiMethods.GET:
		case ApiMethods.DELETE:
			path = `${path}/${format({ query: data[ 'params' ] })}`;
			break;

		default:
			options = {
				...options,
				body: isFormData ? data[ 'params' ] : JSON.stringify(data[ 'params' ])
			};
			break;
	}

	let request = new Request(path, options);
	let responseStatus = null;

	return fetch(request)
		.then(response => {
			responseStatus = response.status;

			return response.json();
		})
		.then(json => {
			if (responseStatus >= 200 && responseStatus < 300) {
				return {
					data: json,
					status: responseStatus
				}
			} else {
				switch (json[ 'errorCode' ]) {
					case 'A400104':
						return {
							data: json,
							status: responseStatus
						};
						break;

					case 'A400200':
						goKickOut();

						throw json[ 'errorMessage' ];
						break;

					default:
						throw json[ 'errorMessage' ];
						break;
				}
			}
		})
		.catch(error => {
			throw error;
		});
};

export const requestJSON = (url) => {
	return fetch(url)
		.then(response => response.json())
		.then(json => {
			return { data: json }
		});
};

export const requestImage = (url) => {
	return new Promise((resolve, reject) => {
		let image = new Image();

		image.onload = () => resolve({ width: image.width, height: image.height });
		image.onerror = () => reject();
		image.src = url;
	});
};
