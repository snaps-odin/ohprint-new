

import React from 'react';
import { Field } from 'redux-form';

import { LayerTypes } from 'constants/index';

import { getDeepValue } from 'utils/json';
import { getDatasetByName } from 'utils/dom';
import { toCash } from 'utils/format';
import * as Validate from 'utils/validate';
import * as Normalize from 'utils/normalize';

import { SelectField, InputQuantityField } from 'components/common/fields';

export default class StoreIntroDIYOptionPanelQuantityApparel extends React.Component {
	constructor(...args) {
		super(...args);

		this.allowMaxQuantity = 1000;

		this.onClickOpenDetail = this.onClickOpenDetail.bind(this);
		this.onAddItem = this.onAddItem.bind(this);
		this.onDeleteItem = this.onDeleteItem.bind(this);
		this.onUpdateItem = this.onUpdateItem.bind(this);
		this.onUpdateEchoBagItem = this.onUpdateEchoBagItem.bind(this);
		this.setCustomItem = this.setCustomItem.bind(this);
	}

	onClickOpenDetail() {
		let { actions: { handleOpenContentsLayer }, params: { category, subCategory }, product } = this.props;
		let { common: { showcases } } = product;

		handleOpenContentsLayer(LayerTypes.PRODUCT_DETAIL, {
			category,
			subCategory,
			keyName: 'sizeCode',
			showcases
		})
	}

	getOptions() {
		let { children } = this.props;

		return (children || []).reduce((target, child) => {
			let { label, value, disabled } = child;
			target.push({
				label,
				value,
				disabled
			});

			return target;
		}, [])
	}

	getSoldOut() {
		let { children, enableSizeCount } = this.props;

		let soldOuts = (children || []).reduce((target, child) => {
			let { label, disabled } = child;
			disabled && target.push(label);

			return target;
		}, []).join(',');

		return soldOuts ? (enableSizeCount === 0 ? '(전 사이즈 일시 품절)' : `(${soldOuts} 일시 품절)`) : '';
	}

	onAddItem(value) {
		let { children, states: { currentForm }, actions: { handleChangeFormValue } } = this.props;

		let selectedIndex = children.findIndex(child => child[ 'value' ] === value);
		let child = children[ selectedIndex ];
		let values = getDeepValue(currentForm, 'values.sizes') || [];
		let minQuantity = this.getMinQuantity();
		let index = values.findIndex(child => child[ 'value' ] === value);

		index > -1
			?
			Number(values[ index ][ 'quantity' ]) < 999 && (values[ index ][ 'quantity' ] = Number(values[ index ][ 'quantity' ]) + 1)
			:
			(values = values.concat([ {
				label: child[ 'label' ],
				value,
				quantity: values.length > 0 ? 1 : minQuantity,
				price: 0
			} ]));

		this.checkMaxQuantity(values).then(() => {
			this.updateItem(values);
		}).catch(() => {
			index > -1 && handleChangeFormValue(`sizes[${index}].quantity`, Number(values[ index ][ 'quantity' ]) - 1);
		});
	}

	onDeleteItem(event) {
		let { states: { currentForm } } = this.props;

		let index = Number(getDatasetByName(event.currentTarget, 'index'));
		let values = JSON.parse(JSON.stringify(getDeepValue(currentForm, 'values.sizes')));

		values.splice(index, 1);

		this.updateItem(values);
	}

	onUpdateEchoBagItem(index, value, previousValue, name) {
		let { states: { currentForm }, actions: { handleChangeFormValue } } = this.props;

    let minQuantity = this.getMinQuantity();
		let quantity = getDeepValue(currentForm, 'values.quantity');
		let values = getDeepValue(currentForm, 'values.sizes') || [];

		values[ index ][ 'quantity' ] = value < minQuantity ? minQuantity : +value;


		this.checkMaxQuantity(values).then(() => {
			this.updateItem(values);
		}).catch(() => {
			handleChangeFormValue(name, previousValue || 1);
		});
	}

	onUpdateItem(index, value, previousValue, name) {
		let { states: { currentForm }, actions: { handleChangeFormValue } } = this.props;
		let quantity = getDeepValue(currentForm, 'values.quantity');
		let values = getDeepValue(currentForm, 'values.sizes') || [];
		values[ index ][ 'quantity' ] = +value;

		this.checkMaxQuantity(values).then(() => {
			this.updateItem(values);
		}).catch(() => {
			handleChangeFormValue(name, previousValue || 1);
		});
	}

	updateItem(values) {
		let { prices, actions: { handleChange, handleChangeQuantity } } = this.props;
		let { priceList } = prices || {};

		let quantity = (values || []).reduce((target, value) => {
			target += Number(value[ 'quantity' ]);
			return target;
		}, 0);

		let price = ((priceList || []).filter(price => Number(price[ 'quantity' ]) <= quantity) || []).pop();
		(values = (values || []).reduce((target, value) => {
			let sellPrice = (price || {})[ 'sellPrice' ] || null;
			value[ 'price' ] = sellPrice ? sellPrice * Number(value[ 'quantity' ]) : null;
			target.push(value);
			return target;
		}, []));

		return Promise.all([
			handleChange(values)
		]).then(() => {
			handleChangeQuantity(quantity);
		})
	}



	updateSoldoutSize() {
		let { children, states: { currentForm }, actions: { handleChangeFormValue } } = this.props;

		let sizes = getDeepValue(currentForm, 'values.sizes') || [];

		let updateSizes = sizes.reduce((target, size) => {
			let isDisabled = !!(children.find(child => child[ 'value' ] === size[ 'value' ]) || {})[ 'disabled' ];

			!isDisabled && target.push(size);

			return target;
		}, []);

		!Object.is(JSON.stringify(sizes), JSON.stringify(updateSizes))
			?
			Promise.all([
				handleChangeFormValue('sizes', updateSizes)
			]).then(() => {
				this.updateItem(updateSizes);
			})
			:
			this.updateItem(updateSizes);
	}

	getMinQuantity() {
		let { states: { currentForm } } = this.props;

		let paperCode = getDeepValue(currentForm, 'values.option.paperCode') || null;
		let minQuantityList = getDeepValue(currentForm, 'values.validation.minQuantityList') || [];

		let matchQuantity = (minQuantityList || []).find(minQuantity => {
			return Object.is(minQuantity[ 'paperCode' ], paperCode);
		});
		return Number((matchQuantity || {})[ 'quantity' ] || 1);
	}

	checkMaxQuantity(values) {
		let { actions: { handleOpenAlertLayer } } = this.props;

		let allowMaxQuantity = this.allowMaxQuantity;
		let totalCount = values.reduce((target, value) => {
			target += +value[ 'quantity' ];
			return target;
		}, 0);

		return new Promise((resolve, reject) => {
			totalCount > allowMaxQuantity
				?
				handleOpenAlertLayer({
					description: (
						`최대 ${allowMaxQuantity}개까지 주문 가능합니다.<br/>대량주문을 원하실 경우,<br/>고객센터(1577-4703)로 연락주세요.`
					),
					callback: () => {
						reject();
					}
				})
				:
				resolve();
		});
	}


	componentWillMount() {
		this.setCustomItem();
	}



	setCustomItem(){
		let { children, states: { currentForm }, actions: { handleChangeFormValue }, productApparelCode } = this.props;

		if((productApparelCode === "704") || (productApparelCode === "706")){
			let items = getDeepValue(currentForm, 'values.sizes') || [];
			let value = this.getOptions();
			value = ((value && value.length > 0 ) ? value[0][ 'value' ] : '');

			let selectedIndex = children.findIndex(child => child[ 'value' ] === value);
			let child = children[ selectedIndex ];
			let values = getDeepValue(currentForm, 'values.sizes') || [];
			let minQuantity = this.getMinQuantity();
			let index = values.findIndex(child => child[ 'value' ] === value);

			let changeValues = getDeepValue(currentForm, 'values.quantity') || 0;

      if(index > -1 && (changeValues < minQuantity )){
        handleChangeFormValue(`sizes[${index}].quantity`, minQuantity);
      }

			if(index <= -1){
				values = values.concat([ {
					label: child[ 'label' ],
					value,
					quantity: values.length > 0 ? 1 : minQuantity,
					price: 0
				} ]);


				this.checkMaxQuantity(values).then(() => {
					this.updateItem(values);
				}).catch(() => {
					index > -1 && handleChangeFormValue(`sizes[${index}].quantity`, Number(values[ index ][ 'quantity' ]) - 1);
				});
			}

		}
	}

	componentDidUpdate(prevProps, prevState) {
		let { prices: prevPrices, enableSizeCount: prevEnableSizeCount } = prevProps;
		let { prices: currentPrices, enableSizeCount: currentEnableSizeCount, states: { currentForm }, productApparelCode, enableSizeCount  } = this.props;


		Promise.all([
			!Object.is(prevEnableSizeCount, currentEnableSizeCount) && this.updateSoldoutSize(),
			((productApparelCode === "704" || productApparelCode === "706") && enableSizeCount !== 0 ) && this.setCustomItem()
		]).then(() => {
			!Object.is(JSON.stringify(prevPrices), JSON.stringify(currentPrices)) && this.updateItem(getDeepValue(currentForm, 'values.sizes') || []);
		});
	}

  render() {
		let { states: { currentForm }, error, enableSizeCount, params, prices, productApparelCode, children } = this.props;
		let { category } = params;
		let items = getDeepValue(currentForm, 'values.sizes') || [];
		let touched = getDeepValue(currentForm, 'fields.size.touched') || false;
		let soldOutList = getDeepValue(currentForm, `values.validation.soldOutList`);



		return  (((productApparelCode !== "704") && (productApparelCode !== "706")) ? (

			<div className="store-intro-diy-option-quantity-apparel-wrap">

					<div className="top">
						<h4>사이즈 <em>{this.getSoldOut()}</em></h4>
							<span onClick={this.onClickOpenDetail}>
							<span className="icon icon-cause-1515 cause-icon"/>
							<span>상세보기</span>
						</span>
					</div>

					<div className="middle">
					<Field name={`size`}
					className="box"
					width={258}
					stepHeight={45}
					options={this.getOptions()}
					placeholderLabel={`사이즈 선택`}
					onChange={(event, value) => {this.onAddItem(value);}}
					disabled={enableSizeCount === 0}
					component={SelectField}/>
					<Field name={`quantity`}
					className="hide"
					width={0}
					component={InputQuantityField}/>
					</div>

					<div className="bottom">
					{(items || []).length > 0 && (
						<ul className="bottom">
							{items.reduce((target, item, index) => {
								let { label, price } = item;

								target.push(
									<li>
									<span className="top">
										<h5>{label} 사이즈</h5>
									</span>

										<span className="bottom">
										<span className="left">
											<Field name={`sizes[${index}].quantity`}
											       maxLength={3}
											       component={InputQuantityField}
											       validate={[ Validate.required, Validate.number, Validate.minValue1 ]}
											       onChange={(event, value, previousValue) => {this.onUpdateItem(index, value, previousValue, `sizes[${index}].quantity`);}}
											       normalize={Normalize.upperValue()}
											/>
										</span>

										<span className="right">
											<button type="button"
											        className="icon icon-del-1515"
											        data-index={index}
											        onClick={this.onDeleteItem}/>

											{price && (
												<span>{toCash(price)}원</span>
											)}
										</span>
									</span>
									</li>
								);

								return target;
							}, [])}
						</ul>
					)}
					{touched && error && (
						<span className="error">{error}</span>
					)}

					</div>

			</div>
			)
			:
			(
				<div className="store-intro-diy-option-quantity-apparel-wrap">
					<div className="top">
						{( enableSizeCount === 0 ?
								<em>* 품절된 상품입니다.</em>
								:
								<h4>수량</h4>
						)}
					</div>


					<div className="middle">
						<Field name={`quantity`}
						       className="hide"
						       width={0}
						       component={InputQuantityField}/>
					</div>
					{(items || []).length > 0 && (
						<div className="bottom">
								{items.reduce((target, item, index) => {
								let { label, price } = item;

									target.push(
										<Field name={`sizes[${index}].quantity`}
										       maxLength={3}
										       component={InputQuantityField}
										       validate={[ Validate.required, Validate.number, Validate.minValue1 ]}
										       onChange={(event, value, previousValue) => {this.onUpdateEchoBagItem(0, (value || 1), (previousValue || 2), `sizes[${index}].quantity`);}}
										       normalize={Normalize.upperValue()}
										/>
									)
								return target;
								}, [])}
							{!soldOutList && error && (
								<span className="error">{error}</span>
							)}
						</div>
					)}
				</div>
			)
		)
	}
}
