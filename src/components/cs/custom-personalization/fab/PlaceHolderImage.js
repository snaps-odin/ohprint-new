import React from "react";
import PropTypes from "prop-types";
import { addCdn } from 'utils/url';

const CustomPersonalizationFABPlaceholderImage = props => {
  const imagePath = "/images/cs/custom-personalization";
  const filename = props.isMaximize ? "make-icon-8098" : "make-icon-60110";
  const extension = props.isMaximize ? 'jpg' : 'png';

  return (
    <div className="custom-personalization-fab__placeholder-image">
      <img
        src={addCdn(`${imagePath}/${filename}.${extension}`)}
        srcSet={`${addCdn(`${imagePath}/${filename}@2x.${extension} 2x`), addCdn(`${imagePath}/${filename}@3x.${extension} 3x`)}`}
        alt="대량 맞춤 제작 서비스"
      />
    </div>
  );
};

CustomPersonalizationFABPlaceholderImage.propTypes = {
  isMaximize: PropTypes.bool.isRequired
};

export default CustomPersonalizationFABPlaceholderImage;

