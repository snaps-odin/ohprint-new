

import React from 'react';
import update from 'react-addons-update';

import { LayerTypes, CSTypes } from 'constants/index';
import { getDatasetByName } from 'utils/dom';

import Tab from 'components/common/tab';
import Create from './qna-create';
import List from './qna-list';
import Edit from './qna-edit';
import Attention from 'components/common/attention';

class CSDefaultContentsQNA extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			activeIndex: 0,
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

		this.onChangeTab = this.onChangeTab.bind(this);
		this.onChangeType = this.onChangeType.bind(this);
		this.requestList = this.requestList.bind(this);
	}

	onChangeTab(event) {
		let { formDirty, actions: { handleOpenAlertLayer, handleUpdateFormDirty } } = this.props;
		let { activeIndex } = this.state;

		let index = Number(getDatasetByName(event.currentTarget, 'index'));

		index !== activeIndex && new Promise((resolve, reject) => {
			formDirty
				?
				handleOpenAlertLayer({
					description: '<span>선택 및 작성하신 내용을 잃게 됩니다.<br/>나의 문의 내역 보기로 이동하시겠습니까?</span>',
					confirm: true,
					callback: (confirmed) => {
						confirmed && resolve()
					}
				})
				: resolve();
		}).then(() => {
			handleUpdateFormDirty(false);
		}).then(() => {
			this.setState(update(this.state, {
				activeIndex: { $set: index },
				updated: { $set: true },
				type: { $set: index === 0 ? CSTypes.CREATE : CSTypes.LIST }
			}));
		}).then(() => {
			this.state[ 'updated' ] && this.setState(update(this.state, { updated: { $set: false } }));
		});
	}

	onChangeType(type, updated, boardId) {
		let { actions: { handleUpdateFormDirty } } = this.props;

		Promise.all([
			this.setState(update(this.state, {
				type: { $set: type },
				updated: { $set: updated },
				boardId: { $set: boardId || null },
				activeIndex: { $set: type === CSTypes.CREATE ? 0 : 1 }
			}))
		]).then(() => {
			handleUpdateFormDirty(false);
		}).then(() => {
			this.state[ 'updated' ] && this.setState(update(this.state, { updated: { $set: false } }));
		});
	}

	requestList(offset, term) {
		let { states: { alarm: { qnaCount } }, actions: { handleRequestQNAList, handleUpdateAlarmQNAView } } = this.props;
		let { limit } = this.state;

		let params = {
			term,
			limit,
			offset
		};

		handleRequestQNAList(params).then(result => {
			Promise.all([
				qnaCount > 0 && handleUpdateAlarmQNAView()
			]).then(() => {
				this.setState(update(this.state, {
					items: { $set: result[ 'list' ] },
					totalCount: { $set: result[ 'totalCount' ] }
				}));
			})
		});
	}

	render() {
		let { states, actions } = this.props;
		let { activeIndex, type, updated, boardId, items, totalCount, limit } = this.state;

		let index = this.els.findIndex((item, index) => item[ 'type' ] === type);
		let listStyle = { left: `${index * -1140}px` };

		return (
			<div className="inner qna" ref={(c) => c && (this.scope = c)}>
				<div className="description">
					해결하지 못한 궁금한 사항에 대해 문의해 주세요.<br/>
					고객님의 소중한 의견을 하나하나 새겨 듣고, 최선을 다해 답변 드리겠습니다.
				</div>

				{React.cloneElement(<Tab/>, {
					activeIndex,
					tabWidth: '50%',
					tabHeight: '50px',
					labels: [ '새 문의 등록하기', '나의 문의 내역' ].reduce((target, item, index) => {
						target.push(
							<span>{item}</span>
						);

						return target;
					}, []),
					actions: {
						handleChange: this.onChangeTab
					}
				})}

				<ul style={listStyle}>
					{this.els.map((item, index) => (
						<li>
							{React.cloneElement(item[ 'component' ], {
								states,
								actions: {
									...actions,
									handleChangeType: this.onChangeType,
									handleRequestList: this.requestList
								},
								type,
								active: type === item[ 'type' ],
								updated,
								boardId,
								items,
								totalCount,
								limit
							})}
						</li>
					))}
				</ul>

				{type !== CSTypes.EDIT && (
					React.cloneElement(<Attention/>, {
						value: {
							title: '1:1 문의 안내',
							children: [
								{ value: '답변 전에는 문의사항을 수정 및 삭제할 수 있습니다.' },
								{ value: '일반적으로 다음 영업 일까지 답변하고 있으나, 문의량이 많을 경우 다소 지연될 수 있습니다.' }
							]
						}
					})
				)}
			</div>
		)
	}
}

module.exports = CSDefaultContentsQNA;