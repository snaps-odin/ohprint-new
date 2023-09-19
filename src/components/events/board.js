'use strict';

import React from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';

import { LayerTypes } from 'constants/index';
import { ActionLayer, ActionEvents, ActionUI } from 'actions/index';
import { toDate } from 'utils/format';
import { breaklines } from 'utils/string';
import { getDeepValue } from 'utils/json';

import Pagination from 'components/common/pagination';

class BoardInEvent extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			ready: false,
			offset: 0,
			limit: 10,
			items: [],
			totalCount: 0
		};

    this.className = (this.props.params.eventSeq === "169") ? 'events-small-business-day-wrap' : 'events-board-wrap';

		this.onChangeOffset = this.onChangeOffset.bind(this);
	}

	onChangeOffset(offset) {
		let { actions: { handleUpdateUIScroll } } = this.props;

		Promise.all([
			this.requestList(offset)
		]).then(() => {
			this.isFocus && window.setTimeout(() => {
				handleUpdateUIScroll(0);
			}, 100);
		});
	}

	requestList(offset) {
		let { params: { eventSeq }, actions } = this.props;
		let { limit } = this.state;
		let { handleRequestEventsCommentsByIdx, handleOpenAlertLayer } = actions;

		handleRequestEventsCommentsByIdx(eventSeq, { offset, limit }).then(result => {
			let { list, totalCount } = result;

			this.setState(update(this.state, {
				ready: { $set: true },
				items: { $set: list },
				offset: { $set: offset },
				totalCount: { $set: totalCount }
			}));

			return totalCount;
		}).then(result => {
			!!getDeepValue(window, 'frameElement.contentWindow.document.body.firstElementChild.clientHeight') && (
				window.frameElement.style.height = `${result > 0 ? window.frameElement.contentWindow.document.body.firstElementChild.clientHeight : 0}px`
			);

			window.parent.SnapsEvent && window.parent.SnapsEvent.resizeHeight();
		}).catch(error => {
			handleOpenAlertLayer({
				description: error
			});
		});
	}

	componentDidUpdate(prevProps, prevState) {
		let { params: { eventSeq: prevSeq } } = prevProps;
		let { params: { eventSeq: currentSeq } } = this.props;

		!Object.is(prevSeq, currentSeq) && this.requestList(0);
	}

	componentDidMount() {
		this.requestList(0);
	}

	render() {
		let { ready, offset, limit, items, totalCount } = this.state;

		return ready && (
				<div className={this.className}>
					<ul className="top">
						{(items || []).length > 0 && items.reduce((target, item) => {
							target.push(
								<li>
									<span>
										<span>
											<span className="content"
											      dangerouslySetInnerHTML={{ __html: breaklines(item[ 'bbsContents' ]) }}/>

											<span className="title">{item[ 'userName' ]}
												{/*<em>{toDate(item[ 'regDate' ], 'YYYY.MM.DD')}</em>*/}
											</span>
										</span>
									</span>
								</li>
							);

							return target;
						}, [])}
					</ul>

					<div className="bottom">
						{totalCount > 0 && React.cloneElement(<Pagination/>, {
							limit,
							offset,
							totalCount,
							handleChangeOffset: this.onChangeOffset
						})}
					</div>
				</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		states: {
			config: state.config,
			ui: state.ui,
			user: state.user
		}
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			handleRequestEventsCommentsByIdx: (idx, params) => dispatch(ActionEvents.requestEventsCommentsByIdx(idx, params)),

			handleUpdateUIScroll: (targetY, easingType) => dispatch(ActionUI.updateUIScroll(targetY, easingType)),

			handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),
			handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
			handleCloseContentsLayer: () => dispatch(ActionLayer.closeContentsLayer())
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(BoardInEvent);
