

import React from 'react';
import update from 'react-addons-update';

import { getDatasetByName } from 'utils/dom';
import { addDomain, addCdn, addTemplateCdn } from 'utils/url';

import ThumbnailProductApparel from 'components/common/thumbnail-product-apparel';

import Player from './player';

export default class StoreIntroDIYShowcase extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			optionImageUrl: null,
      optionMarkUrl: null,
			activeIndex: 0,
			direction: null
		};

		this.onClickArrow = this.onClickArrow.bind(this);
		this.onClickThumbnail = this.onClickThumbnail.bind(this);
	}

	onClickArrow(event) {
		let { activeIndex } = this.state;

		let direction = getDatasetByName(event.currentTarget, 'direction');

		this.updateShowcase(activeIndex + (direction === 'prev' ? -1 : 1));
	}

	onClickThumbnail(event) {
		let index = Number(getDatasetByName(event.currentTarget, 'index'));

		this.updateShowcase(index);
	}

	updateShowcase(index) {
		let { activeIndex } = this.state;

		this.setState(update(this.state, {
			activeIndex: { $set: index },
			direction: { $set: index > activeIndex ? 'right' : 'left' }
		}));
	}

	shouldComponentUpdate(nextProps, nextState) {
		let { query: nextParams, showcases: nextShowCases, option: nextOption } = nextProps;
		let { query: currentParams, showcases: currentShowCases, option: currentOption } = this.props;

		return Object.is(JSON.stringify(currentParams), JSON.stringify(nextParams))
			&& !(
				Object.is(JSON.stringify(this.state), JSON.stringify(nextState)) &&
				Object.is(JSON.stringify(currentOption), JSON.stringify(nextOption)) &&
				Object.is(JSON.stringify(nextShowCases), JSON.stringify(currentShowCases))
			);
	}

	componentDidUpdate(prevProps, prevState) {
		let { option: prevOption } = prevProps;
		let { query: { category }, option: currentOption } = this.props;

		!Object.is(JSON.stringify(prevOption), JSON.stringify(currentOption)) && this.setState(update(this.state, {
			optionImageUrl: { $set: `/images/store/intro/${category}/variation/${currentOption[ 'image' ]}@2x.jpg` },
      optionMarkUrl: { $set: currentOption[ 'mark' ]},
			activeIndex: { $set: 0 }
		}));
	}

	render() {
		let { states: { config: { url: { cdn: cdnUrl } } }, showcases, option, query: { category, subCategory }, productCode } = this.props;
		let { optionImageUrl, optionMarkUrl, activeIndex, direction } = this.state;
		let templateInfo = option && option[ 'templateInfo' ];
		let isApparel = category === "apparel";
    let isDecalSticker = !!String(category).match(/color-decal|graphic-decal/i);

		//let isBF = (subCategory !== "ohprintme-opm-100218" && subCategory !== "ohprintme-opm-100218-kids");
    let isBF = false;

    if(productCode && option && isApparel){
      templateInfo['productCode'] = productCode;
    }

    return (
			<div className="store-intro-diy-showcase-wrap">
				<div className="top">
					<ul>
						{[ {} ].concat(showcases || []).reduce((target, item, index) => {
							let { productGalleryType, imageUrl, movieUrl, displayTitle, displayContent } = item;

							target.push(
								<li className={`${activeIndex === index ? `active` : ''}`} style={{display: (templateInfo && index ===0 && !!isApparel) ? 'block' : null}}>
									{
										templateInfo ?
											<div className={direction ? direction : ''}>

														{!(productGalleryType || '').match(/MOVIE/i)
															?
															(
																((index === 0)) ? (
																	<div className="store-search-tile-wrap">
																		<div className="top">
																			{React.cloneElement(<ThumbnailProductApparel/>, templateInfo)}
                                      {isBF && <span className={`icon icon-blackfriday-thumb`}/>}
																		</div>
																	</div>
																	)
																	:
																	(
																		<img src={addDomain(cdnUrl, imageUrl)}/>
																	)
															)
															:
															React.cloneElement(<Player/>, {
																videoId: movieUrl,
																isActive: activeIndex === index
															})
														}

											</div>
											:
											<div className={direction ? direction : ''}>
												{!(productGalleryType || '').match(/MOVIE/i)
													?
                          isDecalSticker
                            ?
                            <div className='overrideMask'>
                              <div style={{background: `url('${addCdn(optionImageUrl)}') center center / cover`}} />
                              <img src={addTemplateCdn(optionMarkUrl)} />
                            </div>
                            :
													(
														<img src={(index === 0)
															? addCdn(optionImageUrl)
															: addDomain(cdnUrl, imageUrl)
														}/>
													)
													:
													React.cloneElement(<Player/>, {
														videoId: movieUrl,
														isActive: activeIndex === index
													})
												}
											</div>
									}


									{(displayTitle || displayContent) && (
										<span>
											{displayTitle && (
												<h5>{displayTitle}</h5>
											)}

											{displayContent && (
												<p dangerouslySetInnerHTML={ { __html: displayContent }}/>
											)}
										</span>
									)}
								</li>
							);

							return target;
						}, [])}
					</ul>

					{(showcases || []).length > 0 && (
						<span>
							<button type="button"
							        className="icon prev"
							        data-direction="prev"
							        disabled={activeIndex === 0}
							        onClick={this.onClickArrow}/>

							<button type="button"
							        className="icon next"
							        data-direction="next"
							        disabled={activeIndex === (showcases || []).length}
							        onClick={this.onClickArrow}/>
						</span>
					)}
				</div>

				{((showcases || []).length > 0) && (
					<div className="bottom">
						<ul className="inner">
							{[ {} ].concat(showcases || []).reduce((target, item, index) => {
								let { productGalleryType, thumbnailImageUrl } = item;



								target.push(
									<li className={activeIndex === index ? 'active' : null}
									    style={(index === 0 && optionImageUrl) ? { background: `url('${addCdn(optionImageUrl)}') center center / cover` } : null }
									    data-index={index}
									    onClick={this.onClickThumbnail}>


											{
												(index === 0  && templateInfo) && (
													<div className="store-search-thumbnail-tile-wrap">
														<div className="top">
															{React.cloneElement(<ThumbnailProductApparel/>, templateInfo)}
														</div>
													</div>
												)

											}


										{index > 0 && (
											<img src={addDomain(cdnUrl, thumbnailImageUrl)}/>
										)}

										{(index > 0 && (productGalleryType || '').match(/MOVIE/i)) && (
											<span className="icon icon-video-play-3434"/>
										)}
									</li>
								);

								return target;
							}, [])}
						</ul>
					</div>
				)}
			</div>
		)
	}
}
