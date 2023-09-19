export const CAUTION_BACKGROUND = {
  children: [
    {
      attentions: [
        '<em class="blue">[배경이 없는 이미지의 경우]</em> 이미지의 모양대로 티셔츠에 인쇄됩니다.',
        '배경 인쇄를 원하지 않으면 <em class="blue">배경 레이어를 삭제하거나 색을 투명하게</em> 설정하고 <em class="blue">PDF 또는 PNG 파일</em>로 저장해 주세요. (JPG 불가)'
      ],
      image: "apparel-bg-caution-01"
    },
    {
      attentions: [
        '<em class="blue">[이미지에 배경이 있는 경우]</em> 배경 영역까지 포함하여 사각형 이미지로 인쇄됩니다.',
        '이미지의 배경색이 티셔츠와 같은 색이라도 <em class="blue">원단의 색상과 프린트 색상에는 차이가 있을 수 있습니다.</em>'
      ],
      image: "apparel-bg-caution-02"
    }
  ],
  className: "bg-gray col-2",
  menuIndex: 7,
  title: "배경 사용 유의사항"
};

export const DIGITAL_PLUS_CAUTION_BACKGROUND = {
  title: "디지털 Plus 유의사항",
  className: "bg-gray col-2",
  children: [
    {
      attentions: [
        '1pt 미만의 라인 굵기는 화이트 밀림이 두드러져 보일 수 있어 <em class="blue">1pt 이상의 라인 굵기를 권장해요.</em>',
        '15pt 미만의 폰트 크기나 Light 폰트 굵기는 화이트 밀림이 두드러져 보일 수 있어<br/><em class="blue">15pt 이상의 폰트 크기와 Bold 폰트 굵기를 권장해요.</em>'
      ],
      image: "apparel-bg-caution-03"
    },
    {
      attentions: [
        '새로운 디지털 Plus 인쇄 방식은 화이트 원단 상품에 <em class="blue">화이트(#ffffff) 컬러 인쇄가 가능해요.',
      ],
      image: "apparel-bg-caution-04"
    }
  ],
  menuIndex: 7,
};

export const CAUTION_PRINT = {
  title: "날염 및 특수 열전사 유의사항",
  children: [
    {
      attentions: [
        '디자인 전체가 한가지 색상 및 패턴으로 인쇄돼요. (1도 인쇄)<br/><span class="gray">ex) 날염 인쇄 예시 화면</span>'
      ],
      image: "apparel-print-caution-01"
    },
    {
      attentions: [
        '편집 툴에서 원하는 색상 및 패턴을 변경할 수 있습니다.<br/><span class="gray">ex) 홀로그램 인쇄 예시 화면</span>'
      ],
      image: "apparel-print-caution-02"
    },
    {
      descriptions: [
        '<p><span class="icon icon-wrong-1818"></span> <em>30pt 이하의 작은 글자나, 2mm이하의 선은 제작이 어려워요.</em></p>'
      ],
      image: "apparel-print-caution-03"
    },
    {
      descriptions: [
        '<p><span class="icon icon-right-1818"></span> <em>크고 두꺼운 폰트와 굵은 선이나 면으로 디자인해주세요.</em></p>'
      ],
      image: "apparel-print-caution-04"
    }
  ],
  className: "bg-gray col-2 border-top",
  descriptions: [
    '(날염, 홀로그램, 글리터, 네온 인쇄)'
  ],
};

export const NEW_CAUTION_PRINT = {
  title: "날염 유의사항",
  className: "bg-gray col-2 border-top",
  children: [
    {
      attentions: [
        '디자인 전체가 한가지 색상 및 패턴으로 인쇄돼요. (1도 인쇄)<br/><span class="gray">ex) 날염 인쇄 예시 화면</span>'
      ],
      image: "apparel-print-caution-01"
    },
    {
      attentions: [
        '30pt 이하의 작은 글자나, 2mm이하의 선은 제작이 어려워요.',
        '크고 두꺼운 폰트와 굵은 선이나 면으로 디자인해주세요.'
      ],
      image: "apparel-print-caution-06"
    },
  ],
};

export const CUSTOM_DESIGN = {
  children: [
    {
      descriptions: [
        '내가 가진 <em class="blue">이미지나 무료로 제공되는 클립아트</em>를 이용해 디자인 해보세요.<br/>클립아트의 색상도 변경할 수 있어요. (단색으로만 가능)'
      ],
      image: "apparel-edit-01"
    },
    {
      descriptions: [
        '원하는 <em class="blue">텍스트를 자유롭게 입력</em>하고<br/>스타일을 편집할 수 있어요.'
      ],
      image: "apparel-edit-02"
    },
    {
      descriptions: [
        '<em class="blue">앞면, 뒷면, 소매 각각의 인쇄 영역</em>을 반드시 확인하고 편집하세요.<br/><em class="blue">뒷면과 목뒤는 다른 영역</em>으로 각각 따로 편집해야 해요.'
      ],
      image: "apparel-edit-05"
    },
    {
      descriptions: [
        '네모난 편집 영역을 <em class="blue">벗어난 디자인은 인쇄되지 않으니 주의</em>하세요.'
      ],
      image: "apparel-edit-06"
    }
  ],
  className: "bg-white col-2",
  menuIndex: 8,
  title: "직접 디자인해 보세요."
};

export const NEW_CUSTOM_DESIGN = {
  children: [
    {
      descriptions: [
        '내가 가진 <em class="blue">이미지나 무료로 제공되는 클립아트</em>를 이용해 디자인 해보세요.<br/>클립아트의 색상도 변경할 수 있어요. (단색으로만 가능)'
      ],
      image: "apparel-edit-01"
    },
    {
      descriptions: [
        '원하는 <em class="blue">텍스트를 자유롭게 입력</em>하고<br/>스타일을 편집할 수 있어요.'
      ],
      image: "apparel-edit-02"
    },
    {
      descriptions: [
        '<em class="blue">앞면, 뒷면 각각의 인쇄 영역</em>을 반드시 확인하고 편집하세요.'
      ],
      image: "apparel-edit-05"
    },
    {
      descriptions: [
        '네모난 편집 영역을 <em class="blue">벗어난 디자인은 인쇄되지 않으니 주의</em>하세요.'
      ],
      image: "apparel-edit-06"
    }
  ],
  className: "bg-white col-2",
  menuIndex: 8,
  title: "직접 디자인해 보세요."
};

export const LAUNDRY_CARE = {
  children: [
    {
      deco: "wash-09",
      descriptions: ["단독세탁 권장<br/>(물빠짐, 이염 방지)"]
    },
    {
      deco: "wash-01",
      descriptions: ["찬물 또는 미온수에<br/>뒤집어서 손세탁"]
    },
    {
      deco: "wash-02",
      descriptions: ["세탁망에 뒤집어서<br/>울코스로 세탁"]
    },
    {
      deco: "wash-03",
      descriptions: ["염소표백제 사용 금지<br/>(중성세제/산소표백제 사용)"]
    },
    {
      deco: "wash-04",
      descriptions: ["드라이 크리닝 금지<br/>(프린팅 손상될 수 있음)"]
    },
    {
      deco: "wash-05",
      descriptions: ["손으로 약하게 짜기"]
    },
    {
      deco: "wash-06",
      descriptions: ["잘 펴서 그늘에 건조<br/>(뒤틀림/수축 방지)"]
    },
    {
      deco: "wash-07",
      descriptions: ["건조기 고온건조 금지"]
    },
    {
      deco: "wash-08",
      descriptions: ["천을 대고 약하게 다림질<br/>(프린팅에 직접 다림질 금지)"]
    }
  ],
  className: "col-5 bg-white laundry-care border-bottom",
  menuIndex: 4,
  title: "세탁 및 관리"
};

export const PRINT_AREA = {
  children: [
    {
      image: "apparel-print-area"
    }
  ],
  className: "bg-white col-1 border-top",
  descriptions: [
    "같은 디자인도 작은 사이즈 옷에는 크게, 큰 사이즈 옷에는 작게 보여요. 실제 인쇄되는 면적은 동일합니다.<br/>단, 대부분 수작업으로 이루어지기 때문에 인쇄 위치와 크기에 약간의 오차가 생길 수 있어요."
  ],
  title: "위치별로 인쇄 면적은 동일해요."
};

export const PRINT_DIGITAL_COLOR = {
  children: [
    {
      attentions: [
        '<em class="blue">[흰색 티셔츠]</em>에 인쇄할 경우 <em class="blue">원본 색상에 가깝게 보여요.</em>'
      ],
      image: "apparel-print-digital-03"
    },
    {
      attentions: [
        '<em class="blue">[유색 티셔츠]</em>에 인쇄할 경우 <em class="blue">티셔츠 색상의 영향</em>을 받아 <em class="blue">색상이 조금 다르게 보일 수 있어요.</em>',
        "색을 선명하게 하기 위해 흰색 잉크를 인쇄 후에 제작을 진행 하지만 원본과 동일한 색상으로 보이진 않아요."
      ],
      image: "apparel-print-digital-04"
    }
  ],
  className: "bg-gray col-2 border-top",
  title: "원단 색상에 따라 프린팅 색상이 달라 보여요."
};

export const PRINT_DIGITAL = {
  children: [
    {
      attentions: [
        '<em class="blue">원단에 직접 잉크를 분사하여</em> 인쇄하는 방식으로, 인쇄면과 원단 사이에 <em class="blue">이질감이 없어 자연스러워요.</em>',
        '세탁 후 원단 수축으로 인한 <em class="blue">프린팅 손상이 적어요.</em> 단, 이염 방지를 위해 단독 세탁해주세요.'
      ],
      image: "apparel-print-digital-01"
    },
    {
      attentions: [
        '<em class="blue">복잡하고 섬세한 표현이</em> 필요한 경우 가장 좋은 인쇄 방식 이에요.',
        "인쇄된 부분의 통기성이 좋아, 큰 면적의 디자인 인쇄에 적합해요.",
        "스포츠 의류 같은 기능성 원단 등 일부 소재에는 인쇄할 수 없어요."
      ],
      image: "apparel-print-digital-02"
    }
  ],
  className: "bg-gray col-2",
  deco: "num-01-5030",
  descriptions: [
    "디자인에 제약이 없고 자연스러워 가장 많이 사용하는 방식이에요."
  ],
  title: "디지털 프린팅 인쇄"
};

export const PRINT_DIGITAL_PLUS = {
  children: [
    {
      image: "apparel-digital-pro-img-01"
    },
  ],
  className: "bg-gray",
  deco: "opm-new",
  descriptions: [
    "원본에 가장 가까운 프린팅을 만드는 차세대 인쇄 방식이에요."
  ],
  title: "디지털 Plus"
};

export const PRINT_DIGITAL_PLUS_DESCRIPTION_01 = {
  title: "국내 최초. 새롭게 선보이는 프리미엄 프린팅<br />디지털 Plus를 경험해 보세요",
  descriptions: [
    "원단에 직접 잉크를 분사해 인쇄하는 디지털 프린팅을 업그레이드한 인쇄 방식이에요.<br/>" +
    "디지털 프린팅의 장점인 복잡하고 섬세한 표현이 더욱 세밀해지고 색상은 다채로워졌어요.<br/>" +
    "또, 친환경 잉크를 사용하고 탄소 발생을 줄여 환경을 생각하는 지속 가능한 생산 방식이에요."
  ],
  className: "bg-white desc",
  children: [
    {
      image: "apparel-digital-pro-img-02",
      descriptions: [
        "디지털 Plus는 오프린트미에서 국내 최초로 도입한 Kornit사의 하이엔드 프린트 장비 Atlas MAX POLY로 만들어요.<br/>" +
        "1,200dpi 초고해상도 이미지를 지원하고 거의 모든 색상을 구현해, 새롭고 다양한 영역의 프린팅을 시도할 수 있어요.<br/>" +
        "부드러운 촉감과 한층 업그레이드된 프린트 내구성까지.<br/>" +
        "향상된 프린팅 표현과 품질을 선보이는 디지털 Plus로 멋진 상품을 만들어 보세요."
      ],
    },
  ],
};

export const PRINT_DIGITAL_PLUS_DESCRIPTION_02 = {
  title: "원하는 색상 그대로, 선명하게 구현해요",
  className: "bg-gray col-2 vertical-border",
  descriptions: [
    "디지털 Plus는 더 풍부하고 선명한 색상을 구현하기 위해 향상된 컬러 관리 프로세스와 특수 제작한 잉크를 사용해요.<br/>" +
    "컬러 센서와 AI 알고리즘이 실시간으로 색상 변화를 추적해 컬러 일관성을 유지하고,<br/>" +
    "Kornit사에서 ICC(국제 컬러 협회)의 프로파일에 맞춰 개발한  Neopigment™ Olympia 잉크를 사용해<br/>" +
    "팬톤 색상에 대응하며 거의 모든 컬러를 만들어 낼 수 있어요."
  ],
};

export const PRINT_DIGITAL_PLUS_DESCRIPTION_02_01 = {
  title: "일러스트 이미지 비교",
  className: "bg-gray col-2",
  children: [
    {
      descriptions: [
        '<strong class="blue mb20">디지털 Plus</strong>',
        '<em>그러데이션 표현이 자연스러워요<br />' +
        '<em>여러 색상을 원본 그대로 풍부하게 재현해요.<br />' +
        '<em>색상이 맑고 선명하게 표현돼요.</em>'
      ],
      image: "apparel-digital-pro-img-03",
    },
    {
      descriptions: [
        '<strong class="mb20">일반 디지털 프린팅</strong>',
        '<em>그러데이션에 약간의 계단 현상이 생겨요.<br />' +
        '<em>잉크의 한계로 원본과 다른 색상이 보여요.<br />' +
        '<em>색상이 다소 연하게 표현돼요.</em>'
      ],
      image: "apparel-digital-pro-img-04",
    },
  ],
};

export const PRINT_DIGITAL_PLUS_DESCRIPTION_03 = {
  title: "실물처럼 세밀하게 표현해요",
  className: "bg-white col-2 vertical-border",
  descriptions: [
    "디지털 Plus의 가장 큰 장점은 높은 인쇄 품질이에요. 1,200dpi의 초고해상도 이미지까지 프린팅할 수 있죠.<br/>" +
    "고해상도 이미지를 인쇄할 때 생기는 픽셀 깨짐 현상을 방지하기 위해<br/>" +
    "이미지를 분할 인쇄해 높은 해상도의 출력물도 원본처럼 자연스러워요."
  ],
};

export const PRINT_DIGITAL_PLUS_DESCRIPTION_03_01 = {
  title: "사진 이미지 비교",
  className: "bg-white col-2",
  children: [
    {
      descriptions: [
        '<strong class="blue mb20">디지털 Plus</strong>',
        '<em>아주 세밀한 질감까지 자세하게 표현해요.<br />' +
        '<em>질감에 따른 색상 차이까지 구현해요.<br />' +
        '<em>고해상도 실사 이미지를 자연스럽고 생동감 있게 재현해요.</em>'
      ],
      image: "apparel-digital-pro-img-05",
    },
    {
      descriptions: [
        '<strong class="mb20">일반 디지털 프린팅</strong>',
        '<em>세밀한 질감 표현이 잘되지 않아요.<br />' +
        '<em>질감에 따른 색상 차이가 잘 드러나지 않아요.<br />' +
        '<em>고해상도 이미지 출력 시 픽셀 깨짐 현상이 발생할 수 있어요.</em>'
      ],
      image: "apparel-digital-pro-img-06"
    },
  ],
};

export const PRINT_DIGITAL_PLUS_DESCRIPTION_04 = {
  title: "여러 번 세탁해도 처음 그대로",
  className: "bg-gray col-2 vertical-border",
  descriptions: [
    "디지털 프린팅에서 사용하던 전처리 용액 대신 Kornit사의 Intensfier 기술로 만든 특수 점착제를 사용해요.<br/>" +
    "잉크를 섬유 표면에 고정해 선명한 색상을 오래 유지하게 하죠.<br/>" +
    "여러 번 세탁해도 처음의 광택이나 색상 손상이 적어요."
  ],
};

export const PRINT_DIGITAL_PLUS_DESCRIPTION_04_01 = {
  title: "세탁 7회 후 비교",
  className: "bg-gray col-2",
  children: [
    {
      descriptions: [
        '<strong class="blue mb20">디지털 Plus 세탁 후</strong>',
        '처음의 색상과 광택이 보존돼요.<br/>' +
        '이염이 잘되지 않아요.<br/>' +
        '부드러운 촉감을 느낄 수 있어요.'
      ],
      image: "apparel-digital-pro-img-07",
    },
    {
      descriptions: [
        '<strong class="mb20">일반 디지털 프린팅 세탁 후</strong>',
        '세탁 후 물 빠짐 현상이 두드러져요.<br/>' +
        '이염이 될 수 있어 반드시 단독 세탁해야 해요.<br/>' +
        '다소 뻣뻣한 느낌이 들어요.'
      ],
      image: "apparel-digital-pro-img-08"
    },
  ],
};

export const PRINT_DIGITAL_PLUS_DESCRIPTION_05 = {
  title: "대량 생산도 균일한 품질로 빠르게 가능해요",
  className: "bg-white",
  descriptions: [
    "디지털 Plus는 완성 제품을 팔레트에 끼워 그 위에 인쇄하는 방식이에요.<br>"+
    "일반적인 프린팅 방법보다 더 빠른 속도로 생산할 수 있고,<br>"+
    "이미지 색상, 위치 등을 프로파일링해 여러 개의 상품이라도 처음과 동일하게 만들 수 있어요."
  ],
  children: [
    {
      image: "apparel-digital-pro-img-09",
    },
  ],
};

export const PRINT_DIGITAL_PLUS_DESCRIPTION_06 = {
  title: "더 나은 지구를 위해",
  className: "bg-gray desc",
  descriptions: [
    "물 소비량을 90%, 온실가스 배출량을 80%을 줄인 친환경적인 생산 방식이에요.",
  ],
  children: [
    {
      image: "apparel-digital-pro-img-10",
      descriptions: [
        "디지털 Plus는 지속 가능한 패션을 위한 고민이 담겨있어요.<br/>"+
        "수 많은 재고를 만드는 대량 생산에서 벗어나 필요한 만큼 소량 인쇄가 가능한 온디맨드 생산 방식<br/>"+
        "Eco Passport by Oeko-Tex 인증을 받은 친환경 수용성 잉크와 잉크 리사이클링 시스템,<br/>"+
        "전력 소비를 최소화하고 탄소 배출을 줄이는 프로세스의 개선까지.<br/>"+
        "지구를 생각하는 조금 더 좋은 소비에 동참해 보세요."
      ],
    },
  ],
};

export const PRINT_HEAT_COLOR = {
  children: [
    {
      descriptions: ['<em class="blue">[흰색 티셔츠]</em>에 인쇄한 경우'],
      image: "apparel-print-thermal-03"
    },
    {
      descriptions: ['<em class="blue">[유색 티셔츠]</em>에 인쇄한 경우'],
      image: "apparel-print-thermal-04"
    }
  ],
  className: "bg-white col-2 border-top",
  title: "원단 관계 없이 색상이 동일하게 표현돼요."
};

export const PRINT_HEAT = {
  children: [
    {
      attentions: [
        '<em class="blue">전사지</em>에 디자인을 인쇄하여 원단 위에 올리고 <em class="blue">고온 압착</em> 방식으로 <em class="blue">은은한 코팅감</em>을 느낄 수 있어요.',
        '인쇄면이 <em class="blue">쉽게 떨어지거나 색이 바라지 않지만</em>, 고온 세탁/건조할 경우 원단이 수축되어 인쇄면이 손상될 수 있어요.'
      ],
      image: "apparel-print-thermal-01"
    },
    {
      attentions: [
        '<em class="blue">가독성이 필요한 단순한 디자인</em>에 추천하는 인쇄 방식이에요.',
        "큰 면적의 디자인의 경우, 통풍이 잘 되지 않아 추천하지 않아요.",
        "스포츠 의류 같은 기능성 원단에는 열전사 방식을 사용해요."
      ],
      image: "apparel-print-thermal-02"
    }
  ],
  className: "bg-white col-2",
  deco: "num-02-5030",
  descriptions: ["색감이 선명하고 기능성 원단에도 사용할 수 있어요."],
  title: "열전사 인쇄"
};

export const SHORT_SLEEVES_PRINT_LOCATION = {
  children: [
    {
      descriptions:
        'XS~S, M~XL, 2XL~4XL 사이즈 구간에 따라 <em class="blue">비율에 맞춰 인쇄 면적이 확대, 축소</em>돼요.<br/>(예외로 날염 인쇄는 인쇄 면적이 동일해요.)',
      image: ["apparel-tshirt-print-front", "apparel-tshirt-print-back"]
    },
    {
      descriptions:
        '사이즈 관계없이 <em class="blue">인쇄 면적은 동일</em>해요.',
      image: [
        "apparel-tshirt-print-chest",
        "apparel-tshirt-print-pocket",
        "apparel-tshirt-print-neck",
        "apparel-tshirt-print-arm"
      ]
    }
  ],
  className: "bg-white col-3 border-top",
  templateCode: "PRINT_LOCATION_2X4",
  title: "어디든 인쇄할 수 있어요."
};

export const NEW_SHORT_SLEEVES_PRINT_LOCATION = {
  title: "어디든 인쇄할 수 있어요.",
  className: "bg-white col-3 border-top",
  children: [
    {
      descriptions: ['XS~S, M~XL, 2XL~4XL 사이즈 구간에 따라 <em class="blue">비율에 맞춰 인쇄 면적이 확대, 축소</em>돼요.<br/>(예외로 여성 및 래글런 상품 및 날염 인쇄는 인쇄 면적이 동일해요.)'],
      image: ["apparel-tshirt-print-front", "apparel-tshirt-print-back"]
    },
  ],
  descriptions: ['<em class="blue">반팔티셔츠(성인)</em>'],
  templateCode: "PRINT_LOCATION_2X4",
};

export const NEW_SHORT_SLEEVES_KIDS_PRINT_LOCATION = {
  title: "어디든 인쇄할 수 있어요.",
  className: "bg-white col-3 border-top",
  children: [
    {
      descriptions: ['XS~S, M~XL, 2XL~4XL 사이즈 구간에 따라 <em class="blue">비율에 맞춰 인쇄 면적이 확대, 축소</em>돼요.<br/>(예외로 여성 및 래글런 상품 및 날염 인쇄는 인쇄 면적이 동일해요.)'],
      image: ["apparel-tshirt-print-front", "apparel-tshirt-print-back"]
    },
  ],
  descriptions: ['<em class="blue">반팔티셔츠(유아동)</em>'],
  templateCode: "PRINT_LOCATION_2X4",
};

export const SHORT_SLEEVES_KIDS_PRINT_LOCATION = {
  bottomDescription:
    '110~140, 150 사이즈 구간에 따라 <em class="blue">비율에 맞춰 인쇄 면적이 확대, 축소</em>돼요. <br/>(예외로 날염 인쇄는 인쇄 면적이 동일해요.)',
  children: [
    {
      image: "apparel-tshirt-kid-print-front"
    },
    {
      image: "apparel-tshirt-kid-print-back"
    }
  ],
  className: "bg-gray col-2 border-top",
  descriptions: ['<em class="blue">반팔티셔츠(유아동)</em>'],
  title: "어디든 인쇄할 수 있어요."
};

export const PRINT_NALYEOM = {
  children: [
    {
      attentions: [
        '전통적인 <em class="blue">실크스크린</em> 기법으로 원단에 염료를 직접 올리는 방식이에요.',
        '견뢰도가 높아 쉽게 <em class="blue">벗겨지거나 변색되지 않아요.</em>'
      ],
      image: "apparel-print-nalyum-01"
    },
    {
      attentions: [
        '<em class="blue">한 가지 색상</em>으로 된 로고나 심플한 디자인에 어울려요.',
        '수량이 많을 수록 제작 단가가 낮아져 <em class="blue">대량 제작 시 유리해요.</em>'
      ],
      image: "apparel-print-nalyum-02"
    }
  ],
  className: "bg-gray col-2",
  deco: "num-03-5030",
  descriptions: ["단체 티셔츠에 단일 색상 로고 등을 인쇄할 때 사용해요."],
  title: "날염 인쇄"
};

export const NEW_PRINT_NALYEOM = {
  children: [
    {
      attentions: [
        '전통적인 <em class="blue">실크스크린</em> 기법으로 원단에 염료를 직접 올리는 방식이에요.',
        '견뢰도가 높아 쉽게 <em class="blue">벗겨지거나 변색되지 않아요.</em>'
      ],
      image: "apparel-print-nalyum-01"
    },
    {
      attentions: [
        '<em class="blue">한 가지 색상</em>으로 된 로고나 심플한 디자인에 어울려요.',
        '수량이 많을 수록 제작 단가가 낮아져 <em class="blue">대량 제작 시 유리해요.</em>'
      ],
      image: "apparel-print-nalyum-02"
    }
  ],
  className: "bg-white col-2",
  descriptions: ["단체 티셔츠에 단일 색상 로고 등을 인쇄할 때 사용해요."],
  title: "날염 인쇄"
};

export const PRINT_HOLOGRAM = {
  children: [
    {
      attentions: [
        '홀로그램 필름을 컷팅 하여 원단에 열을 가해 부착하는 방식이에요.',
        '인쇄면이 쉽게 떨어지진 않지만, 잦은 세탁 시 반짝이는 정도와 부착력이 줄어 들 수 있어요.<br><em class="blue">재질 특성상 전사된 필름의 구겨짐 등의 손상이 생길 수 있으니 꼭 뒤집어서 손세탁해 주세요.</em>'
      ],
      image: "apparel-print-hologram-01"
    },
    {
      attentions: [
        '매끈한 느낌의 표면으로 보는 방향에 따라 무지개 빛으로 반짝여요.',
        '어패럴에 전사 시 반짝반짝 화려함과 시원한 느낌을 줄 수 있어요.'
      ],
      image: "apparel-print-hologram-02"
    }
  ],
  className: "bg-white col-2",
  deco: "num-04-5030",
  descriptions: ["빛의 각도에 따라 반짝이는 영롱함을 디자인 해요."],
  title: "홀로그램 전사"
};


export const TRANSCRIPTION_TYPE_01 = {
  children: [
    {
      image: "apparel-info-hologram-spectrum",
      descriptions:[ '스펙트럼' ]
    },
    {
      image: "apparel-info-hologram-sparkle",
      descriptions:[ '스파클' ]
    },
    {
      image: "apparel-info-hologram-crystal",
      descriptions:[ '크리스탈' ]
    }
  ],
  className: "bg-white col-3 border-top",
  descriptions: ["(편집화면에서 선택 할 수 있어요)"],
  title: "전사 종류를 확인해 보세요."
};


export const PRINT_GLITTER = {
  children: [
    {
      attentions: [
        '후면에 핫멜트 처리된 글리터원단을 특정모양으로 컷팅하여 제작하는 방식이에요.',
        '인쇄면이 쉽게 떨어지진 않지만, 잦은 세탁 시 반짝이는 표면이 견뢰도가 줄어 들어요.'
      ],
      image: "apparel-print-glitter-01"
    },
    {
      attentions: [
        '까슬한 모레알 느낌의 반짝이는 가루가 보석처럼 빛나요.',
        '톡톡튀는 반짝임으로 좀 더 특별함을 커스텀해 보세요.'
      ],
      image: "apparel-print-glitter-02"
    }
  ],
  className: "bg-gray col-2",
  deco: "num-05-5030",
  descriptions: ["보석처럼 빛나는 반짝임으로 특별함을 보여줄 수 있어요."],
  title: "글리터 전사"
};


export const TRANSCRIPTION_TYPE_02 = {
  children: [
    {
      image: "apparel-info-glitter-silver",
      descriptions:[ '실버' ]
    },
    {
      image: "apparel-info-glitter-gold",
      descriptions:[ '골드' ]
    },
    {
      image: "apparel-info-glitter-black",
      descriptions:[ '블랙' ]
    },
    {
      image: "apparel-info-glitter-blue",
      descriptions:[ '블루' ]
    },
    {
      image: "apparel-info-glitter-pink",
      descriptions:[ '핑크' ]
    },
  ],
  className: "bg-gray col-3 border-top",
  descriptions: ["(편집화면에서 선택 할 수 있어요)"],
  title: "전사 종류를 확인해 보세요."
};

export const PRINT_NEON = {
  children: [
    {
      attentions: [
        '형광색 PU 필름을 컷팅 하여 원단에 열을 가해 부착하는 방식이에요.',
        '인쇄면이 쉽게 떨어지진 않지만, 잦은 세탁 시 반짝이는 정도와 부착력이 줄어 들 수 있어요.'
      ],
      image: "apparel-print-neon-01"
    },
    {
      attentions: [
        '무광의 소프트하고 에폭시 있는 표면감을 가지고 있어요.',
        '어디서든 눈에 띄는 색상이에요.'
      ],
      image: "apparel-print-neon-02"
    }
  ],
  className: "bg-white col-2",
  deco: "num-06-5030",
  descriptions: ["눈에 띄는 색상으로 한눈에 알아 볼 수 있어요."],
  title: "네온 전사"
};

export const TRANSCRIPTION_TYPE_03 = {
  children: [
    {
      image: "apparel-info-neon-neonyellow",
      descriptions:[ '네온옐로우' ]
    },
    {
      image: "apparel-info-neon-neongreen",
      descriptions:[ '네온그린' ]
    },
    {
      image: "apparel-info-neon-neonpink",
      descriptions:[ '네온핑크' ]
    },
    {
      image: "apparel-info-neon-neonblue",
      descriptions:[ '네온블루' ]
    },
    {
      image: "apparel-info-neon-neonorange",
      descriptions:[ '네온오렌지' ]
    },
  ],
  className: "bg-white col-3 border-top",
  descriptions: ["(편집화면에서 선택 할 수 있어요)"],
  title: "전사 종류를 확인해 보세요."
};

export const PRINT_TITLE = {
  className: "bg-gray vertical-border",
  menuIndex: 6,
  title: "나에게 맞는 인쇄 방식을 알아보세요."
};

export const LONG_SLEEVE_PRINT_LOCATION = {
  children: [
    {
      descriptions:
        'XS~S, M~XL, 2XL~4XL 사이즈 구간에 따라 <em class="blue">비율에 맞춰 인쇄 면적이 확대, 축소</em>돼요.<br/>(예외로 날염 인쇄는 인쇄 면적이 동일해요.)',
      image: [
        "apparel-mtm-print-front",
        "apparel-mtm-print-back",
        "apparel-hood-print-chest"
      ]
    },
    {
      descriptions:
        '사이즈 관계없이 <em class="blue">인쇄 면적은 동일</em>해요.',
      image: [
        "apparel-mtm-print-neck",
        "apparel-mtm-print-arm",
        "apparel-hood-print-hood"
      ]
    }
  ],
  className: "bg-white col-3 border-top",
  templateCode: "PRINT_LOCATION_3X3",
  descriptions: ['<em class="blue">맨투맨/후드/집업(성인), 긴팔 티셔츠(성인)</em>'],
  title: "어디든 인쇄할 수 있어요."
};

export const NEW_LONG_SLEEVE_PRINT_LOCATION = {
  children: [
    {
      descriptions:
        'XS~S, M~XL, 2XL~4XL 사이즈 구간에 따라 <em class="blue">비율에 맞춰 인쇄 면적이 확대, 축소</em>돼요.<br/>(예외로 날염 인쇄는 인쇄 면적이 동일해요.)',
      image: [
        "apparel-mtm-print-front-v-2",
        "apparel-mtm-print-back-v-2",
      ]
    },
  ],
  className: "bg-white col-2 border-top",
  templateCode: "PRINT_LOCATION_2X4",
  descriptions: ['<em class="blue">맨투맨, 긴팔 티셔츠(성인)</em>'],
  title: "어디든 인쇄할 수 있어요."
};

export const NEW_LONG_SLEEVE_KIDS_PRINT_LOCATION = {
  children: [
    {
      descriptions:
        '100~110, 120~140, 150 사이즈 구간에 따라 <em class="blue">비율에 맞춰 인쇄 면적이 확대, 축소</em>돼요. <br/>(예외로 날염 인쇄는 인쇄 면적이 동일해요.)',
      image: [
        "apparel-mtm-print-front-v-2",
        "apparel-mtm-print-back-v-2",
      ]
    },
  ],
  className: "bg-white col-2 border-top",
  templateCode: "PRINT_LOCATION_2X4",
  descriptions: ['<em class="blue">맨투맨, 긴팔 티셔츠(유아동)</em>'],
  title: "어디든 인쇄할 수 있어요."
};

export const PANTS_PRINT_LOCATION = {
  children: [
    {
      descriptions: [
        '사이즈 관계없이 <em class="blue">인쇄 면적은 동일</em>해요.'
      ],
      image: "apparel-pants-print-front"
    },
    {
      descriptions: [
        'S, M~XL, 2XL 사이즈 구간에 따라 <em class="blue">비율에 맞춰 인쇄 면적이 확대, 축소</em>돼요.<br/>(예외로 날염 인쇄는 인쇄 면적이 동일해요.)'
      ],
      image: "apparel-pants-print-back"
    }
  ],
  className: "bg-white col-2 border-top",
  descriptions: ['<em class="blue">바지(성인)</em>'],
  title: "어디든 인쇄할 수 있어요."
};

export const PANTS_KIDS_PRINT_LOCATION = {
  bottomDescription:
    '110~140, 150 사이즈 구간에 따라 <em class="blue">비율에 맞춰 인쇄 면적이 확대, 축소</em>돼요. <br/>(예외로 날염 인쇄는 인쇄 면적이 동일해요.)',
  children: [
    {
      image: "apparel-pants-kid-print-front"
    },
    {
      image: "apparel-pants-kid-print-back"
    }
  ],
  className: "bg-gray col-2 border-top",
  descriptions: ['<em class="blue">바지(유아동)</em>'],
  title: "어디든 인쇄할 수 있어요."
};

export const LONG_SLEEVE_KIDS_PRINT_LOCATION = {
  bottomDescription:
    '100~110, 120~140, 150 사이즈 구간에 따라 <em class="blue">비율에 맞춰 인쇄 면적이 확대, 축소</em>돼요. <br/>(예외로 날염 인쇄는 인쇄 면적이 동일해요.)',
  children: [
    {
      image: "apparel-mtm-kid-print-front"
    },
    {
      image: "apparel-mtm-kid-print-back"
    },
    {
      image: "apparel-hood-kid-print-hood"
    }
  ],
  className: "bg-gray col-3 border-top",
  descriptions: ['<em class="blue">맨투맨/후드/집업(유아동), 긴팔 티셔츠(유아동)</em>'],
  title: "어디든 인쇄할 수 있어요."
};

export const ECHOBACK_PRINT_LOCATION = {
  bottomDescription: "선택한 사이즈에 따라 다른 인쇄 면적을 제공해요.",
  children: [
    {
      image: "apparel-echo-print-front"
    },
    {
      image: "apparel-echo-print-back"
    }
  ],
  className: "bg-gray col-2 border-bottom",
  descriptions: ['<em class="blue">에코백</em>'],
  title: "어디든 인쇄할 수 있어요."
};

export const DOUBLEPOCKET_ECHOBACK_PRINT_LOCATION = {
  bottomDescription: "선택한 사이즈에 따라 다른 인쇄 면적을 제공해요.",
  children: [
    {
      image: "apparel-echo-2-pocket-print-front"
    },
    {
      image: "apparel-echo-2-pocket-print-back"
    }
  ],
  className: "bg-gray col-2 border-bottom",
  descriptions: ['<em class="blue">투포켓에코백</em>'],
  title: "어디든 인쇄할 수 있어요."
};

export const POUCH_PRINT_LOCATION = {
  bottomDescription: "선택한 사이즈에 따라 다른 인쇄 면적을 제공해요.",
  children: [
    {
      image: "apparel-pouch-print-front"
    },
    {
      image: "apparel-pouch-print-back"
    }
  ],
  className: "bg-gray col-2 border-bottom",
  descriptions: ['<em class="blue">파우치</em>'],
  title: "어디든 인쇄할 수 있어요."
};

export default {
  SHORT_SLEEVES_KIDS_PRINT_LOCATION,
  DOUBLEPOCKET_ECHOBACK_PRINT_LOCATION,
  POUCH_PRINT_LOCATION,
  ECHOBACK_PRINT_LOCATION,
  LONG_SLEEVE_KIDS_PRINT_LOCATION,
  PANTS_KIDS_PRINT_LOCATION,
  PANTS_PRINT_LOCATION,
  LONG_SLEEVE_PRINT_LOCATION,
  TRANSCRIPTION_TYPE_03,
  PRINT_NEON,
  TRANSCRIPTION_TYPE_02,
  PRINT_GLITTER,
  TRANSCRIPTION_TYPE_01,
  PRINT_HOLOGRAM,
  CAUTION_BACKGROUND,
  CAUTION_PRINT,
  CUSTOM_DESIGN,
  LAUNDRY_CARE,
  PRINT_AREA,
  PRINT_DIGITAL_COLOR,
  PRINT_DIGITAL,
  PRINT_DIGITAL_PLUS,
  PRINT_DIGITAL_PLUS_DESCRIPTION_01,
  PRINT_DIGITAL_PLUS_DESCRIPTION_02,
  PRINT_DIGITAL_PLUS_DESCRIPTION_02_01,
  PRINT_DIGITAL_PLUS_DESCRIPTION_03,
  PRINT_DIGITAL_PLUS_DESCRIPTION_03_01,
  PRINT_DIGITAL_PLUS_DESCRIPTION_04,
  PRINT_DIGITAL_PLUS_DESCRIPTION_04_01,
  PRINT_DIGITAL_PLUS_DESCRIPTION_05,
  PRINT_DIGITAL_PLUS_DESCRIPTION_06,
  PRINT_HEAT_COLOR,
  PRINT_HEAT,
  SHORT_SLEEVES_PRINT_LOCATION,
  NEW_LONG_SLEEVE_PRINT_LOCATION,
  NEW_LONG_SLEEVE_KIDS_PRINT_LOCATION,
  PRINT_NALYEOM,
  NEW_PRINT_NALYEOM,
  NEW_CUSTOM_DESIGN,
  NEW_CAUTION_PRINT,
  DIGITAL_PLUS_CAUTION_BACKGROUND,
  NEW_SHORT_SLEEVES_PRINT_LOCATION,
  NEW_SHORT_SLEEVES_KIDS_PRINT_LOCATION,
  PRINT_TITLE
};
