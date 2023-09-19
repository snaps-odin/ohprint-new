'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { goHome } from 'utils/url';
import {withRouter} from "next/router";

import Embed from "components/payment/embed";

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

    if (!!userId) {
      this.setState({ ready: true });
    } else {
      goHome();
    }

    (window.name || '').match(/oh-print-me/i) && window.self.close();
  }

  render() {
    let { router: { query }} = this.props;
    let { ready } = this.state;

    return ready &&(
        <div className={`payment-wrap open`}>
          <Embewd {...{query}}/>
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

export default connect(mapStateToProps, null)(withRouter(Payment));
