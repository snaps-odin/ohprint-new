

import React from 'react';
import { addCdn } from 'utils/url';

export default class GuideshoppingBag extends React.Component {
	constructor(...args) {
		super(...args);

		this.contents = [
			{
				title: '편집 유의사항',
				className: 'clipart',
        descriptions: [
          '디자인 파일을 실행하여 <em>File</em> > <em>Export</em> > <em>Export As</em> 를 선택해 주세요.<br/>원하는 파일명을 입력하고 Format 항목에서 <em>PNG</em> 또는 <em>JPEG</em> 파일을 선택해 주세요.'
        ],
				children: [
					{

						children: [
							{
								image: 'sticker-diy-ai-01-560360',
								descriptions: [
									'디자인 파일을 실행하여 <em>File</em> > <em>Export</em> > <em>Export As</em> 를 선택해 주세요.<br/>원하는 파일명을 입력하고 Format 항목에서 <em>PNG</em> 또는 <em>JPEG</em> 파일을 선택해 주세요.'
								]
							},
							{
								image: 'sticker-diy-ai-02-560360',
								descriptions: [
									'<em>PNG</em> : 해상도를 <em>150ppi</em> 또는 <em>300ppi</em>로 설정 후, 배경 색상을 <em>Transparent</em>로 저장해 주세요.<br/><em>JPG</em> : color Mode를 <em>RGB</em>로 설정 후, 해상도를 <em>150ppi</em> 또는 <em>300ppi</em>로 저장해 주세요.'
								]
							}
						]
					},
					{
						title: '<em>PSD</em> 파일을 PNG/JPG로 변환하기',
						children: [
							{
								image: 'sticker-diy-psd-01-560360',
								descriptions: [
									'디자인 파일을 실행하여 <em>File</em> > <em>Export</em> > <em>Export As</em> 를 선택해 주세요.'
								]
							},
							{
								image: 'sticker-diy-psd-02-560360',
								descriptions: [
									'Format을 <em>JPEG</em> 또는 <em>PNG</em> 파일을 선택 후,<br/>하단 Color Space 항목에 <em>Embed Color Profile</em>를 체크해 주세요.'
								]
							},
						]
					},
					{
						title: '클립아트 파일 완성',
						children: [
							{
								image: 'sticker-diy-clipart-01-560360',
								descriptions: [
									'PNG/JPG 파일 완성'
								]
							},
							{
								image: 'sticker-diy-clipart-02-560360',
								descriptions: [
									'완성된 클립아트 파일을 편집기에 업로드하여 사용해 보세요.'
								]
							}
						]
					}
				]
			}
		];
	}

	render() {
		let { className, width, onlyClipArt } = this.props;

		let isSmall = (width && width < 1140) ? 'small' : '';

		return (
			<div className={`guide-sticker-diy-wrap ${className || ''}`}>
				{(this.contents || []).reduce((target, content) => {
					let { title, description, className, children } = content;

					let enable = (
						!onlyClipArt
						|| (
							onlyClipArt
							&& (className || '').match(/clipart/i)
						)
					);

					enable && target.push(
						<section className={className || null}>
							<div className={`inner ${isSmall ? 'small' : ''}`}>
								<h3 dangerouslySetInnerHTML={{ __html: title }}/>

								{description && (
									<p dangerouslySetInnerHTML={{ __html: description }}/>
								)}

								{(children || []).length > 0 && (
									<ul className={className || null}>
										{(children || []).reduce((target, child) => {
											let { title, className, children } = child;

											target.push(
												<li>
													{title && (
														<h4 dangerouslySetInnerHTML={{ __html: title }}/>
													)}

													{(children || []).length > 0 && (
														<ul className={`${className || null} ${isSmall ? 'small' : ''}`}>
															{(children || []).reduce((target, child) => {
																let { title, image, descriptions } = child;

																target.push(
																	<li>
																		<span className="top">
																			<img src={addCdn(`/images/common/guide/sticker/${image}@2x.jpg`)}/>
																		</span>

																		<span className="bottom">
																			{title && (
																				<h4 dangerouslySetInnerHTML={{ __html: title }}/>
																			)}

																			{(descriptions || []).length > 0 && (
																				<p>
																					{(descriptions || []).reduce((target, description) => {
																						target.push(
																							<span dangerouslySetInnerHTML={{ __html: description }}/>
																						);

																						return target;
																					}, [])}
																				</p>
																			)}
																		</span>
																	</li>
																);

																return target;
															}, [])}
														</ul>
													)}
												</li>
											);

											return target;
										}, [])}
									</ul>
								)}

							</div>
						</section>
					);

					return target;
				}, [])}
			</div>
		)
	}
}
