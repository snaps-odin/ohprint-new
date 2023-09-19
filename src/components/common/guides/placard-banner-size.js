

import React from 'react';
import { connect } from 'react-redux';
import { change, Field, reduxForm } from 'redux-form';

import * as Validate from 'utils/validate';
import { getDeepValue } from 'utils/json';
import * as Normalize from 'utils/normalize';

import { InputField } from 'components/common/fields';

class GuidePlaCardBannerSize extends React.Component {
	constructor(...args) {
		super(...args);

		this.onBlur = this.onBlur.bind(this);
	}

	onBlur(event, value) {

		let { states: { currentForm } } = this.props;

		let { width, height } = getDeepValue(currentForm, 'values.real') || {};
		let maxValues = [ 3000, 25000 ];
		let minValues = [ 200, 200 ];

		let name = (event.currentTarget.name || '').replace(/real./, '');
		let ownerValue = Math.ceil(Math.max((value || 0), minValues[ 0 ]) * .1) * 10;
		let otherValue = (name || '').match(/height/i) ? width : height;

		if (value >= maxValues[ 1 ]) {
			ownerValue = maxValues[ 1 ];

			(otherValue >= maxValues[ 0 ]) && (otherValue = maxValues[ 0 ]);
		} else if (value >= maxValues[ 0 ] && value < maxValues[ 1 ]) {
			(
				value > maxValues[ 0 ] &&
				otherValue >= maxValues[ 0 ]
			) && (otherValue = maxValues[ 0 ]);
		}

		window.setTimeout(() => {
			switch (name) {
				case 'width':
					this.changeRealSize(ownerValue, otherValue);
					this.changePDFSize(ownerValue, otherValue);
					break;

				case 'height':
					this.changeRealSize(otherValue, ownerValue);
					this.changePDFSize(otherValue, ownerValue);
					break;
			}
		}, 0);
	}

	changeRealSize(width, height) {
		let { actions: { handleChangeFormValue } } = this.props;

		handleChangeFormValue('real', { width: width, height: height });
	}

	changePDFSize(width, height) {

		let { actions: { handleChangeFormValue } } = this.props;

		let maxSize = 5000;

		let size = Math.max(width, height) > maxSize
			?
			(
				(width > height)
					?
					{
						width: maxSize, // 5000,
						height: Math.round((maxSize * height) / width)
					}
					:
					{
						width: Math.round((maxSize * width) / height),
						height: maxSize
					}
			)
			:
			{
				width: width,
				height: height
			};

		handleChangeFormValue('pdf', {
			width: `${Math.ceil(size[ 'width' ] * .1) * 10 || 0}mm`,
			height: `${Math.ceil(size[ 'height' ] * .1) * 10 || 0}mm`
		});
	}

	render() {
		let { width } = this.props;

		let isSmall = width <= 800;

		return (
			<div className="guide-placard-banner-size-wrap">
				<div className="top">
					<h3>5미터 이상 큰 현수막도 만들 수 있어요.</h3>
					<p>
						<em>5000mm 이상 사이즈</em>를 제작하실 경우 하단 입력 창에 실제 원하는 상품 사이즈 정보를 입력해 주세요.<br/>
						<em className="yellow">AI</em>,&nbsp;
						<em className="pink">PDF</em>에서 작업할 수 있는 사이즈 정보를 확인할 수 있어요.
					</p>
				</div>

				<ul className={`bottom ${isSmall ? 'small' : ''}`}>
					<li>
						<div className="top">
							원하는 현수막 사이즈 (mm)
						</div>
						<div className="bottom">
							<dl>
								<dd>
									<Field name="real.width"
									       type="text"
									       className="box"
									       placeholder="가로 입력하세요"
									       onBlur={this.onBlur}
									       component={InputField}
									       validate={[ Validate.required ]}
									       normalize={Normalize.onlyNumber()}/>
								</dd>
								<dd className="x">X</dd>
								<dd>
									<Field name="real.height"
									       type="text"
									       className="box"
									       placeholder="세로 입력하세요"
									       onBlur={this.onBlur}
									       component={InputField}
									       validate={[ Validate.required ]}
									       normalize={Normalize.onlyNumber()}/>
								</dd>
							</dl>
						</div>
					</li>
					<li className="arrow">
						{!isSmall && (
							<span className="icon icon-arrow-2821"/>
						)}
					</li>
					<li>
						<div className="top">
							제작 파일 사이즈 (<em className="yellow">AI</em>, <em className="pink">PDF</em>)
						</div>
						<div className="bottom">
							<dl>
								<dd>
									<Field name="pdf.width"
									       className="box blue"
									       disabled={true}
									       placeholder="0mm"
									       component={InputField}/>
								</dd>
								<dd className="x">X</dd>
								<dd>
									<Field name="pdf.height"
									       className="box blue"
									       disabled={true}
									       placeholder="0mm"
									       component={InputField}/>
								</dd>
							</dl>
						</div>
					</li>
				</ul>
			</div>
		)
	}
}

const formName = 'guide-placard-banner-size';

const mapStateToProps = (state) => {
	return {
		states: {
			currentForm: state.form[ formName ]
		}
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value))
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName,
	initialValues: {
		real: {
			width: null,
			height: null
		},
		pdf: {
			width: '0mm',
			height: '0mm'
		}
	}
})(GuidePlaCardBannerSize));
