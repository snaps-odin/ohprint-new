import React from "react";

import { getDatasetByName, getHeight } from "utils/dom";
import { goPrint } from "utils/url";

import Attention from "components/common/attention";

import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { LayerTypes } from "constants/index";
import { ActionUser } from "actions/index";
import { InputField } from "components/common/fields";
import { breaklines, clearSpace, clearSpecialCharacter } from "utils/string";
import * as NAVER from "utils/naver";
import * as APPLE from "utils/apple";
import * as FACEBOOK from "utils/facebook";
import * as Validate from "utils/validate";
import { parseJwt } from "utils/jwt";
import { goMemberProfile } from "utils/url";
import { getSnsName } from "utils/sns";

class DocumentDownload extends React.Component {
  constructor(...args) {
    super(...args);

    this.onClickClose = this.onClickClose.bind(this);
    this.onClickPrint = this.onClickPrint.bind(this);
  }

  onClickClose(event) {
    let {
      actions: { handleCloseContentsLayer },
    } = this.props;

    handleCloseContentsLayer();
  }

  onClickPrint(event) {
    let {
      options: { orderCode },
    } = this.props;

    let type = getDatasetByName(event.currentTarget, "type");

    switch (type) {
      case "expenditure-front":
      case "expenditure-back":
        goPrint("expenditure", { orderCode, front: type.match("expenditure-front") ? "Y" : "N" });
        break;

      default:
        goPrint(type, { orderCode });
        break;
    }
  }

  render() {
    let {
      states: {
        ui: {
          view: { height },
        },
      },
    } = this.props;

    let middleHeight = height < 50 + getHeight(this.inner) + 60 + getHeight(this.bottom) ? height - (50 + 60 + getHeight(this.bottom)) : null;

    return (
      <div className="document-download-layer-wrap popup">
        <div className="container">
          <div className="top">
            <h2>제출서류 다운로드</h2>
          </div>

          <div className="middle" style={middleHeight ? { height: `${middleHeight}px` } : null}>
            <div
              className="inner"
              ref={(c) => {
                this.inner = c;
              }}
            >
              <table border={0}>
                <caption>
                  <span className="blind">현금영수증</span>
                </caption>
                <colgroup>
                  <col style={{ width: "120px" }} />
                  <col style={{ width: "320px" }} />
                </colgroup>
                <tbody>
                  <tr>
                    <th>통장사본</th>
                    <td className="banks">
                      <ul>
                        <li>
                          <span>농협</span>
                          <a className="btn-white-small" href="/download/image/webling_nh.jpg" download="통장사본(농협).jpg">
                            다운로드
                          </a>
                        </li>
                        <li>
                          <span>국민은행</span>
                          <a className="btn-white-small" href="/download/image/webling_kb.jpg" download="통장사본(국민).jpg">
                            다운로드
                          </a>
                        </li>
                        <li>
                          <span>우리은행</span>
                          <a className="btn-white-small" href="/download/image/webling_wr..jpg" download="통장사본(우리).jpg">
                            다운로드
                          </a>
                        </li>
                        <li>
                          <span>하나은행</span>
                          <a className="btn-white-small" href="/download/image/webling_hana.jpg" download="통장사본(하나).jpg">
                            다운로드
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>사업자 등록증</th>
                    <td>
                      <a className="btn-white-small" href="/download/image/webling_biz.jpg" download="사업자등록증(스냅스).jpg">
                        다운로드
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>견적서</th>
                    <td>
                      <button type="button" className="btn-white-small" data-type="estimate" onClick={this.onClickPrint}>
                        출력
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>거래명세서</th>
                    <td>
                      <button type="button" className="btn-white-small" data-type="trading" onClick={this.onClickPrint}>
                        출력
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>지출결의서</th>
                    <td>
                      <button type="button" className="btn-white-small" data-type="expenditure-front" onClick={this.onClickPrint}>
                        앞면출력
                      </button>

                      <button type="button" className="btn-white-small" data-type="expenditure-back" onClick={this.onClickPrint}>
                        뒷면출력
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              {React.cloneElement(<Attention />, {
                value: {
                  title: "<span>제출서류 다운로드 유의사항</span>",
                  children: [{ value: "통장 사본과 사업자 등록증은 이미지 파일로 다운로드 가능합니다." }, { value: "상품 금액 수정 요청및 추가로 필요한 서류가 있는 경우 고객센터로 문의해 주십시오." }, { value: "계좌 입금 후 입금 확인을 위해 1:1 문의 또는 고객센터(1577-4703)로 연락해 주십시오." }, { value: "입금 확인 후 상품 제작이 가능합니다." }],
                },
              })}
            </div>
          </div>

          <div
            className="bottom"
            ref={(c) => {
              this.bottom = c;
            }}
          >
            <button type="button" className="btn-blue-medium" onClick={this.onClickClose}>
              확인
            </button>
          </div>
        </div>

        <button className="icon icon-close-w-1414 close" type="button" onClick={this.onClickClose} />
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
  })(DocumentDownload),
);
