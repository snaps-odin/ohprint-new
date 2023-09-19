import React from "react";
import update from "react-addons-update";
import { connect } from "react-redux";
import { change, reduxForm } from "redux-form";

import { ActionCommon, ActionEditor, ActionLayer, ActionStore } from "actions/index";
import { LayerTypes } from "constants/index";

import { getDeepValue } from "utils/json";
import { addDomain, goEditor, goMemberCart, modifyProductName } from "utils/url";

import Attention from "components/common/attention";
import Panel from "./panel";
import Size from "./size";
import Engrave from "./engrave";
import Quantity from "./quantity";
import Accessory from "./accessory";
import Price from "./price";
import QuantityApparel from "./quantity-apparel";

import PanelCalendar from "./panel-calendar";

import { addZero } from "utils/format";
import { snakeToCamel } from "utils/string";

import IMAGE_CODE from "configs/bcard-code";

import { dataLayerBtnStart, dataLayerEditorTransactionSticker, dataLayerSelectTemplate } from "configs/google-analytics/ga";
import { bigin_cart_add, bigin_view_item } from "../../../../../configs/google-analytics/bigin";
import { setMarketingData } from "../../../../../utils/storage";
import { gtmV4_submit } from "configs/google-analytics/ga-v4";
import { DIGITAL_PLUS_1ST } from "../../../../../configs/products/apparel/constant";

class StoreIntroDIYOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaults: null,
      options: null,
      sizes: null,
      essentials: null,
      prices: null,
      accessories: null,
      offsetPrint: "N",
      ready: false,
      colorList: [],
      subText: "",
      sendCount: 0,
    };

    this.enables = null;
    this.sizeDefaultYN = null;
    this.sendCount = 0;
    this.sendCategory = {
      category: props.params.category || "",
      subCategory: props.params.subCategory || "",
    };

    this.onChangeOption = this.onChangeOption.bind(this);
    this.onFocusOption = this.onFocusOption.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
    this.onChangeAccessory = this.onChangeAccessory.bind(this);
    this.onChangeSizeCode = this.onChangeSizeCode.bind(this);
    this.executeEditor = this.executeEditor.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onPlayLoading = this.onPlayLoading.bind(this);
    this.frontSaleFlag = this.frontSaleFlag.bind(this);
    this.onChangeCalendarStartDate = this.onChangeCalendarStartDate.bind(this);
    this.onGAbtnStart = this.onGAbtnStart.bind(this);
    this.onGA4btnStart = this.onGA4btnStart.bind(this);
    this.getItemLabel = this.getItemLabel.bind(this);
    this.onBfSale = this.onBfSale.bind(this);
  }

  onChangeOption(keyName, value, isWild, laseSelectedIndex) {
    let {
      states,
      actions,
      params: { category },
    } = this.props;
    let {
      currentForm,
      currentForm: {
        values: {
          option: { calendarStartDate },
        },
      },
    } = states;
    let { handleChangeFormValue } = actions;
    let { defaults, options } = this.state;
    let diameter = this.props.states.currentForm.values.option.diameter;
    let productShapeType = this.props.states.currentForm.values.option.productShapeType;

    let isApparel = category.match(/apparel/i);
    let currentValues = getDeepValue(currentForm, "values.option");

    let values = (options || []).reduce(
      (target, option) => {
        let { isParent, keyName, child: children, isMultiSelectable } = option;

        if (isParent) {
          target[keyName] = currentValues[keyName];
        } else {
          let matched = (children || []).find((child) => Object.is(child["value"], currentValues[keyName]));

          target[keyName] = !!(matched && (matched["parentCodeList"] || []).includes(target[matched["parentKeyName"]])) ? currentValues[keyName] : !isMultiSelectable ? this.getDefaults(target, false, children) : [];
        }

        category === "apparel" && keyName === "paperCode" && (target[keyName] = currentValues[keyName]);

        category === "business-card" && keyName === "sideCodes" && (target[keyName] = currentValues[keyName]);

        return target;
      },
      (defaults || []).reduce((target, item) => {
        let { keyName, value } = item;

        target[keyName] = value;

        return target;
      }, {}),
    );

    if (category === "acrylic-keyring") {
      values = Object.assign({}, values, {
        diameter: diameter && (productShapeType || "") !== value ? diameter : null,
      });
    }

    new Promise((resolve) => {
      !isWild
        ? this.getEnables(values).then((result) => {
            resolve(result);
          })
        : resolve({ values });
    })
      .then((result) => {
        let { values } = result;
        return !isWild
          ? this.getSize(values).then((values) => {
              return Object.assign({}, result, { values });
            })
          : result;
      })
      .then((result) => {
        let { values, enables } = result;

        return this.getWildEnables(values, enables, !isWild);
      })
      .then((result) => {
        let { values, enables } = result;

        if (category === "acrylic-keyring" && productShapeType.match(/MANUAL_SIZE/i)) {
          if (productShapeType === value) {
            values = Object.assign({}, values, {
              millimeterWidth: null,
              millimeterHeight: null,
            });
          }
        }

        calendarStartDate && (values["calendarStartDate"] = calendarStartDate);

        !isWild && (this.enables = enables);
        !isWild && handleChangeFormValue("option", values);
      })
      .then(() => {
        this.frontSaleFlag();
        keyName && options.find((option) => option["keyName"] === keyName)["isMultiSelectable"] && handleChangeFormValue("lastSelect", { [keyName]: laseSelectedIndex });
      })
      .then(() => {
        return isApparel ? this.updateSoldOutOption() : null;
      })
      .then(() => {
        return this.requestByOption();
      });
  }

  onFocusOption(keyName, value) {}

  onChangeSize(width, height) {
    let { states, actions } = this.props;
    let { currentForm } = states;
    let { handleChangeFormValue } = actions;

    let currentValues = getDeepValue(currentForm, "values.option");

    let values =
      height === "productShapeType"
        ? Object.assign({}, currentValues, {
            diameter: width,
          })
        : Object.assign({}, currentValues, {
            millimeterWidth: width,
            millimeterHeight: height,
          });

    new Promise((resolve) => {
      this.getEnables(values).then((result) => {
        resolve(result);
      });
    })
      .then((result) => {
        let { values, enables } = result;

        return this.getWildEnables(values, enables, true);
      })
      .then((result) => {
        let { values, enables } = result;

        this.enables = enables;

        handleChangeFormValue("option", values);
      })
      .then(() => {
        return this.requestByOption();
      });
  }

  onChangeQuantity(value) {
    let {
      actions: { handleChangeFormValue },
    } = this.props;

    handleChangeFormValue(`quantity`, value);
  }

  onChangeAccessory(value) {
    let {
      actions: { handleChangeFormValue },
    } = this.props;

    handleChangeFormValue(`accessories`, value);
  }

  onChangeSizeCode(value) {
    let {
      actions: { handleChangeFormValue },
    } = this.props;

    Promise.all([handleChangeFormValue(`sizes`, value)]).then(() => {
      this.onChangeOption();
    });
  }

  onSubmit(values) {
    let {
      params: { category, subCategory },
      actions: { handleExecuteAfterUserLogin },
    } = this.props;
    let { essentials, prices, options, offsetPrint } = this.state;
    let { option, quantity, accessories, sizes } = values;
    let { isPackage, priceList } = prices || {};
    let productShapeType = this.props.states.currentForm.values.option.productShapeType || "";

    let params = (essentials || []).reduce((target, item) => {
      let { keyName, value } = item;

      target[keyName] = value;

      return target;
    }, Object.assign({}, option));

    if (params.diameter) {
      params = Object.assign({}, params, {
        millimeterHeight: params.diameter,
        millimeterWidth: params.diameter,
      });
    }

    delete params.diameter;

    Object.keys(params).reduce((target, key) => {
      let children = ((options || []).find((option) => option["keyName"] === key) || {})["child"] || null;

      Array.isArray(params[key]) &&
        (params[key] = children.reduce((target, child, index) => {
          params[key][index] && target.push(child["value"]);

          return target;
        }, []));
    }, []);

    //offset 파라미터 넘김
    params["offsetPrint"] = isPackage ? priceList[quantity]["offsetPrint"] || "N" : "N";
    params["quantity"] = isPackage ? priceList[quantity]["quantity"] : quantity;
    params["accessory"] =
      (accessories || []).length > 0
        ? JSON.stringify(
            accessories.reduce((target, item) => {
              let { productCode, templateCode, value, prices, isPackage, displayText } = item;

              target.push({
                productCode,
                templateCode,
                quantity: isPackage ? prices[value]["quantity"] : value,
                displayText,
              });

              return target;
            }, []),
          )
        : null;

    params["sizeQuantitys"] =
      (sizes || []).length > 0
        ? JSON.stringify(
            sizes.reduce((target, item) => {
              let { value: sizeCode, quantity } = item;

              target.push({
                sizeCode,
                colorCode: params["colorCode"],
                quantity,
              });

              return target;
            }, []),
          )
        : null;

    params["productCode"] && this.onGAbtnStart(params, null, "start");
    this.onGA4btnStart();

    params["productCode"] &&
      (!this.isEditorSubmit() && !this.isCartSubmit()
        ? this.executeSelectDesign({
            category,
            subCategory,
            params,
            actions: {
              handleExecuteEditor: this.executeEditor,
            },
          })
        : handleExecuteAfterUserLogin()
            .then(() => {
              this.isCartSubmit() ? this.executeCart(params) : this.executeEditor(params);
            })
            .catch((error) => {
              console.error(error);
            }));
  }

  onGAbtnStart(params, templateUseType, type) {
    let {
      actions: { handleUpdateEditor, handleGetProductByCategory, handleRequestStoreProductName },
    } = this.props;
    let category = this.props.params.category;
    let subCategory = this.props.params.subCategory;
    let options = this.state.options;

    let productName = "";
    let productTemplate = "";
    let productOption = "";
    let productOptionIsNotQuan = "";
    let accessorys = [];
    let isApparel = category === "apparel";
    let isGa = true;
    let mpn = !isApparel && modifyProductName(subCategory === "defaults" ? category : subCategory, this.props.params);

    if (category === "acrylic-keyring" && !templateUseType) {
      templateUseType = "SELF_MADE";
    }

    try {
      productName = handleGetProductByCategory(category).label;
      //productName = mpn.parent;

      productTemplate = (templateUseType && templateUseType === "SELF_MADE" ? "na" : "my-design-upload") || "na";
      productOption = "na";
      accessorys = this.props.states.currentForm.values.accessories || [];

      if (options && options.length > 0) {
        productOption = (options || []).reduce((target, item, idx) => {
          let keyName = item.keyName;
          keyName = keyName === "sizeCode" ? "sizeQuantitys" : keyName;

          if (params[keyName]) {
            if (isApparel && keyName === "frameCodeList") {
              let frameCodeList = (params[keyName] || []).reduce((target, frameCode, idx) => {
                let find = item.child.find((fi) => fi["value"] === frameCode);
                find && (target = idx === 0 ? find.label : target + "::" + find.label);
                return target;
              }, []);

              frameCodeList && (target = idx === 0 ? frameCodeList : target + "::" + frameCodeList);
            } else {
              let find = item.child.find((fi) => fi["value"] === params[keyName]);
              find && (target = idx === 0 ? find.label : target + "::" + find.label);
            }
          }

          return target;
        }, []);

        //!!
        if (!!category.match(/calendar/i)) {
          try {
            let date = this.props.states.currentForm.values.option.calendarStartDate;
            if (date) {
              productOption += "::" + date.replace(".", "년 ") + "월";
            }
          } catch (e) {
            console.error("GA error ", e);
          }
        }

        //modifyProductName
        productOptionIsNotQuan = productOption;

        !isApparel && type === "editor" && (productOption = productOption + "::" + params.quantity);
      }
    } catch (err) {
      console.error("GA Data Setting Error ", err);
      isGa = false;
    }

    Promise.all([handleRequestStoreProductName(params.productCode)]).then((result) => {
      if (isGa) {
        if (type === "editor") {
          result[0].productName && (productOption = result[0].productName + "::" + productOption);
          dataLayerEditorTransactionSticker(productName, productTemplate, productOption, accessorys);
          dataLayerSelectTemplate(productName, productTemplate, productOptionIsNotQuan, accessorys);
        }

        if (type === "start") {
          let prdName = subCategory === "defaults" ? mpn.child : mpn.parent;

          if (category === "apparel") {
            prdName = "어패럴";
          }

          if (category === "business-card" || category === "sticker" || category === "card" || category === "apparel") {
            productOptionIsNotQuan = (category === "apparel" ? result[0].productName : mpn.child) + "::" + productOptionIsNotQuan;
          }

          dataLayerBtnStart(prdName, productTemplate, productOptionIsNotQuan, accessorys);
        }

        if (type === "selectTemplate") {
          result[0].productName && (productOption = result[0].productName + "::" + productOption);
          dataLayerSelectTemplate(productName, productTemplate, productOption, accessorys);
        }
      }
    });
  }

  onGA4btnStart() {
    let {
      states: { currentForm },
      params: { category },
    } = this.props;
    let { options } = this.state;

    let values = getDeepValue(currentForm, `values.option`);

    let result = (options || []).reduce((target, option) => {
      let { keyName, child: children } = option;

      let value = values[keyName] || null;

      let child = value ? (Array.isArray(value) ? this.getItemLabel(children, value) : (children || []).find((child) => Object.is(child["value"], value))) : null;

      child && target.push(child["label"]);

      return target;
    }, []);

    if (values.diameter) result.push(values.diameter);
    if (values.millimeterWidth && values.millimeterHeight) result.push(`${values.millimeterWidth}x${values.millimeterHeight}`);
    if (values.calendarStartDate || "") result.push(values.calendarStartDate.replace(".", "년 ") + "월");

    gtmV4_submit(result.join("/"));
  }

  getItemLabel(children, value) {
    let label = children
      .reduce((target, item, index) => {
        value[index] && target.push(item["label"]);
        return target;
      }, [])
      .join(",");

    return label ? { label } : null;
  }

  executeCart(params) {
    let { actions } = this.props;
    let { handleCreateStoreCart, handleOpenAlertLayer, handleCloseContentsLayer } = actions;
    let { productCode, templateCode, quantity, displayText } = params;

    handleCreateStoreCart({
      productCode,
      templateCode,
      quantity,
      displayText,
    })
      .then(() => {
        bigin_cart_add();
        handleOpenAlertLayer({
          description: "장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?",
          confirm: true,
          callback: (confirmed) => {
            confirmed &&
              Promise.all([goMemberCart()]).then(() => {
                handleCloseContentsLayer();
              });
          },
        });
      })
      .catch((error) => {
        handleOpenAlertLayer({
          description: error,
        });
      });
  }

  executeEditor(params, templateUseType) {
    let {
      actions: { handleUpdateEditor },
    } = this.props;
    let category = this.props.params.category;

    if (category === "acrylic-keyring" && !templateUseType) {
      templateUseType = "SELF_MADE";
    }

    Promise.all([handleUpdateEditor(params, templateUseType || null), this.onGAbtnStart(params, templateUseType, "editor")])
      .then((result) => {
        goEditor();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  executeSelectDesign(params) {
    params["s_accessory"] = this.props.states.currentForm.values.accessories;
    let {
      actions: { handleOpenContentsLayer },
      params: { category },
    } = this.props;
    let {
      params: { calendarStartDate },
    } = params;

    let isCalendar = !!category.match(/calendar/i);

    if (isCalendar) {
      let cParmas = params.params;
      cParmas["calendarStartDate"] = calendarStartDate.replace(".", "");

      params = Object.assign({}, params, { params: cParmas });
    }

    handleOpenContentsLayer(LayerTypes.DESIGN_METHOD_DELECT, params);
  }

  isCartSubmit() {
    let {
      states: { currentForm },
      params: { category, subCategory },
    } = this.props;

    let values = getDeepValue(currentForm, "values.option");

    return !!(category || "").match(/accessory/i);
  }

  isEditorSubmit() {
    let {
      states: { currentForm },
      params: { category, subCategory },
    } = this.props;
    let {
      values: {
        option: { productShapeType },
      },
    } = currentForm;

    let values = getDeepValue(currentForm, "values.option");
    let isManualSize = !((getDeepValue(values, "productShapeType") || "") === "MANUAL_SIZE") && category === "acrylic-keyring";

    return ((category || "").match(/sticker/i) || isManualSize) && ((subCategory || "").match(/free-size/i) || (getDeepValue(values, "productShapeType") || "").match(/MANUAL_SIZE/i) || (getDeepValue(values, "productShapeType") || "").match(/ACRYLIC_KEYRING_HEART/i));
  }

  getSaleDescription() {
    let {
      params: { category, subCategory },
    } = this.props;
    let { options, subText } = this.state;

    let data = (options || []).reduce(
      (target, option) => {
        let { title, child: children } = option;

        let filtered = ((children || []).filter((child) => child["isSale"]) || []).reduce(
          (target, child) => {
            let { label, discountRate } = child;

            target["labels"].push(label);
            target["discountRate"] = Math.max(target["discountRate"], discountRate || 0);

            return target;
          },
          { labels: [], discountRate: 0 },
        );

        (filtered["labels"] || []).length > 0 && target["labels"].push(`${title} (${(filtered["labels"] || []).join(", ")})`);

        target["discountRate"] = Math.max(target["discountRate"], filtered["discountRate"]);

        return target;
      },
      { discountRate: 0, labels: [] },
    );

    let message = this.getSaleDescriptionMessage();

    //let isBF = (category === "apparel") && (subCategory !== "ohprintme-opm-100218" && subCategory !== "ohprintme-opm-100218-kids");
    let isBF = false;

    let messages = data["discountRate"] > 0 && (data["labels"] || []).length > 0 ? (message ? `${message} : <em>${data["discountRate"]}% SALE</em>` : `<em>${data["discountRate"]}% SALE</em> : ${(data["labels"] || []).join(" / ")}`) : null;

    if (!!isBF) {
      messages = (subText || [])
        .reduce((target, item, idx) => {
          target.push(`<em>${idx === 0 ? item : "- " + item}</em>`);
          return target;
        }, [])
        .join("<br/>");
    }

    return messages;
  }

  getSaleDescriptionMessage() {
    let {
      params: { category, subCategory },
    } = this.props;

    let message = "";

    switch (category) {
      case "business-card":
        message = Object.is(subCategory, "transparency") ? "기간 한정 특가" : "";
        break;

      case "apparel":
        message = "시즌 OFF 특가";
        break;

      /*			case 'poster':
            case 'board-sign':
            case 'flyer':
            case 'brochure':
            case 'menu':
            case 'post-card':
            case 'coupon':
                      message = '기간 한정 특가';
              break;*/
    }

    return message;
  }

  getDefaults(source, isParent, children) {
    let filtered = (children || []).filter((child) => {
      let { parentKeyName, parentCodeList } = child;

      return isParent ? true : (parentCodeList || []).includes(source[parentKeyName]);
    });

    let noneChild = (filtered || []).find((child) => child["attribute"].match(/NONE/i));

    return noneChild ? noneChild["value"] : getDeepValue(filtered, "0.value") || null;
  }

  getManualSize(optionValues) {
    let {
      states: { currentForm },
      params: { category, subCategory },
    } = this.props;

    let values = optionValues || getDeepValue(currentForm, "values.option");
    let enables = this.enables;

    let params = {
      parentKeyName: null,
      enabled: false,
      locked: false,
      use10: false,
    };
    /*
        console.log(`${category}/${subCategory}`);*/

    switch (`${category}/${subCategory}`) {
      case "sticker/free-size":
        params = {
          parentKeyName: null,
          enabled: true,
          locked: false,
          use10: false,
        };
        break;

      case "placard-banner/defaults":
        params = {
          parentKeyName: "sizeTemplateCode",
          enabled: true,
          locked: (getDeepValue(enables, "sizeTemplateCode") || []).length > 0,
          use10: true,
        };
        break;

      case "sticker/standard":
      case "sticker/soft2":
      case "sticker/matt":
      case "sticker/craft":
      case "sticker/hologram":
      case "sticker/transparency":
      case "sticker/repp80":
        params = {
          parentKeyName: "productShapeType",
          enabled: (getDeepValue(values, "productShapeType") || "").match(/MANUAL_SIZE/i),
          locked: !(getDeepValue(values, "productShapeType") || "").match(/MANUAL_SIZE/i),
          use10: false,
        };
        break;

      case "acrylic-keyring/defaults":
        params = {
          parentKeyName: "productShapeType",
          enabled: true,
          locked: !(getDeepValue(values, "productShapeType") || "").match(/MANUAL_SIZE/i),
          use10: false,
        };
        break;
    }

    /*		console.log("getDeepValue(values, 'productShapeType')   " , getDeepValue(values, 'productShapeType'));
        console.log("getDeepValue(enables, 'sizeTemplateCode')    " , getDeepValue(enables, 'sizeTemplateCode'));
        console.log("params   ", params);*/

    return params;
  }

  getSize(values, isReset) {
    let {
      states,
      actions,
      params: { category, subCategory },
    } = this.props;
    let { currentForm } = states;
    let { handleRequestStoreOptionSize } = actions;

    let { enabled: isSize } = this.getManualSize(isReset ? values : null);

    let currentValues = getDeepValue(currentForm, "values.option");
    let currentWidth = !isReset ? getDeepValue(currentValues, "millimeterWidth") : null;
    let currentHeight = !isReset ? getDeepValue(currentValues, "millimeterHeight") : null;

    return new Promise((resolve) => {
      isSize
        ? handleRequestStoreOptionSize(category, subCategory, values)
            .then((size) => {
              resolve(size);
            })
            .catch((error) => {
              resolve();
            })
        : resolve();
    })
      .then((size) => {
        this.setState(
          update(this.state, {
            sizes: { $set: size },
          }),
        );

        return size;
        // return new Promise(resolve => {
        //   this.setState(update(this.state, {
        //     sizes: {$set: size}
        //   }));
        // }, () => resolve(size))
      })
      .then((size) => {
        let { defaultYN, pageDefaultWidth, pageDefaultHeight } = size || {};

        let isChange = (defaultYN || "").match(/Y/i);
        let isKeep = (defaultYN || "").match(/N/i) && !Object.is(this.sizeDefaultYN, defaultYN);

        let editValues = size
          ? Object.assign({}, values, {
              millimeterWidth: isChange ? pageDefaultWidth : isKeep ? null : currentWidth,
              millimeterHeight: isChange ? pageDefaultHeight : isKeep ? null : currentHeight,
            })
          : values;

        this.sizeDefaultYN = defaultYN;

        return editValues;
      });
  }

  getEnables(values) {
    let { options } = this.state;

    let editValues = Object.assign({}, values);

    return new Promise((resolve) => {
      let enables = (options || []).reduce((target, option) => {
        let { keyName, child: children, isParent, isWild } = option;

        !isParent &&
          !isWild &&
          (target[keyName] = (children || []).reduce((target, child) => {
            let { parentKeyName, parentCodeList, value } = child;

            (parentCodeList || []).includes(editValues[parentKeyName]) && target.push(value);

            return target;
          }, []));

        return target;
      }, {});

      resolve({
        values: editValues,
        enables,
      });
    });
  }

  getWildEnables(values, enables, isRequestEnable) {
    let {
      actions,
      params: { category, subCategory },
      valid,
    } = this.props;
    let { handleRequestStoreOptionEnable } = actions;
    let { options } = this.state;
    let hasWild = (options || []).findIndex((option) => option["isWild"]) !== -1;
    let editValues = Object.assign({}, values);

    if (category && category === "apparel") {
      let { child } = options[(options || []).findIndex((option) => option["keyName"] === "frameCodeList")];
      let { frameCodeList, paperCode } = values;
      let fcl =
        frameCodeList &&
        frameCodeList.length > 0 &&
        (frameCodeList || []).reduce((target, item, idx) => {
          !!item && target.push(child[idx]["value"]);
          return target;
        }, []);

      values = Object.assign({}, values, { frameCodeList: fcl });
    }

    return new Promise((resolve) => {
      hasWild && isRequestEnable
        ? handleRequestStoreOptionEnable(category, subCategory, values).then((result) => {
            for (let keyName in result) {
              let option = (options || []).find((option) => Object.is(option["keyName"], keyName));
              let noneCode = getDeepValue(
                (getDeepValue(option, "child") || []).find((child) => child["attribute"].match(/NONE/i)),
                "value",
              );
              let findItem = result[keyName].find((child) => child === editValues[keyName]);

              if (category && category === "apparel" && !result[keyName].includes(editValues[keyName])) {
                editValues = Object.assign({}, editValues, { paperCode: findItem });
              }

              !editValues[keyName] && (editValues[keyName] = (result[keyName] || []).includes(noneCode) ? noneCode : getDeepValue(result[keyName], "0") || null);
            }

            resolve({
              values: editValues,
              enables: Object.assign({}, enables, result),
            });
          })
        : resolve({
            values: editValues,
            enables,
          });
    });
  }

  updateSoldOutOption() {
    let {
      states: { currentForm },
    } = this.props;
    let { options } = this.state;

    let colorCode = getDeepValue(currentForm, `values.option.colorCode`);
    let soldOutList = getDeepValue(currentForm, `values.validation.soldOutList`);

    let filteredSoldOuts = (soldOutList || []).reduce((target, soldOut) => {
      Object.is(soldOut["colorCode"], colorCode) && target.push(soldOut["sizeCode"]);

      return target;
    }, []);

    let updateOptions = options.reduce((target, option) => {
      Object.is(option["keyName"], "sizeCode") &&
        option["child"].reduce((target, child) => {
          child["disabled"] = filteredSoldOuts.includes(child["value"]);
        }, []);
      target.push(option);

      return target;
    }, []);

    return new Promise((resolve) => {
      Promise.all([
        this.setState(
          update(this.state, {
            options: { $set: updateOptions },
          }),
        ),
      ]).then(() => {
        resolve();
      });
    });
  }

  debugPrint(res) {
    let arr = [];

    res.length > 0 &&
      res.forEach((item) => {
        console.log(item.keyName);
        item.child.reduce((target, child, idx) => {
          //console.log('"'+child.attribute+'",');
          arr.push('"' + child.attribute + '"');
          return target;
        }, []);

        console.log(arr.join(","));
        arr = [];
      });
  }

  initialize() {
    let { actions, params, productApparelCode, states } = this.props;
    let { handleRequestStoreDefault, handleRequestStoreOptions, handleChangeFormValue, handleRequestStoreApparelValidation, handleRequestStoreApparelProductByOptionType, handleRequestStoreCalendarYearMonth, handleRequestStoreEssential, handleRequestStoreProductName } = actions;
    let { category, subCategory } = params;
    let { currentForm } = states;
    let values = getDeepValue(currentForm, "values.option") || {};

    /*		((productApparelCode === "704") && (
          handleChangeFormValue(`quantity`, 1)
        ))*/

    let isApparel = category.match(/apparel/i);

    return Promise.all([handleRequestStoreDefault(category, subCategory), handleRequestStoreOptions(category, subCategory, "")])
      .then((results) => {
        let defaults = results[0];
        let options = (results[1] || []).reduce((target, option) => {
          let { child: children } = option;
          let isParent = !getDeepValue(children, "0.parentKeyName");
          let isWild = getDeepValue(children, "0.parentKeyName") === "*";
          target.push(Object.assign({}, option, { isParent, isWild }));
          return target;
        }, []);

        //this.debugPrint(results[1]);
        let returnData = { defaults, options };

        return new Promise((resolve) => {
          this.setState(
            update(this.state, {
              defaults: { $set: defaults },
              options: { $set: options },
              ready: { $set: true },
            }),
            () => {
              resolve(returnData);
            },
          );
        });
      })
      .then((result) => {
        return isApparel
          ? Promise.all([handleRequestStoreApparelValidation(category, subCategory), handleRequestStoreApparelProductByOptionType(category, subCategory)]).then((results) => {
              let { 0: validation, 1: product } = results;

              return Promise.all([validation && handleChangeFormValue(`validation`, validation), product && handleChangeFormValue(`productShapeType`, (product || {})["productShapeType"] || "")]).then(() => {
                return result;
              });
            })
          : result;
      })
      .then((result) => {
        let { defaults, options } = result;
        let values = (options || []).reduce(
          (target, option) => {
            let { isParent, keyName, child: children, isQuantity, isMultiSelectable } = option;

            target[keyName] = !isMultiSelectable ? (!isQuantity ? this.getDefaults(target, isParent, children) : "") : [true];

            return target;
          },
          (defaults || []).reduce((target, item) => {
            let { keyName, value } = item;

            target[keyName] = value;

            return target;
          }, {}),
        );

        if (category === "calendar-desk") {
          values.productShapeType = "CALENDAR_DESK_VERTICAL";
          values.productCode = "401003002001";
        }

        return values;
      })
      .then((values) => {
        return this.getEnables(values);
      })
      .then((result) => {
        let { values } = result;

        const getSize = this.getSize(values, true);
        return Object.assign({}, result, { getSize });
      })
      .then((result) => {
        let { values, enables } = result;

        return this.getWildEnables(values, enables, true);
      })
      .then((result) => {
        let { values, enables } = result;

        this.enables = enables;

        /*if(isCalendar){
        handleChangeFormValue(`calendar.yearMonth`, result.values.calendar.yearMonth);
      }*/
        handleChangeFormValue("option", values);
        this.frontSaleFlag();
        //isBF && this.onBfSale();
      })
      .then(() => {
        return isApparel ? this.updateSoldOutOption() : null;
      })
      .then(() => {
        return this.requestByOption();
      });
  }

  onBfSale() {
    let {
      states: { currentForm },
      productCode,
    } = this.props;
    let values = getDeepValue(currentForm, "values.option") || {};
    //let productCode = (receiveProductCode || "000000000000");
    let isEcobagPouch = !!(productCode || "").match(/704|706/);
    let { options } = this.state;
    let colorArr = [];

    /*this.setState(update(this.state, {
      colorList: {$set: op},
    }));*/

    let op =
      options &&
      (options || [])
        .find((item) => item.keyName === "colorCode")
        .child.reduce((target, option, index) => {
          let { title, keyName, child: children, isParent, isWild, isQuantity, isMultiSelectable, value, label } = option;

          let isBfColor = value === "534039" || value === "534024" || value === "534007" || value === "534049";
          let colorText = !!isEcobagPouch ? "30" : !!isBfColor ? "40" : "60";

          if (productCode === "701001001011" || productCode === "701001001001") {
            colorText = !!isBfColor ? "35" : "60";
          }

          if (productCode === "701001003001" || productCode === "701001004001") {
            colorText = !!isBfColor ? "" : "70";
          }

          if (productCode === "701002008001" || productCode === "701003006001") {
            colorText = !!isBfColor ? "40" : "70";
          }

          if (productCode === "701001001012") {
            colorText = !!isBfColor ? "10" : "10";
          }

          if (productCode === "701001001004" || productCode === "701001001008" || productCode === "701001001009") {
            colorText = !!isBfColor ? "" : "60";
          }

          if (productCode === "701001002001") {
            colorText = !!isBfColor ? "40" : "";
          }

          option["bfSale"] = colorText;
          /*{
        colorName : []
        bfSale : 40
      }*/

          let isSetText = colorArr.find((item) => item.bfSale === colorText);

          if (!isSetText) {
            colorArr.push({
              colorName: [`${label}`],
              bfSale: colorText,
            });
          }

          if (isSetText) {
            isSetText.colorName.push(label);
          }

          target.push(option);

          return target;
        }, []);

    let tempText = colorArr.reduce((target, item, idx) => {
      let { colorName, bfSale } = item;

      target.push(colorName.join(", ") + ` : ${bfSale}%`);

      return target;
    }, []);

    tempText.unshift("블랙프라이데이 기간한정 SALE");

    this.setState(update(this.state, { subText: { $set: tempText } }));

    return op;
  }

  requestByOption() {
    let {
      states,
      actions,
      params: { category, subCategory },
      valid,
    } = this.props;
    let { currentForm } = states;
    let { handleRequestStoreEssential, handleRequestStorePrice, handleRequestStoreAccessory, handleChangeFormValue } = actions;
    let { options } = this.state;

    let params = Object.assign({}, getDeepValue(currentForm, `values.option`) || {});
    let isApparel = category.match(/apparel/i);

    if (params.diameter) {
      params = Object.assign({}, params, {
        millimeterHeight: params.diameter,
        millimeterWidth: params.diameter,
      });
    }

    Object.keys(params).reduce((target, key) => {
      let children = ((options || []).find((option) => option["keyName"] === key) || {})["child"] || null;

      Array.isArray(params[key]) &&
        (params[key] = children.reduce((target, child, index) => {
          params[key][index] && target.push(child["value"]);

          return target;
        }, []));
    }, []);

    return valid
      ? handleRequestStoreEssential(category, subCategory, params)
          .then((essentials) => {
            params = (essentials || []).reduce((target, item) => {
              let { keyName, value } = item;

              target[keyName] = value;

              return target;
            }, params);

            return handleRequestStorePrice(params).then((prices) => {
              return { essentials, prices };
            });
          })
          .then((result) => {
            return handleRequestStoreAccessory(params).then((accessories) => {
              return Object.assign({}, result, { accessories });
            });
          })
          .then((result) => {
            let { essentials, prices, accessories } = result;

            let priceInfo = prices.priceList;

            if (this.sendCount === 0) {
              this.sendCount += 1;

              const m_data = {
                category,
                price: priceInfo[0].sellPrice,
                quantity: this.sendCategory.category === "accessory" ? 1 : priceInfo[0].quantity,
              };
              setMarketingData(m_data);
              bigin_view_item();
            }

            this.changeByOption(essentials);

            this.setState(
              update(this.state, {
                essentials: { $set: essentials },
                prices: { $set: prices },
                accessories: { $set: accessories },
              }),
            );
            // return new Promise((resolve)=>{
            //   this.setState(update(this.state, {
            //     essentials: {$set: essentials},
            //     prices: {$set: prices},
            //     accessories: {$set: accessories}
            //   }, () => resolve(prices['isPackage'])))
            // })

            // try{
            //   let priceInfo = prices.priceList;
            //
            //   if(this.sendCount === 0){
            //     this.sendCount += 1;
            //
            //     const m_data = {
            //       category,
            //       price : priceInfo[0].sellPrice,
            //       quantity : this.sendCategory.category === "accessory" ? 1 : priceInfo[0].quantity
            //     }
            //     setMarketingData(m_data)
            //     bigin_view_item()
            //
            //   }
            //
            // }catch (e){}

            return prices["isPackage"];
          })
          .then((result) => {
            !isApparel && handleChangeFormValue("quantity", result ? 0 : 1);
            handleChangeFormValue(`accessory`, null);
            handleChangeFormValue(`accessories`, []);
          })
      : Promise.all([
          this.setState(
            update(this.state, {
              // essentials: {$set: null},
              prices: { $set: null },
              accessories: { $set: null },
            }),
          ),
        ]).then(() => {
          try {
            if (this.sendCount === 0) {
              this.sendCount += 1;

              const m_data = {
                category,
                price: 0,
                quantity: 1,
              };

              setMarketingData(m_data);
              bigin_view_item();
            }
            this.changeByOption(this.state.essentials);
          } catch (e) {}
          !isApparel && handleChangeFormValue("quantity", 0);
          handleChangeFormValue(`accessory`, null);
          handleChangeFormValue(`accessories`, []);
        });
  }

  onPlayLoading(variation, handleChange) {
    variation["templateInfo"] = {
      frameType: "",
      position: 0,
      etcType: "space",
    };
    variation && handleChange && handleChange(Object.assign({}, variation, { timestamp: new Date().getTime() }));
  }

  changeByOption(essentials) {
    let {
      states,
      actions,
      product: {
        common: { variations, template },
      },
      params: { category, subCategory },
      productApparelCode,
    } = this.props;
    let {
      currentForm,
      config: {
        url: { cdn: cdnUrl },
      },
    } = states;
    let { handleChange, handleRequestStore, handleChangeFormValue } = actions;
    let { defaults, options } = this.state;
    let isApparel = category === "apparel";
    let isBusinessCard = category === "business-card";
    let isDecalSticker = category.match(/color-decal|graphic-decal/i);

    let { enabled: isSize } = this.getManualSize();

    let values = getDeepValue(currentForm, "values.option");
    let lastSelect = getDeepValue(currentForm, "values.lastSelect") || {};

    let attrKeys = [];

    let attributes = (defaults || []).reduce((target, item) => {
      let { attribute, keyName } = item;

      item && target.push(attribute);

      if (isBusinessCard && attribute) {
        attrKeys.push({
          attribute,
          keyName,
        });
      }

      return target;
    }, []);

    (category || "").match(/\bcard\b/) &&
      !(category || "").match(/post-card/) &&
      (attributes = (essentials || []).reduce((target, item) => {
        let { attribute, keyName } = item;

        item && target.push(attribute);

        if (isBusinessCard && attribute) {
          attrKeys.push({
            attribute,
            keyName,
          });
        }

        return target;
      }, attributes));

    attributes = (options || []).reduce((target, option) => {
      let { keyName, child: children } = option;

      let keyValue = values[keyName];

      let attribute = keyValue ? (Array.isArray(keyValue) ? ((children || [])[lastSelect[keyName] ? Number(lastSelect[keyName]) : keyValue.findIndex((item) => !!item)] || {})["attribute"] : ((children || []).find((child) => Object.is(child["value"], keyValue)) || {})["attribute"]) : null;

      attribute && target.push(attribute);

      if (isBusinessCard && attribute) {
        switch (keyValue) {
          case "503001":
          case "503002":
          case "503003":
          case "503025":
            keyName = "scodixCode";
            break;
        }
        attrKeys.push({
          attribute,
          keyName,
        });
      }

      return target;
    }, attributes);

    let variation = (variations || []).reduce((target, variation) => {
      !target && !attributes.map((attribute) => variation["attributes"].indexOf(attribute)).includes(-1) && (target = variation);

      return target;
    }, null);

    // start > business-card variation
    if (isBusinessCard) {
      let duplicate = attrKeys.filter((character, idx, arr) => {
        return arr.findIndex((item) => item.attribute === character.attribute && item.keyName === character.keyName) === idx;
      });

      let parse = duplicate.reduce((target, option) => {
        IMAGE_CODE.forEach((item) => {
          if (item.option[option.attribute] && item.keyName === option.keyName) {
            target.push({
              priority: item.priority,
              code: item.option[option.attribute],
            });
          }
        });
        return target;
      }, []);
      let sort = parse.sort(function (a, b) {
        return a.priority - b.priority;
      });
      variation = {
        attributes: attributes,
        image: `bcard-${sort.map((e) => e.code).join("-")}`,
      };

      console.log(true, duplicate, variation);
    }
    // end > business-card variation
    else if (isDecalSticker) {
      let { productCode, backCode, paperCode } = values;
      let templateCode = "";
      let image = "";
      let mark = "";

      switch (productCode) {
        case "108001001001":
        case "108002001001":
        case "108005002001":
        case "108006002001":
        case "109001001001":
        case "109002001001":
        case "109005002001":
        case "109006002001":
          image = "decal-option-bg-crop";
          break;

        case "108003001001":
        case "108004001001":
        case "108007002001":
        case "108008002001":
        case "109003001001":
        case "109004001001":
        case "109007002001":
        case "109008002001":
          image = "decal-option-bg-wide";
          break;
      }

      switch (productCode) {
        case "108001001001":
        case "108002001001":
        case "108003001001":
        case "108004001001":
        case "109001001001":
        case "109002001001":
        case "109003001001":
        case "109004001001":
          templateCode = category === "color-decal" ? "045021176769" : "045021177440";
          break;

        case "108005002001":
        case "108006002001":
        case "108007002001":
        case "108008002001":
        case "109005002001":
        case "109006002001":
        case "109007002001":
        case "109008002001":
          templateCode = category === "color-decal" ? "045021176961" : "045021177516";
          break;
      }

      switch (category) {
        case "color-decal":
          mark = `/${productCode}/${templateCode}/${paperCode}/${backCode}/store_detail_1/${snakeToCamel(category)}.png`;
          break;

        case "graphic-decal":
          mark = `/${productCode}/${templateCode}/${paperCode}/000000/store_detail_1/${snakeToCamel(category)}.png`;
          break;
      }

      variation = {
        attributes: attributes,
        image,
        mark,
      };
    }

    let params = {
      offset: "0",
      limit: "3",
      sortType: "NEW",
      liked: "false",
    };

    let c_values = "";
    /*
    console.log("1 variation  " , variation);

    console.log("1 attribute  " , attributes);*/

    //options
    //values
    if (category === "apparel") {
      let frameCodeSet = options.find((item) => item["keyName"] === "frameCodeList")["child"];

      if (Object.keys(lastSelect).length > 0 && lastSelect["frameCodeList"]) {
        let frameCodeListNumber = lastSelect["frameCodeList"];
        frameCodeListNumber = frameCodeListNumber ? frameCodeListNumber : 0;

        c_values = Object.assign({}, values, { frameCodeList: frameCodeSet[frameCodeListNumber]["value"] });
      } else {
        let { child } = options[(options || []).findIndex((option) => option["keyName"] === "frameCodeList")];
        let { frameCodeList, paperCode } = values;
        let fcl =
          frameCodeList &&
          frameCodeList.length > 0 &&
          (frameCodeList || []).reduce((target, item, idx) => {
            !!item && target.push(child[idx]["value"]);
            return target;
          }, []);

        c_values = Object.assign({}, values, { frameCodeList: fcl });
      }

      if (variation) {
        c_values["selectedTemplateCode"] = getDeepValue(variation, "templateCode") ? variation["templateCode"] : "045021050961";

        params = Object.assign({}, params, c_values);

        if (!params.frameCodeList || params.frameCodeList.length === 0) {
          let temp = options.find((item) => item.keyName === "frameCodeList").child || [];
          let tempArr = [];
          tempArr.push(temp[0].value);
          params["frameCodeList"] = tempArr;
        }

        if (!params.colorCode) {
          let temp = options.find((item) => item.keyName === "colorCode").child || [];
          params["colorCode"] = temp[0].value;
        }

        if (!params.colorCode || !params.frameCodeList) {
          handleChangeFormValue("option", params);
        }

        Promise.all([handleRequestStore(params)])
          .then((result) => {
            let templateIdx = result[0]["templateList"][0]["templateName"] === "내 디자인 업로드" ? 2 : 0;
            let { templateList } = result[0];

            templateIdx !== 0 && console.error("TemplateCode[" + c_values["selectedTemplateCode"] + "] notFound");

            variation["templateInfo"] = {
              imageUrl: templateList.length > 0 ? addDomain(cdnUrl, templateList[templateIdx]["thumbnailUrl"]) : "/images/common/notFound/error-210210@2x.png",
              skinUrl: templateList.length > 0 ? addDomain(cdnUrl, templateList[templateIdx]["thumbnailSkinUrl"]) : "/images/common/notFound/error-210210@2x.png",
              frameType: templateList.length > 0 ? templateList[templateIdx]["frameType"] : "",
              position: templateList.length > 0 ? templateList[templateIdx]["position"] : 0,
              etcType: templateList.length > 0 ? "apparel" : "loading",
            };

            variation && handleChange && handleChange(Object.assign({}, variation, { timestamp: new Date().getTime() }));
          })
          .catch((err) => {
            variation = [];
            variation["templateInfo"] = {
              imageUrl: "/images/common/notFound/error-210210@2x.png",
              skinUrl: "/images/common/notFound/error-210210@2x.png",
              frameType: "",
              position: 0,
              etcType: "loading",
            };

            variation && handleChange && handleChange(Object.assign({}, variation, { timestamp: new Date().getTime() }));
          });
      } else {
        variation && handleChange && handleChange(Object.assign({}, variation, { timestamp: new Date().getTime() }));
      }
    } else {
      variation && handleChange && handleChange(Object.assign({}, variation, { timestamp: new Date().getTime() }));
    }

    console.log("2 variation  ", variation);

    console.log("2 attribute  ", attributes);

    /**(isSize && this.size) && this.size.setPDFSize(values[ 'millimeterWidth' ], values[ 'millimeterHeight' ]);*/
  }

  /**
   resetByOption(prevCurrentForm, currentForm) {
		let { params: { category }, actions: { handleChangeFormValue } } = this.props;

		let prevIsNayeom = (getDeepValue(prevCurrentForm, 'values.option.paperCode') || '') === '160030';
		let currentIsNayeom = (getDeepValue(currentForm, 'values.option.paperCode') || '') === '160030';

		category.match(/apparel/i) && !Object.is(prevIsNayeom, currentIsNayeom) && handleChangeFormValue('sizes', null);
	}
   **/

  /*  componentDidUpdate(prevProps, prevState) {
    let {params: prevParams, states: {currentForm: prevCurrentForm}} = prevProps;
    let {params: currentParams, states: {currentForm}} = this.props;

    !Object.is(JSON.stringify(prevParams), JSON.stringify(currentParams)) && this.initialize();
    /!** this.resetByOption(prevCurrentForm, currentForm); **!/
  }*/

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    let {
      params: prevParams,
      states: { currentForm: prevCurrentForm },
    } = this.props;
    let {
      params: currentParams,
      states: { currentForm },
    } = nextProps;
    let isUpdate = Object.is(JSON.stringify(prevParams), JSON.stringify(currentParams));

    if (!isUpdate) {
      this.setState(
        update(this.state, {
          ready: { $set: false },
        }),
        () => {
          this.initialize().then(() => {});
        },
      );
    }
    return isUpdate;
  }

  componentDidMount() {
    this.initialize();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {
      params: { category, subCategory },
    } = this.props;
    const { category: s_category, subCategory: s_subCategory } = this.sendCategory;

    if (s_category !== category || s_subCategory !== subCategory) {
      this.sendCategory = { category, subCategory };
      this.sendCount = 0;
    }
  }

  frontSaleFlag() {
    const {
      params: { category, subCategory },
    } = this.props;
    let isApparelNew = category === "apparel" && !!DIGITAL_PLUS_1ST.find((item) => item === subCategory);

    if (isApparelNew) {
      let options = (this.state.options || []).find((item) => item.keyName === "paperCode");

      if (options && !!options.child) {
        let child = options.child || [];

        child.reduce((target, item, idx) => {
          const { attribute } = item;

          if (attribute === "DIGITAL_PLUS") {
            item.isNew = true;
          }

          target.push(item);

          return target;
        }, []);
      }
    }

    const isFlag = category === "sticker" && (subCategory === "circle" || subCategory === "square" || subCategory === "rectangle" || subCategory === "wide");

    const flagList = ["106032001001", "106033001001", "106034001001", "106035001001", "106036002001", "106037003001", "106038003001", "106039003001", "106040003001", "106041004001"];

    if (isFlag) {
      let options = (this.state.options || []).find((item) => item.keyName === "productCode");

      if (options && !!options.child) {
        let child = options.child || [];

        child.reduce((target, item, idx) => {
          let isChanged = !!flagList.find((flag) => flag === item.value);
          //let data = isChanged ? Object.assign( item, {isSale : true}) : item;

          if (isChanged) {
            item.isNew = true;
          }

          //let data = Object.assign( item, {isSale : true});

          target.push(item);

          return target;
        }, []);
      }
    }
  }

  onChangeCalendarStartDate(startDate) {
    let {
      actions: { handleChangeFormValue },
    } = this.props;
    handleChangeFormValue("option.calendarStartDate", startDate);
  }

  render() {
    let { states, params, handleSubmit, valid, product, actions, productApparelCode } = this.props;
    let { currentForm } = states;
    let { category, subCategory } = params;
    let {
      content: { title, attentions },
    } = product;
    let { options, sizes, prices, accessories, ready, colorList, subText } = this.state;

    let values = getDeepValue(currentForm, "values.option") || {};
    let syncErrors = getDeepValue(currentForm, "syncErrors");
    let enables = this.enables;

    let isAcrylicKeyringDescription = false;

    if (values && category === "acrylic-keyring") {
      isAcrylicKeyringDescription = (values.productShapeType || "") === "MANUAL_SIZE";
    }

    let saleDescription = this.getSaleDescription();
    let manualSize = this.getManualSize();

    let isCalendar = (values.productCode || "000000000000").substr(0, 2) === "40";

    /*
    하얀색 534039
    검정색 534024
    네이비 534007

    에코백 704
    파우치 706

     */

    return (
      ready && (
        <div className="store-intro-diy-options-wrap">
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div className="top">
              <h3 dangerouslySetInnerHTML={{ __html: title }} />

              {(attentions || []).length > 0 &&
                React.cloneElement(<Attention />, {
                  value: {
                    children: attentions
                      .reduce((target, item) => {
                        target.push({
                          value: item,
                        });

                        return target;
                      }, [])
                      .concat(saleDescription ? [{ value: saleDescription }] : []),
                  },
                })}
            </div>

            <div className="middle">
              {manualSize["enabled"] &&
                !manualSize["parentKeyName"] &&
                React.cloneElement(<Size />, {
                  params,
                  states,
                  actions: {
                    handleChange: this.onChangeSize,
                  },
                  sizes,
                  use10: manualSize["use10"],
                  ref: (c) => {
                    this.size = c;
                  },
                })}

              {options.reduce((target, option, index) => {
                let { title, keyName, child: children, isParent, isWild, isQuantity, isMultiSelectable } = option;

                !isQuantity &&
                  target.push(
                    React.cloneElement(<Panel />, {
                      actions: {
                        ...actions,
                        handleChange: this.onChangeOption,
                        handleFocus: this.onFocusOption,
                        handleBfSale: this.onBfSale,
                      },
                      options,
                      states,
                      params,
                      product,
                      keyName,
                      index,
                      title,
                      children,
                      values,
                      enables: getDeepValue(enables, `${keyName}`) || [],
                      isParent,
                      isWild,
                      isMultiSelectable: isMultiSelectable || false,
                      error: syncErrors ? getDeepValue(syncErrors, `option.${keyName}`) : null,
                    }),
                  );

                isQuantity &&
                  target.push(
                    React.cloneElement(<QuantityApparel />, {
                      actions: {
                        ...actions,
                        handleChange: this.onChangeSizeCode,
                        handleFocus: this.onFocusOption,
                        handleChangeQuantity: this.onChangeQuantity,
                      },
                      states,
                      params,
                      product,
                      children,
                      prices,
                      productApparelCode,
                      enableSizeCount: ((children || []).filter((item) => !item["disabled"]) || []).length,
                      error: syncErrors ? syncErrors["quantity"] : null,
                    }),
                  );

                manualSize["enabled"] &&
                  Object.is(keyName, manualSize["parentKeyName"]) &&
                  target.push(
                    React.cloneElement(<Size />, {
                      params,
                      states,
                      actions: {
                        handleChange: this.onChangeSize,
                      },
                      locked: manualSize["locked"],
                      sizes,
                      use10: manualSize["use10"],
                      ref: (c) => {
                        this.size = c;
                      },
                    }),
                  );

                return target;
              }, [])}

              {isCalendar &&
                React.cloneElement(<PanelCalendar />, {
                  keyName: "calendarStartDate",
                  values,
                  actions: {
                    ...actions,
                    handleChange: this.onChangeCalendarStartDate,
                    handleFocus: this.onFocusOption,
                  },
                  ref: (c) => {
                    this.calendar = c;
                  },
                })}

              {prices &&
                prices["engravePrice"] &&
                React.cloneElement(<Engrave />, {
                  states,
                  prices,
                })}

              {!category.match(/apparel/i) &&
                React.cloneElement(<Quantity />, {
                  states,
                  actions: {
                    handleChange: this.onChangeQuantity,
                  },
                  params,
                  prices,
                })}

              {(accessories || []).length > 0 &&
                React.cloneElement(<Accessory />, {
                  states,
                  actions: {
                    handleChange: this.onChangeAccessory,
                  },
                  accessories,
                })}
            </div>

            <div className="bottom">
              {(this.state.prices || this.state.sizes) &&
                React.cloneElement(<Price />, {
                  actions: {
                    ...actions,
                  },
                  states,
                  params,
                  options,
                  prices,
                })}

              {isAcrylicKeyringDescription && (
                <dl className="description-wrap">
                  <dd>
                    <span>
                      현재 가격은 <em className="blue">[직접 디자인하기] 기준 가격</em>이며, <em className="blue">[내 디자인 업로드(PDF)]로 제작 시</em> 자동 생성되는 고리 및 여백이 없음으로 좀 더 저렴한 가격으로 조정됩니다.
                    </span>
                  </dd>
                </dl>
              )}

              <button type="submit" disabled={!valid} className={`btn-blue-medium mobon`}>
                {this.isCartSubmit() ? "장바구니 담기" : "시작하기"}
              </button>
            </div>
          </form>
        </div>
      )
    );
  }
}

const formName = "store-intro-option";

const mapStateToProps = (state) => {
  return {
    states: {
      user: state.user,
      config: state.config,
      currentForm: state.form[formName],
    },
    initialValues: {
      option: {},
      quantity: null,
      accessory: null,
      accessories: [],
    },
  };
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      ...ownerProps.actions,

      handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),

      handleUpdateEditor: (data, templateUseType) => dispatch(ActionEditor.updateEditor(data, templateUseType)),

      handleCreateStoreCart: (params) => dispatch(ActionStore.createStoreCart(params)),
      handleRequestStoreApparelValidation: (category, subCategory) => dispatch(ActionStore.requestStoreApparelValidation(category, subCategory)),
      handleRequestStoreApparelProductByOptionType: (category, subCategory) => dispatch(ActionStore.requestStoreApparelProductByOptionType(category, subCategory)),

      handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),
      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),

      handleRequestStore: (params) => dispatch(ActionStore.requestStore(params)),

      handleCloseContentsLayer: () => dispatch(ActionLayer.closeContentsLayer()),

      handleRequestStoreProductName: (productCode) => dispatch(ActionStore.requestStoreProductName(productCode)),

      handleRequestStoreCalendarYearMonth: () => dispatch(ActionStore.requestStoreCalendarYearMonth()),

      handleExecuteAfterUserLogin: () => dispatch(ActionCommon.executeAfterUserLogin()),
    },
  };
};

const validate = (values, props) => {
  let { quantity, validation } = values;
  let { minQuantityList } = validation || {};
  let {
    params: { category },
  } = props;
  let option = getDeepValue(values, "option");

  if (!option) {
    return null;
  }

  let error = { option: {} };
  let isApparel = category.match(/apparel/i);
  let isDiary = category.match(/hard-diary|soft-diary/i);
  let isBusinessCard = category.match(/business-card/i);

  let matchQuantity = (minQuantityList || []).find((minQuantity) => {
    return Object.is(minQuantity["paperCode"], option.paperCode);
  });

  let minQuantity = (matchQuantity || {})["quantity"] || 1;

  (isApparel || isDiary) && (option.frameCodeList || []).findIndex((frameCode) => !!frameCode) < 0 && (error["option"]["frameCodeList"] = "인쇄위치를 선택하세요.");
  isBusinessCard && (option.sideCodes || []).findIndex((sideCode) => !!sideCode) < 0 && (error["option"]["sideCodes"] = "인쇄위치를 선택하세요.");
  isApparel && ((quantity || 0) === 0 ? (error["quantity"] = `사이즈를 선택해 주세요.`) : quantity < minQuantity && (error["quantity"] = `총 수량 ${minQuantity}개부터 주문 가능합니다.`));

  return error;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: formName,
    validate,
  })(StoreIntroDIYOptions),
);
