

import React from 'react';

import { getDatasetByName } from 'utils/dom';
import { goLink, addCdn } from 'utils/url';
import {prdNameList} from "utils/url";
import {gtmV4_select_item} from "configs/google-analytics/ga-v4";

export default class StoreOverviewProduct extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickGoLink = this.onClickGoLink.bind(this);
	}

	onClickGoLink(event) {
    const { category } = this.props;

    let id = getDatasetByName(event.currentTarget, 'path');
    id = id.split("/");
    id = id[id.length -1];

    let bigIn = {
      id,
      name : getDatasetByName(event.currentTarget, 'title'),
      price: 0,
      category: prdNameList[category]
    }

    gtmV4_select_item({
      name : getDatasetByName(event.currentTarget, 'title'),
      img: getDatasetByName(event.currentTarget, 'img'),
      path: getDatasetByName(event.currentTarget, 'path')
    });

		goLink(getDatasetByName(event.currentTarget, 'path'),{
      location : 'OVERVIEW_BANNER',
      type : '',
      etAction :  getDatasetByName(event.currentTarget, 'title'),
      dimension4 : (this.props.category),
      ...bigIn
    });
	}

	shouldComponentUpdate(nextProps, nextState) {
		let { category: nextCategory, value: nextValue } = nextProps;
		let { category: currentCategory, value: currentValue } = this.props;

		return !(
			Object.is(nextCategory, currentCategory) &&
			Object.is(JSON.stringify(nextValue), JSON.stringify(currentValue))
		)
	}

	render() {
		let { category, value } = this.props;
		let { title, description, type, children, centerItem } = value;

		return (
			<section className={`store-overview-product-wrap ${type || ''}`}
			         ref={(c) => {this.el = c;}}>
				<h3>{description || title}</h3>
				<ul className={`${!!centerItem ? 'centerItemTwo' : ''}`}>
					{(children || []).reduce((target, child, index) => {
						let { title, badge, description, image, icon, attention, link } = child;

						target.push(
							<li key={`${category}-${index}-${image}`}
							    className={type || null}
							    data-path={link}
                  data-title={title}
                  data-img={`/images/store/overview/${category}/${image}@2x.jpg`}
							    onClick={this.onClickGoLink}>

								<span className={`top ${type || ''}`}>
									<span>
										{icon && (
											<span className={`icon icon-${icon}`}/>
										)}

										<img src={addCdn(`/images/store/overview/${category}/${image}@2x.jpg`)}/>
									</span>
								</span>

								<span className={`bottom ${type || ''}`}>
									{/*<h4>{title} {badge && (<span className={`icon icon-${badge}-3421`}/>)}</h4>*/}
                  <h4>{title} {badge && (<div className="badge"> {badge.map(e => <span>{e}</span>)} </div>)}</h4>
									<span dangerouslySetInnerHTML={{ __html: description }}/>

									{(attention || []).length > 0 && (
										<dl>
											{attention.reduce((target, item) => {
												target.push(
													<dd>{item}</dd>
												);

												return target;
											}, [])}
										</dl>
									)}

									<button type="button">지금 바로 시작하기</button>
								</span>
							</li>
						);

						return target;
					}, [])}
				</ul>
			</section>
		)
	}
}
