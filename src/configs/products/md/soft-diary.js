

export const SOFT_DIARY = {
	COMMON: {
    option: {
      POSITION_FRONT: {
        thumbnail: 'detail-soft-diary-front',
        title: '앞면',
        attentions: [
          '최대 110mm x 170mm'
        ]
      },
      POSITION_BACK: {
        thumbnail: 'detail-soft-diary-back',
        title: '뒷면',
        attentions: [
          '최대 110mm x 170mm'
        ]
      },
      LASER_PRINTING: {
        thumbnail: 'detail-diary-lazer',
        title: '레이저 박',
        attentions: [
          '레이저 장비를 통해 인쇄하는 방식',
          '원단을 레이저 빛으로 표면을 태워 인쇄 내용을 표현하기 때문에<br/><em class="blue">인쇄 표현에 대한 색상 지정 불가능</em>'
        ]
      },
      UV_PRINTING: {
        thumbnail: 'detail-diary-uv',
        title: 'UV 인쇄',
        attentions: [
          '일반 인쇄와 달리 자외선으로 순간 건조를 시키면서 인쇄하는 방식',
          '도수나 색상에 제한 없이 <em class="blue">모든 색상 인쇄 가능</em>'
        ]
      },
    },
    variations: [
      {
        attributes: ['SOFT_DIARY', 'POSITION_FRONT', 'LASER_PRINTING', 'BEIGE'],
        image: 'soft-diary-beige-lazer-front'
      },
      {
        attributes: ['SOFT_DIARY', 'POSITION_FRONT', 'LASER_PRINTING', 'BROWN'],
        image: 'soft-diary-brown-lazer-front'
      },
      {
        attributes: ['SOFT_DIARY', 'POSITION_FRONT', 'LASER_PRINTING', 'BABYPINK'],
        image: 'soft-diary-babypink-lazer-front'
      },
      {
        attributes: ['SOFT_DIARY', 'POSITION_FRONT', 'UV_PRINTING', 'BEIGE'],
        image: 'soft-diary-beige-uv-front'
      },
      {
        attributes: ['SOFT_DIARY', 'POSITION_FRONT', 'UV_PRINTING', 'BROWN'],
        image: 'soft-diary-brown-uv-front'
      },
      {
        attributes: ['SOFT_DIARY', 'POSITION_FRONT', 'UV_PRINTING', 'BABYPINK'],
        image: 'soft-diary-babypink-uv-front'
      },
      {
        attributes: ['SOFT_DIARY', 'POSITION_BACK', 'LASER_PRINTING', 'BEIGE'],
        image: 'soft-diary-beige-lazer-back'
      },
      {
        attributes: ['SOFT_DIARY', 'POSITION_BACK', 'LASER_PRINTING', 'BROWN'],
        image: 'soft-diary-brown-lazer-back'
      },
      {
        attributes: ['SOFT_DIARY', 'POSITION_BACK', 'LASER_PRINTING', 'BABYPINK'],
        image: 'soft-diary-babypink-lazer-back'
      },
      {
        attributes: ['SOFT_DIARY', 'POSITION_BACK', 'UV_PRINTING', 'BEIGE'],
        image: 'soft-diary-beige-uv-back'
      },
      {
        attributes: ['SOFT_DIARY', 'POSITION_BACK', 'UV_PRINTING', 'BROWN'],
        image: 'soft-diary-brown-uv-back'
      },
      {
        attributes: ['SOFT_DIARY', 'POSITION_BACK', 'UV_PRINTING', 'BABYPINK'],
        image: 'soft-diary-babypink-uv-back'
      }
    ],
    showcases: {
      SHOW_DETAIL: {
        title: '자세히 보여 드릴께요.',
        descriptions:[
          '부드러운 친환경 가죽 원단을 사용하여 고급스러워요.<br/>표지 : 친환경 PU원단'
        ],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'soft-diary-img-01',
            attentions: [
              '다이어리와 0.38mm의 초저점도 펜 세트 구성으로 제공되요. (잉크는 검정색입니다.)'
            ]
          },
          {
            image: 'soft-diary-img-02',
            attentions: [
              '흠집 방지 가공을 더해 표지가 두꺼워 훼손이 덜하고<br/>습기에 강해 오랫동안 사용 및 보관이 가능해요.'
            ]
          },
          {
            image: 'soft-diary-img-03',
            attentions: [
              '커버와 내지를 붙여 제작하는 붙임식 제본으로 여닫을 때 편리해요.'
            ]
          },
          {
            image: 'soft-diary-img-04',
            attentions: [
              '180도 펼쳐지는 반양장 제본으로 깔끔하게 필기가 가능해요.'
            ]
          }
        ]
      },

      COLOR_CHECK: {
        title: '색상을 확인해 보세요.',
        descriptions: ['밴드는 표지 색상과 동일하게 제공되요.'],
        className: 'bg-white col-3 border-top',
        children: [
          {
            image: 'soft-diary-color-beige',
            title: [
              '베이지'
            ]
          },
          {
            image: 'soft-diary-color-brown',
            title: [
              '브라운'
            ]
          },
          {
            image: 'soft-diary-color-babypink',
            title: [
              '베이비핑크'
            ]
          }
        ]
      },

      PAPER_CHECK: {
        title: '내지를 확인하세요.',
        descriptions: [
          '내지는 만년형으로 구성되어 있어요.<br/>*만년형 : 12개월(언제든 사용일로부터 1년)<br/>144매 (288p) / 백색 모조지 120g /㎡'
        ],
        className: 'bg-white col-4 border-top',
        children: [
          {
            image: 'soft-diary-inside-01',
            title: [
              '1~3p : 인덱스'
            ]
          },
          {
            image: 'soft-diary-inside-02',
            title: [
              '4~5p : 목차'
            ]
          },
          {
            image: 'soft-diary-inside-03',
            title: [
              '6~7p : 연간계획'
            ]
          },
          {
            image: 'soft-diary-inside-04',
            title: [
              '8~271p : 먼슬리, 데일리'
            ]
          },
          {
            image: 'soft-diary-inside-05',
            title: [
              '272~286p : 라인 프리노트'
            ]
          },
          {
            image: 'soft-diary-inside-06',
            title: [
              '287p : 개인정보'
            ]
          }
        ]
      },

      SIZE_CHECK : {
        title: "사이즈를 확인하세요.",
        className: "col-2 bg-white border-top centerItemTwo",
        children: [
          {
            image: "soft-diary-size",
            descriptions: ['다이어리 : 135(가로) x 193.5(세로) x 24(두께) / 펜 : 150(세로)<br/>(단위 : mm)']
          }
        ]
      },

      PRINT_CHECK: {
        title: '나에게 맞는 인쇄 방식을 알아보세요.',
        className: 'bg-white vertical-border border-top'
      },

      PRINT_LAZOR: {
        deco: 'num-01-5030',
        title: '레이저 박',
        descriptions: [ '원단에 레이저 빛으로 표면을 태워 인쇄 내용을 표현하는 방식이에요.' ],
        className: 'bg-white col-2',
        children: [
          {
            image: 'print-lazer-img-01',
            attentions: ['인쇄 표현에 대한 <em class="blue">색상 지정이 불가능해요.</em>']
          },
          {
            image: 'print-lazer-img-02',
            attentions: ['로고나 심플한 디자인으로 활용해 보세요.']
          }
        ]
      },

      PRINT_UV: {
        deco: 'num-02-5030',
        title: 'UV 인쇄',
        descriptions: [ '일반인쇄와 달리 자외선으로 순간 건조를 시키면서 인쇄하는 방식이에요.' ],
        className: 'bg-white col-2',
        children: [
          {
            image: 'print-uv-img-01',
            attentions: ['깔끔하고 선명한 인쇄 퀄리티 구현이 가능해요.']
          },
          {
            image: 'print-uv-img-02',
            attentions: ['색상에 제한 없이 <em class="blue">모든 색상을 인쇄할 수 있어요.</em>']
          }
        ]
      },

      INFORM_SERVICE: {
        title: '다양한 상품으로 브랜드를 표현해보세요.',
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'soft-diary-info-01',
            attentions: [
              '브랜드 굿즈로 활용해요.'
            ]
          },
          {
            image: 'soft-diary-info-02',
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
              image: 'dairy-notify-01',
              attentions: [
                '10pt 미만 폰트 인쇄 시 화이트 인쇄의 오차 가능성이 있어요.'
              ]
            },
            {
              image: 'diary-notify-02',
              attentions: [
                '폰트는 10pt 이상, Medium 이상, Bold체를 권장합니다.'
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
      title: '소프트커버 다이어리',
      attentions: [
        '캐주얼한 디자인의 다이어리에 브랜드를 담아 보세요.'
      ],
      services: [
        'SHOW_DETAIL',
        'COLOR_CHECK',
        'PAPER_CHECK',
        'SIZE_CHECK',
        'PRINT_CHECK',
        'PRINT_LAZOR',
        'PRINT_UV',
        'INFORM_SERVICE'
      ]
		}
	}
};
