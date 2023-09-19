

import React from 'react';
import { connect } from 'react-redux';
import { change, Field, reduxForm } from 'redux-form';

import { ActionProduct, ActionBBS } from 'actions/index';
import { getHeight } from 'utils/dom';
import * as Validate from 'utils/validate';
import * as Normalize from 'utils/normalize';

import { SelectField, TextAreaField } from 'components/common/fields';

class DesignQNA extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			data: null,
			ready: false
		};

		this.onChangeProductGroupCode = this.onChangeProductGroupCode.bind(this);
		this.onClickClose = this.onClickClose.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChangeProductGroupCode(event, value) {
		let { actions: { handleChangeFormValue, handleRequestDesignQNAFilterByProductGroupCode } } = this.props;

		handleRequestDesignQNAFilterByProductGroupCode(value)
			.then((result) => {
				[ 'jobCodes', 'themeCodes' ].map(field => {
					handleChangeFormValue(field, null);
				});

				this.setState({ data: result });
			});
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	onSubmit(values) {
		let { productGroupCode, jobCodes, themeCodes, contents } = values;
		let { states, actions, reset } = this.props;
		let { product: { productGroups } } = states;
		let { handleCreateDesignQNA, handleOpenAlertLayer, handleCloseContentsLayer } = actions;
		let jobGroupCodes = this.getOptionsByKeyName('jobCodes');
		let themeGroupCodes = this.getOptionsByKeyName('themeCodes');

		let product = productGroups.filter(item => item[ 'value' ] === productGroupCode)[ 0 ][ 'label' ];
		let job = jobCodes ? jobGroupCodes.filter(item => item[ 'value' ] === jobCodes)[ 0 ][ 'label' ] : (jobGroupCodes.length > 0 ? jobGroupCodes[ 0 ][ 'label' ] : null);
		let theme = themeCodes ? themeGroupCodes.filter(item => item[ 'value' ] === themeCodes)[ 0 ][ 'label' ] : (themeGroupCodes.length > 0 ? themeGroupCodes[ 0 ][ 'label' ] : null);

		handleCreateDesignQNA({ product, job, theme, contents }).then(() => {
			Promise.all([
				handleOpenAlertLayer({
					description: '완료 되었습니다.'
				})
			]).then(() => {
				handleCloseContentsLayer();

				reset();
			});
		}).catch(error => {
			Promise.all([
				handleOpenAlertLayer({
					description: error
				})
			]).then(() => {
				handleCloseContentsLayer();
			})
		});
	}

	getOptionsByKeyName(keyName) {
		let { data } = this.state;

		let info = data.filter(item => String(item[ 'keyName' ]).includes(keyName))[ 0 ];
		let result = info && info[ 'child' ].map(child => {return { label: child[ 'label' ], value: child[ 'value' ] }});
		result = (result && result.length > 0) ? [ { label: '전체', value: '' } ].concat(result) : result;

		return result;
	}

	componentDidMount() {
		let { states: { product }, actions } = this.props;
		let { handleChangeFormValue, handleRequestDesignQNAFilterByProductGroupCode, handleOpenAlertLayer, handleCloseContentsLayer, handleUpdateLayer } = actions;

		let code = (product[ 0 ] || {})[ 'value' ];

		handleRequestDesignQNAFilterByProductGroupCode(code).then((result) => {
			handleChangeFormValue('productGroupCode', code);

			this.setState({ data: result, ready: true });
		}).then(() => {
			handleUpdateLayer();
		}).catch(error => {
			Promise.all([
				handleOpenAlertLayer({
					description: error
				})
			]).then(() => {
				handleCloseContentsLayer();
			})
		});
	}

	render() {
		let { states: { ui: { view: { height } }, product: { productGroups } }, handleSubmit, valid } = this.props;
		let { ready, data } = this.state;
		let jobCodes = data ? this.getOptionsByKeyName('jobCodes') : null;
		let themeCodes = data ? this.getOptionsByKeyName('themeCodes') : null;

		let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
			? height - (50 + 60 + getHeight(this.bottom))
			: null;

		return ready &&
			(
				<div className="design-qna-layer-wrap popup">
					<div className="container">
						<form onSubmit={handleSubmit(this.onSubmit)}>
							<div className="top">
								<h2>디자인 의견 남기기</h2>
							</div>

							<div className="middle" style={middleHeight ? { height: `${middleHeight}px` } : null}>
								<div className="inner" ref={(c) => {this.inner = c;}}>
									<div className="top">
										<h3>찾으시는 디자인이 없으신가요?</h3>
										<span>
										당신이 생각하는 디자인에 대해 남겨주세요.<br/>
										다양한 의견을 참고하여 더욱더 좋은 디자인을 만들어 드리겠습니다.
									</span>
									</div>

									<table border={0}>
										<caption><span className="blind">받으시는분 정보</span></caption>
										<colgroup>
											<col style={{ width: '120px' }}/>
											<col style={{ width: '320px' }}/>
										</colgroup>
										<tbody>
										<tr>
											<th>상품</th>
											<td>
												<Field name="productGroupCode"
												       className="box"
												       placeholder="명함"
												       width={140}
												       height={206}
												       options={productGroups || []}
												       onChange={this.onChangeProductGroupCode}
												       component={SelectField}
												       validate={[ Validate.required ]}/>
											</td>
										</tr>
										<tr>
											<th>직업군</th>
											<td>
												<Field name="jobCodes"
												       placeholder="전체"
												       className="box"
												       width={140}
												       height={206}
												       options={jobCodes}
												       disabled={jobCodes.length <= 0}
												       component={SelectField}/>
											</td>
										</tr>
										<tr>
											<th>스타일 & 테마</th>
											<td>
												<Field name="themeCodes"
												       placeholder="전체"
												       className="box"
												       width={140}
												       height={206}
												       options={themeCodes}
												       disabled={themeCodes.length <= 0}
												       component={SelectField}/>
											</td>
										</tr>
										</tbody>
										<tfoot>
										<tr>
											<td colSpan={2}>
												<Field name="contents"
												       className="box"
												       placeholder="원하는 디자인에 대해 자세한 의견을 남겨 주세요."
												       maxLength={500}
												       showLength={true}
												       component={TextAreaField}
												       validate={[ Validate.required ]}
												       normalize={Normalize.maxLength(500)}/>
											</td>
										</tr>
										</tfoot>
									</table>
								</div>
							</div>

							<div className="bottom" ref={(c) => {this.bottom = c;}}>
								<button type="button" className="btn-white-medium" onClick={this.onClickClose}>취소</button>
								<button type="submit" className={`btn-${valid ? 'blue' : 'gray'}-medium`}>의견 보내기</button>
							</div>
						</form>
					</div>
					<button type="button" className="icon icon-close-w-1414 close" onClick={this.onClickClose}/>
				</div>
			)
	}
}

const formName = 'layer-design-qna';

const mapStateToProps = (state, ownerProps) => {
	return {
		states: {
			...ownerProps.states,

			bbs: state.bbs,
			product: state.product,
			currentForm: state.form[ formName ]
		},
		initialValues: {}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),

			handleRequestDesignQNAFilterByProductGroupCode: (productGroupCode) => dispatch(ActionBBS.requestDesignQNAFilterByProductGroupCode(productGroupCode)),
			handleCreateDesignQNA: (data) => dispatch(ActionBBS.createDesignQNA(data))
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName,
	enableReinitialize: true
})(DesignQNA));