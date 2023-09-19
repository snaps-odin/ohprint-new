

import React from 'react';

const CheckBoxField = ({ input, label, className, disabled, defaultError, customValue, meta: { asyncValidating, touched, error, warning } }) => {
	let showError = (defaultError || touched) && (error || warning);

	return (
		<div className={`checkbox${className ? `-${className}` : ''}`}>
			<input {...input}
			       type="checkbox"
			       checked={input.value}
			       data-custom-value={customValue}
			       disabled={disabled || asyncValidating}/>

			<label htmlFor={input.name}>{label}</label>

			{showError && (
				<span className="error">{error || warning}</span>
			)}
		</div>
	);
};

export default CheckBoxField;