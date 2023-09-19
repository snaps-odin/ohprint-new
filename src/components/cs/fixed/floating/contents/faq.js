import React from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';
import { change, FieldArray, reduxForm } from 'redux-form';
import {withRouter} from "next/router";

import { CSTypes } from 'constants/index';
import { getHeight } from 'utils/dom';
import { getDeepValue } from 'utils/json';

import Search from './faq-search';
import List from './faq-list';

class CSFloatingContentsFAQ extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			ready: false,
			categoryType: null,
			categoryName: null,
			categoryCode: {
				pathname: null,
				search: null
			},
			categories: [],
			limit: 10
		};

		this.onResetKeyword = this.onResetKeyword.bind(this);
		this.onChangeKeyword = this.onChangeKeyword.bind(this);
		this.onChangeCategory = this.onChangeCategory.bind(this);
		this.onChangeBack = this.onChangeBack.bind(this);
		this.onRequestListMore = this.onRequestListMore.bind(this);
		this.onResizeHeight = this.onResizeHeight.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onResetKeyword() {
		let { categoryCode } = this.state;

		!categoryCode[ 'search' ] && Promise.all([
			this.resetCategoryAll()
		]).then(() => {
			this.setTitleBack(false);
		});
	}

	onChangeKeyword() {
		let { states: { currentForm } } = this.props;

		let keyword = getDeepValue(currentForm, 'values.keyword');

		Promise.all([
			this.setState(update(this.state, {
				categoryType: { $set: CSTypes.DISPLAY_CATEGORY },
				categoryName: { $set: null },
				categoryCode: { search: { $set: null } }
			}))
		]).then(() => {
			this.setTitleBack(!!keyword);
		}).then(() => {
			this.requestList(null, keyword, true);
		});
	}

	onChangeCategory(categoryName, categoryCode) {

		Promise.all([
			this.setState(update(this.state, {
				categoryType: { $set: CSTypes.FAQ_CATEGORY },
				categoryName: { $set: categoryName },
				categoryCode: { search: { $set: categoryCode } }
			}))
		]).then(() => {
			this.setTitleBack(true);
		}).then(() => {
			this.requestList(categoryCode, null, true)
		});
	}

	onChangeBack() {
		Promise.all([
			this.resetCategoryAll()
		]).then(() => {
			this.setTitleBack(false);
		})
	}

	onRequestListMore() {
		let { states: { currentForm } } = this.props;
		let { categoryCode } = this.state;

		let keyword = getDeepValue(currentForm, 'values.keyword');

		return this.requestList(!keyword ? categoryCode[ 'search' ] || categoryCode[ 'pathname' ] : null, keyword || null, false);
	}

	onResizeHeight() {
		this.resizeHeight();
	}

	onSubmit(values) {}

	setTitleBack(bool) {
		let { states: { cs: { floating: { title: { back } } } }, actions: { handleChangeCSTitleBack } } = this.props;

		if (bool) {
			!back && handleChangeCSTitleBack(this.onChangeBack);
		} else {
			back && handleChangeCSTitleBack(null);
		}
	}

	resetCategoryAll() {
		return Promise.all([
			this.setState(update(this.state, {
				categoryName: { $set: null },
				categoryCode: { search: { $set: null }, pathname: { $set: null } }
			}))
		]).then(() => {
			return true;
		})
	}

	requestList(categoryCode, query, isReset) {
		let { states: { currentForm }, actions: { handleRequestFAQList, handleChangeFormValue } } = this.props;
		let { categoryType, limit } = this.state;

		let items = getDeepValue(currentForm, 'values.items');
		let params = {
			categoryType,
			categoryCode: query ? null : (categoryCode || null),
			q: query || null,
			offset: isReset ? 0 : items.length,
			limit
		};

		return handleRequestFAQList(params).then(result => {
			return Promise.all([
				handleChangeFormValue('items', isReset ? result[ 'list' ] : update(items, { $push: result[ 'list' ] })),
			]).then(() => {
				isReset && handleChangeFormValue('totalCount', result[ 'totalCount' ])
			}).then(() => {
				result[ 'categoryName' ] && this.setState(update(this.state, {
					categoryName: { $set: result[ 'categoryName' ] }
				}))
			});
		}).then(() => {
			this.resizeHeight();
		});
	}

	resizeHeight() {
		let { actions: { handleResetCSContentHeight } } = this.props;

		handleResetCSContentHeight(getHeight(this.scope));
	}

	componentDidMount() {
		let { states: { currentForm }, actions } = this.props;
		let { categoryCode } = this.state;
		let { handleRequestFAQCategories } = actions;

		let keyword = getDeepValue(currentForm, 'values.keyword');

		Promise.all([
			handleRequestFAQCategories()
		]).then(result => {
			(keyword || categoryCode[ 'search' ]) && this.setTitleBack(true);

			return result;
		}).then(results => {
			this.setState(update(this.state, {
				ready: { $set: true },
				categories: { $set: results[ 0 ] }
			}));
		}).then(() => {
			this.resizeHeight();
		});
	}

	componentDidUpdate(prevProps, prevState) {
		let { states: { currentForm }, actions, router: { asPath } } = this.props;
		const pathname = asPath.split('?')[0]
		let { categoryCode } = this.state;
		let { handleGetFAQCategoryInfoByPathname } = actions;

		let { code } = handleGetFAQCategoryInfoByPathname(pathname);
		let keyword = getDeepValue(currentForm, 'values.keyword');

		(
			!keyword &&
			!categoryCode[ 'search' ] &&
			categoryCode[ 'pathname' ] !== code
		) && Promise.all([
			this.setState(update(this.state, {
				categoryType: {
					$set: CSTypes[ (code || '').match(/FAQ_EDITOR/i) ? 'FAQ_CATEGORY' : 'DISPLAY_CATEGORY' ]
				},
				categoryCode: { search: { $set: null }, pathname: { $set: code } }
			}))
		]).then(() => {
			this.requestList(code, null, true)
		});
	}

	componentWillUnmount() {
		this.setState(update(this.state, {
			categoryCode: { pathname: { $set: null } }
		}));
	}

	render() {
		let { states, actions, handleSubmit } = this.props;
		let { ready, categoryCode, categories, categoryName } = this.state;
		let { currentForm } = states;

		let items = getDeepValue(currentForm, 'values.items');
		let totalCount = getDeepValue(currentForm, 'values.totalCount');
		let keyword = getDeepValue(currentForm, 'values.keyword');

		return ready && (
				<div className="inner faq" ref={(c) => {this.scope = c;}}>
					<form onSubmit={handleSubmit(this.onSubmit)}>
						{React.cloneElement(<Search/>, {
							states,
							keyword,
							categoryCode,
							categories,
							actions: {
								...actions,
								handleResetKeyword: this.onResetKeyword,
								handleChangeKeyword: this.onChangeKeyword,
								handleChangeCategory: this.onChangeCategory,
								handleChangeBack: this.onChangeBack,
								handleResizeHeight: this.onResizeHeight
							}
						})}

						{React.cloneElement(<FieldArray/>, {
							states,
							items,
							keyword,
							categoryName,
							totalCount,
							actions: {
								...actions,
								handleResizeHeight: this.onResizeHeight,
								handleRequestListMore: this.onRequestListMore
							},
							name: 'items',
							component: List
						})}
					</form>
				</div>
			)
	}
}

const formName = 'cs-fixed-faq';

const mapStateToProps = (state, ownerProps) => {
	return {
		states: {
			...ownerProps.states,

			currentForm: state.form[ formName ]
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName,
	enableReinitialize: true
})(withRouter(CSFloatingContentsFAQ)));