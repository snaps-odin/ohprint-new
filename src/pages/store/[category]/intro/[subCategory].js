import React from "react";
import update from "react-addons-update";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { reduxForm } from "redux-form";
import styled from "styled-components";

import {
  ActionCommon,
  ActionCS,
  ActionEditor,
  ActionLayer,
  ActionProduct,
  ActionReview,
  ActionStore,
  ActionUI
} from "actions/index";
import { getHeight, getPosition } from "utils/dom";
import { getScrollTop } from "utils/scroll";
import { getDeepValue } from "utils/json";
import {matchCategoryWithSubCategory} from "utils/routeForSSG/matchCategoryWithSubCategory";
import {category} from "utils/routeForSSG/category";

import Tab from "components/common/tab-blue";
import DIY from "src/components/store/intro/diy/index";
import Service from "src/components/store/intro/service";
import Guide from "src/components/store/intro/guide";
import Price from "src/components/store/intro/price";
import Review from "src/components/store/intro/review";
import Recommend from "src/components/store/intro/recommend";
import ApparelContents from "src/components/store/intro/apparelContents";
import GuideMaker from "components/common/guides/guideMaker";

import { getEnv } from "utils/url";
import { DIGITAL_PLUS_1ST } from "configs/products/apparel/constant";


const BtnWrap = styled.div`
  width: 1140px;
  height: 50px;
  margin: 0 auto;
  padding-top: 8px;
  text-align: right;
  box-sizing: border-box;
`;
class StoreIntro extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      product: null,
      activeIndex: null,
      activeSubIndex: null,
      fixed: false,
      productApparelCode: null,
      productCode: null,
      brandName: null,
      productApparelName: null,
      ready: false,
      optionList: [],
      productType: [],
    };

    this.sections = [];

    this.onFocusScroll = this.onFocusScroll.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.updateSections = this.updateSections.bind(this);
    this.optionVariations = this.optionVariations.bind(this);
  }

  onFocusScroll(index, type, easingType) {
    let {
      actions: { handleUpdateUIScroll },
    } = this.props;

    handleUpdateUIScroll(this.getTargetY(index, type), easingType || null);
  }

  onScroll(event) {
    let { activeIndex: currentActiveIndex, activeSubIndex: currentActiveSubIndex, fixed: currentFixed } = this.state;

    let fixed = this.navigation ? (!currentFixed ? getPosition(this.navigation["el"]).top <= 0 : getPosition(this.sections[0]["el"]).top <= getHeight(this.navigation["el"])) : false;
    let activeIndex = this.getActiveIndex();
    let activeSubIndex = this.getActiveSubIndex(activeIndex);

    (fixed !== currentFixed || activeIndex !== currentActiveIndex || activeSubIndex !== currentActiveSubIndex) &&
      this.setState(
        update(this.state, {
          activeIndex: { $set: activeIndex },
          activeSubIndex: { $set: activeSubIndex },
          fixed: { $set: fixed },
        }),
      );
  }

  setProduct() {
    let { product, fixed, activeIndex, activeSubIndex, ready } = this.state;
    let {
      actions: { handleGetStoreProduct },
      router: { query : { category, subCategory } },
    } = this.props;
    // console.log(!product, !fixed, !activeIndex, !activeSubIndex, !ready);

    this.setState(
      update(this.state, {
        product: { $set: handleGetStoreProduct(category, subCategory) },
        ready: { $set: true },
      }),
    );
  }

  updateSections(index, scope) {
    let instance = scope && scope.getWrappedInstance ? (scope.getWrappedInstance() || {})["wrappedInstance"] : scope;

    this.sections[index] = instance;
  }

  getActiveIndex() {
    return this.sections.reduce((target, section, index) => {
      section && getPosition(getDeepValue(section, "el")).top <= getHeight(getDeepValue(this.navigation, "el")) + 100 && (target = index);

      return target;
    }, -1);
  }

  getActiveSubIndex(activeIndex) {
    return activeIndex > -1 && this.sections[activeIndex]
      ? (this.sections[activeIndex]["children"] || []).reduce((target, section, index) => {
          getPosition(getDeepValue(section, "el")).top <= getHeight(getDeepValue(this.navigation, "el")) + 50 && (target = index);

          return target;
        }, -1)
      : null;
  }

  getTargetY(index, type) {
    let { activeIndex } = this.state;

    let el = getDeepValue(this.sections, !(type || "").match(/sub/i) ? `${index}.el` : `${activeIndex}.children.${index}.el`);

    return el ? getPosition(el).top + getScrollTop() - getHeight(this.navigation["el"]) : null;
  }

  componentDidUpdate(prevProps, prevState) {
    let { params: prevParams } = prevProps;
    let { params: currentParams } = this.props;

    !Object.is(JSON.stringify(prevParams), JSON.stringify(currentParams)) && this.setProduct();
  }

  componentDidMount() {
    let {
      router: { query },
      actions: { handleRequestStoreApparelProductByOptionType, handleRequestStoreOptions, handleRequestStoreDefault },
    } = this.props;
    let { category, subCategory } = query;

    const mode = getEnv() !== "prd";

    Promise.all([window.addEventListener("scroll", this.onScroll), category === "apparel" && handleRequestStoreApparelProductByOptionType(category, subCategory), mode ? handleRequestStoreOptions(category, subCategory, "") : [], mode ? handleRequestStoreDefault(category, subCategory) : []])
      .then((result) => {
        this.setProduct();
        category === "apparel" &&
          this.setState(
            update(this.state, {
              productApparelCode: { $set: result[1].productCode.substr(0, 3) },
              productCode: { $set: result[1].productCode },
              brandName: { $set: result[1].brandName },
              productApparelName: { $set: result[1].productName },
              optionList: { $set: result[2] },
              productType: { $set: result[3] },
            }),
          );
      })
      .then(() => {
        query &&
          query["option"] &&
          window.setTimeout(() => {
            let scrollIndex = -1;

            switch (String(query["option"])) {
              case "review":
                scrollIndex = 3;
                break;
            }

            scrollIndex > -1 && this.onFocusScroll(scrollIndex, null, "easeInExpo");
          }, 1000);
      });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }
  /*	componentWillMount() {
      let {  params, actions: { handleRequestStoreApparelProductByOptionType } } = this.props;
      let { category, subCategory } = params;
      this.setProduct();

      console.log(handleRequestStoreApparelProductByOptionType(category,subCategory));
    }*/

  optionVariations() {
    const { optionList, productType } = this.state;

    if (optionList.length === 0 || productType.length === 0) return null;

    const arrays = optionList.filter((item) => item.keyName !== "sizeCode").map((item) => item.child.map((child) => child.attribute));

    const combinations = this.generateCombinations(arrays);

    const res = [];

    //디지털플러스만

    /*for (let i = 0; i < combinations.length; i++) {
      const combination = combinations[i];
      const attributes = combination.map((attribute, index) => optionList[index].child.find(child => child.attribute === attribute).attribute);
      const image = `apparel-product-${attributes.join("-").toLowerCase()}-gold`;
      const templateCode = "045021046708";

      attributes.unshift(productType[0].attribute);

      // 인쇄방식의 attribute가 "DIGITAL_PLUS"인 경우에 대해서만 결과를 출력합니다.
      if (attributes.includes("DIGITAL_PLUS")) {
        const image = `apparel-product-${attributes.join("-").toLowerCase()}-gold`;
        const templateCode = "045021046708";

        res.push(
          {
            attributes: attributes.length > 0 ? attributes : [],
            image,
            templateCode
          }
        )
      }


    }*/

    for (let i = 0; i < combinations.length; i++) {
      const combination = combinations[i];
      const attributes = combination.map((attribute, index) => optionList[index].child.find((child) => child.attribute === attribute).attribute);
      const image = `apparel-product-${attributes.join("-").toLowerCase()}-gold`;
      const templateCode = "045021046708";

      res.push({
        attributes: attributes.length > 0 ? attributes : [],
        image,
        templateCode,
      });
    }

    console.log(res);
  }

  generateCombinations = (arrays, currentCombination = [], index = 0, results = []) => {
    if (index === arrays.length) {
      results.push(currentCombination);
    } else {
      for (let i = 0; i < arrays[index].length; i++) {
        this.generateCombinations(arrays, [...currentCombination, arrays[index][i]], index + 1, results);
      }
    }
    return results;
  };

  render() {
    let {
      states,
      actions,
      router: { query },
    } = this.props;

    let { handleGetProductByCategory } = actions;
    let { category, subCategory } = query;

    const checkIsDigitalPlusItem = DIGITAL_PLUS_1ST.some((item) => item === subCategory);

    let { product, fixed, activeIndex, activeSubIndex, ready, productApparelCode, productCode, brandName, productApparelName } = this.state;

    let productName = ready ? (handleGetProductByCategory(category) || {})["label"] : "";

    let isAccessory = (category || "").match(/accessory/i);
    let isApparel = (category || "").match(/apparel/i);
    let isAcrylicKeyring = (category || "").match(/acrylic-keyring/i);
    let isPlainKraftShoppingBag = (subCategory || "").match(/plain-kraft-shopping-bag/i);
    const {
      user: { userId },
    } = states;
    const isDev = (userId || "").indexOf("@snaps.com") !== -1 && (getEnv() || "").toUpperCase() !== "PRD";

    let names = [
      {
        label: "상품 소개",
        children: isApparel ? [{ label: "커스텀하기" }, { label: "인쇄 방식" }, { label: "브랜드 소개" }, { label: "착용 컷" }, { label: "색상" }, { label: "사이즈" }, { label: "세탁/관리" }, { label: "기본 정보" }] : null,
      },
      !isAccessory ? { label: "작업 가이드" } : null,
      !isAccessory ? { label: "가격" } : null,
      { label: "고객 리뷰" },
    ];

    product && (names = product.fixed_nav);

    let children = getDeepValue(names || [], `${activeIndex}.children`);

    return (
      ready && (
        <div className={`store-intro-wrap ${checkIsDigitalPlusItem && "digital-plus-wrap"}`}>
          {isDev && isApparel && (
            <BtnWrap>
              <button className={"btn btn-white"} onClick={this.optionVariations}>
                variations 보기
              </button>
            </BtnWrap>
          )}
          <div className="container">
            {React.cloneElement(<DIY />, {
              states,
              actions,
              router: this.props.router,
              productApparelCode,
              productCode,
              brandName,
              productApparelName,
            })}

            {React.cloneElement(<Tab />, {
              actions: {
                handleSelect: this.onFocusScroll,
              },
              className: fixed ? "fixed" : null,
              names,
              focused: activeIndex,
              focusedSub: activeSubIndex,
              ref: (c) => {
                this.navigation = c;
              },
            })}

            {React.cloneElement(<Service />, {
              cdn: states.config.url.cdn,
              actions,
              params: this.props.router.query,
              product,
              className: fixed ? (children ? "fixed has-child" : "fixed") : "",
              ref: (c) => {
                this.updateSections(0, c);
              },
            })}

            {!isAccessory &&
              !isAcrylicKeyring &&
              React.cloneElement(<Guide />, {
                params: this.props.router.query,
                states,
                product,
                cdn: states.config.url.cdn,
                ref: (c) => {
                  this.updateSections(1, c);
                },
              })}

            {isApparel && !checkIsDigitalPlusItem && React.cloneElement(<ApparelContents />)}

            {isAcrylicKeyring &&
              React.cloneElement(<GuideMaker />, {
                cdn: states.config.url.cdn,
                params: this.props.router.query,
                product,
                ref: (c) => {
                  this.updateSections(1, c);
                },
              })}

            {!isAccessory &&
              React.cloneElement(<Price />, {
                params: this.props.router.query,
                productName,
                actions,
                ref: (c) => {
                  this.updateSections(2, c);
                },
              })}

            {React.cloneElement(<Review />, {
              states,
              actions: {
                ...actions,
                handleFocusScroll: this.onFocusScroll,
              },
              params: this.props.router.query,
              productApparelCode,
              ref: (c) => {
                this.updateSections(3, c);
              },
            })}

            {(!isAccessory || isPlainKraftShoppingBag) &&
              React.cloneElement(<Recommend />, {
                params: this.props.router.query,
              })}
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    states: {
      config: state.config,
      store: state.store,
      product: state.product,
      user: state.user,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleGetTemplateOptions: (data) => dispatch(ActionCommon.getTemplateOptions(data)),

      handleUpdateUIScroll: (targetY, easingType) => dispatch(ActionUI.updateUIScroll(targetY, easingType)),

      handleGetProductByCategory: (category) => dispatch(ActionProduct.getProductByCategory(category)),

      handleGetStoreProduct: (category, subCategory) => dispatch(ActionStore.getStoreProduct(category, subCategory)),
      handleRequestStoreDefault: (category, subCategory) => dispatch(ActionStore.requestStoreDefault(category, subCategory)),
      handleRequestStoreOptions: (category, subCategory, projectCode) => dispatch(ActionStore.requestStoreOptions(category, subCategory, projectCode)),
      handleRequestStoreOptionSize: (category, subCategory, params) => dispatch(ActionStore.requestStoreOptionSize(category, subCategory, params)),
      handleRequestStoreOptionEnable: (category, subCategory, params) => dispatch(ActionStore.requestStoreOptionEnable(category, subCategory, params)),
      handleRequestStoreEssential: (category, subCategory, params) => dispatch(ActionStore.requestStoreEssential(category, subCategory, params)),
      handleRequestStorePrice: (params) => dispatch(ActionStore.requestStorePrice(params)),
      handleRequestStoreAccessory: (params) => dispatch(ActionStore.requestStoreAccessory(params)),
      handleRequestStorePriceOption: (category, subCategory) => dispatch(ActionStore.requestStorePriceOption(category, subCategory)),
      handleRequestStorePriceByCategory: (category, subCategory, params) => dispatch(ActionStore.requestStorePriceByCategory(category, subCategory, params)),
      handleRequestStoreProductGallery: (category, subCategory) => dispatch(ActionStore.requestStoreProductGallery(category, subCategory)),
      handleRequestStoreApparelProductByOptionType: (category, subCategory) => dispatch(ActionStore.requestStoreApparelProductByOptionType(category, subCategory)),
      handleRequestStoreProductGalleryByProductCode: (category, subCategory, productCode) => dispatch(ActionStore.requestStoreProductGalleryByProductCode(category, subCategory, productCode)),

      handleRequestReviews: (params, productApparelCode) => dispatch(ActionReview.requestReviews(params, productApparelCode)),

      handleUpdateCSPopItem: (item, mode) => dispatch(ActionCS.updateCSPopItem(item, mode)),

      handleUpdateGAData: (data) => dispatch(ActionEditor.updateGAData(data)),
    },
  };
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};

export function getStaticPaths() {
  const paths = []

  category.forEach(categoryItem => {
    const subCategoryList = matchCategoryWithSubCategory(categoryItem)

    const result = subCategoryList.map(subCategoryItem => {
      return {
        params: {
          category: categoryItem,
          subCategory: subCategoryItem
        }
      }
    })

    paths.push(...result)
  })

  return {
    paths: paths,
    fallback: false,
  };
}

const formName = 'store-intro-price';

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: formName
  })(withRouter(StoreIntro))
);