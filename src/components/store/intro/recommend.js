

import React from 'react';
import update from 'react-addons-update';

import { PRODUCT_RECOMMEND } from 'configs/index';
import { goLink, addCdn } from 'utils/url';
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
		let { recommends } = this.state;
		let index = Number(getDatasetByName(event.currentTarget, 'index'));

		goLink((recommends[ index ] || {})[ 'link' ]);
	}

	setRecommend() {
		let { params: { category ,subCategory } } = this.props;

		let categoryName = category.match(/flyer|brochure|menu|post-card|coupon/)
			? 'pr'
			: (category.match(/placard-banner|standard-banner|double-side-banner|rollup-banner|mini-banner/)
					? 'banner'
					: (category.match(/poster|board-sign|acrylic-sign|metal-sign|wooden-frame-sign|table-top-sign|car-magnet|a-frame-sign/)
							? 'signs-posters'
							: category
					)
			);

		let recommends = PRODUCT_RECOMMEND.filter(item => item[ 'category' ] !== categoryName);
		let indexes = new Array(recommends.length).fill(true).map((c, i) => i).sort(() => Math.random() - 0.5).slice(recommends.length >= 3 ? recommends.length - 3 : 0);
		//let isPlainKraftShoppingBag = (subCategory || '').match(/plain-kraft-shopping-bag/i);


		switch(category){
      case "shoppingbag":
      case "accessory":
      case "standard-pen":
      case "basic-pen":
      case "light-pen":
      case "eco-pen":
      case "hard-diary":
      case "soft-diary":
      case "pvc-diary":
      case "straight-glass":
      case "translucent-reusable-cup":
      case "reusable-cup":
      case "eco-tumbler":
      case "new-stack-glass":
        recommends = recommends.reduce((target,item,idx)=>{

          if(category === "shoppingbag") {
            switch (item['category']) {
              case 'envelope':
                target[0] = item;
                break;
              case 'apparel':
                target[1] = item;
                break;
              case 'sticker':
                target[2] = item;
                break;
            }
          }

          else if(subCategory === "plain-kraft-shopping-bag") {
            switch (item['category']) {
              case 'sticker':
                target[0] = item;
                break;
              case 'card':
                target[1] = item;
                break;
              case 'signs-posters':
                target[2] = item;
                break;
            }
          }

          else if(category === "standard-pen" || category === "basic-pen") {
            switch (item['category']) {
              case 'hard-diary':
                target[0] = item;
                break;
              case 'soft-diary':
                target[1] = item;
                break;
              case 'pvc-diary':
                target[2] = item;
                break;
            }
          }

          else if(category === "light-pen") {
            switch (item['category']) {
              case 'memo-pad':
                target[0] = item;
                break;
              case 'pvc-diary':
                target[1] = item;
                break;
              case 'calendar-desk':
                target[2] = item;
                break;
            }
          }

          else if(category === "eco-pen") {
            switch (item['category']) {
              case 'eco-tumbler':
                target[0] = item;
                break;
              case 'bcard-recycle':
                target[1] = item;
                break;
              case 'sticker-craft':
                target[2] = item;
                break;
            }
          }

          else if(category === "hard-diary" || category === "soft-diary" || category === "pvc-diary") {
            switch (item['category']) {
              case 'basic-pen':
                target[0] = item;
                break;
              case 'sticker':
                target[1] = item;
                break;
              case 'slide-zipperbag':
                target[2] = item;
                break;
            }
          }

          else if(category === "straight-glass") {
            switch (item['category']) {
              case 'color-decal':
                target[0] = item;
                break;
              case 'reusable-cup':
                target[1] = item;
                break;
              case 'pr':
                target[2] = item;
                break;
            }
          }
          else if(category === "new-stack-glass") {
            switch (item['category']) {
              case 'graphic-decal':
                target[0] = item;
                break;
              case 'straight-glass':
                target[1] = item;
                break;
              case 'pr':
                target[2] = item;
                break;
            }
          }

          else if(category === "translucent-reusable-cup") {
            switch (item['category']) {
              case 'sticker':
                target[0] = item;
                break;
              case 'md':
                target[1] = item;
                break;
              case 'business-card':
                target[2] = item;
                break;
            }
          }

          else if(category === "reusable-cup") {
            switch (item['category']) {
              case 'sticker':
                target[0] = item;
                break;
              case 'md':
                target[1] = item;
                break;
              case 'business-card':
                target[2] = item;
                break;
            }
          }

          else if(category === "eco-tumbler") {
            switch (item['category']) {
              case 'business-card':
                target[0] = item;
                break;
              case 'hard-diary':
                target[1] = item;
                break;
              case 'memo-pad':
                target[2] = item;
                break;
            }
          }

          return target;
        },new Array(3));
        break;


      default:
        recommends = indexes.reduce((target, index) => {
          target.push(recommends[ index ]);
          return target;
        }, []);
        break;
    }





		this.setState(update(this.state, {
			recommends: { $set: recommends }
		}));
	}

	componentDidUpdate(prevProps) {
		let { params: { category: currentCategory } } = this.props;
		let { params: { category: prevCategory } } = prevProps;

		currentCategory !== prevCategory && this.setRecommend();
	}

	componentWillMount() {
		this.setRecommend();
	}

	render() {
		let { recommends } = this.state;

		return (
			<section className="store-intro-recommend-wrap"
			         ref={(c) => {this.el = c;}}>

				<div className="inner">
					<h3>이런 상품도 있어요.</h3>

					<ul>
						{recommends.reduce((target, item, index) => {
							target.push(
								<li data-index={index} onClick={this.onClickStoreOverview}>
									<span className="top">
										{item[ 'image' ] && (<img src={addCdn(`/images/store/intro/recommend/${item[ 'image' ]}@2x.jpg`)}/>)}
									</span>

									<span className="bottom">
										{item[ 'label' ]}
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
