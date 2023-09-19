

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
import { ActionEvents, ActionBBS } from 'actions/index';

import { TextAreaField, CheckBoxField, SelectField, FileField, InputField } from 'components/common/fields';

class EventsFunding extends React.Component {
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
    let { eventIdx, callback } = options;
    let { handleOpenAlertLayer, handleCloseContentsLayer, handleCreateEventsCommentsByIdx, handleCreateFormBBS } = actions;

    let selectedFile = values[ 'selectedFile' ];
    let isErrorFiles = selectedFile.find(file => file[ 'error' ]);

    if (!isErrorFiles) {
      let formData = new FormData();

      formData.append('receiveEmailAgree','false');//필수
      formData.append('receiveSMSAgree', 'false');//필수
      formData.append('loginEvent', 'false');//필수 False 체크안함 true 체크 (로그인)
      formData.append('attribute06', 'test');
      formData.append('attribute08', '01012341234');

      selectedFile.length > 0 && selectedFile.map(file => {
        file && formData.append('eventFile', file[ 'file' ]);
      });

      return handleCreateFormBBS(formData, eventIdx).then(result => {

        handleOpenAlertLayer({
          description: '완료되었습니다.',

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
    let { options, states: { ui: { view: { height } }, currentForm }, handleSubmit, valid, actions : { handleChangeFormValue } } = this.props;
    let { showType } = this.state;
    //let { data: { title, width } } = options;
    let title = "소모임을 소개해 주세요.";
    let width = 500;

    let middleHeight = height < (50 + getHeight(this.inner) + 60 + getHeight(this.bottom))
      ? height - (50 + 60 + getHeight(this.bottom))
      : null;

    let syncErrors = getDeepValue(currentForm, 'syncErrors') || {};

    return (
      <div className={`events-fan_recommend ${showType ? 'events-policy' : ''} popup`}
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
                  {/*                  <tr>
                    <th>소모임 이름</th>
                    <td>
                      <Field name="userName"
                             className="box"
                             width={246}
                             maxLength={15}
                             placeholder="소모임 이름을 입력해주세요."
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
                             placeholder="연락처를 입력해 주세요."
                             component={InputField}
                             validate={[ Validate.required, Validate.phoneNumber ]}/>
                    </td>
                  </tr>*/}
                  <tr>
                    <td colSpan="2">
                      {/*                      <Field name="contents"
                             className="box fanEvent"
                             placeholder="내용을 입력해 주세요."
                             showLength={false}
                             component={TextAreaField}
                             validate={[ Validate.required, Validate.minLength20 ]}
                             />*/}
                      <Field name="file"
                             id="file"
                             maxFileLength={1}
                             maxFileSize={5}
                             handleChangeFormValue={handleChangeFormValue}
                             component={FileField}/>
                    </td>
                  </tr>
                  </tbody>
                </table>

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
                    <li>수집항목 : 이름, 연락처, 소모임 이름</li>
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

      currentForm: state.form[ formName ]
    },
    initialValues: {
      file: null,
      selectedFile: []
    }
  };
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      ...ownerProps.actions,
      handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),
      handleCreateEventsCommentsByIdx: (eventIdx, formData) => dispatch(ActionEvents.createEventsCommentsByIdx(eventIdx, formData)),
      handleCreateFormBBS : (formData, eventIdx) => dispatch(ActionEvents.createFormBBS(formData,eventIdx))
    }
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: formName
})(EventsFunding));
