import React from "react";
import update from "react-addons-update";

import { PRODUCT_GUIDE } from "configs/index";
import { getDatasetByName } from "utils/dom";
import { getDeepValue } from "utils/json";
import { breaklines } from "utils/string";

import ImageLoader from "components/common/image-loader";
import Attention from "components/common/attention";
import { change, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { ActionLayer } from "actions/index";
import { LayerTypes } from "constants/index";
import { addDomain, addCdn } from "utils/url";
import { CDN_URL } from "configs/aws";

class GuideDefault extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      activeIndex: 0,
      rectangle: null,
      guides: null,
      guidePath: null,
    };

    this.onClickMenu = this.onClickMenu.bind(this);
    this.onUpdateImageValid = this.onUpdateImageValid.bind(this);
    this.getGuideList = this.getGuideList.bind(this);
    this.onClickOpenCommonGuide = this.onClickOpenCommonGuide.bind(this);
  }

  onClickOpenCommonGuide() {
    const {
      actions: { handleOpenContentsLayer },
    } = this.props;
    handleOpenContentsLayer(LayerTypes.COMMON_GUIDE_LAYER, {});
  }

  onClickMenu(event) {
    let { activeIndex: currentActiveIndex } = this.state;

    let index = Number(getDatasetByName(event.currentTarget, "index"));

    index !== currentActiveIndex &&
      this.setState(
        update(this.state, {
          activeIndex: { $set: index },
        }),
      );
  }

  onUpdateImageValid(isValid, rectangle) {
    this.setState(
      update(this.state, {
        rectangle: { $set: rectangle },
      }),
    );
  }

  initialize() {
    let {
      params: { category, subCategory },
    } = this.props;
    /*let { url } = (getDeepValue(states, 'config') || '');*/

    let { activeIndex: currentActiveIndex } = this.state;
    let guides = PRODUCT_GUIDE[(category || "").toUpperCase().replace(/-/g, "_")];
    let guidePath = addDomain(CDN_URL, PRODUCT_GUIDE["PRODUCT_GUIDE_CDN"]);

    // 명함 임시 경로
    if (category === "business-card") guidePath += "/business-card";

    guides &&
      (guides = guides.reduce((target, item) => {
        item["allows"] && item["allows"].some((item) => item === subCategory) && target.push(item);

        return target;
      }, []));

    guides
      ? Promise.all([guides.map((guide, index) => (guide["index"] = index)), this.setState(update(this.state, { guides: { $set: guides } }))]).then(() => {
          let activeIndex = guides.findIndex((guide) => guide["defaults"].some((item) => item === subCategory));

          activeIndex = activeIndex < 0 ? 0 : activeIndex;
          activeIndex !== currentActiveIndex &&
            this.setState(
              update(this.state, {
                activeIndex: { $set: activeIndex },
              }),
            );

          guidePath && this.setState(update(this.state, { guidePath: { $set: guidePath } }));
        })
      : this.setState(update(this.state, { guides: { $set: null } }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    let { params: currentParams, width: currentWidth } = this.props;
    let { params: nextParams, width: nextWidth } = nextProps;

    return !(Object.is(JSON.stringify(currentParams), JSON.stringify(nextParams)) && Object.is(nextWidth, currentWidth) && Object.is(JSON.stringify(this.state), JSON.stringify(nextState)));
  }

  componentDidMount() {
    this.initialize();
  }

  componentDidUpdate(prevProps, prevState) {
    let { params: currentParams } = this.props;
    let { params: prevParams } = prevProps;

    !Object.is(JSON.stringify(currentParams), JSON.stringify(prevParams)) && this.initialize();
  }

  getGuideText(index) {
    let {
      params: { category, subCategory },
    } = this.props;

    let cProductName = "normal";

    switch (category) {
      case "calendar-desk":
        cProductName = "calendar";
        break;

      case "envelope":
        cProductName = "envelope";
        break;

      case "reusable-cup":
      case "eco-tumbler":
      case "translucent-reusable-cup":
      case "straight-glass":
      case "new-stack-glass":
        cProductName = "cup";
        break;

      case "color-decal":
      case "graphic-decal":
        cProductName = "decal-sticker";
        break;

      default:
        cProductName = "normal";
        break;
    }

    let guideText = {
      DEFAULT: {
        normal: [{ text: `재단 시 발생할 수 있는 오차를 감안하여 작업 영역까지 디자인을 채워주세요.` }, { text: `실제 상품 사이즈 입니다.` }, { text: `주요 정보는 반드시 안전 영역 안쪽에 작업해 주세요.` }],
        calendar: [{ text: `스프링 작업을 위한 타공 영역이니 주요 정보는 타공 영역에 걸리지 않게 작업해 주세요.` }, { text: `재단 시 발생할 수 있는 오차를 감안하여 작업 영역까지 디자인을 채워주세요.` }, { text: `실제 상품 사이즈 입니다.` }, { text: `주요 정보는 반드시 안전 영역 안쪽에 작업해 주세요.` }, { text: `작업 영역 안쪽에 작업해주세요. (재단영역 및 안전 영역은 없습니다.)` }],
        envelope: [{ text: `재단 시 발생할 수 있는 오차를 감안하여 작업 영역까지 디자인을 채워주세요.` }, { text: `펼침면 재단 사이즈 입니다.` }, { text: `주요 정보는 반드시 안전 영역 안쪽에 작업해 주세요.` }, { text: `실제 봉투 사이즈 입니다.` }],
        shoppingbag: [{ text: `재단 시 발생할 수 있는 오차를 감안하여 작업 영역까지 디자인을 채워주세요.` }, { text: `실제 상품 사이즈 입니다.` }, { text: `주요 정보는 반드시 안전 영역 안쪽에 작업해 주세요.` }],
        cup: [{ text: `실제 인쇄되는 영역입니다. 영역에 맞게 디자인 작업해주세요.<br/>영역을 벗어나면 인쇄되지 않아요.` }],
        "decal-sticker": [{ text: `실제 인쇄되는 영역입니다. 영역에 맞게 디자인 작업해주세요.<br/>영역을 벗어나면 인쇄되지 않아요.` }],
      },
    };

    return { __html: guideText["DEFAULT"][cProductName][index]["text"] };
  }

  getGuideList(category) {
    let defaultList = [
      { styleName: "blue", fieldName: "workSpace", title: "작업 영역" },
      { styleName: "dot", fieldName: "cuttingLine", title: "재단 영역" },
      { styleName: "red", fieldName: "safeSpace", title: "안전 영역" },
    ];

    switch (category) {
      case "calendar-desk":
        defaultList = [
          { styleName: "green", fieldName: "springSpace", title: "내지 : 스프링 영역" },
          { styleName: "blue", fieldName: "workSpace", title: "내지 : 작업 영역" },
          { styleName: "dot", fieldName: "cuttingLine", title: "내지 : 재단 영역" },
          { styleName: "red", fieldName: "safeSpace", title: "내지 : 안전 영역" },
          { styleName: "blue", fieldName: "tripodSpace", title: "삼각대 : 작업 영역" },
        ];
        break;

      case "envelope":
        defaultList = [
          { styleName: "blue", fieldName: "workSpace", title: "작업 영역" },
          { styleName: "dot", fieldName: "cuttingLine", title: "재단 영역" },
          { styleName: "red", fieldName: "safeSpace", title: "안전 영역" },
          { styleName: "envelopeYellow", fieldName: "tripodSpace", title: "접는선" },
        ];
        break;

      case "shoppingbag":
        defaultList = [
          { styleName: "blue", fieldName: "workSpace", title: "작업 영역" },
          { styleName: "dot-solid", fieldName: "cuttingLine", title: "재단 영역" },
          { styleName: "red", fieldName: "safeSpace", title: "안전 영역" },
        ];
        break;

      case "reusable-cup":
      case "eco-tumbler":
      case "translucent-reusable-cup":
      case "straight-glass":
      case "new-stack-glass":
      case "color-decal":
      case "graphic-decal":
        defaultList = [{ styleName: "blue", fieldName: "workSpace", title: "작업 영역" }];
        break;
    }

    return defaultList;
  }

  render() {
    console.log("guideDefault => ", this.props);
    let {
      params: { category, subCategory },
      width,
    } = this.props;
    let { activeIndex, rectangle, guides, guidePath } = this.state;

    let guide = getDeepValue(guides, `${activeIndex}.guide`) || null;
    let files = getDeepValue(guides, `${activeIndex}.files`) || null;
    let footer = getDeepValue(guides, `${activeIndex}.footer`) || null;
    let isIndd = (files || {}).hasOwnProperty("indd");

    let sizeClassName = width <= 1140 ? "small" : "";
    let categoryClassName = category === "business-card" ? category : `${category}-${subCategory}`;
    let isCalendar = !!category.match(/calendar/i);

    if (!guide) return null;

    return (
      <div
        className="guide-default-wrap"
        ref={(c) => {
          this.el = c;
        }}
      >
        {(guides || []).length > 0 && (
          <div className={`top ${sizeClassName}`}>
            {guides.reduce((target, guide, index) => {
              index !== 0 && target.push(<span>|</span>);

              target.push(
                <button type="button" className={activeIndex === index ? "active" : null} data-index={index} onClick={this.onClickMenu}>
                  {guide["title"]}
                </button>,
              );

              return target;
            }, [])}
          </div>
        )}

        <div className={`middle ${sizeClassName} ${category}`}>
          <div className="left">
            <div className={`${categoryClassName}${sizeClassName !== "small" ? `-${activeIndex}` : ""}`} style={rectangle ? { width: `${Math.floor(rectangle["width"] / 2)}px` } : null}>
              {React.cloneElement(<ImageLoader />, {
                key: addCdn(`/images/common/guide/default/${guide["image"]}`),
                imageUrl: addCdn(`/images/common/guide/default/${guide["image"]}@2x.png`),
                isSizeFixed: false,
                handleUpdateValid: this.onUpdateImageValid,
              })}
            </div>
          </div>

          <div className="right">
            <ul>
              {this.getGuideList(category).reduce((target, item, index) => {
                let { styleName, fieldName, title } = item;
                let { area } = guide;
                let size = (area[fieldName] || {})["size"];

                size &&
                  target.push(
                    <li className={styleName}>
                      <span className="box">
                        <span />
                      </span>
                      <span className="desc">
                        <span>
                          {category === "apparel" ? "인쇄 영역" : title} ({size})
                        </span>
                        {category === "apparel" ? (
                          <span>
                            실제 인쇄되는 영역입니다. 영역에 맞게 디자인 작업해주세요.
                            <br />
                            영역을 벗어나면 인쇄되지 않아요
                          </span>
                        ) : (
                          <span dangerouslySetInnerHTML={this.getGuideText(index)} />
                        )}
                      </span>
                    </li>,
                  );

                return target;
              }, [])}

              {guide["description"] && (
                <li className="warning">
                  <span className="icon icon-noti-1515" />
                  <span className="desc" dangerouslySetInnerHTML={{ __html: breaklines(guide["description"]) }} />
                </li>
              )}
            </ul>
          </div>
        </div>

        {files && (
          <div className={`bottom ${sizeClassName}`}>
            {guide["caption"] && <span className="caption" dangerouslySetInnerHTML={{ __html: guide["caption"] }} />}

            {guide["caption"] && <span className="line" />}

            {files && !footer && <span className="desc">디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.</span>}

            {footer && <span className="footerDesc" dangerouslySetInnerHTML={{ __html: footer.text }} />}

            <ul>
              {!!files["ai"] && (
                <li className="orange">
                  <a href={`${guidePath}/ai/${files["ai"]}`} download={`[OHPRINTME]${files["ai"]}`}>
                    <span>AI</span>
                    <span className="icon icon-down-il-714" />
                  </a>
                </li>
              )}
              {isIndd && (
                <li className="purple">
                  <a href={`${guidePath}/indd/${files["indd"]}`} download={`[OHPRINTME]${files["indd"]}`}>
                    <span>INDD</span>
                    <span className="icon icon-down-indd-714" />
                  </a>
                </li>
              )}
              {!!files["pdf"] && (
                <li className="pink">
                  <a href={`${guidePath}/pdf/${files["pdf"]}`} download={`[OHPRINTME]${files["pdf"]}`}>
                    <span>PDF</span>
                    <span className="icon icon-down-in-714" />
                  </a>
                </li>
              )}
              {/*<li>
									<a href={`/download/jpg/${files[ 'jpg' ]}`}
									   download={`[OHPRINTME] ${files[ 'jpg' ]}`}>
										<span>JPG</span>
										<span className="icon icon-down-jpg-714"/>
									</a>11
								</li>*/}
            </ul>

            <div className="commonGuideLayer" onClick={this.onClickOpenCommonGuide}>
              공통 작업가이드 보기&nbsp;
              <span className="icon icon-arrow-guide" />
            </div>
          </div>
        )}

        {React.cloneElement(<Attention />, {
          value: {
            title: "저작권 유의사항",
            children: [
              { value: "이미지 사용의 경우, 공공으로 사용 가능한 이미지라고 명시되어 있거나, 저작권이 만료된 이미지에 한해 사용 가능합니다." },
              { value: "저작권 또는 초상권이 있는 이미지를 무단으로 사용하는 경우, 저작권법 관련 조항에 의거하여 처벌받을 수 있습니다." },
              { value: "상품 제작 시 특정 상표나 로고, 브랜드명의 사용, 혹은 특정 브랜드나 디자인의 복제, 타인의 저작권을 침해하거나 이 외에도 저작권법에 위배가 될 수 있는 내용의 제작물은 제작이 불가할 수 있습니다. " },
              { value: "개인용도로 사용하는 상품일지라도 유명연예인, 작품, 디자인 등 허가없이 무단으로 제작되는 경우 초상권, 저작권으로 인한 문제가 발생할 수 있습니다.<br/>이러한 경우의 모든 책임은 이용자 및 주문자에게 있습니다. 문제 발생 시 오프린트미는 당사자들간의 분쟁에 개입하지 않습니다. 타인의 권리를 침해하지 않도록 특별히 주의바랍니다." },
            ],
          },
        })}
      </div>
    );
  }
}
const mapStateToProps = (state, ownerProps) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GuideDefault);
