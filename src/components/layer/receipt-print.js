

import React from 'react';
import { connect } from 'react-redux';

import { ActionOrderHistory } from 'actions/index';
import { getHeight } from 'utils/dom';
import { getTimestamp } from 'utils/date';
import { toDate, toCash } from 'utils/format';
import { goPrint } from 'utils/url';

import Attention from 'components/common/attention';

class ReceiptPrint extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			data: null
		};

		this.onClickClose = this.onClickClose.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	onSubmit() {
		let { options: { orderCode } } = this.props;

		goPrint('receipt', { orderCode });
	}

	componentDidMount() {
		let { actions: { handleRequestOrderHistoryTaxByOrderCode, handleUpdateLayer, handleOpenAlertLayer, handleCloseContentsLayer }, options: { orderCode } } = this.props;

		handleRequestOrderHistoryTaxByOrderCode(orderCode, 'RECEIPT').then(result => {
			this.setState({ data: result });
		}).then(() => {
			handleUpdateLayer();
		}).catch(error => {
			Promise.all([
				handleOpenAlertLayer({
					description: error
				})
			]).then(() => {
				handleCloseContentsLayer();
			});
		});
	}

	render() {
		let { states: { ui: { view: { height } }, order: { deliveryMethods, paymentMethods } } } = this.props;
		let { data } = this.state;

		let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
			? height - (50 + 60 + getHeight(this.bottom))
			: null;

		return data &&
			(
				<div className="receipt-print-layer-wrap popup">
					<div className="container">
						<div className="top">
							<h2>영수증 출력</h2>
						</div>

						<div className="middle" style={middleHeight ? { height: `${middleHeight}px` } : null}>
							<div className="inner" ref={(c) => {this.inner = c;}}>
								<div className="top">
									<h2>결제 영수증</h2>
									<span>발급일:{toDate(getTimestamp(), 'YYYY.MM.DD')}</span>
								</div>

								<table border={0}>
									<caption><span className="blind">주문정보</span></caption>
									<colgroup>
										<col style={{ width: '160px' }}/>
										<col style={{ width: '230px' }}/>
										<col style={{ width: '160px' }}/>
										<col style={{ width: '230px' }}/>
									</colgroup>
									<thead>
									<tr>
										<td colSpan={4}>
											주문 정보
										</td>
									</tr>
									</thead>
									<tbody>
									<tr>
										<th className="logo">
											<span className="icon icon-logo-9349"/>
										</th>
										<td colSpan={3}>
											대표이사 : 김성경 / 사업자 등록번호 : 104-81-50311<br/>
											사업장소재지 서울특별시 영등포구 여의대로 24, 21층 / 대표전화 : 1577-4703 / FAX : 02-2055-4075
										</td>
									</tr>
									<tr>
										<th>주문일</th>
										<td>{toDate(data[ 'paymentDate' ], 'YYYY.MM.DD')}</td>
										<th>주문자</th>
										<td>{data[ 'orderName' ]}</td>
									</tr>
									<tr>
										<th>주문번호</th>
										<td>{data[ 'orderCode' ]}</td>
										<th>배송 방법</th>
										<td>{(deliveryMethods.find(method => data[ 'deliveryMethod' ] === method[ 'value' ]) || {})[ 'label' ]}</td>
									</tr>
									<tr>
										<th>결제 금액</th>
										<td><em>{toCash(data[ 'settlementAmount' ])}원</em></td>
										<th>결제 방법</th>
										<td>{(paymentMethods.find(method => data[ 'settlementMethod' ] === method[ 'value' ]) || {})[ 'label' ]}</td>
									</tr>
									</tbody>
								</table>

								<table border={0}>
									<caption><span className="blind">구매정보</span></caption>
									<colgroup>
										<col style={{ width: '500px' }}/>
										<col style={{ width: '180px' }}/>
										<col style={{ width: '100px' }}/>
									</colgroup>
									<thead>
									<tr>
										<td colSpan={4}>
											구매 정보
										</td>
									</tr>
									</thead>
									<tfoot>
									<tr>
										<th>
											주문금액
											: {toCash(data[ 'orderProductList' ] && data[ 'orderProductList' ].reduce((target, product) => {
												target += product[ 'orderAmount' ];

												return target;
											}, 0))}원
											+ 머니 : {data[ 'userMoney' ] ? `-${toCash(data[ 'userMoney' ])}` : '0'}원
											+ 배송비 : {toCash(data[ 'deliveryAmount' ])}원
										</th>
										<td>총 주문 금액 (부가세 포함)</td>
										<td className="sum">{toCash(data[ 'settlementAmount' ])}원</td>
									</tr>
									</tfoot>
									<tbody className="style">
									<tr>
										<th>주문상품</th>
										<th>수량</th>
										<th>주문금액</th>
									</tr>
									{data[ 'orderProductList' ] && data[ 'orderProductList' ].map(product => (
										<tr>
											<td>{product[ 'productName' ]}</td>
											<td>{toCash(product[ 'quantity' ])}</td>
											<td>{toCash(product[ 'orderAmount' ])}원</td>
										</tr>
									))}
									</tbody>
								</table>

								{React.cloneElement(<Attention/>, {
									value: {
										title: '<span>유의사항</span>',
										children: [
											{ value: '<em>결제영수증은 소득공제용 영수증 및 매입 세금계산서로 활용할 수 없으며, 결제가 완료되었음을 증명하는 용도로만 활용 가능합니다.</em>' },
											{ value: '결제영수증은 지출 증빙 효력이 없습니다.' }
										]
									}
								})}
							</div>
						</div>

						<div className="bottom" ref={(c) => {this.bottom = c;}}>
							<button type="button"
							        className="btn-white-medium"
							        onClick={this.onClickClose}>취소
							</button>

							<button type="button"
							        className="btn-blue-medium"
							        onClick={this.onSubmit}>출력
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

const mapStateToProps = (state, ownerProps) => {
	return {
		states: {
			...ownerProps.states,

			order: state.order
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleRequestOrderHistoryTaxByOrderCode: (orderCode, receiptType) => dispatch(ActionOrderHistory.requestOrderHistoryTaxByOrderCode(orderCode, receiptType))
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ReceiptPrint);
