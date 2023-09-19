import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { LayerTypes } from "constants/index";
import { ActionUser } from "actions/index";
import { InputField } from "components/common/fields";
import { getDatasetByName } from "utils/dom";
import { breaklines, clearSpace, clearSpecialCharacter } from "utils/string";
import * as NAVER from "utils/naver";
import * as APPLE from "utils/apple";
import * as FACEBOOK from "utils/facebook";
import * as Validate from "utils/validate";
import { parseJwt } from "utils/jwt";
import { goMemberProfile } from "utils/url";
import { getSnsName } from "utils/sns";

import { gtmV4_begin_registration_layer, gtmV4_login } from "configs/google-analytics/ga-v4";

class Login extends React.Component {
  constructor(...args) {
    super(...args);

    this.field = "login";

    this.onClickClose = this.onClickClose.bind(this);
    this.onClickOpenPassword = this.onClickOpenPassword.bind(this);
    this.onClickOpenJoin = this.onClickOpenJoin.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickSNSLogin = this.onClickSNSLogin.bind(this);
    this.onClickAppleLogin = this.onClickAppleLogin.bind(this);
  }

  onClickClose(event) {
    let {
      actions: { handleCloseContentsLayer },
      options,
    } = this.props;
    let { cancel } = options || {};

    cancel && cancel();
    handleCloseContentsLayer();
  }

  onClickOpenPassword(event) {
    let {
      actions: { handleOpenContentsLayer },
    } = this.props;

    handleOpenContentsLayer(LayerTypes.PASSWORD);
  }

  onClickOpenJoin(event) {
    let {
      actions: { handleOpenContentsLayer },
    } = this.props;

    gtmV4_begin_registration_layer();
    handleOpenContentsLayer(LayerTypes.JOIN);
  }

  onSubmit(values) {
    let {
      actions: { handleCreateUserLogin },
      options,
    } = this.props;
    let {
      login: { userId, userPassword },
    } = values;

    return handleCreateUserLogin({ userId, userPassword, snsType: "EMAIL" }, options || null).then((result) => {
      result["isResetRestStatus"] && this.showRestAccountReset();
    });
  }

  onClickAppleLogin(event) {
    document.getElementById("appleid-signin").click();
  }

  onClickSNSLogin(event) {
    let {
      states: {
        config: { snsAppID },
      },
      actions: { handleCreateUserLogin, handleChangeUserError, handleOpenContentsLayer, handleCloseContentsLayer },
      options,
    } = this.props;

    let snsType = getDatasetByName(event.currentTarget, "sns-type");
    let snsUtil = snsType.match(/facebook/i) ? FACEBOOK : NAVER;
    let snsId = snsAppID[snsType.match(/facebook/i) ? "fb" : "naver"];

    snsUtil
      .login(snsId)
      .then((result) => {
        let { id, email, name } = result;

        let snsId = id;
        let userId = email;
        let userName = name || "";
        userName = clearSpace(userName);
        userName = clearSpecialCharacter(userName);

        handleCreateUserLogin({ userId, snsId, snsType }, options || null).then((result) => {
          let { snsYN } = result;

          snsYN
            ? handleOpenContentsLayer(LayerTypes.JOIN, { userId, userName, snsId, snsType })
            : Promise.all([result["isResetRestStatus"] && this.showRestAccountReset()]).then(() => {
                gtmV4_login({ method: `${getSnsName(snsType)}_로그인`, uid: userId });
                handleCloseContentsLayer();
              });
        });
      })
      .catch((error) => {
        handleChangeUserError(error);
      });
  }

  showRestAccountReset() {
    let {
      actions: { handleOpenAlertLayer },
    } = this.props;

    handleOpenAlertLayer({
      description: '<em class="title">휴면 회원 계정이<br/>해제 처리 되었습니다</em><br/><br/>오프린트미 서비스 이용이 가능합니다.<br/>개인정보 보호를 위해 오래된 비밀번호는<br/>변경 후 사용해 주시기 바랍니다.',
      onlyChoice: true,
      callback: () => {
        goMemberProfile();
      },
    });
  }

  componentDidMount() {
    let {
      states: {
        config: {
          url: { api },
        },
      },
      options,
      actions: { handleResetUserError, handleCreateUserLogin, handleOpenContentsLayer, handleCloseContentsLayer },
    } = this.props;
    APPLE.asyncScript(api).then(() => {
      //Listen for authorization success
      document.addEventListener("AppleIDSignInOnSuccess", (data) => {
        let {
          detail: {
            authorization: { code, id_token },
          },
        } = data;
        let { email, sub } = parseJwt(id_token);
        let userId = "";
        let snsId = sub;
        let snsType = "APPLE";
        let userName = "";

        handleCreateUserLogin({ userId, snsId, snsType }, options || null).then((result) => {
          let { snsYN } = result;

          if (snsYN) handleOpenContentsLayer(LayerTypes.JOIN, { userId, userName, snsId, snsType });
          else {
            gtmV4_login({ method: `${getSnsName(snsType)}_로그인`, uid: userId });
            handleCloseContentsLayer();
          }
        });
      });
    });

    handleResetUserError();
  }

  render() {
    let {
      states: { user },
      handleSubmit,
      pristine,
      valid,
      reset,
      submitting,
      options,
    } = this.props;

    let field = this.field;

    return (
      <div className="login-layer-wrap">
        <div className="container">
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div className="top">
              <h1 className="icon-logo-13341" />

              <Field name={`${field}.userId`} type="text" maxLength={40} placeholder="이메일" allowEnterKey={true} component={InputField} validate={[Validate.requiredEmail, Validate.email]} />

              <Field name={`${field}.userPassword`} type="password" maxLength={15} placeholder="비밀번호" allowEnterKey={true} component={InputField} validate={[Validate.requiredPassword]} />

              {user["fetchErrorMessage"] && <span className="error" dangerouslySetInnerHTML={{ __html: breaklines(user["fetchErrorMessage"]) }} />}
            </div>

            <div className="bottom">
              <button type="submit" className={`btn-${valid ? "blue" : "gray"}-big`} disabled={submitting}>
                로그인
              </button>

              <div className="sns">
                <button type="button" className="btn-white-big btnSnsLogin classSnsNaver" data-sns-type="NAVER" onClick={this.onClickSNSLogin}>
                  <span className="naver">네이버 로그인</span>
                </button>

                <button className="btn-white-big btnSnsLogin classSnsFacebook" type="button" data-sns-type="FACEBOOK" onClick={this.onClickSNSLogin}>
                  <span className="facebook">페이스북 로그인</span>
                </button>

                <button className="btn-white-big btnSnsLogin classSnsApple" type="button" data-sns-type="APPLE" onClick={this.onClickAppleLogin}>
                  <span className="apple">Apple로 로그인</span>
                </button>
                <button type="button" style={{ display: "none" }} id="appleid-signin" />
                <div className="btn-white-big btnSnsLogin classSnsSpace" />
              </div>
              <div className="find-info">
                <button type="button" onClick={this.onClickOpenJoin}>
                  회원가입
                </button>

                <span className="line">|</span>

                <button type="button" onClick={this.onClickOpenPassword}>
                  비밀번호 찾기
                </button>
              </div>
            </div>
          </form>
        </div>
        <button className="icon-close-1414 close" onClick={this.onClickClose} />
      </div>
    );
  }
}

const formName = "layer-login";

const mapStateToProps = (state, ownerProps) => {
  let user = state.user;

  return {
    states: {
      ...ownerProps.states,

      user,
    },
    initialValues: {
      login: user,
    },
  };
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      ...ownerProps.actions,

      handleCreateUserLogin: (data, options) => dispatch(ActionUser.createUserLogin(data, options)),
      handleResetUserError: () => dispatch(ActionUser.resetUserError()),
      handleChangeUserError: (message) => dispatch(ActionUser.changeUserError(message)),
    },
  };
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: formName,
  })(Login),
);
