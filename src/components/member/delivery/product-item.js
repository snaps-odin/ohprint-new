import React from "react";
import { Field } from "redux-form";
import { CSVLink } from "react-csv";

import { LayerTypes } from "constants/index";
import { getDatasetByName } from "utils/dom";
import { getTimestamp, offsetMonthByDate } from "utils/date";
import { toDate, toCash } from "utils/format";
import { addDomain, goMemberCart, goStore } from "utils/url";
import { openCenter } from "utils/window";
import { getDeepValue } from "utils/json";

import { SelectField } from "components/common/fields";
import ThumbnailProduct from "components/common/thumbnail-product";
import { gtmV4_refund } from "configs/google-analytics/ga-v4";

export default class DeliveryProductItem extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      csvList: null,
    };

    this.isCancel = false;

    this.onChangeOption = this.onChangeOption.bind(this);
    this.onClickPaymentInformation = this.onClickPaymentInformation.bind(this);
    this.onClickDepositInformation = this.onClickDepositInformation.bind(this);
    this.onClickDeliveryTracking = this.onClickDeliveryTracking.bind(this);
    this.onClickReviewCreate = this.onClickReviewCreate.bind(this);
    this.onClickReviewView = this.onClickReviewView.bind(this);
    this.onClickOrderCancel = this.onClickOrderCancel.bind(this);
    this.onClickReOrder = this.onClickReOrder.bind(this);
    this.onNoticeAlerts = this.onNoticeAlerts.bind(this);
  }

  onChangeOption(event, value) {
    let {
      states,
      actions,
      value: {
        common: { registrationDate, paymentDate, orderCode },
        detail: { orderStatusCode },
      },
    } = this.props;
    let {
      order: { offsetTimestamp },
    } = states;
    let { handleOpenContentsLayer, handleOpenAlertLayer } = actions;

    switch (value) {
      case "DOCUMENT_DOWNLOAD":
        handleOpenContentsLayer(LayerTypes.DOCUMENT_DOWNLOAD, { orderCode });
        break;

      case "RECEIPT_PRINT_0":
      case "RECEIPT_PRINT_1":
        handleOpenContentsLayer(LayerTypes.RECEIPT_PRINT, { orderCode });
        break;

      case "RECEIPT_PRINT_2":
        window.open("https://order.pay.naver.com/home", "_blank");
        break;

      case "TAX_IN_VOICE_1":
      case "TAX_IN_VOICE_2":
        let offsetMM = offsetMonthByDate(getTimestamp() + offsetTimestamp, (orderStatusCode || "").match(/014002/) ? registrationDate : paymentDate);
        let currentDD = Number(toDate(getTimestamp() + offsetTimestamp, "DD"));

        offsetMM === 0 || (offsetMM === 1 && currentDD < 6)
          ? handleOpenContentsLayer(LayerTypes.TAX_IN_VOICE, { orderCode })
          : handleOpenAlertLayer({
              description: `세금계산서 발행</br>주문일 기준 익월05일까지만 가능합니다.`,
            });
        break;

      case "CASH_RECEIPT_0":
      case "CASH_RECEIPT_1":
      case "CASH_RECEIPT_2":
        handleOpenContentsLayer(LayerTypes.CASH_RECEIPT, { orderCode });
        break;

      case "SALE_SLIP":
        this.openPrintSaleSlip();
        break;
    }
  }

  onClickPaymentInformation(event) {
    let {
      actions: { handleOpenContentsLayer },
      value: {
        detail: { orderCode },
      },
    } = this.props;

    handleOpenContentsLayer(LayerTypes.PAYMENT_INFORMATION, { orderCode });
  }

  onClickOrderCancel(event) {
    let { states, actions, value } = this.props;
    let {
      order: { paymentMethods },
    } = states;
    let { handleDeleteOrderHistoryByOrderCode, handleRefresh, handleOpenAlertLayer, handleRequestOrderHistoryByOrderCode, handleGetTemplateSpec, handleGetTemplateOptions } = actions;
    let {
      common: { settlementMethod },
      detail: { orderCode, orderStatusCode },
    } = value;

    let settlementMethodKeyName = paymentMethods.find((method) => method["value"].match(settlementMethod))["keyName"] || "";
    let isCSQNA = settlementMethodKeyName.match(/VIRTUAL_BANK/) && orderStatusCode.match(/014003/);
    let message = `주문을 취소하였습니다.<br/>해당 디자인은 장바구니로 이동됩니다.${isCSQNA ? "<br/><br/>무통장입금 주문 건으로<br/>입금 받으실 계좌번호를 남겨 주세요.<br/>1:1상담으로 이동하시겠습니까?" : ""}`;

    handleOpenAlertLayer({
      description: "선택하신 주문을 취소하시겠습니까?",
      confirm: true,
      disableSubmitClose: true,
      callback: (confirmed) => {
        confirmed &&
          !this.isCancel &&
          Promise.all([(this.isCancel = true)])
            .then(() => {
              try {
                handleRequestOrderHistoryByOrderCode(orderCode).then((result) => {
                  let { orderDetailList, orderUseCouponList } = result;

                  let params = orderDetailList.map((item) => {
                    let isAccessory = !!(item["productGroupCode"] || "").match(/901/);
                    let spec = !isAccessory ? handleGetTemplateSpec(item) : handleGetTemplateOptions(item);
                    let valueOfSpec = (spec || []).reduce((target, option) => {
                      let { label, value } = option;
                      !(label || "").match(/수량/i) && target.push(value);
                      return target;
                    }, []);

                    let findCouponIdx = orderUseCouponList.findIndex((c) => c.projectCode === item.projectCode);

                    return {
                      item_name: item.productName, //상품 이름
                      price: item.amount, //상품 가격
                      item_brand: "", //상품 브랜드
                      item_category: isAccessory ? "액세서리" : item.productGroupName,
                      item_category2: isAccessory ? item.productGroupName : "",
                      item_category3: item.sizeName,
                      item_variant: valueOfSpec.join("/"),
                      quantity: 1, //상품 수량
                      coupon: findCouponIdx > -1 ? orderUseCouponList[findCouponIdx].joinCompany : "",
                    };
                  });

                  gtmV4_refund({
                    orderCode,
                    payment_type: settlementMethodKeyName,
                    shipping: result["deliveryAmount"],
                    totalPrice: result["settlementAmount"],
                    coupon: orderUseCouponList
                      .reduce((target, item) => {
                        if (!item.projectCode) target.push(item.joinCompany);
                        return target;
                      }, [])
                      .join(" / "),
                    discount_coupon: result["useCouponAmount"] + result["userMoney"],
                    discount_point: result["userMoney"],
                    discount_items_coupon: result["useCouponAmount"],
                    options: params,
                  });
                });
              } catch (e) {
                console.log(e);
              }
            })
            .then(() => {
              return handleDeleteOrderHistoryByOrderCode(orderCode);
            })
            .then(() => {
              this.isCancel = false;

              handleOpenAlertLayer({
                description: message,
                confirm: isCSQNA,
                callback: (confirmed) => {
                  Promise.all([confirmed && isCSQNA && this.openCSQNA()]).then(() => {
                    handleRefresh();
                  });
                },
              });
            })
            .catch((error) => {
              this.isCancel = false;

              handleOpenAlertLayer({
                description: error,
              });
            });
      },
    });
  }

  onClickDepositInformation(event) {
    let {
      actions: { handleOpenContentsLayer },
      value: {
        detail: { orderCode },
      },
    } = this.props;

    handleOpenContentsLayer(LayerTypes.DEPOSIT_INFORMATION, { orderCode });
  }

  onClickDeliveryTracking(event) {
    let {
      actions: { handleOpenContentsLayer, handleRequestDeliveryCj },
      value: {
        detail: { orderCode },
      },
    } = this.props;

    let inVoiceNumber = getDatasetByName(event.currentTarget, "invoice-number");
    let isCj = inVoiceNumber ? inVoiceNumber.length === 12 : false;

    Promise.all([handleRequestDeliveryCj(orderCode, inVoiceNumber)]).then((result) => {
      let cjDeliveryData = result;
      handleOpenContentsLayer(LayerTypes.DELIVERY_TRACKING, { inVoiceNumber, isCj, cjDeliveryData });
    });
  }

  onClickReviewCreate(event) {
    let {
      actions: { handleOpenContentsLayer, handleRefresh },
      value: {
        detail: { orderCode, projectCode },
      },
    } = this.props;

    handleOpenContentsLayer(LayerTypes.REVIEW_CREATE, {
      orderCode,
      projectCode,
      callback: (confirmed) => {
        confirmed ? this.goReview() : handleRefresh();
      },
    });
  }

  goReview() {
    let {
      actions: { handleGetProductByProductGroupCode },
      value: {
        detail: { productGroupCode, creatorProjCode },
      },
    } = this.props;

    let { category, subCategory } = creatorProjCode ? { category: "fair", subCategory: "fair" } : handleGetProductByProductGroupCode(productGroupCode);
    let type = "intro";

    switch (category) {
      case "business-card":
      case "card":
      case "sticker":
      case "apparel":
      case "accessory":
      case "fair":
        type = "overview";
        subCategory = null;
        break;
    }

    goStore(type, category, subCategory, { option: "review" });
  }

  onClickReviewView(event) {
    this.goReview();
  }

  onClickReOrder(event) {
    let { actions, value } = this.props;
    let { handleGetProductByProductGroupCode, handleCreateOrderHistoryReOrderByOrderCode, handleOpenAlertLayer, handleGoEditor } = actions;
    let {
      detail: { productGroupCode, orderCode, projectCode },
    } = value;
    let { updateEdit } = handleGetProductByProductGroupCode(productGroupCode);

    !updateEdit
      ? handleCreateOrderHistoryReOrderByOrderCode(orderCode, projectCode)
          .then(() => {
            goMemberCart();
          })
          .catch((error) => {
            handleOpenAlertLayer({
              description: error,
            });
          })
      : handleOpenAlertLayer({
          description: `상품 개편에 따라 선택하신 상품의<br/>레이아웃이 변경되었습니다.<br/><em class="blue">편집기에서 상품 레이아웃을 다시 설정</em>해 주세요.`,
          confirm: true,
          confirmLabel: "편집기로 이동",
          callback: (confirmed) => {
            confirmed && handleGoEditor(value["detail"]);
          },
        });
  }

  openCSQNA() {
    let {
      actions: { handleOpenCS, handleTouchCS, handleChangeCSTabFocus },
    } = this.props;

    Promise.all([handleTouchCS(), handleOpenCS()]).then(() => {
      handleChangeCSTabFocus(2);
    });
  }

  getOptions() {
    let {
      states: {
        order: { offsetTimestamp },
      },
      value: { common, detail },
    } = this.props;
    let { isInvoiceIssue, settlementTransactionId, settlementMethod, receiptYN, receiptTranslationNo, approvalNo, npayPointAmount, paymentDate } = common;
    let { orderStatusCode } = detail;

    let options = [];

    switch (orderStatusCode) {
      case "014002":
        isInvoiceIssue && options.push({ label: "세금계산서", value: "TAX_IN_VOICE_1" });
        options.push({ label: "제출서류다운", value: "DOCUMENT_DOWNLOAD" });
        break;

      default:
        let receiptTransactionNo = settlementTransactionId;
        let isReceiptIssue = true;

        if (settlementMethod.match(/012003/) || settlementMethod.match(/012004/) || settlementMethod.match(/012019/)) {
          if (receiptYN && receiptYN.match(/Y/i)) {
            receiptTranslationNo && (receiptTransactionNo = receiptTranslationNo);
          } else {
            isReceiptIssue = false;
          }
        }

        switch (settlementMethod) {
          case "012019":
            if (approvalNo) {
              options.push({ label: "영수증출력", value: "RECEIPT_PRINT_2" });
              npayPointAmount > 0 &&
                options.push({
                  label: "현금영수증",
                  value: `CASH_RECEIPT_${receiptYN && receiptYN.match(/Y/i) ? 0 : 1}`,
                });
            } else {
              options.push({ label: "영수증출력", value: `RECEIPT_PRINT_${isReceiptIssue ? 0 : 1}` });
              !isReceiptIssue && options.push({ label: "현금영수증", value: `CASH_RECEIPT_2` });
            }
            options.push({ label: "제출서류다운", value: "DOCUMENT_DOWNLOAD" });
            break;

          default:
            let currentYYYYMM = toDate(getTimestamp() + offsetTimestamp, "YYYYMM");
            let paymentYYYYMM = toDate(paymentDate, "YYYYMM");

            if (isReceiptIssue && isInvoiceIssue) {
              options.push({ label: "영수증출력", value: "RECEIPT_PRINT_0" });
              options.push({ label: "매출전표 출력", value: "SALE_SLIP" });
            } else {
              options.push({ label: "영수증출력", value: "RECEIPT_PRINT_1" });
              currentYYYYMM.match(paymentYYYYMM) && options.push({ label: "현금영수증", value: "CASH_RECEIPT_2" });
              isInvoiceIssue && options.push({ label: "세금계산서", value: "TAX_IN_VOICE_2" });
            }
            options.push({ label: "제출서류다운", value: "DOCUMENT_DOWNLOAD" });
            break;
        }
        break;
    }

    return options;
  }

  getDate() {
    let {
      value: { detail },
    } = this.props;

    let date = null;
    let deliveryDueDate = detail["deliveryDueDate"];

    switch (detail["orderStatusCode"]) {
      case "014002": // 입금대기
        date = `입금기한 : ${toDate(detail["expirationDate"], "YYYY.MM.DD")}`;
        break;

      case "014008": // 배송중
      case "014009": // 배송완료
        date = `출고일 : ${toDate(detail["deliveryDate"], "YYYY.MM.DD")}`;
        break;

      default:
        date = deliveryDueDate ? `출고예정일 : ${toDate(deliveryDueDate, "YYYY.MM.DD")}` : null;
        date = null;
        break;
    }

    return date;
  }

  openPrintSaleSlip() {
    let {
      states: {
        order: { paymentMethods },
      },
      value: { common },
    } = this.props;
    let { settlementTransactionId, settlementMethod, receiptYN, receiptTranslationNo } = common;

    let paymentMethodName = paymentMethods.find((method) => method["value"] === common["settlementMethod"])["keyName"] || "";
    let receiptTransactionNo = paymentMethodName.match(/DIRECT_BANK|VIRTUAL_BANK|NAVER_PAY/) && (receiptYN || "").match(/Y/i) && receiptTranslationNo ? receiptTranslationNo : settlementTransactionId;

    openCenter(`https://iniweb.inicis.com/DefaultWebApp/mall/cr/cm/mCmReceipt_head.jsp?noTid=${receiptTransactionNo}&noMethod=1`, "ohprintme-print-sale-slip", 400, 780);
  }

  componentDidMount() {
    let {
      actions: { handleRequestOrderHistoryAttachByOrderCode },
      value,
    } = this.props;

    let { isAttach, orderCode, projectCode } = getDeepValue(value, "detail") || {};

    isAttach &&
      handleRequestOrderHistoryAttachByOrderCode(orderCode, projectCode).then((result) => {
        this.setState({ csvList: result });
      });
  }

  onNoticeAlerts() {
    let {
      actions: { handleOpenAlertLayer },
      value: {
        detail: { customReOrderMessage },
      },
    } = this.props;
    handleOpenAlertLayer({ description: customReOrderMessage });
  }

  render() {
    let {
      states: {
        config: {
          url: { cdn: cdnUrl },
        },
        order: { paymentMethods },
      },
      isFirst,
      rowSpan,
      value: { common, detail },
      actions,
    } = this.props;
    let { csvList } = this.state;
    let { handleGetTemplateTitle, handleGetTemplateSpec, handleGetTemplateOptions } = actions;

    let isVirtualBank = !!String(paymentMethods.find((method) => method["value"] === common["settlementMethod"])["keyName"]).match(/VIRTUAL_BANK/);

    let isAccessory = !!(detail["productGroupCode"] || "").match(/901/);
    let isSamplePack = !!(detail["productGroupCode"] || "").match(/999/gi);
    let isApparel = !!(detail["productGroupCode"] || "").match(/701|702|703|704|705|706|707/);
    let isDiary = !!(detail["productGroupCode"] || "").match(/511|512/);

    let title = isApparel || isDiary ? detail["productEtcName"] : handleGetTemplateTitle(detail);
    let options = !isAccessory ? handleGetTemplateSpec(detail) : handleGetTemplateOptions(detail);

    let isCustomReOrder = this.props.value.detail.isCustomReOrder;

    let { creatorProjCode, sale } = detail;

    let soldOut = false;

    sale === "soldout" ? (soldOut = true) : soldOut;

    return (
      <tr>
        {(rowSpan === 1 || (rowSpan > 1 && isFirst)) && (
          <td className="order" rowSpan={isFirst && rowSpan ? rowSpan : null}>
            <span className="date">{toDate(common["registrationDate"], "YYYY.MM.DD")}</span>
            <span className="number">{detail["orderCode"]}</span>
            <button type="button" className="payment" onClick={this.onClickPaymentInformation}>
              결제/배송정보
            </button>

            <span>
              <Field name={`${common["orderCode"]}.receipts`} className="box" width={105} placeholder="증명서류 발급" options={this.getOptions()} onChange={this.onChangeOption} component={SelectField} />
            </span>

            {common["isAllowCancel"] && (
              <button type="button" className="cancel" onClick={this.onClickOrderCancel}>
                주문취소
              </button>
            )}
          </td>
        )}

        <td className="thumbnail">
          {React.cloneElement(<ThumbnailProduct />, {
            imageUrl: addDomain(cdnUrl, detail["thumbnailImageUrl"] || detail["templateThumbnailImageUrl"]),
            paperCode: detail["paperCode"],
            productCode: detail["productCode"],
            frameCode: detail["frameCode"],
            frameOptionCode: detail["frameOptionCode"],
            colorCode: detail["frameColorCode"],
            directionType: detail["thumbnailDirectionType"],
            skinVersion: detail["skinVersion"],
            type: "defaults",
          })}
        </td>

        <td className="product">
          <span className="names">
            {!isAccessory && !creatorProjCode && (
              <h4>
                [{detail[isSamplePack || isApparel ? "productName" : "productGroupName"]}] {title}
              </h4>
            )}
            <h3>{detail[isAccessory ? "productGroupName" : "projectName"]}</h3>
          </span>

          {(options || []).length > 0 && (
            <span className="option">
              {(options || []).reduce((target, option) => {
                let { label, value } = option;

                !(label || "").match(/수량/i) &&
                  target.push(
                    <span>
                      {label} : {value}
                    </span>,
                  );

                return target;
              }, [])}
            </span>
          )}

          {csvList && (
            <span className="download">
              <CSVLink data={csvList} filename={`OHPRINTME_Random_${toDate(detail["paymentDate"], "YYYYMMDD")}.csv`}>
                등록된 파일 다운받기
              </CSVLink>
            </span>
          )}

          <span className="date">
            <span>{this.getDate()}</span>
          </span>
          {/*          {(detail['orderStatusCode'] !== '014009') &&
            <span className="danger">
              <span className="icon icon-noti-1515"/>
              <span className="txt">
                주문량 폭주로 인해 출고가 다소 지연될 수 있습니다.<br/>
                최대한 빠르게 제작해 드리겠습니다.
              </span>
            </span>
          }*/}

          {detail["message"] && <span className="message" dangerouslySetInnerHTML={{ __html: `* ${detail["message"]}` }} />}
        </td>

        <td className="quantity">
          {!isApparel ? (
            <span>
              {toCash(detail["quantity"])}
              {detail["productUnitName"]}
            </span>
          ) : (
            <span>
              {(detail["optionQuantityList"] || []).reduce((target, option) => {
                target.push(<span>{`${option["name"]} : ${option["quantity"]}`}</span>);

                return target;
              }, [])}

              <span>{`(총 수량 : ${detail["quantity"]})`}</span>
            </span>
          )}

          <span>{toCash(detail["settlementAmount"])}원</span>
        </td>

        <td className="status">
          <span className={detail["orderStatusCode"].match(/014002/) ? "waiting" : null}>{detail["orderStatusName"]}</span>

          {detail["orderStatusCode"].match(/014002/) && isVirtualBank && (
            <button type="button" onClick={this.onClickDepositInformation}>
              입금안내
            </button>
          )}

          {detail["orderStatusCode"].match(/014008|014009/) && (
            <button type="button" data-invoice-number={detail["invoiceNumber"]} onClick={this.onClickDeliveryTracking}>
              배송조회
            </button>
          )}
        </td>

        <td className="etc">
          {!isSamplePack && detail["isWriteReview"] && (
            <span>
              {detail["reviewIdx"] ? (
                <button type="button" className="btn-black-small" onClick={this.onClickReviewView}>
                  리뷰보기
                </button>
              ) : (
                <button type="button" className="btn-black-small" onClick={this.onClickReviewCreate}>
                  리뷰쓰기
                </button>
              )}
            </span>
          )}

          {!soldOut && !isSamplePack && detail["isReOrder"] && !isAccessory && (
            <span>
              <button type="button" className="btn-white-small" onClick={this.onClickReOrder}>
                재주문
              </button>
            </span>
          )}

          {!!isCustomReOrder && !soldOut && (
            <span>
              <button type="button" className="btn-white-small disabled" onClick={this.onNoticeAlerts}>
                재주문
              </button>
            </span>
          )}
        </td>
      </tr>
    );
  }
}
