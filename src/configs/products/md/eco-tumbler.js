

export const ECO_TUMBLER = {
  COMMON: {
    option: {},
    variations: [
      {
        attributes: ['ECO_TUMBLER', 'IVORY'],
        image: 'eco-tumbler-ivory'
      },
      {
        attributes: ['ECO_TUMBLER', 'GRAY'],
        image: 'eco-tumbler-grey'
      },
      {
        attributes: ['ECO_TUMBLER', 'PINK'],
          image: 'eco-tumbler-pink'
      },
      {
        attributes: ['ECO_TUMBLER', 'PURPLE'],
          image: 'eco-tumbler-purple'
      }
    ],
    showcases: {
      TITLE: {
        className: 'bg-white vertical-border',
        title: '남들과는 다른<br/>오프린트미 에코텀블러의 특징!'
      },
      CUSTOM_ORDER: {
        title: '✅ 한 개부터, 원하는 수량으로 제작해드려요.',
        descriptions:[
          '내가 필요한 수량만 꼭 맞춤으로 구매할 수 있어요.'
        ],
        className: 'bg-white col-2',
        children: [
          {
            image: 'eco-tumbler-img-01',
            attentions: [
              '1개부터 만들 수 있어 낭비가 없어요.'
            ]
          },
          {
            image: 'eco-tumbler-img-02',
            attentions: [
              '대량으로 구매 시 개당 가격이 저렴해져요.<br/>(1개 구매 시 17,500원 > 100개 구매시 개당  15,400원!)'
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
            image: 'eco-tumbler-img-03',
            attentions: [
              '한쪽 면에만 프린팅되는 일반 컵 굿즈와는 달라요! 인쇄 영역 제한없이 360도 디자인이 가능해요.'
            ]
          },
          {
            image: 'eco-tumbler-img-04',
            attentions: [
              'UV 인쇄 방식으로 원하는 컬러가 무엇이든, 자유롭게 프린팅 할 수 있어요.'
            ]
          }
        ]
      },
      SHOW_DETAIL: {
        title: '자세히 보여 드릴께요.',
        descriptions:[
          '친환경 소재로 만든 부드러운 파스텔톤의 텀블러에요.'
        ],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'eco-tumbler-img-05',
            attentions: [
              '170g의 가벼운 무게감으로 들고 다니며 사용하기 좋아요.'
            ]
          },
          {
            image: 'eco-tumbler-img-06',
            attentions: [
              '음용이 쉽고 스트로우가 사용 가능한 캡 디자인은 물론, 실리콘 마개를 닫으면 음료가 새지 않아요.'
            ]
          },
          {
            image: 'eco-tumbler-img-07',
            attentions: [
              '자연 분해되는 친환경 플라스틱 소재로 만들어져 지구에도, 나에게도 안전해요.'
            ]
          },
          {
            image: 'eco-tumbler-img-08',
            attentions: [
              '개성이 담긴 나만의 사무실용 텀블러, 회사 웰컴 키트로 제작해보세요.'
            ]
          }
        ]
      },
      SIZE_CHECK: {
        title: '사이즈를 확인하세요.',
        className: 'bg-white border-top centerItemOne',
        children: [
          {
            image: 'eco-tumbler-size-v2',
            title: '420ml',
            descriptions: [
              '휴대에 가장 적합한 420ml 용량과 사이즈로 컴팩트하게 들고 다닐 수 있어요.'
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
            descriptions: ["상품 : PLA 친환경 수지 / 뚜껑 마개 : 실리콘"],
            title: "소재"
          },
          {
            descriptions: ["컵 : 상단 지름 80 x 하단 지름 63 x 높이 130 (mm) / 뚜껑 : 지름 85 (mm) / 컵+뚜껑 : 총 높이 150 (mm)"],
            title: "사이즈"
          },
          {
            descriptions: ["420ml"],
            title: "용량"
          },
          {
            descriptions: ["아이보리 / 그레이 / 핑크 / 퍼플"],
            title: "색상"
          },
          {
            descriptions: ["중국"],
            title: "제조국"
          },
          {
            descriptions: ["-20도 ~ 100도"],
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
            'PLA 소재 특성상 은은한 한방 냄새가 날 수 있습니다. 정상 제품이지만, 예민하신 분들은 구매에 참고 바랍니다.',
            '상품을 사용하면서 도색이 벗겨질 수 있습니다. 이에 따라 색을 입히지 않은 원래의 재질이 드러날 수 있으나, 이는 불량이 아닙니다.',
            '식기세척기 사용 시 90도로 3분 동안 사용 가능하며, <em class="blue">전자레인지나 오븐은 사용이 불가</em>합니다.'
          ]
        }

      }
    },

    guide:{
      contents:{
        EDIT_NOTICE: {
          title: '편집 유의사항',
          className: 'bg-white col-2 border-top mt-70',
          children: [
            {
              image: 'eco-tumbler-caution-01',
              attentions: [
                '직사각 모양의 편집 데이터가 부채꼴 데이터로 자동 변환되는 과정에서 상품의 하단 부분의<br/> 프린팅이 좌우로 줄어들게 인쇄됩니다<br/>' +
                '이는 인쇄 불량에 해당하지 않으니, 편집기 내 3D 미리보기를 통해 변형 정도를 미리 확인한 후<br/> 주문해주세요.'
              ]
            },
            {
              image: 'eco-tumbler-caution-02',
              attentions: [
                '상품의 색상에 따라 구현되는 디자인의 컬러가 다르게 보일 수 있어요.'
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
      title: '에코 텀블러',
      attentions: [
        '친환경 재생소재 사용으로 안전하고 가볍게 사용해요.',
        '사이즈 : 85mm x 150mm / 420ml'
      ],
      services: [
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
