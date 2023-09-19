

import React from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';

import { ActionEvents } from 'actions/index';
import { getHeight, getDatasetByName } from 'utils/dom';
import { toDate } from 'utils/format';
import { breaklines } from 'utils/string';

class EventsWinner extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			ready: false
		};

		this.onClickClose = this.onClickClose.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	requestEvent() {
		let { options: { idx }, actions: { handleUpdateLayer, handleRequestEventsWinnerByIdx } } = this.props;

		handleRequestEventsWinnerByIdx(idx).then(result => {
			Promise.all([
				this.setState(update(this.state, {
					ready: { $set: true },
					item: { $set: result }
				}))
			]).then(() => {
				handleUpdateLayer();
			});
		});
	}

	componentDidMount() {
		this.requestEvent();
	}

	render() {
		let { states: { ui: { view: { height } } } } = this.props;
		let { ready, item } = this.state;

		let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
			? height - (50 + 60 + getHeight(this.bottom))
			: null;

		return ready && (
				<div className="events-winner-layer-wrap popup">
					<div className="container">
						<div className="top" ref={(c) => {this.top = c}}>
							<h2>당첨자 발표</h2>
						</div>

						<div className="middle" style={{ height: middleHeight ? `${middleHeight}px` : '' }}>
							<div className="inner" ref={(c) => {this.inner = c;}}>
								<dl>
									<dt className="title">
										<span className="left">{item[ 'title' ]}</span>
										<span className="right">{toDate(item[ 'registrationDate' ], 'YYYY.MM.DD')}</span>
									</dt>
									<dd className="contents" dangerouslySetInnerHTML={{ __html: breaklines(item[ 'content' ]) }}/>
								</dl>
							</div>
						</div>
					</div>

					<button type="button"
					        className="icon icon-close-w-1414 close"
					        onClick={this.onClickClose}/>
				</div>
			)
	}
}

const mapStateToProps = (state, ownerProps) => {

	return {
		states: {
			ui: state.ui
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleRequestEventsWinnerByIdx: (idx) => dispatch(ActionEvents.requestEventsWinnerByIdx(idx))
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(EventsWinner);