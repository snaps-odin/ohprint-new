

import React from 'react';
import { connect } from 'react-redux';
import {change, Field, reduxForm} from 'redux-form';

import { PHONE_NUMBER } from 'configs/index';
import { LayerTypes } from 'constants/index';
import { ActionOrder } from 'actions/index';
import { getHeight } from 'utils/dom';
import { getDeepValue } from 'utils/json';
import * as Validate from 'utils/validate';
import * as Normalize from 'utils/normalize';
import { ActionEvents, ActionCommon, ActionCoupon } from 'actions/index';

import { TextAreaField, CheckBoxField, SelectField, InputField } from 'components/common/fields';
import { getEnv } from 'utils/url';


class DesignCompetition extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      showType: null
    };

    this.onClickClose = this.onClickClose.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickTerms =  this.onClickTerms.bind(this);
    this.onClickPrivacy = this.onClickPrivacy.bind(this);
    this.onClickHidePolicy = this.onClickHidePolicy.bind(this);
    this.onChangeSelectAll = this.onChangeSelectAll.bind(this);
  }

  onClickClose(event) {
    let { actions: { handleCloseContentsLayer } } = this.props;

    handleCloseContentsLayer();
  }

  onSubmit(values) {
    let { options, actions } = this.props;
    let { handleOpenAlertLayer, handleCloseContentsLayer, handleCreateEventsCommentsByIdx, handleExecuteAfterUserLogin, handleCreateCouponByCouponCode } = actions;

    let coupon = (getEnv() === "dev" ? "124A5513-A702-1B84" : "124E8017-4A85-B454");


    let params = {
      'attribute06': values[ 'userName' ],
      'attribute08': values[ 'phone' ],
      'attribute09': values[ 'url' ],
    };


    return  handleExecuteAfterUserLogin().then(() => {

      Promise.all([
        handleCreateEventsCommentsByIdx(38, params)
      ]).then((result) => {
        let msg = result[0][ 'message' ];

        switch(msg){
          case '이미 응모에 참여하였습니다':
            handleOpenAlertLayer({
              description: '이미 신청하셨습니다.',
              callback: () => { handleCloseContentsLayer(); }
            })
            break;

          case '이벤트 참여가 완료되었습니다.<br/>무료 배송 쿠폰이 발급되었습니다.':
            Promise.all([
              handleCreateCouponByCouponCode(coupon)
            ]).then((result) => {
              handleOpenAlertLayer({
                description: "이벤트 참여가 완료되었습니다.",
                callback: () => {
                  handleCloseContentsLayer();
                }
              });
            }).catch(error => {
              handleOpenAlertLayer({
                description: "이벤트 참여는 완료되었으나,<br/>쿠폰 발급이 실패하였습니다.<br/>관리자에게 문의 부탁드립니다.",
                callback: () => {
                  handleCloseContentsLayer();
                }
              });
            });
            break;
        }

      }).catch(error => {

        if(error === "해당 쿠폰은 등록 가능한 수량을 넘었습니다." || error === "해당 쿠폰은 만료 되었습니다."){
          error = '쿠폰 지급이 종료되었습니다.<br/>다음 기회에 이용해주세요.';
        }

        if(error === "이미 등록된 쿠폰입니다."){
          error = '쿠폰이 이미 발급되었습니다.<br/>쿠폰/머니 페이지에서 확인해보세요.';
        }

        if(error === "해당 쿠폰을 찾을 수 없습니다."){
          error = '쿠폰이 곧 오픈됩니다.<br/>조금만 더 기다려주세요!';
        }


        handleOpenAlertLayer({
          description: error,
          callback: () => { handleCloseContentsLayer(); }
        })
      });
    })
  }

  onClickTerms(event) {
    this.changeShowType('term');
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
    let { options, states: { ui: { view: { height } }, currentForm, user : { userId } }, handleSubmit, valid } = this.props;
    let { showType } = this.state;
    //let { data: { title, width } } = options;
    let title = "어패럴 디자인 챌린지";
    let width = 500;


    let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
      ? height - (50 + 60 + getHeight(this.bottom))
      : null;

    let syncErrors = getDeepValue(currentForm, 'syncErrors') || {};

    return (
      <div className={`design-competition ${showType ? 'events-policy' : ''} popup`}
           style={{ width: `${width}px` }}>

        <div className="container" style={showType ? { display: 'none', height: '0' } : null}>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div className="top">
              <h2>{title}</h2>
            </div>

            <div className="middle" style={{ height: middleHeight ? `${middleHeight}px` : '' }}>
              <div className="inner" ref={(c) => {this.inner = c;}}>
                <table border={0}>
                  <colgroup>
                    <col style={{ width: '65px' }}/>
                    <col style={{ width: '375px' }}/>
                  </colgroup>
                  <tbody>
                  <tr>
                    <th>아이디</th>
                    <td>
                      <label>{userId}</label>
                    </td>
                  </tr>
                  <tr>
                    <th>연락처</th>
                    <td>
                      <Field type="text"
                             name="phone"
                             className="box"
                             placeholder="연락처를 입력해 주세요."
                             component={InputField}
                             validate={[ Validate.required, Validate.phoneNumber ]}/>
                    </td>
                  </tr>
                  <tr>
                    <th>URL</th>
                    <td>
                      <Field type="text"
                             name="url"
                             className="box"
                             placeholder="인스타그램 및 트위터 게시물 URL을 입력해주세요."
                             component={InputField}
                             validate={[ Validate.required, Validate.shareURL, Validate.minLength33 ]}/>
                    </td>
                  </tr>
                  </tbody>
                </table>

                <Field name={`select-all`}
                       label="아래 내용을 확인하였으며, 모두 동의 합니다."
                       onChange={this.onChangeSelectAll}
                       component={CheckBoxField}/>

                <Field name={`required`}
                       label={(
                         <span className="desc">
                           개인정보 수집 및 이용 동의 <button type="button" onClick={this.onClickTerms}>[자세히 보기]</button>
									       </span>
                       )}
                       component={CheckBoxField}
                       validate={[ Validate.required ]}/>

                <Field name={`choose`}
                       label={(
                         <span className="desc">
                           이벤트 및 프로모션 알림 수신 동의 <button type="button" onClick={this.onClickPrivacy}>[자세히 보기]</button>
									        </span>
                       )}
                       component={CheckBoxField}
                       validate={[ Validate.required ]}
                />
{/*                <Field name="agreement"
                       label={(
                         <span className="desc">본 이벤트 참여를 위해&nbsp;
                           <button type="button" onClick={this.onClickPrivacy}>개인정보 수집 및 이용</button>에 대한
											       내용을 확인하고 동의합니다.
										       </span>
                       )}
                       component={CheckBoxField}
                       validate={[ Validate.required ]}/>*/}
              </div>
            </div>

            <div className="bottom" ref={(c) => {this.bottom = c;}}>
              <button type="submit"
                      className={`btn-${valid ? 'blue' : 'gray'}-medium`}>쿠폰 받기
              </button>
            </div>
          </form>
        </div>


        {(showType && showType === "term") &&
          (
            <div className="container container-layer">
              <form>
                <div className="top">
                  <h2>개인정보 수집 및 제 3자 제공 이용 동의</h2>
                </div>

                <div className="title">
                  <label>개인정보 수집 및 제 3자 제공 이용 동의</label>
                </div>

                <div className="middle">
                  <section>
                    <div>
                      (주)스냅스 (오프린트미) 는 개인정보 관련 법률 (개인정보보호법, 정보통신망 이용촉진 및 정보보호에 관한 법률)을 준수하며 수집된 개인 정보는 해당 서비스 외에
                      다른 용도로 절대 사용하지 않으며, 사용자 요청 시 바로 삭제할 수 있습니다.
                    </div>
                  </section>
                  <section>
                    <h1 id="section-1">1. 수집항목 및 이용목적</h1>
                    <ul>
                      <li>수집항목 : 아이디, 이름, 전화번호, SNS URL</li>
                      <li>이용목적 : 이벤트 당첨 개별 안내</li>
                    </ul>
                  </section>
                  <section>
                    <h1 id="section-2">2. 개인정보를 제공받는 자</h1>
                    <ul>
                      <li>(주)스냅스 (오프린트미)</li>
                    </ul>
                  </section>
                  <section>
                    <h1 id="section-3">3. 보유 및 이용 기간</h1>
                    <ul>
                      <li>당첨자 발표 후 1개월 (이벤트 참여 고객 응대를 위함)</li>
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

                <div className="bottom" ref={(c) => {this.bottom = c;}}>
                  <button type="button"
                          className="btn-blue-medium"
                          onClick={this.onClickHidePolicy}>완료
                  </button>
                </div>
              </form>
            </div>
          )}


        {(showType && showType === "privacy") &&
          (
            <div className="container container-layer">
              <form>
                <div className="top">
                  <h2>이벤트 및 프로모션 알림 수신 동의</h2>
                </div>

                <div className="title">
                  <label>이벤트 및 프로모션 알림 수신 동의</label>
                </div>

                <div className="middle">
                  <div className="inner text-center">
                    <em>
                      ㈜스냅스가 운영하는 오프린트미 인터넷 사이트를 통하여 제공하는<br/>모든 서비스 및 이벤트와 관련된 프로모션 알림 수신에 동의합니다.
                    </em>
                  </div>
                </div>

                <div className="bottom" ref={(c) => {this.bottom = c;}}>
                  <button type="button"
                          className="btn-blue-medium"
                          onClick={this.onClickHidePolicy}>완료
                  </button>
                </div>
              </form>
            </div>
        )}

        <button className="icon icon-close-w-1414 close"
                type="button"
                onClick={this.onClickClose}/>
      </div>
    );
  }
}

const formName = 'layer-events-apply';

const mapStateToProps = (state, ownerProps) => {
  return {
    states: {
      ...ownerProps.states,
      user: state.user,

      currentForm: state.form[ formName ]
    }
  };
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      ...ownerProps.actions,

      handleCreateEventsCommentsByIdx: (eventIdx, formData) => dispatch(ActionEvents.createEventsCommentsByIdx(eventIdx, formData)),
      handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),
      handleExecuteAfterUserLogin: () => dispatch(ActionCommon.executeAfterUserLogin()),
      handleCreateCouponByCouponCode: (couponCode) => dispatch(ActionCoupon.createCouponByCouponCode(couponCode))
    }
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: formName
})(DesignCompetition));
