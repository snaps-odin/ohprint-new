

import React from 'react';

import { isCollisionByPoint } from 'utils/dom';

import Tip from './tip';
import Tab from './tab';
import Contents from './contents/index';

export default class CSFloating extends React.Component {
	constructor(...args) {
		super(...args);

		this.onCollision = this.onCollision.bind(this);
	}

	onCollision(event) {
		let { states, actions } = this.props;
		let { cs: { floating: { opened }, pop: { touched } } } = states;
		let { handleChangeCSTabWidth, handleCloseCS, handleTouchCSPopItem } = actions;

		let { clientX, clientY } = event;

		if (opened) {
			if (
				!isCollisionByPoint(this.tip.scope, clientX, clientY) &&
				!isCollisionByPoint(this.tab.scope, clientX, clientY) &&
				!isCollisionByPoint(this.contents.scope, clientX, clientY) &&
				!touched
			) {
				handleChangeCSTabWidth(42);
				handleCloseCS();
			}
		}

		handleTouchCSPopItem(false);
	}

	componentDidMount() {
		let { actions: { handleAppearCS } } = this.props;

		Promise.all([
			window.setTimeout(() => handleAppearCS(), 1000)
		]).then(() => {
			window.addEventListener('mousedown', this.onCollision);
		});
	}

	componentWillUnmount() {
		window.removeEventListener('mousedown', this.onCollision);
	}

	render() {
		let { states, actions, pathname } = this.props;
		let { cs: { floating: { right } } } = states;

		let style = { right: `${right}px` };

		return (
			<div className="floating"
			     style={style}
			     ref={(c) => {this.scope = c;}}>

				{React.cloneElement(<Tip/>, {
					states,
					actions,
					pathname,
					ref: (c) => {this.tip = c;}
				})}

				{React.cloneElement(<Tab/>, {
					states,
					actions,
					pathname,
					ref: (c) => {this.tab = c;}
				})}

				{React.cloneElement(<Contents/>, {
					states,
					actions,
					pathname,
					ref: (c) => {this.contents = c;}
				})}
			</div>
		)
	}
}
