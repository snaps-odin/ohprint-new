

import React from 'react';

import { LayerTypes } from 'constants/index';

import { addDomain, addTemplateCdn } from 'utils/url';
import { toCash } from 'utils/format';
import { getDatasetByName } from 'utils/dom';
import { snakeToCamel } from 'utils/string';

import ThumbnailProduct from 'components/common/thumbnail-product';
import ThumbnailProductCalendar from 'components/common/thumbnail-product-calendar';
import ThumbnailProductApparel from 'components/common/thumbnail-product-apparel';
import ThumbnailProductDiary from 'components/common/thumbnail-product-diary';
import ImageLoader from 'components/common/image-loader';
import { dataLayerSelectTemplateDetail } from 'configs/google-analytics/ga';
import {gtmV4_select_template_detail} from "configs/google-analytics/ga-v4";

export default class Tile extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickGoDIY = this.onClickGoDIY.bind(this);
		this.onClickPreview = this.onClickPreview.bind(this);
		this.onClickLike = this.onClickLike.bind(this);
    this.renderThumbnailProduct = this.renderThumbnailProduct.bind(this);
    this.checkImageServer = this.checkImageServer.bind(this);

    this.item = this.props.item;
    this.useImageServer = this.checkImageServer();
	}

	onClickGoDIY(event) {
		let { actions: { handleGoEditor }, item, query, category, itemIndex } = this.props;

		let templateCode = getDatasetByName(event.currentTarget, 'template-code');
		let templateUseType = getDatasetByName(event.currentTarget, 'template-use-type');

    gtmV4_select_template_detail({
      idx: itemIndex+1,
      text: item['templateName'],
      type: templateUseType==='USER_MADE' ? '내 디자인 업로드' : '직접 디자인 하기'
    });

		handleGoEditor(templateCode, templateUseType, {
			template: item
		});
	}

  onClickPreview(event) {
    let { states, actions, category, subCategory, query, itemIndex, isAccessory, designCount, selectedTemplateCode, product, navigation } = this.props;
    let { config: { url: { cdn: cdnUrl } } } = states;
    let { handleOpenContentsLayer, handleChangeLogProduct, handleGaDataSetting, handleRequestStoreAccessoryOptionName, handleExecuteAfterUserLogin } = actions;
    let item = this.item;
    let useImageServer = this.useImageServer;

    gtmV4_select_template_detail({
      idx: itemIndex+1,
      text: item['templateName'],
      type: '오프린트미 템플릿 사용하기'
    });

    handleExecuteAfterUserLogin().then(() => {
      try{
        Promise.all([
          handleGaDataSetting(this.props.item.templateName)
        ]).then((gaData)=>{
          (gaData[0].isGa && dataLayerSelectTemplateDetail(gaData[0].options, gaData[0].convertJspn, gaData[0].templateName, gaData[0].category, handleRequestStoreAccessoryOptionName, gaData[0].quan));
        })
      }catch (e){
        console.error("GA SEND FAIL ",e);
      }

      Promise.all([
        handleOpenContentsLayer(LayerTypes.TEMPLATE_DETAIL, {
          states,
          actions,
          category,
          subCategory,
          query,
          item,
          itemIndex,
          selectedTemplateCode,
          isAccessory,
          designCount,
          product,
          navigation,
          useImageServer
        })
      ]).then(() => {
        handleChangeLogProduct('VIEW_ITEM', Object.assign({}, item, {
          templateImageUrl: addDomain(cdnUrl, item[ 'thumbnailUrl' ])
        }), 0);
      });
    }).catch(function (error) {
    });
  }

	onClickLike(event) {
		let { actions: { handleLike }, itemIndex } = this.props;

		handleLike(itemIndex);
	}

  makeImageServerUrl() {
    let { category, query, item } = this.props;
    let { productCode, paperCode, frameCode, productShapeType, paperShapeType, colorCode, backCode } = query;
    let { defaultTemplateCode, templateCode } = item;

    // query에 담길지 item에 담길지 .. ?
    switch(category) {
      case 'business-card':
        let optional = defaultTemplateCode ? `,${defaultTemplateCode}` : '';
        if(!backCode) backCode = '503000';
        item[ 'thumbnailUrl' ] = `/${productCode}/${templateCode}/${paperCode}/${backCode}/store_list/${frameCode}${optional}.png`;
        break;
      case 'note-pad':
      case 'memo-pad':
        item[ 'thumbnailUrl' ] = `/${productCode}/${templateCode}/${paperCode}/000000/store_list/${snakeToCamel(category)}.png`;
        break;
      case 'new-stack-glass':
      case 'straight-glass':
      case 'translucent-reusable-cup':
        item[ 'thumbnailUrl' ] = `/${productCode}/${templateCode}/${paperCode}/000000/store_list/.png`;
        break;
      case 'reusable-cup':
      case 'eco-tumbler':
        item[ 'thumbnailUrl' ] = `/${productCode}/${templateCode}/${paperCode}/000000/store_list/${colorCode}.png`;
        break;
      case 'color-decal':
        item[ 'thumbnailUrl' ] = `/${productCode}/${templateCode}/${paperCode}/${backCode}/store_list/${snakeToCamel(category)}.png`;
        break;
      case 'graphic-decal':
        item[ 'thumbnailUrl' ] = `/${productCode}/${templateCode}/${paperCode}/000000/store_list/${snakeToCamel(category)}.png`;
        break;

      default:
        break;
    }

    return item;
  }

  checkImageServer() {
    let { category, query } = this.props;
    let { productCode, paperCode, frameCode, productShapeType, paperShapeType, colorCode, backCode } = query;

    switch(category) {
      case 'business-card':
        if(paperShapeType !== 'TRANSPARENCY') return true;
        else return false;
      case 'note-pad':
      case 'memo-pad':
      case 'new-stack-glass':
      case 'straight-glass':
      case 'translucent-reusable-cup':
      case 'reusable-cup':
      case 'eco-tumbler':
      case 'color-decal':
      case 'graphic-decal':
        return true;

      default:
        return false;
    }

    return false;
  }

  renderThumbnailProduct() {
    let { states, category, query } = this.props;
    let { config: { url: { cdn: cdnUrl } } } = states;
    let { productCode, paperCode, frameCode, productShapeType, paperShapeType, colorCode, backCode } = query;
    let isApparel = category.match(/apparel/i);
    let isDiary = category.match(/hard-diary|soft-diary/i);
    let isCalendarDesk = !!String(category).match(/calendar-desk/i);
    let item = this.item;
    let useImageServer = this.useImageServer;

    if(useImageServer) this.item = this.makeImageServerUrl();

    if(isApparel) {
      return (
        React.cloneElement(<ThumbnailProductApparel/>, {
          imageUrl: addDomain(cdnUrl, item[ 'thumbnailUrl' ]),
          skinUrl: addDomain(cdnUrl, item[ 'thumbnailSkinUrl' ]),
          frameType: item[ 'frameType' ],
          position: item[ 'position' ] || 0
        })
      )
    }else if(isDiary) {
      return (
        React.cloneElement(<ThumbnailProductDiary/>, {
          imageUrl: addDomain(cdnUrl, item[ 'thumbnailUrl' ]),
          skinUrl: addDomain(cdnUrl, item[ 'thumbnailSkinUrl' ]),
          frameType: item[ 'frameType' ],
          colorCode: item[ 'templateColor' ],
          noStyle: isDiary ? true : false,
          category
        })
      )
    }
    else if(isCalendarDesk) {
      return (
        React.cloneElement(<ThumbnailProductCalendar/>, {
          type: 'tiles',
          cdnUrl,
          items:item
        })
      )
    }
    else {
      return (
        React.cloneElement(<ThumbnailProduct/>, {
          imageUrl: useImageServer ? addTemplateCdn(item[ 'thumbnailUrl' ]) : addDomain(cdnUrl, item[ 'thumbnailUrl' ]),
          /**isEmpty: !!item[ 'userMake' ],*/
          productCode,
          paperCode,
          frameCode,
          colorCode,
          directionType: item[ 'directionCode' ],
          type: 'showcase'
        })
      )
    }
  }

	render() {
		let { states, actions, item, isAccessory, designCount } = this.props;
		let { config: { url: { cdn: cdnUrl } } } = states;
		let { handleShowGuide } = actions;
		let isMakeUseTemplate = (item[ 'templateUseType' ] || '').match(/ALL/);

		return (
			<div className="store-search-tile-wrap">
				<div className="top"
				     data-template-code={item[ 'templateCode' ]}
				     data-template-use-type={item[ 'templateUseType' ]}
				     onClick={!isMakeUseTemplate ? this.onClickGoDIY : this.onClickPreview}>
					{
						isMakeUseTemplate
						?
              this.renderThumbnailProduct()
							:
							(
								React.cloneElement(<ImageLoader/>, {
									imageUrl: addDomain(cdnUrl, item[ 'thumbnailUrl' ]),
									isSizeFixed: false
								})
							)
					}

					<div className="option">
						{isMakeUseTemplate && (
							<span className="icon">
								{[ 'new', 'best', 'sale' ].map((flag) => !!item[ flag ] && (
									<span>{snakeToCamel(flag)}</span>
								))}
							</span>
						)}

						{isAccessory && (
							<span className="info">
								<span>{item[ 'templateSize' ] && item[ 'templateSize' ]}</span>
							</span>
						)}

						{(isMakeUseTemplate && !isAccessory && designCount >= 2) && (
							<span className="template-cnt">
								<span>{`${designCount}`}가지 디자인</span>
							</span>
						)}
					</div>
				</div>

				<div className={`bottom ${!isMakeUseTemplate ? 'diy' : ''}`}>
					{!!item[ 'premium' ] && (
						<span className="icon icon-tag-special-2020 premium-icon"/>
					)}

					<span className={`title ${!isMakeUseTemplate ? 'diy' : ''} ${isAccessory ? 'accessory' : ''}`}>
						{`${item[ 'templateName' ]}`}
					</span>

					{((item[ 'templateUseType' ] || '').match(/USER_MADE/)) && (
						<span className="icon icon-cause-1515 cause-icon" onClick={handleShowGuide}/>
					)}

					{isMakeUseTemplate && (
						isAccessory
							?
							(
								<button type="button"
								        className="price">
									{toCash((item[ 'priceInfo' ] || {})[ 'sellPrice' ])}원
								</button>
							)
							:
							(
								<button type="button"
								        className={`like ${item[ 'liked' ] ? 'active' : ''}`}
								        onClick={this.onClickLike}/>
							)
						)
					}
				</div>
			</div>
		)
	}
}
