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
            {/*<img src={addDomain(cdn, "w-bdbd-bg@2x.jpg")} alt={""}/>*/}
            <img src={addDomain(cdn, "w-bdbd-logo@2x.png")} alt={""} />
            <button
              type={"button"}
              onClick={() => {
                openCenter("https://www.instagram.com/bdatbdont/");
              }}
            />
            <span>
              bdatbdon’t (Be that, Be don’t)은
              <br />
              "이것이 돼라, 저것은 되지 마라" 라는 뜻의 메시지를 지긋지긋하게 듣고 사는 현대인들에게
              <br />
              “사회의 눈초리는 무시하고 네가 하고 싶은 걸 해” 라는 응원의 메시지를 전달하는 브랜드입니다.
              <br />
              하고 싶은 일을 향해 느리지만 묵묵히 나아가는 사람들에게
              <br />
              힘을 줄 수 있는 메시지를 담은 굿즈로 대중과 소통하려 합니다.
            </span>
          </brandInfo.contents1.box>
        </brandInfo.contents1.container>

        <brandInfo.contents2.container>
          <brandInfo.contents2.box css={boxContainer}>
            <span>서울문화재단</span>
            <img src={addDomain(cdn, "w-seoul-img@2x.png")} alt={""} />
            <a
              onClick={() => {
                openCenter("https://www.sfac.or.kr/index.do");
              }}
            >
              서울문화재단 바로가기
            </a>
            <span>
              서울문화재단은 2004년 출범한 이래로
              <br />
              ‘문화와 예술의 다양한 가치가 발현되고 공감되는 플랫폼’이라는 비전 아래
              <br />
              현장에서 활동하는 예술인이 성장할 수 있는 환경을 마련, 총 18개의 창작공간을 운영하는 등<br />
              일상과 예술의 경계가 허물어지는 다양한 문화시민도시를 만들어나가고 있습니다.
            </span>
            <div>
              <span>“보다 감각적이고 다양한 경험들을 할 수 있어야 한다 생각해요.”</span>

              <span>
                우수한 예술 프로젝트가 세상의 빛을 볼 수 있도록
                <br />
                예술가의 창작활동을 지원하는 서울문화재단!
              </span>

              <span>
                코로나19로 어려움을 겪는 예술가를 응원하고
                <br />
                예술을 통해 우리의 삶을 아름답게 만들어갈 수 있도록
                <br />
                Hope Market과 함께 마음을 모아주세요 :)
              </span>
            </div>
          </brandInfo.contents2.box>
        </brandInfo.contents2.container>
      </brandInfo.container>
    );
  }
}
