import React from "react";
import update from "react-addons-update";
import { connect } from "react-redux";
import { ActionEvents, ActionLayer } from "actions/index";
import { getDatasetByName } from "utils/dom";
import { addDomain, getLocationOrigin, goEvents } from "utils/url";
import { clipBoard } from "utils/clipboard";
import { toDate } from "utils/format";
import { offsetTimestampByDate } from "utils/date";
import { snakeToCamel } from "utils/string";

import * as Facebook from "utils/facebook";
import * as KakaoTalk from "utils/kakao-talk";
import * as Twitter from "utils/twitter";
import Attention from "components/common/attention";
import EventsContent from "src/components/events/content";
import EventsMapContent from "src/components/events/map-content";

import { CDN_URL } from "configs/aws";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { withRouter } from "next/router";
class EventsDetail extends React.Component {
  constructor(...args) {
    super(...args);

    this.facebook = Facebook;
    this.kakaotalk = KakaoTalk;
    this.twitter = Twitter;

    this.state = {
      item: null,
      items: null,
      others: null,
      shareUrl: null,
      expired: true,
      ready: false,

      mapData: [],
    };

    this.onClickGoEvents = this.onClickGoEvents.bind(this);

    this.onClickSNS = this.onClickSNS.bind(this);
    this.onClickCopyUrl = this.onClickCopyUrl.bind(this);

    this.handleRequestImageMapData = this.handleRequestImageMapData.bind(this);
  }

  onClickGoEvents(event) {
    let seq = getDatasetByName(event.currentTarget, "seq") || "";

    goEvents(seq);
  }

  onClickSNS(event) {
    let {
      states: {
        config: {
          snsAppID: { fb },
          url: { cdn: cdnUrl },
        },
      },
    } = this.props;
    let {
      shareUrl,
      item: { title, description, filePath: imageUrl },
    } = this.state;

    let snsType = snakeToCamel(getDatasetByName(event.currentTarget, "sns-Type").toLowerCase());
    let idx = getDatasetByName(event.currentTarget, "idx");
    let isKakaoTalk = !!(snsType || "").match(/kakaotalk/);

    if (idx) {
      if (!isKakaoTalk) {
        idx && this[snsType].share(shareUrl, (snsType || "").match(/facebook/) ? fb : null);
      } else {
        this.kakaotalk.share({
          title: title || "",
          description: description || "",
          imageUrl: imageUrl || "",
          mobileWebUrl: shareUrl,
        });
      }
    }

    //	idx && this[ snsType ].share(shareUrl, (snsType || '').match(/facebook/) ? fb : (snsType || '').match(/kakaotalk/) ? kakao : null);
  }

  onClickCopyUrl(event) {
    let {
      actions: { handleOpenAlertLayer },
    } = this.props;

    Promise.all([clipBoard(this.field)])
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

  requestEvent(seq) {
    let {
      actions: { handleOpenAlertLayer, handleRequestEventsDetailByIdx, handleRequestEventsOthersByIdx },
      states: { isZeroDeal },
    } = this.props;

    Promise.all([handleRequestEventsDetailByIdx(seq), handleRequestEventsOthersByIdx(seq), this.handleRequestImageMapData()])
      .then((results) => {
        let { 0: item, 1: items, 2: map } = results;
        return {
          expired: offsetTimestampByDate(item["dueDate"], item["serverDate"]) <= 0,
          item,
          items,
          map,
        };
      })
      .then((result) => {
        let { expired, item, items, map } = result;

        let chk = Number(toDate(item["endDate"], "YYYY"));
        item["anyways"] = chk >= 2099 ? "Y" : "N";
        item["anyways"] = chk === 2098 ? "T" : item["anyways"];
        if (isZeroDeal && parseInt(item.idx) === 21) {
          expired = true;
        }
        expired
          ? window.setTimeout(() => {
              handleOpenAlertLayer({
                description: "이벤트가 종료되었습니다.",
                callback: () => {
                  goEvents();
                },
              });
            }, 100)
          : this.setState(
              update(this.state, {
                item: { $set: item },
                items: { $set: items },
                map: { $set: map },
                others: {
                  $set: new Array(Math.ceil(items.length / 3)).fill([]).map((item, index) => {
                    return items.reduce((target, list, listIndex) => {
                      index === Math.floor(listIndex / 3) && target.push(list);

                      return target;
                    }, []);
                  }),
                },
                shareUrl: { $set: addDomain(getLocationOrigin(), `/share/event/${seq}`) },
                expired: { $set: expired },
                ready: { $set: true },
              }),
            );
      })
      .catch((error) => {
        handleOpenAlertLayer({
          description: error,
          callback: () => {
            goEvents();
          },
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    let { eventSeq: prevIdx } = prevProps.router.query;
    let { eventSeq: currentIdx } = this.props.router.query;

    !Object.is(prevIdx, currentIdx) && this.requestEvent(currentIdx);
  }

  componentDidMount() {
    const {
      router: {
        query: { eventSeq },
      },
    } = this.props;
    this.requestEvent(eventSeq);
  }

  async handleRequestImageMapData() {
    const {
      router: {
        query: { eventSeq },
      },
    } = this.props;

    return await fetch(`${CDN_URL}/map_event/${eventSeq}/pc/e_body/eventBody-${eventSeq}.json`)
      .then((response) => response.json())
      .then((data) => {
        return data["EVENT_BODY"];
      })
      .catch((err) => {
        return [];
      });
  }

  eventEtcText = (item) => {
    if (item["anyways"] && (item["anyways"] === "N" || item["anyways"] === "T")) {
      return `${item["anyways"] === "T" ? "재고 소진시 까지" : "~" + toDate(item["endDate"], "YYYY.MM.DD") + " 까지"}`;
    }

    //혹시 몰라서 남겨둠
    //return (item[ 'anyways' ] && (item[ 'anyways' ] === "N" || item[ 'anyways' ] === "T") ) && (`${toDate(item[ 'startDate' ], 'YYYY.MM.DD')} ~ ${item[ 'anyways' ] === "T" ? "재고 소진시 까지" : toDate(item[ 'endDate' ], 'YYYY.MM.DD')}`)
  };

  render() {
    console.log(this.props);
    let {
      states: {
        config: {
          url: { cdn: cdnUrl },
        },
      },
      router: { query },
    } = this.props;
    const { item, others, shareUrl, expired, ready, map } = this.state;
    const eventSeq = query.eventSeq;

    return (
      ready && (
        <div className="events-detail-wrap">
          <div className="container">
            <div className="top">
              <div>
                <h1>{item["title"]}</h1>
                {item["description"] && (
                  <span>
                    <div className="contents" dangerouslySetInnerHTML={{ __html: item["description"] }} />
                  </span>
                )}
                <span>
                  {/*{`${toDate(item[ 'startDate' ], 'YYYY.MM.DD')} ~ ${toDate(item[ 'endDate' ], 'YYYY.MM.DD')}`}*/}
                  {this.eventEtcText(item)}
                </span>
              </div>

              <div className="share">
                <button type="button" className="icon-twitter-3434" data-idx={item["idx"]} data-sns-type="twitter" onClick={this.onClickSNS} />

                <button type="button" className="icon-facebook-3434" data-idx={item["idx"]} data-sns-type="facebook" onClick={this.onClickSNS} />

                <button type="button" className="icon-kakao-3434" data-idx={item["idx"]} data-sns-type="KakaoTalk" onClick={this.onClickSNS} />

                <button type="button" className="icon-link-3434" data-idx={item["idx"]} onClick={this.onClickCopyUrl} />

                <input
                  type="text"
                  name={`copyUrl-${item["idx"]}`}
                  value={shareUrl}
                  ref={(c) => {
                    this.field = c;
                  }}
                />
              </div>
            </div>

            <div className="middle">
              <div className="contents-wrap">
                {map.length > 0 ? (
                  <EventsMapContent idx={eventSeq} data={map} title={item["title"]} />
                ) : (
                  !!item["content"] &&
                  React.cloneElement(<EventsContent />, {
                    seq: item["idx"],
                    type: item["contentType"],
                    shareUrl,
                    copyUrl: shareUrl,
                    item,
                    expired,
                    path: !!String(item["contentType"]).match(/url/i) ? item["content"] : query["url"] || item["content"],
                  })
                )}
              </div>

              {(item["footer"] || []).length > 0 &&
                React.cloneElement(<Attention />, {
                  value: {
                    title: "<span>유의사항</span>",
                    children: item["footer"].reduce((target, line) => {
                      target.push({ value: String(line) });

                      return target;
                    }, []),
                  },
                })}
            </div>

            {/*						{((others || []).length > 1) && (
							<div className="bottom">
								<div>
									<span className="left">다른 진행중인 이벤트</span>
									<span className="right">
										<button type="button"
										        className="btn-white-small"
										        onClick={this.onClickGoEvents}>

											목록
										</button>
									</span>
								</div>

								{React.cloneElement(<SwipeContents/>, {
									width: 1140,
									options: {},
									children: others.reduce((target, other) => {
										target.push(
											<div>
												{new Array(3).fill('').map((item, subIndex) => other[ subIndex ]
													?
													(
														<div>
															<div data-idx={other[ subIndex ][ 'eventSeq' ]}
															     onClick={this.onClickGoEvents}>
																{React.cloneElement(<ThumbnailProduct/>, {
																	imageUrl: addDomain(cdnUrl, other[ subIndex ][ 'filePath' ])
																})}
															</div>

															<dl>
																<dt>
																	<button type="button"
																	        data-idx={other[ subIndex ][ 'eventSeq' ]}
																	        onClick={this.onClickGoEvents}>{other[ subIndex ][ 'title' ]}</button>
																</dt>
																<dd>
																	{`${toDate(other[ subIndex ][ 'startDate' ], 'YYYY.MM.DD')} ~ ${toDate(other[ subIndex ][ 'endDate' ], 'YYYY.MM.DD')}`}

																</dd>
															</dl>
														</div>
													)
													:
													(
														<div/>
													)
												)}
											</div>
										);

										return target;
									}, [])
								})}
							</div>
						)}*/}
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    states: {
      config: state.config,
      isZeroDeal: state.event.isZeroDeal,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleRequestEventsDetailByIdx: (idx) => dispatch(ActionEvents.requestEventsDetailByIdx(idx)),
      handleRequestEventsOthersByIdx: (idx) => dispatch(ActionEvents.requestEventsOthersByIdx(idx)),

      handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),
      handleCloseContentsLayer: () => dispatch(ActionLayer.closeContentsLayer()),
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

export async function getStaticPaths() {
  /*  const pathList = ["cart", "coupon", "order", "delivery", "profile", "withdraw", "benefit"];

  const paths = pathList.map((item) => `/member/${item}`);*/
  let paths = [];
  new Array(1200).fill(true).map((item, idx) => {
    paths.push(`/events/${idx + 1}`);
  });

  console.log(paths.length);

  return {
    paths,
    fallback: true,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EventsDetail));
