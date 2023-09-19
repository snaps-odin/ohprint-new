

import React from 'react';
import { goLink } from 'utils/url';
import { getDatasetByName } from 'utils/dom';
import { addDomain } from 'utils/url';

export default class creators extends React.Component {

  constructor(...args) {
    super(...args);

    this.onClickGoLink = this.onClickGoLink.bind(this);
  }

  onClickGoLink(event) {
    goLink("/store/fair/intro/"+getDatasetByName(event.currentTarget, 'code'));

    //:category/intro/:subCategory
  }

	render() {
		let { title, type, updateSections, states } = this.props;

		let fairCreatorList = this.props.creator.pairCreatorList;
		let cdn = this.props.states.config.url.cdn;


		return (
        <section className={`store-fair-overview-product-wrap`} ref={(c) => {this.el = c;}}>

          <h3>크리에이터를 선택해 보세요.</h3>
          <ul>
            {fairCreatorList.reduce((target,item,idx) => {
              target.push(
                <li
                  className={`${type || null} overviewFair`}
                  onClick={this.onClickGoLink}
                  data-code={item.creatorCode}
                >
                  <span className={`top ${type || ''}`}>
                    <span>
                      {/*{icon && (
                        <span className={`icon icon-${icon}`}/>
                      )}*/}

                      <img src={addDomain(cdn,item.creatorThumPc || "/images/store/overview/pr/ad-brochure-320320@2x.jpg")} alt=""/>
                    </span>
                  </span>

                  <span className={`bottom ${type || ''}`}>
									<h4>{item.creatorName}</h4>
									<span dangerouslySetInnerHTML={{ __html: item.creatorDesc }}/>

                    <button type="button">크리에이터 상품 자세히 보기</button>
								</span>

                </li>
              );
              return target;
            },[])}
          </ul>
        </section>
		)
	}
}
