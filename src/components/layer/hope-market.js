import React from 'react';
import { connect } from 'react-redux';
import { change, Field, reduxForm } from 'redux-form';

import { LayerTypes } from 'constants/index';
import { ActionOrder, ActionOrderHistory, ActionPayment } from 'actions/index';
import { getHeight } from 'utils/dom';
import { toCash, toDate, toPhoneNumber } from 'utils/format';
import { getDeepValue } from 'utils/json';
import * as Validate from 'utils/validate';
import * as Normalize from 'utils/normalize';
import { addDomain } from 'utils/url';

import CountUp from 'react-countup';

import { goMemberCart } from 'utils/url';

import { getDatasetByName } from 'utils/dom';

import { InputField, RadioField, CheckBoxField, SelectField, InputQuantityField } from 'components/common/fields';

import { ActionStore, ActionLayer, ActionEvents } from 'actions/index';

import { HOPE_MARKEY, PRODUCT_CONTENTS_INFORMATION, PRODUCT_CONTENTS_POPCART } from "./styles/hope-market"

import { jsx, css } from "@emotion/react";
import {createCollaborationStoreCart} from "../../actions/events";

import Loading from "./loading";

class HopeMarket extends React.Component {
	constructor(props) {
		super(props);

    this.popHeight = props.states.ui.view.height * 0.85;

    let { productType, productName, items } = props.options.product;

    this.mainCSS = css`
      height: ${this.popHeight}px;
      min-height: 754px;
    `;

    this.contentsHeight = css`
      height: 100%;
    `;

    this.productInfp = {
      title : `[${productType}] ${productName}`
    }

    this.state = {
      ecobag : null,
      pouch : null,
      calendar : null,
      color : null,
      size : null,
      cart : [],
      isSend : false
    }

    this.cdn = props.options.cdn;



		this.onClickClose = this.onClickClose.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onProductAddList = this.onProductAddList.bind(this);
    this.onAddList = this.onAddList.bind(this);
    this.onAddCart = this.onAddCart.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.changeCartData = this.changeCartData.bind(this);
    this.onDeleteCart = this.onDeleteCart.bind(this);
	}


	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

  componentDidMount() {
    const { options : { product : { items, price }, productCodeList }, actions : { handleChangeFormValue } } = this.props;
    const { products } = items[0];
    const value = products[0].value;


    if(products.length === 1){
      let info = {
        title : "수량",
        quantity : 1,
        individuallyPrice : price,
        price,
        code : value
      }

      handleChangeFormValue(`cart[0]`,info)
    }

  }
  onSubmit(value){
    let { actions : { handleCreateCollaborationStoreCart, handleCloseContentsLayer, handleOpenAlertLayer, handleOpenLoadingLayer, handleCloseLoadingLayer  }, options : { productCodeList, templateCodeList, productCode, market }} = this.props;
    let { color, size } = this.state;
    let { cart } = value;


    let params = [];

    if(market === "revinci"){
      params = cart.reduce((target,item,idx)=>{

        target.push({
          productCode : item.code ,
          templateCode : templateCodeList[item.code],
          quantity : item.quantity
        })

        return target;
      },[]);
    }

    if(market === "bdatbdon"){

      params = cart.reduce((target,item,idx)=>{
        target.push({
          projectCode : productCodeList[item.code],
          eventType : "B",
          sizeInfo : item.size,
          quantity : item.quantity
        })

        return target;
      },[]);
    }

    this.setState({
      isSend : (market === "bdatbdon")
    },()=>{
      handleCreateCollaborationStoreCart(params).then(() => {
        this.setState({
          isSend : false
        },()=>{
          handleOpenAlertLayer({
            description: '장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?',
            confirm: true,
            callback: (confirmed) => {
              confirmed ?
                Promise.all([
                  goMemberCart()
                ]).then(() => {
                  handleCloseContentsLayer();
                })
                :
                handleCloseContentsLayer();
            }
          });
        })

      }).catch((error) => {
        handleOpenAlertLayer({
          description: error
        });
      });
    })



  }

  onProductAddList(event, value, item){
    let updateData = {};
    let { id } = item;

    if(id === "size"){
      updateData = {
        size : value
      }
    }

    if(id === "color"){
      updateData = {
        color : value
      }
    }

    if(id === "ecobag"){
      updateData = {
        echobag : value
      }
    }

    if(id === "pouch"){
      updateData = {
        pouch : value
      }
    }

    if(id === "calendar"){
      updateData = {
        calendar : value
      }
    }

    this.setState(updateData,this.onAddList);
  }

  onAddCart(info){
    let { states: { currentForm : { values : { cart } } }, actions : { handleChangeFormValue }} = this.props;

    let findItem = cart.findIndex(item => item.code === info.code);

    if(findItem !== -1){
      let quantity = cart[findItem].quantity;
      if(quantity < 999){
        handleChangeFormValue(`cart[${findItem}].quantity`,quantity + 1);
        handleChangeFormValue(`cart[${findItem}].price`,(cart[findItem].individuallyPrice * quantity));
      }

    }else{
      handleChangeFormValue(`cart[${cart.length}]`,info)
    }

  }

  onAddList(){
    let { states: { currentForm : { values : { item : { products } } } }, options : { product: { packages, items, price, productCode, productName }, productCodeList, market }} = this.props;
    let { echobag, pouch, cart, calendar, size, color } = this.state;
    let key = products.join("");

    let info = {
      title :items.reduce((target,item,idx)=>{
        let label = item.label;
        let id = item.id;

        if(item.products.length > 0){
          let labelFind = item.products.find(item => item.value === products[idx]);
          if(labelFind){
            label += (" "+labelFind.label)
          }

          if(id === "calendar" && labelFind){
            label = labelFind.label+"(gift)"
          }

        }

        if(item.products.length === 0 && (id.indexOf("color_") !== -1)){
          label = `${item.label} ${item.description}`
        }

        (id.indexOf("_print") === -1) && target.push(label);
        return target;
      },[]).join(" / "),
      quantity : 1,
      individuallyPrice : price,
      price,
      code : (market === "bdatbdon") ? (productCode+"#"+size+"#"+color) : productCodeList[key] || key
    }

    switch (packages){
      case "B":
        if(echobag && pouch){
          key += packages;
          info.code = productCodeList[key] || key;
          this.onAddCart(info);
        }
        break;

      case "ACS":
        if(pouch){
          key += packages;
          info.code = productCodeList[key] || key;
          this.onAddCart(info);
        }
        break;

      case "CALENDARPACK":
        if(calendar){
          this.onAddCart(info);
        }
        break;

      case "apparel":
        if(size && color){
          info.size = size;
          this.onAddCart(info);
        }
        break;

      case "apparelSolo":
        if(size){
          let colorCode = "";
          if(productCode === "702001012001" && productName === "On my way"){
            colorCode = "534039";
          }

          if(productCode === "702001010001"){
            colorCode = (productName === "DO As YOU Please") ? "534007" : "534002";
          }

          info.code = (market === "bdatbdon") ? (productCode+"#"+size+"#"+colorCode) : productCodeList[key] || key;
          info.size = size;

          this.onAddCart(info);
        }
        break;

      default:
        if(!packages){
          this.onAddCart(info);
        }
        break;
    }

  }

  changeCartData(findItem){
    let { actions : { handleChangeFormValue }} = this.props;
    let { cart } = this.state;

    let temp = Object.assign([], cart);
    temp[findItem].quantity += 1;
    temp[findItem].price += temp[findItem].individuallyPrice;

    handleChangeFormValue(`cart[${findItem}]`,temp[findItem].quantity);
  }

  onChangeQuantity(event, value, item) {
    let { states: { currentForm : { values : { cart } } }, actions : { handleChangeFormValue } } = this.props;

    let findItem = cart.findIndex(cartItem => cartItem.code === item.code);
    let individuallyPrice = 0;
    let quantity = 1;

    if(findItem !== -1){
      individuallyPrice = cart[findItem].individuallyPrice;
      quantity = value;

      handleChangeFormValue(`cart[${findItem}].price`,(individuallyPrice * quantity));
    }
  }


  onDeleteCart(e){
    let { states: { currentForm : { values : { cart } } }, actions : { handleChangeFormValue }, reset } = this.props;
    let code = getDatasetByName(e.currentTarget, 'code');
    let findItem = cart.findIndex(item => item.code === code);

    let temp = Object.assign([], cart);
    temp.splice(findItem, 1);

    if(temp.length === 0){
      this.setState({
        ecobag : null,
        pouch : null,
        calendar : null,
        color : null,
        size : null,
        cart : []
      },()=>{
        reset()
      })
    }else{
      handleChangeFormValue(`cart`,temp);
    }

  }

  render() {
    const info = this.productInfp;
    const { handleSubmit, states : { currentForm } } = this.props;
    const { product, market } = this.props.options;
    const { items } = product;
    const cart = currentForm ? currentForm.values.cart : [];
    const cdn = this.cdn;
    const contents  = this.props.options.product.contents;
    const popHeight = this.popHeight <= 754 ? this.popHeight : 754;
    const checkScreenHeight = popHeight <= 754 ? 0.265 : 0.35 ;
    const maxHeight = css`max-height: ${(popHeight * checkScreenHeight)-20}px !important;`;
    const itemListCss = css`
      ${cart.length > 0 && 'border-top:1px solid #eeeeee'};
      ${maxHeight};
    `;
    const isSend = this.state.isSend;

    //this.popHeight
    //28%

		return isSend ?
      <Loading />
        :
      (
			<HOPE_MARKEY.main css={this.mainCSS}>
{/*        <HOPE_MARKEY.title>
          <span>
            {info.title}
          </span>
          <div>
            <button type="button"
                    className="icon icon-close-w-s-1414 close"
                    onClick={this.onClickClose}/>
          </div>

        </HOPE_MARKEY.title>*/}
        <button type="button"
                className="icon icon-close-w-s-1414 close"
                onClick={this.onClickClose}/>

        <HOPE_MARKEY.contents  css={this.contentsHeight}>
          <PRODUCT_CONTENTS_INFORMATION.container>
            {
              contents &&

              (
                  (market === "revinci") ? contents.reduce((target,item,idx)=>{
                    const {
                      image,
                      title,
                      description,
                      line,
                      soloDescription,
                      multipleImage
                    } = item;

                    image && target.push(
                      <img src={addDomain(cdn,image)} alt=""/>
                    );

                    title && target.push(
                      <span className={"title"} dangerouslySetInnerHTML={{ __html: title }}/>
                    )

                    description && target.push(
                      <span className={"description"} dangerouslySetInnerHTML={{ __html: description }}/>
                    )

                    line && target.push(
                      <div className={"line"}/>
                    )

                    soloDescription && target.push(
                      <span className={"soloDescription"} dangerouslySetInnerHTML={{ __html: soloDescription }}/>
                    )

                    multipleImage && target.push(
                      multipleImage.reduce((target,item2,idx)=>{
                        target.push(<img className={"multipleImage"} src={addDomain(cdn,item2)} alt=""/>);
                        return target;
                      },[])
                    )
                    return target;
                },[])
                :
                (
                  <div className={"bdbd"}>
                    {/*logoImage,title,description,images, contentsLV*/}
                    <img src={addDomain(cdn, contents[0].logoImage+"@2x.png")} alt={""}/>
                    <span dangerouslySetInnerHTML={{ __html: contents[0].title }}/>
                    <span dangerouslySetInnerHTML={{ __html: contents[0].description }}/>
                    {
                      (contents[0].images).reduce((target,item,idx)=>{

                        idx < 4 && target.push(
                          <img className={!item && 'clear'} src={addDomain(cdn, item+"@2x.jpg")} alt={""}/>
                        )

                        return target;
                      },[])
                    }

                    <div className={"line"}/>

                    {
                      contents[0].contentsLV.reduce((target,item,idx)=>{
                        const { label, description } = item;

                        target.push(
                          <img className={`subImage${idx}`} src={addDomain(cdn, contents[0].images[idx+4]+"@2x.jpg")} alt={""}/>
                        );

                        target.push(
                          <span className={"subTitle"} dangerouslySetInnerHTML={{ __html: label }}/>
                        );

                        description && target.push(
                          <span className={"subDescription"}  dangerouslySetInnerHTML={{ __html: description }}/>
                        );

                        return target;
                      },[])
                    }

                    <div className={"line"}/>

                    <div className={"commonEvent"}>
                      <span>Event</span>
                      <img src={addDomain(cdn, "bdbd-event-01@2x.jpg")} alt={""}/>
                      <span>
                        bdatbdon’t 상품을 구매해주신 모든 분들께 낱장 스티커 3종을 선물로 드려요.<br/>
                        (6종 중 랜덤으로 발송)
                      </span>
                      <img src={addDomain(cdn, "bdbd-event-02@2x.jpg")} alt={""}/>
                      <span>
                        bdatbdon’t 상품을 5만원 이상구매해주신 모든 분들께 키링 1종을 선물로 드려요.<br/>
                        (2종 중 랜덤으로 발송)
                      </span>
                    </div>

                    <div className={"sizeInfo"}>
                      {
                        contents[1].reduce((target,item,idx)=>{

                          target.push(
                            <div className={idx === 0 ? `sizeCaption` : `sizeRow`}>
                              {
                                item.reduce((target2,item2,idx2)=>{

                                  target2.push(
                                    <div>{item2}</div>
                                  )

                                  return target2;
                                },[])
                              }
                            </div>
                          );



                          return target;
                        },[])
                      }
                    </div>



                  </div>
                )
            )
          }


          </PRODUCT_CONTENTS_INFORMATION.container>

          <PRODUCT_CONTENTS_POPCART.container>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <PRODUCT_CONTENTS_POPCART.map>
                <PRODUCT_CONTENTS_POPCART.options>
                  {
                    (product.packages && (product.packages !== "CALENDARPACK")) && (
                      <span className={"optionTitle"}  dangerouslySetInnerHTML={{ __html: `[${product.productType}]<br/>${product.productName}` }}/>
                    )
                  }

                  {
                    product.description && (
                      <span className={"optionDescription"}>{product.description}</span>
                    )
                  }

                  {
                    items.reduce((target,item,idx)=>{
                      let label = item.label;
                      let code = item.id;
                      let isMultiView = item.products.length > 1;
                      let isSoloView = item.products.length === 1;

                      let isGift = (item.id === "btn" || item.id === "ac" || item.id === "sticker" || item.id === "heat_print" || item.id === "digital_print");
                      if((item.id).indexOf("color") !== -1){
                        isGift = true;
                      }

                      ((item.id).indexOf("_print") === -1) && target.push(
                        <div>
                          {
                            (isMultiView || isGift) ?
                              <span className={"labelTitle"} dangerouslySetInnerHTML={{ __html: label }}/>
                            :
                              <span dangerouslySetInnerHTML={{ __html: label }}/>
                          }

                          {isMultiView && <Field
                            name={`item.products[${idx}]`}
                            className="box"
                            placeholder={`${label} 디자인을 선택해 주세요.`}
                            options={item.products}
                            onChange={(event, value) => this.onProductAddList(event, value, item)}
                            component={SelectField}
                            validate={[Validate.required]}
                          />}
                          {
                            isSoloView && (
                              item.products[0].description ?
                              <dl>
                                <dt dangerouslySetInnerHTML={{ __html: item.products[0].description.title }}/>
                                {(item.products[0].description.contents).reduce((target,item2,idx)=>{
                                  target.push(<dd dangerouslySetInnerHTML={{ __html: item2 }}/>)
                                  return target;
                                },[])}
                              </dl>
                                :
                                item.products[0].giftList.reduce((target,item2,idx)=>{
                                  target.push(<span className={"title"}>{item2.title}</span>);
                                  target.push(<br/>);
                                  target.push(<span className={"description"}>{item2.description}</span>);
                                  return target;
                                },[])
                            )

                          }

                          {
                            isGift && (
                              <span className={"description"} dangerouslySetInnerHTML={{ __html: item.description }}/>
                            )
                          }
                        </div>
                      )

                      return target;
                    },[])
                  }
                </PRODUCT_CONTENTS_POPCART.options>

                <PRODUCT_CONTENTS_POPCART.itemList css={maxHeight}>
                  <div css={itemListCss}>
                    {
                      (cart.length > 0) &&
                        cart.reduce((target,item,idx)=>{
                          let soloEcobag = (item.individuallyPrice === 18500) || (item.individuallyPrice === 13500);


                          target.push(
                            <PRODUCT_CONTENTS_POPCART.item>
                              <span>{item.title}</span>
                              <div>
                                <Field name={`cart[${idx}].quantity`}
                                       maxLength={3}
                                       value={123}
                                       onChange={(event, value) => this.onChangeQuantity(event, value, item)}
                                       component={InputQuantityField}
                                       validate={[ Validate.required, Validate.number, Validate.minValue1 ]}
                                       normalize={Normalize.upperValue()}/>
                                <div>
                                  <span>
                                    {React.cloneElement(<CountUp/>, {
                                      start: 0,
                                      end: Number(item.price),
                                      useEasing: true,
                                      useGrouping: true,
                                      duration: .3,
                                      separator: ',',
                                      suffix: '원'
                                    })}
                                  </span>
                                  {!soloEcobag && <button type="button" className="icon icon-del-1515" data-code={item.code}
                                           onClick={this.onDeleteCart}/>}
                                </div>
                              </div>

                            </PRODUCT_CONTENTS_POPCART.item>
                          );
                          return target;
                        },[])
/*                    :
                      <PRODUCT_CONTENTS_POPCART.noCardItem>
                        <span>
                        추가된 상품이 없습니다.
                        </span>
                      </PRODUCT_CONTENTS_POPCART.noCardItem>*/
                    }
                  </div>
                </PRODUCT_CONTENTS_POPCART.itemList>

                <PRODUCT_CONTENTS_POPCART.bottom>
                  <div className={"line"}/>
                  <PRODUCT_CONTENTS_POPCART.totalPrice>
                    <div>
                      <span>총 수량 {
                        cart.reduce((target,item,idx)=>{
                          target += item.quantity;
                          return target;
                        },0)
                      }개</span>
                    </div>
                    <div>
                      <span>결제 예정 금액</span>
                      <span>
                        {React.cloneElement(<CountUp/>, {
                          start: 0,
                          end: cart.reduce((target,item,idx)=>{
                            target += item.price;
                            return target;
                          },0),
                          useEasing: true,
                          useGrouping: true,
                          duration: .3,
                          separator: ',',
                          suffix: '원'
                        })}

                      </span>
                    </div>

                  </PRODUCT_CONTENTS_POPCART.totalPrice>
                  <PRODUCT_CONTENTS_POPCART.btnCart type="submit">
                    장바구니 담기
                  </PRODUCT_CONTENTS_POPCART.btnCart>
                </PRODUCT_CONTENTS_POPCART.bottom>


              </PRODUCT_CONTENTS_POPCART.map>
            </form>
          </PRODUCT_CONTENTS_POPCART.container>

        </HOPE_MARKEY.contents>


			</HOPE_MARKEY.main>
		)
	}
}
const mapStateToProps = (state, ownerProps) => {
	return {
    states :  {
      currentForm: state.form[ formName ],
      ui : state.ui
    },
    initialValues: {
      cart: []
    }
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
    actions: {
      handleCloseContentsLayer: () => dispatch(ActionLayer.closeContentsLayer()),
      handleCreateCollaborationStoreCart: (data) => dispatch(ActionEvents.createCollaborationStoreCart(data)),
      handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),
      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
      handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),
      handleOpenLoadingLayer: (options) => dispatch(ActionLayer.openLoadingLayer()),
      handleCloseLoadingLayer: () => dispatch(ActionLayer.closeLoadingLayer()),
    }
	}
};

const formName = "form-hopeMarket";

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: formName
})(HopeMarket));
