import React from "react";
import PropTypes from "prop-types";

const CustomPersonalizationFABTitle = props => (
  <h5 className="custom-personalization-fab__content--title">
    {props.children}
  </h5>
);

CustomPersonalizationFABTitle.propTypes = {
  children: PropTypes.children
};

export default CustomPersonalizationFABTitle;
