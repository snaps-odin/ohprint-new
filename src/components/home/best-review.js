

import React from 'react';
import update from 'react-addons-update';

import { getDatasetByName, getPosition } from 'utils/dom';
import { addDomain, goLink, goStore } from 'utils/url';
import { toDate } from 'utils/format';

import SwipeContents from 'components/common/swipe-contents';
import ImageLoader from 'components/common/image-loader';

export default class HomeBestReview extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			reviews: [],
			isPause: false
		};

		this.onClickGoStoreReview = this.onClickGoStoreReview.bind(this);
		this.onMouseEnter = this.onMouseEnter.bind(this);
	}

	onClickGoStoreReview(event) {
		let { actions: { handleGetProductByProductGroupCode } } = this.props;

		let productGroupCode = getDatasetByName(event.currentTarget, 'product-code').substr(0, 3);
		let { category, subCategory } = handleGetProductByProductGroupCode(productGroupCode) || {};

		(category && subCategory) && goStore('intro', category, subCategory, { option: 'review' });
	}

	onMouseEnter() {
		let { isPause } = this.state;

		!isPause && this.setState(update(this.state, { isPause: { $set: true } }));
	}

	shouldComponentUpdate(nextProps, nextState) {
		return !(
			Object.is(JSON.stringify(nextState), JSON.stringify(this.state))
		)
	}

	componentDidMount() {
		let { actions: { handleRequestProductGroup, handleRequestHomeBestReview } } = this.props;

		Promise.all([
			handleRequestProductGroup(),
			handleRequestHomeBestReview()
		]).then(result => {
			let productGroup = result[ 0 ];
			let items = result[ 1 ];

			this.setState(update(this.state, {
				reviews: {
					$set: new Array(Math.ceil(items.length / 2)).fill([]).map((item, index) => {
						return items.reduce((target, list, listIndex) => {
							let { category } = productGroup.find(item => item[ 'value' ] === list[ 'productCode' ].substr(0, 3));

							list[ 'imageUrl' ] = category ? `/images/home/reviews-${category}-250250@2x.jpg` : '';

							index === Math.floor(listIndex / 2) && target.push(list);

							return target;
						}, []);
					})
				}
			}));
		})
	}

	render() {
		let { states: { config: { url: { cdn: cdnUrl } } } } = this.props;
		let { reviews, isPause } = this.state;

		return (reviews || []).length > 0 &&
			(
				<section className="home-best-review-wrap">
					<div className="top">
						<h3>Best Reviews</h3>
					</div>

					<div className="bottom"
					     onMouseEnter={this.onMouseEnter}>

						{ React.cloneElement(<SwipeContents/>, {
							width: 1150,
							isPause,
							options: {
								navigation: {
									nextEl: null,
									prevEl: null
								},
								autoplay: {
									delay: 10000,
									disableOnInteraction: false
								}
							},
							children: reviews.reduce((target, children) => {
								target.push(
									<div>
										{children.reduce((target, child, index) => {
											target.push(
												<div className={`box ${index % 2 === 0 ? 'left' : 'right'}`}
												     data-product-code={child[ 'productCode' ]}
												     onClick={this.onClickGoStoreReview}>

													<div className="left">
														{React.cloneElement(<ImageLoader/>, {
															imageUrl: child[ 'filePath' ] ? addDomain(cdnUrl, child[ 'filePath' ]) : child[ 'imageUrl' ],
															isSizeFixed: true
														})}
													</div>

													<div className="right">
														<h4>{child[ 'title' ]}</h4>
														<span>{`${child[ 'productName' ]} [${child[ 'projectName' ]}]`}</span>
														<span className="date">
															{toDate(child[ 'registerDate' ], 'YYYY.MM.DD')}
															<em>|</em>
															{child[ 'userName' ]}
														</span>
														<p className="description" dangerouslySetInnerHTML={{ __html: child[ 'content' ] }}/>
													</div>

												</div>
											);

											return target;
										}, [])}
									</div>
								);

								return target;
							}, [])
						})}
					</div>

				</section>
			)
	}
}