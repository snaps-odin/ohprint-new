import React from "react";
import { connect } from "react-redux";

import { jsx } from "@emotion/react";

import { Main, Navigation, OverviewBanner, Contents } from "./styles";

import { BrandInfo as RevinciBrandInfo } from "./revinci";
import { BrandInfo as BdatbdontBrandInfo } from "./bdatbdont";
import Items from "./items";
import { Contents as CommonContents } from "./common";

import { addDomain } from "utils/url";

import { getDatasetByName } from "utils/dom";

import { checkOverTime } from "utils/date";

import { PRODUCT_CODE_LIST as REVINCI_PRODUCT_CODE_LIST, PRODUCT_ITEMS as REVINCI_PRODUCT_ITEMS, TEMPLATE_CODE_LIST as REVINCI_TEMPLATE_CODE_LIST } from "./data-revinci";

import { PRODUCT_CODE_LIST as BDATBDON_PRODUCT_CODE_LIST, PRODUCT_ITEMS as BDATBDON_PRODUCT_ITEMS, TEMPLATE_CODE_LIST as BDATBDON_TEMPLATE_CODE_LIST } from "./data-bdatbdon";

class Collaboration extends React.Component {
  constructor(props) {
    super(props);

    const selectMarketKey = Math.floor(Math.random() * 2);
    let marKeyName = selectMarketKey === 0 ? "revinci" : "bdatbdon";
    this.bdbdOpen = !checkOverTime("2021-12-05 23:59:59");

    if (!this.bdbdOpen) {
      marKeyName = "bdatbdon";
    }

    this.cdn = "states" in props && props.states ? props.states.config.url.cdn : "https://cdn.ohprint.me";
    this.cdn += `/Upload/collaboration/${marKeyName}`;

    this.commonCdn = props.states.config.url.cdn + "/Upload/collaboration";

    this.state = {
      market: marKeyName,
    };

    this.changeMarket = this.changeMarket.bind(this);
  }

  changeMarket(e) {
    const market = getDatasetByName(e.currentTarget, "index");

    this.cdn = "states" in this.props && this.props.states ? this.props.states.config.url.cdn : "https://cdn.ohprint.me";
    this.cdn += `/Upload/collaboration/${market}`;

    this.setState({
      market,
    });
  }

  render() {
    const { market } = this.state;
    let cdn = this.cdn;
    let commonCdn = this.commonCdn;
    let bdbdOpen = this.bdbdOpen;

    return (
      <Main>
        <OverviewBanner.container>
          <img src={addDomain(commonCdn, "w-landing-hope-title@2x.png")} alt={""} />
          <span>오프린트미 그리고 르빈치와 bdatbdon’t(비댓비돈)이 함께하는 연말 나눔 캠페인!</span>
          <span>
            Hope Market 통해 모인 기부금은 동물복지단체 &lt;비글구조네트워크&gt; <br />
            그리고 문화예술로 삶의 질을 높이는 &lt;서울문화재단&gt;에 수익금의 일부가 기부됩니다.
          </span>
          <span>희망을 전하는 길에 함께해주세요.</span>
        </OverviewBanner.container>
        <Navigation>
          <div>
            <a onClick={this.changeMarket} data-index={"revinci"}>
              <img src={addDomain(commonCdn, `tab-revinci-${market === "revinci" ? "on" : "off"}@2x.png`)} alt={""} />
            </a>
            <a onClick={this.changeMarket} data-index={"bdatbdon"}>
              <img src={addDomain(commonCdn, `tab-bdbd-${market === "revinci" ? (bdbdOpen ? "off" : "comingsoon") : "on"}@2x.png`)} alt={""} />
            </a>
          </div>
        </Navigation>
        <Contents.container>
          {market === "revinci" ? <RevinciBrandInfo cdn={cdn} /> : <BdatbdontBrandInfo cdn={cdn} />}
          <Items cdn={cdn} list={market === "revinci" ? REVINCI_PRODUCT_ITEMS : BDATBDON_PRODUCT_ITEMS} productCodeList={market === "revinci" ? REVINCI_PRODUCT_CODE_LIST : BDATBDON_PRODUCT_CODE_LIST} templateCodeList={market === "revinci" ? REVINCI_TEMPLATE_CODE_LIST : BDATBDON_TEMPLATE_CODE_LIST} market={market} />
        </Contents.container>

        <CommonContents />
      </Main>
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
    actions: {},
  };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Collaboration);
