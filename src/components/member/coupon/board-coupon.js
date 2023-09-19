import React from "react";

import { toCash, toDate } from "utils/format";
import { offsetDayByDate } from "utils/date";

import CouponBoardCouponTip from "./board-coupon-tip";

export default class CouponBoardCoupon extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      focus: null,
    };

    this.onFocusTip = this.onFocusTip.bind(this);
  }

  onFocusTip(index) {
    this.setState({ focus: index });
  }

  render() {
    let { focus } = this.state;
    let { coupon } = this.props;

    return (
      <div className="coupon-board-wrap">
        <table frameBorder={0} className="coupon">
          <caption>
            <span className="blind">쿠폰리스트</span>
          </caption>
          <colgroup>
            <col style={{ width: "470px" }} />
            <col style={{ width: "130px" }} />
            <col style={{ width: "130px" }} />
            <col style={{ width: "200px" }} />
            <col style={{ width: "130px" }} />
            <col style={{ width: "80px" }} />
          </colgroup>
          <thead>
            <tr>
              <th>쿠폰명</th>
              <th>할인 혜택</th>
              <th>적용 상품</th>
              <th>적용 기준 / 제한 조건</th>
              <th>유효 기간</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            {coupon.items &&
              coupon.items.length > 0 &&
              coupon.items.map((item, index) => {
                let expirationDate = offsetDayByDate(item["expirationDate"], new Date());

                return (
                  <tr>
                    <td>{item.couponDescription}</td>
                    <td className="red">{`${item["couponType"] === "AMOUNT_DISCOUNT" ? `${toCash(item["discount"])}원` : item["couponType"] === "FREE_DELIVERY" ? `무료배송` : `${item["discount"]}%`}`}</td>
                    <td>
                      {React.cloneElement(<CouponBoardCouponTip />, {
                        item,
                        index,
                        focus,
                        handleFocusTip: this.onFocusTip,
                      })}
                    </td>
                    {item["useLimitAmount"] > 0 || item["maxLimitAmount"] > 0 ? (
                      <td>
                        {`${item["useLimitAmount"] > 0 ? `${toCash(item["useLimitAmount"])}원 이상 구매시` : ""}`}
                        {item["useLimitAmount"] > 0 && item["maxLimitAmount"] > 0 && <br />}
                        {`${item["maxLimitAmount"] > 0 ? `최대할인 : ${toCash(item["maxLimitAmount"])}원` : ""}`}
                      </td>
                    ) : (
                      <td>조건 없음</td>
                    )}
                    <td>{toDate(item["expirationDate"], "YYYY/MM/DD")}까지</td>
                    <td>{expirationDate <= 7 && <span className="extinction">소멸 예정</span>}</td>
                  </tr>
                );
              })}

            {(!coupon.items || coupon.items.length <= 0) && (
              <tr>
                <td className="empty" colSpan="6">
                  사용 가능한 쿠폰이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
