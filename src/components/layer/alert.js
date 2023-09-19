import React from "react";

import { breaklines } from "utils/string";

export default class Alert extends React.Component {
  constructor(...args) {
    super(...args);

    this.onClickClose = this.onClickClose.bind(this);
    this.onClickCancel = this.onClickCancel.bind(this);
    this.onClickConfirm = this.onClickConfirm.bind(this);
  }

  onClickClose(event) {
    let {
      options: { callback, onlyChoice },
      actions: { handleCloseAlertLayer },
    } = this.props;

    !onlyChoice && callback && callback(false);
    handleCloseAlertLayer();
  }

  onClickCancel(event) {
    let {
      options: { callback },
      actions: { handleCloseAlertLayer },
    } = this.props;

    callback && callback(false);
    handleCloseAlertLayer();
  }

  onClickConfirm(event) {
    let {
      options: { disableSubmitClose, callback },
      actions: { handleCloseAlertLayer },
    } = this.props;

    callback && callback(true);
    !disableSubmitClose && handleCloseAlertLayer();
  }

  componentDidMount() {
    this.button && this.button.focus();
  }

  render() {
    let {
      options: { title, description, confirm, confirmLabel, cancelLabel, disableButton },
    } = this.props;

    return (
      <div className="alert-layer-wrap popup">
        <div className="container">
          <div className={`middle ${disableButton ? "single" : ""}`}>
            {title && <h3 dangerouslySetInnerHTML={{ __html: breaklines(title) }} />}
            {description && <p dangerouslySetInnerHTML={{ __html: breaklines(description) }} />}
          </div>

          {!disableButton && (
            <div className="bottom">
              <button className={`btn-${!confirm ? "black" : "white"}`} type="button" onClick={this.onClickCancel}>
                {!confirm ? confirmLabel || "확인" : cancelLabel || "취소"}
              </button>

              {confirm && (
                <button className="btn-black" type="button" onClick={this.onClickConfirm}>
                  {confirmLabel || "확인"}
                </button>
              )}
            </div>
          )}
        </div>

        {!disableButton && (
          <button
            className="icon icon-close-1414 close"
            type="button"
            onClick={this.onClickClose}
            ref={(c) => {
              this.button = c;
            }}
          />
        )}
      </div>
    );
  }
}
