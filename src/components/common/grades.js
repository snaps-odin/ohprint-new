

import React from 'react';

import { getDatasetByName } from 'utils/dom';

export default class Grades extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickIndex = this.onClickIndex.bind(this);
	}

	onClickIndex(event) {
		let { handleChangeIndex } = this.props;

		handleChangeIndex && handleChangeIndex(Number(getDatasetByName(event.currentTarget, 'index')));
	}

	render() {
		let { focus, maxLength, className, handleChangeIndex } = this.props;
		let disabled = !handleChangeIndex;

		return (
			<span className={`grades-wrap ${disabled ? 'lock' : ''}`}>
			{new Array(maxLength).fill(true).map((item, index) => (
				<button className={`${(focus !== 0 && index + 1 <= Number(focus)) ? 'active' : ''} ${className || ''}`}
				        type="button"
				        data-index={index + 1}
				        disabled={disabled}
				        onClick={this.onClickIndex}/>
			))}
		</span>
		)
	}
}