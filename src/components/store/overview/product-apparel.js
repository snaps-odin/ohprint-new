import React from "react";
import update from "react-addons-update";
import { connect } from "react-redux";
import { Field, reduxForm, change } from "redux-form";

import { getDatasetByName } from "utils/dom";
import { goLink, goStore, addDomain, addCdn, prdNameList } from "utils/url";
import { ActionStore } from "actions/index";
import { getDeepValue } from "utils/json";
import { toCash } from "utils/format";

import { SelectField } from "components/common/fields";
import { gtmV4_select_item } from "configs/google-analytics/ga-v4";
import { withRouter } from "next/router";

class StoreOverviewProductApparel extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      ready: false,
      options: [],
      product: null,
    };

    this.field = "overview";

    this.onClickGoLink = this.onClickGoLink.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onNewIcon = this.onNewIcon.bind(this);
  }

  onClickGoLink(event) {
    const {
      router: { asPath },
    } = this.props;
    const pathname = asPath.split('?')[0]
    const search = asPath.split('?').length > 2 ? asPath.split('?')[1] : ""

    let path = getDatasetByName(event.currentTarget, "path");
    let cutPath = path.split("/");
    cutPath = cutPath[cutPath.length - 1];

    let bigIn = {
      id: cutPath,
      name: getDatasetByName(event.currentTarget, "title"),
      price: 0,
      category: "apparel",
    };

    gtmV4_select_item({
      name: getDatasetByName(event.currentTarget, "title"),
      price: Number(getDatasetByName(event.currentTarget, "price") || 0),
      brandName: getDatasetByName(event.currentTarget, "brandname"),
      img: getDatasetByName(event.currentTarget, "img"),
      path: pathname + search,
    });

    goLink(path, {
      location: "OVERVIEW_BANNER",
      type: "",
      etAction: getDatasetByName(event.currentTarget, "title"),
      dimension4: this.props.category,
      ...bigIn,
    });
  }

  onChange(keyName, value) {
    let {
      states: { currentForm },
    } = this.props;

    let values = getDeepValue(currentForm, `values.${this.field}`);

    let changeValues = {};
    changeValues[keyName] = value;

    window.setTimeout(() => {
      this.changeQuery(Object.assign(values, changeValues));
    }, 0);
  }

  /** shouldComponentUpdate(nextProps, nextState) {
		let { category: nextCategory, value: nextValue } = nextProps;
		let { category: currentCategory, value: currentValue } = this.props;

		return !(
			Object.is(nextCategory, currentCategory) &&
			Object.is(JSON.stringify(nextValue), JSON.stringify(currentValue))
		)
	} **/

  getOptions(option) {
    return (option["child"] || []).reduce(
      (target, child) => {
        target.push({
          label: child["label"],
          value: child["value"],
        });

        return target;
      },
      [{ label: `모든 ${option["title"]}`, value: "" }],
    );
  }

  getSize(sizeList) {
    let size = null;

    (sizeList || []).length > 0 && (size = (sizeList || []).length > 1 ? `${sizeList[0]} - ${sizeList[sizeList.length - 1]} / ` : `${sizeList[0]} / `);

    return size;
  }

  requestList() {
    let {
      states: { currentForm },
      actions: { handleRequestStoreApparelProduct },
    } = this.props;
    let {
      values: { overview },
    } = currentForm;
    overview["limit"] = 100;
    let values = getDeepValue(currentForm, `values.${this.field}`);

    return handleRequestStoreApparelProduct(values);
  }

  changeQuery(values) {
    let {
      category,
      index,
      actions: { handleUpdateUIScroll, handleGetTargetY },
    } = this.props;

    Promise.all([handleUpdateUIScroll(handleGetTargetY(index))]).then(() => {
      goStore("overview", category, "", values);
    });
  }

  updateByQuery() {
    let {
      states,
      actions,
      router: { query },
    } = this.props;
    let { currentForm } = states;
    let { handleChangeFormValue } = actions;
    let { productGroupCode, genderCommonCode, typeCommonCode, brandCommonCode } = query;

    let values = getDeepValue(currentForm, `values.${this.field}`);

    return new Promise((resolve) => {
      handleChangeFormValue(
        this.field,
        Object.assign({}, values, {
          productGroupCode: productGroupCode || "",
          genderCommonCode: genderCommonCode || "",
          typeCommonCode: typeCommonCode || "",
          brandCommonCode: brandCommonCode || "",
        }),
      );

      resolve();
    });
  }

  componentDidUpdate(prevProps, prevState) {
    let {
      router: { query: prevQuery },
    } = prevProps;
    let {
      router: { query: currentQuery },
    } = this.props;

    !Object.is(JSON.stringify(prevQuery), JSON.stringify(currentQuery)) &&
      this.updateByQuery()
        .then(() => {
          return this.requestList();
        })
        .then((result) => {
          this.setState(
            update(this.state, {
              product: { $set: result },
            }),
          );
        });
  }

  componentDidMount() {
    let {
      actions: { handleRequestStoreApparelProductOption },
    } = this.props;

    handleRequestStoreApparelProductOption()
      .then((result) => {
        return new Promise((resolve) => {
          this.updateByQuery().then(() => {
            this.requestList().then((product) => {
              resolve({
                options: result,
                product,
              });
            });
          });
        });
      })
      .then((result) => {
        let { options, product } = result;

        this.setState(
          update(this.state, {
            ready: { $set: true },
            options: { $set: options },
            product: { $set: product },
          }),
        );
      });
  }
  //
  onNewIcon(subName) {
    const target = [{ name: "MCD3-TS105" }, { name: "MCE4-TS103" }, { name: "OPM-P32101" }, { name: "OPM-P32102" }, { name: "00102-CVL" }];

    return target.find((item) => item.name === subName);
  }

  render() {
    let {
      category,
      states: {
        config: {
          url: { cdn: cdnUrl },
        },
      },
    } = this.props;
    let { ready, options, product } = this.state;

    return (
      ready && (
        <section
          className={`store-overview-product-wrap`}
          ref={(c) => {
            this.el = c;
          }}
        >
          <h3>스타일을 선택해 보세요</h3>
          <div className="filter">
            {options.reduce((target, option) => {
              target.push(
                <Field
                  name={`${this.field}.${option["keyName"]}`}
                  className="box2"
                  width={282}
                  options={this.getOptions(option)}
                  onChange={(event, value) => {
                    this.onChange(option["keyName"], value);
                  }}
                  component={SelectField}
                />,
              );
              return target;
            }, [])}
          </div>
          <div className="total">
            <span>상품 {(product || []).length}개</span>
          </div>
          <ul>
            {(product || []).reduce((target, child, index) => {
              let { productCode, productName, subName, material, brandName, brandAttribute, thumbnailUrl, colorList, sizeList, price, sellPrice, isSale, isDiscount } = child;

              //let isBF = (productCode !== "703001016001" && productCode !== "703004016001");
              let isBF = false;
              let isNew = this.onNewIcon(subName);

              let path = `${brandAttribute}-${subName}`.toLowerCase();
              let attention = ["info", "price"].reduce((target, item) => {
                switch (item) {
                  case "info":
                    target.push(`${this.getSize(sizeList)}${material || ""}`);
                    break;

                  case "price":
                    target.push(`${toCash(sellPrice)}원 부터`);
                }

                return target;
              }, []);

              target.push(
                <li key={`${productCode}-${index}`} className={`box`} data-path={`/store/${category}/intro/${path}`} data-title={productName} data-img={thumbnailUrl} data-price={sellPrice || price} data-brandName={brandName} onClick={this.onClickGoLink}>
                  <span className={`top box`}>
                    <span>
                      {isBF && <span className={`bfIcon icon-blackfriday-thumb`} />}
                      {isDiscount && <span className={`icon icon-sale-7070`} />}

                      {isNew && <span className={`icon icon-new-7070`} />}

                      <img src={`${addDomain(cdnUrl, thumbnailUrl)}`} />
                    </span>
                  </span>

                  <span className={`bottom box apparel`}>
                    <h4>{productName}</h4>
                    {(colorList || []).length > 0 && (
                      <div className="apparelColors">
                        {colorList.reduce((target, color) => {
                          let colorName = (color || "").toLowerCase().replace(/_/g, "-");
                          target.push(
                            <div className="colorItem">
                              {/*<span className={`icon icon-${colorName}-18`}/>*/}
                              <img src={addCdn(`/sprite/svg/${colorName}-18.svg`)} />
                            </div>,
                          );

                          return target;
                        }, [])}
                      </div>
                    )}

                    {(attention || []).length > 0 && (
                      <dl>
                        {attention.reduce((target, item) => {
                          target.push(<dd>{item}</dd>);

                          return target;
                        }, [])}
                      </dl>
                    )}
                  </span>
                </li>,
              );

              return target;
            }, [])}
          </ul>
        </section>
      )
    );
  }
}

const formName = "store-overview";

const mapStateToProps = (state, ownerProps) => {
  return {
    states: {
      ...ownerProps.states,

      currentForm: state.form[formName],
    },
    initialValues: {
      overview: {
        productGroupCode: "",
        genderCommonCode: "",
        typeCommonCode: "",
        brandCommonCode: "",
      },
    },
  };
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      ...ownerProps.actions,

      handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),

      handleRequestStoreApparelProduct: (params) => dispatch(ActionStore.requestStoreApparelProduct(params)),
      handleRequestStoreApparelProductOption: (params) => dispatch(ActionStore.requestStoreApparelProductOption(params)),
    },
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(
  reduxForm({
    form: formName,
  })(withRouter(StoreOverviewProductApparel)),
);
