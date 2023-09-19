

export const BASIC_PEN = {
	COMMON: {
		option: {},
		variations: [
			{
				attributes: [ 'BASIC_PEN', 'NONE', 'WHITE' ],
				image: 'basic-pen-white'
			},
      {
        attributes: [ 'BASIC_PEN', 'NONE', 'BLACK' ],
        image: 'basic-pen-black'
      },
      {
        attributes: [ 'BASIC_PEN', 'NONE', 'RED' ],
        image: 'basic-pen-red'
      },
      {
        attributes: [ 'BASIC_PEN', 'NONE', 'DARKBLUE' ],
        image: 'basic-pen-darkblue'
      },
      {
        attributes: [ 'BASIC_PEN', 'NONE', 'LIGHTBLUE' ],
        image: 'basic-pen-lightblue'
      },
      {
        attributes: [ 'BASIC_PEN', 'NONE', 'DARKGREEN' ],
        image: 'basic-pen-green'
      }

		],
		showcases: {
      SHOW_DETAIL: {
        title: '자세히 보여 드릴께요.',
        descriptions:[
          '브랜드, 캠페인 슬로건까지 기억 속에 남길 수 있도록 홍보 가능해요.'
        ],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'basic-pen-img-01',
            attentions: [
              '세계에서 가장 큰 규모의 필기구 심 제조회사인 Pigra의 볼펜 심을 사용해요.',
              '볼펜심 정보 : 유성 FloatingBall Capillary 1.0mm '
            ]
          },
          {
            image: 'basic-pen-img-02',
            attentions: [
              '젤 잉크 같은 부드러운 필기감이에요.',
              '볼펜심 컬러는 블랙이에요.'
            ]
          },
          {
            image: 'basic-pen-img-03',
            attentions: [
              '납작한 면에 하나의 문장까지 또렷하고 길게 새길 수 있어요.'
            ]
          },
          {
            image: 'basic-pen-img-04',
            attentions: [
              '브랜드 컬러와 비슷한 펜컬러를 선택할 수 있어요.'
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
            image: 'basic-pen-color-white',
            title: [
              '화이트'
            ]
          },
          {
            image: 'basic-pen-color-black',
            title: [
              '블랙'
            ]
          },
          {
            image: 'basic-pen-color-red',
            title: [
              '레드'
            ]
          },
          {
            image: 'basic-pen-color-darkblue',
            title: [
              '다크블루'
            ]
          },
          {
            image: 'basic-pen-color-lightblue',
            title: [
              '라이트블루'
            ]
          },
          {
            image: 'basic-pen-color-darkgreen',
            title: [
              '다크그린'
            ]
          }
        ]
      },

      SIZE_CHECK : {
        title: "사이즈를 확인하세요.",
        descriptions: ['143mm X 10mm'],
        className: "col-2 bg-white border-top",
        children: [
          {
            image: "basic-pen-size-01"
          },
          {
            image: "basic-pen-size-02"
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
      title: '베이직 볼펜',
      attentions: [
        '캐주얼함이 가득한 볼펜!<br/>특별함을 더해보세요.'
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
