

import React from 'react';
import update from 'react-addons-update';

import { getPosition, getHeight } from 'utils/dom';
import {gtmV4_view_item} from "configs/google-analytics/ga-v4";

import ShowCase from './showcase/index';
import Options from './options/index';

export default class StoreIntroDIY extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			product: null,
			showcases: null,
			option: null,
			margin: null,
			ready: false
		};

		this.onScroll = this.onScroll.bind(this);
		this.onChangeOption = this.onChangeOption.bind(this);
	}

	onScroll(event) {
		let { margin: currentMargin } = this.state;

		let currentScrollTop = getPosition(this.el).top;
		let currentRightHeight = getHeight(this.right);

		let margin = (currentScrollTop < 0 && currentRightHeight > 670)
			? Math.min(Math.abs(currentScrollTop), currentRightHeight - 670)
			: null;

		!Object.is(currentMargin, margin) && this.setState(update(this.state, {
			margin: { $set: margin }
		}));
	}

	onChangeOption(value) {
		this.setState(update(this.state, { option: { $set: value } }));
	}

	initialize() {
		let {
		  actions: { handleGetStoreProduct, handleRequestStoreProductGallery, handleRequestStoreApparelProductByOptionType, handleRequestStoreProductGalleryByProductCode, handleUpdateGAData },
      router: {query: {category, subCategory}, asPath },
      productApparelCode, brandName, productApparelName,
		} = this.props;

		((category === "apparel") && (
			Promise.all([
				handleGetStoreProduct(category, subCategory)
			]).then(results => {
				let { 0: product, 1:productInfo } = results;

				this.setState(update(this.state, {
					product: { $set: product },
					productInfo: { $set: productInfo }
				}));

        gtmV4_view_item({
          name : productApparelName,
          path: `/store/apparel/overview?productGroupCode=${productApparelCode}`,
          brandName,
        }, handleUpdateGAData);
			}).then(() => {
				Promise.all([
					handleRequestStoreProductGalleryByProductCode(category, subCategory, productApparelCode)
				]).then(results => {
					let { 0: showcases } = results;

					this.setState(update(this.state, {
						showcases: { $set: showcases },
						ready: { $set : true }
					}));
				});
			})
		));

		((category !== "apparel") && (
			Promise.all([
				handleGetStoreProduct(category, subCategory),
				handleRequestStoreProductGallery(category, subCategory)
			]).then(results => {
				let { 0: product, 1: showcases } = results;

				this.setState(update(this.state, {
					product: { $set: product },
					showcases: { $set: showcases },
					ready: { $set: true }
				}));

        gtmV4_view_item({
          name : product['content']['title'],
          path: asPath
        }, handleUpdateGAData);

			})
		));
	}

	shouldComponentUpdate(nextProps, nextState) {
		let { router: {query: nextParams} } = nextProps;
		let { router: {query: currentParams} } = this.props;
		let { showcases: nextShowCase, product: nextProduct, option: nextOption, margin: nextMargin, ready: nextReady } = nextState;
		let { showcases: currentShowCase, product: currentProduct, option: currentOption, margin: currentMargin, ready: currentReady } = this.state;
		let isUpdate = Object.is(JSON.stringify(nextParams), JSON.stringify(currentParams));

		if (!isUpdate) {
			this.setState(
				update(this.state, {
					ready: { $set: false },
				}),
				() => {
					this.initialize()
				},
			);
		}

		return !(
			Object.is(JSON.stringify(nextParams), JSON.stringify(currentParams)) &&
			Object.is(JSON.stringify(nextShowCase), JSON.stringify(currentShowCase)) &&
			Object.is(JSON.stringify(nextProduct), JSON.stringify(currentProduct)) &&
			Object.is(JSON.stringify(nextOption), JSON.stringify(currentOption)) &&
			Object.is(nextMargin, currentMargin) &&
			Object.is(nextReady, currentReady)
		);
	}

	componentDidUpdate(prevProps, prevState) {
		let { router: {query: prevParams}  } = prevProps;
		let { router: {query: currentParams}  } = this.props;

		!Object.is(JSON.stringify(prevParams), JSON.stringify(currentParams)) && this.initialize();
	}

	componentDidMount() {
		Promise.all([
			window.addEventListener('scroll', this.onScroll)
		]).then(() => {
			this.initialize();
		});
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	render() {
		let { states, actions, router: {query}, productApparelCode, productCode } = this.props;

		let { product, showcases, option, margin, ready } = this.state;

		return ready &&
			(
				<section className="store-intro-diy-wrap"
				         ref={(c) => {this.el = c;}}>

					<div className="inner">
						<div className="left"
						     style={margin ? { 'margin': `${margin}px 40px 0 0` } : null}>

							{React.cloneElement(<ShowCase/>, {
                cdn : states.config.url.cdn,
								states,
								query,
								showcases,
								option,
                productCode
							})}
						</div>

						<div className="right"
						     ref={(c) => {this.right = c;}}>

							{React.cloneElement(<Options/>, {
								actions: {
									...actions,
									handleChange: this.onChangeOption
								},
								params: this.props.router.query,
								product,
								productApparelCode,
                productCode
							})}
						</div>
					</div>
				</section>
			)
	}
}
