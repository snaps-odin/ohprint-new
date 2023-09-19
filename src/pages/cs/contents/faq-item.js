

import React from 'react';
import update from 'react-addons-update';
import { Field } from 'redux-form';

import { CSTypes } from 'constants/index';
import { RadioField } from 'components/common/fields';
import { clearStyle } from 'utils/string';
import { getHeight } from 'utils/dom';

export default class CSDefaultFAQItem extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			opened: false,
			evaluation: {
				enabled: false,
				used: false,
				value: null
			}
		};

		this.onClickAppendPop = this.onClickAppendPop.bind(this);
		this.onClickToggle = this.onClickToggle.bind(this);
		this.onChangeCheckBox = this.onChangeCheckBox.bind(this);
		this.onClickEvaluation = this.onClickEvaluation.bind(this);
	}

	onClickAppendPop(event) {
		let { actions: { handleUpdateCSPopItem }, value } = this.props;

		handleUpdateCSPopItem({ type: CSTypes.FAQ, value }, CSTypes.APPEND);
	}

	onClickToggle(event) {
		let { value: { boardId }, actions: { handleUpdateFAQViewCountByBoardId } } = this.props;
		let { opened } = this.state;

		Promise.all([
			!opened && handleUpdateFAQViewCountByBoardId(boardId)
		]).then(() => {
			this.setState(update(this.state, { opened: { $set: !opened } }));
		});
	}

	onChangeCheckBox(event, value) {
		let { evaluation: { enabled } } = this.state;

		this.setState(update(this.state, {
			evaluation: {
				enabled: { $set: true },
				value: { $set: value }
			}
		}));
	}

	onClickEvaluation(event) {
		let { actions: { handleUpdateFAQEvaluationByBoardId, handleOpenAlertLayer, handleChangeTabFocus }, value: { boardId } } = this.props;
		let { evaluation: { value } } = this.state;

		handleUpdateFAQEvaluationByBoardId(boardId, value === 'Y')
			.then(() => {
				if (value === 'Y') {
					handleOpenAlertLayer({ description: '평가해 주셔서 감사합니다' });
				} else {
					handleOpenAlertLayer({
						description: '<span>해결에 도움을 못드려 죄송합니다.<br/>추가 문의를 하시겠습니까?</span>',
						confirm: true,
						callback: (confirmed) => {
							confirmed && handleChangeTabFocus(CSTypes.QNA);
						}
					})
				}
			})
			.catch(error => {
				handleOpenAlertLayer({ description: error });
			});
	}

	getTitle() {
		let { value: { title }, keyword } = this.props;

		let html = keyword ? title.split(keyword).join(`<em>${keyword}</em>`) : title;

		return { __html: html }
	}

	getContents() {
		let { value: { contents } } = this.props;

		let html = clearStyle(this.props.value[ 'contents' ]);

		return { __html: html }
	}

	render() {
		let { field, value } = this.props;
		let { boardId } = value;
		let { opened, evaluation: { enabled } } = this.state;

		let height = opened ? getHeight(this.content) + getHeight(this.btn) : 0;
		let style = { height: `${height}px` };

		return (
			<div className={`item ${opened ? 'active' : ''}`}
			     data-board-id={boardId}
			     ref={(c) => {this.scope = c;}}>

				<div className="top">
					<span className="icon first icon-faq-q" onClick={this.onClickToggle}/>
					<span className="title" onClick={this.onClickToggle}>
						<div dangerouslySetInnerHTML={this.getTitle()}/>
					</span>
					<span className={`icon third icon-open-1212${opened ? '-on' : ''}`}
					      onClick={this.onClickToggle}/>
				</div>
				<div className="bottom" style={style}>
					<div className="inner">
						<div className="top" ref={(c) => {this.content = c;}}>
							<span className="content">
								<span className="icon icon-faq-a"/>

								<span className="desc">
									<div className="contents" dangerouslySetInnerHTML={this.getContents()}/>
								</span>
							</span>

							<span className="btn" onClick={this.onClickAppendPop}>
								<span className="icon icon-layer-g-1414"/>
								<span className="txt">새창으로 보기</span>
							</span>

							<span className="fields">
								<span>궁금하신 내용이 해결 되었나요?</span>
								<span>
									<Field name={`${field}.evaluation`}
									       label="예"
									       keyValue="Y"
									       onChange={this.onChangeCheckBox}
									       component={RadioField}/>

									<Field name={`${field}.evaluation`}
									       label="아니오"
									       keyValue="N"
									       onChange={this.onChangeCheckBox}
									       component={RadioField}/>
								</span>
							</span>
						</div>

						<div className={`bottom active`}>
							<button
								className="btn-white"
								type="button"
								disabled={!enabled}
								onClick={this.onClickEvaluation}
								ref={(c) => {this.btn = c;}}>평가하기
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}