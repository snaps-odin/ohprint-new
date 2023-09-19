import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { LayerTypes } from "constants/index";
import { ActionLayer } from "actions/index";

const CustomPersonalizationFABRequestButton = props => {
  function handleLauncModal() {
    props.actions.handleOpenContentsLayer(LayerTypes.CUSTOM_PERSONALIZATION_MODAL);
  }

  return (
    <button
      type="button"
      className="custom-personalization-fab__request-button"
      onClick={handleLauncModal}
    >
      {props.children}
    </button>
  )
};

CustomPersonalizationFABRequestButton.propTypes = {
  children: PropTypes.children
};

const mapStateToProps = state => {
  return {
    states: {
      layer: state.layer
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      handleOpenContentsLayer: (type, options) =>
        dispatch(ActionLayer.openContentsLayer(type, options)),
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomPersonalizationFABRequestButton);
