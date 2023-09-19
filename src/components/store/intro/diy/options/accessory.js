

import React from 'react';
import { Field } from 'redux-form';

import { addDomain } from 'utils/url';
import { toCash } from 'utils/format';
import { getDatasetByName } from 'utils/dom';
import { getDeepValue } from 'utils/json';
import * as Validate from 'utils/validate';
import * as Normalize from 'utils/normalize';

import { SelectField, InputQuantityField, InputField } from 'components/common/fields';
import ThumbnailProduct from 'components/common/thumbnail-product';

export default class StoreIntroDIYOptionAccessory extends React.Component {
	constructor(...args) {
		super(...args);

		this.onAddItem = this.onAddItem.bind(this);
		this.onDeleteItem = this.onDeleteItem.bind(this);
	}

	normalize(value, previousValue) {
		return value.replace(/[^a-zA-Z.,]/gi, '').toUpperCase().slice(0, 5);
	}

	onAddItem(categoryIndex, subCategoryIndex) {
		let { states: { currentForm }, actions: { handleChange }, accessories } = this.props;

		let { productCode, templateCode, templateName, isPackage, priceList, priceInfo, engravePrice } = getDeepValue(accessories, `${categoryIndex}.accessoryList.${subCategoryIndex}`);

		let values = getDeepValue(currentForm, 'values.accessories') || [];

		values = values.concat([ {
			productCode,
			templateCode,
			label: templateName,
			options: isPackage
				?
				(priceList || []).reduce((target, price, index) => {
					target.push({
						label: price[ 'quantity' ],
						value: index
					});

					return target;
				}, [])
				: null,
			prices: isPackage ? priceList : priceInfo,
			value: isPackage ? 0 : 1,
			isPackage,
			engravePrice
		} ]);

    console.log(this.getOptions(0))

		handleChange(values);
	}

	onDeleteItem(event) {
		let { states: { currentForm }, actions: { handleChange } } = this.props;

		let index = Number(getDatasetByName(event.currentTarget, 'index'));
		let values = JSON.parse(JSON.stringify(getDeepValue(currentForm, 'values.accessories')));

		values.splice(index, 1);

		handleChange(values);
	}

	getOptions(categoryIndex) {
		let { states: { config: { url: { cdn: cdnUrl } } }, accessories } = this.props;

		return (getDeepValue(accessories, `${categoryIndex}.accessoryList`) || []).reduce((target, accessory, index) => {
			let { productCode, templateName, thumbnailUrl, isPackage, priceList, priceInfo } = accessory;

			target.push({
				label: (
					<span>
						{React.cloneElement(<ThumbnailProduct/>, {
							imageUrl: addDomain(cdnUrl, thumbnailUrl),
							productCode,
							type: 'defaults'
						})}

						<span>
							{templateName}<br/>
							<em>
								{toCash((isPackage ? priceList[ 0 ] : priceInfo)[ 'sellPrice' ])}원
							</em>
						</span>
					</span>
				),
				value: index
			});

			return target;
		}, []);
	}

	shouldComponentUpdate(nextProps, nextState) {
		let { states: { currentForm: nextForm }, accessories: nextAccessories } = nextProps;
		let { states: { currentForm }, accessories: currentAccessories } = this.props;

		return !(
			Object.is(JSON.stringify(getDeepValue(nextForm, 'values')), JSON.stringify(getDeepValue(currentForm, 'values'))) &&
			Object.is(JSON.stringify(nextAccessories), JSON.stringify(currentAccessories))
		)
	}

	render() {
		let { states: { currentForm }, accessories } = this.props;

		let items = getDeepValue(currentForm, 'values.accessories') || [];

		return (
			<div className="store-intro-diy-option-accessory-wrap">
				<div className="top">
					<h4>액세서리</h4>
				</div>

				<div className="middle">
					{(accessories || []).reduce((target, list, index) => {
						target.push(
							<Field name={`accessory[${index}]`}
							       className="box"
							       width={258}
							       stepHeight={70}
							       options={this.getOptions(index)}
							       placeholderLabel={`${list[ 'title' ]}를 선택하세요.`}
							       onChange={(event, value) => {this.onAddItem(index, value);}}
							       component={SelectField}/>
						);

						return target;
					}, [])}
				</div>

				{(items || []).length > 0 && (
					<ul className="bottom">
						{items.reduce((target, item, index) => {
							let { label, options, prices, value, isPackage, engravePrice, displayText } = item;

							target.push(
								<li>
									<span className="top">
										<h5>
											{label}{engravePrice
												? (<span>{`(이니셜 각인 : +${toCash(engravePrice)}원)`}</span>)
												: ''
											}
										</h5>
									</span>

									{engravePrice && (
										<span className="middle">
											<Field name={`accessories[${index}].displayText`}
											       type="text"
											       className="box"
											       width={220}
											       placeholder="영문, 쉼표, 온점만 입력 가능"
											       maxLength={5}
											       showLength={true}
											       component={InputField}
											       normalize={this.normalize}/>
										</span>
									)}

									<span className="bottom">
										<span className="left">
											{isPackage
												?
												(
													<Field name={`accessories[${index}].value`}
													       className="box"
													       width={75}
													       placeholder={'선택'}
													       options={options}
													       component={SelectField}/>
												)
												:
												(
													<Field name={`accessories[${index}].value`}
													       maxLength={3}
													       component={InputQuantityField}
													       validate={[ Validate.required, Validate.number, Validate.minValue1 ]}
													       normalize={Normalize.upperValue()}/>
												)
											}
										</span>

										<span className="right">
											<button type="button"
											        className="icon icon-del-1515"
											        data-index={index}
											        onClick={this.onDeleteItem}/>

											<span>{toCash(isPackage
												? prices[ value ][ 'sellPrice' ] + (displayText ? engravePrice : 0)
												: (prices[ 'sellPrice' ] + (displayText ? engravePrice : 0)) * value)}원</span>
										</span>
									</span>
								</li>
							);

							return target;
						}, [])}
					</ul>
				)}
			</div>
		)
	}
}
