import React from "react";

import DeliveryProductItem from "./product-item";

export default class DeliveryProduct extends React.Component {
  render() {
    let { states, items, actions } = this.props;

    return (
      <div className="delivery-product-wrap">
        <span className="tit">
          <span className="icon icon-noti-1515" />
          <span className="txt">주문 취소는 결제 완료 후 1시간 이내에 [주문취소] 버튼을 이용해 가능합니다.</span>
        </span>

        <table border={0}>
          <caption>
            <span className="blind">주문내역 리스트</span>
          </caption>
          <colgroup>
            <col style={{ width: "200px" }} />
            <col style={{ width: "210px" }} />
            <col style={{ width: "396px" }} />
            <col style={{ width: "130px" }} />
            <col style={{ width: "130px" }} />
            <col style={{ width: "74px" }} />
          </colgroup>
          <thead>
            <tr>
              <th>주문일/주문번호</th>
              <th />
              <th className="align">상품정보</th>
              <th>수량/금액</th>
              <th>진행상태</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            {items.length > 0 ? (
              items.map((item) => {
                let { approvalNo, cashAmount, isAllowCancel, isInvoiceIssue, orderCode, orderDetailDataList, pointAmount, receiptTranslationNo, receiptYN, settlementMethod, settlementTransactionId, registrationDate, paymentDate, npayPointAmount } = item;

                let rowSpan = orderDetailDataList.length;

                return orderDetailDataList.reduce((target, detail, index) => {
                  target.push(
                    React.cloneElement(<DeliveryProductItem />, {
                      states,
                      actions,
                      isFirst: index === 0,
                      rowSpan,
                      value: {
                        common: {
                          approvalNo,
                          cashAmount,
                          isAllowCancel,
                          isInvoiceIssue,
                          orderCode,
                          pointAmount,
                          receiptTranslationNo,
                          receiptYN,
                          settlementMethod,
                          settlementTransactionId,
                          registrationDate,
                          paymentDate,
                          npayPointAmount,
                        },
                        detail,
                      },
                    }),
                  );

                  return target;
                }, []);
              })
            ) : (
              <tr>
                <td colSpan={6} className="nothing">
                  주문한 내역이 없습니다.
                  <br />
                  이전 구매내역은 기간별 조회를 통해 확인 가능합니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
