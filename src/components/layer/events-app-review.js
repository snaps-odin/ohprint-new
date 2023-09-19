

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
import { ActionEvents } from 'actions/index';

import { TextAreaField, CheckBoxField, FileField, InputField, SelectField } from 'components/common/fields';

class EventsAppReview extends React.Component {
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

  onSubmit(values){
    let { options, actions } = this.props;
    let { callback } = options;
    let { handleOpenAlertLayer, handleCloseContentsLayer, handleCreateEventsCommentsByIdx, handleCreateFormBBS } = actions;


    let params = {
      'attribute05': values[ 'userId' ],
      'attribute06': values[ 'downloadStore' ],
      'attribute08': values[ 'nickName' ],
      'attribute09': values[ 'phone' ]
    };


      return handleCreateEventsCommentsByIdx(132, params).then(result => {

        handleOpenAlertLayer({
          description: '이벤트 참여가 완료되었습니다.',

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
          callback: () => {
            handleCloseContentsLayer();
          }
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

  componentDidMount() {
    let { actions : { handleChangeFormValue }, states: { user: { userId } } } = this.props;

    handleChangeFormValue('userId', userId);
  }

  render() {
    let { options, states: { ui: { view: { height } }, user: { userId }, currentForm }, handleSubmit, valid, actions : { handleChangeFormValue } } = this.props;
    let { showType } = this.state;
    //let { data: { title, width } } = options;
    let title = "오프린트미 앱리뷰 이벤트";
    let width = 500;



    let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
      ? height - (50 + 60 + getHeight(this.bottom))
      : null;

    let syncErrors = getDeepValue(currentForm, 'syncErrors') || {};

    return (
      <div className={`events-app-review ${showType ? 'events-policy' : ''} popup`}
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
                  {userId && <tr className={"titleReview"}>
                    <th>ID</th>
                    <td>
                      <Field name="userId"
                             className="box"
                             width={246}
                             maxLength={15}
                             component={InputField}
                             readOnly={true}
                             validate={[Validate.required]}/>
                      <div className={"space"}/>
                    </td>

                  </tr>}
                  <tr>
                    <td colSpan={2}>
                      <span className={"title"}>
                        1. 리뷰를 작성한 스토어를 알려주세요.
                      </span>
                      <Field
                          name={`downloadStore`}
                          className="box large"
                          placeholder="스토어를 선택하세요."
                          options={[
                            {label:"앱스토어", value:"appStore"},
                            {label:"구글플레이", value:"googlePlay"}
                          ]}
                          component={SelectField}
                          validate={[Validate.required]}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <span className={"title"}>
                        2. 리뷰를 작성한 앱스토어 닉네임을 알려주세요.
                      </span>
                      <Field name="nickName"
                             className="box"
                             maxLength={15}
                             component={InputField}
                             validate={[Validate.required]}/>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <span className={"title"}>
                        3. 연락처를 입력해주세요.
                      </span>
                      <Field type="text"
                             name="phone"
                             className="box"
                             placeholder="연락처를 입력해 주세요."
                             component={InputField}
                             validate={[ Validate.required, Validate.phoneNumber ]}/>
                    </td>
                  </tr>
                  </tbody>
                </table>

                <Field name="agreement"
                       label={(
                         <span className="desc">본 이벤트 참여를 위해&nbsp;
                           <button type="button" onClick={this.onClickPrivacy}>개인정보 수집 및 이용</button>에 대한
											       내용을 확인하고 동의합니다.
										       </span>
                       )}
                       component={CheckBoxField}
                       validate={[ Validate.required ]}/>

                <Field name="agreement2"
                       label={(
                         <span className="desc">
                           리뷰 작성 스토어 및 닉네임을 다시 한 번 확인해주세요.
                         </span>
                       )}
                       component={CheckBoxField}
                       validate={[ Validate.required ]}/>

                <Field name="agreement3"
                       label={(
                         <span className="desc">
                           로그인 ID로 오프린트미 쿠폰이 지급됩니다.
                         </span>
                       )}
                       component={CheckBoxField}
                       validate={[ Validate.required ]}/>

              </div>
            </div>

            <div className="bottom" ref={(c) => {this.bottom = c;}}>
              <button type="submit"
                      className={`btn-${valid ? 'blue' : 'gray'}-medium`}>응모
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
                    <li>수집항목 : 연락처</li>
                    <li>이용목적 : 이벤트 당첨 안내</li>
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
      user:state.user
    }
  };
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      ...ownerProps.actions,
      handleCreateFormBBS : (formData, eventIdx) => dispatch(ActionEvents.createFormBBS(formData,eventIdx)),
      handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),
      handleCreateEventsCommentsByIdx: (eventIdx, formData) => dispatch(ActionEvents.createEventsCommentsByIdx(eventIdx, formData))
    }
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: formName
})(EventsAppReview));
