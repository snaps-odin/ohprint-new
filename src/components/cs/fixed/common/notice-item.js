

import React from 'react';

import { getHeight } from 'utils/dom';
import { goStore, goMemberCart, goMemberDelivery, goMemberCoupon, addDomain, addCdn } from 'utils/url';
import { toDate, toCash } from 'utils/format';
import { getDeepValue } from 'utils/json';

import ImageLoader from 'components/common/image-loader';

export default class CSNoticeItem extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			opened: false
		};

		this.onClickToggle = this.onClickToggle.bind(this);
		this.onClickGoPage = this.onClickGoPage.bind(this);
	}

	onClickToggle(event) {
		let { value, actions: { handleUpdateAlarm, handleUpdateItem, handleChangeCSContentHeight, handleFocusCSScroll } } = this.props;
		let { opened } = this.state;

		Promise.all([
			this.setState({ opened: !opened }),
			handleChangeCSContentHeight(getHeight(this.content) * (opened ? -1 : 1))
		]).then(() => {
			!opened && handleFocusCSScroll(this.scope.offsetTop - 59);

			value[ 'viewYn' ] === 'N' && handleUpdateAlarm(value[ 'alarmNo' ]).then(result => {
				result[ 'isUpdate' ] && handleUpdateItem(value[ 'alarmNo' ]);
			})
		})
	}

	onClickGoPage(event) {
		let { value, actions: { handleGetProductByProductGroupCode, handleChangeCSTabWidth, handleCloseCS } } = this.props;

		let product = handleGetProductByProductGroupCode(value[ 'productGroupCode' ]) || {};

		let item = this.getViewItem();

		switch (item[ 'type' ]) {
			case 'design':
				let params = {
					productCode: value[ 'productCode' ],
					paperCode: value[ 'paperCode' ],
					directionType: value[ 'directionType' ],
					frameCode: value[ 'frameCode' ],
					frameOptionCode: value[ 'frameOptionCode' ],
					luxeColorCode: value[ 'luxeColorCode' ],
					glossyType: value[ 'glossyType' ],
					paperWeight: value[ 'paperWeight' ],
					colorCode: value[ 'colorCode' ],
					backCode: value[ 'backCode' ],
					effectBackCode: value[ 'effectBackCode' ],
					productSizeType: value[ 'productSizeType' ],
					productShapeType: value[ 'productShapeType' ]
				};
				goStore('search', product[ 'category' ], product[ 'subCategory' ], params);
				break;

			case 'project':
				goMemberCart();
				break;

			case 'review':
				goMemberDelivery();
				break;

			case 'coupon':
				goMemberCoupon();
				break;

			default:
				break;
		}

		Promise.all([
			handleChangeCSTabWidth(42)
		]).then(() => {
			handleCloseCS();
		});
	}

	getTitle() {
		let { value } = this.props;

		let title = '';

		switch (value[ 'alarmType' ]) {
			case 'NEW_DESIGN':
				title = `새로 출시된 디자인을 만나보세요.`;
				break;

			case 'REVIEW_NOT_WRITE':
				title = `주문하신 상품은 마음에 드셨나요?`;
				break;

			case 'RETURN_VISIT':
				title = `오랜만에 방문하셨네요.<br/>고객님을 위한 <em>깜짝 할인 쿠폰</em>이 쿠폰함에 발급되었습니다.<br/>쿠폰함을 확인해 보세요.`;
				break;

			case 'COUPON_USE_INDUCE':
				title = `지금 바로 사용 가능한 <em>쿠폰이 ${value[ 'couponCount' ]}장</em> 있습니다.`;
				break;

			case 'FIRST_PURCHASE_ENCOURAGE':
				title = `<em class="red">회원가입 감사 쿠폰이 곧 사라질 예정</em>입니다.<br/>장바구니에 담긴 상품을 지금 바로 구매해 보세요.`;
				break;

			case 'CART_PURCHASE_ENCOURAGE':
				title = `구매를 망설이신 상품이 있나요?<br/>${(value[ 'couponData' ] || []).length > 0 ? '고객님을 위한 <em>깜짝 할인 쿠폰</em>이 쿠폰함에 발급되었습니다.<br/>' : ''}지금 바로 구매를 진행해 보세요.`;
				break;

			case 'CART_DEL_EXPECTED':
				title = `<em class="red">장바구니에 담긴 상품이 곧 삭제될 예정</em>입니다.<br/>지금 바로 구매를 진행해 보세요.`;
				break;

			default:
				break;
		}

		return { __html: title };
	}

	getCouponLabel() {
		let { value } = this.props;

		let couponData = getDeepValue(value, 'couponData.0') || {};
		let label = '';

		switch (couponData[ 'couponType' ]) {
			case 'DISCOUNT_RATE':
				label = `${couponData[ 'discount' ]}%`;
				break;

			case 'AMOUNT_DISCOUNT':
				label = `${toCash(couponData[ 'discount' ])}원`;
				break;

			case 'FREE_DELIVERY':
				label = `무료배송`;
				break;
		}

		return label;
	}

	getViewItem() {
		let { value } = this.props;

		let item = null;

		switch (value[ 'alarmType' ]) {
			case 'NEW_DESIGN':
				item = {
					type: 'design',
					title: value[ 'productGroupName' ],
					description: value[ 'templateDescriptionl' ],
					label: '디자인 보러 가기'
				};
				break;

			case 'REVIEW_NOT_WRITE':
				item = {
					type: 'review',
					label: '리뷰 쓰기'
				};
				break;

			case 'FIRST_PURCHASE_ENCOURAGE':
			case 'CART_PURCHASE_ENCOURAGE':
			case 'CART_DEL_EXPECTED':
				let options = [ 'frameName', 'shapeName', 'sizeName', 'paperName', 'weightName', 'effectName', 'colorName', 'attachSideName', 'materialName', 'finishName', 'holderFinishName', 'ropeLength', 'glossName', 'wallHangingName', 'holderTypeName', 'frameColorName', 'quantity' ].reduce((target, option) => {
					value[ option ] && !(option === 'sizeName' && value[ 'productCode' ].match(/205001001001|204001001001/)) &&
					(option === 'quantity' && value[ 'productUnitName' ] ? target.push(`${value[ option ]}${value[ 'productUnitName' ]}`) : target.push(value[ option ]));

					return target;
				}, []);

				item = {
					type: 'project',
					title: `${value[ 'productGroupName' ]}${(value[ 'productGroupCode' ] || '').match(/901/) ? '' : ` [${value[ 'projectName' ]}]`}`,
					option: `${options.join(' / ')}`,
					price: `${toCash(value[ 'sellPrice' ])}원`,
					lastUpdate: toDate(value[ 'lastUpdate' ], 'YYYY.MM.DD'),
					optionLabels: [ '옵션', '가격', '최종 편집일' ],
					label: '장바구니 바로가기'
				};
				break;

			case 'RETURN_VISIT':
				item = {
					type: 'coupon',
					imagePath: 'coupon-welcome-210110',
					label: '쿠폰 보러 가기'
				};
				break;

			case 'COUPON_USE_INDUCE':
				item = {
					type: 'coupon',
					imagePath: 'coupon-210110',
					label: '쿠폰 보러 가기',
					couponLabel: this.getCouponLabel()
				};
				break;

			default:
				break;
		}

		return item;
	}

	render() {
		let { value, states: { config: { url: { cdn: cdnUrl } } } } = this.props;
		let { opened } = this.state;

		let height = opened ? getHeight(this.content) + getHeight(this.bottom) : 0;
		let bottomStyle = { height: `${height}px` };

		let item = this.getViewItem() || {};

		return (value && item) && (
				<div className={`item ${opened ? 'active' : ''}`} ref={(c) => {this.scope = c;}}>

					<div className={`top ${value[ 'viewYn' ] === 'N' ? 'badge' : ''}`}>
						<span className="title" onClick={this.onClickToggle}>
							<div dangerouslySetInnerHTML={this.getTitle()}/>
							<div className="date">{value[ 'registrationDate' ]}</div>
						</span>

						<span className={`icon third icon-open-1212${opened ? '-on' : ''}`} onClick={this.onClickToggle}/>
					</div>

					<div className="bottom" style={bottomStyle}>
						<div className="inner">
							<div className="top" ref={(c) => {this.content = c;}}>
								<span className="content">
									{(item[ 'type' ] || '').match(/design|review|project/i) && (
										<div className="product">
											<div className="thumbnail">
												<div className="image">
													{React.cloneElement(<ImageLoader/>, {
														className: 'image',
														imageUrl: addDomain(cdnUrl, (value[ 'thumbnailImageUrl' ] || value[ 'templateThumbnailImageUrl' ])),
														isSizeFixed: true
													})}
												</div>
											</div>
											{(item[ 'type' ] || '').match(/design/i) && (
												<div className="info">
													<h3>{item[ 'title' ]}</h3>
													<div>{item[ 'description' ]}</div>
												</div>
											)}

											{(item[ 'type' ] || '').match(/review/i) && (
												<div className="info review">
													<h3>미작성 리뷰가 <em>{value[ 'reviewNotCount' ]}</em>건 있습니다.</h3>
													<div>고객님의 생생한 리뷰를 작성하시면,<br/><b>전 상품 할인 쿠폰</b>을 선물로 드립니다</div>
												</div>
											)}

											{(item[ 'type' ] || '').match(/project/i) && (
												<div className="info">
													<h3>{item[ 'title' ]}</h3>
													{[ 'option', 'price', 'lastUpdate' ].reduce((target, option, index) => {

														target.push(
															<div className={option}>
																{`${item[ 'optionLabels' ][ index ]} : ${(item[ option ] || '')}`}
															</div>
														);

														return target;
													}, [])}
												</div>
											)}
										</div>
									)}

									{(item[ 'type' ] || '').match(/coupon/i) && (
										<div className="coupon">
											<div>
												<div>
													<img src={addCdn(`/images/cs/notice/${item[ 'imagePath' ]}@2x.png`)}/>

													{item[ 'couponLabel' ] && (
														<span className="info">{item[ 'couponLabel' ]}</span>
													)}
												</div>

												{item[ 'expirationDate' ] && (
													<div className="date">{item[ 'expirationDate' ]}</div>
												)}
											</div>
										</div>
									)}
								</span>
							</div>
							<div className="bottom" ref={(c) => {this.bottom = c;}}>
								<button className="btn-black" type="button" onClick={this.onClickGoPage}>{item[ 'label' ]}</button>
							</div>
						</div>
					</div>
				</div>
			);
	}
}
