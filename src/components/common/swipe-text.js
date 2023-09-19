

import React from 'react';

import { getWidth, getDatasetByName } from 'utils/dom';

export default class SwipeText extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			x: 0,
			enabled: false
		};

		this.els = [];

		this.onClickItem = this.onClickItem.bind(this);
		this.onClickPrev = this.onClickPrev.bind(this);
		this.onClickNext = this.onClickNext.bind(this);
	}

	onClickItem(event) {
		let { actions } = this.props;
		let { handleSelect } = actions || {};

		let index = getDatasetByName(event.currentTarget, 'index');
		let label = getDatasetByName(event.currentTarget, 'label');
		let value = getDatasetByName(event.currentTarget, 'value');

		Promise.all([
			handleSelect && handleSelect(label, value)
		]).then(() => {
			this.slide(null, this.els[ index ].offsetLeft);
		});
	}

	onClickPrev(event) {
		this.slide(-1, null);
	}

	onClickNext(event) {
		this.slide(1, null);
	}

	slide(dir, targetX) {
		let { width: containerWidth } = this.props;
		let { x } = this.state;

		let sliderWidth = getWidth(this.slider);
		let distance = sliderWidth - containerWidth;
		let tx;

		if (distance > 0) {
			if (dir) {
				if (dir < 0) {
					tx = Math.min(0, x + containerWidth);
				} else {
					tx = Math.max(distance * -1, x + containerWidth * -1);
				}
			} else {
				tx = Math.max(distance * -1, targetX * -1);
			}
		} else {
			tx = 0;
		}

		this.state.x !== tx && this.setState({ x: tx });
	}

	componentDidMount() {
		let { value, width, items } = this.props;

		Promise.all([
			this.setState({ enabled: this.slider && getWidth(this.slider) > width })
		]).then(() => {
			window.setTimeout(() => {
				let index = items.findIndex(item => value === item[ 'value' ]);

				(index !== -1 && this.els[ index ] ) && this.slide(null, this.els[ index ].offsetLeft);
			}, 100);
		});
	}

	render() {
		let { value, width, isLine, items } = this.props;
		let { x, enabled } = this.state;

		let containerStyle = width ? { width: `${width}px` } : null;
		let sliderStyle = { left: `${x}px` };

		return (
			<span className="swipe-text-wrap">
				<span className="container" style={containerStyle}>
					<span className="slider" style={sliderStyle} ref={(c) => {this.slider = c;}}>
						{items.map((item, index) => (
							<span className={isLine ? 'line' : null}
							      data-index={index}
							      data-label={item[ 'label' ]}
							      data-value={item[ 'value' ]}
							      onClick={this.onClickItem}
							      ref={(c) => {this.els[ index ] = c;}}>

								<em className={item[ 'value' ] === value ? 'active' : null}>
									{item[ 'label' ]}
								</em>
							</span>
						))}
					</span>
				</span>

				{enabled && (
					<span className="btn">
						<button type="button" className="icon-prev-1616" onClick={this.onClickPrev}/>
						<button type="button" className="icon-next-1616" onClick={this.onClickNext}/>
					</span>
				)}
			</span>
		)
	}
}