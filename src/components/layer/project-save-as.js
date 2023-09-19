

import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { ActionBag, ActionEditor, ActionCart } from 'actions/index';
import { goEditor } from 'utils/url';
import { InputField } from 'components/common/fields';
import * as Validate from 'utils/validate';

class ProjectSaveAs extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickClose = this.onClickClose.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	onSubmit(values) {
		let { options: { type, item }, actions } = this.props;
		let { handleUpdateEditor } = actions;

		actions[ `handleCreate${type === 'bag' ? 'Bag' : 'Cart'}SaveAs` ](item[ 'projectCode' ], values[ 'projectName' ]).then(result => {
			Promise.all([
				handleUpdateEditor({
					productCode: item[ 'productCode' ],
					projectCode: result[ 'projectCode' ],
					templateCode: item[ 'templateCode' ]
				}, item[ 'templateUseType' ])
			]).then(() => {
				goEditor();
			});
		});
	}

	render() {
		let { handleSubmit, valid, submitting } = this.props;

		return (
			<div className="save-as-layer-wrap">
				<div className="container">
					<form onSubmit={handleSubmit(this.onSubmit)}>
						<div className="top">
							<h1>
								저장함에 다른 이름으로 저장 후<br/>
								편집을 진행할 수 있습니다.
							</h1>

							<Field name="projectName"
							       type="text"
							       className="box"
							       width={300}
							       placeholder="프로젝트명"
							       maxLength={20}
							       component={InputField}
							       validate={[ Validate.required ]}/>
						</div>

						<div className="bottom">
							<button type="submit"
							        className={`btn-${valid ? 'black' : 'gray'}-small`}
							        disabled={submitting}>저장 후 편집 시작하기
							</button>
						</div>
					</form>
				</div>
				<button type="button" className="icon-close-1414 close" onClick={this.onClickClose}/>
			</div>
		)
	}
}

const formName = 'layer-project-save-as';

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleCreateBagSaveAs: (projectCode, projectName) => dispatch(ActionBag.createBagSaveAs(projectCode, projectName)),
			handleCreateCartSaveAs: (projectCode, projectName) => dispatch(ActionCart.createCartSaveAs(projectCode, projectName)),

			handleUpdateEditor: (data, templateUseType) => dispatch(ActionEditor.updateEditor(data, templateUseType))
		}
	}
};

module.exports = connect(null, mapDispatchToProps)(reduxForm({
	form: formName
})(ProjectSaveAs));