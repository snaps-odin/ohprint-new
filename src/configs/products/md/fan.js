

export const FAN = {
	COMMON: {
		option: {
      FAN_NO_HANDLE: {
				thumbnail: 'detail-handfan-round',
				title: '동글이',
				description: '둥근 모양의 형태를 가진 부채로,<br/>아래쪽에 구멍이 뚫려있어요.'
			},
      FAN_W_HANDLE: {
        thumbnail: 'detail-handfan-stick',
        title: '원형막대',
        description: '둥근 모양의 형태를 가진 부채로,<br/>아래쪽에 자루 손잡이가 포함되어<br/>있어요.'
      },
      WHITE_PP: {
        thumbnail: 'detail-handfan-white',
        title: '화이트 PP',
        description: '500mic 두께의 백색의 PP(폴리<br/>프로필랜) 재질로 부채 제작에<br/>대중적으로 쓰이는 소재에요.'
      },
      TRANS_PET: {
        thumbnail: 'detail-handfan-clear',
        title: '투명 PET',
        description: '600mic 두께의 투명 PET 재질로<br/>맑고 깨끗한 느낌이 돋보이는 소재에요.'
      },
		},
		variations: [
			//동글이
      //화이트pp,투명pet
			{
				attributes: [ 'FAN_NO_HANDLE', 'WHITE_PP' ],
				image: 'handfan-round-white'
			},
      {
        attributes: [ 'FAN_NO_HANDLE', 'TRANS_PET' ],
        image: 'handfan-round-clear'
      },

      //원형막대
      //화이트pp,투명pet
      {
        attributes: [ 'FAN_W_HANDLE', 'WHITE_PP' ],
        image: 'handfan-stick-white'
      },
      {
        attributes: [ 'FAN_W_HANDLE', 'TRANS_PET' ],
        image: 'handfan-stick-clear'
      },



    ],
		showcases: {


      THERE_IS_NO_REGRET_FOR_ANY_CHOICE: {
        title: '어떤 선택도 후회 없어요.',
        className: 'bg-gray col-2',
        children: [
          {
            image: 'handfan-info-detail-01',
            title:'동글이',
            descriptions: [
              '동글동글 손잡이까지 동그란 부채로,<br/>' +
              '가볍고 휴대하기 좋아요.'
            ]
          },
          {
            image: 'handfan-info-detail-02',
            title:'원형막대',
            descriptions: [
              '튼튼하고 견고한 긴 막대 모양의 흰색 손잡이가 달린 부채로,<br/>' +
              '작은 스냅으로도 시원함을 느낄 수 있어요.  '
            ]
          }
        ]
      },

      CHECK_THE_MATERIAL: {
        title: '소재를 확인해 보세요.',
        className: 'bg-white col-2',
        children: [
          {
            image: 'handfan-info-detail-03',
            title:'[화이트 PP] - 양면 인쇄',
            descriptions: [
              '가볍고 내구성이 있는 PP(폴리프로필렌) 소재로 선명하게 인쇄되어 홍보에 좋으며,<br/>' +
              '대중적으로 많이 사용돼요. '
            ]
          },
          {
            image: 'handfan-info-detail-04',
            title:'[투명 PET] - 단면 인쇄',
            descriptions: [
              '가볍고 깨끗한 PET(폴리에틸렌·테레프탈레이트) 소재로 맑고 시원한 느낌을 줄 수 있어요.<br/>'
            ]
          }
        ]
      },
      FAN_ATTENTION: {
        className: 'bg-white border-top wallet-attention fanMarginTop50',
        children: [
          {
            title: '주문 시 유의사항',
            attentions: [
              '제작 및 배송 과정에서 미세한 스크래치가 생길 수 있습니다.',
              '손실을 보전하기 위해 20~30개 정도의 수량을 추가 제작하여 발송하는 점 참고해주세요.'
            ]
          }
        ]
      }
		},
    guide:{
      contents: {
        SETTINGS_GUIDE: {
          title: '직접 만들기 <em class="blue">화이트 배경</em> 설정 가이드',
          descriptions: ['(투명 소재 디자인 시 제공)'],
          className: 'bg-white',
          menuIndex: 0
        },
        USED_FOR_WHITE_BACKGROUND: {
          title: '화이트 배경 사용',
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'handfan-clear-option-white-01',
              attentions: [
                '사진, 클립아트, 텍스트에 제공되는 <em class="blue">[화이트 배경]</em> 옵션에서  <em class="blue">[사용]</em>을 선택하여<br/>'+
                '화이트 인쇄를 설정할 수 있어요. '
              ]
            },
            {
              image: 'handfan-clear-option-white-02',
              attentions: [
                '<em class="blue">[사용]</em>으로 선택한 디자인은 화이트 색상 인쇄 후, 그 위에 디자인을 출력하여 디자인이 더 선명해져요. ',
                '투명 용지의 경우 뒷면이 화이트 색상으로 노출돼요.'
              ]
            }
          ]
        },
        WHITE_BACKGROUND_DISABLED: {
          title: '화이트 배경 사용 안함',
          className: 'bg-white col-2 border-top border-bottom',
          children: [
            {
              image: 'handfan-clear-option-white-03',
              attentions: [
                '<em class="blue">[화이트 배경]</em> 옵션에서 <em class="blue">[사용 안함]</em>을 선택하면 화이트 인쇄 없이 디자인을 출력할 수 있어요. '
              ]
            },
            {
              image: 'handfan-clear-option-white-04',
              attentions: [
                '용지 위에 디자인을 출력하기 때문에 디자인이 살짝 투영되어 용지의 특성이 잘 표현돼요.'
              ]
            }
          ]
        },
        WHITE_BACKGROUND_SET_GUIDE: {
          title: '내 디자인 업로드 <em class="blue">화이트 배경</em> 설정 가이드',
          descriptions: ['(투명 소재 디자인 시 제공)'],
          className: 'bg-white col-2'
        },

        SETTING_UP_AI_FILES: {
          title: '<em class="yellow">AI</em> 파일 설정하기',
          className: 'bg-white col-2 border-top border-bottom',
          children: [
            {
              image: 'handfan-ai-guide-01',
              attentions: [
                '<em class="blue">‘print’</em> 레이어를 선택하고 원하는 디자인을 작업해 주세요. '
              ]
            },
            {
              image: 'handfan-ai-guide-02',
              attentions: [
                '<em class="blue">‘white’</em> 레이어를 선택하고 화이트 인쇄를 적용하고 싶은 영역을 M100으로 채워서 지정해주세요.<br/>' +
                '이때, 화이트 영역은 반드시 디자인 레이어와 동일한 위치여야 해요.<br/>' +
                '<em class="blue">* ‘white’ 레이어는 백터로 구성되어야 하며, 비트맵은 제작되지 않습니다.</em>'
              ]
            },
            {
              image: 'handfan-ai-guide-03',
              attentions: [
                '<em class="blue">Eye 마크</em> 활성화 및 레이어 순서는 가이드 파일 그대로 변경이 없이 작업해야 하며,<br/>' +
                '모든 작업이 끝나면 <em class="blue">File > Save As</em> 를 선택하여 저장을 진행해 주세요.<br/>' +
                '<em class="blue">* 레이어명 변경 및 레이어 추가 안됨</em>'
              ]
            },
            {
              image: 'handfan-ai-guide-04',
              attentions: [
                'Format 항목을 <em class="blue">PDF</em>로 선택한 후, Adobe PDF Preset은<br/>' +
                '<em class="blue">[Illustrator Default]</em> 표시된 3개의 옵션 항목을 체크해 주세요.'
              ]
            }
          ]
        },
        DESIGN_NOTES: {
          title: '디자인 유의사항',
          className: 'bg-white'
        },
        INSIDE_THE_SAFETY_ZONE: {
          title: '주요 디자인은 안전 영역 안으로 작업해 주세요.',
          descriptions:['<em class="blue">* 손잡이 부분을 특히 유의해 주세요.</em>'],
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'handfan-caution-01',
              attentions: [
                '안전영역에 안으로 디자인한 경우'
              ]
            },
            {
              image: 'handfan-caution-02',
              attentions: [
                '손잡이 영역에 디자인을 포함한 경우'
              ]
            }
          ]
        },

        FOR_WHITE_COLOR_PRINTING: {
          title: '화이트 색상 인쇄는 <em class="blue">[white] 레이어</em>에 작업해 주세요.',
          descriptions:['<em class="blue">* 투명 부채에만 해당합니다.</em>'],
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'handfan-caution-03',
              attentions: [
                '<em class="blue">[print]</em> 레이어의 화이트 색상은 인쇄되지 않습니다.'
              ]
            },
            {
              image: 'handfan-caution-04',
              attentions: [
                '선명한 인쇄 또는 화이트 색상 인쇄를 위해 <em class="blue">[white]</em> 레이어에 작업할 수 있습니다.'
              ]
            }
          ]
        },
      },
      services: [
        'SETTINGS_GUIDE',
        'USED_FOR_WHITE_BACKGROUND',
        'WHITE_BACKGROUND_DISABLED',
        'WHITE_BACKGROUND_SET_GUIDE',
        'SETTING_UP_AI_FILES',
        'DESIGN_NOTES',
        'INSIDE_THE_SAFETY_ZONE',
        'FOR_WHITE_COLOR_PRINTING'

      ]
    }

	},
	CONTENTS: {
		DEFAULTS: {
      title: '부채',
      attentions: [
        '무더운 여름  시원하게 홍보하세요.',
        '이벤트 및 행사 등의 판촉물 또는 굿즈로 사용해 보세요.'
      ],
      services: [
        'THERE_IS_NO_REGRET_FOR_ANY_CHOICE',
        'CHECK_THE_MATERIAL',
        'FAN_ATTENTION'
      ]
		}
	}
};
