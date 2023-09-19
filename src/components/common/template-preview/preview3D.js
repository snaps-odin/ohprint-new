import React from "react";

import { addDomain, getEditorDomainUrl } from 'utils/url';
import update from "react-addons-update";
import {format} from "url";
import { getDeepValue } from 'utils/json';
import { getUserToken } from 'utils/storage';

export default class Preview3D extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      editor: {
        params: null,
        timestamp:null
      },
    }

    this.onReceiveMessage = this.onReceiveMessage.bind(this);

  }

  componentDidMount() {
    const { item, query, category } = this.props;
    let { printBackCode, productCode, millimeterWidth, millimeterHeight, paperCode, frameCode, frameOptionCode, backCode, colorCode, luxeColorCode, quantity, accessory, frameCodeList, sizeQuantitys, offsetPrint, calendarStartDate } = query;
    let selectedTemplateCodes = "";

    let params = {
      productCode: item[ 'productCode' ],
      projectCode: item[ 'projectCode' ],
      templateCode: item[ 'templateCode' ],
      langCode: 'ko',
      templateUseType: 'PREVIEW_3D',
      millimeterWidth,
      millimeterHeight,
      paperCode,
      frameCode,
      frameOptionCode,
      frameCodes: (frameCodeList ? (Array.isArray(frameCodeList) ? frameCodeList : [ frameCodeList ]) : []).join(','),
      backCode : (printBackCode ? printBackCode : backCode),
      colorCode: colorCode || luxeColorCode || null,
      quantity,
      accessory,
      sizeQuantitys,
      selectedTemplateCodes: selectedTemplateCodes || null,
      offsetPrint : offsetPrint || "N",
      calendarStartDate: (calendarStartDate || "000000")
    };

    this.setState(update(this.state, {
      editor: {
        params: {
          $set: `/${format({
            query: this.nullFilter(params)
          })}`
        },
        timestamp: { $set: new Date().getTime() }
      }
    }));

    window.addEventListener('message', this.onReceiveMessage);
  }

  componentWillUnmount() {
    window.removeEventListener('message', this.onReceiveMessage);
  }

  nullFilter(data){
    let tempData = Object.assign({}, data, {});
    let keys = Object.keys(tempData);

    return (keys || []).reduce((target,item,idx)=>{


      let checkCalendarStartData = (item === "calendarStartDate" && tempData[item] === "000000");

      (tempData[item] && !checkCalendarStartData) && (target[item] = tempData[item])

      return target;
    },{});
  }

  onReceiveMessage(event) {
    let { origin, data } = event;
    let checkType = typeof(data);

    let { 0: type, 1: projectCode } = ((checkType === "string" && data.match(/|/i))) && (data || '').split('|') || [];

    switch (data) {
      case 'getToken':
        this.getToken(origin, projectCode);
        break;
    }
  }

  getToken(origin, projectCode) {
    let { actions: { handleExecuteAfterUserLogin } } = this.props;

    handleExecuteAfterUserLogin().then(() => {
      return this.sendMessage(origin, projectCode);
    }).catch(error => {});
  }


  sendMessage(origin, projectCode) {
    let editor = this.editor;

    editor && editor.contentWindow[ 'postMessage' ]({
      type: 'token',
      value: getUserToken()
    }, origin);
  }


  render() {
    const { actions : { handleTogglePreview3D }, preview3D } = this.props;
    const { editor } = this.state;

    return(

      !!preview3D ?
          <div className={"preview-3d-wrap"}>
            <div className={"closeContainer3D"} onClick={handleTogglePreview3D}>
              <span className="icon icon-view-3d-out"/>
              <span className={"text"}>
                나가기
            </span>
            </div>

            <iframe src={`${getEditorDomainUrl()}${editor[ 'params' ]}&cb=${editor[ 'timestamp' ]}`}
                    width="100%"
                    height="100%"
                    frameBorder={0}
                    scrolling="no"
                    ref={(c) => {this.editor = c;}}/>


          </div>
        :
        <div className={"btnInputPreview3D"}  onClick={handleTogglePreview3D}>
          <span className="icon icon-view-3d-input"/>
          <span className={"text"}>
                미리보기
            </span>
        </div>
    )
  }

}

