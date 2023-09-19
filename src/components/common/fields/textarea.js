

import React from 'react';
import autosize from 'autosize';

export default class TextAreaField extends React.Component {
	constructor(...args) {
		super(...args);
	}

	componentDidMount() {
		autosize(this.scope);
	}

	render() {
		let { input, label, className, size, placeholder, disabled, type, readOnly, maxLength, showLength, defaultError, meta: { asyncValidating, touched, error, warning, valid, active } } = this.props;

		let showError = (defaultError || touched) && (error || warning);

		return (
			<div className={`textarea ${className || ''}`}>
				<label htmlFor={input.name}>{label}</label>

				<div className={showError ? 'error' : (active ? 'focused' : null)}>
					<textarea {...input}
					          type={type}
					          className={`${size || ''} ${!input.value ? 'empty' : ''}`}
					          placeholder={placeholder}
					          disabled={disabled || asyncValidating}
					          readOnly={readOnly}
					          maxLength={maxLength}
					          rows={1}
					          ref={(c) => {this.scope = c;}}/>

					<span>
						{showError && (
							<span className="error left">
								 {error || warning}
							 </span>
						)}

						{maxLength && showLength && (
							<span className="count right">
								{Math.min(input.value.length, maxLength)}/{maxLength}
							</span>
						)}
					</span>
				</div>
			</div>
		)
	}
}
