import React from 'react';
import { addCdn, goLink } from 'utils/url';
import {gtmV4_click_banner_toast} from "configs/google-analytics/ga-v4";
import {connect} from "react-redux";
import { ActionLayer, ActionUser, ActionCommon, ActionEvents } from 'actions/index';
import { nowDate } from 'utils/date'

class ToastBanner extends React.Component {
  btnURL = addCdn("/images/common/banner/btn-event-w@2x.png");

  onClick = () => {
    gtmV4_click_banner_toast(this.btnURL);
    goLink("/store/calendar-desk/intro/defaults");
  }

  agreeMarketing = () => {
    let { actions: { handleOpenAlertLayer, handleCloseContentsLayer, handleCreateEventsCommentsByIdx, handleExecuteAfterUserLogin, handleRequestUserByToken } } = this.props;

    let params = {
      receiveEmailAgree : true,
    }

    return handleExecuteAfterUserLogin().then(() => {
      handleCreateEventsCommentsByIdx(395, params).then(result => {

        let msg = result[ 'message' ];
        if(msg === "이벤트 참여가 완료되었습니다.<br/>무료 배송 쿠폰이 발급되었습니다."){
          msg = `앞으로 다양한 쿠폰·이벤트 소식을 전해드릴게요!<br/>(이메일 마케팅 수신 동의 일자 : ${nowDate().format('YYYY.MM.DD')})`
        }

        handleOpenAlertLayer({
          description: msg,
          callback: async () => {
            await handleRequestUserByToken();

            handleCloseContentsLayer();
          }
        });
      }).catch(error => {
        handleOpenAlertLayer({
          description: error,
          callback: () => { handleCloseContentsLayer(); }
        })
      });
    })
  }

  render() {
    let { states : { ui : { view : {  height } }}, toggleToastBanner } = this.props;

    let maxHeight = height*0.8;
    let bottomHeight = maxHeight-268;
    let nowHeight = (window.innerHeight-437)*0.037;

    return (
      <div>
        {
          (this.props.states.user.receiveEmailAgreeYN === "N") && (
            <div className="toast-popup-layer-wrap popup"
                 style={{minWidth:'300px'}}
            >
              <img src={addCdn("/images/common/banner/popup-marketing-agree@2x.png")} alt="다양한 쿠폰 이벤트 소식을 가장 먼저 알려드릴게요! 이메일 마케팅 수신 동의하고 쿠폰/이벤트 소식을 실시간으로 받아보세요!" />
              <button type="button" className="btn-marketing-agree" onClick={this.agreeMarketing}>
                <img src={addCdn("/images/common/banner/btn-marketing-agree@2x.png")} alt="받아보기" />
              </button>
              <button type="button" className="close" onClick={toggleToastBanner}>
                <img src={addCdn("/images/common/banner/btn-marketing-disagree@2x.png")} alt="괜찮습니다" />
              </button>
            </div>
          )
        }
      </div>
    )
  }
};

const mapStateToProps = (state, ownerProps) => {
  return {
    ...ownerProps
  }
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      ...ownerProps.actions,
      handleCloseContentsLayer: () => dispatch(ActionLayer.closeContentsLayer()),
      handleRequestUserByToken: () => dispatch(ActionUser.requestUserByToken()),
      handleCreateEventsCommentsByIdx: (eventIdx, formData) => dispatch(ActionEvents.createEventsCommentsByIdx(eventIdx, formData)),
      handleExecuteAfterUserLogin: () => dispatch(ActionCommon.executeAfterUserLogin()),
      handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),
    }
  }
};


module.exports = connect(mapStateToProps, mapDispatchToProps)(ToastBanner);
