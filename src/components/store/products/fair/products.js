

import React from 'react';
import { connect } from 'react-redux';

import Tab from 'components/common/tab-blue';
import update from "react-addons-update";
import Review from "../../overview/review";

import Recommend from "./recommend";
import ProductItem from "./product-item";
import { getPosition, getHeight } from 'utils/dom';
import { getScrollTop } from 'utils/scroll';
import { getDeepValue } from 'utils/json';
import KeyVisual from '../../overview/key-visual';
import { goBack } from 'utils/url';
import { PRODUCTS } from 'configs/products/index';

import { ActionCommon, ActionUI, ActionLayer, ActionProduct, ActionReview, ActionFair } from 'actions/index';
import Service from "./service/index";
import Showcase from "./service/showcase";

class StoreOverview extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      tabInfo: [],
      productList : [],
      creator:null,
      activeIndex: null,
      isApparel:false,
      fixed: false,
      ready:false
    }

    this.sections = [];

    this.onFocusScroll = this.onFocusScroll.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.getTargetY = this.getTargetY.bind(this);
    this.geProductService = this.geProductService.bind(this);
    this.onFocusScroll = this.onFocusScroll.bind(this);
  }

  onScroll(event){
    let { activeIndex: currentActiveIndex, fixed: currentFixed } = this.state;

    let fixed = this.navigation && this.navigation[ 'el' ]
      ? (
        !currentFixed
          ? getPosition(this.navigation[ 'el' ]).top <= 0
          : getPosition(this.bottom).top <= getHeight(this.navigation[ 'el' ])
      )
      : false;

    let activeIndex = this.getActiveIndex();

    (

       fixed !== currentFixed ||
      activeIndex !== currentActiveIndex
    ) && this.setState(update(this.state, {
      activeIndex: { $set: activeIndex },
      fixed: { $set: fixed }
    }));
  }

  getActiveIndex(){
    return (this.navigation && this.navigation[ 'el' ])
      ?
      this.sections.reduce((target, section, index) => {
        (getDeepValue(section, 'el') && getPosition(section[ 'el' ]).top <= getHeight(this.navigation[ 'el' ]) + 100) && (target = index);

        return target;
      }, -1)
      :
      -1;
  }

  getTargetY(index){
    return getPosition(this.sections[ index ][ 'el' ]).top + getScrollTop() - getHeight(this.navigation[ 'el' ]);
  }

  updateSections(index, scope){
    let instance = scope && scope.getWrappedInstance ? (scope.getWrappedInstance() || {})[ 'wrappedInstance' ] : scope;

    this.sections[ index ] = instance;
  }

  onFocusScroll(index){
    let { actions: { handleUpdateUIScroll } } = this.props;

    handleUpdateUIScroll(this.getTargetY(index));
  }

  geProductService(){

  }
  componentDidUpdate(prevProps, prevState) {
    !Object.is(JSON.stringify(prevProps.params.subCategory), JSON.stringify(this.props.params.subCategory)) && this.initialize();
  }

  initialize = () => {
    let { location : { query }, actions: { handleRequestProductGroup, handleRequestStoreFairCreatorDetail, handleRequestStoreFairCreator, handleOpenAlertLayer } } = this.props;
    let subCategory = this.props.params.subCategory;
    let params = {
      offset : 0,
      limit : 20
    };

    //oif-25-day-kv@2x.jpg
    //oif-25-day-product-01@2x.jpg


    Promise.all([
      window.addEventListener('scroll', this.onScroll),
      handleRequestProductGroup(),
      handleRequestStoreFairCreatorDetail(subCategory, params),
      handleRequestStoreFairCreator()
    ]).then((result) => {
      let commonKeyVisualContents = (PRODUCTS.FAIR)[ this.props.params.subCategory ];
      commonKeyVisualContents = commonKeyVisualContents[ 'SERVICE' ] && (commonKeyVisualContents[ 'SERVICE' ]  || {} );
      let creatorKeyVisualContents = commonKeyVisualContents && commonKeyVisualContents[ 'attentions' ];
      let viewKeyVisual = (commonKeyVisualContents && commonKeyVisualContents[ 'keyVisualImage' ]);

      let tabNams = [
        { idx: '0', label: '상품' },
        { idx: '1', label: '갤러리' },
        { idx: '2', label: '배송/교환/환불' },
        { idx: '3', label: '고객 리뷰' }
      ];

      let tabNamsApparel = [
        { idx: '0', label: '상품' },
        { idx: '1', label: '갤러리' },
        { idx: '2', label: '사이즈 및 세탁/관리(어패럴)' },
        { idx: '3', label: '배송/교환/환불' },
        { idx: '4', label: '고객 리뷰' }
      ];


      let creatorApparelCount = (result[2].pairCreatorProductList || []).find((item) => (item.apparelCheck === "Y"));
      let isApparel = (!!creatorApparelCount);


      this.setState(update(this.state, {
        isApparel : { $set : isApparel},
        tabInfo: { $set :(isApparel  ? tabNamsApparel : tabNams) },
        viewKeyVisual : { $set : viewKeyVisual},
        creatorKeyVisualContents : { $set : creatorKeyVisualContents},
        productList : { $set : result[2]},
        creator : { $set : result[3] },
        ready: { $set: true }
      }))
    }).then(() => {
      (query && query[ 'option' ]) && window.setTimeout(() => {
        let scrollIndex = -1;

        switch (String(query[ 'option' ])) {
          case 'review':
            scrollIndex = 0;
            break;
        }

        scrollIndex > -1 && this.onFocusScroll(scrollIndex, 'easeInExpo');
      }, 1000);

    }).catch((err)=>{
      handleOpenAlertLayer({
        description: err,
        callback: () => {
          goBack();
        }
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    let { params: { category: nextCategory }, location: nextLocation } = nextProps;
    let { params: { category: currentCategory }, location: currentLocation } = this.props;

    return !(
      Object.is(nextCategory, currentCategory) &&
      Object.is(JSON.stringify(nextState), JSON.stringify(this.state)) &&
      Object.is(JSON.stringify(nextLocation), JSON.stringify(currentLocation))
    );
  }

  componentWillMount() {


    /**/
  }

  componentDidMount() {
    this.initialize();
  }

  render() {
    let { actions, params, states, location, states: { config: { url: { cdn: cdn } } } } = this.props;
    let { activeIndex, fixed, ready, tabInfo, productList, creatorIntroduce, creator, viewKeyVisual, creatorKeyVisualContents, isApparel } = this.state;
    let subCategory = this.props.params.subCategory;
    let category = this.props.params.category;


    let { COMMON, SERVICE } = PRODUCTS[ 'FAIR' ][subCategory];
    let { showcases } = COMMON || {};
    let services = SERVICE && SERVICE[ 'services' ];
    let children = getDeepValue(tabInfo || [], `${activeIndex}.children`);



    return ready && (
      <div className="store-overview-wrap">
        <div className="container">
          <div className="top">
            <KeyVisual
              category
              selectView = {viewKeyVisual || 'none'}
              type = "creator"
              creatorContents = {creatorKeyVisualContents}
            />
          </div>

          <Tab
            names =  {tabInfo}
            focused =  {activeIndex}
            className =  {fixed ? 'fixed' : null}
            actions = {{ handleSelect : this.onFocusScroll}}
            ref =  {(c) => { this.navigation = c}}
          />

          <div className={`bottom ${fixed ? 'fixed' : ''}`} ref={(c) => {this.bottom = c;}}>
            <ProductItem
              product={productList}
              type="box"
              location={location}
              ref = {(c) => {this.updateSections(0, c)}}
              actions = {actions}
              states = {states}
              productInfo = {PRODUCTS.FAIR}
            />

            <section className={`store-overview-service-wrap fixed`}>
              {(services || []).length > 0 && (
                (services || []).reduce((target, service) => {

                  let showcase = getDeepValue(showcases, service) || {};
                  let menuIndex = showcase[ 'menuIndex' ];


                  if(!!isApparel && menuIndex && menuIndex >= 2 && showcase['title'] !== "사이즈 및 세탁/관리"){
                    menuIndex+=1;
                  }


                  showcase && target.push(
                    React.cloneElement(<Showcase/>, {
                      cdn,
                      showcase,
                      category,
                      ref: c => {c && c[ 'el' ] && (this.updateSections(menuIndex,c));}
                    })
                  );

                  return target;
                }, [])
              )}
            </section>


            <Review
              states = {states}
              actions = {
                {
                  ...actions,
                  handleFocusScroll: this.onFocusScroll
                }
              }
              params = {params}
              ready = {ready}
              ref = {(c) => {this.updateSections(tabInfo.length-1, c)}}
            />

            <Recommend
              params = {params}
              creator = {creator}
              states = {states}
            />


          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    states: {
      config: state.config
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleGetTemplateOptions: (data) => dispatch(ActionCommon.getTemplateOptions(data)),

      handleUpdateUIScroll: (targetY, easingType) => dispatch(ActionUI.updateUIScroll(targetY, easingType)),

      handleRequestProductGroup: () => dispatch(ActionProduct.requestProductGroup()),
      handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options)),

      handleOpenContentsLayer: (type, options) => dispatch(ActionLayer.openContentsLayer(type, options)),

      handleRequestReviews: (params) => dispatch(ActionReview.requestReviews(params)),
      handleCloseContentsLayer: () => dispatch(ActionLayer.closeContentsLayer()),
      handleExecuteAfterUserLogin: () => dispatch(ActionCommon.executeAfterUserLogin()),
      handleRequestStoreFairCreator: () => dispatch(ActionFair.requestStoreFairCreator()),
      handleRequestStoreFairCreatorDetail: (params) => dispatch(ActionFair.requestStoreFairCreatorDetail(params)),
      handleCreateStoreFairCart: (prdCode,itemCnt) => dispatch(ActionFair.createStoreFairCart(prdCode,itemCnt)),
      handleOpenLoadingLayer: (options) => dispatch(ActionLayer.openLoadingLayer()),
      handleCloseLoadingLayer: () => dispatch(ActionLayer.closeLoadingLayer())

    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(StoreOverview);
