import React from "react";
import { Field } from "redux-form";

import { goStore } from "utils/url";
import { getDatasetByName } from "utils/dom";

import { CheckBoxField } from "components/common/fields";
import CartProductItem from "./product-item";
import { getDeepValue } from "utils/json";

export default class CartProduct extends React.Component {
  constructor(...args) {
    super(...args);

    this.items = [];

    this.onChangeSelectAll = this.onChangeSelectAll.bind(this);
    this.onClickStoreIntro = this.onClickStoreIntro.bind(this);
  }

  onChangeSelectAll(event, bool) {
    this.setSelectAll(bool);
  }

  onClickStoreIntro(event) {
    let category = getDatasetByName(event.currentTarget, "category");

    category === "poster" ? goStore("intro", category, "defaults") : goStore("overview", category);
  }

  isSelectedAll() {
    let { fields } = this.props;

    return !(fields.getAll() || []).find((field) => !field["selected"]);
  }

  setSelectAll(bool) {
    let {
      fields,
      actions: { handleChangeFormValue },
    } = this.props;

    fields.map((field) => {
      handleChangeFormValue(`${field}.selected`, bool);
    });
  }

  setSelectAllWithoutDisabled() {
    let { fields, actions, values } = this.props;
    let { handleGetProductByProductGroupCode, handleChangeFormValue } = actions;

    fields.map((field, index) => {
      let { productGroupCode, isDisabledOrder, finishStatus } = values[index] || {};
      let { updateEdit } = handleGetProductByProductGroupCode(productGroupCode) || {};

      !updateEdit && !isDisabledOrder && (finishStatus || "").match(/Y/) && handleChangeFormValue(`${field}.selected`, true);
    });
  }

  getComponentByProjectCode(projectCode) {
    let { values } = this.props;

    let index = (values || []).findIndex((value, index) => String(value["projectCode"]) === String(projectCode));

    return this.items[index];
  }

  componentDidUpdate(prevProps, prevState) {
    let { values: prevValues } = prevProps;
    let { values: currentValues } = this.props;

    prevValues.length < 1 && currentValues.length > 0 && this.setSelectAllWithoutDisabled();
  }

  render() {
    let { states, actions, fields, label, count, values, syncErrors, originValues, isSearch, isStatus } = this.props;
    let des = isStatus && isStatus === "ok0" ? "일치하는 검색결과가 없습니다.<br/>다른 검색어를 입력해주세요." : "검색중입니다..";

    return (
      <div className="cart-product-wrap">
        {/**
				 <h2>
				 {label} 상품
				 <span className="count">(<em>{count}</em>/{values.length})</span>
				 <span className="txt">{label}에서 제작한 상품으로 주문 및 편집이 가능합니다.</span>
				 </h2>
				 */}

        <table frameBorder={0}>
          <caption>
            <span className="blind">장바구니</span>
          </caption>
          <colgroup>
            <col style={{ width: "230px" }} />
            <col />
            <col style={{ width: "152px" }} />
            <col style={{ width: "100px" }} />
            <col style={{ width: "100px" }} />
            <col style={{ width: "100px" }} />
          </colgroup>
          <thead>
            <tr>
              <th />
              <th>상품 정보</th>
              <th>수량</th>
              <th>가격</th>
              <th>최종 편집일</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            {fields.length > 0 ? (
              fields.map((field, index) =>
                React.cloneElement(<CartProductItem />, {
                  states,
                  actions,
                  index,
                  field,
                  fieldsName: fields["name"],
                  value: values[index] || {},
                  syncError: syncErrors[index],
                  ref: (c) => {
                    this.items[index] = c;
                  },
                }),
              )
            ) : isSearch ? (
              <tr>
                <td colSpan={6} className="nothing">
                  <p dangerouslySetInnerHTML={{ __html: des }} />
                  <div>
                    {[
                      { label: "명함", category: "business-card" },
                      { label: "스티커", category: "sticker" },
                      { label: "어패럴", category: "apparel" },
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
                </td>
              </tr>
            ) : (
              <tr>
                <td colSpan={6} className="nothing">
                  <p>
                    나만의 아이덴티티를 담은 상품을 이곳에 저장합니다.
                    <br />
                    감각적이고 유니크한 상품들을 지금 만나 보세요.
                  </p>
                  <div>
                    {[
                      { label: "명함", category: "business-card" },
                      { label: "스티커", category: "sticker" },
                      { label: "어패럴", category: "apparel" },
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
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
