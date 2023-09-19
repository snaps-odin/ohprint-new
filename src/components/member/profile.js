import React from "react";
import { connect } from "react-redux";
import { change, untouch, Field, reduxForm } from "redux-form";
import update from "react-addons-update";

import { LayerTypes } from "constants/index";
import { ActionUser, ActionLayer } from "actions/index";
import { goHome, goMemberWithdraw } from "utils/url";
import { toCash, toDate, addZero } from "utils/format";
import { breaklines } from "utils/string";
import { getDeepValue } from "utils/json";
import * as Validate from "utils/validate";

import { InputField, CheckBoxField, RadioField, SelectField } from "components/common/fields";

import Attention from "components/common/attention";

class Profile extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      ready: false,
      changePassword: false,
      userPhoneNumber0: null,
      errorMessage: null,
      userGrade: null,
    };

    this.field = "profile";

    this.benefitGrade = {
      "003001": {
        welcomeMessage: "구매 후 할인 혜택을 누리세요.",
        condition: "회원가입 후 구매 내역이<br/>없는 경우",
        className: "welcome",
        iconName: "icon-png-level-01-110110",
        list: [
          {
            value: "전상품 2,000원 할인 쿠폰",
            className: "",
          },
          {
            value: "전상품 10% 할인 쿠폰",
            className: "",
          },
        ],
      },
      "003002": {
        welcomeMessage: `"전상품 10% 할인 쿠폰" 혜택을 누리세요.<br/>쿠폰/머니에서 확인해 보세요.`,
        condition: "1회 이상 구매 +<br/>2만원 이상 구매 고객",
        className: "revisit",
        iconName: "icon-png-level-02-110110",
        list: [
          {
            value: "전상품 10% 할인 쿠폰",
            className: "",
          },
        ],
      },
      "003003": {
        welcomeMessage: `"전상품 15% 할인 쿠폰" 혜택을 누리세요.<br/>쿠폰/머니에서 확인해 보세요.`,
        condition: "3회 이상 구매 +<br/>누적 금액 5만원 이상",
        className: "thanks",
        iconName: "icon-png-level-03-110110",
        list: [
          {
            value: "전상품 15% 할인 쿠폰",
            className: "",
          },
        ],
      },
      "003004": {
        welcomeMessage: `"전상품 20% 할인 쿠폰" 혜택을 누리세요.<br/>쿠폰/머니에서 확인해 보세요.`,
        condition: "5회 이상 구매 +<br/>누적 금액 20만원 이상",
        className: "impression",
        iconName: "icon-png-level-04-110110",
        list: [
          {
            value: "전상품 20% 할인 쿠폰",
            className: "",
          },
          {
            value: "무료배송 쿠폰(1만원 이상)",
            className: "",
          },
        ],
      },
      "003005": {
        welcomeMessage: `"전상품 25% 할인 쿠폰" 혜택을 누리세요.<br/>쿠폰/머니에서 확인해 보세요.`,
        condition: "10회 이상 구매 +<br/>누적 금액 50만원 이상",
        className: "best",
        iconName: "icon-png-level-05-110110",
        list: [
          {
            value: "전상품 25% 할인 쿠폰",
            className: "",
          },
          {
            value: "무료배송 쿠폰(1만원 이상)",
            className: "",
          },
        ],
      },
    };

    this.onClickOpenPassword = this.onClickOpenPassword.bind(this);
    this.onClickClosePassword = this.onClickClosePassword.bind(this);
    this.onClickCancel = this.onClickCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickWithdraw = this.onClickWithdraw.bind(this);
  }

  onSubmit(values) {
    let {
      actions: { handleRequestUserByToken, handleUpdateUserProfile, handleOpenAlertLayer },
      pristine,
    } = this.props;
    let { changePassword } = this.state;

    if (!pristine) {
      let {
        profile: { userName, userEmail, userPhoneNumbers, receiveEmailAgreeYN, receiveSMSAgreeYN, receiveConsultAgreeYN, currentPassword, newPassword },
      } = values;
      let userPhoneNumber = userPhoneNumbers.join("-");

      let params = {
        userName,
        userEmail,
        userCellPhoneNumber: userPhoneNumber,
        receiveEmailAgreeYN: receiveEmailAgreeYN ? "Y" : "N",
        receiveSMSAgreeYN: receiveSMSAgreeYN && !!Validate.isPhoneNumber(userPhoneNumber) ? "Y" : "N",
        receiveConsultAgreeYN: receiveConsultAgreeYN && !!Validate.isPhoneNumber(userPhoneNumber) ? "Y" : "N",
        hashedPassword: !!changePassword ? currentPassword : null,
        newHashedPassword: !!changePassword ? newPassword : null,
      };

      handleUpdateUserProfile(params)
        .then(() => {
          handleRequestUserByToken().then(() => {
            Promise.all([this.setState({ changePassword: false })]).then(() => {
              this.clearPasswords();

              handleOpenAlertLayer({
                description: "회원정보가 수정되었습니다.",
              });
            });
          });
        })
        .catch((error) => {
          handleOpenAlertLayer({
            description: error,
          });
        });
    }
  }

  onClickOpenPassword(event) {
    this.setState({ changePassword: true });
  }

  onClickClosePassword(event) {
    Promise.all([this.setState({ changePassword: false })]).then(() => {
      this.clearPasswords();
    });
  }

  onClickCancel(event) {
    goHome();
  }

  onClickWithdraw(event) {
    goMemberWithdraw();
  }

  clearPasswords() {
    let {
      actions: { handleChangeFormValue, handleUnTouchFormValue },
    } = this.props;

    let field = this.field;

    ["currentPassword", "newPassword", "confirmPassword"].map((keyName) => {
      handleChangeFormValue(`${field}.${keyName}`, null);
      handleUnTouchFormValue(`${field}.${keyName}`);
    });
  }

  componentDidMount() {
    let {
      actions: { handleRequestUserByToken, handleRequestUserGrade, handleRequestUserGradeType },
    } = this.props;

    Promise.all([handleRequestUserByToken(), handleRequestUserGradeType(), handleRequestUserGrade()]).then((result) => {
      let { 1: grades, 2: userGrade } = result;

      this.setState(
        update(this.state, {
          ready: { $set: true },
          grades: { $set: grades },
          userGrade: {
            $set: Object.assign(userGrade, this.benefitGrade[userGrade["userLevelCode"] || "003001"]),
          },
        }),
      );
    });
  }

  render() {
    let {
      states: { user, currentForm },
      handleSubmit,
      pristine,
      reset,
      submitting,
      valid,
    } = this.props;
    let { userId, snsType, fetchErrorMessage, userName } = user;
    let { ready, changePassword, grades, userGrade } = this.state;

    let field = this.field;

    let userPassword = getDeepValue(currentForm, "values.profile.newPassword") || "";

    let safetyCount = 0;
    safetyCount += Validate.includeNumber(userPassword) ? 1 : 0;
    safetyCount += Validate.includeAlphabet(userPassword) ? 1 : 0;
    safetyCount += Validate.includeSpecialCharacter(userPassword) ? 1 : 0;

    let safetyMessage = safetyCount > 2 && userPassword.length >= 8 ? "안전" : "보통";

    let currentUserLevelCode = userGrade ? (userGrade["userLevel"] || "").replace(/ /gi, "").trim().toLowerCase() : "";
    let nextUserLevelCode = userGrade ? (userGrade["userLevel"] || "").replace(/ /gi, "").trim().toLowerCase() : "";

    return (
      ready && (
        <div className="profile-wrap">
          <div className="container">
            <div className="top">
              <h1>나의 등급과 회원정보</h1>
            </div>

            <div className="middle">
              <dl>
                <dt>
                  <span className={`icon ${userGrade["iconName"]}`} />
                  <span>
                    <span>
                      <em>{userName}</em>님의 회원등급은 "<em className={`blue ${userGrade["userLevel"]}`}>{userGrade["userLevelName"]}</em>" 입니다.
                    </span>
                    <span className="message" dangerouslySetInnerHTML={{ __html: breaklines(userGrade["welcomeMessage"]) }} />
                    <span className="date icon-bullet-33">산정기간 : {`${toDate(userGrade["startDate"], "YYYY.MM.DD")} ~ ${toDate(userGrade["endDate"], "YYYY.MM.DD")} (최근 3개월)`}</span>
                  </span>
                </dt>
                <dd>
                  <span>
                    {!nextUserLevelCode.match(/best/) ? `다음 등급인 "` : `"`}
                    <em className={`${nextUserLevelCode}`}>{userGrade["nextUserLevelName"] || userGrade["userLevelName"]}</em>
                    {nextUserLevelCode.match(/best/) ? `" 등급을 유지하시려면?` : `" 로 승급하시려면?`}
                  </span>
                  <span>
                    <span className="orderCount icon-bullet-33">{`현재 누적 주문 건수 : ${userGrade["orderCount"]}건`}</span>
                    <span className="orderAmount icon-bullet-33">{`현재 누적 구매 금액 : ${toCash(userGrade["orderAmount"] || 0)}원`}</span>
                  </span>
                  <span>
                    <span className="addOrderCount icon-bullet-33">{`필요 구매 건수 : ${userGrade["addOrderCount"]}건`}</span>
                    <span className="addOrderAmount icon-bullet-33">{`필요 구매 금액 : ${toCash(userGrade["addOrderAmount"] || 0)}원`}</span>
                  </span>
                </dd>
              </dl>
              <h3>전체 회원 등급 및 혜택 보기</h3>
              <ul>
                {(grades || []).reduce((target, item, index) => {
                  let level = this.benefitGrade[item["userLevelCode"]];

                  level &&
                    target.push(
                      <li className={`${currentUserLevelCode}` === level["className"] ? "active" : ""}>
                        <span className={level["iconName"]} />
                        <span className="level-name">{item["userLevelName"]}</span>

                        {React.cloneElement(<Attention />, {
                          value: {
                            title: level["condition"],
                            children: level["list"],
                          },
                        })}
                      </li>,
                    );
                  return target;
                }, [])}
              </ul>
            </div>

            <div className="bottom">
              <form onSubmit={handleSubmit(this.onSubmit)}>
                <table>
                  <caption>
                    <span className="blind">회원정보수정</span>
                  </caption>
                  <colgroup>
                    <col style={{ width: "160px" }} />
                    <col style={{ width: "588px" }} />
                  </colgroup>
                  <thead>
                    <tr>
                      <td colSpan="2">회원정보수정</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>
                        이름 <span>*</span>
                      </th>
                      <td>
                        <Field name={`${field}.userName`} type="text" className="box" maxLength={15} placeholder="사용자 이름" component={InputField} validate={[Validate.required]} />
                      </td>
                    </tr>

                    <tr>
                      <th>아이디</th>
                      <td>
                        <div className="input box">
                          <div className="icon">
                            {String(user["snsType"]).match(/FB/) && <em className="icon-facebook-1616 icon" />}
                            {String(user["snsType"]).match(/NAVER/) && <em className="icon-naver-1616 icon" />}
                            <em>{user["userId"]}</em>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>
                        수신메일 <span>*</span>
                      </th>
                      <td>
                        <div className="top">
                          <Field name={`${field}.userEmail`} type="text" className="box" placeholder="사용자 이메일" component={InputField} validate={[Validate.required, Validate.email]} />
                        </div>
                        <div className="bottom">
                          <Field name={`${field}.receiveEmailAgreeYN`} label="상품/이벤트 정보 이메일 수신동의 [선택]" component={CheckBoxField} />
                        </div>
                      </td>
                    </tr>

                    {String(snsType).match(/EMAIL/) && (
                      <tr>
                        <th>비밀번호</th>

                        {!changePassword ? (
                          <td>
                            <button type="button" className="btn-white-small" onClick={this.onClickOpenPassword}>
                              변경하기
                            </button>
                          </td>
                        ) : (
                          <td className="password">
                            <table border="0">
                              <caption>
                                <span className="blind">회원정보수정</span>
                              </caption>
                              <colgroup>
                                <col style={{ width: "108px" }} />
                                <col style={{ width: "480px" }} />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th>현재 비밀번호</th>
                                  <td>
                                    <Field name={`${field}.currentPassword`} type="password" className="box" maxLength={15} placeholder="현재 비밀번호 입력" component={InputField} validate={[Validate.required]} />
                                  </td>
                                </tr>
                                <tr>
                                  <th>새 비밀번호</th>
                                  <td>
                                    <Field name={`${field}.newPassword`} type="password" className="box" maxLength={15} placeholder="비밀번호 (영문/숫자/특수문자 조합 8~15자리)" statusMessage={safetyCount > 0 ? safetyMessage : null} component={InputField} validate={[Validate.required, Validate.minLength8, Validate.password]} />
                                  </td>
                                </tr>
                                <tr>
                                  <th>새 비밀번호 확인</th>
                                  <td>
                                    <Field name={`${field}.confirmPassword`} type="password" className="box" maxLength={15} placeholder="새 비밀번호 확인" component={InputField} validate={[Validate.required, Validate.minLength8, Validate.password]} />
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan="2">
                                    <button type="button" onClick={this.onClickClosePassword}>
                                      취소
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        )}
                      </tr>
                    )}

                    <tr className="phone">
                      <th>연락처</th>
                      <td>
                        <div className="top">
                          <Field name={`${field}.userPhoneNumbers[0]`} type="text" size="small" className="box" maxLength={3} component={InputField} validate={[Validate.shortMinLength2, Validate.number]} />

                          <div className="line" />

                          <Field name={`${field}.userPhoneNumbers[1]`} type="text" size="small" className="box" maxLength={4} component={InputField} validate={[Validate.shortMinLength3, Validate.number]} />

                          <div className="line" />

                          <Field name={`${field}.userPhoneNumbers[2]`} type="text" size="small" className="box" maxLength={4} component={InputField} validate={[Validate.shortMinLength4, Validate.number]} />
                        </div>
                        <div className="bottom">
                          <Field name={`${field}.receiveSMSAgreeYN`} label="상품/이벤트 정보 SMS 수신 동의 [선택]" component={CheckBoxField} />

                          <br />

                          <Field name={`${field}.receiveConsultAgreeYN`} label="전화상담을 통한 안내 수신 동의 [선택]" component={CheckBoxField} />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="2">
                        <button type="button" onClick={this.onClickWithdraw}>
                          회원 탈퇴
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <button type="button" className="btn-white-medium left" onClick={this.onClickCancel}>
                          취소
                        </button>

                        <button type="submit" className={`btn-${valid ? "blue" : "gray"}-medium`} disabled={submitting}>
                          확인
                        </button>
                      </td>
                    </tr>
                  </tfoot>
                </table>

                {/*{fetchErrorMessage && (*/}
                {/*<span className="error" dangerouslySetInnerHTML={ { __html: breaklines(fetchErrorMessage) } }/>*/}
                {/*)}*/}
              </form>
            </div>
          </div>
        </div>
      )
    );
  }
}

const formName = "member-profile";

const mapStateToProps = (state) => {
  let { user } = state;
  let { userCellPhoneNumber, receiveEmailAgreeYN, receiveSMSAgreeYN, receiveConsultAgreeYN } = user;
  let userPhoneNumbers = userCellPhoneNumber ? userCellPhoneNumber.split("-") : [];

  return {
    states: {
      user,
      currentForm: state.form[formName],
    },
    initialValues: {
      profile: {
        ...user,
        userPhoneNumbers,
        receiveEmailAgreeYN: String(receiveEmailAgreeYN).match(/Y/),
        receiveSMSAgreeYN: String(receiveSMSAgreeYN).match(/Y/),
        receiveConsultAgreeYN: String(receiveConsultAgreeYN).match(/Y/),
      },
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),
      handleUnTouchFormValue: (key) => dispatch(untouch(formName, key)),

      handleRequestUserByToken: () => dispatch(ActionUser.requestUserByToken()),
      handleCreateUserCheckPassword: (password) => dispatch(ActionUser.createUserCheckPassword(password)),
      handleUpdateUserProfile: (values) => dispatch(ActionUser.updateUserProfile(values)),

      handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),

      handleRequestUserGrade: () => dispatch(ActionUser.requestUserGrade()),
      handleRequestUserGradeType: () => dispatch(ActionUser.requestUserGradeType()),
    },
  };
};

const validate = (values, props) => {
  let {
    profile: { newPassword, confirmPassword },
  } = values;

  let error = { profile: {} };

  newPassword !== confirmPassword && (error.profile["confirmPassword"] = "비밀번호를 확인해 주세요.");

  return error;
};

const asyncValidate = (values, dispatch, props, currentField) => {
  let {
    profile: { userEmail },
  } = values;

  return ActionUser.requestUserCheckEmailExistence(userEmail)
    .then(() => {
      return undefined;
    })
    .catch((error) => {
      throw { profile: { userEmail: error } };
    });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: formName,
    validate,
    asyncValidate,
    asyncBlurFields: ["profile.userEmail"],
    enableReinitialize: true,
  })(Profile),
);
