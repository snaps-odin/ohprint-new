import React from "react";
import { connect } from "react-redux";

import TweenFunctions from "tween-functions";

import { ActionUI } from "actions/index";
import { getScrollTop, setScrollTop } from "utils/scroll";

class ScrollContents extends React.Component {
  constructor(...args) {
    super(...args);

    this.values = {
      start: null,
      end: null,
    };

    this.times = {
      start: null,
      current: null,
    };

    this.id = null;

    this.onWheel = this.onWheel.bind(this);

    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.animate = this.animate.bind(this);
  }

  isEnableTargetY(targetY) {
    return targetY || targetY === 0;
  }

  onWheel(event) {
    let { targetY, handleChangeWheel } = this.props;

    Promise.all([this.isEnableTargetY(targetY) && this.stop()]).then(() => {
      handleChangeWheel && handleChangeWheel();
    });
  }

  start() {
    let { parentEl, targetY } = this.props;

    this.isEnableTargetY(targetY)
      ? Promise.all([(this.values = { start: getScrollTop(parentEl), end: targetY }), (this.times = { start: null, current: null })]).then(() => {
          this.id = window.requestAnimationFrame(this.animate);
        })
      : this.stop();
  }

  stop(isPassReset) {
    let {
      parentEl,
      targetY,
      handleCompleteAnimation,
      actions: { handleResetUIScroll },
    } = this.props;

    Promise.all([this.id && window.cancelAnimationFrame(this.id)])
      .then(() => {
        this.id = null;
      })
      .then(() => {
        !isPassReset && this.isEnableTargetY(targetY) && (!parentEl ? handleResetUIScroll() : handleCompleteAnimation && handleCompleteAnimation());
      });
  }

  animate(timestamp) {
    let { parentEl, duration, easingType } = this.props;

    let durationTime = Number(duration || 500);

    this.times["start"] = !this.times["start"] ? timestamp : this.times["start"];
    this.times["current"] = timestamp - this.times["start"];

    setScrollTop(parentEl, TweenFunctions[easingType || "easeOutExpo"](this.times["current"], this.values["start"], this.values["end"], durationTime));

    if (this.times["current"] >= durationTime) {
      setScrollTop(parentEl, this.values["end"]);

      this.stop();
    } else {
      this.id = window.requestAnimationFrame(this.animate);
    }
  }

  componentDidMount() {
    let { parentEl } = this.props;

    (parentEl || window).addEventListener("wheel", this.onWheel);
    (parentEl || window).addEventListener("touchmove", this.onWheel);
  }

  componentWillUnmount() {
    let { parentEl } = this.props;

    (parentEl || window).removeEventListener("wheel", this.onWheel);
    (parentEl || window).removeEventListener("touchmove", this.onWheel);
  }

  componentDidUpdate(prevProps, prevState) {
    let { targetY: prevTargetY } = prevProps;
    let { targetY: currentTargetY } = this.props;

    prevTargetY !== currentTargetY &&
      Promise.all([this.stop(this.isEnableTargetY(currentTargetY))]).then(() => {
        this.start();
      });
  }

  render() {
    const { className, children } = this.props;

    return <div className={className}>{children}</div>;
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      handleResetUIScroll: () => dispatch(ActionUI.resetUIScroll()),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScrollContents);
