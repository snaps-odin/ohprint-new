

import React from 'react';
import update from 'react-addons-update';

import { breaklines } from 'utils/string';
import { getDatasetByName } from 'utils/dom';
import Attention from 'components/common/attention';
import SwipeContents from 'components/common/swipe-contents';
import SwipeThumbnails from 'components/common/swipe-thumbnails';

import { addDomain, addCdn } from 'utils/url';


export default class Showcase extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			activeIndex: 0
		};

		this.onChangeContent = this.onChangeContent.bind(this);
		this.onClickThumbnail = this.onClickThumbnail.bind(this);
	}

	onChangeContent(index) {
		this.setState(update(this.state, {
			activeIndex: { $set: index }
		}))
	}

	onClickThumbnail(event) {
		let index = +getDatasetByName(event.currentTarget, 'index');

		Promise.all([
			this.setState(update(this.state, {
				activeIndex: { $set: index }
			}))
		]).then(() => {
			this.contents.setActiveIndex(index);
		});
	}

  render() {
		let { showcase, category, cdn } = this.props;

		let { activeIndex } = this.state;
		let { deco, brand, title, subTitle, descriptions, attentions, className, children, type, notice, customBtn, menuIndex, bottomDescription, leftImage, templateCode, descriptionTitle, aiDownload, eventBannerImage } = showcase;
		let tableCols = Math.max((subTitle || []).length, 2);
		let galleryList = ((type || '').match(/gallery/i) && (children.length > 0))
			?
			(
				new Array(Math.ceil(children.length / 2)).fill([]).map((item, index) => {
					return children.reduce((target, list, listIndex) => {
						index === Math.floor(listIndex / 2) && target.push(list);

						return target;
					}, []);
				})
			)
			: [];

		return (
			<div className={`store-intro-services-showcase-wrap ${className || ''}`}
			     ref={c => c && menuIndex > -1 && (this.el = c)}>
				<div className={`inner ${className || ''}`}>

					{brand && (
						<div className="brand-logo">
							<img src={addCdn(`/images/store/intro/${category}/service/${brand}@2x.png`)} alt=""/>
						</div>
					)}

					{deco && (
            <img className='deco-num' src={addCdn(`/sprite/svg/${deco}.svg`)}/>
						// <span className={`icon icon-${deco}`}/>
					)}

					{title && (<h1 dangerouslySetInnerHTML={{ __html: breaklines(title) }}/>)}

          {(descriptionTitle || []) && (descriptionTitle || []).reduce((target, descriptionTitle) => {
            target.push(<h2 dangerouslySetInnerHTML={{ __html: breaklines(descriptionTitle) }}/>);

            return target;
          }, [])}

					{(descriptions || []) && (descriptions || []).reduce((target, description) => {
						target.push(<p dangerouslySetInnerHTML={{ __html: breaklines(description) }}/>);

						return target;
					}, [])}

          {attentions && React.cloneElement(<Attention/>, {
            value: {
              children: attentions.reduce((target, item) => {
                target.push({ value: String(item) });

                return target;
              }, [])
            }
          })}

          {(customBtn || []) && (
            <div className="btnMap">
              {(customBtn || []).reduce((target, item, idx) => {
                let {title, img, file, path, borderColor, color} = item;

                target.push(
                  <a
                    className="btnHref"
                    href={addDomain(cdn,`${path}/${file}`)}

                    download={`[OHPRINTME]${file}`}
                  >
                    <div className="btn" style={{border: `2px solid ${borderColor}`}}>
                        <div className="textMap" style={{color:`${color}`}}>
                          <span className="btnTitle">{title}
                            <span className={`icon icon-${img}`}/>
                          </span>
                        </div>
                    </div>
                  </a>
                );
                return target;
              }, [])}
            </div>
          )}

          {(aiDownload || []) && ((aiDownload || []).reduce((target,item,idx)=>{
            let { title, img, file, path } = item;

            target.push(
              <a
                className="btnAihref"
                href={addDomain(cdn,`${path}/${file}`)}
                download={`[OHPRINTME]${file}`}
              >
                <div className="btnAi">
                  <div className="btnAiText">
                    <span>{title}</span>
                  </div>
                  <div className="btnAiimg">
                    <span className={`icon icon-${img}`}/>
                  </div>
                </div>
              </a>
            );

            return target;
          },[]))}

					{(children || []).length > 0 && (
						type === 'table-left-image'
						?
						(
							<div className="table-left-image-wrap">
								<div className="left">
									<img src={addCdn(`/images/store/intro/${category}/service/${leftImage}@2x.png`)} alt=""/>
									<div className="image-subtext">
										<span>상세 사이즈의 치수는 측정 방법과 위치에 따라<br/>오차가 발생할 수 있습니다.</span>
									</div>
								</div>
								<div className="right">
									<div className="table-wrap">
										<table frameBorder={0}>
											<caption>
												<span className="blind"/>
											</caption>
											<colgroup>
												{new Array(tableCols).fill(100 / tableCols).reduce((target, item, index) => {
													target.push(
														<col style={{ width: `${(tableCols === 2) ? (index === 0 ? 20 : 80) : item }%` }}/>
													);

													return target;
												}, [])}
											</colgroup>
											<tbody>
											<tr>
												{(subTitle || []).length > 0 && (subTitle || []).reduce((target, child) => {
													target.push(
														<th dangerouslySetInnerHTML={{ __html: breaklines(child) }}/>
													);

													return target;
												}, [])}
											</tr>

											{children.reduce((target, child) => {
												let { title, descriptions } = child;

												target.push(
													<tr>
														{title && <th dangerouslySetInnerHTML={{ __html: breaklines(title) }}/>}
														{(descriptions || []).length > 0 && (descriptions || []).reduce((target, description) => {
															target.push(
																<td dangerouslySetInnerHTML={{ __html: breaklines(description) }}/>
															);

															return target;
														}, [])}
													</tr>
												);

												return target;
											}, [])}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						)
							:
						(
							type === 'table'
								?
								(
									<div className="table-wrap">
										<table frameBorder={0}>
											<caption>
												<span className="blind"/>
											</caption>
											<colgroup>
												{new Array(tableCols).fill(100 / tableCols).reduce((target, item, index) => {
													target.push(
														<col style={{ width: `${(tableCols === 2) ? (index === 0 ? 20 : 80) : item }%` }}/>
													);

													return target;
												}, [])}
											</colgroup>
											<tbody>

                      {(subTitle || []).length > 0 &&
                        <tr>
                          {(subTitle || []).reduce((target, child) => {
                            target.push(
                              <th dangerouslySetInnerHTML={{__html: breaklines(child)}}/>
                            );

                            return target;
                          }, [])}
                        </tr>
                      }

											{children.reduce((target, child) => {
												let { title, descriptions } = child;

												target.push(
													<tr>
														{title && <th dangerouslySetInnerHTML={{ __html: breaklines(title) }}/>}
														{(descriptions || []).length > 0 && (descriptions || []).reduce((target, description) => {
															target.push(
																<td dangerouslySetInnerHTML={{ __html: breaklines(description) }}/>
															);

															return target;
														}, [])}
													</tr>
												);

												return target;
											}, [])}
											</tbody>
										</table>

                    {notice &&
                      <div className="notice-wrap">
                        <dt className="title">
                          <span>{notice.title}</span>{notice.subTitle}
                        </dt>

                        {React.cloneElement(<Attention/>, {
                          value: {
                            children: (notice.contents || []).reduce((target, item) => {
                              target.push({value: String(item)});

                              return target;
                            }, [])
                          }
                        })}
                      </div>
                    }
									</div>
								)
								:
								(
									type === 'gallery'
										?
										(
											<div className="gallery-wrap">
												{React.cloneElement(<SwipeContents/>, {
													width: 1140,
													options: {
														pagination: { el: null }
													},
													actions: {
														handleChange: this.onChangeContent
													},
													ref: (c) => {this.contents = c;},
													children: galleryList.reduce((target, child) => {
														target.push(
															<div>
																{new Array(16).fill('').map((item, index) => child[ index ]
																	?
																	(
																		<div>
																			<img
																				src={addCdn(`/images/store/intro/${category}/service/${child[ index ][ 'image' ]}@2x.jpg`)}
																				alt=""/>
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
												{(galleryList.length > 6) ?

													React.cloneElement(<SwipeThumbnails/>,{
															width: 1140,
															marginTop : 20,
															options: {
																perViewCnt: 7,
																spaceMargin: 0
															},
															actions: {
																handleChange: this.onChangeThumbnail
															},
															ref: (d) => { this.thumbnailContents = d; },
															children: galleryList.reduce((target, child, index) => {
																target.push(
																	<div className={activeIndex === index ? 'active new_slide_div' : 'new_slide_div'}
																	     data-index={index}
																	     onClick={this.onClickThumbnail}>
																		<div className="img_list_item">
																			{new Array(2).fill('').map((item, index) => child[index]
																				?
																				(
																					<div>
																						<img
																							src={addCdn(`/images/store/intro/${category}/service/${child[index]['image']}@2x.jpg`)}
																							alt="" />
																					</div>
																				)
																				:
																				(
																					<div />
																				)
																			)}
																		</div>
																	</div>
																);

																return target;
															}, [])
														}
													)
													:
													(
														<div className="thumbnail-wrap">
															<ul>
																{galleryList.reduce((target, list, index) =>{
																	target.push(
																		<li className={activeIndex === index ? 'active' : ''}
																		    data-index={index}
																		    onClick={this.onClickThumbnail}>

																			{list.map((item) => (
																				<div>
																					<img
																						src={addCdn(`/images/store/intro/${category}/service/${item[ 'image' ]}@2x.jpg`)}
																						alt=""/>
																				</div>
																			))}
																		</li>
																	);

																	return target;
																}, [])}
															</ul>
														</div>
													)}
											</div>
										)
										:
										(
											templateCode === "PRINT_LOCATION_3X3"
											?
												(
													<div className="print_location_3x3">
															{children.reduce((target, child) => {
																let { image, descriptions }= child;

																target.push(
																	<ul>
																		{image.reduce((target, item) => {

																			target.push(
																				<li>
																					{image && (
																						<div className="top">
																							<img src={addCdn(`/images/store/intro/${category}/service/${item}@2x.jpg`)} alt=""/>
																						</div>
																					)}
																				</li>
																			)

																			return target;
																		},[])}
																	</ul>
																);

																{descriptions && (
																	target.push(
																		<p dangerouslySetInnerHTML={{ __html: breaklines(descriptions) }}/>
																		)
																)};


																return target;
															}, [])}
													</div>

												)
												:
												templateCode === "PRINT_LOCATION_2X4"
													?
													(
														<div className="print_location_2x4">
															{children.reduce((target, child) => {
																let { image, descriptions }= child;

																target.push(
																	<ul>
																		{image.reduce((target, item) => {

																			target.push(
																				<li>
																					{image && (
																						<div className="top">
																							<img src={addCdn(`/images/store/intro/${category}/service/${item}@2x.jpg`)} alt=""/>
																						</div>
																					)}
																				</li>
																			)

																			return target;
																		},[])}
																	</ul>
																);

																{descriptions && (
																	target.push(
																		<p dangerouslySetInnerHTML={{ __html: breaklines(descriptions) }}/>
																	)
																)};


																return target;
															}, [])}
														</div>
													)
												:
                          type === "notice" ?
                            notice &&
                            <div className="notice-wrap">
                              <div className="notice-wrap">
                                <dt className="title">
                                  <span>{notice.title}</span>{notice.subTitle}
                                </dt>

                                {React.cloneElement(<Attention/>, {
                                  value: {
                                    children: (notice.contents || []).reduce((target, item) => {
                                      target.push({value: String(item)});

                                      return target;
                                    }, [])
                                  }
                                })}
                              </div>
                            </div>

                            :
												(
													<ul>
														{children.reduce((target, child) => {
															let { title, descriptions, attentions, image, deco, roundDescription, soldout } = child;

															target.push(
																<li>
																	{image && (
																		<div className="top">
																			<img src={addCdn(`/images/store/intro/${category}/service/${image}@2x.jpg`)} alt=""/>
																		</div>
																	)}

																	{deco && (
																	  <img src={addCdn(`/sprite/svg/${deco}.svg`)}/>
																		// <span className={`icon icon-${deco}`}/>
																	)}

																	{(title || descriptions || attentions || soldout) && (
																		<div className="bottom">
																			{title && (
																				<h2 dangerouslySetInnerHTML={{ __html: breaklines(title) }}/>
																			)}

																			{(descriptions || []).length > 0 && (descriptions || []).reduce((target, description) => {
																				target.push(<p dangerouslySetInnerHTML={{ __html: breaklines(description) }}/>);

																				return target;
																			}, [])}

																			{roundDescription && (
																				<p className="round-description"><span
																					dangerouslySetInnerHTML={{ __html: breaklines(roundDescription) }}/></p>
																			)}

																			{attentions && React.cloneElement(<Attention/>, {
																				value: {
																					children: attentions.reduce((target, item) => {
																						target.push({ value: String(item) });

																						return target;
																					}, [])
																				}
																			})}

                                      {soldout && <p className={"soldout"}>품절</p>}
																		</div>
																	)}
																</li>
															);

															return target;
														}, [])}
													</ul>
												)

										)
								)
						)

							)}
							{(bottomDescription) && (
								<p dangerouslySetInnerHTML={{ __html: breaklines(bottomDescription) }}/>
							)}

          {eventBannerImage && (
            <div className="event-banner">
                <img src={addCdn(`/images/store/intro/${category}/service/${eventBannerImage}@2x.jpg`)} alt="eventBannerImage"/>
            </div>)
          }
				</div>
			</div>
		)
	}
}
