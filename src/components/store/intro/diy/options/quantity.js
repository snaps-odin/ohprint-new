

import React from 'react';
import { Field } from 'redux-form';

import { getDeepValue } from 'utils/json';
import * as Validate from 'utils/validate';
import * as Normalize from 'utils/normalize';

import { SelectField, InputQuantityField } from 'components/common/fields';

export default class StoreIntroDIYOptionPanelQuantity extends React.Component {
	getOptions() {
		let { states: { currentForm }, params: { category, subCategory }, prices } = this.props;
		let { priceList } = prices || {};

		let values = getDeepValue(currentForm, `values.option`);

		let isSticker = (category || '').match(/sticker/i);
		let isStickerDIY = (subCategory || '').match(/diy/i) || (getDeepValue(values, 'productShapeType') || '').match(/DIY/i);
		let isStickerFreeSize = (subCategory || '').match(/free-size/i) || (getDeepValue(values, 'productShapeType') || '').match(/MANUAL_SIZE/i);
    let isStickerRoll = (subCategory || '').match(/roll/i);

		return (priceList || []).reduce((target, price, index) => {
			let { quantity, subQuantity, unitName } = price;

			let label = isSticker
				?
				`${quantity}${unitName}${
					(
						!isStickerDIY
						&& !isStickerFreeSize && !isStickerRoll
					)
						? ` (${subQuantity}개)`
						: ''
					}`
				:
				quantity;

			target.push({ label: label, value: index });

			return target;
		}, []);
	}

	shouldComponentUpdate(nextProps, nextState) {
		let { states: { currentForm: nextForm }, prices: nextPrices } = nextProps;
		let { states: { currentForm }, prices: currentPrices } = this.props;

		return !(
			Object.is(JSON.stringify(getDeepValue(nextForm, 'values')), JSON.stringify(getDeepValue(currentForm, 'values'))) &&
			Object.is(JSON.stringify(nextPrices), JSON.stringify(currentPrices))
		)
	}

	render() {
		let { prices, params:{ category } } = this.props;
		let { isPackage } = prices || {};
		let options = this.getOptions();
		let isMd = category.match(/acrylic-keyring|pin-button|mirror-button|magnet-button|smart-tok/i);
		let maxQuantity = (isMd ?  4 : 3);

		return (options || []).length > 0 &&
			(
				<div className="store-intro-diy-option-quantity-wrap">
					<div className="top">
						<h4>수량</h4>
					</div>

					<div className="bottom">
						{isPackage
							?
							(
								<Field name={`quantity`}
								       className="box"
								       options={options}
								       width={170}
								       height={248}
								       placeholder="선택"
								       component={SelectField}
								/>
							)
							:
							(
								<Field name={`quantity`}
								       maxLength={maxQuantity}
								       component={InputQuantityField}
								       validate={[ Validate.required, Validate.number, Validate.minValue1 ]}
								       normalize={Normalize.upperValue()}
								/>
							)
						}
					</div>
				</div>
			)
	}
}
