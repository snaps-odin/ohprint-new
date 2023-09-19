

import React from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';
import { change, Field, reduxForm } from 'redux-form';

import { getDeepValue, isEmpty } from 'utils/json';
import { toCash } from 'utils/format';
import { snakeToCamel } from 'utils/string';
import { addCdn } from 'utils/url';
import * as Validate from 'utils/validate';

import {LayerTypes} from 'constants/index';
import {ActionLayer} from 'actions/index';

import { SelectField, CheckBoxField, InputField } from 'components/common/fields';
import Size from './size';

class StoreIntroPrice extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			defaults: null,
			options: null,
			prices: null,
			sizes: null,
			ready: false
		};

		this.enables = null;

		this.onChangeOption = this.onChangeOption.bind(this);
		this.onChangeSize = this.onChangeSize.bind(this);
		this.onChangeMultiOption = this.onChangeMultiOption.bind(this);
    this.onClickOffsetPrintLabel = this.onClickOffsetPrintLabel.bind(this);
	}

	onChangeOption(keyName, value, isWild) {
		let { states, actions } = this.props;
		let { currentForm } = states;
		let { handleChangeFormValue } = actions;
		let { defaults, options } = this.state;

		let currentValues = Object.assign({}, getDeepValue(currentForm, 'values.price'));
		const { frameCode, paperType } = currentValues;
		if (paperType === 'LUXE' && frameCode === '504002') { // 럭스용지 & 둥근 모서리
			currentValues = { ...currentValues, frameCode: '504001' }; // 직각 모서리
		}

		let values = (options || []).reduce((target, option) => {
			let { isParent, keyName, child: children } = option;

			if (isParent) {
				target[ keyName ] = currentValues[ keyName ];
			} else {
				let matched = (children || []).find(child => Object.is(child[ 'value' ], currentValues[ keyName ]));

				target[ keyName ] = !!(matched && (matched[ 'parentCodeList' ] || []).includes(target[ matched[ 'parentKeyName' ] ]))
					?
					currentValues[ keyName ]
					:
					(getDeepValue((children || []).find(child => (child[ 'parentCodeList' ] || []).includes(target[ child[ 'parentKeyName' ] ])), 'value') || null);
			}

			return target;
		}, (defaults || []).reduce((target, item) => {
			let { keyName, value } = item;

			target[ keyName ] = value;

			return target;
		}, {}));

		return new Promise(resolve => {
			!isWild
				?
				this.getEnables(values).then(result => {
					resolve(result)
				})
				:
				resolve({ values });
		}).then(result => {
			let { values } = result;

			return !isWild
				?
				this.getSize(values, false).then(values => {
					return Object.assign({}, result, { values });
				})
				:
				result;
		}).then(result => {
			let { values, enables } = result;

			return this.getWildEnables(values, enables, !isWild);
		}).then(result => {
			let { values, enables } = result;
			if(!!values.sideCodes) {
        values = {
			    ...values,
          sideCodes: currentForm.values.price.sideCodes
        }
      }

			!isWild && (this.enables = enables);

			!isWild && handleChangeFormValue('price', values);
		}).then(() => {
			this.requestPrice();
		});
	}

	onChangeMultiOption() {
		window.setTimeout(() => {this.requestPrice()}, 0);
	}

	onChangeSize(width, height) {
		let { states, actions } = this.props;
		let { currentForm } = states;
		let { handleChangeFormValue } = actions;
		let isDiameter = (height === "productShapeType");

		let currentValues = getDeepValue(currentForm, 'values.price');

		/*let values = Object.assign({}, currentValues, {
			millimeterWidth: width,
			millimeterHeight: height
		});*/


    if(isDiameter){
      handleChangeFormValue('price','diameter', width);
    }

    let values = (isDiameter) ? (
        Object.assign({}, currentValues, {
          diameter: width

        })
      )
      :
      (
        Object.assign({}, currentValues, {
          millimeterWidth: width,
          millimeterHeight: height
        })
      )


		new Promise(resolve => {
			this.getEnables(values).then(result => {
				resolve(result)
			});
		}).then(result => {
			let { values, enables } = result;

			return this.getWildEnables(values, enables, true);
		}).then(result => {
			let { values, enables } = result;

			this.enables = enables;

			handleChangeFormValue('price', values);
		}).then(() => {
			this.requestPrice();
		});
	}

	getFilteredPriceOption(option) {
		let { keyName, child: children } = option;

		let keyEnables = getDeepValue(this.enables, keyName);

		return children.reduce((target, child) => {
			option[ 'isParent' ]
				? target.push(child)
				: (keyEnables || []).includes(child[ 'value' ]) && target.push(child);

			return target;
		}, []);
	}

	getProductName() {
		let { actions: { handleGetStoreProduct }, params: { category, subCategory }, productName } = this.props;

		let { content: { title } } = handleGetStoreProduct(category, subCategory);

		return !category.match(/apparel/i) ? `${(snakeToCamel(category || '').match(/sticker|card/) ? title : productName)}의 ` : '';
	}

	getEnables(values) {
		let { options } = this.state;

		let editValues = Object.assign({}, values);

		return new Promise(resolve => {
			let enables = (options || []).reduce((target, option) => {
				let { keyName, child: children, isParent, isWild } = option;

				(!isParent && !isWild) && (target[ keyName ] = (children || []).reduce((target, child) => {
					let { parentKeyName, parentCodeList, value } = child;

					(parentCodeList || []).includes(editValues[ parentKeyName ]) && target.push(value);

					return target;
				}, []));

				return target;
			}, {});

			resolve({
				values: editValues,
				enables
			});
		});
	}

	getWildEnables(values, enables, isRequestEnable) {
		let { actions, params: { category, subCategory } } = this.props;
		let { handleRequestStoreOptionEnable } = actions;
		let { options } = this.state;

		let hasWild = (options || []).findIndex(option => option[ 'isWild' ]) !== -1;

		let editValues = Object.assign({}, values);

		return new Promise(resolve => {
			(hasWild && isRequestEnable)
				?
				handleRequestStoreOptionEnable(category, subCategory, values).then(result => {
					for (let keyName in result) {
						let option = (options || []).find(option => Object.is(option[ 'keyName' ], keyName));
						let noneCode = getDeepValue((getDeepValue(option, 'child') || []).find(child => child[ 'attribute' ].match(/NONE/i)), 'value');

						!editValues[ keyName ] && (
							editValues[ keyName ] = (result[ keyName ] || []).includes(noneCode)
								? noneCode
								: (getDeepValue(result[ keyName ], '0') || null)
						);
					}

					resolve({
						values: editValues,
						enables: Object.assign({}, enables, result)
					});
				})
				:
				resolve({
					values: editValues,
					enables
				});
		});
	}

	getManualSize(optionValues) {
		let { states: { currentForm }, params: { category, subCategory } } = this.props;
		let { options } = this.state;

		let values = optionValues || getDeepValue(currentForm, 'values.price');

		let parentCode = null;

		let productShapeType = getDeepValue(values, 'productShapeType');
    let enableValue = Object.is(getDeepValue(values, 'productShapeType'), parentCode);
    let isMd = (`${category}/${subCategory}`) === 'acrylic-keyring/defaults';
    let isRe = (`${category}/${subCategory}`) === 'sticker/repp80';

    let params = {
			parentKeyName: null,
			parentCode: null,
			enabled: false,
			locked: false,
			use10: false
		};

		switch (`${category}/${subCategory}`) {
			case 'sticker/free-size':
      case 'sticker/repp80':
				params = {
					parentKeyName: null,
					parentCode: null,
					enabled: true,
					locked: false,
					use10: false,
					description: '입력한 사이즈와 실제 이미지의 사이즈가 다른 경우, 이미지 등록 후 가격이 변경될 수 있습니다.'
				};

				if(currentForm && isRe && (productShapeType !== "MANUAL_SIZE")){
				  params.enabled = false;
        }

				break;

			case 'placard-banner/defaults':
				parentCode = (options || []).reduce((target, option) => {
					let { keyName, child: children } = option;

					let child = Object.is(keyName, 'sizeTemplateCode') && (children || []).find(child => !!(child[ 'attribute' ] || '').match(/MANUAL_SIZE/i));

					child && (target = child[ 'value' ]);

					return target;
				}, null);

				params = {
					parentKeyName: 'sizeTemplateCode',
					parentCode,
					enabled: true,
					locked: !Object.is(getDeepValue(values, 'sizeTemplateCode'), parentCode),
					use10: true,
					description: '짧은 변이 1500mm를 초과하는 경우, 현수막 2장을 연결하여 제작됩니다.'
				};
				break;

			case 'sticker/standard':
			case 'sticker/soft2':
			case 'sticker/matt':
			case 'sticker/craft':
			case 'sticker/hologram':
			case 'sticker/transparency':
      case 'acrylic-keyring/defaults':

				parentCode = (options || []).reduce((target, option) => {
					let { keyName, child: children } = option;

					let child = Object.is(keyName, 'productShapeType') && (children || []).find(child => !!(child[ 'attribute' ] || '').match(/MANUAL_SIZE/i));

					child && (target = child[ 'value' ]);

					return target;
				}, null);


        if(isMd){
          switch(productShapeType){
            case 'SQUARE_MANUAL_SIZE':
            case 'ROUND_MANUAL_SIZE':
              parentCode = productShapeType;
              break;

          }
        }

				params = {
					parentKeyName: 'productShapeType',
					parentCode,
					enabled: isMd ? true : Object.is(getDeepValue(values, 'productShapeType'), parentCode),
					locked: !Object.is(getDeepValue(values, 'productShapeType'), parentCode),
					use10: false,
					description: '입력한 사이즈와 실제 이미지의 사이즈가 다른 경우, 이미지 등록 후 가격이 변경될 수 있습니다.'
				};


				break;
		}

		return params;
	}

	getSize(values, isReset) {
		let { states, actions, params: { category, subCategory } } = this.props;
		let { currentForm } = states;
		let { handleRequestStoreOptionSize } = actions;

		let { enabled: isSize } = this.getManualSize(isReset ? values : null);


		let currentValues = getDeepValue(currentForm, 'values.price') || {};
		let currentWidth = getDeepValue(currentValues, 'millimeterWidth');
		let currentHeight = getDeepValue(currentValues, 'millimeterHeight');

		return new Promise(resolve => {
			isSize
				?
				handleRequestStoreOptionSize(category, subCategory, values).then(size => {
					resolve(size);
				}).catch(error => {
					resolve();
				})
				:
				resolve();
		}).then(size => {
			this.setState(update(this.state, {
				sizes: { $set: size }
			}));

			return size;
		}).then(size => {
			let { defaultYN, pageDefaultWidth, pageDefaultHeight } = size || {};

			let isChange = (defaultYN || '').match(/Y/i);

			return size
				?
				Object.assign({}, values, {
					millimeterWidth: (isChange || isReset)
						? pageDefaultWidth
						: currentWidth || pageDefaultWidth,
					millimeterHeight: (isChange || isReset)
						? pageDefaultHeight
						: currentHeight || pageDefaultHeight
				})
				:
				values;
		});
	}

	requestPrice() {
		let { states, actions, params: { category, subCategory } } = this.props;
		let { options } = this.state;
		let { currentForm } = states;
		let { handleRequestStoreEssential, handleRequestStorePriceByCategory } = actions;

		let params = Object.assign({}, getDeepValue(currentForm, `values.price`) || {});

		if(params.diameter){
      params = Object.assign({}, params, {
        millimeterWidth: params.diameter,
        millimeterHeight: params.diameter
      });
    }

		Object.keys(params).reduce((target, key) => {
			let children = ((options || []).find(option => option[ 'keyName' ] === key) || {})[ 'child' ] || null;

			Array.isArray(params[ key ]) && (
				params[ key ] = children?.reduce((target, child, index) => {
					params[ key ][ index ] && (target.push(child[ 'value' ]));

					return target;
				}, [])
			);
		}, []);

		handleRequestStoreEssential(category, subCategory, params).then(essentials => {
			params = (essentials || []).reduce((target, item) => {
				let { keyName, value } = item;

				target[ keyName ] = value;

				return target;
			}, params);


			return handleRequestStorePriceByCategory(category, subCategory, params);
		}).then(prices => {
			this.setState(update(this.state, {
				prices: { $set: prices }
			}));
		});
	}

	getQuantity(price) {
		let { params: { category } } = this.props;
		let { prices : { isPackage } } = this.state;

		let quantity = `${price[ 'quantity' ]}${price[ 'unitName' ] ? price[ 'unitName' ] : ''}`;
//패키지가 false 면 endQuan까지 ex) q개 ~ eq개

    if(!isPackage){
      quantity = `${price[ 'quantity' ]} ~ ${price[ 'endQuantity' ]}${price[ 'unitName' ] ? price[ 'unitName' ] : ''}`;
    }

		return quantity;
	}

  onClickOffsetPrintLabel(){
    let { actions: { handleOpenContentsLayer } } = this.props;
    handleOpenContentsLayer(LayerTypes.OFFSET_PRINT_GUIDE);
  }

	initialize() {
		let { sections, params: { category, subCategory }, actions: { handleRequestStoreDefault, handleRequestStorePriceOption, handleChangeFormValue } } = this.props;

		Promise.all([
			handleRequestStoreDefault(category, subCategory),
			handleRequestStorePriceOption(category, subCategory)
		]).then(results => {
			let defaults = results[ 0 ];
			let options = (results[ 1 ] || []).reduce((target, option, index) => {
				let { child: children } = option;

				let isParent = !getDeepValue(children, '0.parentKeyName');
				let isWild = getDeepValue(children, '0.parentKeyName') === '*';

				target.push(Object.assign({}, option, { isParent, isWild }));

				return target;
			}, []);

			return new Promise(resolve => {
				this.setState(update(this.state, {
					defaults: { $set: defaults },
					options: { $set: options },
					sizes: { $set: null },
					ready: { $set: true }
				}), () => resolve({ defaults, options }));

			});
		}).then(result => {
			let { defaults, options } = result;

			let values = (options || []).reduce((target, option) => {
				let { isParent, keyName, child: children, isMultiSelectable } = option;

				target[ keyName ] = !isMultiSelectable
					?
					(
						isParent
							?
							getDeepValue(children, '0.value')
							:
							getDeepValue((children || []).find(child => {
								let { parentKeyName, parentCodeList } = child;

								return (parentCodeList || []).includes(target[ parentKeyName ])
							}), 'value') || null
					)
					:
					[ true ];

				return target;
			}, (defaults || []).reduce((target, item) => {
				let { keyName, value } = item;

				target[ keyName ] = value;

				return target;
			}, {}));

			return this.getEnables(values);
		}).then(result => {
			let { enables, values } = result;

			return this.getSize(values, true).then(values => {
				return Object.assign({}, result, { values, enables });
			});

		}).then(result => {
			let { values, enables } = result;

			return this.getWildEnables(values, enables, true);
		}).then(result => {
			let { values, enables } = result;

			this.enables = enables;

			handleChangeFormValue('price', values);
		}).then(() => {
		  let isCalendarDesk = category.match(/calendar-desk/i);

		  if(isCalendarDesk){
		    handleChangeFormValue('price.backCode', '503000');
      }

			this.requestPrice();
		});
	}

	shouldComponentUpdate(nextProps, nextState) {
		let { states: { currentForm }, params: currentParams } = this.props;
		let { states: { currentForm: nextForm }, params: nextParams } = nextProps;

		return !(
			Object.is(JSON.stringify(getDeepValue(currentForm, 'values')), JSON.stringify(getDeepValue(nextForm, 'values'))) &&
			Object.is(JSON.stringify(currentParams), JSON.stringify(nextParams)) &&
			Object.is(JSON.stringify(this.state), JSON.stringify(nextState))
		);
	}

	componentDidUpdate(prevProps) {
		let { params: prevParams } = prevProps;
		let { params: currentParams } = this.props;

		!Object.is(JSON.stringify(currentParams), JSON.stringify(prevParams)) && this.initialize();
	}

	componentDidMount() {
		this.initialize();
	}

	render() {
		let { params: { category }, states, handleSubmit } = this.props;
		let { currentForm } = states;
		let { options, prices, sizes, ready } = this.state;
		let { priceList } = prices || {};

		let values = getDeepValue(currentForm, `values.price`) || {};

		let manualSize = ready && this.getManualSize();
		return ready &&
			(
				<section
					className="store-intro-price-wrap"
				 	ref={(c) => {this.el = c;}}
				>
					<div className="inner">
						<h3>
							가격은 보자마자 반할지도 몰라요.

							{(
								manualSize[ 'enabled' ]
								&& (getDeepValue(sizes, 'defaultYN') || '').match(/N/i)
							) && (
								<p>
									사이즈는&nbsp;
									<em>
										{`${sizes[ 'pageMinWidth' ]} x ${sizes[ 'pageMinHeight' ]}mm부터 ${toCash(sizes[ 'pageMaxWidth' ])} x ${toCash(sizes[ 'pageMaxHeight' ])}mm까지`}
									</em> 자유롭게 정할 수 있으며 면적에 따라 가격이 결정됩니다.<br/>
									{manualSize[ 'description' ]}
								</p>
							)}
						</h3>

						<div>
							<form onSubmit={handleSubmit}>
								<div className="top">
									<span className="left">
										{this.getProductName()}가격을 확인해 보세요.
									</span>

									<span className="right">
										{(
											manualSize[ 'enabled' ]
											&& !manualSize[ 'parentKeyName' ]
										) && (
											React.cloneElement(<Size/>, {
												states,
												actions: {
													handleChange: this.onChangeSize
												},
												locked: manualSize[ 'locked' ],
												sizes,
												use10: manualSize[ 'use10' ]
											})
										)}

										{(options || []).reduce((target, option) => {
											let { title, keyName, isWild, isMultiSelectable } = option;

											let filteredOption = this.getFilteredPriceOption(option);
											const isContainRoundedCorner = filteredOption.some(
												item => item.value === "504002" // 둥근 모서리
											);
											const isLuxePaper =
												(currentForm &&
													currentForm.values &&
													currentForm.values.price.paperType === "LUXE") || // 럭스 용지
												false;

											(filteredOption || []).length > 0 && target.push(
												!isMultiSelectable
													?
													!(isLuxePaper && isContainRoundedCorner) && (
														<Field
															key={keyName}
															name={`price.${keyName}`}
															className="box"
															label={title}
															width={keyName === "paperType" ? 160 : null}
															placeholder="선택"
															options={filteredOption}
															validate={[Validate.required]}
															onChange={(event, value) =>
																window.setTimeout(() => this.onChangeOption(keyName, value, isWild), 0)
															}
															component={SelectField}
														/>
													)
													:
													(
														<div className="multi">
															<label>{title}</label>
															<div>
																<ul>
																	{filteredOption.reduce((target, item, index) => {
																		let { label } = item;

																		target.push(
																			<li>
																				<Field name={`price.${keyName}[${index}]`}
																				       className={`multi`}
																				       label={label}
																				       onChange={this.onChangeMultiOption}
																				       component={CheckBoxField}/>
																			</li>
																		);
																		return target;
																	}, [])}
																</ul>
															</div>
														</div>
													)
											);

											(
												manualSize[ 'enabled' ]
												&& Object.is(keyName, manualSize[ 'parentKeyName' ])
											) && target.push(
												React.cloneElement(<Size/>, {
													states,
													actions: {
														handleChange: this.onChangeSize
													},
													locked: manualSize[ 'locked' ],
													sizes,
													use10: manualSize[ 'use10' ]
												})
											);

											return target;
										}, [])}
									</span>
								</div>

								<div className="middle">
									<table frameBorder={0}>
										<caption>
											<span className="blind"/>
										</caption>
										<colgroup>
											<col style={{ width: '50%' }}/>
											<col style={{ width: '50%' }}/>
										</colgroup>
										<thead>
										<tr>
											<th>수량</th>
											<th>가격{`${ category.match(/apparel/i) ? `(개당)` : ''}`}</th>
										</tr>
										</thead>
										<tbody>
										{(priceList || []).reduce((target, price) => {
											target.push(
												<tr>
													<td>
														{this.getQuantity(price)}
													</td>

													<td>
														<span className={`${price[ 'price' ] > price[ 'sellPrice' ] ? `sale` : ``}`}>
															{toCash(price[ 'price' ])}원
														</span>

														{price[ 'price' ] > price[ 'sellPrice' ] && (
															<span>{toCash(price[ 'sellPrice' ])}원</span>
														)}

                            {price['offsetPrint'] === 'Y' && (
                              <img className='offset-tag' src={addCdn('/images/store/intro/common/offset-tag@2x.png')} />
                            )}

													</td>
												</tr>
											);
											return target;
										}, [])}
										</tbody>
									</table>
								</div>

								{(values[ 'paperType' ] || '').match(/PREMIUM_EFFECT|PROMOTION_PREMIUM/) && (
									<div className="bottom">
										<span>* 투명 글로시, 골드, 실버 옵션 모두 가격은 동일합니다.</span>
									</div>
								)}

                {!!priceList && priceList.find(i => i.offsetPrint === "Y") &&
                  <div className="offset-print-desc">
                    <p>대량주문 시 옵셋 인쇄로 더 저렴하게 구입하실 수 있어요.</p>
                    <span className="open" onClick={this.onClickOffsetPrintLabel}>옵셋 인쇄 안내</span>
                    <span className="icon icon-arrow-68"/>
                  </div>
                }
							</form>
						</div>
					</div>
				</section>
			)
	}
}

const formName = 'store-intro-price';

const mapStateToProps = (state) => {
	return {
		states: {
			store: state.store,
			currentForm: state.form[ formName ]
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),
      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(StoreIntroPrice);
