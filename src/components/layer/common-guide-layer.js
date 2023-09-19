import React from 'react';
import { connect } from 'react-redux';
import CommonGuide from 'components/tutorial/common-guide';


class CommonGuideLayer extends React.Component {
	constructor(...args) {
		super(...args);


		this.onClickClose = this.onClickClose.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	initialize() {

	}

	componentDidMount() {
		this.initialize();
	}

	render() {

    return (
      <div className="common-guide-layer popup">
        <div className="container">
          <div className="top">
            <h2>공통 작업가이드 안내</h2>
          </div>
        </div>
        <CommonGuide/>

        <button type="button"
                className="icon icon-close-w-1414 close"
                onClick={this.onClickClose}/>
      </div>
    )
	}
}

const mapStateToProps = (state, ownerProps) => {

	return {
		states: {
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(CommonGuideLayer);
