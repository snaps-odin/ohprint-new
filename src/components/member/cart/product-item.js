import React from "react";
import update from "react-addons-update";
import { Field } from "redux-form";
import { format } from "url";

import { LayerTypes } from "constants/index";
import { addDomain, getEditorDomainUrl } from "utils/url";
import { getDatasetByName } from "utils/dom";
import { toCash, toDate } from "utils/format";
import { getDeepValue, isEmptyObject } from "utils/json";
import { breaklines } from "utils/string";

import * as Validate from "utils/validate";
import * as Normalize from "utils/normalize";

import { InputField, CheckBoxField, SelectField } from "components/common/fields";
import ThumbnailProduct from "components/common/thumbnail-product";
import CartProductOption from "./product-option";
import CartProductQuantity from "./product-quantity";
import { requestAlarmCount } from "../../../actions/alarm";

import { dataLayerMemberOrder } from "configs/google-analytics/ga";
import ThumbnailProductCalendar from "components/common/thumbnail-product-calendar";
import { dataLayerBigInCartOrder } from "../../../configs/google-analytics/ga";
import { convertCategory } from "../../../configs/google-analytics/common";

export default class CartProductItem extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      editName: false,
      editOption: false,
      fetching: false,
      editor: {
        ready: false,
        params: null,
        timestamp: null,
      },
      offsetException: false,
    };

    this.field = {
      projectName: "",
    };

    this.isCopy = false;

    this.editor = null;

    this.onClickOpenEditName = this.onClickOpenEditName.bind(this);
    this.onClickCancelEditName = this.onClickCancelEditName.bind(this);
    this.onClickUpdateEditName = this.onClickUpdateEditName.bind(this);

    this.onClickOpenEditOption = this.onClickOpenEditOption.bind(this);
    this.onClickCancelEditOption = this.onClickCancelEditOption.bind(this);
    this.onClickUpdateEditOption = this.onClickUpdateEditOption.bind(this);

    this.onChangeQuantity = this.onChangeQuantity.bind(this);

    this.onClickCopyProject = this.onClickCopyProject.bind(this);
    this.onClickEditProject = this.onClickEditProject.bind(this);
    this.onClickOrderProject = this.onClickOrderProject.bind(this);

    this.openThumbnailEditor = this.openThumbnailEditor.bind(this);
    this.closeThumbnailEditor = this.closeThumbnailEditor.bind(this);
    this.executeEditor = this.executeEditor.bind(this);
  }

  onClickOpenEditName(event) {
    let { value } = this.props;

    Object.keys(this.field).map((keyName) => {
      this.field[keyName] = value[keyName];
    });

    this.setState(update(this.state, { editName: { $set: true } }));
  }

  onClickCancelEditName(event) {
    let {
      actions: { handleChangeFormValue },
      field,
    } = this.props;

    Promise.all([this.setState(update(this.state, { editName: { $set: false } }))]).then(() => {
      Object.keys(this.field).map((keyName) => {
        handleChangeFormValue(`${field}.${keyName}`, this.field[keyName]);
      });
    });
  }

  onClickUpdateEditName(event) {
    let { actions, syncError, value } = this.props;
    let { handleUpdateCartProjectNameByProjectCode, handleRequestCartByProjectCode, handleOnChangeList } = actions;
    let { projectCode, projectName } = value;

    !syncError &&
      handleUpdateCartProjectNameByProjectCode(projectCode, { projectName })
        .then(() => {
          handleOnChangeList();

          return handleRequestCartByProjectCode(projectCode);
        })
        .then(() => {
          this.setState(update(this.state, { editName: { $set: false } }));
        });
  }

  onClickOpenEditOption(event) {
    this.setState(update(this.state, { editOption: { $set: true }, editor: { ready: { $set: false } } }));
  }

  onClickCancelEditOption(event) {
    this.setState(update(this.state, { editOption: { $set: false } }));
  }

  onClickUpdateEditOption(value) {
    let { actions, field } = this.props;
    let { handleOpenAlertLayer, handleChangeFormValue } = actions;
    let { productGroupCode, offsetPrint, designCount } = value;
    let offsetException = false;

    let { isThumbnailImageChange, isOptionChange } = value;

    new Promise((resolve) => {
      isThumbnailImageChange
        ? this.openThumbnailEditor()
        : isOptionChange &&
          handleOpenAlertLayer({
            description: "편집이 필요한 옵션이 변경되어<br/>편집화면으로 이동합니다.",
            callback: () => {
              this.executeEditor();
            },
          });

      resolve();
    })
      .then(() => {
        if ((productGroupCode === "101" || productGroupCode === "102") && offsetPrint === "Y" && designCount > 1) {
          offsetException = true;
        }

        this.setState(update(this.state, { offsetException: { $set: offsetException } }));

        handleChangeFormValue(field, value);
      })
      .then(() => {
        this.setState(
          update(this.state, {
            editOption: { $set: false },
          }),
        );
      });
  }

  onChangeQuantity(event, value, previousValue) {
    let { actions, value: currentValue, field, syncError } = this.props;
    let { handleUpdateCartQuantityByProjectCode, handleChangeFormValue, handleOpenAlertLayer } = actions;
    let { projectCode, attachCount, quantity } = currentValue;
    let { fetching } = this.state;
    let offsetPrint = this.props.value.offsetPrint;
    let productGroupCode = this.props.value.productGroupCode;

    let isSyncError = !syncError ? !syncError : isEmptyObject(syncError);

    event["type"] !== "change" &&
      isSyncError &&
      !fetching &&
      Promise.all([this.setState(update(this.state, { fetching: { $set: true } }))])
        .then(() => {
          return new Promise((resolve, reject) => {
            attachCount && !Object.is(+quantity, +value)
              ? handleOpenAlertLayer({
                  description: `변경된 수량에 맞는 엑셀파일을<br/>다시 업로드해 주셔야 합니다.<br/>수량을 변경 하시겠습니까?`,
                  confirm: true,
                  callback: (confirmed) => {
                    confirmed ? resolve() : reject();
                  },
                })
              : resolve();
          });
        })
        .then(() => {
          handleUpdateCartQuantityByProjectCode(projectCode, value).then((result) => {
            if (result.offsetPrint !== offsetPrint) {
              let min_offset_desc = result.offsetPrint === "Y" ? `<em>${result.offsetCount}장 이상 주문 시 옵셋으로 인쇄됩니다.</em><br/>` : "";

              handleOpenAlertLayer({
                description: min_offset_desc + "편집이 필요한 옵션이 변경되어<br/>편집화면으로 이동합니다.",
                callback: () => {
                  this.executeEditor();
                },
              });
            }

            ["price", "sellPrice", "stickerAddPrice"].map((keyName) => {
              handleChangeFormValue(`${field}.${keyName}`, result[keyName]);
            });
          });
        })
        .then(() => {
          this.setState(update(this.state, { fetching: { $set: false } }));
        })
        .catch(() => {
          handleChangeFormValue(`${field}.quantity`, previousValue);

          this.setState(update(this.state, { fetching: { $set: false } }));
        });
  }

  onClickCopyProject(event) {
    let {
      actions: { handleRefresh, handleCreateCartCopyByProjectCode, handleOpenAlertLayer },
    } = this.props;

    let projectCode = getDatasetByName(event.currentTarget, "project-code");

    !this.isCopy &&
      Promise.all([
        (this.isCopy = true),
        handleOpenAlertLayer({
          description: "처리중 입니다.",
          disableButton: true,
        }),
        handleCreateCartCopyByProjectCode(projectCode),
      ])
        .then(() => {
          this.setState(
            update(this.state, {
              editName: { $set: false },
              editOption: { $set: false },
            }),
          );
        })
        .then(() => {
          handleOpenAlertLayer({
            description: "선택된 디자인이 복사되었습니다.",
            callback: () => {
              handleRefresh();
            },
          });
        })
        .catch((error) => {
          this.isCopy = false;

          handleOpenAlertLayer({
            description: error,
          });
        });
  }

  onClickEditProject(event) {
    let { value, actions } = this.props;
    let { projectCode, projectName, offsetPrint } = value;
    let { handleGoEditor, handleRequestCartEditCheck, handleCreateCartSaveAs } = actions;

    offsetPrint && (value = Object.assign({}, value, { offsetPrint: "delete" }));

    handleRequestCartEditCheck(projectCode)
      .then((result) => {
        return !result["isEditProject"] ? handleCreateCartSaveAs(result["projectCode"], projectName) : result;
      })
      .then((result) => {
        handleGoEditor(
          Object.assign({}, value, {
            projectCode: result["projectCode"],
          }),
        );
      });
  }

  onClickOrderProject(event) {
    let { value, actions } = this.props;
    let { projectCode, isDisabledOrder } = value || {};
    let { handleOpenContentsLayer, handleOpenAlertLayer, handleExecuteSubmit, handleGoEditor, handleGetTemplateSpec } = actions;

    new Promise((resolve) => {
      isDisabledOrder
        ? handleOpenContentsLayer(LayerTypes.PROJECT_EDIT, {
            actions: {
              handleGoEditor,
            },
            items: value,
          })
        : resolve();
    })
      .then(() => {
        return new Promise((resolve) => {
          isDisabledOrder
            ? handleOpenAlertLayer({
                description: `제작가이드가 변경된 상품 입니다.<br/>삭제 후, <em>새로운 가이드에 맞게 제작해 주세요</em>`,
                callback: () => {
                  resolve();
                },
              })
            : resolve();
        });
      })
      .then(() => {
        let products = [];
        products.push(value);

        let options = handleGetTemplateSpec(value).reduce((target, hg, idx) => {
          target.push(hg.value);
          return target;
        }, []);

        let bigIn = {
          id: convertCategory(value.productGroupCode),
          name: value.productName,
          price: value.sellPrice,
          quantity: value.quantity,
          brand: "",
          thumbnail: addDomain(value.thumbnailImageUrl || value.templateThumbnailImageUrl) || "",
          category: convertCategory(value.productGroupCode),
          variant: options.filter((option) => !!option).length > 0 ? options.join("::") : "",
        };

        dataLayerBigInCartOrder(bigIn);
        dataLayerMemberOrder(products, handleGetTemplateSpec);
        handleExecuteSubmit([projectCode]);
      });
  }

  executeEditor(event) {
    let { value, actions } = this.props;
    let { projectCode, projectName } = value;
    let { handleGoEditor, handleRequestCartEditCheck, handleCreateCartSaveAs } = actions;

    handleRequestCartEditCheck(projectCode)
      .then((result) => {
        return !result["isEditProject"] ? handleCreateCartSaveAs(result["projectCode"], projectName) : result;
      })
      .then((result) => {
        handleGoEditor(
          Object.assign({}, value, {
            projectCode: result["projectCode"],
          }),
        );
      })
      .then(() => {
        this.setState(
          update(this.state, {
            editOption: { $set: false },
          }),
        );
      });
  }

  openThumbnailEditor(event) {
    let { value } = this.props;

    return this.setState(
      update(this.state, {
        editor: {
          ready: { $set: true },
          params: {
            $set: `/${format({
              query: {
                productCode: value["productCode"],
                projectCode: value["projectCode"],
                templateCode: value["templateCode"],
                cartThumbnail: "Y",
                langCode: "ko",
                templateUseType: value["templateUseType"],
              },
            })}`,
          },
          timestamp: { $set: new Date().getTime() },
        },
      }),
    );
  }

  closeThumbnailEditor(event) {
    this.setState(
      update(this.state, {
        editor: {
          ready: { $set: false },
        },
      }),
    );
  }

  getTotalCountQuantity() {
    let { value } = this.props;

    return (getDeepValue(value, "optionQuantityList") || []).reduce((target, item) => {
      target += Number(item["quantity"]);

      return target;
    }, 0);
  }

  shouldComponentUpdate(nextProps, nextState) {
    let { value: nextValue, syncError: nextSyncError } = nextProps;
    let { value: currentValue, syncError: currentSyncError } = this.props;

    return !(Object.is(JSON.stringify(nextValue), JSON.stringify(currentValue)) && Object.is(JSON.stringify(nextSyncError), JSON.stringify(currentSyncError)) && Object.is(JSON.stringify(nextState), JSON.stringify(this.state)));
  }
  componentWillMount() {
    let {
      value: { offsetPrint, designCount, productGroupCode },
    } = this.props;

    if ((productGroupCode === "101" || productGroupCode === "102") && offsetPrint === "Y" && designCount > 1) {
      this.setState(update(this.state, { offsetException: { $set: true } }));
    }
  }

  render() {
    let { states, actions, index, fieldsName, field, value, syncError, optionDescription } = this.props;
    let {
      config: {
        url: { cdn: cdnUrl },
      },
    } = states;
    let { handleGetProductByProductGroupCode, handleGetTemplateOptions, handleGetTemplateSpec, handleGetTemplateTitle } = actions;
    let { editName, editOption, fetching, editor, offsetException } = this.state;

    let isAccessory = !!(value["productGroupCode"] || "").match(/901/);
    let isSamplePack = !!(value["productGroupCode"] || "").match(/999/);
    let isApparel = !!(value["productGroupCode"] || "").match(/701|702|703|704|705|706|707/);
    let isCollabo = !!value["creatorYN"];
    let isDiary = !!(value["productGroupCode"] || "").match(/511|512/);

    let spec = !isAccessory ? handleGetTemplateSpec(value) : handleGetTemplateOptions(value);

    //let spec = handleGetTemplateSpec(value);
    let title = isApparel || isDiary ? value["productEtcName"] : handleGetTemplateTitle(value);
    let { category, updateEdit } = handleGetProductByProductGroupCode(value["productGroupCode"]) || {};

    let isCalendar = false;

    let soldOut = (value["optionQuantityList"] || []).some((option) => option["isSoldOut"] && option["quantity"]);

    let totalCountQuantity = isApparel ? this.getTotalCountQuantity() : 0;

    let { creatorProjCode, sale } = value;

    let disabled = editName || editOption || fetching || isSamplePack;

    //(sale === "soldout") ? soldOut = true : soldOut;

    return (
      <tr data-project-code={value["projectCode"]} key={value["projectCode"]}>
        <td className="thumbnail">
          <div>
            {isCalendar
              ? React.cloneElement(<ThumbnailProductCalendar />, {
                  type: "tiles",
                  cdnUrl,
                  items: value,
                })
              : React.cloneElement(<ThumbnailProduct />, {
                  imageUrl: addDomain(cdnUrl, value["thumbnailImageUrl"] || value["templateThumbnailImageUrl"]),
                  productCode: value["productCode"],
                  frameCode: value["frameCode"],
                  paperCode: value["paperCode"],
                  frameOptionCode: value["frameOptionCode"],
                  colorCode: value["frameColorCode"],
                  directionType: value["thumbnailDirectionType"],
                  skinVersion: value["skinVersion"],
                  type: "defaults",
                })}

            {(!(value["finishStatus"] || "").match(/Y/) || // Y  Y
              value["isThumbnailImageChange"] || // false   true
              value["isOptionChange"] || // false   true
              updateEdit) && (
              <div className="disabled">
                <span className="bg" />
                <span className="warning icon-caution-4034">
                  {(!(value["finishStatus"] || "").match(/Y/) || // Y   Y
                    value["isOptionChange"] || // false   true
                    value["isThumbnailImageChange"] || // false     true
                    offsetException) &&
                    (value["isThumbnailImageChange"] ? (
                      <span>
                        섬네일 이미지
                        <br />
                        변경중...
                      </span>
                    ) : (
                      <span>
                        [편집하기]에서
                        <br />
                        편집을 완료해주세요.
                      </span>
                    ))}

                  {updateEdit && (
                    <span>
                      리뉴얼 된 상품으로
                      <br />
                      [편집하기]에서 레이아웃을
                      <br />
                      확인해주세요.
                    </span>
                  )}
                </span>
              </div>
            )}

            <span className="checkbox">
              <Field name={`${field}.selected`} disabled={value["isDisabledOrder"] && !(value["finishStatus"] || "").match(/Y/) && updateEdit} component={CheckBoxField} />
            </span>
          </div>
        </td>

        <td className="product">
          <span>
            <span>
              {!isAccessory && !creatorProjCode && !isCollabo && (
                <h4>
                  [{value[isSamplePack || isApparel ? "productName" : "productGroupName"]}] {title}
                </h4>
              )}

              {!editName ? (
                <span>
                  <h3>{value[isAccessory ? "productGroupName" : "projectName"]}</h3>

                  {!(isAccessory || isSamplePack) && !creatorProjCode && !isCollabo && <button type="button" className="icon icon-modify-1618" onClick={this.onClickOpenEditName} />}
                </span>
              ) : (
                <span>
                  <Field name={`${field}.projectName`} className="box" maxLength={30} placeholder={"프로젝트명을 입력해주세요."} showLength={true} component={InputField} validate={[Validate.required]} normalize={Normalize.maxLength(30)} />

                  <span className="btn-name-edit">
                    <button type="button" className="btn-white-small" onClick={this.onClickCancelEditName}>
                      취소
                    </button>

                    <button type="button" className="btn-black-small" onClick={this.onClickUpdateEditName}>
                      저장
                    </button>
                  </span>
                </span>
              )}

              {!editOption ? (
                <span>
                  <ul>
                    {(spec || []).reduce((target, option) => {
                      let { label, value } = option;

                      !(label || "").match(/수량/i) &&
                        target.push(
                          <li>
                            <span>
                              {label} : {value}
                            </span>
                          </li>,
                        );

                      return target;
                    }, [])}
                  </ul>

                  {value["enableOptionChange"] && !value["creatorProjCode"] && !value["isCollabo"] && (
                    <span className="btn-option-edit">
                      <button type="button" className="txt" onClick={this.onClickOpenEditOption}>
                        옵션 변경
                      </button>
                    </span>
                  )}
                </span>
              ) : (
                <span>
                  {React.cloneElement(<CartProductOption />, {
                    states,
                    actions: {
                      ...actions,
                      handleCancelEditOption: this.onClickCancelEditOption,
                      handleUpdateEditOption: this.onClickUpdateEditOption,
                    },
                    category,
                    index,
                    fieldsName,
                    field,
                    value,
                    syncError,
                  })}
                </span>
              )}

              {value["optionDescription"] && (
                <span className="edit-notification">
                  <span className="icon icon-noti-1515" />
                  <span className="txt">{value["optionDescription"]}</span>
                </span>
              )}
              {offsetException && (
                <span className="edit-notification">
                  <span className="icon icon-noti-1515" />
                  <span className="txt">대량 인쇄시 뒷면 한면만 선택 가능해요. (편집하기 필요)</span>
                </span>
              )}
              {value["noticeMessage"] && (
                <span className="edit-notification">
                  <span className="icon icon-noti-1515" />
                  <span className="txt" dangerouslySetInnerHTML={{ __html: breaklines(value["noticeMessage"]) }} />
                </span>
              )}

              {value["attachCount"] && !Object.is(+value["attachCount"], +value["quantity"]) && !(!!value["isDisabledOrder"] && !!value["noticeMessage"]) && (
                <span className="edit-notification">
                  <span className="icon icon-noti-1515" />
                  <span className="txt">설정된 수량과 파일의 수량이 동일하지 않습니다.</span>
                </span>
              )}

              {soldOut && (
                <span className="edit-notification">
                  <span className="icon icon-noti-1515" />
                  <span className="txt">일시 품절 상품이 포함되어 있습니다.</span>
                </span>
              )}

              {!!value["stickerAddPrice"] && (
                <span className="edit-notification">
                  <span className="icon icon-noti-1515" />
                  <span className="txt stickerAddPrice">
                    해당 상품의 기준을 초과하여 <em className="blue">추가요금[ {toCash(value["stickerAddPrice"] || 0)}원 ]</em>이 적용되었습니다.
                  </span>
                </span>
              )}

              {isApparel && (totalCountQuantity < value["allowMinQuantity"] || totalCountQuantity >= 1000) && <span className="apparel-notification">{totalCountQuantity <= value["allowMinQuantity"] ? `총 수량은 ${value["allowMinQuantity"]}개 이상 담아야 합니다.` : "총 수량 1,000개 이상 대량 주문을 원하시면, 고객센터(1577-4703)로 연락주세요."}</span>}
            </span>
          </span>

          {editor["ready"] && (
            <iframe
              src={`${getEditorDomainUrl()}${editor["params"]}&cb=${editor["timestamp"]}`}
              width="100%"
              height={`0px`}
              frameBorder={0}
              scrolling="no"
              ref={(c) => {
                this.editor = c;
              }}
            />
          )}
        </td>

        <td className="quantity">
          {React.cloneElement(<CartProductQuantity />, {
            category,
            actions: {
              ...actions,
              handleChangeQuantity: this.onChangeQuantity,
            },
            disabled,
            field,
            value,
          })}
        </td>

        <td className="price">
          {value["price"] !== value["sellPrice"] && <span className="original">{toCash(value["price"])}원</span>}

          <span className="sale">{toCash(value["sellPrice"])}원</span>
        </td>

        <td className="date">{!(isAccessory || isSamplePack) && <span>{toDate(value["lastUpdate"], "YYYY.MM.DD")}</span>}</td>

        <td className="etc">
          {(!value["isDisabledOrder"] || value["isProjectEdit"] || value["isCopy"]) && (
            <div>
              <span>
                <button type="button" className="btn-blue-small" disabled={value["isDisabledOrder"] || soldOut || offsetException} onClick={this.onClickOrderProject}>
                  주문하기
                </button>
              </span>

              {!(isAccessory || isSamplePack || value["creatorProjCode"] || value["isCollabo"]) && (
                <span>
                  <button type="button" className="btn-white-small" data-index={index} disabled={!value["isProjectEdit"]} onClick={this.onClickEditProject}>
                    편집하기
                  </button>
                </span>
              )}

              {!(isAccessory || isSamplePack || value["creatorProjCode"] || value["isCollabo"]) && (
                <span>
                  <button type="button" className="btn-white-small" data-project-code={value["projectCode"]} disabled={!value["isCopy"] || soldOut || offsetException} onClick={this.onClickCopyProject}>
                    복사하기
                  </button>
                </span>
              )}
            </div>
          )}
        </td>
      </tr>
    );
  }
}
