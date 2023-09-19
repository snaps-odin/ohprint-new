

import React from 'react';
import { addCdn } from 'utils/url';

class ShippingGuide extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickClose = this.onClickClose.bind(this);
  }

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;
		handleCloseContentsLayer();
	}

	render() {

		return (
			<div className="offset-print-guide-layer-wrap">
				<div className="container">
					<div className="top">
						<h2>옵셋 인쇄 안내</h2>
					</div>

          <div className="middle">
            <div className="section">
              <h3>대량 주문은 옵셋 인쇄로 저렴하게!</h3>
              <span>대량 고객은 더 저렴하게 주문할 수 있도록 옵셋 인쇄로 제작됩니다.</span>
            </div>

            <div className="section">
              <h3>디지털 인쇄와 옵셋 인쇄의<br/>색상차 발생에 주의하세요.</h3>
              <span>디지털 인쇄와 옵셋 인쇄는 퀄리티 차이는 없으나 <em>인쇄 기계의 특성상 경우에 따라서 색상 차이가 발생할 수 있습니다.</em><br/>
                디지털 인쇄는 모니터 화면에서 보이는 컬러와 최대 5% 정도 색상차가 발생할 수 있으며<br/>
                옵셋 인쇄는 최대 10% 정도의 색상차가 발생할 수 있습니다.
              </span>
              <ul>
                <li>
                  <img src={addCdn(`/images/store/intro/common/digital-print-img@2x.jpg`)} />
                  <p>디지털 인쇄</p>
                </li>
                <li>
                  <img src={addCdn(`/images/store/intro/common/offset-print-img@2x.jpg`)} />
                  <p>옵셋 인쇄</p>
                </li>
              </ul>
            </div>
          </div>

				</div>

				<button className="icon icon-close-w-1414 close" onClick={this.onClickClose}/>
			</div>
		)
	}
}

module.exports = ShippingGuide;
