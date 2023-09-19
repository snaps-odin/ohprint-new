

import React from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';
import { change, reduxForm, untouch } from 'redux-form';

import { CSTypes } from 'constants/index';
import { ActionCS, ActionFAQ, ActionLayer, ActionQNA, ActionUI, ActionAlarm, ActionCommon } from 'actions/index';
import { getDatasetByName } from 'utils/dom';
import { getDeepValue } from 'utils/json';
import { LayerTypes } from 'constants/index';

import Tab from 'components/common/tab';
import CSSearch from './search';
import FAQ from './contents/faq';
import QNA from './contents/qna';
import TALK from './contents/talk';
import { withRouter } from 'next/router';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

class CSDefault extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			activeIndex: null,
			keyword: null,
			formDirty: false
		};

		this.els = [
			{ component: <FAQ/>, type: CSTypes.FAQ, label: 'FAQ' },
			/*{ component: <TALK/>, type: CSTypes.TALK, label: '실시간톡' },*/
			{ component: <QNA/>, type: CSTypes.QNA, label: '1:1 문의' }
		];

		this.field = 'faq';

		this.onChangeIndex = this.onChangeIndex.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.resetKeyword = this.resetKeyword.bind(this);
		this.changeTabFocus = this.changeTabFocus.bind(this);
		this.updateFormDirty = this.updateFormDirty.bind(this);
	}

	onChangeIndex(event) {
		let index = Number(getDatasetByName(event.currentTarget, 'index'));

		this.updateIndex(index);
	}

	onChangeSearch() {
		let { states: { currentForm } } = this.props;
		let { keyword: currentSearch } = this.state;

		let field = this.field;
		let keyword = getDeepValue(currentForm, `values.${field}.keyword`);

		currentSearch !== keyword && this.setState(update(this.state, {
			keyword: { $set: keyword },
			activeIndex: { $set: 0 }
		}));
	}

	onSubmit() {
		let { states: { currentForm }, actions: { handleOpenAlertLayer } } = this.props;
		let { keyword: currentSearch, formDirty } = this.state;

		let field = this.field;
		let keyword = getDeepValue(currentForm, `values.${field}.keyword`);

		currentSearch !== keyword && new Promise((resolve, reject) => {
			formDirty
				?
				handleOpenAlertLayer({
					description: '<span>선택 및 작성하신 내용을 잃게 됩니다.<br/>화면을 이동하겠습니까?</span>',
					confirm: true,
					callback: (confirmed) => {
						confirmed && resolve()
					}
				})
				: resolve()
		}).then(() => {
			this.setState(update(this.state, {
				keyword: { $set: keyword },
				activeIndex: { $set: 0 },
				formDirty: { $set: false }
			}))
		});
	}

	changeTabFocus(type) {
		let index = this.getActiveIndex(type);

		this.updateIndex(index);
	}

	updateIndex(index) {
		let { actions: { handleChangeFormValue, handleOpenAlertLayer, handleExecuteAfterUserLogin } } = this.props;
		let { activeIndex, formDirty } = this.state;

		let field = this.field;

		activeIndex !== index && new Promise((resolve, reject) => {
			(this.els[ index ] || {})[ 'type' ] === CSTypes.QNA
				?
				(
					handleExecuteAfterUserLogin().then(() => {
						resolve();
					}).catch(error => {})
				)
				:
				resolve();
		}).then(() => {
			new Promise((resolve, reject) => {
				formDirty
					?
					handleOpenAlertLayer({
						description: '<span>선택 및 작성하신 내용을 잃게 됩니다.<br/>화면을 이동하겠습니까?</span>',
						confirm: true,
						callback: (confirmed) => {
							confirmed && resolve()
						}
					})
					: resolve()
			}).then(() => {
				Promise.all([
					handleChangeFormValue(`${field}.keyword`, null)
				]).then(() => {
					this.setState(update(this.state, {
						activeIndex: { $set: index },
						keyword: { $set: null },
						formDirty: { $set: false }
					}))
				});
			});
		});
	}

	resetKeyword() {
		let { actions: { handleChangeFormValue } } = this.props;

		let field = this.field;

		Promise.all([
			handleChangeFormValue(`${field}.keyword`, null)
		]).then(() => {
			this.setState(update(this.state, {
				keyword: { $set: null }
			}))
		});
	}

	getActiveIndex(type) {
		let { router: { query: {currentType} } } = this.props;

		return this.els.findIndex(item => item[ 'type' ] === String(type || currentType).toUpperCase());
	}

	updateFormDirty(dirty) {
		let { formDirty } = this.state;

		dirty !== formDirty && this.setState(update(this.state, { formDirty: { $set: dirty } }));
	}

	componentDidUpdate(prevProps, prevState) {
		let { router: { query: {currentType} } } = this.props;
		let { router: { query: {currentType:prevType} } } = prevProps;

		currentType !== prevType && this.setState(update(this.state, { activeIndex: { $set: this.getActiveIndex() } }))
	}

	componentDidMount() {
		let { activeIndex } = this.state;

		let index = this.getActiveIndex();


		(activeIndex !== index) && this.setState(update(this.state, { activeIndex: { $set: index } }))
	}

	render() {
		let { states, handleSubmit, actions } = this.props;
		let { activeIndex, keyword, formDirty } = this.state;

		let labels = this.els.reduce((target, item, index) => {
			target.push(
				<span>
					<span className="txt">
						{item[ 'label' ]}
					</span>
				</span>
			);
			return target;
		}, []);

		let tabWidth = ((this.els).length === 3) ? '380px' : '570px';

		return (
			<div className="cs-default-wrap">
				<div className="container">

					<div className="top">
						<h1>무엇을 도와드릴까요</h1>

						<form onSubmit={handleSubmit(this.onSubmit)}>
							{React.cloneElement(<CSSearch/>, {
								states,
								activeIndex,
								actions: {
									...actions,

									handleChangeSearch: this.onChangeSearch
								}
							})}
						</form>

						{React.cloneElement(<Tab/>, {
							activeIndex,
							labels,
							tabWidth: tabWidth,
							tabHeight: '50px',
							actions: {
								handleChange: this.onChangeIndex
							}
						})}
					</div>

					<div className="middle">

						{(this.els[ activeIndex ] || {})[ 'component' ] && React.cloneElement(this.els[ activeIndex ][ 'component' ], {
							keyword,
							formDirty,
							states,
							actions: {
								...actions,

								handleResetKeyword: this.resetKeyword,
								handleChangeTabFocus: this.changeTabFocus,
								handleUpdateFormDirty: this.updateFormDirty
							}
						})}
					</div>

				</div>
			</div>
		)
	}
}

const formName = 'cs-default';

const mapStateToProps = (state) => {
	return {
		states: {
			config: state.config,
			ui: state.ui,
			cs: state.cs,
			qna: state.qna,
			user: state.user,
			alarm: state.alarm,
			currentForm: state.form[ formName ]
		}
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			handleGetFAQCategoryInfoByPathname: (pathname) => dispatch(ActionFAQ.getFAQCategoryInfoByPathname(pathname)),
			handleRequestFAQCategories: () => dispatch(ActionFAQ.requestFAQCategories()),
			handleRequestFAQList: (params) => dispatch(ActionFAQ.requestFAQList(params)),
			handleUpdateFAQEvaluationByBoardId: (boardId, evaluation) => dispatch(ActionFAQ.updateFAQEvaluationByBoardId(boardId, evaluation)),
			handleUpdateFAQViewCountByBoardId: (boardId) => dispatch(ActionFAQ.updateFAQViewCountByBoardId(boardId)),

			handleGetQNABrowserType: () => dispatch(ActionQNA.getQNABrowserType()),
			handleRequestQNACategories: () => dispatch(ActionQNA.requestQNACategories()),
			handleRequestQNAOrders: () => dispatch(ActionQNA.requestQNAOrders()),
			handleRequestQNAList: (term, isReset) => dispatch(ActionQNA.requestQNAList(term, isReset)),
			handleCreateQNA: (formData) => dispatch(ActionQNA.createQNA(formData)),
			handleCreateQNAByBoardId: (boardId, formData) => dispatch(ActionQNA.createQNAByBoardId(boardId, formData)),
			handleRequestQNAByBoardId: (boardId, mode) => dispatch(ActionQNA.requestQNAByBoardId(boardId, mode)),
      handleRequestQNAByBoardIdForDelete: (boardId, mode) => dispatch(ActionQNA.requestQNAByBoardIdForDelete(boardId, mode)),
			handleCreateQNAByBoardIdSeq: (boardId, boardSeq, formData) => dispatch(ActionQNA.createQNAByBoardIdSeq(boardId, boardSeq, formData)),
			handleDeleteQNAByBoardId: (boardId, boardSeq) => dispatch(ActionQNA.deleteQNAByBoardId(boardId, boardSeq)),
			handleUpdateCSTalkConnect: (connected) => dispatch(ActionCS.updateCSTalkConnect(connected)),
			handleUpdateCSPopItem: (item, mode) => dispatch(ActionCS.updateCSPopItem(item, mode)),

			handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
			handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),

			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),
			handleUntouchField: (key) => dispatch(untouch(formName, key)),

			handleUpdateUIScroll: (targetY, easingType) => dispatch(ActionUI.updateUIScroll(targetY, easingType)),

			handleExecuteAfterUserLogin: () => dispatch(ActionCommon.executeAfterUserLogin()),
      handleUpdateAlarmQNAView: () =>
        dispatch(ActionAlarm.updateAlarmQNAView()),
		}
	}
};

export const getStaticProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		}
	}
}

export async function getStaticPaths() {
	//TODO 값 긁어와서 만들기

	const pathList = [
		'faq',
		'qna',
		'talk'
	];

	const paths = pathList.map(item => `/cs/${item}`)

	return {
		paths,
		fallback: true,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName
})(withRouter(CSDefault)));
