

import React from 'react';

import Item from './item';

export default class CSPopContent extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			focusId: null
		};

		this.onFocusItem = this.onFocusItem.bind(this);
	}

	onFocusItem(boardId) {
		this.setState({ focusId: boardId });
	}

	componentDidUpdate(prevProps, prevState) {
		let { states: { cs: { pop: { content: { items: prevItems } } } } } = prevProps;
		let { states: { cs: { pop: { content: { items: currentItems } } } } } = this.props;

		prevItems.length < currentItems.length && this.setState({ focusId: null });
	}

	render() {
		let { states, actions, fields } = this.props;
		let { cs: { pop: { content: { items } } } } = states;
		let { focusId } = this.state;

		return (
			<div className="content">
				{items.length > 0 && fields.map((field, index) => {
					let item = items[ index ];
					let { value: { boardId } } = item;

					return (React.cloneElement(<Item/>, {
						key: boardId,
						states,
						actions: {
							...actions,
							handleFocusItem: this.onFocusItem
						},
						field,
						index,
						item,
						active: focusId === boardId
					}))
				})}
			</div>
		)
	}
}