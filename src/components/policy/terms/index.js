

import React from 'react';

import { getDatasetByName } from 'utils/dom';
import TermsCurrent from './current';
import TermsPrevious0 from "./previous-0";

export default class TermsIndex extends React.Component {
	constructor(...args) {
		super(...args);

		this.versions = [
      { name: 'previous-0', component: <TermsPrevious0/> },
			{ name: 'current', component: <TermsCurrent/> }
		];
	}

	render() {
		let { version, showNavigate, actions } = this.props;

		let children = this.versions.find((v, index) => v.name === (version || 'current'));

		return children &&
			(
				React.cloneElement(children[ 'component' ], {
					showNavigate,
					actions
				})
			)
	}
}
