import React from "react";

import Attention from "components/common/attention";

export default class CouponInformation extends React.Component {
  constructor(...args) {
    super(...args);

    this.attentions = [
      [
        {
          title: "쿠폰 이용 안내",
          children: [
            { value: "쿠폰 할인은 이벤트 할인과 중복 적용되지 않습니다" },
            { value: "상품 할인 쿠폰은 판매가를 기준으로 적용됩니다." },
            { value: "모든 쿠폰은 유효기간 이후 자동으로 소멸됩니다." },
            { value: "쿠폰은 분할 사용할 수 없으며, 하나의 상품에만 사용할 수 있습니다. 단, 장바구니 할인 쿠폰은 주문 상품 전체에 적용됩니다" },
            { value: "쿠폰 할인은 상품 할인 - 장바구니 할인 - 배송비 할인 순으로 적용되며, 주문/결제 페이지에서 선택 사용할 수 있습니다." },
            { value: "리뷰 할인 쿠폰은 주문번호 하나당 한 번만 발급되며, 리뷰 할인 쿠폰으로 구매 후 리뷰 작성 시에는 쿠폰이 발급되지 않습니다" },
            { value: "주문취소 시, 사용한 쿠폰의 유효기간이 만료된 경우 재발급 되지 않습니다. 단, 품질 이상으로 인한 반품/환불 시에는 재발급 가능합니다" },
          ],
        },
      ],
      [
        {
          title: "머니 이용 안내",
          children: [{ value: "적립 또는 상품권을 통해 전환된 머니는 현금과 동일하게 실제 상품을 구입하거나, 다른 결제 방식과 혼합하여 사용하실 수 있습니다." }, { value: "이벤트를 통한 적립은 해당 이벤트마다 상이합니다.(이벤트 참여 시 꼭 확인해 주세요.)" }, { value: "유효기간이 경과된 머니는 소멸 예정일에 자동 소멸되므로 소멸 전에 꼭 사용해 주시기 바랍니다." }, { value: "유효기간이 가장 짧은 머니부터 차감되므로 소멸을 최대한 방지할 수 있습니다." }, { value: "오프린트미의 머니는 원칙적으로 환불이 불가능합니다." }],
        },
      ],
      [
        {
          title: "상품권 등록 안내",
          children: [{ value: "상품권 등록내역 및 유효기간은 '머니'탭에서 확인이 가능합니다." }, { value: "상품권을 등록하시면 '머니'로 전환되어 현금과 동일하게 실제 상품을 구입하거나, 다른 결제 방식과 혼합하여 사용하실 수 있습니다." }],
        },
      ],
    ];
  }

  render() {
    let { focus } = this.props;

    return (
      <div>
        {this.attentions[focus].map((item, index) =>
          React.cloneElement(<Attention />, {
            value: item,
          }),
        )}
      </div>
    );
  }
}
