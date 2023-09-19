import React from "react";
import update from "react-addons-update";
import { connect } from "react-redux";

import { PRODUCT_OVERVIEW } from "configs/index";
import { ActionCommon, ActionProduct, ActionReview, ActionUI } from "actions/index";
import { getHeight, getPosition } from "utils/dom";
import { getScrollTop } from "utils/scroll";
import { getDeepValue } from "utils/json";

import KeyVisual from "src/components/store/overview/key-visual";
import Tab from "components/common/tab-blue";
import Product from "src/components/store/overview/product";
import ProductApparel from "src/components/store/overview/product-apparel";
import Review from "src/components/store/overview/review";
import { withRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

class StoreOverview extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      activeIndex: null,
      fixed: false,
      ready: false,
    };

    this.sections = [];

    this.onFocusScroll = this.onFocusScroll.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.getTargetY = this.getTargetY.bind(this);
  }

  onFocusScroll(index) {
    let {
      actions: { handleUpdateUIScroll },
    } = this.props;

    handleUpdateUIScroll(this.getTargetY(index));
  }

  onScroll(event) {
    let { activeIndex: currentActiveIndex, fixed: currentFixed } = this.state;

    let fixed = this.navigation && this.navigation["el"] ? (!currentFixed ? getPosition(this.navigation["el"]).top <= 0 : getPosition(this.bottom).top <= getHeight(this.navigation["el"])) : false;

    let activeIndex = this.getActiveIndex();

    (fixed !== currentFixed || activeIndex !== currentActiveIndex) &&
      this.setState(
        update(this.state, {
          activeIndex: { $set: activeIndex },
          fixed: { $set: fixed },
        }),
      );
  }

  getActiveIndex() {
    return this.navigation && this.navigation["el"]
      ? this.sections.reduce((target, section, index) => {
          getDeepValue(section, "el") && getPosition(section["el"]).top <= getHeight(this.navigation["el"]) + 100 && (target = index);

          return target;
        }, -1)
      : -1;
  }

  getTargetY(index) {
    return getPosition(this.sections[index]["el"]).top + getScrollTop() - getHeight(this.navigation["el"]);
  }

  updateSections(index, scope) {
    let instance = scope && scope.getWrappedInstance ? (scope.getWrappedInstance() || {})["wrappedInstance"] : scope;

    this.sections[index] = instance;
  }

  shouldComponentUpdate(nextProps, nextState) {
    let {
      router: {
        query: { category: nextCategory },
      },
      location: nextLocation,
    } = nextProps;
    let {
      router: {
        query: { category: currentCategory },
      },
      location: currentLocation,
    } = this.props;

    return !(Object.is(nextCategory, currentCategory) && Object.is(JSON.stringify(nextState), JSON.stringify(this.state)) && Object.is(JSON.stringify(nextLocation), JSON.stringify(currentLocation)));
  }

  componentDidMount() {
    let {
      router: {
        query: { category },
      },
      actions: { handleRequestProductGroup },
    } = this.props;
    const query = this.props.router.query;
    let product = PRODUCT_OVERVIEW[category.toUpperCase().replace(/-/g, "_")];
    let reviewIndex = category.match(/apparel/i) ? 1 : (product["children"] || []).length;

    Promise.all([window.addEventListener("scroll", this.onScroll), handleRequestProductGroup()])
      .then(() => {
        this.setState(
          update(this.state, {
            ready: { $set: true },
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
                scrollIndex = reviewIndex;
                break;
            }

            scrollIndex > -1 && this.onFocusScroll(scrollIndex, "easeInExpo");
          }, 1000);
      });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    let {
      actions,
      params,
      states,
      location,
      router: { query },
    } = this.props;
    let { activeIndex, fixed, ready } = this.state;
    let { category } = query;

    let isApparel = category.match(/apparel/i);
    let product = PRODUCT_OVERVIEW[category.toUpperCase().replace(/-/g, "_")];
    let reviewIndex = isApparel ? 1 : (product["children"] || []).length;

    let tabNames =
      (product["children"] || []).length > 0 &&
      product["children"].reduce((target, child) => {
        let disabled = child.tabDisabled || false;
        !disabled && target.push({ label: child["title"] });

        return target;
      }, []);

    return (
      ready && (
        <div className="store-overview-wrap">
          <div className="container">
            <div className="top">
              {React.cloneElement(<KeyVisual />, {
                category,
                product,
              })}
            </div>

            {(product["children"] || []).length > 0 &&
              React.cloneElement(<Tab />, {
                actions: {
                  handleSelect: this.onFocusScroll,
                },
                className: fixed ? "fixed" : null,
                names: [...tabNames, { label: "고객 리뷰" }],
                focused: activeIndex,
                ref: (c) => {
                  this.navigation = c;
                },
              })}

            <div
              className={`bottom ${fixed ? "fixed" : ""}`}
              ref={(c) => {
                this.bottom = c;
              }}
            >
              {!isApparel &&
                (product["children"] || []).reduce((target, child, index) => {
                  target.push(
                    React.cloneElement(<Product />, {
                      category,
                      value: child,
                      ref: (c) => {
                        this.updateSections(index, c);
                      },
                    }),
                  );

                  return target;
                }, [])}

              {isApparel &&
                React.cloneElement(<ProductApparel />, {
                  states,
                  category,
                  location,
                  index: 0,
                  actions: {
                    ...actions,
                    handleGetTargetY: this.getTargetY,
                  },
                  ref: (c) => {
                    this.updateSections(0, c);
                  },
                })}

              {React.cloneElement(<Review />, {
                states,
                actions: {
                  ...actions,
                  handleFocusScroll: this.onFocusScroll,
                },
                params,
                product,
                ready,
                ref: (c) => {
                  this.updateSections(reviewIndex, c);
                },
              })}
            </div>
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
      product: state.product,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleGetTemplateOptions: (data) => dispatch(ActionCommon.getTemplateOptions(data)),

      handleUpdateUIScroll: (targetY, easingType) => dispatch(ActionUI.updateUIScroll(targetY, easingType)),

      handleRequestProductGroup: () => dispatch(ActionProduct.requestProductGroup()),

      handleRequestReviews: (params) => dispatch(ActionReview.requestReviews(params)),
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
  //TODO 값 긁어와서 만들기

  const categoryList = ["business-card", "sticker", "apparel", "banner", "signs-posters", "pr", "packaging", "md", "card", "accessory"];

  const paths = categoryList.map((item) => `/store/${item}/overview`);

  return {
    paths,
    fallback: true,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StoreOverview));
