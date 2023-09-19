

import React from 'react';
import { connect } from 'react-redux';

import { LayerTypes } from 'constants/index';
import { getDatasetByName } from 'utils/dom';
import { addCdn } from 'utils/url';

class EventsImage extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickClose = this.onClickClose.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	render() {
		let { options: { width, height, imgUrl } } = this.props;

		return (
			<div className="events-image-layer-wrap popup" style={{ width: `${width}px`, height: `${height + 50}px` }}>
				<div className="container">
					<div className="middle">
						<img src={addCdn(imgUrl)}/>
					</div>

					<div className="bottom" ref={(c) => {this.bottom = c}}>
						<button type="button" className="btn-blue-medium" onClick={this.onClickClose}>확인</button>
					</div>
				</div>
				<button className="icon icon-close-w-1414 close"
				        type="button"
				        onClick={this.onClickClose}/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownerProps) => {
	return {}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(EventsImage);
