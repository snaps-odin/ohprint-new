import {
  TITLE,
  MANAGEMENT_TITLE,
  AMERICAN_APPAREL_2001W_INFORMATION,
  AMERICAN_APPAREL_2001W_SIZE_INFORMATION,
  OHPRINTME_OPM_100777L_INFORMATION,
  OHPRINTME_OPM_100777L_SIZE_INFORMATION,
  LAUNDRY_CARE,
  DELIVERY
} from './common';

export const CRTR002 = {
  COMMON : {
    showcases : {
      TITLE,
      MANAGEMENT_TITLE,
      LAUNDRY_CARE,
      DELIVERY,
      AMERICAN_APPAREL_2001W_INFORMATION,
      AMERICAN_APPAREL_2001W_SIZE_INFORMATION,
      OHPRINTME_OPM_100777L_INFORMATION,
      OHPRINTME_OPM_100777L_SIZE_INFORMATION,

      CONCEPT: {
        title: '세계 곳곳에서 경험한 여행의 추억과<br/>' +
          ' 행복을 나타내는 작가의 시그니쳐 이미지',
        descriptions: [
          '가만히 들여다보면 여기저기 어디에나 크고 작은 반짝반짝한 행복들이 숨어있어요.인생은 어쩌면 행복을 찾아 떠나는 여정이지만,<br/>'+
          '정작 그 행복은 언제나 우리 곁에 있는게 아닐까요. 일상안에서, 자그마한 위트와 행복들을 더해드릴게요.'
        ],
        className: 'bg-white col-1',
        children: [
          {
            image: 'oif-kimuk-photo-01',
          }
        ]
      },

      CONTENT_STICKER: {
        title: '웃 그리고 꽃과 하트, im ok,<br/>' +
          'index ok, DIY 입은 그림 스티커',
        descriptions: [
          '어디든 붙이면 분위기 UP! <br/>' +
          '그날의 기분에 따라 마음껏 붙여보세요.<br/><br/>'+
          '(스티커  4종 – 낱장스티커 2종, DIY스티커 2종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-kimuk-photo-02',
          }
        ]
      },

      CONTENT_APPAREL: {
        title: 'OK-T',
        descriptions: [
          '보기만해도 미소가 지어지는 작가 고유의 시그니쳐가 담긴 티셔츠예요.<br/><br/>'+
          '(라운드 반팔 2종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-kimuk-photo-03',
          }
        ]
      },

      CONTENT_ECOBAG: {
        title: 'OK-Back',
        descriptions: [
          '함박 웃음을 짓는 귀여운 에코백이예요.<br/>' +
          '어깨에 매면 기분이 좋아져요.<br/><br/>'+
          '(에코백)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-kimuk-photo-04',
          }
        ]
      },

      CONTENT_POSTER: {
        title: 'OK-Poster, 세계지도',
        descriptions: [
          '보기만 해도 행복해지는 포스터와 언제나 우리를 설레게 하는<br/>'+
          '세계지도를 붙여 공간의 분위기를  환하게 바꿔보세요.<br/><br/>'+
          '(포스터 2종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-kimuk-photo-05',
          }
        ]
      },

      CONTENT_LATTER: {
        title: '세계 지도 엽서, 한반도지도 엽서',
        descriptions: [
          '받는 순간 설렘 가득! 여행 가고 싶은 사람,<br/>'+
          '여행 다녀온 사람에게 건네면 좋은 카드예요.<br/><br/>'+
          '(엽서 2종)'
        ],
        className: 'bg-white col-1 border-top',
        children: [
          {
            image: 'oif-kimuk-photo-06',
          }
        ]
      }
    }

  },
  SERVICE: {
      keyVisualImage : '/images/store/fair/keyVisual/oif-kimuk-kv@2x.jpg',
      attentions: [
        '<dt>[일러스트레이터] 김웃</dt>'+
        '<dd>그림과 애니메이션으로 행복 에너지를 전파하는 스토리텔러</dd>'+
        '<dd>'+
          '저는 행복은 어디에든 있다고 생각해요. 일상 속 어디에서든 찾을 수 있죠.<br/>'+
          '저에게 행복을 주는 여행과 문화 그리고 가장 잘 할 수 있는 그림이나<br/>'+
          '애니메이션으로 표현하는 직업을 가진 저는 ‘덕업일치’를 이룬 행복한 사람입니다.'+
        '</dd>'
      ],
      services:[
        'TITLE',
        'CONCEPT',
        'CONTENT_STICKER',
        'CONTENT_APPAREL',
        'CONTENT_ECOBAG',
        'CONTENT_POSTER',
        'CONTENT_LATTER',
        'MANAGEMENT_TITLE',
        'AMERICAN_APPAREL_2001W_INFORMATION',
        'AMERICAN_APPAREL_2001W_SIZE_INFORMATION',
        'OHPRINTME_OPM_100777L_INFORMATION',
        'OHPRINTME_OPM_100777L_SIZE_INFORMATION',
        'LAUNDRY_CARE',
        'DELIVERY'
      ]
    },
}
