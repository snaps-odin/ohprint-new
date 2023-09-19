

import React from 'react';

import { getDatasetByName } from 'utils/dom';

export default class PrivacyCurrent extends React.Component {
  constructor(...args) {
    super(...args);

    this.onClickFocus = this.onClickFocus.bind(this);
  }

  onClickFocus(event) {
    let { actions: { handleFocus } } = this.props;

    handleFocus(getDatasetByName(event.currentTarget, 'index'));
  }

  render() {
    let { showNavigate } = this.props;

    return (
      <div className="policy-contents-wrap">
        <div className="section">
          ㈜스냅스 오프린트미(이하 ‘회사’)는 개인정보보호 관련 주요 법률인 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률 (이하 "정보통신망법"이라고 합니다) (이하 “정보 통신망 법”이라고 합니다)을 비롯한 모든
          개인정보보호 관련 법률 규정 및 관련 국가기관 등이 제정한 고시, 훈령, 지침 등을 준수합니다.
        </div>

        {showNavigate && (
          <div className="section">
            본 개인정보처리방침의 목차는 아래와 같습니다.
          </div>
        )}

        {showNavigate && (
          <div className="info-list">
            <ol>
              <li>
                <span>1. </span><a data-index={1} onClick={this.onClickFocus}>개인정보처리방침의 의의</a>
              </li>
              <li>
                <span>2. </span><a data-index={2} onClick={this.onClickFocus}>개인정보의 수집 항목 및 수집 방법</a>
              </li>
              <li>
                <span>3. </span><a data-index={3} onClick={this.onClickFocus}>개인정보의 이용목적</a>
              </li>
            </ol>
            <ol>
              <li>
                <span>4. </span><a data-index={4} onClick={this.onClickFocus}>개인정보의 보유, 이용기간, 파기절차, 방법</a>
              </li>
              <li>
                <span>5. </span><a data-index={5} onClick={this.onClickFocus}>개인정보 제3자 제공</a>
              </li>
              <li>
                <span>6. </span><a data-index={6} onClick={this.onClickFocus}>개인정보 취급 위탁</a>
              </li>
            </ol>
            <ol>
              <li>
                <span>7. </span><a data-index={7} onClick={this.onClickFocus}>이용자 및 법정 대리인의 권리와 행사방법</a>
              </li>
              <li>
                <span>8. </span><a data-index={8} onClick={this.onClickFocus}>개인정보 자동 수집 장치의 설치, 운영 및 그 거부에 관한 사항</a>
              </li>
              <li>
                <span>9. </span><a data-index={9} onClick={this.onClickFocus}>개인정보관리 책임자</a>
              </li>
            </ol>
            <ol>
              <li>
                <span>10. </span><a data-index={10} onClick={this.onClickFocus}>개정 전 고지 의무</a>
              </li>
            </ol>
          </div>
        )}

        <h3 id="section-1">제1조 (개인정보처리방침의 의의)</h3>
        <div className="section">
          ㈜스냅스 오프린트미 (이하 ‘회사’)는 개인정보처리방침을 통하여 회사가 제공하는 온라인 서비스인 오프린트미 서비스를 이용하는 회원의 개인정보보호를 소중하게 생각하고, 회원의 개인정보를 보호하기
          위해 항상 최선을 다해 노력하고 있습니다.<br/>
          개인정보처리방침은 다음과 같은 중요한 의미를 가지고 있습니다.
        </div>
        <div className="section">
          <span>- 오프린트미가 어떤 정보를 수집하고, 수집한 정보를 어떻게 사용하며, 필요에 따라 누구와 이를 공유(‘위탁 또는 제공’)하며 이용목적을 달성한 정보를 언제, 어떻게 파기하는지 등 ‘개인정보보호’와 관련한 정보를 투명하게 제공합니다.</span>
          <span>- 정보주체로서 이용자는 자신의 개인정보에 대해 어떤 권리를 가지고 있으며, 이를 어떤 방법과 절차로 행사할 수 있는지를 알려드립니다.</span>
          <span>- 개인정보 침해 사고가 발생하는 경우, 추가적인 피해를 예방하고 이미 발생한 피해를 복구하기 위해 누구에게 연락하여 어떤 도움을 받을 수 있는지 알려드립니다.</span>
        </div>
        <h3 id="section-2">제2조 (개인정보의 수집 항목 및 수집 방법)</h3>
        <div className="section line">1) 회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.</div>
        <table border="0">
          <caption><span className="blind">(개인정보의 수집 항목 및 수집 방법)</span></caption>
          <colgroup>
            <col style={{ width: '33.33%' }}/>
            <col style={{ width: '33.33%' }}/>
            <col style={{ width: '33.33%' }}/>
          </colgroup>
          <tbody>
          <tr>
            <th>구분</th>
            <th>수집, 이용 항목</th>
            <th>이용 목적</th>
          </tr>
          <tr>
            <td>필수 항목</td>
            <td>이름, 이메일, 비밀번호, FacebookID, NaverID</td>
            <td>
              <ol>
                <li>① 회원제 서비스 운영 및 관리 (가입 및 탈퇴 처리등)</li>
                <li>② 이용약관, 서비스 상품 약관, 개인 정보 취급 방침의 변경, 서비스 변경, 중단,장애,침해 사고 등 중요 사항 고지 등 의사소통 경로</li>
                <li>③ 서비스 민원 사항, 고충 처리 결과 안내</li>
                <li>④ 개인 정보 보호 관련 법령에 따른 회원 정보 열람, 정정권 이행</li>
                <li>⑤ 정보통신망법 등 관련 법령에 따른 보유 및 보존 의무 이행</li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
        <div className="section line">서비스 이용 단계</div>
        <table border="0">
          <caption><span className="blind">서비스 이용 단계</span></caption>
          <colgroup>
            <col style={{ width: '33.33%' }}/>
            <col style={{ width: '33.33%' }}/>
            <col style={{ width: '33.33%' }}/>
          </colgroup>
          <tbody>
          <tr>
            <th>구분</th>
            <th>수집, 이용 항목</th>
            <th>이용 목적</th>
          </tr>
          <tr>
            <td rowSpan="2">필수 항목</td>
            <td>
              결재 수단별 정보 - 신용카드,<br/>
              무통장 입금 (가상계좌),<br/>
              실시간 계좌 이체
            </td>
            <td>
              <ol>
                <li>① 유료 서비스 계약의 이행 및 서비스 제공에 따른 요금 청구, 결제, 정산, 할인</li>
                <li>② 유료 서비스 계약 이행 업무 위탁 (* 구매, 결제 단계에서 회원이 입력하는 신용카드 번호, 유효 기간, 휴대폰 번호 등의 정보는 회사가 직접 저장하지 않습니다.)</li>
              </ol>
            </td>
          </tr>
          <tr>
            <td>
              구매자 이름, 연락처 (휴대전화번호, 이메일 주소), 수령자 이름, 수령자 연락처 (휴대전화번호, 유선전화번호), 배송지 주소
            </td>
            <td>
              상품의 주문 배송
            </td>
          </tr>
          <tr>
            <td>필수 항목</td>
            <td>서비스 이용을 목적으로 회원이 업로드한 사진의 원본 및 메타정보(exif)</td>
            <td>
              <ol>
                <li>① MD 서비스 등의 제공 및 상품 제작</li>
                <li>② 서비스의 개선</li>
              </ol>
            </td>
          </tr>
          <tr>
            <td rowSpan="2">필수 항목 (생성 정보)</td>
            <td>회원의 기기 정보 (스마트  폰) 기기정보 (디바이스 ID 또는 IMEI)</td>
            <td>
              <ol>
                <li>① 서비스 부정 사용 방지</li>
                <li>② 서비스 장애 발생 시 신속한 민원 처리</li>
              </ol>
            </td>
          </tr>
          <tr>
            <td>서비스 이용 기록, 사이트 방문 기록, 쿠키 등</td>
            <td>
              <ol>
                <li>① 서비스 이용 내역 확인</li>
                <li>② 관련 법령에 따른 보유 및 정보 제공 의무 이행</li>
                <li>③ 이용자 접속 빈도 분석, 고객</li>
                <li>④ 이용자 맞춤형 서비스 제공을 위한 통계 활용<br/>원활한 서비스 제공을 위한 서비스 시스템 인프라 확충</li>
              </ol>
            </td>
          </tr>
          </tbody>
        </table>
        <div className="section">
          <span>2) 수집 방법</span>
          <span>∙ 오프린트미 홈페이지를 통한 회원 가입, 서비스 이용, 배송 요청, 경품 행사 응모 과정에서 이용자가 직접 입력한 개인정보를 수집합니다.</span>
          <span>∙ 고객센터를 통한 상담과정에서 웹페이지, 메일, 팩스, 전화 등을 통해 이용자가 입력한 개인정보가 수집될 수 있습니다</span>
          <span>∙ 제휴사계정을 통한 로그인 서비스 이용 또는 제휴사 이벤트 등에 이용자가 참여하는 경우 제휴사로부터 개인정보를 제공받을 수 있습니다</span>
          <span>∙ 이용자의 서비스 이용 과정에서 이용기록 등 정보가 자동으로 수집될 수 있습니다</span>
        </div>
        <h3 id="section-3">제3조 (개인정보의 이용 목적)</h3>
        <div className="section">
          <span>1) 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금 정산</span>
          <span>- 콘텐츠 제공, 구매 및 요금 결제, 물품 배송 또는 청구지 등 발송, 금융거래 본인 인증 및 금융 서비스</span>
        </div>
        <div className="section">
          <span>2) 회원 관리</span>
          <span>- 회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 , 연령확인 , 불만처리 등 민원처리 , 고지사항 전달 </span>
        </div>
        <div className="section">
          <span>3) 마케팅 및 광고에 활용</span>
          <span>신규 서비스(제품) 개발 및 특화, 이벤트 등 광고성 정보 전달, 인구통계학적 특성에 따른 서비스 제공 및 광고 게재, 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</span>
        </div>
        <h3 id="section-4">제4조 (개인정보의 보유, 이용 기간, 파기 절차, 방법)</h3>
        <div className="section">
          회원 탈퇴, 개인 정보의 수집 및 이용 목적이 달성 된 경우 회원의 개인 정보를 지체없이 파기합니다. 단 아래 각 사유 및 기간에 한하여 예외적으로 회원의 개인 정보를 보유합니다
        </div>
        <div className="section">
          <span>1) 회사 내부 방침에 의한 경우</span>
          <span><i/>1. 불량 이용자 재가입 방지, 부정 이용 방지, 기타 민원 대응 </span>
          <span><i/><i/>- 보유 기간 : 회원 탈퇴 후 6개월 간 (단, 민원 대 응의 경우 민원 해결 시까지) </span>
          <span><i/><i/>- 보유 정보 : 아이디, 이메일, 가입일, 탈퇴일  </span>
          <span><i/>2. 서비스의 개선 </span>
          <span><i/><i/>- 보유 기간 : 수집한 날로부터 1개월 간 </span>
          <span><i/><i/>- 보유 정보 : 서비스 이용을 목적으로 회원이 업로드한 사진의 원본 및 메타정보(exif)  </span>
        </div>
        <div className="section">
          <span>2) 회원이 직접 개인 정보의 보존을 요청한 경우 또는 회사가 개별적으로 회원의 동의를 얻은 경우 </span>
          <span>- 보유 기간 및 보유 정보 : 회원의 요청 또는 동의를 얻은 항목, 기간에 한하여 해당 기간 동안 보유  </span>
        </div>
        <div className="section line">
          3) 법령에 의거, 이용자의 동의 없이 보존할 것을 정한 경우
        </div>
        <table border="0">
          <caption><span className="blind">3) 법령에 의거, 이용자의 동의 없이 보존할 것을 정한 경우</span></caption>
          <colgroup>
            <col style={{ width: '33.33%' }}/>
            <col style={{ width: '33.33%' }}/>
            <col style={{ width: '33.33%' }}/>
          </colgroup>
          <tbody>
          <tr>
            <th>근거법령</th>
            <th>보존정보</th>
            <th>보존기간</th>
          </tr>
          <tr>
            <td>전자 상거래 등에서의 소비자 보호에 관한 법률</td>
            <td>계약 또는 청약 철회에 관한 기록</td>
            <td>5년</td>
          </tr>
          <tr>
            <td>전자 상거래 등에서의 소비자 보호에 관한 법률, 상법, 국세 기본법, 소득세법, 법인세법, 부가가치법</td>
            <td>대금 결제 및 재화 등의 공급에 관한 기록, 상업 장부와 영업에 관한 전표, 증빙 서류</td>
            <td>5년</td>
          </tr>
          <tr>
            <td>전자 상거래 등에서의 소비자 보호에 관한 법률</td>
            <td>소비자 불만 또는 분쟁 처리에 관한 기록</td>
            <td>3년</td>
          </tr>
          <tr>
            <td>통신 비밀 보호법</td>
            <td>웹사이트 방문기록</td>
            <td>3개월</td>
          </tr>
          </tbody>
        </table>
        <div className="section">
          4) 개인 정보 유효 기간제의 적용
        </div>
        <div className="section">
          회사는 이용자가 1년(이하 “개인정보 유효기간”이라고 합니다) 동안 서비스를 이용한 사실 또는 활동한 기록이 없는 경우, 개인정보의 안전한 보호를 위해
          정보통신망 이용촉진 및 정보보호 등에 관한 법률 제29조’ 에 근거하여 이용자에게 사전 통지하고 개인정보를 별도로 분리하여 저장·관리합니다. 회사는 개인정보 유효기간이 도래하기
          30일 전까지 이메일, 문자메시지, 휴대전화 등 회원이 입력한 연락수단을 통하여 사전 통지합니다. 다만 개인정보 유효기간이 도래한 회원의 경우에도 회원이 별도 유효기간 갱신의
          요청 등 개별 동의가 있는 경우, 오프린트미 머니가 남아 있는 경우 또는 타 법령에서 별도로 보존 기간을 정하는 경우에는 관련 법령이 정한 기간 동안 보존 후 조치됩니다. 개인정보 유효
          기간제에 의해 별도 분리된 경우라도 회원이 서비스 재이용을 원하실 경우 본인 확인 절차를 거쳐 서비스를 재이용하실 수 있습니다.
        </div>
        <div className="section">
          5) 파기 절차
        </div>
        <div className="section">
          이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보 보호 사유에 따라(보유 및 이용기간
          참조) 일정 기간 저장된 후 파기 됩니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유 되는 이외의 다른 목적으로 이용되지 않습니다.
        </div>
        <div className="section">
          6) 파기 방법
        </div>
        <div className="section">
          전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다. 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
        </div>
        <h3 id="section-5">제5조 (개인정보 제3자 제공)</h3>
        <div className="section">
          <span>1) 회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다. </span>
        </div>
        <div className="section">
          <span>1. 이용자들이 사전에 동의한 경우 </span>
          <span>- 보유 기간 및 보유 정보 : 회원의 요청 또는 동의를 얻은 항목, 기간에 한하여 해당 기간 동안 보유 </span>
          <span>2. 기타 법률에 특별한 규정이 있는 경우</span>
        </div>
        <h3 id="section-6">제6조. (개인정보 취급 위탁)</h3>
        <div className="section line">
          1. 회사는 서비스 향상 및 원활한 계약사항의 이행을 위하여 개인정보 처리 업무를공 외부 업체에 위탁하고 있습니다. 회사는 고객님의 동의 없이 고객님의 정보를 외부 업체에 위탁하지
          않습니다. 향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁 업무 내용에 대해 고객님에게 통지하고 필요한 경우 사전 동의를 받거나 본 개인정보 처리방침을 통하여 공지하겠습니다.
        </div>
        <table border="0">
          <colgroup>
            <col style={{ width: '50%' }}/>
            <col style={{ width: '50%' }}/>
          </colgroup>
          <tbody>
          <tr>
            <th>수탁업체</th>
            <th>위탁 업무 내용</th>
          </tr>
          <tr>
            <td>한국코퍼레이션</td>
            <td>콜센터 업무의 일체, 고객 및 주문정보 이용관리</td>
          </tr>
          <tr>
            <td>CJ대한통운, 우체국, 로젠 택배</td>
            <td>상품 배송 업무</td>
          </tr>
          <tr>
            <td>KG이니시스, 카카오페이, NHN엔터테인먼트, 엔에이치엔페이코㈜, 삼성전자주식회사, ㈜비바리퍼블리카</td>
            <td>상품 구매에 필요한 신용카드, 현금결제를 포함한 전자지급수단, 그밖에 전자적 방법에 따른 지급수단 전자금융거래수단 등의 결제정보 전송, 휴대폰 소액결제</td>
          </tr>
          <tr>
            <td>(주)카카오</td>
            <td>알림톡, 비즈메시지 발송대행</td>
          </tr>
          <tr>
            <td>주식회사 에스엠티앤티</td>
            <td>SMS, MMS 등 문자메세지 발송 업무</td>
          </tr>
          <tr>
            <td>sendgrid</td>
            <td>e-mail, 뉴스레터 발송 업무</td>
          </tr>
          <tr>
            <td>아마존 웹서비시즈</td>
            <td>AWS 전산시설을 이용한 개인정보 보관 및 글로벌CS 업무 처리</td>
          </tr>
          </tbody>
        </table>

        <div className="section line">
          2. 회사는 맞춤형 서비스 및 광고의 제공을 위하여 다음과 같은 업체에 광고식별정보 및 쿠키 정보, IP주소(일부 마스킹 처리된 범위)의 처리를 위탁하고 있습니다. 회사는 본 위탁
          업무와 관련하여 위 정보 외에 개인을 식별할 수 있는 정보를 제공하지 않으며, 이러한 서비스 제공을 거부하는 경우 아래 제9조에 기재된 방법으로 설정을 변경하실 수 있습니다. 업무
          위탁을 위하여 위 광고식별정보 및 쿠키 정보가 국외로 이전될 수 있으며, 이전된 정보는 본 서비스 제공 기간 동안 보관됩니다.
        </div>
        <table border="0">
          <colgroup>
            <col style={{ width: '50%' }}/>
            <col style={{ width: '50%' }}/>
          </colgroup>
          <tbody>
          <tr>
            <th>수탁업체</th>
            <th>위탁 업무 내용</th>
          </tr>
          <tr>
            <td>구글 ( 미국 )</td>
            <td>
              Google analytics 서비스의 이용<br/>
              Google ads 마케팅 업무 (맞춤형 광고 제공)
            </td>
          </tr>
          <tr>
            <td>페이스북(미국), (주)카카오, (주)인라이플</td>
            <td>마케팅 업무 (맞춤형 광고 제공)</td>
          </tr>
          <tr>
            <td>플러스제로</td>
            <td>Google Marketing Platform 구축 및 유지보수 업무</td>
          </tr>
          </tbody>
        </table>


        <div className="section">
          회사는 고객님의 동의 없이 고객님의 정보를 외부 업체에 위탁하지 않습니다. 향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁 업무 내용에 대해 고객님에게 통지하고 필요한 경우 사전 동의를
          받도록 하겠습니다.
        </div>
        <h3 id="section-7">제7조 (이용자 및 법정대리인의 권리와 행사방법)</h3>
        <div className="section">
          <span>1) 이용자 및 법정대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.  </span>
          <span>2) 이용자 혹은 만 14세 미만 아동의 개인정보 조회수정을 위해서는 ‘회원정보수정’을 가입해지(동의철회)를 위해서는 “회원탈퇴”를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다. 혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.   </span>
          <span>3) 귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어 지도록 하겠습니다. </span>
          <span>4) 회사는 만14세 미만 아동의 개인정보를 수집하지 않습니다. 만일, 회사의 정책에도 불구하고 만14세 미만 아동의 개인정보가 처리되는 경우, 그 법정대리인은 언제든 제1항 내지 제2항의 권리를 행사할 수 있습니다.</span>
        </div>
        <h3 id="section-8">제8조 (개인정보 자동 수집 장치의 설치, 운영 및 그 거부에 관한 사항)</h3>
        <div className="section">
          <span>1) 쿠키의 사용목적</span>
          <span><i/>1. 회사는 개인 맞춤 서비스를 제공하기 위해서 이용자에 대한 정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다. 쿠키는 웹사이트 서버가 이용자의 브라우저에게 전송하는 소량의 정보로서 이용자 컴퓨터의 하드디스크에 저장됩니다.   </span>
          <span><i/>2. 회사는 쿠키의 사용을 통해서만 가능한 특정된 맞춤형 서비스를 제공할 수 있습니다.</span>
          <span><i/>3. 회사는 회원을 식별하고 회원의 로그인 상태를 유지하기 위해 쿠키를 사용할 수 있습니다.</span>
          <span>2) 쿠키의 설치/운용 및 거부</span>
          <span><i/>1. 이용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹브라우저에서 옵션을 조정함으로써 모든 쿠키를 허용/거부하거나, 쿠키가 저장될 때마다 확인을 거치도록 할 수 있습니다.</span>
          <span><i/><i/>① Internet Exploer에서 쿠키의 설치 허용여부를 지정하는 방법-쿠키 설치 허용 여부를 지정하는 방법(Internet Exploer의 경우)은 다음과 같습니다.  웹 브라우저 상단의 “도구” 메뉴{`>`}“인터넷 옵션” 메뉴{`>`}“개인정보” 탭{`>`}<i/><i/>직접 설정</span>
          <span><i/><i/>② Chrome에서 쿠키의 설치 허용여부를 지정하는 방법 웹 브라우저 우측 상단의 아이콘 선택{`>`}“설정”선택{`>`}화면 하단의 “고급 설정 표시”선택{`>`}개인정보 섹션의 “콘텐츠 설정”버튼{`>`}쿠키 섹션에서 직접 설정</span>
          <span><i/>2. 쿠키의 저장을 거부할 경우 개인 맞춤 서비스 등 회사가 제공하는 일부 서비스의 이용이 어려울 수 있습니다. </span>
          <span>3) Google Analytics 및 맞춤형 광고에 대한 안내</span>
          <span><i/>1.회사는 고객에게 더 나은 서비스를 제공하기 위한 목적으로 Google, Inc.(이하 ‘Google’)이 제공하는 웹 분석 서비스인 Google Analytics를 사용하여 고객들이 회사의 서비스를 어떻게 이용하는지 분석 및 평가하고 고객의 수요를 파악하며, 서비스와 제품을 개선하고 맞춤화하여 효율적인 서비스를 제공하고 있습니다.</span>
          <span><i/>2.Google Analytics는 컴퓨터에 저장된 텍스트파일인 ‘쿠키’를 사용하여 이용자의 웹사이트 이용방식을 분석합니다. Google의 외부 분석툴을 통한 분석 및 맞춤형 광고 제공 서비스를 거부하시는 경우 tools.google.com/dlpage/gaoptout에서 현재 고객의 웹 브라우저에 대한 부가 기능을 다운로드 및 설치하여 Google의 정보 처리를 거부할 수 있습니다. </span>
          <span><i/>3.Google은 쿠키 정보의 분석을 위하여 개인식별 가능성이 없는 ‘쿠키’ 정보를 미국 내 Google 서버로 전송합니다. Google의 정보 처리에 관한 보다 자세한 내용은 www.google.com/analytics/learn/privacy.html을 참고하시기 바랍니다.</span>
        </div>
        <h3 id="section-9">제9조 (개인정보 관리 책임자)</h3>
        <div className="section">
          회사는 이용자가 회사의 서비스를 안전하게 이용할 수 있도록 최선을 다하고 있습니다. 이용자는 회사의 서비스 이용과 관련한 모든 개인정보보호 민원을 전담 부서로 신고하실 수 있으며, 회사는
          이용자의 신고사항에 대해 신속하고 성실하게 답변해드리고 있습니다.
        </div>
        <table border="0" className="bg">
          <caption><span className="blind">회원정보수정</span></caption>
          <colgroup>
            <col style={{ width: '50%' }}/>
            <col style={{ width: '50%' }}/>
          </colgroup>
          <tbody>
          <tr>
            <td>
              <strong>개인정보 민원처리</strong><br/>
              담당부서 : CS센터<br/>
              전화번호 : 1577-4701<br/>
              문의처  : ohprintme@ohprintme.me
            </td>
            <td>
              <strong>개인정보관리 책임자</strong><br/>
              개인정보 보호책임자 : 조기연 (CTO / CIO)<br/>
              직책 : CTO / CIO, 직급 : 이사<br/>
              연락처 : 070-7420-0158, privacyinfo@snaps.com
            </td>
          </tr>
          </tbody>
        </table>
        <div className="section">
          <span>기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.</span>
          <span>1. 개인정보침해신고센터 (<a href="http://privacy.kisa.or.kr" target="_blank"
                                  style={{ textDecoration: 'underline' }}>privacy.kisa.or.kr</a> / 국번없이 118)</span>
          <span>2. 대검찰청 사이버수사과 (<a href="http://www.spo.go.kr" target="_blank"
                                   style={{ textDecoration: 'underline' }}>http://www.spo.go.kr</a> / 국번없이 1301) </span>
          <span>3. 경찰청 사이버안전국 (<a href="http://cyberbureau.police.go.kr" target="_blank"
                                  style={{ textDecoration: 'underline' }}>http://cyberbureau.police.go.kr </a>/ 국번없이 182)</span>
        </div>
        <h3 id="section-10">제10조 (개정 전 고지 의무)</h3>
        <div className="section">
          본 개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 경우 개정 최소 7일 전에 ‘공지사항’을 통해 사전 공지할 것입니다. 다만, 수집하는 개인정보의 항목, 이용목적의 변경 등과 같이 이용자
          권리의 중대한 변경이 발생할 때에는 최소 30일 전에 홈페이지 또는 이메일을 통해 사전 공지합니다, 필요 시 이용자 동의를 다시 받을 수 있습니다.
        </div>
        <div className="section">
          <strong>공고일자 | 2021년 6월 28일</strong><br/>
          <strong>시행일자 | 2021년 6월 30일</strong>
        </div>
      </div>
    )
  }
}
