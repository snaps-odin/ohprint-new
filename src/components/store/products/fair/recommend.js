

import React from 'react';
import update from 'react-addons-update';

import { PRODUCT_RECOMMEND } from 'configs/index';
import { goLink } from 'utils/url';
import { addDomain } from 'utils/url';
import { getDatasetByName } from 'utils/dom';

export default class StoreIntroRecommend extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			recommends: []
		};

		this.onClickStoreOverview = this.onClickStoreOverview.bind(this);
	}

	onClickStoreOverview(event) {
    goLink("/store/fair/intro/"+getDatasetByName(event.currentTarget, 'code'));
	}

	setRecommend() {
		let { params: { subCategory } } = this.props;
		let creatorList = this.props.creator.pairCreatorList;

		let recommends = creatorList.filter(item => item[ 'creatorCode' ] !== subCategory);

		let indexes = new Array(recommends.length).fill(true).map((c, i) => i).sort(() => Math.random() - 0.5).slice(recommends.length >= 6 ? recommends.length - 6 : 0);

		recommends = indexes.reduce((target, index) => {
			target.push(recommends[ index ]);
			return target;
		}, []);

		this.setState(update(this.state, {
			recommends: { $set: recommends }
		}));
	}

	componentDidUpdate(prevProps) {
		let { params: { subCategory: currentCategory } } = this.props;
		let { params: { subCategory: prevCategory } } = prevProps;

		currentCategory !== prevCategory && this.setRecommend();
	}

	componentWillMount() {
		this.setRecommend();
	}

	render() {
		let { recommends } = this.state;
    let cdn = this.props.states.config.url.cdn;

		return (
			<section className="store-overview-recommend-wrap"
			         ref={(c) => {this.el = c;}}>

				<div className="inner">
					<h3>다른 작가님 상품도 만나보세요.</h3>

					<ul>
						{recommends.reduce((target, item, index) => {
							target.push(
								<li data-index={index} data-code={item.creatorCode} onClick={this.onClickStoreOverview}>
									<span className="top">
										{item[ 'creatorThumPc' ] && (<img src={addDomain(cdn,item[ 'creatorThumPc' ])}/>)}
									</span>

									<span className="bottom">
										{item[ 'creatorName' ]}
									</span>
								</li>
							);

							return target;
						}, [])}
					</ul>
				</div>
			</section>
		)
	}
}
