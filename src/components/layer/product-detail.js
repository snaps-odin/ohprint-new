

import React from 'react';
import { connect } from 'react-redux';
import update from 'react-addons-update';

import { getHeight } from 'utils/dom';
import { getDeepValue } from 'utils/json';

import Showcase from 'components/store/intro/service/showcase';
import {DIGITAL_PLUS_1ST} from "../../configs/products/apparel/constant";

class ProductDetail extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			ready: false,
			contents: null
		};

		this.onClickClose = this.onClickClose.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	initialize() {
		let { actions: { handleUpdateLayer }, options: { subCategory, keyName, showcases } } = this.props;
		let upperCaseSubCategory = (subCategory || '').replace(/-/g, '_').toUpperCase();

    // hint digitalPlus 1차
    const isDigitalPlusItem = DIGITAL_PLUS_1ST.some(item => item === subCategory);

    const printingMethod = [ 'PRINT_DIGITAL', 'PRINT_DIGITAL_COLOR', 'PRINT_HEAT', 'PRINT_HEAT_COLOR', 'PRINT_NALYEOM','PRINT_HOLOGRAM', 'TRANSCRIPTION_TYPE_01', 'PRINT_GLITTER', 'TRANSCRIPTION_TYPE_02', 'PRINT_NEON', 'TRANSCRIPTION_TYPE_03'];
    const newPrintingMethod = [
      'PRINT_DIGITAL_PLUS',
      'PRINT_DIGITAL_PLUS_DESCRIPTION_01',
      'PRINT_DIGITAL_PLUS_DESCRIPTION_02',
      'PRINT_DIGITAL_PLUS_DESCRIPTION_02_01',
      'PRINT_DIGITAL_PLUS_DESCRIPTION_03',
      'PRINT_DIGITAL_PLUS_DESCRIPTION_03_01',
      'PRINT_DIGITAL_PLUS_DESCRIPTION_04',
      'PRINT_DIGITAL_PLUS_DESCRIPTION_04_01',
      'PRINT_DIGITAL_PLUS_DESCRIPTION_05',
      'PRINT_DIGITAL_PLUS_DESCRIPTION_06',
      'NEW_PRINT_NALYEOM',
    ]

    let services = (keyName || '').match(/paperCode/i)
			? isDigitalPlusItem ? newPrintingMethod : printingMethod
      : (keyName || '').match(/effectBackCode/i) ? ['EFFECT_FOIL_ATTENTION', 'EFFECT_FOIL_01', 'EFFECT_FOIL_02_POPUP', 'EFFECT_PRESSURE_01', 'EFFECT_PRESSURE_02_POPUP', 'EFFECT_PRESSURE_03_POPUP', 'EFFECT_SCODIX_01_POPUP']
			: [ `${upperCaseSubCategory}_INFORMATION`, `${upperCaseSubCategory}_SIZE_INFORMATION` ];

		let data = services.reduce((target, service) => {

			let showcase = getDeepValue(showcases, service) || {};
			let { children } = showcase;

			showcase && (children || '') && target.push(showcase);

			return target;
		}, []);

		Promise.all([
			this.setState(update(this.state, {
				contents: { $set: data },
				ready: { $set: true }
			}))
		]).then(() => {
			handleUpdateLayer();
		})
	}

	componentDidMount() {
		this.initialize();
	}

	render() {
		let { options: { keyName, category }, states: { ui: { view: { height } }, config : { url : { cdn } } } } = this.props;
		let { ready, contents } = this.state;
		let middleHeight = height < (50 + getHeight(this.inner) + getHeight(this.bottom))
			? height - (50 + getHeight(this.bottom))
			: null;

		return (
			<div className="product-detail-layer-wrap popup">
				{ready && (
					<div className="container">
						<div className="top" ref={(c) => {this.top = c}}>
							<h2>{`${(keyName || '').match(/paperCode/i) ? '인쇄 방식' : (keyName || '').match(/effectBackCode/i) ? '효과' : '사이즈'} 안내`}</h2>
						</div>

						<div className="middle" style={{ height: middleHeight ? `${middleHeight}px` : '' }}>
							<div className="inner" ref={(c) => {this.inner = c;}}>

								{(contents || []).reduce((target, showcase) => {

									target.push(
										React.cloneElement(<Showcase/>, {
                      cdn,
											showcase,
											category
										})
									);

									return target;
								}, [])}

							</div>
						</div>

						<div className="bottom" ref={(c) => {this.bottom = c;}}>
							<button type="submit"
							        className="btn-blue-medium"
							        onClick={this.onClickClose}>확인
							</button>
						</div>
					</div>
				)}

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
			ui: state.ui,
      config : state.config
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

module.exports = connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
