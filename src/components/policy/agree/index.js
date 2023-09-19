

import React from 'react';

import { getDatasetByName } from 'utils/dom';

export default class AgreeCurrent extends React.Component {
  render() {
    return (
      <div className="policy-contents-wrap">
        <h3 className="pt-0">수집목적</h3>
        <div className="section">
          <span>① 회원제 서비스 운영 및 관리 (가입 및 탈퇴 처리등)</span>
          <span>② 이용약관,서비스 상품 약관,개인정보처리방침의 변경, 서비스 변경,중단,장애,침해 사고 등 중요 사항 고지 등</span>
          <span>③ 서비스 민원 사항,고충 처리 결과 안내</span>
          <span>④ 개인 정보 보호 관련 법령에 따른 회원 정보 열람,정정권 이행</span>
          <span>⑤ 정보통신망법 등 관련 법령에 따른 보유 및 보존 의무 이행</span>
        </div>

        <h3>수집 항목</h3>
        <div className="section">
          <span>이름,아이디,비밀번호,이메일</span>
        </div>

        <h3>보유 기간</h3>
        <div className="section">
          <span className="bold">
            회원 탈퇴,계약 이행 등 개인 정보의 수집 및 이용 목적이 달성된 경우
            단, 관계 법령에 따라 일정기간 보관해야 하는 항목은 해당 기간 보관 후 파기합니다.
          </span>
        </div>

        <div className="section">
          <span>
            서비스 제공을 위해서 필요한 최소한의 개인정보입니다.
            동의를 해주셔야 서비스를 이용하실 수 있으며, 동의하지 않으실 경우 서비스 이용이 제한됩니다.
          </span>
        </div>
      </div>
    )
  }
}
