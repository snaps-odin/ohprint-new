

import React from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';
import { FieldArray } from 'redux-form';

import { CSTypes } from 'constants/index';
import { getDeepValue } from 'utils/json';
import { getDatasetByName } from 'utils/dom';

import List from './faq-list';
import Tab from 'components/common/tab';
import Pagination from 'components/common/pagination';

class CSDefaultContentsFAQ extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			ready: false,
			categoryType: null,
			categoryName: null,
			categoryCode: null,
			categories: [],
			offset: 0,
			limit: 10
		};

		this.field = 'faq';

		this.onChangeCategory = this.onChangeCategory.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.onChangeOffset = this.onChangeOffset.bind(this);
	}

	onSubmit(values) {}

	onChangeCategory(event) {
		let { actions: { handleResetKeyword } } = this.props;
		let { categories } = this.state;

		let index = Number(getDatasetByName(event.currentTarget, 'index'));
		let currentActiveIndex = this.getCategoryIndex();
		let { categoryName, faqCategoryCode } = (categories || [])[ index ];

		index !== currentActiveIndex && Promise.all([
			handleResetKeyword()
		]).then(() => {
			this.setState(update(this.state, {
				categoryType: { $set: CSTypes.FAQ_CATEGORY },
				categoryName: { $set: categoryName },
				categoryCode: { $set: faqCategoryCode }
			}));
		}).then(() => {
			this.requestList(faqCategoryCode, null, 0)
		});
	}

	onChangeOffset(offset) {
		let { keyword, actions: { handleUpdateUIScroll } } = this.props;
		let { categoryCode } = this.state;

		this.requestList(!keyword ? categoryCode : null, keyword || null, offset).then(() => {
			handleUpdateUIScroll(0);
		});
	}

	requestList(categoryCode, query, offset) {
		let { states: { currentForm }, actions: { handleRequestFAQList, handleChangeFormValue } } = this.props;
		let { offset: currentOffset, limit, categoryType } = this.state;

		let field = this.field;
		let items = getDeepValue(currentForm, `values.${field}.items`);
		let params = {
			categoryType,
			categoryCode: query ? null : (categoryCode || null),
			q: query || null,
			offset,
			limit
		};

		return handleRequestFAQList(params).then(result => {
			Promise.all([
				handleChangeFormValue(`${field}.items`, result[ 'list' ]),
			]).then(() => {
				offset === 0 && handleChangeFormValue(`${field}.totalCount`, result[ 'totalCount' ])
			}).then(() => {
				currentOffset !== offset && this.setState(update(this.state, { offset: { $set: offset } }))
			})
		});
	}

	getCategoryIndex() {
		let { categoryName, categories } = this.state;

		return categories.findIndex(category => category[ 'categoryName' ] === categoryName);
	}

	componentDidMount() {
		let { keyword, actions } = this.props;
		let { handleRequestFAQCategories } = actions;

		Promise.all([
			handleRequestFAQCategories()
		]).then(results => {
			this.setState(update(this.state, {
				ready: { $set: true },
				categories: { $set: results[ 0 ] },
				keyword: { $set: keyword || null }
			}));
		}).then(() => {
			keyword && this.requestList(null, keyword, 0);
		});
	}

	componentDidUpdate(prevProps, prevState) {
		let { keyword } = this.props;
		let { keyword: prevKeyword } = prevProps;
		let { categoryCode, categories } = this.state;
		let activeIndex = this.getCategoryIndex();

		keyword
			?
			(
				keyword !== prevKeyword && Promise.all([
					this.setState(update(this.state, {
						categoryType: { $set: CSTypes.DISPLAY_CATEGORY },
						categoryName: { $set: null },
						categoryCode: { $set: null }
					}))
				]).then(() => {
					this.requestList(null, keyword, 0);
				})
			)
			:
			(
				!categoryCode &&
				activeIndex !== 0 &&
				(categories || []).length > 0
			) && Promise.all([
				this.setState(update(this.state, {
					categoryType: { $set: CSTypes.FAQ_CATEGORY },
					categoryName: { $set: categories[ 0 ][ 'categoryName' ] },
					categoryCode: { $set: categories[ 0 ][ 'faqCategoryCode' ] }
				}))
			]).then(() => {
				this.requestList(categories[ 0 ][ 'faqCategoryCode' ], null, 0);
			});
	}

	render() {
		let { states, actions, keyword } = this.props;
		let { ready, categories, categoryName, offset, limit } = this.state;
		let { currentForm } = states;

		let field = this.field;
		let items = getDeepValue(currentForm, `values.${field}.items`);
		let totalCount = getDeepValue(currentForm, `values.${field}.totalCount`);
		let activeIndex = this.getCategoryIndex();

		return ready && (
				<div className="inner faq" ref={(c) => {this.scope = c;}}>
					{categories.length > 0 && React.cloneElement(<Tab/>, {
						activeIndex,
						tabWidth: `${1140 / categories.length}px`,
						tabHeight: '50px',
						labels: categories.reduce((target, category, index) => {
							target.push(
								<span>{category[ 'categoryName' ]}</span>
							);

							return target;
						}, []),
						actions: {
							handleChange: this.onChangeCategory
						}
					})}

					{React.cloneElement(<FieldArray/>, {
						states,
						items,
						keyword,
						categoryName,
						totalCount,
						offset,
						limit,
						activeIndex,
						actions: {
							...actions,
							handleChangeOffset: this.onChangeOffset
						},
						name: 'faq.items',
						component: List
					})}

					{totalCount > 0 && React.cloneElement(<Pagination/>, {
						offset,
						limit,
						totalCount,
						handleChangeOffset: this.onChangeOffset
					})}
				</div>
			)
	}
}

const mapStateToProps = (state, ownerProps) => {
	return {
		states: {
			...ownerProps.states
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(CSDefaultContentsFAQ);