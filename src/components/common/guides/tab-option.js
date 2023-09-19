

import React from 'react';

import { breaklines } from 'utils/string';
import Attention from 'components/common/attention';
import Tab from 'components/common/tab';
import { addCdn } from 'utils/url';
import { getDatasetByName } from 'utils/dom';
import update from "react-addons-update";

export default class GuideTabOption extends React.Component {
	constructor(...args) {
		super(...args);

    this.state = {
      focus: 0
    };

		this.contents = {
			businessCard: [
        {
          category: 'guide_01',
          title: '',
          className: 'bg-white firstArea',
          children: [
            {
              title: '효과는 재단선을 피해서 적용해 주세요.',
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
                }
              ]
            },
            {
              title: `파일 업로드 및 제작하기`,
              className: 'bg-white col-2',
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
				  category: 'guide_02',
					className: 'bg-white firstArea',
					children: [
						{
							title: `<em class="yellow">AI</em> 파일 설정하기`,
							className: 'bg-white col-2',
							children: [
								{
									image: 'foil-ai-01',
									descriptions: [
										`<em>‘print’</em> 레이어를 선택하고 원하는 디자인을 작업해 주세요.<br/><em>‘UV’</em> 레이어(효과 지정) 작업 후 해당 영역 디자인은 삭제해주세요.<br/>(유의사항 참고)`
									]
								},
								{
									image: 'foil-ai-02',
									descriptions: [
										`<em>‘UV’</em> 레이어를 선택하고 효과를 적용할 영역을 M100으로 채워주세요.<br/><em>‘UV’</em> 레이어는 반드시 벡터로 구성되어야 하며 비트맵 제작되지 않습 니다.`
									]
								},
								{
									image: 'foil-ai-03',
									descriptions: [
										`<em>Eye 마크</em> 활성화 및 <em>레이어 순서</em>는 가이드 파일 그대로 변경이 없이 작업해야 하며,<br/>모든 작업이 끝나면 <em>File</em> > <em>Save As</em> 를 선택하여 저장을 진행해 주세요.<br/><em>* 레이어명 변경 및 레이어 추가 안됨</em>`
									]
								},
								{
									image: 'foil-ai-04',
									descriptions: [
										`Format 항목을 <em>PDF</em>로 선택한 후, Adobe PDF Preset은<br/><em>[Illustrator Default]</em> 표시된 3개의 옵션 항목을 체크해 주세요. `
									]
								}
							]
						},
            {
              title: '디자인 업로드하기',
              className: 'box thin col-2',
              children: [
                {
                  image: 'press-edit-01',
                  descriptions: [
                    '효과 옵션을 선택하고 UV 레이어를 설정하지 않으면 제작할 수 없어요.'
                  ]
                },
                {
                  image: 'press-edit-02',
                  descriptions: [
                    '효과 옵션을 선택하고 UV 레이어를 설정하지 않으면 제작할 수 없어요.'
                  ]
                }
              ]
            },
            {
              title: '유의사항',
              className: 'box thin col-2',
              children: [
                {
                  image: 'foil-edit-03',
                  descriptions: [
                    'Print 레이어에서 효과가 적용되는 부분을 삭제해 주세요.'
                  ]
                },
                {
                  image: 'foil-edit-04',
                  descriptions: [
                    '라인이나 테두리 디자인의 경우 가공 후 사방 간격이 일정하지 않거나<br/>기울어져 보일 수 있습니다.'
                  ]
                }
              ]
            },
            {
              className: 'box thin',
              children: [
                {
                  attentions: [
                    '6pt 미만의 작은 글씨나 1pt 미만의 얇은 선 디자인은 박 필름이 잘 붙지 않아 연결이 매끄럽지 않게 보일 수 있습니다.',
                    '이미지나 글씨 사이의 간격이 너무 가까우면 가공 후 뭉침 현상이 보일 수 있습니다.',
                    '용지에 따라 찍히는 박의 압력이 약간씩 다를 수 있으며, 작업 공정상 가공 부위는 약간 음각으로 들어가 보일 수 있습니다.',
                    '펠트나 리넨처럼 용지 자체의 텍스쳐가 있는 경우 가공 부위에 텍스쳐가 함께 드러날 수 있습니다.'
                  ]
                }
              ]
            }
					]
				},
        {
          category: 'guide_03',
          title: `<em class="yellow">AI</em> 파일 설정하기`,
          className: 'bg-white',
          children: [
            {
              title: '디자인과 효과를 동시에 적용하지 않을 경우',
              className: 'bg-white col-2',
              children: [
                {
                  image: 'foil-ai-01',
                  descriptions: [
                    `<em>‘print’</em> 레이어를 선택하고 원하는 디자인을 작업해 주세요.<br/><em>‘UV’</em> 레이어(효과 지정) 작업 후 해당 영역 디자인은 삭제해주세요.<br/>(유의사항 참고)`
                  ]
                },
                {
                  image: 'foil-ai-02',
                  descriptions: [
                    `<em>‘UV’</em> 레이어를 선택하고 효과를 적용할 영역을 M100으로 채워주세요.<br/><em>‘UV’</em> 레이어는 반드시 벡터로 구성되어야 하며 비트맵 제작되지 않습 니다.`
                  ]
                }
              ]
            },
            {
              title: '디자인과 효과를 동시에 적용할 경우',
              description: `<em>인쇄 데이터와 형압을 같은 위치에 동시 적용 시,<br/>인쇄 데이터에 정확한 형압 가공이 어려워 오차 (±1~4mm)가 생길 수 있기에 권장하지 않습니다.</em>`,
              className: 'bg-white col-2',
              children: [
                {
                  image: 'press-ai-03',
                  descriptions: [
                    `<em>‘print’</em> 레이어를 선택하고 원하는 디자인을 작업해 주세요.`
                  ]
                },
                {
                  image: 'press-ai-04',
                  descriptions: [
                    `<em>‘UV’</em> 레이어를 선택하고 효과를 적용할 영역을 M100으로 채워주세요.<br/>이때, 효과 영역은 디자인과 동일한 위치여야 해요.<br/><em>‘UV’</em> 레이어는 반드시 벡터로 구성되어야 하며 비트맵 제작되지 않습 니다.`
                  ]
                },
                {
                  image: 'press-ai-05',
                  descriptions: [
                    `<em>Eye 마크</em> 활성화 및 <em>레이어 순서</em>는 가이드 파일 그대로 변경이 없이 작업해야 하며,<br/>모든 작업이 끝나면 <em>File</em> > <em>Save As</em> 를 선택하여 저장을 진행해 주세요.<br/><em>* 레이어명 변경 및 레이어 추가 안됨</em>`
                  ]
                },
                {
                  image: 'press-ai-06',
                  descriptions: [
                    `Format 항목을 <em>PDF</em>로 선택한 후, Adobe PDF Preset은<br/><em>[Illustrator Default]</em> 표시된 3개의 옵션 항목을 체크해 주세요. `
                  ]
                }
              ]
            },
            {
              title: '디자인 업로드하기',
              className: 'box thin col-2',
              children: [
                {
                  image: 'press-edit-01',
                  descriptions: [
                    '효과 옵션을 선택하고 UV 레이어를 설정하지 않으면 제작할 수 없어요.'
                  ]
                },
                {
                  image: 'press-edit-02',
                  descriptions: [
                    '효과 옵션을 선택하고 UV 레이어를 설정하지 않으면 제작할 수 없어요.'
                  ]
                }
              ]
            },
            {
              title: '유의사항',
              className: 'box thin col-2',
              children: [
                {
                  image: 'press-edit-03',
                  descriptions: [
                    `<dl>
										<dd><span class="icon icon-wrong-1818"/></dd>
										<dd>가공 시 양면에 영향을 주는 형압 특성 상 <em class="red">단면만 효과 적용이 가능합니다.</em></dd>
									</dl>`
                  ]
                },
                {
                  image: 'press-edit-04',
                  descriptions: [
                    `<dl>
										<dd><span class="icon icon-right-1818"/></dd>
										<dd>형압 데이터를 넣는 면이 정해져 있기 때문에 <em>반드시 뒷면에 효과 데이터를 넣어야 합니다.<em/></dd>
									</dl>`
                  ]
                }
              ]
            },
            {
              className: 'box thin',
              children: [
                {
                  attentions: [
                    '라인이나 테두리 디자인의 경우 가공 후 사방 간격이 일정하지 않거나 기울어져 보일 수 있습니다.',
                    '용지에 따라 찍히는 형압의 압력이 약간 씩 다를 수 있습니다.'
                  ]
                }
              ]
            },
          ]
        },
				{
          category: 'guide_04',
          description: '',
          className: 'bg-white firstArea',
          children: [
            {
              title: `<em class="yellow">AI</em> 파일 설정하기`,
              className: 'bg-white col-2',
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
                    `<em>Eye 마크</em> 활성화 및 <em>레이어 순서</em>는 가이드 파일 그대로 변경이 없이 작업해야 하며,<br/>모든 작업이 끝나면 <em>File</em> > <em>Save As</em> 를 선택하여 저장을 진행해 주세요.<br/><em>* 레이어명 변경 및 레이어 추가 안됨</em>`
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
              title: '디자인 업로드하기',
              className: 'box thin col-2',
              children: [
                {
                  image: 'press-edit-01',
                  descriptions: [
                    '효과 옵션을 선택하고 UV 레이어를 설정하지 않으면 제작할 수 없어요.'
                  ]
                },
                {
                  image: 'press-edit-02',
                  descriptions: [
                    '효과 옵션을 선택하고 UV 레이어를 설정하지 않으면 제작할 수 없어요.'
                  ]
                }
              ]
            },
            {
              title: '유의사항',
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
										<dd>크고 두꺼운 폰트와굵은 선이나 면으로 디자인해주세요. </dd>
									</dl>`
                  ]
                }
              ]
            }
					]
				}
			]
		};

		this.tab = this.getTab();

    this.onClickMenu = this.onClickMenu.bind(this);
    this.getTab = this.getTab.bind(this);
	}

  getTab() {
    let { category } = this.props;

    let data = null;

    switch (category) {
      case 'business-card':
        data = [
          {
            label: '효과 공통 유의사항',
            category: 'guide_01'
          },
          {
            label: '박 적용 가이드',
            category: 'guide_02'
          },
          {
            label: '형압 적용 가이드',
            category: 'guide_03'
          },
          {
            label: '스코딕스 적용 가이드',
            category: 'guide_04'
          }
        ];
        break;
    }

    return data;
  }

  onClickMenu(event) {
    let { focus } = this.state;

    let index = Number(getDatasetByName(event.currentTarget, 'index'));

    focus !== index && this.setState(update(this.state, {
      focus: { $set: index }
    }));
  }


	render() {
		let { className, width, category } = this.props;
    let { focus } = this.state;

    let isBusinessCard = (category || '').match(/business-card/i);

		let isSmall = (width && width < 1140) ? 'small' : '';

		let contents = this.contents[ 'businessCard' ];
    contents = contents.filter(e => e.category === this.tab[ focus ].category);


		return (
			<div className={`guide-effect-option-wrap ${className || ''}`}>

        <section className={contents.length > 0 ? contents[0].className : ''}>
          <div className={`inner ${isSmall ? 'small' : ''} paddingTopNone`}>
            <ul>
              <li>
                <h4>효과 적용 가이드</h4>

                {(this.tab || []).length > 0 && (
                  React.cloneElement(<Tab/>, {
                    labels: this.tab.reduce((target, list) => {
                      target.push(list[ 'label' ]);

                      return target;
                    }, []),
                    activeIndex: focus,
                    tabWidth: `${100 / this.tab.length}%`,
                    tabHeight: `50px`,
                    actions: {
                      handleChange: this.onClickMenu
                    },
                    className: 'modern'
                  })
                )}
              </li>
            </ul>

          </div>
        </section>

				{(contents || []).reduce((target, content) => {
            let { title, description, className, children } = content;

            target.push(
              <section className={className || ''}>
                <div className={`inner ${isSmall ? 'small' : ''} paddingTopNone`}>

                  {title && <h3 dangerouslySetInnerHTML={{__html: title}}/>}

                  {description && (
                    <p dangerouslySetInnerHTML={{ __html: description }}/>
                  )}

                  {(children || []).length > 0 && (
                    <ul className={`${className || ''} ${isSmall ? 'small' : ''}`}>
                      {(children || []).reduce((target, child) => {
                        let { title, description, className, children } = child;

                        target.push(
                          <li>
                            {title && (
                              <h4 dangerouslySetInnerHTML={{ __html: title }}/>
                            )}

                            {description && (
                              <p dangerouslySetInnerHTML={{ __html: description }}/>
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
