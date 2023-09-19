

export const STANDARD_PEN = {
	COMMON: {
		option: {},
		variations: [
			{
				attributes: [ 'STANDARD_PEN', 'NONE', 'BLACK' ],
				image: 'standard-pen-black'
			},
      {
        attributes: [ 'STANDARD_PEN', 'NONE', 'WHITE' ],
        image: 'standard-pen-white'
      },
		],
		showcases: {
      SHOW_DETAIL: {
        title: '자세히 보여 드릴께요.',
        descriptions:[
          '유해 성분을 사용하지 않으며, <br/>' +
          '스위스와 유럽의 엄격한 제조, 환경기준을 준수하고 있어요.'
        ],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'standard-pen-img-01',
            attentions: [
              '세계에서 가장 큰 규모의 필기구 심 제조회사인 Pigra의 볼펜 심을 사용해요.',
              '볼펜심 정보 : 유성 FloatingBall Mini Jumbo 1.0mm'
            ]
          },
          {
            image: 'standard-pen-img-02',
            attentions: [
              '단단하고 묵직한 필기감이에요.',
              '볼펜심 컬러는 블랙이에요.'
            ]
          },
          {
            image: 'standard-pen-img-03',
            attentions: [
              '바디부터 클립까지 모든 부분이 같은 질감, 색상으로 매트하고 고급스러워요.'
            ]
          },
          {
            image: 'standard-pen-img-04',
            attentions: [
              '클립이 넓어 브랜드를 표현하거나 브랜드 컬러를 강조할 수 있어요.'
            ]
          }
        ]
      },

      COLOR_CHECK: {
        title: '색상을 확인해 보세요.',
        descriptions: ['잉크색은 블랙이에요.'],
        className: 'bg-white col-4 border-top centerItemTwo',
        children: [
          {
            image: 'standard-pen-color-black',
            title: [
              '블랙'
            ]
          },
          {
            image: 'standard-pen-color-white',
            title: [
              '화이트'
            ]
          }
        ]
      },

      SIZE_CHECK : {
        title: "사이즈를 확인하세요.",
        descriptions: ['139mm X 11.7mm'],
        className: "col-2 bg-white border-top",
        children: [
          {
            image: "standard-pen-size-01"
          },
          {
            image: "standard-pen-size-02"
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
      title: '스탠다드 볼펜',
      attentions: [
        '누구나 좋아할 클래식한 볼펜!<br/>특별함을 더해보세요.'
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
