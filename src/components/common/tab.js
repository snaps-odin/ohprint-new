

import React from 'react';

export default class Tab extends React.Component {
	render() {
		let { labels, className, tabWidth, tabHeight, activeIndex, actions: { handleChange } } = this.props;
		let tapStyle = (tabWidth && tabHeight) ? { width: tabWidth, height: tabHeight } : null;

		return (
			<div className={`tab-wrap ${className || ''}`}>
				{labels.reduce((target, label, index) => {
					let className = '';

					switch (index) {
						case activeIndex:
							className = 'active';
							break;
						case activeIndex-1:
							className = 'prev';
							break;
						case activeIndex+1:
							className = 'next';
							break;
					}

					target.push(
						<button data-index={index} type="button"
						        className={className}
						        style={tapStyle}
						        onClick={handleChange}>{label}</button>
					);

					return target;
				}, [])}
			</div>
		)
	}
}