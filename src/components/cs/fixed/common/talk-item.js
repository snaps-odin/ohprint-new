

import React from 'react';

import { getHeight } from 'utils/dom';

export default class CSTalkItem extends React.Component {
  componentDidMount() {
    let { actions: { handleUpdateCSTalkConnect } } = this.props;

    handleUpdateCSTalkConnect(true);
  }

  componentWillUnmount() {
    let { actions: { handleUpdateCSTalkConnect } } = this.props;

    handleUpdateCSTalkConnect(false);
  }

  render() {
    let { states, value, height } = this.props;
    let { cs: { pop: { dragging } } } = states;
    let { userName, userId, userCellPhoneNumber, categoryId, categoryName, contents } = value;

    let src = `https://bonatk.cloudcc.co.kr:11445/SNP/Chat`
      + `?serviceType=OHPRINT`
      + `&userName=${encodeURIComponent(userName)}`
      + `&userId=${userId ? encodeURIComponent(userId) : ''}`
      + `&mobile=${encodeURIComponent(String(userCellPhoneNumber).replace(/[^0-9]/ig, ''))}`
      + `&categoryId=${encodeURIComponent(categoryId)}`
      + `&categoryName=${encodeURIComponent(categoryName)}`
      + `&contents=${encodeURIComponent(contents)}`;

    let style = Object.assign({
      width: '100%',
      height: `${(height || 550) - (50 + 40)}px`
    }, dragging ? { pointerEvents: 'none' } : {});

    return (
      <div className="item" ref={(c) => {this.scope = c;}}>
        <iframe className="top"
                src={src}
                style={style}
                frameBorder={0}
                scrolling="no"/>

        <div className="bottom">
					<span>
						<span>전화문의 <em>1577-4703</em></span>
						<span className="divider">  |  </span>
						<span>운영시간 <em>평일 09:30 ~ 17:30</em></span>
					</span>
        </div>
      </div>
    )
  }
}
