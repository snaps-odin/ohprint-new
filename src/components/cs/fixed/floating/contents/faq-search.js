

import React from 'react';
import { Field } from 'redux-form';

import { getDatasetByName } from 'utils/dom';
import { getDeepValue } from 'utils/json';

import { InputField } from 'components/common/fields';
import SwipeText from 'components/common/swipe-text';

export default class CSFloatingContentFAQSearch extends React.Component {
	constructor(...args) {
		super(...args);

		this.interval = {
			id: null,
			sec: 500
		};

		this.onChangeKeyword = this.onChangeKeyword.bind(this);
		this.onBlurKeyword = this.onBlurKeyword.bind(this);
		this.onClickResetKeyword = this.onClickResetKeyword.bind(this);
		this.onClickCategory = this.onClickCategory.bind(this);
	}

	onChangeKeyword(event) {
		let { actions: { handleChangeKeyword, handleResetKeyword, handleChangeFormValue } } = this.props;

		let { value } = event.currentTarget;
		let { id, sec } = this.interval;

		id && window.clearTimeout(id);

		if (!!value) {
			this.interval[ 'id' ] = window.setTimeout(() => handleChangeKeyword(), sec);
		} else {
			Promise.all([
				handleChangeFormValue('keyword', null)
			]).then(() => {
				handleResetKeyword();
			});
		}
	}

	onBlurKeyword(event) {
		let { actions: { handleResetKeyword, handleChangeFormValue } } = this.props;

		let { value } = event.currentTarget;

		!value && Promise.all([
			handleChangeFormValue('keyword', null)
		]).then(() => {
			handleResetKeyword();
		});
	}

	onClickResetKeyword(event) {
		let { actions: { handleResetKeyword, handleResizeHeight, handleChangeFormValue } } = this.props;

		let { id } = this.interval;

		Promise.all([
			id && window.clearTimeout(id),
			handleChangeFormValue('keyword', null)
		]).then(() => {
			handleResetKeyword()
		}).then(() => {
			handleResizeHeight();
		});
	}

	onClickCategory(categoryName, categoryCode) {
		let { actions: { handleChangeCategory, handleResizeHeight, handleChangeFormValue } } = this.props;

		let { id } = this.interval;

		Promise.all([
			id && window.clearTimeout(id),
			handleChangeFormValue('keyword', null)
		]).then(() => {
			handleChangeCategory(categoryName, categoryCode);
		}).then(() => {
			handleResizeHeight();
		});
	}

	render() {
		let { keyword, categoryCode, categories } = this.props;

		return (
			<div className="search">
				<div className="inner">
					<div className="top">
						<Field name="keyword"
						       type="text"
						       placeholder="궁금한 사항을 입력해 주세요."
						       className="simple"
						       maxLength={60}
						       onChange={this.onChangeKeyword}
						       onBlur={this.onBlurKeyword}
						       component={InputField}/>

						<button className={`btn-submit icon icon-${!!keyword ? 'close-1414' : 'search-1616'}`}
						        type="button"
						        onClick={!!keyword ? this.onClickResetKeyword : null}/>
					</div>

					<div className="bottom">
						{categories.length > 0 && React.cloneElement(<SwipeText/>, {
							value: categoryCode[ 'search' ],
							width: 358,
							isLine: true,
							items: categories.reduce((target, category, index) => {
								target.push({
									label: category[ 'categoryName' ],
									value: category[ 'faqCategoryCode' ]
								});

								return target;
							}, []),
							actions: {
								handleSelect: this.onClickCategory
							}
						})}
					</div>
				</div>
			</div>
		)
	}
}