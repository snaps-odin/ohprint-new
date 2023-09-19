import React from "react";
import update from "react-addons-update";
import { connect } from "react-redux";

import { LayerTypes } from "constants/index";
import { ActionCommon, ActionOrder, ActionLayer, ActionUI } from "actions/index";
import { getWidth, getHeight } from "utils/dom";
import { asyncChunk } from "utils/webpack";

import Loading from "./loading";
import Alert from "./alert";
import { CJ_DELIVERY, EVENTS_NEW_YEAR_PLAN_LAYER, EVENTS_NEW_YEAR_PLAN_SUCCESS, HOPE_MARKET, SMALL_BUSINESS_DAY } from "../../constants/layer-types";

class Layer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
      components: {},
    };

    this.ready = false;

    this.elements = {
      loading: null,
      alert: null,
      contents: null,
    };

    this.showErrorLoadComponent = this.showErrorLoadComponent.bind(this);
  }

  updateAsyncComponent(module, type) {
    this.ready = false;
    this.setState(
      update(this.state, {
        components: { [this.snakeToClassName(type)]: { $set: module } },
      }),
    );
  }

  setAsyncComponent(nextProps) {
    let {
      states: {
        layer: {
          contents: { type },
        },
      },
    } = nextProps;
    let { components } = this.state;

    let className = this.snakeToClassName(type);

    switch (type) {
      case LayerTypes.LOGIN:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./login" /* webpackChunkName: 'layer-login' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.JOIN:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./join" /* webpackChunkName: 'layer-join' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.PASSWORD:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./password" /* webpackChunkName: 'layer-password' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.WELCOME:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./welcome" /* webpackChunkName: 'layer-welcome' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.NOTICE:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./notice" /* webpackChunkName: 'layer-notice2' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.DESIGN_QNA:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./design-qna" /* webpackChunkName: 'layer-design-qna' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.REVIEW_CREATE:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./review-create" /* webpackChunkName: 'layer-review-create' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.FAIR_APPAREL_SIZE_ALERT:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./fair-apparel-size-alert" /* webpackChunkName: 'layer-review-create' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.SAMPLE_PACK:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./sample-pack" /* webpackChunkName: 'layer-sample-pack' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.ZIPCODE:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./zipcode" /* webpackChunkName: 'layer-zipcode' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.COUPON:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./coupon" /* webpackChunkName: 'layer-coupon' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.COLLABORATION_FUNDING:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./events-collaboration-funding" /* webpackChunkName: 'collaboration-funding' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.DELIVERY_COUPON:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./delivery-coupon" /* webpackChunkName: 'layer-delivery-coupon' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.DELIVERY_TRACKING:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./delivery-tracking" /* webpackChunkName: 'layer-delivery-tracking' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.PURCHASE_AGREEMENT:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./purchase-agreement" /* webpackChunkName: 'layer-purchase-agreement' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.PAYMENT:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./payment" /* webpackChunkName: 'layer-payment' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.PAYMENT_INFORMATION:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./payment-information" /* webpackChunkName: 'layer-payment-information' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.POLICY_PRIVATE:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./policy-private" /* webpackChunkName: 'layer-policy-private' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.OFFSET_NOTICE:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./offset-notice" /* webpackChunkName: 'offset-notice' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.MARKETING_AGREE:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./marketing-agree" /* webpackChunkName: 'marketing-agree' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.EVENTS_FUNDING:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./events-funding" /* webpackChunkName: 'events-funding' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.SHIPPING_GUIDE:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./shipping-guide" /* webpackChunkName: 'shipping-guide' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.OFFSET_PRINT_GUIDE:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./offset-print-guide" /* webpackChunkName: 'offset-print-guide' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.CJ_DELIVERY:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./cj-delivery" /* webpackChunkName: 'layer-zipcode' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.CS_WRITE:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./cs-write" /* webpackChunkName: 'cs-write' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.PAYMENT_CHANGE:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./payment-change" /* webpackChunkName: 'layer-payment-change' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.DEPOSIT_INFORMATION:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./deposit-information" /* webpackChunkName: 'layer-deposit-information' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.RECEIPT_PRINT:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./receipt-print" /* webpackChunkName: 'layer-receipt-print' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.TAX_IN_VOICE:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./tax-in-voice" /* webpackChunkName: 'layer-tax-in-voice' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.CASH_RECEIPT:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./cash-receipt" /* webpackChunkName: 'layer-cash-receipt' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.DOCUMENT_DOWNLOAD:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./document-download" /* webpackChunkName: 'layer-document-download' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.REVIEW_NOTIFICATION:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./review-notification" /* webpackChunkName: 'layer-review-notification' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.POLICY_NOTIFICATION:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./policy-notification" /* webpackChunkName: 'layer-policy-notification' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.PROJECT_SAVE_AS:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./project-save-as" /* webpackChunkName: 'layer-project-save-as' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.TEMPLATE_DETAIL:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./template-detail" /* webpackChunkName: 'layer-template-detail' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.TEMPLATE_CONFIRM:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./template-confirm" /* webpackChunkName: 'layer-template-confirm' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.EVENTS_IMAGE:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./events-image" /* webpackChunkName: 'layer-events-image' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.EVENTS_RECOMMEND:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./events-recommend" /*webpackChunkName: 'layer-events-recommend' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.EVENTS_BYE_2020:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./events-bye-2020" /*webpackChunkName: 'layer-events-bye-2020' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.ERASER:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./eraser" /*webpackChunkName: 'layer-eraser' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.EVENTS_APPLY:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./events-apply" /* webpackChunkName: 'layer-events-apply' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.EVENTS_POST_COMMENT:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./events-post-comment" /* webpackChunkName: 'layer-events-post-comment' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.EVENTS_WINNER:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./events-winner" /* webpackChunkName: 'layer-events-winner' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.PROJECT_EDIT:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./project-edit" /* webpackChunkName: 'layer-project-edit' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.SMS:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./sms" /* webpackChunkName: 'layer-sms' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.COUPON_PAYMENT_SCHEDULE:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./coupon-payment-schedule" /* webpackChunkName: 'layer-sms' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.ADVANCE_RESERVATION:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./advance-reservation" /* webpackChunkName: 'layer-sms' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.DESIGN_COMPETITION:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./design-competition" /* webpackChunkName: 'layer-dc' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.EVENTS_APPLY_BEFOREHAND:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./events-apply-beforehand" /* webpackChunkName: 'layer-events-apply-beforehand' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.EVENTS_FAN_RECOMMEND:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./events-fan-recommend" /* webpackChunkName: 'layer-events-apply-beforehand' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.CART_INFORMATION:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./cart-information" /* webpackChunkName: 'layer-cart-information' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.CART_DIGITALPLUS:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./cart-digitalplus" /* webpackChunkName: 'layer-cart-digitalplus' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.PRODUCT_DETAIL:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./product-detail" /* webpackChunkName: 'layer-product-detail' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.DESIGN_METHOD_DELECT:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./design-method-select" /* webpackChunkName: 'layer-design-method-select' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.COMMON_GUIDE_LAYER:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./common-guide-layer" /* webpackChunkName: 'custom-personalization-modal' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.EVENTS_CHEER_UP_LAYER:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./events-cheer-up" /* webpackChunkName: 'events-cheer-up-layer' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.EVENTS_NEW_YEAR_PLAN_LAYER:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./events-new-year-plan" /* webpackChunkName: 'events-new-year-plan-layer' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.EVENTS_NEW_YEAR_PLAN_SUCCESS:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./events-new-year-plan-success" /* webpackChunkName: 'events-new-year-plan-layer-success' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.HOPE_MARKET:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./hope-market" /* webpackChunkName: 'hope-market-layer' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.SMALL_BUSINESS_DAY:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./events-small-business-day" /* webpackChunkName: 'small-business-day-layer' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.NEW_YEAR_WISHES:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./events-new-year-wishes" /* webpackChunkName: 'events-new-year-wishes-layer' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.EVENTS_APP_REVIEW:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./events-app-review" /* webpackChunkName: 'events-app-review' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.CUSTOM_PERSONALIZATION_MODAL:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./custom-personalization-modal" /* webpackChunkName: 'custom-personalization-modal' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.EVENTS_CONFIRM_BEFOREHAND:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./events-confirm-beforehand" /* webpackChunkName: 'events-confirm-beforehand' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;

      case LayerTypes.EVENTS_FORM:
        !components[className] &&
          Promise.all([(this.ready = true)]).then(() => {
            asyncChunk(
              [import("./events-form" /* webpackChunkName: 'events-form' */)],
              (error, module) => {
                this.updateAsyncComponent(module, type);
              },
              this.showErrorLoadComponent,
            );
          });
        break;
    }
  }

  getAsyncComponent() {
    let {
      states: {
        layer: {
          contents: { type },
        },
      },
    } = this.props;
    let { components } = this.state;

    let AsyncComponent = components[this.snakeToClassName(type)];

    return AsyncComponent ? <AsyncComponent /> : null;
  }

  snakeToClassName(value) {
    let className = String(value)
      .toLowerCase()
      .replace(/(\_\w)/g, (m) => m[1].toUpperCase());

    return className
      .split("")
      .map((m, index) => (index === 0 ? m.toUpperCase() : m))
      .join("");
  }

  showErrorLoadComponent() {
    let {
      actions: { handleCloseLayer, handleOpenAlertLayer },
    } = this.props;

    this.ready = false;

    Promise.all([handleCloseLayer()]).then(() => {
      handleOpenAlertLayer({
        description: "버전이 갱신되어 새로고침이 필요합니다.<br/>확인버튼 클릭하면 새로고침 됩니다.",
        callback: () => {
          window.location.reload(true);
        },
      });
    });
  }

  componentWillUpdate(nextProps, nextState) {
    this.setAsyncComponent(nextProps);
  }

  componentDidUpdate(prevProps, prevState) {
    let {
      actions: { handleUpdateUILocked },
    } = this.props;
    let { width, height } = prevState;

    let element = this.elements["loading"] || this.elements["alert"] || this.elements["contents"];
    let elementChild = element && element.children ? element.children[0] : null;

    !this.ready &&
      Promise.all([getWidth(elementChild), getHeight(elementChild)]).then((results) => {
        (width !== results[0] || height !== results[1]) &&
          this.setState(
            update(this.state, {
              width: { $set: results[0] },
              height: { $set: results[1] },
            }),
          );
      });

    handleUpdateUILocked(!!(this.ready || element), "layer");
  }

  render() {
    let { states, actions } = this.props;
    let {
      layer: { transparentMode, roundMode, contents, alert, loading },
    } = states;
    let { type } = contents;
    let { width, height } = this.state;

    let contentsComponent = this.getAsyncComponent();
    let alertComponent = alert["options"] ? <Alert /> : null;

    let enabled = this.ready || contentsComponent || alertComponent || loading;
    let className = `centered async ${loading || roundMode ? "round" : ""} ${transparentMode ? "transparent-mode" : ""}`;
    let style = enabled ? { minWidth: `${width}px`, minHeight: `${height}px` } : null;
    let bgDimmed = transparentMode && (type || "") === LayerTypes.DESIGN_METHOD_DELECT;

    return (
      enabled && (
        <div className="layer-wrap">
          <div className="outer">
            <div className="inner">
              {(this.ready || loading) && (
                <div
                  className={className}
                  style={style}
                  ref={(c) => {
                    this.elements["loading"] = c;
                  }}
                >
                  <Loading />
                </div>
              )}

              {alertComponent && (
                <div
                  className={className}
                  style={style}
                  ref={(c) => {
                    this.elements["alert"] = c;
                  }}
                >
                  {React.cloneElement(alertComponent, {
                    states,
                    actions,
                    options: alert["options"],
                  })}
                </div>
              )}

              {contentsComponent && (
                <div
                  className={className}
                  style={Object.assign({}, style, alertComponent ? { display: "none" } : {})}
                  ref={(c) => {
                    this.elements["contents"] = c;
                  }}
                >
                  {React.cloneElement(contentsComponent, {
                    states,
                    actions,
                    options: contents["options"],
                  })}
                </div>
              )}
            </div>
          </div>
          <div className={`bg ${bgDimmed ? "dimmed" : ""}`} />
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    states: {
      config: state.config,
      ui: state.ui,
      layer: state.layer,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleUpdateLayer: () => dispatch(ActionLayer.updateLayer()),
      handleUpdateTransparentModeLayer: (bool) => dispatch(ActionLayer.updateTransparentModeLayer(bool)),
      handleUpdateRoundModeLayer: (bool) => dispatch(ActionLayer.updateRoundModeLayer(bool)),
      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
      handleCloseContentsLayer: () => dispatch(ActionLayer.closeContentsLayer()),
      handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),
      handleCloseAlertLayer: () => dispatch(ActionLayer.closeAlertLayer()),
      handleOpenLoadingLayer: (options) => dispatch(ActionLayer.openLoadingLayer()),
      handleCloseLoadingLayer: () => dispatch(ActionLayer.closeLoadingLayer()),
      handleCloseLayer: () => dispatch(ActionLayer.closeLayer()),
      handleGetTemplateSpec: (data) => dispatch(ActionCommon.getTemplateSpec(data)),

      handleUpdateUILocked: (locked, sourceName) => dispatch(ActionUI.updateUILocked(locked, sourceName)),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layer);
