

export const MAGNET_BUTTON = {
	COMMON: {
		option: {
      MAGNET_BUTTON_ROUND: {
				thumbnail: 'detail-magnetbtn-shape-circle',
				title: '원형'
			},
      MAGNET_BUTTON_SQUARE: {
        thumbnail: 'detail-magnetbtn-shape-square',
        title: '사각형'
      },
      MAGNET_BUTTON_HEART: {
        thumbnail: 'detail-magnetbtn-shape-heart',
        title: '하트형'
      },
      MAGNET_BUTTON_ROUND_32X32: {
        thumbnail: 'detail-magnetbtn-size-32',
        title: '32',
        description: '지름 32mm'
      },
      MAGNET_BUTTON_ROUND_38X38: {
        thumbnail: 'detail-magnetbtn-size-38',
        title: '38',
        description: '지름 38mm'
      },
      MAGNET_BUTTON_ROUND_44X44: {
        thumbnail: 'detail-magnetbtn-size-44',
        title: '44',
        description: '지름 44mm'
      },
      MAGNET_BUTTON_ROUND_58X58: {
        thumbnail: 'detail-magnetbtn-size-58',
        title: '58',
        description: '지름 58mm'
      },
      MAGNET_BUTTON_SQUARE_37X37: {
        thumbnail: 'detail-magnetbtn-size-3737',
        title: '37 x 37',
        attentions: ['37mm x 37mm']
      },
      MAGNET_BUTTON_HEART_57X52: {
        thumbnail: 'detail-magnetbtn-size-5752',
        title: '57 x 52',
        attentions: ['57mm x 52mm (가장 긴 폭 기준)']
      },
      YUPO200_GLOSSY: {
        thumbnail: 'detail-magnetbtn-coating-glossy',
        title: '유광',
        description: '매끈하고 깨끗한 느낌의<br/>유광 코팅이에요.'
      },
      YUPO200: {
        thumbnail: 'detail-magnetbtn-coating-matt',
        title: '무광',
        description: '부드럽고 고급스러운 느낌의<br/>무광 코팅이에요.'
      }
		},
		variations: [
			//원형
      //37x32
      //무광,유광
			{
				attributes: [ 'MAGNET_BUTTON_ROUND', 'MAGNET_BUTTON_ROUND_32X32', 'YUPO200'],
				image: 'magnetbtn-circle-32-matt'
			},
      {
        attributes: [ 'MAGNET_BUTTON_ROUND', 'MAGNET_BUTTON_ROUND_32X32', 'YUPO200_GLOSSY'],
        image: 'magnetbtn-circle-32-glossy'
      },

      //38x38
      //무광,유광
      {
        attributes: [ 'MAGNET_BUTTON_ROUND', 'MAGNET_BUTTON_ROUND_38X38', 'YUPO200'],
        image: 'magnetbtn-circle-38-matt'
      },
      {
        attributes: [ 'MAGNET_BUTTON_ROUND', 'MAGNET_BUTTON_ROUND_38X38', 'YUPO200_GLOSSY'],
        image: 'magnetbtn-circle-38-glossy'
      },

      //44x44
      //무광,유광
      {
        attributes: [ 'MAGNET_BUTTON_ROUND', 'MAGNET_BUTTON_ROUND_44X44', 'YUPO200'],
        image: 'magnetbtn-circle-44-matt'
      },
      {
        attributes: [ 'MAGNET_BUTTON_ROUND', 'MAGNET_BUTTON_ROUND_44X44', 'YUPO200_GLOSSY'],
        image: 'magnetbtn-circle-44-glossy'
      },

      //58x58
      //무광,유광
      {
        attributes: [ 'MAGNET_BUTTON_ROUND', 'MAGNET_BUTTON_ROUND_58X58', 'YUPO200'],
        image: 'magnetbtn-circle-58-matt'
      },
      {
        attributes: [ 'MAGNET_BUTTON_ROUND', 'MAGNET_BUTTON_ROUND_58X58', 'YUPO200_GLOSSY'],
        image: 'magnetbtn-circle-58-glossy'
      },


      //사각형
      //37x32
      //무광,유광
      {
        attributes: [ 'MAGNET_BUTTON_SQUARE', 'MAGNET_BUTTON_SQUARE_37X37', 'YUPO200'],
        image: 'magnetbtn-square-37-matt'
      },
      {
        attributes: [ 'MAGNET_BUTTON_SQUARE', 'MAGNET_BUTTON_SQUARE_37X37', 'ART180_GLOSSY'],
        image: 'magnetbtn-square-37-glossy'
      },

      //하트형
      //57x52
      //무광,유광
      {
        attributes: [ 'MAGNET_BUTTON_HEART', 'MAGNET_BUTTON_HEART_57X52', 'YUPO200'],
        image: 'magnetbtn-heart-57-matt'
      },
      {
        attributes: [ 'MAGNET_BUTTON_HEART', 'MAGNET_BUTTON_HEART_57X52', 'YUPO200_GLOSSY'],
        image: 'magnetbtn-heart-57-glossy'
      },

		],
		showcases: {

      INFORM_SERVICE: {
        title: '우리 생활에 필요한 서비스, 쉽게 알려주세요.',
        className: 'bg-white col-2',
        children: [
          {
            image: 'magnetbtn-info-img-01',
            attentions: [
              '쉽게 간편하게 우리 가게를 홍보해 보세요.'
            ]
          },
          {
            image: 'magnetbtn-info-img-02',
            attentions: [
              '예약, 문의가 필요한 곳 어디서나 실속있게 활용해요.'
            ]
          }
        ]
      },

      INFORM_SERVICE_2: {
        title: '눈에 띄는 곳에 딱 붙여두세요.',
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'magnetbtn-info-img-03',
            attentions: [
              '필요한 순간, 바로 확인하고 연락해보세요.'
            ]
          },
          {
            image: 'magnetbtn-info-img-04',
            attentions: [
              '이름이나 원하는 텍스트로 깔끔하게 만들 수도 있어요.'
            ]
          }
        ]
      },

      SHOW_DETAIL: {
        title: '자세히 보여 드릴께요.',
        className: 'bg-gray col-2',
        children: [
          {
            image: 'magnetbtn-info-detail-01',
            attentions: [
              '선명한 인쇄와, 깔끔한 마감처리가 돋보여요.'
            ]
          },
          {
            image: 'magnetbtn-info-detail-02',
            attentions: [
              '버튼 뒷면에 자석이 부착되어 있어, 철재 가구 및 냉장고 등에 붙일 수 있어요.'
            ]
          }
        ]
      },

      DESIGN_COATING: {
        title: '디자인에 맞는 코팅 효과를 선택해 보세요.',
        className: 'bg-white col-2',
        children: [
          {
            image: 'magnetbtn-info-coating-glossy',
            attentions: [
              '매끈하고 깨끗한 느낌의 <em class="blue">[유광]</em> 코팅이에요.'
            ]
          },
          {
            image: 'magnetbtn-info-coating-matt',
            attentions: [
              '부드럽고 고급스러운 느낌의 <em class="blue">[무광]</em> 코팅이에요.'
            ]
          }
        ]
      },

      DESIRED_SHAPE_SIZE_1 : {
        title: "원하는 형태 및 사이즈를 확인하세요.",
        className: "col-1 row-first bg-white border-top",
        children: [
          {
            title: [
              "원형"
            ],
            image: "magnetbtn-info-shape-circle"
          }
        ]
      },

      DESIRED_SHAPE_SIZE_2 : {
        className: "col-2 row-last bg-white",
        children: [
          {
            title: [
              "사각형"
            ],
            image: "magnetbtn-info-shape-square"
          },
          {
            title: [
              "하트형"
            ],
            image: "magnetbtn-info-shape-heart"
          }
        ]
      },

      OPERATION_NOTES: {
        title: '주문시 유의사항',
        className: 'bg-white col-3 border-top centerItemTwo',
        children: [
          {
            title:['밀림 현상'],
            descriptions: [
              "버튼 제작 공정상 중에서 1~2mm정도<br/>" +
              "상하좌우로 밀려 제작될 수 있습니다."
            ],
            image: 'magnetbtn-info-notice-01'
          },
          {
            title:'하트형태 마감 특징',
            descriptions: [
              "하트 모양의 경우 이미지와 같이<br/>" +
              "마감 부분을 재단하여 제작됩니다. "
            ],
            image: 'magnetbtn-info-notice-02'
          }
        ]
      },

		}
	},
	CONTENTS: {
		DEFAULTS: {
      title: '자석 버튼',
      attentions: [
        '뒷면이 자석으로 되어 있는 버튼으로 자성이 있는 면에 어디든 부착할 수 있어요.'
      ],
      services: [
        'INFORM_SERVICE',
        'INFORM_SERVICE_2',
        'SHOW_DETAIL',
        'DESIGN_COATING',
        'DESIRED_SHAPE_SIZE_1',
        'DESIRED_SHAPE_SIZE_2',
        'OPERATION_NOTES'
      ]
		}
	}
};
