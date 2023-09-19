import React from "react";

import { addDomain } from "utils/url";
import { toDate, toCash } from "utils/format";

import ThumbnailProduct from "components/common/thumbnail-product";

export default class OrderProductItem extends React.Component {
  render() {
    let { states, actions, item } = this.props;
    let {
      config: {
        url: { cdn: cdnUrl },
      },
    } = states;
    let { handleGetTemplateTitle, handleGetTemplateSpec } = actions;

    let isAccessory = !!(item["productGroupCode"] || "").match(/901/);
    let isSamplePack = !!(item["productGroupCode"] || "").match(/999/);
    let isApparel = !!(item["productGroupCode"] || "").match(/701|702|703|704|705|706|707/);
    let isDiary = !!(item["productGroupCode"] || "").match(/511|512/);

    let title = isApparel || isDiary ? item["productEtcName"] : handleGetTemplateTitle(item);
    let options = handleGetTemplateSpec(item);

    return (
      <tr>
        <td className="thumbnail">
          <div>
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
          </div>
        </td>
        <td className="product">
          <div className="names">
            {!isAccessory && (
              <h4>
                [{item[isSamplePack || isApparel ? "productName" : "productGroupName"]}] {title}
              </h4>
            )}
            <h3>{item[isAccessory ? "productGroupName" : "projectName"]}</h3>
          </div>

          {(options || []).length > 0 && (
            <div className="option">
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
            </div>
          )}

          <div className="date">
            <span>{toDate(item["deliveryDueDate"], "YYYY.MM.DD")} 출고 예정</span>
          </div>

          {/*<div className="notice">*/}
          {/*  안내 <span>∙ 성수기를 맞아 주문량이 증가하여, 상품 제작 기간이 조금 더 소요될 수 있습니다.</span>*/}
          {/*</div>*/}
        </td>
        <td className="quantity">
          {!isApparel ? (
            item["quantity"]
          ) : (
            <span>
              {(item["optionQuantityList"] || []).reduce((target, option) => {
                target.push(<span>{`${option["name"]} : ${option["quantity"]}`}</span>);

                return target;
              }, [])}

              <span>{`(총 수량 : ${item["quantity"]})`}</span>
            </span>
          )}
        </td>
        <td className="price">{toCash(item["price"])}원</td>
        <td className="sale-price">{toCash(item["couponDiscount"] ? `-${item["couponDiscount"]}` : Number(item["sellPrice"]) - Number(item["price"]))}원</td>
        <td className="purchase-price">{toCash(item["couponDiscount"] ? Number(item["price"] - Number(item["couponDiscount"])) : item["sellPrice"])}원</td>
      </tr>
    );
  }
}
