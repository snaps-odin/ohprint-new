import React from 'react';
import styled from "styled-components";

import { ImageMap } from '@qiuz/react-image-map';

import data from "./data.json";
class OPM478 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageMapData : []
    }

    this.onMapClick = this.onMapClick.bind(this);
    this.initData = this.initData.bind(this);
  }

  componentDidMount() {
    this.initData();
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
  onMapClick(area, idx){
    const { handleOnReceiveMessage } = this.props;
    let { desc } = area;

    handleOnReceiveMessage({
      data : desc
    })
  }

  render() {
    const {eventNumber} = this.props;

    return (
      <Wrap>
        <div className="gif-box">
          <img src={`https://front-cdn.ohprint.me/map_event/${eventNumber}/pc/e_body/OPM_${eventNumber}.gif`} alt="gif"/>
        </div>
        <ImageMap
          className="usage-map"
          src={`https://front-cdn.ohprint.me/map_event/${eventNumber}/pc/e_body/eventBody-${eventNumber}.jpg`}
          map={this.state.imageMapData}
          onMapClick={this.onMapClick}
        />
      </Wrap>
    )
  }
}

module.exports = OPM478;


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
  `;
