

import React from 'react';
import { connect } from 'react-redux';
import { change, Field, reduxForm } from 'redux-form';

import { LayerTypes } from 'constants/index';
import { ActionOrder, ActionOrderHistory, ActionPayment } from 'actions/index';
import { getHeight } from 'utils/dom';
import { toCash, toDate, toPhoneNumber } from 'utils/format';
import { getDeepValue } from 'utils/json';
import * as Validate from 'utils/validate';

import { InputField, RadioField, CheckBoxField, SelectField } from 'components/common/fields';

class OffsetNotice extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			popupContents : [
				{ product : '포스터',  beforePaper: '유광지<br/>(150gsm)', afterPaper : '<em>소프트<br/>보통(150gsm)</em>', rowsPan : '4'},
				{ product :  null,  beforePaper: '유광지<br/>(250gsm)', afterPaper : '<em>소프트<br/>두꺼움(250gsm)</em>', rowsPan : null},
				{ product :  null,  beforePaper: '무광지<br/>(150gsm)', afterPaper : '<em>매트<br/>보통(150gsm)</em>', rowsPan : null},
				{ product :  null,  beforePaper: '무광지<br/>(220gsm)', afterPaper : '<em>매트<br/>두꺼움(250gsm)</em>', rowsPan : null},

				{ product : '전단',  beforePaper: '유광지 / 효과지<br/>(150gsm)', afterPaper : '<em>프리미엄 소프트<br/>보통(160gsm)</em>', rowsPan : '4'},
				{ product :  null,  beforePaper: '유광지 / 효과지<br/>(250gsm)', afterPaper : '<em>프리미엄 소프트<br/>두꺼움(230gsm)</em>', rowsPan : null},
				{ product :  null,  beforePaper: '무광지<br/>(150gsm)', afterPaper : '<em>프리미엄 매트<br/>보통(151gsm)</em>', rowsPan : null},
				{ product :  null,  beforePaper: '무광지<br/>(220gsm)', afterPaper : '<em>프리미엄 매트<br/>두꺼움(250gsm)</em>', rowsPan : null},

				{ product : '브로슈어',  beforePaper: '유광지 / 효과지<br/>(150gsm)', afterPaper : '<em>프리미엄 소프트<br/>보통(160gsm)</em>', rowsPan : '4'},
				{ product :  null,  beforePaper: '유광지 / 효과지<br/>(250gsm)', afterPaper : '<em>프리미엄 소프트<br/>두꺼움(230gsm)</em>', rowsPan : null},
				{ product :  null,  beforePaper: '무광지<br/>(150gsm)', afterPaper : '<em>프리미엄 매트<br/>보통(151gsm)</em>', rowsPan : null},
				{ product :  null,  beforePaper: '무광지<br/>(220gsm)', afterPaper : '<em>프리미엄 매트<br/>두꺼움(250gsm)</em>', rowsPan : null},

				{ product : '메뉴판',  beforePaper: '유광지 / 효과지<br/>(150gsm)', afterPaper : '<em>프리미엄 소프트<br/>두꺼움(230gsm)</em>', rowsPan : '4'},
				{ product :  null,  beforePaper: '유광지 / 효과지<br/>(250gsm)', afterPaper : '<em>프리미엄 소프트<br/>매우 두꺼움(300gsm)</em>', rowsPan : null},
				{ product :  null,  beforePaper: '무광지<br/>(150gsm)', afterPaper : '<em>프리미엄 매트<br/>두꺼움(250gsm)</em>', rowsPan : null},
				{ product :  null,  beforePaper: '무광지<br/>(220gsm)', afterPaper : '<em>프리미엄 매트<br/>매우 두꺼움(320gsm)</em>', rowsPan : null},

				{ product : '포스트카드',  beforePaper: '기본<br/>(352gsm)', afterPaper : '<em>프리미엄 소프트<br/>(300gsm)</em>' },

				{ product : '쿠폰',  beforePaper: '유광지<br/>(150gsm)', afterPaper : '<em>소프트<br/>보통(150gsm)</em>', rowsPan : '5'},
				{ product :  null,  beforePaper: '유광지<br/>(250gsm)', afterPaper : '<em>소프트<br/>두꺼움(250gsm)</em>', rowsPan : null},
				{ product :  null,  beforePaper: '무광지<br/>(150gsm)', afterPaper : '<em>매트<br/>보통(150gsm)</em>', rowsPan : null},
				{ product :  null,  beforePaper: '무광지<br/>(220gsm)', afterPaper : '<em>매트<br/>두꺼움(250gsm)</em>', rowsPan : null},
				{ product :  null,  beforePaper: '효과지<br/>(150gsm/250gsm)', afterPaper : '<em>프리미엄 소프트<br/>(230gsm)</em>', rowsPan : null},

				{ product : '카드',  beforePaper: '스탠다드 / 오리지널<br/>(230gsm/352gsm)', afterPaper : '<em>프리미엄 소프트<br/>(300gsm)</em>'},

			]

		}

		this.onClickClose = this.onClickClose.bind(this);
	}


	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	render() {
		let { states : { ui : { view : {  height } }} } = this.props;
		let { popupContents } = this.state;
		let maxHeight = height*0.8;
		let bottomHeight = maxHeight-268;


		return (
			<div className="offset-notice-layer-wrap popup" style={{ 'max-height': `${maxHeight}px` }}>
				<div className="container">
					<div className="top">
						<h2>용지 변경 안내</h2>
					</div>
					<div className="middle" style={{  height : `${bottomHeight}` }}>
						<div className="inner">

							<div className="middle">
								<h3>오프린트미를 사랑해주시는 고객님께<br/>진심으로 감사드립니다.</h3>
								<span>더 좋은 서비스 제공을 위해,<br/>용지 변경을 진행하게 되었어요.</span>
							</div>

							<div className="bottom">
								<table border={0}>
									<thead>
										<tr>
											<th>상품군</th>
											<th>기존 용지</th>
											<th>
												<em>변경된 용지</em>
											</th>
										</tr>
									</thead>

									<tbody>


									{
										(popupContents) && (
											popupContents.reduce((target, item) => {
												let { product, beforePaper, afterPaper, rowsPan } = item;


												target.push(
													<tr>
														{product &&
															<td rowSpan={`${rowsPan}`}>
																<span dangerouslySetInnerHTML={{ __html: product }}/>
															</td>
														}
														<td>
															<span dangerouslySetInnerHTML={{ __html: beforePaper }} />
														</td>
														<td>
															<span dangerouslySetInnerHTML={{ __html: afterPaper }} />
														</td>
													</tr>
												);


												return target;
											},[])
										)
									}

									</tbody>
								</table>
							</div>
						</div>
					</div>

					<div className="bottom" ref={(c) => {this.bottom = c;}}>
						<span>* 기존 용지를 장바구니에 저장한 고객님들께서는 참조해 주세요.</span>
						<button type="button" className="btn-blue-medium" onClick={this.onClickClose}>확인</button>
					</div>
				</div>

				<button className="icon icon-close-w-1414 close" onClick={this.onClickClose}/>
			</div>
		)
	}
}
const mapStateToProps = (state, ownerProps) => {
	return {

	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {

	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(OffsetNotice);