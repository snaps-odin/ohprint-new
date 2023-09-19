

import React from 'react';
import { addCdn } from 'utils/url';

export default class GuideStickerLayoutOption extends React.Component {
	render() {
		let { width } = this.props;

		let isSmall = width < 1140;

		return (
			<div className="guide-sticker-layout-option-wrap">
				<div className="inner">
					<h3>레이아웃도 원하는 대로 간편하게!</h3>

					<ul className={isSmall ? 'small' : null}>
						<li>
							<dl>
								<dt><img src={addCdn("/images/common/guide/sticker/sticker-layout-01-360280@2x.jpg")} alt=""/></dt>
								<dd>
									<h4>1. 디자인 복사하기</h4>
									<p>디자인을 업로드하고 “<em>선택 디자인 복사하기</em>”<br/>버튼을 클릭해 주세요. </p>
								</dd>
							</dl>
						</li>
						<li>
							<dl>
								<dt><img src={addCdn("/images/common/guide/sticker/sticker-layout-02-360280@2x.jpg")} alt=""/></dt>
								<dd>
									<h4>2. 디자인 붙여넣기</h4>
									<p>붙여 넣고 싶은 캔버스 영역을 선택 후,<br/>“<em>붙여넣기</em>” 버튼을 클릭해 주세요.</p>
								</dd>
							</dl>
						</li>
						<li>
							<dl>
								<dt><img src={addCdn("/images/common/guide/sticker/sticker-layout-03-360280@2x.jpg")} alt=""/></dt>
								<dd>
									<h4>3. 스티커 레이아웃 완성</h4>
									<p><em>선택한 영역에 동일한 디자인이 자동으로 배치</em>되어<br/>원하는 대로 레이아웃이 완성돼요.</p>
								</dd>
							</dl>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}
