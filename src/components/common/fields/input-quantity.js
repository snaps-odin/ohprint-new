import React from "react";

export default class InputQuantityField extends React.Component {
  constructor(...args) {
    super(...args);

    this.onClickIncrement = this.onClickIncrement.bind(this);
    this.onClickDecrement = this.onClickDecrement.bind(this);
  }

  onClickIncrement(event) {
    let { input, maxLength } = this.props;
    let maxLen = 999;

    if (maxLength && maxLength === 4) {
      maxLen = 9999;
    }

    input.onChange(window.isNaN(input["value"]) ? 1 : Math.min(maxLen, Number(input["value"]) + 1));
  }

  onClickDecrement(event) {
    let { input } = this.props;

    input.onChange(window.isNaN(input["value"]) ? 0 : Math.max(0, Number(input["value"]) - 1));
  }

  render() {
    let {
      input,
      disabled,
      disabledType,
      maxLength,
      defaultError,
      meta: { asyncValidating, touched, error, warning, valid },
    } = this.props;
    let showError = ((defaultError || touched) && (error || warning)) || (disabledType || "").match(/L|C|R/i);

    return (
      <div className={`input-quantity ${disabled ? "disabled" : ""}`}>
        <div className={showError ? "error" : ""}>
          <button type="button" className="minus" disabled={(disabledType || "").match(/L/i) || disabled || asyncValidating} onClick={this.onClickDecrement} />
          <div>
            <input {...input} type="text" readOnly={(disabledType || "").match(/C/i) || disabled || asyncValidating} value={this.props.input.value || 1} size={maxLength} maxLength={maxLength} onChange={input.onChange} />
          </div>
          <button type="button" className="plus" disabled={(disabledType || "").match(/R/i) || disabled || asyncValidating} onClick={this.onClickIncrement} />
        </div>
        {showError && <span className="error">{error || warning}</span>}
      </div>
    );
  }
}
