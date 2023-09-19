

import React from 'react';

import TemplatePreview from 'components/common/template-preview';

export default class Detail extends React.Component {

	render() {
		let { states, actions, category, subCategory, query, item, itemIndex, isAccessory, designCount, product, navigation } = this.props;

		return (
			React.cloneElement(<TemplatePreview/>, {
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
				navigation
			})
		)
	}
}
