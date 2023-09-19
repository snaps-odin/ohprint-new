import React from "react";
import update from "react-addons-update";
import { Field } from "redux-form";

import { InputField, RadioField, CheckBoxField, SelectField } from "components/common/fields";
import { getHeight } from "utils/dom";
import { getDeepValue } from "utils/json";
import * as Validate from "utils/validate";

import Attention from "components/common/attention";

export default class OrderPayment extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      validated: false,
      timestamp: null,
    };

    this.field = "payment";

    this.fields = ["cardTypeCode", "cardQuotaCode"];

    this.onClickFocus = this.onClickFocus.bind(this);

    this.validateEnableMoney = this.validateEnableMoney.bind(this);
  }

  onClickFocus(event) {
    let {
      actions: { handleFocusStep },
      index,
    } = this.props;

    handleFocusStep(index);
  }

  showError() {
    let {
      actions: { handleTouchFormValue },
    } = this.props;

    let field = this.field;

    Promise.all([
      this.fields.map((name) => {
        handleTouchFormValue(`${field}.${name}`);
      }),
    ]).then(() => {
      this.setState(
        update(this.state, {
          validated: { $set: true },
          timestamp: { $set: new Date().getTime() },
        }),
      );
    });
  }

  validateEnableMoney(value, allValues, props) {
    let {
      discount: { allUseUserMoney },
    } = allValues;
    let {
      actions: { handleGetOrderPaymentMethodByKeyName },
    } = props;

    let moneyPaymentMethod = handleGetOrderPaymentMethodByKeyName("OHPRINT_MONEY");
    let errorUseUserMoney = !allUseUserMoney && value === moneyPaymentMethod["value"];

    return errorUseUserMoney ? "머니 결제는 머니를 사용 후 결제 금액이 0원일 경우에만 선택 가능합니다." : undefined;
  }

  componentDidUpdate(prevProps, prevState) {
    let { states, actions } = this.props;
    let {
      currentForm: {
        values: { discount, payment, total },
      },
    } = states;
    let { handleChangeFormValue, handleGetOrderPaymentMethodByKeyName } = actions;

    let field = this.field;

    total["sellPrice"] < 50000 && payment["cardQuotaCode"] !== "00" && handleChangeFormValue(`${field}.cardQuotaCode`, "00");

    let moneyPaymentMethod = handleGetOrderPaymentMethodByKeyName("OHPRINT_MONEY");

    discount["allUseUserMoney"] && payment["paymentMethodCode"] !== moneyPaymentMethod["value"] && handleChangeFormValue(`${field}.paymentMethodCode`, moneyPaymentMethod["value"]);
  }

  componentDidMount() {
    let {
      states: {
        currentForm: {
          values: {
            payment: { cardTypeCode, cardQuotaCode, creditCards },
            total,
          },
        },
      },
      actions: { handleChangeFormValue },
    } = this.props;
    let field = this.field;
    let findItem = (creditCards || []).find((item) => item.value === cardTypeCode);

    cardTypeCode && findItem && handleChangeFormValue(`${field}.cardTypeCode`, findItem);
  }

  render() {
    let {
      states: {
        currentForm: { values, syncErrors },
      },
      actions,
      active,
    } = this.props;
    let { handleGetOrderPaymentMethodByKeyName, handleGetOrderPaymentMethodByCode, handleGetOrderCreditCartByCode, handleGetOrderQuotasByCode } = actions;
    let {
      payment: { paymentMethods, creditCards, creditCardQuotas, paymentMethodCode, cardTypeCode, cardQuotaCode },
      total,
    } = values;
    let { validated } = this.state;

    let field = this.field;
    let valid = !syncErrors || (syncErrors && !syncErrors[field]);
    let style = active ? { height: `${51 + getHeight(this.bottom)}px` } : null;

    let cardPaymentMethod = handleGetOrderPaymentMethodByKeyName("CREDIT_CARD");
    let focusedPaymentMethod = handleGetOrderPaymentMethodByCode(paymentMethodCode);
    let focusedCard = Object.is(cardPaymentMethod, focusedPaymentMethod) ? handleGetOrderCreditCartByCode(cardTypeCode) : null;
    let focusedQuotas = Object.is(cardPaymentMethod, focusedPaymentMethod) ? handleGetOrderQuotasByCode(cardQuotaCode) : null;
    let disableQuotas = total["sellPrice"] < 50000;

    let defaultError = validated;

    return (
      <li className="order-payment-wrap" style={style}>
        <div className={`top ${active ? "active" : ""}`} onClick={this.onClickFocus}>
          <span className={`title ${active || valid ? "active" : ""}`}>결제 수단</span>
          {!active && <span className="icon" />}
          {!active && valid && <span className="desc">{`${focusedPaymentMethod ? focusedPaymentMethod["label"] : ""}${focusedCard ? `(${focusedCard["label"]})` : ""}${focusedQuotas ? ` / ${focusedQuotas["label"]}` : ""}`}</span>}
        </div>

        <div
          className="bottom"
          ref={(c) => {
            this.bottom = c;
          }}
        >
          <table border={0}>
            <caption>
              <span className="blind">주문자</span>
            </caption>
            <colgroup>
              <col style={{ width: "149px" }} />
              <col style={{ width: "149px" }} />
              <col style={{ width: "149px" }} />
              <col style={{ width: "149px" }} />
              <col style={{ width: "149px" }} />
            </colgroup>
            <tbody>
              <tr>
                {(paymentMethods || [])
                  .filter((item) => !item["icon"])
                  .reduce((target, method, index, array) => {
                    let total = array.length;
                    let colSpan = total - 1 === index && total < 5 ? 5 - index : null;

                    target.push(
                      <td colSpan={colSpan}>
                        <Field name={`${field}.paymentMethodCode`} label={method["label"]} keyValue={method["value"]} component={RadioField} validate={[Validate.required, this.validateEnableMoney]} />
                      </td>,
                    );

                    return target;
                  }, [])}
              </tr>

              {focusedPaymentMethod && focusedPaymentMethod["keyName"].match(/CREDIT_CARD/i) && (
                <tr className="option">
                  <th>카드선택</th>
                  <td colSpan={4} className="cards">
                    <Field name={`${field}.cardTypeCode`} className="box" width={200} height={206} placeholder="카드사 선택" options={creditCards} defaultError={defaultError} component={SelectField} validate={[Validate.required]} />

                    <Field name={`${field}.cardQuotaCode`} className="box" width={200} height={206} placeholder="할부 선택" disabled={disableQuotas} options={creditCardQuotas} defaultError={defaultError} component={SelectField} validate={[Validate.required]} />
                  </td>
                </tr>
              )}

              <tr>
                {(paymentMethods || [])
                  .filter((item) => item["icon"])
                  .reduce((target, method, index, array) => {
                    let total = array.length;
                    let colSpan = total - 1 === index && total < 5 ? 5 - index : null;

                    target.push(
                      <td colSpan={colSpan}>
                        <Field
                          name={`${field}.paymentMethodCode`}
                          label={
                            <div>
                              <span className={`icon icon-pay-${method["keyName"].toLowerCase().replace(/_/g, "-")}`} />
                              {method["keyName"] === "NAVER_PAY" && <span className="naver-point">포인트 적립</span>}
                            </div>
                          }
                          keyValue={method["value"]}
                          component={RadioField}
                          validate={[Validate.required, this.validateEnableMoney]}
                        />
                      </td>,
                    );

                    return target;
                  }, [])}
              </tr>

              {focusedPaymentMethod && focusedPaymentMethod["keyName"].match(/VIRTUAL_BANK/i) && (
                <tr className="option">
                  <th colSpan={2}>
                    에스크로서비스
                    <span className="icon">
                      <span>
                        {React.cloneElement(<Attention />, {
                          value: {
                            children: [{ value: "KG이니시스가 구매자의 결제 대금을 예치하고 있다가 구매자의 구매확인 의사를 통보 받은 후 결제 대금을 지급하는 매매 보호 서비스입니다." }, { value: "은행에 결제 금액을 입금 후 10분 정도 지나면 입금확인 처리됩니다." }, { value: "입금 시에는 결제 금액이 정확한지 확인해 주세요. 금액이 정확하지 않은 경우 입금 확인이 불가능합니다." }, { value: `입금시 예금주명은 '주식회사 스냅스'가 맞는지 확인 후 입금해 주시기 바랍니다.` }, { value: "주문하신 날부터 7일 이내 입금 확인이 되어야 주문이 취소되지 않으며, 편집 내용도 보전될 수 있습니다." }, { value: "주문 취소 등 주문 관련 변경은 제작이 들어가기 전인 결제 후 1시간 이내에만 가능합니다." }],
                          },
                        })}
                      </span>
                    </span>
                  </th>
                  <td>
                    <Field name={`${field}.useEscrow`} label="신청" keyValue={"Y"} component={RadioField} />
                  </td>
                  <td colSpan={2}>
                    <Field name={`${field}.useEscrow`} label="신청 안함" keyValue={"N"} component={RadioField} />
                  </td>
                </tr>
              )}

              {validated && getDeepValue(syncErrors, `${field}.paymentMethodCode`) && (
                <tr className="error">
                  <td colSpan={5}>
                    <span className="error">{syncErrors[field]["paymentMethodCode"]}</span>
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          <p>KakaoPay, PAYCO, SAMSUNGpay는 신용카드 결제 시 제공합니다.</p>

          <Field name={`${field}.useSaveMethod`} label="지금 선택하신 결제수단 저장" component={CheckBoxField} />
        </div>
      </li>
    );
  }
}
