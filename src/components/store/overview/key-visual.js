

import React from 'react';
import { addCdn } from 'utils/url';

export default class StoreOverviewKeyVisual extends React.Component {

	shouldComponentUpdate(nextProps, nextState) {
		let { category: currentCategory, selectView:propSelectView } = this.props;
		let { category: nextCategory, selectView:nextSelectView } = nextProps;

		return !(Object.is(currentCategory, nextCategory) && Object.is(propSelectView, nextSelectView));
	}

	render() {
		let { category, product, selectView, type } = this.props;
		let backgroundImage = `/images/store/overview/${category}/${product[ 'image' ]}@2x.jpg`;
		let backgroundStyle = selectView ? { background: `url('${addCdn(selectView)}') 50% 0  / cover no-repeat` } : { background: `url(${addCdn(backgroundImage)}) 50% 0  / cover no-repeat` };
		let creatorContents = (type && type === "creator") && this.props.creatorContents;

		return (
			<div className={`store-overview-key-visual-wrap ${category}`}
			     style={backgroundStyle}>
        {
          type === "creator" &&
          (
            <div className="creatorStory">
              <div>
                <dl dangerouslySetInnerHTML={{ __html: creatorContents }}/>
              </div>
            </div>
          )
        }

        {
          type === "overview" &&
          (
            <div className="overviewStory">
              <div><img src={addCdn(`/images/store/overview/${category}/oif-landing-title@2x.png`)}/>
              </div>
            </div>
          )
        }

      </div>
		)
	}
}
