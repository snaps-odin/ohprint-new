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

export const CRTR004 = {
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
        title: '보고만 있어도 위로와 힐링이 느껴지는 그림들을 담았어요.',
        descriptions: [
          '사랑스러운 아이들, 귀여운 동물들, 그리고 따뜻한 문구들. 일상의 한 부분이 작게나마 힐링 되기를 바라는 마음으로 준비했어요.<br/>'+
          '누군가의 방 한 쪽에, 선물에, 다이어리 속에, 어떤 날의 코디 안에도 작은 행복이 스며들기를 바랍니다. '
        ],
        className: 'bg-white col-1',
        children: [
          {
            image: 'oif-yeonpicture-photo-01',
          }
        ]
      },

      CONTENT_STICKER: {
        title: '러블리 동물 친구들',
        descriptions: [
          '강아지, 고양이, 동물과 함께한 아이들로<br/>' +
          '일상의 곳곳에 귀여움을 붙여보세요. <br/><br/>'+
          '(DIY 스티커 2종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-yeonpicture-photo-02',
          }
        ]
      },

      CONTENT_ECOBAG: {
        title: '사랑하는 나의 반려 동물',
        descriptions: [
          '내추럴 컬러의 에코백에 반려동물과 함께한 따뜻한 순간을 담았어요.<br/>'+
          '넉넉한 수납 공간이 있어 데일리백으로 추천해요.<br/><br/>'+
          '(에코백 2종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-yeonpicture-photo-03',
          }
        ]
      },


      CONTENT_CARD: {
        title: '따뜻한 마음을 전해요, 나를 위로하는 방법',
        descriptions: [
          '축하할 때, 사랑을 말하고 싶을 때, 위로하고 싶을 때,<br/>'+
          '손수 적은 카드로 감동을 전해보세요.<br/><br/>'+
          '(카드 4종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-yeonpicture-photo-05',
          }
        ]
      }
    }
  },
  SERVICE: {
    keyVisualImage : '/images/store/fair/keyVisual/oif-yeonpicture-kv@2x.jpg',
    attentions: [
      '<dt>[일러스트레이터] 연그림</dt>'+
      '<dd>몽글몽글한 이야기로 세상을 따뜻하게 만드는 사람</dd>'+
      '<dd>'+
      '어렵고 힘든 세상 속에 남아 있는 따뜻한 순간들을 그림 이야기로 기록해요.<br/>'+
      '지친 삶 속에서 잊어버린 벅차 오르는 행복의 감정을 또는 눈물이 핑 도는 뭉클한 기분을 안겨줌으로써<br/>'+
      '사람들에게 위로를 전하고 싶어요.'+
      '</dd>'
    ],
    services:[
      'TITLE',
      'CONCEPT',
      'CONTENT_STICKER',
      'CONTENT_ECOBAG',
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
