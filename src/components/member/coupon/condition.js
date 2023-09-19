import React from "react";
import { Field } from "redux-form";

import { InputField, SelectField } from "components/common/fields";

export default class CouponCondition extends React.Component {
  constructor(props) {
    super(props);

    this.type = props.index === 2 ? "상품권" : "쿠폰";
  }

  componentDidMount() {
    let {
      index,
      actions: { handleUntouchField, handleChangeFormValue },
    } = this.props;

    if (index === 0) {
      handleChangeFormValue("couponNumber", null);
      handleUntouchField("couponNumber");
    }
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const afterIndex = nextProps.index;
    const isChanged = afterIndex === 0 || afterIndex === 2;

    if (isChanged) {
      this.type = nextProps.index === 2 ? "상품권" : "쿠폰";
    }

    if (afterIndex !== this.props.index) {
      nextProps.reset();
    }

    return isChanged;
  }

  render() {
    let { submitting } = this.props;
    const type = this.type;

    return (
      <div className="coupon-condition-wrap">
        <span>
          <div className="label">
            <label>{`${type} 등록`}</label>
          </div>
          <span>
            <Field name="couponNumber" className="box" placeholder={`오프린트미 ${type}번호를 입력하세요.`} component={InputField} />
          </span>
          <div>
            <button type="submit" className="btn-blue-medium" disabled={submitting}>
              등록
            </button>
          </div>
        </span>
      </div>
    );
  }
}
