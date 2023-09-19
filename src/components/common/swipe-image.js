

import React from 'react';
import { Swiper, Slide } from 'react-dynamic-swiper';

import { addDomain, addCdn } from 'utils/url';

export default class SwipeImage extends React.Component {
	constructor(...args) {
		super(...args);

		this.onMouseOver = this.onMouseOver.bind(this);
		this.onMouseOut = this.onMouseOut.bind(this);
	}

	onMouseOver(event) {
		this.swipe && this.swipe.stopAutoplay();
	}

	onMouseOut(event) {
		this.swipe && this.swipe.startAutoplay();
	}

	componentDidUpdate(prevProps, prevState) {}

	componentWillUnmount() {}

	render() {
		let { width, height, images } = this.props;

		let options = {
			pagination: true,
			scrollBar: false
		};

		let swiperOptions = {
			autoplay: 3000,
			lazyLoading: true,
			loop: true,
			paginationClickable: true,
			paginationBulletRender: (swiper, index, className) => {
				return `<span class="${className} box"><img src="${addCdn(images[ index ])}"/></span>`
			}
		};

		return (
			<div className="swipe-image-wrap"
			     style={{ width: `${width}px`, height: `${height}px` }}
			     onMouseOver={this.onMouseOver}
			     onMouseOut={this.onMouseOut}>
				{images && (
					<Swiper ref={(c) => {if (c) this.swipe = c[ '_swiper' ];}}
					        options={options}
					        swiperOptions={swiperOptions}>
						{images.map((image, index) => {
							return index < 10 && (
									<Slide key={index}>
									<span>
										<span>
											<img src={addCdn(image)}/>
										</span>
									</span>
									</Slide>
								)
						})}
					</Swiper>
				)}
			</div>
		)
	}
}
