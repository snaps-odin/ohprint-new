

import React from 'react';
import CountUp from 'react-countup';

import {toCash} from 'utils/format';
import {getDeepValue} from 'utils/json';
import {LayerTypes} from 'constants/index';

import Attention from 'components/common/attention';
import update from "react-addons-update";
import {getMarketingData, setMarketingData} from "../../../../../utils/storage";

export default class StoreIntroDIYOptionPrice extends React.Component {
  constructor(...args) {
    super(...args);

    this.updateOffsetPrint = this.updateOffsetPrint.bind(this);
    this.onClickLabel = this.onClickLabel.bind(this);
    this.onClickOffsetPrintLabel = this.onClickOffsetPrintLabel.bind(this);
  }

  updateOffsetPrint() {
    try {
      let { params: {category}, states: {currentForm: {values: {quantity}}}, prices: {priceList} } = this.props;
      let isApparel = category === 'apparel';

      if(quantity && priceList && !isApparel) {
        let checkOffsetPrint = priceList[Number(quantity)].offsetPrint;
        return checkOffsetPrint === 'Y' ? true : false;
      }
      else return false;
    }
    catch (e) {
      return false;
    }
  }

  onClickLabel(){
    let { actions: { handleOpenContentsLayer },  params: { category } } = this.props;
    handleOpenContentsLayer(LayerTypes.SHIPPING_GUIDE, { category })

    //handleOpenContentsLayer(LayerTypes.DESIGN_COMPETITION);
    /*handleOpenContentsLayer(LayerTypes.EVENTS_FUNDING,{
      eventIdx: '86',
      callback: (confirmed) => {}
    });*/
  }

  onClickOffsetPrintLabel(){
    let { actions: { handleOpenContentsLayer } } = this.props;
    handleOpenContentsLayer(LayerTypes.OFFSET_PRINT_GUIDE);
  }

  getOptionLabels() {
    let { states: { currentForm }, options, params: { category } } = this.props;

    let values = getDeepValue(currentForm, `values.option`);

    let isCalendar = (category || '').toLowerCase() === "calendar-desk";

    let result = (options || []).reduce((target, option) => {
      let { keyName, child: children } = option;

      let value = values[ keyName ] || null;

      let child = value
        ? (
          Array.isArray(value)
            ?
            this.getItemLabel(children, value)
            :
            (children || []).find(child => Object.is(child[ 'value' ], value))
        )
        : null;

      child && target.push(child[ 'label' ]);

      return target;
    }, []);

    result = values[ 'displayText' ] ? result.concat('각인 신청') : result;


    (values.calendarStartDate || "") && (result.push((values.calendarStartDate).replace(".","년 ")+"월"))


    return result;
  }

  getItemLabel(children, value) {
    let label = children.reduce((target, item, index) => {
      value[ index ] && target.push(item[ 'label' ]);
      return target;
    }, []).join(',');

    return label ? { label } : null;
  }

  getOptionAttributes() {
    let { states: { currentForm }, options } = this.props;

    let values = getDeepValue(currentForm, `values.option`);

    return (options || []).reduce((target, option) => {
      let {keyName, child: children} = option;

      let value = values[keyName] || null;

      let child = value
        ? (children || []).find(child => Object.is(child['value'], value))
        : null;

      child && target.push(child['attribute']);

      return target;
    }, []);
  }

  getTotalPrice() {
      let { states: { currentForm }, prices, params: { category } } = this.props;
      let { isPackage, engravePrice, priceList } = prices || {};

      let isApparel = category.match(/apparel/i);
      let isMd = category.match(/acrylic-keyring|pin-button|mirror-button|magnet-button|smart-tok|basic-pen|standard-pen|hard-diary|soft-diary|pvc-diary|eco-tumbler|reusable-cup|straight-glass|new-stack-glass/i);
      let isDecalSticker = category.match(/color-decal|graphic-decal/i);
      let values = getDeepValue(currentForm, `values`) || {};
      let { option: { displayText } } = values;
      let checkPrice =  (Number(values[ 'quantity' ]) > 0 ? ((priceList || []).filter(price => Number(price[ 'quantity' ]) <= Number(values[ 'quantity' ])).pop() || {}) : {});

      // if(!!Number(values[ 'quantity' ]) && !(!!priceList[Number(values[ 'quantity' ])]) ) values[ 'quantity' ] = 0;

      let { quantity, discountRate, price, sellPrice } =
        (priceList || []).length > 0
          ?
          (
            !isApparel && !isMd && !isDecalSticker
              ? priceList[ isPackage ? Number(values[ 'quantity' ]) : 0 ]
              : (Number(values[ 'quantity' ]) > 0 ? ((priceList || []).filter(price => Number(price[ 'quantity' ]) <= Number(values[ 'quantity' ])).pop() || {}) : {})
          )
          : {};

      let selectedQuantity = (isPackage ? quantity : values[ 'quantity' ]) || 0;

      let accessories = (values[ 'accessories' ] || []).reduce((target, item) => {
        let { prices, value, isPackage, displayText, engravePrice } = item;

        target += Number(isPackage
          ? prices[ value ][ 'sellPrice' ]
          : prices[ 'sellPrice' ] * value
        ) + (!displayText ? 0 : (engravePrice || 0) * value);

        return target;
      }, 0);

    setMarketingData({
      quantity: selectedQuantity || 0,
      price : (!displayText ? sellPrice : sellPrice + (engravePrice || 0)) * (!isPackage ? selectedQuantity : 1) || 0
    })

      return {
        quantity: selectedQuantity || 0,
        discountRate: discountRate || 0,
        price: (!displayText ? price : price + (engravePrice || 0)) * (!isPackage ? selectedQuantity : 1) || 0,
        sellPrice: (!displayText ? sellPrice : sellPrice + (engravePrice || 0)) * (!isPackage ? selectedQuantity : 1) || 0,
        accessoryPrice: accessories
      };
  }

  getAttention() {
    let { params: { category, subCategory }, states : { currentForm : { values : { option : { productCode } }  } } } = this.props;

    let attention = null;
    let attributes = this.getOptionAttributes().join('/');

    switch ((category || '').toLowerCase()) {
      case 'business-card':
        attention = [
          '효과(박, 형압, 스코딕스)의 경우 중복 선택이 불가능합니다.'
        ];
        break;

      case 'placard-banner':
        attention = [
          `가로/세로 중 짧은 변이 1,500mm를 초과하는 경우,<br/>현수막 2장을 연결하여 제작됩니다.`,
          `로프 길이<br/>- [금속링(10m) / 원형막대(20m)]가 제공`,
          `가로/세로 사이즈 중 한 변이 700, 800, 900mm일 때<br/>- [원형 막대 + 로프, 재봉선] 옵션이 제공`
        ];
        break;

      case 'acrylic-sign':
        attention = [
          /*					'특수제작 상품으로 제작기간 5일이 소요되며,<br/>전 사이즈 무료 배송 상품입니다.',
                    '묶음 배송시, 별도 배송 됩니다.'*/
        ];
        break;

      case 'acrylic-keyring':
        attention = [
          '<em class="blue">사이즈는 10mm부터 100mm</em>까지 입력 가능하며 <em class="blue">2mm의 재단 여백</em>을 포함해서 조정됩니다',
          '입력한 사이즈와 등록한 이미지 사이즈가 다를 경우, 사이즈와 가격이 자동으로 조정됩니다.',
          'JPG 파일은 배경을 포함하여 사각형 스티커로 만들어 집니다.'
        ];
        break;

      case 'calendar-desk':
        attention = [
          '표지 1P + 내지 24P + 연간달력1P로 구성되어 있습니다.'
        ];
        break;

      case 'sticker':
        attention = [];

          if((subCategory || '').match(/diy/i) || (attributes || '').match(/DIY/i)){
            attention = [
              '복잡한 모양의 스티커는 재단이 어려울 수 있으며, 기준 초과시 추가요금이 발생할 수 있습니다.',
              '[칼선 넣기]을 선택하면 배치한 스티커가<br/>1mm 밖으로 여백 있게 재단됩니다.'
            ]
          }

          if((subCategory || '').match(/free-size/i) || (attributes || '').match(/MANUAL_SIZE/i)){
            attention = [
              '복잡한 모양의 스티커는 재단이 어려울 수 있으며, 기준 초과시 추가요금이 발생할 수 있습니다.',
              '사이즈는 30mm부터 240mm까지 입력 가능하며<br/>1.5mm의 재단 여백을 포함해서 조정됩니다.',
              '입력한 사이즈와 등록한 이미지 사이즈가 다를 경우,<br/>사이즈와 가격이 자동으로 조정됩니다.',
              'JPG 파일은 배경을 포함하여 사각형 스티커로<br/>만들어 집니다.'
            ]
          }

          if((subCategory || '').match(/roll/i)){
            attention = [
              '스티커 형태와 사이즈에 따라 하나의 롤로 제작되는 스티커 매수는 상이합니다.',
              '롤스티커는 대량 제작 상품으로 제작 기간이 11일 소요되며, 이후 출고가 진행됩니다.',
              '5만원 이상 주문 시 배송비 무료'
            ]
          }

        break;

      case 'accessory':
        attention = [
          (subCategory || '').match(/envelope/i) ? '구매 수량이 많아질수록 장당 가격이 내려갑니다.' : ''
        ];
        break;

      case 'apparel':
        attention = (attributes || '').match(/NAYEOM_PRINT/i) ? [
          '<em class="blue">날염은 한 가지 색상으로만 인쇄되며, 총 수량 20개 이상부터 주문이 가능합니다.</em>',
          '날염 상품은 제작기간이 5일 소요되며, 다른 상품과 함께 주문 시 별도로 무료 배송됩니다.',
          '주문폭주로 인한 품절 및 제작 지연이 발생할 수 있으니, 대량 단체 주문의 경우, 주문 전 고객센터에 문의해주시면 친철하게 안내해드리겠습니다.'
        ] : [
          '주문폭주로 인한 품절 및 제작 지연이 발생할 수 있으니, 대량 단체 주문의 경우, 주문 전 고객센터에 문의해주시면 친철하게 안내해드리겠습니다.'
        ];
        break;

      case 'envelope':
        attention = [
          '대량 주문 시(1,000매 이상), 주문 전 고객센터에 문의 해주시면 친절하게 안내해 드리겠습니다.',
          '대량 주문 시, 주소입력 서비스가 제공되지 않습니다.'
        ];
        break;

      case 'shoppingbag':
        attention = [
          '100장 이하 11~13 영업일 이내 출고',
          '200장 이상 17~21 영업일 이내 출고'
        ];
        break;

      case 'hard-diary':
      case 'soft-diary':
      case 'pvc-diary':
      case 'memo-pad':
      case 'note-pad':
        attention = [
          '대량 주문 시(1,000매 이상), 주문 전 고객센터에 문의 해주시면 친절하게 안내해 드리겠습니다.'
        ];
        break;

      default:
        attention = [
        ];
        break;
    }

    if(
      (productCode === "105005000001" || productCode === "105004000001" || productCode === "105003000001") && (category || '').toLowerCase() === "poster"
    ){
      attention = [
        'B2, B3, B4의 경우 <em class="blue">규격 사이즈와 다소 차이</em>가 있습니다. 상품 사이즈를 확인해주세요.'
      ];
    }

    return attention;
  }

  getOffetPrintAttention() {
    let { params: { category, subCategory } } = this.props;

    let attention = null;

    switch ((category || '').toLowerCase()) {

      default:
        attention = [
          '대량 주문 시 제작 기간이 2일 정도 추가될 수 있습니다.',
        ];
        break;
    }

    return attention;
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
    let { quantity, price, sellPrice, accessoryPrice } = this.getTotalPrice();
    let { params: { category, subCategory } } = this.props;
    let offset_print = this.updateOffsetPrint();

    let options = this.getOptionLabels().join(' / ');
    let attention = this.getAttention();
    let offsetPrintAttention = this.getOffetPrintAttention();

    let shippingGuideT;
    let shippingGuideO;
    let attributes = this.getOptionAttributes().join('/');
    let isApparel = (category || '').toLowerCase() === "apparel";
    let isCalendar = (category || '').toLowerCase() === "calendar-desk";
    let isRoll = !!(String(category).match(/sticker/i) && String(subCategory).match(/roll/i));
    let isFan = (category || '').toLowerCase() === "fan";
    let isList = isFan;
    let subText =  isFan ? '부채 제작기간은 <em>영업일 기준 동글이 12일, 원형막대 13일 소요</em>되며, 이후 출고가 진행됩니다.' : '출고 및 배송 안내';

    if(
      !(isApparel && (attributes || '').match(/NAYEOM_PRINT/i)) && !isRoll
    ){
      shippingGuideT = {
        handleClick : this.onClickLabel,
        description :
          [
            '5만원 이상 주문 시 배송비 무료',
              subText
          ]
      }

    }

    if(offset_print) {
      let min_offset_count = null;
      try {
        let { prices: {priceList} } = this.props;
        let min_offset = priceList.findIndex(price => price.offsetPrint === 'Y');
        min_offset_count = priceList[min_offset].quantity;
      } catch (e) {}

      if(!!min_offset_count) {
        shippingGuideO = {
          handleClick : this.onClickOffsetPrintLabel,
          description :
            [
              min_offset_count + '장 이상 주문 시 옵셋으로 인쇄됩니다.',
              '옵셋 인쇄 안내'
            ]
        }
      }
    }

    return (
      <div className="store-intro-diy-option-price-wrap">
        <div className="top">
          {attention && React.cloneElement(<Attention/>, {
            listItem:isList,
            value: {
              children: attention.reduce((target, item) => {
                target.push({ value: String(item) });

                return target;
              }, []),
              shippingGuide : shippingGuideT
            }
          })}

          {offset_print && React.cloneElement(<Attention/>, {
            value: {
              children: offsetPrintAttention.reduce((target, item) => {
                target.push({ value: String(item) });

                return target;
              }, []),
              shippingGuide : shippingGuideO
            }
          })}


          <span>{options}</span>

          <span>
						<span className="left">
							수량 : {quantity}
						</span>
						<span className="right">
							{!Object.is(price, sellPrice) && (
                <em>{toCash(price)}원</em>
              )}
              &nbsp;
              {toCash(sellPrice)}원
						</span>
					</span>
        </div>

        <div className="bottom">
          <span className="left">가격</span>
          <span className="right">
						{React.cloneElement(<CountUp/>, {
              start: 0,
              end: Number(sellPrice + accessoryPrice),
              useEasing: true,
              useGrouping: true,
              duration: .3,
              separator: ',',
              suffix: '원'
            })}
					</span>
        </div>
      </div>
    )
  }
}
