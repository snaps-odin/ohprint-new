import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { getHeight } from "utils/dom";
import * as Validate from "utils/validate";
import * as Normalize from "utils/normalize";
import { ActionCoupon, ActionEvents } from "actions/index";

import { TextAreaField, CheckBoxField, InputField } from "components/common/fields";

class EventsPostComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showType: null,
    };

    this.onClickClose = this.onClickClose.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickPrivacy = this.onClickPrivacy.bind(this);
    this.onClickHidePolicy = this.onClickHidePolicy.bind(this);
  }

  onClickClose() {
    this.props.actions.handleCloseContentsLayer();
  }

  onSubmit(values) {
    let { options, actions } = this.props;
    let { eventIdx, callback } = options;
    let { handleOpenAlertLayer, handleCloseContentsLayer, handleCreateEventsCommentsByIdx, handleCreateCouponByCouponCode } = actions;

    let params = {
      attribute06: values["userId"],
      attribute07: values["userName"],
      attribute08: values["phone"],
      bbsContents: values["contents"],
    };

    let couponNumber = "12A2BD00-402E-1DE8";
    let msg = "";

    return handleCreateEventsCommentsByIdx(eventIdx, params)
      .then(async (result) => {
        if (result.message === "이벤트 참여가 완료되었습니다.<br/>무료 배송 쿠폰이 발급되었습니다.") {
          msg = "이벤트 참여 완료!<br />전 상품 20% 할인 쿠폰이 발급 되었습니다.";

          try {
            await handleCreateCouponByCouponCode(couponNumber);
          } catch (error) {
            handleOpenAlertLayer({
              description: error,
              callback: () => {
                handleCloseContentsLayer();
              },
            });
          }
        } else {
          msg = "이미 이벤트 참여가 완료되었습니다.";
        }

        handleOpenAlertLayer({
          description: msg,
          callback: () => {
            Promise.all([callback && callback()]).then(() => {
              handleCloseContentsLayer();
            });
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

  onClickPrivacy(event) {
    this.changeShowType("privacy");
  }

  onClickHidePolicy(event) {
    this.changeShowType(null);
  }

  changeShowType(showType) {
    Promise.all([this.setState({ showType })]).then(() => {
      this.props.actions.handleUpdateLayer();
    });
  }

  render() {
    let {
      options,
      states: {
        ui: {
          view: { height },
        },
        currentForm,
      },
      handleSubmit,
      valid,
    } = this.props;
    let { showType } = this.state;
    let {
      data: { title, width },
    } = options;

    let middleHeight = height < 50 + getHeight(this.inner) + 60 + getHeight(this.bottom) ? height - (50 + 60 + getHeight(this.bottom)) : null;

    return (
      <div className={`events-post-comment-layer-wrap ${showType ? "events-policy" : ""} popup`} style={{ width: `${width}px` }}>
        <div className="container" style={showType ? { display: "none", height: "0" } : null}>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div className="top">
              <h2>{title}</h2>
            </div>

            <div className="middle" style={{ height: middleHeight ? `${middleHeight}px` : "" }}>
              <div
                className="inner"
                ref={(c) => {
                  this.inner = c;
                }}
              >
                <table border={0}>
                  <colgroup>
                    <col style={{ width: "114px" }} />
                    <col style={{ width: "246px" }} />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>
                        아이디 <em>*</em>
                      </th>
                      <td>
                        <Field name="userId" className="box" width={246} placeholder="아이디" component={InputField} readOnly={true} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        성명 <em>*</em>
                      </th>
                      <td>
                        <Field name="userName" className="box" width={246} maxLength={15} placeholder="성명" component={InputField} validate={[Validate.required]} />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        연락처 <em>*</em>
                      </th>
                      <td>
                        <Field type="text" name="phone" className="box" placeholder="연락처를 입력해 주세요." component={InputField} validate={[Validate.required, Validate.phoneNumber]} />
                      </td>
                    </tr>
                    <tr>
                      <th className="cm-title" colSpan="2">
                        오프린트미 CM송의 제목을 지어주세요 <em>*</em>
                      </th>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <Field name="contents" className="box" placeholder="내용을 입력해 주세요." minLength={1} maxLength={500} showLength={true} component={TextAreaField} validate={[Validate.required]} normalize={Normalize.maxLength(500)} />
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="sub-caption">※ 남기신 내용은 이벤트 종료 후 2차 컨텐츠로 활용 될 수 있습니다.</div>

                <Field
                  name="agreement"
                  label={
                    <span className="desc">
                      [필수] 본 이벤트를 응모하기 위하여&nbsp;
                      <button type="button" onClick={this.onClickPrivacy}>
                        개인정보 수집
                      </button>
                      &nbsp;및 이용에 대한 내용을 확인하고 동의합니다. (클릭 시 전문 확인가능)
                    </span>
                  }
                  component={CheckBoxField}
                  validate={[Validate.required]}
                />
              </div>
            </div>

            <div
              className="bottom"
              ref={(c) => {
                this.bottom = c;
              }}
            >
              <button type="submit" className={`btn-${valid ? "blue" : "gray"}-medium`}>
                응모하기
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

              <div className="commentSubTitle">
                <h2>개인정보 수집 및 제 3자 제공 이용 동의</h2>
              </div>

              <div className="middle">
                <section>
                  <div>㈜위블링(오프린트미)는 개인정보 관련 법률 (개인정보보호법, 정보통신망이용촉진 및 정보보호에 관한 법률)을 준수하며 수집된 개인 정보는 해당 서비스 외에 다른 용도로 절대 사용하지 않습니다. 사용자 요청 시 바로 삭제할 수 있습니다.</div>
                </section>
                <section>
                  <h1 id="section-1">1. 수집항목 및 이용목적</h1>
                  <ul>
                    <li>수집항목 : ID, 성명, 연락처</li>
                    <li>이용목적 : 경품 지급 안내</li>
                  </ul>
                </section>
                <section>
                  <h1 id="section-2">2. 개인정보를 제공받는 자</h1>
                  <ul>
                    <li>㈜위블링 (오프린트미)</li>
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
                    귀하는 개인정보 제공에 동의하지 않으실 권리가 있습니다.
                    <br />
                    단, 개인정보 제공에 동의하지 않을 경우 이벤트에 참여 하실 수 없습니다.
                    <br />
                    <br />그 밖의 사항은 개인정보취급방침을 준수합니다.
                  </div>
                </section>
              </div>

              <div
                className="bottom"
                ref={(c) => {
                  this.bottom = c;
                }}
              >
                <button type="button" className="btn-blue-medium" onClick={this.onClickHidePolicy}>
                  확인
                </button>
              </div>
            </form>
          </div>
        )}

        <button className="icon icon-close-w-1414 close" type="button" onClick={this.onClickClose} />
      </div>
    );
  }
}

const formName = "layer-events-post-comment";

const mapStateToProps = (state, ownerProps) => {
  console.log("state", state);
  return {
    states: {
      ...ownerProps.states,

      currentForm: state.form[formName],
    },
    initialValues: {
      userId: state.user.userId,
    },
  };
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      ...ownerProps.actions,
      handleCreateCouponByCouponCode: (couponCode) => dispatch(ActionCoupon.createCouponByCouponCode(couponCode)),
      handleCreateEventsCommentsByIdx: (eventIdx, formData) => dispatch(ActionEvents.createEventsCommentsByIdx(eventIdx, formData)),
    },
  };
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: formName,
  })(EventsPostComment),
);
