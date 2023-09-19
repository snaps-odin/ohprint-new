

export const NOTE_PAD = {
	COMMON: {
		option: {
      NOTE_PAD_A5: {
        thumbnail: 'detail-note-pad-a-5',
        title: 'A5',
        attentions: [
          '148mm x 210mm'
        ]
      },
      NOTE_PAD_B5: {
        thumbnail: 'detail-note-pad-b-5',
        title: 'B5',
        attentions: [
          '182mm x 257mm'
        ]
      },
    },
		variations: [
      {
        attributes: [ 'NOTE_PAD', 'NOTE_PAD_A5' ],
        image: 'note-pad-a-5'
      },
      {
        attributes: [ 'NOTE_PAD', 'NOTE_PAD_B5' ],
        image: 'note-pad-b-5'
      }
    ],
    showcases: {
      SHOW_DETAIL: {
        title: '자세히 보여 드릴께요.',
        descriptions:[
          '노트패드는 한장씩 떼어쓰는 비점착 메모지입니다.<br/>용지 : 백색 모조지 100g/m2'
        ],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'memo-pad-img-01',
            attentions: [
              '1개부터 제작 가능하여 제작 부담과 비용을 절감할 수 있습니다.'
            ]
          },
          {
            image: 'memo-pad-img-02',
            attentions: [
              '한 장씩 뜯어 사용 가능하며 필요한 만큼 깔끔하게 떼어 사용할 수 있습니다.'
            ]
          },
          {
            image: 'memo-pad-img-03',
            attentions: [
              '비점착 메모지로 180도 완전히 펼쳐져 편안한 사용이 가능합니다.'
            ]
          },
          {
            image: 'memo-pad-img-04',
            attentions: [
              '제품이 틀어짐 없이 안전하게 전달되도록 개별 쉬링크 포장됩니다.'
            ]
          }
        ]
      },
      SIZE_CHECK: {
        title: '사이즈를 확인하세요.',
        descriptions:[
          '메모에 적합한 두가지의 사이즈를 선택할 수 있어요.'
        ],
        className: 'bg-white border-top',
        children: [
          {
            image: 'note-pad-size'
          }
        ]
      },
      GSM: {
        title: '용지 두께를 확인해 보세요.',
        descriptions:[
          '80매수로 넉넉한 사용이 가능합니다.'
        ],
        className: 'bg-white centerItemTwo border-top note-gsm',
        children: [
          {
            image: 'memo-pad-size-m',
            title: '80매'
          }
        ]
      },
      BINDING: {
        title: '제본 방식과 방향을 확인하세요.',
        descriptions:[
          '제본 방식 : 떡제본 / 제본 방향 : 상철'
        ],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'memo-pad-bind-img-01',
            title: '떡제본',
            descriptions: ['접착 풀을 사용하여 제본하는 방식으로 한 장씩 뜯어 사용할 수 있어요.']
          },
          {
            image: 'memo-pad-bind-img-02',
            title: '상철 제본',
            descriptions: ['제품의 상단에 제본하여 용지를 아래에서 위로 넘길 수 있어요.']
          }
        ]
      },
      EXAMPLE: {
        title: '다양한 용도로 활용해보세요.',
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'memo-pad-info-01',
            attentions: ['브랜드 아이덴티티를 담아 굿즈로 사용해보세요.']
          },
          {
            image: 'memo-pad-info-02',
            attentions: ['Todo / Check List로 사용해보세요.']
          },
          {
            image: 'memo-pad-info-03',
            attentions: ['메뉴 주문서로 사용해보세요.']
          },
          {
            image: 'memo-pad-info-04',
            attentions: ['원하는 디자인의 편지지로 사용해보세요.']
          }
        ]
      },
    },

    guide:{
      contents:{

        EDIT_NOTICE: {
          title: '편집 유의사항',
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'memo-pad-notify-01',
              attentions: [
                '디자인 시 채도가 높은 컬러 사용을 권장하지 않습니다.<br/>(잉크량이 많은 데이터가 인쇄될 경우 필기가 어려울 수 있습니다.)'
              ]
            },
            {
              image: 'memo-pad-notify-02',
              attentions: [
                '재단선 가까이 패턴 디자인이 들어가 있는 경우 옆면에 영향을 줄 수 있습니다.'
              ]
            }
          ]
        },
        DESCRIPTION: {
          className: 'bg-white border-top row-last',
          children: [
            {
              attentions: [
                '작업 안전영역에 가깝게 라인과 같은 디자인 요소가 들어갈 경우 재단 시 틀어짐 또는 인쇄 밀림 현상이 드러나 보일 수 있으니 주의가 필요합니다.' ,
                '용지 특성 상 제작 과정에서 약간의 잉크 튐과 작은 점 또는 실오라기가 종종 발견될 수 있으나 이는 불량이 아닙니다.' ,
                '제작 공정 상 칼선 밀림이 발생할 수 있으니 중요한 내용은 반드시 안전영역 안에서 작업해야 합니다.' ,
                '안내된 매수의 ±10매 정도 차이가 있을 수 있습니다.'
              ]
            }
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
      title: '노트패드',
      attentions: [
        '다양하게 활용하여 브랜드를 홍보해 보세요.',
        '주문서, 신청서, Todo/Check list 등으로 사용하기 좋아요.'
      ],
      services: [
        'SHOW_DETAIL',
        'SIZE_CHECK',
        'GSM',
        'BINDING',
        'EXAMPLE'
      ]
		}
	}
};
