import React from "react";
import { connect } from "react-redux";
import { change, Field, reduxForm, SubmissionError, untouch } from "redux-form";
import update from "react-addons-update";

import { ActionCoupon, ActionGiftcard, ActionLayer, ActionMoney, ActionUI } from "actions/index";
import { breaklines } from "utils/string";
import { getDatasetByName } from "utils/dom";
import { toCash } from "utils/format";

import { SelectField } from "components/common/fields";
import Pagination from "components/common/pagination";
import CouponCondition from "./condition";
import Tab from "components/common/tab";
import CouponBoardCoupon from "./board-coupon";
import CouponBoardMoney from "./board-money";
import GiftCardRegister from "./board-giftcard-register";
import CouponInformation from "./information";

class Coupon extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      ready: false,
      index: 0,
      offset: 0,
      limit: 10,
      coupon: {
        items: [],
        totalCount: 0,
      },
      money: {
        userMoneyHistoryList: [],
        totalCount: 0,
        userMoney: 0,
      },
      giftcard: {
        totalCount: 0,
        list: [],
      },
    };

    this.onChangeIndex = this.onChangeIndex.bind(this);
    this.onChangeOffset = this.onChangeOffset.bind(this);
    this.onChangeSort = this.onChangeSort.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeIndex(event) {
    const { values } = this.props.states.currentForm;
    let sort = "+";
    if (values) {
      sort = values.sort;
    }

    let { index: currentIndex } = this.state;

    let index = Number(getDatasetByName(event.currentTarget, "index"));

    currentIndex !== index &&
      Promise.all([this.setState(update(this.state, { index: { $set: index }, offset: { $set: 0 } }))]).then(() => {
        this.requestList(index, sort, 0);
      });
  }

  onChangeOffset(offset) {
    let {
      states: {
        currentForm: {
          values: { sort },
        },
      },
    } = this.props;
    let { index } = this.state;

    Promise.all([this.setState(update(this.state, { offset: { $set: offset } }))]).then(() => {
      this.requestList(index, sort, offset);
    });
  }

  onChangeSort(event, value) {
    let { index } = this.state;

    this.requestList(index, value, 0);
  }

  onSubmit(values) {
    let {
      actions: { handleCreateCouponByCouponCode, handleRegisterGiftcard, handleOpenAlertLayer },
      reset,
      states: {
        currentForm: {
          values: { sort },
        },
      },
    } = this.props;
    let { index } = this.state;
    let { couponNumber } = values;

    if (couponNumber) {
      return Promise.all([index === 2 ? handleRegisterGiftcard(encodeURI(couponNumber)) : handleCreateCouponByCouponCode(encodeURI(couponNumber))])
        .then(() => {
          this.requestList(index, sort, 0);
        })
        .then(() => {
          reset();
          if (index === 2) {
            handleOpenAlertLayer({
              description: `상품권 등록이 완료됐습니다. <br/>머니 탭으로 이동하여<br/>금액을 확인해주세요`,
              confirm: true,
              confirmLabel: "머니 탭으로 이동",
              cancelLabel: "닫기",
              callback: (confirmed) => {
                if (confirmed) {
                  Promise.all([this.setState(update(this.state, { index: { $set: 1 }, offset: { $set: 0 } }))]).then(() => {
                    this.requestList(1, sort, 0);
                  });
                }
              },
            });
          }
        })
        .catch((error) => {
          throw new SubmissionError({ couponNumber: error });
        });
    } else {
      throw new SubmissionError({ couponNumber: "쿠폰번호를 입력해 주세요." });
    }
  }

  requestList(index, sort, offset) {
    let {
      actions: { handleRequestCoupon, handleRequestGiftcardCount, handleRequestGiftcardHistory, handleRequestCouponCount, handleRequestUserMoney, handleRequestUserMoneyHistory, handleUpdateUIScroll },
    } = this.props;

    return index === 0
      ? Promise.all([handleRequestCoupon(sort, offset), handleRequestUserMoney()])
          .then((results) => {
            let { couponDataList, totalCount } = results[0];
            let { userMoney } = results[1];

            return new Promise((resolve) => {
              this.setState(
                update(this.state, {
                  ready: { $set: true },
                  coupon: {
                    items: { $set: couponDataList },
                    totalCount: { $set: totalCount },
                  },
                  money: {
                    userMoney: { $set: userMoney },
                  },
                }),
              );

              resolve();
            });
          })
          .then(() => {
            handleUpdateUIScroll(0);
          })
      : index === 1
      ? Promise.all([handleRequestCouponCount(), handleRequestUserMoneyHistory(offset)])
          .then((results) => {
            let { count } = results[0];
            let { userMoneyHistoryList, totalCount, userMoney } = results[1];

            return new Promise((resolve) => {
              this.setState(
                update(this.state, {
                  ready: { $set: true },
                  coupon: {
                    totalCount: { $set: count },
                  },
                  money: {
                    userMoneyHistoryList: { $set: userMoneyHistoryList },
                    totalCount: { $set: totalCount },
                    userMoney: { $set: userMoney },
                  },
                }),
              );

              resolve();
            });
          })
          .then(() => {
            handleUpdateUIScroll(0);
          })
      : Promise.all([handleRequestGiftcardCount(), handleRequestGiftcardHistory({ offset, limit: 10 }), handleRequestUserMoney()])
          .then((results) => {
            let { userMoney } = results[2];
            return new Promise((resolve) => {
              this.setState(
                update(this.state, {
                  ready: { $set: true },
                  giftcard: {
                    totalCount: { $set: results[0] },
                    list: { $set: results[1] },
                  },
                  money: {
                    userMoney: { $set: userMoney },
                  },
                }),
              );

              resolve();
            });
          })
          .then(() => {
            handleUpdateUIScroll(0);
          });
  }

  componentDidMount() {
    let {
      actions: { handleCreateCouponBySeq, handleOpenAlertLayer },
      seq,
      initialValues: { sort },
    } = this.props;
    let { index } = this.state;

    seq
      ? handleCreateCouponBySeq(seq)
          .then(() => {
            handleOpenAlertLayer({
              description: "감사쿠폰이 등록되었습니다.<br/>쿠폰내역을 확인해 주세요.",
              callback: () => {
                this.requestList(index, sort, 0);
              },
            });
          })
          .catch((error) => {
            handleOpenAlertLayer({
              description: breaklines(error),
              callback: () => {
                this.requestList(index, sort, 0);
              },
            });
          })
      : this.requestList(index, sort, 0);
  }

  render() {
    let { handleSubmit, submitting, actions } = this.props;
    let { ready, index, offset, limit, giftcard, coupon, money } = this.state;

    let totalCount = index === 0 ? coupon.totalCount : index === 1 ? (money ? money.totalCount : 0) : giftcard ? giftcard.totalCount : 0;
    let labels =
      ready &&
      ["쿠폰", "머니", "상품권"].reduce((target, label, index) => {
        target.push(
          <span>
            <span className={`icon ${index === 0 ? `icon-coupon` : index === 1 ? `icon-money` : `icon-gift-3522`}`} />
            <span className="txt">
              {label}
              {index !== 2 && <em>({index === 0 ? `${coupon.totalCount}장` : `${money ? toCash(money.userMoney) : 0}원`})</em>}
            </span>
          </span>,
        );
        return target;
      }, []);

    return (
      ready && (
        <div className="coupon-wrap">
          <div className="container">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className="top">
                <h1>쿠폰/머니</h1>
                {React.cloneElement(<Tab />, {
                  activeIndex: index,
                  labels,
                  tabWidth: "33.3%",
                  tabHeight: "80px",
                  actions: {
                    handleChange: this.onChangeIndex,
                  },
                })}

                {(index === 0 || index === 2) &&
                  React.cloneElement(<CouponCondition />, {
                    index,
                    submitting,
                    actions,
                    reset: this.props.reset,
                  })}
              </div>

              <div className="middle">
                {index === 0 && (
                  <div className="coupon-title-wrap">
                    <span className="right">
                      <Field
                        name="sort"
                        className="box"
                        width={120}
                        placeholder="선택"
                        disabled={totalCount < 1}
                        options={[
                          { label: "유효기간 임박순", value: "+" },
                          { label: "최신등록 순", value: "-" },
                        ]}
                        onChange={this.onChangeSort}
                        component={SelectField}
                      />
                    </span>
                  </div>
                )}

                {React.cloneElement(index === 0 ? <CouponBoardCoupon /> : index === 1 ? <CouponBoardMoney /> : <GiftCardRegister />, {
                  coupon,
                  money,
                  giftcard,
                })}

                {totalCount > 0 &&
                  React.cloneElement(<Pagination />, {
                    limit: limit,
                    offset: offset,
                    totalCount: totalCount,
                    handleChangeOffset: this.onChangeOffset,
                  })}
              </div>

              <div className="bottom">
                {React.cloneElement(<CouponInformation />, {
                  focus: index,
                })}
              </div>
            </form>
          </div>
        </div>
      )
    );
  }
}

const formName = "member-coupon";

const mapStateToProps = (state) => {
  return {
    states: {
      currentForm: state.form[formName],
    },
    initialValues: {
      sort: "+",
    },
  };
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      ...ownerProps.actions,

      handleUntouchField: (key) => dispatch(untouch(formName, key)),
      handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),

      handleRequestCoupon: (sort, offset) => dispatch(ActionCoupon.requestCoupons(sort, offset)),
      handleRequestCouponCount: () => dispatch(ActionCoupon.requestCouponsCount()),
      handleCreateCouponByCouponCode: (couponCode) => dispatch(ActionCoupon.createCouponByCouponCode(couponCode)),
      handleCreateCouponBySeq: (seq) => dispatch(ActionCoupon.createCouponBySeq(seq)),
      handleRequestUserMoney: () => dispatch(ActionMoney.requestUserMoney()),
      handleRequestUserMoneyHistory: (offset) => dispatch(ActionMoney.requestUserMoneyHistory(offset)),

      handleRegisterGiftcard: (couponCode) => dispatch(ActionGiftcard.registerGiftcard(couponCode)),
      handleRequestGiftcardHistory: (params) => dispatch(ActionGiftcard.requestGiftcardHistory(params)),
      handleRequestGiftcardCount: (params) => dispatch(ActionGiftcard.requestGiftcardCount()),

      handleUpdateUIScroll: (targetY, easingType) => dispatch(ActionUI.updateUIScroll(targetY, easingType)),

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
  })(Coupon),
);
