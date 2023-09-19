import React from 'react';
import { connect } from 'react-redux';

import styled from "styled-components";

import {
  goLink
} from "utils/url";

const DeliveryWarringWrap = styled.div`
  width: 100%;
  height: 100px;
  cursor: default;
  > div{
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    > img{
      position: absolute;
      left:20px;
      top:10px;
      width: 80px;
      height: 80px;
    }

    > div{
      position: absolute;
      left:110px;
      top:20px;
      display: inline-block;

      > span{
        display: block;
        color:#191919;
      }

      > span:nth-child(1){
        font-family: "YoonGothicPro760", "dotum", "돋움", "Arial", "sans-serif";
        font-size:16px;
      }

      > span:nth-child(2){
        font-family: "YoonGothicPro740", "dotum", "돋움", "Arial", "sans-serif";
        font-size:12px;
        margin-top:11px;
        line-height: 1.65;
      }

    }



  }
`;

const BtnDeliveryWarring  = styled.button`
  position: absolute;
  right:20px;
  top:32px;
  width: 100px;
  height: 36px;
  border-radius: 18px;
  border: solid 1px #191919;
  color:#191919;
`;

class ShippingGuide extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			popupContents : [
				{ product : '명함 > 소프트용지', size : '전사이즈', quantity : '200' },
        { product : '명함 > 박, 형압 효과', size : '전사이즈', quantity : '20' },
        { product : '전단 > 소프트,<br/>매트 용지', size : '전사이즈', quantity : '200' },
        { product : '브로슈어 > 소프트,<br/>매트 용지', size : '전사이즈', quantity : '300' },
        { product : '메뉴판> 소프트,<br/>매트 용지', size : '전사이즈', quantity : '500' },
        { product : '포스트카드> 소프트,<br/>매트 용지', size : '전사이즈', quantity : '500' },
        { product : '쿠폰> 소프트,<br/>매트 용지', size : '전사이즈', quantity : '1000' },
/*				{ product : '어패럴', size : '전사이즈', quantity : '100' },*/
				{ product : '낱장스티커', size : '전사이즈', quantity : '5000' },
        { product : '아크릴 사인', size : '전사이즈', quantity : '40' },
				{ product : '메탈 사인', size : 'A2, A1, B2', quantity : '80' },
				{ product : '원목 사인', size : 'A2, A1, B2', quantity : '80' },
				{ product : '보드 사인', size : 'A2, A1, B2', quantity : '80' },
				{ product : '포스터', size : 'A1', quantity : '100' },
				{ product : '스탠다드 배너,<br/>양면 배너, 롤업 배너', size : '전사이즈', quantity : '100' },
				{ product : '미니배너', size : '단일사이즈', quantity : '400' },
				{ product : '현수막<br/>(폭 1500mm 이하)', size : '길이 1M 이하<br/>길이 2M 이하<br/>길이 3M 이하<br/>길이 3M 초과', quantity : '200<br/>150<br/>100<br/>75' },
				{ product : '대형현수막<br/>(폭 1500mm초과)', size : '길이 무관', quantity : '3' }
			]
		}

		this.onClickClose = this.onClickClose.bind(this);
    this.goBoard = this.goBoard.bind(this);
  }


  goBoard() {
    let { actions: { handleCloseContentsLayer } } = this.props;
    goLink('/notice?view=0');
    handleCloseContentsLayer();
  }

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	render() {
		let { states : { ui : { view : { height } } }, options: {category} } = this.props;
		let { popupContents } = this.state;
    let isCalendarDesk = category && category.match(/calendar-desk/i);
    let isEnvelope = !!String(category).match(/envelope/i);
    let isShoppingBag = !!String(category).match(/shoppingbag/i);
    let isApparel = !!String(category).match(/apparel/i);
		let tableHeight = (isCalendarDesk || isEnvelope || isShoppingBag || isApparel)  ? 124 : (height >= 329 ? (height * 0.8) - 229 : (height * 0.8));


		return (
			<div className="shipping-guide-layer-wrap popup">
				<div className="container">
					<div className="top">
						<h2>출고 및 배송 안내</h2>
					</div>
          {
            isCalendarDesk && (
              <div className="middle">
                <div className="inner">

                  <div className="top calendarNoticeWrap">
                    <h3>출고안내</h3>
                    {/*<span className="attention">*/}
                    {/*  성수기를 맞아 주문량이 증가하여, 상품 제작 기간이 평소보다 조금 더 소요될 수 있습니다.*/}
                    {/*</span>*/}
                  </div>

                  <div className="middle calendarMiddle">
                    <span>
                      200부 이하 : 2~3영업일 이내 출고
                    </span>
                    <span>
                      500부 이상 또는 효과(삼각대 박 후가공) 선택 시 : <em>6~8영업일</em> 이내 출고
                    </span>
                    <span>
                      주문 폭주 등에 의한 <em>제작 지연 및 오류 주문</em> 건의 경우 출고가 지연 될 수 있습니다.<br/>
                      <span>(출고란? 포장이 완료 되어 택배사에 전달되는 시점을 이야기 합니다.)</span>
                    </span>
                  </div>

                  <div className="top calendarNoticeTwoWrap">
                    <h3>배송안내</h3>
                  </div>

                  <div className="middle calendarMiddle">
                    <span>
                      택배 배송, 영업일 기준 1~2일 소요
                    </span>
                    <span>
                      배송료 : 3,000원(5만원 이상 주문 시 무료)
                    </span>
                    <span>
                      주말/공휴일이 포함된 경우 휴일 기간만큼 출고/배송 기간이 지연될 수 있습니다.
                    </span>
                  </div>

                  <div className="bottom calendarBottom" style={{height: `${tableHeight}px`}}>
                    <div>
                      <div className="btnMap">
                        <button type="button" className="btn-blue-medium" onClick={this.onClickClose}>확인</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            )
          }

          {
            isShoppingBag && (
              <div className="middle">
                <div className="inner">

                  <div className="top calendarNoticeWrap">
                    <h3>출고안내</h3>
                    {/*<span className="attention">*/}
                    {/*  성수기를 맞아 주문량이 증가하여, 상품 제작 기간이 평소보다 조금 더 소요될 수 있습니다.*/}
                    {/*</span>*/}
                  </div>

                  <div className="middle calendarMiddle">
										<span>
                      100장 이하 11~13 영업일 이내 출고<br/>
                      200장 이상 17~21 영업일 이내 출고
										</span>
                    <span>
                      주문 폭주 등에 의한 <em>제작 지연 및 오류 주문</em> 건의 경우 출고가 지연 될 수 있습니다.<br/><span>(출고란? 포장이 완료 되어 택배사에 전달되는 시점을 이야기 합니다.)</span>
										</span>
                  </div>

                  <div className="top calendarNoticeTwoWrap">
                    <h3>배송안내</h3>
                  </div>

                  <div className="middle calendarMiddle">
                    <span>
                      택배 배송, 영업일 기준 1~2일 소요
                    </span>
                    <span>
                      배송료 : 3,000원(5만원 이상 주문 시 무료)
                    </span>
                    <span>
                      주말/공휴일이 포함된 경우 휴일 기간만큼 출고/배송 기간이 지연될 수 있습니다.
                    </span>
                  </div>

                  <div className="bottom calendarBottom" style={{height: `${tableHeight}px`}}>
                    <div>
                      <div className="btnMap">
                        <button type="button" className="btn-blue-medium" onClick={this.onClickClose}>확인</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )
          }

          {
            isEnvelope && (
              <div className="middle">
                <div className="inner">

                  <div className="top calendarNoticeWrap">
                    <h3>출고안내</h3>
                    {/*<span className="attention">*/}
                    {/*  성수기를 맞아 주문량이 증가하여, 상품 제작 기간이 평소보다 조금 더 소요될 수 있습니다.*/}
                    {/*</span>*/}
                  </div>

                  <div className="middle calendarMiddle">
										<span>
                      10 영업일 이내 출고 <em>(대봉투/중봉투/소봉투: 6-7 영업일 이내 출고)</em>
										</span>
                    <span>
											주문 폭주 등에 의한 <em>제작 지연 및 오류 주문</em> 건의 경우 출고가 지연 될 수 있습니다.<br/><span>(출고란? 포장이 완료 되어 택배사에 전달되는 시점을 이야기 합니다.)</span>
										</span>
                  </div>

                  <div className="top calendarNoticeTwoWrap">
                    <h3>배송안내</h3>
                  </div>

                  <div className="middle calendarMiddle">
                    <span>
                      택배 배송, 영업일 기준 1~2일 소요
                    </span>
                    <span>
                      배송료 : 3,000원(5만원 이상 주문 시 무료)
                    </span>
                    <span>
                      주말/공휴일이 포함된 경우 휴일 기간만큼 출고/배송 기간이 지연될 수 있습니다.
                    </span>
                  </div>

                  <div className="bottom calendarBottom" style={{height: `${tableHeight}px`}}>
                    <div>
                      <div className="btnMap">
                        <button type="button" className="btn-blue-medium" onClick={this.onClickClose}>확인</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            )
          }

          {
            isApparel && (
              <div className="middle">
                <div className="inner">

                  <div className="top calendarNoticeWrap">
                    <h3>출고안내</h3>
                    {/*<span className="attention">*/}
                    {/*  성수기를 맞아 주문량이 증가하여, 상품 제작 기간이 평소보다 조금 더 소요될 수 있습니다.*/}
                    {/*</span>*/}
                  </div>

                  <div className="middle calendarMiddle">
										<span>
                      3 영업일 이내 출고
										</span>
                    <span>
											주문 폭주 등에 의한 <em>제작 지연 및 오류 주문</em> 건의 경우 출고가 지연 될 수 있습니다.<br/><span>(출고란? 포장이 완료 되어 택배사에 전달되는 시점을 이야기 합니다.)</span>
										</span>
                  </div>

                  <div className="top calendarNoticeTwoWrap">
                    <h3>배송안내</h3>
                  </div>

                  <div className="middle calendarMiddle">
                    <span>
                      택배 배송, 영업일 기준 1~2일 소요
                    </span>
                    <span>
                      배송료 : 3,000원(5만원 이상 주문 시 무료)
                    </span>
                    <span>
                      주말/공휴일이 포함된 경우 휴일 기간만큼 출고/배송 기간이 지연될 수 있습니다.
                    </span>
                  </div>

                  <div className="bottom calendarBottom" style={{height: `${tableHeight}px`}}>
                    <div>
                      <div className="btnMap">
                        <button type="button" className="btn-blue-medium" onClick={this.onClickClose}>확인</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            )
          }

          {(!isCalendarDesk && !isEnvelope && !isShoppingBag && !isApparel) && <div className="middle">
            <div className="inner">

              <div className="top">
                <h3>출고안내</h3>
                {/*<span className="attention">*/}
								{/*	성수기를 맞아 주문량이 증가하여, 상품 제작 기간이 평소보다 조금 더 소요될 수 있습니다.*/}
								{/*</span>*/}
              </div>

              <div className="middle">
                <div className="title">
                  예외사항 안내
                </div>
                <span>
									원형 스티커{`>`}소프트 용지(30,40){`>`}무광코팅 1,000매 이상 주문 시 영업일 기준 6일 후 출고되며,  다른 상품과 함께 주문 시 합배송 됩니다.
								</span>
                <span>
									{/*어패럴 날염인쇄]와 [부채]는 각 상품페이지에서 별도의 출고 안내를 확인하세요.*/}
                  [어패럴]은 상품페이지에서 별도의 출고 안내를 확인하세요.
								</span>
                <span>
                  아래 상품의 경우 <span className="bold">기본 제작 기간 2일 소요</span>되며, 1일 가능 수량 초과 시 출고일이 지연될 수 있습니다.
								</span>
                <span>
                  명함{`>`}형압{`>`}고정형의 경우 기본 제작 기간 2일 소요되며 1일 가능 수량 초과 시 출고일이 지연될 수 있습니다
                </span>
                <span>
                  명함{`>`}박, 형압{`>`}자율형의 경우 기본 제작 기간 4일 소요되며 1일 가능 수량 초과시 출고일이 지연될 수 있습니다.
                </span>
              </div>

              <div className="bottom" style={{height: `${tableHeight}px`}}>

                <table border={0}>
                  <caption><span className="blind">용지 변경 안내</span></caption>
                  <colgroup>
                    <col style={{width: '120px'}}/>
                    <col style={{width: '120px'}}/>
                  </colgroup>
                  <thead>
                  <tr>
                    <th>상품군</th>
                    <th>사이즈</th>
                    <th>1일 가능 수량</th>
                  </tr>
                  </thead>

                  <tbody>

                  {
                    popupContents &&
                    popupContents.reduce((target, item) => {
                      let {product, size, quantity} = item;


                      target.push(
                        <tr>
                          <td>
                            <span dangerouslySetInnerHTML={{__html: product}}/>
                          </td>
                          <td>
                            <span dangerouslySetInnerHTML={{__html: size}}/>
                          </td>
                          <td>
                            <span dangerouslySetInnerHTML={{__html: quantity}}/>
                          </td>
                        </tr>
                      );


                      return target;
                    }, [])
                  }
                  </tbody>
                </table>

                <div>
									<span>
										주문 폭주 등에 의한 <em>제작 지연 및 오류 주문 건</em>의 경우 출고가 지연 될 수 있습니다.
										<span>(출고란? 포장이 완료 되어 택배사에 전달되는 시점을 이야기 합니다.)</span>
									</span>


                  <dl>
                    <dt>배송안내</dt>
                    <dd>택배 배송, 영업일 기준 1~2일 소요</dd>
                    <dd>배송료 : 3,000원(5만원 이상 주문 시 무료)</dd>
                    <dd>주말/공휴일이 포함된 경우 휴일 기간만큼 출고/배송 기간이 지연될 수 있습니다.</dd>
                  </dl>


                  <div className="btnMap">
                    <button type="button" className="btn-blue-medium" onClick={this.onClickClose}>확인</button>
                  </div>
                </div>


              </div>
            </div>
          </div>}

{/*					<div className="bottom">
						<button type="button" className="btn-blue-medium" onClick={this.onClickClose}>확인</button>
					</div>*/}
				</div>

				<button className="icon icon-close-w-1414 close" onClick={this.onClickClose}/>
			</div>
		)
	}
}
const mapStateToProps = (state, ownerProps) => {
	return {

	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {

	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ShippingGuide);
