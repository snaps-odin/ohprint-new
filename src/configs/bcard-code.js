export default [
  {
    priority: 1,
    name: "사이즈",
    keyName: 'productCode',
    option: {
      BUSINESS_CARD_STANDARD: "s-01", //표준사이즈
      BUSINESS_CARD_OPM: "s-02",  //OPM사이즈
      BUSINESS_CARD_SQUARE: "s-03",  //정사각사이즈
      TRANS_BUSINESS_CARD_STANDARD: "ts-01", //투명명함 표준사이즈
      TRANS_BUSINESS_CARD_OPM: "ts-02", //투명명함 OPM사이즈
      TRANS_BUSINESS_CARD_SQUARE: "ts-03", //투명명함 정사각사이즈
    }
  },
  {
    priority: 2,
    name: "용지",
    keyName: 'paperCode',
    option: {
      SOFT: "p-01", //소프트
      PREMIUM_SOFT: "p-02", //프리미엄 소프트
      PREMIUM_MATT: "p-03", //프리미엄 매트
      PREMIUM: "p-04",  //오리지널
      LUXE: "p-05",  //럭스
      LINEN: "p-06",  //리넨
      FELT: "p-07", //펠트
      PEARL: "p-08",  //펄
      CRAFT: "p-09",  //크라프트
      TRANSPARENCY: "p-10", //투명
      TRANSPARENCY_GLOSSY: "tp-10", //투명명함 유광
      // MATTBLACK: "p-11", //매트블랙
      // RECYCLE: "p-12" //리사이클
    }
  },
  {
    priority: 2,
    name: "용지",
    keyName: 'paperShapeType',
    option: {
      MATTBLACK: "p-11", //매트블랙
      RECYCLE: "p-12" //리사이클
    }
  },
  {
    priority: 3,
    name: "효과",
    keyName: 'effectBackCode',
    option: {
      FOIL_PRINT: "ef-01",  //박
      PRESSURE: "ef-02",  //형압
      SCODIX: "ef-03",  //스코딕스
      NONE: "ef-00" //효과없음
    }
  },
  {
    priority: 3,
    name: "럭스 옆면색상",
    keyName: 'luxeColorCode',
    option: {
      BLACK: "lu-01",  //블랙
      BLUE: "lu-02",  //블루
      MINT: "lu-03",  //민트
      ORANGE: "lu-04", //오렌지
      RED: "lu-05" //레드
    }
  },
  {
    priority: 3,
    name: "투명 유무광",
    keyName: 'glossyType',
    option: {
      TRANS_BUSINESS_CARD_GLOSSY: "glossy",  //유광
      TRANS_BUSINESS_CARD_MATTE: "matte",  //무광
    }
  },
  {
    priority: 4,
    name: "박 색상",
    keyName: 'backCode',
    option: {
      GOLD_GLOSSY: "fo-01", //골드유광
      GOLD_MATT: "fo-02", //골드무광
      SILVER_GLOSSY: "fo-03", //실버유광
      SILVER_MATT: "fo-04", //실버무광
      ROSEGOLD: "fo-05", //로즈골드
      HOLOGRAM: "fo-06",  //홀로그램
      BLACK: "fo-07", //블랙
      BLUE: "fo-08" //블루
    }
  },
  {
    priority: 4,
    name: "형압 방식",
    keyName: 'pressureCode',
    option: {
      FIX: "pr-01", //고정형
      FREE: "pr-02" //자율형
    }
  },
  {
    priority: 4,
    name: "스코딕스 색상",
    keyName: 'scodixCode',
    option: {
      GLOSSY: "sc-01", //투명글로시
      GOLD: "sc-02", //골드
      SILVER: "sc-03", //실버
      HOLOGRAM: "sc-04", //홀로그램
    }
  },
//  {
//    priority: 5,
//    name: "인쇄위치",
//    keyName: '',
//    option: {
//      OBVERSE: "",  //앞면
//      BACK: ""  //뒷면
//    }
//  },
  {
    priority: 5,
    name: "형압 형태",
    keyName: 'backCode',
    option: {
      FIX: "em",
      EMBOSSING: "em",  //양각
      INTAGLIO: "de"  //음각
    }
  },
  {
    priority: 6,
    name: "모서리",
    keyName: 'frameCode',
    option: {
      SQUARE: "rec",  //직각
      ROUND: "round"  //둥근
    }
  }
]
