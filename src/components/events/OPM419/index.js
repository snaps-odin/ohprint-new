import React from 'react';

import { ImageMap } from '@qiuz/react-image-map';
import {connect} from "react-redux";

import styled from "styled-components";
import {MARKETING_AGREE} from "../../../constants/layer-types";
import {Field, reduxForm} from "redux-form";
import {CheckBoxField} from "../../common/fields";
import * as Validate from "../../../utils/validate";

const Wrap = styled.div`
  position: relative;
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
class OPM419 extends React.Component {
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
    let data = await import("./data.json");

    this.setState({
      imageMapData : data.map((item,idx) => {
        return {
          ...item,
          render: (area, index) => (
            <div style={{width: '100%', height: '100%', cursor: 'pointer'}}/>
          ),
        }
      })
    })
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
        <ImageMap
          className="usage-map"
          src={`https://cdn.ohprint.me/Upload/Data1/event/202302/OPM419/pc/web@2x.jpg`}
          map={this.state.imageMapData}
          onMapClick={this.onMapClick}
        />
        <input name="event-copy-text" defaultValue="" style={{ width: "1px", height: "1px", opacity: 0 }} />
      </Wrap>
    )
  }
}

const formName = "opm-419-form";

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
})(OPM419))

