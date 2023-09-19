

import React from 'react';

import { breaklines } from 'utils/string';
import Attention from 'components/common/attention';
import { addCdn } from 'utils/url';

export default class GuideEffectOption extends React.Component {
	constructor(...args) {
		super(...args);

		this.contents = {
			defaults: [
				{
					title: `내 디자인 업로드 <em>효과 적용</em> 가이드`,
					description: `(오리지널 용지)`,
					className: 'bg-gray',
					children: [
						{
							title: `<em class="yellow">AI</em> 파일 설정하기`,
							className: 'bg-gray col-2',
							children: [
								{
									image: 'effect-ai-01-560360',
									descriptions: [
										`<em>‘print’</em> 레이어를 선택하고 원하는 디자인을 작업해 주세요.<br/>골드/실버를 선택한 경우, UV레이어(효과 지정) 작업 후 해당 영역 디자인은 삭제해주세요.<br/>(유의사항 참고)`
									]
								},
								{
									image: 'effect-ai-02-560360',
									descriptions: [
										`<em>‘UV’</em> 레이어를 선택하고 효과를 적용할 영역을 M100으로 채워주세요.<br/> 이때, 효과 영역은 디자인과 동일한 위치여야 해요.<br/><em>‘UV’ 레이어는 반드시 벡터로 구성되어야 하며 비트맵 제작되지 않습니다.</em>`
									]
								},
								{
									image: 'effect-ai-03-560360',
									descriptions: [
										`<em>Eye 마크</em> 활성화 및 <em>레이어 순서</em>는 가이드 파일 그대로 변경이 없이 작업해야 하며,<br/>모든 작업이 끝나면 <em>File</em>{`>`}<em>Save As</em> 를 선택하여 저장을 진행해 주세요.<br/><em>* 레이어명 변경 및 레이어 추가 안됨</em>`
									]
								},
								{
									image: 'effect-ai-04-560360',
									descriptions: [
										`Format 항목을 <em>PDF</em>로 선택한 후, Adobe PDF Preset은<br/><em>[Illustrator Default]</em> 표시된 3개의 옵션 항목을 체크해 주세요. `
									]
								}
							]
						},
						{
							title: `파일 업로드 및 제작하기`,
							className: 'bg-gray col-2',
							children: [
								{
									image: 'effect-ai-05-560360',
									descriptions: [
										`효과를 적용한 영역은 편집기에서 M100 색상 그대로 표현돼요.<br/>(효과 미리보기 제공되지 않음)`
									]
								},
								{
									image: 'effect-ai-06-560360',
									descriptions: [
										`UV레이어에 M100으로 적용한 영역에 효과가 제작됩니다.`
									]
								}
							]
						}
					]
				},
				{
					title: `효과 적용 유의사항`,
					className: 'bg-white',
					children: [
						{
							title: '골드/실버 효과 선택 시<br/>print 레이어는 이렇게 작업해주세요.',
							className: 'box thin col-2',
							children: [
								{
									image: 'layer-caution-01-560360',
									descriptions: [
										`<dl>
										<dd><span class="icon icon-wrong-1818"/></dd>
										<dd><em class="red">print 레이어에 디자인이 있으면</em> 효과가 미세하게 어긋나 겹쳐 보일 수 있어요.</dd>
									</dl>`
									]
								},
								{
									image: 'layer-caution-02-560360',
									descriptions: [
										`<dl>
										<dd><span class="icon icon-right-1818"/></dd>
										<dd>print 레이어에서 효과가 적용되는 부분을 삭제해 주세요.<br/>(골드/실버 효과에만 해당해요)</dd>
									</dl>`
									]
								}
							]
						},
						{
							title: '효과를 적용할 부분의 사이즈를 확인하세요.',
							className: 'box thin col-2',
							children: [
								{
									image: 'layer-caution-03-560360',
									descriptions: [
										`<dl>
										<dd><span class="icon icon-wrong-1818"/></dd>
										<dd>10pt 이하의 작은 폰트나 1mm 이하의 가는 선은 효과 적용이 어려워요.<br/>디자인에 따라 너무 넓은 면적에도 효과 적용이 어려울 수 있습니다.</dd>
									</dl>`
									]
								},
								{
									image: 'layer-caution-04-560360',
									descriptions: [
										`<dl>
										<dd><span class="icon icon-right-1818"/></dd>
										<dd>크고 두꺼운 폰트와 굵은 선이나 면으로 디자인해주세요.</dd>
									</dl>`
									]
								}
							]
						},
						{
							title: '효과는 재단선이나 접는 선을 피해서 적용해 주세요.',
							className: 'box thin col-2',
							children: [
								{
									image: 'layer-caution-05-560360',
									descriptions: [
										`<dl>
										<dd><span class="icon icon-wrong-1818"/></dd>
										<dd>재단선에 효과가 걸려있으면 재단 시 효과가 깨질 수 있어요.</dd>
									</dl>`
									]
								},
								{
									image: 'layer-caution-06-560360',
									descriptions: [
										`<dl>
										<dd><span class="icon icon-right-1818"/></dd>
										<dd>효과는 반드시 안전 영역 안에서 적용해 주세요.</dd>
									</dl>`
									]
								},
								{
									image: 'layer-caution-07-560360',
									descriptions: [
										`<dl>
										<dd><span class="icon icon-wrong-1818"/></dd>
										<dd>재단선에 효과가 걸려있으면 재단 시 효과가 깨질 수 있어요.</dd>
									</dl>`
									]
								},
								{
									image: 'layer-caution-08-560360',
									descriptions: [
										`<dl>
												<dd><span class="icon icon-right-1818"/></dd>
												<dd>효과는 반드시 안전 영역 안에서 적용해 주세요.</dd>
											</dl>`
									]
								}
							]
						},
						{
							title: '효과는 앞면/표지에만 적용할 수 있어요.<br/>(명함은 양면 가능)',
							className: 'box thin col-2',
							children: [
								{
									image: 'effect-edit-01-560360',
									descriptions: [
										`<dl>
										<dd><span class="icon icon-wrong-1818"/></dd>
										<dd>뒷면 또는 내지에 효과(UV) 레이어를 설정하면 제작할 수 없어요.</dd>
									</dl>`
									]
								},
								{
									image: 'effect-edit-02-560360',
									descriptions: [
										`<dl>
										<dd><span class="icon icon-right-1818"/></dd>
										<dd>앞면 또는 표지에만 효과(UV) 레이어를 설정해서 등록해주세요.</dd>
									</dl>`
									]
								}
							]
						},
						{
							title: '효과 옵션 선택에 맞게 효과(UV) 레이어를 설정해 주세요.',
							className: 'box thin col-2',
							children: [
								{
									image: 'effect-edit-03-560360',
									descriptions: [
										'효과 옵션을 선택하고 효과(UV) 레이어를 설정하지 않으면 제작할 수 없어요.'
									]
								},
								{
									image: 'effect-edit-04-560360',
									descriptions: [
										'효과 없음을 선택하고 효과(UV) 레이어를 설정하면 제작할 수 없어요.'
									]
								}
							]
						}
					]
				}
			],
      white: [
        {
          title: `직접 디자인 하기`,
          className: 'bg-white border-top vertical-border',
          children: [
            {
              title: '화이트 인쇄 가이드',
              className: 'bg-white col-2',
              children: [
                {
                  image: 'straight-glass-white-01',
                  attentions: [
                    `사진, 클립아트, 텍스트에 제공되는 <em class="blue">[화이트 배경]</em> 옵션에서 <em class="blue">[사용]</em>을 선택하여 화이트 인쇄를 설정할 수 있어요.`,
                    `<em class="blue">[화이트 배경]</em> 옵션에서 <em class="blue">[사용 안함]</em>을 선택하면 화이트 인쇄 없이 디자인을 출력할 수 있어요.`
                  ]
                },
                {
                  image: 'straight-glass-white-02',
                  attentions: [
                    `<em class="blue">[사용]</em>으로 선택한 디자인은 화이트 색상 인쇄 후, 그 위에 디자인을 출력하여 디자인이 더 선명해져요.`,
                    `<em class="blue">[사용안함]</em>으로 선택한 디자인은 컵에 디자인이 살짝 투영되어 감성적인 느낌의 상품을 제작할 수 있어요.`
                  ]
                }
              ]
            },
            {
              title: `내 디자인 업로드 <em class="yellow">AI</em> 파일 설정하기`,
              className: 'bg-white col-2',
              children: [
                {
                  image: 'straight-glass-white-img-01',
                  descriptions: [
                    `<em class="blue">‘print’</em> 레이어를 선택하고 원하는 디자인을 작업해 주세요.`
                  ]
                },
                {
                  image: 'straight-glass-white-img-02',
                  descriptions: [
                    `<em class="blue">‘uv’</em> 레이어를 선택하고 글로시 효과 영역을 K100으로 반드시 채워서 지정해주세요. (부분 적용 불가)
                이때, 글로시 영역은 반드시 디자인 레이어와 동일한 위치여야 해요.
                <em class="blue">* ‘uv’ 레이어는 벡터로 구성되어야 하며, 비트맵은 제작되지 않습니다.</em>`
                  ]
                },
                {
                  image: 'straight-glass-white-img-03',
                  title: '화이트 인쇄 전체 적용 할 경우',
                  descriptions: [
                    `<em class="blue">‘white’</em> 레이어를 선택하고 화이트 인쇄 영역을 M100으로 반드시 채워서 지정해주세요.
                  이때, 화이트 영역은 반드시 디자인 레이어와 동일한 위치여야 해요.
                  <em class="blue">* 화이트 밀림 선이 보이지 않게 하기 위해 화이트 도형을 0.1mm정도 줄여서 작업하는 것을 추천합니다.
                  * ‘white’ 레이어는 벡터로 구성되어야 하며, 비트맵은 제작되지 않습니다.</em>`
                  ]
                },
                {
                  image: 'straight-glass-white-img-04',
                  title: '화이트 인쇄 부분 적용 할 경우',
                  descriptions: [
                    `<em class="blue">‘white’</em> 레이어를 선택하고 화이트 인쇄를 적용하고 싶은 영역을 M100으로 채워서 지정해주세요.
                  이때, 화이트 영역은 반드시 디자인 레이어와 동일한 위치여야 해요.
                  <em class="blue">* 화이트 밀림 선이 보이지 않게 하기 위해 화이트 도형을 0.1mm정도 줄여서 작업하는 것을 추천합니다.
                  * ‘white’ 레이어는 벡터로 구성되어야 하며, 비트맵은 제작되지 않습니다.</em>`
                  ]
                },
                {
                  image: 'straight-glass-white-img-05',
                  descriptions: [
                    `<em class="blue">Eye 마크</em> 활성화 및 <em class="blue">레이어 순서</em>는 가이드 파일 그대로 변경이 없이 작업해야 하며,
                  모든 작업이 끝나면 <em class="blue">File</em>{`>`}<em class="blue">Save As</em> 를 선택하여 저장을 진행해 주세요.
                  <em class="blue">* 레이어명 변경 및 레이어 추가 안됨</em>`
                  ]
                },
                {
                  image: 'straight-glass-white-img-06',
                  descriptions: [
                    `Format 항목을 <em class="blue">PDF</em>로 선택한 후, Adobe PDF Preset은
                  <em class="blue">[Illustrator Default]</em> 표시된 3개의 옵션 항목을 체크해 주세요.`
                  ]
                },
                {}
              ]
            }
          ]
        },
      ],
      translucent: [
        {
          title: `직접 디자인 하기`,
          className: 'bg-white border-top vertical-border',
          children: [
            {
              title: '화이트 인쇄 가이드',
              className: 'bg-white col-2',
              children: [
                {
                  image: 'trc-white-img-01',
                  attentions: [
                    `사진, 클립아트, 텍스트에 제공되는 <em class="blue">[화이트 배경]</em> 옵션에서 <em class="blue">[사용]</em>을 선택하여<br>화이트 인쇄를 설정할 수 있어요.`,
                    `<em class="blue">[화이트 배경]</em> 옵션에서 <em class="blue">[사용 안함]</em>을 선택하면 화이트 인쇄 없이 디자인을 출력할 수 있어요.`
                  ]
                },
                {
                  image: 'trc-white-img-02',
                  attentions: [
                    `<em class="blue">[사용]</em>으로 선택한 디자인은 화이트 색상 인쇄 후, 그 위에 디자인을 출력하여 디자인이 더 선명해져요.`,
                    `<em class="blue">[사용안함]</em>으로 선택한 디자인은 컵에 디자인이 살짝 투영되어 감성적인 느낌의 상품을<br>제작할 수 있어요.`
                  ]
                }
              ]
            },
            {
              title: '글로시 효과 가이드',
              className: 'bg-white col-2',
              children: [
                {
                  image: 'trc-glossy-img-01',
                  attentions: [
                    `사진, 클립아트, 텍스트에 제공되는 <em class="blue">[글로시 효과]</em> 옵션에서 <em class="blue">[사용]</em>을 선택하여<br>글로시 효과를 설정할 수 있어요.`,
                    `<em class="blue">[글로시 효과]</em> 옵션에서 <em class="blue">[사용 안함]</em>을 선택하면 글로시 효과 없이 디자인을 출력할 수 있어요.`
                  ]
                },
                {
                  image: 'trc-glossy-img-02',
                  attentions: [
                    `<em class="blue">[사용]</em>으로 선택한 디자인은 인쇄 후, 그 위에 글로시 처리를 해서 디자인이 더 선명하고,<br>광택감이 느껴지며, 인쇄 면이 코팅되어 내용이 오래 보존돼요.`,
                    `<em class="blue">[사용 안함]</em>으로 선택한 디자인은 컵 특유의 질감이 살아있는 트렌디한 무광 인쇄 느낌으로 표현돼요.`
                  ]
                }
              ]
            },
            {
              title: `내 디자인 업로드 <em class="yellow">AI</em> 파일 설정하기`,
              className: 'bg-white col-2',
              children: [
                {
                  image: 'trc-glossy-glossy-guide-01',
                  descriptions: [
                    `<em class="blue">‘print’</em> 레이어를 선택하고 원하는 디자인을 작업해 주세요.`
                  ]
                },
                {
                  image: 'trc-glossy-glossy-guide-02',
                  descriptions: [
                    `<em class="blue">‘uv’</em> 레이어를 선택하고 글로시 효과를 적용하고 싶은 영역을 K100으로 채워서 지정해주세요.
                    이때, 글로시 영역은 반드시 디자인 레이어와 동일한 위치여야 해요.
                    <em class="blue">* 글로시 효과를 원치 않는 경우, 반드시 ‘uv’ 레이어를 삭제해주세요.
                    * ‘uv’ 레이어는 벡터로 구성되어야 하며, 비트맵은 제작되지 않습니다.</em>`
                  ]
                },
                {
                  image: 'trc-glossy-glossy-guide-03',
                  title: '화이트 인쇄 전체 적용 할 경우',
                  descriptions: [
                    `<em class="blue">‘white’</em> 레이어를 선택하고 화이트 인쇄 영역을 M100으로 반드시 채워서 지정해주세요.
                      이때, 화이트 영역은 반드시 디자인 레이어와 동일한 위치여야 해요.
                      <em class="blue">* 화이트 밀림 선이 보이지 않게 하기 위해 화이트 도형을 0.1mm정도 줄여서 작업하는 것을 추천합니다.
                      * ‘white’ 레이어는 벡터로 구성되어야 하며, 비트맵은 제작되지 않습니다.</em>`
                  ]
                },
                {
                  image: 'trc-glossy-glossy-guide-04',
                  title: '화이트 인쇄 부분 적용 할 경우',
                  descriptions: [
                    `<em class="blue">‘white’</em> 레이어를 선택하고 화이트 인쇄를 적용하고 싶은 영역을 M100으로 채워서 지정해주세요.
                      이때, 화이트 영역은 반드시 디자인 레이어와 동일한 위치여야 해요.
                      <em class="blue">* 화이트 밀림 선이 보이지 않게 하기 위해 화이트 도형을 0.1mm정도 줄여서 작업하는 것을 추천합니다.
                      * ‘white’ 레이어는 벡터로 구성되어야 하며, 비트맵은 제작되지 않습니다.</em>`
                  ]
                },
                {
                  image: 'trc-glossy-glossy-guide-05',
                  descriptions: [
                    `<em class="blue">Eye 마크</em> 활성화 및 <em class="blue">레이어 순서</em>는 가이드 파일 그대로 변경이 없이 작업해야 하며,
                  모든 작업이 끝나면 <em class="blue">File</em>{`>`}<em class="blue">Save As</em> 를 선택하여 저장을 진행해 주세요.
                  <em class="blue">* 레이어명 변경 및 레이어 추가 안됨</em>`
                  ]
                },
                {
                  image: 'trc-glossy-glossy-guide-06',
                  descriptions: [
                    `Format 항목을 <em class="blue">PDF</em>로 선택한 후, Adobe PDF Preset은
                  <em class="blue">[Illustrator Default]</em> 표시된 3개의 옵션 항목을 체크해 주세요.`
                  ]
                },
                {}
              ]
            },
          ]
        }
      ],
      glossy: [
        {
          title: `글로시 효과 가이드`,
          className: 'bg-white border-top vertical-border',
          children: [
            {
              title: '글로시 효과 사용',
              className: 'bg-white col-2 ',
              children: [
                {
                  image: 'cup-glossy-option-01',
                  attentions: [
                    `사진, 클립아트, 텍스트에 제공되는 <em class="blue">[글로시 효과]</em> 옵션에서<br/>
                 <em class="blue">[사용]</em>을 선택하여 글로시 효과를 설정할 수 있어요.`
                  ]
                },
                {
                  image: 'cup-glossy-option-02',
                  attentions: [
                    `<em class="blue">[사용]</em>으로 선택한 디자인은 인쇄 후, 그 위에 바니시 처리를 해서 디자인과 색상이 더 선명하게 보이고 글로시하게 표현돼요.`,
                    `인쇄 면이 코팅되어 내용이 오래 보존돼요.`
                  ]
                }
              ]
            },
            {
              title: '글로시 효과 사용 안함',
              className: 'bg-white col-2',
              children: [
                {
                  image: 'cup-glossy-option-03',
                  attentions: [
                    `사진, 클립아트, 텍스트에 제공되는 <em class="blue">[글로시 효과]</em> 옵션에서 <em class="blue">[사용 안함]</em>을 선택 하면<br/>글로시 효과 없이 디자인을 출력할 수 있어요.`
                  ]
                },
                {
                  image: 'clean-option-white-04',
                  attentions: [
                    `<em class="blue">[사용 안함]</em>으로 선택한 디자인은 컵 특유의 질감이 살아있는 트렌디한 무광 인쇄 느낌으로 표현돼요.`
                  ]
                }
              ]
            },
            {
              title: `내 디자인 업로드 <em class="yellow">AI</em> 파일 설정하기`,
              className: 'bg-white col-2',
              children: [
                {
                  image: 'tumbler-glossy-guide-img-01',
                  title: '글로시 효과 전체 적용 할 경우',
                  descriptions: [
                    `<em class="blue">‘uv’</em> 레이어를 선택하고 글로시 효과를 적용하고 싶은 영역을 K100으로 채워서 지정해주세요.<br/>이때, 글로시 영역은 반드시 디자인 레이어와 동일한 위치여야 해요.<br/><em class="blue">* 글로시 효과를 원치 않는 경우, 반드시 ‘uv’ 레이어를 삭제해주세요.</em><br/><em class="blue">* ‘uv’ 레이어는 벡터로 구성되어야 하며, 비트맵은 제작되지 않습니다.</em>`
                  ]
                },
                {
                  image: 'tumbler-glossy-guide-img-02',
                  title: '글로시 효과 부분 적용 할 경우',
                  descriptions: [
                    `글로시 효과를 적용하고 싶은 영역을 K100으로 채워서 지정해주세요.<br/>이때, 글로시 영역은 반드시 디자인 레이어와 동일한 위치여야 해요.<br/><em class="blue">* 글로시 효과를 원치 않는 경우, 반드시 ‘uv’ 레이어를 삭제해주세요.</em><br/><em class="blue">* ‘uv’ 레이어는 벡터로 구성되어야 하며, 비트맵은 제작되지 않습니다.</em>`
                  ]
                },
                {
                  image: 'tumbler-glossy-guide-img-03',
                  descriptions: [
                    `<em class="blue">‘print’</em> 레이어를 선택하고 원하는 디자인을 작업해 주세요.`
                  ]
                },
                {
                  image: 'tumbler-glossy-guide-img-04',
                  descriptions: [
                    `<em class="blue">‘white’</em> 레이어를 선택하고 화이트 인쇄 영역을 M100으로 반드시 채워서 지정해주세요 (부분 적용 불가)<br/>이때, 화이트 영역은 반드시 디자인 레이어와 동일한 위치여야 해요.<br/><em class="blue">*화이트 밀림 선이 보이지 않게 하기 위해 화이트 도형을 -0.1mm정도 줄여서 작업하는 것을 추천합니다.</em><br/><em class="blue">*‘white’ 레이어는 벡터로 구성되어야 하며, 비트맵은 제작되지 않습니다.</em>`
                  ]
                },
                {
                  image: 'tumbler-glossy-guide-img-05',
                  descriptions: [
                    `<em class="blue">Eye 마크</em> 활성화 및 <em class="blue">레이어 순서</em>는 가이드 파일 그대로 변경이 없이 작업해야 하며,<br/>모든 작업이 끝나면 <em class="blue">File</em>{`>`}<em class="blue">Save As</em> 를 선택하여 저장을 진행해 주세요.<br/><em class="blue">* 레이어명 변경 및 레이어 추가 안됨</em>`
                  ]
                },
                {
                  image: 'tumbler-glossy-guide-img-06',
                  descriptions: [
                    `Format 항목을 <em class="blue">PDF</em>로 선택한 후, Adobe PDF Preset은<br/><em class="blue">[Illustrator Default]</em> 표시된 3개의 옵션 항목을 체크해 주세요. `
                  ]
                }
              ]
            }
          ]
        }
      ],
      reusable: [
        {
          className: 'bg-white border-top firstArea',
          children: [
            {
              title: `내 디자인 업로드 <em class="yellow">AI</em> 파일 설정하기`,
              className: 'bg-white col-2',
              children: [
                {
                  image: 'reusable-cub-white-img-01',
                  descriptions: [
                    `<em class="blue">‘print’</em> 레이어를 선택하고 원하는 디자인을 작업해 주세요.`
                  ]
                },
                {
                  image: 'reusable-cub-white-img-02',
                  descriptions: [
                    `<em class="blue">‘white’</em> 레이어를 선택하고 화이트 인쇄 영역을 M100으로 반드시 채워서 지정해주세요 (부분 적용 불가)<br/>이때, 화이트 영역은 반드시 디자인 레이어와 동일한 위치여야 해요.<br/><em class="blue">*화이트 밀림 선이 보이지 않게 하기 위해 화이트 도형을 -0.1mm정도 줄여서 작업하는 것을 추천합니다.</em><br/><em class="blue">*‘white’ 레이어는 벡터로 구성되어야 하며, 비트맵은 제작되지 않습니다.</em>`
                  ]
                },
                {
                  image: 'reusable-cub-white-img-03',
                  descriptions: [
                    `<em class="blue">Eye 마크</em> 활성화 및 <em class="blue">레이어 순서</em>는 가이드 파일 그대로 변경이 없이 작업해야 하며,<br/>모든 작업이 끝나면 <em class="blue">File</em>{`>`}<em class="blue">Save As</em> 를 선택하여 저장을 진행해 주세요.<br/><em class="blue">* 레이어명 변경 및 레이어 추가 안됨</em>`
                  ]
                },
                {
                  image: 'reusable-cub-white-img-04',
                  descriptions: [
                    `Format 항목을 <em class="blue">PDF</em>로 선택한 후, Adobe PDF Preset은<br/><em class="blue">[Illustrator Default]</em> 표시된 3개의 옵션 항목을 체크해 주세요. `
                  ]
                }
              ]
            }
          ]
        }
      ]
		};
	}

  getContentName() {
    let { category } = this.props;

    let name = '';

    switch(category){
      case 'new-stack-glass':
      case 'straight-glass':
        name = 'white';
        break;

      case 'translucent-reusable-cup':
        name = 'translucent';
        break;

      case 'reusable-cup':
        name = 'reusable';
        break;

      case 'eco-tumbler':
        name = 'glossy';
        break;

      default :
        name = 'defaults';
        break;
    }

    return name;
  }

	render() {
		let { className, width, category } = this.props;

		let isSmall = (width && width < 1140) ? 'small' : '';
		let contents = this.contents[ this.getContentName() ];

		return (
			<div className={`guide-effect-option-wrap ${className || ''}`}>
				{(contents || []).reduce((target, content) => {
					let { title, description, className, children } = content;

					target.push(
						<section className={className || ''}>
							<div className={`inner ${isSmall ? 'small' : ''}`}>
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
																			<img src={addCdn(`/images/common/guide/common/${image}@2x.jpg`)} alt=""/>
																		</div>


																		{(title || descriptions || attentions) && (
																			<div className="bottom">

                                        {title && (
                                          <h4 dangerouslySetInnerHTML={{ __html: title }}/>
                                        )}

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
