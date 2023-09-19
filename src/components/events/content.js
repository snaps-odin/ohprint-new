"use strict";

import React from "react";
import update from "react-addons-update";
import { connect } from "react-redux";

import { LayerTypes } from "constants/index";
import { ActionEvents, ActionLayer, ActionCoupon } from "actions/index";
import { getDatasetByName, getHeight } from "utils/dom";
import {
  goError,
  addDomain,
  addCdn,
  goEvents,
  goLink,
  getLocationOrigin
} from "utils/url";
import { clipBoard } from "utils/clipboard";
import { openCenter } from "utils/window";
import { offsetDayByDate, getTimestamp } from "utils/date";

import * as Facebook from "utils/facebook";
import * as Twitter from "utils/twitter";
import * as Kakao from "utils/kakao";
import * as KakaoTalk from "utils/kakao-talk";


import {dataLayerPromotionView} from 'configs/google-analytics/ga'
import {NEW_YEAR_WISHES, SMALL_BUSINESS_DAY} from "../../constants/layer-types";
import OPM395 from "./OPM395";
import OPM419 from "./OPM419";
import OPM444 from "./OPM444";
import OPM462 from "./OPM462";
import OPM478 from "./OPM478";
import OPM479 from "./OPM479";
import OPM481 from './OPM481';
import OPM483 from "./OPM483";
import OPM490 from "./OPM490";

import {setMarketingAgree} from "../../actions/events";

class EventsContent extends React.Component {
  constructor(...args) {
    super(...args);

    this.facebook = Facebook;
    this.twitter = Twitter;
    this.kakao = Kakao;
    this.kakaoTalk = KakaoTalk;

    this.componentEvents = {}

    this.state = {
      ready: false,
      type: "",
      path: "",
      shareUrl: "",
      copyUrl: "",
      height: "8",
      timestamp: null
    };

    this.receiveOrigin = null;

    this.onReceiveMessage = this.onReceiveMessage.bind(this);
  }

  onReceiveMessage(event) {
    let {
      seq,
      expired,
      actions: { handleOpenContentsLayer, handleOpenAlertLayer, handleRequestEventsCouponByIdx, handleCreateCouponByCouponCode, handleCreateCouponByCouponCodeChoice, handleEventAlready, handleCreateFormBBS, handleSetMarketingAgree },
      states: { user: { loggedIn } }
    } = this.props;
    let { origin, data } = event;

    this.receiveOrigin = origin;

    if(!!data.getCoupons_code){
      data = { ...data, type: "getCoupons",}
    }else if(!!data.getCouponsMove_code){
      data = {...data, type:"getCouponsMove"}
    }

    switch (data.type) {
      case "marketingAgree":
        this.executeAfterUserLogin(true, async () => {
          const res = await handleSetMarketingAgree(seq, data.emailAgree, data.smsAgree);

          if(res.message && res.message === "이벤트 참여가 완료되었습니다.<br/>무료 배송 쿠폰이 발급되었습니다."){
            handleOpenAlertLayer({
              description: "수신 동의가 완료 되었습니다."
            });
          }

        });
        break;

      case "getHeight":
        this.getHeight(data["value"]);
        break;

      case "goToEraser":
        this.executeAfterUserLogin(true, () => {
          handleOpenContentsLayer(LayerTypes.ERASER,{ parent: 'event' })
        });
        break;

      case "getCoupon":
        !expired &&
          this.executeAfterUserLogin(true, () => {
            this.getCoupon();
          });
        break;

      case "openLayerImage":
        !expired &&
          handleOpenContentsLayer(LayerTypes.EVENTS_IMAGE, {
            width: data["width"],
            height: data["height"],
            imgUrl: data["value"]
          });
        break;

      case "openAlert":
        !expired &&
          handleOpenAlertLayer({
            description: data["value"]
          });
        break;

      case "shareSNS":
        !expired && this.shareSNS(data["snsType"]);
        break;

      case "shareSNSandJoin":
        if(!expired){
          let formData = new FormData();
          formData.append('loginEvent', 'false');

          handleCreateFormBBS(formData, seq).then((result)=>{
            this.shareSNS(data["snsType"]);
          });
        }

        break;

      case "copyUrl":
        !expired && this.copyUrl();
        break;

      case "checkUserLevel":
        this.executeAfterUserLogin(true, () => {
          this.checkUserLevel(data);
        });
        break;

      case "goLink":
        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          goLink(data["value"]);
        });
        break;

      case "goOutLink":
        openCenter(
          data["value"],
          data["name"] || "",
          data["width"] || window.outerWidth,
          data["height"] || window.outerHeight
        );
        break;

      case "checkExpiredCoupon":
        this.checkExpiredCoupon(data);
        break;

      case "previewBBS":
        this.previewBBS(data);
        break;

      case "buildComments":
        this.buildComments(data);
        break;

      case "openLayerApply":
        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          handleOpenContentsLayer(LayerTypes.EVENTS_APPLY, {
            data,
            eventIdx: seq,
            callback: () => {
              this.setState(
                update(this.state, {
                  timestamp: { $set: getTimestamp() }
                })
              );
            }
          });
        });
        break;

      case "openLayerApplyBeforehand":
        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          handleOpenContentsLayer(LayerTypes.EVENTS_APPLY_BEFOREHAND, {
            data,
            eventIdx: seq,
            callback: () => {
              this.setState(
                update(this.state, {
                  timestamp: { $set: getTimestamp() }
                })
              );
            }
          });
        });
        break;

      case "openLayerRecommend":
        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          handleOpenContentsLayer(LayerTypes.EVENTS_RECOMMEND, {
            eventIdx: seq,
            callback: () => {
              this.setState(
                update(this.state, {
                  timestamp: { $set: getTimestamp() }
                })
              );
            }
          });
        });
        break;

      case "openLayerBye2020":
        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          handleEventAlready(seq).then((result)=>{
            if(!!result.joined){
              handleOpenAlertLayer({
                description: "이미 참여 하셨습니다."
              });
            }else{
              handleOpenContentsLayer(LayerTypes.EVENTS_BYE_2020, {
                eventIdx: seq,
                callback: (confirmed) => (this.sendMessage(this.receiveOrigin, data.callbackMethod, confirmed))
              });
            }
          });



        });
        break;

      case "openFanRecommend":
        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          handleEventAlready(seq).then((result)=>{
            if(!!result.joined){
              handleOpenAlertLayer({
                description: "이미 참여 하셨습니다."
              });
            }else{
              handleOpenContentsLayer(LayerTypes.EVENTS_FAN_RECOMMEND, {
                eventIdx: seq,
                callback: (confirmed) => (this.sendMessage(this.receiveOrigin, data.callbackMethod, confirmed))
              });
            }
          });
        });
        break;

      case "openCheerUpRecommend":
        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          handleEventAlready(seq).then((result)=>{
            if(!!result.joined){
              handleOpenAlertLayer({
                description: "이미 참여 하셨습니다."
              });
            }else{
              handleOpenContentsLayer(LayerTypes.EVENTS_CHEER_UP_LAYER, {
                eventIdx: seq,
                callback: (confirmed) => (this.sendMessage('https://cdn.ohprint.me', data.callbackMethod, confirmed))
              });
            }
          });
        });
        break;

      case "openNewYearPlan":
        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          handleEventAlready(seq).then((result)=>{
            if(!!result.joined){
              handleOpenAlertLayer({
                description: "이미 참여 하셨습니다."
              });
            }else{
              handleOpenContentsLayer(LayerTypes.EVENTS_NEW_YEAR_PLAN_LAYER, {
                eventIdx: seq,
                callback: (confirmed) => (this.sendMessage('https://cdn.ohprint.me', data.callbackMethod, confirmed))
              });
            }
          });
        });
        break;

      case "openSmallBusinessDay":
        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          handleEventAlready(seq).then((result)=>{
            if(!!result.joined){
              handleOpenAlertLayer({
                description: "이미 참여 하셨습니다."
              });
            }else{
              handleOpenContentsLayer(LayerTypes.SMALL_BUSINESS_DAY, {
                eventIdx: seq,
                callback: (confirmed) => (this.sendMessage('https://cdn.ohprint.me', data.callbackMethod, confirmed))
              });
            }
          });
        });
        break;

      case "openNewYearWishes":
        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          handleEventAlready(seq).then((result)=>{
            if(!!result.joined){
              handleOpenAlertLayer({
                description: "이미 참여 하셨습니다."
              });
            }else{
              handleOpenContentsLayer(LayerTypes.NEW_YEAR_WISHES, {
                eventIdx: seq,
                callback: (confirmed) => (this.sendMessage('https://cdn.ohprint.me', data.callbackMethod, confirmed))
              });
            }
          });
        });
        break;

      case "openLayerPostComment":
        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          handleEventAlready(seq).then((result)=>{
            console.debug("result  " , result)
            if (!!result.joined) {
              handleOpenAlertLayer({
                description: "이미 참여 하셨습니다."
              });
            } else {
              handleOpenContentsLayer(LayerTypes.EVENTS_POST_COMMENT, {
                data,
                eventIdx: seq,
                callback: () => {
                  document.getElementById('comments-iframe').contentWindow.location.reload();

                  this.setState(
                    update(this.state, {
                      timestamp: { $set: getTimestamp() }
                    })
                  );
                }
              });
            }
          });
        });
        break;

      case "openLayerPopup":
        const {seq : eventIdx} = this.props;
        const {value: popupName, options, callback, checkEventAlready} = data;
        this.executeAfterUserLogin(data["isNeedLogin"],() => {
          if (!!checkEventAlready) {
            handleEventAlready(eventIdx).then((result) => {
              if (!!result.joined) {
                handleOpenAlertLayer({
                  description: "이미 응모에 참여 하셨습니다."
                });
              } else {
                handleOpenContentsLayer(LayerTypes[popupName], {
                  callback,
                  eventIdx,
                  ...options,
                });
              }
            })
          } else {
            handleOpenContentsLayer(LayerTypes[popupName], {
              callback,
              eventIdx,
              ...options,
            })
          }
        });
        break;

      case "couponPaymentSchedule":
        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          handleOpenContentsLayer(LayerTypes.COUPON_PAYMENT_SCHEDULE);
        });
        break;

      case "designCompetition":
        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          handleOpenContentsLayer(LayerTypes.DESIGN_COMPETITION);
        });
        break;

      case "advanceReservation":
        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          handleOpenContentsLayer(LayerTypes.ADVANCE_RESERVATION);
        });
        break;


      case "initCouponList":
        Promise.all([
          handleRequestEventsCouponByIdx(26)
        ]).then((result) => {
          this.sendMessage(this.receiveOrigin, data.callbackMethod, result);
        })
        .catch(error => {
          handleOpenAlertLayer({
            description: error
          });
        });

        break;

      case "openLayerFunding":
        handleOpenContentsLayer(LayerTypes.EVENTS_FUNDING,{
          eventIdx: data.eventIdx,
          callback: (confirmed) => {}
        })
        break;

      case "dataLayerPromotionView":
        (data.eventName || "") && dataLayerPromotionView(data.eventName);
        break;

      case "getApiKey":
        this.sendMessage(this.receiveOrigin, data.callbackMethod, this.kakao.getApiKey())
        break;

      case 'goAppReviewEvent':
        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          handleEventAlready(seq).then((result)=>{
            if(!!result.joined){
              handleOpenAlertLayer({
                description: "이미 참여 하셨습니다."
              });
            }else{
              handleOpenContentsLayer(LayerTypes.EVENTS_APP_REVIEW,{
                callback: (confirmed) => {}
              });
            }
          });

        });
        break;

      case "fileCheck":
        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          let temp = document.getElementById('eventframe');
          let selectedFile = temp && temp.contentWindow.document.getElementById('cFile').files;
          let ta = temp && temp.contentWindow.document.getElementById('cText').value;
          if(!ta){
            handleOpenAlertLayer({
              description: '내용을 입력해 주세요.',
              callback: (confirmed) => {}
            })
            return false;
          }
          let fileNameList = [];
          let formData = new FormData();

          if (selectedFile.length > 0) {
            for(let i=0; i<selectedFile.length; i++){
              let file = selectedFile.item(i);
              file && formData.append('eventFile', file);
              fileNameList[i] = file.name;
            }
          }

          formData.append('bbsContents', ta);

          handleCreateFormBBS(formData, seq).then(result => {
            let msg = result.message;
            let isReload = false;

            if(msg === "이벤트 참여가 완료되었습니다.<br/>무료 배송 쿠폰이 발급되었습니다.") {
              msg = '의견 보내주셔서 감사합니다!<br/>앞으로 업데이트될 디자인 기대해주세요.';
              isReload = true;
            }



            handleOpenAlertLayer({
              description: msg,

              callback: (confirmed) => (
                this.sendMessage('https://cdn.ohprint.me', data.callbackMethod, {confirmed,fileNameList, isReload})
              )
            });
          }).catch(error => {
            handleOpenAlertLayer({
              description: error,
              callback: (confirmed) => (this.sendMessage('https://cdn.ohprint.me', data.callbackMethod, confirmed))
            })
          });
        });
        break;

      case "goCollaboration":
        handleOpenContentsLayer(LayerTypes.COLLABORATION_FUNDING,{
          eventIdx: data.eventIdx,
          callback: (confirmed) => {}
        });
        break;

      case "getCoupons":
        data = {
          ...data,
          isNeedLogin: true,
          couponNumber: data.getCoupons_code
        }

        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          Promise.all([
            handleCreateCouponByCouponCode(data.couponNumber)
          ]).then((result) => {

            handleOpenAlertLayer({
              description: "쿠폰이 발급 되었습니다.",
              callback: (confirmed) => (this.sendMessage(this.receiveOrigin, data.callbackMethod, confirmed))
            })
            //this.sendMessage(this.receiveOrigin, data.callbackMethod, result);
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


            handleOpenAlertLayer({
              description: error,
              callback: (confirmed) => (this.sendMessage(this.receiveOrigin, data.callbackMethod, confirmed))
            })
          });
        });
        break;

      case "getCouponChoice":
        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          let params = {idx: seq, couponNumber: data.couponNumber};

          Promise.all([
            handleCreateCouponByCouponCodeChoice(params)
          ]).then((result) => {
            handleOpenAlertLayer({
              description: "쿠폰이 발급 되었습니다.",
              callback: (confirmed) => (this.eventer && this.sendMessage(this.receiveOrigin, data.callbackMethod, confirmed))
            })
            //this.sendMessage(this.receiveOrigin, data.callbackMethod, result);
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

            if(error === "이미 이벤트에 참여 하셨습니다.") {
              error = '쿠폰이 이미 발급되었습니다.<br/>(2개 쿠폰 중 최초 선택한 쿠폰이 발급되었으며<br/>ID 하나 당 1회 다운로드 가능합니다.)';
            }


            handleOpenAlertLayer({
              description: error,
              callback: (confirmed) => (this.eventer && this.sendMessage(this.receiveOrigin, data.callbackMethod, confirmed))
            })
          });
        });
        break;

      case "getCouponsTemp":
        this.executeAfterUserLogin(data["isNeedLogin"], () => {
          Promise.all([
            handleCreateCouponByCouponCode(data.couponNumber)
          ]).then((result) => {
            handleOpenAlertLayer({
              description: "쿠폰이 발급 되었습니다.",
              callback: (confirmed) => (this.sendMessage(this.receiveOrigin, data.callbackMethod, confirmed))
            })
            //this.sendMessage(this.receiveOrigin, data.callbackMethod, result);
          }).catch(error => {

            if(error === "해당 쿠폰은 등록 가능한 수량을 넘었습니다." || error === "해당 쿠폰은 만료 되었습니다."){
              error = '쿠폰 지급이 종료되었습니다.<br/>다음 기회에 이용해주세요.';
            }

            if(error === "이미 등록된 쿠폰입니다."){
              error = '쿠폰이 이미 발급되었습니다.';
            }

            if(error === "해당 쿠폰을 찾을 수 없습니다."){
              error = '쿠폰이 곧 오픈됩니다.<br/>조금만 더 기다려주세요!';
            }

            handleOpenAlertLayer({
              description: error,
              callback: (confirmed) => (this.sendMessage(this.receiveOrigin, data.callbackMethod, confirmed))
            })
          });
        });
        break;

      case 'getCouponsMove':
        this.getCouponsMove({
          couponNumber : data['getCouponsMove_code'],
          isNeedLogin: true,
          callbackGoLink: data['getCouponsMove_url']
        });
        break;

      case "openAlertCallback":
        !expired &&
        handleOpenAlertLayer({
          description: data[ "value" ],
          callback: (confirmed) => (this.sendMessage(this.receiveOrigin, data.callbackMethod, confirmed))
        });

        break;

      case "openLayerJoin":
        this.openLayerJoin();
        break;

      case "sms":
        handleOpenContentsLayer(LayerTypes.SMS);
        break;

      case "copyEmail":
        !expired && this.copyEmail();
        break;
    }
  }

  openLayerJoin() {
    let {
      states: {
        user: { loggedIn }
      },
      actions: { handleOpenAlertLayer, handleOpenContentsLayer }
    } = this.props;
    loggedIn
      ? handleOpenAlertLayer({
          description:
            "이미 회원가입이 되어있습니다. \n이메일에서 쿠폰 받기를 진행해주세요."
        })
      : handleOpenContentsLayer(LayerTypes.JOIN);
  }

  executeAfterUserLogin(isNeedLogin, callback) {
    let { states: { user: { loggedIn } }, actions: { handleOpenContentsLayer } } = this.props;

    (loggedIn || !isNeedLogin)
      ?
      (callback && callback())
      :
      handleOpenContentsLayer(LayerTypes.LOGIN, {
        redirect: () => {callback && callback()}
      });
  }

  previewBBS(data) {
    let { seq } = this.props;
    let { callbackMethod } = data;

    this.sendMessage(this.receiveOrigin, callbackMethod, {
      path: `${getLocationOrigin()}/events/${String(seq)}/previewBoard?fromM=Y&cb=${getTimestamp()}`
    });
  }

  buildComments(data) {
    let { seq } = this.props;
    let { callbackMethod } = data;

    this.sendMessage(this.receiveOrigin, callbackMethod, {
      path: `${getLocationOrigin()}/events/${String(seq)}/board?fromM=Y&cb=${getTimestamp()}`
    });
  }

  getHeight(height) {
    this.setState(
      update(this.state, {
        height: { $set: height }
      })
    );
  }

  getCoupon() {
    let {
      actions: { handleOpenAlertLayer, handleCreateEventsCouponByIdx },
      seq
    } = this.props;

    this.handleCreateEventsCouponByIdx(seq).then(result => {
      handleOpenAlertLayer({
        description: result["message"]
          ? result["message"]
          : "쿠폰이 발급되었습니다"
      });
    });
  }

  getCouponsMove(data){
    const { actions: {handleCreateCouponByCouponCode, handleOpenAlertLayer}} = this.props;

    this.executeAfterUserLogin(data["isNeedLogin"], () => {
      Promise.all([
        handleCreateCouponByCouponCode(data.couponNumber)
      ]).then((result) => {
        handleOpenAlertLayer({
          description: "쿠폰이 발급 되었습니다.",
          callback: () => goLink(data.callbackGoLink)
        })
      }).catch(error => {

        if(error === "해당 쿠폰은 등록 가능한 수량을 넘었습니다." || error === "해당 쿠폰은 만료 되었습니다."){
          error = '쿠폰 지급이 종료되었습니다.<br/>다음 기회에 이용해주세요.';
        }

        if(error === "이미 등록된 쿠폰입니다."){
          error = '쿠폰이 이미 발급되었습니다.';
        }

        if(error === "해당 쿠폰을 찾을 수 없습니다."){
          error = '쿠폰이 곧 오픈됩니다.<br/>조금만 더 기다려주세요!';
        }

        handleOpenAlertLayer({
          description: error,
          callback: () => goLink(data.callbackGoLink)
        })
      });
    });
  }


  shareSNS(snsType) {
    let {
      states: {
        config: {
          snsAppID: { fb }
        }
      },
      item
    } = this.props;
    let { copyUrl } = this.state;

    let url = document.querySelector("*[name=shareUrl]").value;

    switch (snsType.toLowerCase()) {
      case "facebook":
        this["facebook"].share(url, fb);
        break;

      case "kakaotalk":
        this["kakaoTalk"].share({
          title: item["title"] || "",
          description: item["description"] || "",
          imageUrl: item["filePath"],
          mobileWebUrl: copyUrl
        });
        break;

      default:
        this[snsType.toLowerCase()].share(url);
        break;
    }
  }

  copyUrl() {
    let {
      actions: { handleOpenAlertLayer }
    } = this.props;

    let target = document.querySelector("input[name=copyUrl]");

    Promise.all([clipBoard(target)])
      .then(() => {
        handleOpenAlertLayer({
          description: "링크가 복사 되었습니다."
        });
      })
      .catch(error => {
        handleOpenAlertLayer({
          description: error
        });
      });
  }

  copyEmail() {
    let {
      actions: { handleOpenAlertLayer }
    } = this.props;

    let target = document.querySelector("input[name=email]");

    Promise.all([clipBoard(target)])
      .then(() => {
        handleOpenAlertLayer({
          description: `이메일 주소가 복사 되었습니다.`
        });
      })
      .catch(error => {
        handleOpenAlertLayer({
          description: error
        });
      });
  }

  checkUserLevel(data) {
    let { value, callbackMethod, callbackValue } = data;
    let {
      states: {
        user: { userLevel }
      },
      actions: { handleOpenAlertLayer }
    } = this.props;

    let accept = (value && !!value.some(level => level === userLevel)) || false;

    accept
      ? this.sendMessage(this.receiveOrigin, callbackMethod, callbackValue)
      : handleOpenAlertLayer({
          description: `본 이벤트는<br/>${value.join(
            ", "
          )} 고객만<br/>이벤트 참여 가능합니다.`
        });
  }

  checkExpiredCoupon(data) {
    let {
      item: { list }
    } = this.props;
    let { callbackMethod } = data;

    let values = (list || []).reduce((target, item) => {
      target.push({
        eventCode: item["eventCode"],
        isExpired: item["isExpired"]
      });

      return target;
    }, []);

    this.sendMessage(this.receiveOrigin, callbackMethod, values);
  }

  sendMessage(origin, type, value) {
    if (this.eventer) {
      this.eventer.contentWindow["postMessage"](
        {
          type,
          value
        },
        origin
      );
    }
  }

  requestContent() {
    let { type, path, shareUrl, copyUrl } = this.props;

    Promise.all([
      window.addEventListener("message", this.onReceiveMessage)
    ]).then(() => {
      this.setState(
        update(this.state, {
          ready: { $set: true },
          type: { $set: type },
          path: { $set: path },
          shareUrl: { $set: shareUrl },
          copyUrl: { $set: copyUrl }
        })
      );
    });
  }

  componentDidMount() {
    const {seq : eventNumber} = this.props

    this.componentEvents = {
      '395': <OPM395 handleOnReceiveMessage={this.onReceiveMessage} />,
      '419': <OPM419 handleOnReceiveMessage={this.onReceiveMessage} />,
      '444': <OPM444 handleOnReceiveMessage={this.onReceiveMessage} />,
      '462': <OPM462 handleOnReceiveMessage={this.onReceiveMessage} handleExecuteAfterUserLogin={this.executeAfterUserLogin} />,
      '478': <OPM478 handleOnReceiveMessage={this.onReceiveMessage}  eventNumber={eventNumber} />,
      '479': <OPM479 handleOnReceiveMessage={this.onReceiveMessage}  eventNumber={eventNumber} />,
      '481': <OPM481 handleOnReceiveMessage={this.onReceiveMessage}  eventNumber={eventNumber} />,
      '483': <OPM483 handleOnReceiveMessage={this.onReceiveMessage}  eventNumber={eventNumber} />,
      '490': <OPM490 handleOnReceiveMessage={this.onReceiveMessage}  eventNumber={eventNumber} />,
    }
    this.requestContent();

    if(!((window.location.hostname || '').replace(/.amplifyapp.com/i, ''))) window.document.domain="ohprint.me";
  }

  componentDidUpdate(prevProps, prevState) {
    let { path: prevPath } = prevProps;
    let { path: currentPath } = this.props;

    !Object.is(prevPath, currentPath) && this.requestContent();
  }

  componentWillUnmount() {
    window.removeEventListener("message", this.onReceiveMessage);
  }

  render() {
    let { ready, type, path, height, shareUrl, copyUrl, timestamp } = this.state;

    (height <= 300 ? height = 10000 : height);

    const ComponentEvent = this.componentEvents[this.props.seq];
    if(ComponentEvent && ready){
      return ComponentEvent
    }

    return (
      ready && (
        <div>
          {String(type).includes("url") ? (
            <img src={addCdn(path)} alt="" />
          ) : (
            <div>
              <iframe
                id="eventframe"
                src={`${path}?cb=${timestamp}&channel=WEB`}
                width="100%"
                height={`${height}px`}
                frameBorder={0}
                scrolling="no"
                ref={c => {
                  this.eventer = c;
                }}
              />
              <input type="text" name="shareUrl" value={shareUrl} readOnly />
              <input type="text" name="copyUrl" value={copyUrl} readOnly />
              <input
                type="text"
                name="email"
                value="ohmkt@ohprint.me"
                readOnly
              />
            </div>
          )}
        </div>
      )
    );
  }
}

const mapStateToProps = state => {
  return {
    states: {
      config: state.config,
      user: state.user
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      handleRequestEventsCommentsByIdx: (idx, params) => dispatch(ActionEvents.requestEventsCommentsByIdx(idx, params)),
      handleCreateEventsCouponByIdx: idx => dispatch(ActionEvents.createEventsCouponByIdx(idx)),
      handleOpenAlertLayer: options => dispatch(ActionLayer.openAlertLayer(options)),
      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
      handleEventAlready: (type, options) => dispatch(ActionEvents.eventAlready(type, options)),
      handleCloseContentsLayer: () => dispatch(ActionLayer.closeContentsLayer()),
      handleCreateCouponByCouponCode: (couponCode) => dispatch(ActionCoupon.createCouponByCouponCode(couponCode)),
      handleCreateCouponByCouponCodeChoice: (couponCode) => dispatch(ActionCoupon.createCouponByCouponCodeChoice(couponCode)),
      handleCreateFormBBS : (formData, eventIdx) => dispatch(ActionEvents.createFormBBS(formData,eventIdx)),
      handleRequestEventsCouponByIdx: (eventIdx) => dispatch(ActionEvents.requestEventsCouponByIdx(eventIdx)),
      handleSetMarketingAgree: (eventIdx, emailAgree, smsAgree) => dispatch(ActionEvents.setMarketingAgree(eventIdx, emailAgree, smsAgree))
    }
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(EventsContent);
