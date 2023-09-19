import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const CustomPersonalizationFABContent = props => {
  const classname = cn(
    "custom-personalization-fab__content",
    props.show && "fade-in"
  );
  return <div className={classname}>{props.show && props.children}</div>;
};

CustomPersonalizationFABContent.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.children
};

export default CustomPersonalizationFABContent;
