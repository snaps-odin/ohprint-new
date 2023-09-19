

export const MIRROR_BUTTON = {
	COMMON: {
		option: {
/*      MIRROR_BUTTON_ROUND: {
        thumbnail: 'detail-mirrorbtn-size-58',
        title: '58',
        attentions: [
          '지름 58mm'
        ]
      },*/
      MIRROR_BUTTON_ROUND_58X58: {
				thumbnail: 'detail-mirrorbtn-size-58',
				title: '58',
				attentions: [
					'지름 58mm'
				]
			},
      MIRROR_BUTTON_ROUND_75X75: {
        thumbnail: 'detail-mirrorbtn-size-75',
        title: '75',
        attentions: [
          '지름 75mm'
        ]
      },
      YUPO200_GLOSSY: {
        thumbnail: 'detail-mirrorbtn-coating-glossy',
        title: '유광',
        description: [
          '매끈하고 깨끗한 느낌의<br/>유광 코팅이에요.'
        ]
      },
      YUPO200: {
        thumbnail: 'detail-mirrorbtn-coating-matt',
        title: '무광',
        description: [
          '부드럽고 고급스러운 느낌의<br/>무광 코팅이에요.'
        ]
      }

		},
		variations: [
			//58x58
      //무광,유광
			{
				attributes: [ 'MIRROR_BUTTON_ROUND', 'MIRROR_BUTTON_ROUND_58X58', 'YUPO200_GLOSSY' ],
				image: 'mirrorbtn-58-glossy'
			},
      {
        attributes: [ 'MIRROR_BUTTON_ROUND', 'MIRROR_BUTTON_ROUND_58X58', 'YUPO200' ],
        image: 'mirrorbtn-58-matt'
      },

      //75x75
      //무광,유광
      {
        attributes: [ 'MIRROR_BUTTON_ROUND', 'MIRROR_BUTTON_ROUND_75X75', 'YUPO200_GLOSSY' ],
        image: 'mirrorbtn-75-glossy'
      },
      {
        attributes: [ 'MIRROR_BUTTON_ROUND', 'MIRROR_BUTTON_ROUND_75X75', 'YUPO200' ],
        image: 'mirrorbtn-75-matt'
      }
		],
		showcases: {

      PRACTICAL_ESSENTIAL_ITEMS: {
        title: '예쁘고 실용적인 필수 아이템',
        className: 'bg-white col-2',
        children: [
          {
            image: 'mirrorbtn-info-img-01',
            attentions: [
              '브랜드 홍보를 위해 제작해요.'
            ]
          },
          {
            image: 'mirrorbtn-info-img-02',
            attentions: [
              '나만의 이미지로 만들어 소장해요.'
            ]
          }
        ]
      },

      SHOW_DETAIL: {
        title: '자세히 보여 드릴께요.',
        className: 'bg-gray col-2',
        children: [
          {
            image: 'mirrorbtn-info-detail-01',
            attentions: [
              '선명한 인쇄와, 깔끔한 마감처리가 돋보여요.'
            ]
          },
          {
            image: 'mirrorbtn-info-detail-02',
            attentions: [
              '버튼 뒷면이 거울로 되어 있어, 손거울 등으로 사용할 수 있어요.'
            ]
          }
        ]
      },

      DESIGN_COATING: {
        title: '디자인에 맞는 코팅 효과를 선택해 보세요.',
        className: 'bg-white col-2',
        children: [
          {
            image: 'mirrorbtn-info-coating-glossy',
            attentions: [
              '매끈하고 깨끗한 느낌의 <em class="blue">[유광]</em> 코팅이에요.'
            ]
          },
          {
            image: 'mirrorbtn-info-coating-matt',
            attentions: [
              '부드럽고 고급스러운 느낌의 <em class="blue">[무광]</em> 코팅이에요.'
            ]
          }
        ]
      },

      SIZE_CHECK : {
        title: "사이즈를 확인하세요.",
        className: "col-1 row-first bg-white border-top",
        children: [
          {
            title: [
              "원형"
            ],
            image: "mirrorbtn-info-shape-circle"
          }
        ]
      },

      OPERATION_NOTES: {
        title: '주문시 유의사항',
        className: 'bg-white col-3 border-top',
        children: [
          {
            title:'',
            descriptions: [
              ""
            ],
            image: ''
          },
          {
            title:['밀림 현상'],
            descriptions: [
              "버튼 제작 공정상 중에서 1~2mm정도<br/>" +
              "상하좌우로 밀려 제작될 수 있습니다."
            ],
            image: 'mirrorbtn-info-notice-01'
          },
          {
            title:'',
            descriptions: [
              ""
            ],
            image: ''
          }
        ]
      },

		}
	},
	CONTENTS: {
		DEFAULTS: {
      title: '거울 버튼',
      attentions: [
        '뒷면이 거울로 되어 있는 버튼으로 원하는 디자인의 예쁜 거울을 완성할 수 있어요.'
      ],
      services: [
        'PRACTICAL_ESSENTIAL_ITEMS',
        'SHOW_DETAIL',
        'DESIGN_COATING',
        'SIZE_CHECK',
        'OPERATION_NOTES'
      ]
		}
	}
};
