

import React from 'react';

import Privacy from 'components/policy/privacy';

export default class CSAlert extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickSubmit = this.onClickSubmit.bind(this);
		this.onClickClose = this.onClickClose.bind(this);
	}

	onClickSubmit(event) {
		let { actions: { handleCloseAlert }, alert: { callback } } = this.props;

		handleCloseAlert();
		callback && callback(true);
	}

	onClickClose(event) {
		let { actions: { handleCloseAlert }, alert: { callback } } = this.props;

		handleCloseAlert();
		callback && callback(false);
	}

	render() {
		let { alert: { description, privacy, confirm, confirmLabel } } = this.props;

		return (description || privacy) &&
			(
				<div className="alert">
					<div className="inner">
						{privacy
							? (
								<span className="privacy">
									<h2>개인정보 취급방침</h2>
									{React.cloneElement(<Privacy/>, {
										version: 'current',
										showNavigate: false
									})}
								</span>
							)
							: (
								<span className="desc">{description}</span>
							)
						}

						<span className="btn">
							{confirm && (<button type="button" className="btn-white close" onClick={this.onClickClose}>취소</button>)}
							<button type="button" className="btn-black" onClick={this.onClickSubmit}>{confirmLabel || '확인'}</button>
							<button type="button" className="icon icon-close-1212" onClick={this.onClickClose}/>
						</span>
					</div>
					<div className="bg"/>
				</div>
			)
	}
}