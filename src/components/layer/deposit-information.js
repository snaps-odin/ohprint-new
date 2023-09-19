

import React from 'react';
import { connect } from 'react-redux';

import { LayerTypes } from 'constants/index';
import { ActionOrderHistory } from 'actions/index';
import { getHeight } from 'utils/dom';
import { toCash, toDate } from 'utils/format';

import Attention from 'components/common/attention';

class DepositInformation extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			data: null
		};

		this.onClickClose = this.onClickClose.bind(this);
		this.onClickPaymentChange = this.onClickPaymentChange.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	onClickPaymentChange(event) {
		let { actions: { handleOpenContentsLayer }, options: { orderCode } } = this.props;

		handleOpenContentsLayer(LayerTypes.PAYMENT_CHANGE, { orderCode });
	}

	componentDidMount() {
		let { actions: { handleRequestOrderHistoryDepositByOrderCode, handleUpdateLayer, handleOpenAlertLayer, handleCloseContentsLayer }, options: { orderCode } } = this.props;

		handleRequestOrderHistoryDepositByOrderCode(orderCode).then(result => {
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
		let { states: { ui: { view: { height } } } } = this.props;
		let { data } = this.state;

		let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
			? height - (50 + 60 + getHeight(this.bottom))
			: null;

		return data &&
			(
				<div className="deposit-info-layer-wrap popup">
					<div className="container">
						<div className="top">
							<h2>입금 안내</h2>
						</div>

						<div className="middle" style={middleHeight ? { height: `${middleHeight}px` } : null}>
							<div className="inner" ref={(c) => {this.inner = c;}}>
								<table border={0}>
									<caption><span className="blind">입금계좌및금액</span></caption>
									<colgroup>
										<col style={{ width: '120px' }}/>
										<col style={{ width: '320px' }}/>
									</colgroup>
									<thead>
									<tr>
										<td colSpan={2}>
											<span>입금 계좌 및 금액</span>
											{data[ 'isPaymentChange' ] && (
												<button type="button"
												        className="btn-white"
												        onClick={this.onClickPaymentChange}>결제 방법 변경
												</button>
											)}
										</td>
									</tr>
									</thead>
									<tbody>
									<tr>
										<th>결제 금액</th>
										<td>
											<em>{toCash(data[ 'settlementAmount' ])}원</em>
										</td>
									</tr>
									<tr>
										<th>입금 계좌</th>
										<td>
											{data[ 'bankName' ]} {data[ 'account' ]} (예금주 : 주식회사 위블링)
										</td>
									</tr>
									<tr>
										<th>입금 기한</th>
										<td className="color">
											<em>{toDate(data[ 'expirationDate' ], 'YYYY년 MM월 DD일 까지')}</em><br/>
											입금 기한 내에 결제 금액을 동일하게 입금해 주세요.
										</td>
									</tr>
									</tbody>
								</table>

								{React.cloneElement(<Attention/>, {
									value: {
										title: '<span>무통장 입금 시 유의사항</span>',
										children: [
											{ value: '은행에 결제금액을 입금 후 10분정도 지나면 입금 확인 처리됩니다.' },
											{ value: '입금 시에는 합산 금액이 정확한지 확인해 주세요. 금액이 다른 경우 입금 확인이 불가능합니다.' },
											{ value: '입금 시 예금주명은 ‘위블링’이 맞는지 꼭 확인해 주세요.' },
											{ value: '주문하신 날부터 7일 이내에 입금 확인이 되어야 주문이 취소되지 않으며, 편집 내용도 보전될 수 있습니다.' },
											{ value: '주문취소 등 주문 관련 변경은 제작이 들어가기 전인 결제 후 1시간 이내에만 가능합니다.' }
										]
									}
								})}

							</div>
						</div>

						<div className="bottom" ref={(c) => {this.bottom = c;}}>
							<button type="button"
							        className="btn-blue-medium"
							        onClick={this.onClickClose}>확인
							</button>
						</div>
					</div>

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
			...ownerProps.states
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

			handleRequestOrderHistoryDepositByOrderCode: (orderCode) => dispatch(ActionOrderHistory.requestOrderHistoryDepositByOrderCode(orderCode))
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(DepositInformation);
