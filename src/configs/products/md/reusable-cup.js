

export const REUSABLE_CUP = {
  COMMON: {
    option: {},
    variations: [
      {
        attributes: ['REUSABLE_CUP', 'TRANSLUCENT'],
        image: 'reusable-cub-clear-matte'
      },
      {
        attributes: ['REUSABLE_CUP', 'IVORY'],
        image: 'reusable-cub-ivory-v2'
      },
      {
        attributes: ['REUSABLE_CUP', 'BLACK'],
        image: 'reusable-cub-black-v2'
      },
    ],
    showcases: {
      EVENT_BANNER: {
        className: 'bg-white banner-image-wrap',
        eventBannerImage:'web-promotion-banner-reusable-cup2',
      },
      TITLE: {
        className: 'bg-white vertical-border',
        title: '남들과는 다른<br/>오프린트미 리유저블컵의 특징!'
      },
      CUSTOM_ORDER: {
        title: '✅ 한 개부터, 원하는 수량으로 제작해드려요.',
        descriptions:[
          '내가 필요한 수량만 꼭 맞춤으로 구매할 수 있어요.'
        ],
        className: 'bg-white col-2',
        children: [
          {
            image: 'reusable-cub-img-01',
            attentions: [
              '1개부터 만들 수 있어 낭비가 없어요.'
            ]
          },
          {
            image: 'reusable-cub-img-02',
            attentions: [
              '대량으로 구매 시 개당 가격이 저렴해져요. (1개 구매 시 10,500 원 > 100개 구매시 개당 8,400원)'
            ]
          }
        ]
      },
      CUSTOM_PRINTING: {
        title: '✅ 나만의 커스텀 디자인, 제한 없이 프린팅하세요.',
        descriptions:[
          '단 한 개를 주문해도 내가 원하는 대로 만들 수 있어요.'
        ],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'reusable-cub-img-03',
            attentions: [
              '한쪽 면에만 프린팅되는 일반 컵 굿즈와는 달라요! 인쇄 영역 제한없이 360도 디자인이 가능해요.'
            ]
          },
          {
            image: 'reusable-cub-img-04',
            attentions: [
              'UV 인쇄 방식으로 원하는 컬러가 무엇이든, 자유롭게 프린팅 할 수 있어요.'
            ]
          }
        ]
      },
      SHOW_DETAIL: {
        title: '자세히 보여 드릴께요.',
        descriptions:[
          '넉넉한 그란데 사이즈의 리유저블컵을 살펴보세요.'
        ],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'reusable-cub-img-05',
            attentions: [
              '따뜻한 음료부터 아이스 음료까지 OK! 내구성과 내열성이 우수한 100% 국내 제작 상품이에요.'
            ]
          },
          {
            image: 'reusable-cub-img-06',
            attentions: [
              '뜨거운 물을 담아도 변형이 없고 환경 호르몬 걱정을 덜 수 있는 무독성 PP 소재에요.'
            ]
          },
          {
            image: 'reusable-cub-img-07',
            attentions: [
              '홀 지름이 13mm로 넓어서 버블티 스트로우까지 사용 OK! 뚜껑도 무독성 PP 소재로 제작되어<br/>입에 닿을 때도 걱정 없어요.'
            ]
          },
          {
            image: 'reusable-cub-img-08',
            attentions: [
              '매트한 질감처리로 퀄리티 높은 굿즈를 합리적인 가격으로 제작해보세요.'
            ]
          }
        ]
      },
      SIZE_CHECK: {
        title: '사이즈를 확인하세요.',
        className: 'bg-white border-top centerItemOne',
        children: [
          {
            image: 'reusable-cub-size',
            title: '473ml',
            descriptions: [
              '커피 전문점의 그란데 사이즈로 테이크아웃 컵에 가장 적합한 용량과 사이즈에요.'
            ]
          }
        ]
      },

      BASIC_INFO: {
        className: "table-col bg-white border-top",
        title: "기본 정보",
        type: "table",
        children: [
          {
            descriptions: ["PP"],
            title: "소재"
          },
          {
            descriptions: ["컵 : 상단 지름 90 x 하단 지름 60 x 높이 132 (mm) / 뚜껑 : 지름 93 (mm) / 컵+뚜껑 : 총 높이 150 (mm) / 뚜껑 홀 : 지름 13 (mm)"],
            title: "사이즈"
          },
          {
            descriptions: ["473ml"],
            title: "용량"
          },
          {
            descriptions: ["아이보리 / 블랙"],
            title: "색상"
          },
          {
            descriptions: ["대한민국"],
            title: "제조국"
          },
          {
            descriptions: ["-20도 ~ 106도"],
            title: "내냉/내열 온도"
          }
        ],
        notice: {
          title : '상품 유의사항',
          subTitle : '구매 전 꼭 읽어주세요.',
          contents : [
            '<em class="blue">사용 전, 반드시 세척</em>하여 사용해 주세요.',
            '<em class="blue">최소 1주일은 인쇄면 보호를 위해 주의가 필요</em>하므로, 해당 기간 동안 세척 시 부드러운 도구를 사용해 주시고, 강한 마찰은 피해주세요.',
            '뜨거운 물로 세척 시 프린팅이 벗겨질 우려가 있어, 반드시 <em class="blue">찬물 또는 미온수</em>를 사용하여 세척해 주시기 바랍니다.',
            '부득이하게 뜨거운 물로 세척이 필요한 경우, 프린팅 마찰을 최소화하고 충분히 건조한 뒤 사용해 주시기 바랍니다.',
            '제품 제작 공정 과정에서 약간의 찍힘 및 스크래치가 발생할 수 있으며 이는 정상 제품입니다.',
            '<em class="blue">전자레인지, 냉동실, 식기세척기에서의 사용이 불가</em>하며 보온, 보냉 기능이 없습니다.'
          ]
        }
      }
    },

    guide:{
      contents:{
        EDIT_NOTICE: {
          title: '편집 유의사항',
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'reusable-cub-caution-01',
              attentions: [
                '직사각 모양의 편집 데이터가 부채꼴 데이터로 자동 변환되는 과정에서 상품의 하단 부분의<br/> 프린팅이 좌우로 줄어들게 인쇄됩니다<br/>' +
                '이는 인쇄 불량에 해당하지 않으니, 편집기 내 3D 미리보기를 통해 변형 정도를 미리 확인한 후<br/> 주문해주세요.'
              ]
            },
            {
              image: 'reusable-cub-caution-02-v2',
              attentions: [
                '템플릿 이용시 화이트 인쇄가 기본 제공이 되며 컬러 인쇄 영역과 인쇄 오차가 발생할 수 있습니다.',
                '내 디자인 업로드 시 화이트 인쇄 밀림을 최소화 하기 위해서는 화이트 영역 사방 -0.1mm로 줄여 제작하거나 화이트 계열의 밝은 컬러 데이터로 디자인해주세요'
              ]
            }
          ]
        },
        DESCRIPTION: {
          className: 'bg-white border-top fanMarginTop50',
          attentions: [
            '그라데이션 컬러 표현이 가능하나 컬러가 계단식으로 끊기듯 표현되는 현상이 나타날 수 있습니다.' ,
            '굴곡이 많은 디자인의 경우 인쇄 시 부드럽지 않게 표현될 수 있으니 작업 시 주의가 필요합니다.' ,
            '템플릿 이용시 RGB 색상 모드로 제공되며, 실제 인쇄 색상과 다르게 보일 수 있습니다.',
            '내 디자인 업로드 시 기본 화이트 제공이 안되므로 직접 화이트 영역을 지정해주시길 바랍니다.',
            '화이트 인쇄 밀림이 최대 1mm정도 있을 수 있습니다.',
            '폰트의 경우 10pt 이상 볼드체 사용을 권장합니다.',
            '라인의 경우 1pt 이상 굵기 사용을 권장합니다.',
            '0.5pt 미만의 얇은 라인과 폰트 사용 시 인쇄가 어려울 수 있어 권장하지 않습니다.'
          ]
        },
      },
      services: [
        'EDIT_NOTICE',
        'DESCRIPTION'
      ]
    }
  },
  CONTENTS: {
    DEFAULTS: {
      title: '리유저블컵',
      attentions: [
        '활용도가 높은 그란데 사이즈로, 부담 없는 가격대로 고급스러운 브랜드 굿즈를 제작 할 수 있어요.',
        '사이즈 : 93mm x 150mm / 473ml'
      ],
      services: [
        'EVENT_BANNER',
        'TITLE',
        'CUSTOM_ORDER',
        'CUSTOM_PRINTING',
        'SHOW_DETAIL',
        'SIZE_CHECK',
        'BASIC_INFO'
      ]
    }
  }
};
