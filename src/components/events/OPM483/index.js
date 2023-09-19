import React from 'react';
import styled from "styled-components";

import { ImageMap } from '@qiuz/react-image-map';

import data from "./data.json";
class OPM483 extends React.Component {
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
        <div className="gif-box transparent">
          <img src={`https://front-cdn.ohprint.me/map_event/${eventNumber}/pc/e_body/transparent.gif`} alt="gif"/>
        </div>
        <div className="gif-box hologram">
          <img src={`https://front-cdn.ohprint.me/map_event/${eventNumber}/pc/e_body/hologram.gif`} alt="gif"/>
        </div>
        <div className="gif-box silver">
          <img src={`https://front-cdn.ohprint.me/map_event/${eventNumber}/pc/e_body/silver.gif`} alt="gif"/>
        </div>
        <div className="gif-box gold">
          <img src={`https://front-cdn.ohprint.me/map_event/${eventNumber}/pc/e_body/gold.gif`} alt="gif"/>
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

module.exports = OPM483;


const Wrap = styled.div`
  position: relative;

  .gif-box {
    z-index: 1;
    position: absolute;
    width: 38%;

    img {
      max-width: 100%;
    }
  }

  .transparent{
    background-color: pink;
    top:38.2%;
    left: 11.86%;
  }

  .hologram{
    top:38.2%;
    left: 50.4%;
  }

  .silver{
    top:46.6%;
    left: 11.86%;
  }

  .gold{
    top:46.6%;
    left: 50.4%;
  }
  `;

