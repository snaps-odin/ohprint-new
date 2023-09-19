

export const GRAPHIC_DECAL = {
  COMMON: {
    option: {},
    variations: [],
    showcases: {
      GRAPHIC_INTRO:{
        title: '허전한 벽, 투명한 유리창에 붙여<br/>눈에 띄게 홍보할 수 있는 그래픽 데칼 스티커에요.',
        className: 'bg-white col-2',
        children: [
          {
            image: 'graphic-decal-img-01',
            attentions: [ '멀리서 봐도 눈에 띌 수 있도록 건물 외벽에 부착해 홍보하세요.' ]
          },
          {
            image: 'graphic-decal-img-02',
            attentions: [ '간판 또는 현판에 붙여 우리 매장/가게의 컨셉을 표현해 보세요.' ]
          },
          {
            image: 'graphic-decal-img-03',
            attentions: [ '차량에 부착해 어디서나 눈에 띄는 움직이는 광고물을 만들어 보세요.' ]
          },
          {
            image: 'graphic-decal-img-04',
            attentions: [ '우리 브랜드의 캐릭터 또는 로고를 붙여 고객과 소통하는 인테리어를 완성해요.' ]
          }
        ]
      },
      GRAPHIC_DETAIL:{
        title: '오프린트미 그래픽 데칼 스티커만의<br/>장점을 살펴보세요.',
        descriptions: [],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'graphic-decal-img-05',
            attentions: [ '내구성과 접착력이 우수해 옥외면 부착 시 쉽게 떨어지지 않아요.' ]
          },
          {
            image: 'graphic-decal-img-06',
            attentions: [ '쨍한 색감부터 부드러운 파스텔톤까지 다양한 그래픽, 컬러 구현이 가능해요.' ]
          }
        ]
      },
      GRAPHIC_DETAIL_PAPER:{
        title: '담고 싶은 디자인에 맞게<br/>용지를 선택해 보세요.',
        descriptions: ['매트한 무광지와 주목도를 높이는 유광지 중 선택할 수 있으며<br/>무광지/유광지 모두 화이트 배경지를 사용하여 제작해요.'],
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'graphic-decal-img-07-v2',
            attentions: [ '무광지는 차분하고 고급스러운 디자인과 잘 어울려요.' ]
          },
          {
            image: 'graphic-decal-img-08-v2',
            attentions: [ '유광지는 유니크하고 비비드한 색감의 디자인과 잘 어울려요.' ]
          }
        ]
      },
      GRAPHIC_DELIVERY: {
        title: '누구나 쉽고 빠르게 시공할 수 있도록 발송해드려요.',
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'decal-guide-01',
            attentions: [ '더욱 쉽게 부착할 수 있도록 단단한 프리미엄 보조 시트지를 무료로 부착해드려요.' ]
          },
          {
            image: 'decal-guide-02',
            attentions: [ '글씨 누락 또는 찢김이 발생하지 않도록 컷팅 후 필요 없는 여백을 제거해드려 완성도 있게<br/>붙일 수 있어요.' ]
          }
        ]
      },
      GRAPHIC_README: {
        title: '잠깐, 시공 전에 꼭 읽어주세요!',
        className: 'bg-white col-3 border-top',
        children: [
          {
            title: '01',
            image: 'decal-caution-01',
            descriptions: [ '시공 전, 데칼 스티커의 이형지를<br/>보조 시트지에서 분리해주세요.' ]
          },
          {
            title: '02',
            image: 'decal-caution-02',
            descriptions: [ '시공 면에 데칼 스티커를 부착하고<br/>밀대를 이용하여 단단히 밀착시켜주세요.' ]
          },
          {
            title: '03',
            image: 'decal-caution-03',
            descriptions: [
              '데칼 스티커가 완전히 밀착되면<br/>천천히 보조 시트지를 제거해주세요.',
              '*스티커가 함께 떨어지면 보조 시트지를 다시 덮어<br/>재차 밀착시킨 후 떼어내세요.'
            ]
          }
        ]
      }
    },
    guide:{
      contents:{
        DECAL_GUID : {
          title: '내 디자인 업로드<br/><em class="blue">그래픽 데칼 스티커</em> 가이드',
          descriptions : ['그래픽 데칼 스티커 PDF 작업가이드'],
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'decal-pdf-guide-01',
              descriptions: [
                '<em class="blue">‘print’</em> 레이어를 선택하고 원하는 디자인을 작업해 주세요.'
              ]
            },
            {
              image: 'decal-pdf-guide-02',
              descriptions: [
                '<em class="blue">‘cut’</em> 레이어를 선택하고 <em class="blue">0.5pt 두께의 M100 색상</em>으로 칼선을 만들어 주세요.\n' +
                '<em class="blue">* 백터 외곽선 (vector stroke)으로 작업</em>'
              ]
            },
            {
              image: 'decal-pdf-guide-03',
              descriptions: [
                '<em class="blue">Eye 마크</em> 활성화 및 <em class="blue">레이어 순서</em>는 가이드 파일 그대로 변경이 없이 작업해야 하며,' +
                '모든 작업이 끝나면 <em class="blue">File > Save As</em> 를 선택하여 저장을 진행해 주세요.'
              ]
            },
            {
              image: 'decal-pdf-guide-04',
              descriptions: [
                'Format 항목을 <em class="blue">PDF</em>로 선택한 후, Adobe PDF Preset은\n<em class="blue">[Illustrator Default]</em> 표시된 3개의 옵션 항목을 체크해 주세요.'
              ]
            }
          ]
        },
        CUT_LINE : {
          title: '칼선 디자인 유의사항',
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'decal-cutting-caution-img-01',
              descriptions: [
                '아래의 제한 개수를 초과하는 복잡한 칼선은 공정상 컷팅 제작이 어려워요.\n' +
                '<em class="blue">* A5 : 1,750pts / A4 : 3,500pts / A3 : 5,500pts / A2 : 8,000pts\n' +
                '150x150 : 1,500pts / 250x250 : 3,500pts / 350x350 : 5,500pts / 450x450 : 7,000pts</em>'
              ]
            },
            {
              image: 'decal-cutting-caution-img-02',
              descriptions: [
                '제한 개수를 초과 하는 경우 <em class="blue">선 단순화(Simplify)</em> 메뉴를 사용하여 개수를 줄일 수 있어요. \n' +
                '<em class="blue">* 칼선 전체 선택 → Object(오브젝트) → Path(패스) → Simplify(단순화)</em>'
              ]
            },
            {
              image: 'decal-cutting-caution-img-03',
              descriptions: [
                '<div class="icon-middle"><span class="icon icon-wrong-1818"></span><span>이미지와 칼선 크기가 같으면 한쪽으로 흰색 선이 생길 수 있어요.</span></div>'
              ]
            },
            {
              image: 'decal-cutting-caution-img-04',
              descriptions: [
                '<div class="icon-middle"><span class="icon icon-right-1818"></span><span>여백이 없는 스티커 제작 시 스티커 재단 시 발생 할 수 있는 오차를 고려하여 \n' +
                '사방 2mm 안쪽으로 칼선을 작업해 주세요.</span></div>'
              ]
            },

            {
              image: 'decal-cutting-caution-img-05',
              descriptions: [
                '<span>배경이 없는 png 이미지를 사용하여도, 오브젝트 외곽에만 칼선을 생성한 경우,\n화이트 배경지 위에 디자인이 그대로 출력되어 칼선따라 컷팅돼요.</span>'
              ]
            },
            {
              image: 'decal-cutting-caution-img-06',
              descriptions: [
                '<span>내 디자인만이 남겨지도록 배경지 전체 제거가 필요한 경우,\n모든 오브젝트에 벡터로 된 칼선을 필수로 생성해 주세요.</span>'
              ]
            },
          ]
        }
      },
      services: [
        'DECAL_GUID',
        'CUT_LINE'
      ]
    }
  },
  CONTENTS: {
    DEFAULTS: {
      title: '그래픽 데칼 스티커',
      attentions: [
        '우리 매장/가게/행사의 컨셉을 눈에 띄게 표현할 수 있는 스티커로 홍보하세요.'
      ],
      services: [
        'GRAPHIC_INTRO',
        'GRAPHIC_DETAIL',
        'GRAPHIC_DETAIL_PAPER',
        'GRAPHIC_DELIVERY',
        'GRAPHIC_README'
      ]
    }

  }
};
