const products = {
  echoBag : {
    id : "ecobag",
    label : "에코백",
    products : [
      {
        label : "Better than before",
        value : "998001004001"
      },
      {
        label : "식물학자",
        value : "998001004002"
      },
      {
        label : "러브캣",
        value : "998001004003"
      }
    ]
  },
  echobag_BetterThanBefore : {
    id : "ecobag",
    label : "[에코백]<br/>Better than before",
    products : [
      {
        label : "Better than before",
        value : "998001004001",
        description : {
          title : "어제보다 나은 삶을 꿈꾸며 다른 이들을<br/>돕고자 하는 르빈치의 사명이예요.",
          contents : [
            "면 100% 10수 2합",
            "가로 26 x 세로 20 x 바닥 10 (끈 24)"
          ]

        }
      }
    ]
  },

  echobag_Plant : {
    id : "ecobag",
    label : "[에코백]<br/>식물학자",
    products : [
      {
        label : "식물학자",
        value : "998001004002",
        description : {
          title : "Revinci World에서 식물을 연구하는<br/>학자 고양이예요.",
          contents : [
            "면 100% 10수 2합",
            "가로 26 x 세로 20 x 바닥 10 (끈 24)"
          ]

        }
      }
    ]
  },

  echobag_LoveCat : {
    id : "ecobag",
    label : "[에코백]<br/>러브캣",
    products : [
      {
        label : "러브캣",
        value : "998001004003",
        description : {
          title : "울적한 누군가를 발견하면 참지 못하고 달려가<br/>행복함을 알려주는 고양이예요.",
          contents : [
            "면 100% 10수 2합",
            "가로 26 x 세로 20 x 바닥 10 (끈 24)"
          ]

        }
      }
    ]
  },





  pouch : {
    id : "pouch",
    label : "파우치",
    products : [
      {
        label : "Better than before",
        value : "PA"
      },
      {
        label : "브라운캣",
        value : "PB"
      },
      {
        label : "베이커리캣",
        value : "PC"
      }
    ]
  },
  button : {
    id : "btn",
    label : "버튼 3종 (gift)",
    value : "B",
    description: "핀버튼 2종, 거울버튼 1종",
    products : []
  },
  acrylicKeyring : {
    id : "ac",
    label : "키링 3종",
    value : "AC",
    description: "러브캣, 플라워보틀, 러브포션",
    products : []
  },
  sheetSticker : {
    id : "sticker",
    label : "낱장 스티커(Gift)",
    description: "",
    value : "S",
    products : []
  },
  sticker : {
    id : "sticker",
    label : "DIY 스티커(Gift)",
    description: "",
    value : "S",
    products : []
  },
  calendarPack : {
    id : "calendar",
    label : "[달력Pack]<br/>달력 + 카드 5종 + DIY스티커(gift)",
    products : [
      {
        label : "[달력Pack]<br/>달력 + 카드 5종 + DIY스티커",
        value : "998001003001",
        giftList : [
          {title : "달력", description : "르빈치월드 캘린더"},
          {title : "카드 5종", description : "브라운캣, 르빈치캣, 식물학자, 러브캣, 납짝고양이"},
          {title : "DIY 스티커(Gift)", description : ""}
        ]
      }
    ]
  }
}

export const PRODUCT_CODE_LIST = {
  "PAACS" : "998001002001",
  "PBACS" : "998001002002",
  "PCACS" : "998001002003",

  "998001004001PAB" : "998001001001",
  "998001004001PBB" : "998001001002",
  "998001004001PCB" : "998001001003",

  "998001004002PAB" : "998001001004",
  "998001004002PBB" : "998001001005",
  "998001004002PCB" : "998001001006",

  "998001004003PAB" : "998001001007",
  "998001004003PBB" : "998001001008",
  "998001004003PCB" : "998001001009",

  "998001003001" : "998001003001",
}

export const TEMPLATE_CODE_LIST = {
  "998001004001" : "045021171052",
  "998001004002" : "045021171053",
  "998001004003" : "045021171054",

  "998001001001" : "045021171039",
  "998001001002" : "045021171040",
  "998001001003" : "045021171041",

  "998001001004" : "045021171042",
  "998001001005" : "045021171043",
  "998001001006" : "045021171044",

  "998001001007" : "045021171045",
  "998001001008" : "045021171046",
  "998001001009" : "045021171047",

  "998001002001" : "045021171048",
  "998001002002" : "045021171049",
  "998001002003" : "045021171050",

  "998001003001" : "045021171051"
}

const PRODUCT_CONTENTS = {
  line : {
    line : true
  },

  ecobagText : {
    title : '에코백',
    description: '면 100% 10수 2합<br/>' +
      '가로 26 x 세로 20 x 바닥 10 (끈 24) (cm)'
  },
  ecobag_batterThanBefore : {
    image : 'ecobag-img-01-01@2x.jpg',
    title : 'Batter than before',
    description: '' +
      '어제보다 나은 삶을 꿈꾸며 다른 이들을<br/>' +
      '돕고자 하는 르빈치의 사명이예요.'
  },

  ecobag_plant : {
    image : 'ecobag-img-02-01@2x.jpg',
    title : '식물학자',
    description: '' +
      '식물을 연구하는 학자 고양이예요.'
  },

  ecobag_loveCat : {
    image : 'ecobag-img-03-01@2x.jpg',
    title : '러브캣',
    description: '' +
      '울적한 누군가를 발견하면 참지 못하고 달려가 <br/>' +
      '행복함을 알려주는 고양이예요.'
  },

  pouchText : {
    title : '파우치',
    description: '면 100% 10수 2합<br/>가로 21 x 세로 20 (cm)'
  },

  pouch_batterThanBefore : {
    image : 'pouch-img-01@2x.jpg',
    title : 'Batter than before',
    description: '' +
      '어제보다 나은 삶을 꿈꾸며 다른 이들을<br/>돕고자 하는 르빈치의 사명이예요.'
  },

  pouch_brownCat : {
    image : 'pouch-img-02@2x.jpg',
    title : '브라운캣',
    description: '' +
      'Revinci World를 만들었다고 알려져있는<br/>1세대 르빈치월드의 킹이예요.'
  },

  pouch_bakery : {
    image : 'pouch-img-03@2x.jpg',
    title : '베이커리캣',
    description: '' +
      '항상 맛있는 케이크를 만들어야한다는<br/>강박감을 가지고 있는 귀여운 아이예요.'
  },

  button : {
    title : '버튼 (Gift)',
    description: '핀버튼 : 44(mm) / 거울버튼 : 58(mm)',
  },

  buttonGift : {
    soloDescription: '에코백과 파우치를 구매하신 모든 분들께<br/>핀버튼(2종)과 거울버튼(1종)을 선물로 드려요. :)',
    image : 'btn-img-01@2x.jpg',
  },

  keyringText : {
    title : '키링',
    description: '러브캣 : 36 x 40 (mm) / 플라워보틀 : 31 x 56 (mm) / 러브포션 : 50 x 62 (mm)'
  },

  keyring_loveCat : {
    image : 'keyring-img-01@2x.jpg',
    title : '러브캣',
    description: '' +
      '울적한 누군가를 발견하면 참지 못하고 달려가 <br/>' +
      '행복함을 알려주는 고양이예요.'
  },

  keyring_lovePotion : {
    image : 'keyring-img-02@2x.jpg',
    title : '러브포션',
    description: '' +
      '러브캣이 항상 들고다니는 포션이예요.<br/>이 포션을 마신 사람은 누구든지 엄청나게 행복해진답니다.'
  },

  keyring_flowerBottle : {
    image : 'keyring-img-03@2x.jpg',
    title : '플라워보틀',
    description: '' +
      '우연히 발견한 씨앗을 소중히 싹 틔우기 위해<br/>식물학자가 고심하여 만들었어요.'
  },

  sheetStickerText : {
    title : '낱장 스티커(Gift)',
    description: '' +
      '50 x 50 (mm)'
  },

  stickerText : {
    title : 'DIY 스티커(Gift)',
    description: '' +
      '가로 156 x 세로 230 (mm)'
  },

  stickerGift : {
    soloDescription: '파우치와 키링3종을 구매하신 모든 분들께<br/>낱장 스티커 5종을 선물로 드려요. :)',
    image : 'sticker-img-01@2x.jpg',
  },

  calendarText : {
    title : '달력',
    description: '가로 148 x 세로 238 (mm)'
  },

  calendarImage : {
    image : 'calendar-img-01@2x.jpg',
  },

  cardText : {
    title : '카드',
    description: '가로 102 x 세로 152 (mm)'
  },

  card_brownCat : {
    image : 'card-img-01@2x.jpg',
    title : '브라운캣',
    description: '' +
      'Revinci World를 만들었다고 알려져있는<br/>1세대 르빈치월드의 왕 중 하나예요.'
  },

  card_revinciCat : {
    image : 'card-img-02@2x.jpg',
    title : '르빈치캣',
    description: '' +
      'Revinci World를 만들었다고 알려져있는<br/>1세대 르빈치월드의 왕 중 하나예요.'
  },

  card_plant : {
    image : 'card-img-03@2x.jpg',
    title : '식물학자',
    description: '' +
      '식물을 연구하는 학자 고양이예요.'
  },

  card_loveCat : {
    image : 'card-img-04@2x.jpg',
    title : '러브캣',
    description: '' +
      '울적한 누군가를 발견하면 참지 못하고 달려가 <br/>' +
      '행복함을 알려주는 고양이예요.'
  },

  card_nCat : {
    image : 'card-img-05@2x.jpg',
    title : '납짝고양이',
    description: '' +
      '납짝한 고양이들 중에서는 외모가 가장 뛰어나서<br/>왕관을 쓰고 있는 고양이예요.'
  },

  diyStickerText : {
    title : 'DIY 스티커 (Gift)',
    description: '가로 156 x 세로 230 (mm)'
  },

  diySticker : {
    soloDescription: '' +
      '캘린더와 카드를 구매하신 모든 분들께<br/>달력과 함께 사용할 수 있는 DIY 스티커 2종을 선물로 드려요. :)',
    image : 'diy-img-01@2x.jpg',
  },

  soloPouch : {
    image : 'ecopack-img-01@2x.jpg',
  },

  soloEcobag : {
    image : 'ecopack-img-01@2x.jpg',
  },

  soloGoodsPack: {
    image : 'goodspack-img-01@2x.jpg',
  },

  soloCalendar: {
    image : 'calendarpack-img-01@2x.jpg',
  },

  ecobag_b : {
    multipleImage : [
      "ecobag-img-01-01@2x.jpg",
      "ecobag-img-01-02@2x.jpg",
    ]
  },
  ecobag_p : {
    multipleImage : [
      "ecobag-img-02-01@2x.jpg",
      "ecobag-img-02-03@2x.jpg",
    ]
  },
  ecobag_l : {
    multipleImage : [
      "ecobag-img-03-01@2x.jpg",
      "ecobag-img-03-02@2x.jpg",
    ]
  }

}

export const PRODUCT_ITEMS = [
  {
    images : 'revinci-product-01@2x.jpg',
    productType : '에코백',
    productName : 'Better than before',
    packages : null,
    price : 18500,
    items: [
      products.echobag_BetterThanBefore
    ],
    contents: [
      PRODUCT_CONTENTS.ecobag_b
    ]
  },
  {
    images : 'revinci-product-02@2x.jpg',
    productType : '에코백',
    productName : '식물학자',
    packages : null,
    price : 18500,
    items: [
      products.echobag_Plant
    ],
    contents: [
      PRODUCT_CONTENTS.ecobag_p
    ]
  },
  {
    images : 'revinci-product-03@2x.jpg',
    productType : '에코백',
    productName : '러브캣',
    packages : null,
    price : 18500,
    items: [
      products.echobag_LoveCat
    ],
    contents: [
      PRODUCT_CONTENTS.ecobag_l
    ]
  },

  {
    images : 'revinci-product-04@2x.jpg',
    productType : '에코 Pack',
    productName : '에코백 + 파우치 + 버튼 (gift)',
    price : 32500,
    packages : "B",
    items : [
      products.echoBag,
      products.pouch,
      products.button
    ],
    contents : [
      PRODUCT_CONTENTS.soloEcobag,
      PRODUCT_CONTENTS.ecobagText,
      PRODUCT_CONTENTS.ecobag_batterThanBefore,
      PRODUCT_CONTENTS.ecobag_plant,
      PRODUCT_CONTENTS.ecobag_loveCat,
      PRODUCT_CONTENTS.line,
      PRODUCT_CONTENTS.pouchText,
      PRODUCT_CONTENTS.pouch_batterThanBefore,
      PRODUCT_CONTENTS.pouch_brownCat,
      PRODUCT_CONTENTS.pouch_bakery,
      PRODUCT_CONTENTS.line,
      PRODUCT_CONTENTS.button,
      PRODUCT_CONTENTS.buttonGift

    ]
  },
  {
    images : 'revinci-product-05@2x.jpg',
    productType : '굿즈 Pack',
    productName : '파우치 + 아크릴키링 + 낱장 스티커 5종(gift)',
    price : 25900,
    packages : "ACS",
    items : [
      products.pouch,
      products.acrylicKeyring,
      products.sheetSticker
    ],
    contents : [
      PRODUCT_CONTENTS.soloGoodsPack,
      PRODUCT_CONTENTS.pouchText,
      PRODUCT_CONTENTS.pouch_batterThanBefore,
      PRODUCT_CONTENTS.pouch_brownCat,
      PRODUCT_CONTENTS.pouch_bakery,
      PRODUCT_CONTENTS.line,
      PRODUCT_CONTENTS.keyringText,
      PRODUCT_CONTENTS.keyring_loveCat,
      PRODUCT_CONTENTS.keyring_lovePotion,
      PRODUCT_CONTENTS.keyring_flowerBottle,
      PRODUCT_CONTENTS.line,
      PRODUCT_CONTENTS.sheetStickerText,
      PRODUCT_CONTENTS.stickerGift
    ]
  },
  {
    images : 'revinci-product-06@2x.jpg',
    productType : '달력 Pack',
    productName : '달력 + 카드 + DIY 스티커(gift)',
    packages : "CALENDARPACK",
    price : 13500,
    items: [
      products.calendarPack
    ],
    contents: [
      PRODUCT_CONTENTS.soloCalendar,
      PRODUCT_CONTENTS.calendarText,
      PRODUCT_CONTENTS.calendarImage,
      PRODUCT_CONTENTS.line,
      PRODUCT_CONTENTS.cardText,
      PRODUCT_CONTENTS.card_brownCat,
      PRODUCT_CONTENTS.card_revinciCat,
      PRODUCT_CONTENTS.card_plant,
      PRODUCT_CONTENTS.card_loveCat,
      PRODUCT_CONTENTS.card_nCat,
      PRODUCT_CONTENTS.line,
      PRODUCT_CONTENTS.diyStickerText,
      PRODUCT_CONTENTS.diySticker


    ]
  }
]
