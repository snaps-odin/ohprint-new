import React from "react";
import { connect } from "react-redux";
import { focus, touch, untouch, change, reduxForm } from "redux-form";

import { LayerTypes } from "constants/index";
import { ActionCommon, ActionOrder, ActionPayment, ActionLayer } from "actions/index";
import { toCash, toNumberOnly, toPhoneNumber } from "utils/format";
import { goHome, goMemberCart, replacePayment } from "utils/url";
import { getTimestamp } from "utils/date";
import { getDeepValue } from "utils/json";

import OrderProduct from "./product";
import OrderBuyer from "./buyer";
import OrderDiscount from "./discount";
import OrderPayment from "./payment";
import OrderConfirm from "./confirm";

import { dataLayerMemberOrder, dataLayerMemberOrderVisited, dataLayerPayment } from "configs/google-analytics/ga";
import { dataLayerBigInCartOrderSend } from "../../../configs/google-analytics/ga";
import { addDomain } from "../../../utils/url";
import { convertCategory } from "../../../configs/google-analytics/common";
import { getBrandName, getConcatCoupons, gtmV4_order } from "configs/google-analytics/ga-v4";

class Order extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      focus: -1,
      ready: false,
    };

    this.steps = [];

    this.isSubmit = false;

    this.onFocusStep = this.onFocusStep.bind(this);
    this.onFocusErrorStep = this.onFocusErrorStep.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.sendGA4 = this.sendGA4.bind(this);
  }

  getErrorStepIndex() {
    let {
      states: { currentForm },
    } = this.props;

    let focus = -1;

    getDeepValue(currentForm, "syncErrors") &&
      ["buyer", "discount", "payment"].map((field, index) => {
        focus === -1 && currentForm["syncErrors"][field] && (focus = index);
      });

    return focus;
  }

  onFocusStep(index) {
    let { focus } = this.state;

    let errorIndex = this.getErrorStepIndex();

    focus > index || focus !== errorIndex ? this.setState({ focus: index }) : this.steps[focus]["showError"]();
  }

  onFocusErrorStep() {
    let errorIndex = this.getErrorStepIndex();

    errorIndex !== -1 &&
      Promise.all([this.steps[errorIndex]["showError"]()]).then(() => {
        this.setState({ focus: errorIndex });
      });
  }

  sendGA4(type) {
    const {
      actions: { handleGetTemplateSpec, handleGetTemplateOptions },
      states: {
        order: { products, coupons, paymentMethods },
        currentForm: {
          values: { payment },
        },
      },
    } = this.props;

    let settlementMethodKeyName = type === "add_payment_info" ? paymentMethods.find((method) => method["value"].match(payment["paymentMethodCode"]))["keyName"] || "" : null;

    try {
      const params = products.reduce((target, item) => {
        let isAccessory = !!(item["productGroupCode"] || "").match(/901/);
        let spec = !isAccessory ? handleGetTemplateSpec(item) : handleGetTemplateOptions(item);
        let valueOfSpec = (spec || []).reduce((target, option) => {
          let { label, value } = option;
          !(label || "").match(/수량/i) && target.push(value);
          return target;
        }, []);

        let newCoupons = getConcatCoupons(coupons);
        let couponIdx = newCoupons.findIndex((i) => i.discount === item.couponDiscount);

        let data = {
          item_name: item.productName || item.productGroupName,
          price: item.price || 0,
          item_brand: getBrandName(item.templateUseType),
          item_category: isAccessory ? "액세서리" : item.productGroupName,
          item_category2: isAccessory ? item.productGroupName : "",
          item_category3: item.sizeName,
          item_variant: valueOfSpec.join("/"),
          quantity: 1,
          coupon: couponIdx >= 0 ? newCoupons[couponIdx].couponDescription : "",
          // img_url: item.thumbnailImageUrl
        };

        target.push(data);

        return target;
      }, []);

      gtmV4_order(type, params, settlementMethodKeyName);
    } catch (e) {
      console.log(e);
    }
  }

  onSubmit(values) {
    this.executeSubmit(values);
  }

  executeSubmit(values) {
    if (!this.isSubmit) {
      this.isSubmit = true;
      dataLayerPayment();

      let { states, actions } = this.props;
      let { order } = states;
      let { handleGetOrderPaymentMethodByCode, handleGetOrderCreditCartByCode, handleCreatePayment, handleCreatePaymentSignature, handleOpenContentsLayer, handleOpenAlertLayer, handleGetTemplateSpec } = actions;

      let paymentMethodName = handleGetOrderPaymentMethodByCode(values["payment"]["paymentMethodCode"])["keyName"];

      let bigInProducts = values.products.reduce((target2, value, idx2) => {
        let options = handleGetTemplateSpec(value).reduce((target, hg, idx) => {
          target.push(hg.value);
          return target;
        }, []);
        target2.push({
          id: convertCategory(value.productGroupCode),
          name: value.productName,
          price: value.sellPrice,
          quantity: value.quantity,
          brand: "",
          thumbnail: addDomain(value.thumbnailImageUrl || value.templateThumbnailImageUrl) || "",
          category: convertCategory(value.productGroupCode),
          variant: options.filter((option) => !!option).length > 0 ? options.join("::") : "",
        });
        return target2;
      }, []);

      dataLayerBigInCartOrderSend(paymentMethodName, bigInProducts);
      try {
        this.sendGA4("add_payment_info");
      } catch (e) {
        console.log(e);
      }

      let params = {
        amount: values["total"]["price"],
        cardTypeCode: paymentMethodName.match(/CREDIT_CARD/) ? values["payment"]["cardTypeCode"] : null,
        cardQuota: paymentMethodName.match(/CREDIT_CARD/) ? values["payment"]["cardQuotaCode"] : null,
        deliveryAmountCheck: order["deliveryAmountCheck"],
        deliveryAmount: values["total"]["deliveryPrice"],
        deliveryCouponCode: values["discount"]["deliveryCouponCode"] || null,
        deliveryMethod: order["deliveryMethods"][0]["value"],
        deliveryRequirements: values["buyer"]["receiverMessage"] || null,
        discountAmount: values["products"].reduce((target, product) => {
          let { discount, couponDiscount } = product;

          target += couponDiscount || discount || 0;

          return target;
        }, 0),
        escrow: paymentMethodName.match(/VIRTUAL_BANK/) && !!values["payment"]["useEscrow"].match(/Y/),
        orderCode: order["code"],
        orderProductName: `${values["products"][0]["productGroupName"]} [${values["products"][0]["projectName"]}]`,
        orderQuantity: values["products"].reduce((target, product) => {
          target += product["quantity"] || 0;

          return target;
        }, 0),
        orderUserEmail: values["buyer"]["userEmail"],
        orderUserName: values["buyer"]["userName"],
        orderUserPhone: values["buyer"]["userCellPhoneNumbers"].join("-"),
        receiveSMSAgreeYN: values["buyer"]["receiveSMSAgreementYN"] ? "Y" : "N",
        recipientAddress1: values["buyer"]["receiverAddress0"],
        recipientAddress2: values["buyer"]["receiverAddress1"],
        recipientAddress3: null,
        recipientName: values["buyer"]["receiverName"],
        recipientPhone: values["buyer"]["receiverCellPhoneNumbers"].join("-"),
        recipientZipCode: values["buyer"]["receiverZipCode"],
        saveSettlementMethod: values["payment"]["useSaveMethod"] || false,
        settlementAmount: values["total"]["sellPrice"] + values["total"]["deliveryPrice"] - values["total"]["useUserMoney"],
        settlementMethod: values["payment"]["paymentMethodCode"],
        useCouponList: values["products"].reduce((target, product) => {
          let { projectCode, couponCode, couponDiscount, price, sellPrice } = product;

          couponCode &&
            couponDiscount > 0 &&
            target.push({
              projectCode,
              couponCode,
              useAmount: couponDiscount,
              volumeDiscount: price - sellPrice,
            });

          return target;
        }, []),
        useExtraCouponAmount: values["discount"]["extraCouponDiscount"] || 0,
        extraCouponCode: values["discount"]["extraCouponCode"] || null,
        userMoney: values["total"]["useUserMoney"],
      };

      let rejectMessage = null;

      switch (paymentMethodName) {
        case "CREDIT_CARD":
        case "KAKAO_PAY":
        case "PAYCO":
        case "SSP_PAY":
          params["settlementAmount"] < 1000 && (rejectMessage = "신용카드 최소 결제금액 1000원");
          break;

        case "NAVER_PAY":
          params["settlementAmount"] < 100 && (rejectMessage = "네이버페이 카드/계좌 간편결제 최소 결제금액 100원");
          break;
      }

      paymentMethodName.match(/OHPRINT_MONEY/)
        ? handleCreatePayment(params)
            .then(() => {
              replacePayment("complete", {
                orderCode: order["code"],
              });

              this.isSubmit = false;
            })
            .catch((error) => {
              handleOpenAlertLayer({
                description: error,
                callback: () => {
                  this.onFocusStep(2);
                },
              });

              this.isSubmit = false;
            })
        : rejectMessage
        ? handleOpenAlertLayer({
            description: rejectMessage,
            callback: () => {
              this.isSubmit = false;
            },
          })
        : handleCreatePaymentSignature(params)
            .then((result) => {
              let cardTypeKeyName = params["cardTypeCode"] ? handleGetOrderCreditCartByCode(params["cardTypeCode"])["keyName"] : "";

              handleOpenContentsLayer(LayerTypes.PAYMENT, {
                values: {
                  userNo: values["buyer"]["userNo"],
                  userName: values["buyer"]["userName"],
                  userCellPhoneNumber: values["buyer"]["userCellPhoneNumbers"].join("-"),
                  userEmail: values["buyer"]["userEmail"],
                  title: `${values["products"][0]["projectName"]} ${values["products"].length > 1 ? ` 외 ${values["products"].length - 1}건` : ""}`,
                  methodName: paymentMethodName,
                  cardTypeKeyName,
                  cardTypeCode: params["cardTypeCode"],
                  cardQuotaCode: params["cardQuota"],
                  escrow: params["escrow"] ? "Y" : "N",
                  change: "N",
                },
                signature: result,
                isCard: !!paymentMethodName.match(/CREDIT_CARD/i),
                isTransparentMode: !!paymentMethodName.match(/CREDIT_CARD|NAVER_PAY|PAYCO|SSP_PAY/i) && !cardTypeKeyName.match(/KAKAOBANK/i),
              });

              this.isSubmit = false;
            })
            .catch((error) => {
              handleOpenAlertLayer({
                description: error,
              });

              this.isSubmit = false;
            });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let {
      states: { currentForm: prevForm, order: prevOrder },
    } = prevProps;
    let {
      states: { currentForm, order: currentOrder },
      actions: { handleOpenAlertLayer, handleChangeFormValue },
    } = this.props;
    let { ready } = this.state;

    if (!Object.is(JSON.stringify(getDeepValue(prevOrder, "user")), JSON.stringify(getDeepValue(currentOrder, "user"))) || !Object.is(JSON.stringify(getDeepValue(prevOrder, "userHistories")), JSON.stringify(getDeepValue(currentOrder, "userHistories")))) {
      handleChangeFormValue("buyer", null);
      handleChangeFormValue("payment", null);
      handleChangeFormValue("confirm", null);
    }

    if (getDeepValue(prevForm, "values.discount") && getDeepValue(currentForm, "values.discount")) {
      let {
        values: {
          discount: { deliveryUsedEvent: prevDeliveryUsedEvent },
          total: { deliveryPrice: prevDeliveryPrice },
        },
      } = prevForm;
      let {
        values: {
          discount: { deliveryUsedEvent: currentDeliveryUsedEvent },
          total: { deliveryPrice: currentDeliveryPrice },
        },
      } = currentForm;

      ready &&
        prevDeliveryUsedEvent &&
        !currentDeliveryUsedEvent &&
        prevDeliveryPrice === 0 &&
        currentDeliveryPrice !== 0 &&
        handleOpenAlertLayer({
          description: `배송 이벤트 적용시간이 초과하여,<br/>배송료가 부과 됩니다.`,
        });
    }
  }

  // componentWillMount() {
  //   let {
  //     states: {
  //       user: { loggedIn },
  //     },
  //   } = this.props;
  //
  //   !loggedIn && goMemberCart();
  // }

  componentDidMount() {
    let { states, actions } = this.props;
    let {
      order: { code: orderCode },
    } = states;
    let { handleChangeFormValue, handleRequestOrderProducts, handleRequestOrderUser, handleRequestOrderCoupons, handleRequestOrderExtraCoupons, handleRequestOrderDeliveryCoupons, handleRequestOrderPaymentOption, handleSetOrderLowestDiscounts, handleOpenAlertLayer } = actions;

    dataLayerMemberOrderVisited();

    orderCode
      ? Promise.all([handleChangeFormValue("buyer", null), handleRequestOrderProducts(), handleRequestOrderUser()]).then(() => {
          Promise.all([handleRequestOrderCoupons(), handleRequestOrderExtraCoupons(), handleRequestOrderDeliveryCoupons(), handleRequestOrderPaymentOption()])
            .then(() => {
              handleSetOrderLowestDiscounts();
            })
            .then(() => {
              //let productsList = this.props.states.currentForm.values.products;
              //productsList && dataLayerMemberOrder(productsList, handleGetTemplateSpec);
              this.setState({ ready: true });
            })
            .then(() => {
              this.sendGA4("begin_checkout");
            })
            .then(() => {
              window.setTimeout(() => {
                let errorIndex = this.getErrorStepIndex();

                this.setState({ focus: errorIndex === -1 ? 2 : errorIndex });
              }, 10);
            })
            .catch((error) => {
              handleOpenAlertLayer({
                description: error,
                callback: () => {
                  goMemberCart();
                },
              });
            });
        })
      : goMemberCart();
  }

  // componentWillUnmount() {
  //   let {
  //     actions: { handleUpdateOrderCode },
  //   } = this.props;
  //
  //   handleUpdateOrderCode(null);
  // }

  render() {
    let { states, actions, handleSubmit, valid } = this.props;

    let { focus, ready } = this.state;

    return (
      ready && (
        <div className="order-wrap">
          <div className="container">
            <div className="top">
              <h1>주문/결제</h1>
            </div>

            <div className="middle">
              {React.cloneElement(<OrderProduct />, {
                states,
                actions,
              })}
            </div>

            <div className="bottom">
              <form onSubmit={handleSubmit(this.onSubmit)}>
                <div className="left">
                  <ul>
                    {[<OrderBuyer />, <OrderDiscount />, <OrderPayment />].map((component, index) =>
                      React.cloneElement(component, {
                        states,
                        actions: {
                          ...actions,
                          handleFocusStep: this.onFocusStep,
                        },
                        index,
                        active: focus === index,
                        ref: (c) => {
                          c && (this.steps[index] = c);
                        },
                      }),
                    )}
                  </ul>
                </div>
                <div className="right">
                  {React.cloneElement(<OrderConfirm />, {
                    states,
                    actions: {
                      ...actions,
                      handleFocusError: this.onFocusErrorStep,
                    },
                    valid,
                  })}
                </div>
              </form>
            </div>
          </div>
        </div>
      )
    );
  }
}

const formName = "member-order";

const mapStateToProps = (state) => {
  let { order } = state;
  let { offsetTimestamp, products, user, userHistories, userPayment, coupons, extraCoupons, deliveryMethods, deliveryAmountCheck, deliveryAmount, deliveryCoupons, useLowest, paymentMethods, creditCards, creditCardQuotas } = order;
  let { userCellPhoneNumber, userMoney } = user || {};
  let currentForm = state.form[formName];

  let moneyPaymentMethod = (paymentMethods || []).find((method) => method["keyName"] === "OHPRINT_MONEY");

  let isDeliveryAmountCheck = deliveryAmountCheck;
  let isExistUserHistories = userHistories && userHistories.length > 0;
  let isExistSnapsCompany = !!(products || []).find((product) => !product["isOtherCompany"]);

  let extraCouponCode = getDeepValue(currentForm, "values.discount.extraCouponCode") || null;
  let extraCouponDiscount = toNumberOnly(getDeepValue(currentForm, "values.discount.extraCouponDiscount") || 0);
  let useUserMoney = toNumberOnly(getDeepValue(currentForm, "values.discount.useUserMoney") || 0);

  let total = (coupons || []).reduce(
    (target, coupon) => {
      coupon.map((couponItem) => {
        let { couponCode } = couponItem;

        target["normalizeCoupons"].indexOf(couponCode) === -1 && target["normalizeCoupons"].push(couponCode);
      });

      return target;
    },
    (products || []).reduce(
      (target, product) => {
        let { price, couponDiscount, couponCode, sellPrice, isOtherCompany } = product;

        target["price"] += price;
        target["discount"] += price - sellPrice;
        target["couponDiscount"] += couponDiscount || 0;
        target["sellPrice"] += couponDiscount ? price - couponDiscount : sellPrice;

        target["sellDeliveryPrice"] += !isDeliveryAmountCheck || (isDeliveryAmountCheck && !isOtherCompany) ? (couponDiscount ? price - couponDiscount : sellPrice) : 0;

        target["sellDiscount"] += couponDiscount ? couponDiscount : price - sellPrice;

        target["usedCoupons"] += couponCode ? 1 : 0;

        return target;
      },
      {
        price: 0,
        discount: 0,
        couponDiscount: extraCouponDiscount || 0,
        sellPrice: extraCouponDiscount * -1 || 0,
        sellDeliveryPrice: extraCouponDiscount * -1 || 0,
        sellDiscount: extraCouponDiscount || 0,
        usedCoupons: extraCouponDiscount ? 1 : 0,
        normalizeCoupons: (extraCoupons || []).reduce((target, coupon) => {
          let { couponCode } = coupon;

          target.push(couponCode);

          return target;
        }, []),
        extraCouponDiscount,
        useUserMoney,
        userMoney,
      },
    ),
  );

  let deliveryCouponCode = getDeepValue(currentForm, "values.discount.deliveryCouponCode");
  let deliveryCouponUseLimitAmount = getDeepValue(currentForm, "values.discount.deliveryCouponUseLimitAmount") || 0;

  let nowTimestamp = getTimestamp() + offsetTimestamp;
  let isDeliveryEventTimezone = deliveryAmount ? getTimestamp(deliveryAmount["eventStartDate"]) <= nowTimestamp && getTimestamp(deliveryAmount["eventEndDate"]) >= nowTimestamp : false;
  let deliveryEnableLimitAmount = deliveryAmount ? (isDeliveryEventTimezone ? deliveryAmount["eventLimitAmount"] : deliveryAmount["defaultLimitAmount"]) : 0;

  let deliveryEnableAmount = deliveryAmount && isExistSnapsCompany ? (isDeliveryEventTimezone ? deliveryAmount["eventAmount"] : deliveryAmount["defaultAmount"]) : 0;

  let deliveryPriceBySellPrice = deliveryAmount ? (total["sellDeliveryPrice"] >= deliveryEnableLimitAmount ? 0 : deliveryEnableAmount) : 0;
  let deliveryPrice = deliveryPriceBySellPrice && deliveryCouponCode && deliveryCouponUseLimitAmount <= total["sellDeliveryPrice"] ? 0 : deliveryPriceBySellPrice;

  let allUseUserMoney = total["price"] - total["sellDiscount"] + deliveryPrice === total["useUserMoney"];

  let initialValues =
    user && userHistories
      ? {
          products,
          buyer: Object.assign(
            {
              ...user,
              userHistories,
              userCellPhoneNumbers: userCellPhoneNumber ? toPhoneNumber(userCellPhoneNumber).split("-") : [],
              receiverName: isExistUserHistories ? userHistories[0]["userName"] : null,
              receiverCellPhoneNumbers: isExistUserHistories ? toPhoneNumber(userHistories[0]["userCellPhoneNumber"]).split("-") : [],
              receiveSMSAgreementYN: !!(user["receiveSMSAgreeYN"] || "").match(/Y/i),
              receiverZipCode: isExistUserHistories ? userHistories[0]["userZipCode"] : null,
              receiverAddress0: isExistUserHistories ? userHistories[0]["userAddress0"] : null,
              receiverAddress1: isExistUserHistories ? userHistories[0]["userAddress1"] : null,
            },
            getDeepValue(currentForm, "values.buyer") || {},
          ),
          discount: {
            coupons,
            extraCoupons,
            extraCouponCode,
            extraCouponDiscount,
            sellDiscount: total["sellDiscount"] ? `- ${toCash(total["sellDiscount"])}` : 0,
            useUserMoney: total["useUserMoney"] ? `- ${toCash(total["useUserMoney"])}` : 0,
            maxLimitUserMoney: userMoney || 0,
            allUseUserMoney,
            deliveryMethods,
            deliveryAmount,
            deliveryCoupons,
            deliveryEnableLimitAmount,
            deliveryEnableAmount,
            deliveryCouponCode: deliveryPrice > 0 || deliveryPriceBySellPrice <= 0 ? null : deliveryCouponCode,
            deliveryCouponUseLimitAmount: deliveryPrice > 0 || deliveryPriceBySellPrice <= 0 ? null : deliveryCouponUseLimitAmount,
            deliveryPrice: toCash(deliveryPrice),
            deliveryUsedEvent: isDeliveryEventTimezone && deliveryPriceBySellPrice <= 0,
            useLowest,
          },
          payment: Object.assign(
            {
              paymentMethods,
              paymentMethodCode: userPayment && moneyPaymentMethod["value"] !== userPayment["settlementMethod"] ? userPayment["settlementMethod"] : null,
              cardTypeCode: userPayment ? userPayment["cardCode"] : null,
              creditCards,
              creditCardQuotas,
              useEscrow: "N",
              useSaveMethod: true,
            },
            getDeepValue(currentForm, "values.payment") || {},
          ),
          confirm: Object.assign(
            {
              agreement: false,
            },
            getDeepValue(currentForm, "values.confirm") || {},
          ),
          total: Object.assign(total, {
            deliveryPrice,
          }),
        }
      : null;

  return {
    states: {
      config: state.config,
      user: state.user,
      order,
      currentForm,
    },
    initialValues,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),
      handleTouchFormValue: (key) => dispatch(touch(formName, key)),
      handleUnTouchFormValue: (key) => dispatch(untouch(formName, key)),
      handleFocusFormValue: (key) => dispatch(focus(formName, key)),

      handleGetTemplateOptions: (data) => dispatch(ActionCommon.getTemplateOptions(data)),
      handleGetTemplateTitle: (data) => dispatch(ActionCommon.getTemplateTitle(data)),
      handleGetTemplateSpec: (data) => dispatch(ActionCommon.getTemplateSpec(data)),

      handleUpdateOrderCode: (code) => dispatch(ActionOrder.updateOrderCode(code)),
      handleRequestOrderProducts: () => dispatch(ActionOrder.requestOrderProducts()),
      handleRequestOrderUser: () => dispatch(ActionOrder.requestOrderUser()),
      handleRequestOrderCoupons: () => dispatch(ActionOrder.requestOrderCoupons()),
      handleRequestOrderExtraCoupons: () => dispatch(ActionOrder.requestOrderExtraCoupons()),
      handleRequestOrderDeliveryCoupons: () => dispatch(ActionOrder.requestOrderDeliveryCoupons()),
      handleRequestOrderPaymentOption: () => dispatch(ActionOrder.requestOrderPaymentOption()),
      handleSetOrderLowestDiscounts: () => dispatch(ActionOrder.setOrderLowestDiscounts()),

      handleGetOrderPaymentMethodByKeyName: (keyName) => dispatch(ActionOrder.getOrderPaymentMethodByKeyName(keyName)),
      handleGetOrderPaymentMethodByCode: (code) => dispatch(ActionOrder.getOrderPaymentMethodByCode(code)),
      handleGetOrderDeliveryMethodByKeyName: (keyName) => dispatch(ActionOrder.getOrderDeliveryMethodByKeyName(keyName)),
      handleGetOrderDeliveryMethodByCode: (code) => dispatch(ActionOrder.getOrderDeliveryMethodByCode(code)),
      handleGetOrderCreditCartByKeyName: (keyName) => dispatch(ActionOrder.getOrderCreditCartByKeyName(keyName)),
      handleGetOrderCreditCartByCode: (code) => dispatch(ActionOrder.getOrderCreditCartByCode(code)),
      handleGetOrderQuotasByCode: (code) => dispatch(ActionOrder.getOrderQuotasByCode(code)),

      handleCreatePayment: (params) => dispatch(ActionPayment.createPayment(params)),
      handleCreatePaymentSignature: (params) => dispatch(ActionPayment.createPaymentSignature(params)),

      handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),
      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: formName,
    enableReinitialize: true,
  })(Order),
);
