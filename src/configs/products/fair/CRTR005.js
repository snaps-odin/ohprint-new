import {
  TITLE,
  MANAGEMENT_TITLE,
  LAUNDRY_CARE,
  PRINTSTAR_085_CVT_INFORMATION,
  PRINTSTAR_085_CVT_SIZE_INFORMATION,
  OHPRINTME_OPM_100777M_INFORMATION,
  OHPRINTME_OPM_100777M_SIZE_INFORMATION,
  DELIVERY
} from './common';

export const CRTR005 = {
  COMMON : {
    showcases : {
      TITLE,
      MANAGEMENT_TITLE,
      LAUNDRY_CARE,
      PRINTSTAR_085_CVT_INFORMATION,
      PRINTSTAR_085_CVT_SIZE_INFORMATION,
      OHPRINTME_OPM_100777M_INFORMATION,
      OHPRINTME_OPM_100777M_SIZE_INFORMATION,
      DELIVERY,
      CONCEPT: {
        title: '봄을 기다리는 마음을 담아 그렸습니다.',
        descriptions: [
          '다가오는 봄, 기다리는 꽃, 따듯한 감정을 표현하고 싶었습니다.'
        ],
        className: 'bg-white col-1',
        children: [
          {
            image: 'oif-ari-photo-01',
          }
        ]
      },

      CONTENT_DIY_STICKER: {
        title: '레드 튤립, 퍼플 플라워',
        descriptions: [
          '튤립과 꽃, 작가의 자화상을 담았어요.<br/>'+
          '소지품 곳곳에서 봄 기운을 물씬 느껴보세요. <br/><br/>'+
          '(DIY 스티커 2종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-ari-photo-02',
          }
        ]
      },


      CONTENT_APPAREL: {
        title: 'Love tulip, love windflower',
        descriptions: [
          '봄을 기다리는 마음을 담아 앞면엔 레터링,<br/>' +
          '뒷면엔 싱그러운 꽃을 담았어요. <br/><br/>'+
          '(라운드 반팔 2종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-ari-photo-03',
          }
        ]
      },

      CONTENT_STICKER: {
        title: 'Love tulip',
        descriptions: [
          '총 여섯 가지 종류의 스티커로<br/>'+
          '다이어리와 소품에 포인트를 주어 알록달록 꾸며보세요! <br/><br/>'+
          '(낱장스티커 6종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-ari-photo-04',
          }
        ]
      },

      CONTENT_CARD: {
        title: 'Love tulip, love windflower,<br/>' +
          '우리들의 시간, 노랑색 고민, 그냥',
        descriptions: [
          '그날의 기분에 따라 하루를 기록해보세요.<br/>'+
          '액자에 끼우거나 벽에 붙여서 활용할 수 있어요. <br/><br/>'+
          '(카드 5종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-ari-photo-05',
          }
        ]
      }
    }
  },
  SERVICE: {
    keyVisualImage : '/images/store/fair/keyVisual/oif-ari-kv@2x.jpg',
    attentions: [
      '<dt>[일러스트레이터] 아리</dt>'+
      '<dd>하루의 작은 선물같은 그림을 그리고 싶은 일러스트레이터</dd>'+
      '<dd>'+
        '저는 삭막한 공간이라도 식물이나 꽃이 있으면 그 공간이 한 순간에 따뜻해지는 기분이 들어요.<br/>'+
        '그 식물들처럼 보면 기분 좋고 시선이 가는 따뜻한 그림을 그리고 싶습니다.'+
      '</dd>'
    ],
    services:[
      'TITLE',
      'CONCEPT',
      'CONTENT_DIY_STICKER',
      'CONTENT_APPAREL',
      'CONTENT_STICKER',
      'CONTENT_CARD',
      'MANAGEMENT_TITLE',
      'PRINTSTAR_085_CVT_INFORMATION',
      'PRINTSTAR_085_CVT_SIZE_INFORMATION',
      'OHPRINTME_OPM_100777M_INFORMATION',
      'OHPRINTME_OPM_100777M_SIZE_INFORMATION',
      'LAUNDRY_CARE',
      'DELIVERY'
    ]
  },
}
