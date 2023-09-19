import styled from "styled-components";
import {css} from "@emotion/react";
import {commonStyled} from "../../styles/common";

export const brandInfo = {
  container : styled.div`
      width: 100%;
    `,

  contents1 : {
    container : styled.div`
        height: 858px;
        background: url("http://cdn.ohprint.me/Upload/collaboration/bdatbdon/w-bdbd-bg@2x.jpg") center center / cover;
      `,
      box : styled.div`
        width: 556px;
        height: 100%;
        margin: 0 auto;

        > img{
          display: block;
          width: 488px;
          margin: 0 auto;
          box-sizing: border-box;
          padding-top:70px;
        }

        > button{
          display: block;
          margin:0 auto;
          margin-top:40px;
          width: 260px;
          height: 60px;
          background: url("http://cdn.ohprint.me/Upload/collaboration/bdatbdon/btn-bdbd@2x.png") center center / cover;
          &:hover{
            background: url("http://cdn.ohprint.me/Upload/collaboration/bdatbdon/btn-bdbd-hover@2x.png") center center / cover;
          }
        }

        > span{
          display: block;
          margin-top: 42px;
          text-align: center;
          font-size:20px;
          line-height: 36px;
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
          width: 460px;
          margin: 60px auto 30px auto;
        }
        > a{
          font-size:20px;
          line-height: 36px;
          color:#191919;
          text-decoration: underline;
          font-family: ${commonStyled.fontBold};
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
            margin:30px 0 30px 0 ;
          }

        }

        > div{
          width: 720px;
          height: 312px;
          padding: 40px 94px 40px 94px;
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
