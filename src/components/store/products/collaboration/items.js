import React from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import { jsx } from "@emotion/react";

import { MainItems } from "./styles/items";
import { textBold } from "./styles/common";
import { boxContainer } from "./styles/common";

import CountUp from "react-countup";
import { toCash } from "utils/format";

import { getDatasetByName } from "utils/dom";

import { ActionLayer, ActionCommon } from "actions/index";
import { LayerTypes } from "constants/index";
import { addDomain } from "utils/url";

class Items extends React.Component {
  constructor(props) {
    super(props);

    //this.cdn = ("states" in props && props.states) ? props.states.config.url.cdn : "https://cdn.ohprint.me";
    //this.cdn += "/Upload/collaboration/revinci";
    this.list = "list" in props && props.list ? props.list : [];
    this.handleSubmit = props.handleSubmit;
    //console.log(this.props);

    this.onViewItem = this.onViewItem.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const aftermarket = nextProps.market;
    const nowMarket = this.props.market;
    const rerender = aftermarket !== nowMarket;

    if (rerender) {
      this.list = "list" in nextProps && nextProps.list ? nextProps.list : [];
    }

    return rerender;
  }

  onViewItem(e) {
    let {
      actions: { handleOpenContentsLayer, handleExecuteAfterUserLogin },
      productCodeList,
      templateCodeList,
      market,
    } = this.props;
    let idx = getDatasetByName(e.currentTarget, "index");
    let list = this.list;
    let cdn = this.props.cdn;

    handleExecuteAfterUserLogin()
      .then(() => {
        handleOpenContentsLayer(LayerTypes.HOPE_MARKET, { product: list[idx], productCodeList, templateCodeList, cdn, market });
      })
      .catch((error) => {});
  }

  render() {
    let cdn = this.props.cdn;
    let list = this.list;

    return (
      <MainItems.container>
        <MainItems.title>
          <span css={textBold}>
            Hope Market 상품을
            <br />
            만나보세요
          </span>
        </MainItems.title>
        <MainItems.item.container css={boxContainer}>
          {list.reduce((target, item, idx) => {
            target.push(
              <MainItems.item.individually data-index={idx} onClick={this.onViewItem}>
                <img src={addDomain(cdn, item.images)} alt={""} />
                <span>
                  [{item.productType}]<br />
                  {item.productName}
                </span>
                <span>
                  {item.discountPrice > 0 && <em>{toCash(item.price)}</em>}

                  {React.cloneElement(<CountUp />, {
                    start: 0,
                    end: Number(item.discountPrice > 0 ? item.discountPrice : item.price),
                    useEasing: true,
                    useGrouping: true,
                    duration: 0.3,
                    separator: ",",
                    suffix: "원",
                  })}
                </span>
                <button type={"submit"}>자세히 보기</button>
              </MainItems.item.individually>,
            );
            return target;
          }, [])}
        </MainItems.item.container>
      </MainItems.container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    states: {
      config: state.config,
    },
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),
      handleExecuteAfterUserLogin: () => dispatch(ActionCommon.executeAfterUserLogin()),
    },
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Items);
