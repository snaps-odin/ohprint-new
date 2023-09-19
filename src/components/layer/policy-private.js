

import React from 'react';

import PrivacyIndex from 'components/policy/privacy';

class PolicyPrivate extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickClose = this.onClickClose.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	render() {
		return (
			<div className="policy-layer-wrap">
				<div className="container">
					<div className="top">
						<h1>개인정보 취급방침</h1>
					</div>
					<div className="bottom">
						<section>
							<h3>[개인정보 취급방침 시행 일자: 2019년 08월 13일]</h3>

							{React.cloneElement(<PrivacyIndex/>, {
								version: 'current',
								showNavigate: false
							})}
						</section>
					</div>
				</div>
				<button className="icon-close-1414 close" onClick={this.onClickClose}/>
			</div>
		)
	}
}

module.exports = PolicyPrivate;