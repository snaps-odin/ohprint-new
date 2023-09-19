import React from "react";
import update from "react-addons-update";
import { connect } from "react-redux";
import { change, reduxForm } from "redux-form";

import { ActionCommon, ActionCS, ActionEditor, ActionLayer, ActionOrder, ActionOrderHistory, ActionProduct, ActionUI } from "actions/index";
import { getDeepValue } from "utils/json";
import { goEditor } from "utils/url";

import Pagination from "components/common/pagination";
import DeliveryCondition from "./condition";
import DeliveryProduct from "./product";
import DeliveryInformation from "./information";

class Delivery extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      ready: false,
      items: [],
      offset: 0,
      limit: 5,
      totalCount: 0,
    };

    this.onRefresh = this.onRefresh.bind(this);
    this.onChangeOffset = this.onChangeOffset.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickGoEditor = this.onClickGoEditor.bind(this);
  }

  onChangeOffset(offset) {
    this.requestOrderHistories(offset);
  }

  onRefresh() {
    this.requestOrderHistories(0);
  }

  onSubmit(values) {
    this.requestOrderHistories(0);
  }

  onClickGoEditor(value) {
    let {
      actions: { handleUpdateEditor },
    } = this.props;

    Promise.all([
      handleUpdateEditor(
        {
          productCode: value["productCode"],
          projectCode: value["projectCode"],
          templateCode: value["templateCode"],
        },
        value["templateUseType"],
      ),
    ]).then(() => {
      goEditor();
    });
  }

  requestOrderHistories(offset) {
    let {
      states: {
        currentForm: { values },
      },
      actions: { handleRequestOrderHistories, handleUpdateUIScroll },
    } = this.props;
    let { limit } = this.state;

    let params = {
      startDate: values["startDate"].replace(/\//g, "-"),
      endDate: values["endDate"].replace(/\//g, "-"),
      offset,
      limit,
    };

    handleRequestOrderHistories(params)
      .then((result) => {
        result &&
          this.setState(
            update(this.state, {
              items: { $set: result["orderHistoryList"] },
              offset: { $set: offset },
              totalCount: { $set: result["totalCount"] },
            }),
          );
      })
      .then(() => {
        handleUpdateUIScroll(0);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    let {
      states: { currentForm: prevForm },
    } = prevProps;
    let {
      states: { currentForm },
    } = this.props;

    (getDeepValue(prevForm, "values.startDate") !== getDeepValue(currentForm, "values.startDate") || getDeepValue(prevForm, "values.endDate") !== getDeepValue(currentForm, "values.endDate")) && this.requestOrderHistories(0);
  }

  componentDidMount() {
    let {
      actions: { handleRequestOrderPaymentOption, handleOpenAlertLayer, handleCloseContentsLayer },
    } = this.props;

    Promise.all([handleRequestOrderPaymentOption()])
      .then(() => {
        this.setState({ ready: true });
      })
      .catch((error) => [
        handleOpenAlertLayer({
          description: error,
          callback: () => {
            handleCloseContentsLayer();
          },
        }),
      ]);
  }

  render() {
    let { states, actions, handleSubmit } = this.props;
    let { ready, items, offset, limit, totalCount } = this.state;

    return (
      ready && (
        <div className="delivery-wrap">
          <div className="container">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className="top">
                <h1>주문/배송 내역</h1>
                {React.cloneElement(<DeliveryCondition />, {
                  states,
                  actions: {
                    ...actions,
                    handleRefresh: this.onRefresh,
                  },
                })}
              </div>

              <div className="middle">
                {React.cloneElement(<DeliveryProduct />, {
                  states,
                  items,
                  actions: {
                    ...actions,
                    handleRefresh: this.onRefresh,
                    handleGoEditor: this.onClickGoEditor,
                  },
                })}

                {totalCount > 0 &&
                  React.cloneElement(<Pagination />, {
                    offset,
                    limit,
                    totalCount,
                    handleChangeOffset: this.onChangeOffset,
                  })}
              </div>

              <div className="bottom">
                {React.cloneElement(<DeliveryInformation />, {
                  states,
                  actions,
                })}
              </div>
            </form>
          </div>
        </div>
      )
    );
  }
}

const formName = "member-delivery";

const mapStateToProps = (state) => {
  return {
    states: {
      config: state.config,
      order: state.order,
      product: state.product,
      currentForm: state.form[formName] || {
        values: {
          startDate: "",
          endDate: "",
        },
      },
    },
    initialValues: {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),

      handleGetTemplateOptions: (data) => dispatch(ActionCommon.getTemplateOptions(data)),
      handleGetTemplateSpec: (data) => dispatch(ActionCommon.getTemplateSpec(data)),
      handleGetTemplateTitle: (data) => dispatch(ActionCommon.getTemplateTitle(data)),

      handleRequestOrderPaymentOption: () => dispatch(ActionOrder.requestOrderPaymentOption()),

      handleRequestOrderHistories: (params) => dispatch(ActionOrderHistory.requestOrderHistories(params)),
      handleRequestOrderHistoryByOrderCode: (orderCode) => dispatch(ActionOrderHistory.requestOrderHistoryByOrderCode(orderCode)),
      handleCreateOrderHistoryReOrderByOrderCode: (orderCode, projectCode) => dispatch(ActionOrderHistory.createOrderHistoryReOrderByOrderCode(orderCode, projectCode)),
      handleDeleteOrderHistoryByOrderCode: (orderCode) => dispatch(ActionOrderHistory.deleteOrderHistoryByOrderCode(orderCode)),
      handleRequestOrderHistoryAttachByOrderCode: (orderCode, projectCode) => dispatch(ActionOrderHistory.requestOrderHistoryReOrderByOrderCode(orderCode, projectCode)),

      handleOpenCS: () => dispatch(ActionCS.openCS()),
      handleTouchCS: () => dispatch(ActionCS.touchCS()),
      handleChangeCSTabFocus: (index) => dispatch(ActionCS.changeCSTabFocus(index)),

      handleGetProductByProductGroupCode: (productGroupCode) => dispatch(ActionProduct.getProductByProductGroupCode(productGroupCode)),

      handleUpdateEditor: (data, templateUseType) => dispatch(ActionEditor.updateEditor(data, templateUseType)),

      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
      handleCloseContentsLayer: () => dispatch(ActionLayer.closeContentsLayer()),
      handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),

      handleRequestDeliveryCj: (type, options) => dispatch(ActionOrder.requestDeliveryCj(type, options)),

      handleUpdateUIScroll: (targetY, easingType) => dispatch(ActionUI.updateUIScroll(targetY, easingType)),
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
  })(Delivery),
);
