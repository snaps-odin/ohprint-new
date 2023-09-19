

import React from 'react';
import moment from 'moment';
import DayPicker, { LocaleUtils } from 'react-day-picker';

import { addZero } from 'utils/format';
import { getWeekDays } from 'utils/date';

export default class Calendar extends React.Component {
	constructor(...args) {
		super(...args);

		this.weekdays = getWeekDays();

		this.onClickPrevYear = this.onClickPrevYear.bind(this);
		this.onClickNextYear = this.onClickNextYear.bind(this);
		this.onClickSelectDay = this.onClickSelectDay.bind(this);
	}

	onClickPrevYear(event) {
		this.picker[ 'showPreviousYear' ]();
	}

	onClickNextYear(event) {
		this.picker[ 'showNextYear' ]();
	}

	onClickSelectDay(day) {
		this.props.handleSelectDay(moment(day).format('YYYY/MM/DD'));
	}

	render() {
		let { style, selectedDays, disabledDays } = this.props;

		let localeUtils = {
			...LocaleUtils,
			formatMonthTitle: (d, locale) => `${d.getFullYear()}.${addZero(d.getMonth() + 1, 2)}`
		};

		return (
			<div className="calendar-wrap" style={style}>
				<DayPicker
					enableOutsideDays={true}
					weekdaysLong={this.weekdays}
					weekdaysShort={this.weekdays}
					localeUtils={localeUtils}
					initialMonth={selectedDays ? new Date(selectedDays) : undefined}
					selectedDays={selectedDays ? new Date(selectedDays) : null}
					disabledDays={disabledDays}
					onDayClick={this.onClickSelectDay}
					ref={(c) => {this.picker = c;}}/>

				<span className="icon prev-year" onClick={this.onClickPrevYear}/>
				<span className="icon next-year" onClick={this.onClickNextYear}/>
			</div>
		)
	}
}
