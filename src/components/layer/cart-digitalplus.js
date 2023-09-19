

import React from 'react';
import { connect } from 'react-redux';

import { getHeight } from 'utils/dom';

import Attention from 'components/common/attention';
import { addCdn } from 'utils/url';
import styled from "styled-components";

class CartDigitalplus extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickClose = this.onClickClose.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;
		handleCloseContentsLayer();
	}

	render() {
    const { states: { ui: { view: { height } }} } = this.props;

      return (
      <Container>
        <Top>안내</Top>
        <ContentContainer height={height}>
          <Title><span>New</span> 디지털 Plus 인쇄 방식 안내</Title>
          <Description>
            <p>국내 최초. 새롭게 선보이는 프리미엄 프린팅</p>
            <p>디지털 Plus를 만나보세요</p>
          </Description>
          <ImgWrap>
            <img src="https://front-cdn.ohprint.me/assets/ko_kr/pc/images/store/intro/apparel/service/apparel-digital-pro-img-02@2x.jpg" alt=""/>
          </ImgWrap>

          <Section>
            <SectionTitle>새롭게 선보이는 프리미엄 프린팅</SectionTitle>
            <SectionDescription>디지털 Plus 인쇄 방식이 새롭게 추가됩니다.</SectionDescription>
            <SectionDescription><p>2023년 05월 25일(목) 오후 3시 주문건부터</p> 새로운 인쇄 방식으로 변경되어 제작 및 출고 됩니다.</SectionDescription>
            <SectionDescription>변경되는 내용을 확인해주세요.</SectionDescription>
          </Section>

          <Section>
            <SectionTitle>인쇄 방식 변경</SectionTitle>
            <SectionDescription>디지털 프린팅, 열전사 → <p>디지털 Plus 변경</p></SectionDescription>
            <SectionDescription>홀로그램, 글리터, 네온 전사 → <p>판매 종료</p></SectionDescription>
            <SectionDescription>인쇄 방식 변경으로 인해 기존 상품의 가격이 변동될 수 있으니 주문 전 금액을 확인해주세요.</SectionDescription>
          </Section>

          <Section>
            <SectionTitle>인쇄 위치 변경</SectionTitle>
            <SectionDescription>앞면, 뒷면, 목뒤, 왼팔, 오른팔 → <p>앞면, 뒷면</p></SectionDescription>
          </Section>

          <Section>
            <SectionTitle>대상 상품 (22종)</SectionTitle>
            <SectionDescription>
              프린트스타 17수 라운드 반팔 / 프린트스타 32수 라운드 반팔 / 길단 20수 라운드 반팔 / 챔피온 릴렉스핏 라운드 반팔 / 길단 18수 릴렉스 라운드 반팔 / 트리플에이 18수 라운드 반팔 / 컴포즈컬러드 워싱 라운드 반팔 / 아메리칸어패럴 30수 프리미엄 반팔 / 오프린트미 프리미엄 크루넥 반팔 / 길단 24수 네온 라운드 반팔 / 오프린트미 모달 머슬핏 반팔 / 길단 래글런 반팔 / 길단 브이넥 반팔 / 아메리칸어패럴 30수 프리미엄 반팔 / 길단 24수 파스텔 라운드 반팔 / 길단 링어 반팔 / 엔빌 컬러믹스 라운드 반팔 / 길단 브이넥 반팔 / 프린트스타 17수 라운드 반팔 / 베이직 맨투맨 / 오프린트미 피그먼트 맨투맨 / 프린트스타 17수 라운드 긴팔
            </SectionDescription>
          </Section>

          <BtnWrap>
          <ConfirmBtn onClick={this.onClickClose}>확인</ConfirmBtn>
          </BtnWrap>

        </ContentContainer>

        <button className="icon icon-close-w-1414 close"
                type="button"
                onClick={this.onClickClose}/>

      </Container>
    )
  }
}

const mapStateToProps = (state, ownerProps) => {

	return {
		states: {
			...ownerProps.states
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions,

		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(CartDigitalplus);


const Container = styled.div`
  width : 718px;
`;

const Top = styled.div`
  padding: 15px 0;
  line-height: 21px;
  background-color: #2c313a;
  text-align: center;
  color: white;
  font-size: 16px;
`

const ContentContainer = styled.div`
  padding: 30px 30px 40px;
  width: 100%;
  box-sizing: border-box;
  max-height: ${({height}) => height-100}px;
  overflow-y: auto;
  color: #191919;
`;

const Title = styled.div`
  font-family: YoonGothicPro760;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;

  span{
    color: #2c83e9;
  }
`;

const Description = styled.div`
  margin: 10px 0 30px;
  white-space: pre-line;
  text-align: center;
  font-family: YoonGothicPro740;
  font-size: 14px;
  line-height: 1.71;
`;

const ImgWrap = styled.div`

  img{
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const Section = styled.div`
  margin-top: 30px;
`;

const SectionTitle = styled.div`
  margin-bottom: 10px;
  font-family: YoonGothicPro760;
  font-size: 14px;
  line-height: 1.71;
`;

const SectionDescription = styled.div`
  margin-bottom: 4px;
  position: relative;
  padding-left: 9px;
  font-family: YoonGothicPro740;
  font-size: 13px;
  line-height: 1.54;


  p {
    color: #2c83e9;
    display: inline;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 3px;
    background-color: #2c83e9;
  }

  &:last-child::before {
    top: 9px;
  }
`
const BtnWrap = styled.div`
  margin-top: 26px;
  text-align: center;
`;

const ConfirmBtn = styled.button`
  padding : 15px 29.5px;
  background-color: #2c83e9;
  font-family: YoonGothicPro740;
  font-size: 12px;
  color: #fff;
  display: inline-block;
`

