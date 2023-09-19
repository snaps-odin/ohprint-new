import React from "react";
import update from "react-addons-update";
import { connect } from "react-redux";
import Lazyload from "react-lazyload";
import { Field, reduxForm } from "redux-form";

import { ActionLayer, ActionSMS, ActionEvents, ActionCommon } from "actions/index";
import { LayerTypes } from "constants/index";

import { goAppStore, goGooglePlay, addCdn } from "utils/url";
import { addZero } from "utils/format";
import { getDatasetByName } from "utils/dom";
import * as Validate from "utils/validate";
import { getDeepValue } from "utils/json";
import { embedVideo } from "utils/youtube";

import ImageLoader from "components/common/image-loader";
import Attention from "components/common/attention";
import { InputField } from "components/common/fields";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

class OverviewApp extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      activeIndex: 0,
    };

    this.products = [
      {
        label: "명함",
        image: "bcard",
      },
      {
        label: "스티커",
        image: "sticker",
      },
      {
        label: "어패럴",
        image: "apparel",
      },
      {
        label: "배너/현수막",
        image: "banner",
      },
      {
        label: "사인/포스터",
        image: "sign",
      },
      {
        label: "홍보물",
        image: "ad",
      },
      {
        label: "카드",
        image: "card",
      },
      {
        label: "액세서리",
        image: "acc",
      },
    ];

    this.interval = {
      id: null,
      sec: 6000,
    };

    this.player = {
      videoId: "uT1bPNdK3Js",
      video: null,
      ready: false,
    };

    this.onClickGoGooglePlay = this.onClickGoGooglePlay.bind(this);
    this.onClickGoAppStore = this.onClickGoAppStore.bind(this);
    this.onClickProductView = this.onClickProductView.bind(this);
    this.onClickGetCoupon = this.onClickGetCoupon.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.onPlayerReady = this.onPlayerReady.bind(this);
    this.onPlayerError = this.onPlayerError.bind(this);
  }

  onClickGoGooglePlay(event) {
    goGooglePlay();
  }

  onClickGoAppStore(event) {
    goAppStore();
  }

  onClickGetCoupon(event) {
    let {
      actions: { handleOpenAlertLayer, handleCreateEventsCouponByIdx, handleExecuteAfterUserLogin },
    } = this.props;

    handleExecuteAfterUserLogin()
      .then(() => {
        handleCreateEventsCouponByIdx(9).then((result) => {
          handleOpenAlertLayer({
            description: result["message"] ? result["message"] : "쿠폰이 발급되었습니다",
          });
        });
      })
      .catch((error) => {});
  }

  onClickProductView(event) {
    let index = Number(getDatasetByName(event.currentTarget, "index") || 0);

    this.changeProductView(index);
  }

  onSubmit(values) {
    let {
      actions: { handleOpenAlertLayer, handleRequestSMSApp },
    } = this.props;

    return handleRequestSMSApp(values["phoneNumber"])
      .then((result) => {
        handleOpenAlertLayer({
          description: "전송이 완료되었습니다.",
        });
      })
      .catch((error) => {
        handleOpenAlertLayer({
          description: error,
        });
      });
  }

  changeProductView(index) {
    let { activeIndex } = this.state;

    activeIndex !== index &&
      Promise.all([this.clearTimer()])
        .then(() => {
          this.setState(
            update(this.state, {
              activeIndex: { $set: index },
            }),
          );
        })
        .then(() => {
          this.setTimer();
        });
  }

  setTimer() {
    this.interval["id"] = window.setInterval(() => {
      let index = this.products.length - 1 <= Number(this.state["activeIndex"]) ? 0 : Number(this.state["activeIndex"]) + 1;
      this.changeProductView(index);
    }, this.interval["sec"]);
  }

  clearTimer() {
    this.interval["id"] && window.clearInterval(this.interval["id"]);
  }

  onPlayerError(event) {
    window.console.error(event.data);
  }

  onPlayerReady(event) {
    let { ready } = this.player;

    !ready &&
      Promise.all([event.target && (this.player["video"] = event.target), (this.player["ready"] = true)]).then(() => {
        event.target["mute"]();
      });
  }

  getVideo(event) {
    return event ? event.target : this.player["video"];
  }

  initialize() {
    let { videoId } = this.player;

    this.player["video"] = embedVideo({
      targetId: videoId,
      videoId,
      width: 454,
      height: 807,
      playerVars: {
        autoplay: 0,
        controls: 1,
        loop: 0,
        rel: 0,
        quality: "large",
        playsinline: 1,
      },
      events: {
        onStateChange: this.onPlayerStateChange,
        onError: this.onPlayerError,
        onReady: this.onPlayerReady,
      },
    });

    this.setTimer();
  }

  componentDidMount() {
    this.initialize();
  }

  componentWillUnmount() {
    let target = this.getVideo();

    target && target["destroy"]();
  }

  render() {
    let {
      handleSubmit,
      submitting,
      states: { currentForm },
    } = this.props;
    let { activeIndex } = this.state;

    let productImage = this.products[activeIndex]["image"];
    let errorMessage = getDeepValue(currentForm, "syncErrors.phoneNumber") || null;
    let touched = getDeepValue(currentForm, "fields.phoneNumber.touched") || false;

    let { videoId } = this.player;

    return (
      <div className="overview-app-wrap">
        <div className="container">
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div className="top">
              <div>
                <h1>
                  모바일에서도
                  <br />
                  편리하게 오프린트미
                </h1>
                <p>
                  PC에서 할 수 있는 건 모바일에서도 다 돼요.
                  <br />
                  이제 더 간편하게 편집하고 주문하세요.
                </p>
                <div>
                  <button type="button" onClick={this.onClickGoAppStore}>
                    <span className="icon icon-img-appstore" />
                    <span>App Store</span>
                  </button>
                  <button type="button" onClick={this.onClickGoGooglePlay}>
                    <span className="icon icon-img-googleplay" />
                    <span>Google Play</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="middle">
              <section className="coupon">
                <div className="left">
                  <h2>
                    이제 앱에서 만들고
                    <br />
                    <span>3,000원 할인</span>까지 받자!
                  </h2>
                  <div className="info">
                    {React.cloneElement(<Attention />, {
                      value: {
                        title: "유의사항",
                        children: [{ value: "쿠폰 유효기간 : 발급일로부터 15일" }, { value: "본 쿠폰은 ID당 1회 발급 가능하며, 모바일 앱에서만 사용 가능합니다." }, { value: "해당 쿠폰은 오프린트미 모바일 앱에서 결제 시 사용 가능하며, 쿠폰 금액은 정상가에서 차감됩니다." }, { value: "부정한 방법으로 이벤트 참여 시 회수되거나 지급되지 않으며, 민형사상의 처벌을 받을 수 있습니다." }],
                      },
                    })}
                  </div>
                </div>
                <div className="right">
                  <div className="coupon">
                    <img src={addCdn("/images/overview/app/img-w-coupon@2x.png")} />
                  </div>
                  <button type="button" className="btn-blue-medium" onClick={this.onClickGetCoupon}>
                    쿠폰 다운로드
                  </button>
                </div>
              </section>
            </div>

            <div className="bottom">
              <section className="synchronization">
                <div className="inner">
                  <h2>PC와 모바일의 완벽한 동기화</h2>
                  <span>언제 어디서나 편집하던 디자인 그대로 열어보고 수정하고 주문하세요.</span>
                </div>
              </section>
              <section className="product">
                <div className="inner">
                  <span className="icon icon-img-w-number-01" />
                  <h2>모든 상품 모바일에서 주문가능</h2>
                  <p>어떤 상품이든, 어떤 디자인이든 모바일에서 주문할 수 있어요.</p>
                  <div className="top">
                    {this.products.reduce((target, product, index) => {
                      target.push(
                        <button type="button" className={`${activeIndex === index ? "active" : ""}`} data-index={index} onClick={this.onClickProductView}>
                          {product["label"]}
                        </button>,
                      );

                      this.products.length - 1 > index && target.push(<span className="dot" />);

                      return target;
                    }, [])}
                  </div>
                  <div className="bottom">
                    <span className="background-icon" />
                    <div className={`merry-go-round`}>
                      <ul>
                        {new Array(4).fill(0).map((item, index) => (
                          <li>
                            <Lazyload throttle={200} height={100}>
                              <div>
                                <span className="shadow-item">
                                  <img src={addCdn(`/images/overview/app/product-${productImage}-${productImage !== "apparel" ? addZero((index % 4) + 1, 2) : "01"}-shadow@2x.png`)} />
                                </span>
                                <span className="product-item">
                                  <img src={addCdn(`/images/overview/app/product-${productImage}-${addZero((index % 4) + 1, 2)}@2x.png`)} />
                                </span>
                              </div>
                            </Lazyload>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mobile">
                      <div>
                        <ul style={{ left: `${302 * activeIndex * -1}px` }}>
                          {this.products.reduce((target, product) => {
                            target.push(
                              <li>
                                <img src={addCdn(`/images/overview/app/img-w-mobile-01-${product["image"]}@2x.jpg`)} />
                              </li>,
                            );

                            return target;
                          }, [])}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="edit">
                <div className="inner">
                  <span className="icon icon-img-w-number-02" />
                  <h2>누구나 할 수 있는 손안에 편집기</h2>
                  <p>
                    터치 몇 번으로 나만의 디자인을 완성하세요.
                    <br />
                    앱만 설치하면 누구나 할 수 있어요.
                  </p>
                  <span className="background-icon" />
                  <ul>
                    {[
                      { title: "텍스트 편집", image: "img-w-mobile-02" },
                      { title: "클립아트", image: "img-w-mobile-04" },
                      { title: "이미지 편집", image: "img-w-mobile-03" },
                    ].reduce((target, item) => {
                      let { image, title } = item;

                      target.push(
                        <li>
                          <span>{title}</span>
                          <span>
                            {image &&
                              React.cloneElement(<ImageLoader />, {
                                imageUrl: addCdn(`/images/overview/app/${image}@2x.png`),
                              })}
                          </span>
                        </li>,
                      );

                      return target;
                    }, [])}
                  </ul>
                </div>
              </section>

              <section className="order">
                <div className="inner">
                  <span className="icon icon-img-w-number-03" />
                  <h2>쉽고 간편한 상품관리와 주문</h2>
                  <p>이미 디자인을 완료했다면 옵션만 변경해서 주문해보세요.</p>
                  <span className="background-icon" />
                  <ul>
                    {[
                      { title: "옵션 변경", image: "img-w-mobile-05" },
                      { title: "주문하기", image: "img-w-mobile-06" },
                    ].reduce((target, item) => {
                      let { image, title } = item;

                      target.push(
                        <li>
                          <span>{title}</span>
                          <span>
                            {image &&
                              React.cloneElement(<ImageLoader />, {
                                imageUrl: addCdn(`/images/overview/app/${image}@2x.png`),
                              })}
                          </span>
                        </li>,
                      );

                      return target;
                    }, [])}
                  </ul>
                </div>
              </section>

              <section className="payment">
                <div className="inner">
                  <span className="icon icon-img-w-number-04" />
                  <h2>더 빠른 결제와 배송 조회</h2>
                  <p>
                    결제도 배송 조회도 단 몇 초면 끝!
                    <br />
                    모바일에서 가능해요.
                  </p>
                  <span className="background-icon" />
                  <ul>
                    {[
                      { title: "결제", image: "img-w-mobile-07" },
                      { title: "배송조회", image: "img-w-mobile-08" },
                    ].reduce((target, item) => {
                      let { image, title } = item;

                      target.push(
                        <li>
                          <span>{title}</span>
                          <span>
                            {image &&
                              React.cloneElement(<ImageLoader />, {
                                imageUrl: addCdn(`/images/overview/app/${image}@2x.png`),
                              })}
                          </span>
                        </li>,
                      );

                      return target;
                    }, [])}
                  </ul>
                </div>
              </section>

              <section className="movie">
                <div className="inner">
                  <span className="icon icon-img-w-number-05" />
                  <h2>한번 보고 따라 하기</h2>
                  <p>나에게 딱 맞는 디자인 명함을 1분 만에 만들어 보세요.</p>
                  <div>
                    <div className="mobile">
                      <div className="youtube-player" id={videoId} />
                    </div>
                  </div>
                </div>
              </section>

              <section className="download">
                <div className="inner">
                  <form>
                    <h2>오프린트미 앱 다운로드</h2>
                    <ul>
                      <li>
                        <span className="qrcode">
                          <img src={addCdn("/images/overview/app/qr-code.jpg")} />
                        </span>
                      </li>
                      <li>
                        <button type="button" onClick={this.onClickGoAppStore}>
                          <span className="icon icon-img-appstore" />
                          <span>App Store</span>
                        </button>
                        <button type="button" onClick={this.onClickGoGooglePlay}>
                          <span className="icon icon-img-googleplay" />
                          <span>Google Play</span>
                        </button>
                      </li>
                      <li>
                        <span>
                          <Field name="phoneNumber" type="text" placeholder="링크를 받을 연락처를 입력하세요." className="box" maxLength={13} component={InputField} validate={[Validate.required, Validate.phoneNumber]} />
                        </span>
                        <span>
                          <button type="submit" className={`btn-blue-medium`} disabled={submitting}>
                            문자 보내기
                          </button>
                        </span>
                        {touched && errorMessage && <span className="error">{errorMessage}</span>}
                        <span>*입력하신 번호는 저장되지 않습니다.</span>
                      </li>
                    </ul>
                  </form>
                </div>
              </section>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const formName = "overview-app";

const mapStateToProps = (state, ownerProps) => {
  return {
    states: {
      ...ownerProps.states,

      user: state.user,
      currentForm: state.form[formName],
    },
  };
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      ...ownerProps.actions,

      handleCreateEventsCouponByIdx: (idx) => dispatch(ActionEvents.createEventsCouponByIdx(idx)),

      handleRequestSMSApp: (phoneNumber) => dispatch(ActionSMS.requestSMSApp(phoneNumber)),

      handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),
      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
      handleCloseContentsLayer: () => dispatch(ActionLayer.closeContentsLayer()),

      handleExecuteAfterUserLogin: () => dispatch(ActionCommon.executeAfterUserLogin()),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: formName,
  })(OverviewApp),
);

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
