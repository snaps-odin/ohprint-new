import React from "react";

import OrderProductsItem from "./product-item";

export default class OrderTable extends React.Component {
  render() {
    let { states, actions } = this.props;
    let {
      currentForm: {
        values: { products },
      },
    } = states;

    return (
      <div className="order-product-wrap">
        <h2>{`주문 상품 ${(products || []).length}개`}</h2>
        <table frameBorder={0}>
          <caption>
            <span className="blind">리스트 메뉴</span>
          </caption>
          <colgroup>
            <col style={{ width: "180px" }} />
            <col style={{ width: "496px" }} />
            <col style={{ width: "74px" }} />
            <col style={{ width: "130px" }} />
            <col style={{ width: "130px" }} />
            <col style={{ width: "130px" }} />
          </colgroup>
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th className="align">주문 상품 정보</th>
              <th>수량</th>
              <th>상품 금액</th>
              <th>할인 금액</th>
              <th>구매 예정가</th>
            </tr>
          </thead>
          <tbody>
            {(products || []).reduce((target, item, index) => {
              target.push(
                React.cloneElement(<OrderProductsItem />, {
                  states,
                  actions,
                  item,
                }),
              );

              return target;
            }, [])}
          </tbody>
        </table>
      </div>
    );
  }
}
