

import React from 'react';

import TutorialProduct from 'components/tutorial/product';
import TutorialLogo from 'components/tutorial/logo';
import TutorialClipart from 'components/common/guides/sticker-diy';
import TutorialExcel from 'components/common/guides/excel';
import {connect} from "react-redux";
import {change} from "redux-form";

class CSTutorialItem extends React.Component {
	render() {
		let { value, width, states } = this.props;
		let { keyName } = value;

		let isProduct = (keyName || '').match(/GUIDE/i);

		return (
			<div className="item">
				{isProduct && (
					<div className="bottom">
						{React.cloneElement(<TutorialProduct/>, {
              states,
							width
						})}
					</div>
				)}

				{(!isProduct && keyName.match(/LOGO/)) && (
					<div className="inner">
						{React.cloneElement(<TutorialLogo/>, {
							width,
              type: 'logo'
						})}
					</div>
				)}

				{(!isProduct && keyName.match(/CLIPART/)) && (
					<div className="inner">
						{React.cloneElement(<TutorialClipart/>, {
							width,
							onlyClipArt: true
						})}
					</div>
				)}

				{(!isProduct && keyName.match(/EXCEL/)) && (
					<div className="inner">
						{React.cloneElement(<TutorialExcel/>, {
							width,
              states,
							isDownload: true
						})}
					</div>
				)}

        {(!isProduct && keyName.match(/QR/)) && (
          <div className="inner">
            {React.cloneElement(<TutorialLogo/>, {
              width,
              type: 'qr'
            })}
          </div>
        )}
			</div>
		)
	}
}

const mapStateToProps = (state, ownerProps) => {
  let { states } = ownerProps;
  let { cs: { pop: { content: { items } } } } = states;

  return {
    states: {
      config: state.config
    }
  }
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(CSTutorialItem);
