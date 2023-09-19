import React from 'react';

import ReviewItem from './item';

export default class ReviewBoard extends React.Component {
	render() {
		let { actions, states, items, offset, totalCount, params } = this.props;

		return (
			<ul className="review-board-wrap">
				{items && items.length > 0
					? items.reduce((target, item, index) => {
						target.push(React.cloneElement(<ReviewItem/>, {
							actions,
							key: item[ 'idx' ],
							states,
							item,
							index: (totalCount - offset) - index,
							params
						}));

						return target;
					}, [])
					: (
						<li className="nothing">
							첫번째 리뷰어가 되어주세요!<br/>리뷰작성 시, 할인쿠폰을 드려요.
						</li>
					)
				}
			</ul>
		)
	}
}
