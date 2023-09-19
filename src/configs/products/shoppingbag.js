export const SHOPPINGBAG = {
	COMMON: {
		option: {
      SHOPPINGBAG_WIDE: {
        thumbnail: 'detail-shoppingbag-wide',
        title: '와이드형',
        attentions: []
      },
      SHOPPINGBAG_VERTICAL: {
        thumbnail: 'detail-shoppingbag-column',
        title: '세로형',
        attentions: []
      },
      SHOPPINGBAG_WIDE_M: {
        thumbnail: 'detail-shoppingbag-wide-middle',
        title: '중',
        attentions: [
          '320mm x 250mm x 120mm'
        ]
      },
      SHOPPINGBAG_WIDE_S: {
        thumbnail: 'detail-shoppingbag-wide-small',
        title: '소',
        attentions: [
          '255mm x 200mm x 80mm'
        ]
      },
      SHOPPINGBAG_VERTICAL_L: {
        thumbnail: 'detail-shoppingbag-column-large',
        title: '대',
        attentions: [
          '300mm x 408mm x 140mm'
        ]
      },
      SHOPPINGBAG_VERTICAL_M: {
        thumbnail: 'detail-shoppingbag-column-middle',
        title: '중',
        attentions: [
          '260mm x 354mm x 100mm'
        ]
      },
      SHOPPINGBAG_VERTICAL_S: {
        thumbnail: 'detail-shoppingbag-column-small',
        title: '소',
        attentions: [
          '200mm x 272mm x 90mm'
        ]
      },
      STANDARD: {
        thumbnail: 'detail-paper-standard',
        title: '스탠다드',
        attentions: [
          '자연스러운 광택과 깨끗함을 느낄 수<br/>있는 용지로 내구성이 우수합니다.'
        ]
      },
      CRAFT: {
        thumbnail: 'detail-paper-craft',
        title: '크라프트',
        attentions: [
          '빈티지한 감성의 친환경 재생 용지로<br/>편안한 분위기를 연출 해 보세요.'
        ]
      },
      WHITE_HANDLE: {
        thumbnail: 'detail-shoppingbag-standard-option-white',
        title: '화이트',
        attentions: []
      },
      STANDARD_BLACK_HANDLE: {
        thumbnail: 'detail-shoppingbag-standard-option-black',
        title: '블랙',
        attentions: []
      },
      CRAFT_BLACK_HANDLE: {
        thumbnail: 'detail-shoppingbag-kraft-option-black',
        title: '블랙',
        attentions: []
      },
      BROWN_HANDLE: {
        thumbnail: 'detail-shoppingbag-kraft-option-brown',
        title: '브라운',
        attentions: []
      },
      MATTE: {
        thumbnail: 'detail-sticker-matt',
        title: '무광',
        attentions: [
          '고급스러운 느낌을 표현할 수 있어요.'
        ]
      },
      GLOSSY: {
        thumbnail: 'detail-sticker-glossy',
        title: '유광',
        attentions: [
          '화려함을 강조할 수 있어요.'
        ]
      },


		},
		variations: [
        {
          attributes: [ 'SHOPPINGBAG_WIDE', 'SHOPPINGBAG_WIDE_M', 'STANDARD', 'MATTE', 'WHITE_HANDLE' ],
          image: 'shoppingbag-wide-middle-standard-matte-white'
        },
        {
          attributes: [ 'SHOPPINGBAG_WIDE', 'SHOPPINGBAG_WIDE_M', 'STANDARD', 'MATTE', 'BLACK_HANDLE' ],
          image: 'shoppingbag-wide-middle-standard-matte-black'
        },
        {
          attributes: [ 'SHOPPINGBAG_WIDE', 'SHOPPINGBAG_WIDE_M', 'STANDARD', 'GLOSSY', 'WHITE_HANDLE' ],
          image: 'shoppingbag-wide-middle-standard-glossy-white'
        },
        {
          attributes: [ 'SHOPPINGBAG_WIDE', 'SHOPPINGBAG_WIDE_M', 'STANDARD', 'GLOSSY', 'BLACK_HANDLE' ],
          image: 'shoppingbag-wide-middle-standard-glossy-black'
        },
        {
          attributes: [ 'SHOPPINGBAG_WIDE', 'SHOPPINGBAG_WIDE_M', 'CRAFT', 'MATTE', 'BROWN_HANDLE' ],
          image: 'shoppingbag-wide-middle-kraft-brown'
        },
        {
          attributes: [ 'SHOPPINGBAG_WIDE', 'SHOPPINGBAG_WIDE_M', 'CRAFT', 'MATTE', 'BLACK_HANDLE' ],
          image: 'shoppingbag-wide-middle-kraft-black'
        },
        {
          attributes: [ 'SHOPPINGBAG_WIDE', 'SHOPPINGBAG_WIDE_M', 'CRAFT', 'GLOSSY', 'BROWN_HANDLE' ],
          image: 'shoppingbag-wide-middle-kraft-brown'
        },
        {
          attributes: [ 'SHOPPINGBAG_WIDE', 'SHOPPINGBAG_WIDE_M', 'CRAFT', 'GLOSSY', 'BLACK_HANDLE' ],
          image: 'shoppingbag-wide-middle-kraft-black'
        },
        {
          attributes: [ 'SHOPPINGBAG_WIDE', 'SHOPPINGBAG_WIDE_S', 'STANDARD', 'MATTE', 'WHITE_HANDLE' ],
          image: 'shoppingbag-wide-small-standard-matte-white'
        },
        {
          attributes: [ 'SHOPPINGBAG_WIDE', 'SHOPPINGBAG_WIDE_S', 'STANDARD', 'MATTE', 'BLACK_HANDLE' ],
          image: 'shoppingbag-wide-small-standard-matte-black'
        },
        {
          attributes: [ 'SHOPPINGBAG_WIDE', 'SHOPPINGBAG_WIDE_S', 'STANDARD', 'GLOSSY', 'WHITE_HANDLE' ],
          image: 'shoppingbag-wide-small-standard-glossy-white'
        },
        {
          attributes: [ 'SHOPPINGBAG_WIDE', 'SHOPPINGBAG_WIDE_S', 'STANDARD', 'GLOSSY', 'BLACK_HANDLE' ],
          image: 'shoppingbag-wide-small-standard-glossy-black'
        },
        {
          attributes: [ 'SHOPPINGBAG_WIDE', 'SHOPPINGBAG_WIDE_S', 'CRAFT', 'MATTE', 'BROWN_HANDLE' ],
          image: 'shoppingbag-wide-small-kraft-brown'
        },
        {
          attributes: [ 'SHOPPINGBAG_WIDE', 'SHOPPINGBAG_WIDE_S', 'CRAFT', 'MATTE', 'BLACK_HANDLE' ],
          image: 'shoppingbag-wide-small-kraft-black'
        },
        {
          attributes: [ 'SHOPPINGBAG_WIDE', 'SHOPPINGBAG_WIDE_S', 'CRAFT', 'GLOSSY', 'BROWN_HANDLE' ],
          image: 'shoppingbag-wide-small-kraft-brown'
        },
        {
          attributes: [ 'SHOPPINGBAG_WIDE', 'SHOPPINGBAG_WIDE_S', 'CRAFT', 'GLOSSY', 'BLACK_HANDLE' ],
          image: 'shoppingbag-wide-small-kraft-black'
        },

      ///
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_L', 'STANDARD', 'MATTE', 'WHITE_HANDLE' ],
        image: 'shoppingbag-column-large-standard-matte-white'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_L', 'STANDARD', 'MATTE', 'BLACK_HANDLE' ],
        image: 'shoppingbag-column-large-standard-matte-black'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_L', 'STANDARD', 'GLOSSY', 'WHITE_HANDLE' ],
        image: 'shoppingbag-column-large-standard-glossy-white'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_L', 'STANDARD', 'GLOSSY', 'BLACK_HANDLE' ],
        image: 'shoppingbag-column-large-standard-glossy-black'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_L', 'CRAFT', 'MATTE', 'BROWN_HANDLE' ],
        image: 'shoppingbag-column-large-kraft-brown'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_L', 'CRAFT', 'MATTE', 'BLACK_HANDLE' ],
        image: 'shoppingbag-column-large-kraft-black'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_L', 'CRAFT', 'GLOSSY', 'BROWN_HANDLE' ],
        image: 'shoppingbag-column-large-kraft-brown'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_L', 'CRAFT', 'GLOSSY', 'BLACK_HANDLE' ],
        image: 'shoppingbag-column-large-kraft-black'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_M', 'STANDARD', 'MATTE', 'WHITE_HANDLE' ],
        image: 'shoppingbag-column-middle-standard-matte-white'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_M', 'STANDARD', 'MATTE', 'BLACK_HANDLE' ],
        image: 'shoppingbag-column-middle-standard-matte-black'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_M', 'STANDARD', 'GLOSSY', 'WHITE_HANDLE' ],
        image: 'shoppingbag-column-middle-standard-glossy-white'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_M', 'STANDARD', 'GLOSSY', 'BLACK_HANDLE' ],
        image: 'shoppingbag-column-middle-standard-glossy-black'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_M', 'CRAFT', 'MATTE', 'BROWN_HANDLE' ],
        image: 'shoppingbag-column-middle-kraft-brown'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_M', 'CRAFT', 'MATTE', 'BLACK_HANDLE' ],
        image: 'shoppingbag-column-middle-kraft-black'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_M', 'CRAFT', 'GLOSSY', 'BROWN_HANDLE' ],
        image: 'shoppingbag-column-middle-kraft-brown'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_M', 'CRAFT', 'GLOSSY', 'BLACK_HANDLE' ],
        image: 'shoppingbag-column-middle-kraft-black'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_S', 'STANDARD', 'MATTE', 'WHITE_HANDLE' ],
        image: 'shoppingbag-column-small-standard-matte-white'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_S', 'STANDARD', 'MATTE', 'BLACK_HANDLE' ],
        image: 'shoppingbag-column-small-standard-matte-black'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_S', 'STANDARD', 'GLOSSY', 'WHITE_HANDLE' ],
        image: 'shoppingbag-column-small-standard-glossy-white'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_S', 'STANDARD', 'GLOSSY', 'BLACK_HANDLE' ],
        image: 'shoppingbag-column-small-standard-glossy-black'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_S', 'CRAFT', 'MATTE', 'BROWN_HANDLE' ],
        image: 'shoppingbag-column-small-kraft-brown'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_S', 'CRAFT', 'MATTE', 'BLACK_HANDLE' ],
        image: 'shoppingbag-column-small-kraft-black'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_S', 'CRAFT', 'GLOSSY', 'BROWN_HANDLE' ],
        image: 'shoppingbag-column-small-kraft-brown'
      },
      {
        attributes: [ 'SHOPPINGBAG_VERTICAL', 'SHOPPINGBAG_VERTICAL_S', 'CRAFT', 'GLOSSY', 'BLACK_HANDLE' ],
        image: 'shoppingbag-column-small-kraft-black'
      },

    ],

    showcases: {
      SHOPPING_BAG_TITLE: {
        title: '다양한 용지를 확인해 보세요.',
        className: 'bg-white vertical-border'
      },

      STANDARD_PAPER: {
        deco: 'num-01-5030',
        title: '스탠다드 용지',
        descriptions: [ '화이트 색상으로 디자인이 좀 더 고급스럽게 표현이 가능한 용지에요.<br/>용지 무게 : 180g/m²' ],
        className: 'bg-white col-2',
        children: [
          {
            image: 'shoppingbag-info-standard-01',
            attentions: [
              '매끄럽고 부드러운 질감과 우수한 내구성을 가지고 있어요.'
            ]
          },
          {
            image: 'shoppingbag-info-standard-02',
            attentions: [
              '사진이나 이미지 재현에 탁월해요.'
            ]
          }
        ]
      },

      STANDARD_COATING_OPTION: {
        title: '코팅 옵션',
        descriptions: [ '유광, 무광 코팅 옵션 무료 제공' ],
        className: 'bg-white col-2 border-top titlePadding',
        children: [
          {
            image: 'shoppingbag-info-standard-03',
            title : [
              '무광'
            ],
            attentions: [
              '무광의 비닐을 입히는 방법으로 고급스러운 인쇄물을 표현할 때 자주 사용하는 편이에요.',
              '쇼핑백 제작 인쇄물 디자인이 심플하거나, 단순함을 표현하고자 할 때 적합해요.',
              '단, 단색이거나 어두운 색상일 경우 쇼핑백 표면의 기스가 잘 보일 수 있어요.'
            ]
          },
          {
            image: 'shoppingbag-info-standard-04',
            title : [
              '유광'
            ],
            attentions: [
              '표면에 광택이 나는 비닐을 입히는 방식이에요.',
              '다양한 색상이 들어간 디자인이거나 사진일 경우 화려함을 더욱 강조할 수 있어요.',
              '단, 광택에 의해 표면이 종이 질감의 울퉁불퉁한 면이 잘 보일 수 있어요.'
            ]
          }
        ]
      },


      CRAFT_PAPER: {
        deco: 'num-02-5030',
        title: '크라프트 용지',
        descriptions: [ '친환경 재생 용지로 종이 자체의 편안함을 가지고 있어요.<br/>용지 무게 : 175g/m²' ],
        className: 'bg-gray col-2 border-top',
        children: [
          {
            image: 'shoppingbag-info-kraft-01',
            attentions: [
              '내추럴한 느낌을 주는 갈색 용지로 특유의 텍스처가 살아있어요.'
            ]
          },
          {
            image: 'shoppingbag-info-kraft-02',
            attentions: [
              '간단한 디자인으로도 느낌이 살아요.'
            ]
          }
        ]
      },

      NEW_TEXTURE: {
        title: '용지의 질감을 확인해 보세요.',
        className: 'bg-white col-4 centerItemTwo',
        children: [
          {
            image: 'shopping-info-texture-standard',
            title: '스탠다드'
          },
          {
            image: 'shopping-info-texture-kraft',
            title: '크라프트'
          }
        ]
      },


      SHOPPING_BAG_SIZE_TITLE: {
        title: '사이즈를 확인하세요.',
        className: 'bg-gray vertical-border',
        descriptions: [ 'A4 용지 대비 사이즈를 확인해보세요.' ],
      },

      SHOPPING_BAG_SIZE_WIDE: {
        deco: 'num-01-5030',
        title: '와이드형',
        className: 'bg-gray col-2',
        children: [
          {
            image: 'shoppingbag-info-size-wide-01',
            title:[
              '중'
            ],
            descriptions: [
              '320(너비) x 250(높이) x 120(폭)<br/>(단위 : mm)'
            ]
          },
          {
            image: 'shoppingbag-info-size-wide-02',
            title:[
              '소'
            ],
            descriptions: [
              '255(너비) x 200(높이) x 80(폭)<br/>(단위 : mm)'
            ]
          }
        ]
      },

      SHOPPING_BAG_SIZE_VERTICAL: {
        deco: 'num-02-5030',
        title: '세로형',
        /*descriptions: [ '화이트 색상으로 디자인이 좀 더 고급스럽게 표현이 가능한 용지에요.<br/>용지 무게 : 180g/m²' ],*/
        className: 'bg-gray col-3 border-top',
        children: [
          {
            image: 'shoppingbag-info-size-column-01',
            title:[
              '대'
            ],
            descriptions: [
              '300(너비) x 408(높이) x 140(폭)<br/>(단위 : mm)'
            ]
          },
          {
            image: 'shoppingbag-info-size-column-02',
            title:[
              '중'
            ],
            descriptions: [
              '260(너비) x 354(높이) x 100(폭)<br/>(단위 : mm)'
            ]
          },
          {
            image: 'shoppingbag-info-size-column-03',
            title:[
              '소'
            ],
            descriptions: [
              '200(너비) x 272(높이) x 90(폭)<br/>(단위 : mm)'
            ]
          }
        ]
      },

      HAND_STRAP: {
        title: '손잡이 끈',
        descriptions: [ '용지에 따라 손잡이 끈의 색상이 달라요.<br/>* 마감 아일렛 색상의 경우 끈과 동일합니다.' ],
        className: 'bg-white col-2',
        children: [
          {
            image: 'shoppingbag-info-option-01',
            title:[
              '스탠다드 (화이트/블랙)'
            ]
          },
          {
            image: 'shoppingbag-info-option-02',
            title:[
              '크라프트 (블랙/브라운)'
            ]
          }
        ]
      },

      STURDY_FINISH: {
        title: '고급스럽고 견고한 마감방식',
        descriptions: [
          '내부 마감을 튼튼한 철팁으로 제작하여 내구성이 좋아요.<br/>'+
          '* 철팁 색상은 용지와 끈 색상 무관하게 실버 공통입니다.'
        ],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'shoppingbag-info-option-03'
          },
          {
            image: 'shoppingbag-info-option-04'
          }
        ]
      },

    },
    guide:{
      contents:{

        EDIT_NOTICE: {
          title: '편집 유의사항',
          className: 'bg-gray col-2',
          children: [
            {
              image: 'shoppingbag-info-notice-editor-01',
              attentions: [
                '중요한 로고나 문자 등 은 <em class="blue">[편집 사이즈 안쪽]</em>으로 배열해주세요.'
              ]
            },
            {
              image: 'shoppingbag-info-notice-editor-02',
              attentions: [
                '<em class="blue">[접는 선, 안쪽면, 바닥면]</em>에 유의해서 편집해주세요.'
              ]
            },
            {
              image: 'shoppingbag-info-notice-editor-03',
              attentions: [
                '<em class="blue">[배경]</em> 선택 시 전체 영역의 색상이 변경됩니다.'
              ]
            },
            {
              image: 'shoppingbag-info-notice-editor-04',
              attentions: [
                '<em class="blue">[면의 색상을 변경]</em>하기 위해서는 <em class="blue">[클립아트]</em>를 통해 변경 가능해요.'
              ]
            }
          ]
        },

        PROCESS_NOTES: {
          title: '공정과정 유의사항',
          descriptions: [ '공정과정 중 하나이기 때문에 환불 혹은 재작업 해당되지 않는 사유입니다.' ],
          className: 'bg-gray col-2 titlePadding',
          children: [
            {
              image: 'shoppingbag-info-notice-process-01',
              title : [
                '접히는 부분'
              ],
              attentions: [
                '접히는 부분으로 인해 용지가 터질 수 있으므로<br/>가장자리 부분의 디자인은 가능하면 접히는 부분은 피해주세요.'
              ]
            },
            {
              image: 'shoppingbag-info-notice-process-02',
              title : [
                '밀림주의'
              ],
              attentions: [
                '인쇄 공정상 접히는 부분의 디자인이 <em class="blue">1~2mm</em> 밀려 뒷면의 가장자리 부분에 인쇄 될 수 있습니다.<br/><br/>'
              ]
            },
            {
              image: 'shoppingbag-info-notice-process-03',
              title : [
                '아일렛 위치'
              ],
              attentions: [
                '아일렛 위치는 <em class="blue">3mm</em>정도 차이가 발생할 수 있습니다.'
              ]
            },
            {
              image: 'shoppingbag-info-notice-process-04',
              title : [
                '상단 영역'
              ],
              attentions: [
                '상단 영역은 <em class="blue">접혀 들어가는 영역</em>으로 디자인이 거꾸로 나타날 수 있습니다.'
              ]
            }
          ]
        },
      },
      services: [
        'EDIT_NOTICE',
        'PROCESS_NOTES'
      ]
    }

	},
	CONTENTS: {
		DEFAULTS: {
			title: '쇼핑백',
			attentions: [
				'브랜드의 아이덴티티를 담아 제작해요.',
				'홍보 및 선물 포장 등으로 사용할 수 있어요.'
			],
      services : [
        'SHOPPING_BAG_TITLE',
        'STANDARD_PAPER',
        'STANDARD_COATING_OPTION',
        'CRAFT_PAPER',
        'NEW_TEXTURE',
        'SHOPPING_BAG_SIZE_TITLE',
        'SHOPPING_BAG_SIZE_WIDE',
        'SHOPPING_BAG_SIZE_VERTICAL',
        'HAND_STRAP',
        'STURDY_FINISH'
      ]
		}
	}
};
