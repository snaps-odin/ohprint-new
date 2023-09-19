import React from "react";

import { jsx } from "@emotion/react";

import { CommonContents, LaundryImg, ShippingExchangeRefund } from "./styles";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import { breaklines } from "utils/string";

import { textBold } from "../styles/common";

class Contents extends React.Component {
  constructor(props) {
    super(props);

    this.cdn = "states" in props && props.states ? props.states.config.url.cdn : "https://cdn.ohprint.me";
    this.cdn += "/Upload/collaboration/";

    this.shippingExchangeRefundMsg = [
      { title: "배송정보", contents: "1) 기본 배송일 : 배송기간은 제작완료 시점부터 1일~3일 정도 소요됩니다.(공휴일 제외)<br/>2) 구매금액 5만원 미만인 경우 배송비 3,000원이 추가됩니다." },
      {
        title: "교환/환불안내",
        contents:
          "" + "1) 교환/반품 신청은 배송완료 후 7일 이내 가능합니다.<br/>" + "2) 단순 변심 반품의 경우 왕복배송비를 차감한 금액이 환불되며, 제품 및 포장 상태가 재판매 가능하여야 합니다. (왕복배송비 : 6,000원)<br/>" + "3) 상품이 불량인 경우에는 배송비를 포함한 전액이 환불됩니다.<br/>" + "4) 출고 이후 환불 요청 시 상품 회수 후 환불 처리 됩니다.<br/>" + "5) 고객님의 책임 있는 사유로 상품등이 멸실 또는 훼손되었거나 상품의 가치가 현저히 감소한 경우 교환 및 환불이 불가합니다.<br/>" + "6) 어패럴(에코백 제외) 제품은 주문제작 상품으로 변심에 의한 반품 및 환불이 불가하므로 사이즈를 신중하게 선택해주세요.<br/>" + "7) 배송 중 파손으로 판단되어 교환을 요청하는 경우, 박스채로 반송해주시길 부탁드립니다.",
      },
      { title: "기타 기준 사항", contents: "" + "1) 구매자가 미성년자인 경우에는 상품 구입 시 법정대리인이 동의하지 아니하면 미성년자 본인 또는 법정대리인이 구매 취소 할 수 있습니다.<br/>" + "2) Hope Market 상품의 경우 '쿠폰' 사용이 불가합니다." },
    ];
  }

  render() {
    let cdn = this.cdn;
    let shippingExchangeRefundMsg = this.shippingExchangeRefundMsg;

    return (
      <CommonContents.container>
        <CommonContents.item>
          <CommonContents.title>세탁 및 관리</CommonContents.title>
          <LaundryImg src={`${cdn}wash-icon@2x.png`} alt={""} />
        </CommonContents.item>

        <CommonContents.item>
          <CommonContents.title>배송/교환/환불</CommonContents.title>
          <ShippingExchangeRefund.container>
            {shippingExchangeRefundMsg.reduce((target, item, idx) => {
              target.push(
                <ShippingExchangeRefund.row>
                  <ShippingExchangeRefund.title css={textBold}>
                    <span dangerouslySetInnerHTML={{ __html: breaklines(item.title) }} />
                  </ShippingExchangeRefund.title>

                  <ShippingExchangeRefund.contents>
                    <span dangerouslySetInnerHTML={{ __html: breaklines(item.contents) }} />
                  </ShippingExchangeRefund.contents>
                </ShippingExchangeRefund.row>,
              );

              return target;
            }, [])}
          </ShippingExchangeRefund.container>
        </CommonContents.item>
      </CommonContents.container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    states: {
      config: state.config,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {},
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Contents);
