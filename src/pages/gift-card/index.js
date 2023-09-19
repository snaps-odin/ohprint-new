import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import { change, Field, reduxForm } from "redux-form";
import * as Validate from "utils/validate";

import { FileField, InputField, RadioField, SelectField, TextAreaField } from "components/common/fields";
import * as Normalize from "utils/normalize";
import { addCdn } from "utils/url";

import { LayerTypes } from "constants/index";

import { ActionEvents, ActionLayer } from "actions/index";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";

const GiftCardContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 1000px;
`;

const MainContainer = styled.div`
  position: relative;
  display: table;
  width: 1140px;
  margin: 0 auto;
  border-top: 1px solid #191919;
`;

const SubContents = styled.div`
  width: 100%;
  height: 292px;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 160px;
`;

const SubTitle = styled.div`
  position: absolute;
  font-family: "YoonGothicPro760", "dotum", "돋움", "Arial", "sans-serif";
  font-size: 16px;
  top: -33px;
  left: 0;
`;

const LeftContents = styled.div`
  display: table-cell;
  width: 46.6%;
  height: 90%;
  background: #f9fafc;
  text-align: center;
  vertical-align: middle;
`;

const LeftGiftCardImg = styled.div`
  display: table;
  background: url(${addCdn("/images/gift-card/card-mass-280176@2x.png")}) 50% 0 / cover no-repeat;
  width: 280px;
  height: 176px;
  color: white;
  font-size: 36px;
  margin: 0 auto;

  > span {
    cursor: default;
    display: table-cell;
    vertical-align: middle;
  }
`;

const RightContents = styled.div`
  display: table-cell;
  width: 53.4%;
  height: 90%;
  box-sizing: border-box;
  padding-left: 20px;
`;

const InputItem = styled.div`
  display: table;
  width: 100%;
  min-height: 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #eeeeee;
  padding: 7.5px 0 7.5px 0;
`;

const InputItemLabel = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 27.2%;

  > span {
    position: relative;
    display: inline-block;
    > span {
      position: absolute;
      right: -9px;
      top: 3px;
      display: block;
      color: red;
    }
  }
`;

const InputItemInput = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 72.8%;

  > div {
    width: 100%;
    > div {
      > input {
        height: 34px;
        border: solid 1px #eee;
        font-size: 12px;
        color: #999999;
        padding-left: 10px;
        box-sizing: border-box;
      }
      > span {
        display: block;
        color: red;
        margin-top: 10px;
      }
    }
  }
`;

const CalendarItemInput = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 72.8%;

  > div {
    width: 120px;
    > div {
      > input {
        height: 34px;
        border: solid 1px #eee;
        font-size: 12px;
        color: #999999;
        padding-left: 10px;
      }
      > span {
        display: block;
        color: red;
        margin-top: 10px;
      }
    }
  }
`;

const PhoneItemInput = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 85%;

  > div {
    float: left;
    width: 130px;

    &.line {
      width: 6px;
      height: 1px;
      margin: 18px 6px 0 6px;
      background: #cccccc;
      float: left;
    }

    > div {
      width: 100% !important;

      > input {
        height: 34px;
        border: solid 1px #eee;
        font-size: 12px;
        color: #999999;
        padding-left: 10px;
        box-sizing: border-box;
      }
      > span {
        display: block;
        color: red;
        margin-top: 10px;
      }
    }
  }
`;

const BusinessRegistrationItemInput = styled.div``;

const AddressItemInput = styled.div`
  > div {
    float: left;
    width: 100%;
    margin-bottom: 6px;

    &.line {
      width: 6px;
      height: 1px;
      margin: 18px 6px 0 6px;
      background: #cccccc;
      float: left;
    }

    > div {
      width: 100% !important;

      > input {
        height: 34px;
        border: solid 1px #eee;
        font-size: 12px;
        color: #999999;
        padding-left: 10px;
        box-sizing: border-box;
      }
      > span {
        display: block;
        color: red;
        margin-top: 10px;
      }
    }
  }

  > div:nth-child(1) {
    width: 83%;
  }

  > button {
    margin-left: 6px;
  }
`;

const PriceQuantityItemInput = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 85%;

  > div:nth-child(1) {
    width: 209px;
    margin-right: 6px;
  }

  > div {
    float: left;
    width: 211px;

    &.line {
      width: 6px;
      height: 1px;
      margin: 18px 6px 0 6px;
      background: #cccccc;
      float: left;
    }

    > div {
      width: 100% !important;

      > input {
        height: 34px;
        border: solid 1px #eee;
        font-size: 12px;
        color: #999999;
        padding-left: 10px;
        box-sizing: border-box;
      }
      > span {
        display: block;
        color: red;
        margin-top: 10px;
      }
    }
    > span {
      display: block;
      color: red;
      margin-top: 10px;
    }
  }
`;

const Title = styled.div`
  display: table;
  width: 100%;
  height: 160px;
  margin-bottom: 49px;

  > span {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    color: #191919;
    font-size: 28px;
  }
`;

const PriceDescription = styled.div`
  display: table;
  width: 100% !important;
  color: #666666;
  line-height: 1.67em;
  background: url(${addCdn("/images/icon/svg/belit-22.svg")}) 0 10px no-repeat;
  //padding: 10px 0 10px 8px;
  padding-left: 8px;
  margin: 10px 0 2.5px 0;
`;

const TotalPrice = styled.div`
  display: table;
  width: 100% !important;
  height: 50px;
  background: #f9fafc;
  margin-top: 6px;
`;

const TotalPriceItem = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 100%;
  text-align: left;
  font-family: "YoonGothicPro760", "dotum", "돋움", "Arial", "sans-serif";
  font-size: 12px;
  color: #191919;
  cursor: default;

  padding: 17px 10px 17px 10px;
  box-sizing: border-box;
`;

const TotalPriceItemLabel = styled.div`
  /*display: inline-block;*/
  line-height: 23px;

  > em {
    color: #ed2e2e;
  }
`;

const EtcOrderItemInput = styled.div`
  > div.textarea {
    > div {
      > textarea {
        height: 40px;
        min-height: 40px;
        max-height: 40px;
      }
    }

    > div.error {
      > span {
        color: red;
      }
    }
  }
`;

const SendMap = styled.div`
  display: table;
  width: 1140px;
  margin: 0 auto;
  height: 116px;
`;

const SendBtn = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
`;

const SubContentsItemMap = styled.div`
  display: table;
  width: 100%;
`;

const SubContentsItem = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 373px;
  height: 292px;

  > img {
    display: block;
    width: 180px;
    height: 180px;
    margin: 0 auto;
  }
  > span {
    display: block;
    margin: 0 auto;
    font-family: "YoonGothicPro740", "dotum", "돋움", "Arial", "sans-serif";
    font-size: 12px;
    line-height: 1.67;
    text-align: center;
    color: #191919;
    margin-top: 12px;
  }
`;

const SubContainer = styled.div`
  position: relative;
  display: table;
  width: 1140px;
  margin: 0 auto;
  border-top: 1px solid #191919;
  margin-top: 84px;
`;

const SubArrow = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;

  > img {
    width: 10px;
  }
`;

class GiftCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      salePrice: 0,
      discountRate: 0,
      moneyVoucher: 0,
      quantity: 0,
      validated: false,
      totalPrice: 0,
      endPrice: 0,
    };

    this.monetaryUnit = "원";

    this.priceUnit = 10000;

    this.giftCardItemPrice = [
      {
        label: "1만원권",
        value: this.priceUnit * 1,
      },
      {
        label: "3만원권",
        value: this.priceUnit * 3,
      },
      {
        label: "5만원권",
        value: this.priceUnit * 5,
      },
      {
        label: "10만원권",
        value: this.priceUnit * 10,
      },
    ];

    this.phoneNumberFirst = [
      { label: "010", value: "010" },
      { label: "011", value: "011" },
      { label: "016", value: "016" },
      { label: "017", value: "017" },
      { label: "018", value: "018" },
      { label: "019", value: "019" },
      { label: "050", value: "050" },
    ];

    this.priceInfo = [];

    this.onChangeProductGroupCode = this.onChangeProductGroupCode.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChangeCalendar = this.onChangeCalendar.bind(this);
    this.onClickZipCode = this.onClickZipCode.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onBuyMoneyChange = this.onBuyMoneyChange.bind(this);
  }

  onChangeCalendar() {}

  onChangeProductGroupCode(event, value) {
    const { quantity } = this.state;

    let totalPrice = quantity * value;

    this.onBuyMoneyChange(totalPrice);

    this.setState({
      moneyVoucher: value,
    });
  }

  async componentDidMount() {
    const {
      actions: { handleChangeFormValue, handleRequestGiftCardPriceInfo },
    } = this.props;

    this.priceInfo = await handleRequestGiftCardPriceInfo().then((data) => {
      return data;
    });

    handleChangeFormValue("orderPhoneNumber0", "010");
    handleChangeFormValue("giftCardItem", "50000");
    handleChangeFormValue("issuanceDocuments", "B");
    handleChangeFormValue("expireDate", "ONE_YEAR_LATER");

    //임시
    /*handleChangeFormValue('orderName','스냅스담당자');
    handleChangeFormValue('quantity',100);

    handleChangeFormValue('orderPhoneNumber1','1234');
    handleChangeFormValue('orderPhoneNumber2','1234');

    handleChangeFormValue('receiverZipCode',"07320");
    handleChangeFormValue('receiverAddress0',"서울 영등포구 여의대로 24 전경련회관");
    handleChangeFormValue('receiverAddress1',"21층 스냅스");
    handleChangeFormValue('contents',"기타요청사항테스트");*/

    this.onChangeProductGroupCode(null, 50000);
    //this.onBlur(null,100);
  }

  onBlur(event, value) {
    const { moneyVoucher } = this.state;
    const {
      actions: { handleChangeFormValue },
    } = this.props;
    let saveValue = value;

    if (saveValue > 100000) {
      saveValue = 0;
    }

    let totalPrice = moneyVoucher * saveValue;

    this.onBuyMoneyChange(totalPrice);

    this.setState({
      quantity: saveValue,
    });
  }

  onBuyMoneyChange(totalPrice) {
    let priceInfo = this.priceInfo;
    let priceUnit = this.priceUnit;

    let discountInfo = priceInfo.find((item) => {
      let checkPrice = totalPrice / priceUnit;
      if (item.startPrice <= checkPrice && item.endPrice >= checkPrice) {
        return true;
      }
    });

    !discountInfo && (discountInfo = priceInfo[priceInfo.length - 1]);

    let salePrice = totalPrice * (discountInfo.discountRate / 100);

    let endPrice = Math.floor(totalPrice - salePrice);

    this.setState({
      discountRate: discountInfo.discountRate,
      salePrice,
      totalPrice: Number(totalPrice),
      endPrice: Number(endPrice),
    });
  }

  onClickZipCode(event) {
    let {
      actions: { handleOpenContentsLayer, handleChangeFormValue },
    } = this.props;

    let field = this.field;

    handleOpenContentsLayer(LayerTypes.ZIPCODE, {
      callback: (data) => {
        handleChangeFormValue(`receiverZipCode`, data["zipCode"]);
        handleChangeFormValue(`receiverAddress0`, data["address"]);
      },
    });
  }

  onSubmit(value) {
    let {
      actions: { handleOpenAlertLayer, handleCloseContentsLayer, handleCreateGiftCard },
    } = this.props;
    let { discountRate, salePrice, totalPrice, endPrice } = this.state;
    const { contents, expireDate, giftCardItem, issuanceDocuments, orderName, orderPhoneNumber0, orderPhoneNumber1, orderPhoneNumber2, quantity, receiverAddress0, receiverAddress1, receiverZipCode } = value;

    const eventIdx = "169";
    const phoneNumber = orderPhoneNumber0 + "" + orderPhoneNumber1 + "" + orderPhoneNumber2;
    const voucherAmount = giftCardItem + "";

    let selectedFile = value["selectedFile"];
    let isErrorFiles = selectedFile && selectedFile.find((file) => file["error"]);

    if (!isErrorFiles) {
      let formData = new FormData();

      formData.append("address1", receiverAddress0); //주소
      formData.append("address2", receiverAddress1); //상세주소
      //formData.append('address3', 'false');//기타 주소
      formData.append("contact", phoneNumber); //연락처
      formData.append("content", contents); //요청사항
      formData.append("issuedDocType", issuanceDocuments); //발급서류구분 (B:세금계산서 / C:현금영수증)
      formData.append("name", orderName); //이름
      formData.append("orderCount", quantity); //주문수량
      formData.append("voucherAmount", voucherAmount); //상품권 금액
      //formData.append('voucherEdate', endDate);//상품권 완료일
      formData.append("expireDate", expireDate); //상품권 완료일
      formData.append("zip", receiverZipCode); //우편번호

      formData.append("totalAmount", totalPrice); //총 금액금액
      formData.append("discountAmount", endPrice); //할인금액
      formData.append("discountRate", discountRate); //할인율

      selectedFile &&
        selectedFile.length > 0 &&
        selectedFile.map((file) => {
          file && formData.append("files", file["file"]); //파일
        });

      return handleCreateGiftCard(formData)
        .then((result) => {
          handleOpenAlertLayer({
            description: "상품권 신청이 완료되었습니다.<br/>3영업일 이내로 스냅스 담당자가 입력하신 연락처로<br/>안내 드릴 예정입니다.",

            callback: () => {
              handleCloseContentsLayer();
              window.location.reload(true);
            },
          });
        })
        .catch((error) => {
          handleOpenAlertLayer({
            description: error,
            callback: () => {
              handleCloseContentsLayer();
            },
          });
        });
    }
  }

  render() {
    const {
      handleSubmit,
      actions: { handleChangeFormValue },
    } = this.props;
    const { moneyVoucher, quantity, totalPrice, salePrice, endPrice, discountRate } = this.state;

    const unit = this.monetaryUnit;
    const giftCardItemPrice = this.giftCardItemPrice;

    const CountUp = dynamic(() => import("react-countup"), { ssr: false });

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <GiftCardContainer>
          <Title>
            <span>상품권</span>
          </Title>
          <MainContainer>
            <SubTitle>신청하기</SubTitle>
            <LeftContents>
              <LeftGiftCardImg>
                <span>
                  {React.cloneElement(<CountUp />, {
                    start: 0,
                    end: Number(moneyVoucher),
                    useEasing: true,
                    useGrouping: true,
                    duration: 0.3,
                    separator: ",",
                    suffix: unit,
                  })}
                </span>
              </LeftGiftCardImg>
            </LeftContents>
            <RightContents>
              <InputItem>
                <InputItemLabel>
                  <span>
                    담당자<span>*</span>
                  </span>
                </InputItemLabel>

                <InputItemInput>
                  <Field name="orderName" className={"box"} type="text" placeholder="구매를 담당하시는 분의 성함을 입력해주세요." component={InputField} validate={[Validate.required]} />
                </InputItemInput>
              </InputItem>

              <InputItem>
                <InputItemLabel>
                  <span>
                    연락처<span>*</span>
                  </span>
                </InputItemLabel>

                <PhoneItemInput>
                  <Field name="orderPhoneNumber0" className="box" width={105} placeholder="선택" options={this.phoneNumberFirst} component={SelectField} />
                  <div className="line" />
                  <Field name="orderPhoneNumber1" className="box" type="text" maxLength={4} component={InputField} validate={[Validate.required, Validate.number]} />
                  <div className="line" />
                  <Field name="orderPhoneNumber2" className="box" type="text" maxLength={4} component={InputField} validate={[Validate.required, Validate.number]} />
                </PhoneItemInput>
              </InputItem>

              <InputItem>
                <InputItemLabel>
                  <span>
                    상품권 금액<span>*</span>
                  </span>
                </InputItemLabel>

                <PriceQuantityItemInput>
                  <Field name="giftCardItem" className="box" placeholder="선택" width={140} height={206} options={giftCardItemPrice || []} onChange={this.onChangeProductGroupCode} component={SelectField} validate={[Validate.required]} />

                  <Field name="quantity" type="text" className="box" placeholder="발급할 수량을 입력해 주세요." onBlur={this.onBlur} maxLength={6} component={InputField} normalize={Normalize.onlyNumber()} validate={[Validate.required, Validate.number]} />

                  <TotalPrice>
                    <TotalPriceItem>
                      {discountRate > 0 && (
                        <TotalPriceItemLabel>
                          상품 금액 :&nbsp;
                          {React.cloneElement(<CountUp />, {
                            start: 0,
                            end: totalPrice,
                            useEasing: true,
                            useGrouping: true,
                            duration: 0.3,
                            separator: ",",
                            suffix: unit,
                          })}
                          <br />
                          할인 금액 :&nbsp;
                          {React.cloneElement(<CountUp />, {
                            start: 0,
                            end: salePrice,
                            useEasing: true,
                            useGrouping: true,
                            duration: 0.3,
                            separator: ",",
                            suffix: unit,
                          })}
                          {` (${discountRate}% 할인)`}
                          <br />
                        </TotalPriceItemLabel>
                      )}
                      <TotalPriceItemLabel>
                        <em>
                          결제 금액 :&nbsp;
                          {React.cloneElement(<CountUp />, {
                            start: 0,
                            end: endPrice,
                            useEasing: true,
                            useGrouping: true,
                            duration: 0.3,
                            separator: ",",
                            suffix: unit,
                          })}
                        </em>
                      </TotalPriceItemLabel>

                      {/*                        {((startPrice - endPrice) !== 0) && (
                            <em>{
                              React.cloneElement(<CountUp/>, {
                                start: 0,
                                end: startPrice,
                                useEasing: true,
                                useGrouping: true,
                                duration: .3,
                                separator: ','
                              })
                            }</em>
                        )}*/}
                    </TotalPriceItem>
                  </TotalPrice>
                  <PriceDescription>100만원 이상 구매 시 3%, 최대 20%까지 할인이 적용됩니다.</PriceDescription>
                </PriceQuantityItemInput>
              </InputItem>

              <InputItem>
                <InputItemLabel>
                  <span>
                    사용기한<span>*</span>
                  </span>
                </InputItemLabel>

                <CalendarItemInput>
                  {/*<Field name={`endDate`}
                         component={InputCalendarField}
                         validate={[ Validate.required ]}/>*/}
                  <Field name="expireDate" label={"6개월"} keyValue={"SIX_MONTH_LATER"} component={RadioField} />
                  <Field name="expireDate" label={"1년"} keyValue={"ONE_YEAR_LATER"} component={RadioField} />
                  <Field name="expireDate" label={"2년"} keyValue={"TWO_YEAR_LATER"} component={RadioField} />
                </CalendarItemInput>
              </InputItem>

              <InputItem>
                <InputItemLabel>
                  <span>
                    발급 필요 서류<span>*</span>
                  </span>
                </InputItemLabel>

                <CalendarItemInput>
                  <Field name="issuanceDocuments" label={"세금계산서"} keyValue={"B"} component={RadioField} />
                  <Field name="issuanceDocuments" label={"현금영수증"} keyValue={"C"} component={RadioField} />
                </CalendarItemInput>
              </InputItem>

              <InputItem>
                <InputItemLabel>
                  <span>사업자등록증 첨부</span>
                </InputItemLabel>

                <BusinessRegistrationItemInput>
                  <Field name="file" id="file" handleChangeFormValue={handleChangeFormValue} maxFileLength={4} maxFileSize={5} giftCardFile={true} component={FileField} />
                </BusinessRegistrationItemInput>
              </InputItem>

              <InputItem>
                <InputItemLabel>
                  <span>상품권 받으실 곳</span>
                </InputItemLabel>

                <AddressItemInput>
                  <Field name={`receiverZipCode`} className="box medium" readOnly={true} defaultError={false} component={InputField} validate={[Validate.required]} />

                  <button type="button" className="btn-white-small" onClick={this.onClickZipCode}>
                    우편번호
                  </button>

                  <Field name={`receiverAddress0`} className="box" placeholder="기본 주소를 입력해 주세요." readOnly={true} defaultError={false} component={InputField} validate={[Validate.required]} />

                  <Field name={`receiverAddress1`} className="box" placeholder="상세 주소를 입력해 주세요." maxLength={45} showLength={true} defaultError={false} component={InputField} validate={[Validate.required]} normalize={Normalize.maxLength(45)} />
                </AddressItemInput>
              </InputItem>

              <InputItem>
                <InputItemLabel>
                  <span>기타 요청사항</span>
                </InputItemLabel>

                <EtcOrderItemInput>
                  <Field name="contents" placeholder="보내실 메시지 내용을 250자 이내로 입력해주세요." className="box" maxLength={250} showLength={true} component={TextAreaField} validate={[Validate.required]} normalize={Normalize.maxLength(250)} />
                </EtcOrderItemInput>
              </InputItem>
            </RightContents>
          </MainContainer>
          <SendMap>
            <SendBtn>
              <button className="btn-blue-medium">신청하기</button>
            </SendBtn>
          </SendMap>
          <SubContainer>
            <SubTitle>신청방법</SubTitle>

            <SubContents>
              <SubContentsItemMap>
                <SubContentsItem>
                  <img src={addCdn("/images/gift-card/giftcard-4-180180@2x.png")} alt={""} />
                  <span>
                    간단 입력 항목을 작성 하신 후<br />
                    [신청하기]를 클릭해주세요.
                  </span>
                </SubContentsItem>

                <SubArrow>
                  <img src={addCdn("/images/gift-card/arrow-1018@2x.png")} alt={""} />
                </SubArrow>

                <SubContentsItem>
                  <img src={addCdn("/images/gift-card/giftcard-5-180180@2x.png")} alt={""} />
                  <span>
                    영업일 내 입력하신 연락처로 오프린트미 담당자가
                    <br />
                    [상품권 비용 결제]와 [증빙서류 발급] 등 안내를 진행합니다.
                  </span>
                </SubContentsItem>

                <SubArrow>
                  <img src={addCdn("/images/gift-card/arrow-1018@2x.png")} alt={""} />
                </SubArrow>

                <SubContentsItem>
                  <img src={addCdn("/images/gift-card/giftcard-6-180180@2x.png")} alt={""} />
                  <span>
                    원하시는 날짜와 수량에 맞춰
                    <br />
                    상품권을 제작하여 배송 또는 모바일로 안내 드립니다.
                  </span>
                </SubContentsItem>
              </SubContentsItemMap>
            </SubContents>
          </SubContainer>
        </GiftCardContainer>
      </form>
    );
  }
}

const formName = "gift-card-form";

const mapStateToProps = (state) => {
  return {
    states: {
      config: state.config,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleCloseContentsLayer: () => dispatch(ActionLayer.closeContentsLayer()),
      handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),
      handleCreateGiftCard: (formData) => dispatch(ActionEvents.createGiftCard(formData)),
      handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),

      handleRequestGiftCardPriceInfo: () => dispatch(ActionEvents.requestGiftCardPriceInfo()),

      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
    },
  };
};

const validate = (values, props) => {
  let error = { option: {} };

  if (values.quantity > 100000) {
    error["quantity"] = `최대 100,000장 주문 가능합니다.`;
  }

  return error;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: formName,
    validate,
  })(GiftCard),
);

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
