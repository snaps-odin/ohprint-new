

export const PIN_BUTTON = {
	COMMON: {
		option: {
      PIN_BUTTON_ROUND: {
        thumbnail: 'detail-pinbtn-shape-circle',
        title: '원형'
      },
      PIN_BUTTON_SQUARE: {
        thumbnail: 'detail-pinbtn-shape-square',
        title: '사각형'
      },
      PIN_BUTTON_HEART: {
        thumbnail: 'detail-pinbtn-shape-heart',
        title: '하트형'
      },
      PIN_BUTTON_ROUND_32X32:{
        thumbnail: 'detail-pinbtn-size-32',
        title: '32',
        attentions: [
          '지름 32mm'
        ]
      },
      PIN_BUTTON_ROUND_38X38:{
        thumbnail: 'detail-pinbtn-size-38',
        title: '38',
        attentions: [
          '지름 38mm'
        ]
      },
      PIN_BUTTON_ROUND_44X44:{
        thumbnail: 'detail-pinbtn-size-44',
        title: '44',
        attentions: [
          '지름 44mm'
        ]
      },
      PIN_BUTTON_ROUND_58X58:{
        thumbnail: 'detail-pinbtn-size-58',
        title: '58',
        attentions: [
          '지름 58mm'
        ]
      },
      PIN_BUTTON_ROUND_75X75:{
        thumbnail: 'detail-pinbtn-size-75',
        title: '75',
        attentions: [
          '지름 75mm'
        ]
      },
      PIN_BUTTON_SQUARE_50X50:{
        thumbnail: 'detail-pinbtn-size-5050',
        title: '50 x 50',
        attentions: [
          '50mm x 50mm'
        ]
      },
      PIN_BUTTON_SQUARE_37X37:{
        thumbnail: 'detail-pinbtn-size-3737',
        title: '37 x 37',
        attentions: [
          '37mm x 37mm'
        ]
      },
      PIN_BUTTON_HEART_57X52:{
        thumbnail: 'detail-pinbtn-size-5752',
        title: '57 x 52',
        attentions: [
          '57mm x 52mm'
        ]
      }


		},
		variations: [
		  //원형
			//32x32
      //무광,유광
			{
				attributes: [ 'PIN_BUTTON_ROUND', 'PIN_BUTTON_ROUND_32X32', 'YUPO200_GLOSSY' ],
				image: 'pinbtn-circle-32-glossy'
			},
      {
        attributes: [ 'PIN_BUTTON_ROUND', 'PIN_BUTTON_ROUND_32X32',  'YUPO200' ],
        image: 'pinbtn-circle-32-matt'
      },

      //38x38
      //무광,유광
      {
        attributes: [ 'PIN_BUTTON_ROUND', 'PIN_BUTTON_ROUND_38X38', 'YUPO200_GLOSSY' ],
        image: 'pinbtn-circle-38-glossy'
      },
      {
        attributes: [ 'PIN_BUTTON_ROUND', 'PIN_BUTTON_ROUND_38X38',  'YUPO200' ],
        image: 'pinbtn-circle-38-matt'
      },

      //44x44
      //무광,유광
      {
        attributes: [ 'PIN_BUTTON_ROUND', 'PIN_BUTTON_ROUND_44X44', 'YUPO200_GLOSSY' ],
        image: 'pinbtn-circle-44-glossy'
      },
      {
        attributes: [ 'PIN_BUTTON_ROUND', 'PIN_BUTTON_ROUND_44X44',  'YUPO200' ],
        image: 'pinbtn-circle-44-matt'
      },

      //58x58
      //무광,유광
      {
        attributes: [ 'PIN_BUTTON_ROUND', 'PIN_BUTTON_ROUND_58X58', 'YUPO200_GLOSSY' ],
        image: 'pinbtn-circle-58-glossy'
      },
      {
        attributes: [ 'PIN_BUTTON_ROUND', 'PIN_BUTTON_ROUND_58X58',  'YUPO200' ],
        image: 'pinbtn-circle-58-matt'
      },


      //75x75
      //무광,유광
      {
        attributes: [ 'PIN_BUTTON_ROUND', 'PIN_BUTTON_ROUND_75X75', 'YUPO200_GLOSSY' ],
        image: 'pinbtn-circle-75-glossy'
      },
      {
        attributes: [ 'PIN_BUTTON_ROUND', 'PIN_BUTTON_ROUND_75X75',  'YUPO200' ],
        image: 'pinbtn-circle-75-matt'
      },


      //사각형
      //32x32
      //무광,유광
      {
        attributes: [ 'PIN_BUTTON_SQUARE', 'PIN_BUTTON_SQUARE_37X37', 'ART180_GLOSSY' ],
        image: 'pinbtn-square-37-glossy'
      },
      {
        attributes: [ 'PIN_BUTTON_SQUARE', 'PIN_BUTTON_SQUARE_37X37',  'YUPO200' ],
        image: 'pinbtn-square-37-matt'
      },

      //50X50
      //무광,유광
      {
        attributes: [ 'PIN_BUTTON_SQUARE', 'PIN_BUTTON_SQUARE_50X50', 'ART150_GLOSSY' ],
        image: 'pinbtn-square-50-glossy'
      },
      {
        attributes: [ 'PIN_BUTTON_SQUARE', 'PIN_BUTTON_SQUARE_50X50',  'YUPO200' ],
        image: 'pinbtn-square-50-matt'
      },

      //하트형
      //57x52
      //무광,유광
      {
        attributes: [ 'PIN_BUTTON_HEART', 'PIN_BUTTON_HEART_57X52', 'YUPO200_GLOSSY' ],
        image: 'pinbtn-heart-57-glossy'
      },
      {
        attributes: [ 'PIN_BUTTON_HEART', 'PIN_BUTTON_HEART_57X52',  'YUPO200' ],
        image: 'pinbtn-heart-57-matt'
      },


		],
		showcases: {

      PIN_BUTTON_IDENTITY: {
        title: '홍보는 쉽게, 아이덴티티는 뚜렷하게',
        className: 'bg-white col-2',
        children: [
          {
            image: 'pinbtn-info-img-01',
            attentions: [
              '브랜드 홍보나 캠페인 선정을 위해 제작해요.'
            ]
          },
          {
            image: 'pinbtn-info-img-02',
            attentions: [
              '소모임이나 단체에서 우리만의 아이덴티티를 표현해요.'
            ]
          }
        ]
      },

      PERSONALITY_EXPRESSION: {
        title: '나를 더욱 개성 있게 표현해요.',
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'pinbtn-info-img-03',
            attentions: [
              '나만의 이미지로 세상에 하나뿐인 버튼을 만들어요.'
            ]
          },
          {
            image: 'pinbtn-info-img-04',
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
            image: 'pinbtn-info-detail-01',
            attentions: [
              '선명한 인쇄와, 깔끔한 마감처리가 돋보여요.'
            ]
          },
          {
            image: 'pinbtn-info-detail-02',
            attentions: [
              '버튼 뒷면에 안전핀으로 제작되어집니다.'
            ]
          }
        ]
      },


      DESIGN_COATING: {
        title: '디자인에 맞는 코팅 효과를 선택해 보세요.',
        className: 'bg-white col-2',
        children: [
          {
            image: 'pinbtn-info-coating-glossy',
            attentions: [
              '매끈하고 깨끗한 느낌의 <em class="blue">[유광]</em> 코팅이에요.'
            ]
          },
          {
            image: 'pinbtn-info-coating-matt',
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
            image: "pinbtn-info-shape-circle"
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
            image: "pinbtn-info-shape-square"
          },
          {
            title: [
              "하트형"
            ],
            image: "pinbtn-info-shape-heart"
          }
        ]
      },

      OPERATION_NOTES: {
        title: '주문시 유의사항',
        className: 'bg-white col-3 border-top',
        children: [
          {
            title:['뒷면 바늘 주의'],
            descriptions: [
              "버튼 뒷면에 바늘이 부착되어 있으므로 사용 시<br/>"+
              "그리고 수령 후 개봉 시 유의해 주세요.<br/>"+
              "(배송 중 충격에 의해 바늘이 빠질 수 있습니다.)"
            ],
            image: 'pinbtn-info-notice-01',
          },
          {
            title:['밀림 현상'],
            descriptions: [
              "버튼 제작 공정상 중에서 1~2mm정도<br/>" +
              "상하좌우로 밀려 제작될 수 있습니다."
            ],
            image: 'pinbtn-info-notice-02'
          },
          {
            title:['하트형태 마감 특징'],
            descriptions: [
              "하트 모양의 경우 이미지와 같이<br/>" +
              "마감 부분을 재단하여 제작됩니다. "
            ],
            image: 'pinbtn-info-notice-03'
          }
        ]
      },


    }
	},
	CONTENTS: {
		DEFAULTS: {
      title: '핀 버튼',
      attentions: [
        '뒷면에 안전핀이 있는 버튼으로 패브릭 소재에 부착할 수 있어요.'
      ],
      services: [
        'PIN_BUTTON_IDENTITY',
        'PERSONALITY_EXPRESSION',
        'SHOW_DETAIL',
        'DESIGN_COATING',
        'DESIRED_SHAPE_SIZE_1',
        'DESIRED_SHAPE_SIZE_2',
        'OPERATION_NOTES'
      ]
		}
	}
};
