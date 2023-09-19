

import React from 'react';
import styled from "styled-components";
import { connect } from 'react-redux';

class EventsConfirmBeforehand extends React.Component {
  constructor(...args) {
    super(...args);

    this.onClickClose = this.onClickClose.bind(this);
  }

  onClickClose(event) {
    let { actions: { handleCloseContentsLayer } } = this.props;
    handleCloseContentsLayer();
  }

  render() {
    let { options: { width, height, imgUrl, title } } = this.props;

    return (
      <Container>
        <Top>{title}</Top>
        <ImageWrap width={width} height={height}>
          <img src={imgUrl} alt='notice-image' />
          <ConfirmBtn onClick={this.onClickClose}>
            내용 확인했어요
          </ConfirmBtn>
        </ImageWrap>
        <CloseBtn className="icon icon-close-w-1414 close" type="button" onClick={this.onClickClose} />
      </Container>
    )
  }
}

const mapStateToProps = (state, ownerProps) => {
  return {}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      ...ownerProps.actions
    }
  }
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(EventsConfirmBeforehand);


const Container = styled.div``;

const ImageWrap = styled.div`
  width : ${({width}) => width}px;
  height: ${({height}) => height}px;
  position:relative;

  img{
    width: 100%;
    height: 100%;
  }
`

const Top = styled.div`
  padding: 15px 0;
  line-height: 21px;
  background-color: #2c313a;
  text-align: center;
  color: white;
  font-size: 16px;
  text-align: center;
`
const ConfirmBtn = styled.button`
  width: 184px;
  height: 40px;
  background-color: #000;
  color: white;
  position:absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);

`;

const CloseBtn = styled.button``;
