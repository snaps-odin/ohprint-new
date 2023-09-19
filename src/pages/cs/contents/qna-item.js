

import React from 'react';
import { Field } from 'redux-form';

import { CSTypes } from 'constants/index';
import { addDomain } from 'utils/url';
import { breaklines, clearStyle } from 'utils/string';
import { toDate } from 'utils/format';
import { getWidth, getHeight } from 'utils/dom';
import * as Validate from 'utils/validate';
import * as Normalize from 'utils/normalize';

import { TextAreaField } from 'components/common/fields';

export default class CSDefaultQNAItem extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			edit: false
		};

		this.onLoadedImage = this.onLoadedImage.bind(this);
		this.onClickOpenEdit = this.onClickOpenEdit.bind(this);
		this.onClickCloseEdit = this.onClickCloseEdit.bind(this);
		this.onClickDelete = this.onClickDelete.bind(this);
		this.onClickRegistry = this.onClickRegistry.bind(this);
		this.onClickBack = this.onClickBack.bind(this);
	}

	onLoadedImage(event) {
		this.resizeHeight();
	}

	onClickOpenEdit(event) {
		let { actions: { handleChangeFormValue, handleUnTouchFormValue } } = this.props;
		let editable = this.getEditableInfo();

		Promise.all([
			handleUnTouchFormValue('contents'),
			handleChangeFormValue('contents', editable[ 'enable' ] ? editable[ 'lastContents' ] : '')
		]).then(() => {
			this.setState({ edit: true });
		});
	}

	onClickCloseEdit(event) {
		let { actions: { handleOpenAlertLayer } } = this.props;

		handleOpenAlertLayer({
			description: '<span>취소하시면 작성하신 내용을 잃게 됩니다.<br/>취소하시겠습니까?</span>',
			confirm: true,
			callback: (confirmed) => {
				confirmed && this.setState({ edit: false });
			}
		});
	}

	onClickDelete(event) {
		let { actions: { handleOpenAlertLayer, handleDeleteQNAByBoardId }, value: { boardId } } = this.props;
		let editable = this.getEditableInfo();

		handleOpenAlertLayer({
			description: '<span>문의하신 내용을<br/>삭제하시겠습니까?</span>',
			confirm: true,
			confirmLabel: '삭제',
			callback: (confirmed) => {
				confirmed && handleDeleteQNAByBoardId(boardId, editable[ 'lastSeq' ])
					.then(() => {
						this.requestQNADelete();
					})
					.catch(error => {
						handleOpenAlertLayer({ description: error });
					});
			}
		});
	}

	onClickRegistry(event) {
		let { actions: { handleCreateQNAByBoardIdSeq, handleCreateQNAByBoardId, handleOpenAlertLayer }, value: { boardId } } = this.props;
		let editable = this.getEditableInfo();

		if (this.contents.value) {
			let formData = new FormData();

			formData.append('contents', this.contents.value);

			Promise.all([
				editable[ 'enable' ]
					? handleCreateQNAByBoardIdSeq(boardId, editable[ 'lastSeq' ], formData)
					: handleCreateQNAByBoardId(boardId, formData)
			]).then(() => {
				this.requestQNA();
			}).then(() => {
				this.setState({ edit: false });
			}).catch(error => {
				handleOpenAlertLayer({ description: error })
			});
		}
	}

	onClickBack(event) {
		let { actions: { handleChangeType } } = this.props;

		handleChangeType(CSTypes.LIST);
	}

	getEditableInfo() {
		let { value: { qnaStatusCode, list } } = this.props;

		return {
			enable: qnaStatusCode === '336001',
			complete: qnaStatusCode === '336003',
			lastContents: list[ list.length - 1 ][ 'contents' ],
			lastSeq: list[ list.length - 1 ][ 'boardSeq' ],
			lastIndex: list.length - 1
		}
	}

	getContents(index) {
		let { value: { list } } = this.props;

		let html = breaklines(list[ index ][ 'contents' ]);
		html = clearStyle(html);

		return { __html: html }
	}

  requestQNADelete() {
    let { actions: { handleRequestQNAByBoardIdForDelete }, value: { boardId } } = this.props;

    handleRequestQNAByBoardIdForDelete(boardId, CSTypes.REPLACE);
  }

	requestQNA() {
		let { actions: { handleRequestQNAByBoardId }, value: { boardId } } = this.props;

		handleRequestQNAByBoardId(boardId, CSTypes.REPLACE);
	}

	resizeHeight() {
		let { actions: { handleResizeHeight }, pop, active } = this.props;

		if (pop) {
			handleResizeHeight && handleResizeHeight(getHeight(this.scope))
		} else {
			active && handleResizeHeight && handleResizeHeight();
		}
	}

	componentDidMount() {
		this.resizeHeight();
	}

	componentDidUpdate(prevProps, prevState) {
		let { pop, value: currentValue } = this.props;
		let { value: prevValue } = prevProps;

		!pop && !(
			Object.is(JSON.stringify(currentValue), JSON.stringify(prevValue)) &&
			Object.is(JSON.stringify(this.state), JSON.stringify(prevState))
		) && this.resizeHeight();
	}

	render() {
		let { states, value, valid, submitting } = this.props;
		let { config: { url: { cdn: cdnUrl } } } = states;
		let { boardId, list } = value;
		let { edit } = this.state;

		let editable = list ? this.getEditableInfo() : {};

		return (
			<div className="item" data-board-id={boardId} ref={(c) => {this.scope = c;}}>
				<div className="top">
					<div>
						<span className="left">
							<span className="title">제목</span>
							<span className="line">|</span>
							<span className="value">{value[ 'title' ]}</span>
						</span>
						<span className="right">
							<span className="title">처리상태</span>
							<span className="line">|</span>
							<span
								className={`value status ${value[ 'qnaStatusCode' ] === '336003' ? 'replied' : ''}`}>{value[ 'qnaStatusName' ]}</span>
						</span>
					</div>
					<div>
						<span className="left">
							<span className="title">문의유형</span>
							<span className="line">|</span>
							<span className="value">{value[ 'categoryGroupName' ]}{`>`}{value[ 'categoryName' ]}</span>
						</span>
						<span className="right">
							<span className="title">문의일</span>
							<span className="line">|</span>
							<span className="value">{toDate(value[ 'registrationDate' ], 'YYYY/MM/DD')}</span>
						</span>
					</div>
					{(value || {})[ 'prodName' ] && (
						<div>
							<span className="left">
								<span className="title">주문상품</span>
								<span className="line">|</span>
								<span className="value">{value[ 'prodName' ]}{value[ 'projName' ] && `[${value[ 'projName' ]}]`}</span>
							</span>
						</div>
					)}
				</div>
				<ul className="middle">
					{list && list.length && list.map((item, index) => {
						let qnaType = item[ 'qnaType' ] === '338001' ? 'question' : 'answer';

						return (editable[ 'enable' ] && edit && index === editable[ 'lastIndex' ])
							? null
							: (
								<li className={qnaType} data-board-seq={item[ 'boardSeq' ]}>
									<span>
										<span className={`icon icon-faq-${qnaType === 'question' ? 'q' : 'a'}`}/>
										<span className="desc">
											{item[ 'contents' ] && (
												<div className="contents" dangerouslySetInnerHTML={this.getContents(index)}/>
											)}

											{item[ 'list' ].length > 0 && (
												<span className="images">
													{item[ 'list' ].length > 0 && item[ 'list' ].map((image, index) => (
														<img src={addDomain(cdnUrl, image[ 'filePath' ])}
														     onLoad={this.onLoadedImage}
														     onError={this.onLoadedImage}/>
													))}
												</span>
											)}
											<span className="date">{toDate(item[ 'modifyDate' ], 'YYYY/MM/DD')}</span>
										</span>
									</span>
								</li>
							)
					})}
				</ul>
				<div className="bottom">
					{!edit
						? (
							editable[ 'enable' ]
								?
								(
									<span>
										<span className="left">
											<button type="button"
											        className="btn-white-medium"
											        onClick={this.onClickBack}>목록</button>
										</span>
										<span className="right">
											<button type="button"
											        className="btn-white-medium"
											        onClick={this.onClickOpenEdit}>수정</button>

											<button type="button"
											        className="btn-white-medium"
											        onClick={this.onClickDelete}>삭제</button>
										</span>
									</span>
								)
								:
								(
									<span>
										{editable[ 'complete' ] && (
											<span className="left">
												<button type="button"
												        className="btn-white-medium"
												        onClick={this.onClickBack}>목록</button>
											</span>
										)}

										<span className="right">
											<span className="description">
												문의하신 내용에 대해 답변처리가 완료되었습니다.<br/>
												답변에 만족하지 않으셨다면 추가문의 부탁드립니다.
											</span>
											<span>
												<button type="button"
												        className="btn-blue-medium"
												        onClick={this.onClickOpenEdit}>추가문의</button>
											</span>
										</span>
									</span>
								)
						)
						: (
							<span className="field">
								<Field name="contents"
								       className="top box"
								       placeholder={`${editable[ 'enable' ] ? '' : '추가 '}문의 내용을 입력해 주세요`}
								       component={TextAreaField}
								       maxLength={2000}
								       showLength={true}
								       validate={[ Validate.required ]}
								       normalize={Normalize.maxLength(2000)}
								       ref={(c) => {this.contents = c}}/>

								<span className="bottom">
									<span>
										<button type="button"
										        className="btn-white-medium"
										        onClick={this.onClickCloseEdit}>취소</button>

										<button type="button"
										        className={`btn-${valid ? 'blue' : 'gray'}-medium`}
										        disabled={submitting}
										        onClick={this.onClickRegistry}>{editable[ 'enable' ] ? '확인' : '등록'}</button>
									</span>
								</span>
							</span>
						)
					}
				</div>
			</div>
		)
	}
}
