import React from "react";
import { connect } from "react-redux";
import update from "react-addons-update";

import { LayerTypes } from "constants/index";
import { ActionLayer, ActionUser } from "actions/index";
import { toCash, toDate, addZero } from "utils/format";
import { breaklines } from "utils/string";

class Benefit extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      ready: false,
      userGrade: null,
    };

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
            item: "전상품 10% 할인 쿠폰",
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
            item: "전상품 15% 할인 쿠폰",
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
            item: "전상품 20% 할인 쿠폰",
            className: "",
          },
          {
            item: "무료배송 쿠폰(1만원 이상)",
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
            item: "전상품 25% 할인 쿠폰",
            className: "",
          },
          {
            item: "무료배송 쿠폰(1만원 이상)",
            className: "",
          },
        ],
      },
    };
  }

  componentDidMount() {
    let {
      actions: { handleRequestUserGrade, handleRequestUserGradeType },
    } = this.props;

    Promise.all([handleRequestUserGradeType(), handleRequestUserGrade()]).then((result) => {
      let { 0: grades, 1: userGrade } = result;

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
    let { ready, grades, userGrade } = this.state;

    let currentUserLevelCode = userGrade ? (userGrade["userLevel"] || "").replace(/ /gi, "").trim().toLowerCase() : "";
    let nextUserLevelCode = userGrade ? (userGrade["userLevel"] || "").replace(/ /gi, "").trim().toLowerCase() : "";

    return (
      ready && (
        <div className={`benefit-wrap`}>
          <div className="container">
            <div className="top">
              <h1>나의 등급 혜택</h1>
              <dl>
                <dt>
                  <span className={`icon ${userGrade["iconName"]}`} />
                  <span>
                    <span>
                      <em>{userGrade["userName"]}</em>님의 회원등급은 "<em className={`blue ${userGrade["userLevel"]}`}>{userGrade["userLevelName"]}</em>" 입니다.
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
            </div>

            <div className="middle">
              <h3>전체 회원 등급 및 혜택 보기</h3>
              <ul>
                {(grades || []).reduce((target, item, index) => {
                  let level = this.benefitGrade[item["userLevelCode"]];

                  level &&
                    target.push(
                      <li className={`${currentUserLevelCode}` === level["className"] ? "active" : ""}>
                        <span className={level["iconName"]} />
                        <span className="level-name">{item["userLevelName"]}</span>

                        <dl>
                          <dt dangerouslySetInnerHTML={{ __html: level["condition"] }} />
                          {level["list"] &&
                            level["list"].reduce((listTarget, data) => {
                              listTarget.push(
                                <dd>
                                  <span className="icon-bullet-33" dangerouslySetInnerHTML={{ __html: data["item"] }} />
                                </dd>,
                              );
                              return listTarget;
                            }, [])}
                        </dl>
                      </li>,
                    );
                  return target;
                }, [])}
              </ul>
            </div>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    states: {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleRequestUserGrade: () => dispatch(ActionUser.requestUserGrade()),
      handleRequestUserGradeType: () => dispatch(ActionUser.requestUserGradeType()),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Benefit);
