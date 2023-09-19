"use strict";

import React from "react";

import { toDate, toCash, toCashKorean } from "utils/format";
import { addCdn } from "utils/url";

class Trading extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      data: null,
    };

    this.printType = "TRANSACTION_DETAIL";
  }

  componentDidMount() {
    let {
      location: {
        query: { orderCode },
      },
      actions: { handleRequestOrderHistoryTaxByOrderCode },
    } = this.props;

    handleRequestOrderHistoryTaxByOrderCode(orderCode, this.printType)
      .then((result) => {
        this.setState({ data: result });
      })
      .then(() => {
        window.setTimeout(() => {
          document["queryCommandSupported"]("print") ? document.execCommand("print", false, null) : window.print();
        }, 250);
      });
  }

  render() {
    let { data } = this.state;

    return (
      data && (
        <div className="trading-wrap">
          <div className="container">
            <h1 className="top">거 래 명 세 표</h1>

            <table summary="판매자 정보" frameBorder={0} cellSpacing={0}>
              <caption>판매자 정보</caption>
              <colgroup>
                <col style={{ width: "*" }} />
                <col style={{ width: "23px" }} />
                <col style={{ width: "100px" }} />
                <col style={{ width: "100px" }} />
                <col style={{ width: "100px" }} />
                <col style={{ width: "100px" }} />
              </colgroup>

              <tbody>
                <tr>
                  <td rowSpan={5} className="line">
                    일 자 : {toDate(data["paymentDate"], "YYYY년 MM월 DD일")}
                    <br />
                    {`${data["orderName"]} 귀하`}
                  </td>
                  <th rowSpan={5} className="provider line">
                    공급자
                  </th>
                  <th>등록번호</th>
                  <td colSpan={3} className="line text-left">
                    104 - 81 - 50311
                  </td>
                </tr>
                <tr>
                  <th>상호(법인명)</th>
                  <td className="text-left">㈜위블링</td>
                  <th>성명</th>
                  <td className="stamp line">
                    <span>김성경</span>
                    <img src={addCdn("/images/common/tax-stamp.png")} alt="도장" />
                  </td>
                </tr>
                <tr>
                  <th>사업장주소</th>
                  <td colSpan={3} className="text-left line">
                    서울특별시 영등포구 여의대로 24, 21층
                  </td>
                </tr>
                <tr>
                  <th>업태</th>
                  <td>제조</td>
                  <th>업종</th>
                  <td className="line">경인쇄</td>
                </tr>
                <tr>
                  <th>전화번호</th>
                  <td>1577 - 4703</td>
                  <th>팩스</th>
                  <td className="line">02-2055-4075</td>
                </tr>
              </tbody>
            </table>

            <table summary="가격및품목" frameBorder={0} cellSpacing={0}>
              <caption>가격및품목</caption>
              <colgroup>
                <col style={{ width: "51px" }} />
                <col style={{ width: "139px" }} />
                <col style={{ width: "138px" }} />
                <col style={{ width: "52px" }} />
                <col style={{ width: "85px" }} />
                <col style={{ width: "85px" }} />
                <col style={{ width: "86px" }} />
                <col style={{ width: "56px" }} />
              </colgroup>

              <tbody>
                <tr>
                  <th colSpan={2} className="sum line-top-none">
                    합 계 금 액<br />
                    (공급가액+세액)
                  </th>
                  <td colSpan={6} className="sum line-top-none">
                    <strong>{toCashKorean(data["orderAmount"])}</strong>
                    {` 원정`}
                    <span>( ￦ {toCash(data["orderAmount"])} )</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>no</strong>
                  </td>
                  <td>
                    <strong>품명</strong>
                  </td>
                  <td>
                    <strong>규격</strong>
                  </td>
                  <td>
                    <strong>수량</strong>
                  </td>
                  <td>
                    <strong>단가</strong>
                  </td>
                  <td>
                    <strong>공급가액</strong>
                  </td>
                  <td>
                    <strong>세액</strong>
                  </td>
                  <td>
                    <strong>비고</strong>
                  </td>
                </tr>

                {(data["orderProductList"] || []).reduce((target, item, index) => {
                  let { productName, quantity, unitPrice, supplyAmount, vatAmount } = item;

                  target.push(
                    <tr>
                      <td>{index + 1}</td>
                      <td>{productName}</td>
                      <td />
                      <td>{quantity}</td>
                      <td>{toCash(unitPrice)}</td>
                      <td>{toCash(supplyAmount)}</td>
                      <td>{toCash(vatAmount)}</td>
                      <td />
                    </tr>,
                  );

                  return target;
                }, [])}

                <tr className="total">
                  <td colSpan={5}>소계</td>
                  <td>{data["totalSupplyAmount"]}</td>
                  <td>{data["totalVatAmount"]}</td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    );
  }
}

export default Trading;
