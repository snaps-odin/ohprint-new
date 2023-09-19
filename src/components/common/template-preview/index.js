

import React from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';
import { change, reduxForm } from 'redux-form';

import { TEMPLATE_PRODUCTS } from 'configs/index';
import { addDomain } from 'utils/url';

import { ActionProduct,ActionStore, ActionLayer, ActionCart } from 'actions/index';
import Viewport from './viewport';
import Navigation from './navigation';
import Options from './options';

import { getDeepValue } from 'utils/json';
import { snakeToCamel } from 'utils/string';

import { dataLayerEditorTransactionTemplateSelect } from 'configs/google-analytics/ga';
import Preview3D from "./preview3D";

class TemplatePreview extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			ready: false,
			items: null,
			focused: 0,
			foldShape: '',
      preview3D: false
		};

    this.thumbnailOriginSizeList = [
      "STICKER_2ND_RECTANGULER_30X12",
      "STICKER_2ND_RECTANGULER_50X30",
      "STICKER_2ND_RECTANGULER_105X70",
      "STICKER_2ND_RECTANGULER_120X90",
      "STICKER_2ND_WIDE_60X15"
    ]

		this.onChangeFocus = this.onChangeFocus.bind(this);
		this.onChangeFoldShape = this.onChangeFoldShape.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.togglePreview3D = this.togglePreview3D.bind(this);
	}

	getPreviewOption(type) {
		let { item: { productShapeType, productSizeType, directionType, designList }, category, query : { colorCode, frameCode, paperCode } } = this.props;
    let originSizeList = this.thumbnailOriginSizeList;
		let direction = String(directionType).toLowerCase();
		let isVertical = String(directionType).match(/VERTICAL|SQUARE/i);
		let triFold = !!String(productShapeType).match(/TRI_FOLD/i);
    let isEnvelope = !!String(category).match(/envelope/i);
    let isShoppingBag = !!String(category).match(/shoppingbag/i);
    let isDiary = !!String(category).match(/hard-diary|soft-diary/i);
		let product = category.match(/apparel/i) ? TEMPLATE_PRODUCTS[ productShapeType ] : TEMPLATE_PRODUCTS[ productShapeType ][ productSizeType ] || TEMPLATE_PRODUCTS[ 'BUSINESS_CARD_NONE' ][ 'BUSINESS_CARD_8DOT5X5DOT5' ];
		product = category.match(/smart-tok/i) ? product[ colorCode ] : product;
    product = category.match(/fan/i) ? product[ frameCode ] : product;

		let { viewMode, foldShape } = product;
		let { viewSize, thumbnailSize, viewPages, thumbnailPages, viewMaskImage, viewMaskImageBack, thumbnailMaskImage, viewStrapImage } = product[ direction ] || product[ 'vertical' ];
		let size = (type === 'viewport') ? viewSize : thumbnailSize;
    let originSize = !!((category === "sticker") && (originSizeList.find((item)=>(item === productSizeType))));
		let width = size ? Math[ isVertical ? 'min' : 'max' ](...size) : 0;
		let height = size ? Math[ isVertical ? 'max' : 'min' ](...size) : 0;

    if((size && (size.length === 2)) && originSize ){
      width = size[0];
      height = size[1];
    }

		let maskImage = (type === 'viewport') ? viewMaskImage : thumbnailMaskImage;
		let isViewMaskImage = (viewMaskImageBack) ? viewMaskImageBack : null;
    if(!!isEnvelope && size){
      width = size[0];
      height = size[1];
    }

    if(isShoppingBag){
      maskImage = viewMaskImage["frameCode"].find(item => item.code === (frameCode+"")).value;
      isViewMaskImage = viewMaskImage["frameCode"].find(item => item.code === (frameCode+"")).value;
    }

    if(isDiary && type === 'viewport') {
      if(designList.length > 1) viewMode = 'HALF';
    }

		return {
			productSizeType: String(productSizeType).toLowerCase().split('_')[ 1 ],
			viewMode,
			viewSize,
			thumbnailSize,
			foldShape,
			isVertical,
			triFold,
			direction,
			viewPages,
			thumbnailPages,
			width,
			height,
			maskImage,
      isViewMaskImage,
      colorCode,
      strapImage: viewStrapImage
		};
	}

  makeImageServerUrl(items) {
    let {query: {backCode, productCode, frameCode, paperCode, colorCode, paperShapeType}, item: {productShapeType, designList, effectList, defaultTemplateCode, templateCode}, category} = this.props;

    // query에 담길지 item에 담길지 .. ?
    switch(category) {
      case 'business-card':
        let optional = defaultTemplateCode ? `,${defaultTemplateCode}` : '';
        if(!backCode) backCode = '503000';
        items = items.map((list, index) => {
          return {
            ...list,
            'defaultUrl': `/${productCode}/${templateCode}/${paperCode}/${backCode}/store_detail_${index}/${frameCode}${optional}.png`,
            'thumbnailUrl': `/${productCode}/${templateCode}/${paperCode}/${backCode}/store_detail_${index}/${frameCode}${optional}.png`
          }
        })
        break;
      case 'note-pad':
      case 'memo-pad':
        items = items.map((list, index) => {
          return {
            ...list,
            'defaultUrl': `/${productCode}/${templateCode}/${paperCode}/000000/store_detail_${index}/${snakeToCamel(category)}.png`,
            'thumbnailUrl': `/${productCode}/${templateCode}/${paperCode}/000000/store_detail_${index}/${snakeToCamel(category)}.png`
          }
        })
        break;
      case 'new-stack-glass':
      case 'straight-glass':
      case 'translucent-reusable-cup':
        items = items.map((list, index) => {
          return {
            ...list,
            'defaultUrl': `/${productCode}/${templateCode}/${paperCode}/000000/store_detail_${index}/.png`,
            'thumbnailUrl': `/${productCode}/${templateCode}/${paperCode}/000000/store_detail_${index}/.png`
          }
        })
        break;
      case 'reusable-cup':
      case 'eco-tumbler':
        items = items.map((list, index) => {
          return {
            ...list,
            'defaultUrl': `/${productCode}/${templateCode}/${paperCode}/000000/store_detail_${index}/${colorCode}.png`,
            'thumbnailUrl': `/${productCode}/${templateCode}/${paperCode}/000000/store_detail_${index}/${colorCode}.png`
          }
        })
        break;
      case 'color-decal':
        items = items.map((list, index) => {
          return {
            ...list,
            'defaultUrl': `/${productCode}/${templateCode}/${paperCode}/${backCode}/store_detail_${index}/${snakeToCamel(category)}.png`,
            'thumbnailUrl': `/${productCode}/${templateCode}/${paperCode}/${backCode}/store_detail_${index}/${snakeToCamel(category)}.png`
          }
        })
        break;
      case 'graphic-decal':
        items = items.map((list, index) => {
          return {
            ...list,
            'defaultUrl': `/${productCode}/${templateCode}/${paperCode}/000000/store_detail_${index}/${snakeToCamel(category)}.png`,
            'thumbnailUrl': `/${productCode}/${templateCode}/${paperCode}/000000/store_detail_${index}/${snakeToCamel(category)}.png`
          }
        })
        break;

      default:
        break;
    }

    return items;
  }

	getTemplateList() {
		let { query: { backCode, productCode, frameCode, paperCode, paperShapeType }, item: { productShapeType, designList, effectList, defaultTemplateCode, templateCode }, useImageServer } = this.props;

    let isCalendar = this.props.category.match(/calendar/i);

		let effectItem = effectList ? effectList.find(effect => effect[ 'value' ] === backCode) : null;

		return new Promise((resolve, reject) => {
			let items = designList.reduce((target, list, index) => {

        list[ 'defaultUrl' ] = effectItem ? list[ `${effectItem[ 'attr' ]}1Url` ] : list[ 'detailThumbImageUrl' ] || list[ 'defaultUrl' ];
				list[ 'thumbnailUrl' ] = effectItem ? list[ `${effectItem[ 'attr' ]}1Url` ] : list[ 'thumbnailUrl' ];

				switch (String(productShapeType)) {
					case 'STICKER_2ND_ROUND':
					case 'STICKER_2ND_SQUARE':
					case 'STICKER_2ND_RECTANGULER':
					case 'STICKER_2ND_WIDE':
					case 'STICKER_2ND_ATYPE':
						!index && (target.push(list));
						break;

					case 'TRANS_BUSINESS_CARD_NONE':
					case 'ACCESSORY_ENVELOPE':
					case 'ACCESSORY_BUSINESS_CARD_CASE':
					case 'ACCESSORY_SIGN_HOLDER':
					case 'APPAREL_SHORT_SLEEVES_ROUND':
					case 'APPAREL_SHORT_SLEEVES_POCKET':
					case 'APPAREL_SHORT_SLEEVES_RAGLAN':
					case 'APPAREL_SHORT_SLEEVES_RINGER':
					case 'APPAREL_SHORT_SLEEVES_CROP':
					case 'APPAREL_SHORT_SLEEVES_POLO':
					case 'APPAREL_SHORT_SLEEVES_POLOPOCKET':
					case 'APPAREL_SHORT_SLEEVES_VNECK':
					case 'APPAREL_M2M':
					case 'APPAREL_GIMO_M2M':
					case 'APPAREL_HOODIE':
					case 'APPAREL_GIMO_HOODIE':
					case 'APPAREL_ZIPUP':
					case 'APPAREL_GIMO_ZIPUP':
					case 'APPAREL_DRY_ZIPUP':
					case 'APPAREL_LONG_PANTS':
					case 'APPAREL_ECHO_BAG':
          case 'APPAREL_LONG_SLEEVES_ROUND':
          case 'APPAREL_ONEPIECE':
          case 'APPAREL_NEW_ECOBAG':
          case 'APPAREL_ETC_M2M':
						target.push(list);
						break;

          case 'CALENDAR_DESK_HORIZONTAL':
          case 'CALENDAR_DESK_VERTICAL':
            (index > 0 && (designList.length-1 !== index)) && target.push(list)
            break;

					case 'CARD_FOLDER':
					case 'BROCHURE':
						(index < 2) && (target.push(list));
						break;

					default:
						(!index || index % 2 === 1) && (target.push(list));
						break;
				}

				return target;
			}, []);

      if(useImageServer) items = this.makeImageServerUrl(items);

			resolve(items);
		});
	}

	onChangeFocus(value) {
		let { states: { config: { url: { cdn: cdnUrl } } }, actions: { handleChangeLogProduct }, item } = this.props;

		Promise.all([
			this.setState(update(this.state, { focused: { $set: value } }))
		]).then(() => {
			handleChangeLogProduct('VIEW_ITEM_PACKAGE', Object.assign({}, item, {
				templateImageUrl: addDomain(cdnUrl, item[ 'thumbnailUrl' ])
			}), value * 1);
		});
	}

	onChangeFoldShape(value) {
		this.setState(update(this.state, { foldShape: { $set: value } }));
	}

	onSubmit(values) {
		let { actions, item, isAccessory, query:{ offsetPrint, calendarStartDate, backCode } } = this.props;
		let { handleGoEditor, handleSaveToCart } = actions;
		let { productCode, templateCode } = item;
		let { items } = this.state;

		let { quantity, selectedTemplateCodes: selectedTemplates } = values;
		let selectedTemplateCodes = "";
		let printBackCode = this.props.item.printBackCode;
		let isApparel = this.props.category.match(/apparel/i);
    let isCalendar = this.props.category.match(/calendar/i);
		let editParams = {};

		if(offsetPrint && offsetPrint === "Y"){
			let offsetRadioSelected = getDeepValue(values, 'selectedTemplateCodes');
			(offsetRadioSelected) && (selectedTemplateCodes = items[ offsetRadioSelected ][ 'templateCode' ]);
		}

		if(offsetPrint && offsetPrint === "N"){
				selectedTemplateCodes = (selectedTemplates || []).reduce((target, field, index) => {
					!!field && target.push(items[ index ][ 'templateCode' ])

					return target;
				}, []).join(',');
		}

		item = Object.assign({}, item , {offsetPrint:(offsetPrint || "N")});


/*
    !isAccessory
      ? handleGoEditor(templateCode, null, { template: item, selectedTemplateCodes })
      : handleSaveToCart(templateCode, productCode, quantity);
*/

		editParams = { template: item, selectedTemplateCodes, type: 'pop' };

		(isApparel && printBackCode) && (
			editParams['printBackCode'] = printBackCode
		);

		if(isCalendar){
      editParams['calendarStartDate'] = calendarStartDate;
      //editParams['backCode'] = backCode;
    }


		!isAccessory
			? handleGoEditor(templateCode, null, editParams)
			: handleSaveToCart(templateCode, productCode, quantity);
	}

	componentDidMount() {
    let isCalendarDesk = this.props.category.match(/calendar-desk/i);
    let { focused } = this.state;


		this.getTemplateList().then(items => {
			this.setState(update(this.state, {
        focused : { $set : (isCalendarDesk ? focused+1 : focused) },
				items: { $set: items },
				ready: { $set: true }
			}));
		});
	}

	togglePreview3D(){
    let { preview3D } = this.state;

    this.setState(update(this.state,{
      preview3D : {
        $set : !preview3D
      }
    }))
  }

  usePreview3D() {
    let { category, subCategory } = this.props;
    let isUse = false

    switch(category) {
      case 'shoppingbag':
      case 'new-stack-glass':
      case 'straight-glass':
      case 'translucent-reusable-cup':
      case 'reusable-cup':
      case 'eco-tumbler':
        isUse = true;
        break;

      default:
        break;
    }

    return isUse;
  }

	render() {
		let { states, actions, category, subCategory, query, item, itemIndex, isAccessory, designCount, product, navigation, handleSubmit, valid, query:{ offsetPrint }, useImageServer } = this.props;

		let {  config: { url: { cdn: cdnUrl } } } = states;
		let { productShapeType, productSizeType, detailThumbImageUrl } = item;
		let { ready, focused, foldShape, items, preview3D } = this.state;
		let { frameCode, backCode, paperShapeType } = query;
		let isRoundFrame = Object.is(String(frameCode), '504002');

    let isPreview3D = this.usePreview3D();

    let isCalendar = category.match(/calendar/i);

		return ready && (
				<div className="template-preview-wrap">
					<form onSubmit={handleSubmit(this.onSubmit)}>
						<div className="container">
							<div className="left">

                {(isPreview3D) &&
                  <Preview3D
                    category = {category}
                    query = {query}
                    item = {item}
                    preview3D = {preview3D}
                    actions = {{
                      ...actions,
                      handleTogglePreview3D: this.togglePreview3D
                    }}
                  />
                }

								{React.cloneElement(<Viewport/>, {
								  actions,
									states,
									category,
									query,
									focused,
									foldShape,
                  thumbnailUrl : item.thumbnailUrl,
                  useImageServer,
									items,
									isAccessory,
									isRoundFrame,
									options: this.getPreviewOption('viewport'),
                  productShapeType,
                  productSizeType,
                  detailThumbImageUrl
								})}

								{React.cloneElement(<Navigation/>, {
									states,
									actions: {
										handleChangeFocus: this.onChangeFocus,
										handleChangeFoldShape: this.onChangeFoldShape
									},
									focused,
									foldShape,
									items,
									isRoundFrame,
									options: this.getPreviewOption('navigation'),
									category,
									productShapeType,
                  productSizeType,
                  paperShapeType,
									offsetPrint,
                  backCode
								})}
							</div>

							<div className="right">
								{React.cloneElement(<Options/>, {
									states,
									actions,
									category,
									subCategory,
									query,
									item,
                  useImageServer,
									itemIndex,
									isAccessory,
									designCount,
									product,
									navigation,
									handleSubmit,
									valid,
                  isCalendar
								})}
							</div>
						</div>
					</form>
				</div>
			)
	}
}

const formName = 'template-preview-option';

const mapStateToProps = (state, ownerProps) => {
	return {
		states: {
			...ownerProps.states,

			currentForm: state.form[ formName ]
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,
      handleRequestCartByProjectCode: (projectCode) => dispatch(ActionCart.requestCartByProjectCode(projectCode)),
      handleOpenAlertLayer: options => dispatch(ActionLayer.openAlertLayer(options)),
			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value))
		}
	}
};

const validate = (values, props) => {
	let { selectedTemplateCodes } = values;
	let { category, query:{ offsetPrint } } = props;

	let error = { selectedTemplateCodes: null };


	if(!offsetPrint || (offsetPrint && offsetPrint === "N")) {
		let count = (selectedTemplateCodes || []).filter((item => !!item)).length;
		(category || '').match(/business-card/) && count < 1 && (error[ 'selectedTemplateCodes' ] = '필수 항목입니다');
	}

	if(offsetPrint && offsetPrint === "Y"){
		(!selectedTemplateCodes) && (error[ 'selectedTemplateCodes' ] = '원하는 뒷면 디자인을 선택해주세요.' );
	}

	return error;
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName,
	validate
})(TemplatePreview));
