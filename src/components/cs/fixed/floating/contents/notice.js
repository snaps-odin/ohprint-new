

import React from 'react';
import update from 'react-addons-update';

import { getHeight } from 'utils/dom';
import { LayerTypes } from 'constants/index';

import List from './notice-list';

class CSFloatingContentsNotice extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			items: [],
			totalCount: 0
		};

		this.onRequestList = this.onRequestList.bind(this);
		this.onUpdateItem = this.onUpdateItem.bind(this);
		this.onClickLogin = this.onClickLogin.bind(this);
	}

	onRequestList(isReset) {
		let { actions: { handleResetCSContentHeight, handleRequestAlarm } } = this.props;
		let { items } = this.state;

		let params = {
			offset: isReset ? 0 : items.length,
			limit: 5
		};

		return handleRequestAlarm(params).then(result => {
			this.setState(update(this.state, {
				items: { [`$${isReset ? 'set' : 'push'}`]: result[ 'alarmList' ] },
				totalCount: { $set: result[ 'totalCount' ] }
			}));
		}).then(() => {
			handleResetCSContentHeight(getHeight(this.scope));
		});
	}

	onUpdateItem(alarmNo) {
		let { items } = this.state;
		let itemIndex = items.findIndex((item) => {
			return item[ 'alarmNo' ] === alarmNo;
		});

		this.setState(update(this.state, { items: { [itemIndex]: { viewYn: { $set: 'Y' } } } }));
	}

	onClickLogin(event) {
		let { actions: { handleOpenContentsLayer } } = this.props;

		handleOpenContentsLayer(LayerTypes.LOGIN);
	}

	resizeHeight() {
		let { actions: { handleResetCSContentHeight } } = this.props;

		handleResetCSContentHeight(getHeight(this.scope));
	}

	componentDidMount() {
		let { states: { user: { loggedIn } } } = this.props;

		Promise.all([
			loggedIn && this.onRequestList(true)
		]).then(() => {
			this.resizeHeight();
		});
	}

	componentDidUpdate(prevProps, prevState) {
		let { states: { user: { loggedIn: currentLoggedIn } } } = this.props;
		let { states: { user: { loggedIn: prevLoggedIn } } } = prevProps;

		(currentLoggedIn !== prevLoggedIn) && Promise.all([
			currentLoggedIn && this.onRequestList(true)
		]).then(() => {
			this.resizeHeight();
		});
	}

	render() {
		let { states, actions } = this.props;
		let { user: { loggedIn } } = states;
		let { handleGetMaxHeight } = actions;
		let { items, totalCount } = this.state;

		let maxHeight = handleGetMaxHeight() - (50 + 40);
		let lockStyle = maxHeight < 500 ? { height: `${maxHeight}px` } : null;

		return (
			<div className="inner notice" ref={(c) => {this.scope = c;}}>
				{loggedIn
					? (
						React.cloneElement(<List/>, {
							states,
							items,
							totalCount,
							actions: {
								...actions,
								handleResizeHeight: this.onResizeHeight,
								handleRequestList: this.onRequestList,
								handleUpdateItem: this.onUpdateItem
							}
						})
					)
					: (
						<div className="lock" style={lockStyle}>
							<span>
								<span>로그인이 필요 합니다.</span>
								<button type="button" className="btn-black" onClick={this.onClickLogin}>로그인</button>
							</span>
						</div>
					)}
			</div>
		)
	}
}

module.exports = CSFloatingContentsNotice;