import React from "react";

export default class MemberStep extends React.Component {
  render() {
    let { step } = this.props;

    return (
      <div className="step-wrap">
        <div className={`step step${step}`}>
          <div>
            {["01. 장바구니", "02. 주문/결제", "03. 주문 완료"].reduce((target, item, index) => {
              target.push(<span className={`${step === index + 1 ? "select" : ""} ${step >= index + 1 ? "done" : ""}`}>{item}</span>);

              return target;
            }, [])}
          </div>
        </div>
      </div>
    );
  }
}
