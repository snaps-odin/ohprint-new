import React from "react";

import { jsx } from "@emotion/react";

import { brandInfo } from "./styles";

import { boxContainer } from "../styles/common";

import { openCenter } from "utils/window";

import { addDomain } from "utils/url";

export default class BrandInfo extends React.Component {
  render() {
    const cdn = this.props.cdn;

    return (
      <brandInfo.container>
        <brandInfo.contents1.container>
          <brandInfo.contents1.box css={boxContainer}>
            <img src={addDomain(cdn, "revinci-title@2x.png")} alt={""} />
            <img src={addDomain(cdn, "revinci-illust@2x.png")} alt={""} />
            <button
              type={"button"}
              onClick={() => {
                openCenter("https://www.instagram.com/revinci_drawing/");
              }}
            />
            <span>
              고풍스러운 고양이 컨셉의 그림을 그리고 있습니다.
              <br />
              모두가 풍요롭게 살아가는 세상을 꿈꾸며 작품활동을 하고 있습니다.
            </span>
          </brandInfo.contents1.box>
        </brandInfo.contents1.container>

        <brandInfo.contents2.container>
          <brandInfo.contents2.box css={boxContainer}>
            <span>비글구조네트워크</span>
            <img src={addDomain(cdn, "beagle-img@2x.png")} alt={""} />
            <a
              onClick={() => {
                openCenter("https://www.beaglerescuenetwork.org/");
              }}
            >
              비글구조네트워크 바로가기
            </a>
            <span>
              사단법인 비글구조네트워크는 2015년 설립된 비영리법인단체로
              <br />
              실험동물 및 유기동물의 구조 및 치료지원, 유기동물의 새 가족을 만날 수 있는 입양사업 등<br />
              실효성 있는 동물 보호 법안과 정책 개선을 위해 활동하고 있습니다.
            </span>
            <div>
              <span>
                국내 최초로 실험동물들을 위한 보호 시설을 운영하고 있는
                <br />
                비글구조네트워크!
              </span>

              <span>
                위기에 처한 동물들을 돕는 일에
                <br />
                누구보다 앞장서 활동하고 있답니다.
              </span>

              <span>
                상처 입은 동물들을 향한 당신의 착한 마음을
                <br />
                Hope Market과 함께 전해요.
              </span>
            </div>
          </brandInfo.contents2.box>
        </brandInfo.contents2.container>
      </brandInfo.container>
    );
  }
}
