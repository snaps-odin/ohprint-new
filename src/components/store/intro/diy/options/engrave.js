

import React from 'react';
import { Field } from 'redux-form';

import { toCash } from 'utils/format';
import { getDeepValue } from 'utils/json';
import * as Normalize from 'utils/normalize';

import { InputField } from 'components/common/fields';

export default class StoreIntroDIYOptionPanelEngrave extends React.Component {
	constructor(...args) {
		super(...args);
	}

	normalize(value, previousValue) {
		return value.replace(/[^a-zA-Z.,]/gi, '').toUpperCase().slice(0, 5);
	}

	shouldComponentUpdate(nextProps, nextState) {
		let { states: { currentForm: nextForm }, prices: nextPrices } = nextProps;
		let { states: { currentForm }, prices: currentPrices } = this.props;

		return !(
			Object.is(JSON.stringify(getDeepValue(nextForm, 'values')), JSON.stringify(getDeepValue(currentForm, 'values'))) &&
			Object.is(JSON.stringify(nextPrices), JSON.stringify(currentPrices))
		)
	}

	render() {
		let { prices } = this.props;
		let { engravePrice } = prices || {};

		return (
			<div className={`store-intro-diy-option-engrave-wrap`}>
				<div className="top">
					<h4>{`이니셜 각인 (+${toCash(engravePrice)}원)`}</h4>
				</div>

				<div className="bottom">
					<Field name={`option.displayText`}
					       type="text"
					       className="box"
					       placeholder="영문, 쉼표, 온점만 입력 가능"
					       maxLength={5}
					       showLength={true}
					       component={InputField}
					       normalize={this.normalize}/>
				</div>
			</div>
		)
	}
}