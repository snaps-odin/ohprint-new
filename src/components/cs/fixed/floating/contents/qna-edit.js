

import React from 'react';
import { connect } from 'react-redux';
import { change, reduxForm } from 'redux-form';

import { CSTypes } from 'constants/index';

import QNAItem from 'components/cs/fixed/common/qna-item';

class CSFloatingContentsQNAEdit extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			content: null
		};

		this.onClickBack = this.onClickBack.bind(this);
		this.onClickAppendPop = this.onClickAppendPop.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onClickBack(event) {
		let { actions: { handleChangeType } } = this.props;

		handleChangeType(CSTypes.LIST);
	}

	onClickAppendPop(event) {
		let { actions: { handleUpdateCSPopItem } } = this.props;
		let { content } = this.state;

		handleUpdateCSPopItem({ type: CSTypes.QNA, value: content }, CSTypes.APPEND);
	}

	onSubmit(values) {}

	getQNAItemByBoardId(boardId) {
		let { states: { qna: { lastUpdateItem } } } = this.props;

		return (lastUpdateItem || {})[ 'boardId' ] === boardId ? lastUpdateItem : null;
	}

	componentDidUpdate(prevProps, prevState) {
		let { active: prevActive } = prevProps;
		let { actions, active: currentActive, boardId } = this.props;
		let { handleChangeCSTitleBack, handleChangeCSTitlePop, handleChangeType } = actions;

		let { content } = this.state;

		if (currentActive) {
			let item = this.getQNAItemByBoardId(boardId);

			if (item) {
				if (!prevActive) {
					handleChangeCSTitleBack(this.onClickBack);
					handleChangeCSTitlePop(this.onClickAppendPop);
					this.setState({ content: item });
				} else {
					(item[ 'list' ] || []).length < 1
						?
						Promise.all([
							handleChangeType(CSTypes.LIST, true),
							handleChangeCSTitleBack(null),
							handleChangeCSTitlePop(null)
						]).then(() => {
							this.setState({ content: null });
						})
						:
						!Object.is(content, item) && this.setState({ content: item });
				}
			}
		} else {
			prevActive && this.setState({ content: null });
		}
	}

	render() {
		let { states, actions, active, boardId, handleSubmit } = this.props;
		let { content } = this.state;

		return (
			<div className={`edit ${active ? '' : 'lock'}`}>
				<form onSubmit={handleSubmit(this.onSubmit)}>
					{active && content && (React.cloneElement(<QNAItem/>, {
						key: boardId,
						states,
						actions,
						active,
						value: content
					}))}
				</form>
			</div>
		)
	}
}

const formName = 'cs-fixed-qna-edit';

const mapStateToProps = (state, ownerProps) => {
	return {}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,
			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value))
		}
	}
};

CSFloatingContentsQNAEdit = reduxForm({
	form: formName,
	enableReinitialize: true
})(CSFloatingContentsQNAEdit);

export default connect(mapStateToProps, mapDispatchToProps)(CSFloatingContentsQNAEdit);
