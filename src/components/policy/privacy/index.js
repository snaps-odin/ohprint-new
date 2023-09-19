

import React from 'react';

import { getDatasetByName } from 'utils/dom';
import PrivacyPrevious0 from './previous-0';
import PrivacyPrevious1 from './previous-1';
import PrivacyPrevious2 from './previous-2';
import PrivacyPrevious3 from './previous-3';
import PrivacyPrevious4 from './previous-4';
import PrivacyPrevious5 from './previous-5';
import PrivacyPrevious6 from './previous-6';
import PrivacyPrevious7 from './previous-7';
import PrivacyPrevious8 from './previous-8';
import PrivacyPrevious9 from './previous-9';
import PrivacyCurrent from './current';

export default class PrivacyIndex extends React.Component {
	constructor(...args) {
		super(...args);

		this.versions = [
			{ name: 'previous-0', component: <PrivacyPrevious0/> },
			{ name: 'previous-1', component: <PrivacyPrevious1/> },
			{ name: 'previous-2', component: <PrivacyPrevious2/> },
			{ name: 'previous-3', component: <PrivacyPrevious3/> },
			{ name: 'previous-4', component: <PrivacyPrevious4/> },
      { name: 'previous-5', component: <PrivacyPrevious5/> },
      { name: 'previous-6', component: <PrivacyPrevious6/> },
      { name: 'previous-7', component: <PrivacyPrevious7/> },
      { name: 'previous-8', component: <PrivacyPrevious8/> },
      { name: 'previous-9', component: <PrivacyPrevious9/> },
			{ name: 'current', component: <PrivacyCurrent/> }
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
