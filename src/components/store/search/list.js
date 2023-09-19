

import React from 'react';
import Lazyload from 'react-lazyload';

import { getDeepValue } from 'utils/json';

import Tile from './tile';
import Detail from './detail';

export default class List extends React.Component {
	render() {
		let { states, actions, category, subCategory, query, items, viewMode, isPreview, isAccessory, product, navigation } = this.props;
		let { selectedTemplateCode, paperShapeType } = query;

		let columnCount = 3;
		let productSizeType = getDeepValue(items, '0.productSizeType') || 'BUSINESS_CARD_8DOT5X5DOT5';
		let productShapeType = getDeepValue(items, '0.productShapeType');

		switch (productSizeType) {
			case 'PLACARD_BANNER_5000X900':
			case 'PLACARD_BANNER_4000X700':
			case 'PLACARD_BANNER_2500X700':
			case 'CAR_MAGNET_400X97':
			case 'CAR_MAGNET_800X200':
			case 'CAR_MAGNET_1000X250':
			case 'CAR_MAGNET_1200X300':
				columnCount = 2;
				break;

			case 'PLACARD_BANNER_900X5000':
			case 'PLACARD_BANNER_700X4000':
			case 'PLACARD_BANNER_700X2500':
			case 'STANDARD_BANNER_600X1800':
			case 'DOUBLE_SIDE_BANNER_600X1800':
			case 'ROLLUP_BANNER_850X2000':
				columnCount = 4;
				break;

			default:
				columnCount = 3;
				break;
		}

		switch (productShapeType) {
			case 'PLACARD_BANNER_FREESIZE_HORIZONTAL':
				columnCount = 2;
				break;

			case 'PLACARD_BANNER_FREESIZE_VERTICAL':
				columnCount = 4;
				break;
		}

		return (
			<ul className={columnCount ? `column-${columnCount}` : ''}>
				{(items || []).length > 0
					?
					items.reduce((target, item, index) => {
						let designCount = (item ? item[ 'designList' ] || [] : []).length;

						let element = (
							React.cloneElement((!!selectedTemplateCode || isPreview) ? <Detail/> : <Tile/>, {
								states,
								actions,
								category,
								subCategory,
								query,
								item,
								isAccessory,
								itemIndex: isPreview ? index + 1 : index,
								designCount: (
									(category || '').match(/business-card/)
										?
										(
											(paperShapeType || '').match(/TRANSPARENCY/)
												? designCount
												: designCount / 2
										)
										: ((category || '').match(/sticker/i) ? designCount : 1)
								),
								product,
								navigation
							})
						);

						target.push(
							<li key={item[ 'templateCode' ]}
							    className={!!selectedTemplateCode ? 'only-one' : ''}>
								{isPreview
									? <Lazyload throttle={200} height={100}>{element}</Lazyload>
									: element
								}
							</li>
						);

						return target;
					}, [])
					:
					((viewMode || '').match(/LIKE/i)
							?
							(
								<li className="nothing">
									<h2>찜 한 디자인 리스트가 없습니다. </h2>
									<span>마음에 드는 상품이 있다면,  <em className="icon-good-y-1111"/>버튼을 선택하여 담아 주세요.</span>
								</li>
							)
							:
							(
								<li className="nothing">
									<h2>해당하는 상품이 없습니다.</h2>
								</li>
							)
					)
				}
			</ul>
		)
	}
}
