

import React from 'react';

import { getDatasetByName } from 'utils/dom';

export default class Pagination extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClick = this.onClick.bind(this);
	}

	onClick(event) {
		let { limit, totalCount } = this.props;
		let index = getDatasetByName(event.currentTarget, 'index');

		!!Number(totalCount) && this.props.handleChangeOffset(index * limit);
	}

	render() {
		let { limit, offset, totalCount } = this.props;
		let ready = !!Number(totalCount);
		let step = 10;
		let total = Math.ceil(totalCount / limit);
		let current = Math.floor(offset / limit);
		let start = Math.floor((offset / limit) / 10) * 10;
		let end = Math.min(start + step, total);
		let disabled = !Number(totalCount);

		return (
			<div className="pagination-wrap">
				{/**
				 <a className="first"
				 data-index={0}
				 disabled={disabled}
				 onClick={this.onClick}/>
				 */}

				<a className="prev"
				   data-index={Math.max(current - 1, 0)}
				   disabled={disabled}
				   onClick={this.onClick}/>

				{(ready && (end - start) > 0) && new Array(end - start).fill(true).map((item, index) => {
					let focus = start + index;
					return (
						<a className={current == focus ? 'active' : ''}
						   data-index={focus}
						   onClick={this.onClick}>{focus + 1}</a>
					)
				})}

				<a className="next"
				   data-index={Math.min(current + 1, total - 1)}
				   disabled={disabled}
				   onClick={this.onClick}/>

				{/**
				 <a className="last"
				 data-index={total - 1}
				 disabled={disabled}
				 onClick={this.onClick}/>
				 */}
			</div>
		);
	}
};
