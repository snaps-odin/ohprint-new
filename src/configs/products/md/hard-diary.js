

export const HARD_DIARY = {
	COMMON: {
		option: {
      POSITION_FRONT: {
        thumbnail: 'detail-hard-diary-front',
        title: '앞면',
        attentions: [
          '최대 110mm x 170mm'
        ]
      },
      POSITION_BACK: {
        thumbnail: 'detail-hard-diary-back',
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
        attributes: ['HARD_DIARY', 'POSITION_FRONT', 'LASER_PRINTING', 'GRAY'],
        image: 'hard-diary-grey-lazer-front'
      },
      {
        attributes: ['HARD_DIARY', 'POSITION_FRONT', 'LASER_PRINTING', 'BLACK'],
        image: 'hard-diary-black-lazer-front'
      },
      {
        attributes: ['HARD_DIARY', 'POSITION_FRONT', 'UV_PRINTING', 'GRAY'],
        image: 'hard-diary-grey-uv-front'
      },
      {
        attributes: ['HARD_DIARY', 'POSITION_FRONT', 'UV_PRINTING', 'BLACK'],
        image: 'hard-diary-black-uv-front'
      },
      {
        attributes: ['HARD_DIARY', 'POSITION_BACK', 'LASER_PRINTING', 'GRAY'],
        image: 'hard-diary-grey-lazer-back'
      },
      {
        attributes: ['HARD_DIARY', 'POSITION_BACK', 'LASER_PRINTING', 'BLACK'],
        image: 'hard-diary-black-lazer-back'
      },
      {
        attributes: ['HARD_DIARY', 'POSITION_BACK', 'UV_PRINTING', 'GRAY'],
        image: 'hard-diary-grey-uv-back'
      },
      {
        attributes: ['HARD_DIARY', 'POSITION_BACK', 'UV_PRINTING', 'BLACK'],
        image: 'hard-diary-black-uv-back'
      }
    ],
		showcases: {
      SHOW_DETAIL: {
        title: '자세히 보여 드릴께요.',
        descriptions:[
          '단단한 커버의 클래식하고 고급스러운 다이어리에요.<br/>표지 : 비벨라 원단'
        ],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'hard-cover-diary-img-01',
            attentions: [
              '고급 폴리우레탄 원단을 사용하여 질감이 부드럽고 쿠션감이 느껴져요.'
            ]
          },
          {
            image: 'hard-cover-diary-img-02',
            attentions: [
              '180도 펼쳐지는 반양장 제본으로 깔끔하게 필기가 가능해요.'
            ]
          }
        ]
      },

      COLOR_CHECK: {
        title: '색상을 확인해 보세요.',
        descriptions: ['밴드는 표지 색상과 동일하게 제공되요.'],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'hard-cover-diary-color-black',
            title: [
              '블랙'
            ]
          },
          {
            image: 'hard-cover-diary-color-grey',
            title: [
              '그레이'
            ]
          }
        ]
      },

      PAPER_CHECK: {
        title: '내지를 확인하세요.',
        descriptions: [
          '월간 디자인 내지와 유선 내지가 함께 제공되고 있어요.<br/>112매 (224p) / 미색 모조지 85g /㎡'
        ],
        className: 'bg-white col-4 border-top',
        children: [
          {
            image: 'hard-diary-inside-01',
            title: [
              '1p : 무인쇄'
            ]
          },
          {
            image: 'hard-diary-inside-02',
            title: [
              '2~25p : 월간'
            ]
          },
          {
            image: 'hard-diary-inside-03',
            title: [
              '26~223p : 줄노트'
            ]
          },
          {
            image: 'hard-diary-inside-04',
            title: [
              '224p : 개인정보'
            ]
          }
        ]
      },

      SIZE_CHECK : {
        title: "사이즈를 확인하세요.",
        className: "col-2 bg-white border-top centerItemTwo",
        children: [
          {
            image: "hard-diary-size",
            descriptions: ['154(가로) x 216(세로) x 18(두께) (25절)<br/>(단위 : mm)']
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
            image: 'hard-diary-info-02',
            attentions: ['색상에 제한 없이 <em class="blue">모든 색상을 인쇄할 수 있어요.</em>']
          }
        ]
      },

      INFORM_SERVICE: {
        title: '다양한 상품으로 브랜드를 표현해보세요.',
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'hard-diary-info-01',
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
      title: '하드커버 다이어리',
      attentions: [
        '클래식한 디자인에 브랜드를 담아보세요.'
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
