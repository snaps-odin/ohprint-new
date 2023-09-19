import {
  TITLE,
  MANAGEMENT_TITLE,
  AAA_1301_INFORMATION,
  AAA_1301_SIZE_INFORMATION,
  OHPRINTME_OPM_100777M_INFORMATION,
  OHPRINTME_OPM_100777M_SIZE_INFORMATION,
  LAUNDRY_CARE,
  DELIVERY
} from './common';

export const CRTR003 = {
  COMMON : {
    showcases : {
      TITLE,
      MANAGEMENT_TITLE,
      LAUNDRY_CARE,
      AAA_1301_INFORMATION,
      AAA_1301_SIZE_INFORMATION,
      OHPRINTME_OPM_100777M_INFORMATION,
      OHPRINTME_OPM_100777M_SIZE_INFORMATION,
      DELIVERY,
      CONCEPT: {
        title: '음식과 귀여운 건 최고!',
        descriptions: [
          '음식에 대한 여러가지 생각을 담은 일러스트들입니다.<br/>'+
          '다이어트를 하는 사람부터 음식을 사랑하는 모든 사람들에게 필요한 굿즈 시리즈'
        ],
        className: 'bg-white col-1',
        children: [
          {
            image: 'oif-25-day-photo-01',
          }
        ]
      },

      CONTENT_STICKER: {
        title: '런 브레드, 치팅데이, 러브브레드',
        descriptions: [
          '노트북, 다이어리, 노트 등 붙이는 순간 일상을 빵과 함께 할 수 있어요.<br/><br/>'+
          '(낱장스티커 3종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-25-day-photo-02',
          }
        ]
      },

      CONTENT_CARD: {
        title: '25일 엽서',
        descriptions: [
          '음식에 대한 작가의 생각을 담았어요.<br/>'+
          '썸남썸녀에게, 다이어트를 하는 친구에게 귀엽게 건내보세요.<br/><br/>'+
          '(카드 3종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-25-day-photo-03',
          }
        ]
      },

      CONTENT_APPAREL: {
        title: '치팅데이, 런 브레드',
        descriptions: [
          '보기만해도 미소가 지어지는 작가 고유의 시그니쳐가 담긴 티셔츠예요.<br/><br/>'+
          '(라운드 반팔 2종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-25-day-photo-04',
          }
        ]
      },

      CONTENT_ECOBAG: {
        title: '빵가방',
        descriptions: [
          '사랑하는 빵을 사러갈 때 쓰는 빵 전용 에코백입니다.<br/>'+
          '빵집에서 셀럽이 되어보세요.<br/><br/>'+
          '(에코백)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-25-day-photo-05',
          }
        ]
      }
    }
  },
  SERVICE: {
    keyVisualImage : '/images/store/fair/keyVisual/oif-25-day-kv@2x.jpg',
    attentions: [
      '<dt>[일러스트레이터] 25일</dt>'+
      '<dd>애증의 관계인 음식과 유머를 좋아하는 사람</dd>'+
      '<dd>'+
        '음식을 좋아한다는 건 다이어트와 직접적으로 이어져 있어요.<Br/>'+
        '그래서 저나 많은 사람들이 음식과 다이어트 사이에서 행복과 고통을 번갈아 느끼고 있죠.<Br/>'+
        '그런 애증의 마음을 담아 최대한 유머로 풀어서 그림을 그리고 있습니다.<Br/>'+
      '</dd>'
    ],
    services:[
      'TITLE',
      'CONCEPT',
      'CONTENT_STICKER',
      'CONTENT_CARD',
      'CONTENT_APPAREL',
      'CONTENT_ECOBAG',
      'MANAGEMENT_TITLE',
      'AAA_1301_INFORMATION',
      'AAA_1301_SIZE_INFORMATION',
      'OHPRINTME_OPM_100777M_INFORMATION',
      'OHPRINTME_OPM_100777M_SIZE_INFORMATION',
      'LAUNDRY_CARE',
      'DELIVERY'
    ]
  },
}
