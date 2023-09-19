

export const SMART_TOK = {
	COMMON: {
		option: {
      SMART_TOK_ROUND: {
				thumbnail: 'detail-smarttok-shape-circle',
				title: '원형'
			},
      SMART_TOK_HEART: {
        thumbnail: 'detail-smarttok-shape-heart',
        title: '하트형'
      },
      SMART_TOK_ROUND_BLACK: {
        thumbnail: 'detail-smarttok-circle-color-black',
        title: '블랙'
      },
      SMART_TOK_ROUND_WHITE: {
        thumbnail: 'detail-smarttok-circle-color-white',
        title: '화이트'
      },
      SMART_TOK_HEART_BLACK: {
        thumbnail: 'detail-smarttok-heart-color-black',
        title: '블랙'
      },
      SMART_TOK_HEART_WHITE: {
        thumbnail: 'detail-smarttok-heart-color-white',
        title: '화이트'
      }
		},
		variations: [
			//원형
      //블랙,회이트
			{
				attributes: [ 'SMART_TOK_ROUND', 'BLACK' ],
				image: 'smarttok-circle-black'
			},
      {
        attributes: [ 'SMART_TOK_ROUND', 'WHITE' ],
        image: 'smarttok-circle-white'
      },

      //하트형
      //블랙,회이트
      {
        attributes: [ 'SMART_TOK_HEART', 'BLACK' ],
        image: 'smarttok-heart-black'
      },
      {
        attributes: [ 'SMART_TOK_HEART', 'WHITE' ],
        image: 'smarttok-heart-white'
      },

		],
		showcases: {

      INFORM_SERVICE: {
        title: '간편하게 만들고 효과적으로 활용해요.',
        className: 'bg-white col-2',
        children: [
          {
            image: 'smarttok-info-img-01',
            attentions: [
              '브랜드 홍보나 캠페인 선전을 위해 제작해요.'
            ]
          },
          {
            image: 'smarttok-info-img-02',
            attentions: [
              '어떤 내용이라도 예쁘게 만들 수 있어요.'
            ]
          }
        ]
      },

      SHOW_DETAIL: {
        title: '자세히 보여 드릴께요.',
        className: 'bg-gray col-2',
        children: [
          {
            image: 'smarttok-info-detail-01',
            attentions: [
              '내 손에 착~ 이젠 편안하게 들어 보세요. '
            ]
          },
          {
            image: 'smarttok-info-detail-02',
            attentions: [
              '다양한 각도로 안정적이게 거치 할 수 있어요.'
            ]
          }
        ]
      },

      INFORM_SERVICE_2: {
        title: '다양한 높이와 움직임으로 더욱 편리해요.',
        className: 'bg-white col-2',
        children: [
          {
            image: 'smarttok-info-use-01',
            attentions: [
              '3단계로 높이를 조정할 수 있어요.'
            ]
          },
          {
            image: 'smarttok-info-use-02',
            attentions: [
              '사방으로 각도를 변화 시킬 수 있어요.'
            ]
          }
        ]
      },

      INFORM_SERVICE_3: {
        title: '색상을 확인해 보세요.',
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'smarttok-info-color-black',
            title: [
              '블랙'
            ]
          },
          {
            image: 'smarttok-info-color-white',
            title: [
              '화이트'
            ]
          }
        ]
      },

      INFORM_SERVICE_4: {
        title: '원하는 형태를 확인하세요.',
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'smarttok-info-shape-circle',
            title: [
              '원형'
            ]
          },
          {
            image: 'smarttok-info-shape-heart',
            title: [
              '하트형'
            ]
          }
        ]
      },

      INFORM_SERVICE_5: {
        title: '주문 시 유의사항',
        descriptions:[
          '스마트톡은 좀 더 편리한 사용을 위한 보조제품으로 <br/>' +
          '사용자의 부주의로 인한 스마트폰 및 케이스 파손책임은 사용자에게 있습니다.'
        ],
        className: 'bg-white col-3 border-top centerItemTwo',
        children: [
          {
            image: 'smarttok-info-notice-01',
            descriptions: [
              '커브드 휴대폰, 지문방지 코팅 기종의<br/>' +
              '경우 부착되지 않을 수 있습니다.'
            ]
          },
          {
            image: 'smarttok-info-notice-02',
            descriptions : [
              '음/양각 패턴 및 가죽, 젤리 소재의<br/>' +
              '케이스에 부착을 권장하지 않습니다.'
            ]
          }
        ]
      },

		}
	},
	CONTENTS: {
		DEFAULTS: {
      title: '스마트 톡',
      attentions: [
        '스마트폰과 찰떡궁합, 손에 살짝만 걸치면 OK<br/>원하는 감성까지 더해보세요.'
      ],
      services: [
        'INFORM_SERVICE',
        'SHOW_DETAIL',
        'INFORM_SERVICE_2',
        'INFORM_SERVICE_3',
        'INFORM_SERVICE_4',
        'INFORM_SERVICE_5'

      ]
		}
	}
};
