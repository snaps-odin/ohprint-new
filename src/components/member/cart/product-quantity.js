import React from 'react';
import { Field } from 'redux-form';

import { getDeepValue } from 'utils/json';
import { getDatasetByName } from 'utils/dom';

import * as Validate from 'utils/validate';
import * as Normalize from 'utils/normalize';

import { InputQuantityField, SelectField } from 'components/common/fields';

export default class CartProductQuantity extends React.Component {
	constructor(...args) {
		super(...args);

		this.onAddItem = this.onAddItem.bind(this);
		this.onDeleteItem = this.onDeleteItem.bind(this);

		this.onChangeQuantityList = this.onChangeQuantityList.bind(this);
		this.onChangeQuantity = this.onChangeQuantity.bind(this);
	}

	onAddItem(focus) {
		let { actions: { handleChangeFormValue }, field, value, category } = this.props;

    let isMd = category ? category.match(/pin-button|mirror-button|magnet-button|smart-tok/i) : null;
    let maxQuan = (isMd ? 9999 : 999);


		let previousValues = JSON.parse(JSON.stringify(getDeepValue(value, 'optionQuantityList')));

		let values = (getDeepValue(value, 'optionQuantityList') || []).reduce((target, item, index) => {
			let { quantity } = item;

			target.push(Object.assign(item, { quantity: (index === Number(focus) && quantity <= maxQuan) ? quantity + 1 : quantity }));

			return target;
		}, []);

		Number(focus) >= 0 && this.updateItem(values, previousValues).then(() => {
			handleChangeFormValue(`${field}.apparelSize`, -1);
		});
	}

	onDeleteItem(event) {
		let { value } = this.props;
		let focus = Number(getDatasetByName(event.currentTarget, 'index'));

		let previousValues = JSON.parse(JSON.stringify(getDeepValue(value, 'optionQuantityList')));

		let values = (getDeepValue(value, 'optionQuantityList') || []).reduce((target, item, index) => {
			let { quantity } = item;

			target.push(Object.assign(item, {
				quantity: (focus === index) ? 0 : quantity
			}));

			return target;
		}, []);

		this.updateItem(values, previousValues);
	}

	onChangeQuantityList(focus, value) {
		let { value: currentValue, category } = this.props;
    let isMd = category ? category.match(/pin-button|mirror-button|magnet-button|smart-tok/i) :null;
    let maxQuan = (isMd ? 9999 : 999);

		let previousValues = JSON.parse(JSON.stringify(getDeepValue(currentValue, 'optionQuantityList')));

		let values = (getDeepValue(currentValue, 'optionQuantityList') || []).reduce((target, item, index) => {
			let { isSoldOut, quantity } = item;

			target.push(Object.assign(item, {
					quantity: (Number(focus) === index && quantity <= maxQuan) ? (isSoldOut ? 0 : Number(value)) : quantity
				})
			);

			return target;
		}, []);

		this.updateItem(values, previousValues);
	}

	onChangeQuantity(event, value, previousValue) {
		let { actions: { handleChangeQuantity } } = this.props;

		handleChangeQuantity(event, value, previousValue);
	}

	updateItem(values, previousValues) {
		let { actions, field, value: currentValue, category } = this.props;
		let { handleChangeFormValue, handleUpdateCartQuantityByProjectCode } = actions;
		let { allowMinQuantity, projectCode } = currentValue;

    let isMd = category ? category.match(/pin-button|mirror-button|magnet-button|smart-tok/i) : null;
    let maxQuan = (isMd ? 9999 : 999);

		let { totalCount, allowMaxQuantity } = (values || []).reduce((target, item) => {
			target[ 'totalCount' ] += Number(item[ 'quantity' ]);

			return target;
		}, { totalCount: 0, allowMaxQuantity: maxQuan+1 });

		return new Promise(resolve => {
			resolve(!totalCount || totalCount < allowMinQuantity || totalCount > allowMaxQuantity);
		}).then(result => {
			handleChangeFormValue(`${field}.optionQuantityList`, result ? previousValues : values);

			!result &&
			handleUpdateCartQuantityByProjectCode(projectCode, totalCount, values).then(result => {
				[ 'price', 'sellPrice' ].map(keyName => {
					handleChangeFormValue(`${field}.${keyName}`, result[ keyName ]);
				});
			});

			!result && handleChangeFormValue(`${field}.quantity`, totalCount);
		});
	}

	getOptionQuantityList() {
		let { value } = this.props;

		return (getDeepValue(value, 'optionQuantityList') || []).reduce((target, option, index) => {
			let { name, isSoldOut } = option;

			!isSoldOut && target.push({ label: name, value: index });

			return target;
		}, [ { label: '추가 선택', value: -1 } ])
	}

	render() {
		let { disabled, field, value, category } = this.props;
		let { isPackage, quantity, quantityList, optionQuantityList } = value;
    let isMd = category ? category.match(/pin-button|mirror-button|magnet-button|smart-tok/i) : null;
    let maxQuan = (isMd ? 4 : 3);

		return value &&
			(!isPackage
					?
					(((optionQuantityList || []).length > 0)
							?
							(
								<div>
									<dl>
										<dt>사이즈</dt>
										<dd>
											<Field name={`${field}.apparelSize`}
											       className="box"
											       options={this.getOptionQuantityList()}
											       placeholderLabel={`추가 선택`}
											       onChange={(event, value) => {this.onAddItem(value);}}
											       component={SelectField}/>
										</dd>
									</dl>

									{optionQuantityList.reduce((target, item, index) => {
										let { name, isSoldOut, quantity: value } = item;

										!!value && target.push(
											<dl>
												<dt>{name}</dt>
												<dd>
													<Field name={`${field}.optionQuantityList[${index}].quantity`}
													       disabled={isSoldOut && !value}
													       disabledType={(isSoldOut && value) ? 'CR' : ''}
													       maxLength={maxQuan}
													       onChange={(event, value) => { this.onChangeQuantityList(index, value) }}
													       onBlur={(event, value) => { this.onChangeQuantityList(index, value) }}
													       component={InputQuantityField}
													       validate={[ Validate.number ]}/>
												</dd>
												<dd>
													<button type="button"
													        className="icon icon-del-1616"
													        data-index={index}
													        onClick={this.onDeleteItem}/>
												</dd>
											</dl>
										);

										return target;
									}, [])}

									<span>{`(총 수량 : ${quantity})`}</span>
								</div>
							)
							:
							(
								<Field name={`${field}.quantity`}
								       disabled={disabled}
								       maxLength={maxQuan}
								       onChange={this.onChangeQuantity}
								       onBlur={this.onChangeQuantity}
								       component={InputQuantityField}
								       validate={[ Validate.required, Validate.number, Validate.minValue1 ]}
								       normalize={Normalize.upperValue()}/>
							)
					)
					:
					(
						<Field name={`${field}.quantity`}
						       disabled={disabled}
						       className="box"
						       width={80}
						       options={quantityList.reduce((target, item) => {
							       target.push({ label: item, value: item });

							       return target;
						       }, [])}
						       onChange={this.onChangeQuantity}
						       component={SelectField}
						       validate={[ Validate.required ]}/>
					)
			)
	}
}
