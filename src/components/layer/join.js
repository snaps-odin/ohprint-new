import React from "react";
import { connect } from "react-redux";
import { change, Field, reduxForm } from "redux-form";

import { LayerTypes, LogTypes } from "constants/index";
import { ActionLog, ActionUser } from "actions/index";
import { getDeepValue } from "utils/json";
import { breaklines } from "utils/string";
import * as Validate from "utils/validate";
import { completeRegistration } from "utils/kakao";
import { getSnsName } from "utils/sns";

import { CheckBoxField, InputField } from "components/common/fields";
import TermsIndex from "components/policy/terms";
import AgreeIndex from "components/policy/agree";
import { gtmV4_sign_up } from "configs/google-analytics/ga-v4";

class Join extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      showType: null,
    };

    this.field = "join";

    this.onClickClose = this.onClickClose.bind(this);
    this.onClickTerms = this.onClickTerms.bind(this);
    this.onClickPrivacy = this.onClickPrivacy.bind(this);
    this.onClickHidePolicy = this.onClickHidePolicy.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeSelectedAll = this.onChangeSelectedAll.bind(this);
  }

  onClickClose(event) {
    let {
      actions: { handleCloseContentsLayer },
    } = this.props;

    handleCloseContentsLayer();
  }

  onClickTerms(event) {
    this.changeShowType("terms");
  }

  onClickPrivacy(event) {
    this.changeShowType("privacy");
  }

  onClickHidePolicy(event) {
    this.changeShowType(null);
  }

  changeShowType(showType) {
    let {
      actions: { handleUpdateLayer },
    } = this.props;

    Promise.all([this.setState({ showType })]).then(() => {
      handleUpdateLayer();
    });
  }

  onSubmit(values) {
    let {
      actions: { handleCreateUserJoin, handleOpenContentsLayer, handleChangeLogConversion },
    } = this.props;
    let {
      join: { userId, userName, snsId, snsType = "EMAIL", userPassword, recommendUserId },
    } = values;

    handleCreateUserJoin({ userId, userName, snsId, snsType, userPassword, recommendUserId }).then((result) => {
      Promise.all([handleChangeLogConversion(LogTypes.JOIN)]).then(() => {
        completeRegistration();
        gtmV4_sign_up({ method: `${getSnsName(snsType)}_회원가입`, uid: userId });
        handleOpenContentsLayer(LayerTypes.WELCOME, {
          isCouponIssue: result["isCouponIssue"],
        });
      });
    });
  }

  componentDidMount() {
    let {
      options,
      actions: { handleResetUserError, handleChangeFormValue },
    } = this.props;

    handleResetUserError();

    if (!!options) {
      let { userId, userName, snsId, snsType } = options;

      let field = this.field;

      handleChangeFormValue(`${field}.userId`, userId);
      handleChangeFormValue(`${field}.userEmail`, userId);
      handleChangeFormValue(`${field}.userName`, userName);
      handleChangeFormValue(`${field}.snsId`, snsId);
      handleChangeFormValue(`${field}.snsType`, snsType);
    }
  }

  onChangeSelectedAll(event, value) {
    let field = this.field;
    let {
      actions: { handleChangeFormValue },
    } = this.props;

    handleChangeFormValue(`${field}.agreement1`, value);
    handleChangeFormValue(`${field}.agreement2`, value);
    handleChangeFormValue(`${field}.agreement3`, value);
  }

  render() {
    let {
      states: { user, currentForm, isZeroDeal },
      options,
      handleSubmit,
      pristine,
      valid,
      reset,
      submitting,
    } = this.props;
    let { showType } = this.state;

    let field = this.field;
    let snsYN = options;
    let userPassword = getDeepValue(currentForm, "values.join.userPassword") || "";

    let safetyCount = 0;
    safetyCount += Validate.includeNumber(userPassword) ? 1 : 0;
    safetyCount += Validate.includeAlphabet(userPassword) ? 1 : 0;
    safetyCount += Validate.includeSpecialCharacter(userPassword) ? 1 : 0;

    let safetyMessage = safetyCount > 2 && userPassword.length >= 8 ? "안전" : "보통";

    return (
      <div>
        <div className="join-layer-wrap" style={showType ? { display: "none", height: "0" } : null}>
          <div className="container">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className="top">
                <div className="inner">
                  {!snsYN ? <h1>회원가입</h1> : <h1 className="icon icon-logo-13341" />}

                  {snsYN && <p>{`${options["snsType"].match(/FACEBOOK/) ? "페이스북" : options["snsType"].match(/APPLE/) ? "애플" : "네이버"} 계정으로 오프린트미에 가입합니다.`}</p>}

                  <Field name={`${field}.userId`} type="text" maxLength={40} placeholder="이메일 (@을 포함한 이메일 주소 입력)" autoComplete="email" component={InputField} validate={[Validate.required, Validate.email]} />

                  <Field name={`${field}.userEmail`} type="text" maxLength={40} placeholder="이메일 확인" autoComplete="email" component={InputField} validate={[Validate.required, Validate.email]} />

                  {!isZeroDeal && <div className="mail-info">* 입력하신 메일로 신규가입 선물이 발송됩니다.</div>}

                  {!snsYN && <Field name={`${field}.userPassword`} type="password" maxLength={15} placeholder="비밀번호 (영문/숫자/특수문자 조합 8~15자리)" autoComplete="new-password" statusMessage={safetyCount > 0 ? safetyMessage : null} component={InputField} validate={[Validate.required, Validate.notSpace, Validate.minLength8, Validate.password]} />}

                  <Field name={`${field}.userName`} type="text" maxLength={15} placeholder="이름" component={InputField} validate={[Validate.required]} />

                  <Field name={`${field}.recommendUserId`} type="text" placeholder="추천인 ID (@을 포함한 이메일 주소 입력)" component={InputField} validate={[Validate.recommendEmail]} />
                </div>

                <Field name={`${field}.agreementAll`} label={<span className="select-all">전체선택</span>} onChange={this.onChangeSelectedAll} component={CheckBoxField} />

                <Field name={`${field}.agreement1`} label={<span className="desc">만 14세 이상입니다. (필수)</span>} component={CheckBoxField} validate={[Validate.required]} />

                <Field
                  name={`${field}.agreement2`}
                  label={
                    <span className="desc">
                      <button type="button" onClick={this.onClickTerms}>
                        이용약관
                      </button>
                      에 동의 합니다. (필수)
                    </span>
                  }
                  component={CheckBoxField}
                  validate={[Validate.required]}
                />

                <Field
                  name={`${field}.agreement3`}
                  label={
                    <span className="desc">
                      <button type="button" onClick={this.onClickPrivacy}>
                        개인정보 수집 및 이용
                      </button>
                      에 동의합니다. (필수)
                    </span>
                  }
                  component={CheckBoxField}
                  validate={[Validate.required]}
                />

                {user["fetchErrorMessage"] && <span className="error" dangerouslySetInnerHTML={{ __html: breaklines(user["fetchErrorMessage"]) }} />}
              </div>

              <div className={`bottom`}>
                <button type="submit" className={`btn-${valid ? "blue" : "gray"}-big`} disabled={submitting}>
                  완료
                </button>
              </div>
            </form>
          </div>
          <button className="icon-close-1414 close" onClick={this.onClickClose} />
        </div>

        {showType && (
          <div className="policy-layer-wrap">
            <div className="container">
              <div className="top">
                <h1>{showType.match("terms") ? "이용약관" : "개인정보 수집 및 이용동의"}</h1>
              </div>
              <div className="bottom scroll">
                <section>
                  {showType.match("terms") && <h3>[이용약관 시행 일자: 2017년 09월 04일]</h3>}

                  {React.cloneElement(showType.match("terms") ? <TermsIndex /> : <AgreeIndex />, {
                    version: "current",
                    showNavigate: false,
                  })}
                </section>
              </div>
            </div>
            <button className="icon-close-1414 close" onClick={this.onClickHidePolicy} />
          </div>
        )}
      </div>
    );
  }
}

const formName = "layer-join";

const mapStateToProps = (state, ownerProps) => {
  return {
    states: {
      ...ownerProps.states,
      user: state.user,
      currentForm: state.form[formName],
      isZeroDeal: state.event.isZeroDeal,
    },
    initialValues: {
      join: {
        snsType: "EMAIL",
      },
    },
  };
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      ...ownerProps.actions,

      handleChangeFormValue: (field, value) => dispatch(change(formName, field, value)),

      handleCreateUserJoin: (values) => dispatch(ActionUser.createUserJoin(values)),
      handleResetUserError: () => dispatch(ActionUser.resetUserError()),

      handleChangeLogConversion: (type) => dispatch(ActionLog.changeLogConversion(type)),
    },
  };
};

const validate = (values) => {
  let error = { join: {} };

  if (Object.entries(values).length === 0) return error;

  let {
    join: { userId, userEmail },
  } = values;

  if (userId && Validate.isEmail(userId) && userEmail && Validate.isEmail(userEmail)) {
    userId !== userEmail && (error.join["userEmail"] = "이메일 주소를 확인해 주세요.");
  }

  return error;
};

const asyncValidate = (values, dispatch, props, currentField) => {
  let {
    join: { userId, recommendUserId },
  } = values;
  let { asyncErrors } = props;

  switch (currentField) {
    case "join.userId":
      return ActionUser.requestUserCheckExistence(userId, "EMAIL")
        .then(() => {
          return undefined;
        })
        .catch((error) => {
          throw {
            join: {
              userId: error,
              recommendUserId: getDeepValue(asyncErrors, `join.recommendUserId`),
            },
          };
        });
      break;

    case "join.recommendUserId":
      let filter = !!(recommendUserId && recommendUserId.length > 0 && recommendUserId.substr(0, 1) === "@");
      return recommendUserId && !filter
        ? ActionUser.requestUserCheckRecommendExistence(recommendUserId)
            .then(() => {
              return undefined;
            })
            .catch((error) => {
              throw {
                join: {
                  userId: getDeepValue(asyncErrors, `join.userId`),
                  recommendUserId: error,
                },
              };
            })
        : Promise.resolve(undefined);
      break;

    default:
      return new Promise((resolve, reject) => {
        getDeepValue(asyncErrors, `join.userId`) || getDeepValue(asyncErrors, `join.recommendUserId`) ? reject(asyncErrors) : resolve();
      });
      break;
  }
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: formName,
    validate,
    asyncValidate,
    asyncBlurFields: ["join.userId", "join.recommendUserId"],
  })(Join),
);
