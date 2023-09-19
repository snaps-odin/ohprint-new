import React from "react";
import update from "react-addons-update";
import { connect } from "react-redux";
import { change, Field, reduxForm } from "redux-form";
import asyncMap from "async/map";

import { LayerTypes } from "constants/index";
import { ActionCommon, ActionBag, ActionCart, ActionLayer, ActionUI, ActionEditor, ActionProduct } from "actions/index";
import { addDomain, goStore, goEditor, goMemberCart } from "utils/url";
import { getDatasetByName } from "utils/dom";
import { toCash, toDate } from "utils/format";
import { getDeepValue } from "utils/json";

import { CheckBoxField, SelectField } from "components/common/fields";
import Pagination from "components/common/pagination";
import ThumbnailProduct from "components/common/thumbnail-product";
import Banner from "components/common/banner";
import Attention from "components/common/attention";

class Bag extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      existed: false,
      selectedAll: false,
      items: [],
      offset: 0,
      limit: 3 * 5,
      totalCount: 0,
    };

    this.onChangeCondition = this.onChangeCondition.bind(this);
    this.onClickStoreIntro = this.onClickStoreIntro.bind(this);
    this.onClickSelectAll = this.onClickSelectAll.bind(this);
    this.onClickSelectedDelete = this.onClickSelectedDelete.bind(this);
    this.onClickSelectedSendToCart = this.onClickSelectedSendToCart.bind(this);
    this.onClickSendToCart = this.onClickSendToCart.bind(this);
    this.onClickCopy = this.onClickCopy.bind(this);
    this.onClickEditProject = this.onClickEditProject.bind(this);

    this.onChangeOffset = this.onChangeOffset.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeCondition(event, value) {
    window.setTimeout(() => {
      this.requestBags(0);
    }, 0);
  }

  onClickStoreIntro(event) {
    let category = getDatasetByName(event.currentTarget, "category");

    category === "poster" ? goStore("intro", category, "defaults") : goStore("overview", category);
  }

  onClickSelectAll(event) {
    this.setSelectAll(!this.state["selectedAll"]);
  }

  onClickSelectedDelete(event) {
    let {
      states: {
        currentForm: {
          values: { selected },
        },
      },
      actions: { handleDeleteBagByProjectCodes, handleOpenAlertLayer },
    } = this.props;
    let { items, offset } = this.state;

    let projectCodes = items.reduce((target, item, index) => {
      selected[index] && target.push(item["projectCode"]);

      return target;
    }, []);

    projectCodes.length > 0 &&
      handleOpenAlertLayer({
        description: "정말 삭제 하시겠습니까?<br/>장바구니에 담긴 동일한 상품도 삭제됩니다.",
        confirm: true,
        disableSubmitClose: true,
        callback: (confirmed) => {
          confirmed &&
            handleDeleteBagByProjectCodes(projectCodes)
              .then(() => {
                handleOpenAlertLayer({
                  description: `${projectCodes.length === 1 ? "선택한" : `총 ${projectCodes.length}개의`} 디자인이 삭제 되었습니다.`,
                  callback: () => {
                    this.requestBags(offset);
                  },
                });
              })
              .catch((error) => {
                handleOpenAlertLayer({
                  description: error,
                });
              });
        },
      });
  }

  onClickCopy(event) {
    let {
      actions: { handleCreateBagCopyByProjectCode, handleOpenAlertLayer },
    } = this.props;
    let { offset } = this.state;

    let projectCode = getDatasetByName(event.currentTarget, "project-code");

    Promise.all([
      handleOpenAlertLayer({
        description: "처리중 입니다.",
        disableButton: true,
      }),
      handleCreateBagCopyByProjectCode(projectCode),
    ])
      .then(() => {
        handleOpenAlertLayer({
          description: "선택된 디자인이 복사되었습니다.",
          callback: () => {
            this.requestBags(offset);
          },
        });
      })
      .catch((error) => {
        handleOpenAlertLayer({
          description: error,
        });
      });
  }

  onClickSelectedSendToCart(event) {
    let {
      states: {
        currentForm: {
          values: { selected },
        },
      },
    } = this.props;
    let { items } = this.state;

    this.sendToCart(
      items.reduce((target, item, index) => {
        selected[index] && target.push(item);

        return target;
      }, []),
    );
  }

  onClickSendToCart(event) {
    let { items } = this.state;

    let projectCode = getDatasetByName(event.currentTarget, "project-code");

    this.sendToCart([items.find((item) => item["projectCode"] === projectCode)]);
  }

  onChangeOffset(offset) {
    this.requestBags(offset);
  }

  onSubmit(values) {}

  getOptions() {
    let {
      states: {
        product: { productGroups },
      },
    } = this.props;

    return (productGroups || []).reduce(
      (target, group) => {
        !group["disabled"] &&
          target.push({
            label: group["label"],
            value: group["value"],
          });

        return target;
      },
      [{ label: "전체", value: "" }],
    );
  }

  setSelectAll(bool) {
    let {
      actions: { handleChangeFormValue },
    } = this.props;
    let { items } = this.state;

    Promise.all([handleChangeFormValue("selected", new Array(items.length).fill(bool))]).then(() => {
      this.setState({ selectedAll: bool });
    });
  }

  sendToCart(projects) {
    let {
      actions: { handleOpenContentsLayer, handleOpenLoadingLayer, handleCloseLoadingLayer, handleOpenAlertLayer, handleCreateCartByProjectCode },
    } = this.props;

    handleOpenContentsLayer(LayerTypes.TEMPLATE_CONFIRM, {
      callback: (confirmed) => {
        confirmed &&
          Promise.all([
            handleOpenLoadingLayer(),
            new Promise((resolve, reject) =>
              asyncMap(
                projects,
                (project, callback) => {
                  project["finishStatus"].match("Y")
                    ? handleCreateCartByProjectCode(project["projectCode"])
                        .then((data) => {
                          callback(null, { project, result: "Y", message: data["message"] });
                        })
                        .catch(() => {
                          callback(null, { project, result: "N" });
                        })
                    : callback(null, { project, result: "D" });
                },
                (error, results) => {
                  resolve(results);
                },
              ),
            ),
          ]).then((results) => {
            handleCloseLoadingLayer();

            let isSuccess = results[1].find((item) => item["result"].match(/Y/));
            let isAllSuccess = !results[1].find((item) => item["result"].match(/N|D/));
            let eventMessage = (results[1].find((item) => item["message"]) || {})["message"];

            if (isAllSuccess) {
              !eventMessage
                ? goMemberCart()
                : handleOpenAlertLayer({
                    description: eventMessage,
                    callback: () => {
                      goMemberCart();
                    },
                  });
            } else {
              let description = results[1]
                .reduce((target, item) => {
                  let { project, result } = item;

                  let index = result.match(/Y/) ? 0 : result.match(/N/) ? 1 : 2;

                  !target[index] && (target[index] = { title: null, count: 0 });
                  !target[index]["title"] && (target[index]["title"] = `${project["productGroupName"]} [${project["projectName"]}]`);
                  target[index]["count"] += 1;

                  return target;
                }, [])
                .reduce((target, item, index) => {
                  let { title, count } = item;

                  target && title && (target += "<br/><br/>");
                  title && (target += `${title}${count > 1 ? `외 ${count - 1}건` : ""}에 대한 `);
                  title && index === 0 && (target += "디자인을<br/>장바구니에 담았습니다.");
                  title && index === 1 && (target += "디자인이<br/>일시적인 오류로 인해 장바구니 이동이 실패하였습니다.<br/>다시 시도 해 주세요");
                  title && index === 2 && (target += "디자인은<br/>미완료된 디자인으로 장바구니 이동에 실패하였습니다.<br/>옵션 수량 항목을 확인 후 다시 시도 해 주세요.");

                  return target;
                }, "");

              handleOpenAlertLayer({
                description: `${description ? `${description}<br/>` : ""}${isSuccess ? "<br/>장바구니로 이동하시겠습니까?" : ""}`,
                confirm: isSuccess,
                disableSubmitClose: !!eventMessage,
                callback: (confirmed) => {
                  confirmed &&
                    (!eventMessage
                      ? goMemberCart()
                      : handleOpenAlertLayer({
                          description: eventMessage,
                          callback: () => {
                            goMemberCart();
                          },
                        }));
                },
              });
            }
          });
      },
    });
  }

  onClickEditProject(event) {
    let {
      actions: { handleUpdateEditor, handleRequestBagEditCheck, handleOpenContentsLayer },
    } = this.props;
    let { items } = this.state;

    let index = getDatasetByName(event.currentTarget, "index");
    let item = items[index];

    handleRequestBagEditCheck(item["projectCode"]).then((result) => {
      result["isEditProject"]
        ? Promise.all([
            handleUpdateEditor(
              {
                productCode: item["productCode"],
                projectCode: item["projectCode"],
                templateCode: item["templateCode"],
              },
              item["templateUseType"],
            ),
          ]).then(() => {
            goEditor();
          })
        : handleOpenContentsLayer(LayerTypes.PROJECT_SAVE_AS, { type: "bag", item });
    });
  }

  requestBags(offset) {
    let { states, actions } = this.props;
    let { limit } = this.state;
    let {
      currentForm: {
        values: { sort, productGroupCode },
      },
    } = states;
    let { handleRequestBags, handleUpdateUIScroll } = actions;

    let params = {
      offset: offset || 0,
      sort,
      productGroupCode,
      limit,
    };

    handleRequestBags(params)
      .then((result) => {
        !this.state.existed && Number(result["totalCount"]) > 0 && this.setState({ existed: true });

        this.setState(
          update(this.state, {
            items: { $set: result["bagList"] },
            offset: { $set: offset },
            totalCount: { $set: Number(result["totalCount"]) },
          }),
        );
      })
      .then(() => {
        this.setSelectAll(false);
      })
      .then(() => {
        handleUpdateUIScroll(0);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    let {
      states: { currentForm: prevForm },
    } = prevProps;
    let {
      states: { currentForm },
    } = this.props;

    !prevForm && currentForm && this.requestBags(0);

    !Object.is(getDeepValue(prevForm, "values.selected"), getDeepValue(currentForm, "values.selected")) &&
      Promise.all([(getDeepValue(currentForm, "values.selected") || []).every((item) => item)]).then((results) => {
        this.setState({ selectedAll: results[0] });
      });
  }

  render() {
    let { states, actions, handleSubmit } = this.props;
    let {
      config: {
        url: { cdn: cdnUrl },
      },
      currentForm,
    } = states;
    let { handleGetTemplateOptions } = actions;

    let { selectedAll, existed, items, offset, limit, totalCount } = this.state;

    let selected = (currentForm && currentForm["values"] && currentForm["values"]["selected"] && currentForm["values"]["selected"].find((item) => item)) || false;

    return (
      <div className="bag-wrap">
        <div className="container">
          <div className="top">
            <h1>나의 저장함</h1>
            <h2>편집기를 통하여 직접 제작, 편집하고 저장하신 디자인 템플릿을 확인해보실 수 있습니다.</h2>
          </div>

          <div className="middle">
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className="bag-product-wrap">
                <div className="top">
                  <span className="left">
                    저장한 디자인<em>({totalCount})</em>
                  </span>
                  <span className="right">
                    <Field
                      name="sort"
                      className="box"
                      width={104}
                      placeholder="선택"
                      disabled={totalCount < 1 && !existed}
                      options={[
                        { label: "최신 저장순", value: "-" },
                        { label: "오래된 저장순", value: "+" },
                      ]}
                      onChange={this.onChangeCondition}
                      component={SelectField}
                    />

                    <Field name="productGroupCode" className="box" width={106} height={206} placeholder="선택" disabled={totalCount < 1 && !existed} options={this.getOptions()} onChange={this.onChangeCondition} component={SelectField} />
                  </span>
                </div>
                <div className="middle">
                  <div className="top">
                    <span className="left">
                      <button type="button" className="btn-white-small" onClick={this.onClickSelectAll} disabled={items && items.length < 1}>
                        {`전체 ${selectedAll ? "해제" : "선택"}`}
                      </button>

                      <button type="button" className="btn-white-small" disabled={!selected} onClick={this.onClickSelectedDelete}>
                        선택 삭제
                      </button>
                    </span>
                    <span className="right">
                      <button type="button" className="btn-blue-medium" disabled={!selected} onClick={this.onClickSelectedSendToCart}>
                        선택상품 장바구니
                      </button>
                    </span>
                  </div>

                  <ul className="middle">
                    {(items || []).length < 1 ? (
                      <li className="nothing">
                        <h2>저장한 디자인이 없습니다.</h2>
                        <div>
                          오프린트미의 디자인으로 원하는 정보를 담아 나만의 디자인을 완성 할 수 있습니다.
                          <br />
                          감각적이고 유니크한 상품들을 지금 만나 보세요.
                        </div>
                        <div>
                          {[
                            { label: "명함", category: "business-card" },
                            { label: "스티커", category: "sticker" },
                            { label: "배너/현수막", category: "banner" },
                            { label: "사인/포스터", category: "signs-posters" },
                            { label: "홍보물", category: "pr" },
                            { label: "카드", category: "card" },
                          ].reduce((target, item, index) => {
                            index !== 0 && target.push(<span className="line">|</span>);

                            target.push(
                              <button type="button" data-category={item["category"]} onClick={this.onClickStoreIntro}>
                                {item["label"]}
                              </button>,
                            );

                            return target;
                          }, [])}
                        </div>
                      </li>
                    ) : (
                      (items || []).reduce((target, item, index) => {
                        let options = (handleGetTemplateOptions(item) || [])
                          .reduce((target, option) => {
                            let { label, value } = option;

                            !(label || "").match(/디자인/i) && target.push(value);

                            return target;
                          }, [])
                          .join(" / ");

                        target.push(
                          <li key={item["projectCode"]} data-project-code={item["projectCode"]}>
                            <div className="top">
                              {React.cloneElement(<ThumbnailProduct />, {
                                imageUrl: addDomain(cdnUrl, item["thumbnailImageUrl"] || item["templateThumbnailImageUrl"]),
                                paperCode: item["paperCode"],
                                productCode: item["productCode"],
                                frameCode: item["frameCode"],
                                frameOptionCode: item["frameOptionCode"],
                                colorCode: item["frameColorCode"],
                                directionType: item["thumbnailDirectionType"],
                                skinVersion: item["skinVersion"],
                                type: "defaults",
                              })}

                              <span className="checkbox">
                                <Field name={`selected[${index}]`} component={CheckBoxField} />
                              </span>

                              {item["isNowInCart"] && <span className="cart">장바구니에 담겨 있어요.</span>}

                              {(!(item["finishStatus"] || "").match(/Y/) || item["isDisabledOrder"]) && (
                                <div className="disabled">
                                  <span className="bg" />
                                  <span className="warning icon-caution-4034">
                                    {item["noticeMessage"] ? (
                                      <span>{item["noticeMessage"]}</span>
                                    ) : (
                                      <span>
                                        미완료된 디자인 입니다.
                                        <br />
                                        작업을 완료 해 주세요.
                                      </span>
                                    )}
                                  </span>
                                </div>
                              )}
                            </div>

                            <div className="middle">
                              <h2>{`${item["productGroupName"]} [${item["projectName"]}]`}</h2>
                              <span>옵션 : {options}</span>
                              <span>가격 : {toCash(item["sellPrice"])}원</span>
                              <span>최종 편집일 : {toDate(item["lastUpdate"], "YYYY.MM.DD")}</span>
                              {item["orderedDate"] && <span>주문일 : {toDate(item["orderedDate"], "YYYY.MM.DD")}</span>}
                            </div>

                            <div className="bottom">
                              <span>
                                <button type="button" data-index={index} disabled={item["isDisabledOrder"]} onClick={this.onClickEditProject}>
                                  편집하기
                                </button>
                                <span className="line">|</span>
                                <button type="button" data-project-code={item["projectCode"]} disabled={item["isDisabledOrder"]} onClick={this.onClickCopy}>
                                  복사하기
                                </button>
                              </span>

                              <span>
                                <button type="button" data-project-code={item["projectCode"]} disabled={item["isDisabledOrder"] || !item["finishStatus"].match("Y")} onClick={this.onClickSendToCart}>
                                  장바구니 담기
                                </button>
                              </span>
                            </div>
                          </li>,
                        );

                        return target;
                      }, [])
                    )}
                  </ul>

                  <div className="bottom">
                    <div className="top">
                      <span className="left">
                        <button type="button" className="btn-white-small" onClick={this.onClickSelectAll} disabled={items && items.length < 1}>
                          {`전체 ${selectedAll ? "해제" : "선택"}`}
                        </button>

                        <button type="button" className="btn-white-small" disabled={!selected} onClick={this.onClickSelectedDelete}>
                          선택 삭제
                        </button>
                      </span>
                      <span className="right">
                        <button type="button" className="btn-blue-medium" disabled={!selected} onClick={this.onClickSelectedSendToCart}>
                          선택상품 장바구니
                        </button>
                      </span>
                    </div>

                    {totalCount > 0 &&
                      React.cloneElement(<Pagination />, {
                        offset,
                        limit,
                        totalCount,
                        handleChangeOffset: this.onChangeOffset,
                      })}
                  </div>
                </div>
                <div className="bottom" />
              </div>
            </form>
          </div>

          <div className="bottom">
            <Banner />

            {React.cloneElement(<Attention />, {
              value: {
                title: "저장함 이용안내",
                children: [
                  { value: "저장함 디자인은 영구적인 보관이 가능합니다." },
                  { value: "완성되지 않은 디자인이나, 수정하고 싶은 디자인이 있다면 ‘편집하기’ 버튼을 통해 디자인 템플릿을 언제든지 수정할 수 있습니다." },
                  { value: `한 번이라도 구매한 상품의 경우 ‘편집하기’ 버튼 선택 시 다른 이름으로 저장 후 편집을 진행할 수 있습니다.` },
                  { value: `‘복사하기’ 기능을 사용하면 선택한 디자인템플릿이 복사되어 하나의 디자인으로 여러 개의 콘텐츠를 쉽게 변형하여 제작할 수 있습니다.` },
                  { value: "장바구니에 담긴 디자인의 경우 ‘장바구니에 담겨있어요.’라는 안내가 제공됩니다." },
                  { value: "저장함에서 디자인 수정 시 장바구니에 담긴 동일한 디자인도 수정한 내용으로 변경되며, 장바구니에 담긴 디자인을 삭제할 경우 장바구니에 담긴 동일한 디자인도 삭제됩니다." },
                ],
              },
            })}
          </div>
        </div>
      </div>
    );
  }
}

const formName = "member-bag";

const mapStateToProps = (state) => {
  return {
    states: {
      config: state.config,
      product: state.product,
      currentForm: state.form[formName],
    },
    initialValues: {
      sort: "-",
      productGroupCode: "",
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),

      handleGetTemplateOptions: (data) => dispatch(ActionCommon.getTemplateOptions(data)),

      handleRequestBags: (params) => dispatch(ActionBag.requestBags(params)),
      handleCreateBagCopyByProjectCode: (projectCode) => dispatch(ActionBag.createBagCopyByProjectCode(projectCode)),
      handleDeleteBagByProjectCodes: (projectCodes) => dispatch(ActionBag.deleteBagByProjectCodes(projectCodes)),
      handleRequestBagEditCheck: (projectCode) => dispatch(ActionBag.requestBagEditCheck(projectCode)),

      handleCreateCartByProjectCode: (projectCode) => dispatch(ActionCart.createCartByProjectCode(projectCode)),

      handleGetProductByProductGroupCode: (productGroupCode) => dispatch(ActionProduct.getProductByProductGroupCode(productGroupCode)),

      handleCloseLayer: () => dispatch(ActionLayer.closeLayer()),
      handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),
      handleCloseAlertLayer: () => dispatch(ActionLayer.closeAlertLayer()),
      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
      handleOpenLoadingLayer: () => dispatch(ActionLayer.openLoadingLayer()),
      handleCloseLoadingLayer: () => dispatch(ActionLayer.closeLoadingLayer()),

      handleUpdateUIScroll: (targetY, easingType) => dispatch(ActionUI.updateUIScroll(targetY, easingType)),

      handleUpdateEditor: (data, templateUseType) => dispatch(ActionEditor.updateEditor(data, templateUseType)),
    },
  };
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: formName,
    enableReinitialize: true,
  })(Bag),
);
