

import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as Validate from 'utils/validate';

import { CheckBoxField } from 'components/common/fields';

class TemplateConfirm extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickClose = this.onClickClose.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onClickClose() {
		let { actions: { handleCloseContentsLayer }, options: { callback } } = this.props;

		Promise.all([
			callback && callback(false)
		]).then(() => {
			handleCloseContentsLayer();
		});
	}

	onSubmit(values) {
		let { actions: { handleCloseContentsLayer }, options: { callback } } = this.props;

		Promise.all([
			callback && callback(true)
		]).then(() => {
			handleCloseContentsLayer();
		});
	}

	render() {
		let { handleSubmit, valid } = this.props;

		return (
			<div className="template-confirm-layer-wrap popup">
				<div className="container">
					<form onSubmit={handleSubmit(this.onSubmit)}>
						<div className="middle">
							<h3>
								편집 화면과 동일하게 인쇄됩니다.<br/>
								오탈자, 색상, 이미지 등<br/>
								편집 내용을 모두 확인하셨나요?
							</h3>

							{/**
							 <p>
							 디자인은 편집 화면과 동일하게 출력 됩니다.
							 </p>
							 */}

							{/**
							 <Field name={'checkYN'}
							 label="네, 모두 확인하였습니다."
							 component={CheckBoxField}
							 validate={[ Validate.required ]}/>
							 */}
						</div>

						<div className="bottom">
							<button type="button"
							        className={`btn-white`}
							        onClick={this.onClickClose}>취소
							</button>

							<button type="submit"
							        className={`btn-${valid ? 'black' : 'gray'}`}>확인
							</button>
						</div>
					</form>
				</div>

				<button type="button"
				        className="icon-close-1414 close"
				        onClick={this.onClickClose}/>
			</div>
		)
	}
}

const formName = 'layer-template-confirm';

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions
		}
	}
};

module.exports = connect(null, mapDispatchToProps)(reduxForm({
	form: formName
})(TemplateConfirm));