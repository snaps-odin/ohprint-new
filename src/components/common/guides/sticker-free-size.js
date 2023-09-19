

import React from 'react';
import { addCdn } from 'utils/url';

export default class GuideStickerFreeSize extends React.Component {
	constructor(...args) {
		super(...args);

		this.contents = [
			{
				title: '내가 디자인한 모양 그대로 스티커를 만들어 보세요.',
				children: [
					{
						className: 'box col-3',
						children: [
							{
								image: 'sticker-diecut-01-560360',
								title: '1. 내 디자인 올리기',
								descriptions: [
									`스티커로 만들고 싶은<br/>내 디자인을 업로드 하세요.`
								]
							},
							{
								image: 'sticker-diecut-02-560360',
								title: '2. 사이즈는 자동맞춤',
								descriptions: [
									`안전한 재단을 위해 <em>1.5mm 여백이 삽입</em>되며,<br/><em>이미지 비율에 맞게</em> 사이즈가 자동으로 조정돼요.`
								]
							},
							{
								image: 'sticker-diecut-03-560360',
								title: '3. 스티커 받아보기',
								descriptions: [
									`내가 올린 이미지 그대로 만들어진<br/>스티커를 받아보세요!`
								]
							}
						]
					}
				]
			},
			{
				title: '스티커 디자인은 하나로 연결된 이미지만 가능해요.',
				children: [
					{
						className: 'box thin',
						children: [
							{
								image: 'sticker-diecut-04-560360',
								descriptions: [
									`<dl>
										<dd><span class="icon icon-wrong-1818"/></dd>
										<dd><em class="red">하나로 연결되어 있지 않은 이미지</em>는 낱장 스티커로 만들 수 없어요.</dd>
									</dl>`
								]
							},
							{
								image: 'sticker-diecut-05-560360',
								descriptions: [
									`<dl>
										<dd><span class="icon icon-right-1818"/></dd>
										<dd>떨어진 이미지는 배경이나 테두리를 넣어 하나의 덩어리로 만들어주세요.</dd>
									</dl>`
								]
							}
						]
					}
				]
			},
			{
				title: '스티커로 만들 이미지에 딱 맞게 잘라서 저장하세요.',
				children: [
					{
						className: 'box thin row-2',
						children: [
							{
								image: 'sticker-resizing-01-560360',
								descriptions: [
									`<dl>
										<dd><span class="icon icon-wrong-1818"/></dd>
										<dd>이미지(PNG, PDF 파일)에 <em class="red">배경이 넓은 경우,</em> 선택한 사이즈보다<br/>실제 스티커가 작아져요. (30mm보다 작아지면 스티커로 만들 수 없어요.)</dd>
									</dl>`
								]
							},
							{
								image: 'sticker-resizing-02-560360',
								descriptions: [
									`<dl>
										<dd><span class="icon icon-right-1818"/></dd>
										<dd>스티커로 만들 <em>이미지에 딱 맞게</em> 빈 영역을 잘라내야 해요.</dd>
									</dl>`
								]
							}
						]
					}
				]
			},
			{
				title: '디자인 파일을 이미지 파일로 변환해 주세요.',
				description: 'AI, PSD 디자인 파일을 가지고 있다면 <em>PDF</em> 또는 <em>PNG, JPG</em> 파일로 변환해야 해요.<br/> *<em>JPG</em> 파일은 배경을 포함해서 사각형으로 프린트 됩니다. 배경이 없는 이미지는 <em>PNG</em> 또는 <em>PDF</em>로 만들어 주세요.',
				className: 'clipart',
				children: [
					{
						title: '<em class="yellow">AI</em> 파일을 PNG/JPG로 변환하기',
						children: [
							{
								image: 'sticker-diecut-ai-01-560360',
								descriptions: [
									'디자인 파일을 실행하여 <em>File</em> > <em>Export</em> > <em>Export As</em> 를 선택해 주세요.<br/>원하는 파일명을 입력하고 Format 항목에서 <em>PNG</em> 또는 <em>JPEG</em> 파일을 선택해 주세요.'
								]
							},
							{
								image: 'sticker-diecut-ai-02-560360',
								descriptions: [
									'<em>PNG</em> : 해상도를 <em>150ppi</em> 또는 <em>300ppi</em>로 설정 후, 배경 색상을 <em>Transparent</em>로 저장해 주세요.<br/><em>JPG</em> : color Mode를 <em>RGB</em>로 설정 후, 해상도를 <em>150ppi</em> 또는 <em>300ppi</em>로 저장해 주세요.'
								]
							}
						]
					},
					{
						title: '<em class="yellow">AI</em> 파일을 PDF로 변환하기',
						children: [
							{
								image: 'sticker-diecut-ai-03-560360',
								descriptions: [
									'디자인 파일을 실행하여 <em>File</em> ><em>Save As</em> 를 선택해 주세요.<br/>원하는 파일명을 입력하고 Format 항목에서 <em>Adobe PDF</em> 파일을 선택해 주세요.'
								]
							},
							{
								image: 'sticker-diecut-ai-04-560360',
								descriptions: [
									'Adobe PDF Preset을 <em>Illustrator Default(디폴트값)</em>로 설정한 후 저장해 주세요.'
								]
							}
						]
					},
					{
						title: '<em>PSD</em> 파일을 PNG/JPG로 변환하기',
						children: [
							{
								image: 'sticker-diecut-psd-01-560360',
								descriptions: [
									'디자인 파일을 실행하여 <em>File</em> > <em>Export</em> > <em>Export As</em> 를 선택해 주세요.'
								]
							},
							{
								image: 'sticker-diecut-psd-02-560360',
								descriptions: [
									'Format을 <em>JPEG</em> 또는 <em>PNG</em> 파일을 선택 후,<br/>하단 Color Space 항목에 <em>Embed Color Profile</em>를 체크해 주세요.'
								]
							}
						]
					},
					{
						title: '<em>PSD</em> 파일을 PDF로 변환하기',
						children: [
							{
								image: 'sticker-diecut-psd-03-560360',
								descriptions: [
									'디자인 파일을 실행하여 <em>File</em> ><em>Save As</em> 를 선택해 주세요.<br/>원하는 파일명을 입력하고 Format 항목에서 <em>Photoshop PDF</em> 파일을 선택해 주세요.'
								]
							},
							{
								image: 'sticker-diecut-psd-04-560360',
								descriptions: [
									'Adobe PDF Preset을 <em>High Quality Print(디폴트값)</em>로 설정한 후 저장해 주세요.'
								]
							}
						]
					}
				]
			}
		];
	}

	render() {
		let { className, width } = this.props;

		let isSmall = (width && width < 1140) ? 'small' : '';

		return (
			<div className={`guide-sticker-free-size-wrap ${className || ''}`}>
				{(this.contents || []).reduce((target, content) => {
					let { title, description, className, children } = content;

					target.push(
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
