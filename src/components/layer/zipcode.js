

import React from 'react';

import { embedZipCode } from 'utils/daum';

class ZipCode extends React.Component {
	constructor(...args) {
		super(...args);

		this.onSelected = this.onSelected.bind(this);
		this.onClickClose = this.onClickClose.bind(this);
	}

	onSelected(data) {
		let { actions: { handleCloseContentsLayer }, options: { callback } } = this.props;

		Promise.all([
			callback && callback({
        buildingCode : data[ 'buildingCode' ],
				zipCode: data[ 'zonecode' ],
				address: `${data[ 'userSelectedType' ].match(/R/i) ? data[ 'roadAddress' ] : data[ 'jibunAddress' ]} ${data[ 'buildingName' ] || ''}`
			})
		]).then(() => {
			handleCloseContentsLayer();
		})
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	componentDidMount() {
		window.setTimeout(() => {
			embedZipCode(this.bottom, this.onSelected);
		}, 500);
	}

	render() {
		return (
			<div className="zipcode-layer-wrap popup">
				<div className="container">
					<div className="top">
						<h2>우편번호 검색</h2>
					</div>

					<div className="bottom" ref={(c) => {this.bottom = c;}}/>
				</div>

				<button type="button"
				        className="icon icon-close-w-1414 close"
				        onClick={this.onClickClose}/>
			</div>
		)
	}
}

module.exports = ZipCode;
