import {
  TITLE,
  MANAGEMENT_TITLE,
  PRINTSTAR_085_CVT_INFORMATION,
  PRINTSTAR_085_CVT_SIZE_INFORMATION,
  OHPRINTME_OPM_100348_INFORMATION,
  OHPRINTME_OPM_100348_SIZE_INFORMATION,
  LAUNDRY_CARE,
  DELIVERY
} from './common';

export const CRTR007 = {
  COMMON : {
    showcases : {
      TITLE,
      MANAGEMENT_TITLE,
      PRINTSTAR_085_CVT_INFORMATION,
      PRINTSTAR_085_CVT_SIZE_INFORMATION,
      OHPRINTME_OPM_100348_INFORMATION,
      OHPRINTME_OPM_100348_SIZE_INFORMATION,
      LAUNDRY_CARE,
      DELIVERY,
      CONCEPT: {
        title: '그냥 내가 그리고 싶은 그림들',
        descriptions: [
          "'그냥 내가 그리고 싶은 그림' 이라는 타이틀로 SNS에 그림을 그려 올리기 시작했어요.<br/>"+
          "저와 제 아내의 이야기와 제가 좋아하는 농구 그림들 그리고 제 생각들을 그림으로 표현했어요. 자신이 하고 싶은 것을 할 수 있다는 것은 행복한 일이니까요."
        ],
        className: 'bg-white col-1',
        children: [
          {
            image: 'oif-lgy-photo-01',
          }
        ]
      },

      CONTENT_BOOKMARK: {
        title: '숲길, 벚꽃, 너와 나, 창가',
        descriptions: [
          '책을 읽다 잠시 멈출 때, 읽었던 곳을 체크할 수 있어요.<br/>'+
          '투명해서 더 감성적으로 활용할 수 있는 아이템입니다.<br/><br/>'+
          '(투명 책갈피 4종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-lgy-photo-02',
          }
        ]
      },

      CONTENT_POSTCARD: {
        title: '너와나, 버스, 벚꽃길, 식물원, 숲길, 비오는날',
        descriptions: [
          '마음을 담아 소중한 이에게 사랑을 전해보세요.<br/>'+
          '인테리어 소품으로 사용해도 좋습니다.<br/><br/>'+
          '(포스트카드 6종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-lgy-photo-03',
          }
        ]
      },

      CONTENT_POSTER: {
        title: '비오는날, 숲길, 캠핑',
        descriptions: [
          '사랑하는 이와 함께하는 순간을 담은 포스터로<br/>'+
          '방안 가득 따뜻한 감성을 채워보세요.<br/><br/>'+
          '(포스터 3종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-lgy-photo-04',
          }
        ]
      },

      CONTENT_APPAREL: {
        title: 'MAMBA FOREVER, GYUNG STUDIO',
        descriptions: [
          '데일리 룩으로 활용하기 좋은 아이템 입니다.<br/>' +
          '데님, 슬랙스 등 캐주얼하게 스타일링 하기 좋아요.<br/><br/>'+
          '(어패럴 2종 – 라운드 반팔, 기모 후드집업)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-lgy-photo-05',
          }
        ]
      }

    }

  },
  SERVICE: {
    keyVisualImage : '/images/store/fair/keyVisual/oif-lgy-kv@2x.jpg',
    attentions: [
      '<dt>[일러스트레이터] 이규영</dt>'+
      '<dd>놓치기 쉬운 작고 소소한 사랑이야기와 행복들을 그립니다.</dd>'+
      '<dd>'+
        '살면서 너무 당연해져서, 익숙해져 지나치기 쉬운 작고 소소한 행복들이 많다고 생각해요.<br/>'+
        '힘들고 지치는 삶 속에 이런 작은 행복들을 하나하나 느낄 수 있다면<br/>'+
        '조금 더 행복한 삶을 살 수 있다고 생각합니다.<br/>'+
      '</dd>'
    ],
    services:[
      'TITLE',
      'CONCEPT',
      'CONTENT_BOOKMARK',
      'CONTENT_POSTCARD',
      'CONTENT_POSTER',
      'CONTENT_APPAREL',
      'MANAGEMENT_TITLE',
      'PRINTSTAR_085_CVT_INFORMATION',
      'PRINTSTAR_085_CVT_SIZE_INFORMATION',
      'OHPRINTME_OPM_100348_INFORMATION',
      'OHPRINTME_OPM_100348_SIZE_INFORMATION',
      'LAUNDRY_CARE',
      'DELIVERY'
    ]
  },
}
