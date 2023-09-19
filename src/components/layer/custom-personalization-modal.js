import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, change } from "redux-form";
import update from "react-addons-update";
import {snakeToCamel} from '../../utils/string';
import { ActionCustomPersonalization } from "actions/index";
import * as Validate from "utils/validate";
import * as Normalize from "utils/normalize";
import { getHeight } from "utils/dom";

import {
  InputField,
  CheckBoxField,
  SelectField,
  TextAreaField,
  FileField,
  InputQuantityField
} from "components/common/fields";
import TermsIndex from "components/policy/terms";
import PrivacyIndex from "components/policy/privacy";

class CustomPersonalizationModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showType: null,
      productList: []
    };

    this.field = "customPersonalization";
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickTerms = this.onClickTerms.bind(this);
    this.onClickPrivacy = this.onClickPrivacy.bind(this);
    this.onClickHidePolicy = this.onClickHidePolicy.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onClickClose(event) {
    this.props.actions.handleCloseContentsLayer();
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
    Promise.all([this.setState({ showType })]).then(() => {
      this.props.actions.handleUpdateLayer();
    });
  }

  onSubmit(values) {
    let { submitCustomPersonalization,handleOpenAlertLayer,handleCloseContentsLayer } = this.props.actions
    const {
      product,
      quantity,
      company,
      name,
      email,
      phoneNumber,
      content,
    } = values[this.field];

    const [selectedProduct] = this.state.productList.filter(
      item => item.value === product
    );

    const productName = selectedProduct.label;
    let selectedFiles = values[snakeToCamel(`selected-${this.field}`)];
    selectedFiles = selectedFiles ? selectedFiles['files'] : [];
    const errorFile = selectedFiles.filter(file => file['error'])

    if(errorFile.length > 0 ) {
      return
    }

    let formData = new FormData();
    formData.append('reqProdName',productName);
    formData.append('reqProdCode',product);
    formData.append('custCnt',Number(quantity));
    formData.append('userName',name);
    formData.append('reqEmail',email);
    formData.append('reqTel',phoneNumber.join(""));
    formData.append('reqText',content);
    company && formData.append('compName',company);

    selectedFiles.length > 0 && selectedFiles.forEach((item)=> {
      formData.append('files',item['file']);
    })

    submitCustomPersonalization(formData)
      .then(() => {
        handleOpenAlertLayer({
          title: "신청접수가 완료되었습니다.",
          description:
            "<em class='blue'>접수된 내용은 담당자가 검토 후 <br />[메일 또는 유선]으로 답변 드리겠습니다.</em> <br />답변은 접수 내용 및 업무 사정에 따라 <br />다소 지연될 수 있습니다.",
          callback: () => handleCloseContentsLayer()
        });
      })
      .catch(error => {
        handleOpenAlertLayer({ description: error });
      });
  }

  componentDidMount() {
    const productList = this.props.actions.requestProductList();
    productList.then(res => this.updateProductList(res));
  }

  updateProductList({ list }) {
    const productList = list.map(({ commonCode, detailName }) => ({
      label: detailName,
      value: commonCode
    }));
    const nextState = update(this.state, {
      productList: { $set: productList }
    });
    this.setState(nextState);
  }

  render() {
    return this.state.showType ? this.renderAgreements() : this.renderForm();
  }

  renderAgreements() {
    return (
      <div className="policy-layer-wrap">
        <div className="container">
          <div className="top">
            <h1>
              {this.state.showType === "terms"
                ? "이용약관"
                : "개인정보 취급방침"}
            </h1>
          </div>
          <div className="bottom">
            <section>
              <h3>
                {this.state.showType === "terms"
                  ? "[이용약관 시행 일자: 2022년 04월 11일]"
                  : "[개인정보 취급방침 시행 일자: 2022년 04월 11일]"}
              </h3>
              {this.state.showType === "terms" ? (
                <TermsIndex version="current" showNavigate={false} />
              ) : (
                <PrivacyIndex version="current" showNavigate={false} />
              )}
            </section>
          </div>
        </div>
        <button
          className="icon-close-1414 close"
          onClick={this.onClickHidePolicy}
        />
      </div>
    );
  }

  renderForm() {
    const { height } = this.props.states.ui.view;
    const middleHeight =
      height < 50 + 450 + 622 + 60 ? height - (50 + 60) : null;

    return (
      <div className="custom-personalization-modal__wrapper popup">
        <div className="container">
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <div className="top">
              <h2>오프린트미 대량 맞춤 제작 서비스</h2>
            </div>
            <section
              style={middleHeight ? { height: `${middleHeight}px` } : null}
            >
              <header className="modal-header">
                <div className="modal-hero">
                  <h3 className="modal-title">
                    원하는 상품이 없거나? <br />
                    딱! 맞는 상품이 필요하신가요?
                  </h3>
                  <p className="modal-description">
                    기존 상품의 규격 외 사이즈 제작 또는 서비스에서 제공하지
                    않는{" "}
                    <span className="yellow">
                      패키지, 제본, 판촉물, 실사 출력
                    </span>{" "}
                    등 <br />
                    <span className="lightblue">
                      별도 인쇄 제작이 필요할 경우
                    </span>{" "}
                    <span className="yellow">
                      오프린트미가 상담을 통해 대량 맞춤 제작
                    </span>
                    을 도와드려요.
                  </p>
                  <p className="modal-warning">
                    * 신속하고 정확한 상담을 위해 아래 문의 내용을 상세하게 전달
                    부탁드립니다.
                  </p>
                </div>
              </header>
              <main className="modal-main">
                <table className="custom-personalization__form-table">
                  <thead>
                    <tr>
                      <th>신청서</th>
                      <td>
                        <span className="required">*</span> 항목은 필수값입니다.
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="product">
                      <th>
                        상품 <span className="required">*</span>
                      </th>
                      <td>
                        <Field
                          name={`${this.field}.product`}
                          className="box small"
                          placeholder="상품을 선택하세요."
                          options={this.state.productList}
                          component={SelectField}
                          validate={[Validate.required]}
                        />
                      </td>
                    </tr>
                    <tr className="quantity">
                      <th>
                        수량 <span className="required">*</span>
                      </th>
                      <td>
                        <Field
                          name={`${this.field}.quantity`}
                          className="box small"
                          type="text"
                          target="bulkOrder"
                          value={100}
                          maxCnt={10**9}
                          maxLength={9}
                          component={InputField}
                          validate={[
                            Validate.required,
                            Validate.number,
                            Validate.minValue1
                          ]}
                        />
                      </td>
                    </tr>
                    <tr className="company">
                      <th>회사명</th>
                      <td>
                        <Field
                          name={`${this.field}.company`}
                          className="box medium"
                          type="text"
                          maxLength={20}
                          placeholder="회사명을 입력해 주세요."
                          component={InputField}
                        />
                      </td>
                    </tr>
                    <tr className="name">
                      <th>
                        신청자명 <span className="required">*</span>
                      </th>
                      <td>
                        <Field
                          name={`${this.field}.name`}
                          className="box small"
                          maxLength={15}
                          placeholder="신청자명을 입력해 주세요."
                          component={InputField}
                          validate={[Validate.required]}
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>
                        이메일 <span className="required">*</span>
                      </th>
                      <td>
                        <Field
                          name={`${this.field}.email`}
                          className="box medium"
                          type="email"
                          maxLength={40}
                          placeholder="@을 포함한 이메일 주소 입력"
                          component={InputField}
                          validate={[Validate.required, Validate.email]}
                        />
                      </td>
                    </tr>
                    <tr className="phone-number">
                      <th>
                        연락처 <span className="required">*</span>
                      </th>
                      <td>
                        <Field
                          name={`${this.field}.phoneNumber[0]`}
                          type="text"
                          className="box x-small"
                          maxLength={3}
                          component={InputField}
                          validate={[Validate.number,Validate.shortMinLength2Required]}
                        />
                        <div className="line" />
                        <Field
                          name={`${this.field}.phoneNumber[1]`}
                          type="text"
                          className="box x-small"
                          maxLength={4}
                          component={InputField}
                          validate={[Validate.number,Validate.shortMinLength3Required]}
                        />
                        <div className="line" />
                        <Field
                          name={`${this.field}.phoneNumber[2]`}
                          type="text"
                          className="box x-small"
                          maxLength={4}
                          component={InputField}
                          validate={[Validate.number,Validate.shortMinLength4Required]}
                        />
                      </td>
                    </tr>
                    <tr className="content">
                      <th>
                        문의 내용 <span className="required">*</span>
                      </th>
                      <td>
                        <Field
                          name={`${this.field}.content`}
                          className="box"
                          placeholder={"문의하실 내용을 입력해 주세요. \n(견적 서비스 신청 외 기타 문의 건은 고객센터(1577-4703 / 1:1 문의)를 이용하여 주십시오.)".replace(
                            /\\n/g,
                            "\n"
                          )}
                          maxLength={100}
                          showLength
                          component={TextAreaField}
                          validate={[Validate.required]}
                          normalize={Normalize.maxLength(100)}
                        />
                      </td>
                    </tr>
                    <div className="line" />

                    <tr className="phone-number">
                      <th>
                        디자인 파일 첨부
                      </th>
                      <td>
                        <Field name={`${this.field}.files`}
                               id="file"
                               handleChangeFormValue={this.props.actions.handleChangeFormValue}
                               maxFileLength={5}
                               maxFileSize={25}
                               component={FileField}
                               customBulkFile={true}
                        />


                      </td>
                    </tr>

                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={2}>
                        <Field
                          name={`${this.field}.agreement`}
                          label={
                            <span className="desc">
                              {"오프린트미 "}
                              <button type="button" onClick={this.onClickTerms}>
                                이용약관
                              </button>{" "}
                              {"및 "}
                              <button
                                type="button"
                                onClick={this.onClickPrivacy}
                              >
                                개인정보 수집 및 이용
                              </button>
                              에 대한 내용을 확인하고 동의합니다.
                            </span>
                          }
                          component={CheckBoxField}
                          validate={[Validate.required]}
                        />
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </main>
              <footer className="modal-footer">
                <div className="custom-personalization-form__submit">
                  <button
                    type="submit"
                    className={`btn-${
                      this.props.valid ? "blue" : "gray"
                    }-medium`}
                    disabled={!this.props.valid}
                  >
                    완료
                  </button>
                </div>
              </footer>
            </section>
          </form>
        </div>
        <button
          className="icon icon-close-w-1414 close"
          onClick={this.onClickClose}
        />
      </div>
    );
  }
}

const formName = "custom-personalization-form";

const mapStateToProps = (state, ownerProps) => {
  return {
    states: {
      ...ownerProps.states,
      currentForm: state.form[formName]
    }
  };
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      ...ownerProps.actions,
      requestProductList: () => dispatch(ActionCustomPersonalization.requestProductList()),
      submitCustomPersonalization: params => dispatch(ActionCustomPersonalization.submitCustomPersonalization(params)),
      handleChangeFormValue : (key,value) => dispatch(change(formName,key,value)),

    }
  };
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: formName,
    // validate,
    asyncBlurFields: ["customPersonalization.name"]
  })(CustomPersonalizationModal)
);
