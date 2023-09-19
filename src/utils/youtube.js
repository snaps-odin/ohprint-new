

import load from 'load-script';

export const asyncScript = () => {
	return new Promise((resolve, reject) => {
		!window[ 'YT' ]
			? Promise.all([
				(window[ 'onYouTubeIframeAPIReady' ] = () => {resolve()})
			]).then(() => {
				load('https://www.youtube.com/iframe_api', { charset: 'utf-8' }, (error, script) => {});
			})
			: resolve();
	});
};

export const embedVideo = (data) => {
	let { targetId, videoId, width, height, playerVars, events } = data;

	let option = {
		width,
		height,
		videoId,
		playerVars
	};

	events && Object.assign(option, { events });

	asyncScript().then(() => {
		new window[ 'YT' ][ 'Player' ](targetId, option);
	});
};