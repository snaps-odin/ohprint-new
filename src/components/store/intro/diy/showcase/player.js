

import React from 'react';

import { embedVideo } from 'utils/youtube';

export default class StoreIntroDIYShowcasePlayer extends React.Component {
	constructor(...args) {
		super(...args);

		this.player = {
			video: null,
			ready: false
		};

		this.onPlayerReady = this.onPlayerReady.bind(this);
		this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
		this.onPlayerError = this.onPlayerError.bind(this);
	}

	onPlayerReady(event) {
		let { ready } = this.player;

		!ready && Promise.all([
			event.target && (this.player[ 'video' ] = event.target),
			this.player[ 'ready' ] = true
		]).then(() => {
			event.target[ 'mute' ]();
		});
	}

	onPlayerStateChange(event) {
		switch (event.data) {
			case -1:
				/** ready */
				break;

			case 0:
				/** end */
				break;

			case 1:
				/** play */
				break;
		}
	}

	onPlayerError(event) {
		window.console.error(event.data);
	}

	getVideo(event) {
		return event ? event.target : this.player[ 'video' ];
	}

	playVideo(event) {
		let target = this.getVideo(event);

		target && target.playVideo();
	}

	stopVideo(event) {
		let target = this.getVideo(event);

		target && Promise.all([
			target[ 'stopVideo' ]()
		]).then(() => {
			target[ 'clearVideo' ]();
		});
	}

	initialize() {
		let { videoId } = this.props;

		this.player[ 'video' ] = embedVideo({
			targetId: videoId,
			videoId,
			width: 840,
			height: 580,
			playerVars: {
				autoplay: 0,
				controls: 1,
				loop: 0,
				rel: 0,
				quality: 'large'
			},
			events: {
				'onStateChange': this.onPlayerStateChange,
				'onError': this.onPlayerError,
				'onReady': this.onPlayerReady
			}
		})
	}

	componentDidUpdate(prevProps, prevState) {
		let { isActive: isPrevActive } = prevProps;
		let { isActive: isCurrentActive } = this.props;

		!Object.is(isPrevActive, isCurrentActive) && (
			!isCurrentActive
				? this.stopVideo()
				: this.playVideo()
		);
	}

	componentDidMount() {
		this.initialize();
	}

	componentWillUnmount() {
		let target = this.getVideo();

		target && target[ 'destroy' ]();
	}

	render() {
		let { videoId } = this.props;

		return (
			<div className="store-intro-diy-showcase-player-wrap">
				<div id={videoId}/>
			</div>
		)
	}
}