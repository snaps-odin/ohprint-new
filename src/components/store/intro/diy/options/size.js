

import React from 'react';
import update from 'react-addons-update';
import { Field } from 'redux-form';

import { getDeepValue } from 'utils/json';
import * as Validate from 'utils/validate';
import * as Normalize from 'utils/normalize';

import { InputField } from 'components/common/fields';

export default class StoreIntroDIYOptionPanelSize extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      pdfSize: {}
    };

    this.onBlur = this.onBlur.bind(this);

    this.setPDFSize = this.setPDFSize.bind(this);
  }

  onBlur(event, value) {
    let { states, actions, sizes, use10 } = this.props;
    let { currentForm } = states;
    let { handleChange } = actions;
    let { pageMinWidth, pageMaxWidth, pageMinHeight, pageMaxHeight } = sizes;
    let values = getDeepValue(currentForm, 'values');
    let productShapeType = values && ((this.props.states.currentForm.values.option.productShapeType || "") === "ROUND_MANUAL_SIZE" ||
      (this.props.states.currentForm.values.option.productShapeType || "") === "SQUARE_MANUAL_SIZE");

    let { millimeterWidth, millimeterHeight } = getDeepValue(currentForm, 'values.option') || {};

    let maxValues = [
      Math.min(pageMaxWidth, pageMaxHeight),
      Math.max(pageMaxWidth, pageMaxHeight)
    ];

    let minValues = [
      Math.min(pageMinWidth, pageMinHeight),
      Math.max(pageMinWidth, pageMinHeight)
    ];

    let name = (event.currentTarget.name || '').replace(/option./i, '');

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

  setPDFSize(millimeterWidth, millimeterHeight) {
    let maxSize = 5000;

    this.setState(update(this.state, {
      pdfSize: {
        $set: Math.max(millimeterWidth, millimeterHeight) > maxSize
          ?
          (
            (millimeterWidth > millimeterHeight)
              ?
              {
                width: maxSize,
                height: Math.round((maxSize * millimeterHeight) / millimeterWidth)
              }
              :
              {
                width: Math.round((maxSize * millimeterWidth) / millimeterHeight),
                height: maxSize
              }
          )
          :
          {
            width: millimeterWidth,
            height: millimeterHeight
          }
      }
    }));
  }


  render() {
    let { locked } = this.props;
    let { pdfSize } = this.state;
    let currentForm = this.props.states.currentForm;
    let values = getDeepValue(currentForm, 'values');
    let productShapeTypeValue = values && values.option.productShapeType;
    let productShapeType = values && ((this.props.states.currentForm.values.option.productShapeType || "") === "ROUND_MANUAL_SIZE" ||
      (this.props.states.currentForm.values.option.productShapeType || "") === "SQUARE_MANUAL_SIZE");



    return !productShapeType ? (
      <div className={`store-intro-diy-option-size-wrap ${locked ? 'locked' : ''}`}>
        <div className="top">
          <h4>사이즈</h4>
        </div>

          <ul className="middle">
            <li>
              <Field name={`option.millimeterWidth`}
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
              <Field name={`option.millimeterHeight`}
                     type="text"
                     className="box"
                     placeholder="세로 입력하세요."
                     onBlur={this.onBlur}
                     component={InputField}
                     validate={[ Validate.required ]}
                     normalize={Normalize.onlyNumber()}/>
            </li>
          </ul>



        {/**
         <div className="bottom">
         PDF 제작 사이즈(mm) : <em>{pdfSize[ 'width' ]} X {pdfSize[ 'height' ]}</em>
         </div>
         */}
      </div>
    )

      :
      <div className={`store-intro-diy-option-engrave-wrap`}>
        <div className="top">
          <h4>사이즈</h4>
        </div>

        <div className="bottom">
          <Field name={`option.diameter`}
                 type="text"
                 className="box"
                 placeholder={(productShapeTypeValue === "ROUND_MANUAL_SIZE" ? "지름을 입력하세요." : "가로 사이즈를 입력하세요.(정사각형)")}
                 onBlur={this.onBlur}
                 component={InputField}
                 validate={[ Validate.required ]}
                 normalize={Normalize.onlyNumber()}/>
        </div>
      </div>
  }
}
