import React from 'react';
import {connect} from "react-redux";
import { ActionLayer, ActionCS } from 'actions/index';

class CSWrite extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickClose = this.onClickClose.bind(this);
    this.onClickConfirm = this.onClickConfirm.bind(this);
  }

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

  onClickConfirm(event) {
    let { actions: { handleCloseContentsLayer, handleChangeCSTabFocus, handleOpenCS, handleTouchCS, handleChangeCSTabWidth } } = this.props;

    handleCloseContentsLayer();

    Promise.all([
      handleChangeCSTabFocus(1),
      handleOpenCS(),
      handleChangeCSTabWidth(97)
    ]).then(() => {
      handleTouchCS();
    });
  }

	render() {
		return (
			<div className="cs-write-layer-wrap popup">
				<div className="container">
          <div className="middle">
            <div className="inner">

              <div className="middle">
                <p>
                  고객센터 문의량 증가로 인해 전화상담이 지연되고 있습니다. 1:1문의를 남겨주시면 순차적으로 확인 후
                  빠르게 답변드릴 수 있도록 노력하겠습니다
                </p>
              </div>

              <div className="bottom">
                <div>
                  <div className="btnMap">
                    <button type="button" className="btn-blue-medium" onClick={this.onClickConfirm}>1:1 문의하기</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
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

module.exports = connect(mapStateToProps, mapDispatchToProps)(CSWrite);
