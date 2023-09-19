"use strict";

import React from "react";

import { toDate, toCash, toCashKorean } from "utils/format";
import Attention from "components/common/attention";
import { addCdn } from "utils/url";

class Receipt extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      data: null,
    };

    this.printType = "RECEIPT";
  }

  componentDidMount() {
    let {
      location: {
        query: { orderCode },
      },
      actions: { handleRequestOrderPaymentOption, handleRequestOrderHistoryTaxByOrderCode },
    } = this.props;

    Promise.all([handleRequestOrderPaymentOption(), handleRequestOrderHistoryTaxByOrderCode(orderCode, this.printType)])
      .then((result) => {
        this.setState({ data: result[1] });
      })
      .then(() => {
        window.setTimeout(() => {
          document["queryCommandSupported"]("print") ? document.execCommand("print", false, null) : window.print();
        }, 250);
      });
  }

  render() {
    let {
      states: {
        order: { deliveryMethods, paymentMethods },
      },
    } = this.props;
    let { data } = this.state;

    return (
      data && (
        <div className="receipt-wrap">
          <div className="container">
            <h1 className="top">결제영수증</h1>

            <table summary="주문정보" frameBorder={0} cellSpacing={0}>
              <caption>
                <span className="blind">주문정보</span>
              </caption>
              <colgroup>
                <col style={{ width: "160px" }} />
                <col style={{ width: "230px" }} />
                <col style={{ width: "160px" }} />
                <col style={{ width: "230px" }} />
              </colgroup>
              <thead>
                <tr>
                  <td colSpan={4}>주문 정보</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="logo">
                    <th className="logo">
                      <img src={addCdn("/images/icon/svg/logo-9349.svg")} />
                    </th>
                  </th>
                  <td colSpan={3}>
                    대표이사 : 김성경 / 사업자 등록번호 : 104-81-50311
                    <br />
                    사업장소재지 서울특별시 영등포구 여의대로 24, 21층 / 대표전화 : 1577-4703 / FAX : 02-2055-4075
                  </td>
                </tr>
                <tr>
                  <th>주문일</th>
                  <td>{toDate(data["paymentDate"], "YYYY.MM.DD")}</td>
                  <th>주문자</th>
                  <td>{data["orderName"]}</td>
                </tr>
                <tr>
                  <th>주문번호</th>
                  <td>{data["orderCode"]}</td>
                  <th>배송 방법</th>
                  <td>{(deliveryMethods.find((method) => data["deliveryMethod"] === method["value"]) || {})["label"]}</td>
                </tr>
                <tr>
                  <th>결제 금액</th>
                  <td>
                    <em>{toCash(data["settlementAmount"])}원</em>
                  </td>
                  <th>결제 방법</th>
                  <td>{(paymentMethods.find((method) => data["settlementMethod"] === method["value"]) || {})["label"]}</td>
                </tr>
              </tbody>
            </table>

            <table frameBorder={0}>
              <caption>
                <span className="blind">구매정보</span>
              </caption>
              <colgroup>
                <col style={{ width: "500px" }} />
                <col style={{ width: "180px" }} />
                <col style={{ width: "100px" }} />
              </colgroup>
              <thead>
                <tr>
                  <td colSpan={4}>구매 정보</td>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>
                    주문금액 :{" "}
                    {toCash(
                      (data["orderProductList"] || []).reduce((target, product) => {
                        target += product["orderAmount"];

                        return target;
                      }, 0),
                    )}
                    원 + 머니 : {data["userMoney"] ? `-${toCash(data["userMoney"])}` : "0"}원 + 배송비 : {toCash(data["deliveryAmount"])}원
                  </th>
                  <td>총 주문 금액 (부가세 포함)</td>
                  <td className="sum">{toCash(data["settlementAmount"])}원</td>
                </tr>
              </tfoot>
              <tbody className="style">
                <tr>
                  <th>주문상품</th>
                  <th>수량</th>
                  <th>주문금액</th>
                </tr>
                {(data["orderProductList"] || []).reduce((target, product) => {
                  let { productName, quantity, orderAmount } = product;

                  target.push(
                    <tr>
                      <td>{productName}</td>
                      <td>{toCash(quantity)}</td>
                      <td>{toCash(orderAmount)}원</td>
                    </tr>,
                  );

                  return target;
                }, [])}
              </tbody>
            </table>

            {React.cloneElement(<Attention />, {
              value: {
                title: "<span>유의사항</span>",
                children: [{ value: "<em>결제영수증은 소득공제용 영수증 및 매입 세금계산서로 활용할 수 없으며, 결제가 완료되었음을 증명하는 용도로만 활용 가능합니다.</em>" }, { value: "결제영수증은 지출 증빙 효력이 없습니다." }],
              },
            })}
          </div>
        </div>
      )
    );
  }
}

export default Receipt;
