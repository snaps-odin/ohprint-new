import React from "react";
import { Field } from "redux-form";

import { InputCalendarField } from "components/common/fields";
import { getDatasetByName } from "utils/dom";
import { getADay, getNow } from "utils/date";
import { toDate } from "utils/format";

export default class DeliveryCondition extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      duration: null,
    };

    this.buttons = [
      { label: "6개월", value: 30 * 6 },
      { label: "12개월", value: 365 },
      { label: "24개월", value: 365 * 2 },
    ];

    this.onClickChangeDuration = this.onClickChangeDuration.bind(this);
    this.onChangeCalendar = this.onChangeCalendar.bind(this);
  }

  onClickChangeDuration(event) {
    this.setDuration(Number(getDatasetByName(event.currentTarget, "duration")));
  }

  onChangeCalendar(event, value) {
    this.setState({ duration: null });
  }

  setDuration(value) {
    let {
      actions: { handleChangeFormValue },
    } = this.props;

    let nowTimestamp = getNow().getTime();
    let startDate = null;
    let endDate = null;

    if (value) {
      startDate = toDate(new Date(nowTimestamp - getADay() * value).getTime(), "YYYY/MM/DD");
      endDate = toDate(nowTimestamp, "YYYY/MM/DD");
    }

    return Promise.all([handleChangeFormValue("startDate", startDate), handleChangeFormValue("endDate", endDate)]).then(() => {
      this.setState({ duration: value });
    });
  }

  componentDidMount() {
    let {
      actions: { handleRefresh },
    } = this.props;

    this.setDuration(this.buttons[0].value).then(() => {
      /**handleRefresh();*/
    });
  }

  render() {
    let {
      states: {
        currentForm: { values },
      },
    } = this.props;
    let { duration } = this.state;

    return (
      <div className="delivery-condition-wrap">
        <div className="left">
          <span className="tit">기간별 조회</span>
          <span className="btn">
            {this.buttons.map((item, index) => (
              <button key={`${index}`} type="button" className={`btn-white-small ${duration === item["value"] ? "active" : ""}`} data-duration={item["value"]} onClick={this.onClickChangeDuration}>
                {item["label"]}
              </button>
            ))}
          </span>
        </div>
        <div className="right">
          <span className="tit">직접 입력 조회</span>
          <span className="input">
            <Field name="startDate" disabledDays={values["endDate"] ? [{ after: new Date(values["endDate"]) }] : null} onChange={this.onChangeCalendar} component={InputCalendarField} />

            <span>-</span>

            <Field name="endDate" align="R" disabledDays={values["endDate"] ? [{ after: new Date() }, { before: new Date(values["startDate"]) }] : null} onChange={this.onChangeCalendar} component={InputCalendarField} />
          </span>
          <span className="btn">
            <button type="submit" className="btn-black">
              조회
            </button>
          </span>
        </div>
      </div>
    );
  }
}
