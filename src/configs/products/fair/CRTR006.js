import {
  TITLE,
  MANAGEMENT_TITLE,
  DELIVERY
} from './common';

export const CRTR006 = {
  COMMON : {
    showcases : {
      TITLE,
      MANAGEMENT_TITLE,
      DELIVERY,
      CONCEPT: {
        title: '일상 속 이야기',
        descriptions: [
          '너무나도 빠르게 변화하는 각박한 세상속에 살아가는 우리들에게<br/>' +
          '이야기가 담겨져 있는 그림을 보고 사람들 모두가 조금이나마 위로가 되고 도움이 되었으면 좋겠습니다.'
        ],
        className: 'bg-white col-1',
        children: [
          {
            image: 'oif-mmh-photo-01',
          }
        ]
      },

      CONTENT_STICKER: {
        title: '핑크뮬리 꽃말, 꿀잠, 사랑은 식물처럼',
        descriptions: [
          '매일 손이 닿는 곳에 예쁘게 붙여 감성 넘치는 아이템을 완성해보세요.<br/><br/>'+
          '(원형 스티커 3종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-mmh-photo-02',
          }
        ]
      },


      CONTENT_CARD: {
        title: '사랑은 식물처럼, 아름다운 방식으로,<br/>'+
        '핑크뮬리 꽃말, 너와 함께 ',
        descriptions: [
          '보기만 해도 따뜻해지는 카드로 사랑하는 이에게 마음을 전해보세요.<br/>'+
          '벽이나 문에 붙여 홈데코로 활용할 수 있어요. <br/><br/>'+
          '(카드 4종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-mmh-photo-03',
          }
        ]
      },


      CONTENT_POSTER: {
        title: '사랑은 식물처럼, 아름다운 방식으로,<br/>'+
        '핑크뮬리 꽃말, 너와 함께 ',
        descriptions: [
          '사랑하는 이와 추억을 그렸습니다.<br/>'+
          '내 손이 닿는 곳에 붙여 따스함이 가득한 공간을 만들어보세요.<br/><br/>'+
          '(포스터 4종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-mmh-photo-04',
          }
        ]
      },



      CONTENT_BOOKMARK: {
        title: '가족, 사랑해, 아프지말자, 함께 가는길',
        descriptions: [
          '투명함에 그려진 사랑 이야기를 만나보세요.<br/>'+
          '책상 위의 인테리어 소품으로 평소에는 책갈피로 활용할 수 있어요.<br/><br/>'+
          '(책갈피 4종)'
        ],
        className: 'bg-white col-1 border-top border-bottom',
        children: [
          {
            image: 'oif-mmh-photo-05',
          }
        ]
      }

    }

  },
  SERVICE: {
    keyVisualImage : '/images/store/fair/keyVisual/oif-mmh-kv@2x.jpg',
    attentions: [
      '<dt>[만화 일러스트레이터] 명민호</dt>'+
      '<dd>일상 속 색깔들을 담아내는 만화 일러스트레이터</dd>'+
      '<dd>'+
      '우리들의 다양하고 복잡한 일상 속 여러 이야기들의 색깔을 그림으로 담고 있습니다. '+
      '</dd>'
    ],
    services:[
      'TITLE',
      'CONCEPT',
      'CONTENT_STICKER',
      'CONTENT_CARD',
      'CONTENT_POSTER',
      'CONTENT_BOOKMARK',
      'DELIVERY'
    ]
  },
}
