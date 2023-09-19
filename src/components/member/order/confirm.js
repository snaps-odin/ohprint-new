import React from "react";
import { Field } from "redux-form";

import { LayerTypes } from "constants/index";
import { CheckBoxField } from "components/common/fields";
import { toCash } from "utils/format";
import * as Validate from "utils/validate";

export default class OrderConfirm extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      validated: false,
    };

    this.field = "confirm";

    this.onClickPurchaseAgreement = this.onClickPurchaseAgreement.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  onClickPurchaseAgreement(event) {
    let {
      actions: { handleOpenContentsLayer },
    } = this.props;

    handleOpenContentsLayer(LayerTypes.PURCHASE_AGREEMENT);
  }

  onClickSubmit(event) {
    let {
      actions: { handleFocusError },
    } = this.props;

    Promise.all([handleFocusError()]).then(() => {
      this.setState({ validated: true });
    });
  }

  render() {
    let {
      states: {
        currentForm: {
          values: { total },
        },
      },
      valid,
    } = this.props;
    let { validated } = this.state;

    let field = this.field;
    let defaultError = validated;

    return (
      <div className="order-confirm-wrap">
        <h3>최종 결제 금액 확인</h3>

        <div className={valid ? "active" : ""}>
          <div className="top">
            <table frameBorder={0}>
              <caption>
                <span className="blind">최종 결제 금액 확인</span>
              </caption>
              <colgroup>
                <col style={{ width: "100px" }} />
                <col style={{ width: "254px" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>합계</th>
                  <td>{toCash(total["sellPrice"] + total["deliveryPrice"] - total["useUserMoney"])}원</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>상품 금액</th>
                  <td>{toCash(total["price"])}원</td>
                </tr>
                <tr>
                  <th>할인 금액</th>
                  <td>
                    <em>{total["sellDiscount"] ? `-${toCash(total["sellDiscount"])}` : "0"}원</em>
                  </td>
                </tr>
                <tr>
                  <th>머니</th>
                  <td>
                    <em>{total["useUserMoney"] ? `-${toCash(total["useUserMoney"])}` : "0"}원</em>
                  </td>
                </tr>
                <tr>
                  <th>배송비</th>
                  <td>{toCash(total["deliveryPrice"])}원</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bottom">
            <span>
              주문할 상품의 상품명, 상품가격, 배송정보를 확인하였으며,
              <br />
              구매에 동의하시겠습니까?
              <button type="button" onClick={this.onClickPurchaseAgreement}>
                약관보기
              </button>
              <br />
              <Field name={`${field}.agreement`} label="동의합니다." defaultError={defaultError} component={CheckBoxField} validate={[Validate.required]} />
            </span>

            <button type="submit" onClick={this.onClickSubmit}>
              결제하기
            </button>
          </div>
        </div>
      </div>
    );
  }
}
