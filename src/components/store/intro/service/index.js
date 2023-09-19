

import React from 'react';

import { CSTypes } from 'constants/index';

import { getDeepValue } from 'utils/json';

import Defaults from './defaults';
import Showcase from './showcase';
import styled from "styled-components";

//
// const NoticeImage = styled.div`
//   background: #fff;
//   text-align: center;
//   padding-top: 70px;
//   > img{
//     width: 1140px;
//   }
// `;
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
		let { className, params, product, cdn } = this.props;
		let { category, subCategory } = params;

		let { common, content } = product;
		let { showcases } = common || {};
		let { services } = content || {};


		let isStickerFreeSize = `${category}/${subCategory}`.match(/sticker\/free-size/i);
		let isAccessory = (category || '').match(/accessory/i);

		return (
			<section className={`store-intro-service-wrap ${className}`}
			         ref={(c) => {this.el = c;}}>

        {/*임시*/}
        {/*{*/}
        {/*  (category === "reusable-cup") &&*/}
        {/*  <NoticeImage>*/}
        {/*    <img src={"https://front-cdn.ohprint.me/assets/ko_kr/pc/images/store/intro/reusable-cup/service/web-renewal-banner@2x.jpg"} alt={""}/>*/}
        {/*  </NoticeImage>*/}
        {/*}*/}

				{(services || []).length > 0 && (
					(services || []).reduce((target, service) => {
						let showcase = getDeepValue(showcases, service) || {};

						showcase && target.push(
							React.cloneElement(<Showcase/>, {
                cdn,
								showcase,
								category,
								ref: c => {c && c[ 'el' ] && (this.children[ showcase[ 'menuIndex' ] ] = c);}
							})
						);

						return target;
					}, [])
				)}

				{(
					!isStickerFreeSize && !isAccessory
				) && React.cloneElement(<Defaults/>, {
          params,
					actions: {
						handleShowGuide: this.onShowGuide
					}
				})}
			</section>
		)
	}
}
