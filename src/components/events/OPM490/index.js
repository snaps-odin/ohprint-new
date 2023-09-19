import React from 'react';
import { ImageMap } from '@qiuz/react-image-map';
import {connect} from "react-redux";
import styled from "styled-components";

import { ActionEvents, ActionLayer, ActionCoupon } from "actions/index";
import { LayerTypes } from "constants/index";

import VideoThumbnail from "../video-thumbnail";

import data from "./data.json";

const Wrap = styled.div`
  position: relative;

  .gif-box {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 1140px;

    img {
      max-width: 100%;
    }
  }

  .video-box {
    z-index: 10;
    width: 1000px;
    height: 562px;
    position: absolute;
    bottom: 364px;
    left: 70px;

    video {
      width: 1000px;
      height: 562px;
    }
  }

  .radio-box {
    display: flex;
    position: absolute;
    width: 1000px;
    left: 70px;
    bottom: 260px;

    > li {
      width: 190px;
      height: 80px;

      img {
        max-width: 100%;
        vertical-align: middle;
      }

      + li {
        margin-left: 12px;
      }
    }
  }
`;

const btnList = [
  'btn-01',
  'btn-02',
  'btn-03',
  'btn-04',
  'btn-05',
];

class OPM490 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageMapData : [],
      activeIndex: null,
    }

    this.eventNumber = 490;

    this.onMapClick = this.onMapClick.bind(this);
    this.initData = this.initData.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
    this.fetchEvent = this.fetchEvent.bind(this);
  }

  componentDidMount() {
    this.initData();
  }

  async initData(){
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
  }

  onMapClick(area) {
    const { actions: { handleOpenContentsLayer }, states: { user: { loggedIn } } } = this.props;
    let { desc } = area;

    if (!loggedIn) {
      handleOpenContentsLayer(LayerTypes.LOGIN, {
        redirect: () => {
          this.fetchEvent(desc);
        }
      });
    } else {
      this.fetchEvent(desc);
    }
  }

  async fetchEvent(desc) {
    const { activeIndex } = this.state;
    const { actions: { handleCreateCouponByCouponCode, handleOpenAlertLayer, handleCreateEventsCommentsByIdx, handleEventAlready } } = this.props;
    const { getCoupons_code } = desc;

    const isUnCorrectedAnswer = activeIndex !== 2;

    try {
      const { joined } = await handleEventAlready(this.eventNumber);

      if (joined) {
        handleOpenAlertLayer({
          description: '<span>이미 참여하셨어요! 🙂<br />[쿠폰/머니] 페이지에서<br />전 상품 20% 할인쿠폰을<br />확인해 보세요.</span>',
        });
        return;
      }

      if (isUnCorrectedAnswer) {
        handleOpenAlertLayer({
          description: '<span>아쉬워요!<br />한 번 더 듣고👂 정답을 맞혀보세요.</span>',
        });
        return;
      }

      const { message } = await handleCreateCouponByCouponCode(getCoupons_code);

      if (message === "Request Success") {
          const { message } = await handleCreateEventsCommentsByIdx(this.eventNumber, {});

          if (message === "이벤트 참여가 완료되었습니다.<br/>무료 배송 쿠폰이 발급되었습니다.") {
            handleOpenAlertLayer({
              description: '<span>정답입니다. 🎉<br />전 상품 20% 할인쿠폰이 발급되었습니다.</span>',
            });
          }
      } else {
        handleOpenAlertLayer({
          description: message,
        });
      }

    } catch (error) {
      let errorMessage = error;

      if (error === "이미 등록된 쿠폰입니다.") {
        errorMessage = "이미 참여하셨어요! 🙂<br />[쿠폰/머니] 페이지에서<br />전 상품 20% 할인쿠폰을 확인해 보세요.</span>";
      }

      handleOpenAlertLayer({
        description: errorMessage,
      });
    }
  }

  handleClickButton(event, index) {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <Wrap style={{width: "1140px", height: "7389.52px"}}>
        <div className="gif-box">
          <img src="https://front-cdn.ohprint.me/map_event/490/pc/e_body/OPM-490.gif" alt="" />
        </div>
        <ImageMap
          className="usage-map"
          src={`https://front-cdn.ohprint.me/map_event/490/pc/e_body/eventBody-490.jpg`}
          map={this.state.imageMapData}
          onMapClick={this.onMapClick}
        />
        <div className="video-box">
          <VideoThumbnail
            src="https://front-cdn.ohprint.me/map_event/444/pc/e_body/OPM_444.mp4"
            poster="https://front-cdn.ohprint.me/map_event/490/pc/e_body/video-thumbnail.png"
          />
        </div>
        <ul className="radio-box">
          {btnList.map((item, index) => {
            const activeIndex = this.state.activeIndex;
            let imgSrc = '';

            if (activeIndex === index) {
              imgSrc = `https://front-cdn.ohprint.me/map_event/490/pc/e_body/btn-0${index + 1}-on@2x.png`;
            } else {
              imgSrc = `https://front-cdn.ohprint.me/map_event/490/pc/e_body/btn-0${index + 1}-off@2x.png`;
            }

            return (
              <li>
                <button onClick={() => this.handleClickButton(event, index)}>
                  <img src={imgSrc} alt={`${index}회`} />
                </button>
              </li>
            );
          })}
        </ul>
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
      handleCreateEventsCommentsByIdx: (eventIdx, formData) => dispatch(ActionEvents.createEventsCommentsByIdx(eventIdx, formData)),
      handleCreateCouponByCouponCode: (couponCode) => dispatch(ActionCoupon.createCouponByCouponCode(couponCode)),
      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
      handleOpenAlertLayer: options => dispatch(ActionLayer.openAlertLayer(options)),
      handleEventAlready: (idx,params) => dispatch(ActionEvents.eventAlready(idx,params)),
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(OPM490)

