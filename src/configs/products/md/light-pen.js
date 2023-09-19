

export const LIGHT_PEN = {
	COMMON: {
		option: {},
		variations: [
      {
        attributes: [ 'LIGHT_PEN', 'NONE', 'WHITE' ],
        image: 'light-pen-white'
      },
      {
        attributes: [ 'LIGHT_PEN', 'NONE', 'BLACK' ],
        image: 'light-pen-black'
      },
      {
        attributes: [ 'LIGHT_PEN', 'NONE', 'PINK' ],
        image: 'light-pen-pink'
      },
      {
        attributes: [ 'LIGHT_PEN', 'NONE', 'BLUE' ],
        image: 'light-pen-blue'
      },
    ],
		showcases: {
      SHOW_DETAIL: {
        title: '자세히 보여 드릴께요.',
        descriptions:[
          '브랜드 로고와 정보까지 쉽고, 뚜렷하게 홍보 가능해요.'
        ],
        className: 'bg-white col-2',
        children: [
          {
            image: 'light-pen-img-01-v2',
            attentions: [
              '1개부터 제작 가능하며, 대량으로 구매 시 더욱 합리적인 가격으로 홍보할 수 있어요.'
            ]
          },
          {
            image: 'light-pen-img-02-v2',
            attentions: [
              'UV 인쇄 방식으로 원하는 대로 컬러를 선택해서, 브랜드를 표현할 수 있어요.'
            ]
          }
        ]
      },

      COLOR_CHECK: {
        title: '색상을 확인해 보세요.',
        descriptions: ['잉크색은 블랙이에요.'],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'light-pen-color-white',
            title: [
              '화이트'
            ]
          },
          {
            image: 'light-pen-color-black',
            title: [
              '블랙'
            ]
          }
        ]
      },

      PAPER_CHECK: {
        title: '재질을 확인해 보세요.',
        descriptions:[
          '브랜드 로고와 정보까지 쉽고, 뚜렷하게 홍보 가능해요.'
        ],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'light-pen-texture-01',
            title: '화이트 볼펜',
            descriptions: [
              '매끈한 재질로 광택감이 느껴져요.'
            ]
          },
          {
            image: 'light-pen-texture-02-v2',
            title: '블랙 볼펜',
            descriptions: [
              '무광으로 매트하고 부드러운 재질이에요.'
            ]
          }
        ]
      },

      SIZE_CHECK : {
        title: "사이즈를 확인하세요.",
        descriptions: ['150mm x 10mm'],
        className: "col-2 bg-white border-top",
        children: [
          {
            image: "light-pen-size-01-v2"
          },
          {
            image: "light-pen-size-02"
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
            image: 'pen-info-01-v2',
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
              image: 'pen-notify-06-v2',
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
      title: '라이트 볼펜',
      attentions: [
        '합리적인 가격으로 부담없이 제작하여<br/>브랜드를 홍보해 보세요.'
      ],
      services: [
        'SHOW_DETAIL',
        'COLOR_CHECK',
        'PAPER_CHECK',
        'SIZE_CHECK',
        'PRINT_CHECK',
        'PRINT_UV',
        'INFORM_SERVICE'
      ]
		}
	}
};
