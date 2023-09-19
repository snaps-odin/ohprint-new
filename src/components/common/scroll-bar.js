

import React from 'react';

import { getWidth, getPosition } from 'utils/dom';

export default class ScrollBar extends React.Component {

	constructor(...args) {
		super(...args);

		this.enabled = false;

		this.onScrollTarget = this.onScrollTarget.bind(this);
		this.onStartDrag = this.onStartDrag.bind(this);
		this.onMoveDrag = this.onMoveDrag.bind(this);
		this.onEndDrag = this.onEndDrag.bind(this);
	}

	onScrollTarget(event) {
		if (!this.enabled) {
			let { clientWidth, scrollWidth, scrollLeft } = event.currentTarget;
			let distance = getWidth(this.scope) - getWidth(this.tab);
			let ratio = scrollLeft / (scrollWidth - clientWidth);

			this.positionTab(distance * ratio);
		}
	}

	onStartDrag(event) {
		if (!this.enabled) {
			this.enabled = true;

			this.dragTab(event.pageX);
		}
	}

	onEndDrag(event) {
		if (this.enabled) {
			this.enabled = false;
		}
	}

	onMoveDrag(event) {
		if (this.enabled) {
			this.dragTab(event.pageX);
		}
	}

	dragTab(pageX) {
		let left = pageX - getPosition(this.scope).left - getWidth(this.tab) / 2;
		left = Math.min(Math.max(0, left), getWidth(this.scope) - getWidth(this.tab));

		this.positionTab(left);

		if (this.enabled) this.props.handleChangeRatio(left / (getWidth(this.scope) - getWidth(this.tab)));
	}

	positionTab(left) {
		this.tab.style.left = `${left}px`;
	}

	componentDidMount() {
		this.props.handleGetTarget().addEventListener('scroll', this.onScrollTarget);
		this.scope.addEventListener('mousedown', this.onStartDrag);
		window.addEventListener('mousemove', this.onMoveDrag);
		window.addEventListener('mouseup', this.onEndDrag);
	}

	componentWillUnmount() {
		this.scope.removeEventListener('mousedown', this.onStartDrag);
		window.removeEventListener('mousemove', this.onMoveDrag);
		window.removeEventListener('mouseup', this.onEndDrag);
	}

	render() {
		let { style } = this.props;

		return (
			<div className="scroll-bar-wrap"
			     style={style}
			     ref={(c) => {this.scope = c;}}>
				<div className="tab" ref={(c) => {this.tab = c;}}>
				</div>
			</div>
		)
	}
}