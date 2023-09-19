import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import FABContent from "./Content";
import FABTitle from "./Title";
import FABBody from "./Body";
import FABPlaceholderImage from "./PlaceHolderImage";
import FABRequestButton from "./RequesButton";
import FABMinimizeButton from "./MinimizeButton";

class CustomPersonalizationFAB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMaximize: true,
      hidden: true
    };

    this.handleMinimize = this.handleMinimize.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ hidden: false });
    }, this.props.waitBeforeShow);
  }

  handleMinimize() {
    this.setState({ isMaximize: !this.state.isMaximize });
  }

  render() {
    const cnPrefix = "custom-personalization-fab";
    const classname = cn(
      cnPrefix,
      `${cnPrefix}__${this.state.isMaximize ? "maximize" : "minimize"}`,
      !this.state.hidden && `${cnPrefix}__active`
    );

    return (
      <div
        className={classname}
        onClick={!this.state.isMaximize ? this.handleMinimize : null}
        aria-expanded={this.state.isMaximize}
        {...(!this.state.isMaximize && {
          tabIndex: 0,
          role: "button",
          "aria-pressed": true,
          "aria-label": "최대화"
        })}
      >
        <div className="custom-personalization-fab__container group">
          <FABPlaceholderImage isMaximize={this.state.isMaximize} />
          <FABContent show={this.state.isMaximize}>
            <FABTitle>대량 맞춤 제작 서비스</FABTitle>
            <FABMinimizeButton handleMinimize={this.handleMinimize}>
              <span aria-hidden>x</span>
            </FABMinimizeButton>
            <FABBody>오프린트미가 상담을 통해<br /> 대량 맞춤 제작을 도와드려요.</FABBody>
            <FABRequestButton>
              상담 신청
            </FABRequestButton>
          </FABContent>
        </div>
      </div>
    );
  }
}

CustomPersonalizationFAB.defaultProps = {
  waitBeforeShow: 0
};

CustomPersonalizationFAB.propTypes = {
  waitBeforeShow: PropTypes.number
};

export default CustomPersonalizationFAB;
