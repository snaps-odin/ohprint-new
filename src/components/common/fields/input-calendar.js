

import React from 'react';

import Calendar from 'components/common/calendar';

import { breaklines } from 'utils/string';

export default class InputCalendarField extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			focus: false,
      errorCheck: null
		};

		this.collision = false;

		this.onFocus = this.onFocus.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.onSelect = this.onSelect.bind(this);
		this.onMouseDown = this.onMouseDown.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
		this.onMouseOut = this.onMouseOut.bind(this);
	}

	onFocus(event) {
		this.collision = false;

		this.setState({ focus: true, errorCheck: true });
	}

	onBlur(event) {
		this.collision
			? this.input.focus()
			: this.setState({ focus: false, errorCheck: false });
	}

	onSelect(value) {
		let { input, onChange } = this.props;

		Promise.all([
			input.onChange(value),
			this.input.blur()
		]).then(() => {
			onChange && onChange()
		}).then(() => {
			this.setState({ focus: false });
		});
	}

	onMouseDown(evnet) {
		this.collision = true;
	}

	onMouseLeave(event) {
		this.collision = false;
	}

	onMouseOut(event) {
		this.collision = false;
	}

	render() {
		let { input, label, align, disabledDays, meta : { defaultError, touched, error,warning  } } = this.props;
		let { focus, errorCheck } = this.state;
    let showErrorOrigin = (defaultError || touched) && (error || warning);
    let showError = (showErrorOrigin !== false) ? showErrorOrigin : ((errorCheck === false) && (error || warning)) ? (error || warning) : false;
		let style = Object.assign({ top: '34px' }, { [align === 'R' ? 'right' : 'left']: '1px' });

		return (
			<div className={`input-calendar`}
			     onMouseDown={this.onMouseDown}
			     onMouseLeave={this.onMouseLeave}
			     onMouseOut={this.onMouseOut}>

				<label htmlFor={input.name}>{label}</label>

				<div>
					<input {...input}
                 className={`${showError ? 'error' : ''}`}
					       readOnly={true}
					       onFocus={this.onFocus}
					       onBlur={this.onBlur}
					       ref={(c) => {this.input = c;}}/>
          {showError && (
            <span className="error" dangerouslySetInnerHTML={{ __html: breaklines(error || warning) }}/>
          )}
				</div>

				<span className="icon icon-calendar-1616"/>

				{focus && (
					<Calendar style={style}
					          selectedDays={input.value}
					          disabledDays={disabledDays || null}
					          handleSelectDay={this.onSelect}/>
				)}


			</div>
		)
	}
}
