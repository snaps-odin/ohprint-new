import React from "react";

import { toCash, toDate } from "utils/format";
import { offsetDayByDate } from "utils/date";

import CouponBoardCouponTip from "./board-coupon-tip";

import { goGiftCard } from "utils/url";

import { isISOTimeFormat, parseDateByTimestamp } from "utils/date";

import { css } from "@emotion/react";

import { jsx } from "@emotion/react";

export default class GiftCardRegister extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      focus: null,
    };

    this.textDecorationNone = css`
      > button {
        text-decoration: none !important;
        margin-top: 20px;
      }
    `;

    this.onFocusTip = this.onFocusTip.bind(this);
  }

  onFocusTip(index) {
    this.setState({ focus: index });
  }

  render() {
    let { focus } = this.state;
    const {
      giftcard: { list },
      coupon,
    } = this.props;

    return (
      <div className="giftcard-register-wrap">
        <table frameBorder={0} className="coupon">
          <caption>
            <span className="blind">쿠폰리스트</span>
          </caption>
          <colgroup>
            <col style={{ width: "380px" }} />
            <col style={{ width: "380px" }} />
            <col style={{ width: "380px" }} />
          </colgroup>
          <thead>
            <tr>
              <th>상품권명</th>
              <th>금액</th>
              <th>등록일</th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.length > 0 &&
              list.reduce((target, item, index) => {
                let expirationDate = toDate(item.regDate, "YYYY.MM.DD");

                index < 10 &&
                  target.push(
                    <tr>
                      <td>{item.couponName}</td>
                      <td>{toCash(item.amount)}원</td>
                      <td>{expirationDate}</td>
                    </tr>,
                  );

                return target;
              }, [])}

            {(!list || list.length <= 0) && (
              <tr>
                <td className="empty" colSpan="6" css={this.textDecorationNone}>
                  등록하신 오프린트미 상품권이 없습니다.
                  <br />
                  <button type="button" className="btn-blue-medium" onClick={goGiftCard}>
                    상품권 구매하기
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
