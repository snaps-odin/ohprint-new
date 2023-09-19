import React from 'react';
import { connect } from 'react-redux';
import { change, FieldArray, reduxForm } from 'redux-form';

import Content from './contents/index';

class CSPop extends React.Component {
	constructor(...args) {
		super(...args);

		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(values) {}

	shouldComponentUpdate(nextProps, nextState) {
		let { states: currentStates } = this.props;
		let { states: nextStates } = nextProps;

		return !(
			Object.is(JSON.stringify(currentStates), JSON.stringify(nextStates))
		);
	}

	render() {
		let { states, actions, handleSubmit } = this.props;

		return (
			<div className="pop">
				<form onSubmit={handleSubmit(this.onSubmit)}>
					{React.cloneElement(<FieldArray/>, {
						states,
						actions,
						name: 'items',
						component: Content
					})}
				</form>
			</div>
		)
	}
}

const formName = 'cs-fixed-pop';

const mapStateToProps = (state, ownerProps) => {
	let { states } = ownerProps;
	let { cs: { pop: { content: { items } } } } = states;

	return {
		states: {
			...states
		},
		initialValues: {
			items
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName,
	enableReinitialize: true
})(CSPop));