import React from "react";
import PropTypes from "prop-types";

const CustomPersonalizationFABMinimizeButton = props => (
  <button
    type="button"
    className="icon icon-close-3030 close"
    onClick={props.handleMinimize}
    aria-label="최소화"
  >
    {props.children}
  </button>
);

CustomPersonalizationFABMinimizeButton.propTypes = {
  handleMinimize: PropTypes.func.isRequired,
  children: PropTypes.children
};

export default CustomPersonalizationFABMinimizeButton;
