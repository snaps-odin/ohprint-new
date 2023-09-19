import React from "react";
import update from "react-addons-update";
import { connect } from "react-redux";
import { change, Field, FieldArray, reduxForm } from "redux-form";

import { LayerTypes } from "constants/index";
import { ActionLayer, ActionCommon, ActionCart, ActionOrder, ActionEvents, ActionEditor, ActionProduct, ActionStore } from "actions/index";
import { goMemberOrder, addDomain, goEditor, goPrint } from "utils/url";
import { toCash } from "utils/format";
import { getDatasetByName, getPosition } from "utils/dom";
import { getDeepValue } from "utils/json";
import { getUserToken, getOffsetNoticePopupVisited, setOffsetNoticePopupVisited, getMarketingAgreePopupVisited, getLocalStorageItem, setLocalStorageItem } from "utils/storage";
import { getTimestamp, checkOverTime } from "utils/date";
import { viewCart } from "utils/kakao";

import { dataLayerMemberOrder, dataLayerEditorTransactionSticker } from "configs/google-analytics/ga";

import CartProduct from "./product";
import Banner from "components/common/banner";
import Attention from "components/common/attention";
import { InputField, SelectField } from "components/common/fields";

import { goEvents } from "utils/url";
import { getEnv } from "utils/url";
import { addCdn } from "../../../utils/url";

import { dataLayerBigInCartDelete, dataLayerBigInCartOrder, dataLayerBigInCartVisit } from "../../../configs/google-analytics/ga";

import { convertCategory } from "../../../configs/google-analytics/common";
import { getBrandName, gtmV4_remove_from_cart } from "configs/google-analytics/ga-v4";

class Cart extends React.Component {
  constructor(...args) {
    super(...args);

    viewCart();

    this.state = {
      sortType: "NEW",
      loading: false,
      fixed: false,
      ready: false,
      keyword: null,
      searchType: null,
      isSearch: false,
      isStatus: "",
      saveKeyword: null,
    };

    this.tables = [{ labelName: "PC", listName: "webCartList" }];

    this.products = [];

    this.cartLocker = [];

    this.isSubmit = false;

    this.executeSubmit = this.executeSubmit.bind(this);

    this.onClickSortType = this.onClickSortType.bind(this);
    this.onClickSelectAll = this.onClickSelectAll.bind(this);
    this.onClickGoEditor = this.onClickGoEditor.bind(this);
    this.onClickDelete = this.onClickDelete.bind(this);
    this.onClickEstimate = this.onClickEstimate.bind(this);

    this.onReceiveMessage = this.onReceiveMessage.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.onChangeKeyword = this.onChangeKeyword.bind(this);
    this.onChangeWord = this.onChangeWord.bind(this);
    this.onChangeType = this.onChangeType.bind(this);

    this.onKeyPress = this.onKeyPress.bind(this);

    this.initialize = this.initialize.bind(this);

    this.onChangeList = this.onChangeList.bind(this);

    this.onClickBanner = this.onClickBanner.bind(this);
  }

  onKeyPress(e) {
    if (e.key === "Enter") {
      this.onChangeKeyword(null);
      e.preventDefault(); //<===== This stops the form from being submitted
    }
  }

  getSelectedItems() {
    let {
      states: { currentForm },
    } = this.props;

    let values = getDeepValue(currentForm, "values");

    return values
      ? this.tables.reduce((target, table) => {
          let { listName } = table;

          let items = values[listName] ? values[listName].filter((item) => item["selected"]) : null;

          items && (target = target.concat(items));

          return target;
        }, [])
      : [];
  }

  getExistSamplePack() {
    let {
      states: { currentForm },
    } = this.props;

    let values = getDeepValue(currentForm, "values");

    return values
      ? this.tables.reduce((target, table) => {
          let { listName } = table;

          !target && values[listName].findIndex((item) => String(item["productGroupCode"]) === "999") !== -1 && (target = true);

          return target;
        }, false)
      : false;
  }

  getTotalPrices() {
    let {
      states: {
        order: { deliveryAmountCheck },
      },
      actions: { handleGetOrderDeliveryPrices },
    } = this.props;

    let deliveryPrices = handleGetOrderDeliveryPrices();
    let selectedItems = this.getSelectedItems();

    let isDeliveryAmountCheck = deliveryAmountCheck;
    let isExistSnapsCompany = !!(selectedItems || []).find((item) => !item["isOtherCompany"]);

    return (selectedItems || []).reduce(
      (target, item, index) => {
        let { price, sellPrice, isOtherCompany } = item;

        target["count"] = index + 1;
        target["price"] += price;
        target["sellPrice"] += sellPrice;

        target["sellDeliveryPrice"] += !isDeliveryAmountCheck || (isDeliveryAmountCheck && !isOtherCompany) ? sellPrice : 0;

        target["deliveryPrice"] = !isExistSnapsCompany || (isExistSnapsCompany && target["sellDeliveryPrice"] >= deliveryPrices["enableLimitAmount"]) ? 0 : deliveryPrices["enableAmount"];

        return target;
      },
      { count: 0, price: 0, sellPrice: 0, sellDeliveryPrice: 0, deliveryPrice: 0 },
    );
  }

  getComponentByProjectCode(projectCode) {
    return this.products[0].getRenderedComponent()["getComponentByProjectCode"](projectCode);
  }

  getToken(origin, projectCode) {
    let {
      actions: { handleExecuteAfterUserLogin },
    } = this.props;

    handleExecuteAfterUserLogin()
      .then(() => {
        return this.sendMessage(origin, projectCode);
      })
      .catch((error) => {});
  }

  completed(projectCode) {
    let { states, actions } = this.props;
    let { currentForm } = states;
    let { handleRequestCartByProjectCode, handleChangeFormValue, handleOpenAlertLayer } = actions;

    projectCode && this.getComponentByProjectCode(projectCode).closeThumbnailEditor();

    projectCode &&
      handleRequestCartByProjectCode(projectCode)
        .then((result) => {
          let values = getDeepValue(currentForm, "values") || {};
          let listName = this.tables[0]["listName"];

          (values[listName] || []).map((item, index) => {
            Object.is(String(item["projectCode"]), String(result["projectCode"])) && handleChangeFormValue(`${listName}[${index}]`, result);
          });
        })
        .catch((error) => {
          handleOpenAlertLayer({
            description: error,
          });
        });
  }

  sendMessage(origin, projectCode) {
    let editor = this.getComponentByProjectCode(projectCode)["editor"];

    editor &&
      editor.contentWindow["postMessage"](
        {
          type: "token",
          value: getUserToken(),
        },
        origin,
      );
  }

  onClickSortType(event, value) {
    Promise.all([
      this.setState(
        update(this.state, {
          sortType: { $set: getDatasetByName(event.currentTarget, "sort-type") },
        }),
      ),
    ]).then(() => {
      this.onRefresh();
    });
  }

  onClickSelectAll(bool) {
    (this.products || []).length > 0 &&
      (this.products || []).map((product) => {
        product.getRenderedComponent()["setSelectAll"](bool);
      });
  }

  onClickGoEditor(value) {
    let {
      actions: { handleUpdateEditor },
    } = this.props;

    let params = {
      productCode: value["productCode"],
      projectCode: value["projectCode"],
      templateCode: value["templateCode"],
    };

    if (value.offsetPrint !== "delete") {
      params.offsetPrint = value["offsetPrint"] || "N";
    }

    //GA 데이터 세팅
    let productName = "";
    let productTemplate = "";
    let productOption = "";
    let accessorys = [];
    let isApparel = value.productGroupName === "어패럴";
    let isGa = true;
    let templateUseType = value.templateUseType;
    let sizeSwitch = false;

    let optionNameList = ActionCommon.getHardOptions();

    try {
      productName = value.productGroupName;
      productTemplate = (templateUseType && templateUseType === "SELF_MADE" ? "na" : "my-design-upload") || "na";
      productOption = "na";
      accessorys = [];

      if (optionNameList && optionNameList.length > 0) {
        productOption = (optionNameList || []).reduce((target, item, idx) => {
          let keyName = item.keyName;
          keyName = keyName === "sizeCode" ? "sizeQuantitys" : keyName;

          if (value[keyName]) {
            if (isApparel && !sizeSwitch) {
              let frameCodeList = value["productEtcName"].replace(/,/g, "::");

              frameCodeList && (target = target.length === 0 ? frameCodeList : target + "::" + frameCodeList);

              sizeSwitch = true;
            } else {
              let find = keyName !== "quantity" && value[keyName];
              find && (target = target.length === 0 ? find : target + "::" + find);
            }
          }

          return target;
        }, []);

        if (isApparel) {
          let sizeItem = value["optionQuantityList"].filter((item) => item["quantity"] !== 0);
          let sizeInfo = (sizeItem || []).reduce((target, item, idx) => {
            let { name } = item;
            target = idx === 0 ? name : target + "::" + name;

            return target;
          }, "");
          if (sizeInfo) productOption = productOption + "::" + sizeInfo;
        }

        !isApparel && productOption.length > 0 && (productOption = productOption + "::" + value.quantity);
      }
    } catch (err) {
      console.error("GA Data Setting Error ", err);
      isGa = false;
    }

    Promise.all([handleUpdateEditor(params, value["templateUseType"])]).then(() => {
      isGa && dataLayerEditorTransactionSticker(productName, productTemplate, productOption, accessorys);
      goEditor();
    });
  }

  onClickDelete(event) {
    let {
      actions: { handleOpenAlertLayer, handleDeleteCartByProjectCode, handleGetTemplateSpec, handleGetTemplateOptions },
      states: {
        currentForm,
        currentForm: {
          values: { webCartList },
        },
      },
    } = this.props;

    let projectCodes = this.getSelectedItems().reduce((target, item) => {
      let { projectCode } = item;

      target.push(projectCode);

      return target;
    }, []);

    if (projectCodes.length > 0) {
      handleOpenAlertLayer({
        description: "정말 삭제 하시겠습니까?",
        confirm: true,
        callback: (confirmed) => {
          confirmed &&
            handleDeleteCartByProjectCode(projectCodes.join(",")).then(() => {
              let bigIn = {
                products: webCartList.reduce((target2, item, idx2) => {
                  let isPush = projectCodes.find((pc) => pc === item.projectCode);
                  let options = handleGetTemplateSpec(item).reduce((target, hg, idx) => {
                    target.push(hg.value);
                    return target;
                  }, []);

                  let obj = {
                    id: convertCategory(item.productGroupCode),
                    name: item.productName,
                    price: item.sellPrice,
                    quantity: item.quantity,
                    brand: "",
                    thumbnail: addDomain(item.thumbnailImageUrl || item.templateThumbnailImageUrl) || "",
                    category: convertCategory(item.productGroupCode),
                    variant: options.filter((option) => !!option).length > 0 ? options.join("::") : "",
                  };

                  isPush && target2.push(obj);
                  return target2;
                }, []),
              };

              dataLayerBigInCartDelete(bigIn);

              const params = this.getSelectedItems().reduce((target, item) => {
                let isAccessory = !!(item["productGroupCode"] || "").match(/901/);
                let spec = !isAccessory ? handleGetTemplateSpec(item) : handleGetTemplateOptions(item);
                let valueOfSpec = (spec || []).reduce((target, option) => {
                  let { label, value } = option;
                  !(label || "").match(/수량/i) && target.push(value);
                  return target;
                }, []);

                target.push({
                  item_name: item.templateName,
                  price: item.price || 0,
                  item_brand: getBrandName(item.templateUseType),
                  item_category: isAccessory ? "액세서리" : item.productGroupName,
                  item_category2: isAccessory ? item.productGroupName : "",
                  item_category3: item.sizeName,
                  item_variant: valueOfSpec.join("/"),
                  quantity: 1,
                  // img_url: item.thumbnailImageUrl
                });

                return target;
              }, []);
              gtmV4_remove_from_cart(params);

              this.onRefresh();
            });
        },
      });
    } else {
      handleOpenAlertLayer({
        description: (
          <span>
            선택된 항목이 없습니다.
            <br />
            선택 후 다시 시도해 주세요.
          </span>
        ),
      });
    }
  }

  onClickEstimate(event) {
    let projectCodes = this.getSelectedItems().reduce((target, item) => {
      let { projectCode } = item;

      target.push(projectCode);

      return target;
    }, []);

    projectCodes.length > 0 && goPrint("ESTIMATE", { projectCodes });
  }

  onReceiveMessage(event) {
    let { origin, data } = event;
    let checkType = typeof data;

    let { 0: type, 1: projectCode } = (checkType === "string" && data.match(/|/i) && (data || "").split("|")) || [];

    switch (type) {
      case "getToken":
        this.getToken(origin, projectCode);
        break;

      case "completed":
        this.completed(projectCode);
        break;
    }
  }

  onRefresh() {
    let {
      actions: { handleResetCart, handleRequestCarts },
    } = this.props;
    let { sortType } = this.state;

    Promise.all([handleResetCart()]).then(() => {
      handleRequestCarts({ sortType });
    });
  }

  onScroll(event) {
    let { fixed: currentFixed } = this.state;

    let fixed = getPosition(!currentFixed ? this.middle : this.bottom).top <= 0;

    currentFixed !== fixed && this.setState(update(this.state, { fixed: { $set: fixed } }));
  }

  onSubmit(values) {
    let {
      actions,
      states: {
        currentForm: {
          values: { webCartList },
        },
      },
    } = this.props;
    let { handleOpenAlertLayer, handleOpenContentsLayer, handleGetProductByProductGroupCode, handleGetTemplateSpec } = actions;

    let projectCodes = this.getSelectedItems().reduce(
      (target, item) => {
        let { productGroupCode, projectCode, isDisabledOrder, finishStatus, optionQuantityList, offsetPrint, designCount } = item;
        let { updateEdit } = handleGetProductByProductGroupCode(productGroupCode) || {};
        let soldOut = (optionQuantityList || []).some((option) => option["isSoldOut"] && option["quantity"]);
        soldOut = item.sale === "soldout" ? item : soldOut;

        if (productGroupCode.match(/999/)) {
          target["samplePackCount"] <= 0 && target["items"].push(projectCode);
          target["samplePackCount"] += 1;
        } else {
          !isDisabledOrder && !updateEdit && !soldOut && (finishStatus || "").match(/Y/) && !(productGroupCode === "101" && offsetPrint === "Y" && designCount > 1) && target["items"].push(projectCode);

          updateEdit && target["editorItems"].push(item);

          (isDisabledOrder || soldOut || !(finishStatus || "").match(/Y/) || (productGroupCode === "101" && offsetPrint === "Y" && designCount > 1)) && (target["disabledCount"] += 1);
        }

        return target;
      },
      { items: [], editorItems: [], samplePackCount: 0, disabledCount: 0 },
    );

    new Promise((resolve) => {
      projectCodes["editorItems"].length > 0
        ? handleOpenContentsLayer(LayerTypes.PROJECT_EDIT, {
            actions: {
              handleGoEditor: this.onClickGoEditor,
            },
            items: projectCodes["editorItems"],
          })
        : resolve();
    })
      .then(() => {
        return new Promise((resolve) => {
          let isConfirm = projectCodes["disabledCount"] > 0 && projectCodes["items"].length > 0;

          projectCodes["disabledCount"] > 0
            ? handleOpenAlertLayer({
                description: isConfirm ? `주문이 불가능한 상품이 포함되어 있습니다.<br/>주문 가능한 상품만 선택되어<br/>다음 단계로 이동됩니다.` : `주문이 불가능한 상품입니다.`,
                confirm: isConfirm,
                callback: (confirmed) => {
                  ((isConfirm && confirmed) || !isConfirm) && resolve();
                },
              })
            : resolve();
        });
      })
      .then(() => {
        return new Promise((resolve) => {
          projectCodes["samplePackCount"] > 1
            ? handleOpenAlertLayer({
                description: `샘플 팩은 한 개 이상 주문 할 수 없습니다.<br/>선택하신 샘플 팩 중 1개만 선택 되어<br/>다음 단계로 이동 됩니다`,
                confirm: true,
                callback: (confirmed) => {
                  confirmed && resolve();
                },
              })
            : resolve();
        });
      })
      .then(() => {
        let product = [];
        product.push(values);

        let bigIn = {
          products: webCartList.reduce((target2, item, idx2) => {
            let isPush = projectCodes.items.find((pc) => pc === item.projectCode);
            let options = handleGetTemplateSpec(item).reduce((target, hg, idx) => {
              target.push(hg.value);
              return target;
            }, []);

            let obj = {
              id: convertCategory(item.productGroupCode),
              name: item.productName,
              price: item.sellPrice,
              quantity: item.quantity,
              brand: "",
              thumbnail: addDomain(item.thumbnailImageUrl || item.templateThumbnailImageUrl) || "",
              category: convertCategory(item.productGroupCode),
              variant: options.filter((option) => !!option).length > 0 ? options.join("::") : "",
            };

            isPush && target2.push(obj);
            return target2;
          }, []),
        };

        dataLayerBigInCartOrder(bigIn);
        dataLayerMemberOrder(this.getSelectedItems(), handleGetTemplateSpec);
        projectCodes["items"].length > 0 && this.executeSubmit(projectCodes["items"]);
      });
  }

  executeSubmit(codes) {
    let {
      actions: { handleRequestOrderExistence, handleCreateOrder, handleOpenContentsLayer, handleOpenAlertLayer, handleGetTemplateSpec },
    } = this.props;

    !this.isSubmit &&
      Promise.all([(this.isSubmit = true), !this.getExistSamplePack() ? handleRequestOrderExistence() : null])
        .then((results) => {
          let data = results[1];
          let { isExistOrder } = data || {};

          return null;
          /*			return new Promise((resolve, reject) => {
              (data && !isExistOrder)
                ?
                handleOpenContentsLayer(LayerTypes.SAMPLE_PACK, {
                  callback: (confirmed, projectCode) => {
                    resolve(confirmed ? projectCode : null);
                  }
                })
                :
                resolve(null);
            })*/
        })
        .then((projectCode) => {
          return handleCreateOrder(codes.concat(projectCode ? [projectCode] : []));
        })
        .then(() => {
          goMemberOrder();
        })
        .catch((error) => {
          this.isSubmit = false;

          handleOpenAlertLayer({
            description: error,
          });
        });
  }

  componentDidMount() {
    this.initialize();
  }

  initialize() {
    let {
      actions: { handleResetCart, handleRequestOrderPaymentOption, handleRequestCarts, handleOpenContentsLayer, handleChangeFormValue },
    } = this.props;
    let { sortType } = this.state;
    let offsetNoticeTime = checkOverTime("2099-12-13 17:10:00");

    return Promise.all([
      handleResetCart(),
      handleRequestOrderPaymentOption() /*,
      handleRequestCarts({ sortType })*/,
    ])
      .then(() => {
        return handleRequestCarts({ sortType });
      })
      .then((data) => {
        window.addEventListener("message", this.onReceiveMessage);
        window.addEventListener("scroll", this.onScroll);

        let bigIn = [
          ...data.reduce((target2, item, idx2) => {
            target2.push({
              id: convertCategory(item.productGroupCode),
              name: item.templateName,
              price: item.sellPrice,
              quantity: item.quantity,
              brand: "",
              thumbnail: addCdn(item.templateThumbnailImageUrl || item.thumbnailImageUrl),
              category: convertCategory(item.productGroupCode),
              variant: "",
            });
            return target2;
          }, []),
        ];

        dataLayerBigInCartVisit(bigIn);

        return data;
      })
      .then((data) => {
        this.setState(update(this.state, { ready: { $set: true } }));
        return data;
      })
      .then((data) => {
        // Todo 5차까지 완료 후 팝업 삭제 예정(디지털Plus-160089 / 날염 -160030)
        const checkHasDigitalPlusItem = data.some((item) => (item.paperCode && item.paperCode === "160089") || item.paperCode === "160030");

        if (!!checkHasDigitalPlusItem && !getLocalStorageItem("DIGITALPLUS_POPUP")) {
          handleOpenContentsLayer(LayerTypes.CART_DIGITALPLUS);
          setLocalStorageItem("DIGITALPLUS_POPUP", true);
        }

        !getOffsetNoticePopupVisited() &&
          window.setTimeout(() => {
            !!getMarketingAgreePopupVisited() && handleOpenContentsLayer(LayerTypes.OFFSET_NOTICE, {});

            setOffsetNoticePopupVisited();
          }, 500);

        handleChangeFormValue("searchType", "null");
      })
      .catch((error) => {
        window.console.error(error);
      });
  }

  componentWillUnmount() {
    window.removeEventListener("message", this.onReceiveMessage);
    window.removeEventListener("scroll", this.onScroll);
  }

  onChangeKeyword(event) {
    let {
      states,
      actions,
      handleSubmit,
      submitting,
      actions: { handleResetCart, handleCartKeywordSearch, handleChangeFormValue, handleRequestCarts },
    } = this.props;
    let { currentForm } = states;
    let { sortType, isSearch, isStatus } = this.state;
    let cartLocker = this.cartLocker;

    let { webCartList, keyword, searchType } = getDeepValue(currentForm, "values") || {};

    /*console.log("cartLocker   " , webCartList);*/

    if (!isSearch) {
      this.setState(update(this.state, { isSearch: { $set: true }, isStatus: { $set: "ing" } }));
    }

    if (isStatus !== "ing" && !!isSearch) {
      this.setState(update(this.state, { isStatus: { $set: "ing" } }));
    }

    //this.setState(update(this.state, {isStatus : { $set : 'ing' }}));

    cartLocker.length === 0 && (this.cartLocker = webCartList.slice());

    Promise.all([
      handleResetCart(),
      //handleChangeFormValue('keyword',keyword)
    ]).then((res) => {
      //handleCartKeywordSearch((cartLocker.length > 0 ? cartLocker : webCartList),keyword)

      /*!keyword && handleRequestCarts({ sortType });
      !keyword && handleChangeFormValue('keyword', null );

      keyword && handleCartKeywordSearch((cartLocker.length > 0 ? cartLocker : webCartList),keyword)*/

      if (!keyword && searchType === "null") {
        Promise.all([handleRequestCarts({ sortType }), handleChangeFormValue("keyword", null), handleChangeFormValue("searchType", "null")]).then((data) => {
          this.setState(update(this.state, { isStatus: { $set: `${data[0] && data[0].length > 0 ? "ok" : "ok0"}` } }));
        });
      } else {
        Promise.all([handleCartKeywordSearch(cartLocker.length > 0 ? cartLocker : webCartList, keyword, searchType)]).then((data) => {
          this.setState(update(this.state, { isStatus: { $set: `${data[0] && data[0].length > 0 ? "ok" : "ok0"}` } }));
        });
      }
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let {
      states,
      actions: { handleChangeFormValue },
    } = this.props;
    let { currentForm } = states;

    let { webCartList, keyword, searchType } = getDeepValue(currentForm, "values") || {};

    searchType && handleChangeFormValue("searchType", searchType);
    keyword && handleChangeFormValue("keyword", keyword);
  }

  onChangeType(event, value) {
    let {
      actions: { handleChangeFormValue },
    } = this.props;
    this.setState(update(this.state, { searchType: { $set: value } }));
    Promise.all([handleChangeFormValue("searchType", value)]).then(() => {
      this.onChangeKeyword();
    });
  }

  onChangeWord(event) {
    this.setState(update(this.state, { keyword: { $set: event.target.value } }));
  }

  onChangeList() {
    let {
      actions: { handleRequestCartsNotUpdate },
    } = this.props;
    let { sortType } = this.state;
    Promise.all([handleRequestCartsNotUpdate({ sortType })]).then((res) => {
      this.cartLocker = res[0];
    });
  }

  onClickBanner() {
    goEvents("43");
  }

  render() {
    let {
      states,
      actions,
      handleSubmit,
      submitting,
      actions: { handleOpenContentsLayer, handleChangeFormValue },
    } = this.props;
    let { currentForm, searchType } = states;
    let { sortType, fixed, ready, isStatus, isSearch, saveKeyword } = this.state;

    let values = getDeepValue(currentForm, "values") || {};
    let syncErrors = getDeepValue(currentForm, "syncErrors") || {};
    let prices = this.getTotalPrices();

    let fieldsName = this.tables[0]["listName"];
    let totalCount = values && values[fieldsName] ? values[fieldsName].length : 0;
    //let keyword = values && getDeepValue(values, 'keyword');
    let selectAll = prices["count"] >= totalCount;

    let checkEnv = getEnv() === "prd";

    return (
      ready && (
        <div className="cart-wrap">
          <div className="container">
            <div className="top">
              <h1>장바구니</h1>
              <h2>내가 저장한 상품을 관리하고 주문할 수 있어요.</h2>
            </div>

            <div className="middle">
              <form onSubmit={handleSubmit(this.onSubmit)} onKeyPress={this.onKeyPress}>
                <div className="top">
                  <span className="count">담은 상품 {totalCount}개</span>

                  <div className="keywordMap">
                    <Field name={`searchType`} className="box" options={searchType || []} placeholder="전체" onChange={this.onChangeType} component={SelectField} />
                    <div className="searchContents">
                      <Field name="keyword" type="text" className="box cWord" placeholder="프로젝트명 검색" onChange={this.onChangeWord} component={InputField} />

                      <button className={`btn-submit icon icon-cart-search`} type="button" onClick={this.onChangeKeyword} />
                    </div>
                  </div>

                  {/*                  {(checkOverTimeStartEnd('2020-12-16 00:00:00', '2020-12-31 23:59:59') || !checkEnv) && <div className="cartBanner">
                    <img src={`/images/common/banner/cart-banner-201109@2x.png`} onClick={this.onClickBanner}/>
                  </div>}*/}
                </div>

                <div
                  className={`middle ${fixed ? "fixed" : ""}`}
                  ref={(c) => {
                    this.middle = c;
                  }}
                >
                  <div className="inner">
                    <div className="left">
                      <button
                        type="button"
                        className="btn-white-small"
                        onClick={() => {
                          this.onClickSelectAll(!selectAll);
                        }}
                      >
                        {`전체 ${selectAll ? "해제" : "선택"}`}
                      </button>

                      <button type="button" className="btn-white-small" disabled={prices["count"] <= 0} onClick={this.onClickDelete}>
                        선택 삭제
                      </button>

                      <button type="button" className="btn-white-small" disabled={prices["count"] <= 0} onClick={this.onClickEstimate}>
                        선택 견적서 발급
                      </button>
                    </div>

                    <div className="right">
                      {prices["count"] > 0 && (
                        <span>
                          선택한 상품 {prices["count"]}개 / <em>결제 예정 금액 {toCash(prices["sellPrice"])}원</em>
                        </span>
                      )}

                      <button type="submit" disabled={prices["count"] <= 0 || submitting} className="btn-blue-medium">
                        선택 주문하기
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className={`bottom ${fixed ? "fixed" : ""}`}
                  ref={(c) => {
                    this.bottom = c;
                  }}
                >
                  <div className="top">
                    {this.tables.reduce((target, table, index) => {
                      let { labelName, listName } = table;
                      let list = values[listName] || [];

                      target.push(
                        React.cloneElement(<FieldArray />, {
                          states,
                          actions: {
                            ...actions,
                            handleRefresh: this.onRefresh,
                            handleGoEditor: this.onClickGoEditor,
                            handleSelectedAll: this.onClickSelectAll,
                            handleExecuteSubmit: this.executeSubmit,
                            handleOnChangeList: this.onChangeList,
                          },
                          name: listName,
                          label: labelName,
                          values: list || [],
                          originValues: values,
                          isSearch,
                          isStatus,
                          syncErrors: syncErrors[listName] || [],
                          component: CartProduct,
                          withRef: true,
                          ref: (c) => {
                            this.products[index] = c;
                          },
                        }),
                      );

                      return target;
                    }, [])}
                  </div>

                  <div className="bottom">
                    <table frameBorder={0}>
                      <caption>
                        <span className="blind">결제 예정 금액</span>
                      </caption>
                      <colgroup>
                        <col style={{ width: "256px" }} />
                        <col style={{ width: "28px" }} />
                        <col style={{ width: "256px" }} />
                        <col style={{ width: "28px" }} />
                        <col style={{ width: "256px" }} />
                        <col style={{ width: "28px" }} />
                        <col style={{ width: "316px" }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>상품 금액</th>
                          <th>&nbsp;</th>
                          <th>상품 할인</th>
                          <th>&nbsp;</th>
                          <th>배송비</th>
                          <th>&nbsp;</th>
                          <th>결제 예정 금액</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{toCash(prices["price"])}원</td>
                          <td>
                            <span className="icon icon-minus-2828" />
                          </td>
                          <td>{toCash(prices["sellPrice"] - prices["price"])}원</td>
                          <td>
                            <span className="icon icon-plus-2828" />
                          </td>
                          <td>{toCash(prices["deliveryPrice"])}원</td>
                          <td>
                            <span className="icon icon-total-2828" />
                          </td>
                          <td className="total">{toCash(prices["sellPrice"] + prices["deliveryPrice"])}원</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </form>
            </div>

            <div className="bottom">
              <Banner />

              {React.cloneElement(<Attention />, {
                value: {
                  title: "장바구니 이용안내",
                  children: [{ value: "저장한 디자인과 상품은 영구적으로 보관할 수 있습니다. (휴면계정은 별도 정책에 따름)" }, { value: "효과나 칼선 옵션을 변경하면 편집화면을 확인 후 저장해야 주문 가능합니다." }, { value: "[편집하기]를 클릭하여 언제든 디자인을 수정하고 재편집 할 수 있습니다." }, { value: "상품의 옵션이나 디자인을 약간만 수정해서 유사한 상품을 주문하려면 [복사하기]를 사용해보세요." }, { value: "삭제한 디자인은 복구할 수 없습니다. (단, 주문내역이 있는 경우 재주문 가능)" }, { value: "견적서는 선택한 상품의 결제 예정 금액으로 발급되며, 쿠폰/머니 등을 사용하실 경우 주문 후 주문/배송 내역에서 할인 적용된 금액으로 발급 받으실 수 있습니다." }],
                },
              })}
            </div>
          </div>
        </div>
      )
    );
  }
}

const formName = "member-cart";

const mapStateToProps = (state) => {
  let {
    cart: { list },
  } = state;

  return {
    states: {
      state,
      user: state.user,
      config: state.config,
      order: state.order,
      product: state.product,
      currentForm: state.form[formName],
      searchType: state.cart.searchType,
    },
    initialValues: list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),

      handleExecuteAfterUserLogin: () => dispatch(ActionCommon.executeAfterUserLogin()),
      handleGetTemplateOptions: (data) => dispatch(ActionCommon.getTemplateOptions(data)),
      handleGetTemplateSpec: (data) => dispatch(ActionCommon.getTemplateSpec(data)),
      handleGetTemplateTitle: (data) => dispatch(ActionCommon.getTemplateTitle(data)),

      handleResetCart: () => dispatch(ActionCart.resetCart()),
      handleRequestCarts: (params) => dispatch(ActionCart.requestCarts(params)),
      handleUpdateCartItem: (data, mode) => dispatch(ActionCart.updateCartItem(data, mode)),
      handleRequestCartByProjectCode: (projectCode) => dispatch(ActionCart.requestCartByProjectCode(projectCode)),
      handleDeleteCartByProjectCode: (projectCodes) => dispatch(ActionCart.deleteCartByProjectCode(projectCodes)),
      handleUpdateCartQuantityByProjectCode: (projectCode, quantity, params) => dispatch(ActionCart.updateCartQuantityByProjectCode(projectCode, quantity, params)),
      handleRequestCartEditCheck: (projectCode) => dispatch(ActionCart.requestCartEditCheck(projectCode)),
      handleCreateCartCopyByProjectCode: (projectCode) => dispatch(ActionCart.createCartCopyByProjectCode(projectCode)),
      handleUpdateCartProjectNameByProjectCode: (projectCode, params) => dispatch(ActionCart.updateCartProjectNameByProjectCode(projectCode, params)),
      handleUpdateCartOptionByProjectCode: (projectCode, params) => dispatch(ActionCart.updateCartOptionByProjectCode(projectCode, params)),
      handleCreateCartSaveAs: (projectCode, projectName) => dispatch(ActionCart.createCartSaveAs(projectCode, projectName)),

      handleRequestOrderExistence: () => dispatch(ActionOrder.requestOrderExistence()),
      handleCreateOrder: (projectCodes) => dispatch(ActionOrder.createOrder(projectCodes)),
      handleRequestOrderPaymentOption: () => dispatch(ActionOrder.requestOrderPaymentOption()),
      handleGetOrderDeliveryPrices: () => dispatch(ActionOrder.getOrderDeliveryPrices()),

      handleUpdateEditor: (data, templateUseType) => dispatch(ActionEditor.updateEditor(data, templateUseType)),

      handleGetProductByProductGroupCode: (productGroupCode) => dispatch(ActionProduct.getProductByProductGroupCode(productGroupCode)),

      handleRequestStoreOptionType: (productCode) => dispatch(ActionStore.requestStoreOptionType(productCode)),
      handleRequestStoreDefault: (category, subCategory) => dispatch(ActionStore.requestStoreDefault(category, subCategory)),
      handleRequestStoreOptions: (category, subCategory, projectCode) => dispatch(ActionStore.requestStoreOptions(category, subCategory, projectCode)),
      handleRequestStoreOptionEnable: (category, subCategory, params) => dispatch(ActionStore.requestStoreOptionEnable(category, subCategory, params)),
      handleRequestStoreEssential: (category, subCategory, params) => dispatch(ActionStore.requestStoreEssential(category, subCategory, params)),

      handleCartKeywordSearch: (data, keyword, searchType) => dispatch(ActionCart.keywordSortCarts(data, keyword, searchType)),

      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
      handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),

      handleRequestCartsNotUpdate: (params) => dispatch(ActionCart.requestCartsNotUpdate(params)),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: formName,
    enableReinitialize: true,
  })(Cart),
);
