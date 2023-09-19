import React from "react";
import update from "react-addons-update";
import { connect } from "react-redux";

import { goLink } from "utils/url";
import { openCenter } from "utils/window";
import { clipBoard } from "utils/clipboard";
import { LayerTypes } from "constants/index";
import { ActionEvents, ActionLayer, ActionCoupon } from "actions/index";

import { ImageMap } from "@qiuz/react-image-map";
import { CDN_URL } from "configs/aws";
import { dataLayerPromotionView } from "configs/google-analytics/ga";

import { plusChannel } from "utils/kakao";

class EventsMapContent extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      map: [],
    };

    this.initialize = this.initialize.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }

  componentDidMount() {
    this.initialize();
  }

  componentDidUpdate(prevProps, prevState) {
    let { data: prevData } = prevProps;
    let { data: currentData } = this.props;

    !Object.is(prevData, currentData) && this.initialize();
  }

  initialize() {
    const { title } = this.props;

    this.setState(
      update(this.state, {
        map: {
          $set: this.props.data.map((item, idx) => {
            return {
              ...item,
              render: (area, index) => <div style={{ width: "100%", height: "100%", cursor: "pointer" }} />,
            };
          }),
        },
      }),
    );

    dataLayerPromotionView(title);
  }

  onMapClick(area, idx) {
    let { desc } = area;
    const keys = Object.keys(desc);

    keys.map((key, idx) => {
      switch (key) {
        case "getCoupons_code":
          this.getCoupons({
            couponNumber: desc[key],
            isNeedLogin: true,
          });
          break;
        case "goLink_url":
          this.goLink({
            value: desc[key],
            isNeedLogin: false,
          });
          break;
        case "goOutLink_url":
          this.goOutLink({
            value: desc[key],
            isNeedLogin: false,
          });
          break;
        case "getCouponsMove_code":
          this.getCouponsMove({
            couponNumber: desc[key],
            isNeedLogin: true,
            callbackGoLink: desc["getCouponsMove_url"],
          });
          break;
        case "copyText_text":
          this.copyText(desc[key]);
          break;
        case "goKakaoChannel":
          plusChannel(desc[key]);
          break;

        default:
          break;
      }
    });
  }

  getCoupons(data) {
    const {
      actions: { handleCreateCouponByCouponCode, handleOpenAlertLayer },
    } = this.props;

    this.executeAfterUserLogin(data["isNeedLogin"], () => {
      Promise.all([handleCreateCouponByCouponCode(data.couponNumber)])
        .then((result) => {
          handleOpenAlertLayer({ description: "쿠폰이 발급 되었습니다." });
        })
        .catch((error) => {
          if (error === "해당 쿠폰은 등록 가능한 수량을 넘었습니다." || error === "해당 쿠폰은 만료 되었습니다.") {
            error = "쿠폰 지급이 종료되었습니다.<br/>다음 기회에 이용해주세요.";
          }

          if (error === "이미 등록된 쿠폰입니다.") {
            error = "쿠폰이 이미 발급되었습니다.<br/>쿠폰/머니 페이지에서 확인해보세요.";
          }

          if (error === "해당 쿠폰을 찾을 수 없습니다.") {
            error = "쿠폰이 곧 오픈됩니다.<br/>조금만 더 기다려주세요!";
          }

          handleOpenAlertLayer({ description: error });
        });
    });
  }

  goLink(data) {
    this.executeAfterUserLogin(data["isNeedLogin"], () => {
      goLink(data["value"]);
    });
  }

  goOutLink(data) {
    openCenter(data["value"], data["name"] || "", data["width"] || window.outerWidth, data["height"] || window.outerHeight);
  }

  getCouponsMove(data) {
    const {
      actions: { handleCreateCouponByCouponCode, handleOpenAlertLayer },
    } = this.props;

    this.executeAfterUserLogin(data["isNeedLogin"], () => {
      Promise.all([handleCreateCouponByCouponCode(data.couponNumber)])
        .then((result) => {
          handleOpenAlertLayer({
            description: "쿠폰이 발급 되었습니다.",
            callback: () => goLink(data.callbackGoLink),
          });
        })
        .catch((error) => {
          if (error === "해당 쿠폰은 등록 가능한 수량을 넘었습니다." || error === "해당 쿠폰은 만료 되었습니다.") {
            error = "쿠폰 지급이 종료되었습니다.<br/>다음 기회에 이용해주세요.";
          }

          if (error === "이미 등록된 쿠폰입니다.") {
            error = "쿠폰이 이미 발급되었습니다.";
          }

          if (error === "해당 쿠폰을 찾을 수 없습니다.") {
            error = "쿠폰이 곧 오픈됩니다.<br/>조금만 더 기다려주세요!";
          }

          handleOpenAlertLayer({
            description: error,
            callback: () => goLink(data.callbackGoLink),
          });
        });
    });
  }

  copyText(text) {
    const {
      actions: { handleOpenAlertLayer },
    } = this.props;
    const target = document.querySelector("input[name=event-copy-text]") || "123";
    if (!target) {
      return handleOpenAlertLayer({ description: "복사할 정보를 찾을 수 없습니다." });
    }
    target.setAttribute("value", text);
    target.value = text;
    const message = "복사 완료!<br/>공유하고 싶은 곳에 붙여넣기 하세요.";
    Promise.all([clipBoard(target)])
      .then(() => {
        handleOpenAlertLayer({
          description: message,
        });
      })
      .catch((error) => {
        handleOpenAlertLayer({
          description: error,
        });
      });
  }

  executeAfterUserLogin(isNeedLogin, callback) {
    let {
      states: {
        user: { loggedIn },
      },
      actions: { handleOpenContentsLayer },
    } = this.props;

    loggedIn || !isNeedLogin
      ? callback && callback()
      : handleOpenContentsLayer(LayerTypes.LOGIN, {
          redirect: () => {
            callback && callback();
          },
        });
  }

  render() {
    const { idx } = this.props;
    const { map } = this.state;

    return (
      <div>
        <ImageMap className="usage-map" src={`${CDN_URL}/map_event/${idx}/pc/e_body/eventBody-${idx}.jpg`} map={map} onMapClick={this.onMapClick} />
        <input name="event-copy-text" defaultValue="" style={{ width: "1px", height: "1px", opacity: 0 }} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    states: {
      config: state.config,
      user: state.user,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),
      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
      handleCreateCouponByCouponCode: (couponCode) => dispatch(ActionCoupon.createCouponByCouponCode(couponCode)),
    },
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(EventsMapContent);
