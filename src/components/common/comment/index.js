

import React from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import CommentInput from './input';
import CommentItem from './item';

class Comment extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			items: [
				{ content: true, child: new Array(3).fill(true) },
				{ content: true, child: [] },
				{ content: true, child: new Array(2).fill(true) }
			]
		};

		this.onClickOpenItem = this.onClickOpenItem.bind(this);
		this.onClickCloseItem = this.onClickCloseItem.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onClickOpenItem(index) {
		this.setState(update(this.state, { items: { [index]: { opened: { $set: true } } } }));
	}

	onClickCloseItem(index) {
		this.setState(update(this.state, { items: { [index]: { opened: { $set: false } } } }));
	}

	onSubmit(values) {

	}

	render() {
		let { handleSubmit } = this.props;
		let { items } = this.state;

		return (
			<div className="comment-wrap">
				<form onSubmit={handleSubmit(this.onSubmit)}>
					<CommentInput/>

					<ul>
						{items.map((item, index) => (
							<li>
								{React.cloneElement(<CommentItem/>, {
									actions: {
										handleOpen: this.onClickOpenItem,
										handleClose: this.onClickCloseItem,
									},
									index,
									item
								})}

								{item[ 'opened' ] && React.cloneElement(<CommentInput/>, {
									reply: true
								})}

								{item[ 'opened' ] && item[ 'child' ] && item[ 'child' ].length > 0 && (
									<ul>
										{item[ 'child' ].map((item, index, arr) => (
											<li>
												{React.cloneElement(<CommentItem/>, {
													reply: true,
													isLast: arr.length - 1 === index
												})}
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</form>
			</div>
		)
	}
}

const formName = 'comment';

const mapStateToProps = (state, ownerProps) => {
	return {}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {}
};

Comment = reduxForm({
	form: formName
})(Comment);

export default connect(mapStateToProps, mapDispatchToProps)(Comment);