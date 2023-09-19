

import React from 'react';

import LoadingAnimation from 'components/common/loading-animation';

export default class Loading extends React.Component {
	render() {
		return (
			<div className="loading-layer-wrap">
				<div className="container">
					<LoadingAnimation isBig={true}/>
				</div>
			</div>
		)
	}
}