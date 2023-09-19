

import React from 'react';

const RadioField = ({ input, label, keyValue, className, disabled, defaultError, meta: { asyncValidating, touched, error, warning } }) => {
	let showError = (defaultError || touched) && (error || warning);

	return (
		<div className={`radio${className ? `-${className}` : ''}`}>
			<input {...input}
			       type="radio"
			       value={keyValue}
			       checked={input.value === keyValue}
			       disabled={disabled || asyncValidating}/>

			<label htmlFor={input.name}>{label}</label>

			{
				!String(className).match(/box/i) &&
				!String(className).match(/circle/i) &&
				!String(className).match(/color/i) &&
				showError && (
					<span className="error">{error || warning}</span>
				)
			}
		</div>
	);
};

export default RadioField;