import React from 'react';
import {connect} from "react-redux";
import { ActionLayer, ActionCS } from 'actions/index';

class NEW_YEAR_PLAN_SUCCESS extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickClose = this.onClickClose.bind(this);
  }

	onClickClose(event) {
    let { actions: { handleCloseContentsLayer }, options: { callback } } = this.props;

    Promise.all([
      callback && callback(false)
    ]).then(() => {
      handleCloseContentsLayer();
    });
	}

	render() {
		return (
			<div className="events-new-year-plan-success-layer-wrap popup">
				<div className="container">
          <button type="button" className="btn-black-medium" onClick={this.onClickClose}>확인</button>
				</div>

        <button className="icon icon-close-1414 close" onClick={this.onClickClose}/>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
  return {
    states: {}
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleCloseContentsLayer: () => dispatch(ActionLayer.closeContentsLayer()),
      handleOpenCS: () => dispatch(ActionCS.openCS()),
      handleTouchCS: () => dispatch(ActionCS.touchCS()),
      handleChangeCSTabFocus: (index) => dispatch(ActionCS.changeCSTabFocus(index)),
      handleChangeCSTabWidth: width => dispatch(ActionCS.changeCSTabWidth(width)),
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(NEW_YEAR_PLAN_SUCCESS);
