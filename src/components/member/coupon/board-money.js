import React from "react";

import { toCash, toDate } from "utils/format";

export default class CouponBoardMoney extends React.Component {
  render() {
    let {
      money: { userMoneyHistoryList },
    } = this.props;
    let columnWidth = 228;

    return (
      <div className="coupon-board-wrap">
        <table frameBorder={0} className="money">
          <caption>
            <span className="blind">오프린트미 머니</span>
          </caption>
          <colgroup>
            <col style={{ width: `${columnWidth}px` }} />
            <col style={{ width: `${columnWidth}px` }} />
            <col style={{ width: `${columnWidth}px` }} />
            <col style={{ width: `${columnWidth}px` }} />
            <col style={{ width: `${columnWidth}px` }} />
          </colgroup>
          <thead>
            <tr>
              <th>날짜</th>
              <th>구분</th>
              <th>적립 금액</th>
              <th>사용 금액</th>
              <th>유효 기간</th>
            </tr>
          </thead>
          <tbody>
            {userMoneyHistoryList.length > 0 &&
              userMoneyHistoryList.map((item, index) => (
                <tr>
                  <td>{toDate(item["reserveDate"], "YYYY/MM/DD")}</td>
                  <td>{item["reserveReason"]}</td>
                  <td className="gold">{`${Number(item["reserveAmount"]) > 0 ? `${toCash(item["reserveAmount"])}원` : ""}`}</td>
                  <td>{`${Number(item["useAmount"]) > 0 ? `${toCash(item["useAmount"])}원` : ""}`}</td>
                  <td>{`${item["expirationDate"] ? `${toDate(item["expirationDate"], "YYYY/MM/DD")}까지` : ""}`}</td>
                </tr>
              ))}

            {userMoneyHistoryList.length <= 0 && (
              <tr>
                <td className="empty" colSpan="5">
                  오프린트미 머니 이용 내역이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
