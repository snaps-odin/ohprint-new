import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { PHONE_NUMBER } from 'configs/index';
import { LayerTypes } from 'constants/index';
import { ActionOrder } from 'actions/index';
import { getHeight } from 'utils/dom';
import { getDeepValue } from 'utils/json';
import * as Validate from 'utils/validate';
import * as Normalize from 'utils/normalize';
import { ActionCoupon, ActionEvents } from 'actions/index';

import { TextAreaField, CheckBoxField, SelectField, InputField } from 'components/common/fields';
import {isPhoneNumber} from "../../utils/validate";

class EventsNewYearWishes extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      showType: null
    };

    this.onClickClose = this.onClickClose.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickPrivacy = this.onClickPrivacy.bind(this);
    this.onClickHidePolicy = this.onClickHidePolicy.bind(this);
  }

  onClickClose(event) {
    let { actions: { handleCloseContentsLayer } } = this.props;

    handleCloseContentsLayer();
  }

  onSubmit(values) {
    let { options, actions, states: { user : { userId, userName } } } = this.props;
    let { eventIdx, callback } = options;
    let { handleOpenAlertLayer, handleCloseContentsLayer, handleCreateEventsCommentsByIdx, handleCreateCouponByCouponCode } = actions;

    let params = {
      'attribute06': userId,
      'attribute07': values[ 'userName' ],
      'attribute08': values[ 'phone' ],
      'bbsContents': values[ 'contents' ]
    };

    let couponNumber = '1278C54B-A5B5-EBC1';

    return handleCreateEventsCommentsByIdx(eventIdx, params).then(async result => {
      let msg = result['message'];

      if (msg.indexOf('무료 배송 쿠폰이 발급되었습니다.') !== -1) {
        try{
          await handleCreateCouponByCouponCode(couponNumber);
          msg = '이벤트 참여 및 쿠폰 지급이 완료되었습니다.';
        }catch(e){
          msg = '이벤트는 참여되었으나, 쿠폰 발급이 실패하였습니다.';
        }
      }

      if (msg.indexOf('이미 응모에 참여하였습니다') !== -1) {
        msg = '이미 참여 하셨습니다.';
      }


      handleOpenAlertLayer({
        description: msg || '이벤트 참여가 완료되었습니다.',

        callback: () => {
          Promise.all([
            callback && callback()
          ]).then(() => {
            handleCloseContentsLayer();
          });
        }
      });
    }).catch(error => {
      handleOpenAlertLayer({
        description: error,
        callback: () => { handleCloseContentsLayer(); }
      })
    });
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

  render() {
    let { options, states: { ui: { view: { height } }, currentForm, user : { userId, userName } }, handleSubmit, valid } = this.props;
    let { showType } = this.state;
    //let { data: { title, width } } = options;
    let title = "2022년, 이루고 싶은 소망을 적어주세요.";
    let width = 500;

    let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
      ? height - (50 + 60 + getHeight(this.bottom))
      : null;

    let syncErrors = getDeepValue(currentForm, 'syncErrors') || {};

    return (
      <div className={`events-cheer-up-recommend ${showType ? 'events-policy' : ''} popup`}
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
                      {userId}
                    </td>
                  </tr>
                  <tr>
                    <th>성명</th>
                    <td>
                      <Field name="userName"
                             className="box"
                             width={246}
                             maxLength={15}
                             placeholder="성명을 입력해주세요."
                             component={InputField}
                             validate={[ Validate.required ]}/>
                    </td>
                  </tr>
                  <tr>
                    <th>연락처</th>
                    <td>
                      <Field type="text"
                             name="phone"
                             className="box"
                             placeholder="연락처를 입력해주세요. (-포함)"
                             component={InputField}
                             validate={[ Validate.required, Validate.phoneNumber ]}/>
                    </td>
                  </tr>
                  <tr>
                    <th  className={"caption"} colSpan={"2"}>
                      2022년, 꼭 이루고 싶은 소망을 적어주세요.<br/>
                      오프린트미가 당신의 소원을 응원할게요!

                    </th>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <Field name="contents"
                             className="box"
                             placeholder="내용을 입력해 주세요."
                             showLength={false}
                             component={TextAreaField}
                             validate={[ Validate.required, Validate.minLength20 ]}
                             />
                      <div className={"subCaption"}>
                        * 이벤트 종료 후 남겨주신 소망은 오프린트미 이벤트 및 컨텐츠로 활용 될 수 있습니다. (추후 협의 예정)
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>

                <Field name="agreement"
                       label={(
                         <span className="desc">
                           본 이벤를 응모하기 위해&nbsp;<button type="button" onClick={this.onClickPrivacy}>개인정보수집 및 이용</button>에 대한 내용을 확인하고 동의합니다. (필수)
                         </span>
                       )}
                       component={CheckBoxField}
                       validate={[ Validate.required ]}/>
              </div>
            </div>

            <div className="bottom" ref={(c) => {this.bottom = c;}}>
              <button type="submit"
                      className={`btn-${valid ? 'blue' : 'gray'}-medium`}>완료
              </button>
            </div>
          </form>
        </div>


        {showType && (
          <div className="container">
            <form>
              <div className="top">
                <h2>개인정보 수집 및 제 3자 제공 이용 동의</h2>
              </div>

              <div className="middle">
                <section>
                  <div>
                    (주)스냅스 (오프린트미) 는 개인정보 관련 법률 (개인정보보호법, 정보통신망<br/>
                    이용촉진 및 정보보호에 관한 법률)을 준수하며 수집된 개인 정보는 해당 서비스 외에<br/>
                    다른 용도로 절대 사용하지 않으며, 사용자 요청 시 바로 삭제할 수 있습니다.<br/>
                  </div>
                </section>
                <section>
                  <h1 id="section-1">1. 수집항목 및 이용목적</h1>
                  <ul>
                    <li>수집항목 : 이름, 연락처</li>
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
                    <li>1개월 (이벤트 참여 고객 응대를 위함)</li>
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
                        className="btn-black-medium"
                        onClick={this.onClickHidePolicy}>확인
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
      currentForm: state.form[ formName ],
      user: state.user
    }
  };
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      ...ownerProps.actions,
      handleCreateCouponByCouponCode: (couponCode) => dispatch(ActionCoupon.createCouponByCouponCode(couponCode)),
      handleCreateEventsCommentsByIdx: (eventIdx, formData) => dispatch(ActionEvents.createEventsCommentsByIdx(eventIdx, formData))
    }
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: formName
})(EventsNewYearWishes));
