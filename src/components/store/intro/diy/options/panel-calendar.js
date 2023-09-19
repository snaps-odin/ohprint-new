import React from 'react';
import { Field } from 'redux-form';

import { getAMonth, getNow, parseDateByTimestamp } from 'utils/date';
import { addZero } from 'utils/format';
import { getDeepValue } from 'utils/json';
import * as Validate from 'utils/validate';

import { SelectField } from 'components/common/fields';
import { getDatasetByName } from 'utils/dom';


export default class OptionCalendar extends React.Component {
  constructor(args) {
    super(args);

    this.state = {
      ready: false
    };

    this.field = 'calendar';

    this.dateList = null;

    this.getParams = this.getParams.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  setStartDate() {
    let { actions : { handleChangeFormValue } } = this.props;
    let now = getNow();
    let nowYear = now.getFullYear()+1;
    let newMonth = now.getMonth();
    let { YYYY, MM } = parseDateByTimestamp(new Date(nowYear, newMonth).getTime() - getAMonth() * 12);
    let mm = Number(MM);
    let mayBased = 8;
    let dateSwitch = mm  <= mayBased ? 'type1' : 'type2';
    let arrayLength = 0;


    switch(dateSwitch){
      case 'type1':
        arrayLength = 12+12;
        break;

      case 'type2':
        arrayLength = 12+(12-mm)+1;
        break;


      default:
        arrayLength = 24;
        break;
    }


    //1-9
    //10-12
    this.dateList = new Array(arrayLength).fill(true).reduce(
      target => {

        //year -> 2021
        //month -> 02
        if (target.month > 12) {
          target.month = 1;
          target.year++;
        }

        target.list.push({
          label: `${target.year}년 ${addZero(target.month, 2)}월`,
          value: `${target.year}.${addZero(target.month, 2)}`
        });

        target.month++;

        return target;
      },
      { year: YYYY, month: (mm <= mayBased ? 1 : mm ), list: [] }
    )['list'];

    let firstIdx = (this.dateList).findIndex((date)=>(date.value === `${nowYear}.01`));

    handleChangeFormValue('option.calendarStartDate',
      ((newMonth+1) >= mayBased) ? (this.dateList)[firstIdx].value : (this.dateList)[0].value
    )
  }

  getOptions() {
    return this.dateList;
  }

  getParams() {
    let { values } = this.props;

    let field = this.field;

    let yearMonths = getDeepValue(values, `${field}.calendarStartDate`).split('.');

    return {
      prmYear: yearMonths[0],
      prmMonth: yearMonths[1]
    };
  }

  componentDidMount() {
    Promise.all([this.setStartDate()]).then(() => {
      this.setState({ ready: true });
    });
  }

  onChange(event, value) {
    let { actions, keyName, isWild } = this.props;
    let { handleChange } = actions;

    window.setTimeout(() => {
      handleChange && handleChange(value);
    }, 0);
  }

  render() {
    let { ready } = this.state;

    let field = this.field;

    return (
      ready && (
        <div className="store-intro-diy-option-quantity-wrap">
          <div className="top">
            <h4>시작 월</h4>
          </div>

          <div className="bottom">
            <Field
              name={`option.calendarStartDate`}
              className="box"
              width={258}
              height={140}
              onChange={this.onChange}
              placeholder="시작 월을 선택하세요."
              options={this.getOptions()}
              component={SelectField}
              validate={[Validate.required]}
            />
          </div>
        </div>
      )
    );
  }
}
