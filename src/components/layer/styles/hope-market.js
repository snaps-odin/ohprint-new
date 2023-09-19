
import { jsx } from "@emotion/react";

import styled from "styled-components";
import {css} from "@emotion/react";
import {commonStyled} from "../../store/products/collaboration/styles/common";

export const HOPE_MARKEY = {
  main : styled.div`
    width: 1000px;
    > button.close{
      z-index: 2000;
    }
  `,

  title : styled.div`
    position: relative;
    display: table;
    width: 100%;
    height: 50px;
    background: #000000;

    > span{
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      font-size:16px;
      color:#ffffff;
      font-family: ${commonStyled.fontBold};
    }

    > div{
      position: absolute;
      top:0;
      right:0;
      height: 100%;
    }
  `,
  contents : styled.div`
    width: 100%;
  `
}

export const PRODUCT_CONTENTS_INFORMATION = {
  container : styled.div`
    float: left;
    width: 680px;
    height: 100%;
    padding:0 20px 60px 20px;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;

    > img{
      width: 640px;
      height: 440px;
      margin-top:40px;
    }

    > img:first-child{
      margin-top:20px;
    }

    > div.line{
      width: 100%;
      height: 1px;
      background: #eeeeee;
      margin-top:60px;
    }

    > span{
      display: block;
      text-align: center;
    }

    > span.title{
      font-family: ${commonStyled.fontBold};
      color:#191919;
      line-height: 26px;
      font-size:20px;
      margin-top:40px;
    }

    > span.description{
      color:#191919;
      line-height: 24px;
      font-size:14px;
      margin-top:10px;
    }

    > span.soloDescription{
      color:#191919;
      line-height: 24px;
      font-size:14px;
      margin-top:20px;
    }

    > div.bdbd{
      > img{
        display: block;
        width: 100%;
      }

      > img:nth-child(1){
        margin-top:40px;
      }

      > span{
        display: block;
        color:#191919;
        text-align: center;
      }

      > span:nth-child(2){
        font-family: ${commonStyled.fontBold};
        font-size:20px;
        line-height: 26px;
        margin: 40px 0 20px 0;
      }

      > span:nth-child(3){
        font-size:14px;
        line-height: 24px;
        margin-bottom: 40px;
      }

      > img:nth-child(5){
        margin-top:20px;
      }

      > img:nth-child(6){
        display: inline-block;
        width: calc(50% - 10px);
        margin: 20px 20px 0 0;

      }

      > img:nth-child(7){
        display: inline-block;
        width: calc(50% - 10px);
        margin: 20px 0 0 0;
      }

      > div.line{
        width: 100%;
        height: 1px;
        background: #eeeeee;
        margin: 40px 0 40px 0;
      }

      > img:nth-child(9){

      }

      > span.subTitle{
        font-family: ${commonStyled.fontBold};
        font-size:16px;
        line-height: 22px;
        margin-top:20px;
      }
      > span.subDescription{
        font-size:14px;
        line-height: 24px;
        margin-top:20px;
      }

      > img.subImage1{
        margin-top:40px;
      }

      > div.sizeInfo{
        width: 100%;
        display: table;
        margin-top:40px;
        text-align: center;
        border-top:1px solid #191919;

        > div{
          width: 20%;
          font-family: ${commonStyled.fontBold};

        }

        > div.sizeCaption,
        > div.sizeRow{
          display: table-row;

          > div{
            display: table-cell;
            vertical-align: middle;
            text-align: center;
            width: 20%;
            padding: 18px 0;

            &:nth-child(1),
            &:nth-child(2),
            &:nth-child(3),
            &:nth-child(4){
              border-bottom:1px solid #eeeeee;
              border-right:1px solid #eeeeee;
            }

            &:nth-child(5){
              border-bottom:1px solid #eeeeee;
            }
          }


        }

        > div.sizeCaption{
          background: #f9fafc;
        }
      }

      > div.commonEvent{
        width: 100%;
        padding-bottom:1px;


        > img{
          display: block;
          width: 100%;
        }

        > span{
          display: block;
          color:#191919;
          text-align: center;
        }

        > span:nth-child(1){
          font-size:20px;
          line-height: 26px;
          margin-top:40px;
        }

        > img:nth-child(2){
          margin-top:30px;
        }

        > span:nth-child(3),
        > span:nth-child(5){
          font-size:14px;
          line-height: 24px;
          margin-top:20px;
        }

        > img:nth-child(4){
          margin-top:40px;
        }


      }

      > img.clear{
        display: none;
      }
    }
  `,
}

export const PRODUCT_CONTENTS_POPCART = {
  container : styled.div`
    float: left;
    width: 320px;
    height: 100%;
    background: #fafafa;

    > form{
      height: 100%;
    }
  `,
  btnCart : styled.button`
    width: 100%;
    height: 50px;
    background: #2c82e8;
    font-family: ${commonStyled.fontNormal};
    font-size:16px;
    text-align: center;
    line-height: 15px;
    color:#FFFFFF;
    transition: 0.3s;
  `,
  map : styled.div`
    position:relative;
    width: 100%;
    height: 100%;
  `,
  options : styled.div`
    width: 100%;
    padding:40px 20px 0 20px;
    box-sizing: border-box;

    > span.optionTitle{
      display: block;
      width: 100%;
      font-family: ${commonStyled.fontBold};
      font-size: 20px;
      line-height: 28px;
    }

    > span.optionDescription{
      position: relative;
      display: block;
      padding-left:9px;
      font-size:11px;
      margin: 20px 0 20px 0;

      &:before {
        position: absolute;
        display: inline-block;
        top: 3px;
        left: 0;
        width: 3px;
        height: 3px;
        content: '';
        background: #2c83e9;
      }
    }

    > div{
      &:nth-child(n){
        margin-top:20px;
      }

      &:nth-child(2){
        margin-top:27px;
      }

      &:first-child{
        margin-top:0;
      }

      > span{
        display: block;
        width: 100%;
        //height: 28px;
        font-family: ${commonStyled.fontBold};
        font-size:20px;
        line-height: 28px;
      }



      > span.title{
        font-family: ${commonStyled.fontBold};
        font-size:13px;
        line-height: 22px;
        margin-top:32px;
      }

      > span.labelTitle{
        font-family: ${commonStyled.fontBold};
        font-size:13px;
        line-height: 22px;
        margin-top:32px;
        margin-bottom:10px;
      }

      > span.fristTitle {

      }

      > span.description{
        font-family: ${commonStyled.fontNormal};
        font-size:12px;
        line-height: 22px;
      }

      > dl{
        > dt{
          color: #191919;
          font-size:12px;
          line-height: 21px;
          margin: 20px 0 20px 0;
        }

        > dd{
          position: relative;
          padding-left:9px;
          font-size:11px;
          line-height: 19px;

          &:before {
            position: absolute;
            display: inline-block;
            top: 6px;
            left: 0;
            width: 3px;
            height: 3px;
            content: '';
            background: #2c83e9;
          }
        }

        > dd:first-child{
          margin-top:0;
        }
      }

      > div{
        > div{
          width: 100%;
          > button{
            outline: 1px solid #cccccc !important;
            color: #191919 !important;
          }
        }
      }
    }
  `,
  totalPrice : styled.div`
    width: 100%;
    height: 114px;
    padding: 20px 20px 0 20px;
    box-sizing: border-box;

    > div:first-child{
      font-size:12px;
      color:#191919;
      text-align: right;
      margin-bottom:20px;
    }

    > div:last-child{
      color:#191919;
      font-family: ${commonStyled.fontBold};

      > span{
        display: inline-block;
        width: 50%;
        &:nth-child(2){
          font-size:18px;
          color:#f02222;
          text-align: right;
        }
      }
    }

  `,
  bottom : styled.div`
    position: absolute;
    width: 100%;
    bottom:0;
    > div.line{
      display: block;
      width: 280px;
      margin:0 auto;
      height: 1px;
      background: #eeeeee;
    }
  `,

  itemList : styled.div`
    position: absolute;
    width: 100%;
    max-height: 226px;
    min-height: 96px;
    bottom:164px;
    padding:0 20px;
    box-sizing: border-box;
    //border-bottom:1px solid #eeeeee;
    //border-top:1px solid #eeeeee;
    > div{
      overflow-y: auto;
      width: 100%;
      height: 100%;
      max-height: 226px;
      min-height: 96px;
      //border-bottom:1px solid #eeeeee;
      //border-top:1px solid #eeeeee;
      padding:20px 0;
      box-sizing: border-box;

      > div{
        margin-top:20px;

        &:first-child{
          margin-top:0;
        }
      }

    }
  `,

  item : styled.div`
    line-height: 18px;

      > span{
        display: block;
        color:#191919;
        font-family: ${commonStyled.fontBold};
        margin-bottom:6px;
      }

      > div{
        position:relative;
        > div{
          > div{
            width: 140px;
            background: #FFFFFF;
            >div{
              width: 60px;
            }
            > button{
              width: 40px;
            }
          }
        }

        > div:last-child{
          position: absolute;
          right:0;
          bottom:7.5px;
          > span{
            color:#191919;
            font-family: ${commonStyled.fontBold};
            margin-right:10px;
          }
        }
      }

  `,

  noCardItem : styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 54px;
  `
}



