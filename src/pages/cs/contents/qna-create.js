

import React from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';
import { untouch, Field, reduxForm, change } from 'redux-form';

import { LayerTypes, CSTypes } from 'constants/index';
import { toDate } from 'utils/format';
import { addDomain } from 'utils/url';
import { getDeepValue } from 'utils/json';
import * as Validate from 'utils/validate';
import * as Normalize from 'utils/normalize';

import { InputField, CheckBoxField, SelectField, TextAreaField, FileField } from 'components/common/fields';
import ThumbnailProduct from 'components/common/thumbnail-product';

class CSDefaultContentQNACreator extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			timestamp: new Date().getTime(),
			categories: [],
			orders: [],
		};

		this.onChangeCategoryMaster = this.onChangeCategoryMaster.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	getCategoryMaster() {
		let { categories } = this.state;

		return categories.reduce((target, item, index) => {
			let { categoryName, categoryCode } = item;
			target.push({ label: categoryName, value: categoryCode });

			return target;
		}, []);
	}

	getCategorySlave() {
		let { states } = this.props;
		let { currentForm } = states;
		let { categories } = this.state;

		let categoryCodeMaster = getDeepValue(currentForm, 'values.category.master') || null;
		let categoryMaster = categories.find((category) => category[ 'categoryCode' ] === categoryCodeMaster);

		return !!categoryMaster
			? categoryMaster[ 'child' ].reduce((target, item, index) => {
				let { categoryName, categoryCode } = item;
				target.push({ label: categoryName, value: categoryCode });

				return target;
			}, [])
			: [];
	}

	onChangeCategoryMaster(event, value) {
		let { actions: { handleChangeFormValue, handleUnTouchFormValue } } = this.props;

		handleChangeFormValue('category.slave', null);
		handleUnTouchFormValue('category.slave');
	}

	getOrders() {
		let { states: { config: { url: { cdn: cdnUrl } } } } = this.props;
		let { orders } = this.state;

		return orders.reduce((target, item, index) => {
			target.push({
				label: (
					<span>
						{React.cloneElement(<ThumbnailProduct/>, {
							imageUrl: addDomain(cdnUrl, item[ 'thumnailImagePath' ]),
              paperCode: item[ 'paperCode' ],
							productCode: item[ 'prodCode' ],
							frameCode: item[ 'frameCode' ],
							frameOptionCode: item[ 'frameOptionCode' ],
							colorCode: item[ 'frameColorCode' ],
							directionType: item[ 'thumbnailDirectionType' ],
							skinVersion: item[ 'skinVersion' ],
							type: 'defaults'
						})}
						<em>{`${item[ 'prodName' ]} [${item[ 'projName' ]}]`}</em>
					</span>
				),
				value: item[ 'projCode' ]
			});

			return target;
		}, []);
	}

	onSubmit(values) {
		let { states, actions, reset } = this.props;
		let { user: { loggedIn } } = states;
		let { handleGetQNABrowserType, handleCreateQNA, handleOpenAlertLayer, handleChangeType, handleOpenContentsLayer } = actions;

		let selectedOrder = this.getSelectedOrder(values[ 'order' ]);
		let selectedFiles = values[ 'selectedFiles' ];
		let isErrorFiles = selectedFiles.find(file => file[ 'error' ]);

		return new Promise((resolve, reject) => {
			return !isErrorFiles
				? new Promise((resolve, reject) => {
					return loggedIn
						? new Promise((resolve, reject) => {
							let formData = new FormData();

							formData.append('boardCategoryCode', values[ 'category' ][ 'slave' ]);
							formData.append('orderCode', selectedOrder ? selectedOrder[ 'orderCode' ] : '');
							formData.append('projectCode', selectedOrder ? selectedOrder[ 'projCode' ] : '');
							formData.append('smsAgreeYN', values[ 'smsAgreeYN' ] ? 'Y' : 'N');
							formData.append('smsRejectionStartTime', '');
							formData.append('smsRejectionEndTime', '');
							formData.append('osType', handleGetQNABrowserType());
							formData.append('applicationVersion', '');
							formData.append('osVersion', '');
							formData.append('qnaEmail', values[ 'qnaEmail' ]);
							formData.append('qnaPhone', values[ 'qnaPhone' ]);
							formData.append('title', values[ 'title' ]);
							formData.append('contents', values[ 'contents' ]);

							selectedFiles.length > 0 && selectedFiles.map(file => {
								file && formData.append('files', file[ 'file' ]);
							});

							handleCreateQNA(formData).then(() => {
								handleOpenAlertLayer({
									description: '<span>1:1문의가<br/>성공적으로 접수 되었습니다.</span>',
									confirmLabel: '나의 문의 내역 보기',
									callback: () => {
										handleChangeType(CSTypes.LIST);
									}
								});

								reset();
								this.setState({ timestamp: new Date().getTime() });
								resolve();
							});
						})
						:
						Promise.all([
							handleOpenAlertLayer({
								description: '로그인이 필요한 서비스입니다.',
								confirm: true,
								confirmLabel: '로그인',
								callback: (confirmed) => {
									confirmed && handleOpenContentsLayer(LayerTypes.LOGIN);
								}
							})
						]).then(() => {
							resolve();
						});
				})
				: resolve();
		});
	}

	getSelectedOrder(projectCode) {
		let { orders } = this.state;

		return orders.find((item) => item[ 'projCode' ] === projectCode);
	}

	shouldComponentUpdate(nextProps, nextState) {
		let { active: currentActive, reset: currentReset, submitting: currentSubmitting, valid: currentValid, updated: currentUpdated, states: { currentForm } } = this.props;
		let { active: nextActive, reset: nextReset, submitting: nextSubmitting, valid: nextValid, updated: nextUpdated, states: { currentForm: nextForm } } = nextProps;

		return !(
			Object.is(nextActive, currentActive) &&
			Object.is(nextReset, currentReset) &&
			Object.is(nextSubmitting, currentSubmitting) &&
			Object.is(nextValid, currentValid) &&
			Object.is(nextUpdated, currentUpdated) &&
			Object.is(JSON.stringify(nextForm), JSON.stringify(currentForm)) &&
			Object.is(JSON.stringify(nextState), JSON.stringify(this.state))
		)
	}

	componentDidMount() {
		let { actions: { handleRequestQNACategories, handleRequestQNAOrders } } = this.props;

		Promise.all([
			handleRequestQNACategories(),
			handleRequestQNAOrders()
		]).then(results => {
			this.setState(update(this.state, {
				categories: { $set: results[ 0 ] },
				orders: { $set: results[ 1 ] }
			}));
		});
	}

	componentDidUpdate(prevProps, prevState) {
		let { active: prevActive, dirty: prevDirty } = prevProps;
		let { actions: { handleRequestQNAOrders, handleUpdateFormDirty, handleChangeFormValue }, dirty: currentDirty, active: currentActive, updated, reset } = this.props;

		Promise.all([
			currentDirty !== prevDirty && handleUpdateFormDirty(currentDirty)
		]).then(() => {
			return updated && currentDirty && !currentActive && Promise.all([
					handleChangeFormValue('files', null),
					handleChangeFormValue('selectedFiles', null),
					this.setState({ timestamp: new Date().getTime() })
				]).then(() => {
					reset();
				});
		}).then(() => {
			(!prevActive && currentActive) && handleRequestQNAOrders().then(result => {
				this.setState(update(this.state, {
					orders: { $set: result }
				}));
			});
		})
	}

	render() {
		let { states, actions, active, handleSubmit, submitting, valid } = this.props;
		let { handleChangeFormValue } = actions;
		let { currentForm } = states;
		let { timestamp, orders } = this.state;

		let disableCategorySlave = !getDeepValue(currentForm, 'values.category.master');

		return (
			<div className={`create ${active ? '' : 'lock'}`} ref={(c) => {this.scope = c;}}>
				<form onSubmit={handleSubmit(this.onSubmit)}>
					<table>
						<colgroup>
							<col style={{ width: '160px' }}/>
							<col style={{ width: '326px' }}/>
							<col style={{ width: '654px' }}/>
						</colgroup>
						<tbody>
						<tr>
							<td className="tit">문의유형 <em>*</em></td>
							<td>
								<Field name="category.master"
								       width={320}
								       height={300}
								       className="box"
								       placeholder="문의유형을 선택해 주세요."
								       options={this.getCategoryMaster()}
								       onChange={this.onChangeCategoryMaster}
								       component={SelectField}
								       validate={[ Validate.required ]}/>
							</td>
							<td>
								<Field name="category.slave"
								       width={320}
								       height={300}
								       className="box"
								       placeholder="세부선택"
								       disabled={disableCategorySlave}
								       options={this.getCategorySlave()}
								       component={SelectField}
								       validate={[ Validate.required ]}/>
							</td>
						</tr>

						{orders.length > 0 && (
							<tr>
								<td className="tit">주문상품</td>
								<td colSpan={2} className="order">
									<Field name="order"
									       placeholder={orders.length ? '문의하실 주문내역을 선택해 주세요.' : '최근 1개월 내에 주문내역이 없습니다.'}
									       width={320}
									       height={300}
									       className="box"
									       stepHeight={50}
									       options={this.getOrders()}
									       component={SelectField}/>
								</td>
							</tr>
						)}

						<tr>
							<td className="tit">연락처</td>
							<td colSpan={2}>
								<div>
									<Field type="text"
									       name="qnaPhone"
									       className="box small"
									       placeholder="연락처를 입력해 주세요."
									       component={InputField}
									       validate={[ Validate.phoneNumber ]}/>
								</div>
								<div className="checkbox">
									<Field name="smsAgreeYN"
									       label="답변완료 시 SMS알림"
									       component={CheckBoxField}/>
								</div>
							</td>
						</tr>
						<tr>
							<td className="tit">문의제목 <em>*</em></td>
							<td colSpan={2}>
								<Field type="text"
								       name="title"
								       className="box large"
								       placeholder="제목을 입력해 주세요."
								       maxLength={25}
								       showLength={true}
								       component={InputField}
								       validate={[ Validate.required ]}/>
							</td>
						</tr>
						<tr>
							<td className="tit">문의내용 <em>*</em></td>
							<td colSpan={2}>
								<Field name="contents"
								       placeholder="문의하실 내용을 입력해 주세요."
								       className="box"
								       maxLength={2000}
								       showLength={true}
								       component={TextAreaField}
								       validate={[ Validate.required ]}
								       normalize={Normalize.maxLength(2000)}/>
							</td>
						</tr>
						<tr>
							<td className="files" colSpan={3}>
								<Field key={`files-${timestamp}`}
								       name="files"
								       id={`files-${timestamp}`}
								       multiple={true}
								       accept="image/*"
								       maxFileLength={4}
								       maxFileSize={5}
								       handleChangeFormValue={handleChangeFormValue}
								       component={FileField}/>
							</td>
						</tr>
						<tr>
							<td colSpan={3}>
								<div className="btns">
									<button type="submit"
									        className={`btn-${valid ? 'blue' : 'gray'}-medium`}
									        disabled={submitting}>등록하기
									</button>
								</div>
							</td>
						</tr>
						</tbody>
					</table>
				</form>
			</div>
		)
	}
}

const formName = 'cs-default-qna-create';

const mapStateToProps = (state, ownerProps) => {
	let { user: { userCellPhoneNumber, userEmail } } = ownerProps.states;

	return {
		states: {
			...ownerProps.states,

			currentForm: state.form[ formName ]
		},
		initialValues: {
			category: {
				master: null,
				slave: null
			},
			order: null,
			qnaPhone: !Validate.isPhoneNumber(userCellPhoneNumber) ? null : userCellPhoneNumber,
			qnaEmail: userEmail || null,
			title: null,
			contents: null,
			files: null,
			selectedFiles: []
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleUnTouchFormValue: (key) => dispatch(untouch(formName, key)),
			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value))
		}
	}
};

CSDefaultContentQNACreator = reduxForm({
	form: formName,
	enableReinitialize: true
})(CSDefaultContentQNACreator);

export default connect(mapStateToProps, mapDispatchToProps)(CSDefaultContentQNACreator)
