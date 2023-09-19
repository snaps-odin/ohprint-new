import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import { ActionCommon, ActionEvents, ActionLayer, ActionSMS } from "actions/index";

import { addCdn, addDomain, goLink } from "utils/url";
import Draggable from "react-draggable";

import ScrollOut from "scroll-out";

import { getDocumentElement, getScrollTop } from "utils/scroll";
import { getDatasetByName } from "utils/dom";
import { LayerTypes } from "constants/index";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

class EraserApp extends React.Component {
  full = React.createRef();

  constructor(...args) {
    super(...args);

    this.videoList = {
      eraser: "/Upload/Data1/video/pc_opm_eraser.mp4",
      restore: "/Upload/Data1/video/pc_opm_restore.mp4",
    };

    this.videoImg = {
      eraser: "/Upload/Data1/video/pc_opm_eraser.mp4",
      restore: "/Upload/Data1/video/pc_opm_restore.mp4",
    };

    this.state = {
      fullX: 66.9,
      movePosition: { x: -178.74, y: 0 },
      fullSize: 0,
      eraserContent2: 100,
      videoType: "eraser",
      video: null,
      imgEraserState: "on",
      imgRestoreState: "off",
    };

    this.isIE = (navigator.appName === "Netscape" && navigator.userAgent.search("Trident") !== -1) || navigator.userAgent.toLowerCase().indexOf("msie") !== -1;
    //this.isIE = true;

    this.thumbnailMask = null;

    this.contents = [
      {
        image: "/images/store/overview/md/md-keyring@2x.jpg",
        title: "아크릴 키링",
        description: "내가 찾던 그 디자인을 아크릴 안에 쏙!<br/>다양한 종류와 고리 모양으로 원하는 키링을 만들어 보세요.",
        link: "/store/acrylic-keyring/intro/defaults",
      },
      {
        image: "/images/home/main-sticker-360280@2x.jpg",
        title: "스티커",
        description: "원하는 모양이나 사이즈로 자유롭게 만들 수 있는<br/>DIY 스티커부터 다양한 용지까지 만나보세요.",
        link: "/store/sticker/overview",
      },
      {
        image: "/images/store/overview/signs-posters/sp-poster-360280@2x.jpg",
        title: "포스터",
        description: "모두의 시선을 주목시켜<br/>톡톡한 홍보 효과를 경험해 보세요.",
        link: "/store/poster/intro/defaults",
      },
      {
        image: "/images/home/main-bizcard-360280@2x.jpg",
        title: "명함",
        description: "평범하지 않은 단 한 장으로<br/>유니크한 당신을 알려보세요.",
        link: "/store/business-card/overview",
      },
      {
        image: "/images/home/main-sign-360280@2x.jpg",
        title: "배너/현수막",
        description: "거리에서 행사장에서 시선을 사로잡아<br/>사람들의 발걸음을 멈춰 세우세요.",
        link: "/store/banner/overview",
      },
      {
        image: "/images/home/main-ss-apparel-360280@2x.jpg",
        // image : '/images/home/main-fw-apparel-360280@2x.jpg',
        title: "어패럴",
        description: "커스텀 디자인으로<br/>나만의 스타일을 연출해 보세요.",
        link: "/store/apparel/overview",
      },
    ];

    this.handleStart = this.handleStart.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.clickMove = this.clickMove.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onClickChangeVideoEraser = this.onClickChangeVideoEraser.bind(this);
    this.onClickChangeVideoRestore = this.onClickChangeVideoRestore.bind(this);
    this.onGoLink = this.onGoLink.bind(this);
    this.onMoveEraser = this.onMoveEraser.bind(this);
  }

  onMoveEraser() {
    let {
      actions: { handleOpenContentsLayer },
    } = this.props;
    handleOpenContentsLayer(LayerTypes.ERASER, { parent: "always" });
  }

  onClickChangeVideoRestore() {
    let { videoType } = this.state;
    if (videoType === "restore") return false;

    this.setState(
      {
        videoType: "restore",
        video: this.videoList.restore,
        imgEraserState: "off",
        imgRestoreState: "on",
      },
      () => {
        let video = this.videoTag;
        video.pause();
        video.load();
        video.play().then((r) => {});
      },
    );
  }

  onClickChangeVideoEraser() {
    let { videoType } = this.state;
    if (videoType === "eraser") return false;

    this.setState(
      {
        videoType: "eraser",
        video: this.videoList.eraser,
        imgEraserState: "on",
        imgRestoreState: "off",
      },
      () => {
        this.onVideoPlay();
      },
    );
  }

  onVideoPlay() {
    let video = this.videoTag;
    video.pause();
    video.load();
    video.play().then((r) => {});
  }

  clickMove(e) {
    let {
      fullX,
      movePosition: { x, y },
    } = this.state;
    let id = e.target.id;
    let data = {
      fullX: fullX - 1 <= 0 ? 0 : fullX - 1,
      movePosition: { x: x <= -540 + 5.4 ? -540 : x - 5.4, y },
    };

    if (id === "btn-drag-right") {
      data = {
        fullX: fullX >= 100 ? 100 : fullX + 1,
        movePosition: { x: x >= 5.4 || fullX >= 100 ? 0 : x + 5.4, y },
      };
    }

    this.setState(data);
  }

  handleStart(e, data) {}

  handleDrag(e, data) {
    let {
      target: { id, offsetWidth },
      clientX,
      offsetX,
      deltaX,
      layerX,
      x: eX,
      y: eY,
    } = e;
    let { lastX, right } = data;

    this.setState({
      fullX: 100 - (Math.abs(lastX) / 540) * 100,
    });
  }

  handleStop(e, data) {
    let { x, y } = data;
    this.setState({
      movePosition: { x: x, y: 0 },
    });
  }

  componentDidMount() {
    Promise.all([
      window.addEventListener("scroll", this.onScroll),
      ScrollOut({
        targets: "div",
      }),
    ]).then(() => {
      //Stickyfill.add(this.origin);
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll() {
    let t = getScrollTop();
    let { fullSize, video } = this.state;
    let nowHeight = window.innerHeight;
    let videoStep = this.videoContents;
    let isIE = this.isIE;

    if (!isIE) {
      if (t <= nowHeight * 0.75) {
        this.setState({
          fullSize: 0,
        });
      }

      if (t >= nowHeight * 0.75) {
        let mask = ((nowHeight - this.thumbnailMask.getBoundingClientRect().top) / nowHeight) * 100;
        let maskSize = mask <= 0 ? 0 : mask >= 100 ? 100 : mask;

        this.setState({
          fullSize: maskSize,
        });
      }

      if (t <= nowHeight * 2) {
        this.setState({
          eraserContent2: 100,
        });
      }

      if (t >= nowHeight * 2) {
        let mask = ((nowHeight - Math.abs(this.thumbnailMask.getBoundingClientRect().top)) / nowHeight) * 100;
        let maskSize = mask <= 0 ? 0 : mask >= 100 ? 100 : mask;

        this.setState({
          eraserContent2: maskSize,
        });
      }
    }

    let isView = getDatasetByName(videoStep, "scroll");
    if (isView === "in" && !video) {
      this.setState({
        video: this.videoList.eraser,
      });
    }
  }

  onGoLink(event) {
    goLink(getDatasetByName(event.currentTarget, "path"));
  }

  render() {
    let {
      handleSubmit,
      submitting,
      states: { currentForm },
    } = this.props;
    let { fullX, movePosition, fullSize, eraserContent2, video, imgEraserState, imgRestoreState } = this.state;
    let nowHeight = window.innerHeight;
    let {
      states: {
        config: {
          url: { cdn },
        },
      },
    } = this.props;
    let isIE = this.isIE;

    return (
      <div
        className="overview-eraser-wrap"
        ref={(c) => {
          this.el = c;
        }}
      >
        <div className="eraser-entrance">
          <div className="eraser-entrance-left">
            <span className="eraser-entrance-title">
              필요한 부분만 싹뚝!
              <br />
              <span className="pink">이미지 오려내기</span>로 <br />
              뚝딱 완성해요.
            </span>

            <span className="eraser-entrance-subTitle">원하는 부분만 이미지를 오려낼 수 있어요.</span>

            <div className="eraser-btn-start" onClick={this.onMoveEraser}>
              <div>시작하기</div>
            </div>
          </div>

          <div className="eraser-entrance-right">
            <div className="image-cut">
              <div className="image-control">
                <Draggable
                  axis="x"
                  handle=".handle"
                  position={movePosition}
                  defaultPosition={{ x: -178.74, y: 0 }}
                  bounds={{ right: 0, left: -540 }}
                  scale={1}
                  /*onStart={this.handleStart}*/
                  onDrag={this.handleDrag}
                  onStop={this.handleStop}
                  onMouseDown={this.clickMove}
                >
                  <div className="image-control-map handle">
                    <div className="images-control-left" id="btn-drag-left" />
                    <div className="images-control-right" id="btn-drag-right" />
                  </div>
                </Draggable>
              </div>
            </div>
            <div className="image-full" id="eraser-entrance-preview" style={{ width: `${fullX}%` }}>
              <div className={"bar"} />
            </div>

            <div className="left-text">원본</div>

            <div className="right-text">오려낸 이미지</div>
          </div>
        </div>

        {!isIE && (
          <div className="eraser-contents-map">
            <div
              className="eraser-contents-1"
              ref={(c) => {
                this.origin = c;
              }}
            >
              <div className="eraser-contents-1-title">
                <h1>
                  AI가 척척!
                  <br />
                  자동으로 이미지를 오려줘요.
                </h1>

                <h3>이미지만 선택해 주면 AI가 배경은 지우고 필요한 모습만 남길게요.</h3>
              </div>

              <div className="eraser-image-map">
                <div className="eraser-image-1">
                  <div className="eraser-image-1-sub-1" />
                  <div className="eraser-image-1-sub-2" style={{ clipPath: `polygon(100% 0, 100% 100%, ${fullSize}% 100%, ${fullSize}% 0)` }} />
                </div>
                <div className="eraser-image-2">
                  <div className="eraser-image-2-sub-1" />
                  <div className="eraser-image-2-sub-2" style={{ clipPath: `polygon(100% 0, 100% 100%, ${fullSize}% 100%, ${fullSize}% 0)` }} />
                </div>
                <div className="eraser-image-3">
                  <div className="eraser-image-3-sub-1" />
                  <div className="eraser-image-3-sub-2" style={{ clipPath: `polygon(100% 0, 100% 100%, ${fullSize}% 100%, ${fullSize}% 0)` }} />
                </div>
                <div className="eraser-image-4">
                  <div className="eraser-image-4-sub-1" />
                  <div className="eraser-image-4-sub-2" style={{ clipPath: `polygon(100% 0, 100% 100%, ${fullSize}% 100%, ${fullSize}% 0)` }} />
                </div>
              </div>

              <div className="eraser-contents-2" style={{ clipPath: `polygon(0 ${eraserContent2}%, 100% ${eraserContent2}%, 100% 100%, 0 100%)` }}>
                <div className="eraser-contents-2-title">
                  <h1>
                    다양한 제품에 쏘옥!
                    <br />
                    오려낸 이미지로 만들어요.
                  </h1>

                  <h3>이미지를 다운로드하고 오프린트미의 다양한 상품에 사용해요.</h3>
                </div>
                <div className="eraser-image-map">
                  <div className="eraser-image-1" />
                  <div className="eraser-image-2" />
                  <div className="eraser-image-3" />
                  <div className="eraser-image-4" />
                </div>
              </div>
            </div>
            <div
              style={{ position: "relative", width: "100%", height: `${nowHeight * 2 + 700}px`, background: "red", opacity: 0, pointerEvents: "none" }}
              ref={(c) => {
                this.thumbnailMask = c;
              }}
            />
          </div>
        )}

        {!!isIE && (
          <div className="eraser-contents-map">
            <div
              className="eraser-contents-1"
              id="sticky"
              ref={(c) => {
                this.origin = c;
              }}
              style={{ position: "relative" }}
            >
              <div className="eraser-contents-1-title">
                <h1>
                  AI가 척척!
                  <br />
                  자동으로 이미지를 오려줘요.
                </h1>

                <h3>이미지만 선택해 주면 AI가 배경은 지우고 필요한 모습만 남길게요.</h3>
              </div>

              <div className="eraser-image-map">
                <div className="eraser-image-1">
                  <div className="eraser-image-1-sub-1" />
                  <div className="eraser-image-1-sub-2" style={{ clipPath: `polygon(100% 0, 100% 100%, ${fullSize}% 100%, ${fullSize}% 0)` }} />
                </div>
                <div className="eraser-image-2">
                  <div className="eraser-image-2-sub-1" />
                  <div className="eraser-image-2-sub-2" style={{ clipPath: `polygon(100% 0, 100% 100%, ${fullSize}% 100%, ${fullSize}% 0)` }} />
                </div>
                <div className="eraser-image-3">
                  <div className="eraser-image-3-sub-1" />
                  <div className="eraser-image-3-sub-2" style={{ clipPath: `polygon(100% 0, 100% 100%, ${fullSize}% 100%, ${fullSize}% 0)` }} />
                </div>
                <div className="eraser-image-4">
                  <div className="eraser-image-4-sub-1" />
                  <div className="eraser-image-4-sub-2" style={{ clipPath: `polygon(100% 0, 100% 100%, ${fullSize}% 100%, ${fullSize}% 0)` }} />
                </div>
              </div>
            </div>
            <div className="eraser-contents-2" style={{ position: "relative" }}>
              <div className="eraser-contents-2-title">
                <h1>
                  다양한 제품에 쏘옥!
                  <br />
                  오려낸 이미지로 만들어요.
                </h1>

                <h3>이미지를 다운로드하고 오프린트미의 다양한 상품에 사용해요.</h3>
              </div>
              <div className="eraser-image-map">
                <div className="eraser-image-1" />
                <div className="eraser-image-2" />
                <div className="eraser-image-3" />
                <div className="eraser-image-4" />
              </div>
            </div>
          </div>
        )}

        <div
          className="eraser-contents-3"
          ref={(c) => {
            this.videoContents = c;
          }}
        >
          <div className="eraser-contents-3-title">
            <h1>수정도 뚝딱! 손쉽게 수정해요.</h1>

            <h3>아쉬운 부분이 있다면 툴을 이용하여 수정해 보세요.</h3>
          </div>

          <div className="eraser-contents-3-selected">
            <div className="eraser-contents-3-btnMap">
              <div className="eraser-contents-3-delete">
                <div
                  className={`eraser-contents-3-delete-img ${imgEraserState}`}
                  onClick={this.onClickChangeVideoEraser}
                  //style={{background: `url("/images/overview/eraser/btn-eraser-on@2x.png") 50% 0 / cover no-repeat`}}
                />
                <div className="eraser-contents-3-delete-text">
                  <span>지우기</span>
                </div>
              </div>
              <div className="eraser-contents-3-restore">
                <div
                  className={`eraser-contents-3-restore-img ${imgRestoreState}`}
                  onClick={this.onClickChangeVideoRestore}
                  //style={{background: `url("/images/overview/eraser/btn-restore-off@2x.png") 50% 0 / cover no-repeat`}}
                />
                <div className="eraser-contents-3-restore-text">
                  <span>살리기</span>
                </div>
              </div>
            </div>
          </div>

          <div className="eraser-contents-3-video">
            <video
              autoPlay
              muted
              src={addDomain(cdn, video)}
              ref={(c) => {
                this.videoTag = c;
              }}
            >
              {/*<source src={addDomain(cdn,video)}
                        type="video/mp4"/>*/}
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </div>
        <div className="eraser-contents-4">
          <div className="eraser-contents-4-title">
            <h1>
              오려낸 이미지로 완성하는
              <br />
              우리 브랜드 홍보물
            </h1>
          </div>

          <div className="eraser-contents-4-map">
            {this.contents.reduce((target, item, idx) => {
              target.push(
                <div className="eraser-contents-4-item" data-path={item.link} data-type={"eraser"} data-name={item.title} onClick={this.onGoLink}>
                  <img src={addCdn(item.image)} alt="" />
                  <br />
                  <span className="title">{item.title}</span>
                  <span className="description" dangerouslySetInnerHTML={{ __html: item.description }} />
                  <span className="link">{item.title} 시작하기</span>
                </div>,
              );
              return target;
            }, [])}
          </div>
        </div>
      </div>
    );
  }
}

const formName = "eraser-app";

const mapStateToProps = (state, ownerProps) => {
  return {
    states: {
      ...ownerProps.states,

      user: state.user,
      config: state.config,
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
  })(EraserApp),
);

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
