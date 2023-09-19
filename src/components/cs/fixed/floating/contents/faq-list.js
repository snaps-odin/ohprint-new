

import React from 'react';

import FAQItem from 'components/cs/fixed/common/faq-item';

export default class CSFloatingContentFAQList extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickListMore = this.onClickListMore.bind(this);
	}

	onClickListMore(event) {
		let { actions: { handleRequestListMore, handleFocusCSBottomScroll } } = this.props;

		Promise.all([
			handleRequestListMore()
		]).then(() => {
			handleFocusCSBottomScroll();
		});
	}

	render() {
		let { keyword, categoryName, items, totalCount, actions, fields } = this.props;
		let { handleGetMaxHeight } = actions;

		let spread = (items || []).length < 2;
		let maxHeight = handleGetMaxHeight() - (50 + 40 + 100);

		let nothingStyle = maxHeight < 305 ? { height: `${maxHeight}px` } : null;

		return items &&
			(
				<div className="list">

					{categoryName && (
						<div className="sub-title">
							<span><em>{categoryName}</em> 관련 FAQ 입니다.</span>
						</div>
					)}

					<div className="items">
						{items.length > 0 && fields.map((field, index) => {
							let item = items[ index ];

							return (React.cloneElement(<FAQItem/>, {
								key: item[ 'boardId' ],
								actions,
								field,
								value: item,
								spread,
								keyword
							}))
						})}

						{keyword && items.length < 1 && (
							<div className="nothing">
								<span style={nothingStyle}>
									<span><em>'{keyword}'</em>에 대한 검색 결과가 없습니다.</span>
									<span>다른 검색어를 입력해 주시기 바랍니다.</span>
								</span>
							</div>
						)}
					</div>

					<div className="more">
						{totalCount > (items || []).length && (
							<button type="button" onClick={this.onClickListMore}>더보기</button>
						)}
					</div>
				</div>
			)
	}
}