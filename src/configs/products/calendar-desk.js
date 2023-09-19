export const CALENDAR_DESK = {
  COMMON: {
    option: {
      CALENDAR_DESK_HORIZONTAL:{
        thumbnail: 'detail-calendar-shape-width',
        title: '가로'
      },

      CALENDAR_DESK_VERTICAL:{
        thumbnail: 'detail-calendar-shape-column',
        title: '세로'
      },


      CALENDAR_DESK_L_HORIZONTAL:{
        thumbnail: 'detail-calendar-size-width-large',
        title: 'L',
        description: '가장 일반적으로 홍보용에<br/>사용되는 사이즈입니다.',
        attentions: [
          '내지 : 260mm x 160 mm',
          '삼각대 : 30mm'
        ]
      },

      CALENDAR_DESK_M_HORIZONTAL:{
        thumbnail: 'detail-calendar-size-width-medium',
        title: 'M',
        description: '데스크에 올려놓고 쓰기<br/>적당한 크기의 사이즈입니다.',
        attentions: [
          '내지 : 208mm x 148 mm',
          '삼각대 : 30mm'
        ]
      },


      CALENDAR_DESK_M_VERTICAL:{
        thumbnail: 'detail-calendar-size-column-medium',
        title: 'M',
        description: '데스크에 올려놓고 쓰기<br/>적당한 크기의 사이즈입니다.',
        attentions: [
          '내지 : 148mm x 208mm',
          '삼각대 : 30mm'
        ]
      },

      CALENDAR_DESK_S_VERTICAL:{
        thumbnail: 'detail-calendar-size-column-small',
        title: 'S',
        description: '한 손에 들어오는 귀엽고<br/>컴팩트한 사이즈입니다.',
        attentions: [
          '내지 : 88mm x 113mm',
          '삼각대 : 20mm'
        ]
      },

      SOFT:{
        thumbnail: 'detail-calendar-paper-standard',
        title: '스탠다드',
        description: '선명도가 우수한 무광택 용지로<br/>가격대비 높은 완성도를<br/>경험할 수 있어요.',
        attentions: [
          '용지 무게 : 250gsm'
        ]
      },

      SUPERFINE324:{
        thumbnail: 'detail-calendar-paper-premium',
        title: '프리미엄',
        description: '고급스러운 질감과 색표현을 가진<br/>도톰한 두께의 프리미엄 용지 입니다.',
        attentions: [
          '용지 무게 : 324gsm'
        ]
      },

      CALENDAR_GOLD:{
        thumbnail: 'detail-calendar-park-gold',
        title: '금박',
        description: '금빛으로 반짝거리는 박 후가공으로<br/>고급스러움을 연출해 보세요.'
      },

      CALENDAR_SILVER:{
        thumbnail: 'detail-calendar-park-silver',
        title: '은박',
        description: '은빛으로 반짝거리는 박 후가공으로<br/>고급스러움을 연출해 보세요.'
      },

      NONE:{
        thumbnail: 'detail-calendar-park-none',
        title: '선택 안함',
        description: '박 후가공을 진행하지 않습니다.'
      }

    },
    variations: [
      {
        attributes: ['CALENDAR_DESK_HORIZONTAL', 'CALENDAR_DESK_L_HORIZONTAL', 'SOFT', 'NONE'],
        image: 'calendar-width-l-standard-none'
      },
      {
        attributes: ['CALENDAR_DESK_HORIZONTAL', 'CALENDAR_DESK_L_HORIZONTAL', 'SOFT', 'CALENDAR_GOLD'],
        image: 'calendar-width-l-standard-gold'
      },
      {
        attributes: ['CALENDAR_DESK_HORIZONTAL', 'CALENDAR_DESK_L_HORIZONTAL', 'SOFT', 'CALENDAR_SILVER'],
        image: 'calendar-width-l-standard-silver'
      },

      {
        attributes: ['CALENDAR_DESK_HORIZONTAL', 'CALENDAR_DESK_L_HORIZONTAL', 'SUPERFINE324', 'NONE'],
        image: 'calendar-width-l-premium-none'
      },
      {
        attributes: ['CALENDAR_DESK_HORIZONTAL', 'CALENDAR_DESK_L_HORIZONTAL', 'SUPERFINE324', 'CALENDAR_GOLD'],
        image: 'calendar-width-l-premium-gold'
      },
      {
        attributes: ['CALENDAR_DESK_HORIZONTAL', 'CALENDAR_DESK_L_HORIZONTAL', 'SUPERFINE324', 'CALENDAR_SILVER'],
        image: 'calendar-width-l-premium-silver'
      },


      {
        attributes: ['CALENDAR_DESK_HORIZONTAL', 'CALENDAR_DESK_M_HORIZONTAL', 'SOFT', 'NONE'],
        image: 'calendar-width-m-standard-none'
      },
      {
        attributes: ['CALENDAR_DESK_HORIZONTAL', 'CALENDAR_DESK_M_HORIZONTAL', 'SOFT', 'CALENDAR_GOLD'],
        image: 'calendar-width-m-standard-gold'
      },
      {
        attributes: ['CALENDAR_DESK_HORIZONTAL', 'CALENDAR_DESK_M_HORIZONTAL', 'SOFT', 'CALENDAR_SILVER'],
        image: 'calendar-width-m-standard-silver'
      },

      {
        attributes: ['CALENDAR_DESK_HORIZONTAL', 'CALENDAR_DESK_M_HORIZONTAL', 'SUPERFINE324', 'NONE'],
        image: 'calendar-width-m-premium-none'
      },
      {
        attributes: ['CALENDAR_DESK_HORIZONTAL', 'CALENDAR_DESK_M_HORIZONTAL', 'SUPERFINE324', 'CALENDAR_GOLD'],
        image: 'calendar-width-m-premium-gold'
      },
      {
        attributes: ['CALENDAR_DESK_HORIZONTAL', 'CALENDAR_DESK_M_HORIZONTAL', 'SUPERFINE324', 'CALENDAR_SILVER'],
        image: 'calendar-width-m-premium-silver'
      },


      {
        attributes: ['CALENDAR_DESK_VERTICAL', 'CALENDAR_DESK_M_VERTICAL', 'SOFT', 'NONE'],
        image: 'calendar-column-m-standard-none'
      },
      {
        attributes: ['CALENDAR_DESK_VERTICAL', 'CALENDAR_DESK_M_VERTICAL', 'SOFT', 'CALENDAR_GOLD'],
        image: 'calendar-column-m-standard-gold'
      },
      {
        attributes: ['CALENDAR_DESK_VERTICAL', 'CALENDAR_DESK_M_VERTICAL', 'SOFT', 'CALENDAR_SILVER'],
        image: 'calendar-column-m-standard-silver'
      },

      {
        attributes: ['CALENDAR_DESK_VERTICAL', 'CALENDAR_DESK_M_VERTICAL', 'SUPERFINE324', 'NONE'],
        image: 'calendar-column-m-premium-none'
      },
      {
        attributes: ['CALENDAR_DESK_VERTICAL', 'CALENDAR_DESK_M_VERTICAL', 'SUPERFINE324', 'CALENDAR_GOLD'],
        image: 'calendar-column-m-premium-gold'
      },
      {
        attributes: ['CALENDAR_DESK_VERTICAL', 'CALENDAR_DESK_M_VERTICAL', 'SUPERFINE324', 'CALENDAR_SILVER'],
        image: 'calendar-column-m-premium-silver'
      },

      //
      {
        attributes: ['CALENDAR_DESK_VERTICAL', 'CALENDAR_DESK_S_VERTICAL', 'SOFT', 'NONE'],
        image: 'calendar-column-s-standard-none'
      },
      {
        attributes: ['CALENDAR_DESK_VERTICAL', 'CALENDAR_DESK_S_VERTICAL', 'SOFT', 'CALENDAR_GOLD'],
        image: 'calendar-column-s-standard-gold'
      },
      {
        attributes: ['CALENDAR_DESK_VERTICAL', 'CALENDAR_DESK_S_VERTICAL', 'SOFT', 'CALENDAR_SILVER'],
        image: 'calendar-column-s-standard-silver'
      },

      {
        attributes: ['CALENDAR_DESK_VERTICAL', 'CALENDAR_DESK_S_VERTICAL', 'SUPERFINE324', 'NONE'],
        image: 'calendar-column-s-premium-none'
      },
      {
        attributes: ['CALENDAR_DESK_VERTICAL', 'CALENDAR_DESK_S_VERTICAL', 'SUPERFINE324', 'CALENDAR_GOLD'],
        image: 'calendar-column-s-premium-gold'
      },
      {
        attributes: ['CALENDAR_DESK_VERTICAL', 'CALENDAR_DESK_S_VERTICAL', 'SUPERFINE324', 'CALENDAR_SILVER'],
        image: 'calendar-column-s-premium-silver'
      }
    ],
    showcases: {
      CALENDAR_TITLE: {
        title: '특별히 엄선된 용지를 확인해 보세요.',
        className: 'bg-white vertical-border'
      },

      STANDARD_PAPER:{
        deco: 'num-01-5030',
        title: '스탠다드 용지',
        descriptions: [
          '부드러운 촉감의 무광택지로 최적의 인쇄 효과를 얻을 수 있어요.<br/>'+
          '용지 무게 : 250gsm'
        ],
        className: 'bg-white col-2',
        children: [
          {
            image: 'calendar-info-standard-01',
            attentions: [
              '차분한 느낌의 용지로 부드러운 표면감을 가지고 있어요.',
              '인쇄 후 잉크가 있는 부위는 은은한 광택을 느낄 수 있어요.'
            ]
          },
          {
            image: 'calendar-info-standard-02',
            attentions: [
              '대중적으로 많이 사용되는 용지로 어떤 디자인에도 잘 어울려요.'
            ]
          }
        ]
      },


      PREMIUM_PAPER:{
        deco: 'num-02-5030',
        title: '프리미엄 용지',
        descriptions: [
          '고급 펄프를 사용한 도톰한 두께의 용지로 제작물의 보존성과 내구성이 우수해요.<br/>'+
          '용지 무게 : 324gsm'
        ],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'calendar-info-premium-01',
            attentions: [
              '순백색의 고급 켄트지로 맑고 깨끗함을 느낄 수 있어요.',
              '고급 펄프를 사용하여 강도와 탄성이 뛰어나요.'
            ]
          },
          {
            image: 'calendar-info-premium-02',
            attentions: [
              '깊이 있는 인쇄감으로 작품의 완성도를 높여줘요.',
              '잉크 뭉침이 거의 없고 보존성 및 내구성이 우수해요.'
            ]
          }
        ]
      },

      NEW_TEXTURE: {
        title: '용지의 질감을 확인해 보세요.',
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'calendar-info-texture-01',
            title: '스탠다드'
          },
          {
            image: 'calendar-info-texture-02',
            title: '프리미엄'
          }
        ]
      },

      NEW_GSM: {
        title: '용지 두께를 확인해 보세요.',
        descriptions: [
          '보통 평량(gsm)이 클수록 용지의 무게가 더 나가는 것으로, <br/>' +
          '용지 특성에 따라 두께나 탄성은 다를 수 있어요.<br/>' +
          '(용지 50매를 쌓은 높이예요.)'
        ],
        className: 'bg-white col-3 centerItemTwo border-top',
        children: [
          {
            image: 'gsm-standard-230',
            title: '스탠다드',
            roundDescription: '250gsm'
          },
          {
            image: 'gsm-premium-324',
            title: '프리미엄',
            roundDescription: '324gsm'
          }
        ]
      },

      SPECIAL: {
        title: '삼각대 박 후가공으로 특별함을 더하세요.',
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'calendar-info-park-01',
            title: '금박'
          },
          {
            image: 'calendar-info-park-02',
            title: '은박'
          }
        ]
      },

      CALENDAR_ATTENTION: {
        className: 'bg-white border-top wallet-attention fanMarginTop50',
        children: [
          {
            title: '박 후가공 유의사항',
            attentions: [
              '박과 박 사이 간격이 좁을 경우 뭉침 현상이 생길 수 있습니다.',
              '아주 작은 폰트나 가는 선은 번져보이거나 뜯김 현상이 있을 수 있습니다.',
              '박 후가공이 불가능한 디자인 파일의 경우 작업자가 판단하여 별도로 연락 드릴 수 있습니다.'
            ]
          }
        ]
      },

      CALENDAR_TITLE_SPECIAL: {
        title: '오프린트미 캘린더의 특별함을 만나보세요.',
        className: 'bg-gray vertical-border'
      },

      SILVER_TWIN_RING:{
        deco: 'num-01-5030',
        title: '세련됨이 돋보이는 실버 트윈링',
        className: 'bg-gray col-2',
        children: [
          {
            image: 'calendar-info-ring-01',
            attentions: [
              '누구든지 한 장 한 장 부드럽게 넘길 수 있어요.'
            ]
          },
          {
            image: 'calendar-info-ring-02',
            attentions: [
              '튼튼하고 세련된 실버 트윈링으로 고급스러움을 느낄 수 있어요.'
            ]
          }
        ]
      },

      TRIPOD_STAND:{
        deco: 'num-02-5030',
        title: '안정감 있는 고급스러운 삼각 받침대',
        className: 'bg-gray col-2 border-top',
        children: [
          {
            image: 'calendar-info-tripod-01',
            attentions: [
              '진한 무채색의 원단 느낌의 패턴으로 고급스러움이 돋보여요.',
              '삼각대에 깔끔한 금박, 은박 후가공으로 홍보 할 수 있어요.',
              '금박, 은박은 무광으로 제공됩니다.'
            ]
          },
          {
            image: 'calendar-info-tripod-02',
            attentions: [
              '내구성이 뛰어나고 견고하여 안정감 있게 사용 가능해요.'
            ]
          }
        ]
      },


      CALENDAR_SIZE_STAND:{
        deco: 'num-03-5030',
        title: '캘린더 사이즈에 딱! 맞춤 봉투 ',
        className: 'bg-gray col-2 border-top',
        children: [
          {
            image: 'calendar-info-envelope-01',
            attentions: [
              '사이즈별 달력을 넣을 수 있는 맞춤 봉투도 추가로 구매할 수 있어요.'
            ]
          },
          {
            image: 'calendar-info-envelope-02',
            attentions: [
              '깔끔한 봉투 포장으로 선물 및 홍보 시 사용하기 좋아요.'
            ]
          }
        ]
      },

      VARIOUS_SIZES: {
        title: '다양한 사이즈를 확인하세요.',
        className: 'bg-white col-4',
        children: [
          {
            image: 'calendar-size-01',
            title: '가로 L',
            descriptions: [
              '내지 : 260 x 160(mm) / 삼각대 : 30(mm)<br/>전체 : 260 x 190(mm)'
            ]
          },
          {
            image: 'calendar-size-02',
            title: '가로 M',
            descriptions: [
              '내지 : 208 x 148(mm) / 삼각대 : 30(mm)<br/>전체 : 208mm x 178(mm)'
            ]
          },
          {
            image: 'calendar-size-03',
            title: '세로 M',
            descriptions: [
              '내지 : 148 x 208(mm) / 삼각대 : 30(mm)<br/>전체 : 148 x 238(mm)'
            ]
          },
          {
            image: 'calendar-size-04',
            title: '세로 S',
            descriptions: [
              '내지 : 88 x 113(mm) / 삼각대 : 20(mm)<br/>전체 : 88 x 133(mm)'
            ]
          }
        ]
      },

    },
    guide:{
      contents:{
        PDF_GUIDE:{
          title: 'PDF 작업 유의사항',
          className: 'bg-white col-2 border-top',
          descriptions:[
            '(내 디자인 업로드 가이드)',
            '반드시 <em class="blue">상단 작업가이드(템플릿) 파일을 다운</em>받아 작업을 진행해 주세요.<br/>'+
            '만약 기존 파일이 있다면 <em class="blue">아래 파일 구성과 유의사항을 확인</em> 후 업로드해 주세요.'
          ],
          children: [
            {
              image: 'calendar-pdf-01',
              title:"캘린더 표지/내지 파일",
              descriptions: [
                '<em class="blue">표지 1페이지와 내지 24페이지(12달의 앞면, 뒷면)</em>로 구성된 <em class="blue">총 25페이지</em>로 만들어주세요.<br/>' +
                '(대지 사이즈와 순서를 변경하지 마세요.)'
              ]
            },
            {
              image: 'calendar-pdf-02',
              title:"삼각대 박 후가공 파일",
              descriptions: [
                '가이드 사이즈에 맞는 <em class="blue">1페이지</em>를 만들어주세요.<br/>'+
                '(박 후가공 디자인은 <em class="blue">M100컬러</em>의 벡터형식으로 작업해 주세요.)'
              ]
            }
          ]
        },
        BTN_GUIDE:{
          descriptions: ['작업 시 파일 설정 및 저장 등의 상세 가이드를 확인해 보세요.'],
          className: 'bg-white btn paddingTopNone',
          customBtn:[
            {
              title : "AI Guide",
              img: "down-il-714",
              path : "Upload/front/productGuide",
              file : "MD_AcrylicKeyring_Freesize_Designsample_44x42_AI.zip",
              borderColor : "#ffb21e",
              color: "#ffa800"
            },
            {
              title : "INDD Guide",
              img: "down-indd-714",
              path : "Upload/front/productGuide",
              file : "MD_AcrylicKeyring_Freesize_Designsample_44x42_AI.zip",
              borderColor : "#ae527e",
              color: "#ae527e"
            }
          ],
        },
        SPRING_SPACE:{
          title: '스프링 영역 디자인 유의사항',
          descriptions:[
            '스프링 영역을 고려하여 디자인을 배치해 주세요.<br/>'+
            '<em class="blue">상단 12mm의 스프링 영역</em>에 디자인을 배치 시 디자인의 일부가 유실될 수 있습니다.'
          ],
          className: 'bg-white col-2 thin border-top',
          children: [
            {
              image: 'calendar-notify-03',
              descriptions: [
                '<dl>' +
                  '<dd>' +
                    '<span class="icon icon-wrong-1818"/>' +
                  '</dd>' +
                  '<dd>' +
                    '상단 텍스트가 유실됨' +
                  '</dd>' +
                '</dl>'
              ]
            },
            {
              image: 'calendar-notify-04',
              descriptions: [
                '<dl>' +
                  '<dd>' +
                    '<span class="icon icon-right-1818"/>' +
                  '</dd>' +
                  '<dd>' +
                  '이상 없음' +
                  '</dd>' +
                '</dl>'
              ]
            }
          ]
        },

      },
      services: [
        'PDF_GUIDE',
        /*'BTN_GUIDE',*/
        'SPRING_SPACE'

      ]
    }
  },
  CONTENTS: {
    DEFAULTS: {
      title: '캘린더',
      attentions: [
        '열두달의 특별함을 채워보세요.',
        '홍보용부터 개인 소장 및 선물 등으로 사용할 수 있어요.'
      ],
      services: [
        'CALENDAR_TITLE',
        'STANDARD_PAPER',
        'PREMIUM_PAPER',
        'NEW_TEXTURE',
        'NEW_GSM',
        'SPECIAL',
        'CALENDAR_ATTENTION',
        'CALENDAR_TITLE_SPECIAL',
        'SILVER_TWIN_RING',
        'TRIPOD_STAND',
        'CALENDAR_SIZE_STAND',
        'VARIOUS_SIZES'

      ]
    }
  }
};
