import React from 'react';
import { Field } from 'redux-form';
import TweenFunctions from 'tween-functions';

import { addDomain, addCdn, addTemplateCdn } from 'utils/url';
import { getDatasetByName } from 'utils/dom';
import { getDeepValue } from 'utils/json';

import { CheckBoxField, RadioField } from 'components/common/fields';
import ScrollBar from 'components/common/scroll-bar';
import ThumbnailProductCalendar from 'components/common/thumbnail-product-calendar';


export default class TemplatePreviewNavigation extends React.Component {
  constructor(...args) {
    super(...args);

    this.standard = {
      totalWidth: 860,
      padding: 12
    };

    this.elements = [];

    this.scroll = {
      values: {
        start: null,
        end: null
      },
      times: {
        start: null,
        current: null
      },
      duration: 500,
      id: null
    };

    this.calendarItemSizeInfo = {
      CALENDAR_DESK_HORIZONTAL : {
        CALENDAR_DESK_L : 134,
        CALENDAR_DESK_M : 117
      },

      CALENDAR_DESK_VERTICAL : {
        CALENDAR_DESK_M : 69,
        CALENDAR_DESK_S : 72
      }
    }

    this.onChangeScrollBarRatio = this.onChangeScrollBarRatio.bind(this);

    this.focusScroll = this.focusScroll.bind(this);
    this.animateScroll = this.animateScroll.bind(this);
    this.stopScroll = this.stopScroll.bind(this);

    this.onClickThumbnail = this.onClickThumbnail.bind(this);
    this.onClickShapeType = this.onClickShapeType.bind(this);
  }

  onChangeScrollBarRatio(ratio) {
    let { clientWidth, scrollWidth } = this.bottom;
    let distance = scrollWidth - clientWidth;

    this.stopScroll();
    this.bottom.scrollLeft = (distance * ratio);
  }

  focusScroll(targetScrollLeft) {
    this.stopScroll();

    this.scroll.values = { start: this.bottom[ 'scrollLeft' ], end: targetScrollLeft };
    this.scroll.times = { start: null, current: null };
    this.scroll.id = window.requestAnimationFrame(this.animateScroll);
  }

  animateScroll(timestamp) {
    let { values, times, duration } = this.scroll;

    if (!times.start) times.start = timestamp;
    times.current = timestamp - times[ 'start' ];

    this.bottom.scrollLeft = TweenFunctions[ 'easeOutQuart' ](times[ 'current' ], values[ 'start' ], values[ 'end' ], duration);

    if (times.current >= duration) {
      this.stopScroll();
    } else {
      this.scroll[ 'id' ] = window.requestAnimationFrame(this.animateScroll);
    }
  }

  stopScroll() {
    this.scroll[ 'id' ] && window.cancelAnimationFrame(this.scroll[ 'id' ]);
  }

  onClickShapeType(event) {
    let { actions: { handleChangeFoldShape } } = this.props;

    handleChangeFoldShape(getDatasetByName(event.currentTarget, 'fold-shape'));
  }

  onClickThumbnail(event) {
    let { actions: { handleChangeFocus } } = this.props;

    handleChangeFocus(Number(getDatasetByName(event.currentTarget, 'index')));
  }

  componentDidMount() {
    let { options, actions: { handleChangeFoldShape }, category } = this.props;
    let { thumbnailPages } = options;


    thumbnailPages && handleChangeFoldShape(thumbnailPages[ 0 ][ 'className' ]);

    this.bottom && this.bottom.addEventListener('wheel', this.stopScroll);
  }

  componentWillUnmount() {
    this.stopScroll();

    this.bottom && this.bottom.removeEventListener('wheel', this.stopScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    let { focused: currentFocused, options: { width }, items } = this.props;
    let { focused: prevFocused } = prevProps;

    let { totalWidth, padding } = this.standard;
    let restrictWidth = totalWidth - (padding * 2);
    let containerWidth = (width + padding * 2) * (items.length || 1);

    if (this.bottom && this.elements.length > 0 && containerWidth >= restrictWidth && !Object.is(prevFocused, currentFocused)) {
      let el = this.elements[ currentFocused ];
      let left = Math.max(0, el.offsetLeft - 20);

      this.focusScroll(left);
    }
  }

  calcWidth = (productShapeType, productSizeType, items) => {
    if(productShapeType === "CALENDAR_DESK_HORIZONTAL"){

      if(productSizeType === "CALENDAR_DESK_L"){
        return (this.calendarItemSizeInfo[productShapeType][productSizeType] * (items.length || 1) + 142);
      }

      if(productSizeType === "CALENDAR_DESK_M"){
        return (this.calendarItemSizeInfo[productShapeType][productSizeType] * (items.length || 1)) + 162;
      }

    }

    if(productShapeType === "CALENDAR_DESK_VERTICAL"){
      if(productSizeType === "CALENDAR_DESK_M"){
        return (this.calendarItemSizeInfo[productShapeType][productSizeType] * (items.length || 1) + 208);
      }

      if(productSizeType === "CALENDAR_DESK_S"){
        return (this.calendarItemSizeInfo[productShapeType][productSizeType] * (items.length || 1) + 208);
      }
    }

  }

  render() {
    let { states, focused, foldShape, isRoundFrame, options, category, position, productShapeType, offsetPrint, productSizeType, paperShapeType, items, backCode } = this.props;
    let { currentForm, config: { url: { cdn: cdnUrl } } } = states;
    let { thumbnailSize, direction, isVertical, triFold, width, height, thumbnailPages, maskImage } = options;
    let { totalWidth, padding } = this.standard;

    let restrictWidth = totalWidth - (padding * 2);
    let containerWidth = (width + padding * 2) * (items.length || 1);
    let isApparel = !!String(category).match(/apparel/i);
    let isCalendarDesk = !!String(category).match(/calendar-desk/i);
    let isBusinessCard = !!String(category).match(/business-card/i) && paperShapeType !== 'TRANSPARENCY';
    let isSelectTemplate = !!String(category).match(/business-card/i);
    let isTransBussinessCard = (productShapeType || '').match(/TRANS_BUSINESS_CARD_NONE/);
    //let selectedTemplateCodes = (getDeepValue(currentForm, 'values.selectedTemplateCodes') || []).filter(item => !!item);
    let selectedTemplateCodes = (getDeepValue(currentForm, 'values.selectedTemplateCodes') || []);
    (!offsetPrint || (offsetPrint && offsetPrint==="N")) && (selectedTemplateCodes = selectedTemplateCodes.filter(item => !!item));
    let isCenteredContents = containerWidth < restrictWidth;

    if(isCalendarDesk){
      containerWidth = this.calcWidth(productShapeType, productSizeType, items);
    }

    return (
      <div className={`bottom ${isSelectTemplate ? 'selection' : ''} ${isVertical ? 'vertical' : 'horizontal'}`}>
        <div className={`thumbnail-wrap ${(isCenteredContents || isCalendarDesk) ? 'lock-scroll' : ''}`} ref={(c) => {this.bottom = c;}}>
          {thumbnailSize && (
            <div className="container">
              <div className={`${isCalendarDesk && 'calendarDesk'}`}>
                <ul
                  className={isCalendarDesk && 'calendar'}
                  style={{
                  width: `${isCenteredContents ? restrictWidth : containerWidth}px`,
                  textAlign: (isCenteredContents ? 'center' : 'left')
                }}>
                  {!thumbnailPages
                    ?
                    (
                      items.reduce((target, item, index) => {
                        let positionY = (height * (item[ 'position' ] || 0) / 100) * -1;
                        let check = isCalendarDesk ? (index >= 1) : true;


                        check && target.push(
                          (
                            <li className={`${Object.is(focused, index) ? 'active' : ''} ${isApparel ? 'apparel' : ''}`}
                                draggable={false}
                                key={index}
                                ref={(c) => {this.elements[ index ] = c;}}>
                              {(!isApparel && !isCalendarDesk)
                                ?
                                (
                                  <div>
                                    {(isSelectTemplate && offsetPrint === "N") && (index > 0 || isTransBussinessCard) && (
                                      <div className="select-area">
                                        <Field name={`selectedTemplateCodes[${index}]`}
                                               component={CheckBoxField}/>
                                      </div>
                                    )}

                                    {(offsetPrint === "Y") && (index > 0 || isTransBussinessCard) && (
                                      <div className="select-area">
                                        <Field name={`selectedTemplateCodes`}
                                               className="offset"
                                               keyValue={`${index}`}
                                               component={RadioField}/>
                                      </div>
                                    )}


                                    <span data-index={index} onClick={this.onClickThumbnail}>
																			<span className={isRoundFrame ? 'round' : ''}
                                            style={{
                                              width: `${width}px`,
                                              height: `${height}px`,
                                              background: `url(${isBusinessCard ? addTemplateCdn(item[ 'thumbnailUrl' ]) : addDomain(cdnUrl, item[ 'thumbnailUrl' ])}) 0 0 / cover no-repeat`
                                            }}>

																				{maskImage && (
                                          <span className="mask-image"
                                                style={{ background: `url(${addCdn(maskImage)}) center center / cover` }}/>
                                        )}
																			</span>
																		</span>
                                  </div>
                                )
                                :
                                isApparel ? (
                                    <div data-index={index} onClick={this.onClickThumbnail}
                                         style={{
                                           width: `${width}px`,
                                           height: `${height}px`,
                                         }}>
																		<span className={`skin ${isRoundFrame ? 'round' : ''}`}
                                          style={{
                                            width: `${width}px`,
                                            height: `${height}px`,
                                            background: `url(${addDomain(cdnUrl, item[ 'thumbnailSkinUrl' ])}) 0 0 / cover no-repeat`
                                          }}/>
                                      <span className={'design'}
                                            style={{
                                              width: `100%`,
                                              height: `100%`,
                                              background: `url(${addDomain(cdnUrl, item[ 'thumbnailUrl' ])}) 0 0 / cover no-repeat`,
                                              top: `${positionY}px`
                                            }}/>
                                    </div>
                                  )
                                  :
                                  (
                                    <div>
                                      {React.cloneElement(<ThumbnailProductCalendar/>, {
                                        type: 'preview',
                                        cdnUrl,
                                        items:item,
                                        focused,
                                        index,
                                        tripod:items[0],
                                        productSizeType,
                                        productShapeType,
                                        onClickThumbnail : this.onClickThumbnail,
                                        backCode
                                      })}
                                    </div>
                                  )


                              }
                            </li>
                          )
                        );

                        return target;
                      }, [])
                    )
                    :
                    (
                      thumbnailPages.reduce((pageTarget, page, index) => {
                        let isFold = !!String(page[ 'className' ]).match(/pleated|flipped/i);

                        pageTarget.push(
                          <li
                            className={`${page[ 'className' ]} ${direction} ${Object.is(foldShape, page[ 'className' ]) ? 'active' : ''}`}
                            data-index={index}
                            data-fold-shape={page[ 'className' ]}
                            onClick={this.onClickShapeType}>

                            <div>
															<span style={{
                                width: `${width * (isVertical && isFold ? (triFold ? 3 : 2) : 1)}px`,
                                height: `${height * (!isVertical ? 2 : 1)}px`
                              }}>
																{page[ 'sides' ].reduceRight((sideTarget, side) => {
                                  let image = items[ Object.is(side[ 'className' ], 'back') ? 1 : 0 ][ 'thumbnailUrl' ];

                                  sideTarget.push(
                                    <span className={side[ 'className' ]}
                                          style={{
                                            background: `url('${addDomain(cdnUrl, image)}') ${side[ 'position' ]} / cover no-repeat`,
                                            width: `${width * (isVertical && isFold ? (triFold ? 3 : 2) : 1)}px`,
                                            height: `${height * (isVertical ? 1 : (isFold ? 2 : 1))}px`
                                          }}>
																		</span>
                                  );

                                  return sideTarget;
                                }, [])}
															</span>
                            </div>
                          </li>
                        );

                        return pageTarget;
                      }, [])
                    )
                  }
                </ul>
                {((offsetPrint === "" || offsetPrint === "N" ) && isSelectTemplate) && (
                  <div className="selected-info">
                    {`원하는 ${isTransBussinessCard ? '' : '뒷면 '}디자인을 선택해주세요.`}
                    (<em>{(selectedTemplateCodes || []).length}</em>/{Math.max((items || []).length - (isTransBussinessCard ? 0 : 1), 0)}개)
                  </div>
                )}

                {((offsetPrint && offsetPrint === "Y" ) && isSelectTemplate) && (
                  <div className="selected-info">
                    {`원하는 ${isTransBussinessCard ? '' : '뒷면 '}디자인을 선택해주세요.`}
                    (<em>{selectedTemplateCodes.length}</em>/1)
                  </div>
                )}


              </div>
            </div>
          )}
        </div>

        <ScrollBar
          style={{
            position: 'absolute',
            bottom: '0',
            visibility: `${thumbnailSize ? (containerWidth < restrictWidth ? 'hidden' : 'visible') : 'hidden'}`
          }}
          handleGetTarget={() => this.bottom}
          handleChangeRatio={this.onChangeScrollBarRatio}/>
      </div>
    )
  }
}
