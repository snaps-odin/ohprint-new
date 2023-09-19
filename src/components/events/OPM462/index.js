import React from 'react';

import { ImageMap } from '@qiuz/react-image-map';
import { connect } from "react-redux";

import styled from "styled-components";

import { ActionEvents, ActionCoupon } from "actions/index";

import data from "./data.json";
import {ActionLayer} from "../../../actions";
import {eventAlready} from "../../../actions/events";
import {LayerTypes} from "../../../constants";

const Wrap = styled.div`
  position: relative;

  .coupon-area {
    position: absolute;
    top: 1107px;
    left: 223px;
    width: 690px;

    img {
      max-width: 100%;
    }
  }

  .btn-map {
    position: absolute;
    top: 1450px;
    left: 367px;
    width: 407px;
    > img{
      width: 100%;
    }
  }

  .button-area {
    position: absolute;
    top: 1450px;
    left: 367px;
    width: 407px;

    img {
      max-width: 100%;
    }
  }
`;

class OPM462 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageMapData : [],
      isSoldOut: false,
    };

    this.eventNumber = 462;

    this.onMapClick = this.onMapClick.bind(this);
    this.fetchEvent = this.fetchEvent.bind(this);
    this.checkEvent = this.checkEvent.bind(this);
  }

  componentDidMount() {

    this.setState({
      imageMapData : data.map((item) => {
        return {
          ...item,
          render: () => (
            <div style={{width: '100%', height: '100%', cursor: 'pointer'}}/>
          ),
        }
      })
    });

    this.fetchEvent();
  }

  async fetchEvent() {
    const { handleEventAlready } = this.props.actions;

    const options = {
      limit: 500,
      eventDay: 5,
      couponIssueCode: "B1273475",
    }

    const fetchData = await handleEventAlready(this.eventNumber, options);

    const { couponLimit } = fetchData;

    this.setState({
      isSoldOut: couponLimit
    });

    return couponLimit;
  }

  onMapClick(area, idx){
    const { states: { user: { loggedIn } }, handleOnReceiveMessage, actions: { handleOpenContentsLayer } } = this.props;
    const { desc } = area;
    const { type } = desc;

    if (type === "getCouponsV2") {

      if(loggedIn){
        this.checkEvent(desc)
      }else{
        handleOpenContentsLayer(LayerTypes.LOGIN, {
          redirect: () => {
            this.checkEvent(desc)
          }
        });
      }

    } else {
      handleOnReceiveMessage({
        data : desc
      });
    }
  }

  checkEvent(desc){
    const { actions: { handleCreateCouponByCouponCode, handleOpenAlertLayer } } = this.props;

    this.fetchEvent().then(res => {
      if(!res){
        Promise.all([
          handleCreateCouponByCouponCode(desc.couponNumber)
        ]).then((result) => {
          handleOpenAlertLayer({
            description: "쿠폰이 발급 되었습니다.",
            callback: (confirmed) => {

            }
          })
        }).catch(error => {
          if(error === "해당 쿠폰은 등록 가능한 수량을 넘었습니다." || error === "해당 쿠폰은 만료 되었습니다."){
            error = '쿠폰 지급이 종료되었습니다.<br/>다음 기회에 이용해주세요.';
          }

          if(error === "이미 등록된 쿠폰입니다."){
            error = '쿠폰이 이미 발급되었습니다.<br/>쿠폰/머니 페이지에서 확인해보세요.';
          }

          if(error === "해당 쿠폰을 찾을 수 없습니다."){
            error = '쿠폰이 곧 오픈됩니다.<br/>조금만 더 기다려주세요!';
          }

          if(error.indexOf("쿠폰이 모두 소진") !== -1){
            this.setState({
              isSoldOut: true
            });
          }

          handleOpenAlertLayer({
            description: error,
            callback: (confirmed) => {

            }
          })
        });
      }else{
        handleOpenAlertLayer({
          description: "오늘 쿠폰이 모두 소진되었어요. &#x1F605;",
          callback: (confirmed) => {

          }
        })
      }
    });
  }

  render() {
    const { isSoldOut, imageMapData } = this.state;

    return imageMapData.length > 0 && (
      <Wrap>
        <ImageMap
          className="usage-map"
          src={`https://front-cdn.ohprint.me/map_event/${this.eventNumber}/pc/e_body/eventBody-${this.eventNumber}${isSoldOut ? '-off' : ''}.jpg`}
          map={this.state.imageMapData}
          onMapClick={this.onMapClick}
        />
      </Wrap>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    states: {
      user: state.user
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleCreateCouponByCouponCode: (couponCode) => dispatch(ActionCoupon.createCouponByCouponCode(couponCode)),
      handleOpenAlertLayer: options => dispatch(ActionLayer.openAlertLayer(options)),
      handleEventAlready: (idx,params) => dispatch(ActionEvents.eventAlready(idx,params)),
      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(OPM462);

