

import React from 'react';

import { CSTypes } from 'constants/index';

import { getDeepValue } from 'utils/json';

import { PRODUCTS } from 'configs/products/index';

import Showcase from './showcase';

export default class Service extends React.Component {
	constructor(...args) {
		super(...args);

		this.children = [];

		this.onShowGuide = this.onShowGuide.bind(this);
	}

	onShowGuide(event) {
		let { actions: { handleUpdateCSPopItem } } = this.props;

		handleUpdateCSPopItem({
			type: CSTypes.TUTORIAL,
			value: {
				boardId: `tutorial-GUIDE`,
				keyName: 'GUIDE',
				index: 0
			}
		}, CSTypes.APPEND);
	}

	shouldComponentUpdate(nextProps, nextState) {
		let { product: nextProduct, className: nextClassName } = nextProps;
		let { product: currentProduct, className: currentClassName } = this.props;

		return !(
			Object.is(JSON.stringify(nextProduct), JSON.stringify(currentProduct)) &&
			Object.is(JSON.stringify(nextClassName), JSON.stringify(currentClassName))
		);
	}

	render() {
		let { className, params, updateSections } = this.props;
		let { category, subCategory } = params;
		let { COMMON, SERVICE } = PRODUCTS[ 'FAIR' ][subCategory];
    let { showcases } = COMMON || {};
    let services = SERVICE && SERVICE[ 'services' ];


		//let isStickerFreeSize = `${category}/${subCategory}`.match(/sticker\/free-size/i);
		//let isAccessory = (category || '').match(/accessory/i);


		return (
			<section className={`store-overview-service-wrap ${className}`}
			         ref={(c) => {this.el = c;}}>

				{(services || []).length > 0 && (
					(services || []).reduce((target, service) => {
						let showcase = getDeepValue(showcases, service) || {};

						showcase && target.push(
							React.cloneElement(<Showcase/>, {
								showcase,
                category,
								ref: c => {c && c[ 'el' ] && (this.children[ showcase[ 'menuIndex' ] ] = c);}
							})
						);

						return target;
					}, [])
				)}

			</section>
		)
	}
}
