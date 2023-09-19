

import React from 'react';
import { addCdn } from 'utils/url';

export default class LoadingAnimation extends React.Component {
	render() {
		let { isBig } = this.props;

		return (
			<div className={`loading-animation-wrap ${isBig ? 'big' : 'small'}`}>
				<img src={addCdn(`/images/common/loading/loading-${isBig ? '200200' : '8080'}.gif`)}/>
			</div>
		)
	}
}
