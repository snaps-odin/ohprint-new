

import React from 'react';

import { breaklines } from 'utils/string';

const InputField = ({ maxCnt, target, name, input, label, className, type, size, placeholder, disabled, readOnly, maxLength, autoComplete, statusMessage, showLength, defaultError, allowEnterKey, meta: { asyncValidating, touched, error, warning, valid, } }) => {
	let showError = (defaultError || touched) && (error || warning);
	let showIcon = !String(className).match(/simple/ig) && !String(className).match(/box/ig);

	return (
		<div className={`input ${className || ''}`}>
			<label htmlFor={input.name}>{label}</label>

			<div>
				<input {...input}
				       type={type}
				       className={`${size || ''} ${!input.value ? 'empty' : ''} ${showError ? 'error' : ''}`}
				       placeholder={placeholder}
				       disabled={disabled || asyncValidating}
				       readOnly={readOnly}
				       maxLength={maxLength}
				       autoComplete={autoComplete}
               onInput = {(event)=>{
                 if(target === 'bulkOrder'){
                   let currentValue = event.target.value;
                   let lastValue = currentValue[currentValue.length-1];

                   if(isNaN(lastValue) || lastValue === ' '){
                     event.target.value = currentValue.slice(0,currentValue.length-1);
                     return
                   }
                   if(Number(currentValue) >= maxCnt ){
                     event.target.value = maxCnt-1
                   }
                 }
               }}

				       onKeyDown={event => {
                 (event.key === 'Enter' && !allowEnterKey) && event.preventDefault()
               }}/>

				{showError && (
					<span className="error" dangerouslySetInnerHTML={{ __html: breaklines(error || warning) }}/>
				)}

				{valid && showIcon && (
					<div className="icon">
						<span className="icon-check-1414"/>
					</div>
				)}

				{valid && statusMessage && (
					<div className="status-message">
						{statusMessage}
					</div>
				)}

				{maxLength && showLength && (
					<div className="count">
						{input.value.length}/{maxLength}
					</div>
				)}
			</div>
		</div>
	);
};

export default InputField;
