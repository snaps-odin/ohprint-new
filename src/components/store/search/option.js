

import React from 'react';

import { goStore } from 'utils/url';

import Tab from 'components/common/tab-blue';

export default class Option extends React.Component {
	constructor(...args) {
		super(...args);

		this.onFocusOption = this.onFocusOption.bind(this);
	}

	onFocusOption(index) {
		let { actions: { handleChange } } = this.props;

		handleChange(index);
	}

	render() {
		let { query, product, option: { focus, items } } = this.props;
		let { selectedTemplateCode } = query;

		return (
			<div className="store-search-option-wrap">
				<div className="container">
					<div className="top">
						<div className="inner">
							<div className="left">
								<h2>{product[ 'content' ][ 'title' ]}</h2>
							</div>

							{!selectedTemplateCode && (
								<div className="center">
									{(items || []).length > 1 && (
										React.cloneElement(<Tab/>, {
											actions: {
												handleSelect: this.onFocusOption
											},
											names: items.reduce((target, child) => {
												target.push({ label: child[ 'label' ] });

												return target;
											}, []),
											focused: focus,
											ref: (c) => { this.navigation = c;}
										})
									)}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		)
	}
}