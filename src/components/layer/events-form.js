

import React from 'react';
import styled from "styled-components";
import { connect } from 'react-redux';
import {change, Field, reduxForm} from 'redux-form';

import * as Validate from 'utils/validate';

import { ActionEvents } from 'actions/index';

import { TextAreaField, CheckBoxField, FileField, InputField, } from 'components/common/fields';

class EventsForm extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      showPrivacy : false
    };

    this.onClickClose = this.onClickClose.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.togglePrivacy = this.togglePrivacy.bind(this);
  }

  onClickClose(event) {
    let { actions: { handleCloseContentsLayer } } = this.props;
    handleCloseContentsLayer();
  }
  makeHashtag(hashtag){
    const regexExp = /^#[^ !@#$%^&*(),.?":{}|<>]*$/gi;
    if(!hashtag){
      return '';
    }
    if(regexExp.test(hashtag)){
      return hashtag;
    }
    return '#'+ hashtag;
  }

  onSubmit(values){
    const { options : {eventIdx, callback}, actions } = this.props;
    const { handleOpenAlertLayer, handleCloseContentsLayer, handleCreateEventsCommentsByIdx, handleCreateFormBBS } = actions;

    const {contents, hashtag1, hashtag2, hashtag3, marketingAgreement, personalInfoAgreement, phone,secondContentsAgreement, showAgreement, userEmail, gatheringName, selectedFile } = values;

    const hashtags = this.makeHashtag(hashtag1) + this.makeHashtag(hashtag2) + this.makeHashtag(hashtag3)

    if(selectedFile && selectedFile.find(file => file[ 'error' ])){
      return;
    }

    const formData = new FormData();
      formData.append('attribute09', gatheringName);
      formData.append('attribute03', phone);
      formData.append('bbsContents', contents);
      formData.append('attribute04', hashtags);
      formData.append('attribute05', showAgreement? 'Y' : 'N');
      formData.append('attribute06', personalInfoAgreement? 'Y' : 'N');
      formData.append('attribute07', marketingAgreement? 'Y' : 'N');
      formData.append('attribute08', secondContentsAgreement? 'Y' : 'N');

      selectedFile && selectedFile.length > 0 && selectedFile.map(file => {
        file && formData.append('eventFile', file[ 'file' ]);
      });

    //hint formData 확인코드
    // for (var pair of formData.entries()) {
    //   console.log(pair[0]+ ', ' + pair[1]);
    // }

    handleCreateFormBBS(formData, eventIdx).then(result => {
        handleOpenAlertLayer({
          description: result.message,
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

  togglePrivacy(event) {
    event.stopPropagation();
    let { actions: { handleUpdateLayer } } = this.props;

    this.setState({ showPrivacy: !this.state.showPrivacy});
    handleUpdateLayer();
  }


  render() {
    const { options : {title, width}, states: { ui: { view: { height } }, currentForm, userId }, handleSubmit, invalid, actions : { handleChangeFormValue } } = this.props;
    let { showPrivacy } = this.state;

    return (
      <div>
      <Container width={width} >

        {!showPrivacy ?
          (<div>
            <Top>{title}</Top>
           <form onSubmit={handleSubmit(this.onSubmit)}>
          <FieldsContainer height={height}>
            <table border={0}>
              <colgroup>
                <col style={{ width: '65px' }}/>
                <col style={{ width: '375px' }}/>
              </colgroup>
              <tbody>
              <tr>
                <th>ID</th>
                <td>
                  <Field name="userId"
                         className="box"
                         width={246}
                         placeholder={userId}
                         readOnly={true}
                         component={InputField}
                  />
                </td>
              </tr>
              <tr>
                <th>모임명</th>
                <td>
                  <Field name="gatheringName"
                         className="box"
                         width={246}
                         maxLength={15}
                         placeholder="모임명을 입력해주세요."
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
              </tr>
              <tr>
                <th className="label" colSpan="2">
                  우리 모임을 자랑해주세요.
                </th>
              </tr>
              <tr>
                <td colSpan="2">
                  <Field name="contents"
                         className="box gatheringEvent"
                         showLength={false}
                         component={TextAreaField}
                         validate={[ Validate.required, Validate.minLength20 ]}
                  />
                </td>
              </tr>
              <tr>
                <th className="label" colSpan="2">
                  우리 모임을 해시태그로 표현한다면?
                </th>
              </tr>
              <tr>
                <td colSpan="2">
                  <div className='hashtag-wrap'>
                    <Field type="text"
                           name="hashtag1"
                           className="box"
                           placeholder="#강아지모임"
                           component={InputField}
                           validate={[ Validate.required]}/>

                    <Field type="text"
                           name="hashtag2"
                           className="box"
                           placeholder="#비숑모임"
                           component={InputField}
                    />

                    <Field type="text"
                           name="hashtag3"
                           className="box"
                           placeholder="#반려견모임"
                           component={InputField}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th className="label" colSpan="2">
                  즐거운 순간을 포착한 모임 사진을 올려주세요.(필수)
                </th>
              </tr>
              <tr>
                <td colSpan="2" style={{padding:0}}>
                  <Field name="file"
                         eventForm={true}
                         label="파일첨부"
                         id="file"
                         maxFileLength={1}
                         maxFileSize={15}
                         layerFile={true}
                         validate={[ Validate.fileRequired ]}
                         handleChangeFormValue={handleChangeFormValue}
                         component={FileField}/>
                </td>
              </tr>
              </tbody>
            </table>

            <Field name="showAgreement"
                   label={
                     <span>이벤트 페이지에 사진이 노출되어도 괜찮아요.</span>
                   }

                   component={CheckBoxField} />

            <Field name="personalInfoAgreement"
                   label={(
                     <span className="desc">본 이벤트 참여를 위해&nbsp;
                       <button type="button" onClick={this.togglePrivacy}>개인정보 수집 및 이용</button>에 대한
											       내용을 확인하고 동의합니다. (필수)
										       </span>
                   )}
                   component={CheckBoxField}
                   validate={[ Validate.required ]}/>


            <Field name="marketingAgreement"
                   label={(
                     <span>이벤트 참여에 활용된 사진 및 내용은 추후 마케팅 컨텐츠로 활용될 수 있으며 동의하신 분에 한해 당첨자로 선정됩니다. (선택)</span>
                   )}
                   component={CheckBoxField} />

            <Field name="secondContentsAgreement"
                   label={
                     <span>제작 지원금 대상자로 선정 시, 지원금으로 제작한 티셔츠 사진을 2차 컨텐츠로 사용하는 것에 동의합니다. (필수)</span>
                   }
                   component={CheckBoxField}
                   validate={[ Validate.required ]}/>

            <SubmitButton disabled={invalid}>제출하기</SubmitButton>
          </FieldsContainer>
        </form>
            </div>
            ) :
          (
            <div>
          <Top>개인정보 수집 및 제 3자 제공 이용 동의</Top>
          <PrivacyContainer>
            <div className="container">
              <form>
                <div className="middle">
                  <section>
                    <div>
                      (주)위블링은 개인정보 관련 법률 (개인정보보호법, 정보통신망<br/>
                      이용촉진 및 정보보호에 관한 법률)을 준수하며 수집된 개인 정보는 해당 서비스 외에<br/>
                      다른 용도로 절대 사용하지 않으며, 사용자 요청 시 바로 삭제할 수 있습니다.<br/>
                    </div>
                  </section>
                  <section>
                    <h1 id="section-1">1. 이용목적</h1>
                    <ul>
                      <li>이벤트 당첨자 선정 및 당첨 안내</li>
                    </ul>
                  </section>
                  <section>
                    <h1 id="section-2">2. 항목</h1>
                    <ul>
                      <li>ID, 연락처, 사진(img)</li>
                    </ul>
                  </section>
                  <section>
                    <h1 id="section-3">3. 보유 및 이용 기간</h1>
                    <ul>
                      <li>수집일로부터 1년</li>
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
                          onClick={this.togglePrivacy}>확인
                  </button>
                </div>
              </form>
            </div>
          </PrivacyContainer>
            </div>
        )
        }
      </Container>
        <button className="icon icon-close-w-1414 close"
                type="button"
                onClick={this.onClickClose}/>
      </div>
    )
  }
}

const formName = 'events-form';

const mapStateToProps = (state, ownerProps) => {

  return {
    states: {
      userId : state.user.userId,
      ...ownerProps.states,
      currentForm: state.form[ formName ],
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
  form: formName,
  initialValues: {
    showAgreement : true,
  }
})(EventsForm));


const Container = styled.div`
  width : ${({width}) => width}px;;
`;

const Top = styled.div`
  padding: 15px 0;
  line-height: 21px;
  background-color: #2c313a;
  text-align: center;
  color: white;
  font-size: 16px;
  text-align: center;
`

const SubmitButton = styled.button`
  margin: 20px 0 40px;
  padding: 15px 0;
  height: 100%;
  text-align: center;
  background-color :#2c83e9;
  color: white;
  width: 100%;

  :disabled {
    background-color: #c7cdd3;
  }
`;

const FieldsContainer = styled.div`
  padding: 20px 30px 0 30px;
  width: 100%;
  box-sizing: border-box;
  max-height: ${({height}) => height-100}px;
  overflow: auto;

      > table {
        padding: 10px 0 0 0;

        > tbody {

          > tr {

            > th {
              font-family: YoonGothicPro760;
              line-height: 50px;
              vertical-align: top;
              width: 18%;


              > em {
                color: $color-red;
              }
            }

            > td {
              padding: 8px 0;

              > div {

                &.hashtag-wrap{
                  display:flex;

                  :after {
                    content: '';
                    clear: both;
                  }

                  > div {
                    width: 140px;

                    + div {
                      margin-left: 10px;
                    }

                    input, span {
                      width: 100% !important;
                      box-sizing: border-box;
                    }
                  }
                }

                &.input {

                  input {
                    width: 341px;
                  }
                }

                > div {
                  &.input, &.dropdown {
                    float: left;

                    span.error {
                      word-wrap: unset;
                      width: 70px;
                      line-height: 1.6;
                      margin-top: 10px;
                    }
                  }

                  &.input {

                    input {
                      width: 50px;
                    }
                  }
                }

              }

              &.phone {

                > div > div span.error {
                  display: none;
                }
              }

              &.address {

                > div > div > textarea {
                  min-height: 100px;
                }
              }
            }
          }
        }
      }

      > div.checkbox {
        padding: 15px 0 0 0;

        > input {
          width: 16px;
        }

        > label {

          > span.desc {
            display: table-cell;
            line-height: 17px;

            > button {
              line-height: 17px;
              text-decoration: underline !important;
              pointer-events: all

            }
          }
        }
      }
`;

const PrivacyContainer = styled.div`

  > div.container {
    width: 100%;

    .middle {
      padding: 40px 44px 20px 30px !important;

      > section {
        height: 70px;
        font-family: YoonGothicPro740;
        font-size: 12px;
        color: #191919;

        > div {
          line-height: 1.67;
        }

        > h1 {
          font-size: 12px;
          font-family:YoonGothicPro760;
          padding: 10px 0 0 0;
        }

        > ul {

          > li {
            padding: 8px 0 0 0;

            &:before {
              content: '• ';
              color: #d8d8d8;
            }
          }
        }
      }
    }

    .bottom{
      margin: 20px 0 40px;
      text-align: center;
    }
  }
`
