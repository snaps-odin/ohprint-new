import React from "react";
import { connect } from "react-redux";

import { ActionLayer, ActionCS, ActionFAQ, ActionQNA, ActionUI, ActionAlarm, ActionProduct } from "actions/index";
import { getScrollTop } from "utils/scroll";
import { getAMinute } from "utils/date";

import Floating from "./floating/index";
import Pop from "./pop/index";
import CustomPersonalizationFAB from "../custom-personalization/fab";

class CSFixed extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      scrolling: false,
    };

    this.interval = {
      id: null,
      sec: getAMinute() * 5,
    };

    this.onClickTopScroll = this.onClickTopScroll.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  onClickTopScroll(event) {
    let {
      actions: { handleUpdateUIScroll },
    } = this.props;
    let { scrolling } = this.state;

    scrolling && handleUpdateUIScroll(0);
  }

  onScroll(event) {
    let { scrolling: currentScrolling } = this.state;
    let scrolling = getScrollTop() !== 0;

    currentScrolling !== scrolling && this.setState({ scrolling });
  }

  isShowTopScroll() {
    let {
      states: {
        cs: {
          topScroll: { show },
        },
        ui: {
          scroll: { owners },
        },
      },
      pathname,
    } = this.props;
    let { scrolling } = this.state;

    return !pathname.match(/\/editor/i) && scrolling && owners.length === 0 && show;
  }

  resetTimer(isFirst) {
    let {
      states: {
        user: { loggedIn },
      },
      actions: { handleRequestAlarmCount, handleRequestAlarmQNACount },
    } = this.props;

    Promise.all([this.clearTimer()]).then(() => {
      loggedIn &&
        (this.interval["id"] = window.setTimeout(
          () => {
            Promise.all([handleRequestAlarmCount(), handleRequestAlarmQNACount()]).then(() => {
              this.resetTimer();
            });
          },
          isFirst ? 0 : this.interval["sec"],
        ));
    });
  }

  clearTimer() {
    this.interval["id"] && window.clearTimeout(this.interval["id"]);
  }

  componentDidMount() {
    Promise.all([this.resetTimer(true), window.addEventListener("scroll", this.onScroll)]).then(() => {
      this.onScroll();
    });
  }

  componentDidUpdate(prevProps, prevState) {
    let {
      states: {
        user: { loggedIn: currentLoggedIn },
      },
      pathname: currentPathname,
    } = this.props;
    let {
      states: {
        user: { loggedIn: prevLoggedIn },
      },
      pathname: prevPathname,
    } = prevProps;

    (currentLoggedIn !== prevLoggedIn || currentPathname !== prevPathname) && this.resetTimer(true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    let { states, actions, pathname } = this.props;

    return (
      <div className="cs-fixed-wrap">
        {React.cloneElement(<Floating />, {
          states,
          actions,
          pathname,
        })}

        {React.cloneElement(<Pop />, {
          states,
          actions,
        })}

        <span className={`icon icon-top-btn-4040 ${this.isShowTopScroll() ? "active" : ""}`} onClick={this.onClickTopScroll} />

        {/*{!["/member/delivery", "/editor"].includes(pathname) && (*/}
        {/*  <CustomPersonalizationFAB waitBeforeShow={2000} />*/}
        {/*)}*/}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    states: {
      config: state.config,
      ui: state.ui,
      cs: state.cs,
      qna: state.qna,
      user: state.user,
      alarm: state.alarm,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleAppearCS: () => dispatch(ActionCS.appearCS()),
      handleOpenCS: () => dispatch(ActionCS.openCS()),
      handleCloseCS: () => dispatch(ActionCS.closeCS()),
      handleTouchCS: () => dispatch(ActionCS.touchCS()),
      handleChangeCSTitleBack: (func) => dispatch(ActionCS.changeCSTitleBack(func)),
      handleChangeCSTitlePop: (func) => dispatch(ActionCS.changeCSTitlePop(func)),
      handleChangeCSTabWidth: (width) => dispatch(ActionCS.changeCSTabWidth(width)),
      handleChangeCSTabFocus: (index) => dispatch(ActionCS.changeCSTabFocus(index)),
      handleResetCSContentHeight: (height) => dispatch(ActionCS.resetCSContentHeight(height)),
      handleChangeCSContentHeight: (height) => dispatch(ActionCS.changeCSContentHeight(height)),

      handleGetFAQCategoryInfoByPathname: (pathname) => dispatch(ActionFAQ.getFAQCategoryInfoByPathname(pathname)),
      handleRequestFAQCategories: () => dispatch(ActionFAQ.requestFAQCategories()),
      handleRequestFAQList: (params) => dispatch(ActionFAQ.requestFAQList(params)),
      handleUpdateFAQEvaluationByBoardId: (boardId, evaluation) => dispatch(ActionFAQ.updateFAQEvaluationByBoardId(boardId, evaluation)),
      handleUpdateFAQViewCountByBoardId: (boardId) => dispatch(ActionFAQ.updateFAQViewCountByBoardId(boardId)),

      handleGetQNABrowserType: () => dispatch(ActionQNA.getQNABrowserType()),
      handleRequestQNACategories: () => dispatch(ActionQNA.requestQNACategories()),
      handleRequestQNAOrders: () => dispatch(ActionQNA.requestQNAOrders()),
      handleRequestQNAList: (term, isReset) => dispatch(ActionQNA.requestQNAList(term, isReset)),
      handleCreateQNA: (formData) => dispatch(ActionQNA.createQNA(formData)),
      handleCreateQNAByBoardId: (boardId, formData) => dispatch(ActionQNA.createQNAByBoardId(boardId, formData)),
      handleRequestQNAByBoardId: (boardId, mode) => dispatch(ActionQNA.requestQNAByBoardId(boardId, mode)),

      handleRequestQNAByBoardIdForDelete: (boardId, mode) => dispatch(ActionQNA.requestQNAByBoardIdForDelete(boardId, mode)),

      handleCreateQNAByBoardIdSeq: (boardId, boardSeq, formData) => dispatch(ActionQNA.createQNAByBoardIdSeq(boardId, boardSeq, formData)),
      handleDeleteQNAByBoardId: (boardId, boardSeq) => dispatch(ActionQNA.deleteQNAByBoardId(boardId, boardSeq)),
      handleUpdateCSTalkConnect: (connected) => dispatch(ActionCS.updateCSTalkConnect(connected)),

      handleTouchCSPopItem: (touched) => dispatch(ActionCS.touchCSPopItem(touched)),
      handleDragCSPopItem: (dragging) => dispatch(ActionCS.dragCSPopItem(dragging)),
      handleUpdateCSPopItem: (item, mode) => dispatch(ActionCS.updateCSPopItem(item, mode)),

      handleRequestAlarmCount: () => dispatch(ActionAlarm.requestAlarmCount()),
      handleRequestAlarmQNACount: () => dispatch(ActionAlarm.requestAlarmQNACount()),
      handleRequestAlarm: (params) => dispatch(ActionAlarm.requestAlarm(params)),
      handleUpdateAlarm: (alarmNo) => dispatch(ActionAlarm.updateAlarm(alarmNo)),
      handleUpdateAlarmQNAView: () => dispatch(ActionAlarm.updateAlarmQNAView()),

      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
      handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),

      handleGetProductByProductGroupCode: (productGroupCode) => dispatch(ActionProduct.getProductByProductGroupCode(productGroupCode)),

      handleUpdateUIScroll: (targetY, easingType) => dispatch(ActionUI.updateUIScroll(targetY, easingType)),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CSFixed);
