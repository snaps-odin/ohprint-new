'use strict';

import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from "next/router";

import { ActionOrder } from 'actions/index';
import { goHome } from 'utils/url';

import Finish from "components/payment/finish";

class Payment extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      ready: false
    };
  }

  componentDidMount() {
    let { states, actions : { handleRequestOrderPaymentOption }  } = this.props;
    let { user: { userId } } = states;

    if(!!userId) {
      //handleRequestOrderPaymentOption
      Promise.all([
        handleRequestOrderPaymentOption()
      ]).finally(()=>{
        this.setState({ ready: true });
      });
    } else {
      goHome()
    }

    (window.name || '').match(/oh-print-me/i) && window.self.close();
  }

  render() {
    let { actions, states, router: { query }} = this.props;
    let { ready } = this.state;

    return ready &&(
      <div className={`payment-wrap failure`}>
        <Finish {...{
          states,
          actions,
          query,
          success: "failure".match(/complete/i)
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
      handleRequestOrderPaymentOption: () => dispatch(ActionOrder.requestOrderPaymentOption()),
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Payment));
