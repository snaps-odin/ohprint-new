

import React from 'react';

import { getDatasetByName } from 'utils/dom';
import { getDeepValue } from 'utils/json';

export default class NavigationTab extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickSelect = this.onClickSelect.bind(this);
	}

	onClickSelect(event) {
		let { actions: { handleSelect } } = this.props;

		handleSelect && handleSelect(Number(getDatasetByName(event.currentTarget, 'index')), getDatasetByName(event.currentTarget, 'type'));
	}

	render() {
		let { className, names, focused, focusedSub } = this.props;

		let children = getDeepValue(names || [], `${focused}.children`);

		return (
			<div className={`tab-blue-wrap ${className || ''}`}
			     ref={(c) => {this.el = c;}}>

				<div className="top">
					<div className="inner">
						<ul>
							{(names || []).reduce((target, name, index) => {

								name && target.push(
									<li
											key={index+name}
											data-index={index}
									    data-type="main"
									    onClick={this.onClickSelect}>

										<span className={index === focused ? 'active' : null}>
											{name[ 'label' ]}
										</span>
									</li>
								);

								return target;
							}, [])}
						</ul>
					</div>
				</div>
				{children && (
					<div className="bottom">
						<div className="inner">
							<ul>
								{children.reduce((target, child, index) => {
									target.push(
										<li
												key={index+child}
												data-index={index}
										    data-type="sub"
										    onClick={this.onClickSelect}>
											<span className={index === focusedSub ? 'active' : null}>
												{child[ 'label' ]}
											</span>
										</li>
									);

									return target;
								}, [])}
							</ul>
						</div>
					</div>
				)}
			</div>
		)
	}
}
