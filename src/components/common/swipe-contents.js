

import React from 'react';
import update from 'react-addons-update';

import Swiper from 'react-id-swiper';

export default class SwipeContents extends React.Component {
	constructor(...args) {
		super(...args);

		this.scope = null;

		this.onChangeIndex = this.onChangeIndex.bind(this);

		this.setActiveIndex = this.setActiveIndex.bind(this);
		this.getActiveIndex = this.getActiveIndex.bind(this);
		this.updateScope = this.updateScope.bind(this);
		this.stopAutoplay = this.stopAutoplay.bind(this);
		this.startAutoplay = this.startAutoplay.bind(this);
	}

	onChangeIndex() {
		let { actions } = this.props;
		let { handleChange } = actions || {};

		handleChange && handleChange(this.getActiveIndex());
	}

	setActiveIndex(index) {
		(this.scope && this.getActiveIndex() !== index) && this.scope.slideTo(index);
	}

	getActiveIndex() {
		return this.scope ? this.scope[ 'activeIndex' ] : -1;
	}

	updateScope(component) {
		if(!this.scope) return;
		component && Promise.all([
			this.scope = component[ 'swiper' ]
		]).then(() => {
			this.scope.on('slideChange', this.onChangeIndex);
		});
	}

	stopAutoplay() {
		this.scope.autoplay.stop();
	}

	startAutoplay() {
		this.scope.autoplay.start();
	}

	componentDidUpdate(prevProps, prevState) {
		let { isPause: prevIsPause } = prevProps;
		let { isPause: currentIsPause, options: { autoplay } } = this.props;

		autoplay &&
		(
			!Object.is(currentIsPause, prevIsPause) && currentIsPause
				? this.stopAutoplay()
				: this.startAutoplay()
		)
	}

	componentWillUnmount() {
		this.scope = null;
	}

	render() {
		let { width, height, options } = this.props;
		let { navigation, pagination, loop, effect, autoplay, noSwiping } = options || {};

		let mergeOptions = update({
			loop: false,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
      touchEventsTarget: 'wrapper',
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			}
		}, {
			effect: { $set: effect || '' },
			loop: { $set: loop || false },
			autoplay: { $set: autoplay || false },
			noSwiping: { $set: noSwiping },
			navigation: { $merge: navigation || {} },
			pagination: { $merge: pagination || {} }
		});

		return (
			<div className="swipe-contents-wrap swiper"
			     style={{ width: `${width}px`, height: `${height}px` }}>

				<Swiper {...mergeOptions}
				        ref={this.updateScope}>

					{this.props.children}
				</Swiper>
			</div>
		);
	}
}
