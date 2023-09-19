'use strict';

import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from "next/router";

import { ActionOrderHistory, ActionLog, ActionCommon, ActionOrder } from 'actions/index';
import { goHome, goMemberCart } from 'utils/url';

import Finish from "components/payment/finish";

class Payment extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      ready: false
    };
  }

  componentDidMount() {
    let { states } = this.props;
    let { user: { userId } } = states;

    if(!!userId) {
      goMemberCart();
    } else {
      goHome()
    }

    (window.name || '').match(/oh-print-me/i) && window.self.close();
  }

  render() {
    let { actions, states, router: { query, pathname }} = this.props;
    let { ready } = this.state;

    return ready &&(
      <div className={`payment-wrap complete`}>
        <Finish {...{
          states,
          actions,
          query,
          success: "complete".match(/complete/i)
        }}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    states: {
      user: state.user,
      config: state.config,
      order: state.order
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleRequestOrderHistoryByOrderCode: (orderCode) => dispatch(ActionOrderHistory.requestOrderHistoryByOrderCode(orderCode)),

      handleGetTemplateSpec: (data) => dispatch(ActionCommon.getTemplateSpec(data)),
      handleGetTemplateOptions: (data) => dispatch(ActionCommon.getTemplateOptions(data)),


      handleRequestOrderPaymentOption: () => dispatch(ActionOrder.requestOrderPaymentOption()),

      handleChangeLogConversion: (type, params) => dispatch(ActionLog.changeLogConversion(type, params))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Payment));
