import {
  TITLE,
  OHPRINTME_OPM_100219_INFORMATION,
  OHPRINTME_OPM_100219_SIZE_INFORMATION,
  PRINTSTAR_085_CVT_INFORMATION,
  PRINTSTAR_085_CVT_SIZE_INFORMATION,
  MANAGEMENT_TITLE,
  OHPRINTME_OPM_100777S_INFORMATION,
  OHPRINTME_OPM_100777S_SIZE_INFORMATION,
  LAUNDRY_CARE,
  DELIVERY
} from './common';

export const CRTR001 = {
  COMMON : {
    showcases : {
      OHPRINTME_OPM_100219_INFORMATION,
      OHPRINTME_OPM_100219_SIZE_INFORMATION,
      PRINTSTAR_085_CVT_INFORMATION,
      PRINTSTAR_085_CVT_SIZE_INFORMATION,
      OHPRINTME_OPM_100777S_INFORMATION,
      OHPRINTME_OPM_100777S_SIZE_INFORMATION,
      MANAGEMENT_TITLE,
      TITLE,
      LAUNDRY_CARE,
      DELIVERY,

      CONCEPT: {
        title: '고양이와 양말',
        descriptions: [
          '고양이와 어울릴것같은, 혹은 떠오르는 오브젝트를 엮어서 작업을 하곤해요. 이번에는 양말과 고양이를 엮어서 작업을 해봤어요.<br/>'+
          '저희집 고양이는 체취가 묻어있는 양말을 유독 좋아하거든요. 양말을 하나씩 물고 가있는 모습이 마치 해리포터에 나오는 도비가 연상되기도 해서 귀엽게 작업해본 작품이에요.'
        ],
        className: 'bg-white col-1',
        children: [
          {
            image: 'oif-singsing-photo-01',
          }
        ]
      },

      CONTENT_DIY: {
        title: '양말과 고양이, 나만의 고양이',
        descriptions: [
          '알록달록 고양이 스티커로 일상 곳곳을 고양이와 함께해보세요.<br/><br/>'+
          '(DIY 스티커 2종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-singsing-photo-02',
          }
        ]
      },

      CONTENT_CARD: {
        title: '양말과 고양이',
        descriptions: [
          '고양이를 좋아하는 집사에게  살며시 건내 보세요.<br/>'+
          '고양이에 대한 이야기로 웃음꽃이 가득 필거예요.<br/><br/>'+
          '(카드)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-singsing-photo-03',
          }
        ]
      },

      CONTENT_APPAREL: {
        title: '양말을 주세요, 딸기는 최고다',
        descriptions: [
          '포근함을 두 배로 만드는 고양이 티셔츠로 봄을 준비해보세요.<br/><br/>'+
          '(어패럴 4종 – 베이직맨투맨 2종, 라운드반팔 2종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-singsing-photo-04',
          }
        ]
      },

      CONTENT_ECOBAG: {
        title: '양말을 주세요, 딸기는 최고다',
        descriptions: [
          '귀여운 고양이와 함께 외출 해보세요.<br/>'+
          '도시락 가방으로 활용하기 좋은 사이즈예요.<br/><br/>'+
          '(에코백 2종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-singsing-photo-05',
          }
        ]
      }
    }

  },
  SERVICE: {
    keyVisualImage : '/images/store/fair/keyVisual/oif-singsing-kv@2x.jpg',
    attentions: [
      '<dt>[작가] 싕싕</dt>'+
      '<dd>고양이들과 살아가며 그들과의 일상과 상상을 그립니다.</dd>'+
      '<dd>'+
        '누구나 마음속에 애틋하게 바라보는 대상이 하나씩은 있듯 저에겐 그 대상이 길 고양이 입니다.<br/>'+
        '그리고 제가 느끼는 이 감정들과 시선을 제가 그리는 그림들에 오롯이 담아내고 싶었어요.'+
      '</dd>'
    ],
    services:[
      'TITLE',
      'CONCEPT',
      'CONTENT_DIY',
      'CONTENT_CARD',
      'CONTENT_APPAREL',
      'CONTENT_ECOBAG',
      'MANAGEMENT_TITLE',
      'PRINTSTAR_085_CVT_INFORMATION',
      'PRINTSTAR_085_CVT_SIZE_INFORMATION',
      'OHPRINTME_OPM_100219_INFORMATION',
      'OHPRINTME_OPM_100219_SIZE_INFORMATION',
      'OHPRINTME_OPM_100777S_INFORMATION',
      'OHPRINTME_OPM_100777S_SIZE_INFORMATION',
      'LAUNDRY_CARE',
      'DELIVERY'
    ]
  }



};
