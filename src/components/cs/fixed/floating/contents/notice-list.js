

import React from 'react';

import NoticeItem from 'components/cs/fixed/common/notice-item';

export default class CSFloatingContentNoticeList extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickListMore = this.onClickListMore.bind(this);
	}

	onClickListMore(event) {
		let { actions: { handleRequestList, handleFocusCSBottomScroll } } = this.props;

		Promise.all([
			handleRequestList()
		]).then(() => {
			handleFocusCSBottomScroll();
		});
	}

	render() {
		let { states, items, totalCount, actions } = this.props;
		let { handleGetMaxHeight } = actions;

		let maxHeight = handleGetMaxHeight();

		let nothingStyle = maxHeight < 305 ? { height: `${maxHeight}px` } : null;

		return (items || []).length > 0 ?
			(
				<div className="list">

					<div className="items">
						{items.length > 0 && items.map((field, index) => {
							let item = items[ index ];

							return (React.cloneElement(<NoticeItem/>, {
								id: `notice-${index}`,
								value: item,
								states,
								actions
							}))
						})}

					</div>

					<div className="more">
						{totalCount > items.length && (
							<button type="button" onClick={this.onClickListMore}>더보기</button>
						)}
					</div>
				</div>
			) : (
				<div className="lock" style={nothingStyle}>
					<span>
						알림 내역이 없습니다.
					</span>
				</div>
			)
	}
}