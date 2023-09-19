import React from "react";
import { addCdn } from 'utils/url';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default class CommonGuide extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
    };
  }
  render() {
    return (
      <section className="common">
        <div>
          <h3>PDF 디자인 작업 가이드 (공통 작업 가이드)</h3>
          <div className="sub-title">1. <em>CMYK 모드</em>로 작업해 주세요.</div>

          <div className="explanation">
            <ul>
              <li>인쇄용 디자인을 작업하기 위해서는 반드시 <em>CMYK 모드</em>로 진행해야 합니다.</li>
            </ul>
          </div>

          <ul className="images mode-image">
            <li>
              <img src={addCdn("/images/tutorial/rgb-560360@2x.png")}/>
              <span>CMYK 모드로 작업</span>
            </li>
            <li>
              <img src={addCdn("/images/tutorial/print-image-01-560360@2x.png")}/>
              <span>실제 인쇄 시 컬러</span>
            </li>
          </ul>

          <div className="explanation">
            <ul>
              <li>RGB 모드로 작업 시 인쇄 과정에서 색상이 달라질 수 있습니다.</li>
              <li>RGB 모드로 작업하여 발생하는 인쇄 오류에 대해서는 재 제작 진행이 어려우니 업로드 전 꼭 확인하시기 바랍니다.</li>
            </ul>
          </div>

          <ul className="images mode-image">
            <li>
              <img src={addCdn("/images/tutorial/rgb-560360@2x.png")}/>
              <span>RGB 모드로 작업</span>
            </li>
            <li>
              <img src={addCdn("/images/tutorial/print-image-02-560360@2x.png")}/>
              <span>실제 인쇄 시 컬러</span>
            </li>
          </ul>

          <div className="sub-title">2. <em>가이드라인</em>을 준수해 주세요.</div>

          <div className="explanation">
            <ul>
              <li>작업 영역까지 배경을 채워주세요.</li>
              <li>재단 시 오차범위가 발생할 수 있으니 잘려질 수 있는 중요한 이미지, 텍스트는 안전 영역 안쪽에 작업해 주세요.</li>
            </ul>
          </div>

          <ul className="images guide-line">
            <li>
              <img src={addCdn("/images/tutorial/guideline-01-560360@2x.png")}/>
              <span>
											<span className="icon icon-right-1818"/>모든 정보는 안전영역 안쪽에 있어야해요.
										</span>
            </li>
            <li>
              <img src={addCdn("/images/tutorial/guideline-02-560360@2x.png")}/>
              <span>
											<span className="icon icon-right-1818"/>테두리가 있는 디자인일 경우 여유있게 넣어주세요.
										</span>
            </li>
          </ul>

          <ul className="images guide-line">
            <li>
              <img src={addCdn("/images/tutorial/guideline-03-560360@2x.png")}/>
              <span>
											<span className="icon icon-wrong-1818"/>정보는 가장자리에 위치할 수 없어요.
										</span>
            </li>
            <li>
              <img src={addCdn("/images/tutorial/guideline-04-560360@2x.png")}/>
              <span>
											<span className="icon icon-wrong-1818"/>작업 영역을 흰 여백으로 남겨두지 마세요.
										</span>
            </li>
          </ul>

          <div className="sub-title">3. 일러스트레이터로 작업 시 반드시 <em>서체 아웃라인 처리</em>해 주세요.</div>

          <div className="explanation">
            <ul>
              <li>아웃라인되지 않은 서체는 인쇄되지 않거나, 다른 서체로 교체될 수 있습니다.</li>
            </ul>
          </div>

          <ul className="images font">
            <li>
              <img src={addCdn("/images/tutorial/textnormal-560360@2x.png")}/>
              <span>일반 서체 형태</span>
            </li>
            <li>
              <img src={addCdn("/images/tutorial/textimage-560360@2x.png")}/>
              <span>이미지화된 서체 형태</span>
            </li>
          </ul>

          <ul className="images full">
            <li>
              <img src={addCdn("/images/tutorial/guide-ai-01-outline@2x.png")}/>
              <span>서체 아웃라인 방법</span>
            </li>
          </ul>

          <div className="sub-title">4. 일러스트레이터로 작업 시 <em>이미지 임베딩을 확인</em>해 주세요.</div>

          <div className="explanation">
            <ul>
              <li>이미지 사용 시 해당하는 이미지를 파일 안에 포함해야 안전하게 인쇄됩니다.</li>
              <li>이미지를 포함하지 않을 경우 유실 될 수 있으니 꼭 주의해 주세요.</li>
            </ul>
          </div>

          <ul className="images full">
            <li>
              <img src={addCdn("/images/tutorial/guide-ai-02-embed@2x.png")}/>
              <span>이미지 임베딩 방법</span>
            </li>
          </ul>

          <div className="sub-title">5. 인쇄에 필요한 디자인 요소를 제외한 <em>빈 레이어, 선, 도형, 텍스트 등은 삭제</em>해 주세요.</div>

          <div className="sub-description">[일러스트레이터]</div>

          <ul className="images full">
            <li>
              <img src={addCdn("/images/tutorial/guide-ai-03-layer@2x.png")}/>
            </li>
          </ul>

          <div className="sub-description">[포토샵]</div>

          <ul className="images full">
            <li>
              <img src={addCdn("/images/tutorial/guide-ai-04-layer-ps@2x.png")}/>
            </li>
          </ul>

          <div className="sub-title">6. <em>오버프린트(Overprint)를 해제</em>해 주세요.</div>

          <div className="explanation">
            <ul>
              <li>오버프린트(Overprint)란 잉크를 중복으로 인쇄 하는 방식으로, 설정할 경우 겹쳐진 색상은 보여지는 디자인과 전혀 다르게 인쇄 되거나, 인쇄 과정에서 오류를 일으킬 수 있습니다.</li>
            </ul>
          </div>

          <ul className="images full">
            <li>
              <img src={addCdn("/images/tutorial/guide-overpint-01@2x.png")}/>
            </li>
          </ul>

          <ul className="images font">
            <li>
              <img src={addCdn("/images/tutorial/guide-overpint-02@2x.png")}/>
              <span>
											<span className="icon icon-wrong-1818"/>오버프린트 체크 : 색상이 다르게 인쇄되거나 오류가 생길 수 있음
										</span>
            </li>
            <li>
              <img src={addCdn("/images/tutorial/guide-overpint-03@2x.png")}/>
              <span>
											<span className="icon icon-right-1818"/>오버프린트 체크 해제 : 오류 없이 보이는 색상으로 인쇄됨
										</span>
            </li>
          </ul>

          <div className="sub-title">7. 클리핑 마스크(Clipping Mask) / 특수효과(Effect)는 <em>래스터화(Rasterize)</em> 해 주세요.</div>

          <div className="explanation">
            <ul>
              <li>
                <em>클리핑마스크(Clipping Mask)와 투명도, 그라데이션, 그림자 등 효과(Effect)를 사용한 작업물</em>은 출력이나 후가공 작업 시 오류가 발생할 수 있습니다.</li>
              <li>
                Object(개체){`>`}Resterize(래스터화){`>`}<em>CMYK 색상 모드, 300ppi이상의 해상도, Transparent</em>로 래스터화 해 주세요.
              </li>
            </ul>
          </div>

          <ul className="images full">
            <li>
              <img src={addCdn("/images/tutorial/guide-rasterize-01@2x.png")}/>
            </li>
          </ul>

        </div>
      </section>
    );
  }
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    }
  }
}