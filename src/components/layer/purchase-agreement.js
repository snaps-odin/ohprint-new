

import React from 'react';

import Attention from 'components/common/attention';

class PurchaseAgreement extends React.Component {
	constructor(...args) {
		super(...args);

		this.attentions = [
			{
				title: '<span>[상품구매 동의]</span>',
				children: [
					{ value: '주문할 상품의 편집정보, 상품정보, 상품가격, 배송정보를 확인 하였습니다.' },
					{ value: '주문취소 및 수정은 결제 후 1시간 이내에만 가능합니다.' }
				]
			},
			{
				title: '<span>[정보수신 동의]</span>',
				children: [
					{ value: '주문자 정보로 SMS와 이메일이 발송됩니다.' },
					{ value: '주문관련 정보 발송, 마케팅 특성에 따른 서비스 제공 및 CRM 용도, 이벤트 당첨자 발표 안내, 이벤트 참여기회 제공, 광고성 정보제공을 위해서 휴대폰번호와 정보수신이 저장됩니다.' }
				]
			},
			{
				title: '<span>[보유기간]</span>',
				children: [
					{ value: '개인정보 수집 및 이용 목적 달성 시까지 보관합니다.' }
				]
			}
		];

		this.onClickClose = this.onClickClose.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	render() {
		return (
			<div className="purchase-agreement-layer-wrap popup">
				<div className="container">
					<div className="top">
						<h2>구매진행 동의 안내</h2>
					</div>

					<div className="middle">
						{this.attentions.map((item, index) => (
							React.cloneElement(<Attention/>, {
								value: item
							})
						))}
					</div>

					<div className="bottom">
						<button className="btn-blue-medium"
						        onClick={this.onClickClose}>확인
						</button>
					</div>
				</div>

				<button className="icon icon-close-w-1414 close"
				        type="button"
				        onClick={this.onClickClose}/>
			</div>
		)
	}
}

module.exports = PurchaseAgreement;