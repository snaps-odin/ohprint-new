
export const MANAGEMENT_TITLE = {
    title: "사이즈 및 세탁/관리",
    className: 'bg-white border-top soloTitle',
    menuIndex:2
};

export const TITLE = {
  title: '어떤 컨셉으로 제작하게 되셨나요?',
    className: 'bg-white vertical-border',
  menuIndex:1
};

export const LAUNDRY_CARE = {
  className: "col-5 bg-white laundry-care border-bottom",
    caption:"세탁 및 관리",
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
  ]
};

export const DELIVERY = {
  type:"delivery",
    title: "배송/교환/환불",
    className: "bg-white border-bottom",
  menuIndex: 2,
    children: [
    {}
  ],
};

export const OHPRINTME_OPM_100777S_INFORMATION = {
  caption: "베이직 에코백(S)",
  className: "col-2 bg-white row-first",
  children: [
    {
      descriptions: [
        "상세 사이즈의 치수는 측정 방법과 위치에 따라<br/>오차가 발생할 수 있습니다."
      ],
      image: "apparel-opm-100777-s-size-01"
    },
    {
      descriptions: ["사이즈 착용 컷"],
      image: "apparel-opm-100777-s-size-02"
    }
  ]
};

export const OHPRINTME_OPM_100348_INFORMATION = {
  caption:"오프린트미 기모 후드 집업 (남여공용)",
  className: "col-3 bg-white row-first",
  children: [
    {
      descriptions: ["L 사이즈 착용<br/>173cm, 53kg / 평소 55(S) 사이즈 착용"],
      image: "apparel-opm-100348-size-02"
    },
    {
      descriptions: ["2XL 사이즈 착용<br/>181cm, 66kg / 평소 100 사이즈 착용"],
      image: "apparel-opm-100348-size-03"
    },
    {
      descriptions: [
        "상세 사이즈의 치수는 측정 방법과<br/>위치에 따라 오차가 발생할 수 있습니다."
      ],
      image: "apparel-opm-100348-size-01"
    }
  ]
};

export const OHPRINTME_OPM_100348_SIZE_INFORMATION = {
  type: "table",
  className: "table-row bg-white row-last  ",
  subTitle: ["사이즈", "어깨", "가슴", "총기장", "소매길이"],
  children: [
    {
      descriptions: ["XS", "42", "49", "61", "58"]
    },
    {
      descriptions: ["S", "45", "52", "64", "59"]
    },
    {
      descriptions: ["M", "48", "55", "67", "60"]
    },
    {
      descriptions: ["L", "51", "58", "70", "61"]
    },
    {
      descriptions: ["XL", "54", "61", "73", "62"]
    },
    {
      descriptions: ["2XL", "56", "65", "76", "62"]
    },
    {
      descriptions: ["3XL", "58", "69", "76", "62"]
    },
    {
      descriptions: ["4XL", "60", "73", "76", "62"]
    }
  ]
};


export const AAA_1301_INFORMATION = {
  caption: "트리플에이 18수 라운드 반팔(남여공용)",
  className: "col-3 bg-white row-first",
  children: [
    {
      descriptions: ["S, M 사이즈 착용<br/>168cm, 48kg / 평소 S 사이즈 착용"],
      image: "apparel-aaa-1301-size-01"
    },
    {
      descriptions: ["L, XL 사이즈 착용<br/>185cm, 64kg / 평소 XL 사이즈 착용"],
      image: "apparel-aaa-1301-size-02"
    },
    {
      descriptions: [
        "상세 사이즈의 치수는 측정 방법과 위치에 따라<br/>오차가 발생할 수 있습니다."
      ],
      image: "apparel-aaa-1301-size-03"
    }
  ]
};

export const AAA_1301_SIZE_INFORMATION = {
  type: "table",
  className: "table-row bg-white row-last  ",
  subTitle: ["사이즈(cm)", "가슴", "총기장", "소매길이"],
  children: [
    {
      descriptions: ["S", "45", "68", "19"]
    },
    {
      descriptions: ["M", "50", "72", "20"]
    },
    {
      descriptions: ["L", "55", "77", "21"]
    },
    {
      descriptions: ["XL", "60", "81", "23"]
    },
    {
      descriptions: ["XXL", "62", "84", "26"]
    }
  ]
};

export const OHPRINTME_OPM_100777M_INFORMATION = {
  caption:"오프린트미 베이직 에코백(M)",
  className: "col-2 bg-white row-first",
  children: [
    {
      descriptions: ["사이즈 착용 컷"],
      image: "apparel-opm-100777-m-size-02"
    },
    {
      descriptions: [
        "상세 사이즈의 치수는 측정 방법과 위치에 따라<br/>오차가 발생할 수 있습니다."
      ],
      image: "apparel-opm-100777-m-size-01"
    }
  ]
};

export const OHPRINTME_OPM_100777M_SIZE_INFORMATION = {
  type: "table",
  className: "table-row bg-white row-last  ",
  children: [
    {
      descriptions: ["M"],
      title: "사이즈"
    },
    {
      descriptions: ["36(너비) x 37(높이) x 11(폭)"],
      title: "본체"
    },
    {
      descriptions: ["2.5(두께) x 47(길이)"],
      title: "손잡이"
    },
    {
      descriptions: ["10L"],
      title: "내용량"
    }
  ]
};

export const OHPRINTME_OPM_100777L_INFORMATION = {
  caption:"오프린트미 베이직 에코백(L)",
  className: "col-2 bg-white row-first",
  children: [
    {
      descriptions: ["사이즈 착용 컷"],
      image: "apparel-opm-100777-l-size-02"
    },
    {
      descriptions: [
        "상세 사이즈의 치수는 측정 방법과 위치에 따라<br/>오차가 발생할 수 있습니다."
      ],
      image: "apparel-opm-100777-l-size-01"
    }
  ]
};

export const OHPRINTME_OPM_100777L_SIZE_INFORMATION = {
  type: "table",
  className: "table-row bg-white row-last  ",
  children: [
    {
      descriptions: ["L"],
      title: "사이즈"
    },
    {
      descriptions: ["48(너비) x 40(높이) x 15(폭)"],
      title: "본체"
    },
    {
      descriptions: ["2.5(두께) x 60(길이)"],
      title: "손잡이"
    },
    {
      descriptions: ["20L"],
      title: "내용량"
    }
  ]
};

export const AMERICAN_APPAREL_2001W_INFORMATION = {
  caption:"아메리칸어패럴 30수 프리미엄 반팔(남여공용)",
  className: "col-3 bg-white row-first",
  children: [
    {
      descriptions: ["S, M 사이즈 착용<br/>158cm, 45kg / 평소 S 사이즈 착용"],
      image: "apparel-american-2001-w-size-01"
    },
    {
      descriptions: ["L, XL 사이즈 착용<br/>178cm, 67kg / 평소 L 사이즈 착용"],
      image: "apparel-american-2001-w-size-02"
    },
    {
      descriptions: ["상세 사이즈의 치수는 측정 방법과 위치에 따라<br/>오차가 발생할 수 있습니다."],
      image: "apparel-american-2001-w-size-03"
    }
  ]
};

export const AMERICAN_APPAREL_2001W_SIZE_INFORMATION = {
  type: "table",
  subTitle: ["사이즈 (cm)", "어깨", "가슴", "총기장", "소매길이"],
  className: "table-row bg-white row-last  ",
  children: [
    {
      descriptions: ["XS", "37", "41", "69.5", "20"]
    },
    {
      descriptions: ["S", "41", "46", "72.5", "21"]
    },
    {
      descriptions: ["M", "45.5", "50", "74", "22"]
    },
    {
      descriptions: ["L", "49.5", "56", "77", "22"]
    },
    {
      descriptions: ["XL", "51.5", "60.5", "79", "22"]
    },
    {
      descriptions: ["XXL", "54", "65", "83.5", "22"]
    }
  ]
};

export const OHPRINTME_OPM_100777S_SIZE_INFORMATION = {
  children: [
    {
      descriptions: ["S"],
      title: "사이즈"
    },
    {
      descriptions: ["30(너비) x 20(높이) x 10(폭)"],
      title: "본체"
    },
    {
      descriptions: ["2.5(두께) x 29(길이)"],
      title: "손잡이"
    },
    {
      descriptions: ["4L"],
      title: "내용량"
    }
  ],
  className: "table-row bg-white row-last  ",
  type: "table"
};


export const OHPRINTME_OPM_100219_INFORMATION = {
  caption: "오프린트미 베이직 맨투맨 (남여공용)",
  className: "col-3 bg-white row-first",
  children: [
    {
      descriptions: [
        "상세 사이즈의 치수는 측정 방법과<br/>위치에 따라 오차가 발생할 수 있습니다."
      ],
      image: "apparel-opm-100219-size-01"
    },
    {
      descriptions: ["L 사이즈 착용<br/>173cm, 53kg / 평소 55(S) 사이즈 착용"],
      image: "apparel-opm-100219-size-02"
    },
    {
      descriptions: ["2XL 사이즈 착용<br/>181cm, 66kg / 평소 100 사이즈 착용"],
      image: "apparel-opm-100219-size-03"
    }
  ]
};

export const OHPRINTME_OPM_100219_SIZE_INFORMATION = {
  type: "table",
  subTitle: ["사이즈", "어깨", "가슴", "총기장", "소매길이"],
  className: "table-row bg-white row-last  ",
  children: [
    {
      descriptions: ["S", "41", "47", "64", "61"]
    },
    {
      descriptions: ["M", "44", "50", "67", "62"]
    },
    {
      descriptions: ["L", "47", "53", "70", "63"]
    },
    {
      descriptions: ["XL", "50", "56", "73", "63"]
    },
    {
      descriptions: ["2XL", "53", "59", "76", "64"]
    }
  ]
};

export const PRINTSTAR_085_CVT_INFORMATION = {
  caption: "프린트스타 17수 라운드 반팔 (남여공용)",
  className: "col-3 bg-white row-first",
  children: [
    {
      descriptions: [
        "상세 사이즈의 치수는 측정 방법과<br/>위치에 따라 오차가 발생할 수 있습니다."
      ],
      image: "apparel-print-085-size-01"
    },
    {
      descriptions: ["S, M 사이즈 착용<br/>168cm, 48kg / 평소 S 사이즈 착용"],
      image: "apparel-print-085-size-02"
    },
    {
      descriptions: ["L, XL 사이즈 착용<br/>185cm, 64kg / 평소 XL 사이즈 착용"],
      image: "apparel-print-085-size-03"
    }
  ],

};

export const PRINTSTAR_085_CVT_SIZE_INFORMATION = {
  type: "table",
  subTitle: ["사이즈 (cm)", "어깨", "가슴", "총기장", "소매길이"],
  className: "table-row bg-white row-last  ",
  children: [
    {
      descriptions: ["XS", "41", "46", "63", "18"]
    },
    {
      descriptions: ["S", "44", "49", "66", "19"]
    },
    {
      descriptions: ["M", "47", "52", "70", "20"]
    },
    {
      descriptions: ["L", "50", "55", "74", "22"]
    },
    {
      descriptions: ["XL", "53", "58", "78", "24"]
    },
    {
      descriptions: ["2XL", "56", "61", "82", "26"]
    }
  ]
};
