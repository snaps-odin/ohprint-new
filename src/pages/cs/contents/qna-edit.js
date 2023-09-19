

import React from 'react';
import { connect } from 'react-redux';
import { change, untouch, reduxForm, reset } from 'redux-form';

import { CSTypes } from 'constants/index';

import QNAItem from './qna-item';

class CSDefaultContentsQNAEdit extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			content: null
		};

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(values) {}

	getQNAItemByBoardId(boardId) {
		let { states: { qna: { lastUpdateItem } } } = this.props;

		return (lastUpdateItem || {})[ 'boardId' ] === boardId ? lastUpdateItem : null;
	}

	componentDidUpdate(prevProps, prevState) {
		let { active: prevActive, dirty: prevDirty } = prevProps;
		let { actions, active: currentActive, boardId, dirty: currentDirty } = this.props;
		let { handleChangeType, handleUpdateFormDirty } = actions;

		let { content } = this.state;

		if (currentActive) {
			let item = this.getQNAItemByBoardId(boardId);

			if (item) {
				if (!prevActive) {
					this.setState({ content: item });
				} else {
					(item[ 'list' ] || []).length < 1
						?
						Promise.all([
							handleChangeType(CSTypes.LIST, true)
						]).then(() => {
							this.setState({ content: null });
						})
						:
						!Object.is(content, item) && this.setState({ content: item });
				}
			}

			prevDirty !== currentDirty && handleUpdateFormDirty(currentDirty);
		} else {
			prevActive && this.setState({ content: null });
		}
	}

	render() {
		let { states, actions, active, boardId, handleSubmit, valid, submitting } = this.props;
		let { content } = this.state;

		return (
			<div className={`edit ${active ? '' : 'lock'}`}>
				<form onSubmit={handleSubmit(this.onSubmit)}>
					{active && content && (React.cloneElement(<QNAItem/>, {
						key: boardId,
						states,
						actions,
						active,
						value: content,
						valid,
						submitting
					}))}
				</form>
			</div>
		)
	}
}

const formName = 'cs-default-qna-edit';

const mapStateToProps = (state, ownerProps) => {
	return {}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,
			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),
			handleUnTouchFormValue: (key) => dispatch(untouch(formName, key))
		}
	}
};

CSDefaultContentsQNAEdit = reduxForm({
	form: formName,
	enableReinitialize: true
})(CSDefaultContentsQNAEdit);

export default connect(mapStateToProps, mapDispatchToProps)(CSDefaultContentsQNAEdit);
