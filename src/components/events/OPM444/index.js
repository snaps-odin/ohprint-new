import React from 'react';

import { ImageMap } from '@qiuz/react-image-map';
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import styled from "styled-components";

import data from "./data.json";
import VideoThumbnail from "../video-thumbnail";

const Wrap = styled.div`
  position: relative;

  .gif-box {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 1140px;

    img {
      max-width: 100%;
    }
  }

  .video-box {
    z-index: 10;
    width: 1000px;
    height: 562px;
    position: absolute;
    bottom: 2362px;
    left: 70px;

    video {
      width: 1000px;
      height: 562px;
    }
  }

  .comments-container {
    position: absolute;
    bottom: 1222px;
    left: 70px;
    width: 1000px;
    height: 930px;

    iframe {
      width: 100%;
      height: 100%;
      background-color: #fff;

      .events-board-wrap {
        position: absolute;
        width: 100%;
        height: 100%;

        .bottom {
          position: absolute;
          bottom: 50px;
        }
      }
    }
  }
`;

const Marketing = styled.div`
  position: absolute;
  bottom:2.1%;
  left:50%;
  transform: translate(-50%, 0);
  > img{
    width: 24px;
    height: 24px;
  }

  > div.checkbox{
    > input{
      height: 24px;

      &:checked + label::before{
        background: #2c83e9;
      }
    }
    > label{
      height: 24px;
      line-height: 23.99px;
      padding-left:35px;
      box-sizing: border-box;
      &:before{
        width: 22px;
        height: 22px;
      }
      &:after{
        top: 3px;
        left: 3px;
        width: 16px;
        height: 8px;
        border-bottom: 4px solid rgb(255, 255, 255);
        border-left: 4px solid rgb(255, 255, 255);
      }
      > span.desc{
        font-family: YoonGothicPro740;
        font-size: 16px;
        text-align: center;
        color: #fff;
      }

    }
  }
  > span{
    font-family: YoonGothicPro740;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: -0.8px;
    text-align: center;
    color: #fff;
  }
`;
class OPM444 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageMapData : []
    }

    this.onMapClick = this.onMapClick.bind(this);
    this.initData = this.initData.bind(this);
    this.buildComments = this.buildComments.bind(this);
  }

  componentDidMount() {
    this.initData();
  }
  async initData(){
    const { handleOnReceiveMessage } = this.props;

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

    handleOnReceiveMessage(
      {
        data: {
          type: "buildComments",
          callbackMethod: this.buildComments,
        }
      });
  }

  buildComments(value) {
    const target = document.querySelector("#comments-iframe");
    target.src = value.path;
  }

  onMapClick(area, idx){
    const { handleOnReceiveMessage } = this.props;
    let { desc } = area;

    handleOnReceiveMessage({
      data : desc
    })
  }

  render() {
    return (
      <Wrap>
        <div className="gif-box">
          <img src="https://front-cdn.ohprint.me/map_event/444/pc/e_body/OPM_444.gif" alt=""/>
        </div>
        <ImageMap
          className="usage-map"
          src={`https://front-cdn.ohprint.me/map_event/444/pc/e_body/eventBody-444.jpg`}
          map={this.state.imageMapData}
          onMapClick={this.onMapClick}
        />
        <div className="video-box">
          <VideoThumbnail
            src="https://front-cdn.ohprint.me/map_event/444/pc/e_body/OPM_444.mp4"
            poster="https://front-cdn.ohprint.me/map_event/444/pc/e_body/video-thumbnail.png"
          />
        </div>
        <div id="comments-container" className="comments-container">
          <iframe
            id="comments-iframe"
            name="comments-iframe"
            src="/events/444/board?fromM=Y"
            frameBorder="0"
          ></iframe>
        </div>
        <input name="event-copy-text" defaultValue="" style={{ width: "1px", height: "1px", opacity: 0 }} />
      </Wrap>
    )
  }
}

const formName = "opm-444-form";

const mapStateToProps = (state) => {
  return {
    states: {
      currentForm: state.form[ formName ]
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: formName
})(OPM444))

