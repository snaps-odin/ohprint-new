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
						<h2>CJ택배 파업 대상지역</h2>
					</div>

          <div className="middle">
            <div className="inner">

              <div className="top">
                <h3>입력하신 주소는 CJ 택배 파업 대상 지역으로,<br/>
                <em className={"red"}>배송지를 변경해서 주문해주세요.</em></h3>
              </div>

              <div className="middle">
                <div>
                  <span>
                    현재 설정하신 배송지는 CJ 택배 파업 지역으로 상품이 정상적인 발송이 불가능합니다.
                  </span>
                  <span>
                    CJ 택배 파업 장기화의 영향으로 <em className={"red"}>타 택배사 역시 물량 과부하로 인해 대체 출고가 어려워</em> 한시적으로 <em className={"red"}>파업지역 배송지는 주문을 제한</em>하고 있습니다.
                  </span>
                  <span className={"spacing"}>
                    이용에 불편을 드려 죄송하며, 파업지역이 아닌 곳으로 배송지를 설정해주세요.
                  </span>
                </div>
              </div>

              <div className="bottom">
                <div>
                  <div className="btnMap">
                    <button type="button" className="btn-blue-medium" onClick={this.onClickClose}>확인</button>
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
