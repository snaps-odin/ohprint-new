import React from "react";
import update from "react-addons-update";
import { Field } from "redux-form";

import { LayerTypes } from "constants/index";
import { getHeight, getDatasetByName } from "utils/dom";
import * as Validate from "utils/validate";
import * as Normalize from "utils/normalize";

import { InputField, RadioField, CheckBoxField, SelectField } from "components/common/fields";
import { receiverZipCode } from "../../../utils/validate";

export default class OrderBuyer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      histories: {
        focus: 0,
      },
      validated: false,
      timestamp: null,
    };

    this.field = "buyer";

    this.fields = {
      keys: {
        defaults: ["Name", "CellPhoneNumbers", "CellPhoneNumbers[0]", "CellPhoneNumbers[1]", "CellPhoneNumbers[2]", "Email"],
        address: ["ZipCode", "Address0", "Address1"],
      },
      total: ["userName", "userCellPhoneNumbers", "userCellPhoneNumbers[0]", "userCellPhoneNumbers[1]", "userCellPhoneNumbers[2]", "userEmail", "receiverName", "receiverCellPhoneNumbers", "receiverCellPhoneNumbers[0]", "receiverCellPhoneNumbers[1]", "receiverCellPhoneNumbers[2]", "receiverZipCode", "receiverAddress0", "receiverAddress1"],
    };

    this.onClickFocus = this.onClickFocus.bind(this);
    this.onClickNextFocus = this.onClickNextFocus.bind(this);
    this.onClickUserSync = this.onClickUserSync.bind(this);
    this.onClickHistory = this.onClickHistory.bind(this);
    this.onClickAddressReset = this.onClickAddressReset.bind(this);
    this.onClickZipCode = this.onClickZipCode.bind(this);

    this.showError = this.showError.bind(this);
  }

  onClickFocus(event) {
    let {
      actions: { handleFocusStep },
      index,
    } = this.props;

    handleFocusStep(index);
  }

  onClickNextFocus(event) {
    let {
      actions: { handleFocusStep },
      index,
    } = this.props;

    handleFocusStep(index + 1);
  }

  onClickUserSync(event) {
    let {
      states: {
        currentForm: {
          values: { buyer },
        },
      },
      actions: { handleChangeFormValue },
    } = this.props;

    let field = this.field;

    this.fields["keys"]["defaults"].map((name) => {
      handleChangeFormValue(`${field}.receiver${name}`, buyer[`user${name}`]);
    });
  }

  onClickHistory(event) {
    let {
      states: {
        currentForm: {
          values: {
            buyer: { userHistories },
          },
        },
      },
      actions: { handleChangeFormValue },
    } = this.props;

    let field = this.field;
    let index = Number(getDatasetByName(event.currentTarget, "index"));

    Promise.all([
      this.fields["keys"]["defaults"].concat(this.fields["keys"]["address"]).map((name) => {
        handleChangeFormValue(`${field}.receiver${name}`, userHistories[index][`user${name}`]);
      }),
    ]).then(() => {
      this.setState(update(this.state, { histories: { focus: { $set: index } } }));
    });
  }

  onClickAddressReset(event) {
    let {
      actions: { handleChangeFormValue, handleUnTouchFormValue, handleFocusFormValue },
    } = this.props;

    let field = this.field;

    Promise.all([
      this.fields["keys"]["defaults"].concat(this.fields["keys"]["address"]).map((name) => {
        handleChangeFormValue(`${field}.receiver${name}`, name === "CellPhoneNumbers" ? [] : null);
        handleUnTouchFormValue(`${field}.receiver${name}`);
      }),
    ])
      .then(() => {
        this.setState(
          update(this.state, {
            histories: { focus: { $set: -1 } },
            validated: { $set: false },
          }),
        );
      })
      .then(() => {
        handleFocusFormValue(`${field}.receiverName`);
      });
  }

  onClickZipCode(event) {
    let {
      actions: { handleOpenContentsLayer, handleChangeFormValue },
    } = this.props;

    let field = this.field;

    handleOpenContentsLayer(LayerTypes.ZIPCODE, {
      callback: (data) => {
        handleChangeFormValue(`${field}.receiverZipCode`, data["zipCode"]);
        handleChangeFormValue(`${field}.receiverAddress0`, data["address"]);
      },
    });
  }

  showError() {
    let {
      actions: { handleTouchFormValue },
    } = this.props;

    let field = this.field;

    Promise.all([
      this.fields["total"].map((name) => {
        handleTouchFormValue(`${field}.${name}`);
      }),
    ]).then(() => {
      this.setState(
        update(this.state, {
          validated: { $set: true },
          timestamp: { $set: new Date().getTime() },
        }),
      );
    });
  }

  render() {
    let {
      states: { currentForm },
      active,
    } = this.props;
    let {
      values: { buyer },
      syncErrors,
    } = currentForm;
    let {
      histories: { focus },
      validated,
    } = this.state;

    let field = this.field;
    let valid = !syncErrors || (syncErrors && !syncErrors[field]);
    let style = active ? { height: `${51 + getHeight(this.bottom)}px` } : null;
    let defaultError = validated;

    return (
      buyer && (
        <li className="order-buyer-wrap" style={style}>
          <div className={`top ${active ? "active" : ""}`} onClick={this.onClickFocus}>
            <span className={`title ${active || valid ? "active" : ""}`}>배송 정보</span>
            {!active && <span className="icon" />}
            {!active && valid && <span className="desc">{`${buyer["receiverName"]} / ${buyer["receiverCellPhoneNumbers"].join("-")} / ${buyer["receiverAddress0"]} ${buyer["receiverAddress1"]}`}</span>}
          </div>

          <div
            className="bottom"
            ref={(c) => {
              this.bottom = c;
            }}
          >
            <table frameBorder={0}>
              <caption>
                <span className="blind">주문자</span>
              </caption>
              <colgroup>
                <col style={{ width: "160px" }} />
                <col style={{ width: "588px" }} />
              </colgroup>
              <thead>
                <tr>
                  <th colSpan={2}>주문자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    이름 <span>*</span>
                  </th>
                  <td>
                    <Field name={`${field}.userName`} className="box medium" placeholder="이름을 입력해 주세요." maxLength={15} defaultError={defaultError} component={InputField} validate={[Validate.required]} />
                  </td>
                </tr>

                <tr>
                  <th>
                    연락처 <span>*</span>
                  </th>
                  <td>
                    <ul className="phone-numbers">
                      <li>
                        <Field name={`${field}.userCellPhoneNumbers[0]`} className="box" maxLength={3} defaultError={defaultError} component={InputField} validate={[Validate.required, Validate.shortMinLength2, Validate.number]} />
                      </li>

                      <li className="line">-</li>

                      <li>
                        <Field name={`${field}.userCellPhoneNumbers[1]`} className="box" maxLength={4} defaultError={defaultError} component={InputField} validate={[Validate.required, Validate.shortMinLength3, Validate.number]} />
                      </li>

                      <li className="line">-</li>

                      <li>
                        <Field name={`${field}.userCellPhoneNumbers[2]`} className="box" maxLength={4} defaultError={defaultError} component={InputField} validate={[Validate.required, Validate.shortMinLength4, Validate.number]} />
                      </li>
                    </ul>

                    {!(buyer["receiveSMSAgreeYN"] || "").match(/Y/i) && (
                      <div className="agreement-sms">
                        <Field name={`${field}.receiveSMSAgreementYN`} label="SMS 수신 동의" component={CheckBoxField} />

                        <em>* 상품 할인 혜택 및 이벤트에 대한 소식을 받을 수 있습니다.</em>
                      </div>
                    )}
                  </td>
                </tr>

                <tr>
                  <th>
                    이메일 <span>*</span>
                  </th>
                  <td>
                    <Field name={`${field}.userEmail`} className="box large" component={InputField} validate={[Validate.required, Validate.email]} />
                  </td>
                </tr>
              </tbody>
            </table>

            <table frameBorder={0}>
              <caption>
                <span className="blind">배송지 정보</span>
              </caption>
              <colgroup>
                <col style={{ width: "160px" }} />
                <col style={{ width: "588px" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>배송지 정보</th>
                  <td>
                    <button type="button" className="btn-white-small" onClick={this.onClickUserSync}>
                      주문자 정보와 동일
                    </button>

                    {(buyer["userHistories"] || []).length > 0 && (
                      <button type="button" className="btn-white-small" onClick={this.onClickAddressReset}>
                        신규 배송지
                      </button>
                    )}
                  </td>
                </tr>
              </thead>
              <tbody>
                {buyer["userHistories"] && buyer["userHistories"].length > 0 && (
                  <tr>
                    <th>배송지 목록</th>
                    <td className="histories">
                      <div className="top">
                        {buyer["userHistories"].reduce((target, item, index) => {
                          index > 0 && target.push(<span>|</span>);
                          target.push(
                            <button type="button" className={focus === index ? "active" : ""} data-index={index} onClick={this.onClickHistory}>
                              {item["userName"]}
                            </button>,
                          );

                          return target;
                        }, [])}
                      </div>
                    </td>
                  </tr>
                )}

                <tr>
                  <th>
                    받으시는 분 <span>*</span>
                  </th>
                  <td>
                    <Field name={`${field}.receiverName`} className="box medium" placeholder="이름을 입력해 주세요." maxLength={15} defaultError={defaultError} component={InputField} validate={[Validate.required]} />
                  </td>
                </tr>

                <tr>
                  <th>
                    연락처 <span>*</span>
                  </th>
                  <td>
                    <ul className="phone-numbers">
                      <li>
                        <Field name={`${field}.receiverCellPhoneNumbers[0]`} className="box" maxLength={3} defaultError={defaultError} component={InputField} validate={[Validate.required, Validate.shortMinLength2, Validate.number]} />
                      </li>

                      <li className="line">-</li>

                      <li>
                        <Field name={`${field}.receiverCellPhoneNumbers[1]`} className="box" maxLength={4} defaultError={defaultError} component={InputField} validate={[Validate.required, Validate.shortMinLength3, Validate.number]} />
                      </li>

                      <li className="line">-</li>

                      <li>
                        <Field name={`${field}.receiverCellPhoneNumbers[2]`} className="box" maxLength={4} defaultError={defaultError} component={InputField} validate={[Validate.required, Validate.shortMinLength4, Validate.number]} />
                      </li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <th>
                    주소 <span>*</span>
                  </th>
                  <td className="address">
                    <Field name={`${field}.receiverZipCode`} className="box medium" readOnly={true} defaultError={defaultError} component={InputField} validate={[Validate.required, Validate.receiverZipCode]} />

                    <button type="button" className="btn-white-small" onClick={this.onClickZipCode}>
                      우편번호 조회
                    </button>

                    <Field name={`${field}.receiverAddress0`} className="box" placeholder="기본 주소를 입력해 주세요." readOnly={true} defaultError={defaultError} component={InputField} validate={[Validate.required]} />

                    <Field name={`${field}.receiverAddress1`} className="box" placeholder="상세 주소를 입력해 주세요." maxLength={45} showLength={true} defaultError={defaultError} component={InputField} validate={[Validate.required]} normalize={Normalize.maxLength(45)} />
                  </td>
                </tr>

                <tr>
                  <th>배송 메시지</th>
                  <td>
                    <Field name={`${field}.receiverMessage`} className="box" placeholder="배송 메시지를 입력해 주세요." maxLength={20} showLength={true} component={InputField} normalize={Normalize.maxLength(20)} />
                  </td>
                </tr>
              </tbody>
            </table>

            <span className="btn">
              <button type="button" className={`btn-${valid ? "blue" : "gray"}-medium`} onClick={this.onClickNextFocus}>
                다음
              </button>
            </span>
          </div>
        </li>
      )
    );
  }
}
