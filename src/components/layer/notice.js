import React from 'react';

class CJDelivery extends React.Component {
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
			<div className="cj-delivery-layer-wrap popup">
				<div className="container">
					<div className="top">
						<h2>서비스 점검 안내</h2>
					</div>

          <div className="middle">
            <div className="inner">

              <div className="top">
                <h3>더욱 안정된 서비스를 제공하기 위해<br/>서비스 점검을 진행할 예정입니다.</h3>
              </div>

              <div className="middle">
                <div>
                  <span>
                    일시 : 02월 19일(일) AM 01:00 ~ 08:00
                  </span>
                </div>
              </div>

              <div style={{marginTop:'20px'}}>
                <span style={{lineHeight:1.5}}>              점검시간동안 서비스 이용이 불가하오니
              양해부탁드립니다.</span>
              </div>

              <div className="bottom">
                <div>
                  <div className="btnMap">
                    <button type="button" className="btn-black-medium" onClick={this.onClickClose}>확인</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
				</div>

        <button className="icon icon-close-w-1414 close" onClick={this.onClickClose}/>
			</div>
		)
	}
}

module.exports = CJDelivery;
