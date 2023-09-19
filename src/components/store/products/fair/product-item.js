

import React from 'react';
import { goLink, goMemberCart } from 'utils/url';
import { getDatasetByName } from 'utils/dom';
import { addDomain, addCdn } from 'utils/url';
import { LayerTypes } from 'constants/index';
import { toCash } from 'utils/format';

export default class creators extends React.Component {

  constructor(...args) {
    super(...args);




    this.onCartSave = this.onCartSave.bind(this);
    this.onProductCartSave = this.onProductCartSave.bind(this);
    this.onCartNoticeLayer = this.onCartNoticeLayer.bind(this);
    this.onSoldoutAlert = this.onSoldoutAlert.bind(this);
  }

  onSoldoutAlert(){
    let { actions: { handleOpenAlertLayer } } = this.props;
    handleOpenAlertLayer({
      description: '해당 상품은 판매가 종료되었습니다.'
    })
  }

  onCartSave(event) {
    let { handleOpenContentsLayer } = this.props.actions;
    let product = this.props.product.pairCreatorProductList;
    let prdCode = getDatasetByName(event.currentTarget, 'prd-code');
    let isApparel = getDatasetByName(event.currentTarget, 'apparel');
    let productInfo = this.props.productInfo;
    let itemCnt = 1;

    //어패럴 사이즈 구분 팝업
    isApparel && handleOpenContentsLayer(LayerTypes.FAIR_APPAREL_SIZE_ALERT, {
      product: product.find((item) => item.baseProjCode === prdCode + ""),
      productInfo : (productInfo[this.props.product.creatorCode]),
      cartSaveLayer : this.onCartNoticeLayer
    });

    !isApparel && this.onProductCartSave(itemCnt,prdCode)

  }

  onCartNoticeLayer(){
    let { handleOpenAlertLayer, handleCloseContentsLayer } = this.props.actions;

    handleOpenAlertLayer({
      description: '선택하신 상품이 장바구니에 담겼습니다.<br/>장바구니로 이동하시겠습니까?',
      confirm: true,
      confirmLabel:"장바구니로 가기",
      cancelLabel:"쇼핑 계속하기",
      callback: (confirmed) => {
        confirmed && Promise.all([
          goMemberCart()
        ]).then(() => {
          handleCloseContentsLayer();
        });
      }
    });
  }


  onProductCartSave(itemCnt,prdCode){
    let { handleCreateStoreFairCart, handleOpenAlertLayer, handleExecuteAfterUserLogin, handleCloseContentsLayer, handleOpenLoadingLayer, handleCloseLoadingLayer } = this.props.actions;
    handleExecuteAfterUserLogin().then(() => {
      Promise.all([
        handleOpenLoadingLayer(),
        handleCreateStoreFairCart(prdCode, itemCnt)
      ]).then((result) => {


        Promise.all([
          handleCloseLoadingLayer()
        ]).then((result) => {
          this.onCartNoticeLayer();
        });

      }).catch((err) => {
        Promise.all([
          handleCloseLoadingLayer()
        ]).then((result) => {
          handleOpenAlertLayer({
            description: err
          })
        });
      }).finally(() => {
        //handleCloseLoadingLayer();
      }).catch(error => {})

    })
  }

	render() {
		let { title, type, updateSections } = this.props;
    let productList = this.props.product.pairCreatorProductList;
    let cdn = this.props.states.config.url.cdn;

		return (
        <section className={`store-fair-overview-product-wrap`} ref={(c) => {this.el = c;}}>
          <h3>크리에이터의 유니크한 상품을 만나보세요.</h3>
          <ul>
            {productList.reduce((target,item,idx) => {
              let options = (item.productOptions) && (item.productOptions).split("|");
              let soldout = (item.sale) === "soldout";

              target.push(
                <li
                  className={type || null}
                  onClick={soldout ? this.onSoldoutAlert : this.onCartSave}
                  data-code={item.creatorCode}
                  data-prd-code={item.baseProjCode}
                  data-apparel={item.apparelCheck}
                >
                  <span className={`top ${type || ''}`}>
                    <div>
                      <img src={addDomain(cdn,item.thumPc || addCdn("/images/store/temp/oif-25-day-product-01@2x.jpg"))} alt=""/>
                      {soldout && (<div className='dimDisabled'>
                        <div/>
                        <img src={addCdn("/images/common/soldout@2x.png")}/>
                      </div>)}
                    </div>


                  </span>

                  <span className={`bottom ${type || ''}`}>
                      <h4 dangerouslySetInnerHTML={{ __html: item.prodName }}/>
                      <span dangerouslySetInnerHTML={{ __html: item.prodDesc }}/>
                      <div className="fairOptions">
                        <dl>
                          {(options || []).reduce((target,option,idx) => {
                            target.push(
                              <dd  dangerouslySetInnerHTML={{ __html: option }}/>
                            )
                            return target;
                          },[])}
                          {(!options) && (<dd>옵션정보가 없습니다.</dd>)}
                          {(<dd>{toCash(item.creatorProdPrice)}원</dd>)}
                        </dl>
                      </div>
                      <button className={soldout ? 'soldoutDisabled' : ''} type="button">{(soldout ? '품절' : '장바구니 담기')}</button>
                    </span>
                </li>
              );
              return target;
            },[])}

          </ul>
        </section>
		)
	}
}
