import React from "react";
import PropTypes from "prop-types";

const CustomPersonalizationFABBody = props => (
  <div className="custom-personalization-fab__content--body">
    <p>{props.children}</p>
  </div>
);

CustomPersonalizationFABBody.propTypes = {
  children: PropTypes.children
};

export default CustomPersonalizationFABBody;
