

import React from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';

import { PRODUCT_OVERVIEW } from 'configs/index';
import { ActionCommon, ActionUI, ActionProduct, ActionReview, ActionFair } from 'actions/index';
import { getDatasetByName, getPosition, getHeight } from 'utils/dom';
import { getScrollTop } from 'utils/scroll';
import { getDeepValue } from 'utils/json';
import { addDomain } from 'utils/url';

import KeyVisual from '../../overview/key-visual';
import Tab from 'components/common/tab-blue';
import Creators from './creators';
import Review from "../../overview/review";

class StoreOverview extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      tabInfo:[
        { idx:'0', label: '크리에이터' },
        { idx:'1', label: '고객 리뷰' }
      ],
      viewKeyVisual: '',
      creatorList: [],
      activeIndex: null,
      fixed: false,
      ready: false
    };

    this.sections = [];

    this.onFocusScroll = this.onFocusScroll.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.getTargetY = this.getTargetY.bind(this);
  }

  onFocusScroll(index) {
    let { actions: { handleUpdateUIScroll } } = this.props;

    handleUpdateUIScroll(this.getTargetY(index));
  }

  onScroll(event) {
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

  getActiveIndex() {
    return (this.navigation && this.navigation[ 'el' ])
      ?
      this.sections.reduce((target, section, index) => {
        (getDeepValue(section, 'el') && getPosition(section[ 'el' ]).top <= getHeight(this.navigation[ 'el' ]) + 100) && (target = index);

        return target;
      }, -1)
      :
      -1;
  }

  getTargetY(index) {
    return getPosition(this.sections[ index ][ 'el' ]).top + getScrollTop() - getHeight(this.navigation[ 'el' ]);
  }

  updateSections(index, scope) {
    let instance = scope && scope.getWrappedInstance ? (scope.getWrappedInstance() || {})[ 'wrappedInstance' ] : scope;

    this.sections[ index ] = instance;
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

  componentDidMount() {
    let { params: { category }, location: { query }, actions: { handleRequestProductGroup, handleRequestStoreFairCreator } } = this.props;
    let product = PRODUCT_OVERVIEW[ category.toUpperCase().replace(/-/g, '_') ];
    let reviewIndex = category.match(/apparel/i) ? 1 : (product[ 'children' ] || []).length;
    let params = {
      viewCode : "CRTR_PC_MAIN"
    }

    Promise.all([
      window.addEventListener('scroll', this.onScroll),
      handleRequestProductGroup(),
      handleRequestStoreFairCreator(params)
    ]).then((result) => {
      this.setState(update(this.state, {
        viewKeyVisual : { $set : addDomain(this.props.states.config.url.cdn, result[2].bannerImgUrl) },
        creatorList : { $set : result[2]},
        ready: { $set: true }
      }))
    }).then(() => {
      (query && query[ 'option' ]) && window.setTimeout(() => {
        let scrollIndex = -1;

        switch (String(query[ 'option' ])) {
          case 'review':
            scrollIndex = reviewIndex;
            break;
        }

        scrollIndex > -1 && this.onFocusScroll(scrollIndex, 'easeInExpo');
      }, 1000);

    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    let { actions, params, states, location } = this.props;
    let { activeIndex, fixed, ready, viewKeyVisual, tabInfo, creatorList } = this.state;
    let { category } = params;

    let isApparel = category.match(/apparel/i);
    let product = PRODUCT_OVERVIEW[ category.toUpperCase().replace(/-/g, '_') ];
    let reviewIndex = isApparel ? 1 : (product[ 'children' ] || []).length;
    let cdn = this.props.states.config.url.cdn;

    return ready &&
      (
        <div className="store-overview-wrap">
          <div className="container">
            <div className="top">
              <KeyVisual
                category = {category}
                selectView = {viewKeyVisual}
                type = "overview"
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

              <Creators
                creator={creatorList}
                type="box"
                location
                updateSections = {this.updateSections}
                ref = {(c) => {this.updateSections(0, c)}}
                states = {states}
              />

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
                ref = {(c) => {this.updateSections(reviewIndex, c)}}
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
      config: state.config,
      product: state.product
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleGetTemplateOptions: (data) => dispatch(ActionCommon.getTemplateOptions(data)),

      handleUpdateUIScroll: (targetY, easingType) => dispatch(ActionUI.updateUIScroll(targetY, easingType)),

      handleRequestProductGroup: () => dispatch(ActionProduct.requestProductGroup()),

      handleRequestReviews: (params) => dispatch(ActionReview.requestReviews(params)),

      handleRequestStoreFairCreator: (params) => dispatch(ActionFair.requestStoreFairCreator(params))
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(StoreOverview);
