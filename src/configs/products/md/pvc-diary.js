

export const PVC_DIARY = {
	COMMON: {
    option: {},
    variations: [
      {
        attributes: ['PVC_DIARY', 'SUNSHINE160'],
        image: 'pvc-diary-front'
      },
    ],
    showcases: {
      SHOW_DETAIL: {
        title: '자세히 보여 드릴께요.',
        descriptions:[
          '말랑말랑한 커버로 자유롭게 디자인 가능한 다이어리에요.<br/>표지 : 선샤인 160g /㎡'
        ],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'pvc-cover-diary-img-01',
            attentions: [
              'PVC 커버가 표지 훼손을 막아주어 오래 사용 가능하며, 방수 기능도 있어 물이나 오염에도 강해요.'
            ]
          },
          {
            image: 'pvc-cover-diary-img-02',
            attentions: [
              'PVC 커버 날개에 스티커나 작은 지류 등을 끼워 보관 가능해요.'
            ]
          }
        ]
      },

      PAPER_CHECK: {
        title: '내지를 확인하세요.',
        descriptions: [
          '내지는 만년형으로 구성되어 있어요.<br/>*만년형 : 12개월(언제든 사용일로부터 1년)<br/>80매 (160p) / 백색유광지 100g /㎡'
        ],
        className: 'bg-white col-4 border-top',
        children: [
          {
            image: 'pvc-cover-diary-inside-01',
            title: [
              '2~25p : 월간'
            ]
          },
          {
            image: 'pvc-cover-diary-inside-02',
            title: [
              '26~135p : 주간'
            ]
          },
          {
            image: 'pvc-cover-diary-inside-03',
            title: [
              '136~159p : 무지 노트'
            ]
          },
          {
            image: 'pvc-cover-diary-inside-04',
            title: [
              '160p : 개인정보'
            ]
          }
        ]
      },

      SIZE_CHECK : {
        title: "사이즈를 확인하세요.",
        className: "col-2 bg-white border-top centerItemTwo",
        children: [
          {
            image: "pvc-cover-diary-size",
            descriptions: [
              '124.25(가로) x 185(세로) x 11(두께) (32절)<br/>(단위 : mm)'
            ]
          }
        ]
      },

      INFORM_SERVICE: {
        title: '다양한 상품으로 브랜드를 표현해보세요.',
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'pvc-diary-info-01',
            attentions: [
              '브랜드 굿즈로 활용해요.'
            ]
          },
          {
            image: 'pvc-diary-info-02',
            attentions: [
              '동일한 디자인으로 다양한 상품도 만들어 보세요.'
            ]
          }
        ]
      }

    }
  },
	CONTENTS: {
		DEFAULTS: {
      title: '투명PVC커버 다이어리',
      attentions: [
        '자유롭게 디자인 가능한 다이어리에 브랜드를 담아보세요.'
      ],
      services: [
        'SHOW_DETAIL',
        'PAPER_CHECK',
        'SIZE_CHECK',
        'INFORM_SERVICE'
      ]
		}
	}
};
