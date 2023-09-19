

import React from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { CSTypes } from 'constants/index';
import { SelectField } from 'components/common/fields';
import { toDate } from 'utils/format';
import { getHeight, getDatasetByName } from 'utils/dom';
import { getDeepValue } from 'utils/json';

import Pagination from 'components/common/pagination';

class CSDefaultContentQNAList extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			offset: 0
		};

		this.onClickEdit = this.onClickEdit.bind(this);
		this.onClickCreate = this.onClickCreate.bind(this);
		this.onChangeTerm = this.onChangeTerm.bind(this);
		this.onChangeOffset = this.onChangeOffset.bind(this);
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
		this.requestList(0, value);
	}

	onChangeOffset(offset) {
		let { actions: { handleUpdateUIScroll } } = this.props;

		this.requestList(offset).then(() => {
			handleUpdateUIScroll(0);
		});
	}

	onSubmit(values) {}

	requestList(offset, term) {
		let { currentForm, actions: { handleRequestList } } = this.props;
		let { offset: currentOffset } = this.state;

		let currentTerm = term || getDeepValue(currentForm, 'values.term');

		Promise.all([
			handleRequestList(offset, currentTerm)
		]).then(() => {
			currentOffset !== offset && this.setState(update(this.state, { offset: { $set: offset } }))
		})
	}

	componentDidUpdate(prevProps, prevState) {
		let { active: prevActive, type: prevType } = prevProps;
		let { active: currentActive, updated: currentUpdated } = this.props;

		currentActive && (!prevActive && (prevType === CSTypes.CREATE || currentUpdated)) && this.requestList(0);
	}

	render() {
		let { states, actions, active, items, totalCount, limit, handleSubmit } = this.props;
		let { offset } = this.state;
		let { user: { userName } } = states;

		return (
			<div className={`list ${active ? '' : 'lock'}`}>
				<div className="top">
					<span className="condition">
						<span className="title">조회기간</span>
						<form onSubmit={handleSubmit(this.onSubmit)}>
							<Field
								name="term"
								className="box"
								placeholder="기간설정"
								width="100"
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
				<div className="middle">
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
								<li className="nothing">
									<span>문의 내용이 존재 하지 않습니다.</span>
								</li>
							)
						}

					</ul>
					{totalCount > 0 && React.cloneElement(<Pagination/>, {
						offset,
						limit,
						totalCount,
						handleChangeOffset: this.onChangeOffset
					})}
				</div>
			</div>
		)
	}
}

const formName = 'cs-default-qna-list';

const mapStateToProps = (state, ownerProps) => {
	return {
		currentForm: state.form[ formName ],
		initialValues: {
			term: `${30 * 2}`
		}
	}
};

CSDefaultContentQNAList = reduxForm({
	form: formName,
	enableReinitialize: true
})(CSDefaultContentQNAList);

export default connect(mapStateToProps)(CSDefaultContentQNAList);