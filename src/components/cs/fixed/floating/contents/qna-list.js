

import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { CSTypes } from 'constants/index';
import { SelectField } from 'components/common/fields';
import { toDate } from 'utils/format';
import { getHeight, getDatasetByName } from 'utils/dom';
import { getDeepValue } from 'utils/json';

class CSFloatingContentQNAList extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickEdit = this.onClickEdit.bind(this);
		this.onClickCreate = this.onClickCreate.bind(this);
		this.onChangeTerm = this.onChangeTerm.bind(this);
		this.onClickListMore = this.onClickListMore.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onClickEdit(event) {
		let { actions: { handleChangeType, handleRequestQNAByBoardId } } = this.props;
		let boardId = Number(getDatasetByName(event.currentTarget, 'board-id'));

		handleRequestQNAByBoardId(boardId, CSTypes.APPEND).then(() => {
			handleChangeType(CSTypes.EDIT, false, boardId);
		});
	}

	onClickCreate(event) {
		let { actions: { handleChangeType } } = this.props;

		handleChangeType(CSTypes.CREATE);
	}

	onChangeTerm(event, value) {
		this.requestList(true, value);
	}

	onClickListMore(event) {
		this.requestList(false);
	}

	onSubmit(values) {}

	requestList(isReset, term) {
		let { currentForm, actions: { handleRequestList } } = this.props;

		let currentTerm = term || getDeepValue(currentForm, 'values.term');

		Promise.all([
			handleRequestList(isReset, currentTerm)
		]).then(() => {
			this.resizeHeight();
		})
	}

	resizeHeight() {
		let { actions: { handleResizeHeight }, active } = this.props;

		active && handleResizeHeight(getHeight(this.lists) + 101 + 66);
	}

	componentDidUpdate(prevProps, prevState) {
		let { active: prevActive, type: prevType } = prevProps;
		let { active: currentActive, updated: currentUpdated } = this.props;

		currentActive && Promise.all([
			(!prevActive && (prevType === CSTypes.CREATE || currentUpdated)) && this.requestList(true)
		]).then(() => {
			this.resizeHeight();
		});
	}

	render() {
		let { states, actions, active, items, totalCount, handleSubmit } = this.props;
		let { ui: { view: { height: uiHeight } }, user: { userName } } = states;
		let { handleGetMaxHeight } = actions;

		let height = Math.max(0, handleGetMaxHeight() - ((50 + 40) + (101 + 66)));
		let maxHeight = uiHeight - (60 * 2 + 50 + 40);

		let middleStyle = items.length > 0 ? { height: `${height}px` } : null;
		let nothingStyle = items.length < 1 ? (maxHeight < 500 ? { height: `${maxHeight - (101 + 50 + 2 + 66)}px` } : null) : null;

		return (
			<div className={`list ${active ? '' : 'lock'}`}>
				<div className="top">
					<span className="desc">
						{userName} 고객님의 최근 문의 내역입니다.
					</span>
					<span className="condition">
						<span className="title">조회기간</span>
						<form onSubmit={handleSubmit(this.onSubmit)}>
							<Field
								name="term"
								placeholder="기간설정"
								width="60"
								options={[
									{ label: '오늘', value: '0' },
									{ label: '일주일', value: '7' },
									{ label: '2개월', value: `${30 * 2}` },
									{ label: '6개월', value: `${30 * 6}` },
									{ label: '1년', value: `${365}` },
									{ label: '2년', value: `${365 * 2}` }
								]}
								onChange={this.onChangeTerm}
								component={SelectField}/>
						</form>
					</span>
				</div>
				<div className="middle" style={middleStyle}>
					<ul ref={(c) => {this.lists = c;}}>
						<li className="top">
							<span className="status">처리상태</span>
							<span className="title">제목</span>
							<span className="date">문의일</span>
						</li>

						{items.length
							? items.map((item, index) => {
								let replied = item[ 'qnaStatusCode' ] === '336003';

								return (
									<li key={item[ 'boardId' ]}
									    data-board-id={item[ 'boardId' ]}
									    onClick={this.onClickEdit}>

										<span className={`status ${replied ? 'replied' : ''}`}>{item[ 'qnaStatusName' ]}</span>
										<span className="title">{item[ 'title' ]}</span>
										<span className="date">{toDate(item[ 'registrationDate' ], 'YYYY.MM.DD')}</span>
									</li>
								)
							})
							: (
								<li className="nothing" style={nothingStyle}>
									<span>문의 내용이 존재 하지 않습니다.</span>
								</li>
							)
						}

						{totalCount > 0 && (
							<li className="more">
								{totalCount > items.length && (
									<button type="button" onClick={this.onClickListMore}>더보기</button>
								)}
							</li>
						)}
					</ul>
				</div>
				<div className="bottom">
					<button type="button" className="btn-black" onClick={this.onClickCreate}>새 문의 등록하기</button>
				</div>
			</div>
		)
	}
}

const formName = 'cs-fixed-qna-list';

const mapStateToProps = (state, ownerProps) => {
	return {
		currentForm: state.form[ formName ],
		initialValues: {
			term: `${30 * 2}`
		}
	}
};

CSFloatingContentQNAList = reduxForm({
	form: formName,
	enableReinitialize: true
})(CSFloatingContentQNAList);

export default connect(mapStateToProps)(CSFloatingContentQNAList);