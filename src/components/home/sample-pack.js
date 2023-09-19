

import React from 'react';

import { LayerTypes } from 'constants/index';

import {dataLayerSample_package1} from 'configs/google-analytics/ga'

export default class HomeSamplePack extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickSamplePack = this.onClickSamplePack.bind(this);
	}

	onClickSamplePack(event) {
		let { actions: { handleOpenContentsLayer } } = this.props;

    dataLayerSample_package1();
		handleOpenContentsLayer(LayerTypes.SAMPLE_PACK, { useLoading: false });
	}

	render() {
		return (
			<section className="home-sample-pack-wrap"
			         ref={(c) => {this.el = c;}}>

				<h3>무한대의 명함을 경험하다.</h3>

				<span>
					한번 보면 빠져들 수밖에 없는 매력적인 명함<br/>
					직접 보고 느껴보세요!
				</span>

				<button type="button" className="btn-blue-medium" onClick={this.onClickSamplePack}>샘플 팩 알아보기</button>
			</section>
		);
	}
}