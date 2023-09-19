import React from "react";

import { goEvents, goStore, goLink, addCdn } from "utils/url";
import { breaklines } from 'utils/string';
import styled from "styled-components";
import {gtmV4_click_banner_main} from "../../../configs/google-analytics/ga-v4";



export default class SlideTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.interval = {
      id: null,
      sec: 5000
    };

    this.state = {
      ready : false
    }

    this.containerDiv = null;
    this.divBox = null;
    this.img = null;
    this.h1 = null;
    this.p = null;
    this.button = null;




    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { style } = this.props;

    this.setTimer();

    this.containerDiv = styled.div`
        height: 500px;
        background: url("${(style.backgroundImage)}") 50% 0 / cover no-repeat;
        cursor: pointer;
    `;

    this.divBox = styled.div`
        position: relative;
        width: 1140px;
        margin: 0 auto;

        &:after {
          content: '';
          display: block;
          clear: both;
        }
        padding: 98px 0 0 0;
        text-align: left;
        ${style.divBox}
    `;

    this.h1 = styled.h1`
        padding: 23px 0 0 0;
        font-size: 32px;
        line-height: 1.35;
        color: #fff;
        ${style.h1}
    `;

    this.img = styled.img`
        ${style.img}
    `;

    this.p = styled.p`
        padding: 15px 0 40px 0;
        font-size: 14px;
        line-height: 23px;
        color: #fff;
        font-family: 'YoonGothicPro740';
        ${style.p}
    `;

    this.button = styled.button`
        padding: 15px 60px;
        font-size: 12px;
        color: #fff;
        text-align: center;
        border: 1px solid #fff;
        &:hover{
          border: 1px solid #fff;
        }

        ${style.button}
    `;


    this.setState({
      ready : true
    })
  }

  componentDidUpdate(prevProps, prevState) {
    let { isActive } = this.props;

    isActive ? this.setTimer() : this.clearTimer();
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  onMouseEnter() {
    let { totalCount } = this.props;

    totalCount > 1 &&
    Promise.all([(this.interval["isPause"] = true)]).then(() => {
      this.clearTimer();
    });
  }

  onMouseLeave() {
    let { totalCount } = this.props;

    totalCount > 1 &&
    Promise.all([(this.interval["isPause"] = false)]).then(() => {
      this.setTimer();
    });
  }

  onClick(event) {
    const {idx, style } = this.props;
    gtmV4_click_banner_main({
      click_text: idx,
      alt_tag: `event${idx}`,
      img_url: style.backgroundImage || "",
    })


    let bigIn = {
      id: "",
      name : "",
      price: 0,
      category: ""
    }

    if(idx === 105){
      goStore('overview', 'sticker', null, null,{
        location : 'BANNER',
        type : '',
        etAction :  '스티커'
      });
    }else

    if(idx === 106){
      goStore('overview', 'apparel', null, null,{
        location : 'BANNER',
        type : '',
        etAction :  '어패럴'
      });
    }else

    if(idx === 107) {
      goLink('/store/md/overview', {
        location: 'BANNER',
        type: '',
        etAction: 'MD'
      });
    }else

      if(idx === 108){
        goStore('overview', 'business-card', null, null,{
          location : 'BANNER',
          type : '',
          etAction :  '명함'
        });
      }else

      if(idx === 109){
        goStore('overview', 'banner', null, null,{
          location : 'BANNER',
          type : '',
          etAction :  '배너/현수막'
        });
      }else

      if(idx === 110){
        goStore('overview', 'signs-posters', null, null,{
          location : 'BANNER',
          type : '',
          etAction :  '사인/포스터'
        });
      }else

      if(idx === 111){
        bigIn.id="defaults";
        bigIn.name="봉투";
        bigIn.category="envelope";

        goStore('intro', 'envelope', 'defaults', null,{
          location : 'OVERVIEW_BANNER',
          type : '',
          etAction :  '봉투',
          dimension4 : '봉투',
          ...bigIn
        });
      }else

      if(idx === 112){
        goLink('/overview/eraser', {
          location: 'BANNER',
          type: '',
          etAction: '오려내기'
        });
      }else

      if(idx === 135){
        bigIn.id="defaults";
        bigIn.name="쇼핑백";
        bigIn.category="shoppingbag";

        goStore('intro', 'shoppingbag', 'defaults', null,{
          location : 'OVERVIEW_BANNER',
          type : '',
          etAction :  '쇼핑백',
          dimension4 : '쇼핑백',
          ...bigIn
        });
      }else

      if(idx === 150){
        bigIn.id="defaults";
        bigIn.name="캘린더";
        bigIn.category="calendar-desk";

        goStore('intro', 'calendar-desk', 'defaults', null,{
          location : 'OVERVIEW_BANNER',
          type : '',
          etAction :  '캘린더',
          dimension4 : '캘린더',
          ...bigIn
        });
      }else


    (!!this.onCheckNumber(idx))  && goEvents(idx);
  }

  onCheckNumber(value){
    return (!value || (value && !isNaN(Number(value))));
  }

  setTimer() {
    let {
      index,
      isActive,
      actions: { handleChange }
    } = this.props;

    Promise.all([this.clearTimer()]).then(() => {
      isActive &&
      (this.interval["id"] = window.setTimeout(() => {
        handleChange(index);
      }, this.interval["sec"]));
    });
  }

  clearTimer() {
    this.interval["id"] && window.clearInterval(this.interval["id"]);
  }

  render() {
    const {idx, image, des, title, titleImage, btnText, isBtn } = this.props;
    const { ready } = this.state;


    const Container = this.containerDiv || styled.div``;
    const DivBox = this.divBox || styled.div``;
    const H1  = this.h1 || styled.h1``;
    const Img = this.img || styled.img``;
    const P = this.p || styled.p``;
    const Button = this.button || styled.button``;

    let desConvert = String(des).replace(/&lt;/g,"<");
    desConvert = String(desConvert).replace(/&gt;/g,">");



    return !!ready && (
      <Container onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.onClick}>
        <DivBox className="box centered">
          {image && <Img alt={`event${idx}`} src={`${image}`}/>}
          {image && <br/>}

          {titleImage && <span className={`icon icon-${titleImage}`}/>}
          {titleImage && <br/>}

          {title && <H1 dangerouslySetInnerHTML={{ __html: breaklines(title) }}/>}
          {title && <br/>}
          {des && <P dangerouslySetInnerHTML={{ __html: breaklines(desConvert) }}/>}<br/>

          {!!isBtn && <Button type="button">
            {btnText ? `${btnText}` : '자세히 보기'}
          </Button>}

        </DivBox>
      </Container>
    );
  }
}
