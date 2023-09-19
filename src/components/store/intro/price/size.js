

import React from 'react';
import { Field } from 'redux-form';

import { getDeepValue } from 'utils/json';
import * as Validate from 'utils/validate';
import * as Normalize from 'utils/normalize';

import { InputField } from 'components/common/fields';

export default class StoreIntroPriceSize extends React.Component {
	constructor(...args) {
		super(...args);

		this.onBlur = this.onBlur.bind(this);
	}

	onBlur(event, value) {
		let { states, actions, sizes, use10 } = this.props;
		let { currentForm } = states;
		let { handleChange } = actions;
		let { pageMinWidth, pageMaxWidth, pageMinHeight, pageMaxHeight } = sizes;
		let currentValues = getDeepValue(currentForm, `values.price`) || {};

		let { millimeterWidth, millimeterHeight } = currentValues;

    let productShapeType = (this.props.states.currentForm.values.price.productShapeType || "") === "ROUND_MANUAL_SIZE" ||
      (this.props.states.currentForm.values.price.productShapeType || "") === "SQUARE_MANUAL_SIZE";


		let maxValues = [
			Math.min(pageMaxWidth, pageMaxHeight),
			Math.max(pageMaxWidth, pageMaxHeight)
		];

		let minValues = [
			Math.min(pageMinWidth, pageMinHeight),
			Math.max(pageMinWidth, pageMinHeight)
		];

		let name = (event.currentTarget.name || '').replace(`price.`, '');

		let ownerValue = Math.max((value || 0), minValues[ 0 ]);
		use10 && (ownerValue = Math.ceil(ownerValue * .1) * 10);

		let otherValue = (name || '').match(/height/i) ? millimeterWidth : millimeterHeight;

		if (value >= maxValues[ 1 ]) {
			ownerValue = maxValues[ 1 ];

			(otherValue >= maxValues[ 0 ]) && (otherValue = maxValues[ 0 ]);
		} else if (value >= maxValues[ 0 ] && value < maxValues[ 1 ]) {
			(
				value > maxValues[ 0 ] &&
				otherValue >= maxValues[ 0 ]
			) && (otherValue = maxValues[ 0 ]);
		}

    if(productShapeType){
      handleChange(ownerValue, 'productShapeType');
    }



    switch (name) {
			case 'millimeterWidth':
				handleChange(ownerValue, otherValue);
				break;

			case 'millimeterHeight':
				handleChange(otherValue, ownerValue);
				break;
		}
	}

  render() {
		let { locked } = this.props;
		let currentForm = this.props.states.currentForm;
		let values = getDeepValue(currentForm, 'values');
		let productShapeTypeValue = values && values.price.productShapeType;
    let productShapeType = values && ((this.props.states.currentForm.values.price.productShapeType || "") === "ROUND_MANUAL_SIZE" ||
      (this.props.states.currentForm.values.price.productShapeType || "") === "SQUARE_MANUAL_SIZE");


		return !productShapeType ? (
			<div className={`store-intro-price-size-wrap ${locked ? 'locked' : ''}`}>
				<div className="left">
					<h4>사이즈(mm)</h4>
				</div>

				<ul className="right">
					<li>
						<Field name={`price.millimeterWidth`}
						       type="text"
						       className="box"
						       placeholder="가로 입력하세요."
						       onBlur={this.onBlur}
						       component={InputField}
						       validate={[ Validate.required ]}
						       normalize={Normalize.onlyNumber()}/>
					</li>
					<li className="x">X</li>
					<li>
						<Field name={`price.millimeterHeight`}
						       type="text"
						       className="box"
						       placeholder="세로 입력하세요."
						       onBlur={this.onBlur}
						       component={InputField}
						       validate={[ Validate.required ]}
						       normalize={Normalize.onlyNumber()}/>
					</li>
				</ul>
			</div>
		)

      :
      (
        <div className={`store-intro-price-size-wrap ${locked ? 'locked' : ''}`}>
          <div className="left">
            <h4>사이즈(mm)</h4>
          </div>

          <ul className="right">
            <li>
            <Field name={`price.diameter`}
                   type="text"
                   className="box"
                   placeholder={(productShapeTypeValue === "ROUND_MANUAL_SIZE" ? "지름을 입력하세요." : "가로 사이즈를 입력하세요.(정사각형)")}
                   onBlur={this.onBlur}
                   component={InputField}
                   validate={[ Validate.required ]}
                   normalize={Normalize.onlyNumber()}/>
            </li>
          </ul>
        </div>
      )
	}
}
