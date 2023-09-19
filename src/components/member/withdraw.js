import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { ActionLayer, ActionUser } from "actions/index";
import { goBack } from "utils/url";
import { getDeepValue } from "utils/json";
import { breaklines } from "utils/string";
import * as Validate from "utils/validate";
import * as Normalize from "utils/normalize";

import { RadioField, TextAreaField } from "components/common/fields";

class Withdraw extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      ready: false,
      enabledTextField: true,
    };

    this.options = [
      { label: "다른 아이디 변경", value: "079001" },
      { label: "이용할만한 상품/서비스 부족", value: "079002" },
      { label: "주문취소 / 고객센터 응대 불만", value: "079007" },
      { label: "사이트의 시스템 및 에러 불만", value: "079004" },
      { label: "이벤트 참여를 위한 목적", value: "079005" },
      { label: "자주 이용하지 않음", value: "079008" },
      { label: "기타", value: "079006" },
    ];

    this.onChangeType = this.onChangeType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClickCancel = this.onClickCancel.bind(this);
  }

  onChangeType(event, value) {
    this.setState({ enabledTextField: String(value).match(/079006/) });
  }

  onSubmit(values) {
    let {
      actions: { handleOpenAlertLayer, handleUpdateUserWithdraw },
    } = this.props;
    let { enabledTextField } = this.state;
    let { withdrawCode, withdrawReason } = values;

    handleOpenAlertLayer({
      description: "탈퇴 후 해당 아이디로 6개월간 재가입이 불가합니다.<br/>정말 탈퇴 하시겠습니까?",
      confirm: true,
      callback: (confirmed) => {
        confirmed &&
          handleUpdateUserWithdraw({
            withdrawCode,
            withdrawReason: enabledTextField ? withdrawReason : null,
          });
      },
    });
  }

  onClickCancel(event) {
    goBack();
  }

  componentDidMount() {
    let {
      actions: { handleRequestUserByToken },
    } = this.props;

    handleRequestUserByToken().then(() => {
      this.setState({ ready: true });
    });
  }

  render() {
    let {
      states: { user, currentForm },
      handleSubmit,
      pristine,
      reset,
      submitting,
    } = this.props;
    let { fetchErrorMessage } = user;
    let { ready } = this.state;

    let { withdrawCode } = getDeepValue(currentForm, "values") || {};

    return (
      ready && (
        <div className="withdraw-wrap">
          <div className="container">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className="top">
                <h1>회원탈퇴</h1>
                <div className="txt">
                  그동안 오프린트미를 이용해 주셔서 감사합니다. <br />
                  이용하시면서 불만족스러웠던 점을 말씀해주시면 서비스 개선에 참고하도록 하겠습니다.
                </div>
              </div>

              <div className="middle">
                <div className="top">
                  <h2>회원탈퇴 확인사항</h2>
                  <div>
                    <span className="icon-belit-22" />
                    <span className="desc">재가입하셔도 개인정보가 복원되지 않습니다.</span>
                    <span className="txt">오프린트미에 가지고 계신 주문거래 내역, 편집중인 정보, 오프린트미 머니, 쿠폰 등의 혜택이 자동삭제 되며 재가입 하실 경우에도 복원되지 않습니다.</span>
                  </div>
                  <div>
                    <span className="icon-belit-22" />
                    <span className="desc">일정기간 동안 회원님의 정보가 보관됩니다. </span>
                    <span className="txt">전자상거래 소비자 보호 법류에 의거, 일정기간 동안 개인정보 등이 보존됩니다.</span>
                  </div>
                  <div>
                    <span className="icon-belit-22" />
                    <span className="desc">탈퇴 후에는 서비스에 등록된 게시물이 삭제됩니다.</span>
                    <span className="txt red">회원님의 이용후기 등은 탈퇴 시 자동으로 삭제되며, 재가입 하실 경우에도 복원되지 않습니다.</span>
                  </div>
                </div>
                <div className="bottom">
                  <h2>오프린트미 회원탈퇴 사유</h2>

                  <span>
                    {this.options.map((option) => (
                      <span>
                        <Field name="withdrawCode" label={option.label} keyValue={option.value} onChange={this.onChangeType} component={RadioField} />
                      </span>
                    ))}
                  </span>

                  {withdrawCode === "079006" && <Field name="withdrawReason" className="box" placeholder="회원탈퇴 사유를 입력해 주세요" maxLength={200} showLength={true} component={TextAreaField} validate={[Validate.required]} normalize={Normalize.maxLength(200)} />}
                </div>
              </div>

              {fetchErrorMessage && <span className="error" dangerouslySetInnerHTML={{ __html: breaklines(fetchErrorMessage) }} />}

              <div className="bottom">
                <div className="button">
                  <button type="button" className="btn-white-medium left" onClick={this.onClickCancel}>
                    취소
                  </button>
                  <button type="submit" className="btn-blue-medium">
                    확인
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )
    );
  }
}

const formName = "member-withdraw";

const mapStateToProps = (state) => {
  return {
    states: {
      user: state.user,
      currentForm: state.form[formName],
    },
    initialValues: {
      withdrawCode: "079001",
      withdrawReason: "",
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleRequestUserByToken: () => dispatch(ActionUser.requestUserByToken()),
      handleCreateUserCheckPassword: (password) => dispatch(ActionUser.createUserCheckPassword(password)),
      handleUpdateUserWithdraw: (values) => dispatch(ActionUser.updateUserWithdraw(values)),
      handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: formName,
  })(Withdraw),
);
