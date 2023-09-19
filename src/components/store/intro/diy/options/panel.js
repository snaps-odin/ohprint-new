

import React from 'react';
import { Field } from 'redux-form';

import { LayerTypes } from 'constants/index';

import { getDatasetByName } from 'utils/dom';
import { getDeepValue } from 'utils/json';

import { RadioField, CheckBoxField } from 'components/common/fields';
import { RadioImageField } from 'components/common/fields';
import update from "react-addons-update";
import { breaklines } from 'utils/string';
import { addCdn } from 'utils/url';

export default class StoreIntroDIYOptionPanel extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			focus: null,
			saleYN: 'N',
      newYN : 'N',
      bfColorSale : null
		};

		this.onClickOpenDetail = this.onClickOpenDetail.bind(this);
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onFocus = this.onFocus.bind(this);
		this.getApparelType = this.getApparelType.bind(this);
		this.getApparelItemDetailType = this.getApparelItemDetailType.bind(this);
		this.apparelSizeSetting = this.apparelSizeSetting.bind(this);
		this.getStaticProductType = this.getStaticProductType.bind(this);
	}

	async componentDidMount() {
		let { actions : { handleBfSale }, params : {  category, subCategory } } = this.props;
    //let isBF = (category === "apparel") && (subCategory !== "ohprintme-opm-100218" && subCategory !== "ohprintme-opm-100218-kids");
    let isBF = false;

    if(!!isBF) {
      let bfSale = await handleBfSale();
      this.setState(update(this.state, {
        bfColorSale: { $set: bfSale }
      }))
    }


	}

	onClickOpenDetail() {
		let { actions: { handleOpenContentsLayer }, params: { category, subCategory }, keyName, product } = this.props;
		let { common: { showcases } } = product;

		handleOpenContentsLayer(LayerTypes.PRODUCT_DETAIL, {
			category,
			subCategory,
			keyName,
			showcases
		})
	}

	onMouseEnter(event){
		let { options, params: { category, subCategory }, product: { common: { option } }, states: { currentForm }, values, keyName, productApparelCode, values: { productCode } } = this.props;

		let attribute = getDatasetByName(event.currentTarget, 'attribute');
		let saleYN = getDatasetByName(event.currentTarget, 'sale');
    let newYN = getDatasetByName(event.currentTarget, 'new');


		switch (`${category}/${subCategory}`.toLowerCase()) {
			case 'brochure/defaults':
				(keyName || '').match(/productSizeType/i) && (attribute = `${values[ 'productShapeType' ]}${attribute.replace(/BROCHURE/i, '')}`);
				break;

			case 'menu/defaults':
				(keyName || '').match(/productSizeType/i) && (attribute = `${values[ 'productShapeType' ]}${attribute.replace(/MENU/i, '')}`);
				break;

/*			case 'business-card/soft':
				attribute = attribute+='_SOFT';
			break;*/

			case 'sticker/diy':
			case 'sticker/circle':
			case 'sticker/square':
			case 'sticker/rectangle':
			case 'sticker/wide':
			case 'sticker/a-size':
			case 'sticker/standard':
			case 'sticker/transparency':
				(keyName || '').match(/glossyType/i) && (attribute = `${values[ 'paperShapeType' ]}_${attribute}`);
				break;

			case 'apparel/gildan-ha00':
			case 'apparel/gildan-2300':
			case 'apparel/gildan-63v00':
			case 'apparel/gildan-63v00l':
			case 'apparel/gildan-76500':
			case 'apparel/gildan-76600':
			case 'apparel/gildan-42000':
			case 'apparel/gildan-73800':
			case 'apparel/gildan-73800l':
			case 'apparel/american-apparel-2001w':
			case 'apparel/american-apparel-2102w':
			case 'apparel/american-apparel-tr480w':
			case 'apparel/anvil-6750':
			case 'apparel/aaa-1301':
			case 'apparel/printstar-085-cvt':
			case 'apparel/printstar-195-byp':
			case 'apparel/glimmer-331-abp':
			case 'apparel/glimmer-315-ayb':
      //case 'apparel/ohprintme-opm-p32104':
				((keyName || '').match(/frameCodeList/i) && !!attribute.match(/OBVERSE|BACK/i) && !attribute.match(/NECK_BACK/i)) && (attribute = `${getDeepValue(currentForm, 'values.productShapeType') || ''}_${attribute}`);
				break;

      case 'acrylic-keyring/defaults':
        let step1 = options.find(item => item['keyName'] === "frameCode").child;
        let step2 = step1.find(item => item['value'] === getDeepValue(currentForm, 'values.option.frameCode') || '');
        ((keyName || '').match(/colorCode/i)  && (attribute = `${step2.attribute}_${attribute}`));
        break;

      case 'smart-tok/defaults':
        (keyName || '').match(/colorCode/i) &&(attribute = `${getDeepValue(currentForm, 'values.option.productShapeType') || ''}_${attribute}`);
        break;

      case 'shoppingbag/defaults':
        if(attribute === "BLACK_HANDLE"){
          attribute = `${values[ 'paperShapeType' ]}_${attribute}`;
        }
        break;
		}

		if(productCode && (category === "apparel" && (keyName || '').match(/frameCodeList/i) && productCode.length>4)){
			attribute = this.getApparelType(productApparelCode,attribute,productCode );

			option[ attribute ] = Object.assign({} , option[ attribute ] , {attentions:[
					'최대 '+this.apparelSizeSetting(subCategory,event)
				]})
		}
		else if(category === "business-card"){
      if((values.effectBackCode || '').match(/FOIL_PRINT/i)) {
        switch(attribute) {
          case 'HOLOGRAM':
          case 'BLACK':
          case 'BLUE':
            attribute = `FOIL_PRINT_${attribute}`;
            break;
        }
      }
    }

		this.setState({
			focus: option[ attribute ],
			saleYN,
      newYN
		});
	}

	apparelSizeSetting(subCategory,event){
		let r_value = "";
		let attribute = getDatasetByName(event.currentTarget, 'attribute');

		switch (subCategory) {
			case "ohprintme-opm-p22016":
				!!(attribute || "").match(/OBVERSE/i) && (
					r_value = "300mm x 200mm"
				)

				!!(attribute || "").match(/BACK/i) && (
					r_value = "300mm x 320mm"
				)
				break;

			case "ohprintme-opm-p22014m":
				!!(attribute || "").match(/OBVERSE|BACK/i) && (
					r_value = "230mm x 245mm"
				)
				break;

			case "ohprintme-opm-p22015l":
				!!(attribute || "").match(/OBVERSE|BACK/i) && (
					r_value = "320mm x 341mm"
				)
				break;

			case "ohprintme-opm-p22013l":
				!!(attribute || "").match(/OBVERSE|BACK/i) && (
					r_value = "240mm x 167mm"
				)
				break;

			case "ohprintme-opm-p22011m":
				!!(attribute || "").match(/OBVERSE|BACK/i) && (
					r_value = "170mm x 60mm"
				)
				break;

			case "ohprintme-opm-p22012m":
				!!(attribute || "").match(/OBVERSE|BACK/i) && (
					r_value = "144mm x 100mm"
				)
				break;


			case "gildan-63v00l":
			case "american-apparel-2102w":
			case "gildan-76500":

				!!(attribute || "").match(/OBVERSE|BACK/i) && (
					r_value = "300mm x 340mm"
				)

				!!(attribute || "").match(/NECK_BACK/i) && (
					r_value = "130mm x 70mm"
				)

				!!(attribute || "").match(/LEFT_ARM|RIGHT_ARM/i) && (
					r_value = "100mm x 70mm"
				)

				break;

			case "champion-t425":

				!!(attribute || "").match(/OBVERSE|BACK/i) && (
					r_value = "375mm x 425mm"
				)

				!!(attribute || "").match(/NECK_BACK/i) && (
					r_value = "130mm x 70mm"
				)

				break;

			case "gildan-ha00":
			case "gildan-63v00":
			case "gildan-76600":
			case "gildan-42000":
			case "american-apparel-2001w":
			case "anvil-6750":
			case "aaa-1301":
			case "printstar-085-cvt":
			case "gildan-2000":
			case "gildan-76000":
			case "gildan-76000p":
			case "gildan-4bi00":
			case "ohprintme-opm-p22001":
      case "printstar-083-bbt":
      case "glimmer-300-act":
      case "moccasom-mcd1-ts2061":
      case "comfort-colors-1717":
      case "ohprintme-opm-p32103":
      case "moccasom-mcd3-ts106":

				!!(attribute || "").match(/OBVERSE|BACK/i) && (
					r_value = "375mm x 425mm"
				)

				!!(attribute || "").match(/NECK_BACK/i) && (
					r_value = "130mm x 70mm"
				)

				!!(attribute || "").match(/LEFT_ARM|RIGHT_ARM/i) && (
					r_value = "100mm x 70mm"
				)

				break;

      case "ohprintme-opm-p32104":
        !!(attribute || "").match(/OBVERSE|BACK/i) && (
          r_value = "330mm x 374mm"
        )

        !!(attribute || "").match(/NECK_BACK/i) && (
          r_value = "130mm x 70mm"
        )

        !!(attribute || "").match(/LEFT_ARM|RIGHT_ARM/i) && (
          r_value = "100mm x 360mm"
        )
        break;


			case "gildan-2300":
			case "printstar-195-byp":
			case "glimmer-331-abp":
			case "glimmer-315-ayb":

				!!(attribute || "").match(/ABOVE_POCKET/i) && (
					r_value = "110mm x 60mm"
				)

				!!(attribute || "").match(/BACK/i) && (
					r_value = "375mm x 425mm"
				)

				!!(attribute || "").match(/NECK_BACK/i) && (
					r_value = "130mm x 70mm"
				)

				!!(attribute || "").match(/LEFT_ARM|RIGHT_ARM/i) && (
					r_value = "100mm x 70mm"
				)

				break;

			case "gildan-73800":
			case "gildan-6800":
				!!(attribute || "").match(/CHEST/i) && (
					r_value = "110mm x 110mm"
				)

				!!(attribute || "").match(/BACK/i) && (
					r_value = "375mm x 425mm"
				)

				!!(attribute || "").match(/NECK_BACK/i) && (
					r_value = "130mm x 70mm"
				)

				!!(attribute || "").match(/LEFT_ARM|RIGHT_ARM/i) && (
					r_value = "100mm x 70mm"
				)
				break;

			case "gildan-73800l":
				!!(attribute || "").match(/CHEST/i) && (
					r_value = "110mm x 110mm"
				)

				!!(attribute || "").match(/BACK/i) && (
					r_value = "300mm x 340mm"
				)

				!!(attribute || "").match(/NECK_BACK/i) && (
					r_value = "130mm x 70mm"
				)

				!!(attribute || "").match(/LEFT_ARM|RIGHT_ARM/i) && (
					r_value = "100mm x 70mm"
				)
				break;

			case "ohprintme-opm-100219":
			case "ohprintme-opm-100346":
			case "printstar-00102-cvl":
      case "moccasom-mcd3-ts105":
      case "moccasom-mce4-ts101":
      case "moccasom-mcd3-ts109":
				!!(attribute || "").match(/OBVERSE|BACK/i) && (
					r_value = "375mm x 425mm"
				)

				!!(attribute || "").match(/NECK_BACK/i) && (
					r_value = "130mm x 70mm"
				)

				!!(attribute || "").match(/LEFT_ARM|RIGHT_ARM/i) && (
					r_value = "100mm x 360mm"
				)
				break;

      case "ohprintme-opm-p32101":
      case "ohprintme-opm-p32102":
        !!(attribute || "").match(/OBVERSE/i) && (
          r_value = "330mm x 374mm"
        )

        !!(attribute || "").match(/BACK/i) && (
          r_value = "330mm x 374mm"
        )

        !!(attribute || "").match(/NECK_BACK/i) && (
          r_value = "130mm x 70mm"
        )

        !!(attribute || "").match(/LEFT_ARM|RIGHT_ARM/i) && (
          r_value = "100mm x 360mm"
        )

        break;

      case 'ohprintme-opm-p32111':
        !!(attribute || "").match(/OBVERSE/i) && (
          r_value = "375mm x 260mm"
        )

        !!(attribute || "").match(/BACK/i) && (
          r_value = "375mm x 260mm"
        )
        break;

      case 'ohprintme-opm-p32112':
        !!(attribute || "").match(/OBVERSE/i) && (
          r_value = "280mm x 298mm"
        )

        !!(attribute || "").match(/BACK/i) && (
          r_value = "280mm x 298mm"
        )
        break;

      case 'ohprintme-opm-p32113':
        !!(attribute || "").match(/OBVERSE/i) && (
          r_value = "202mm x 140mm"
        )

        !!(attribute || "").match(/BACK/i) && (
          r_value = "202mm x 140mm"
        )
        break;

      case 'ohprintme-opm-p32114':
        !!(attribute || "").match(/OBVERSE/i) && (
          r_value = "180mm x 125mm"
        )

        !!(attribute || "").match(/BACK/i) && (
          r_value = "180mm x 125mm"
        )
        break;


			case "ohprintme-opm-100216":
				!!(attribute || "").match(/OBVERSE/i) && (
					r_value = "375mm x 263mm"
				)

				!!(attribute || "").match(/BACK/i) && (
					r_value = "375mm x 425mm"
				)

				!!(attribute || "").match(/LEFT_ARM|RIGHT_ARM/i) && (
					r_value = "100mm x 360mm"
				)

				!!(attribute || "").match(/LEFT_HOOD|RIGHT_HOOD/i) && (
					r_value = "150mm x 200mm"
				)
				break;

			case "ohprintme-opm-100347":
				!!(attribute || "").match(/OBVERSE/i) && (
					r_value = "375mm x 188mm"
				)

				!!(attribute || "").match(/BACK/i) && (
					r_value = "375mm x 425mm"
				)

				!!(attribute || "").match(/LEFT_ARM|RIGHT_ARM/i) && (
					r_value = "100mm x 360mm"
				)

				!!(attribute || "").match(/LEFT_HOOD|RIGHT_HOOD/i) && (
					r_value = "150mm x 200mm"
				)
				break;

			case "ohprintme-opm-100217":
			case "ohprintme-opm-100348":
			case "ohprintme-opm-100342":
				!!(attribute || "").match(/CHEST/i) && (
					r_value = "180mm x 180mm"
				)

				!!(attribute || "").match(/BACK/i) && (
					r_value = "375mm x 425mm"
				)

				!!(attribute || "").match(/LEFT_ARM|RIGHT_ARM/i) && (
					r_value = "100mm x 360mm"
				)

				!!(attribute || "").match(/LEFT_HOOD|RIGHT_HOOD/i) && (
					r_value = "150mm x 200mm"
				)
				break;

			case "ohprintme-opm-100218":
				!!(attribute || "").match(/BOTTOM_LEFT/i) && (
					r_value = "100mm x 400mm"
				)

				!!(attribute || "").match(/BOTTOM_BACK/i) && (
					r_value = "375mm x 164mm"
				)
				break;

			case "printstar-085-cvt-kids":
			case "ohprintme-opm-100219-kids":
				!!(attribute || "").match(/OBVERSE|BACK/i) && (
					r_value = "300mm x 340mm"
				)
				break;

			case "ohprintme-opm-100216-kids":
				!!(attribute || "").match(/OBVERSE/i) && (
					r_value = "300mm x 210mm"
				)

				!!(attribute || "").match(/BACK/i) && (
					r_value = "300mm x 340mm"
				)

				!!(attribute || "").match(/LEFT_HOOD|RIGHT_HOOD/i) && (
					r_value = "150mm x 200mm"
				)
				break;


			case "ohprintme-opm-100217-kids":
			case "ohprintme-opm-100342-kids":
				!!(attribute || "").match(/CHEST/i) && (
					r_value = "110mm x 110mm"
				)

				!!(attribute || "").match(/BACK/i) && (
					r_value = "300mm x 340mm"
				)

				!!(attribute || "").match(/LEFT_HOOD|RIGHT_HOOD/i) && (
					r_value = "150mm x 200mm"
				)
				break;

			case "ohprintme-opm-100218-kids":
				!!(attribute || "").match(/BOTTOM_LEFT/i) && (
					r_value = "100mm x 400mm"
				)

				!!(attribute || "").match(/BOTTOM_BACK/i) && (
					r_value = "320mm x 140mm"
				)
				break;


			case "ohprintme-opm-100777l":
			case "ohprintme-opm-p22015l":
				!!(attribute || "").match(/OBVERSE|BACK/i) && (
					r_value = "360mm x 250mm"
				)
				break;

			case "ohprintme-opm-100777m":
			case "ohprintme-opm-p22014m":
				!!(attribute || "").match(/OBVERSE|BACK/i) && (
					r_value = "300mm x 208mm"
				)
				break;

			case "ohprintme-opm-100777s":
				!!(attribute || "").match(/OBVERSE|BACK/i) && (
					r_value = "200mm x 70mm"
				)
				break;


			default:
				r_value = "300mm x 340mm";
				break;

		}

		return r_value;
	}

	getApparelType(productApparelCode,attribute,productCode){
		let rAttribute = "APPAREL";
		let itemName = productCode.substr(0,3);
		let itemType = productCode.substr(3,3);
		let itemCode = productCode.substr(6,3);
		let itemSubClass = productCode.substr(9,3);
		itemType = ((itemType === "001") ? "_ADULT" : ((itemType === "004") ? "_KIDS" : "_ADULT" ));

		switch(`${itemName}`){
			case "701":
				rAttribute += "_SHORT_SLEEVE";
				break;
			case "704":
				itemType = "";
				rAttribute += "_ECHOBACK";

				if(itemCode === "001" && itemSubClass === "001") rAttribute += "_SHOULDER";
        if(itemCode === "001" && itemSubClass === "002") rAttribute += "_TOTE";
        if(itemCode === "001" && itemSubClass === "003") rAttribute += "_CROSS";
        if(itemCode === "001" && itemSubClass === "004") rAttribute += "_SQUARE";


				(itemCode !== "017" && (
					rAttribute += this.getStaticProductType(productCode)
				));

				break;
			case "705":
				rAttribute += "_LONG_SLEEVE";
				break;
			case "706":
				itemType = "";
				rAttribute += "_POUCH"+this.getStaticProductType(productCode);
				break;

      case "707":
        itemType = "";
        rAttribute += "_ONEPIECE"+this.getStaticProductType(productCode);
        break;
		}

		return rAttribute+this.getApparelItemDetailType(itemCode,itemSubClass)+itemType+"_"+attribute;
	}

	getStaticProductType(productCode){
		let p_type = "";
		//백엔드 요청으로 임시로 박음..
		switch(productCode){

			case '706001000001':
				p_type ="_BOTTOM_M";
				break;

			case '706001000002':
				p_type ="_FLAT_M";
				break;

			case '706001000003':
				p_type ="_FLAT_L";
				break;

			case '704001000001':
				p_type ="_STANDARD_M";
				break;

			case '704001000002':
				p_type ="_STANDARD_L";
				break;

			case '704001000003':
				p_type = "_DOUBLEPOCKET";
				break;



		}

		return p_type;
	}


	getApparelItemDetailType(itemCode,echoBackSpace){
		let itemType = "";
		switch(`${itemCode}`){
			case "009":
			case "010":
				itemType = "_M2M";
				break;

			case "011":
			case "012":
				itemType = "_HOODIE";
				break;

			case "013":
			case "014":
			case "015":
				itemType = "_HOODIE_ZIPUP";
				break;

			case "016":
				itemType = "_PANTS";
				break;
			case "017":
				switch(`${echoBackSpace}`){
					case "001":
						itemType += "_L";
						break;
					case "002":
						itemType += "_M";
						break;
					case "003":
						itemType += "_S";
						break;
				}
				break;

		}
		return itemType;
	}

	onMouseLeave(event) {
		this.setState({
			focus: null,
			saleYN: 'N'
		});
	}

	onChange(event, value) {
		let { actions, keyName, isWild } = this.props;
		let { handleChange } = actions;

		let index = getDatasetByName(event.currentTarget, 'customValue') || null;


		window.setTimeout(() => {
			handleChange && handleChange(keyName, value, isWild, value ? index : null);
		}, 0);
	}

	onFocus(event, value) {
		let { actions, keyName } = this.props;
		let { handleFocus } = actions;

		window.setTimeout(() => {
			handleFocus && handleFocus(keyName, value);
		}, 0);
	}

	isDisabled(value) {
		let { enables, isParent } = this.props;

		return isParent ? false : !(enables || []).includes(value);
	}

  useColorChips() {
    let { params: { category, subCategory } } = this.props;

	  switch(category) {
      case 'apparel':
      case 'basic-pen':
      case 'standard-pen':
      case 'light-pen':
      case 'eco-pen':
      case 'hard-diary':
      case 'soft-diary':
      case 'business-card':
      case 'reusable-cup':
      case 'eco-tumbler':
      case 'color-decal':
        return true;
        break;

      // case 'accessory':
      //   if(subCategory === 'reusable-straw') {
      //     return true;
      //     break;
      //   }

      default:
        return false;
    }
  }


	render() {
		let { title, keyName, children, isParent, enables, isMultiSelectable, values, error, params: { category, subCategory }, values: { productCode } } = this.props;
		let { focus, saleYN, newYN, bfColorSale } = this.state;

		let isApparel = (category || '').match(/apparel/i);
    let isBusinessCard = (category || '').match(/business-card/i);
    let isEcoTumbler = (category || '').match(/eco-tumbler/i);
    let isDecalSticker = (category || '').match(/color-decal|graphic-decal/i);

    let addColorChips = this.useColorChips();

		let isDetailView = ((keyName || '').match(/paperCode/i) && isApparel) || ((keyName || '').match(/effectBackCode/i) && isBusinessCard);
		let colorType = (keyName || '').match(/colorCode/i) ? (addColorChips ? 'color' : 'box') : null;
		if((keyName || '').match(/backCode/i) && isDecalSticker) colorType = 'color';
		let colorCode = colorType ? values[ keyName ] : '';
		let colorName = children.reduce((target, child) => {
			child[ 'value' ] === colorCode && (target = child[ 'label' ]);
			return target
		}, '');

		let isSolo = children && children.length === 1;

    //let colorText = this.getColorText();
    let colorText = '';

    if(!!bfColorSale && colorCode){
      colorText = `(${bfColorSale.find(item=>item.value === colorCode).bfSale}% SALE)`
    }

		/*
		하얀색 534039
		검정색 534024
		네이비 534007

		에코백 704
		파우치 706

		 */


		return (
			isParent ||
			(!isParent && (enables || []).length > 0)
		) && (
			<div className="store-intro-diy-option-panel-wrap">
				<div className={`top ${isDetailView && ' active'} smallFont`}>
					<h4>{`${title}${(colorType || '').match(/color/i) && colorName ? ` : ${colorName}` : ''}${isMultiSelectable ? !isSolo ? ` (다중 선택 가능)` : '' : ''}`}
           {((colorType || '').match(/color/i) && colorName) && <span className="colorRed">{colorText}</span>}
					</h4>
					{isDetailView && (
						<span onClick={this.onClickOpenDetail}>
								<span className="icon icon-cause-1515 cause-icon"/>
								<span>상세보기</span>
							</span>
					)}
				</div>

				{focus && (
					<div className="middle">
							<span className="top">
								{/*<span className={`icon icon-jpg-${focus[ 'thumbnail' ]}`}/>*/}
                <img src={addCdn(`/sprite/jpg/${focus[ 'thumbnail' ]}.jpg`)} />
							</span>

						{(saleYN || '').match(/Y/) && (
							<span className="middle">
								<span className="icon icon-sale-4141"/>
							</span>
						)}

            {(newYN || '').match(/Y/) && (
              <span className="middle">
								<span className="icon icon-new-4141"/>
							</span>
            )}



						<span className="bottom">
								<h5>{focus[ 'title' ]}</h5>

							{focus[ 'description' ] && (
								<span dangerouslySetInnerHTML={{ __html: breaklines(focus[ 'description' ]) }}/>
							)}

							{(focus[ 'attentions' ] || []).length > 0 && (
								<dl>
									{focus[ 'attentions' ].reduce((target, attention) => {
										target.push(
											<dd>
												<span dangerouslySetInnerHTML={{ __html: attention }}/>
											</dd>
										);

										return target;
									}, [])}
								</dl>
							)}

							{(focus[ 'colors' ] || []).length > 0 && (
								<span className="colors">
									{focus[ 'colors' ].reduce((target, color) => {
											target.push(
													/*<span className={`icon icon-jpg-${color}`}/>*/
													<img src={addCdn(`/images/store/intro/apparel/service/colorChips/${color}@2x.jpg`)}/>
											);

											return target;
										}, [])}
								</span>
							)}

							</span>
					</div>
				)}

				<ul className={`bottom ${colorType || ''}`}
				    onMouseLeave={this.onMouseLeave}>

					{(children || []).reduce((target, child, index) => {
						let { label, value, attribute, isSale, isNew } = child;
						let isDisabled = this.isDisabled(value);
						let colorName = (addColorChips && colorType)
							? (attribute || '').toLowerCase().replace(/_/g, '-') : '';

						if(isEcoTumbler && colorName === 'purple') colorName = 'lavender';
            else if(category === 'light-pen' && colorName === 'blue') colorName = 'pen-blue';
            else if(category === 'light-pen' && colorName === 'pink') colorName = 'pen-pink';
						colorName && (label = (
							// <span className={`icon icon-${colorName}-40`}/>
              <img src={addCdn(`/sprite/svg/${colorName}-40.svg`)} className={"chip"}/>
						));

						!isDisabled && target.push(
							<li data-attribute={attribute}
                  data-new={isNew ? 'Y' : 'N'}
							    data-sale={isSale ? 'Y' : 'N'}
							    onMouseEnter={!isDisabled ? this.onMouseEnter : this.onMouseLeave}
							    onMouseOver={!isDisabled ? this.onMouseEnter : this.onMouseLeave}>

								{isSale && (
									<span className="icon icon-sale-3030"/>
								)}

                {
                  isNew && (
                    <span className="icon icon-new-3030"/>
                  )
                }

								{isMultiSelectable
									?
									(
										<Field name={`option.${keyName}[${index}]`}
										       className={`multi`}
										       label={label}
										       disabled={isDisabled}
										       onChange={this.onChange}
										       onFocus={this.onFocus}
										       customValue={index}
										       component={CheckBoxField}/>
									)
									:
									(
										<Field name={`option.${keyName}`}
										       className={(colorType || '').match(/color/i) ? `color ${colorName}` : 'box'}
										       label={label}
										       keyValue={String(value)}
										       disabled={isDisabled}
										       onChange={this.onChange}
										       onFocus={this.onFocus}
										       component={RadioField}/>
									)}

							</li>
						);

						return target;
					}, [])}
				</ul>
				{error && (
					<span className="error">{error}</span>
				)}
			</div>
		)
	}
}
