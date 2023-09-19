

export const ECO_PEN = {
	COMMON: {
		option: {},
		variations: [
      {
        attributes: ['ECO_PEN', 'NONE', 'IVORY'],
        image: 'eco-pen-ivory'
      },
      {
        attributes: ['ECO_PEN', 'NONE', 'LIGHTGRAY'],
        image: 'eco-pen-lightgrey'
      },
      {
        attributes: ['ECO_PEN', 'NONE', 'DARKGRAY'],
        image: 'eco-pen-darkgrey'
      },
    ],
		showcases: {
      SHOW_DETAIL: {
        title: '자세히 보여 드릴께요.',
        descriptions:[
          '친환경 원료를 사용한 볼펜으로,<br/>독일의 엄격한 인증을 받은 제품이에요.'
        ],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'eco-pen-img-01',
            attentions: [
              '자연 분해되는 옥수수 전분의 소재로 만들어져 지구에도, 나에게도 안전해요.'
            ]
          },
          {
            image: 'eco-pen-img-02',
            attentions: [
              '프리미엄 볼펜심으로 매끄럽고 부드러운 필기감을 가지고 있어요.',
              '볼펜심 컬러는 블랙이에요.'
            ]
          },
          {
            image: 'eco-pen-img-03',
            attentions: [
              '독일의 엄격한 인증을 받은 제품으로, 옆 면에 각인된 마크로 확인할 수 있어요.'
            ]
          },
          {
            image: 'eco-pen-img-04',
            attentions: [
              '매트한 고급스러움과 친환경 가치를 담은 굿즈로 브랜드의 특별함을 더해보세요.'
            ]
          }
        ]
      },

      COLOR_CHECK: {
        title: '색상을 확인해 보세요.',
        descriptions: ['잉크색은 블랙이에요.'],
        className: 'bg-white col-4 border-top',
        children: [
          {
            image: 'eco-pen-color-ivory',
            title: [
              '아이보리'
            ]
          },
          {
            image: 'eco-pen-color-lightgrey',
            title: [
              '라이트 그레이'
            ]
          },
          {
            image: 'eco-pen-color-darkgrey',
            title: [
              '다크 그레이'
            ]
          }
        ]
      },

      SIZE_CHECK : {
        title: "사이즈를 확인하세요.",
        descriptions: ['150mm x 13mm'],
        className: "col-2 bg-white border-top",
        children: [
          {
            image: "eco-pen-size-01"
          },
          {
            image: "eco-pen-size-02"
          }
        ]
      },

      PRINT_CHECK: {
        title: '인쇄 특성을 확인하세요.',
        className: 'bg-white vertical-border border-top'
      },

      PRINT_UV: {
        deco: '',
        title: 'UV 인쇄',
        descriptions: [ '일반인쇄와 달리 자외선으로 순간 건조를 시키면서 인쇄하는 방식이에요.' ],
        className: 'bg-white col-2',
        children: [
          {
            image: 'pen-print-01',
            attentions: ['깔끔하고 선명한 인쇄 퀄리티 구현이 가능해요.']
          },
          {
            image: 'pen-print-02',
            attentions: ['색상에 제한 없이 모든 색상을 인쇄할 수 있어요.']
          }
        ]
      },

      INFORM_SERVICE: {
        title: '다양한 상품으로 브랜드를 표현해보세요.',
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'pen-info-01',
            attentions: [
              '브랜드 굿즈로 활용해요.'
            ]
          },
          {
            image: 'pen-info-02',
            attentions: [
              '동일한 디자인으로 다양한 상품도 만들어 보세요.'
            ]
          }
        ]
      }

		},

    guide:{
      contents:{

        EDIT_NOTICE: {
          title: '편집 유의사항',
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'pen-notify-01',
              attentions: [
                '라인 굵기는 0.5pt 이상으로 권장합니다.'
              ]
            },
            {
              image: 'pen-notify-02',
              attentions: [
                '화이트 인쇄를 기본 제공하기 때문에 오차 범위 있을 수 있습니다.'
              ]
            },
            {
              image: 'pen-notify-03',
              attentions: [
                '일반 Light / Medium 굵기 폰트 사용 시 4pt 이상으로 권장합니다.',
                'Bold 굵기 이상으로 사용 시 폰트는 5pt 이상으로 권장합니다.'
              ]
            },
            {
              image: 'pen-notify-04',
              attentions: [
                '상품 컬러와 동일한 컬러 인쇄는 권장하지 않습니다.'
              ]
            },
            {
              image: 'pen-notify-05',
              attentions: [
                '인쇄 영역을 가득 채우기보다 간단한 문구로 제작하는 것을 권장합니다.'
              ]
            },
            {
              image: 'pen-notify-06',
              attentions: [
                '복잡하지 않은 디자인을 넣었을 때, 더 깔끔하게 표현됩니다.'
              ]
            }
          ]
        },
      },
      services: [
        'EDIT_NOTICE',
      ]
    }
	},
	CONTENTS: {
		DEFAULTS: {
      title: '친환경 볼펜',
      attentions: [
        '친환경 소재 사용으로 안전하면서도 고급스러운<br/>볼펜으로 내 브랜드의 가치를 전해보세요.'
      ],
      services: [
        'SHOW_DETAIL',
        'COLOR_CHECK',
        'SIZE_CHECK',
        'PRINT_CHECK',
        'PRINT_UV',
        'INFORM_SERVICE'
      ]
		}
	}
};
