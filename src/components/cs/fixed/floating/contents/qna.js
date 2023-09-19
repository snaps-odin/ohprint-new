import React from 'react';
import update from 'react-addons-update';

import { LayerTypes, CSTypes } from 'constants/index';
import { getHeight } from 'utils/dom';

import Create from './qna-create';
import List from './qna-list';
import Edit from './qna-edit';

class CSFloatingContentsQNA extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			type: CSTypes.CREATE,
			updated: false,
			boardId: null,
			items: [],
			limit: 10,
			totalCount: 0
		};

		this.els = [
			{ component: <Create/>, type: CSTypes.CREATE },
			{ component: <List/>, type: CSTypes.LIST },
			{ component: <Edit/>, type: CSTypes.EDIT }
		];

		this.height = null;

		this.onChangeType = this.onChangeType.bind(this);
		this.onResizeHeight = this.onResizeHeight.bind(this);
		this.onClickLogin = this.onClickLogin.bind(this);
		this.requestList = this.requestList.bind(this);
	}

	onChangeType(type, updated, boardId) {
		let { actions: { handleChangeCSTitleBack, handleChangeCSTitlePop } } = this.props;

		Promise.all([
			handleChangeCSTitleBack(null),
			handleChangeCSTitlePop(null),
			this.setState({ type: type, updated: updated, boardId: boardId || null })
		]).then(() => {
			this.state[ 'updated' ] && this.setState(update(this.state, { updated: { $set: false } }));
		});
	}

	onClickLogin(event) {
		let { actions: { handleOpenContentsLayer } } = this.props;

		handleOpenContentsLayer(LayerTypes.LOGIN);
	}

	onResizeHeight(height) {
		this.resizeHeight(height);
	}

	resizeHeight(height) {
		let { actions: { handleResetCSContentHeight } } = this.props;
		let newHeight = height || getHeight(this.scope);

		if (this.height !== newHeight && newHeight > 0) {
			this.height = newHeight;

			handleResetCSContentHeight(this.height);
		}
	}

	requestList(isReset, term) {
		let { states: { alarm: { qnaCount } }, actions: { handleRequestQNAList, handleUpdateAlarmQNAView } } = this.props;
		let { limit, items } = this.state;

		let params = {
			term,
			limit,
			offset: isReset ? 0 : items.length
		};

		handleRequestQNAList(params).then(result => {
			Promise.all([
				qnaCount > 0 && handleUpdateAlarmQNAView()
			]).then(() => {
				this.setState(update(this.state, {
					items: { [`$${isReset ? 'set' : 'push'}`]: result[ 'list' ] },
					totalCount: { $set: result[ 'totalCount' ] }
				}));
			})
		});
	}

	findQNAItemIndex(boardId) {
		let { items } = this.state;

		return items.findIndex((item, index) => item[ 'boardId' ] === boardId);
	}

	componentDidMount() {
		let { actions: { handleResetCSScroll } } = this.props;

		Promise.all([
			handleResetCSScroll()
		]).then(() => {
			this.resizeHeight();
		});
	}

	componentDidUpdate(prevProps) {
		let { states: { ui: { view: { height: prevHeight } }, user: { loggedIn: prevLoggedIn } } } = prevProps;
		let { states: { ui: { view: { height: currentHeight } }, user: { loggedIn: currentLoggedIn }, alarm: { qnaCount }, cs: { floating: { tab: { focus: currentFocus } } }, qna: { lastUpdateItem } } } = this.props;
		let { type, items, totalCount } = this.state;

		let updateItemIndex = this.findQNAItemIndex((lastUpdateItem || {})[ 'boardId' ]);

		Promise.all([
			updateItemIndex > -1 &&
			(
				(lastUpdateItem[ 'list' ] || []).length < 1
					?
					this.setState(update(this.state, {
						items: { $splice: [ [ updateItemIndex, 1 ] ] },
						totalCount: { $set: totalCount - 1 }
					}))
					:
					(
						!Object.is(JSON.stringify(items[ updateItemIndex ]), JSON.stringify(lastUpdateItem))
						&& this.setState(update(this.state, {
							items: { [updateItemIndex]: { $set: lastUpdateItem } }
						}))
					)
			)
		]).then(() => {
			(
				currentFocus === 2
				&& qnaCount > 0
				&& type !== CSTypes.LIST
			) && this.setState(update(this.state, { type: { $set: CSTypes.LIST } }))
		}).then(() => {
			(
				(prevHeight !== currentHeight)
				|| (prevLoggedIn !== currentLoggedIn)
			) && this.resizeHeight();
		});

		prevLoggedIn
		&& !currentLoggedIn
		&& this.setState(update(this.state, {
			type: { $set: CSTypes.CREATE },
			boardId: { $set: null },
			items: { $set: [] },
			totalCount: { $set: 0 }
		}));
	}

	render() {
		let { states, actions } = this.props;
		let { user: { loggedIn } } = states;
		let { handleGetMaxHeight } = actions;
		let { type, updated, boardId, items, totalCount } = this.state;

		let index = this.els.findIndex((item, index) => item[ 'type' ] === type);
		let maxHeight = handleGetMaxHeight() - (50 + 40);

		let listStyle = { left: `${index * -440}px` };
		let lockStyle = maxHeight < 500 ? { height: `${maxHeight}px` } : null;

		return (
			<div className="inner qna" ref={(c) => {if (c) this.scope = c;}}>
				{loggedIn
					? (
						<ul style={listStyle}>
							{this.els.map((item, index) => (
								<li>
									{React.cloneElement(item[ 'component' ], {
										states,
										actions: {
											...actions,
											handleChangeType: this.onChangeType,
											handleResizeHeight: this.onResizeHeight,
											handleRequestList: this.requestList
										},
										type,
										active: type === item[ 'type' ],
										updated,
										boardId,
										items,
										totalCount
									})}
								</li>
							))}
						</ul>
					)
					: (
						<div className="lock" style={lockStyle}>
							<span>
								<span>로그인이 필요 합니다.</span>
								<button type="button" className="btn-black" onClick={this.onClickLogin}>로그인</button>
							</span>
						</div>
					)
				}
			</div>
		)
	}
}

module.exports = CSFloatingContentsQNA;