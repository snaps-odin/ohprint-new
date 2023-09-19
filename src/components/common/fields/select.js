import React from "react";

import DropDown from "components/common/dropdown";

const SelectField = ({
  input,
  className,
  disabled,
  width,
  height,
  stepHeight,
  resize,
  label,
  placeholderLabel,
  placeholder,
  options,
  defaultError,
  meta: { asyncValidating, touched, error, warning },
}) => {
  let showError = (defaultError || touched) && (error || warning);

  return (
    <div className={`dropdown ${className || ""}`}>
      <label>{label}</label>

      <DropDown
        input={input}
        className={showError ? "error" : null}
        width={width}
        height={height}
        stepHeight={stepHeight}
        resize={resize}
        placeholder={placeholder}
        placeholderLabel={placeholderLabel}
        disabled={disabled || asyncValidating}
        lists={options}
      />

      {showError && <span className="error">{error || warning}</span>}
    </div>
  );
};

export default SelectField;
