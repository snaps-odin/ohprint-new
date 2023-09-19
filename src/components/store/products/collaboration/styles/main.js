import { css } from '@emotion/react'
import { textBold } from "./common";
import styled from "styled-components";
import {commonStyled} from "./common";
import { addCdn } from 'utils/url';

export const Main = styled.div`
  //width:1140px;
  min-width: 1200px;
  margin: 0 auto;
  -ms-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`


export const OverviewBanner = {
  container : styled.div`
    text-align: center;
    height: 667px;
    background: #dc8640;
    color:#ffffff;
    //border-bottom: 1px solid #eeeeee;
    background: url(${addCdn("/images/store/collaboration/w-landing-hope-kv@2x.png")}) center center / cover;

    > img{
      margin-top: 79px;
      width: 588px;
      height: 237px;
    }

    > span{
      font-size:20px;
      line-height: 30px;
    }

    > span:nth-child(2){
      font-family: ${commonStyled.fontBold};
      display: block;
      margin-top:30px;
    }

    > span:nth-child(3){
      display: block;
      margin-top:16px;
    }

    > span:nth-child(4){
      display: block;
      margin-top:16px;
    }
  `
}

export const Navigation = styled.div`
  margin-top:-100px;
  > div{
    position: relative;
    height: 90px;
    margin: 0 auto;
    text-align: center;
    //border-bottom: 1px solid #eeeeee;

    > a {
      position: absolute;
      left:50%;
      bottom:0;
      transform: translate(-50%, 0);
      display: block;
      //height: 47px;
      line-height: 50px;
      transition: 0.3s;

      > img{
        width: 400px;
        transition: 0.3s;
        //height: 90px;
      }

    }

    > a:nth-child(1){
      transform: translate(calc(-50% - 200px), 0);
    }

    > a:nth-child(2){
      transform: translate(calc(-50% + 200px), 0);
    }


  }
`;

export const Contents = {
  container : styled.div`
    width: 100%;

    > div{
      width: 100%;
      margin: 0 auto;
    }
  `,
}
