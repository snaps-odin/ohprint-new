import styled from "styled-components";
import {css} from "@emotion/react";
import {commonStyled} from "../../styles/common";
import { addCdn } from 'utils/url';

export const brandInfo = {
  container : styled.div`
      width: 100%;
    `,

  contents1 : {
    container : styled.div`
        height: 858px;
        background: url(${addCdn("/images/store/collaboration/revinci/w-revinci-bg@2x.jpg")}) center center / cover;
      `,
      box : styled.div`
        width: 556px;
        height: 100%;
        margin: 0 auto;

        > img{
          display: block;
          width: 100%;
          margin: 0 auto;
          box-sizing: border-box;

          &:nth-child(1){
            width: 258px;
            padding-top:92px;
          }

          &:nth-child(2){
            width: 400px;
            margin-top:40px;
          }
        }

        > button{
          display: block;
          margin:0 auto;
          margin-top:30px;
          width: 260px;
          height: 60px;
          background: url(${addCdn("/images/store/collaboration/revinci/btn-revinci@2x.png")}) center center / cover;
          &:hover{
            background: url(${addCdn("/images/store/collaboration/revinci/btn-revinci-hover@2x.png")}) center center / cover;
          }
        }

        > span{
          display: block;
          margin-top: 30px;
          text-align: center;
          font-size:20px;
          line-height: 32px;
          color:#191919;

        }
      `
  },

  contents2 : {
    container : styled.div`
        height: 1152px;
        background: #fafafa;
      `,
      box : styled.div`
        height: 100%;
        box-sizing: border-box;
        padding-top:70px;
        text-align: center;

        > img{
          display: block;
          width: 361px;
          margin: 60px auto 30px auto;
        }
        > a{
          font-size:20px;
          line-height: 36px;
          color:#f49f3a;
          text-decoration: underline;
          cursor: pointer;
        }

        > span{
          display: block;
          text-align: center;

          &:nth-child(1){
            font-size:42px;
            font-family: ${commonStyled.fontBold};
          }



          &:nth-child(4){
            font-size:20px;
            line-height: 36px;
            margin:30px 0 28px 0 ;
          }

        }

        > div{
          width: 720px;
          height: 312px;
          padding: 40px 118px 40px 119px;
          border-radius: 24px;
          box-shadow: 0 4px 4px 0 rgba(195, 195, 195, 0.2);
          background-color: #fff;
          margin: 0 auto;
          box-sizing: border-box;

          > span{
            display: block;
            font-size:20px;
            line-height: 32px;
            text-align: center;

            &:nth-child(2){
              margin: 20px 0;
            }


            &:nth-child(3){
              color:#191919;
              font-family: ${commonStyled.fontBold};
            }
          }
        }
      `
  }
}
