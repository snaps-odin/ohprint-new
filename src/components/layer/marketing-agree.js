

import React from 'react';
import { connect } from 'react-redux';
import { ActionLayer, ActionUser, ActionCommon, ActionEvents } from 'actions/index';
import { setMarketingAgreePopupVisited } from 'utils/storage';
import update from "react-addons-update";
import {change, Field, reduxForm} from "redux-form";
import { CheckBoxField, InputField, SelectField } from 'components/common/fields';
import * as Validate from 'utils/validate';
import { nowDate } from 'utils/date'
import { addCdn } from 'utils/url';

class MarketingAgree extends React.Component {
	constructor(...args) {
		super(...args);

    this.state = {
      showType: null
    };

    this.userInfo = null;

    this.options = [
      {label : '010' , value : '010'},
      {label : '011' , value : '011'},
      {label : '016' , value : '016'},
      {label : '017' , value : '017'},
      {label : '018' , value : '018'},
      {label : '019' , value : '019'},
      {label : '050' , value : '050'}
    ]

		this.onClickClose = this.onClickClose.bind(this);
    this.onClickSetPhone = this.onClickSetPhone.bind(this);
    this.onClickHide = this.onClickHide.bind(this);
    this.onClickPolicy = this.onClickPolicy.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;
		Promise.all([
      setMarketingAgreePopupVisited()
    ]).then(()=>{
      handleCloseContentsLayer();
    });
	}

  changeShowType(showValue) {
    this.setState(update(this.state,{
      showType : { $set: showValue }
    }));
  }

  onClickPolicy(event){
    this.changeShowType('policy');
  }

  onClickSetPhone(event) {
    this.changeShowType('phone');
  }

  onClickHide(event) {
    this.changeShowType(null);
  }

  onSubmit(values) {
    let { actions: { handleOpenAlertLayer, handleCloseContentsLayer, handleCreateEventsCommentsByIdx, handleExecuteAfterUserLogin } } = this.props;

    let phoneNumber = values[ 'phoneNumbers' ].join('-');
    let params = {
      'attribute03' : phoneNumber,
      receiveEmailAgree : true,
      receiveSMSAgree : true
    }

    return   handleExecuteAfterUserLogin().then(() => {
      handleCreateEventsCommentsByIdx(28, params).then(result => {

        let msg = result[ 'message' ];
        if(msg.indexOf('무료 배송 쿠폰이 발급되었습니다.') !== -1){
          msg = `수신 동의 참여 완료!<br/>쿠폰 발급이 완료되었습니다.<br/>(마케팅 수신 동의일자 : ${nowDate().format('YYYY.MM.DD')})`
        }

        handleOpenAlertLayer({
          description: msg || '쿠폰 지급 일정 알림 받기 신청이 완료되었습니다.',
          callback: () => {
            handleCloseContentsLayer();
          }
        });
      }).catch(error => {
        handleOpenAlertLayer({
          description: error,
          callback: () => { handleCloseContentsLayer(); }
        })
      });
    })
  }

  componentDidMount() {
	  let { options: { userInfo : { userCellPhoneNumber } }, actions : { handleChangeFormValue } } = this.props;

    if(this.props.options) {

      if(userCellPhoneNumber) {
        let phoneNumber = userCellPhoneNumber.split("-");

        if (phoneNumber && phoneNumber.length > 1) {
          for (let i = 0; i < 3; i++) {
            handleChangeFormValue("phoneNumbers[" + i + "]", phoneNumber[i] + "")
          }
        }
      }else{
        handleChangeFormValue("phoneNumbers[0]", "010");
      }


    }


    //handleChangeFormValue
    //phoneNumbers



  }


  render() {
		let { states : { ui : { view : { height } } }, handleSubmit, valid,  submitting } = this.props;
		let { showType } = this.state;

		return (
			<div className="marketing-agree-layer-wrap popup">

        {!showType ? (<div className="mainPopup">
					  <div className="middle">
              <img src={addCdn("/images/events/marketingAgree/agree-event@2x.jpg")} className="bodyImage"/>
              <span className="icon icon-close-w-2222 btnPosition" onClick={this.onClickClose}/>
              <button className="btnParticipate" onClick={this.onClickSetPhone}>
                <img src={addCdn("/images/events/marketingAgree/agree-event-btn@2x.png")}/>
              </button>
						</div>
{/*            <div className="bottom">
              <div className="tcell">
                <span onClick={this.onClickClose}>닫기</span>
              </div>
            </div>*/}
					</div>)
					:
					(
            showType === "phone" ?
              (<div className="phonePopup popup" >
                <div className="container">
                  <form onSubmit={handleSubmit(this.onSubmit)}>
                    <div className="top">
                      <h2>휴대폰 번호 입력하기</h2>
                    </div>

                    <div className="middle">
                      <div className="inner">
                        <table border={0}>
                          <colgroup>
                            <col style={{ width: '120px' }}/>
                            <col style={{ width: '320px' }}/>
                          </colgroup>
                          <tbody>
                          <tr>
                            <th>연락처</th>
                            <td className="form">
                              <Field name="phoneNumbers[0]"
                                     className="box cStyle"
                                     options={this.options}
                                     width={90}
                                     height={180}
                                     validate={[ Validate.required ]}
                                     component={SelectField}/>

                              <span>-</span>

                              <Field name="phoneNumbers[1]"
                                     className="box"
                                     maxLength={4}
                                     component={InputField}
                                     validate={[ Validate.required, Validate.shortMinLength3, Validate.number ]}/>

                              <span>-</span>

                              <Field name="phoneNumbers[2]"
                                     className="box"
                                     maxLength={4}
                                     component={InputField}
                                     validate={[ Validate.required, Validate.shortMinLength4, Validate.number ]}/>
                            </td>
                          </tr>
                          </tbody>
                        </table>

                      </div>
                    </div>

                    <div className="bottom">
                      <div>
                        <span onClick={this.onClickPolicy}>개인정보 수집 및 이용</span>을 확인하였으며, 정보 활용에 동의하십니까?
                      </div>
                      <button type="submit"
                              className={`btn-${valid ? 'blue' : 'gray'}-medium`}
                              disabled={submitting}>동의하고 참여하기
                      </button>
                    </div>
                  </form>
                </div>

              <button className="icon icon-close-w-1414 close"
                      type="button"
                      onClick={this.onClickHide}/>
          </div>
          )
          :
          (
            <div className="policy-layer-wrap" style={{width:'100%'}}>
              <div className="container">
                <div className="top">
                  <h1>서비스 및 이벤트 정보제공을 위한 개인정보 수집 및 이용동의</h1>
                </div>
                <div className="bottom">
                  <section>
                    <div className="policy-contents-wrap">
                      <div className="section">
                        <h4 id="section-1">1. 수집항목 및 이용목적</h4>
                        <span>
                          수집항목 : 이름, 연락처, 이메일, 전화번호, 마케팅수신 동의 여부<br/>
                          이용목적 : 상품 및 서비스 안내, 이벤트 정보 및 혜택 제공
                        </span>
                      </div>

                      <div className="section">
                        <h4 id="section-2">2. 개인정보를 제공받는 자</h4>
                        <span>
                          ㈜스냅스(오프린트미)
                        </span>
                      </div>

                      <div className="section">
                        <h4 id="section-3">3. 보유 및 이용 기간</h4>
                        <span>
                          회원 탈퇴 혹은 동의 철회 시
                        </span>
                      </div>
                      <h3>※ 선택 개인정보의 경우 동의를 거부하실 수 있으나 일부 서비스 이용 및 각종광고, 이벤트 등의 혜택정보 제공이 제한될 수 있습니다.</h3>
                    </div>
                  </section>
                </div>
              </div>
              <button className="icon-close-1414 close" onClick={this.onClickSetPhone}/>
            </div>
          )
        )}
			</div>
		)
	}
}
const mapStateToProps = (state, ownerProps) => {
	return {
    ...ownerProps
	}
};

const formName = 'layer-events-marketing-agree';

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
    actions: {
      ...ownerProps.actions,
      handleCloseContentsLayer: () => dispatch(ActionLayer.closeContentsLayer()),
      handleRequestUserByToken: () => dispatch(ActionUser.requestUserByToken()),
      handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),
      handleCreateEventsCommentsByIdx: (eventIdx, formData) => dispatch(ActionEvents.createEventsCommentsByIdx(eventIdx, formData)),
      handleExecuteAfterUserLogin: () => dispatch(ActionCommon.executeAfterUserLogin())
    }
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: formName
})(MarketingAgree));
