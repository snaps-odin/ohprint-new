import React from 'react';

import { addDomain, goGallery } from 'utils/url';
import { clearStyle, clearIMGTag, clearBRTag, breaklines, clearFontFamily } from 'utils/string';
import { getHeight } from 'utils/dom';
import { isISOTimeFormat, parseDateByTimestamp } from 'utils/date';
import { toDate } from 'utils/format';

import Grades from 'components/common/grades';
import ThumbnailProduct from 'components/common/thumbnail-product';
import ThumbnailProductApparel from 'components/common/thumbnail-product-apparel';
import ImageLoader from 'components/common/image-loader';

export default class NoticeItem extends React.Component {
	constructor(props) {
		super(props);

    this.onClickToggle = this.onClickToggle.bind(this);
  }

  onClickToggle(event) {
    let { opened } = this.state;

    this.setState({ opened: !opened });
  }

  getContents() {
    let { item } = this.props;

    let html = clearFontFamily(item['contents']);

    return { __html: html };
  }


	render() {
	  const { item, totalCount, offset, index, opened, handleToggle } = this.props;
	  let h = !!opened ? getHeight(this.contents) : '0';

		return (
      <div className={'notice-table-row'}>
        <div className={'row-container'}  data-index={index} onClick={handleToggle}>
          <div className={"td"}>{totalCount - (offset + index)}</div>
          <div className={`td ${opened && 'active'}`}>{item.title}</div>
          <div className={"td"}>{String(item.registrationDate).replace(/-/g,".").split("T")[0]}</div>
        </div>

        <div className={`contents ${!!opened ? 'active' : ''}`} style={{height:`${h}px`}}>
          <span dangerouslySetInnerHTML={this.getContents()} ref={(c) => {this.contents = c;}} />
        </div>

      </div>
		)
	}
}
