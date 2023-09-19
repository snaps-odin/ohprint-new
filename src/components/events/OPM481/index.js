import React, {createRef} from 'react';
import styled from "styled-components";
import { ActionEvents } from "actions/index";


import { ImageMap } from '@qiuz/react-image-map';

import data from "./data.json";
import {requestEventsCommentsByIdx} from "../../../actions/events";
import {ActionLayer} from "../../../actions";
import {connect} from "react-redux";
import { addDomain } from 'utils/url';

const THUMBNAIL_LIST = [
  'thumb-bg-01',
  'thumb-bg-02',
  'thumb-bg-03',
];

class OPM481 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageMapData : [],
      isLoading: false,
      isNeedUpdate: false,
      offset: 0,
      limit: 10,
      items: [],
      totalCount: 0,
    }

    this.onMapClick = this.onMapClick.bind(this);
    this.initData = this.initData.bind(this);
    this.fetchItems = this.fetchItems.bind(this);
    this.getThumbnail = this.getThumbnail.bind(this);
    this.intersectionObserver = null;
    this.targetRef = createRef();
  }

  componentDidMount() {
    this.initData();

    this.intersectionObserver = new IntersectionObserver(
      entries => {
        const { isLoading } = this.state;

        if (!isLoading && entries[0].isIntersecting) {
          this.fetchItems();
        }
      },
      { rootMargin: '20px' }
    );

    this.intersectionObserver.observe(this.targetRef.current);
  }

  componentWillUnmount() {
    this.intersectionObserver.disconnect();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isNeedUpdate && prevState.isNeedUpdate !== this.state.isNeedUpdate) {
      this.fetchItems();
    }
  }

  async initData(){
    this.setState({
      imageMapData : data.map((item,idx) => {
        return {
          ...item,
          render: (area, index) => (
            <div style={{width: '100%', height: '100%', cursor: 'pointer'}}/>
          ),
        }
      })
    });
  }

  getThumbnail() {
    const randomNumber = Math.floor(Math.random() * 3);

    return THUMBNAIL_LIST[randomNumber];
  }

  onMapClick(area, idx){
    const { handleOnReceiveMessage } = this.props;
    let { type, desc } = area;

    const callback = () => this.setState({ isNeedUpdate: !this.state.isNeedUpdate });

    desc = {...desc, callback};

    handleOnReceiveMessage({
      data : {
        type,
        ...desc
      },
    });
  }

  async fetchItems() {
    let { limit, offset, items, isNeedUpdate } = this.state;

    const { actions: { handleRequestEventsCommentsByIdx } } = this.props;

    this.setState({
      isLoading: true,
    });

    if (isNeedUpdate) {
      offset = 0;
    }

    const { list } = await handleRequestEventsCommentsByIdx(481, { offset, limit });

    const newItems = isNeedUpdate ? list : [...items, ...list];

    this.setState({
      isLoading: false,
      items: newItems,
      offset: isNeedUpdate ? 10 : offset + 10,
      isNeedUpdate: false,
    });
  }

  render() {
    const { eventNumber, states: { cdn } } = this.props;
    const { items } = this.state;

    return (
      <Wrap>
        <ImageMap
          className="usage-map"
          src={`https://front-cdn.ohprint.me/map_event/${eventNumber}/pc/e_body/eventBody-${eventNumber}.jpg`}
          map={this.state.imageMapData}
          onMapClick={this.onMapClick}
        />
        <Content>
          <ul>
            {items.map(item => {
              const hashTag = item.attribute04.slice(1).split("#");
              const formattedHashTag = hashTag.map(item => {
                return `#${item}`;
              });

              return (
                <li>
                  <span>
                    {
                      item.attribute05 === "Y" ?
                      <img src={`${cdn}/${item.filePath}`} alt="" />
                      :
                      <img src={`https://front-cdn.ohprint.me/map_event/${eventNumber}/pc/e_body/${this.getThumbnail()}@2x.png`} alt="" />
                    }
                  </span>
                  <div>
                  <strong>{item.attribute09}</strong>
                  <span>
                    {item.bbsContents}
                  </span>
                  <em>
                    {formattedHashTag.join(' ')}
                  </em>
                  </div>
              </li>
            )})}
          </ul>
          <div ref={this.targetRef}></div>
        </Content>
      </Wrap>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    states: {
      user: state.user,
      cdn: state.config.url.cdn,
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleRequestEventsCommentsByIdx: (idx, params) => dispatch(ActionEvents.requestEventsCommentsByIdx(idx, params)),
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(OPM481);


const Wrap = styled.div`
  position: relative;
`;

const Content = styled.div`
  position: relative;
  padding: 100px 140px 120px;
  background-color: #f0f7fa;

  ul {
    //display: flex;
    //flex-wrap: wrap;
    column-width: 420px;
    column-gap: 20px;

    li {
      //display: inline-block;
      //width: 49%;
      background: #fff;
      border: 1px solid #000;
      border-radius: 20px;
      transition: opacity .4s ease-in-out;
      margin-top: 20px;
      column-break-inside: avoid;

      //:nth-child(2n) {
      //  margin-left: 13px;
      //}

      :nth-child(1) {
        margin-top: 0 !important;
      }

      > span {
        display: block;
        position: relative;

        img {
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          width: 100%;
          -ms-user-select: none;
          -khtml-user-select: none;
          -webkit-user-select: none;
          user-select: none;
        }
      }

      > div {
        padding: 30px;

        strong {
          display: block;
          font-size: 24px;
          letter-spacing: -1.09px;
        }

        span {
          display: block;
          margin-top: 15px;
          font-size: 16px;
          line-height: 1.5;
          letter-spacing: -0.5px;
          line-break: anywhere;
        }

        em {
          display: block;
          margin-top: 20px;
          border-top: 1px solid #ccc;
          padding-top: 20px;
          line-height: 1.5;
          letter-spacing: -0.5px;
        }
      }
    }
  }
`;

const TestBtn = styled.button`
  width: 200px;
  height: 100px;
  border: 1px solid crimson;
`
