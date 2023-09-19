import styled from "styled-components";
import {css} from "@emotion/react";
import {commonStyled} from "./common";

export const MainItems = {
  container : styled.div`
    width: 100%;
    min-height: 796px;
    padding: 70px 0 100px 0;
  `,
  title : styled.span`
    display: block;
    font-size:42px;
    text-align: center;
    line-height: 64px;
    margin: 0 0 60px 0;
  `,
  item : {
    container : styled.div`
    `,
    individually : styled.div`
      display: inline-block;
      width: 360px;
      //height: 666px;
      cursor: pointer;
      transition: 0.3s;
      padding-bottom:40px;
      box-sizing: border-box;

      &:hover{
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

        > button{
          background: #f49f3a;
        }
      }

      &:nth-child(3n-1){
        margin: 0 30px 0 30px;
      }

      &:nth-child(n+4){
        margin-top:40px;
      }

      > img{
        width: 100%;
      }

      > button{
        display: block;
        width: 180px;
        padding: 10px 48px 10px 49px;
        border-radius: 25px;
        background: #5f5f5f;
        color:#ffffff;
        font-size:16px;
        margin: 0 auto;
        margin-top:16px;
        transition: 0.3s;
      }

      > span{
        display: block;
        font-size:18px;
        line-height: 32px;
        text-align: center;

        > em{
          text-decoration: line-through;
          color:#f02222;
        }

        &:nth-child(2){
          margin-top:30px;
        }

        &:nth-child(3){
          margin-top:11px;
          font-family: ${commonStyled.fontBold};
        }
      }
  `

  },
}
