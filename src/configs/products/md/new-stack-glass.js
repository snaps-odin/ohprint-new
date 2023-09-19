

export const NEW_STACK_GLASS = {
  COMMON: {
    option: {
      NEW_STACK_GLASS_S: {
        thumbnail: 'detail-new-stack-glass-size-s',
        title: 'S',
        attentions: [
          '300ml'
        ]
      },
      NEW_STACK_GLASS_L: {
        thumbnail: 'detail-new-stack-glass-size-l',
        title: 'L',
        attentions: [
          '440ml'
        ]
      },
    },
    variations: [
      {
        attributes: ['NEW_STACK_GLASS_S', 'NEW_STACK_GLASS_S'],
        image: 'new-stack-glass-s'
      },
      {
        attributes: ['NEW_STACK_GLASS_S', 'NEW_STACK_GLASS_L'],
        image: 'new-stack-glass-l'
      },
    ],
    showcases: {
      TITLE: {
        className: 'bg-white vertical-border',
        title: '남들과는 다른<br/>오프린트미 뉴 스택 글라스의 특징!'
      },
      CUSTOM_ORDER: {
        title: '✅ 한 개부터, 원하는 수량으로 제작해드려요.',
        descriptions:[
          '내가 필요한 수량만 꼭 맞춤으로 구매할 수 있어요.'
        ],
        className: 'bg-white col-2',
        children: [
          {
            image: 'new-stack-glass-img-01',
            attentions: [
              '1개부터 만들 수 있어 합리적이에요.'
            ]
          },
          {
            image: 'new-stack-glass-img-02',
            attentions: [
              '대량으로 구매 시 개당 가격이 저렴해져요.',
              'S : 1개 구매 시 12,500원 > 최대 개당 8,800원 / L : 1개 구매 시 13,500원 > 최대 개당 9,500원'
            ]
          }
        ]
      },
      CUSTOM_PRINTING: {
        title: '✅ 나만의 커스텀 디자인, 제한 없이 프린팅하세요.',
        descriptions:[
          '단 한 개를 주문해도 내가 원하는 대로 만들 수 있어요.'
        ],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'new-stack-glass-img-03',
            attentions: [
              '한쪽 면에만 프린팅되는 일반 컵 굿즈와는 달라요! 인쇄 영역 제한없이 360도 디자인이 가능해요.'
            ]
          },
          {
            image: 'new-stack-glass-img-04',
            attentions: [
              'UV 인쇄 방식으로 원하는 컬러가 무엇이든, 자유롭게 프린팅 할 수 있으며,<br>글로시한 바니시 마감으로 프린팅의 지속력을 높이고 벗겨짐, 훼손을 최소화했어요.'
            ]
          }
        ]
      },
      SHOW_DETAIL: {
        title: '자세히 보여 드릴께요.',
        descriptions:[
          '유니크한 디자인은 물론, 실용성까지 갖춘 뉴 스택 글라스를 살펴보세요.'
        ],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'new-stack-glass-img-05',
            attentions: [
              '겹겹이 쌓을 수 있는 스택 디자인으로 공간 활용에 효율적이며 보관이 편리해요.'
            ]
          },
          {
            image: 'new-stack-glass-img-06',
            attentions: [
              '견고한 강화유리 소재로 강도가 높아 단단하고 내구성이 우수해요.'
            ]
          },
          {
            image: 'new-stack-glass-img-07',
            attentions: [
              '한 손에 잡기 좋은 디자인으로 그립감이 좋아 편안하게 사용할 수 있어요.'
            ]
          },
          {
            image: 'new-stack-glass-img-08',
            attentions: [
              '유니크한 디자인에 브랜드의 개성까지 담아 소장 가치를 주는 굿즈로 제작해보세요.'
            ]
          }
        ]
      },
      SIZE_CHECK: {
        title: '사이즈를 확인하세요.',
        descriptions:[
          '음료 용량에 따라 두가지의 사이즈를 선택할 수 있어요.'
        ],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'new-stack-glass-size-s',
            title: 'S (300ml)',
            descriptions: [
              '기본 용량으로 물, 주스 등의 음료는 물론,<br/>디저트 볼이나 라떼에 가장 잘 어울리는 유리컵이에요.'
            ]
          },
          {
            image: 'new-stack-glass-size-l',
            title: 'L (440ml)',
            descriptions: [
              '넉넉한 용량으로 아이스 음료류를 담아 마시기 적합하며,<br/>맥주 등의 주류에도 사용하기 좋은 대용량 유리컵이에요.'
            ]
          }
        ]
      },
      PRODUCT_INFO_1: {
        className: "col-2 pb-0 bg-white border-top",
        title: '상품 정보',
        children: [
          {
            image: "new-stack-glass-info-01"
          },
          {
            image: "new-stack-glass-info-02"
          }
        ]
      },

      PRODUCT_INFO_2: {
        className: "col-1 pt-0 row-last bg-white",
        children: [
          {
            descriptions: ['유리 제품 공정 과정에서 글라스 입구 표면에 뭉침 현상과 유리 기포, 약간의 휘어짐이 있을 수 있으며,<br/>내부 바닥면의 수평이 맞지 않을 수 있으나 이는 불량이 아닙니다.'],
          }
        ]
      },

      BASIC_INFO: {
      className: "table-col bg-white border-top",
      title: "기본 정보",
      type: "table",
      children: [
          {
            descriptions: ["강화유리"],
            title: "소재"
          },
          {
            descriptions: ["S : 상단 지름 80 x 하단 지름 70 x 높이 87 (mm) / L : 상단 지름 80 x 하단 지름 65 x 높이 132 (mm)"],
            title: "사이즈"
          },
          {
            descriptions: ["S : 300ml / L : 440ml"],
            title: "용량"
          },
          {
            descriptions: ["터키"],
            title: "제조국"
          }
        ],
        notice: {
          title : '상품 유의사항',
          subTitle : '구매 전 꼭 읽어주세요.',
          contents : [
            '<em class="blue">사용 전, 반드시 세척</em>하여 사용해 주세요.',
            '<em class="blue">최소 1주일은 인쇄면 보호를 위해 주의가 필요</em>하므로, 해당 기간 동안 세척 시 부드러운 도구를 사용해 주시고, 강한 마찰은 피해주세요.',
            '뜨거운 물로 세척 시 프린팅이 벗겨질 우려가 있어, 반드시 <em class="blue">찬물 또는 미온수</em>를 사용하여 세척해 주시기 바랍니다.',
            '부득이하게 뜨거운 물로 세척이 필요한 경우, 프린팅 마찰을 최소화하고 충분히 건조한 뒤 사용해 주시기 바랍니다.',
            '내열 유리 제품이 아니므로 <em class="blue">열탕 소독은 피해주시고</em> 이로 인한 제품 파손시 교환/반품 처리가 어렵습니다.',
            '<em class="blue">식기세척기와 전자레인지 사용은 불가</em>합니다.'
          ]
        }
      }
    },

    guide:{
      contents:{
        EDIT_NOTICE: {
          title: '편집 유의사항',
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'new-stack-glass-notify-01',
              attentions: [
                '화이트 인쇄를 사용한 디자인은 글라스 안쪽에서 봤을 때, 화이트 인쇄면이 노출되어 나타납니다.'
              ]
            },
            {
              image: 'new-stack-glass-notify-02',
              attentions: [
                '화이트 인쇄를 부분 적용할 수 있으며, 컬러 인쇄 영역과 인쇄 오차가 발생할 수 있습니다.',
                '내 디자인 업로드 시 화이트 인쇄 밀림을 최소화 하기 위해서는 화이트 영역 사방 -0.1mm로 줄여 제작하거나 화이트 계열의 밝은 컬러 데이터로 디자인해주세요.'
              ]
            }
          ]
        },
        DESCRIPTION: {
          className: 'bg-white border-top fanMarginTop50',
          attentions: [
            '굴곡이 많은 디자인의 경우 인쇄 시 부드럽지 않게 표현될 수 있으니 작업 시 주의가 필요합니다.',
            '화이트 인쇄 여부에 따라 구현되는 이미지가 다르게 보일 수 있습니다.',
            '화이트 인쇄 밀림이 최대 1mm정도 있을 수 있습니다.',
            '내 디자인 업로드 시 기본 글로시 효과 제공이 안되므로 직접 글로시 효과 영역을 지정해주시기 바랍니다.',
            '폰트의 경우 10pt 이상 볼드체 사용을 권장합니다.',
            '라인의 경우 1pt 이상 굵기 사용을 권장합니다.',
            '0.5pt 미만의 얇은 라인과 폰트 사용 시 인쇄가 어려울 수 있어 권장하지 않습니다.'
          ],
          notice: {
            title : '상품 유의사항',
            subTitle : '구매 전 꼭 읽어주세요.',
            contents : [
              '<em class="blue">사용 전, 반드시 세척</em>하여 사용해 주세요.',
              '<em class="blue">최소 1주일은 인쇄면 보호를 위해 주의가 필요</em>하므로, 해당 기간 동안 세척 시 부드러운 도구를 사용해 주시고, 강한 마찰은 피해주세요.',
              '뜨거운 물로 세척 시 프린팅이 벗겨질 우려가 있어, 반드시 <em class="blue">찬물 또는 미온수</em>를 사용하여 세척해 주시기 바랍니다.',
              '부득이하게 뜨거운 물로 세척이 필요한 경우, 프린팅 마찰을 최소화하고 충분히 건조한 뒤 사용해 주시기 바랍니다.',
              '내열 유리 제품이 아니므로 <em class="blue">열탕 소독은 피해주시고</em> 이로 인한 제품 파손시 교환/반품 처리가 어렵습니다.',
              '<em class="blue">식기세척기와 전자레인지 사용은 불가</em>합니다.'
            ]
          }
        },
        NOTICE_INFO: {
          className: "bg-white border-top",
          type: 'notice',
          children: [""],
          notice: {
            title : '인쇄 색상 관련 안내',
            subTitle : '작업 시 꼭 읽어주세요.',
            contents : [
              '템플릿, 직접 디자인 하기 이용 시 RGB 색상 모드로 제공되어 실제 인쇄 색상과 다르게 표현될 수 있습니다.',
              '보다 정확한 색상 구현이 필요한 경우, 내 디자인 업로드를 권장 드립니다.'
            ]
          }
        }
      },
      services: [
        'EDIT_NOTICE',
        'DESCRIPTION',
        'NOTICE_INFO'
      ]
    }
  },
  CONTENTS: {
    DEFAULTS: {
      title: '뉴 스택 글라스',
      attentions: [
        '유니크한 디자인으로 실용성도 함께! 겹겹이 쌓아 컴팩트하게 보관할 수 있어요.',
        '360도 디자인이 가능해서 우리 브랜드를 자유롭게 담을 수 있어요.'
      ],
      services: [
        'TITLE',
        'CUSTOM_ORDER',
        'CUSTOM_PRINTING',
        'SHOW_DETAIL',
        'SIZE_CHECK',
        'PRODUCT_INFO_1',
        'PRODUCT_INFO_2',
        'BASIC_INFO'
      ]
    }
  }
};
