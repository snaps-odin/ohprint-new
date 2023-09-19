

import React from 'react';
import { addCdn } from 'utils/url';

export default class GuideStickerDIY extends React.Component {
	constructor(...args) {
		super(...args);

		this.contents = [
			{
				title: '내가 원하는대로 DIY 스티커를 만들어 보세요.',
				children: [
					{
						className: 'box',
						children: [
							{
								title: '1. 내 클립아트 올리기',
								image: 'sticker-diy-01-560360',
								descriptions: [
									`<em>“편집기> 내 클립아트”</em>를 통해 사진, 도형, 일러스트 등<br/>만들고 싶은 스티커를 <em>PNG, JPG</em> 파일로 업로드해 주세요.`,
									`* <em>AI, PSD 파일</em>은 아래 “<em>클립아트 디자인 가이드</em>”를 확인해주세요.`
								]
							},
							{
								title: '2. 스티커 배치하기',
								image: 'sticker-diy-02-560360',
								descriptions: [
									`업로드된 <em>“내 클립아트”</em>를 캔버스 위에 자유롭게 배치해 주세요.`
								]
							}
						]
					}
				]
			},
			{
				title: '내가 가진 디자인을 클립아트로 만들어 보세요.',
				description: 'AI, PSD 디자인 파일을 가지고 있다면 <em>PNG</em> 또는 <em>JPG</em> 파일로 변환해야 해요.',
				className: 'clipart',
				children: [
					{
						title: '<em class="yellow">AI</em> 파일을 PNG/JPG로 변환하기',
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
			},
			{
				title: '내 디자인 업로드 <em>칼선</em> 가이드',
				description: '포토샵은 칼선 레이어가 따로 저장되지 않으므로<br/>일러스트레이터 프로그램을 사용해 주세요.',
				className: 'upload',
				children: [
					{
						title: '<em class="yellow">AI</em> 파일 설정하기',
						children: [
							{
								image: 'sticker-diy-cutting-ai-01-560360',
								descriptions: [
									'<em>‘print’</em> 레이어를 선택하고 원하는 디자인을 작업해 주세요.'
								]
							},
							{
								image: 'sticker-diy-cutting-ai-02-560360',
								descriptions: [
									'<em>‘cut’</em> 레이어를 선택하고 <em>0.5pt 두께의 M100 색상</em>으로 칼선을 만들어 주세요.<br/><em>* 백터 외곽선 (vector stroke)으로 작업</em>'
								]
							},
							{
								image: 'sticker-diy-cutting-ai-03-560360',
								descriptions: [
									'<em>Eye 마크</em> 활성화 및 <em>레이어 순서</em>는 가이드 파일 그대로 변경이 없이 작업해야 하며,<br/>모든 작업이 끝나면 <em>File > Save As</em> 를 선택하여 저장을 진행해 주세요.<br/><em>* 화이트 배경과 함께 적용 시 cut – print – white 순서로 작업해 주세요.<br/>*레이어명 변경  안됨, 레이어 추가는 white만 가능</em>'
								]
							},
							{
								image: 'sticker-diy-cutting-ai-04-560360',
								descriptions: [
									'Format 항목을 <em>PDF</em>로 선택한 후, Adobe PDF Preset은<br/><em>[Illustrator Default]</em> 표시된 3개의 옵션 항목을 체크해 주세요. '
								]
							}
						]
					},
					{
						title: '칼선 디자인 유의사항',
						children: [
							{
								image: 'sticker-diy-cutting-caution-01-560360',
								descriptions: [
									'아래의 제한 개수를 초과하는 복잡한 칼선은 공정상 컷팅 제작이 어려워요.<br/><em>* A4 : 3,500pts / A5 : 1,750pts / A6 : 870pts / 75x170 - 700pts / 100x100 - 700pts</em>'
								]
							},
							{
								image: 'sticker-diy-cutting-caution-02-560360',
								descriptions: [
									'제한 개수를 초과 하는 경우 <em>선 단순화(Simplify)</em> 메뉴를 사용하여 개수를 줄일 수 있어요.<br/><em>* 칼선 전체 선택 → Object(오브젝트) → Path(패스) → Simplify(단순화)</em>'
								]
							},
							{
								image: 'sticker-diy-cutting-cautiion-03-560360',
								descriptions: [
									'<span class="icon icon-wrong-1818"></span><span>이미지와 칼선 크기가 같으면 한쪽으로 흰색 선이 생길 수 있어요.</span>'
								]
							},
							{
								image: 'sticker-diy-cutting-cautiion-04-560360',
								descriptions: [
									'<span class="icon icon-right-1818"></span><span>여백이 없는 스티커 제작 시 스티커 재단 시 발생 할 수 있는 오차를 고려하여<br/>사방 2mm 안쪽으로 칼선을 작업해 주세요.</span>'
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
