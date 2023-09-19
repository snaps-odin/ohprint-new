import React from 'react';

import {addDomain, addCdn, addTemplateCdn} from 'utils/url';
import {PRODUCTS} from 'configs/products/index';

export default class TemplatePreviewViewport extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
		  envelope:null,
			show: false
		};

		this.skin = {
      CALENDAR_DESK_HORIZONTAL : {
        CALENDAR_DESK_L : {
          images : 'calendar-list-popup-original@2x.png',
          size : {
            width : 596,
            height : 460
          }
        },
        CALENDAR_DESK_M : {
          images :  "calendar-list-popup-opm-width@2x.png",
          size : {
            width : 520,
            height : 460
          }
        }
      },

      CALENDAR_DESK_VERTICAL : {
        CALENDAR_DESK_M : {
          images : "calendar-list-popup-opm-height@2x.png",
          size : {
            width : 306,
            height : 460
          }
        },
        CALENDAR_DESK_S : {
          images : "calendar-list-popup-mini@2x.png",
          size : {
            width : 322,
            height : 460
          }
        }

      }
    }

    this.content = {
      CALENDAR_DESK_HORIZONTAL : {
        CALENDAR_DESK_L : {
          size : {
            width : 538,
            height : 332
          },
          position:{
            top:33,
            left:29
          }
        },
        CALENDAR_DESK_M : {
          size : {
            width : 460,
            height : 328
          },
          position:{
            top:34,
            left:30
          }
        }
      },

      CALENDAR_DESK_VERTICAL : {
        CALENDAR_DESK_M : {
          size : {
            width : 248,
            height : 348
          },
          position:{
            top:31,
            left:29
          }
        },
        CALENDAR_DESK_S : {
          size : {
            width : 264,
            height : 337
          },
          position:{
            top:32,
            left:29
          }
        }
      }
    }

    this.tripod = {
      CALENDAR_DESK_HORIZONTAL : {
        CALENDAR_DESK_L : {
          size : {
            width : 460,
            height : 47
          },
          position:{
            bottom:41,
            left:68
          }
        },
        CALENDAR_DESK_M : {
          size : {
            width : 380,
            height : 50
          },
          position:{
            bottom:41,
            left:70
          }
        }
      },

      CALENDAR_DESK_VERTICAL : {
        CALENDAR_DESK_M : {
          size : {
            width : 184,
            height : 37
          },
          position:{
            bottom:38,
            left:61
          }

        },
        CALENDAR_DESK_S : {
          size : {
            width : 152,
            height : 38
          },
          position:{
            bottom:43,
            left:85
          }
        },
      }
    }


    this.getEnvelopePosition = this.getEnvelopePosition.bind(this);
    this.getStrapImage = this.getStrapImage.bind(this);
	}

	componentDidMount() {
		window.setTimeout(() => {
			this.setState({
        show: true
			})
		}, 500);
	}

  getEnvelopePosition(productShapeType, cProductSizeType, direction){
    let envelope = null;
    let sizeInfo = null;
    try{
      envelope = PRODUCTS.ENVELOPE.THUMBNAIL_PREVIEW_POSITION;
      sizeInfo = envelope[productShapeType][cProductSizeType][direction.toUpperCase()] || {x:'', y: ''};
    }catch (e){
      sizeInfo = {x :'0px', y:'0px'}
    }

    return sizeInfo;
  }

  getStrapImage(colorCode, strapImage, index) {
    let findData = strapImage.find(mask => Object.is(mask['colorCode'], colorCode) && Object.is(mask['sort'], index + 1));

    if(!!findData) return findData['value'];
    else return null;
  }


	render() {
		let { states, category, subCategory, query, focused, foldShape, items, isAccessory, isRoundFrame, options, thumbnailUrl, position, productShapeType, productSizeType : cProductSizeType, detailThumbImageUrl, useImageServer }  = this.props;
		let { config: { url: { cdn: cdnUrl } } } = states;
		let { frameCode, backCode, paperShapeType } = query;
		let { sizeType, viewMode, thumbnailSize, direction, isVertical, triFold, width, height, margin, viewPages, productSizeType, maskImage, isViewMaskImage, colorCode, strapImage } = options;
		let { show } = this.state;

		let isSign = !!String(category).match(/placard-banner|standard-banner|double-side-banner|rollup-banner|mini-banner|poster|board-sign|acrylic-sign|metal-sign|wooden-frame-sign|window-decal|table-top-sign|car-magnet|a-frame-sign/i);
		let isApparel = !!String(category).match(/apparel/i);
    let isDiary = !!String(category).match(/hard-diary|soft-diary/i);
    let isPvcDiary = !!String(category).match(/pvc-diary/i);
		let isCalendarDesk = !!String(category).match(/calendar-desk/i);
		let isSelectTemplate = !!String(category).match(/business-card/i);
		let isShoppingBag = !!String(category).match(/shoppingbag/i);
		let isBack = items.find((item)=>item[ 'itemType' ] === "BACK");
		let isEnvelope = !!String(category).match(/envelope/i);
    let isCup = !!String(category).match(/reusable-cup|eco-tumbler|straight-glass|new-stack-glass/i);
    !isEnvelope && (maskImage = (maskImage && Array.isArray(maskImage) && viewMode === 'FULL') ? maskImage.find(mask => Object.is(mask[ 'frameCode' ], frameCode))[ 'value' ] : maskImage);

		let envelopeInfo = this.getEnvelopePosition(productShapeType, cProductSizeType, direction);

		return (
			<div className={`top ${isCalendarDesk && 'isCalendarDeskHeight'} ${String(viewMode).toLowerCase()} ${!thumbnailSize ? 'expand' : ''} ${isSelectTemplate ? 'selection' : ''}`}>
				{(items || []).length > 0
					?
					new Array(String(viewMode).includes('FULL') ? 1 : 2).fill(0).reduce((target, list, index) => {
						maskImage = ( isApparel || isDiary ) ? addDomain(cdnUrl, items[ String(viewMode).includes('FULL') ? focused : index ][ 'thumbnailSkinUrl' ]) : maskImage;
						let positionY = (height * (items[ String(viewMode).includes('FULL') ? focused : index ][ 'position' ] || 0) / 100) * -1;
						let designUrl = items[ String(viewMode).includes('FULL') ? focused : index ][ 'defaultUrl' ];
						let isBackSkin = (isViewMaskImage && isBack && (index === 1)) ? isViewMaskImage : false;
						let strapUrl = isDiary ? this.getStrapImage(colorCode, strapImage, index) : '';

						if(index === 1 && !!isBackSkin){
              maskImage = isBackSkin;
            }

						(!isApparel && !isDiary && !isPvcDiary && !isCalendarDesk && !isEnvelope && !isShoppingBag) && target.push(
							<div>
								{!foldShape
									?
									(
										<span
											className={`${(isAccessory || isSign || isCup) ? 'shadow-none' : ''} ${(!isSign && isRoundFrame) ? 'round' : ''}`}
											style={{
												background: `url('${useImageServer ? addTemplateCdn(designUrl) : addDomain(cdnUrl, designUrl)}') 0 0 / cover no-repeat`,
												width: `${width}px`,
												height: `${height}px`
											}}>

											{maskImage && (
												<span className="mask-image"
												      style={{ background: `url(${addCdn(maskImage)}) 0 0 / cover no-repeat` }}/>
											)}

										</span>
									)
									:
									(
										<span style={{ boxShadow: 'none' }}>
											<div
												className={`preview-folder-wrap ${direction || ''} ${foldShape || ''} ${triFold ? 'tri' : ''} ${sizeType || ''} ${productSizeType || ''} ${show ? 'visible' : 'hidden'}`}
												style={{
													width: `${width * (isVertical ? (triFold ? 3 : 2) : 1)}px`,
													height: `${height * (isVertical ? 1 : 2)}px`
												}}>

												<div className="page"
												     style={{ width: `${width}px`, height: `${height}px` }}>

													{(viewPages || []).reduce((pageTarget, page) => {
														pageTarget.push(
															<div className={page[ 'className' ]}>
																{page[ 'sides' ].reduce((sideTarget, side) => {
																	sideTarget.push(
																		<div className={side[ 'className' ]}
																		     style={{ background: `url('${addDomain(cdnUrl, items[ side[ 'className' ] === 'back' ? 1 : 0 ][ 'defaultUrl' ])}') ${side[ 'position' ]} / cover no-repeat` }}/>
																	);

																	return sideTarget;
																}, [])}
															</div>
														);

														return pageTarget;
													}, [])}
												</div>
											</div>
										</span>
									)
								}
							</div>
						);

            isShoppingBag && target.push(
              <div>
                <span
                  className={`${(isAccessory || isSign || isShoppingBag) ? 'shadow-none' : ''} ${(!isSign && isRoundFrame) ? 'round' : ''}`}
                  style={{
                    background: `url('${addDomain(cdnUrl,  thumbnailUrl)}') 0 0 / cover no-repeat`,
                    width: `${width}px`,
                    height: `${height}px`
                  }}>

                  {maskImage && (
                    <span className="mask-image"
                          style={{
                            background: `url(${addCdn(maskImage)}) 0 0 / cover no-repeat`,
                            width: `${width}px`,
                            height: `${height}px`,
                            left: '50%',
                            transform: 'translate(-50%, 0)'
                          }}/>
                  )}

                </span>
              </div>
            );

						isEnvelope  && target.push(//195.5
              <div className={"tableCellDisabled"}>
                <span
                  className={`${(isAccessory || isSign) ? 'shadow-none' : ''} ${(!isSign && isRoundFrame) ? 'round' : ''}`}
                  style={{
                    background: `url('${addDomain(cdnUrl, detailThumbImageUrl)}') ${index === 1 ? envelopeInfo['x'] : '0'} ${index === 1 ? envelopeInfo['y'] : '0'} / cover no-repeat`,
                    width: `${envelopeInfo.width}`,
                    height: `${envelopeInfo.height}`,
                    margin: `${envelopeInfo.margin}`,
                    boxShadow: 'none'
                  }}>

                  {maskImage && (
                    <span className="mask-image"
                          style={{ background: `url(${addCdn(maskImage[index].value)}) 0 0 / cover no-repeat` }}/>
                  )}

                </span>
              </div>
            );

            isPvcDiary && target.push(//195.5
              <div className={"tableCellDisabled"}>
                <span
                  style={{
                    background: `url('${addDomain(cdnUrl, detailThumbImageUrl)}') ${index === 1 ? '-242px' : '0'} ${index === 1 ? envelopeInfo['y'] : '0'} / cover no-repeat`,
                    width: '242px',
                    height: '363px',
                    margin: '128px 94px',
                    boxShadow: 'none'
                  }}>

                  {maskImage && (
                    <span className="mask-image"
                          style={{
                            background: `url(${addCdn(maskImage[index].value)}) 0 0 / cover no-repeat`,
                            width: '316px',
                            height: '444px',
                            margin: '88px 57px',
                          }}/>
                  )}

                </span>
              </div>
            );


						isApparel && target.push(
							<div>
								<div style={{
									width: `${width}px`,
									height: `${height}px`
								}}>
									<span
										className="skin"
										style={{
											background: `url('${maskImage}') 0 0 / cover no-repeat`,
											width: `${width}px`,
											height: `${height}px`
										}}/>

									{designUrl && (
										<span
											className="design"
											style={{
												background: `url('${addDomain(cdnUrl, designUrl)}') 0 0 / cover no-repeat`,
												width: `${width}px`,
												height: `${height}px`,
												top: `${positionY}px`
											}}/>
									)}
								</div>
							</div>
						);


            isDiary && target.push(
              <div>
                <div style={{
                  width: `${width}px`,
                  height: `${height}px`
                }}>
									<span
                    className="skin"
                    style={{
                      background: `url('${maskImage}') center center / cover no-repeat`,
                      width: '100%',
                      height: '100%',
                    }}/>

                  {designUrl && (
                    <span
                      className="design"
                      style={{
                        background: `url('${addDomain(cdnUrl, designUrl)}') center center / cover no-repeat`,
                        width: '100%',
                        height: '100%',
                        top: `${positionY}px`
                      }}/>
                  )}

                  {strapUrl &&
                    <span
                      className="strap"
                      style={{
                        background: `url('${addCdn(strapUrl)}') center center / cover no-repeat`,
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  }
                </div>
              </div>
            );

            isCalendarDesk && target.push(
              <div className="calendarView">
                <div className="contentMap" style={{width:`${this.skin[productShapeType][cProductSizeType]['size'].width}px`, height: `${this.skin[productShapeType][cProductSizeType]['size'].height}px`}}>
                  <img className="content"
                       style={{
                         width:`${this.content[productShapeType][cProductSizeType]['size'].width}px`,
                         height: `${this.content[productShapeType][cProductSizeType]['size'].height}px`,
                         top: `${this.content[productShapeType][cProductSizeType]['position'].top}px`,
                         left: `${this.content[productShapeType][cProductSizeType]['position'].left}px`,
                       }}

                       src={addDomain(cdnUrl, items[focused].defaultUrl)}/>
                  <img className="skin" src={addCdn(`/images/common/mask/showcase/${this.skin[productShapeType][cProductSizeType].images}`)}/>
                  {(((items[focused].itemType === "BACK") || (focused === 1)) && (backCode || "") !== "503000") && <img className="tripod"
                                                                 style={{
                                                                   width:`${this.tripod[productShapeType][cProductSizeType]['size'].width}px`,
                                                                   height: `${this.tripod[productShapeType][cProductSizeType]['size'].height}px`,
                                                                   bottom: `${this.tripod[productShapeType][cProductSizeType]['position'].bottom}px`,
                                                                   left: `${this.tripod[productShapeType][cProductSizeType]['position'].left}px`,
                                                                 }}

                                                                 src={addDomain(cdnUrl, items[0].effectMatch1Url)} alt="삼각대"/>}
                </div>
              </div>
            )

						return target;
					}, [])
					:
					(
						<div className="error">
							<span style={{ boxShadow: 'none' }}>상품 디자인을 불러오지 못했습니다.</span>
						</div>
					)
				}
			</div>
		)
	}
}
