

import React from 'react';
import update from 'react-addons-update';
import CountUp from 'react-countup';

import { ActionEditor, ActionLayer, ActionStore } from 'actions/index';
import { LayerTypes } from 'constants/index';
import { toCash } from 'utils/format';
import { getDeepValue } from 'utils/json';
import { goEditor, goMemberCart } from 'utils/url';
import * as Validate from 'utils/validate';
import * as Normalize from 'utils/normalize';

import { SelectField, InputQuantityField } from 'components/common/fields';
import {getMarketingData, setMarketingData} from "../../../utils/storage";

/*
	더보기 버튼이 나오지 않도록 하기위해
  기본값 more : false 를 true로 놓고 버튼을 눌렀을때 값이 바뀌지 않게 하였습니다.
 */
export default class TemplatePreviewOption extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			ready: false,
			show: false,
			style: null,
			image: null,
			more: true,
			active: false,
			selectedPrice: null,
			informationList: []
		};

		this.accessoryInfoFields = [
			{ label: '사이즈', keyName: 'templateSize' },
			{ label: '색상', keyName: 'templateColor' },
			{ label: '용도', keyName: 'productSubName' }
		];

		this.onChangeQuantity = this.onChangeQuantity.bind(this);
		this.onClickMore = this.onClickMore.bind(this);
		this.onClickLike = this.onClickLike.bind(this);
	}

	onChangeQuantity(event, value) {
		let { item: { isPackage, priceList, priceInfo } } = this.props;

		this.setState(update(this.state, {
			selectedPrice: {
				$set: isPackage
					? priceList.find(item => Object.is(String(item[ 'quantity' ]), String(value)))[ 'sellPrice' ]
					: priceInfo[ 'sellPrice' ] * value
			}
		}));
	}

	onClickMore(event) {
		/*let { more } = this.state;

		this.setState(update(this.state, { more: { $set: !more } }));*/
	}

	onClickLike(event) {
		let { actions: { handleLike }, itemIndex } = this.props;
		let { active } = this.state;

		handleLike(itemIndex).then(() => {
			this.setState(update(this.state, { active: { $set: !active } }));
		});
	}

	getQuantityOption() {
		let { item: { priceList } } = this.props;

		return (priceList || []).reduce((target, item, index) => {
			target.push({
				label: item[ 'quantity' ],
				value: item[ 'quantity' ]
			});

			return target;
		}, []);
	}

	componentDidMount() {
		let { actions, product, navigation, item, isAccessory, query, category, subCategory } = this.props;
		let { handleChangeFormValue } = actions;
		let { liked, isPackage, priceList, priceInfo, directionCode } = item;
		let { quantity, fromGround } = query;

		let productName = product[ 'content' ][ 'title' ];

		let isRoll = !!(String(category).match(/sticker/i) && String(subCategory).match(/roll/i));

		let optionLabels = navigation ? navigation.reduce((target, item) => {
      let itemVal = item;
      (item === "85 X 55" && (directionCode === "194002") && !!isRoll) && (itemVal = "55 X 85");

			!(productName || '').match(itemVal) && target.push(itemVal);

			return target;
		}, []) : [];

		let isFromGround = (fromGround || '').match(/Y/i);

		Promise.all([
			!isFromGround
				? handleChangeFormValue('quantity', quantity || (isPackage ? priceList[ 0 ][ 'quantity' ] : 1))
				: null
		]).then(() => {
      let descriptions = [
        { label: '상품', value: productName },
        { label: '옵션', value: (optionLabels || []).join(' / ') }
      ];

      if("copyright" in item){
        if(item.copyright){
          descriptions.push(
            { label: '', value: item.copyright }
          )
        }
      }

      setMarketingData({
        category,
        subCategory,
        quantity : Number(quantity),
        price : isFromGround
          ?
          0
          :
          (
            isAccessory
              ?
              (isPackage
                  ? priceList[ 0 ][ 'sellPrice' ]
                  : priceInfo[ 'sellPrice' ]
              )
              :
              (priceInfo
                  ? priceInfo[ 'sellPrice' ]
                  : null
              )
          )
      })

			this.setState(update(this.state, {
					ready: { $set: true },
					active: { $set: liked },
					selectedPrice: {
						$set: isFromGround
							?
							null
							:
							(
								isAccessory
									?
									(isPackage
											? priceList[ 0 ][ 'sellPrice' ]
											: priceInfo[ 'sellPrice' ]
									)
									:
									(priceInfo
											? priceInfo[ 'sellPrice' ]
											: null
									)
							)
					},
					informationList: {
						$set: descriptions
					}
				}
			));
		});
	}


	render() {
		let { category, item, isAccessory, designCount, navigation, valid, query, isCalendar } = this.props;
		let { isPackage } = item;
		let { fromGround, paperShapeType } = query;
		let { ready, more, selectedPrice, active, informationList } = this.state;

		let isFromGround = (fromGround || '').match(/Y/i);
		let isSelectedTemplates = String(category).match(/business-card/i);

		return ready &&
			(
				<div className="options-wrap">
					<div className="top">
						{item[ 'premium' ] && (
							<span className="icon icon-tag-special-5722 premium-icon"/>
						)}

						{/** [productSubName]
						 {(isAccessory && item[ 'productSubName' ]) && (
							<span className="product-sub">[{item[ 'productSubName' ]}]</span>
						)}
						 */}

						<div className={`title ${item[ 'premium' ] ? 'premium' : ''}`}>
							{item[ 'templateName' ]}
						</div>

						{item[ 'premium' ] && (
							<span className="designer-area">
									<span className="icon icon-designby-5715 premium-icon"/>
									<span className="name">{item[ 'designerName' ]}</span>
								</span>
						)}

						{item[ 'templateDescription' ] && (
							<div className="desc">
								{item[ 'templateDescription' ]}
							</div>
						)}

						{(
							!isAccessory && designCount > 0 && String(category).match(/business-card|sticker/i)
						) && (
							<div className="template-cnt">
								{(
									(category || '').match(/business-card/) && !(paperShapeType || '').match(/TRANSPARENCY/)
								) && (
									<span>하나의 앞면 디자인에<br/></span>
								)}
								<b>{designCount}가지</b> 디자인이<br/>한
								세트인 상품입니다.
							</div>
						)}

						<div className="default-info">
{/*								<span>
		              <span>배송안내 : 택배 배송 1~2일 소요</span>
								</span>

								<span>
			              <span>배송료 : 3,000원 (3만원 이상 주문시 무료)</span>
								</span>*/}

{/*              {isCalendar && (
                [{text:'배송안내 : 택배 배송 1~2일 소요'},{text: '배송료 : 3,000원 (3만원 이상 주문시 무료)'}].reduce((target,item,index)=>{
                  let { text } = item;
                  target.push(
                    <span>
                      <span>{ text }</span>
                    </span>
                  );

                  return target;
                },[])
              )}*/}

              {isCalendar && (
                item && (item[ 'optionInfo' ] || []).reduce((target, field) => {
                  let value = !!item[ 'optionInfo' ] ? field[ 'value' ] : item[ field[ 'keyName' ] ];

                  value && target.push(
                    <span>
	                      <span>{ field[ 'label' ] } : { value }</span>
	                    </span>
                  );

                  return target;
                }, [])
              )}

							{isAccessory
								?
								(item[ 'optionInfo' ] || this.accessoryInfoFields).reduce((target, field) => {
									let value = !!item[ 'optionInfo' ] ? field[ 'value' ] : item[ field[ 'keyName' ] ];

									value && target.push(
										<span>
	                      <span>{ field[ 'label' ] } : { value }</span>
	                    </span>
									);

									return target;
								}, [])
								:
								(
									(!more && !!navigation)
										?
										(
											<span className="more">
													<button type="button" onClick={this.onClickMore}>더보기</button>
												</span>
										)
										:
										(informationList || []).length > 0 && (informationList.reduce((target, list) => {
										  let value = list[ 'value' ];
                      let label = list[ 'label' ];

											(list && list[ 'value' ]) && target.push(
												<span>
                          {
                            label ?
                              <span dangerouslySetInnerHTML={{__html: `${label} : ${value}`}}/>
                              :
                              <span dangerouslySetInnerHTML={{__html: `${value}`}}/>
                          }
                        </span>
											);

											return target;
										}, []))
								)
							}

							{(more && !!item[ 'premium' ]) && (
								<span>
		                <span>스페셜 디자인은 추가 금액이 부과됩니다.</span>
									</span>
							)}
						</div>
					</div>

					{!isFromGround && (
						<div className="middle">
							{isAccessory && (
								<div className="quantity">
									<span>
										<span>수량</span>
										<span>
											{isPackage
												?
												(
													<Field name={`quantity`}
													       className="box"
													       placeholder="수량을 선택하세요."
													       width={180}
													       height={100}
													       options={this.getQuantityOption()}
													       onChange={this.onChangeQuantity}
													       component={SelectField}
													       validate={[ Validate.required ]}/>
												)
												:
												(
													<Field name={`quantity`}
													       maxLength={3}
													       onChange={this.onChangeQuantity}
													       onBlur={this.onChangeQuantity}
													       component={InputQuantityField}
													       validate={[ Validate.required, Validate.number, Validate.minValue1 ]}
													       normalize={Normalize.upperValue()}/>
												)
											}

										</span>
									</span>
								</div>
							)}

							<div className="price">
								<span>
									<span>가격</span>
									<span>
										<span className="total">
											{React.cloneElement(<CountUp/>, {
												start: 0,
												end: Number(selectedPrice),
												useEasing: true,
												useGrouping: true,
												duration: .3,
												separator: ',',
												suffix: '원'
											})}
										</span>

									</span>
								</span>
							</div>
						</div>
					)}

					{!isFromGround && (
						<div className="bottom">
							{isAccessory
								?
								(
									<div className="button">
										<button type="submit"
										        disabled={!valid}
										        className={`btn-${valid ? 'blue' : 'gray'}-medium full`}>장바구니 담기
										</button>
									</div>
								)
								:
								(
									<div className="button">
										<button type="submit"
										        className={`btn-${(isSelectedTemplates && !valid) ? 'gray' : 'blue'}-medium left`}
										        disabled={ (isSelectedTemplates && !valid) || !item }>디자인 선택
										</button>

										<button type="button"
										        className={`btn-blue-medium right ${active ? 'active' : ''}`}
										        onClick={this.onClickLike}/>
									</div>
								)}
						</div>
					)}
				</div>
			)
	}
}
