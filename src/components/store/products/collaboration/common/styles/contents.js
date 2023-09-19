import styled from "styled-components";
import {css} from "@emotion/react";



export const CommonContents = {
  container : styled.div`

  `,
  item : styled.div`
    padding: 70px 0 70px 0;
    border-top:1px solid #eeeeee;
  `,
  title : styled.span`
    display: block;
    margin-bottom:70px;
    font-size:30px;
    color:#191919;
    text-align: center;
  `
}

export const LaundryImg = styled.img`
    display: block;
    width: 1140px;
    margin: 0 auto;
  `

export const ShippingExchangeRefund = {
  container : styled.div`
    display: table;
    border-top:1px solid #191919;
    margin: 0 auto;
    border-collapse: collapse;
    width: 1140px;
  `,
  row : styled.div`
    display: table-row;
    border-bottom: 1px solid #eeeeee;

  `,
  title : styled.div`
    display: table-cell;
    vertical-align: middle;
    background: #f9fafc;
    width: 20%;
    padding-left:20px;
    box-sizing: border-box;
  `,
  contents : styled.div`
    display: table-cell;
    vertical-align: middle;
    padding:15px;
    box-sizing: border-box;
    line-height: 20px;
  `


}
