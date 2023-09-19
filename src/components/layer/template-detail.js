

import React from 'react';
import { connect } from 'react-redux';

import TemplatePreview from 'components/common/template-preview';

class TemplateDetail extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickClose = this.onClickClose.bind(this);
	}

	onClickClose() {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	render() {
		let { options: { states, actions, category, subCategory, query, item, itemIndex, isAccessory, designCount, product, navigation, useImageServer } } = this.props;

		return (
			<div className="template-detail-layer-wrap">
				<div className="container">
					{item && React.cloneElement(<TemplatePreview/>, {
						states,
						actions,
						category,
						subCategory,
						query,
						isAccessory,
						designCount,
						item,
						itemIndex,
						product,
						navigation,
						isLayerPopup: true,
            useImageServer
					})}
				</div>

				<button type="button"
				        className="icon-close-1414 close"
				        onClick={this.onClickClose}/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownerProps) => {
	return {
		states: {
			...ownerProps.states
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(TemplateDetail);
