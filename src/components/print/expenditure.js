"use strict";

import React from "react";
import { addCdn } from "utils/url";

class Expenditure extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      isFrontPage: true,
    };

    this.rows = 20;
  }

  componentDidMount() {
    let {
      location: {
        query: { front },
      },
    } = this.props;

    Promise.all([
      this.setState({
        isFrontPage: front === "Y",
      }),
    ]).then(() => {
      window.setTimeout(() => {
        document["queryCommandSupported"]("print") ? document.execCommand("print", false, null) : window.print();
      }, 250);
    });
  }

  render() {
    let { isFrontPage } = this.state;

    return (
      <div className="expenditure-wrap">
        {isFrontPage ? (
          <div className="container front">
            <table summary="지출결의서" frameBorder={0} cellSpacing={0}>
              <caption>지출결의서</caption>
              <colgroup>
                <col width="97" />
                <col width="115" />
                <col width="69" />
                <col width="65" />
                <col width="65" />
                <col width="97" />
                <col width="115" />
                <col width="69" />
              </colgroup>
              <tbody>
                <tr>
                  <td colSpan="8" className="title">
                    <h1 className="top">(구입) 지 출 결 의 서</h1>
                  </td>
                </tr>
                <tr>
                  <td>담 당</td>
                  <td>행정실장</td>
                  <td colSpan="2">학교장</td>
                  <td colSpan="2" rowSpan="2" className="year">
                    201 . <br />
                    회계연도
                    <br />
                    학교회계
                  </td>
                  <td>담당</td>
                  <td>학교장</td>
                </tr>
                <tr>
                  <td className="h60" />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <td className="h60 lh23">
                    계 약<br />
                    (주 문)
                  </td>
                  <td>
                    <span>201</span>
                    <span>.</span>
                    <span>.</span>.
                  </td>
                  <td>(인)</td>
                  <td rowSpan="4" />
                  <td rowSpan="4" />
                  <td>청 구</td>
                  <td>
                    <span>201</span>
                    <span>.</span>
                    <span>.</span>.
                  </td>
                  <td className="stamp">
                    (인)
                    <img src={addCdn("/images/common/tax-stamp.png")} alt="도장" />
                  </td>
                </tr>
                <tr>
                  <td className="h60 lh23">
                    지출원인행위
                    <br />
                    (주 문)
                  </td>
                  <td>
                    <span>201</span>
                    <span>.</span>
                    <span>.</span>.
                  </td>
                  <td>(인)</td>
                  <td>{`지  출`}</td>
                  <td>
                    <span>201</span>
                    <span>.</span>
                    <span>.</span>.
                  </td>
                  <td>(인)</td>
                </tr>
                <tr>
                  <td className="h60 lh23">
                    납 품<br />
                    (준공,운반)
                  </td>
                  <td>
                    <span>201</span>
                    <span>.</span>
                    <span>.</span>.
                  </td>
                  <td>(인)</td>
                  <td>지출부등기</td>
                  <td>
                    <span>201</span>
                    <span>.</span>
                    <span>.</span>.
                  </td>
                  <td>(인)</td>
                </tr>
                <tr>
                  <td className="h60 lh23">
                    검 사<br />
                    (검 수)
                  </td>
                  <td>
                    <span>201</span>
                    <span>.</span>
                    <span>.</span>.
                  </td>
                  <td>(인)</td>
                  <td className="lh23">
                    물품(재산)
                    <br />
                    대장등기
                  </td>
                  <td>
                    <span>201</span>
                    <span>.</span>
                    <span>.</span>.
                  </td>
                  <td>(인)</td>
                </tr>
                <tr>
                  <td className="h80">적 요</td>
                  <td colSpan="7" />
                </tr>
                <tr>
                  <td colSpan="5" rowSpan="4" className="accept">
                    승 낙 사 항<br />
                    본 계약에 있어서는 이면의 사항을 승낙합니다.
                    <br />
                    <span>201</span>
                    <span>년</span>
                    <span>월</span>
                    <span>일</span>
                    <br />
                  </td>
                  <td>공 급 가 액</td>
                  <td colSpan="2" className="text-left">
                    ￦
                  </td>
                </tr>
                <tr>
                  <td>부 가 세</td>
                  <td colSpan="2" className="text-left">
                    ￦
                  </td>
                </tr>
                <tr>
                  <td>합 계</td>
                  <td colSpan="2" className="text-left">
                    ￦
                  </td>
                </tr>
                <tr>
                  <td>소 득 세</td>
                  <td colSpan="2" className="text-left">
                    ￦
                  </td>
                </tr>
                <tr>
                  <th colSpan="5" className="line">
                    공 급 자
                  </th>
                  <td>주 민 세</td>
                  <td colSpan="2" className="text-left">
                    ￦
                  </td>
                </tr>
                <tr>
                  <th className="line">상 호</th>
                  <td colSpan="4" className="text-left">
                    ㈜위블링
                  </td>
                  <td>기 타 공 제</td>
                  <td colSpan="2" className="text-left">
                    ￦
                  </td>
                </tr>
                <tr>
                  <th className="line">사업자번호</th>
                  <td colSpan="4" className="text-left">
                    104 - 81 - 50311
                  </td>
                  <td>공 제 액 계</td>
                  <td colSpan="2" className="text-left">
                    ￦
                  </td>
                </tr>
                <tr>
                  <th className="line">성 명</th>
                  <td colSpan="4" className="provider text-left">
                    {`김 성 경   (인)`}
                    <img src={addCdn("/images/common/tax-stamp.png")} alt="도장" />
                  </td>
                  <td>지 급 액</td>
                  <td colSpan="2" className="text-left">
                    ￦
                  </td>
                </tr>
                <tr>
                  <th className="line_r">주 소</th>
                  <td colSpan="4" className="text-left lh35">
                    서울특별시 영등포구 여의대로 24, 21층
                  </td>
                  <td colSpan="3" rowSpan="3" className="ensure">
                    위의 금액을 영수합니다.
                    <br />
                    <span>201</span>
                    <span>년</span>
                    <span>월</span>
                    <span>일</span>
                    <br />
                    <div>
                      <span>성명</span>
                      (인)
                      <img src={addCdn("/images/common/tax-stamp.png")} alt="도장" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="line">계 좌 번 호</th>
                  <td className="text-left" colSpan="4">
                    농협중앙회 096 - 01 - 282446
                  </td>
                </tr>
                <tr>
                  <td colSpan="5" className="h60">
                    (인지) 첨부란이 부족할 경우 뒤쪽에 붙임
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="container back">
            <table summary="구입물품명세서" frameBorder={0} cellSpacing={0}>
              <caption>구입물품명세서</caption>
              <colgroup>
                <col width="191" />
                <col width="138" />
                <col width="52" />
                <col width="85" />
                <col width="85" />
                <col width="86" />
                <col width="56" />
              </colgroup>
              <tbody>
                <tr>
                  <td colSpan="8" className="title">
                    <h1 className="top">구 입 물 품 명 세 서</h1>
                  </td>
                </tr>
                <tr>
                  <td>품 명</td>
                  <td>규 격</td>
                  <td>수 량</td>
                  <td>단 위</td>
                  <td>단 가</td>
                  <td>금 액</td>
                  <td>비 고</td>
                </tr>

                {new Array(this.rows).fill(true).map((item, index) => (
                  <tr>
                    {new Array(7).fill(true).map((block) => (
                      <td />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <table summary="승낙사항" frameBorder={0} cellSpacing={0} className="accept">
              <caption>승낙사항</caption>
              <colgroup>
                <col width="699" />
              </colgroup>
              <tbody>
                <tr>
                  <td className="text-center">{`승   낙   사   항`}</td>
                </tr>
                <tr>
                  <td>
                    <span className="num">1.</span>
                    <span>{`    년`}</span>
                    <span>{`  월`}</span>
                    <span>
                      {`  일까지 지정한 장소에 납품하여야 하고, 납품된 물품 중 검사에 불합격`}
                      <br />
                      한 물품이 있을 때에는 지정기일까지 교환하여야 한다.
                      <br />
                    </span>
                    <span className="num">2.</span>
                    <span>
                      납품기한내에 완납하지 못한 때에는 그 지연일수 1일에 대하여 납품되지 아니한 물품대가의
                      <br />
                      {`1,000분의 (    )에 해당하는 지체상금을 납부하여야 한다.`}
                      <br />
                    </span>
                    <span className="num">3.</span>
                    <span>
                      납품기한 또는 교환기간 경과후 10일까지 납품하지 못하는 때 또는 납품된 물품이
                      <br />
                      규격서ㆍ견본 등과 다른 때에는 그 계약을 해제할 수 있다.
                      <br />
                    </span>
                    <span className="num">4.</span>
                    <span>
                      제3호에 의하여 계약을 해제한 때에는 계약이 해제된 물품대가의 100분의 10에 해당하는
                      <br />
                      금액을 손해배상금으로 납부하여야 한다.
                      <br />
                    </span>
                    <span className="num">5.</span>
                    <span>제2호 및 제4호에 의하여 납부하여야 하는 금액은 물품대금과 상계할 수 있다.</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default Expenditure;
