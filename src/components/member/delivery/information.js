import React from "react";

import { addDomain } from "utils/url";

import Banner from "components/common/banner";
import Attention from "components/common/attention";

export default class DeliveryInformation extends React.Component {
  constructor(...args) {
    super(...args);

    this.attentions = [
      {
        title: "주문/배송 안내",
        children: [
          { value: "주문내역에 대해 메일 및 카카오 알림톡을 발송해드립니다." },
          { value: "무통장입금의 경우 주문한 날부터 7일 이내 입금확인이 되어야 합니다." },
          { value: "7일이 경과한 경우 주문이 취소되며, 상품은 다시 장바구니에서 확인 가능합니다." },
          { value: "배송조회는 상품이 출고 된 날의 익일 오전부터 가능합니다." },
          { value: "출고일로부터 2일 경과 후에도 배송조회가 되지 않을 경우, 고객센터(1577-4703)로 연락 부탁드립니다." },
          { value: "상품을 받으신 후 오프린트미의 리뷰를 작성해 주세요." },
          { isDotBlank: true, value: "리뷰를 작성해주신 모든 분들께 할인 쿠폰이 발급됩니다." },
          { value: "리뷰 할인 쿠폰은 주문번호 한 개당 하나의 쿠폰만 발급하며, 리뷰 작성 할인 쿠폰으로 구매 후 재 리뷰 작성 시에는 쿠폰이 발급되지 않습니다." },
        ],
      },
      {
        title: "증빙서류 발급 안내",
        children: [
          { isDotBlank: true, value: "[결제영수증 / 매출전표 출력]" },
          { value: "결제영수증과 매출전표(카드 영수증)는 결제와 동시에 발급되며, 출력 가능합니다." },
          { value: "결제영수증은 소득공제용 영수증 및 매입 세금계산서로 활용할 수 없으며, 결제가 완료되었음을 증명하는 용도로만 활용 가능합니다." },
          { value: "결제영수증은 지출 증빙 효력이 없습니다." },
          { isDotBlank: true, value: "[현금영수증 / 세금계산서 발행]" },
          { value: "무통장입금과 실시간 계좌이체 이용 시 신청 가능하며, 해당월(결제일 기준)의 말일까지 발행 가능합니다." },
          { value: "발행은 주문 시 신청된 정보로 발행되며, 신청 후 2~3일 후에 국세청 사이트에서 확인 가능합니다." },
          { value: "현금영수증과 세금계산서는 둘 중 한 가지만 발급받을 수 있으며, 현금영수증을 먼저 신청한 경우 세금계산서는 발급할 수 없습니다." },
          { value: "무통장 입금의 경우, 세금계산서와 제출서류 다운로드는 결제완료 전에도 신청 및 다운로드가 가능합니다." },
          { value: "상품 금액 수정 요청 및 추가로 필요한 문서가 있으실 경우, 고객센터(1577-4703)로 문의해 주세요." },
          { value: "휴대폰 결제는 증빙서류 발급에서 제외됩니다." },
        ],
      },
    ];
  }

  render() {
    return (
      <div>
        <Banner />

        <div>
          {this.attentions.map((item, index) =>
            React.cloneElement(<Attention />, {
              value: item,
            }),
          )}
        </div>
      </div>
    );
  }
}
