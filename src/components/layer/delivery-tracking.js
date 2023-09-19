

import React from 'react';

import { getHeight } from 'utils/dom';
import { getDeepValue } from 'utils/json';

class DeliveryTracking extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			cj_d_location: null,
			cj_d_userInfo : null,
			ready: false
		};

		this.onClickClose = this.onClickClose.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	componentDidMount() {
		window.setTimeout(() => {this.setState({ ready: true })}, 500);
	}

	componentWillMount() {
		let { options : { cjDeliveryData, isCj } } = this.props;

		if(isCj){
			let { cjDeliveryTraceDTOList, orderPaymentInfoDTO } = cjDeliveryData[0];
			this.setState({
				cj_d_location : cjDeliveryTraceDTOList,
				cj_d_userInfo : orderPaymentInfoDTO
			})
		}
	}

	render() {
		let { states: { ui: { view: { height } } }, options: { inVoiceNumber, isCj } } = this.props;
		let { ready, cj_d_location, cj_d_userInfo  } = this.state;
		let orderName = getDeepValue(cj_d_userInfo, 'orderName');
		let recipientName = getDeepValue(cj_d_userInfo, 'recipientName');


		let middleHeight = height < (50 + 710 + 60 + getHeight(this.bottom))
			? height - (50 + 60 + getHeight(this.bottom))
			: null;


		return (
			<div className="delivery-tracking-layer-wrap popup">
				<div className="container">
					<div className="top">
						<h2>배송 조회</h2>
					</div>

					<div className="middle" style={middleHeight ? { height: `${middleHeight}px` } : null}>
						{
							ready ?
								isCj ?
										(
											<div>
												<table>
													<tbody>
														<tr className="top-border">
															<th>운송장번호</th>
															<td>{inVoiceNumber}</td>
															<th>택배사</th>
															<td>CJ 대한 통운 (1588-1255)</td>
														</tr>

														<tr>
															<th>보내는 사람</th>
															<td>{orderName}</td>
															<th>받는 사람</th>
															<td>{recipientName}</td>
														</tr>
													</tbody>
												</table>

												<table className="top30margin">
													<tbody className="contents">
														<tr className="top-border">
															<th>처리점소</th>
															<th>전화번호</th>
															<th>배송상태</th>
															<th>처리 일자</th>
														</tr>

														{cj_d_location.reduce((target, item, index) => {
															let { dealtBranNm, dealtBranTel, crgStNm, regDtime } = item;
															regDtime = regDtime.replace("T","<br/>(");
															regDtime = regDtime + ")";

																target.push(
																	<tr className={crgStNm === '배송완료' ? 'colorRed' : '' }>
																		<td>{dealtBranNm}</td>
																		<td>{dealtBranTel ? dealtBranTel : '-'}</td>
																		<td>{crgStNm}</td>
																		<td dangerouslySetInnerHTML={{ __html: regDtime }}></td>
																	</tr>
																);

																return target;

														},[])}


													</tbody>
												</table>
											</div>
										)
									:
										 (<iframe src={`https://www.ohprint.me/v1/redirect/${inVoiceNumber}/tracking`}
										           style={middleHeight ? { height: `${middleHeight}px` } : null}
										           frameBorder={0}
										           scrolling="yes"/>)


								: (<span>잠시만 기다려 주세요</span>)
						}

					</div>

					<div className="bottom" ref={(c) => {this.bottom = c;}}>
						<button type="button"
						        className="btn-blue-medium"
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

module.exports = DeliveryTracking;