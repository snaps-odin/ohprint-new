import React from 'react';

import { LogTypes } from 'constants/index';
import { goHome, goMemberDelivery, goMemberCart } from 'utils/url';
import { getDeepValue } from 'utils/json';
import { addDomain } from 'utils/url';
import { purchase } from 'utils/kakao';

import MemberStep from 'components/member/common/step';
import Banner from 'components/common/banner';

import { dataLayerTranscation } from 'configs/google-analytics/ga';

import { criteoPurchase } from 'utils/criteo';
import {dataLayerBigInCartPurchase} from "../../configs/google-analytics/ga";
import {convertCategory} from "../../configs/google-analytics/common";
import {gtmV4_purchase} from "../../configs/google-analytics/ga-v4";

export default class Finish extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			data: null
		};

		this.onClickHome = this.onClickHome.bind(this);
		this.onClickDelivery = this.onClickDelivery.bind(this);
		this.onClickCart = this.onClickCart.bind(this);
	}

	onClickHome(event) {
		goHome();
	}

	onClickDelivery(event) {
		goMemberDelivery();
	}

	onClickCart(event) {
		goMemberCart();
	}

	componentDidMount() {
		let { actions: { handleRequestOrderHistoryByOrderCode, handleChangeLogConversion, handleGetTemplateSpec, handleGetTemplateOptions }, query: { orderCode }, success, states: { order: { paymentMethods } } } = this.props;

		success
			?
			Promise.all([
				handleRequestOrderHistoryByOrderCode(orderCode)
			]).then(result => {
				let { orderDetailList,settlementAmount, orderUseCouponList,orderCode } = result[0];
				let itemInfo = {
					total_quantity: (orderDetailList ? orderDetailList.length : 0), // 주문 내 상품 개수(optional)
					total_price: settlementAmount,  // 주문 총 가격(optional)
					currency: "KRW",     // 주문 가격의 화폐 단위(optional, 기본 값은 KRW)
					products: orderDetailList.reduce((target,item,idx) => {
						target.push(
							{ name: item[ 'productName' ], quantity: item[ 'quantity' ], price: item[ 'amount' ]}
						);
						return target;
					},[])
				};

				handleChangeLogConversion(LogTypes.PAYMENT, result[ 0 ]);










				purchase(itemInfo);

        criteoPurchase(orderDetailList,orderCode);

        if((result && result.length > 0) && paymentMethods) {
          dataLayerTranscation(result[0], handleGetTemplateSpec, paymentMethods);

          let products = ((result[0].orderDetailList)).reduce((target2, value, idx2)=>{
            let options = handleGetTemplateSpec(value).reduce((target,hg, idx)=>{
              target.push(hg.value)
              return target;
            },[]);
            target2.push({
              id : convertCategory(value.productGroupCode),
              name : value.productName,
              price : value.settlementAmount,
              quantity : value.quantity,
              brand : "",
              thumbnail : addDomain(value.thumbnailImageUrl || value.templateThumbnailImageUrl) || "",
              category : convertCategory(value.productGroupCode),
              variant : options.filter(option => !!option).length > 0 ?  options.join("::") : "",
            })
            return target2;
          },[]);

          let bigIn = {
            id : result[0].orderCode,
            revenue : result[0].settlementAmount,
            shipping : result[0].deliveryAmount,
            coupon : (result[0].orderUseCouponList || []).reduce((target,coupon,idx)=>{
              target.push(coupon.joinCompany)
              return target;
            },[]),
            products
          }

          if(bigIn.coupon.length  === 0){
            bigIn.coupon = "";
          }else{
            bigIn.coupon = bigIn.coupon.join("::")
          }

          dataLayerBigInCartPurchase(bigIn)

          try {
            const gaV4Items = (result[0].orderDetailList || []).reduce((target, item, idx) => {
              let isAccessory = !!(item['productGroupCode'] || '').match(/901/);
              let spec = !isAccessory ? handleGetTemplateSpec(item) : handleGetTemplateOptions(item);
              let valueOfSpec = (spec || []).reduce((target, option) => {
                let {label, value} = option;
                !(label || '').match(/수량/i) && target.push(value);
                return target;
              }, []);

              const couponIdx = result[0].orderUseCouponList.findIndex(c => c.projectCode === item.projectCode);

              target.push({
                item_name: item.productName,
                price: item.amount || 0,
                item_brand: '',
                item_category: item.productGroupName,
                item_category2: '',
                item_category3: item.sizeName,
                item_variant: valueOfSpec.join("/"),
                quantity: 1,
                coupon: couponIdx > -1 ? result[0].orderUseCouponList[couponIdx].joinCompany : "",
                // img_url: item.thumbnailImageUrl,
                // discount_item_coupon: couponIdx > -1 ? result[0].orderUseCouponList[couponIdx].useAmount : "",
              })
              return target;
            }, []);

            gtmV4_purchase(result[0], gaV4Items);
          }
          catch (e) {
            console.log(e)
          }
      }


				this.setState({ data: result[ 0 ] });
			}).catch(error => {
				goHome();
			})
			: this.setState({ data: {} });
	}

	render() {
		let { success, query } = this.props;
		let { data } = this.state;

		let products = getDeepValue(data, 'orderDetailList');

		return data &&
			(
				<div className="container">
					<div className="top">
						<h1>주문 {success ? '완료' : '실패'}</h1>
						<MemberStep step={3}/>
					</div>

					<div className="middle">
						{success
							? (
								<span>
								<h2>
									<strong
										dangerouslySetInnerHTML={{
											__html: `${`${products[ 0 ][ 'productGroupName' ]}${(products[ 0 ][ 'productGroupCode' ] || '').match(/901/) ? '' : ` [${products[ 0 ][ 'projectName' ]}]`}`} ${products.length > 1 ? `외 <span>${products.length - 1}</span>건` : ''}`
										}}/>
									에 대한<br/>
									주문이 정상적으로 처리되었습니다.
								</h2>

								<span>
									주문 취소는 결제완료 후 1시간 이내에만 가능합니다.<br/>
									결제/배송정보 확인과 변경 증빙서류 발급 등은 주문/배송 내역에서 하실 수 있습니다.<br/>
									주문 정보는 고객님의 이메일과 휴대전화로도 전송됩니다.
								</span>

								<span className="order-number">주문 번호 : <span>{query[ 'orderCode' ]}</span></span>
							</span>
							)
							: (
								<span>
									<h2>{String(window.decodeURIComponent(query[ 'message' ] || '')).replace(/\+/g, ' ')}</h2>
								</span>
							)
						}

						<button type="button"
						        className="btn-white-medium home"
						        onClick={this.onClickHome}>홈으로
						</button>

						<button type="button"
						        className="btn-blue-medium"
						        onClick={success ? this.onClickDelivery : this.onClickCart}>{success ? '주문/배송 내역보기' : '장바구니 가기'}
						</button>
					</div>

					{success && (
						<div className="bottom">
							<Banner/>
						</div>
					)}
				</div>
			)
	}
}
