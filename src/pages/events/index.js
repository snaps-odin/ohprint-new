"use strict";

import React from "react";
import update from "react-addons-update";
import { connect } from "react-redux";

import { ActionEvents, ActionLayer, ActionUI } from "actions/index";
import { LayerTypes } from "constants/index";
import { getDatasetByName } from "utils/dom";
import { addDomain, getLocationOrigin, goEvents, goLink } from "utils/url";
import { clipBoard } from "utils/clipboard";
import { toDate } from "utils/format";
import { snakeToCamel } from "utils/string";

import * as Facebook from "utils/facebook";
import * as Twitter from "utils/twitter";

import Pagination from "components/common/pagination";
import Tab from "components/common/tab";
import { CDN_URL } from "configs/aws";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

class EventsIndex extends React.Component {
  constructor(...args) {
    super(...args);

    this.facebook = Facebook;
    this.twitter = Twitter;

    this.state = {
      focus: 0,
      items: [],
      offset: 0,
      limit: 9,
      totalCount: 0,
      goLists: this.getGoEvents(),
    };

    this.field = [];

    this.buttons = ["진행중인 이벤트", "종료된 이벤트"];

    this.onChangeTab = this.onChangeTab.bind(this);
    this.onChangeOffset = this.onChangeOffset.bind(this);
    this.onClickGoEvents = this.onClickGoEvents.bind(this);
    this.onClickWinners = this.onClickWinners.bind(this);
    this.onClickSNS = this.onClickSNS.bind(this);
    this.onClickCopyUrl = this.onClickCopyUrl.bind(this);
    this.handleAlwaysList = this.handleAlwaysList.bind(this);
    this.getGoEvents = this.getGoEvents.bind(this);
  }

  getGoEvents(data = []) {
    let list = this.props.states.event.list;
    let eventStyle = data.length > 0 ? data : this.props.states.eventStyle;
    let always = [];

    if (!eventStyle) return [];

    eventStyle = eventStyle.filter((item) => item.type === "event");

    let tempList = eventStyle.reduce((target, item) => {
      let tempItem = list.find((el) => el.idx === item.idx);

      if (!!tempItem) {
        let chk = Number(toDate(tempItem["endDate"], "YYYY"));
        tempItem["anyways"] = chk >= 2099 ? "Y" : "N";
        tempItem["anyways"] = chk === 2098 ? "T" : tempItem["anyways"];
        target.push(tempItem);

        if (chk >= 2098) always.push(tempItem);
      }
      return target;
    }, []);

    return tempList.concat(this.handleAlwaysList(always));
  }

  handleAlwaysList(always) {
    return this.props.states.event.list.filter((item) => {
      let chk = Number(toDate(item["endDate"], "YYYY"));

      if (this.props.states.isZeroDeal && parseInt(item.idx) === 21) {
        return false;
      }

      if (chk >= 2099) {
        if (always.every((el) => el.idx !== item.idx)) {
          item["anyways"] = "Y";
          return true;
        } else return false;
      } else if (chk === 2098) {
        if (always.every((el) => el.idx !== item.idx)) {
          item["anyways"] = "T";
          return true;
        } else return false;
      } else return false;
    });
  }

  onChangeTab(event) {
    let { focus } = this.state;

    let index = Number(getDatasetByName(event.currentTarget, "index"));

    focus !== index &&
      Promise.all([this.setState(update(this.state, { focus: { $set: index } }))]).then(() => {
        this.requestEvents(0);
      });
  }

  onChangeOffset(offset) {
    this.requestEvents(offset);
  }

  onClickGoEvents(event) {
    let {
      states: {
        config: {
          url: { cdn: cdnUrl },
        },
      },
    } = this.props;
    let { focus, items } = this.state;

    let idx = getDatasetByName(event.currentTarget, "idx");
    let selectedItem = items.find((item) => String(item["idx"]).includes(idx));

    !focus && (!!selectedItem["isLink"] ? goLink(addDomain(cdnUrl, selectedItem["linkUrl"])) : goEvents(idx));
  }

  handleRequestBannerData = async () => {
    return await fetch(`${CDN_URL}/eventBanners/web.json`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return [];
      });
  };

  onClickWinners(event) {
    let {
      actions: { handleOpenContentsLayer },
    } = this.props;

    let idx = getDatasetByName(event.currentTarget, "idx");

    handleOpenContentsLayer(LayerTypes.EVENTS_WINNER, { idx });
  }

  onClickSNS(event) {
    let {
      states: {
        config: {
          snsAppID: { fb },
        },
      },
    } = this.props;
    let snsType = snakeToCamel(getDatasetByName(event.currentTarget, "sns-type").toLowerCase());
    let idx = getDatasetByName(event.currentTarget, "idx");
    let url = `/share/event${idx ? `/${idx}` : ""}`;

    idx && this[snsType].share(addDomain(getLocationOrigin(), url), snsType.match(/facebook/) ? fb : null);
  }

  onClickCopyUrl(event) {
    let {
      actions: { handleOpenAlertLayer },
    } = this.props;

    let idx = getDatasetByName(event.currentTarget, "idx");
    let field = this.field[`copyUrl-${idx}`] || null;

    Promise.all([clipBoard(field)])
      .then(() => {
        handleOpenAlertLayer({
          description: "링크가 복사 되었습니다.",
        });
      })
      .catch((error) => {
        handleOpenAlertLayer({
          description: error,
        });
      });
  }

  requestEvents(offset) {
    let {
      actions: { handleRequestEvents, handleOpenAlertLayer, handleUpdateUIScroll },
    } = this.props;
    let { goLists, focus, limit } = this.state;

    if (!focus)
      return new Promise((resolve, reject) => {
        let list = goLists.slice(offset, offset + limit);
        let totalCount = goLists.length;

        this.setState(
          update(this.state, {
            items: { $set: list },
            offset: { $set: offset },
            totalCount: { $set: totalCount },
          }),
        );

        resolve(totalCount);
      })
        .then((result) => {
          handleUpdateUIScroll(0);

          return result;
        })
        .catch((error) => {
          handleOpenAlertLayer({
            description: error,
          });
        });
    else
      return handleRequestEvents({
        offset,
        eventStatus: "FINISH",
        limit,
      })
        .then((result) => {
          let { list, totalCount } = result;

          list = list.reduce((target, item) => {
            let chk = Number(toDate(item["endDate"], "YYYY"));
            item["anyways"] = chk >= 2099 ? "Y" : "N";
            item["anyways"] = chk === 2098 ? "T" : item["anyways"];

            target.push(item);
            return target;
          }, []);

          this.setState(
            update(this.state, {
              items: { $set: list },
              offset: { $set: offset },
              totalCount: { $set: totalCount },
            }),
          );

          return { totalCount };
        })
        .then((result) => {
          handleUpdateUIScroll(0);

          return result;
        })
        .catch((error) => {
          handleOpenAlertLayer({
            description: error,
          });
        });
  }

  componentDidMount() {
    let { goLists } = this.state;

    if (goLists.length === 0) {
      this.init();
    } else {
      this.playRequestEvents();
    }
  }

  init = async () => {
    const data = await this.handleRequestBannerData();

    this.setState(
      {
        goLists: this.getGoEvents(data),
      },
      () => {
        this.playRequestEvents();
      },
    );
  };

  playRequestEvents = () => {
    let { focus } = this.state;

    this.requestEvents(0).then((result) => {
      focus === 0 &&
        result["totalCount"] === 0 &&
        Promise.all([this.setState(update(this.state, { focus: { $set: 1 } }))]).then(() => {
          this.requestEvents(0);
        });
    });
  };

  eventEtcText = (item) => {
    if (item["anyways"] && (item["anyways"] === "N" || item["anyways"] === "T")) {
      return `${item["anyways"] === "T" ? "재고 소진시 까지" : "~" + toDate(item["endDate"], "YYYY.MM.DD") + " 까지"}`;
    }

    //혹시 몰라서 남겨둠
    //return (item[ 'anyways' ] && (item[ 'anyways' ] === "N" || item[ 'anyways' ] === "T") ) && (`${toDate(item[ 'startDate' ], 'YYYY.MM.DD')} ~ ${item[ 'anyways' ] === "T" ? "재고 소진시 까지" : toDate(item[ 'endDate' ], 'YYYY.MM.DD')}`)
  };

  render() {
    let {
      states: {
        config: {
          url: { cdn: cdnUrl },
        },
      },
    } = this.props;
    let { focus, items, offset, limit, totalCount } = this.state;

    return (
      <div className="events-wrap">
        <div className="container">
          <div className="top">
            <h1>이벤트</h1>
          </div>
          <div className="middle">
            {React.cloneElement(<Tab />, {
              activeIndex: focus,
              labels: this.buttons,
              tabWidth: "50%",
              tabHeight: "50px",
              actions: {
                handleChange: this.onChangeTab,
              },
            })}

            <span>
              {this.buttons[focus]} <em>({totalCount})</em>
            </span>

            <ul>
              {items.length > 0 ? (
                items.map((item) => (
                  <li key={item["idx"]}>
                    <div className="inner">
                      <div className={`top ${focus ? "end" : ""}`}>
                        <div data-idx={item["idx"]} onClick={this.onClickGoEvents}>
                          <img src={addDomain(cdnUrl, item["filePath"])} />
                        </div>
                        {!focus && (
                          <div className="share">
                            <button type="button" className="icon-twitter-3434" data-idx={item["idx"]} data-sns-type="twitter" onClick={this.onClickSNS} />

                            <button type="button" className="icon-facebook-3434" data-idx={item["idx"]} data-sns-type="facebook" onClick={this.onClickSNS} />

                            <button type="button" className="icon-link-3434" data-idx={item["idx"]} onClick={this.onClickCopyUrl} />

                            <input
                              type="text"
                              name={`copyUrl-${item["idx"]}`}
                              value={addDomain(getLocationOrigin(), `/share/event/${item["idx"]}`)}
                              ref={(c) => {
                                this.field[`copyUrl-${item["idx"]}`] = c;
                              }}
                            />
                          </div>
                        )}
                      </div>
                      <div className="middle">
                        <span>{item["title"]}</span>
                        <span>
                          <div className="contents" dangerouslySetInnerHTML={{ __html: item["description"] }} />
                        </span>
                        <span>{this.eventEtcText(item)}</span>

                        {item["lotteryYN"] === "Y" && (
                          <button type="button" className="btn-black-small marginTop40" data-idx={item["idx"]} onClick={this.onClickWinners}>
                            당첨자 발표
                          </button>
                        )}
                      </div>
                      {/*											{(item[ 'lotteryYN' ] === 'Y') && (
												<div className="bottom">
													<button type="button"
													        className="btn-black-small"
													        data-idx={item[ 'idx' ]}
													        onClick={this.onClickWinners}>당첨자 발표
													</button>
												</div>
											)}*/}
                    </div>
                  </li>
                ))
              ) : (
                <li className="nothing">
                  <span>{`${this.buttons[focus]}가 없습니다.`}</span>
                </li>
              )}
            </ul>
          </div>

          <div className="bottom">
            {totalCount > 0 &&
              React.cloneElement(<Pagination />, {
                limit,
                offset,
                totalCount,
                handleChangeOffset: this.onChangeOffset,
              })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    states: {
      config: state.config,
      eventStyle: state.event.eventStyle,
      event: state.event.eventList,
      isZeroDeal: state.event.isZeroDeal,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleRequestEvents: (params) => dispatch(ActionEvents.requestEvents2(params)),

      handleUpdateUIScroll: (targetY, easingType) => dispatch(ActionUI.updateUIScroll(targetY, easingType)),

      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
      handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),
    },
  };
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
