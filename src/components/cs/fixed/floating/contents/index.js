

import React from 'react';
import update from 'react-addons-update';
import dynamic from "next/dynamic";

import { asyncChunk } from 'utils/webpack';

import ScrollContents from 'components/common/scroll-contents';
import Alert from 'components/cs/fixed/common/alert';

import { addCdn } from 'utils/url';

export default class CSFloatingContents extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      components: {
        FAQ: null,
        Talk: null,
        QNA: null,
        Tutorial: null,
        Notice: null
      },
      category: [
        { title: 'FAQ' },
        //{ title: '실시간 톡상담' },
        { title: '1:1 문의' },
        { title: '작업 가이드' },
        { title: '알림' },
        { title: '챗봇' }
      ],
      alert: {
        description: null,
        privacy: null,
        confirm: false,
        confirmLabel: null,
        callback: null
      },
      scroll: {
        targetY: 0
      }
    };

    this.ready = true;

    this.onClickBack = this.onClickBack.bind(this);
    this.onClickPop = this.onClickPop.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
    this.onChangeWheel = this.onChangeWheel.bind(this);
    this.onCompleteAnimation = this.onCompleteAnimation.bind(this);

    this.focusScroll = this.focusScroll.bind(this);
    this.focusTopScroll = this.focusTopScroll.bind(this);
    this.focusBottomScroll = this.focusBottomScroll.bind(this);
    this.resetScroll = this.resetScroll.bind(this);

    this.getMaxHeight = this.getMaxHeight.bind(this);

    this.openAlert = this.openAlert.bind(this);
    this.closeAlert = this.closeAlert.bind(this);

    this.showErrorLoadComponent = this.showErrorLoadComponent.bind(this);
  }

  onClickBack(event) {
    let { states: { cs: { floating: { title: { back } } } } } = this.props;

    back && back();
  }

  onClickPop(event) {
    let { states: { cs: { floating: { title: { pop } } } } } = this.props;

    pop && pop();
  }

  onClickClose(event) {
    let { actions: { handleCloseCS } } = this.props;

    handleCloseCS();
  }

  onChangeWheel(event) {
    this.state.scroll.targetY && this.resetScroll();
  }

  onCompleteAnimation(event) {
    this.state.scroll.targetY && this.resetScroll();
  }

  focusTopScroll() {
    this.focusScroll(0);
  }

  focusBottomScroll() {
    this.focusScroll(Math.max(0, this.middle.scrollHeight - this.middle.clientHeight));
  }

  focusScroll(targetScrollTop) {
    let { scroll:{ targetScrollTop: currentTargetScrollTop } } = this.state;

    currentTargetScrollTop !== targetScrollTop && this.setState(update(this.state, { scroll: { targetY: { $set: targetScrollTop } } }));
  }

  resetScroll() {
    let { scroll:{ targetScrollTop: currentTargetScrollTop } } = this.state;

    currentTargetScrollTop && this.setState(update(this.state, { scroll: { targetY: { $set: null } } }));
  }

  getMaxHeight() {
    let { states: { cs: { floating, floating: { tab: { focus } } }, ui: { view } } } = this.props;
    let params = Math.max(316, Math.min(view[ 'height' ] - (60 * 2), floating[ 'height' ] || 0));

    if(String(focus) === '1') params += 86;
    else if(String(focus) === '0') params -= 40;
    else if(String(focus) === '3') params -= 40;

    return params;
  }

  openAlert(params) {
    let { description, privacy, confirm, confirmLabel, callback } = params;

    this.setState({ alert: { description, privacy, confirm, confirmLabel, callback } });
  }

  closeAlert() {
    this.setState({ alert: { description: null, privacy: null, confirm: false, confirmLabel: null, callback: null } });
  }

  showErrorLoadComponent() {
    let { actions: { handleOpenAlertLayer } } = this.props;

    this.ready = false;

    handleOpenAlertLayer({
      description: '버전이 갱신되어 새로고침이 필요합니다. <br/> 확인버튼 클릭하면 새로고침 됩니다.',
      callback: () => {
        window.location.reload(true);
      }
    })
  }

  componentDidUpdate(prevProps) {
    let { states: { cs: { floating: { tab: { focus }, opened } } }, actions : { handleChangeCSTitleBack, handleChangeCSTitlePop, handleChangeCSTabFocus, handleCloseCS } } = this.props;
    let { components: { FAQ, Talk, QNA, Tutorial, Notice } } = this.state;

    const {
      cs: {
        floating: {
          tab: { focus:index }
        }
      }
    } = prevProps.states;

    if (this.ready) {
      switch (String(focus)) {
        case '0':
          !FAQ && asyncChunk([ dynamic( () => import('./faq') ) ], (error, module) => {
            this.setState(update(this.state, {
              components: { FAQ: { $set: module } }
            }));
          }, this.showErrorLoadComponent);
          break;
        /*
        case '1':
          !Talk && asyncChunk([ import('./talk' /!* webpackChunkName: 'cs-contents-talk' *!/) ], (error, module) => {
            this.setState(update(this.state, {
              components: { Talk: { $set: module } }
            }));
          }, this.showErrorLoadComponent);
          break;
        */

        case '1':
          !QNA && asyncChunk([ dynamic( () => import('./qna') ) ], (error, module) => {
            this.setState(update(this.state, {
              components: { QNA: { $set: module } }
            }));
          }, this.showErrorLoadComponent);
          break;

        case '2':
          !Tutorial && asyncChunk([ dynamic( () => import('./tutorial') ) ], (error, module) => {
            this.setState(update(this.state, {
              components: { Tutorial: { $set: module } }
            }));
          }, this.showErrorLoadComponent);
          break;

        case '3':
          !Notice && asyncChunk([ dynamic( () => import('./notice') ) ], (error, module) => {
            this.setState(update(this.state, {
              components: { Notice: { $set: module } }
            }));
          }, this.showErrorLoadComponent);
          break;

        case '4':
          focus !== index &&
          Promise.all([handleChangeCSTitleBack(null), handleChangeCSTitlePop(null)]).then(() => {
            handleChangeCSTabFocus(index);
          });

          opened && handleCloseCS();
          break;
      }
    }
  }

  render() {
    let { states, actions, pathname } = this.props;
    let { cs: { floating: { title: { back, pop }, tab: { focus }, opened } } } = states;
    let { components: { FAQ, Talk, QNA, Tutorial, Notice }, category, alert, scroll: { targetY } } = this.state;

    let style = { height: `${this.getMaxHeight()}px` };
    let title = category[ Number(focus) ][ 'title' ];
    let component = null;

    switch (String(focus)) {
      case '0':
        FAQ && (component = <FAQ/>);
        break;

      /*
      case '1':
        Talk && (component = <Talk/>);
        break;
      */

      case '1':
        QNA && (component = <QNA/>);
        break;

      case '2':
        Tutorial && (component = <Tutorial/>);
        break;

      case '3':
        Notice && (component = <Notice/>);
        break;
    }

    return (
      <div className={`contents${opened ? ' on' : ''}`}
           style={style}
           ref={(c) => {this.scope = c;}}>

        <div className="top">
          {back && (<span className="icon icon-back-1414 btn-back" onClick={this.onClickBack}/>)}
          <span className="title">{title}</span>
          {pop && (<span className="icon icon-layer-1414 btn-pop" onClick={this.onClickPop}/>)}
          <span className="icon icon-reduce-1414 btn-close" onClick={this.onClickClose}/>
        </div>

        <div className="middle" ref={(c) => {this.middle = c;}}>
          <ScrollContents className="outer"
                          parentEl={this.middle}
                          targetY={targetY}
                          handleChangeWheel={this.onChangeWheel}
                          handleCompleteAnimation={this.onCompleteAnimation}>
            {component && React.cloneElement(component, {
              states,
              actions: {
                ...actions,
                handleFocusCSScroll: this.focusScroll,
                handleFocusCSTopScroll: this.focusTopScroll,
                handleFocusCSBottomScroll: this.focusBottomScroll,
                handleResetCSScroll: this.resetScroll,
                handleGetMaxHeight: this.getMaxHeight,
                handleOpenAlert: this.openAlert,
                handleCloseAlert: this.closeAlert
              },
              pathname
            })}
          </ScrollContents>
        </div>

        {String(focus) === '1' &&
          <div className="bottom">
            <div>
              <span>
              <span>전화문의 <em>1577-4703</em></span>
              <span className="divider">  |  </span>
              <span>운영시간 <em>평일 09:30 ~ 17:30</em></span>
            </span>
            </div>

            <div>
              <p>
                <img src={addCdn('/images/cs/notice/noti-1515@2x.png')}/>
                <span>고객센터 문의량 증가로 인해 전화상담이 지연되고 있습니다.<br/>
                1:1문의를 남겨주시면 순차적으로 확인 후 빠르게 답변 드릴 수 있도록<br/>
                노력하겠습니다.</span>
              </p>
            </div>
          </div>
        }

        {React.cloneElement(<Alert/>, {
          alert,
          actions: {
            ...actions,
            handleCloseAlert: this.closeAlert
          }
        })}
      </div>
    )
  }
}
