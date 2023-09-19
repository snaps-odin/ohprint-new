export const ENVELOPE = {
	COMMON: {
		option: {
      MOJO120: {
        thumbnail: 'detail-envelope-paper-standard',
        title: '스탠다드',
        description: '경제적이고 대중적인 용지로<br/>'+
        '내추럴한 느낌을 가지고 있어요.',
        attentions: [
          '용지 무게 : 120gsm'
        ]
      },

      LEATHACK110: {
        thumbnail: 'detail-envelope-paper-leathack-line',
        title: '레자크 (줄)',
        description:
          '줄무늬 엠보싱 패턴으로 천에<br/>'+
          '인쇄 한듯한 느낌을 주는 용지입니다.',
        attentions: [
          '용지 무게 : 110gsm'
        ]
      },

      NONE: {
        thumbnail: 'detail-envelope-stick-none',
        title: '선택 안함'
      },

      DOUBLE_SIDE_TAPE: {
        thumbnail: 'detail-envelope-stick-on',
        title: '양면 테이프',
        description:
          '봉투 뚜껑 부분에<br/>'+
          '양면 테이프가 붙여 나갑니다.'
      },

      ENVELOPE_NORMAL: {
        thumbnail: 'detail-envelope-shape-standard',
        title: '일반형',
        description:
          '가장 일반적인 봉투 형태로<br/>'+
          '옆면 으로 열고 닫을 수 있어요.'
      },

      ENVELOPE_JACKET: {
        thumbnail: 'detail-envelope-shape-jacket',
        title: '자켓형',
        description:
          '상단 부분에 뚜껑이 있는 형태로<br/>'+
          '안내장, 서류 등을 넣기 좋아요.'
      },

      ENVELOPE_GUIDE: {
        thumbnail: 'detail-envelope-shape-info',
        title: '안내형',
        description:
          '상단 부분에 삼각형 형태의 뚜껑이<br/>'+
          '있는 형태입니다. 안내장과 초대장을<br/>'+
          '넣을 때 사용해요.'
      },

      ENVELOPE_NORMAL_L: {
        thumbnail: 'detail-envelope-standard-size-big',
        title: '대봉투',
        attentions: [
          '330mm x 243mm'
        ]
      },

      ENVELOPE_NORMAL_M: {
        thumbnail: 'detail-envelope-standard-size-medium',
        title: '중봉투',
        attentions: [
          '260mm x 190mm'
        ]
      },

      ENVELOPE_NORMAL_S: {
        thumbnail: 'detail-envelope-standard-size-small',
        title: '소봉투',
        attentions: [
          '220mm x 105mm'
        ]
      },

      ENVELOPE_NORMAL_CHL: {
        thumbnail: 'detail-envelope-standard-size-calendar-row-l',
        title: '캘린더 가로L',
        attentions: [
          '293mm x 265mm'
        ]
      },

      ENVELOPE_NORMAL_CHM: {
        thumbnail: 'detail-envelope-standard-size-calendar-row-m',
        title: '캘린더 가로M',
        attentions: [
          '241mm x 253mm'
        ]
      },

      ENVELOPE_NORMAL_CVM: {
        thumbnail: 'detail-envelope-standard-size-calendar-col-m',
        title: '캘린더 세로M',
        attentions: [
          '181mm x 313mm'
        ]
      },

      ENVELOPE_NORMAL_CVS: {
        thumbnail: 'detail-envelope-standard-size-calendar-col-s',
        title: '캘린더 세로S',
        attentions: [
          '121mm x 198mm'
        ]
      },

      ENVELOPE_JACKET_S: {
        thumbnail: 'detail-envelope-jacket-size-small',
        title: '소봉투',
        attentions: [
          '220mm x 105mm'
        ]
      },

      ENVELOPE_GUIDE_5X7: {
        thumbnail: 'detail-envelope-info-size-57',
        title: '5 x 7',
        attentions: [
          '182mm x 131mm'
        ]
      },

      ENVELOPE_GUIDE_4X6: {
        thumbnail: 'detail-envelope-info-size-46',
        title: '4 x 6',
        attentions: [
          '156mm x 106mm'
        ]
      },

      ENVELOPE_GUIDE_COUPON: {
        thumbnail: 'detail-envelope-info-size-coupon',
        title: '쿠폰',
        attentions: [
          '158mm x 80mm'
        ]
      },

      ENVELOPE_GUIDE_MINI: {
        thumbnail: 'detail-envelope-info-size-mini',
        title: '미니',
        attentions: [
          '107mm x 80mm'
        ]
      },



		},
		variations: [
		  //일반형 대봉투 스탠다드 스탠다드&레자크(줄) 선택안함&양면테이프
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_L", "MOJO120", "NONE"],
        image: 'envelope-standard-big-standard'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_L", "MOJO120", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-standard-big-standard'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_L", "LEATHACK110", "NONE"],
        image: 'envelope-standard-big-line'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_L", "LEATHACK110", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-standard-big-line'
      },

      //일반형 중봉투 스탠다드 스탠다드&레자크(줄) 선택안함&양면테이프
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_M", "MOJO120", "NONE"],
        image: 'envelope-standard-medium-standard'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_M", "MOJO120", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-standard-medium-standard'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_M", "LEATHACK110", "NONE"],
        image: 'envelope-standard-medium-line'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_M", "LEATHACK110", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-standard-medium-line'
      },

      //일반형 소봉투 스탠다드 스탠다드&레자크(줄) 선택안함&양면테이프
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_S", "MOJO120", "NONE"],
        image: 'envelope-standard-small-standard'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_S", "MOJO120", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-standard-small-standard'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_S", "LEATHACK110", "NONE"],
        image: 'envelope-standard-small-line'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_S", "LEATHACK110", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-standard-small-line'
      },

      //일반형 캘린더가로L 스탠다드 스탠다드&레자크(줄) 선택안함&양면테이프
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_CHL", "MOJO120", "NONE"],
        image: 'envelope-standard-calendar-row-l-standard'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_CHL", "MOJO120", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-standard-calendar-row-l-standard'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_CHL", "LEATHACK110", "NONE"],
        image: 'envelope-standard-calendar-row-l-line'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_CHL", "LEATHACK110", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-standard-calendar-row-l-line'
      },

      //일반형 캘린더가로M 스탠다드 스탠다드&레자크(줄) 선택안함&양면테이프
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_CHM", "MOJO120", "NONE"],
        image: 'envelope-standard-calendar-row-m-standard'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_CHM", "MOJO120", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-standard-calendar-row-m-standard'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_CHM", "LEATHACK110", "NONE"],
        image: 'envelope-standard-calendar-row-m-line'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_CHM", "LEATHACK110", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-standard-calendar-row-m-line'
      },

      //일반형 캘린더세로M 스탠다드 스탠다드&레자크(줄) 선택안함&양면테이프
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_CVM", "MOJO120", "NONE"],
        image: 'envelope-standard-calendar-col-m-standard'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_CVM", "MOJO120", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-standard-calendar-col-m-standard'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_CVM", "LEATHACK110", "NONE"],
        image: 'envelope-standard-calendar-col-m-line'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_CVM", "LEATHACK110", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-standard-calendar-col-m-line'
      },

      //일반형 캘린더세로S 스탠다드 스탠다드&레자크(줄) 선택안함&양면테이프
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_CVS", "MOJO120", "NONE"],
        image: 'envelope-standard-calendar-col-s-standard'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_CVS", "MOJO120", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-standard-calendar-col-s-standard'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_CVS", "LEATHACK110", "NONE"],
        image: 'envelope-standard-calendar-col-s-line'
      },
      {
        attributes: ["ENVELOPE_NORMAL", "ENVELOPE_NORMAL_CVS", "LEATHACK110", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-standard-calendar-col-s-line'
      },

      //자켓형 소퐁투 스탠다드&레자크(줄) 선택안함&양면테이프
      {
        attributes: ["ENVELOPE_JACKET", "ENVELOPE_JACKET_S", "MOJO120", "NONE"],
        image: 'envelope-jacket-small-standard'
      },
      {
        attributes: ["ENVELOPE_JACKET", "ENVELOPE_JACKET_S", "MOJO120", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-jacket-small-standard'
      },
      {
        attributes: ["ENVELOPE_JACKET", "ENVELOPE_JACKET_S", "LEATHACK110", "NONE"],
        image: 'envelope-jacket-small-line'
      },
      {
        attributes: ["ENVELOPE_JACKET", "ENVELOPE_JACKET_S", "LEATHACK110", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-jacket-small-line'
      },

      //안내형 5x7 스탠다드&레자크(줄) 선택안함&양면테이프
      {
        attributes: ["ENVELOPE_GUIDE", "ENVELOPE_GUIDE_5X7", "MOJO120", "NONE"],
        image: 'envelope-info-57-standard'
      },
      {
        attributes: ["ENVELOPE_GUIDE", "ENVELOPE_GUIDE_5X7", "MOJO120", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-info-57-standard'
      },
      {
        attributes: ["ENVELOPE_GUIDE", "ENVELOPE_GUIDE_5X7", "LEATHACK110", "NONE"],
        image: 'envelope-info-57-line'
      },
      {
        attributes: ["ENVELOPE_GUIDE", "ENVELOPE_GUIDE_5X7", "LEATHACK110", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-info-57-line'
      },

      //안내형 4x6 스탠다드&레자크(줄) 선택안함&양면테이프
      {
        attributes: ["ENVELOPE_GUIDE", "ENVELOPE_GUIDE_4X6", "MOJO120", "NONE"],
        image: 'envelope-info-46-standard'
      },
      {
        attributes: ["ENVELOPE_GUIDE", "ENVELOPE_GUIDE_4X6", "MOJO120", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-info-46-standard'
      },
      {
        attributes: ["ENVELOPE_GUIDE", "ENVELOPE_GUIDE_4X6", "LEATHACK110", "NONE"],
        image: 'envelope-info-46-line'
      },
      {
        attributes: ["ENVELOPE_GUIDE", "ENVELOPE_GUIDE_4X6", "LEATHACK110", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-info-46-line'
      },

      //안내형 쿠폰 스탠다드&레자크(줄) 선택안함&양면테이프
      {
        attributes: ["ENVELOPE_GUIDE", "ENVELOPE_GUIDE_COUPON", "MOJO120", "NONE"],
        image: 'envelope-info-coupon-standard'
      },
      {
        attributes: ["ENVELOPE_GUIDE", "ENVELOPE_GUIDE_COUPON", "MOJO120", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-info-coupon-standard'
      },
      {
        attributes: ["ENVELOPE_GUIDE", "ENVELOPE_GUIDE_COUPON", "LEATHACK110", "NONE"],
        image: 'envelope-info-coupon-line'
      },
      {
        attributes: ["ENVELOPE_GUIDE", "ENVELOPE_GUIDE_COUPON", "LEATHACK110", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-info-coupon-line'
      },

      //안내형 미니 스탠다드&레자크(줄) 선택안함&양면테이프
      {
        attributes: ["ENVELOPE_GUIDE", "ENVELOPE_GUIDE_MINI", "MOJO120", "NONE"],
        image: 'envelope-info-mini-standard'
      },
      {
        attributes: ["ENVELOPE_GUIDE", "ENVELOPE_GUIDE_MINI", "MOJO120", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-info-mini-standard'
      },
      {
        attributes: ["ENVELOPE_GUIDE", "ENVELOPE_GUIDE_MINI", "LEATHACK110", "NONE"],
        image: 'envelope-info-mini-line'
      },
      {
        attributes: ["ENVELOPE_GUIDE", "ENVELOPE_GUIDE_MINI", "LEATHACK110", "DOUBLE_SIDE_TAPE"],
        image: 'envelope-info-mini-line'
      },

		],

		showcases: {
      PAPER_TITLE: {
        title: '다양한 용지를 확인하세요.',
        className: 'bg-white vertical-border'
      },
      STANDARD_PAPER:{
        deco: 'num-01-5030',
        title: '스탠다드 용지',
        descriptions: [ '대중적인 용지로, 일반 복사용지와 비슷한 느낌의 용지에요.<br/>용지 무게 : 120gsm' ],
        className: 'bg-white col-2',
        children: [
          {
            image: 'envelope-info-standard-01',
            attentions: [
              '종이 본연의 텍스처로 자연스러움을 느낄 수 있는 용지에요.',
              '일반 복사용지와 비슷한 재질이에요.'
            ]
          },
          {
            image: 'envelope-info-standard-02',
            attentions: [
              '연필로 필기가 가능해요.',
              '경제적이고, 대중적으로 많이 사용하는 용지에요.'
            ]
          }
        ]
      },
      LEATHACK_PAPER:{
        deco: 'num-02-5030',
        title: '레자크(줄) 용지',
        descriptions: [ '줄무늬 엠보싱이 돋보이는 용지로 기업 봉투에 많이 사용돼요.<br/>용지 무게 : 110gsm' ],
        className: 'bg-white col-2 border-top border-bottom',
        children: [
          {
            image: 'envelope-info-leathack-line-01',
            attentions: [
              '스트라이프 패턴을 가진 고급용지에요.'
            ]
          },
          {
            image: 'envelope-info-leathack-line-02',
            attentions: [
              '특유의 질감으로 인쇄 후, 마치 천에 인쇄된 느낌을 줄 수 있어요.',
              '기업 봉투 제작 시 많이 사용해요.'
            ]
          }
        ]
      },

      PAPER_COLOR_TEXTURE:{
        title: '용지의 고유 색상 및 질감을 확인해 보세요.',
        descriptions: [ '인쇄 수량별(소량/대량) 색상의 차이가 있을 수 있습니다.' ],
        className: 'bg-white col-4 centerItemTwo  border-bottom',
        children: [
          {
            image: 'envelope-info-texture-standard',
            title: '스탠다드'
          },
          {
            image: 'envelope-info-texture-leathack-line',
            title: '레자크 (줄)'
          }
        ]
      },

      GSM: {
        title: '용지 두께를 확인해 보세요.',
        descriptions: [ '50장의 봉투를 쌓은 높이에요.' ],
        className: 'bg-white col-4 centerItemTwo  border-bottom',
        children: [
          {
            image: 'gsm-standard-120',
            title: '스탠다드',
            roundDescription: '120gsm'
          },
          {
            image: 'gsm-leathack-line-110',
            title: '레자크 (줄)',
            roundDescription: '110gsm'
          }
        ]
      },

      ENVELOPE_SIZE: {
        title: '필요한 사이즈를 확인하세요.',
        descriptions: [ '공정상 1~2mm 차이가 있을 수 있어요.' ],
        className: 'bg-white col-1 border-bottom',
        children: [
          {
            image: 'envelope-size'
          }
        ]
      },

      DOUBLE_SIDED_TAPE:{
        title: '양면 테이프',
        className: 'bg-white col-2',
        children: [
          {
            image: 'envelope-info-option-stick-on',
            attentions: [
              '<em class="blue">[마감 옵션]</em> > <em class="blue">[양면 테이프 선택 시]</em> 봉투 뚜껑 부분에 양면 테이프가 붙여 나갑니다.',
              '안내형 봉투는 양면 테이프 후가공이 불가능해요.'
            ]
          },
          {
            image: 'envelope-info-option-stick-none',
            attentions: [
              '[마감 옵션] > [선택 안함]'
            ]
          }
        ]
      }


		},
    guide:{
      contents:{

        NOTES_ON_EDITING:{
          title: '편집 유의사항',
          className: 'bg-gray col-2',
          children: [
            {
              image: 'envelope-notice-0101',
              attentions: [
                '중요한 로고나 문자 등 은 편집 사이즈 안쪽으로 배열해주세요.'
              ]
            },
            {
              image: 'envelope-notice-0102',
              attentions: [
                '<em class="blue">뚜껑 인쇄 방향</em> 및 <em class="blue">가장자리 흰 여백</em>을 <em class="blue">[미리보기] > [뒷면]</em>를 통해 확인해주세요.'
              ]
            }
          ]
        },

        NOTES_ON_THE_PROCESS:{
          title: '공정과정 유의사항',
          descriptions: [ '공정과정 중 하나이기 때문에 환불 혹은 재작업 해당되지 않는 사유입니다.' ],
          className: 'bg-gray col-3 border-top',
          children: [
            {
              image: 'envelope-notice-0201',
              title: '접히는 부분 (터짐 현상)',
              descriptions: [
                '접히는 부분으로 인해 용지가 터질 수 있으므로<br/>'+
                '가장자리 부분의 디자인은 가능하면 접히는 부분은 피해주세요.'
              ]
            },
            {
              image: 'envelope-notice-0202',
              title: '가장자리 디자인 (흰 여백)',
              descriptions: [
                '접히는 부분으로 인해 가장자리의 공간에<br/>'+
                '흰 여백이 보일 수 있어요.'
              ]
            },
            {
              image: 'envelope-notice-0203',
              title: '밀림주의',
              descriptions: [
                '인쇄 공정상 접히는 부분의 디자인이 1~2mm 밀려<br/>'+
                '뒷면의 가장자리에 부분에 인쇄 될 수 있습니다.'
              ]
            }
          ]
        },

        ADDRESS_PRINTING_SERVICE:{
          title: '주소 인쇄 서비스',
          descriptions: [
            '봉투에 주소 정보 등을 인쇄할 수 있어요.'
          ],
          className: 'bg-white col-2',
          children: [
            {
              image: 'envelope-excel-0101',
              attentions: [
                '<em class="blue">[편집기 좌측 메뉴]</em> > <em class="blue">[가변 데이터]</em> > <em class="blue">[직접 업로드]</em>에 엑셀 파일 가이드 확인 후 양식에 맞춰 파일을 업로드 해주세요.'
              ]
            },
            {
              image: 'envelope-excel-0102',
              attentions: [
                '가변 데이터를 이용하여 <em class="blue">수량에 따라 보내는 사람 데이터를 각각 다르게 출력</em> 할 수 있어요. '
              ]
            }
          ]
        },

        BTN_GUIDE:{
          title: '엑셀 파일 가이드',
          descriptions: ['가이드에 맞춰 엑셀파일을 업로드해 주세요.'],
          className: 'bg-white btn vertical-border border-top',
          customBtn:[
            {
              title : "엑셀 파일 다운",
              img: "down-excel-714",
              path : "Upload/front/productGuide",
              file : "OHPRINTME_DATA_USER_UPLOAD.xls" ,
              borderColor : "#227447",
              color: "#227447"
            }
          ],
        },

        EXCEL_WRITE: {
          title: '주소 정보 데이터 작성하기',
          className: 'bg-white col-2 excel',
          children: [
            {
              image: 'envelope-excel-0201',
              descriptions: [
                '액셀 파일에 있는 <em class="blue">[첫번째 시트]</em>에 작성해주세요. 다른 시트의 내용은 적용되지 않아요.<br/>'+
                '최대 여섯가지 <em class="blue">[회사명, 주소, 상세주소, 부서명, 이름, 우편번호]</em> 항목의 정보를 입력할 수 있어요.'
              ]
            },
            {
              image: 'envelope-excel-0202',
              descriptions: [
                '가변 데이터가 <em class="blue">해당하는 항목에 자동으로 입력</em>되어요.',"&nbsp;","&nbsp;"
              ]
            },
            {
              image: 'envelope-excel-0203',
              descriptions: [
                '액셀 파일 시트에 각각의 항목에 다른 데이터를 입력 할 수 있어요.<br/>'+
                '입력한 데이터의 중 <em class="blue">가장 긴 데이터(2행)가</em> 편집화면에 보여요.'
              ]
            },
            {
              image: 'envelope-excel-0204',
              descriptions: [
                '편집화면에서는 <em class="blue">가장 긴 데이터(2행)가</em> 화면에 보여주며,<br/>출력시에는 액셀 파일 시트에 있는 <em class="blue">가변 데이터 행마다 개별로</em> 제작돼요.'
              ]
            },
            {
              image: 'envelope-excel-0205',
              descriptions: [
                '액셀 파일 시트에 입력할 내용이 부분적으로 없을 경우 <em class="red">데이터 미입력</em> 해도 돼요.'
              ]
            },
            {
              image: 'envelope-excel-0206',
              descriptions: [
                '편집기에서는 엑셀 파일 시트에 가장 긴 데이터만 보이지만,<br/><em class="red">출력시 미입력 데이터를 제외하여 출력이 돼요.</em>'
              ]
            },
            {
              image: 'envelope-excel-0207',
              descriptions: [
                '액셀 파일 시트에 입력할 내용이 없을 경우 <em class="red">데이터 미입력</em> 해도 돼요.'
              ]
            },
            {
              image: 'envelope-excel-0208',
              descriptions: [
                '수량이 100매인 경우에 <em class="red">액셀 파일 시트 데이터 미입력 경우(1, 99, 100번째 봉투)</em>에는<br/><em class="red">가변 데이터가 입력이 안된 상태</em>로 100매가 출력이 돼요.'
              ]
            },
          ]
        },

        FREE:{
          title: '일반 텍스트와 동일하게 폰트 크기, 색상 변경 등<br/>' +
            '자유롭게 꾸며보세요.',
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'envelope-excel-0301',
              attentions: [
                '폰트 종류, 크기, 위치 조절 등 편집이 가능해요.'
              ]
            },
            {
              image: 'envelope-excel-0302',
              attentions: [
                '다양한 색상이 지원되어 원하는 색상을 자유롭게 선택할 수 있어요.'
              ]
            }
          ]
        },

      },
      services: [
        'NOTES_ON_EDITING',
        'NOTES_ON_THE_PROCESS',
        'ADDRESS_PRINTING_SERVICE',
        'BTN_GUIDE',
        'EXCEL_WRITE',
        'FREE'
      ]
    }


//centerItemTwo
	},
	CONTENTS: {
		DEFAULTS: {
			title: '봉투',
			attentions: [
				'쿠폰, 청접장 등의 봉투를 원하는 디자인으로 만들 수 있어요'
			],
			services: [
			  'PAPER_TITLE',
        'STANDARD_PAPER',
        'LEATHACK_PAPER',
        'PAPER_COLOR_TEXTURE',
        'GSM',
        'ENVELOPE_SIZE',
        'DOUBLE_SIDED_TAPE'
			]
		}
	},
  THUMBNAIL_PREVIEW_POSITION : {
    ENVELOPE_GUIDE : {
      ENVELOPE_GUIDE_5X7: {
        HORIZONTAL: {
          width:'312px',
          height:'225.86px',
          margin:'45.9% 13.8%',
          x: '-312px',
          y: '0px'
        },
        VERTICAL: {//197 59
          width:'312px',
          height:'225.86px',
          margin:'45.9% 13.8%',
          x: '-312px',
          y: '0px'
        }
      },
      ENVELOPE_GUIDE_4X6: {
        HORIZONTAL: {
          width:'318px',
          height:'216px',
          margin:'47.1% 13.1%',
          x: '-318px',
          y: '0px'
        },
        VERTICAL: {//202 56
          width:'318px',
          height:'216px',
          margin:'47.1% 13.1%',
          x: '-318px',
          y: '0px'
        }
      },
      ENVELOPE_GUIDE_COUPON: {
        HORIZONTAL: {
          width:'344px',
          height:'175.21px',
          margin:'52% 10%',
          x: '-344px',
          y: '0px'
        },
        VERTICAL: {//223 43
          width:'344px',
          height:'175.21px',
          margin:'52% 10%',
          x: '-344px',
          y: '0px'
        }
      },
      ENVELOPE_GUIDE_MINI: {
        HORIZONTAL: {
          width:'260px',
          height:'194.75px',
          margin:'49.6% 19.8%',
          x: '-260px',
          y: '0px'
        },
        VERTICAL: {//213 85
          width:'260px',
          height:'194.75px',
          margin:'49.6% 19.8%',
          x: '-260px',
          y: '0px'
        }
      },
    },
    ENVELOPE_JACKET : {
      ENVELOPE_JACKET_S: {
        HORIZONTAL: {
          width:'376px',
          height:'180.77px',
          margin:'51.4% 6.65%',
          x: '-376px',
          y: '0px'
        },
        VERTICAL: { //220 27
          width:'376px',
          height:'180.77px',
          margin:'51.4% 6.65%',
          x: '-376px',
          y: '0px'
        }
      },
    },
    ENVELOPE_NORMAL : {
      ENVELOPE_NORMAL_L : {
        HORIZONTAL : {
          width:'322px',
          height:'237.18px',
          margin:'44.8% 12.6% 44.6%',
          x : '-322px',
          y : '0px'
        },
        VERTICAL : {
          width:'238px',
          height:'323.12px',
          margin:'34.8% 22.3% 34.7%',
          x : '-238px',
          y : '0px'
        }
      },
      ENVELOPE_NORMAL_M : {
        HORIZONTAL : {
          width:'314px',
          height:'229px',
          margin:'45.6% 13.7% 45.4%',
          x : '-314px',
          y : '0px'
        },
        VERTICAL : {//153//100
          width:'230px',
          height:'314px',
          margin:'35.7% 23.3%',
          x : '-230px',
          y : '0px'
        }
      },
      ENVELOPE_NORMAL_S : {
        HORIZONTAL : {
          width:'362px',
          height:'173px',
          margin:'52.1% 8.1%',
          x : '-362px',
          y : '0px'
        },
        VERTICAL : {//129//128
          width:'174px',
          height:'363.31px',
          margin:'29.9% 29.6%',
          x : '-173px',
          y : '2px'
        }
      },
      ENVELOPE_NORMAL_CHL : {//161 50
        HORIZONTAL : {
          width:'330px',
          height:'298.62px',
          margin:'37.5% 11.7%',
          x : '-330px',
          y : '0px'
        },
        VERTICAL : {
          width:'330px',
          height:'298.62px',
          margin:'37.5% 11.7%',
          x : '-330px',
          y : '0px'
        }
      },
      ENVELOPE_NORMAL_CHM : {//151 63
        HORIZONTAL : {
          width:'304px',
          height:'318.88px',
          margin:'35.2% 14.7%',
          x : '-304px',
          y : '0px'
        },
        VERTICAL : {
          width:'304px',
          height:'318.88px',
          margin:'35.2% 14.7%',
          x : '-304px',
          y : '0px'
        }
      },
      ENVELOPE_NORMAL_CVM : {// 105 96
        HORIZONTAL : {
          width:'238px',
          height:'411.65px',
          margin:'24.5% 22.4%',
          x : '-238px',
          y : '0px'
        },
        VERTICAL : {
          width:'238px',
          height:'411.65px',
          margin:'24.5% 22.4%',
          x : '-238px',
          y : '0px'
        }
      },
      ENVELOPE_NORMAL_CVS : {
        HORIZONTAL : {
          width:'206px',
          height:'337.35px',
          margin:'33.1% 26.1%',
          x : '-206px',
          y : '0px'
        },
        VERTICAL : {//142 112
          width:'206px',
          height:'337.35px',
          margin:'33.1% 26.1%',
          x : '-206px',
          y : '0px'
        }
      },
    }
  }
};
