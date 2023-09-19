

import React from 'react';

import { breaklines } from 'utils/string';
import Attention from 'components/common/attention';
import { addCdn } from 'utils/url';

export default class GuideBusinessCardOption extends React.Component {
	constructor(...args) {
		super(...args);

		this.contents = [
      {
        title: `용지별 <em>화이트 인쇄</em> 가이드`,
        className: 'bg-white paddingBottomNone border-top',
      },
      {
        deco: "num-01-5030",
        className: "bg-white vertical-border",
        title: "투명 용지",
      },
			{
				title: `직접 디자인 하기`,
				className: 'bg-white',
				children: [
					{
						title: '화이트 배경 사용',
						className: 'col-2',
						children: [
							{
								image: 'clean-option-white-01',
								attentions: [
									`사진, 클립아트, 텍스트에 제공되는 <em>[화이트 배경]</em> 옵션에서<br/><em>[사용]</em>을 선택하여 화이트 인쇄를 설정할 수 있어요.`
								]
							},
							{
								image: 'clean-option-white-02',
								attentions: [
									`<em>[사용]</em>으로 선택한 디자인은 화이트 색상 인쇄 후, 그 위에 디자인을 출력하여 디자인이 더 선명해져요.`,
									`투명 용지의 경우 뒷면이 화이트 색상으로 노출돼요.`
								]
							}
						]
					},
					{
						title: '화이트 배경 사용 안함',
						className: 'col-2',
						children: [
							{
								image: 'clean-option-white-03',
								attentions: [
									`<em>[화이트 배경]</em> 옵션에서 <em>[사용 안함]</em>을 선택하면 화이트 인쇄 없이 디자인을 출력할 수 있어요.`
								]
							},
							{
								image: 'clean-option-white-04',
								attentions: [
									'용지 위에 디자인을 출력하기 때문에 디자인이 살짝 투영되어 용지의 특성이 잘 표현돼요.'
								]
							}
						]
					},
          {
            title: `내 디자인 업로드 <em class="yellow">AI</em> 파일 설정하기`,
            className: 'bg-white col-2',
            children: [
              {
                image: 'bcard-ai-01-560360',
                descriptions: [
                  `<em>‘print’</em> 레이어를 선택하고 원하는 디자인을 작업해 주세요.`
                ]
              },
              {
                image: 'bcard-ai-02-560360',
                descriptions: [
                  `<em>‘white’</em> 레이어를 선택하고 화이트 인쇄를 적용하고 싶은 영역을 M100으로 채워서 지정해주세요.<br/> 이때, 화이트 영역은 반드시 디자인 레이어와 동일한 위치여야 해요.<br/><em>*‘white’ 레이어는 벡터로 구성되어야 하며, 비트맵은 제작되지 않습니다.</em>`
                ]
              },
              {
                image: 'bcard-ai-03-560360',
                descriptions: [
                  `<em>Eye 마크</em> 활성화 및 <em>레이어 순서</em>는 가이드 파일 그대로 변경이 없이 작업해야 하며,<br/>모든 작업이 끝나면 <em>File</em> > <em>Save As</em> 를 선택하여 저장을 진행해 주세요.<br/><em>* 레이어명 변경 및 레이어 추가 안됨</em>`
                ]
              },
              {
                image: 'bcard-ai-04-560360',
                descriptions: [
                  `Format 항목을 <em>PDF</em>로 선택한 후, Adobe PDF Preset은<br/><em>[Illustrator Default]</em> 표시된 3개의 옵션 항목을 체크해 주세요. `
                ]
              }
            ]
          }
				]
			},
      {
        deco: "num-02-5030",
        className: "bg-white vertical-border border-top noChild",
        title: "매트블랙 용지",
      },
      {
        className: 'bg-white firstBorderNone',
        children: [
          {
            title: `직접 디자인 하기`,
            className: 'col-2',
            children: [
              {
                image: 'matteblack-option-white-01',
                attentions: [
                  `편집 툴에서 원하는 색상으로 변경할 수 없습니다.`
                ]
              },
              {
                image: 'matteblack-option-white-02',
                attentions: [
                  `디자인 전체가 화이트 색상으로 인쇄돼요.`
                ]
              }
            ]
          },
          {
            title: `내 디자인 업로드 <em class="yellow">AI</em> 파일 설정하기`,
            className: 'col-2',
            children: [
              {
                image: 'bcard-matteblack-ai-01-560360',
                descriptions: [
                  `<em>‘white’</em> 레이어를 선택하고 원하는 디자인을 작업해 주세요.`
                ]
              },
              {
                image: 'bcard-matteblack-ai-02-560360',
                descriptions: [
                  `<em>‘white’</em> 레이어를 선택하고 K100으로 채워서 지정해주세요.
                   <em>* ‘white’ 레이어는 벡터로 구성되어야 하며, 비트맵은 제작되지 않습니다.</em>`
                ]
              },
              {
                image: 'bcard-matteblack-ai-03-560360',
                descriptions: [
                  `<em>Eye 마크</em> 활성화 및 <em>레이어 순서</em>는 가이드 파일 그대로 변경이 없이 작업해야 하며,
                   모든 작업이 끝나면 <em>File > Save As</em> 를 선택하여 저장을 진행해 주세요.
                   <em>* 레이어명 변경 및 레이어 추가 안됨</em>`
                ]
              },
              {
                image: 'bcard-ai-04-560360',
                descriptions: [
                  `Format 항목을 <em>PDF</em>로 선택한 후, Adobe PDF Preset은
                   <em>[Illustrator Default]</em> 표시된 3개의 옵션 항목을 체크해 주세요. `
                ]
              }
            ]
          }
        ]
      },
		];
	}

	render() {
		let { className, width } = this.props;

		let isSmall = (width && width < 1140) ? 'small' : '';

		return (
			<div className={`guide-business-card-option-wrap ${className || ''}`}>
				{(this.contents || []).reduce((target, content) => {
					let { deco, title, description, className, children } = content;

					target.push(
						<section className={className || ''}>
							<div className={`inner ${isSmall ? 'small' : ''}`}>

                {deco && (
                  <img className='deco-num' src={addCdn(`/sprite/svg/${deco}.svg`)}/>
                )}

								<h3 dangerouslySetInnerHTML={{ __html: title }}/>

								{description && (
									<p dangerouslySetInnerHTML={{ __html: description }}/>
								)}

								{(children || []).length > 0 && (
									<ul className={`${className || ''} ${isSmall ? 'small' : ''}`}>
										{(children || []).reduce((target, child) => {
											let { title, className, children } = child;

											target.push(
												<li>
													{title && (
														<h4 dangerouslySetInnerHTML={{ __html: title }}/>
													)}

													{(children || []).length > 0 && (
														<ul className={`${className || ''} ${isSmall ? 'small' : ''}`}>
															{(children || []).reduce((target, child) => {
																let { title, image, descriptions, attentions } = child;

																target.push(
																	<li>
																		<div className="top">
																			<img src={addCdn(`/images/common/guide/business-card/${image}@2x.jpg`)} alt=""/>
																		</div>


																		{(title || descriptions || attentions) && (
																			<div className="bottom">
																				{(descriptions || []).length > 0 && (
																					<p>
																						{(descriptions || []).reduce((target, description) => {
																							target.push(
																								<span dangerouslySetInnerHTML={{ __html: breaklines(description) }}/>
																							);

																							return target;
																						}, [])}
																					</p>
																				)}

																				{attentions && React.cloneElement(<Attention/>, {
																					value: {
																						children: attentions.reduce((target, item) => {
																							target.push({ value: String(item) });

																							return target;
																						}, [])
																					}
																				})}
																			</div>
																		)}
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
