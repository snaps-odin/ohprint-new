

import React from 'react';
import update from 'react-addons-update';

import { breaklines } from 'utils/string';
import { addCdn } from 'utils/url';
import { getDatasetByName } from 'utils/dom';
import Attention from 'components/common/attention';
import SwipeContents from 'components/common/swipe-contents';
import SwipeThumbnails from 'components/common/swipe-thumbnails';


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
		let { showcase, category } = this.props;
		let { activeIndex } = this.state;
		let { deco, brand, title, subTitle, descriptions, className, children, type, menuIndex, bottomDescription, leftImage, templateCode, caption } = showcase;
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
			<div className={`store-overview-services-showcase-wrap ${className || ''}`}
			     ref={c => c && menuIndex > -1 && (this.el = c)}>
				<div className="inner">

					{brand && (
						<div className="brand-logo">
							<img src={addCdn(`/images/store/intro/${category}/service/${brand}@2x.png`)} alt=""/>
						</div>
					)}

					{deco && (
						<span className={`icon icon-${deco}`}/>
					)}

					{title && (<h1 dangerouslySetInnerHTML={{ __html: breaklines(title) }}/>)}

					{(descriptions || []) && (descriptions || []).reduce((target, description) => {
						target.push(<p dangerouslySetInnerHTML={{ __html: breaklines(description) }}/>);

						return target;
					}, [])}



					{(children || []).length > 0 && (
            type === 'delivery' ?
              (
                <table className="table-delivery">
                  <tbody>
                    <tr>
                      <td>배송정보</td>
                      <td>
                        1) 기본 배송일 : 배송기간은 제작완료 시점부터 1일~3일 정도 걸립니다.(공휴일 제외)<br/>
                        2) 구매금액 5만원 미만인 경우 배송비 3,000원이 추가됩니다.
                      </td>
                    </tr>

                    <tr>
                      <td>교환/환불안내</td>
                      <td>
                        1) 교환/반품 신청은 배송완료 후 7일 이내 가능합니다.<br/>
                        2) 단순 변심 반품의 경우 왕복배송비를 차감한 금액이 환불되며, 제품 및 포장 상태가 재판매 가능하여야 합니다. (왕복배송비 : 5,000원)<br/>
                        3) 상품이 불량인 경우에는 배송비를 포함한 전액이 환불됩니다.<br/>
                        4) 출고 이후 환불 요청 시 상품 회수 후 환불 처리 됩니다.<br/>
                        5) 고객님의 책임 있는 사유로 상품등이 멸실 또는 훼손되었거나 상품의 가치가 현저히 감소한 경우 교환 및 환불이 불가합니다.<br/>
                        6) 어패럴(에코백 제외) 제품은 주문제작 상품으로 변심에 의한 반품 및 환불이 불가하므로 사이즈를 신중하게 선택해주세요.<br/>
                        7) 배송 중 파손으로 판단되어 교환을 요청하는 경우, 박스채로 반송해주시길 부탁드립니다.
                      </td>
                    </tr>

                    <tr>
                      <td>기타 기준 사항</td>
                      <td>
                        1) 구매자가 미성년자인 경우에는 상품 구입 시 법정대리인이 동의하지 아니하면 미성년자 본인 또는 법정대리인이 구매 취소 할 수 있습니다.<br/>
                        2) 오일페 상품의 경우 '쿠폰' 사용이 불가합니다.
                      </td>
                    </tr>

                  </tbody>
                </table>
              )
              :
              (
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
{/*												<div className="thumbnail-wrap">

													{React.cloneElement(<ThumbnailContents/>, {
														width: 1140,
														options: {
															pagination: { el: null }
														},
														actions: {
															handleChange: this.onChangeContent
														},
														children: galleryList.reduce((target, child, index) => {
															target.push(
																<div data-index={index} onClick={this.onClickThumbnail}>
																	{new Array(16).fill('').map((item, index) => child[ index ]
																		?
																		(
																			<div>
																				<img
																					src={`/images/store/intro/${category}/service/${child[ index ][ 'image' ]}@2x.jpg`}
																					alt="" />
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

												</div>*/}



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
												(
													<ul>
														{children.reduce((target, child) => {
															let { title, descriptions, attentions, image, deco, roundDescription } = child;

															target.push(
																<li>
																	{image && (
																		<div className="top">
																			<img src={addCdn(`/images/store/intro/${category}/service/${image}@2x.jpg`)} alt=""/>
																		</div>
																	)}

																	{deco && (
																		<span className={`icon icon-${deco}`}/>
																	)}

																	{(title || descriptions || attentions) && (
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
																		</div>
																	)}
																</li>
															);

															return target;
														}, [])}

                            {caption && (<div className="caption" dangerouslySetInnerHTML={{ __html: breaklines(caption) }}/>)}
													</ul>
												)
                    )

										)
								)
						)

							)}
							{(bottomDescription) && (
								<p dangerouslySetInnerHTML={{ __html: breaklines(bottomDescription) }}/>
							)}
				</div>
			</div>
		)
	}
}
