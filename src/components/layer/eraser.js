import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { ActionLayer, ActionCoupon } from 'actions/index';
import { getEnv } from 'utils/url';

class Eraser extends React.Component {
  constructor(...args) {
    super(...args);

    this.message = '쿠폰이 발급 되었습니다.';
    this.couponNumber = '125F1750-8466-BDEC';

    this.onReceiveMessage = this.onReceiveMessage.bind(this);
    this.getAlertMessage = this.getAlertMessage.bind(this);
  }
  onReceiveMessage(event) {
    let { data : { type, imageData, value } } = event;
    let { actions : { handleCloseContentsLayer, handleCreateCouponByCouponCode, handleOpenAlertLayer }, states: { user: { loggedIn } }, options : { parent } } = this.props;

    if(type === "closeBackgroundEraser"){
      if(!imageData) {
        handleCloseContentsLayer();
      }
/*        if(loggedIn){

          Promise.all([
            handleCreateCouponByCouponCode(this.couponNumber)
          ]).then((result) => {
            handleOpenAlertLayer({
              description: this.getAlertMessage(),
              callback: (confirmed) => (handleCloseContentsLayer())
            })
          }).catch(error => {
            if(parent === "event"){
              handleOpenAlertLayer({
                description: '이미 참여하셨습니다.<br/>' +
                  '지금 바로 쿠폰함을 확인해보세요!',
                callback: (confirmed) => (handleCloseContentsLayer())
              })
            }else{
              handleCloseContentsLayer();
            }

          });

        }else{
          handleCloseContentsLayer();
        }*/
    }

  }

  getAlertMessage(){
    let { options : { parent } } = this.props;
    let defaultMsg = this.message;

    if(parent === "event"){
      defaultMsg = "쿠폰이 발급 되었습니다.<br/>지금 바로 쿠폰함을 확인해보세요!";
    }

    if(parent === "always"){
      defaultMsg = "전상품 20% 할인 쿠폰이 발급되었습니다.<br/>" +
        "지금 바로 쿠폰함을 확인해보세요!";
    }


    return defaultMsg;
  }

  componentDidMount() {
    window.addEventListener('message', this.onReceiveMessage);

  }

  componentWillUnmount() {
    window.removeEventListener('message', this.onReceiveMessage);
  }


  render() {
    //1979 1080
    //width: 862px; height: 594px;
    let w = '862px';
    let h = '642px';

    let checkEnv = (getEnv() === "prd");
    //let eraserURL = !!checkEnv ? 'https://eraser.snaps.com' : 'https://stg-eraser.snaps.com';
    let eraserURL = "https://ce.snaps.com/eraser/index.html";

    return (
      <iframe src={`${eraserURL}?langCode=ko`} width={`${w}`} height={`${h}`} frameBorder="0" scrolling="no"/>
    );
  }
}

const formName = 'layer-eraser';

const mapStateToProps = (state, ownerProps) => {
  return {
    states: {
      user: state.user
    }
  };
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      handleCloseContentsLayer: () => dispatch(ActionLayer.closeContentsLayer()),
      handleCreateCouponByCouponCode: (couponCode) => dispatch(ActionCoupon.createCouponByCouponCode(couponCode)),
      handleOpenAlertLayer: options => dispatch(ActionLayer.openAlertLayer(options)),
    }
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: formName
})(Eraser));
