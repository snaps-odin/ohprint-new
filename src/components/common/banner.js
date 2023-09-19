

import React from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';

import { ActionBanner } from 'actions/index';
import { addDomain, goLink } from 'utils/url';



class Banner extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			banner: null
		};

		this.onClickGoToReview = this.onClickGoToReview.bind(this);
	}

	componentDidMount() {
		let { actions: { handleRequestBanner } } = this.props;

		handleRequestBanner().then(result => {
			result && this.setState(update(this.state, { banner: { $set: result } }));
		});
	}

	onClickGoToReview(){
		goLink('/events/22');
	}

	render() {
		let { states: { config: { url: { cdn: cdnUrl } } } } = this.props;
		let { banner } = this.state;

		return banner &&
			(
				<div className={`banner-wrap ${banner.length > 1 ? 'more' : ''}`}>
					{banner.reduce((target, item) => {
						let imageUrl = item[ 'bannerImageUrl' ];
						target.push(
							<span>
								<img
									className={`${imageUrl.match(/banner-review/i) ? 'pointerCursor' : ''}`}
									src={`${addDomain(cdnUrl, imageUrl)}`}
									onClick={imageUrl.match(/banner-review/i) ? this.onClickGoToReview : null}
								/>
							</span>
						);

						return target;
					}, [])}
				</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		states: {
			config: state.config
		}
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			handleRequestBanner: () => dispatch(ActionBanner.requestBanner())
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
