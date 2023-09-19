

import React from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';
import { change, Field, reduxForm } from 'redux-form';

import { ActionEditor, ActionLayer, ActionStore, ActionProduct, ActionCS, ActionUI, ActionLog, ActionCommon } from 'actions/index';
import { LayerTypes, CSTypes } from 'constants/index';

import { getDeepValue } from 'utils/json';
import { getDatasetByName, getPosition } from 'utils/dom';
import { isBottom } from 'utils/scroll';
import { addDomain, addCdn, goStore, goEditor, goMemberCart, replaceLink } from 'utils/url';

import { RadioField } from 'components/common/fields/index';

import LoadingAnimation from 'components/common/loading-animation';

import { dataLayerEditorTransactionTemplateSelect, dataLayerSelectTemplateDetail, dataLayerFavoriteCtaAdd, dataLayerSelectTemplateCTA } from 'configs/google-analytics/ga';

import Filter from './filter';
import Option from './option';
import List from './list';
import {getMarketingData, setMarketingData} from "../../../utils/storage";

class StoreSearch extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			ready: false,
			loading: true,
			fixed: false,
			filter: {
				opened: false,
				navigation: [],
				items: []
			},
			option: {
				focus: 0,
				items: []
			},
			template: {
				items: [],
				offset: 0,
				limit: 15,
				totalCount: 0
			},
			product: null,
      totalOption: null
		};

		this.onChangeSortType = this.onChangeSortType.bind(this);
		this.onChangeViewMode = this.onChangeViewMode.bind(this);

		this.onToggleFilter = this.onToggleFilter.bind(this);
		this.onResetFilter = this.onResetFilter.bind(this);

		this.onChangeOption = this.onChangeOption.bind(this);

		this.onClickGoIntro = this.onClickGoIntro.bind(this);
		this.onClickGoEditor = this.onClickGoEditor.bind(this);
		this.onClickSaveToCart = this.onClickSaveToCart.bind(this);
		this.onClickShowGuide = this.onClickShowGuide.bind(this);
		this.onClickLike = this.onClickLike.bind(this);

		this.onScroll = this.onScroll.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.onGaDataSetting = this.onGaDataSetting.bind(this);
	}

	onChangeSortType(event, value) {
		window.setTimeout(() => {this.changeQuery(false);}, 0);
	}

	onChangeViewMode(event, value) {
		let { states: { currentForm }, actions: { handleChangeFormValue, handleExecuteAfterUserLogin } } = this.props;

		switch (value) {
			case 'THUMBNAIL':
			case 'PREVIEW':
				window.setTimeout(() => {this.changeQuery(false);}, 0);
				break;

			case 'LIKE':
				let prevViewMode = getDeepValue(currentForm, `values.search.viewMode`);

				handleExecuteAfterUserLogin().then(() => {
					window.setTimeout(() => {this.changeQuery(false);}, 0);
				}).catch(error => {
					handleChangeFormValue(`search.viewMode`, prevViewMode);
				});

				break;
		}
	}

	onResetFilter(event, value) {
		window.setTimeout(() => {this.changeQuery(true);}, 0);
	}

	onToggleFilter(bool) {
		let { filter: { opened } } = this.state;

		this.setState(update(this.state, { filter: { opened: { $set: !opened } } }));
	}

	onChangeOption(index) {
		Promise.all([
			this.setState(update(this.state, { option: { focus: { $set: index } } }))
		]).then(() => {
			window.setTimeout(() => {this.changeQuery(false);}, 0);
		})
	}

	onClickGoEditor(templateCode, templateUseType, option) {
		let { states, actions, location: { query }, params : { category,subCategory }  } = this.props;
		let { config: { url: { cdn: cdnUrl } } } = states;
		let { handleUpdateEditor, handleChangeLogProduct, handleExecuteAfterUserLogin, handleRequestStoreAccessoryOptionName, handleGetProductByCategory, handleRequestStoreProductName } = actions;
		let { productCode, millimeterWidth, millimeterHeight, paperCode, frameCode, frameOptionCode, backCode, colorCode, luxeColorCode, quantity, accessory, frameCodeList, sizeQuantitys, offsetPrint, calendarStartDate: queryCalendarStartDate, pressureCode, sideCodes } = query;
    let isApparel = (category || '').match(/apparel/i);
    let isBusiness = (category || '').match(/business-card/i);
		let { template, selectedTemplateCodes, printBackCode, calendarStartDate, type } = option || {};

		let params = {
			templateCode,
			productCode,
			millimeterWidth,
			millimeterHeight,
			paperCode,
			frameCode,
			frameOptionCode,
			frameCodes: (frameCodeList ? (Array.isArray(frameCodeList) ? frameCodeList : [ frameCodeList ]) : []).join(','),
			backCode : (printBackCode ? printBackCode : backCode),
			colorCode: colorCode || luxeColorCode || null,
			quantity,
			accessory,
			sizeQuantitys,
			selectedTemplateCodes: selectedTemplateCodes || null,
			offsetPrint : offsetPrint || "N",
      calendarStartDate: (calendarStartDate || queryCalendarStartDate) || "000000",
      pressureCode,
      sideCodes: (sideCodes ? (Array.isArray(sideCodes) ? sideCodes : [ sideCodes ]) : []).join(','),
		};

		let gaData = this.onGaDataSetting(option.template.templateName || "");



    setMarketingData({
      category,
      subCategory,
      quantity
    })

		handleExecuteAfterUserLogin().then(() => {
			Promise.all([
				handleUpdateEditor(params, templateUseType),
        handleRequestStoreProductName(productCode)
			]).then((result) => {
        (result && result.length > 0 && result[1].productName && !isBusiness) && (gaData.options.unshift(result[1].productName));
        (gaData.isGa && type && type === 'pop') && dataLayerSelectTemplateCTA(gaData.options, gaData.convertJspn, gaData.templateName, gaData.category, handleRequestStoreAccessoryOptionName, gaData.quan);
        //(gaData.isGa && (!type || (type && type !== 'pop')) ) && dataLayerEditorTransactionTemplateSelect(gaData.options, gaData.convertJspn, gaData.templateName, gaData.category, handleRequestStoreAccessoryOptionName, gaData.quan);
        //gaData.isGa && dataLayerSelectTemplateDetail(gaData.options, gaData.convertJspn, gaData.templateName, gaData.category, handleRequestStoreAccessoryOptionName, gaData.quan);
        (gaData.isGa && (!type || (type && type !== 'pop')) ) && dataLayerSelectTemplateDetail(gaData.options, gaData.convertJspn, gaData.templateName, gaData.category, handleRequestStoreAccessoryOptionName, gaData.quan);
        goEditor();
			}).then(() => {
				template && handleChangeLogProduct('EDIT_ITEM', Object.assign({}, option[ 'template' ], {
					templateImageUrl: addDomain(cdnUrl, option[ 'template' ][ 'thumbnailUrl' ])
				}), 0);
			});
		}).catch(error => {});
	}

	onGaDataSetting(templateName){
    //GA 데이터 세팅
    let isGa = true;
    let options = [];
    let category = "";
    let convertJspn = "";
    let isApparel = (this.props.params.category || '').match(/apparel/i);
    let quan = !isApparel ? this.props.location.query.quantity : null;

    try{
      options = this.state.filter.navigation || [];

      //(!isApparel && options.length > 0) && options.push(this.props.location.query.quantity);
      category = this.props.params.category && this.props.actions.handleGetProductByCategory(this.props.params.category || "").label;
      convertJspn = (this.props.location.query.accessory) && JSON.parse(this.props.location.query.accessory || "");

    }catch (err) {
      console.error("GA Data Setting Error " , err);
      isGa = false;
    }

    return {
      isGa,
      options,
      templateName,
      category,
      convertJspn,
      quan
    }
  }

	onClickSaveToCart(templateCode, productCode, quantity) {
		let { actions: { handleCreateStoreCart, handleOpenAlertLayer, handleCloseContentsLayer, handleExecuteAfterUserLogin } } = this.props;

		handleExecuteAfterUserLogin().then(() => {
			handleCreateStoreCart({
				productCode,
				templateCode,
				quantity
			}).then(() => {
				handleOpenAlertLayer({
					description: '장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?',
					confirm: true,
					callback: (confirmed) => {
						confirmed && Promise.all([
							goMemberCart()
						]).then(() => {
							handleCloseContentsLayer();
						});
					}
				});
			}).catch((error) => {
				handleOpenAlertLayer({
					description: error
				});
			});
		}).catch(error => {});
	}

	onClickLike(index) {
		let { actions } = this.props;
		let { handleExecuteAfterUserLogin } = actions;
		let { template: { items } } = this.state;

		let item = items[ index ];
		let { templateCode, productCode, liked } = item;

		return new Promise(resolve => {
			handleExecuteAfterUserLogin().then(() => {
				actions[ `handle${liked ? 'Delete' : 'Create'}StoreLike` ](templateCode, productCode).then(() => {
					item[ 'liked' ] = !liked;

					this.setState(update(this.state, {
						template: {
							items: { [index]: { $set: item } }
						}
					}));

          let gaData = this.onGaDataSetting(item.templateName || "");
          dataLayerFavoriteCtaAdd(gaData.options, gaData.convertJspn, gaData.templateName, gaData.category, item[ 'liked' ]);

				});

				resolve();
			}).catch(error => {
				resolve();
			});
		});
	}

	onClickShowGuide(event) {
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

	onClickGoIntro(event) {
		let { params: { category, subCategory } } = this.props;

		goStore('intro', category, subCategory);
	}

	onScroll(event) {
		let { location: { query: { selectedTemplateCode } } } = this.props;
		let { loading, fixed: currentFixed, template: { items, totalCount } } = this.state;

		let fixed = (this.top && this.middle)
			?
			(!currentFixed
					? getPosition(this.top).top <= 0
					: getPosition(this.middle).top <= 0
			)
			:
			false;

		(
			isBottom(event)
			&& !loading
			&& !selectedTemplateCode
			&& (items || []).length < totalCount
		) && this.requestList(false);

		currentFixed !== fixed && this.setState(update(this.state, {
			fixed: { $set: fixed }
		}));
	}

	onSubmit(values) {
		let { params: { category, subCategory }, location: { query }, actions: { handleUpdateUIScroll } } = this.props;
		let { filter: { items } } = this.state;

		let { search: { editFilterYN } } = values;

		let filterCodes = [ 'jobCodes', 'themeCodes', 'colorCodes', 'shapeCodes', 'usageCodes', 'industryCodes' ].reduce((target, keyName) => {
			let item = items.find(item => Object.is(item[ 'keyName' ], keyName));

			item && (target[ keyName ] = (item[ 'child' ] || []).reduce((target, child, index) => {
				let { value } = child;

				editFilterYN[ keyName ][ index ] && target.push(value);

				return target;
			}, []).join('|'));

			return target;
		}, {});

		Promise.all([
			handleUpdateUIScroll(0)
		]).then(() => {
			goStore('search', category, subCategory, Object.assign({}, query, filterCodes));
		});
	}

	validateQuantity(params) {
		let { actions, location: { query }, params: { category } } = this.props;
    let isMd = category ? category.match(/pin-button|mirror-button|magnet-button|smart-tok/i) : null;
		let { handleRequestStorePrice } = actions;
		let { quantity } = query;

		return handleRequestStorePrice(params).then(result => {
			let { isPackage, priceList } = result;

			let isValid = isPackage
				? priceList.findIndex(item => Object.is(String(item[ 'quantity' ]), quantity)) >= 0
				: quantity < (category.match(/apparel/i) ? 1001 : (isMd ? 10000 : 1000));

			if (isValid) {
				return undefined;
			} else {
				throw '수량이 유효하지 않습니다.';
			}
		});
	}

	requestList(isReset, isFirst) {
		let { actions: { handleRequestStore }, params: { category }, location: { query } } = this.props;
		let { option: { items: optionItems, focus }, template: { items: templateItems, limit }, filter: { opened: currentOpened } } = this.state;
		let { productCode, selectedTemplateCode, sortType, viewMode, jobCodes, themeCodes, colorCodes, usageCodes, industryCodes, shapeCodes, accessoryType } = query;

		let isAccessory = String(category).match(/accessory/i);

		let categoryCodes = [ 'jobCodes', 'themeCodes', 'colorCodes', 'shapeCodes', 'usageCodes', 'industryCodes' ].reduce((target, key) => {
			query[ key ] && (target = target.concat(query[ key ].split('|')));
			return target;
		}, []);

		let params = Object.assign({}, query, {
			productCode: !isAccessory ? productCode : null,
			offset: (!!selectedTemplateCode || isReset) ? 0 : templateItems.length,
			limit: selectedTemplateCode ? 1 : limit,
			sortType: sortType || 'NEW',
			liked: !!(!isAccessory && (viewMode || '').match(/LIKE/i)),
			categoryCodes,
			accessoryType: accessoryType ? accessoryType : (isAccessory ? '' : null)
		});

		return Promise.all([
			this.setState(update(this.state, { loading: { $set: true } }))
		]).then(() => {
			return handleRequestStore(params);
		}).then(result => {
			this.setState(update(this.state, {
				loading: { $set: false },
				ready: { $set: true },
				filter: {
					opened: {
						$set: isFirst
							? (jobCodes || themeCodes || colorCodes || shapeCodes || usageCodes || industryCodes ) || (Number(result[ 'totalCount' ]) >= 100)
							: currentOpened
					}
				},
				template: {
					items: { [`$${isReset ? 'set' : 'push'}`]: result[ 'templateList' ] },
					limit: { $set: selectedTemplateCode ? 1 : limit },
					totalCount: { $set: result[ 'totalCount' ] }
				}
			}));
		});
	}

	initialize() {
		let { actions, params: { category, subCategory }, location: { query } } = this.props;
		let { handleRequestStoreFilter, handleRequestStoreNavigation, handleRequestStoreAccessoryOption, handleGetStoreProduct, handleOpenAlertLayer, handleRequestStoreAccessory, handleRequestStoreOptions } = actions;
		let { productCode, paperCode, colorCode, luxeColorCode, frameCode, frameOptionCode, backCode, quantity, paperShapeType, glossyType, frameCodeList, calendarStartDate, effectBackCode, pressureCode, sideCodes } = query;

		let isAccessory = (category || '').match(/accessory/i);
		let isApparel = (category || '').match(/apparel/i);
		let isCalendarDesk = (category || '').match(/calendar-desk/i);

		let params = {
			productCode,
			paperCode,
			backCode,
			colorCode,
			luxeColorCode,
			frameCode,
			frameOptionCode,
			paperShapeType,
			glossyType,
			frameCodeList: frameCodeList || null,
      calendarStartDate,
      effectBackCode,
      pressureCode,
      sideCodes: sideCodes || null
		};

		return Promise.all([
			!isAccessory && handleRequestStoreFilter(params),
			!isAccessory && handleRequestStoreNavigation(category, params),
      isAccessory && handleRequestStoreAccessoryOption(category, subCategory),
			handleGetStoreProduct(category, subCategory),
      handleRequestStoreAccessory(params),
      isCalendarDesk && handleRequestStoreOptions(category, subCategory, null)
		]).then(results => {
			return (!isAccessory && quantity)
				?
				this.validateQuantity(
					{ productCode: productCode || results[ 2 ][ 'child' ][ 0 ][ 'value' ] }
				).then(() => {
					return results
				}).catch(error => {
					throw error;
				})
				:
				results;
		}).then(results => {
			this.setState(update(this.state, {
				loading: { $set: false },
				ready: { $set: true },
				filter: {
					opened: { $set: false },
					items: { $set: results[ 0 ] || [] },
					navigation: { $set: results[ 1 ] || null }
				},
				option: {
					focus: { $set: 0 },
					items: { $set: results[ 2 ] ? results[ 2 ][ 'child' ] : null }
				},
				product: { $set: results[ 3 ] },
        totalOption: { $set: isCalendarDesk ? results[ 5 ] : null }
			}));
			return results;
		}).catch(error => {
			handleOpenAlertLayer({
				description: error,
				callback: () => {
					!isAccessory
						? goStore('intro', category, subCategory)
						: goStore('overview', category);
				}
			});

			throw error;
		});
	}

	changeQuery(isReset) {
		let { states: { currentForm }, params: { category, subCategory }, location: { query }, actions: { handleUpdateUIScroll } } = this.props;
		let { option: { focus, items } } = this.state;

		let isAccessory = (category || '').match(/accessory/i);
		let params;
		let values = getDeepValue(currentForm, 'values.search') || {};

		if (!isAccessory) {
			params = Object.assign({}, query, values);

			[ 'filterYN', 'editFilterYN' ].concat(isReset
				? [ 'jobCodes', 'themeCodes', 'colorCodes', 'shapeCodes', 'usageCodes', 'industryCodes' ]
				: []
			).map(keyName => {
				delete params[ keyName ];
			});
		} else {
			let accessoryType = items[ focus ][ 'value' ];

			params = Object.assign({}, query, values, { accessoryType });
		}

		Promise.all([
			handleUpdateUIScroll(0)
		]).then(() => {
			goStore('search', category, subCategory, params);
		});
	}

	updateByQuery() {
		let { states, actions, params: { category }, location: { query } } = this.props;
		let { currentForm } = states;
		let { handleChangeFormValue } = actions;
		let { sortType, viewMode, accessoryType } = query;
		let { filter, option } = this.state;

		let isAccessory = (category || '').match(/accessory/i);

		if (!isAccessory) {
			let values = getDeepValue(currentForm, `search`);
			let filterYN = [ 'jobCodes', 'themeCodes', 'colorCodes', 'shapeCodes', 'usageCodes', 'industryCodes' ].reduce((target, keyName) => {
				let item = filter[ 'items' ].find(item => Object.is(item[ 'keyName' ], keyName));

				item && (target[ keyName ] = (item[ 'child' ] || []).reduce((target, child) => {
					let { value } = child;

					target.push(!!(query[ keyName ] || '').match(value));

					return target;
				}, []));

				return target;
			}, {});

			return new Promise(resolve => {
				handleChangeFormValue('search', Object.assign({}, values, {
					sortType: sortType || 'NEW',
					viewMode: viewMode || 'THUMBNAIL',
					filterYN: filterYN,
					editFilterYN: filterYN
				}));

				resolve();
			});
		} else {
			return new Promise((resolve, reject) => {
				let focusIndex = Math.max(0, (option[ 'items' ] || []).findIndex(child => Object.is(child[ 'value' ], accessoryType)));

				Promise.all([
					handleChangeFormValue('search', Object.assign({}, {
						sortType: sortType || 'NEW'
					}))
				]).then(() => {
					this.setState(update(this.state, {
						option: {
							focus: { $set: focusIndex }
						}
					}));

					resolve();
				});
			});
		}
	}

	componentDidUpdate(prevProps, prevState) {
		let { location: { pathname: prevPathName, query: prevQuery } } = prevProps;
		let { location: { pathname: currentPathName, query: currentQuery } } = this.props;

		!Object.is(prevPathName, currentPathName)
			?
			this.initialize().then(() => {
				return this.updateByQuery()
			}).then(() => {
				this.requestList(true);
			})
			:
			!Object.is(JSON.stringify(prevQuery), JSON.stringify(currentQuery)) && this.updateByQuery().then(() => {
				this.requestList(true);
			});
	}

	componentDidMount() {
		let { params: { category }, location: { query: { quantity }, pathname } } = this.props;

		let isAccessory = (category || '').match(/accessory/i);

		!(isAccessory && quantity)
			?
			this.initialize().then(() => {
				return this.updateByQuery();
			}).then(() => {
				this.requestList(true, true);
			}).then(() => {
				window.addEventListener('scroll', this.onScroll);
			})
			:
			replaceLink(pathname);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	render() {
		let { states, actions, params: { category, subCategory }, location: { query }, handleSubmit } = this.props;
		let { selectedTemplateCode, viewMode, productShapeType } = query;
		let { ready, loading, fixed, filter, option, template, product, totalOption } = this.state;
		let { opened, navigation } = filter;
		let { items, totalCount } = template;

		let isAccessory = (category || '').match(/accessory/i);
		let isPreview = (viewMode || '').match(/PREVIEW/i);

		let userMadeItem = (items || []).length > 0 && items.find(item => item[ 'templateUseType' ].match(/USER_MADE/));
		let selfMadeItem = (items || []).length > 0 && items.find(item => item[ 'templateUseType' ].match(/SELF_MADE/));
		let isUserMake = !(category.match(/sticker/i) && (productShapeType || '').match(/STICKER_2ND_DIY/i));

		return ready && (
				<div className="store-search-wrap">
					<div className="container">
						<form className={`${(opened && !isAccessory) ? 'active' : ''}`}
						      onSubmit={handleSubmit(this.onSubmit)}>

							<div className={`top ${fixed ? 'fixed' : ''}`}
							     ref={c => {this.top = c;}}>

								{
									!isAccessory
										?
										(React.cloneElement(<Filter/>, {
											states,
											actions: {
												handleGoIntro: this.onClickGoIntro,
												handleToggle: this.onToggleFilter,
												handleReset: this.onResetFilter
											},
											query,
											filter,
											product,
                      category,
                      totalOption
										}))
										:
										(React.cloneElement(<Option/>, {
											actions: {
												handleChange: this.onChangeOption
											},
											query,
											option,
											product
										}))
								}
							</div>

							{!selectedTemplateCode && (
								<div className={`middle ${fixed ? 'fixed' : ''} ${isAccessory ? 'no-filter' : ''}`}
								     ref={c => {this.middle = c;}}>

									{!(viewMode || '').match(/LIKE/i)
										?
										(
											<div className="left">
												<span className="design-num">{isAccessory ? '상품 ' : '디자인 '}
													<em>{totalCount}</em>개
												</span>

												{[
													{ label: '최신순', value: 'NEW' },
													{ label: '인기순', value: 'HOT' }
												].reduce((target, item, index) => {
													let { label, value } = item;

													index > 0 && target.push(
														<span className="line"/>
													);

													target.push(
														<Field name={`search.sortType`}
														       label={label}
														       className="text"
														       keyValue={value}
														       onChange={this.onChangeSortType}
														       component={RadioField}/>
													);

													return target;
												}, [])}
											</div>
										)
										:
										(
											<div className="left">
												<span className="design-num">찜 한 디자인 <em>{totalCount}</em>개</span>
											</div>
										)
									}

									{!isAccessory && (
										<div className="right">
											<ul>
												{[ 'THUMBNAIL', 'PREVIEW', 'LIKE' ].reduce((target, mode) => {
													let modeName = String(mode).toLowerCase();

													target.push(
														<li>
															<div className={`radio-icon mode-${modeName}`}>
																<Field id={`mode-${modeName}`}
																       type="radio"
																       name={`search.viewMode`}
																       value={mode}
																       onChange={this.onChangeViewMode}
																       component="input"/>

																<label htmlFor={`mode-${modeName}`}>
																	<span className={`mode-${modeName}`}/>
																</label>
															</div>
														</li>
													);

													return target;
												}, [])}
											</ul>
										</div>
									)}
								</div>
							)}
						</form>

						<div className={`${(selectedTemplateCode || isPreview) ? 'preview' : ''}`}>
							{(isPreview && !!(userMadeItem || selfMadeItem)) && (
								<div className="preview-diy">
									<ul>
										<li>
											<div className="top box">
													<span>
														<img src={addCdn("/images/store/search/make-upload-555270@2x.png")}/>
													</span>
											</div>

											<div className="bottom box">
												<span>완벽하게 만들어 놓은 디자인을 PDF파일로 올려보세요.</span>

												<span className="icon icon-cause-1515 cause-icon"
												      onClick={this.onClickShowGuide}/>

												<button className="btn-blue-medium"
												        data-template-code={userMadeItem[ 'templateCode' ]}
												        onClick={(event) => {
													        this.onClickGoEditor(userMadeItem[ 'templateCode' ], 'USER_MADE', {
														        template: userMadeItem
													        });
												        }}>
													내 디자인 업로드
												</button>
											</div>
										</li>

										<li>
											<div className="top box">
												<span>
													<img src={addCdn("/images/store/search/make-diy-555270@2x.png")}/>
												</span>
											</div>

											<div className="bottom box">
												{isUserMake
													? (
														<span>만들고 싶은 디자인을 빈 화면에 직접 디자인 해보세요.</span>
													) : (
														<span>내가 원하는 대로 DIY 스티커를 만들어 보세요.</span>
													)}


												<button className="btn-blue-medium diy"
												        data-template-code={selfMadeItem[ 'templateCode' ]}
												        onClick={(event) => {
													        this.onClickGoEditor(selfMadeItem[ 'templateCode' ], 'SELF_MADE', {
														        template: selfMadeItem
													        });
												        }}>
													직접 디자인 하기
												</button>
											</div>
										</li>
									</ul>
								</div>
							)}

							{(React.cloneElement(<List/>, {
								states,
								actions: {
									...actions,
									handleShowGuide: this.onClickShowGuide,
									handleGoEditor: this.onClickGoEditor,
									handleSaveToCart: this.onClickSaveToCart,
									handleLike: this.onClickLike,
                  handleGaDataSetting: this.onGaDataSetting
								},
								query,
								items: (!isAccessory && isPreview) ? items.filter((item, index) => item[ 'templateUseType' ].match(/ALL/)) : items,
								category,
								subCategory,
								viewMode,
								isPreview,
								isAccessory,
								navigation,
								product
							}))}
						</div>
					</div>

					{(totalCount > 0 && loading) && (
						React.cloneElement(<LoadingAnimation isBig={false}/>)
					)}
				</div>
			)
	}
}

const formName = 'store-search';

const mapStateToProps = (state) => {
	return {
		states: {
			user: state.user,
			config: state.config,
			store: state.store,
			currentForm: state.form[ formName ]
		},
		initialValues: {
			search: {}
		}
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),

			handleGetStoreProduct: (category, subCategory) => dispatch(ActionStore.getStoreProduct(category, subCategory)),
			handleRequestStore: (params) => dispatch(ActionStore.requestStore(params)),
			handleRequestStorePrice: (params) => dispatch(ActionStore.requestStorePrice(params)),
			handleRequestStoreFilter: (params) => dispatch(ActionStore.requestStoreFilter(params)),
			handleRequestStoreNavigation: (category, params) => dispatch(ActionStore.requestStoreNavigation(category, params)),
			handleCreateStoreLike: (templateCode, productCode) => dispatch(ActionStore.createStoreLike(templateCode, productCode)),
			handleDeleteStoreLike: (templateCode, productCode) => dispatch(ActionStore.deleteStoreLike(templateCode, productCode)),
			handleRequestStoreAccessoryOption: (category, subCategory) => dispatch(ActionStore.requestStoreAccessoryOption(category, subCategory)),
			handleRequestStoreAccessory: (productCode) => dispatch(ActionStore.requestStoreAccessory(productCode)),
			handleCreateStoreCart: (params) => dispatch(ActionStore.createStoreCart(params)),

			handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),
			handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
			handleCloseContentsLayer: () => dispatch(ActionLayer.closeContentsLayer()),

			handleUpdateEditor: (data, templateUseType) => dispatch(ActionEditor.updateEditor(data, templateUseType)),

			handleUpdateCSPopItem: (item, mode) => dispatch(ActionCS.updateCSPopItem(item, mode)),

			handleUpdateUIScroll: (targetY, easingType) => dispatch(ActionUI.updateUIScroll(targetY, easingType)),

			handleChangeLogProduct: (type, params, selectedIndex) => dispatch(ActionLog.changeLogProduct(type, params, selectedIndex)),

      handleRequestStoreAccessoryOptionName:  (productCode) => dispatch(ActionStore.requestStoreAccessoryOptionName(productCode)),

      handleRequestStoreProductName:  (productCode) => dispatch(ActionStore.requestStoreProductName(productCode)),

      handleGetProductByCategory: (category) => dispatch(ActionProduct.getProductByCategory(category)),

			handleExecuteAfterUserLogin: () => dispatch(ActionCommon.executeAfterUserLogin()),
      handleRequestStoreOptions: (category, subCategory, projectCode) => dispatch(ActionStore.requestStoreOptions(category, subCategory, projectCode)),



		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName,
	enableReinitialize: true
})(StoreSearch));
