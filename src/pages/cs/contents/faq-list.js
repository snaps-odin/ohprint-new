

import React from 'react';

import { CSTypes } from 'constants/index';

import FAQItem from './faq-item';

export default class CSDefaultContentFAQList extends React.Component {

	render() {
		let { keyword, items, actions, fields, activeIndex } = this.props;

		return items &&
			(
				<div className="list">

					<div className="items">
						{items.length > 0 && fields.map((field, index) => {
							let item = items[ index ];

							return item && (React.cloneElement(<FAQItem/>, {
									key: `${item[ 'boardId' ]}_${activeIndex}`,
									field,
									value: item,
									keyword,
									actions
								}))
						})}

						{keyword && items.length < 1 && (
							<div className="nothing">
								<span>
									<span><em>'{keyword}'</em>에 대한 검색 결과가 없습니다.</span>
									<span>다른 검색어를 입력해 주시기 바랍니다.</span>
								</span>
							</div>
						)}
					</div>
				</div>
			)
	}
}