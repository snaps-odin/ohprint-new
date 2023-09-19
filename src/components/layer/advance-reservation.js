

import React from 'react';
import { connect } from 'react-redux';
import { change, Field, reduxForm } from 'redux-form';

import { LayerTypes } from 'constants/index';
import { getDeepValue } from 'utils/json';
import * as Validate from 'utils/validate';
import { ActionEvents, ActionLayer, ActionCommon } from 'actions/index';

import { InputField, CheckBoxField } from 'components/common/fields';

import TermsIndex from 'components/policy/terms';
import PrivacyIndex from 'components/policy/privacy';

class advanceRreservation extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      showType: null
    };

    this.onClickClose = this.onClickClose.bind(this);
    this.onClickTerms = this.onClickTerms.bind(this);
    this.onClickPrivacy = this.onClickPrivacy.bind(this);
    this.onClickHidePolicy = this.onClickHidePolicy.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeSelectAll = this.onChangeSelectAll.bind(this);

  }

  onClickClose(event) {
    let { actions: { handleCloseContentsLayer } } = this.props;

    handleCloseContentsLayer();
  }

  onSubmit(values) {
    let { actions: { handleOpenAlertLayer, handleCloseContentsLayer, handleCreateEventsCommentsByIdx, handleExecuteAfterUserLogin }, states : { currentForm : { values : { choose, required } } } } = this.props;


    let params = {
      'receiveSMSAgree' : (!!choose),
      'receiveEmailAgree' : (!!choose),
      'attribute03': values[ 'phoneNumbers' ].join('-'),
      'attribute04' : (!!choose)
    }


    return   handleExecuteAfterUserLogin().then(() => {
      handleCreateEventsCommentsByIdx(37, params).then(result => {
        let msg = result[ 'message' ];

        switch(msg){
          case '이미 응모에 참여하였습니다':
            msg = '이미 신청하셨습니다.';
            break;

          case '이벤트 참여가 완료되었습니다.<br/>무료 배송 쿠폰이 발급되었습니다.':
            msg = '이벤트 참여가 완료되었습니다.';
            break;
        }

        handleOpenAlertLayer({
          description: msg || '완료.',
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

  onClickTerms(event) {
    this.changeShowType('terms');
  }

  onClickPrivacy(event) {
    this.changeShowType('privacy');
  }

  onClickHidePolicy(event) {
    this.changeShowType(null);
  }

  changeShowType(showType) {
    let { actions: { handleUpdateLayer } } = this.props;

    Promise.all([
      this.setState({ showType })
    ]).then(() => {
      handleUpdateLayer();
    });
  }

  onChangeSelectAll(event, value) {
    this.setSelectAll(value);
  }

  setSelectAll(bool) {
    let { actions: { handleChangeFormValue } } = this.props;

    handleChangeFormValue(`required`, bool);
    handleChangeFormValue(`choose`, bool);

  }

  render() {
    let { states: { currentForm, ui: { view: { width, height } } }, handleSubmit, valid, submitting } = this.props;

    let syncErrors = getDeepValue(currentForm, 'syncErrors') || {};
    let showType = this.state.showType;
    let scrollHeight = height * 0.6;

    return (
      (showType && showType === "terms") ? (
          <div className="policy-advance-reservation-layer-wrap popup">
            <div className="container">
              <div className="top">
                <h1>[필수] 개인정보 수집 및 이용동의</h1>
              </div>
              <div className="middle">
                <h2>이벤트 참여를 위한 개인정보 수집 및 이용동의</h2>
                <section>
                  {showType && (
                    <div className="container" style={{'overflow-y':'auto', 'max-height':`${scrollHeight}px`}}>

                      <div className="middle">
                        <section>
                          <div>
                            (주)스냅스 (오프린트미) 는 개인정보 관련 법률 (개인정보보호법, 정보통신망 이용촉진 및<br/>
                            정보보호에 관한 법률)을 준수하며 수집된 개인 정보는 해당 서비스 외에 다른 용도로 절대 <br/>
                            사용하지 않으며, 사용자 요청 시 바로 삭제할 수 있습니다.<br/>
                          </div>
                        </section>
                        <section>
                          <h1 id="section-1">1. 수집항목 및 이용목적</h1>
                          <ul>
                            <li>수집항목 : 이름, 연락처, 이메일, 전화번호</li>
                            <li>이용목적 : 이벤트 내용 안내 및 혜택 지급</li>
                          </ul>
                        </section>
                        <section>
                          <h1 id="section-2">2. 개인정보를 제공받는 자</h1>
                          <ul>
                            <li>㈜스냅스(오프린트미)</li>
                          </ul>
                        </section>
                        <section>
                          <h1 id="section-3">3. 보유 및 이용 기간</h1>
                          <ul>
                            <li>이벤트 종료 후 1개월</li>
                          </ul>
                        </section>
                        <section>
                          <div>
                            귀하는 개인정보 제공에 동의하지 않으실 권리가 있습니다.<br/>
                            단, 개인정보 제공에 동의하지 않을 경우 이벤트에 참여 하실 수 없습니다.<br/><br/>
                            그 밖의 사항은 개인정보취급방침을 준수합니다.
                          </div>
                        </section>
                      </div>
                    </div>
                  )}
                </section>
              </div>
              <div className="bottom">
                <button type="button" className={`btn-blue-medium`} onClick={this.onClickHidePolicy}>확인</button>
              </div>
            </div>
            <button className="icon-close-w-1414 close" onClick={this.onClickHidePolicy}/>
          </div>
        )
        :
        (showType && showType === "privacy") ?
          (
            <div className="policy-advance-reservation-layer-wrap popup" >
              <div className="container" style={{ width: '650px' }}>
                <div className="top">
                  <h1>[선택] 개인정보 수집 및 이용동의</h1>
                </div>
                <div className="middle">
                  <h2>서비스 및 이벤트 정보제공을 위한 개인정보 수집 및 이용동의</h2>
                  <section>
                    {showType && (
                      <div className="container" style={{'overflow-y':'auto', 'max-height':`${scrollHeight}px`}}>

                        <div className="middle">
                          <section>
                            <h1 id="section-1">1. 수집항목 및 이용목적</h1>
                            <ul>
                              <li>수집항목 : 이름, 연락처, 이메일, 전화번호, 마케팅수신 동의 여부</li>
                              <li>이용목적 : 상품 및 서비스 안내, 이벤트 정보 및 혜택 제공</li>
                            </ul>
                          </section>
                          <section>
                            <h1 id="section-2">2. 개인정보를 제공받는 자</h1>
                            <ul>
                              <li>㈜스냅스(오프린트미)</li>
                            </ul>
                          </section>
                          <section>
                            <h1 id="section-3">3. 보유 및 이용 기간</h1>
                            <ul>
                              <li>회원 탈퇴 후 6개월간 혹은 동의 철회 시</li>
                            </ul>
                          </section>
                          <section>
                            <div>
                              ※ 선택 개인정보의 경우 동의를 거부하실 수 있으나 일부 서비스 이용<br/>및 각종광고, 이벤트 등의 혜택정보 제공이 제한될 수 있습니다.
                            </div>
                          </section>
                        </div>
                      </div>
                    )}
                  </section>
                </div>
                <div className="bottom">
                  <button type="button" className={`btn-blue-medium`} onClick={this.onClickHidePolicy}>확인</button>
                </div>
              </div>
              <button className="icon-close-w-1414 close" onClick={this.onClickHidePolicy}/>
            </div>
          )
          :
          (
            <div className="advance-reservation-layer-wrap popup">
              <div className="container" style={showType ? { display: 'none', height: '0' } : null}>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                  <div className="top">
                    <h2>캘린더 얼리버드 신청하기</h2>
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
                                   className="box"
                                   maxLength={3}
                                   component={InputField}
                                   validate={[ Validate.required, Validate.shortMinLength2, Validate.number ]}/>

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
                    <Field name={`select-all`}
                           label="아래 내용을 확인하였으며, 모두 동의 합니다."
                           onChange={this.onChangeSelectAll}
                           component={CheckBoxField}/>

                    <Field name={`required`}
                           label={(
                             <span className="desc">
                         본 이벤트 참여를 위해 <button type="button" onClick={this.onClickTerms}>개인정보 수집 및 이용</button>에 대한 내용을 확인하고 동의합니다. (필수)
									     </span>
                           )}
                           component={CheckBoxField}
                           validate={[ Validate.required ]}/>

                    <Field name={`choose`}
                           label={(
                             <span className="desc">
                         서비스 및 이벤트 정보제공을 위한 <button type="button" onClick={this.onClickPrivacy}>개인정보 수집 및 이용</button>동의(선택)
									     </span>
                           )}
                           component={CheckBoxField}/>
                  </div>

                  <div className="bottom">
                    <button type="submit"
                            className={`btn-${valid ? 'blue' : 'gray'}-medium`}
                            disabled={submitting}>전송
                    </button>
                  </div>
                </form>
              </div>

              <button className="icon icon-close-w-1414 close"
                      type="button"
                      style={showType ? { display: 'none', height: '0' } : null}
                      onClick={this.onClickClose}/>
            </div>
          )
    )
  }
}

const formName = 'layer-sms';

const mapStateToProps = (state, ownerProps) => {
  return {
    states: {
      ...ownerProps.states,

      currentForm: state.form[ formName ]
    },
    initialValues: {
      phoneNumbers: []
    }
  };
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      ...ownerProps.actions,
      handleUpdateLayer: () => dispatch(ActionLayer.updateLayer()),
      handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),
      handleCreateEventsCommentsByIdx: (eventIdx, formData) => dispatch(ActionEvents.createEventsCommentsByIdx(eventIdx, formData)),
      handleExecuteAfterUserLogin: () => dispatch(ActionCommon.executeAfterUserLogin()),
      handleCloseContentsLayer: () => dispatch(ActionLayer.closeContentsLayer())
    }
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: formName
})(advanceRreservation));
