

export const PRODUCT_GUIDE = {
  PRODUCT_GUIDE_CDN: '/Upload/front/productGuide/ko_kr',
  BUSINESS_CARD: [
    {
      title: '표준사이즈 가로',
      defaults: ['basic'],
      allows: ['basic', 'opm', 'square', 'standard', 'original', 'luxe', 'linen', 'felt', 'pearl', 'craft', 'transparency', 'glossy', 'gold', 'silver', 'soft', 'premium_soft', 'premium_matt', 'matt_black', 'recycle', 'foil_print', 'pressure', 'scodix'],
      guide: {
        image: 'bizcard-img-basic-9050',
        area: {
          workSpace: {
            size: '94mm x 53mm'
          },
          cuttingLine: {
            size: '90mm x 50mm'
          },
          safeSpace: {
            size: '84mm x 44mm'
          }
        },
        description: `<em>투명 명함 제작 시 [화이트 배경]을 진행하지 않을 경우 반드시<br/>"white" 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Business_Card_90x50_Landscape_AI.zip',
        pdf: 'Business_Card_90x50_Landscape_PDF.zip',
        jpg: 'Business_Card_90x50_Landscape_JPG.zip'
      }
    },
    {
      title: 'OPM사이즈 가로',
      defaults: ['opm'],
      allows: ['basic', 'opm', 'square', 'standard', 'original', 'luxe', 'linen', 'felt', 'pearl', 'craft', 'transparency', 'glossy', 'gold', 'silver', 'soft', 'premium_soft', 'premium_matt', 'matt_black', 'recycle', 'foil_print', 'pressure', 'scodix'],
      guide: {
        image: 'bizcard-img-opm-8555',
        area: {
          workSpace: {
            size: '88.5mm x 58mm'
          },
          cuttingLine: {
            size: '85mm x 55mm'
          },
          safeSpace: {
            size: '79mm x 49mm'
          }
        },
        description: `<em>투명 명함 제작 시 [화이트 배경]을 진행하지 않을 경우 반드시<br/>"white" 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Business_Card_85x55_Landscape_AI.zip',
        pdf: 'Business_Card_85x55_Landscape_PDF.zip',
        jpg: 'Business_Card_85x55_Landscape_JPG.zip'
      }
    },
    {
      title: '정사각사이즈',
      defaults: ['square'],
      allows: ['basic', 'opm', 'square', 'standard', 'original', 'luxe', 'linen', 'felt', 'pearl', 'craft', 'transparency', 'glossy', 'gold', 'silver', 'soft', 'premium_soft', 'premium_matt', 'matt_black', 'recycle', 'foil_print', 'pressure', 'scodix'],
      guide: {
        image: 'bizcard-img-square-6060',
        area: {
          workSpace: {
            size: '63mm x 63mm'
          },
          cuttingLine: {
            size: '60mm x 60mm'
          },
          safeSpace: {
            size: '54mm x 54mm'
          }
        },
        description: `<em>투명 명함 제작 시 [화이트 배경]을 진행하지 않을 경우 반드시<br/>"white" 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Business_Card_60x60_AI.zip',
        pdf: 'Business_Card_60x60_PDF.zip',
        jpg: 'Business_Card_60x60_JPG.zip'
      }
    },
    {
      title: '표준사이즈 세로',
      defaults: [],
      allows: ['basic', 'opm', 'square', 'standard', 'original', 'luxe', 'linen', 'felt', 'pearl', 'craft', 'transparency', 'glossy', 'gold', 'silver', 'soft', 'premium_soft', 'premium_matt', 'matt_black', 'recycle', 'foil_print', 'pressure', 'scodix'],
      guide: {
        image: 'bizcard-img-basic-5090',
        area: {
          workSpace: {
            size: '53mm x 94mm'
          },
          cuttingLine: {
            size: '50mm x 90mm'
          },
          safeSpace: {
            size: '44mm x 84mm'
          }
        },
        description: `<em>투명 명함 제작 시 [화이트 배경]을 진행하지 않을 경우 반드시<br/>"white" 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Business_Card_90x50_Portrait_AI.zip',
        pdf: 'Business_Card_90x50_Portrait_PDF.zip',
        jpg: 'Business_Card_90x50_Portrait_JPG.zip'
      }
    },
    {
      title: 'OPM사이즈 세로',
      defaults: [],
      allows: ['basic', 'opm', 'square', 'standard', 'original', 'luxe', 'linen', 'felt', 'pearl', 'craft', 'transparency', 'glossy', 'gold', 'silver', 'soft', 'premium_soft', 'premium_matt', 'matt_black', 'recycle', 'foil_print', 'pressure', 'scodix'],
      guide: {
        image: 'bizcard-img-opm-5585',
        area: {
          workSpace: {
            size: '58mm x 88.5mm'
          },
          cuttingLine: {
            size: '55mm x 85mm'
          },
          safeSpace: {
            size: '49mm x 79mm'
          }
        },
        description: `<em>투명 명함 제작 시 [화이트 배경]을 진행하지 않을 경우 반드시<br/>"white" 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Business_Card_85x55_Portrait_AI.zip',
        pdf: 'Business_Card_85x55_Portrait_PDF.zip',
        jpg: 'Business_Card_85x55_Portrait_JPG.zip'
      }
    }
  ],
  STICKER: [
    {
      title: '10',
      defaults: ['circle'],
      allows: ['circle', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-round-1010',
        area: {
          workSpace: {
            size: '16mm x 16mm'
          },
          cuttingLine: {
            size: '10mm x 10mm'
          },
          safeSpace: {
            size: '6mm x 6mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Round_10x10_AI.zip',
        pdf: 'Sticker_Round_10x10_PDF.zip'
      }
    },
    {
      title: '15',
      defaults: [],
      allows: ['circle', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-round-1515',
        area: {
          workSpace: {
            size: '21mm x 21mm'
          },
          cuttingLine: {
            size: '15mm x 15mm'
          },
          safeSpace: {
            size: '11mm x 11mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Round_15x15_AI.zip',
        pdf: 'Sticker_Round_15x15_PDF.zip'
      }
    },
    {
      title: '20',
      defaults: [],
      allows: ['circle', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-round-2020',
        area: {
          workSpace: {
            size: '26mm x 26mm'
          },
          cuttingLine: {
            size: '20mm x 20mm'
          },
          safeSpace: {
            size: '16mm x 16mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Round_20x20_AI.zip',
        pdf: 'Sticker_Round_20x20_PDF.zip'
      }
    },
    {
      title: '25',
      defaults: [],
      allows: ['circle', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-round-2525',
        area: {
          workSpace: {
            size: '31mm x 31mm'
          },
          cuttingLine: {
            size: '25mm x 25mm'
          },
          safeSpace: {
            size: '21mm x 21mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Round_25x25_AI.zip',
        pdf: 'Sticker_Round_25x25_PDF.zip'
      }
    },


    {
      title: '20 x 20',
      defaults: [],
      allows: ['roll', 'roundRollSticker', 'roundRollSticker20'],
      guide: {
        image: 'roll-sticker-round-20-x-20',
        area: {
          workSpace: {
            size: '23mm x 23mm'
          },
          cuttingLine: {
            size: '20mm x 20mm'
          },
          safeSpace: {
            size: '16mm x 16mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Round_20x20_AI.zip',
        pdf: 'Sticker_Roll_Round_20x20_PDF.zip'
      }
    },
    {
      title: '30 x 30',
      defaults: [],
      allows: ['roll', 'roundRollSticker', 'roundRollSticker30'],
      guide: {
        image: 'roll-sticker-round-30-x-30',
        area: {
          workSpace: {
            size: '33mm x 33mm'
          },
          cuttingLine: {
            size: '30mm x 30mm'
          },
          safeSpace: {
            size: '26mm x 26mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Round_30x30_AI.zip',
        pdf: 'Sticker_Roll_Round_30x30_PDF.zip'
      }
    },
    {
      title: '45 x 45',
      defaults: [],
      allows: ['roll', 'roundRollSticker', 'roundRollSticker40'],
      guide: {
        image: 'roll-sticker-round-45-x-45',
        area: {
          workSpace: {
            size: '48mm x 48mm'
          },
          cuttingLine: {
            size: '45mm x 45mm'
          },
          safeSpace: {
            size: '41mm x 41mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Round_45x45_AI.zip',
        pdf: 'Sticker_Roll_Round_45x45_PDF.zip'
      }
    },
/*    {
      title: '60 x 60',
      defaults: [],
      allows: ['roll', 'roundRollSticker', 'roundRollSticker60'],
      guide: {
        image: 'roll-sticker-round-60-x-60',
        area: {
          workSpace: {
            size: '63mm x 63mm'
          },
          cuttingLine: {
            size: '60mm x 60mm'
          },
          safeSpace: {
            size: '56mm x 56mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Round_45x45_AI.zip',
        pdf: 'Sticker_Roll_Round_45x45_PDF.zip'
      }
    },*/



    {
      title: '30 x 18',
      defaults: [],
      allows: ['roll', 'rectangleRollSticker', 'rectangleRollSticker3018'],
      guide: {
        image: 'roll-sticker-rec-30-x-18',
        area: {
          workSpace: {
            size: '33mm x 21mm'
          },
          cuttingLine: {
            size: '30mm x 18mm'
          },
          safeSpace: {
            size: '26mm x 14mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Rectangle_30x18_Landscape_AI.zip',
        pdf: 'Sticker_Roll_Rectangle_30x18_Landscape_PDF.zip'
      }
    },
    {
      title: '40 x 20',
      defaults: [],
      allows: ['roll', 'rectangleRollSticker', 'rectangleRollSticker4020'],
      guide: {
        image: 'roll-sticker-rec-40-x-20',
        area: {
          workSpace: {
            size: '43mm x 23mm'
          },
          cuttingLine: {
            size: '40mm x 20mm'
          },
          safeSpace: {
            size: '36mm x 16mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Rectangle_40x20_Landscape_AI.zip',
        pdf: 'Sticker_Roll_Rectangle_40x20_Landscape_PDF.zip'
      }
    },
    {
      title: '50 x 30 (직각)',
      defaults: [],
      allows: ['roll', 'rectangleRollSticker', 'rectangleRollSticker5030'],
      guide: {
        image: 'roll-sticker-rec-50-x-30',
        area: {
          workSpace: {
            size: '53mm x 33mm'
          },
          cuttingLine: {
            size: '50mm x 30mm'
          },
          safeSpace: {
            size: '46mm x 26mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Rectangle_50x30_Landscape_AI.zip',
        pdf: 'Sticker_Roll_Rectangle_50x30_Landscape_PDF.zip'
      }
    },
    {
      title: '50 x 30 (둥근) ',
      defaults: [],
      allows: ['roll', 'rectangleRollSticker', 'rectangleRollSticker5030round'],
      guide: {
        image: 'roll-sticker-rec-50-x-30-round',
        area: {
          workSpace: {
            size: '53mm x 33mm'
          },
          cuttingLine: {
            size: '50mm x 30mm'
          },
          safeSpace: {
            size: '46mm x 26mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Rectangle_50x30_Landscape_Round_AI.zip',
        pdf: 'Sticker_Roll_Rectangle_50x30_Landscape_Round_PDF.zip'
      }
    },
    {
      title: '60 x 40',
      defaults: [],
      allows: ['roll', 'rectangleRollSticker', 'rectangleRollSticker6040'],
      guide: {
        image: 'roll-sticker-rec-60-x-40',
        area: {
          workSpace: {
            size: '63mm x 43mm'
          },
          cuttingLine: {
            size: '60mm x 40mm'
          },
          safeSpace: {
            size: '56mm x 36mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Rectangle_60x40_Landscape_AI.zip',
        pdf: 'Sticker_Roll_Rectangle_60x40_Landscape_PDF.zip'
      }
    },
    {
      title: '60 x 50',
      defaults: [],
      allows: ['roll', 'rectangleRollSticker', 'rectangleRollSticker6050'],
      guide: {
        image: 'roll-sticker-rec-60-x-50',
        area: {
          workSpace: {
            size: '63mm x 53mm'
          },
          cuttingLine: {
            size: '60mm x 50mm'
          },
          safeSpace: {
            size: '56mm x 46mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Rectangle_60x50_Landscape_AI.zip',
        pdf: 'Sticker_Roll_Rectangle_60x50_Landscape_PDF.zip'
      }
    },
    {
      title: '70 x 30',
      defaults: [],
      allows: ['roll', 'rectangleRollSticker', 'rectangleRollSticker7030'],
      guide: {
        image: 'roll-sticker-rec-70-x-30',
        area: {
          workSpace: {
            size: '73mm x 33mm'
          },
          cuttingLine: {
            size: '70mm x 30mm'
          },
          safeSpace: {
            size: '66mm x 26mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Rectangle_70x30_Landscape_AI.zip',
        pdf: 'Sticker_Roll_Rectangle_70x30_Landscape_PDF.zip'
      }
    },
    {
      title: '85 x 18',
      defaults: [],
      allows: ['roll', 'rectangleRollSticker', 'rectangleRollSticker8518'],
      guide: {
        image: 'roll-sticker-rec-85-x-18',
        area: {
          workSpace: {
            size: '88mm x 21mm'
          },
          cuttingLine: {
            size: '85mm x 18mm'
          },
          safeSpace: {
            size: '81mm x 14mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Rectangle_85x18_Landscape_AI.zip',
        pdf: 'Sticker_Roll_Rectangle_85x18_Landscape_PDF.zip'
      }
    },
    //세로
    {
      title: '18 x 30',
      defaults: [],
      allows: ['roll', 'rectangleRollStickerVertical', 'rectangleRollSticker1830'],
      guide: {
        image: 'roll-sticker-rec-18-x-30',
        area: {
          workSpace: {
            size: '21mm x 33mm'
          },
          cuttingLine: {
            size: '18mm x 30mm'
          },
          safeSpace: {
            size: '14mm x 26mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Rectangle_18x30_Portrait_AI.zip',
        pdf: 'Sticker_Roll_Rectangle_18x30_Portrait_PDF.zip'
      }
    },
    {
      title: '20 x 40',
      defaults: [],
      allows: ['roll', 'rectangleRollStickerVertical', 'rectangleRollSticker2040'],
      guide: {
        image: 'roll-sticker-rec-20-x-40',
        area: {
          workSpace: {
            size: '23mm x 43mm'
          },
          cuttingLine: {
            size: '20mm x 40mm'
          },
          safeSpace: {
            size: '16mm x 36mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Rectangle_20x40_Portrait_AI.zip',
        pdf: 'Sticker_Roll_Rectangle_20x40_Portrait_PDF.zip'
      }
    },
    {
      title: '30 x 50 (직각)',
      defaults: [],
      allows: ['roll', 'rectangleRollStickerVertical', 'rectangleRollSticker3050'],
      guide: {
        image: 'roll-sticker-rec-30-x-50',
        area: {
          workSpace: {
            size: '33mm x 53mm'
          },
          cuttingLine: {
            size: '30mm x 50mm'
          },
          safeSpace: {
            size: '26mm x 46mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Rectangle_30x50_Portrait_AI.zip',
        pdf: 'Sticker_Roll_Rectangle_30x50_Portrait_PDF.zip'
      }
    },
    {
      title: '30 x 50 (둥근) ',
      defaults: [],
      allows: ['roll', 'rectangleRollStickerVertical', 'rectangleRollSticker3050round'],
      guide: {
        image: 'roll-sticker-rec-30-x-50-round',
        area: {
          workSpace: {
            size: '33mm x 53mm'
          },
          cuttingLine: {
            size: '30mm x 50mm'
          },
          safeSpace: {
            size: '26mm x 46mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Rectangle_30x50_Portrait_Round_AI.zip',
        pdf: 'Sticker_Roll_Rectangle_30x50_Portrait_Round_PDF.zip'
      }
    },
    {
      title: '40 x 60',
      defaults: [],
      allows: ['roll', 'rectangleRollStickerVertical', 'rectangleRollSticker4060'],
      guide: {
        image: 'roll-sticker-rec-40-x-60',
        area: {
          workSpace: {
            size: '43mm x 63mm'
          },
          cuttingLine: {
            size: '40mm x 60mm'
          },
          safeSpace: {
            size: '36mm x 56mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Rectangle_40x60_Portrait_AI.zip',
        pdf: 'Sticker_Roll_Rectangle_40x60_Portrait_PDF.zip'
      }
    },
    {
      title: '50 x 60',
      defaults: [],
      allows: ['roll', 'rectangleRollStickerVertical', 'rectangleRollSticker5060'],
      guide: {
        image: 'roll-sticker-rec-60-x-50',
        area: {
          workSpace: {
            size: '53mm x 63mm'
          },
          cuttingLine: {
            size: '50mm x 60mm'
          },
          safeSpace: {
            size: '46mm x 56mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Rectangle_50x60_Portrait_AI.zip',
        pdf: 'Sticker_Roll_Rectangle_50x60_Portrait_PDF.zip'
      }
    },
    {
      title: '30 x 70',
      defaults: [],
      allows: ['roll', 'rectangleRollStickerVertical', 'rectangleRollSticker3070'],
      guide: {
        image: 'roll-sticker-rec-30-x-70',
        area: {
          workSpace: {
            size: '33mm x 73mm'
          },
          cuttingLine: {
            size: '30mm x 70mm'
          },
          safeSpace: {
            size: '26mm x 66mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Rectangle_30x70_Portrait_AI.zip',
        pdf: 'Sticker_Roll_Rectangle_30x70_Portrait_PDF.zip'
      }
    },
    {
      title: '18 x 85',
      defaults: [],
      allows: ['roll', 'rectangleRollStickerVertical', 'rectangleRollSticker1885'],
      guide: {
        image: 'roll-sticker-rec-18-x-85',
        area: {
          workSpace: {
            size: '21mm x 88mm'
          },
          cuttingLine: {
            size: '18mm x 85mm'
          },
          safeSpace: {
            size: '14mm x 81mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Rectangle_18x85_Portrait_AI.zip',
        pdf: 'Sticker_Roll_Rectangle_18x85_Portrait_PDF.zip'
      }
    },

    //세로끝
    {
      title: '35 x 35',
      defaults: [],
      allows: ['roll', 'heartRollSticker', 'heartRollSticker35'],
      guide: {
        image: 'roll-sticker-heart-35-x-35',
        area: {
          workSpace: {
            size: '38mm x 38mm'
          },
          cuttingLine: {
            size: '35mm x 35mm'
          },
          safeSpace: {
            size: '31mm x 31mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Heart_35x35_AI.zip',
        pdf: 'Sticker_Roll_Heart_35x35_PDF.zip'
      }
    },
    {
      title: '60 x 60',
      defaults: [],
      allows: ['roll', 'heartRollSticker', 'heartRollSticker60'],
      guide: {
        image: 'roll-sticker-heart-60-x-60',
        area: {
          workSpace: {
            size: '63mm x 63mm'
          },
          cuttingLine: {
            size: '60mm x 60mm'
          },
          safeSpace: {
            size: '56mm x 56mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Heart_60x60_AI.zip',
        pdf: 'Sticker_Roll_Heart_60x60_PDF.zip'
      }
    },

    {
      title: '35 x 35',
      defaults: [],
      allows: ['roll', 'starRollSticker', 'starRollSticker35'],
      guide: {
        image: 'roll-sticker-star-35-x-35',
        area: {
          workSpace: {
            size: '38mm x 38mm'
          },
          cuttingLine: {
            size: '35mm x 35mm'
          },
          safeSpace: {
            size: '31mm x 31mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Star_35x35_AI.zip',
        pdf: 'Sticker_Roll_Star_35x35_PDF.zip'
      }
    },
    {
      title: '60 x 60',
      defaults: [],
      allows: ['roll', 'starRollSticker', 'starRollSticker60'],
      guide: {
        image: 'roll-sticker-star-60-x-60',
        area: {
          workSpace: {
            size: '63mm x 63mm'
          },
          cuttingLine: {
            size: '60mm x 60mm'
          },
          safeSpace: {
            size: '56mm x 56mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Star_60x60_AI.zip',
        pdf: 'Sticker_Roll_Star_60x60_PDF.zip'
      }
    },

    {
      title: '20 x 20',
      defaults: [],
      allows: ['roll', 'squareRollSticker', 'squareRollSticker20'],
      guide: {
        image: 'roll-sticker-sq-20-x-20',
        area: {
          workSpace: {
            size: '23mm x 23mm'
          },
          cuttingLine: {
            size: '20mm x 20mm'
          },
          safeSpace: {
            size: '16mm x 16mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Square_20x20_AI.zip',
        pdf: 'Sticker_Roll_Square_20x20_PDF.zip'
      }
    },
    {
      title: '30 x 30',
      defaults: [],
      allows: ['roll', 'squareRollSticker', 'squareRollSticker30'],
      guide: {
        image: 'roll-sticker-sq-30-x-30',
        area: {
          workSpace: {
            size: '33mm x 33mm'
          },
          cuttingLine: {
            size: '30mm x 30mm'
          },
          safeSpace: {
            size: '26mm x 26mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Square_30x30_AI.zip',
        pdf: 'Sticker_Roll_Square_30x30_PDF.zip'
      }
    },
    {
      title: '45 x 45',
      defaults: [],
      allows: ['roll', 'squareRollSticker', 'squareRollSticker45'],
      guide: {
        image: 'roll-sticker-sq-45-x-45',
        area: {
          workSpace: {
            size: '48mm x 48mm'
          },
          cuttingLine: {
            size: '45mm x 45mm'
          },
          safeSpace: {
            size: '41mm x 41mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Square_45x45_AI.zip',
        pdf: 'Sticker_Roll_Square_45x45_PDF.zip'
      }
    },
    {
      title: '60 x 60',
      defaults: [],
      allows: ['roll', 'squareRollSticker', 'squareRollSticker60'],
      guide: {
        image: 'roll-sticker-sq-60-x-60',
        area: {
          workSpace: {
            size: '63mm x 63mm'
          },
          cuttingLine: {
            size: '60mm x 60mm'
          },
          safeSpace: {
            size: '56mm x 56mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Square_60x60_AI.zip',
        pdf: 'Sticker_Roll_Square_60x60_PDF.zip'
      }
    },





    {
      title: '60 x 60',
      defaults: [],
      allows: ['roll', 'roundRollSticker', 'roundRollSticker60'],
      guide: {
        image: 'roll-sticker-round-60-x-60',
        area: {
          workSpace: {
            size: '63mm x 63mm'
          },
          cuttingLine: {
            size: '60mm x 60mm'
          },
          safeSpace: {
            size: '56mm x 56mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Round_60x60_AI.zip',
        pdf: 'Sticker_Roll_Round_60x60_PDF.zip'
      }
    },
    {
      title: '85 x 55',
      defaults: [],
      allows: ['roll', 'rectangleRollSticker', 'rectangleRollSticker8555' ],
      guide: {
        image: 'roll-sticker-rec-85-x-55',
        area: {
          workSpace: {
            size: '88mm x 58mm'
          },
          cuttingLine: {
            size: '85mm x 55mm'
          },
          safeSpace: {
            size: '81mm x 51mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Rectangle_85x55_Landscape_AI.zip',
        pdf: 'Sticker_Roll_Rectangle_85x55_Landscape_PDF.zip'
      }
    },
    {
      title: '55 x 85',
      defaults: [],
      allows: ['roll', 'rectangleRollStickerVertical', 'rectangleRollSticker5585'],
      guide: {
        image: 'roll-sticker-rec-55-x-85',
        area: {
          workSpace: {
            size: '58mm x 88mm'
          },
          cuttingLine: {
            size: '55mm x 85mm'
          },
          safeSpace: {
            size: '51mm x 81mm'
          }
        },
        description: ``
      },
      files: {
        ai: 'Sticker_Roll_Rectangle_55x85_Portrait_AI.zip',
        pdf: 'Sticker_Roll_Rectangle_55x85_Portrait_PDF.zip'
      }
    },
    {
      title: 'A6',
      defaults: ['diy'],
      allows: ['diy', 'standard', 'craft', 'hologram', 'transparency', 'repp80'],
      guide: {
        image: 'sticker-img-diy-a-6',
        area: {
          workSpace: {
            size: '109mm x 152mm'
          },
          safeSpace: {
            size: '105mm x 148mm'
          }
        },
        description: `<em>DIY스티커는 재단의 개념이 없으므로 재단 영역이 없습니다.</em>`
      },
      files: {
        ai: 'DIYSticker_A6_105x148_AI.zip',
        pdf: 'DIYSticker_A6_105x148_PDF.zip',
        jpg: 'DIYSticker_A6_105x148_JPG.zip'
      }
    },
    {
      title: 'A5',
      defaults: [],
      allows: ['diy', 'standard', 'craft', 'hologram', 'transparency', 'repp80'],
      guide: {
        image: 'sticker-img-diy-a-5',
        area: {
          workSpace: {
            size: '152mm x 214mm'
          },
          safeSpace: {
            size: '148mm x 210mm'
          }
        },
        description: `<em>DIY스티커는 재단의 개념이 없으므로 재단 영역이 없습니다.</em>`
      },
      files: {
        ai: 'DIYSticker_A5_148x210_AI.zip',
        pdf: 'DIYSticker_A5_148x210_PDF.zip',
        jpg: 'DIYSticker_A5_148x210_JPG.zip'
      }
    },
    {
      title: 'A4',
      defaults: [],
      allows: ['diy', 'standard', 'craft', 'hologram', 'transparency', 'repp80'],
      guide: {
        image: 'sticker-img-diy-a-4',
        area: {
          workSpace: {
            size: '214mm x 301mm'
          },
          safeSpace: {
            size: '210mm x 297mm'
          }
        },
        description: `<em>DIY스티커는 재단의 개념이 없으므로 재단 영역이 없습니다.</em>`
      },
      files: {
        ai: 'DIYSticker_A4_210x297_AI.zip',
        pdf: 'DIYSticker_A4_210x297_PDF.zip',
        jpg: 'DIYSticker_A4_210x297_JPG.zip'
      }
    },
    {
      title: '75 x 170',
      defaults: ['diy'],
      allows: ['diy', 'repp80'],
      guide: {
        image: 'sticker-img-diy-75',
        area: {
          workSpace: {
            size: '79mm x 174mm'
          },
          safeSpace: {
            size: '75mm x 170mm'
          }
        },
        description: `<em>DIY스티커는 재단의 개념이 없으므로 재단 영역이 없습니다.</em>`
      },
      files: {
        ai: 'Sticker_DIY_75x170_AI.zip',
        pdf: 'Sticker_DIY_75x170_PDF.zip'
      }
    },
    {
      title: '100 x 100',
      defaults: ['diy'],
      allows: ['diy', 'repp80'],
      guide: {
        image: 'sticker-img-diy-100',
        area: {
          workSpace: {
            size: '104mm x 104mm'
          },
          safeSpace: {
            size: '100mm x 100mm'
          }
        },
        description: `<em>DIY스티커는 재단의 개념이 없으므로 재단 영역이 없습니다.</em>`
      },
      files: {
        ai: 'Sticker_DIY_100x100_AI.zip',
        pdf: 'Sticker_DIY_100x100_PDF.zip'
      }
    },
    {
      title: '30',
      defaults: ['circle'],
      allows: ['circle', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-round-3030',
        area: {
          workSpace: {
            size: '40mm x 40mm'
          },
          cuttingLine: {
            size: '30mm x 30mm'
          },
          safeSpace: {
            size: '26mm x 26mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Round_30x30_AI.zip',
        pdf: 'Sticker_Round_30x30_PDF.zip',
        jpg: 'Sticker_Round_30x30.jpg'
      }
    },
    {
      title: '40',
      defaults: [],
      allows: ['circle', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-round-4040',
        area: {
          workSpace: {
            size: '50mm x 50mm'
          },
          cuttingLine: {
            size: '40mm x 40mm'
          },
          safeSpace: {
            size: '36mm x 36mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Round_40x40_AI.zip',
        pdf: 'Sticker_Round_40x40_PDF.zip',
        jpg: 'Sticker_Round_40x40.jpg'
      }
    },
    {
      title: '50',
      defaults: [],
      allows: ['circle', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-round-5050',
        area: {
          workSpace: {
            size: '60mm x 60mm'
          },
          cuttingLine: {
            size: '50mm x 50mm'
          },
          safeSpace: {
            size: '46mm x 46mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Round_50x50_AI.zip',
        pdf: 'Sticker_Round_50x50_PDF.zip',
        jpg: 'Sticker_Round_50x50.jpg'
      }
    },
    {
      title: '60',
      defaults: [],
      allows: ['circle', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-round-6060',
        area: {
          workSpace: {
            size: '70mm x 70mm'
          },
          cuttingLine: {
            size: '60mm x 60mm'
          },
          safeSpace: {
            size: '56mm x 56mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Round_60x60_AI.zip',
        pdf: 'Sticker_Round_60x60_PDF.zip',
        jpg: 'Sticker_Round_60x60.jpg'
      }
    },
    {
      title: '80',
      defaults: [],
      allows: ['circle', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-round-8080',
        area: {
          workSpace: {
            size: '90mm x 90mm'
          },
          cuttingLine: {
            size: '80mm x 80mm'
          },
          safeSpace: {
            size: '76mm x 76mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Round_80x80_AI.zip',
        pdf: 'Sticker_Round_80x80_PDF.zip',
        jpg: 'Sticker_Round_80x80.jpg'
      }
    },
    /*		{
			title: '100',
			defaults: [],
			allows: [ 'circle', 'standard', 'craft', 'hologram', 'transparency' ],
			guide: {
				image: 'sticker-img-round-100100',
				area: {
					workSpace: {
						size: '110mm x 110mm'
					},
					cuttingLine: {
						size: '100mm x 100mm'
					},
					safeSpace: {
						size: '96mm x 96mm'
					}
				},
				description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
			},
			files: {
				ai: 'Sticker_Round_100x100_AI.zip',
				pdf: 'Sticker_Round_100x100_PDF.zip',
				jpg: 'Sticker_Round_100x100.jpg'
			}
		},*/
    {
      title: '15 x 15',
      defaults: ['square'],
      allows: ['square', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-square-1515',
        area: {
          workSpace: {
            size: '21mm x 21mm'
          },
          cuttingLine: {
            size: '15mm x 15mm'
          },
          safeSpace: {
            size: '11mm x 20mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Square_15x15_AI.zip',
        pdf: 'Sticker_Square_15x15_PDF.zip'
      }
    },
    {
      title: '24 x 24',
      defaults: ['square'],
      allows: ['square', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-square-2424',
        area: {
          workSpace: {
            size: '34mm x 34mm'
          },
          cuttingLine: {
            size: '24mm x 24mm'
          },
          safeSpace: {
            size: '20mm x 20mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Square_24x24_AI.zip',
        pdf: 'Sticker_Square_24x24_PDF.zip',
        jpg: 'Sticker_Square_24x24.jpg'
      }
    },
    {
      title: '36 x 36',
      defaults: [],
      allows: ['square', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-square-3636',
        area: {
          workSpace: {
            size: '46mm x 46mm'
          },
          cuttingLine: {
            size: '36mm x 36mm'
          },
          safeSpace: {
            size: '32mm x 32mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Square_36x36_AI.zip',
        pdf: 'Sticker_Square_36x36_PDF.zip',
        jpg: 'Sticker_Square_36x36.jpg'
      }
    },
    {
      title: '48 x 48',
      defaults: [],
      allows: ['square', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-square-4848',
        area: {
          workSpace: {
            size: '58mm x 58mm'
          },
          cuttingLine: {
            size: '48mm x 48mm'
          },
          safeSpace: {
            size: '44mm x 44mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Square_48x48_AI.zip',
        pdf: 'Sticker_Square_48x48_PDF.zip',
        jpg: 'Sticker_Square_48x48.jpg'
      }
    },
    {
      title: '60 x 60',
      defaults: [],
      allows: ['square', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-square-6060',
        area: {
          workSpace: {
            size: '70mm x 70mm'
          },
          cuttingLine: {
            size: '60mm x 60mm'
          },
          safeSpace: {
            size: '56mm x 56mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Square_60x60_AI.zip',
        pdf: 'Sticker_Square_60x60_PDF.zip',
        jpg: 'Sticker_Square_60x60.jpg'
      }
    },
    /*		{
			title: '80 x 80',
			defaults: [],
			allows: [ 'square', 'standard', 'craft', 'hologram', 'transparency' ],
			guide: {
				image: 'sticker-img-square-8080',
				area: {
					workSpace: {
						size: '90mm x 90mm'
					},
					cuttingLine: {
						size: '80mm x 80mm'
					},
					safeSpace: {
						size: '76mm x 76mm'
					}
				},
				description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
			},
			files: {
				ai: 'Sticker_Square_80x80_AI.zip',
				pdf: 'Sticker_Square_80x80_PDF.zip',
				jpg: 'Sticker_Square_80x80.jpg'
			}
		},
		{
			title: '120 x 120',
			defaults: [],
			allows: [ 'square', 'standard', 'craft', 'hologram', 'transparency' ],
			guide: {
				image: 'sticker-img-square-120120',
				area: {
					workSpace: {
						size: '130mm x 130mm'
					},
					cuttingLine: {
						size: '120mm x 120mm'
					},
					safeSpace: {
						size: '116mm x 116mm'
					}
				},
				description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
			},
			files: {
				ai: 'Sticker_Square_120x120_AI.zip',
				pdf: 'Sticker_Square_120x120_PDF.zip',
				jpg: 'Sticker_Square_120x120.jpg'
			}
		},*/
    {
      title: '30 x 12',
      defaults: ['rectangle'],
      allows: ['rectangle', 'standard', 'craft', 'hologram', 'transparency', 'rectangleHorizontal', 'rectangleHorizontal3012'],
      guide: {
        image: 'sticker-img-ractangle-30-x-12',
        area: {
          workSpace: {
            size: '34mm x 16mm'
          },
          cuttingLine: {
            size: '30mm x 12mm'
          },
          safeSpace: {
            size: '26mm x 8mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Rectangle_Landscape_30x12_AI.zip',
        pdf: 'Sticker_Rectangle_Landscape_30x12_PDF.zip'
      }
    },
    {
      title: '40 x 26',
      defaults: ['rectangle'],
      allows: ['rectangle', 'standard', 'craft', 'hologram', 'transparency', 'rectangleHorizontal', 'rectangleHorizontal4026'],
      guide: {
        image: 'sticker-img-rectangle-4026',
        area: {
          workSpace: {
            size: '44mm x 30mm'
          },
          cuttingLine: {
            size: '40mm x 26mm'
          },
          safeSpace: {
            size: '36mm x 22mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Rectangle_40x26_Landscape_AI.zip',
        pdf: 'Sticker_Rectangle_40x26_Landscape_PDF.zip',
        jpg: 'Sticker_Rectangle_40x26_Landscape.jpg'
      }
    },
    {
      title: '50 x 30',
      defaults: ['rectangle'],
      allows: ['rectangle', 'standard', 'craft', 'hologram', 'transparency', 'rectangleHorizontal', 'rectangleHorizontal5030'],
      guide: {
        image: 'sticker-img-ractangle-50-x-30',
        area: {
          workSpace: {
            size: '54mm x 34mm'
          },
          cuttingLine: {
            size: '50mm x 30mm'
          },
          safeSpace: {
            size: '46mm x 26mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Rectangle_Landscape_50x30_AI.zip',
        pdf: 'Sticker_Rectangle_Landscape_50x30_PDF.zip'
      }
    },
    {
      title: '65 x 42',
      defaults: [],
      allows: ['rectangle', 'standard', 'craft', 'hologram', 'transparency', 'rectangleHorizontal', 'rectangleHorizontal6542'],
      guide: {
        image: 'sticker-img-rectangle-6542',
        area: {
          workSpace: {
            size: '69mm x 47mm'
          },
          cuttingLine: {
            size: '65mm x 42mm'
          },
          safeSpace: {
            size: '61mm x 38mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Rectangle_65x42_Landscape_AI.zip',
        pdf: 'Sticker_Rectangle_65x42_Landscape_PDF.zip',
        jpg: 'Sticker_Rectangle_65x42_Landscape.jpg'
      }
    },
    {
      title: '85 x 55',
      defaults: [],
      allows: ['rectangle', 'standard', 'craft', 'hologram', 'transparency', 'rectangleHorizontal', 'rectangleHorizontal8555'],
      guide: {
        image: 'sticker-img-rectangle-8555',
        area: {
          workSpace: {
            size: '89mm x 61mm'
          },
          cuttingLine: {
            size: '85mm x 55mm'
          },
          safeSpace: {
            size: '81mm x 51mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Rectangle_85x55_Landscape_AI.zip',
        pdf: 'Sticker_Rectangle_85x55_Landscape_PDF.zip',
        jpg: 'Sticker_Rectangle_85x55_Landscape.jpg'
      }
    },
    {
      title: '105 x 70',
      defaults: ['rectangle'],
      allows: ['rectangle', 'standard', 'craft', 'hologram', 'transparency', 'rectangleHorizontal', 'rectangleHorizontal10570'],
      guide: {
        image: 'sticker-img-ractangle-10570',
        area: {
          workSpace: {
            size: '109mm x 74mm'
          },
          cuttingLine: {
            size: '105mm x 70mm'
          },
          safeSpace: {
            size: '101mm x 66mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Rectangle_Landscape_105x70_AI.zip',
        pdf: 'Sticker_Rectangle_Landscape_105x70_PDF.zip'
      }
    },
    {
      title: '120 x 90',
      defaults: ['rectangle'],
      allows: ['rectangle', 'standard', 'craft', 'hologram', 'transparency', 'rectangleHorizontal', 'rectangleHorizontal12090'],
      guide: {
        image: 'sticker-img-ractangle-12090',
        area: {
          workSpace: {
            size: '124mm x 94mm'
          },
          cuttingLine: {
            size: '120mm x 90mm'
          },
          safeSpace: {
            size: '116mm x 86mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Rectangle_Landscape_120x90_AI.zip',
        pdf: 'Sticker_Rectangle_Landscape_120x90_PDF.zip'
      }
    },


    //

    {
      title: '12 x 30',
      defaults: ['rectangle'],
      allows: ['rectangle', 'standard', 'craft', 'hologram', 'transparency', 'rectangleVertical', 'rectangleVertical1230'],
      guide: {
        image: 'sticker-img-ractangle-12-x-30',
        area: {
          workSpace: {
            size: '16mm x 34mm'
          },
          cuttingLine: {
            size: '12mm x 30mm'
          },
          safeSpace: {
            size: '8mm x 26mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Rectangle_Portrait_12x30_AI.zip',
        pdf: 'Sticker_Rectangle_Portrait_12x30_PDF.zip'
      }
    },
    {
      title: '26 x 40',
      defaults: [],
      allows: ['rectangle', 'standard', 'craft', 'hologram', 'transparency', 'rectangleVertical', 'rectangleVertical2640'],
      guide: {
        image: 'sticker-img-rectangle-2640',
        area: {
          workSpace: {
            size: '30mm x 44mm'
          },
          cuttingLine: {
            size: '26mm x 40mm'
          },
          safeSpace: {
            size: '22mm x 36mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Rectangle_40x26_Portrait_AI.zip',
        pdf: 'Sticker_Rectangle_40x26_Portrait_PDF.zip',
        jpg: 'Sticker_Rectangle_40x26_Portrait.jpg'
      }
    },
    {
      title: '30 x 50',
      defaults: ['rectangle'],
      allows: ['rectangle', 'standard', 'craft', 'hologram', 'transparency', 'rectangleVertical', 'rectangleVertical3050'],
      guide: {
        image: 'sticker-img-ractangle-30-x-50',
        area: {
          workSpace: {
            size: '34mm x 54mm'
          },
          cuttingLine: {
            size: '30mm x 50mm'
          },
          safeSpace: {
            size: '26mm x 46mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Rectangle_Portrait_30x50_AI.zip',
        pdf: 'Sticker_Rectangle_Portrait_30x50_PDF.zip'
      }
    },
    {
      title: '42 x 65',
      defaults: [],
      allows: ['rectangle', 'standard', 'craft', 'hologram', 'transparency', 'rectangleVertical', 'rectangleVertical4265'],
      guide: {
        image: 'sticker-img-rectangle-4265',
        area: {
          workSpace: {
            size: '47mm x 69mm'
          },
          cuttingLine: {
            size: '42mm x 65mm'
          },
          safeSpace: {
            size: '38mm x 61mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Rectangle_65x42_Portrait_AI.zip',
        pdf: 'Sticker_Rectangle_65x42_Portrait_PDF.zip',
        jpg: 'Sticker_Rectangle_65x42_Portrait.jpg'
      }
    },
    {
      title: '55 x 85',
      defaults: [],
      allows: ['rectangle', 'standard', 'craft', 'hologram', 'transparency', 'rectangleVertical', 'rectangleVertical5585'],
      guide: {
        image: 'sticker-img-rectangle-5585',
        area: {
          workSpace: {
            size: '61mm x 89mm'
          },
          cuttingLine: {
            size: '55mm x 85mm'
          },
          safeSpace: {
            size: '51mm x 81mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Rectangle_85x55_Portrait_AI.zip',
        pdf: 'Sticker_Rectangle_85x55_Portrait_PDF.zip',
        jpg: 'Sticker_Rectangle_85x55_Portrait.jpg'
      }
    },
    {
      title: '70 x 105',
      defaults: ['rectangle'],
      allows: ['rectangle', 'standard', 'craft', 'hologram', 'transparency', 'rectangleVertical', 'rectangleVertical70105'],
      guide: {
        image: 'sticker-img-ractangle-70105',
        area: {
          workSpace: {
            size: '74mm x 109mm'
          },
          cuttingLine: {
            size: '70mm x 105mm'
          },
          safeSpace: {
            size: '66mm x 101mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Rectangle_Portrait_70x105_AI.zip',
        pdf: 'Sticker_Rectangle_Portrait_70x105_PDF.zip'
      }
    },
    {
      title: '90 x 120',
      defaults: ['rectangle'],
      allows: ['rectangle', 'standard', 'craft', 'hologram', 'transparency', 'rectangleVertical', 'rectangleVertical90120'],
      guide: {
        image: 'sticker-img-ractangle-90120',
        area: {
          workSpace: {
            size: '94mm x 124mm'
          },
          cuttingLine: {
            size: '90mm x 120mm'
          },
          safeSpace: {
            size: '86mm x 116mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Rectangle_Portrait_90x120_AI.zip',
        pdf: 'Sticker_Rectangle_Portrait_90x120_PDF.zip'
      }
    },




    {
      title: '40 x 10',
      defaults: ['wide'],
      allows: ['wide', 'standard', 'craft', 'hologram', 'transparency', 'wideHorizontal', 'wideHorizontal4010'],
      guide: {
        image: 'sticker-img-wide-4010',
        area: {
          workSpace: {
            size: '44mm x 13mm'
          },
          cuttingLine: {
            size: '40mm x 10mm'
          },
          safeSpace: {
            size: '36mm x 6mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Wide_40x10_Landscape_AI.zip',
        pdf: 'Sticker_Wide_40x10_Landscape_PDF.zip',
        jpg: 'Sticker_Wide_40x10_Landscape.jpg'
      }
    },
    {
      title: '60 x 15',
      defaults: ['wide'],
      allows: ['wide', 'standard', 'craft', 'hologram', 'transparency', 'wideHorizontal', 'wideHorizontal6015'],
      guide: {
        image: 'sticker-img-wide-6015',
        area: {
          workSpace: {
            size: '64mm x 19mm'
          },
          cuttingLine: {
            size: '60mm x 15mm'
          },
          safeSpace: {
            size: '56mm x 11mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Wide_Landscape_60x15_AI.zip',
        pdf: 'Sticker_Wide_Landscape_60x15_PDF.zip'
      }
    },
    {
      title: '80 x 20',
      defaults: [],
      allows: ['wide', 'standard', 'craft', 'hologram', 'transparency', 'wideHorizontal', 'wideHorizontal8020'],
      guide: {
        image: 'sticker-img-wide-8020',
        area: {
          workSpace: {
            size: '84mm x 24mm'
          },
          cuttingLine: {
            size: '80mm x 20mm'
          },
          safeSpace: {
            size: '76mm x 16mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Wide_80x20_Landscape_AI.zip',
        pdf: 'Sticker_Wide_80x20_Landscape_PDF.zip',
        jpg: 'Sticker_Wide_80x20_Landscape.jpg'
      }
    },
    {
      title: '120 x 30',
      defaults: [],
      allows: ['standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-wide-12030',
        area: {
          workSpace: {
            size: '124mm x 33mm'
          },
          cuttingLine: {
            size: '120mm x 30mm'
          },
          safeSpace: {
            size: '116mm x 26mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Wide_120x30_Landscape_AI.zip',
        pdf: 'Sticker_Wide_120x30_Landscape_PDF.zip',
        jpg: 'Sticker_Wide_120x30_Landscape.jpg'
      }
    },
    {
      title: '160 x 40',
      defaults: [],
      allows: ['standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-wide-16040',
        area: {
          workSpace: {
            size: '164mm x 44mm'
          },
          cuttingLine: {
            size: '160mm x 40mm'
          },
          safeSpace: {
            size: '156mm x 36mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Wide_160x40_Landscape_AI.zip',
        pdf: 'Sticker_Wide_160x40_Landscape_PDF.zip',
        jpg: 'Sticker_Wide_160x40_Landscape.jpg'
      }
    },
    {
      title: '200 x 50',
      defaults: [],
      allows: ['standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-wide-20050',
        area: {
          workSpace: {
            size: '204mm x 54mm'
          },
          cuttingLine: {
            size: '200mm x 50mm'
          },
          safeSpace: {
            size: '196mm x 46mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Wide_200x50_Landscape_AI.zip',
        pdf: 'Sticker_Wide_200x50_Landscape_PDF.zip',
        jpg: 'Sticker_Wide_200x50_Landscape.jpg'
      }
    },
    {
      title: '10 x 40',
      defaults: [],
      allows: ['wide', 'standard', 'craft', 'hologram', 'transparency', 'wideVertical', 'wideVertical1040'],
      guide: {
        image: 'sticker-img-wide-1040',
        area: {
          workSpace: {
            size: '13mm x 44mm'
          },
          cuttingLine: {
            size: '10mm x 40mm'
          },
          safeSpace: {
            size: '6mm x 36mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Wide_40x10_Portrait_AI.zip',
        pdf: 'Sticker_Wide_40x10_Portrait_PDF.zip',
        jpg: 'Sticker_Wide_40x10_Portrait.jpg'
      }
    },
    {
      title: '15 x 60',
      defaults: ['wide'],
      allows: ['wide', 'standard', 'craft', 'hologram', 'transparency', 'wideVertical', 'wideVertical1560'],
      guide: {
        image: 'sticker-img-wide-1560',
        area: {
          workSpace: {
            size: '19mm x 64mm'
          },
          cuttingLine: {
            size: '15mm x 60mm'
          },
          safeSpace: {
            size: '11mm x 56mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Wide_Portrait_15x60_AI.zip',
        pdf: 'Sticker_Wide_Portrait_15x60_PDF.zip'
      }
    },
    {
      title: '20 x 80',
      defaults: [],
      allows: ['wide', 'standard', 'craft', 'hologram', 'transparency', 'wideVertical', 'wideVertical2080'],
      guide: {
        image: 'sticker-img-wide-2080',
        area: {
          workSpace: {
            size: '24mm x 84mm'
          },
          cuttingLine: {
            size: '20mm x 80mm'
          },
          safeSpace: {
            size: '16mm x 76mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_Wide_80x20_Portrait_AI.zip',
        pdf: 'Sticker_Wide_80x20_Portrait_PDF.zip',
        jpg: 'Sticker_Wide_80x20_Portrait.jpg'
      }
    },
    /*		{
			title: '30 x 120',
			defaults: [],
			allows: [ 'wide', 'standard', 'craft', 'hologram', 'transparency' ],
			guide: {
				image: 'sticker-img-wide-30120',
				area: {
					workSpace: {
						size: '33mm x 124mm'
					},
					cuttingLine: {
						size: '30mm x 120mm'
					},
					safeSpace: {
						size: '26mm x 116mm'
					}
				},
				description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
			},
			files: {
				ai: 'Sticker_Wide_120x30_Portrait_AI.zip',
				pdf: 'Sticker_Wide_120x30_Portrait_PDF.zip',
				jpg: 'Sticker_Wide_120x30_Portrait.jpg'
			}
		},
		{
			title: '40 x 160',
			defaults: [],
			allows: [ 'wide', 'standard', 'craft', 'hologram', 'transparency' ],
			guide: {
				image: 'sticker-img-wide-40160',
				area: {
					workSpace: {
						size: '44mm x 164mm'
					},
					cuttingLine: {
						size: '40mm x 160mm'
					},
					safeSpace: {
						size: '36mm x 156mm'
					}
				},
				description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
			},
			files: {
				ai: 'Sticker_Wide_160x40_Portrait_AI.zip',
				pdf: 'Sticker_Wide_160x40_Portrait_PDF.zip',
				jpg: 'Sticker_Wide_160x40_Portrait.jpg'
			}
		},
		{
			title: '50 x 200',
			defaults: [],
			allows: [ 'wide', 'standard', 'craft', 'hologram', 'transparency' ],
			guide: {
				image: 'sticker-img-wide-50200',
				area: {
					workSpace: {
						size: '54mm x 204mm'
					},
					cuttingLine: {
						size: '50mm x 200mm'
					},
					safeSpace: {
						size: '46mm x 196mm'
					}
				},
				description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
			},
			files: {
				ai: 'Sticker_Wide_200x50_Portrait_AI.zip',
				pdf: 'Sticker_Wide_200x50_Portrait_PDF.zip',
				jpg: 'Sticker_Wide_200x50_Portrait.jpg'
			}
		},*/
    {
      title: 'A6 세로',
      defaults: ['a-size'],
      allows: ['a-size', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-a-6-vertical',
        area: {
          workSpace: {
            size: '109mm x 152mm'
          },
          cuttingLine: {
            size: '105mm x 148mm'
          },
          safeSpace: {
            size: '97mm x 140mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_A6_105x148_Portrait_AI.zip',
        pdf: 'Sticker_A6_105x148_Portrait_PDF.zip',
        jpg: 'Sticker_A6_105x148_Portrait.jpg'
      }
    },
    {
      title: 'A5 세로',
      defaults: [],
      allows: ['a-size', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-a-5-vertical',
        area: {
          workSpace: {
            size: '152mm x 214mm'
          },
          cuttingLine: {
            size: '148mm x 210mm'
          },
          safeSpace: {
            size: '136mm x 198mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_A5_148x210_Portrait_AI.zip',
        pdf: 'Sticker_A5_148x210_Portrait_PDF.zip',
        jpg: 'Sticker_A5_148x210_Portrait.jpg'
      }
    },
    {
      title: 'A4 세로',
      defaults: [],
      allows: ['a-size', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-a-4-vertical',
        area: {
          workSpace: {
            size: '214mm x 301mm'
          },
          cuttingLine: {
            size: '210mm x 297mm'
          },
          safeSpace: {
            size: '190mm x 277mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_A4_210x297_Portrait_AI.zip',
        pdf: 'Sticker_A4_210x297_Portrait_PDF.zip',
        jpg: 'Sticker_A4_210x297_Portrait.jpg'
      }
    },
    {
      title: 'A6 가로',
      defaults: [],
      allows: ['a-size', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-a-6-horizontal',
        area: {
          workSpace: {
            size: '152mm x 109mm'
          },
          cuttingLine: {
            size: '148mm x 105mm'
          },
          safeSpace: {
            size: '140mm x 97mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_A6_105x148_Landscape_AI.zip',
        pdf: 'Sticker_A6_105x148_Landscape_PDF.zip',
        jpg: 'Sticker_A6_105x148_Landscape.jpg'
      }
    },
    {
      title: 'A5 가로',
      defaults: [],
      allows: ['a-size', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-a-5-horizontal',
        area: {
          workSpace: {
            size: '214mm x 152mm'
          },
          cuttingLine: {
            size: '210mm x 148mm'
          },
          safeSpace: {
            size: '198mm x 136mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_A5_148x210_Landscape_AI.zip',
        pdf: 'Sticker_A5_148x210_Landscape_PDF.zip',
        jpg: 'Sticker_A5_148x210_Landscape.jpg'
      }
    },
    {
      title: 'A4 가로',
      defaults: [],
      allows: ['a-size', 'standard', 'craft', 'hologram', 'transparency'],
      guide: {
        image: 'sticker-img-a-4-horizontal',
        area: {
          workSpace: {
            size: '301mm x 214mm'
          },
          cuttingLine: {
            size: '297mm x 210mm'
          },
          safeSpace: {
            size: '277mm x 190mm'
          }
        },
        description: `<em>크라프트, 홀로그램, 투명 스티커 제작 시 [화이트 배경]을<br/>진행하지 않을 경우 반드시 “화이트” 레이어를 삭제해 주세요.</em>`
      },
      files: {
        ai: 'Sticker_A4_210x297_Landscape_AI.zip',
        pdf: 'Sticker_A4_210x297_Landscape_PDF.zip',
        jpg: 'Sticker_A4_210x297_Landscape.jpg'
      }
    }
  ],
  COLOR_DECAL: [
    {
      title: 'A5',
      defaults: [],
      allows: ['horizontal', 'horizontalA5'],
      guide: {
        image: 'decal-a-5-horizon',
        area: {
          workSpace: {
            size: '210mm x 148mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Color_A5_210x148_Landscape_AI.zip',
        pdf: 'Sticker_Decal_Color_A5_210x148_Landscape_PDF.zip'
      }
    },
    {
      title: 'A4',
      defaults: [],
      allows: ['horizontal', 'horizontalA4'],
      guide: {
        image: 'decal-a-4-horizon',
        area: {
          workSpace: {
            size: '297mm x 210mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Color_A4_297x210_Landscape_AI.zip',
        pdf: 'Sticker_Decal_Color_A4_297x210_Landscape_PDF.zip'
      }
    },
    {
      title: 'A3',
      defaults: [],
      allows: ['horizontal', 'horizontalA3'],
      guide: {
        image: 'decal-a-3-horizon',
        area: {
          workSpace: {
            size: '420mm x 297mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Color_A3_420x297_Landscape_AI.zip',
        pdf: 'Sticker_Decal_Color_A3_420x297_Landscape_PDF.zip'
      }
    },
    {
      title: 'A2',
      defaults: [],
      allows: ['horizontal', 'horizontalA2'],
      guide: {
        image: 'decal-a-2-horizon',
        area: {
          workSpace: {
            size: '594mm x 420mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Color_A2_594x420_Landscape_AI.zip',
        pdf: 'Sticker_Decal_Color_A2_594x420_Landscape_PDF.zip'
      }
    },
    {
      title: 'A5',
      defaults: [],
      allows: ['vertical', 'verticalA5'],
      guide: {
        image: 'decal-a-5-vertical',
        area: {
          workSpace: {
            size: '148mm x 210mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Color_A5_148x210_Portrait_AI.zip',
        pdf: 'Sticker_Decal_Color_A5_148x210_Portrait_PDF.zip'
      }
    },
    {
      title: 'A4',
      defaults: [],
      allows: ['vertical', 'verticalA4'],
      guide: {
        image: 'decal-a-4-vertical',
        area: {
          workSpace: {
            size: '210mm x 297mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Color_A4_210x297_Portrait_AI.zip',
        pdf: 'Sticker_Decal_Color_A4_210x297_Portrait_PDF.zip'
      }
    },
    {
      title: 'A3',
      defaults: [],
      allows: ['vertical', 'verticalA3'],
      guide: {
        image: 'decal-a-3-vertical',
        area: {
          workSpace: {
            size: '297mm x 420mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Color_A3_297x420_Portrait_AI.zip',
        pdf: 'Sticker_Decal_Color_A3_297x420_Portrait_PDF.zip'
      }
    },
    {
      title: 'A2',
      defaults: [],
      allows: ['vertical', 'verticalA2'],
      guide: {
        image: 'decal-a-2-vertical',
        area: {
          workSpace: {
            size: '420mm x 594mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Color_A2_420x594_Portrait_AI.zip',
        pdf: 'Sticker_Decal_Color_A2_420x594_Portrait_PDF.zip'
      }
    },
    {
      title: '150 x 150',
      defaults: [],
      allows: ['square', 'square150'],
      guide: {
        image: 'decal-150-x-150',
        area: {
          workSpace: {
            size: '150mm x 150mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Color_Square_150x150_AI.zip',
        pdf: 'Sticker_Decal_Color_Square_150x150_PDF.zip'
      }
    },
    {
      title: '250 x 250',
      defaults: [],
      allows: ['square', 'square250'],
      guide: {
        image: 'decal-250-x-250',
        area: {
          workSpace: {
            size: '250mm x 250mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Color_Square_250x250_AI.zip',
        pdf: 'Sticker_Decal_Color_Square_250x250_PDF.zip'
      }
    },
    {
      title: '350 x 350',
      defaults: [],
      allows: ['square', 'square350'],
      guide: {
        image: 'decal-350-x-350',
        area: {
          workSpace: {
            size: '350mm x 350mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Color_Square_350x350_AI.zip',
        pdf: 'Sticker_Decal_Color_Square_350x350_PDF.zip'
      }
    },
    {
      title: '450 x 450',
      defaults: [],
      allows: ['square', 'square450'],
      guide: {
        image: 'decal-450-x-450',
        area: {
          workSpace: {
            size: '450mm x 450mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Color_Square_450x450_AI.zip',
        pdf: 'Sticker_Decal_Color_Square_450x450_PDF.zip'
      }
    },
  ],
  GRAPHIC_DECAL: [
    {
      title: 'A5',
      defaults: [],
      allows: ['horizontal', 'horizontalA5'],
      guide: {
        image: 'decal-a-5-horizon',
        area: {
          workSpace: {
            size: '210mm x 148mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Graphic_A5_210x148_Landscape_AI.zip',
        pdf: 'Sticker_Decal_Graphic_A5_210x148_Landscape_PDF.zip'
      }
    },
    {
      title: 'A4',
      defaults: [],
      allows: ['horizontal', 'horizontalA4'],
      guide: {
        image: 'decal-a-4-horizon',
        area: {
          workSpace: {
            size: '297mm x 210mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Graphic_A4_297x210_Landscape_AI.zip',
        pdf: 'Sticker_Decal_Graphic_A4_297x210_Landscape_PDF.zip'
      }
    },
    {
      title: 'A3',
      defaults: [],
      allows: ['horizontal', 'horizontalA3'],
      guide: {
        image: 'decal-a-3-horizon',
        area: {
          workSpace: {
            size: '420mm x 297mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Graphic_A3_420x297_Landscape_AI.zip',
        pdf: 'Sticker_Decal_Graphic_A3_420x297_Landscape_PDF.zip'
      }
    },
    {
      title: 'A2',
      defaults: [],
      allows: ['horizontal', 'horizontalA2'],
      guide: {
        image: 'decal-a-2-horizon',
        area: {
          workSpace: {
            size: '594mm x 420mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Graphic_A2_594x420_Landscape_AI.zip',
        pdf: 'Sticker_Decal_Graphic_A2_594x420_Landscape_PDF.zip'
      }
    },
    {
      title: 'A5',
      defaults: [],
      allows: ['vertical', 'verticalA5'],
      guide: {
        image: 'decal-a-5-vertical',
        area: {
          workSpace: {
            size: '148mm x 210mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Graphic_A5_148x210_Portrait_AI.zip',
        pdf: 'Sticker_Decal_Graphic_A5_148x210_Portrait_PDF.zip'
      }
    },
    {
      title: 'A4',
      defaults: [],
      allows: ['vertical', 'verticalA4'],
      guide: {
        image: 'decal-a-4-vertical',
        area: {
          workSpace: {
            size: '210mm x 297mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Graphic_A4_210x297_Portrait_AI.zip',
        pdf: 'Sticker_Decal_Graphic_A4_210x297_Portrait_PDF.zip'
      }
    },
    {
      title: 'A3',
      defaults: [],
      allows: ['vertical', 'verticalA3'],
      guide: {
        image: 'decal-a-3-vertical',
        area: {
          workSpace: {
            size: '297mm x 420mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Graphic_A3_297x420_Portrait_AI.zip',
        pdf: 'Sticker_Decal_Graphic_A3_297x420_Portrait_PDF.zip'
      }
    },
    {
      title: 'A2',
      defaults: [],
      allows: ['vertical', 'verticalA2'],
      guide: {
        image: 'decal-a-2-vertical',
        area: {
          workSpace: {
            size: '420mm x 594mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Graphic_A2_420x594_Portrait_AI.zip',
        pdf: 'Sticker_Decal_Graphic_A2_420x594_Portrait_PDF.zip'
      }
    },
    {
      title: '150 x 150',
      defaults: [],
      allows: ['square', 'square150'],
      guide: {
        image: 'decal-150-x-150',
        area: {
          workSpace: {
            size: '150mm x 150mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Graphic_Square_150x150_AI.zip',
        pdf: 'Sticker_Decal_Graphic_Square_150x150_PDF.zip'
      }
    },
    {
      title: '250 x 250',
      defaults: [],
      allows: ['square', 'square250'],
      guide: {
        image: 'decal-250-x-250',
        area: {
          workSpace: {
            size: '250mm x 250mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Graphic_Square_250x250_AI.zip',
        pdf: 'Sticker_Decal_Graphic_Square_250x250_PDF.zip'
      }
    },
    {
      title: '350 x 350',
      defaults: [],
      allows: ['square', 'square350'],
      guide: {
        image: 'decal-350-x-350',
        area: {
          workSpace: {
            size: '350mm x 350mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Graphic_Square_350x350_AI.zip',
        pdf: 'Sticker_Decal_Graphic_Square_350x350_PDF.zip'
      }
    },
    {
      title: '450 x 450',
      defaults: [],
      allows: ['square', 'square450'],
      guide: {
        image: 'decal-450-x-450',
        area: {
          workSpace: {
            size: '450mm x 450mm'
          }
        }
      },
      files: {
        ai: 'Sticker_Decal_Graphic_Square_450x450_AI.zip',
        pdf: 'Sticker_Decal_Graphic_Square_450x450_PDF.zip'
      }
    },
  ],
  CARD: [
    {
      title: '플랫 미니 세로형',
      defaults: ['flat', 'defaults'],
      allows: ['flat', 'flat-70x98', 'defaults', 'standard', 'original', 'luxe', 'glossy', 'gold', 'silver'],
      guide: {
        image: 'card-img-flat-mini-height',
        area: {
          workSpace: {
            size: '72mm x 100mm'
          },
          cuttingLine: {
            size: '70mm x 98mm'
          },
          safeSpace: {
            size: '60mm x 88mm'
          }
        }
      },
      files: {
        ai: 'Card_Flat_Mini_Portrait_AI.zip',
        pdf: 'Card_Flat_Mini_Portrait_PDF.zip',
        jpg: 'Card_Flat_Mini_Portrait_JPG.zip'
      }
    },
    {
      title: '플랫 4 x 6 세로형',
      defaults: [],
      allows: ['flat', 'flat-4x6', 'defaults', 'standard', 'original', 'luxe', 'glossy', 'gold', 'silver'],
      guide: {
        image: 'card-img-flat-46',
        area: {
          workSpace: {
            size: '104mm x 154mm'
          },
          cuttingLine: {
            size: '102mm x 152mm'
          },
          safeSpace: {
            size: '82mm x 132mm'
          }
        }
      },
      files: {
        ai: 'Card_Flat_4x6_Portrait_AI.zip',
        pdf: 'Card_Flat_4x6_Portrait_PDF.zip',
        jpg: 'Card_Flat_4x6_Portrait_JPG.zip'
      }
    },
    {
      title: '플랫 5 x 7 세로형',
      defaults: [],
      allows: ['flat', 'flat-5x7', 'defaults', 'standard', 'original', 'luxe', 'glossy', 'gold', 'silver'],
      guide: {
        image: 'card-img-flat-57',
        area: {
          workSpace: {
            size: '129mm x 180mm'
          },
          cuttingLine: {
            size: '127mm x 178mm'
          },
          safeSpace: {
            size: '107mm x 158mm'
          }
        }
      },
      files: {
        ai: 'Card_Flat_5x7_Portrait_AI.zip',
        pdf: 'Card_Flat_5x7_Portrait_PDF.zip',
        jpg: 'Card_Flat_5x7_Portrait_JPG.zip'
      }
    },
    {
      title: '플랫 미니 가로형',
      defaults: [],
      allows: ['flat', 'flat-70x98', 'defaults', 'standard', 'original', 'luxe', 'glossy', 'gold', 'silver'],
      guide: {
        image: 'card-img-flat-mini-width',
        area: {
          workSpace: {
            size: '100mm x 72mm'
          },
          cuttingLine: {
            size: '98mm x 70mm'
          },
          safeSpace: {
            size: '88mm x 60mm'
          }
        }
      },
      files: {
        ai: 'Card_Flat_Mini_Landscape_AI.zip',
        pdf: 'Card_Flat_Mini_Landscape_PDF.zip',
        jpg: 'Card_Flat_Mini_Landscape_JPG.zip'
      }
    },
    {
      title: '플랫 4 x 6 가로형',
      defaults: [],
      allows: ['flat', 'flat-4x6', 'defaults', 'standard', 'original', 'luxe', 'glossy', 'gold', 'silver'],
      guide: {
        image: 'card-img-flat-64',
        area: {
          workSpace: {
            size: '154mm x 104mm'
          },
          cuttingLine: {
            size: '152mm x 102mm'
          },
          safeSpace: {
            size: '132mm x 82mm'
          }
        }
      },
      files: {
        ai: 'Card_Flat_4x6_Landscape_AI.zip',
        pdf: 'Card_Flat_4x6_Landscape_PDF.zip',
        jpg: 'Card_Flat_4x6_Landscape_JPG.zip'
      }
    },
    {
      title: '플랫 5 x 7 가로형',
      defaults: [],
      allows: ['flat', 'flat-5x7', 'defaults', 'standard', 'original', 'luxe', 'glossy', 'gold', 'silver'],
      guide: {
        image: 'card-img-flat-75',
        area: {
          workSpace: {
            size: '180mm x 129mm'
          },
          cuttingLine: {
            size: '178mm x 127mm'
          },
          safeSpace: {
            size: '158mm x 107mm'
          }
        }
      },
      files: {
        ai: 'Card_Flat_5x7_Landscape_AI.zip',
        pdf: 'Card_Flat_5x7_Landscape_PDF.zip',
        jpg: 'Card_Flat_5x7_Landscape_JPG.zip'
      }
    },
    {
      title: '폴더 미니 세로형',
      defaults: ['folder'],
      allows: ['folder', 'folder-70x98', 'defaults', 'standard', 'original', 'luxe', 'glossy', 'gold', 'silver'],
      guide: {
        image: 'card-img-fold-mini-height',
        area: {
          workSpace: {
            size: '142mm x 100mm'
          },
          cuttingLine: {
            size: '140mm x 98mm'
          },
          safeSpace: {
            size: '130mm x 88mm'
          }
        }
      },
      files: {
        ai: 'Card_Folder_Mini_Portrait_AI.zip',
        pdf: 'Card_Folder_Mini_Portrait_PDF.zip',
        jpg: 'Card_Folder_Mini_Portrait_JPG.zip'
      }
    },
    {
      title: '폴더 4 x 6 세로형',
      defaults: [],
      allows: ['folder', 'folder-4x6', 'defaults', 'standard', 'original', 'luxe', 'glossy', 'gold', 'silver'],
      guide: {
        image: 'card-img-fold-46',
        area: {
          workSpace: {
            size: '206mm x 154mm'
          },
          cuttingLine: {
            size: '204mm x 152mm'
          },
          safeSpace: {
            size: '184mm x 132mm'
          }
        }
      },
      files: {
        ai: 'Card_Folder_4x6_Portrait_AI.zip',
        pdf: 'Card_Folder_4x6_Portrait_PDF.zip',
        jpg: 'Card_Folder_4x6_Portrait_JPG.zip'
      }
    },
    {
      title: '폴더 5 x 7 세로형',
      defaults: [],
      allows: ['folder', 'folder-5x7', 'defaults', 'standard', 'original', 'luxe', 'glossy', 'gold', 'silver'],
      guide: {
        image: 'card-img-fold-57',
        area: {
          workSpace: {
            size: '256mm x 180mm'
          },
          cuttingLine: {
            size: '254mm x 178mm'
          },
          safeSpace: {
            size: '234mm x 158mm'
          }
        }
      },
      files: {
        ai: 'Card_Folder_5x7_Portrait_AI.zip',
        pdf: 'Card_Folder_5x7_Portrait_PDF.zip',
        jpg: 'Card_Folder_5x7_Portrait_JPG.zip'
      }
    },
    {
      title: '폴더 미니 가로형',
      defaults: [],
      allows: ['folder', 'folder-70x98', 'defaults', 'standard', 'original', 'luxe', 'glossy', 'gold', 'silver'],
      guide: {
        image: 'card-img-fold-mini-width',
        area: {
          workSpace: {
            size: '100mm x 142mm'
          },
          cuttingLine: {
            size: '98mm x 140mm'
          },
          safeSpace: {
            size: '88mm x 130mm'
          }
        }
      },
      files: {
        ai: 'Card_Folder_Mini_Landscape_AI.zip',
        pdf: 'Card_Folder_Mini_Landscape_PDF.zip',
        jpg: 'Card_Folder_Mini_Landscape_JPG.zip'
      }
    },
    {
      title: '폴더 4 x 6 가로형',
      defaults: [],
      allows: ['folder', 'folder-4x6', 'defaults', 'standard', 'original', 'luxe', 'glossy', 'gold', 'silver'],
      guide: {
        image: 'card-img-fold-64',
        area: {
          workSpace: {
            size: '154mm x 206mm'
          },
          cuttingLine: {
            size: '152mm x 204mm'
          },
          safeSpace: {
            size: '132mm x 184mm'
          }
        }
      },
      files: {
        ai: 'Card_Folder_4x6_Landscape_AI.zip',
        pdf: 'Card_Folder_4x6_Landscape_PDF.zip',
        jpg: 'Card_Folder_4x6_Landscape_JPG.zip'
      }
    },
    {
      title: '폴더 5 x 7 가로형',
      defaults: [],
      allows: ['folder', 'folder-5x7', 'defaults', 'standard', 'original', 'luxe', 'glossy', 'gold', 'silver'],
      guide: {
        image: 'card-img-fold-75',
        area: {
          workSpace: {
            size: '180mm x 256mm'
          },
          cuttingLine: {
            size: '178mm x 254mm'
          },
          safeSpace: {
            size: '158mm x 234mm'
          }
        }
      },
      files: {
        ai: 'Card_Folder_5x7_Landscape_AI.zip',
        pdf: 'Card_Folder_5x7_Landscape_PDF.zip',
        jpg: 'Card_Folder_5x7_Landscape_JPG.zip'
      }
    }
  ],
  BROCHURE: [
    {
      title: '2단 폴더 Square',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'brochure-img-bi-square',
        area: {
          workSpace: {
            size: '292mm x 147mm'
          },
          cuttingLine: {
            size: '290mm x 145mm'
          },
          safeSpace: {
            size: '274mm x 129mm'
          }
        }
      },
      files: {
        ai: 'Brochure_Bi_Folder_Square_AI.zip',
        pdf: 'Brochure_Bi_Folder_Square_PDF.zip',
        jpg: 'Brochure_Bi_Folder_Square_JPG.zip'
      }
    },
    {
      title: '2단 폴더 Long',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'brochure-img-bi-long',
        area: {
          workSpace: {
            size: '200mm x 212mm'
          },
          cuttingLine: {
            size: '198mm x 210mm'
          },
          safeSpace: {
            size: '182mm x 194mm'
          }
        }
      },
      files: {
        ai: 'Brochure_Bi_Folder_Long_AI.zip',
        pdf: 'Brochure_Bi_Folder_Long_PDF.zip',
        jpg: 'Brochure_Bi_Folder_Long_JPG.zip'
      }
    },
    {
      title: '2단 폴더 A5',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'brochure-img-bi-a-5',
        area: {
          workSpace: {
            size: '299mm x 212mm'
          },
          cuttingLine: {
            size: '297mm x 210mm'
          },
          safeSpace: {
            size: '277mm x 190mm'
          }
        }
      },
      files: {
        ai: 'Brochure_Bi_Folder_A5_AI.zip',
        pdf: 'Brochure_Bi_Folder_A5_PDF.zip',
        jpg: 'Brochure_Bi_Folder_A5_JPG.zip'
      }
    },
    {
      title: '2단 폴더 A4',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'brochure-img-bi-a-4',
        area: {
          workSpace: {
            size: '422mm x 299mm'
          },
          cuttingLine: {
            size: '420mm x 297mm'
          },
          safeSpace: {
            size: '400mm x 277mm'
          }
        }
      },
      files: {
        ai: 'Brochure_Bi_Folder_A4_AI.zip',
        pdf: 'Brochure_Bi_Folder_A4_PDF.zip',
        jpg: 'Brochure_Bi_Folder_A4_JPG.zip'
      }
    },
    {
      title: '3단 폴더 Square',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'brochure-img-tri-square',
        caption: '<em>3단 브로슈어의 경우</em> 각 면의 사이즈가 다르므로 <em>꼭 가이드를 다운로드 받아 진행</em>해 주세요.<br/>편집 시에는 반드시 <em>표지와 내지 구분을 확인</em>하여 순서에 맞게 작업해 주세요.',
        area: {
          workSpace: {
            size: '436mm x 147mm'
          },
          cuttingLine: {
            size: '434mm x 145mm'
          },
          safeSpace: {
            size: '418mm x 129mm'
          }
        }
      },
      files: {
        ai: 'Brochure_Tri_Folder_Square_AI.zip',
        pdf: 'Brochure_Tri_Folder_Square_PDF.zip',
        jpg: 'Brochure_Tri_Folder_Square_JPG.zip'
      }
    },
    {
      title: '3단 폴더 Long',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'brochure-img-tri-long',
        caption: '<em>3단 브로슈어의 경우</em> 각 면의 사이즈가 다르므로 <em>꼭 가이드를 다운로드 받아 진행</em>해 주세요.<br/>편집 시에는 반드시 <em>표지와 내지 구분을 확인</em>하여 순서에 맞게 작업해 주세요.',
        area: {
          workSpace: {
            size: '298mm x 212mm'
          },
          cuttingLine: {
            size: '296mm x 210mm'
          },
          safeSpace: {
            size: '280mm x 194mm'
          }
        }
      },
      files: {
        ai: 'Brochure_Tri_Folder_Long_AI.zip',
        pdf: 'Brochure_Tri_Folder_Long_PDF.zip',
        jpg: 'Brochure_Tri_Folder_Long_JPG.zip'
      }
    },
    {
      title: '3단 폴더 A5',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'brochure-img-tri-a-5',
        caption: '<em>3단 브로슈어의 경우</em> 각 면의 사이즈가 다르므로 <em>꼭 가이드를 다운로드 받아 진행</em>해 주세요.<br/>편집 시에는 반드시 <em>표지와 내지 구분을 확인</em>하여 순서에 맞게 작업해 주세요.',
        area: {
          workSpace: {
            size: '445mm x 211mm'
          },
          cuttingLine: {
            size: '443mm x 209mm'
          },
          safeSpace: {
            size: '423mm x 189mm'
          }
        }
      },
      files: {
        ai: 'Brochure_Tri_Folder_A5_AI.zip',
        pdf: 'Brochure_Tri_Folder_A5_PDF.zip',
        jpg: 'Brochure_Tri_Folder_A5_JPG.zip'
      }
    },
    {
      title: '3단 폴더 A4',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'brochure-img-tri-a-4',
        caption: '<em>3단 브로슈어의 경우</em> 각 면의 사이즈가 다르므로 <em>꼭 가이드를 다운로드 받아 진행</em>해 주세요.<br/>편집 시에는 반드시 <em>표지와 내지 구분을 확인</em>하여 순서에 맞게 작업해 주세요.',
        area: {
          workSpace: {
            size: '631mm x 299mm'
          },
          cuttingLine: {
            size: '629mm x 297mm'
          },
          safeSpace: {
            size: '609mm x 277mm'
          }
        }
      },
      files: {
        ai: 'Brochure_Tri_Folder_A4_AI.zip',
        pdf: 'Brochure_Tri_Folder_A4_PDF.zip',
        jpg: 'Brochure_Tri_Folder_A4_JPG.zip'
      }
    }
  ],
  FLYER: [
    {
      title: '4 x 6',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'flyer-img-46',
        area: {
          workSpace: {
            size: '104mm x 154mm'
          },
          cuttingLine: {
            size: '102mm x 152mm'
          },
          safeSpace: {
            size: '86mm x 136mm'
          }
        }
      },
      files: {
        ai: 'Flyer_4x6_AI.zip',
        pdf: 'Flyer_4x6_PDF.zip',
        jpg: 'Flyer_4x6_JPG.zip'
      }
    },
    {
      title: '5 x 7',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'flyer-img-57',
        area: {
          workSpace: {
            size: '129mm x 180mm'
          },
          cuttingLine: {
            size: '127mm x 178mm'
          },
          safeSpace: {
            size: '111mm x 162mm'
          }
        }
      },
      files: {
        ai: 'Flyer_5x7_AI.zip',
        pdf: 'Flyer_5x7_PDF.zip',
        jpg: 'Flyer_5x7_JPG.zip'
      }
    },
    {
      title: 'Square',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'flyer-img-square',
        area: {
          workSpace: {
            size: '147mm x 147mm'
          },
          cuttingLine: {
            size: '145mm x 145mm'
          },
          safeSpace: {
            size: '129mm x 129mm'
          }
        }
      },
      files: {
        ai: 'Flyer_Square_AI.zip',
        pdf: 'Flyer_Square_PDF.zip',
        jpg: 'Flyer_Square_JPG.zip'
      }
    },
    {
      title: 'Long',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'flyer-img-long',
        area: {
          workSpace: {
            size: '101mm x 212mm'
          },
          cuttingLine: {
            size: '99mm x 210mm'
          },
          safeSpace: {
            size: '83mm x 194mm'
          }
        }
      },
      files: {
        ai: 'Flyer_Long_AI.zip',
        pdf: 'Flyer_Long_PDF.zip',
        jpg: 'Flyer_Long_JPG.zip'
      }
    },
    {
      title: 'A5',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'flyer-img-a-5',
        area: {
          workSpace: {
            size: '150mm x 212mm'
          },
          cuttingLine: {
            size: '148mm x 210mm'
          },
          safeSpace: {
            size: '128mm x 190mm'
          }
        }
      },
      files: {
        ai: 'Flyer_A5_AI.zip',
        pdf: 'Flyer_A5_PDF.zip',
        jpg: 'Flyer_A5_JPG.zip'
      }
    },
    {
      title: 'A4',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'flyer-img-a-4',
        area: {
          workSpace: {
            size: '212mm x 299mm'
          },
          cuttingLine: {
            size: '210mm x 297mm'
          },
          safeSpace: {
            size: '190mm x 277mm'
          }
        }
      },
      files: {
        ai: 'Flyer_A4_AI.zip',
        pdf: 'Flyer_A4_PDF.zip',
        jpg: 'Flyer_A4_JPG.zip'
      }
    }
  ],
  MENU: [
    {
      title: '플랫 A5',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'menu-img-flat-a-5',
        area: {
          workSpace: {
            size: '150mm x 212mm'
          },
          cuttingLine: {
            size: '148mm x 210mm'
          },
          safeSpace: {
            size: '128mm x 190mm'
          }
        }
      },
      files: {
        ai: 'Menu_A5_Flat_AI.zip',
        pdf: 'Menu_A5_Flat_PDF.zip',
        jpg: 'Menu_A5_Flat_JPG.zip'
      }
    },
    {
      title: '플랫 A5+',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'menu-img-flat-custom',
        area: {
          workSpace: {
            size: '180mm x 254mm'
          },
          cuttingLine: {
            size: '178mm x 252mm'
          },
          safeSpace: {
            size: '158mm x 232mm'
          }
        }
      },
      files: {
        ai: 'Menu_A5plus_Flat_AI.zip',
        pdf: 'Menu_A5plus_Flat_PDF.zip',
        jpg: 'Menu_A5plus_Flat_JPG.zip'
      }
    },
    {
      title: '플랫 A4',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'menu-img-flat-a-4',
        area: {
          workSpace: {
            size: '212mm x 299mm'
          },
          cuttingLine: {
            size: '210mm x 297mm'
          },
          safeSpace: {
            size: '190mm x 277mm'
          }
        }
      },
      files: {
        ai: 'Menu_A4_Flat_AI.zip',
        pdf: 'Menu_A4_Flat_PDF.zip',
        jpg: 'Menu_A4_Flat_JPG.zip'
      }
    },
    {
      title: '폴더 A5',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'menu-img-fold-a-5',
        area: {
          workSpace: {
            size: '299mm x 212mm'
          },
          cuttingLine: {
            size: '297mm x 210mm'
          },
          safeSpace: {
            size: '277mm x 190mm'
          }
        }
      },
      files: {
        ai: 'Menu_Folder_A5_AI.zip',
        pdf: 'Menu_Folder_A5_PDF.zip',
        jpg: 'Menu_Folder_A5_JPG.zip'
      }
    },
    {
      title: '폴더 A5+',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'menu-img-fold-custom',
        area: {
          workSpace: {
            size: '358mm x 254mm'
          },
          cuttingLine: {
            size: '356mm x 252mm'
          },
          safeSpace: {
            size: '336mm x 232mm'
          }
        }
      },
      files: {
        ai: 'Menu_Folder_A5plus_AI.zip',
        pdf: 'Menu_Folder_A5plus_PDF.zip',
        jpg: 'Menu_Folder_A5plus_JPG.zip'
      }
    },
    {
      title: '폴더 A4',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'menu-img-fold-a-4',
        area: {
          workSpace: {
            size: '422mm x 299mm'
          },
          cuttingLine: {
            size: '420mm x 297mm'
          },
          safeSpace: {
            size: '400mm x 277mm'
          }
        }
      },
      files: {
        ai: 'Menu_Folder_A4_AI.zip',
        pdf: 'Menu_Folder_A4_PDF.zip',
        jpg: 'Menu_Folder_A4_JPG.zip'
      }
    }
  ],
  POST_CARD: [
    {
      title: '',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'postcard-img-152102',
        area: {
          workSpace: {
            size: '154mm x 104mm'
          },
          cuttingLine: {
            size: '152mm x 102mm'
          },
          safeSpace: {
            size: '136mm x 86mm'
          }
        }
      },
      files: {
        ai: 'Postcard_AI.zip',
        pdf: 'Postcard_PDF.zip',
        jpg: 'Postcard_JPG.zip'
      }
    }
  ],
  COUPON: [
    {
      title: '',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'coupon-img-15070',
        area: {
          workSpace: {
            size: '152mm x 72mm'
          },
          cuttingLine: {
            size: '150mm x 70mm'
          },
          safeSpace: {
            size: '136mm x 56mm'
          }
        }
      },
      files: {
        ai: 'Coupon_150x70_AI.zip',
        pdf: 'Coupon_150x70_PDF.zip',
        jpg: 'Coupon_150x70_JPG.zip'
      }
    }
  ],
  PLACARD_BANNER: [
    {
      title: '5000 x 900',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'banner-img-5000-x-900',
        area: {
          workSpace: {
            size: '5000mm x 900mm'
          },
          cuttingLine: {
            size: '5000mm x 900mm'
          },
          safeSpace: {
            size: '4600mm x 700mm'
          }
        },
        description: '이미지로 업로드 하시는 경우 가로/세로 20,000px이하 100dpi 로 작업해 주세요.'
      },
      files: {
        ai: 'Placard_5000x900_Landscape.zip',
        pdf: 'Placard_5000x900_Landscape.pdf',
        jpg: 'Placard_5000x900_Landscape.jpg'
      }
    },
    {
      title: '4000 x 700',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'banner-img-4000-x-700',
        area: {
          workSpace: {
            size: '4000mm x 700mm'
          },
          cuttingLine: {
            size: '4000mm x 700mm'
          },
          safeSpace: {
            size: '3600mm x 580mm'
          }
        },
        description: '이미지로 업로드 하시는 경우 가로/세로 20,000px이하 100dpi 로 작업해 주세요.'
      },
      files: {
        ai: 'Placard_4000x700_Landscape.zip',
        pdf: 'Placard_4000x700_Landscape.pdf',
        jpg: 'Placard_4000x700_Landscape.jpg'
      }
    },
    {
      title: '2500 x 700',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'banner-img-2500-x-700',
        area: {
          workSpace: {
            size: '2500mm x 700mm'
          },
          cuttingLine: {
            size: '2500mm x 700mm'
          },
          safeSpace: {
            size: '2140mm x 580mm'
          }
        },
        description: '이미지로 업로드 하시는 경우 가로/세로 20,000px이하 200dpi 로 작업해 주세요.'
      },
      files: {
        ai: 'Placard_2500x700_Landscape.zip',
        pdf: 'Placard_2500x700_Landscape.pdf',
        jpg: 'Placard_2500x700_Landscape.jpg'
      }
    },
    {
      title: '900 x 5000',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'banner-img-900-x-5000',
        area: {
          workSpace: {
            size: '900mm x 5000mm'
          },
          cuttingLine: {
            size: '900mm x 5000mm'
          },
          safeSpace: {
            size: '700mm x 4600mm'
          }
        },
        description: '이미지로 업로드 하시는 경우 가로/세로 20,000px이하 100dpi 로 작업해 주세요.'
      },
      files: {
        ai: 'Placard_900x5000_Portrait.zip',
        pdf: 'Placard_900x5000_Portrait.pdf',
        jpg: 'Placard_900x5000_Portrait.jpg'
      }
    },
    {
      title: '700 x 4000',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'banner-img-700-x-4000',
        area: {
          workSpace: {
            size: '700mm x 4000mm'
          },
          cuttingLine: {
            size: '700mm x 4000mm'
          },
          safeSpace: {
            size: '580mm x 3600mm'
          }
        },
        description: '이미지로 업로드 하시는 경우 가로/세로 20,000px이하 100dpi 로 작업해 주세요.'
      },
      files: {
        ai: 'Placard_700x4000_Portrait.zip',
        pdf: 'Placard_700x4000_Portrait.pdf',
        jpg: 'Placard_700x4000_Portrait.jpg'
      }
    },
    {
      title: '700 x 2500',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'banner-img-700-x-2500',
        area: {
          workSpace: {
            size: '700mm x 2500mm'
          },
          cuttingLine: {
            size: '700mm x 2500mm'
          },
          safeSpace: {
            size: '580mm x 2140mm'
          }
        },
        description: '이미지로 업로드 하시는 경우 가로/세로 20,000px이하 200dpi 로 작업해 주세요.'
      },
      files: {
        ai: 'Placard_700x2500_Portrait.zip',
        pdf: 'Placard_700x2500_Portrait.pdf',
        jpg: 'Placard_700x2500_Portrait.jpg'
      }
    },
    {
      title: 'A2',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'banner-img-a-2',
        area: {
          workSpace: {
            size: '420mm x 594mm'
          },
          cuttingLine: {
            size: '420mm x 594mm'
          },
          safeSpace: {
            size: '300mm x 534mm'
          }
        }
      },
      files: {
        ai: 'Placard_A2_Portrait.zip',
        pdf: 'Placard_A2_Portrait.pdf',
        jpg: 'Placard_A2_Portrait.jpg'
      }
    },
    {
      title: 'A1',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'banner-img-a-1',
        area: {
          workSpace: {
            size: '594mm x 840mm'
          },
          cuttingLine: {
            size: '594mm x 840mm'
          },
          safeSpace: {
            size: '454mm x 740mm'
          }
        }
      },
      files: {
        ai: 'Placard_A1_Portrait.zip',
        pdf: 'Placard_A1_Portrait.pdf',
        jpg: 'Placard_A1_Portrait.jpg'
      }
    },
    {
      title: 'B2',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'banner-img-b-2',
        area: {
          workSpace: {
            size: '500mm x 720mm'
          },
          cuttingLine: {
            size: '500mm x 720mm'
          },
          safeSpace: {
            size: '360mm x 640mm'
          }
        }
      },
      files: {
        ai: 'Placard_B2_Portrait.zip',
        pdf: 'Placard_B2_Portrait.pdf',
        jpg: 'Placard_B2_Portrait.jpg'
      }
    },
    {
      title: '900 x 900',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'banner-img-900-x-900',
        area: {
          workSpace: {
            size: '900mm x 900mm'
          },
          cuttingLine: {
            size: '900mm x 900mm'
          },
          safeSpace: {
            size: '700mm x 800mm'
          }
        }
      },
      files: {
        ai: 'Placard_900x900_Square.zip',
        pdf: 'Placard_900x900_Square.pdf',
        jpg: 'Placard_900x900_Square.jpg'
      }
    },
    {
      title: '1200 x 1200',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'banner-img-1200-x-1200',
        area: {
          workSpace: {
            size: '1200mm x 1200mm'
          },
          cuttingLine: {
            size: '1200mm x 1200mm'
          },
          safeSpace: {
            size: '1000mm x 1100mm'
          }
        }
      },
      files: {
        ai: 'Placard_1200x1200_Square.zip',
        pdf: 'Placard_1200x1200_Square.pdf',
        jpg: 'Placard_1200x1200_Square.jpg'
      }
    },
    {
      title: '직접 입력',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'banner-img-freesize',
        area: {
          workSpace: {
            size: null
          },
          cuttingLine: {
            size: null
          },
          safeSpace: {
            size: '여백 : 상/하 100mm, 좌/우 200mm'
          }
        }
      },
      files: null
    }
  ],
  STANDARD_BANNER: [
    {
      title: '600 x 1800',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'standardbanner-img-600-x-1800',
        area: {
          workSpace: {
            size: '604mm x 1804mm'
          },
          cuttingLine: {
            size: '600mm x 1800mm'
          },
          safeSpace: {
            size: '500mm x 1700mm'
          }
        }
      },
      files: {
        ai: 'Standard_Banner_600x1800.zip',
        pdf: 'Standard_Banner_600x1800.pdf',
        jpg: 'Standard_Banner_600x1800.jpg'
      }
    },
    {
      title: 'B2',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'standardbanner-img-b-2',
        area: {
          workSpace: {
            size: '504mm x 724mm'
          },
          cuttingLine: {
            size: '500mm x 720mm'
          },
          safeSpace: {
            size: '400mm x 620mm'
          }
        }
      },
      files: {
        ai: 'Standard_Banner_B2.zip',
        pdf: 'Standard_Banner_B2.pdf',
        jpg: 'Standard_Banner_B2.jpg'
      }
    },
    {
      title: 'A1',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'standardbanner-img-a-1',
        area: {
          workSpace: {
            size: '598mm x 844mm'
          },
          cuttingLine: {
            size: '594mm x 840mm'
          },
          safeSpace: {
            size: '494mm x 740mm'
          }
        }
      },
      files: {
        ai: 'Standard_Banner_A1.zip',
        pdf: 'Standard_Banner_A1.pdf',
        jpg: 'Standard_Banner_A1.jpg'
      }
    }
  ],
  DOUBLE_SIDE_BANNER: [
    {
      title: '600 x 1800',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'double-side-banner-img-600-x-1800',
        area: {
          workSpace: {
            size: '604mm x 1804mm'
          },
          cuttingLine: {
            size: '600mm x 1800mm'
          },
          safeSpace: {
            size: '500mm x 1700mm'
          }
        }
      },
      files: {
        ai: 'DoubleSided_Banner_600x1800.zip',
        pdf: 'DoubleSided_Banner_600x1800.pdf',
        jpg: 'DoubleSided_Banner_600x1800.jpg'
      }
    }
  ],
  ROLLUP_BANNER: [
    {
      title: '850 x 2000',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'rollupbanner-img-850-x-2000',
        area: {
          workSpace: {
            size: '854mm x 2004mm'
          },
          cuttingLine: {
            size: '850mm x 2000mm'
          },
          safeSpace: {
            size: '730mm x 1800mm'
          }
        },
        description: '이미지로 업로드 하시는 경우 가로/세로 20,000px이하 200dpi 로 작업해 주세요.'
      },
      files: {
        ai: 'Rollup_Banner_850x2000.zip',
        pdf: 'Rollup_Banner_850x2000.pdf',
        jpg: 'Rollup_Banner_850x2000.jpg'
      }
    }
  ],
  MINI_BANNER: [
    {
      title: '150 x 300',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'minibanner-img-150-x-300',
        area: {
          workSpace: {
            size: '152mm x 302mm'
          },
          cuttingLine: {
            size: '150mm x 300mm'
          },
          safeSpace: {
            size: '120mm x 270mm'
          }
        }
      },
      files: {
        ai: 'Mini_Banner_150x300.zip',
        pdf: 'Mini_Banner_150x300.pdf',
        jpg: 'Mini_Banner_150x300.jpg'
      }
    },
    {
      title: '180 x 420',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'minibanner-img-180-x-420',
        area: {
          workSpace: {
            size: '182mm x 422mm'
          },
          cuttingLine: {
            size: '180mm x 420mm'
          },
          safeSpace: {
            size: '140mm x 380mm'
          }
        }
      },
      files: {
        ai: 'Mini_Banner_180x420.zip',
        pdf: 'Mini_Banner_180x420.pdf',
        jpg: 'Mini_Banner_180x420.jpg'
      }
    }
  ],
  POSTER: [
    {
      title: 'A4',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'poster-img-a-4',
        area: {
          workSpace: {
            size: '212mm x 299mm'
          },
          cuttingLine: {
            size: '210mm x 297mm'
          },
          safeSpace: {
            size: '170mm x 257mm'
          }
        }
      },
      files: {
        ai: 'Poster_A4.zip',
        pdf: 'Poster_A4.pdf',
        jpg: 'Poster_A4.jpg'
      }
    },
    {
      title: 'A3',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'poster-img-a-3',
        area: {
          workSpace: {
            size: '299mm x 422mm'
          },
          cuttingLine: {
            size: '297mm x 420mm'
          },
          safeSpace: {
            size: '257mm x 380mm'
          }
        }
      },
      files: {
        ai: 'Poster_A3.zip',
        pdf: 'Poster_A3.pdf',
        jpg: 'Poster_A3.jpg'
      }
    },
    {
      title: 'A2',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'poster-img-a-2',
        area: {
          workSpace: {
            size: '422mm x 596mm'
          },
          cuttingLine: {
            size: '420mm x 594mm'
          },
          safeSpace: {
            size: '360mm x 534mm'
          }
        }
      },
      files: {
        ai: 'Poster_A2.zip',
        pdf: 'Poster_A2.pdf',
        jpg: 'Poster_A2.jpg'
      }
    },
    {
      title: 'A1',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'poster-img-a-1',
        area: {
          workSpace: {
            size: '596mm x 842mm'
          },
          cuttingLine: {
            size: '594mm x 840mm'
          },
          safeSpace: {
            size: '494mm x 740mm'
          }
        }
      },
      files: {
        ai: 'Poster_A1.zip',
        pdf: 'Poster_A1.pdf',
        jpg: 'Poster_A1.jpg'
      }
    },
    {
      title: 'B4',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'poster-img-b-4',
        area: {
          workSpace: {
            size: '242mm x 349mm'
          },
          cuttingLine: {
            size: '240mm x 347mm'
          },
          safeSpace: {
            size: '200mm x 307mm'
          }
        }
      },
      files: {
        ai: 'Poster_B4.zip',
        pdf: 'Poster_B4.pdf',
        jpg: 'Poster_B4.jpg'
      }
    },
    {
      title: 'B3',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'poster-img-b-3',
        area: {
          workSpace: {
            size: '349mm x 502mm'
          },
          cuttingLine: {
            size: '347mm x 500mm'
          },
          safeSpace: {
            size: '287mm x 440mm'
          }
        }
      },
      files: {
        ai: 'Poster_B3.zip',
        pdf: 'Poster_B3.pdf',
        jpg: 'Poster_B3.jpg'
      }
    },
    {
      title: 'B2',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'poster-img-b-2',
        area: {
          workSpace: {
            size: '502mm x 722mm'
          },
          cuttingLine: {
            size: '500mm x 720mm'
          },
          safeSpace: {
            size: '420mm x 640mm'
          }
        }
      },
      files: {
        ai: 'Poster_B2.zip',
        pdf: 'Poster_B2.pdf',
        jpg: 'Poster_B2.jpg'
      }
    }
  ],
  BOARD_SIGN: [
    {
      title: 'A4',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'boardsign-img-a-4',
        area: {
          workSpace: {
            size: '216mm x 306mm'
          },
          cuttingLine: {
            size: '210mm x 297mm'
          },
          safeSpace: {
            size: '170mm x 257mm'
          }
        }
      },
      files: {
        ai: 'Board_Sign_A4.zip',
        pdf: 'Board_Sign_A4.pdf',
        jpg: 'Board_Sign_A4.jpg'
      }
    },
    {
      title: 'A3',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'boardsign-img-a-3',
        area: {
          workSpace: {
            size: '303mm x 429mm'
          },
          cuttingLine: {
            size: '297mm x 420mm'
          },
          safeSpace: {
            size: '257mm x 380mm'
          }
        }
      },
      files: {
        ai: 'Board_Sign_A3.zip',
        pdf: 'Board_Sign_A3.pdf',
        jpg: 'Board_Sign_A3.jpg'
      }
    },
    {
      title: 'A2',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'boardsign-img-a-2',
        area: {
          workSpace: {
            size: '426mm x 603mm'
          },
          cuttingLine: {
            size: '420mm x 594mm'
          },
          safeSpace: {
            size: '360mm x 534mm'
          }
        }
      },
      files: {
        ai: 'Board_Sign_A2.zip',
        pdf: 'Board_Sign_A2.pdf',
        jpg: 'Board_Sign_A2.jpg'
      }
    },
    {
      title: 'A1',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'boardsign-img-a-1',
        area: {
          workSpace: {
            size: '600mm x 849mm'
          },
          cuttingLine: {
            size: '594mm x 840mm'
          },
          safeSpace: {
            size: '494mm x 740mm'
          }
        }
      },
      files: {
        ai: 'Board_Sign_A1.zip',
        pdf: 'Board_Sign_A1.pdf',
        jpg: 'Board_Sign_A1.jpg'
      }
    },
    {
      title: 'B4',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'boardsign-img-b-4',
        area: {
          workSpace: {
            size: '246mm x 356mm'
          },
          cuttingLine: {
            size: '240mm x 347mm'
          },
          safeSpace: {
            size: '200mm x 307mm'
          }
        }
      },
      files: {
        ai: 'Board_Sign_B4.zip',
        pdf: 'Board_Sign_B4.pdf',
        jpg: 'Board_Sign_B4.jpg'
      }
    },
    {
      title: 'B3',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'boardsign-img-b-3',
        area: {
          workSpace: {
            size: '351mm x 504mm'
          },
          cuttingLine: {
            size: '347mm x 500mm'
          },
          safeSpace: {
            size: '287mm x 440mm'
          }
        }
      },
      files: {
        ai: 'Board_Sign_B3.zip',
        pdf: 'Board_Sign_B3.pdf',
        jpg: 'Board_Sign_B3.jpg'
      }
    },
    {
      title: 'B2',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'boardsign-img-b-2',
        area: {
          workSpace: {
            size: '504mm x 726mm'
          },
          cuttingLine: {
            size: '500mm x 720mm'
          },
          safeSpace: {
            size: '420mm x 640mm'
          }
        }
      },
      files: {
        ai: 'Board_Sign_B2.zip',
        pdf: 'Board_Sign_B2.pdf',
        jpg: 'Board_Sign_B2.jpg'
      }
    }
  ],
  ACRYLIC_SIGN: [
    {
      title: 'A4',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'acrylicsign-img-a-4',
        area: {
          workSpace: {
            size: '216mm x 306mm'
          },
          cuttingLine: {
            size: '210mm x 297mm'
          },
          safeSpace: {
            size: '170mm x 257mm'
          }
        }
      },
      files: {
        ai: 'Acrylic_Sign_A4.zip',
        pdf: 'Acrylic_Sign_A4.pdf',
        jpg: 'Acrylic_Sign_A4.jpg'
      }
    },
    {
      title: 'A3',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'acrylicsign-img-a-3',
        area: {
          workSpace: {
            size: '303mm x 429mm'
          },
          cuttingLine: {
            size: '297mm x 420mm'
          },
          safeSpace: {
            size: '257mm x 380mm'
          }
        }
      },
      files: {
        ai: 'Acrylic_Sign_A3.zip',
        pdf: 'Acrylic_Sign_A3.pdf',
        jpg: 'Acrylic_Sign_A3.jpg'
      }
    },
    {
      title: 'A2',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'acrylicsign-img-a-2',
        area: {
          workSpace: {
            size: '426mm x 603mm'
          },
          cuttingLine: {
            size: '420mm x 594mm'
          },
          safeSpace: {
            size: '360mm x 534mm'
          }
        }
      },
      files: {
        ai: 'Acrylic_Sign_A2.zip',
        pdf: 'Acrylic_Sign_A2.pdf',
        jpg: 'Acrylic_Sign_A2.jpg'
      }
    },
    {
      title: 'A1',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'acrylicsign-img-a-1',
        area: {
          workSpace: {
            size: '600mm x 849mm'
          },
          cuttingLine: {
            size: '594mm x 840mm'
          },
          safeSpace: {
            size: '494mm x 740mm'
          }
        }
      },
      files: {
        ai: 'Acrylic_Sign_A1.zip',
        pdf: 'Acrylic_Sign_A1.pdf',
        jpg: 'Acrylic_Sign_A1.jpg'
      }
    },
    {
      title: 'B4',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'acrylicsign-img-b-4',
        area: {
          workSpace: {
            size: '246mm x 356mm'
          },
          cuttingLine: {
            size: '240mm x 347mm'
          },
          safeSpace: {
            size: '200mm x 307mm'
          }
        }
      },
      files: {
        ai: 'Acrylic_Sign_B4.zip',
        pdf: 'Acrylic_Sign_B4.pdf',
        jpg: 'Acrylic_Sign_B4.jpg'
      }
    },
    {
      title: 'B3',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'acrylicsign-img-b-3',
        area: {
          workSpace: {
            size: '353mm x 509mm'
          },
          cuttingLine: {
            size: '347mm x 500mm'
          },
          safeSpace: {
            size: '287mm x 440mm'
          }
        }
      },
      files: {
        ai: 'Acrylic_Sign_B3.zip',
        pdf: 'Acrylic_Sign_B3.pdf',
        jpg: 'Acrylic_Sign_B3.jpg'
      }
    },
    {
      title: 'B2',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'acrylicsign-img-b-2',
        area: {
          workSpace: {
            size: '506mm x 729mm'
          },
          cuttingLine: {
            size: '500mm x 720mm'
          },
          safeSpace: {
            size: '420mm x 640mm'
          }
        }
      },
      files: {
        ai: 'Acrylic_Sign_B2.zip',
        pdf: 'Acrylic_Sign_B2.pdf',
        jpg: 'Acrylic_Sign_B2.jpg'
      }
    }
  ],
  METAL_SIGN: [
    {
      title: 'A4',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'metalsign-img-a-4',
        area: {
          workSpace: {
            size: '213mm x 301mm'
          },
          cuttingLine: {
            size: '210mm x 297mm'
          },
          safeSpace: {
            size: '170mm x 257mm'
          }
        }
      },
      files: {
        ai: 'Metal_Sign_A4.zip',
        pdf: 'Metal_Sign_A4.pdf',
        jpg: 'Metal_Sign_A4.jpg'
      }
    },
    {
      title: 'A3',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'metalsign-img-a-3',
        area: {
          workSpace: {
            size: '300mm x 424mm'
          },
          cuttingLine: {
            size: '297mm x 420mm'
          },
          safeSpace: {
            size: '257mm x 380mm'
          }
        }
      },
      files: {
        ai: 'Metal_Sign_A3.zip',
        pdf: 'Metal_Sign_A3.pdf',
        jpg: 'Metal_Sign_A3.jpg'
      }
    },
    {
      title: 'A2',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'metalsign-img-a-2',
        area: {
          workSpace: {
            size: '423mm x 598mm'
          },
          cuttingLine: {
            size: '420mm x 594mm'
          },
          safeSpace: {
            size: '360mm x 534mm'
          }
        }
      },
      files: {
        ai: 'Metal_Sign_A2.zip',
        pdf: 'Metal_Sign_A2.pdf',
        jpg: 'Metal_Sign_A2.jpg'
      }
    },
    {
      title: 'A1',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'metalsign-img-a-1',
        area: {
          workSpace: {
            size: '597mm x 844mm'
          },
          cuttingLine: {
            size: '594mm x 840mm'
          },
          safeSpace: {
            size: '494mm x 740mm'
          }
        }
      },
      files: {
        ai: 'Metal_Sign_A1.zip',
        pdf: 'Metal_Sign_A1.pdf',
        jpg: 'Metal_Sign_A1.jpg'
      }
    },
    {
      title: 'B4',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'metalsign-img-b-4',
        area: {
          workSpace: {
            size: '243mm x 351mm'
          },
          cuttingLine: {
            size: '240mm x 347mm'
          },
          safeSpace: {
            size: '200mm x 307mm'
          }
        }
      },
      files: {
        ai: 'Metal_Sign_B4.zip',
        pdf: 'Metal_Sign_B4.pdf',
        jpg: 'Metal_Sign_B4.jpg'
      }
    },
    {
      title: 'B3',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'metalsign-img-b-3',
        area: {
          workSpace: {
            size: '350mm x 504mm'
          },
          cuttingLine: {
            size: '347mm x 500mm'
          },
          safeSpace: {
            size: '287mm x 440mm'
          }
        }
      },
      files: {
        ai: 'Metal_Sign_B3.zip',
        pdf: 'Metal_Sign_B3.pdf',
        jpg: 'Metal_Sign_B3.jpg'
      }
    },
    {
      title: 'B2',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'metalsign-img-b-2',
        area: {
          workSpace: {
            size: '503mm x 724mm'
          },
          cuttingLine: {
            size: '500mm x 720mm'
          },
          safeSpace: {
            size: '420mm x 640mm'
          }
        }
      },
      files: {
        ai: 'Metal_Sign_B2.zip',
        pdf: 'Metal_Sign_B2.pdf',
        jpg: 'Metal_Sign_B2.jpg'
      }
    }
  ],
  WOODEN_FRAME_SIGN: [
    {
      title: 'A4',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'woodensign-img-a-4',
        area: {
          workSpace: {
            size: '212mm x 299mm'
          },
          cuttingLine: {
            size: '210mm x 297mm'
          },
          safeSpace: {
            size: '150mm x 237mm'
          }
        }
      },
      files: {
        ai: 'WoodenFrame_Sign_A4.zip',
        pdf: 'WoodenFrame_Sign_A4.pdf',
        jpg: 'WoodenFrame_Sign_A4.jpg'
      }
    },
    {
      title: 'A3',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'woodensign-img-a-3',
        area: {
          workSpace: {
            size: '299mm x 422mm'
          },
          cuttingLine: {
            size: '297mm x 420mm'
          },
          safeSpace: {
            size: '217mm x 340mm'
          }
        }
      },
      files: {
        ai: 'WoodenFrame_Sign_A3.zip',
        pdf: 'WoodenFrame_Sign_A3.pdf',
        jpg: 'WoodenFrame_Sign_A3.jpg'
      }
    },
    {
      title: 'A2',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'woodensign-img-a-2',
        area: {
          workSpace: {
            size: '422mm x 596mm'
          },
          cuttingLine: {
            size: '420mm x 594mm'
          },
          safeSpace: {
            size: '330mm x 504mm'
          }
        }
      },
      files: {
        ai: 'WoodenFrame_Sign_A2.zip',
        pdf: 'WoodenFrame_Sign_A2.pdf',
        jpg: 'WoodenFrame_Sign_A2.jpg'
      }
    },
    {
      title: 'A1',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'woodensign-img-a-1',
        area: {
          workSpace: {
            size: '596mm x 842mm'
          },
          cuttingLine: {
            size: '594mm x 840mm'
          },
          safeSpace: {
            size: '464mm x 710mm'
          }
        }
      },
      files: {
        ai: 'WoodenFrame_Sign_A1.zip',
        pdf: 'WoodenFrame_Sign_A1.pdf',
        jpg: 'WoodenFrame_Sign_A1.jpg'
      }
    }
  ],
  TABLE_TOP_SIGN: [
    {
      title: 'A6',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'tabletop-img-a-6',
        area: {
          workSpace: {
            size: '107mm x 151mm'
          },
          cuttingLine: {
            size: '105mm x 148mm'
          },
          safeSpace: {
            size: '85mm x 129mm'
          }
        }
      },
      files: {
        ai: 'Tabletop_Sign_A6.zip',
        pdf: 'Tabletop_Sign_A6.pdf',
        jpg: 'Tabletop_Sign_A6.jpg'
      }
    },
    {
      title: 'A5',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'tabletop-img-a-5',
        area: {
          workSpace: {
            size: '150mm x 212mm'
          },
          cuttingLine: {
            size: '148mm x 210mm'
          },
          safeSpace: {
            size: '118mm x 180mm'
          }
        }
      },
      files: {
        ai: 'Tabletop_Sign_A5.zip',
        pdf: 'Tabletop_Sign_A5.pdf',
        jpg: 'Tabletop_Sign_A5.jpg'
      }
    },
    {
      title: 'A4',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'tabletop-img-a-4',
        area: {
          workSpace: {
            size: '212mm x 299mm'
          },
          cuttingLine: {
            size: '210mm x 297mm'
          },
          safeSpace: {
            size: '170mm x 257mm'
          }
        }
      },
      files: {
        ai: 'Tabletop_Sign_A4.zip',
        pdf: 'Tabletop_Sign_A4.pdf',
        jpg: 'Tabletop_Sign_A4.jpg'
      }
    }
  ],
  CAR_MAGNET: [
    {
      title: '150 x 100',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'carmagnetic-img-150-x-100',
        area: {
          workSpace: {
            size: '156mm x 106mm'
          },
          cuttingLine: {
            size: '150mm x 100mm'
          },
          safeSpace: {
            size: '130mm x 80mm'
          }
        }
      },
      files: {
        ai: 'Car_Magnet_150x100.zip',
        pdf: 'Car_Magnet_150x100.pdf',
        jpg: 'Car_Magnet_150x100.jpg'
      }
    },
    {
      title: '300 x 200',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'carmagnetic-img-300-x-200',
        area: {
          workSpace: {
            size: '306mm x 206mm'
          },
          cuttingLine: {
            size: '300mm x 200mm'
          },
          safeSpace: {
            size: '260mm x 160mm'
          }
        }
      },
      files: {
        ai: 'Car_Magnet_300x200.zip',
        pdf: 'Car_Magnet_300x200.pdf',
        jpg: 'Car_Magnet_300x200.jpg'
      }
    },
    {
      title: '450 x 300',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'carmagnetic-img-450-x-300',
        area: {
          workSpace: {
            size: '456mm x 306mm'
          },
          cuttingLine: {
            size: '450mm x 300mm'
          },
          safeSpace: {
            size: '400mm x 250mm'
          }
        }
      },
      files: {
        ai: 'Car_Magnet_450x300.zip',
        pdf: 'Car_Magnet_450x300.pdf',
        jpg: 'Car_Magnet_450x300.jpg'
      }
    },
    {
      title: '600 x 400',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'carmagnetic-img-600-x-400',
        area: {
          workSpace: {
            size: '606mm x 406mm'
          },
          cuttingLine: {
            size: '600mm x 400mm'
          },
          safeSpace: {
            size: '530mm x 330mm'
          }
        }
      },
      files: {
        ai: 'Car_Magnet_600x400.zip',
        pdf: 'Car_Magnet_600x400.pdf',
        jpg: 'Car_Magnet_600x400.jpg'
      }
    },
    {
      title: '400 x 97',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'carmagnetic-img-400-x-97',
        area: {
          workSpace: {
            size: '406mm x 103mm'
          },
          cuttingLine: {
            size: '400mm x 97mm'
          },
          safeSpace: {
            size: '380mm x 77mm'
          }
        }
      },
      files: {
        ai: 'Car_Magnet_400x97.zip',
        pdf: 'Car_Magnet_400x97.pdf',
        jpg: 'Car_Magnet_400x97.jpg'
      }
    },
    {
      title: '800 x 200',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'carmagnetic-img-800-x-200',
        area: {
          workSpace: {
            size: '806mm x 206mm'
          },
          cuttingLine: {
            size: '800mm x 200mm'
          },
          safeSpace: {
            size: '760mm x 160mm'
          }
        }
      },
      files: {
        ai: 'Car_Magnet_800x200.zip',
        pdf: 'Car_Magnet_800x200.pdf',
        jpg: 'Car_Magnet_800x200.jpg'
      }
    },
    {
      title: '1000 x 250',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'carmagnetic-img-1000-x-250',
        area: {
          workSpace: {
            size: '1006mm x 256mm'
          },
          cuttingLine: {
            size: '1000mm x 250mm'
          },
          safeSpace: {
            size: '940mm x 190mm'
          }
        }
      },
      files: {
        ai: 'Car_Magnet_1000x250.zip',
        pdf: 'Car_Magnet_1000x250.pdf',
        jpg: 'Car_Magnet_1000x250.jpg'
      }
    },
    {
      title: '1200 x 300',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'carmagnetic-img-1200-x-300',
        area: {
          workSpace: {
            size: '1206mm x 306mm'
          },
          cuttingLine: {
            size: '1200mm x 300mm'
          },
          safeSpace: {
            size: '1140mm x 240mm'
          }
        }
      },
      files: {
        ai: 'Car_Magnet_1200x300.zip',
        pdf: 'Car_Magnet_1200x300.pdf',
        jpg: 'Car_Magnet_1200x300.jpg'
      }
    }
  ],
  A_FRAME_SIGN: [
    {
      title: '',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'aframe-489507',
        area: {
          workSpace: {
            size: '454mm x 804mm'
          },
          cuttingLine: {
            size: '450mm x 800mm'
          },
          safeSpace: {
            size: '340mm x 690mm'
          }
        }
      },
      files: {
        ai: 'A_Frame.zip',
        pdf: 'A_Frame.pdf',
        jpg: 'A_Frame.jpg'
      }
    }
  ],
  APPAREL: [
    //first
    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-p32111'],
      guide: {
        image: 'apparel-opm-p-32111-front',
        area: {
          workSpace: {
            size: '375mm x 260mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Shoulder_Ecobag_Front_375x260_AI.zip',
        pdf: 'Apparel_Shoulder_Ecobag_Front_375x260_PDF.zip'
      }
    },

    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-p32112'],
      guide: {
        image: 'apparel-opm-p-32112-front',
        area: {
          workSpace: {
            size: '280mm x 298mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Tote_Ecobag_Front_280x298_AI.zip',
        pdf: 'Apparel_Tote_Ecobag_Front_280x298_PDF.zip'
      }
    },

    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-p32113'],
      guide: {
        image: 'apparel-opm-p-32113-front',
        area: {
          workSpace: {
            size: '202mm x 140mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Cross_Ecobag_Front_202x140_AI.zip',
        pdf: 'Apparel_Cross_Ecobag_Front_202x140_PDF.zip'
      }
    },

    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-p32114'],
      guide: {
        image: 'apparel-opm-p-32114-front',
        area: {
          workSpace: {
            size: '180mm x 125mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Square_Ecobag_Front_180x125_AI.zip',
        pdf: 'Apparel_Square_Ecobag_Front_180x125_PDF.zip'
      }
    },

    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-p32101'],
      guide: {
        image: 'relax-mtm-front',
        area: {
          workSpace: {
            size: '330mm x 374mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_Sweatshirts_B_Front_330x374_AI.zip',
        pdf: 'Apparel_Adult_Sweatshirts_B_Front_330x374_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['ohprintme-opm-p32101',],
      guide: {
        image: 'relax-mtm-back',
        area: {
          workSpace: {
            size: '330mm x 374mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_Sweatshirts_B_Back_330x374_AI.zip',
        pdf: 'Apparel_Adult_Sweatshirts_B_Back_330x374_PDF.zip'
      }
    },




    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-100218-kids'],
      guide: {
        image: 'pants-kids-front',
        area: {
          workSpace: {
            size: '100mm x 400mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Kid_Pants_Front_100x400_AI.zip',
        pdf: 'Apparel_Kid_Pants_Front_100x400_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['ohprintme-opm-100218-kids'],
      guide: {
        image: 'pants-kids-back',
        area: {
          workSpace: {
            size: '375mm x 164mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Kid_Pants_Back_320x140_AI.zip',
        pdf: 'Apparel_Kid_Pants_Back_320x140_PDF.zip'
      }
    },


    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-100217-kids', 'ohprintme-opm-100342-kids'],
      guide: {
        image: 'hoodie-zipup-kids-front',
        area: {
          workSpace: {
            size: '110mm x 110mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Kid_HoodieZipup_Front_110x110_AI.zip',
        pdf: 'Apparel_Kid_HoodieZipup_Front_110x110_PDF.zip'
      }
    },

    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-100216-kids'],
      guide: {
        image: 'hoodie-kids-front',
        area: {
          workSpace: {
            size: '300mm x 210mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Kid_Hoodie_Front_300x210_AI.zip',
        pdf: 'Apparel_Kid_Hoodie_Front_300x210_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['ohprintme-opm-100216-kids'],
      guide: {
        image: 'hoodie-kids-back',
        area: {
          workSpace: {
            size: '300mm x 340mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Kid_Hoodie_Back_300x340_AI.zip',
        pdf: 'Apparel_Kid_Hoodie_Back_300x340_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['ohprintme-opm-100217-kids', 'ohprintme-opm-100342-kids'],
      guide: {
        image: 'hoodie-kids-back',
        area: {
          workSpace: {
            size: '300mm x 340mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Kid_HoodieZipup_Back_300x340_AI.zip',
        pdf: 'Apparel_Kid_HoodieZipup_Back_300x340_PDF.zip'
      }
    },
    {
      title: '후드 오른쪽 / 왼쪽',
      defaults: [''],
      allows: ['ohprintme-opm-100216-kids'],
      guide: {
        image: 'hoodie-right',
        area: {
          workSpace: {
            size: '150mm x 200mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Kid_Hoodie_Head_150x200_AI.zip',
        pdf: 'Apparel_Kid_Hoodie_Head_150x200_PDF.zip'
      }
    },
    {
      title: '후드 오른쪽 / 왼쪽',
      defaults: [''],
      allows: ['ohprintme-opm-100217-kids', 'ohprintme-opm-100342-kids'],
      guide: {
        image: 'hoodie-right',
        area: {
          workSpace: {
            size: '150mm x 200mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Kid_HoodieZipup_Head_150x200_AI.zip',
        pdf: 'Apparel_Kid_HoodieZipup_Head_150x200_PDF.zip'
      }
    },
    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-100777s'],
      guide: {
        image: 'ecobag-s',
        area: {
          workSpace: {
            size: '200mm x 70mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_EcoBag_S_Front_200x70_AI.zip',
        pdf: 'Apparel_EcoBag_S_Front_200x70_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['ohprintme-opm-100777s'],
      guide: {
        image: 'ecobag-s',
        area: {
          workSpace: {
            size: '200mm x 70mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_EcoBag_S_Back_200x70_AI.zip',
        pdf: 'Apparel_EcoBag_S_Back_200x70_PDF.zip'
      }
    },
    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-100777m'],
      guide: {
        image: 'ecobag-m',
        area: {
          workSpace: {
            size: '300mm x 208mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_EcoBag_M_Front_300x208_AI.zip',
        pdf: 'Apparel_EcoBag_M_Front_300x208_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['ohprintme-opm-100777m'],
      guide: {
        image: 'ecobag-m',
        area: {
          workSpace: {
            size: '300mm x 208mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_EcoBag_M_Back_300x208_AI.zip',
        pdf: 'Apparel_EcoBag_M_Back_300x208_PDF.zip'
      }
    },
    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-100777l'],
      guide: {
        image: 'ecobag-l',
        area: {
          workSpace: {
            size: '360mm x 250mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_EcoBag_L_Front_360x250_AI.zip',
        pdf: 'Apparel_EcoBag_L_Front_360x250_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['ohprintme-opm-100777l'],
      guide: {
        image: 'ecobag-l',
        area: {
          workSpace: {
            size: '360mm x 250mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_EcoBag_L_Back_360x250_AI.zip',
        pdf: 'Apparel_EcoBag_L_Back_360x250_PDF.zip'
      }
    },
    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-100347'],
      guide: {
        image: 'hoodie-b-front',
        area: {
          workSpace: {
            size: '375mm x 188mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_HoodieNapping_Front_375x188_AI.zip',
        pdf: 'Apparel_Adult_HoodieNapping_Front_375x188_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['ohprintme-opm-100347'],
      guide: {
        image: 'hoodie-back',
        area: {
          workSpace: {
            size: '375mm x 425mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_HoodieNapping_Back_375x425_AI.zip',
        pdf: 'Apparel_Adult_HoodieNapping_Back_375x425_PDF.zip'
      }
    },
    {
      title: '오른팔 / 왼팔',
      defaults: [''],
      allows: ['ohprintme-opm-100347'],
      guide: {
        image: 'hoodie-arm',
        area: {
          workSpace: {
            size: '100mm x 360mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_HoodieNapping_Arms_100x360_AI.zip',
        pdf: 'Apparel_Adult_HoodieNapping_Arms_100x360_PDF.zip'
      }
    },
    {
      title: '후드 오른쪽 / 왼쪽',
      defaults: [''],
      allows: ['ohprintme-opm-100347'],
      guide: {
        image: 'hoodie-right',
        area: {
          workSpace: {
            size: '150mm x 200mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_HoodieNapping_Head_150x200_AI.zip',
        pdf: 'Apparel_Adult_HoodieNapping_Head_150x200_PDF.zip'
      }
    },

    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-100218'],
      guide: {
        image: 'pants-front',
        area: {
          workSpace: {
            size: '100mm x 400mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_Pants_Front_100x400_AI.zip',
        pdf: 'Apparel_Adult_Pants_Front_100x400_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['ohprintme-opm-100218'],
      guide: {
        image: 'pants-back',
        area: {
          workSpace: {
            size: '375mm x 164mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_Pants_Back_375x164_AI.zip',
        pdf: 'Apparel_Adult_Pants_Back_375x164_PDF.zip'
      }
    },


    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-100217', 'ohprintme-opm-100348', 'ohprintme-opm-100342'],
      guide: {
        image: 'hoodie-zipup-front',
        area: {
          workSpace: {
            size: '180mm x 180mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_HoodieZipup_Front_180x180_AI.zip',
        pdf: 'Apparel_Adult_HoodieZipup_Front_180x180_PDF.zip'
      }
    },


    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-100216'],
      guide: {
        image: 'hoodie-a-front',
        area: {
          workSpace: {
            size: '375mm x 263mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_Hoodie_Front_375x263_AI.zip',
        pdf: 'Apparel_Adult_Hoodie_Front_375x263_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['ohprintme-opm-100216'],
      guide: {
        image: 'hoodie-back',
        area: {
          workSpace: {
            size: '375mm x 425mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_Hoodie_Back_375x425_AI.zip',
        pdf: 'Apparel_Adult_Hoodie_Back_375x425_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['ohprintme-opm-100217', 'ohprintme-opm-100348', 'ohprintme-opm-100342'],
      guide: {
        image: 'hoodie-back',
        area: {
          workSpace: {
            size: '375mm x 425mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_HoodieZipup_Back_375x425_AI.zip',
        pdf: 'Apparel_Adult_HoodieZipup_Back_375x425_PDF.zip'
      }
    },
    {
      title: '오른팔 / 왼팔',
      defaults: [''],
      allows: ['ohprintme-opm-100216'],
      guide: {
        image: 'hoodie-arm',
        area: {
          workSpace: {
            size: '100mm x 360mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_Hoodie_Arms_100x360_AI.zip',
        pdf: 'Apparel_Adult_Hoodie_Arms_100x360_PDF.zip'
      }
    },
    {
      title: '오른팔 / 왼팔',
      defaults: [''],
      allows: ['ohprintme-opm-100217', 'ohprintme-opm-100348', 'ohprintme-opm-100342'],
      guide: {
        image: 'hoodie-arm',
        area: {
          workSpace: {
            size: '100mm x 360mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_HoodieZipup_Arms_100x360_AI.zip',
        pdf: 'Apparel_Adult_HoodieZipup_Arms_100x360_PDF.zip'
      }
    },
    {
      title: '후드 오른쪽 / 왼쪽',
      defaults: [''],
      allows: ['ohprintme-opm-100217', 'ohprintme-opm-100348', 'ohprintme-opm-100342'],
      guide: {
        image: 'hoodie-right',
        area: {
          workSpace: {
            size: '150mm x 200mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_HoodieZipup_Head_150x200_AI.zip',
        pdf: 'Apparel_Adult_HoodieZipup_Head_150x200_PDF.zip'
      }
    },
    {
      title: '후드 오른쪽 / 왼쪽',
      defaults: [''],
      allows: ['ohprintme-opm-100216'],
      guide: {
        image: 'hoodie-right',
        area: {
          workSpace: {
            size: '150mm x 200mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_Hoodie_Head_150x200_AI.zip',
        pdf: 'Apparel_Adult_Hoodie_Head_150x200_PDF.zip'
      }
    },


    {
      title: '앞면',
      defaults: [''],
      allows:['ohprintme-opm-100346', 'moccasom-mcd3-ts105', 'moccasom-mce4-ts101', 'moccasom-mce1-ts109', 'moccasom-mce4-ts103'],
      guide: {
        image: 'mtm-front',
        area: {
          workSpace: {
            size: '375mm x 425mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_Sweatshirts_Front_375x425_AI.zip',
        pdf: 'Apparel_Adult_Sweatshirts_Front_375x425_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['ohprintme-opm-100346', 'moccasom-mcd3-ts105', 'moccasom-mce4-ts101', 'moccasom-mce1-ts109', 'moccasom-mce4-ts103'],
      guide: {
        image: 'mtm-back',
        area: {
          workSpace: {
            size: '375mm x 425mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_Sweatshirts_Back_375x425_AI.zip',
        pdf: 'Apparel_Adult_Sweatshirts_Back_375x425_PDF.zip'
      }
    },
    {
      title: '목뒤',
      defaults: [''],
      allows: ['ohprintme-opm-100346',  'ohprintme-opm-p32101'],
      guide: {
        image: 'mtm-neck',
        area: {
          workSpace: {
            size: '130mm x 70mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_Sweatshirts_BackNeck_130x70_AI.zip',
        pdf: 'Apparel_Adult_Sweatshirts_BackNeck_130x70_PDF.zip'
      }
    },
    {
      title: '오른팔/왼팔',
      defaults: [''],
      allows: ['ohprintme-opm-100346', 'ohprintme-opm-p32101'],
      guide: {
        image: 'mtm-arm-right',
        area: {
          workSpace: {
            size: '100mm x 360mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_Sweatshirts_Arms_100x360_AI.zip',
        pdf: 'Apparel_Adult_Sweatshirts_Arms_100x360_PDF.zip'
      }
    },
    {
      title: '앞면',
      defaults: [''],
      allows: [
        'glimmer-300-act-kids'
      ],
      guide: {
        image: 'round-01-front',
        area: {
          workSpace: {
            size: '300mm x 340mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Kid_ShortSleeveT_Back_300x340_AI.zip',
        pdf: 'Apparel_Kid_ShortSleeveT_Back_300x340_PDF.zip'
      }
    },
    {
      title: '앞면',
      defaults: [''],
      allows: [
        'glimmer-300-act',
        'moccasom-mcd1-ts2061',
        'ohprintme-opm-p32104',
        'moccasom-mcd3-ts106',
        'gildan-42000',
        'gildan-4bi00',
      ],
      guide: {
        image: 'round-01-front-man',
        area: {
          workSpace: {
            size: '375mm x 425mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_ShortSleeveT_B_Front_375x425_AI.zip',
        pdf: 'Apparel_Adult_ShortSleeveT_B_Front_375x425_PDF.zip'
      }
    },
    {
      title: '앞면',
      defaults: [''],
      allows: [
        'round'
      ],
      guide: {
        image: 'round-01-front',
        area: {
          workSpace: {
            size: '300mm x 340mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Basic_Front_300x340_AI.zip',
        pdf: 'Apparel_Basic_Front_300x340_PDF.zip'
      }
    },
    {
      title: '앞면 (포켓 위)',
      defaults: [''],
      allows: ['pocket'],
      guide: {
        image: 'round-pocket-01-front',
        area: {
          workSpace: {
            size: '110mm x 60mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Pocket_Front_110x60_AI.zip',
        pdf: 'Apparel_Pocket_Front_110x60_PDF.zip'
      }
    },
    {
      title: '앞면 (포켓 위)',
      defaults: [''],
      allows: ['gildan-2300'],
      guide: {
        image: 'round-pocket-01-front',
        area: {
          workSpace: {
            size: '110mm x 60mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_AllPocketT_Front_110x60_AI.zip',
        pdf: 'Apparel_Adult_AllPocketT_Front_110x60_PDF.zip'
      }
    },
    {
      title: '앞면',
      defaults: [''],
      allows: ['vneck'],
      guide: {
        image: 'vneck-01-front',
        area: {
          workSpace: {
            size: '300mm x 340mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Basic_Front_300x340_AI.zip',
        pdf: 'Apparel_Basic_Front_300x340_PDF.zip'
      }
    },
    {
      title: '앞면 (가슴)',
      defaults: [''],
      allows: ['polo'],
      guide: {
        image: 'pk-01-front',
        area: {
          workSpace: {
            size: '110mm x 110mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Pocketless_Front_110x110_AI.zip',
        pdf: 'Apparel_Pocketless_Front_110x110_PDF.zip'
      }
    },
    {
      title: '앞면 (가슴)',
      defaults: [''],
      allows: ['gildan-73800', 'gildan-6800'],
      guide: {
        image: 'pk-01-front',
        area: {
          workSpace: {
            size: '110mm x 110mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_CollarT_Front_110x110_AI.zip',
        pdf: 'Apparel_Adult_CollarT_Front_110x110_PDF.zip'
      }
    },
    {
      title: '앞면 (가슴)',
      defaults: [''],
      allows: ['gildan-73800l'],
      guide: {
        image: 'pk-01-front',
        area: {
          workSpace: {
            size: '110mm x 110mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_W_CollarT_Front_110x110_AI.zip',
        pdf: 'Apparel_Adult_W_CollarT_Front_110x110_PDF.zip'
      }
    },
    {
      title: '앞면 (크롭)',
      defaults: [''],
      allows: ['crop', 'american-apparel-tr480w'],
      guide: {
        image: 'crop-01-front',
        area: {
          workSpace: {
            size: '297mm x 210mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Top_Front_297x210_AI.zip',
        pdf: 'Apparel_Top_Front_297x210_PDF.zip'
      }
    },
    {
      title: '앞면 (포켓 위)',
      defaults: [''],
      allows: ['printstar-195-byp', 'glimmer-331-abp', 'glimmer-315-ayb'],
      guide: {
        image: 'pk-05-pocket',
        area: {
          workSpace: {
            size: '110mm x 60mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_AllPocketT_Front_110x60_AI.zip',
        pdf: 'Apparel_Adult_AllPocketT_Front_110x60_PDF.zip'
      }
    },
    {
      title: '앞면 (포켓 위)',
      defaults: [''],
      allows: ['polo-pocket'],
      guide: {
        image: 'pk-05-pocket',
        area: {
          workSpace: {
            size: '110mm x 60mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Pocket_Front_110x60_AI.zip',
        pdf: 'Apparel_Pocket_Front_110x60_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['glimmer-300-act-kids'],
      guide: {
        image: 'round-02-back',
        area: {
          workSpace: {
            size: '300mm x 340mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Kid_ShortSleeveT_Front_300x340_AI.zip',
        pdf: 'Apparel_Kid_ShortSleeveT_Front_300x340_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: [
        'glimmer-300-act',
        'moccasom-mcd1-ts2061',
        'ohprintme-opm-p32104',
        'moccasom-mcd3-ts106',
        'gildan-42000',
        'gildan-6800',
        'gildan-4bi00',

      ],
      guide: {
        image: 'round-02-back-man',
        area: {
          workSpace: {
            size: '375mm x 425mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_ShortSleeveT_B_Back_375x425_AI.zip',
        pdf: 'Apparel_Adult_ShortSleeveT_B_Back_375x425_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['round', 'vneck', 'pocket'],
      guide: {
        image: 'round-02-back',
        area: {
          workSpace: {
            size: '300mm x 340mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_All_Back_300x340_AI.zip',
        pdf: 'Apparel_All_Back_300x340_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['gildan-2300'],
      guide: {
        image: 'round-02-back-man',
        area: {
          workSpace: {
            size: '375mm x 425mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_AllPocketT_Back_375x425_AI.zip',
        pdf: 'Apparel_Adult_AllPocketT_Back_375x425_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['polo', 'polo-pocket'],
      guide: {
        image: 'pk-02-back',
        area: {
          workSpace: {
            size: '300mm x 340mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_All_Back_300x340_AI.zip',
        pdf: 'Apparel_All_Back_300x340_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['gildan-73800'],
      guide: {
        image: 'pk-02-back-man',
        area: {
          workSpace: {
            size: '375mm x 425mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_CollarT_Back_375x425_AI.zip',
        pdf: 'Apparel_Adult_CollarT_Back_375x425_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['gildan-73800l'],
      guide: {
        image: 'pk-02-back',
        area: {
          workSpace: {
            size: '300mm x 340mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_W_CollarT_Back_300x340_AI.zip',
        pdf: 'Apparel_Adult_W_CollarT_Back_300x340_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['printstar-195-byp', 'glimmer-331-abp', 'glimmer-315-ayb'],
      guide: {
        image: 'round-02-back-man',
        area: {
          workSpace: {
            size: '375mm x 425mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_AllPocketT_Back_375x425_AI.zip',
        pdf: 'Apparel_Adult_AllPocketT_Back_375x425_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['crop', 'american-apparel-tr480w'],
      guide: {
        image: 'crop-02-back',
        area: {
          workSpace: {
            size: '297mm x 210mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Top_Back_297x210_AI.zip',
        pdf: 'Apparel_Top_Back_297x210_PDF.zip'
      }
    },
    {
      title: '목뒤',
      defaults: [''],
      allows: [
        'glimmer-300-act',
        'ohprintme-opm-p32104',
        'gildan-42000',
        'gildan-6800',
        'gildan-4bi00',

      ],
      guide: {
        image: 'round-03-neck',
        area: {
          workSpace: {
            size: '130mm x 70mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_ShortSleeveT_B_BackNeck_130x70_AI.zip',
        pdf: 'Apparel_Adult_ShortSleeveT_B_BackNeck_130x70_PDF.zip'
      }
    },
    {
      title: '목뒤',
      defaults: [''],
      allows: ['round', 'vneck', 'crop', 'pocket'],
      guide: {
        image: 'round-03-neck',
        area: {
          workSpace: {
            size: '130mm x 70mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_All_BackNeck_130x70_AI.zip',
        pdf: 'Apparel_All_BackNeck_130x70_PDF.zip'
      }
    },
    {
      title: '목뒤',
      defaults: [''],
      allows: ['gildan-2300'],
      guide: {
        image: 'round-03-neck',
        area: {
          workSpace: {
            size: '130mm x 70mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_AllPocketT_BackNeck_130x70_AI.zip',
        pdf: 'Apparel_Adult_AllPocketT_BackNeck_130x70_PDF.zip'
      }
    },
    {
      title: '목뒤',
      defaults: [''],
      allows: ['polo', 'polo-pocket'],
      guide: {
        image: 'pk-03-neck',
        area: {
          workSpace: {
            size: '130mm x 70mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_All_BackNeck_130x70_AI.zip',
        pdf: 'Apparel_All_BackNeck_130x70_PDF.zip'
      }
    },
    {
      title: '목뒤',
      defaults: [''],
      allows: ['gildan-73800'],
      guide: {
        image: 'pk-03-neck',
        area: {
          workSpace: {
            size: '130mm x 70mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_CollarT_BackNeck_130x70_AI.zip',
        pdf: 'Apparel_Adult_CollarT_BackNeck_130x70_PDF.zip'
      }
    },
    {
      title: '목뒤',
      defaults: [''],
      allows: ['gildan-73800l'],
      guide: {
        image: 'pk-03-neck',
        area: {
          workSpace: {
            size: '130mm x 70mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_W_CollarT_BackNeck_130x70_AI.zip',
        pdf: 'Apparel_Adult_W_CollarT_BackNeck_130x70_PDF.zip'
      }
    },
    {
      title: '목뒤',
      defaults: [''],
      allows: ['printstar-195-byp', 'glimmer-331-abp', 'glimmer-315-ayb'],
      guide: {
        image: 'pk-03-neck',
        area: {
          workSpace: {
            size: '130mm x 70mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_AllPocketT_BackNeck_130x70_AI.zip',
        pdf: 'Apparel_Adult_AllPocketT_BackNeck_130x70_PDF.zip'
      }
    },
    {
      title: '목뒤',
      defaults: [''],
      allows: ['american-apparel-tr480w'],
      guide: {
        image: 'crop-03-neck',
        area: {
          workSpace: {
            size: '130mm x 70mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_All_BackNeck_130x70_AI.zip',
        pdf: 'Apparel_All_BackNeck_130x70_PDF.zip'
      }
    },
    {
      title: '오른팔 / 왼팔',
      defaults: [''],
      allows: [
        'glimmer-300-act',
        'moccasom-mcd1-ts2061',
        'ohprintme-opm-p32104',
        'gildan-42000',
        'gildan-6800',
        'gildan-4bi00',
      ],
      guide: {
        image: 'round-04-arm',
        area: {
          workSpace: {
            size: '100mm x 70mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_ShortSleeveT_B_Arms_100x70_AI.zip',
        pdf: 'Apparel_Adult_ShortSleeveT_B_Arms_100x70_PDF.zip'
      }
    },
    {
      title: '오른팔 / 왼팔',
      defaults: [''],
      allows: ['round', 'vneck', 'crop', 'pocket', 'american-apparel-tr480w'],
      guide: {
        image: 'round-04-arm',
        area: {
          workSpace: {
            size: '100mm x 70mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_All_Arms_100x70_AI.zip',
        pdf: 'Apparel_All_Arms_100x70_PDF.zip'
      }
    },
    {
      title: '오른팔 / 왼팔',
      defaults: [''],
      allows: ['gildan-2300'],
      guide: {
        image: 'round-04-arm',
        area: {
          workSpace: {
            size: '100mm x 70mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_AllPocketT_Arms_100x70_AI.zip',
        pdf: 'Apparel_Adult_AllPocketT_Arms_100x70_PDF.zip'
      }
    },
    {
      title: '오른팔 / 왼팔',
      defaults: [''],
      allows: ['printstar-195-byp', 'glimmer-331-abp', 'glimmer-315-ayb'],
      guide: {
        image: 'pk-04-arm',
        area: {
          workSpace: {
            size: '100mm x 70mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_AllPocketT_Arms_100x70_AI.zip',
        pdf: 'Apparel_Adult_AllPocketT_Arms_100x70_PDF.zip'
      }
    },
    {
      title: '오른팔 / 왼팔',
      defaults: [''],
      allows: ['polo', 'polo-pocket'],
      guide: {
        image: 'pk-04-arm',
        area: {
          workSpace: {
            size: '100mm x 70mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_All_Arms_100x70_AI.zip',
        pdf: 'Apparel_All_Arms_100x70_PDF.zip'
      }
    },
    {
      title: '오른팔 / 왼팔',
      defaults: [''],
      allows: ['gildan-73800'],
      guide: {
        image: 'pk-04-arm',
        area: {
          workSpace: {
            size: '100mm x 70mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_CollarT_Arms_100x70_AI.zip',
        pdf: 'Apparel_Adult_CollarT_Arms_100x70_PDF.zip'
      }
    },
    {
      title: '오른팔 / 왼팔',
      defaults: [''],
      allows: ['gildan-73800l'],
      guide: {
        image: 'pk-04-arm',
        area: {
          workSpace: {
            size: '100mm x 70mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Adult_W_CollarT_Arms_100x70_AI.zip',
        pdf: 'Apparel_Adult_W_CollarT_Arms_100x70_PDF.zip'
      }
    },
    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-p22011m'],
      guide: {
        image: 'pouch-buttom',
        area: {
          workSpace: {
            size: '170mm x 60mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_DailyPouch_FlatBottomed_M_Front_170x60_AI.zip',
        pdf: 'Apparel_DailyPouch_FlatBottomed_M_Front_170x60_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['ohprintme-opm-p22011m'],
      guide: {
        image: 'pouch-buttom',
        area: {
          workSpace: {
            size: '170mm x 60mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_DailyPouch_FlatBottomed_M_Back_170x60_AI.zip',
        pdf: 'Apparel_DailyPouch_FlatBottomed_M_Back_170x60_PDF.zip'
      }
    },
    //
    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-p22012m'],
      guide: {
        image: 'pouch-flat-m',
        area: {
          workSpace: {
            size: '144mm x 100mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_STD_Pouch_Flat_M_Front_144x100_AI.zip',
        pdf: 'Apparel_STD_Pouch_Flat_M_Front_144x100_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['ohprintme-opm-p22012m'],
      guide: {
        image: 'pouch-flat-m',
        area: {
          workSpace: {
            size: '144mm x 100mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_STD_Pouch_Flat_M_Back_144x100_AI.zip',
        pdf: 'Apparel_STD_Pouch_Flat_M_Back_144x100_PDF.zip'
      }
    },
    //
    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-p22013l'],
      guide: {
        image: 'pouch-flat-l',
        area: {
          workSpace: {
            size: '240mm x 167mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_STD_Pouch_Flat_L_Front_240x167_AI.zip',
        pdf: 'Apparel_STD_Pouch_Flat_L_Front_240x167_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['ohprintme-opm-p22013l'],
      guide: {
        image: 'pouch-flat-l',
        area: {
          workSpace: {
            size: '240mm x 167mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_STD_Pouch_Flat_L_Back_240x167_AI.zip',
        pdf: 'Apparel_STD_Pouch_Flat_L_Back_240x167_PDF.zip'
      }
    },
    //
    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-p22014m'],
      guide: {
        image: 'ecobag-standard-m',
        area: {
          workSpace: {
            size: '230mm x 245mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_STD_EcoBag_M_Front_230x245_AI.zip',
        pdf: 'Apparel_STD_EcoBag_M_Front_230x245_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['ohprintme-opm-p22014m'],
      guide: {
        image: 'ecobag-standard-m',
        area: {
          workSpace: {
            size: '230mm x 245mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_STD_EcoBag_M_Back_230x245_AI.zip',
        pdf: 'Apparel_STD_EcoBag_M_Back_230x245_PDF.zip'
      }
    },
    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-p22015l'],
      guide: {
        image: 'ecobag-standard-l',
        area: {
          workSpace: {
            size: '320mm x 341mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_STD_EcoBag_L_Front_320x341_AI.zip',
        pdf: 'Apparel_STD_EcoBag_L_Front_320x341_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['ohprintme-opm-p22015l'],
      guide: {
        image: 'ecobag-standard-l',
        area: {
          workSpace: {
            size: '320mm x 341mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_STD_EcoBag_L_Back_320x341_AI.zip',
        pdf: 'Apparel_STD_EcoBag_L_Back_320x341_PDF.zip'
      }
    },
    //
    {
      title: '앞면',
      defaults: [''],
      allows: ['ohprintme-opm-p22016'],
      guide: {
        image: 'ecobag-pocket-front',
        area: {
          workSpace: {
            size: '300mm x 200mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_TwoPockets_Ecobag_Front_300x200_AI.zip',
        pdf: 'Apparel_TwoPockets_Ecobag_Front_300x200_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['ohprintme-opm-p22016'],
      guide: {
        image: 'ecobag-pocket-back',
        area: {
          workSpace: {
            size: '300mm x 320mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_TwoPockets_Ecobag_Back_300x320_AI.zip',
        pdf: 'Apparel_TwoPockets_Ecobag_Back_300x320_PDF.zip'
      }
    },

    // hint 디지털 Plus 1차
    {
      title: '앞면',
      defaults: [''],
      allows: [
        'printstar-085-cvt',
        'printstar-083-bbt',
        'gildan-ha00',
        'champion-t425',
        'gildan-2000',
        'aaa-1301',
        'comfort-colors-1717',
        'american-apparel-2001w',
        'ohprintme-opm-p22001',
        'gildan-76000',
        'ohprintme-opm-p32103',
        'gildan-76000p',
        'gildan-76600',
        'anvil-6750',
      ],
      guide: {
        image: 'round-01-front-man',
        area: {
          workSpace: {
            size: '375mm x 425mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_ShortSleeve_B_Front_375x425_AI.zip',
        pdf: 'Apparel_ShortSleeve_B_Front_375x425_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: [
        'printstar-085-cvt',
        'printstar-083-bbt',
        'gildan-ha00',
        'champion-t425',
        'gildan-2000',
        'aaa-1301',
        'comfort-colors-1717',
        'american-apparel-2001w',
        'ohprintme-opm-p22001',
        'gildan-76000',
        'ohprintme-opm-p32103',
        'gildan-76000p',
        'gildan-76600',
        'anvil-6750',
      ],
      guide: {
        image: 'round-02-back-man',
        area: {
          workSpace: {
            size: '375mm x 425mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_ShortSleeve_B_Back_375x425_AI.zip',
        pdf: 'Apparel_ShortSleeve_B_Back_375x425_PDF.zip'
      }
    },

    {
      title: '앞면',
      defaults: [''],
      allows: [ 'gildan-63v00' ],
      guide: {
        image: 'vneck-01-front-man',
        area: {
          workSpace: {
            size: '375mm x 425mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_ShortSleeve_B_Front_375x425_AI.zip',
        pdf: 'Apparel_ShortSleeve_B_Front_375x425_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: ['gildan-63v00'],
      guide: {
        image: 'round-02-back-man',
        area: {
          workSpace: {
            size: '375mm x 425mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_ShortSleeve_B_Back_375x425_AI.zip',
        pdf: 'Apparel_ShortSleeve_B_Back_375x425_PDF.zip'
      }
    },

    {
      title: '앞면',
      defaults: [''],
      allows: [
        'gildan-76500',
        'american-apparel-2102w',
        'printstar-085-cvt-kids',
      ],
      guide: {
        image: 'round-01-front',
        area: {
          workSpace: {
            size: '300mm x 340mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_ShortSleeve_A_Front_300x340_AI.zip',
        pdf: 'Apparel_ShortSleeve_A_Front_300x340_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: [
        'gildan-76500',
        'american-apparel-2102w',
        'printstar-085-cvt-kids',
      ],
      guide: {
        image: 'round-02-back',
        area: {
          workSpace: {
            size: '300mm x 340mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_ShortSleeve_A_Back_300x340_AI.zip',
        pdf: 'Apparel_ShortSleeve_A_Back_300x340_PDF.zip'
      }
    },

    {
      title: '앞면',
      defaults: [''],
      allows: [
        'gildan-63v00l',
      ],
      guide: {
        image: 'vneck-01-front',
        area: {
          workSpace: {
            size: '300mm x 340mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_ShortSleeve_A_Front_300x340_AI.zip',
        pdf: 'Apparel_ShortSleeve_A_Front_300x340_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: [
        'gildan-63v00l',
      ],
      guide: {
        image: 'round-02-back',
        area: {
          workSpace: {
            size: '300mm x 340mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_ShortSleeve_A_Back_300x340_AI.zip',
        pdf: 'Apparel_ShortSleeve_A_Back_300x340_PDF.zip'
      }
    },

    {
      title: '앞면',
      defaults: [''],
      allows: [
        'ohprintme-opm-100219',
        'printstar-00102-cvl',
      ],
      guide: {
        image: 'mtm-front',
        area: {
          workSpace: {
            size: '375mm x 425mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Sweatshirts_B_Front_375x425_AI.zip',
        pdf: 'Apparel_Sweatshirts_B_Front_375x425_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: [
        'ohprintme-opm-100219',
        'printstar-00102-cvl',
      ],
      guide: {
        image: 'mtm-back',
        area: {
          workSpace: {
            size: '375mm x 425mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Sweatshirts_B_Back_375x425_AI.zip',
        pdf: 'Apparel_Sweatshirts_B_Back_375x425_PDF.zip'
      }
    },

    {
      title: '앞면',
      defaults: [''],
      allows: [
        'ohprintme-opm-100219-kids',
        'printstar-00102-cvl-kids',
      ],
      guide: {
        image: 'mtm-kids-front',
        area: {
          workSpace: {
            size: '300mm x 340mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Sweatshirts_A_Front_300x340_AI.zip',
        pdf: 'Apparel_Sweatshirts_A_Front_300x340_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: [
        'ohprintme-opm-100219-kids',
        'printstar-00102-cvl-kids',
      ],
      guide: {
        image: 'mtm-kids-back',
        area: {
          workSpace: {
            size: '300mm x 340mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Sweatshirts_A_Back_300x340_AI.zip',
        pdf: 'Apparel_Sweatshirts_A_Back_300x340_PDF.zip'
      }
    },

    {
      title: '앞면',
      defaults: [''],
      allows: [
        'ohprintme-opm-p32102',
      ],
      guide: {
        image: 'relax-mtm-front',
        area: {
          workSpace: {
            size: '330mm x 374mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Sweatshirts_C_Front_330x374_AI.zip',
        pdf: 'Apparel_Sweatshirts_C_Front_330x374_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [''],
      allows: [
        'ohprintme-opm-p32102',
      ],
      guide: {
        image: 'relax-mtm-back',
        area: {
          workSpace: {
            size: '330mm x 374mm'
          }
        },
        description: `배경이 없는 디자인은 반드시 배경 레이어를 삭제하고<br/>PNG 또는 PDF로 저장해주세요.`
      },
      files: {
        ai: 'Apparel_Sweatshirts_C_Back_330x374_AI.zip',
        pdf: 'Apparel_Sweatshirts_C_Back_330x374_PDF.zip'
      }
    },

  ],
  PIN_BUTTON: [
    {
      title: '32',
      defaults: [],
      allows: ['circle', 'defaults'],
      guide: {
        image: 'guide-pinbtn-circle-32',
        area: {
          workSpace: {
            size: '45mm x 45mm'
          },
          cuttingLine: {
            size: '32mm x 32mm'
          },
          safeSpace: {
            size: '24mm x 24mm'
          }
        }
      },
      files: {
        ai: 'MD_PinButton_Round_32x32_AI.zip',
        pdf: 'MD_PinButton_Round_32x32_PDF.zip'
      }
    },
    {
      title: '38',
      defaults: [],
      allows: ['circle', 'defaults'],
      guide: {
        image: 'guide-pinbtn-circle-38',
        area: {
          workSpace: {
            size: '48mm x 48mm'
          },
          cuttingLine: {
            size: '38mm x 38mm'
          },
          safeSpace: {
            size: '30mm x 30mm'
          }
        }
      },
      files: {
        ai: 'MD_PinButton_Round_38x38_AI.zip',
        pdf: 'MD_PinButton_Round_38x38_PDF.zip'
      }
    },
    {
      title: '44',
      defaults: [],
      allows: ['circle', 'defaults'],
      guide: {
        image: 'guide-pinbtn-circle-44',
        area: {
          workSpace: {
            size: '54mm x 54mm'
          },
          cuttingLine: {
            size: '44mm x 44mm'
          },
          safeSpace: {
            size: '36mm x 36mm'
          }
        }
      },
      files: {
        ai: 'MD_PinButton_Round_44x44_AI.zip',
        pdf: 'MD_PinButton_Round_44x44_PDF.zip'
      }
    },
    {
      title: '58',
      defaults: [],
      allows: ['circle', 'defaults'],
      guide: {
        image: 'guide-pinbtn-circle-58',
        area: {
          workSpace: {
            size: '70mm x 70mm'
          },
          cuttingLine: {
            size: '58mm x 58mm'
          },
          safeSpace: {
            size: '50mm x 50mm'
          }
        }
      },
      files: {
        ai: 'MD_PinButton_Round_58x58_AI.zip',
        pdf: 'MD_PinButton_Round_58x58_PDF.zip'
      }
    },
    {
      title: '75',
      defaults: [],
      allows: ['circle', 'defaults'],
      guide: {
        image: 'guide-pinbtn-circle-75',
        area: {
          workSpace: {
            size: '86mm x 86mm'
          },
          cuttingLine: {
            size: '75mm x 75mm'
          },
          safeSpace: {
            size: '67mm x 67mm'
          }
        }
      },
      files: {
        ai: 'MD_PinButton_Round_75x75_AI.zip',
        pdf: 'MD_PinButton_Round_75x75_PDF.zip'
      }
    },
    {
      title: '37 x 37',
      defaults: [],
      allows: ['square', 'defaults'],
      guide: {
        image: 'guide-pinbtn-square-37',
        area: {
          workSpace: {
            size: '48mm x 48mm / R 7mm'
          },
          cuttingLine: {
            size: '37mm x 37mm / R 5mm'
          },
          safeSpace: {
            size: '29mm x 29mm'
          }
        }
      },
      files: {
        ai: 'MD_PinButton_Square_37x37_AI.zip',
        pdf: 'MD_PinButton_Square_37x37_PDF.zip'
      }
    },
    {
      title: '50 x 50',
      defaults: [],
      allows: ['square', 'defaults'],
      guide: {
        image: 'guide-pinbtn-square-50',
        area: {
          workSpace: {
            size: '62mm x 62mm / R 7mm'
          },
          cuttingLine: {
            size: '50mm x 50mm / R 5mm'
          },
          safeSpace: {
            size: '42mm x 42mm'
          }
        }
      },
      files: {
        ai: 'MD_PinButton_Square_50x50_AI.zip',
        pdf: 'MD_PinButton_Square_50x50_PDF.zip'
      }
    },
    {
      title: '57 x 52',
      defaults: [],
      allows: ['heart', 'defaults'],
      guide: {
        image: 'guide-pinbtn-heart-57',
        area: {
          workSpace: {
            size: '70mm x 64mm'
          },
          cuttingLine: {
            size: '57mm x 52mm'
          },
          safeSpace: {
            size: '49mm x 44mm'
          }
        }
      },
      files: {
        ai: 'MD_PinButton_Heart_57x52_AI.zip',
        pdf: 'MD_PinButton_Heart_57x52_PDF.zip'
      }
    }
  ],
  MIRROR_BUTTON: [
    {
      title: '58',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'guide-mirrorbtn-circle-58',
        area: {
          workSpace: {
            size: '70mm x 70mm'
          },
          cuttingLine: {
            size: '58mm x 58mm'
          },
          safeSpace: {
            size: '50mm x 50mm'
          }
        }
      },
      files: {
        ai: 'MD_MirrorButton_Round_58x58_AI.zip',
        pdf: 'MD_MirrorButton_Round_58x58_PDF.zip'
      }
    },
    {
      title: '75',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'guide-mirrorbtn-circle-75',
        area: {
          workSpace: {
            size: '86mm x 86mm'
          },
          cuttingLine: {
            size: '75mm x 75mm'
          },
          safeSpace: {
            size: '67mm x 67mm'
          }
        }
      },
      files: {
        ai: 'MD_MirrorButton_Round_75x75_AI.zip',
        pdf: 'MD_MirrorButton_Round_75x75_PDF.zip'
      }
    }
  ],
  MAGNET_BUTTON: [
    {
      title: '32',
      defaults: [],
      allows: ['circle', 'defaults'],
      guide: {
        image: 'guide-magnetbtn-circle-32',
        area: {
          workSpace: {
            size: '45mm x 45mm'
          },
          cuttingLine: {
            size: '32mm x 32mm'
          },
          safeSpace: {
            size: '24mm x 24mm'
          }
        }
      },
      files: {
        ai: 'MD_MagnetButton_Round_32x32_AI.zip',
        pdf: 'MD_MagnetButton_Round_32x32_PDF.zip'
      }
    },
    {
      title: '38',
      defaults: [],
      allows: ['circle', 'defaults'],
      guide: {
        image: 'guide-magnetbtn-circle-38',
        area: {
          workSpace: {
            size: '48mm x 48mm'
          },
          cuttingLine: {
            size: '38mm x 38mm'
          },
          safeSpace: {
            size: '30mm x 30mm'
          }
        }
      },
      files: {
        ai: 'MD_MagnetButton_Round_38x38_AI.zip',
        pdf: 'MD_MagnetButton_Round_38x38_PDF.zip'
      }
    },
    {
      title: '44',
      defaults: [],
      allows: ['circle', 'defaults'],
      guide: {
        image: 'guide-magnetbtn-circle-44',
        area: {
          workSpace: {
            size: '54mm x 54mm'
          },
          cuttingLine: {
            size: '44mm x 44mm'
          },
          safeSpace: {
            size: '36mm x 36mm'
          }
        }
      },
      files: {
        ai: 'MD_MagnetButton_Round_44x44_AI.zip',
        pdf: 'MD_MagnetButton_Round_44x44_PDF.zip'
      }
    },
    {
      title: '58',
      defaults: [],
      allows: ['circle', 'defaults'],
      guide: {
        image: 'guide-magnetbtn-circle-58',
        area: {
          workSpace: {
            size: '70mm x 70mm'
          },
          cuttingLine: {
            size: '58mm x 58mm'
          },
          safeSpace: {
            size: '50mm x 50mm'
          }
        }
      },
      files: {
        ai: 'MD_MagnetButton_Round_58x58_AI.zip',
        pdf: 'MD_MagnetButton_Round_58x58_PDF.zip'
      }
    },
    {
      title: '37 x 37',
      defaults: [],
      allows: ['square', 'defaults'],
      guide: {
        image: 'guide-magnetbtn-square-37',
        area: {
          workSpace: {
            size: '48mm x 48mm / R 7mm'
          },
          cuttingLine: {
            size: '37mm x 37mm / R 5mm'
          },
          safeSpace: {
            size: '29mm x 29mm'
          }
        }
      },
      files: {
        ai: 'MD_MagnetButton_Square_37x37_AI.zip',
        pdf: 'MD_MagnetButton_Square_37x37_PDF.zip'
      }
    },
    {
      title: '57 x 52',
      defaults: [],
      allows: ['heart', 'defaults'],
      guide: {
        image: 'guide-magnetbtn-heart-57',
        area: {
          workSpace: {
            size: '70mm x 64mm'
          },
          cuttingLine: {
            size: '57mm x 52mm'
          },
          safeSpace: {
            size: '49mm x 44mm'
          }
        }
      },
      files: {
        ai: 'MD_MagnetButton_Heart_57x52_AI.zip',
        pdf: 'MD_MagnetButton_Heart_57x52_PDF.zip'
      }
    }
  ],
  SMART_TOK: [
    {
      title: '원형',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'guide-smarttok-circle-37',
        area: {
          workSpace: {
            size: '39mm x 39mm'
          },
          cuttingLine: {
            size: '37mm x 37mm'
          },
          safeSpace: {
            size: '29mm x 29mm'
          }
        }
      },
      files: {
        ai: 'MD_SmartTok_Round_37x37_AI.zip',
        pdf: 'MD_SmartTok_Round_37x37_PDF.zip'
      }
    },
    {
      title: '하트형',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'guide-smarttok-hreat-54',
        area: {
          workSpace: {
            size: '57mm x 51mm'
          },
          cuttingLine: {
            size: '55mm x 49mm'
          },
          safeSpace: {
            size: '47mm x 41mm'
          }
        }
      },
      files: {
        ai: 'MD_SmartTok_Heart_55x49_AI.zip',
        pdf: 'MD_SmartTok_Heart_55x49_PDF.zip'
      }
    }
  ],
  NEW_STACK_GLASS: [
    {
      title: 'S',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'guide-new-stack-glass-s',
        area: {
          workSpace: {
            size: '245.532mm x 30mm'
          }
        },
        description: `<em>상품의 최상단 기준 10mm 떨어진 위치부터 인쇄됩니다.</em>`
      },
      files: {
        ai: 'MD_NewStackGlass_S_245.532x30_AI.zip',
        pdf: 'MD_NewStackGlass_S_245.532x30_PDF.zip'
      }
    },
    {
      title: 'L',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'guide-new-stack-glass-l',
        area: {
          workSpace: {
            size: '251mm x 50mm'
          }
        },
        description: `<em>상품의 최상단 기준 10mm 떨어진 위치부터 인쇄됩니다.</em>`
      },
      files: {
        ai: 'MD_NewStackGlass_L_251x50_AI.zip',
        pdf: 'MD_NewStackGlass_L_251x50_PDF.zip'
      }
    },
  ],
  STRAIGHT_GLASS: [
    {
      title: 'M',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'guide-straight-glass-m',
        area: {
          workSpace: {
            size: '202.51mm x 105mm'
          }
        },
        description: `<em>상품의 최상단 기준 15mm, 최하단 기준 20mm 떨어진 위치부터 인쇄됩니다.</em>`
      },
      files: {
        ai: 'MD_StraightGlass_M_202.51x105_AI.zip',
        pdf: 'MD_StraightGlass_M_202.51x105_PDF.zip'
      }
    },
    {
      title: 'L',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'guide-straight-glass-l',
        area: {
          workSpace: {
            size: '208.45mm x 131mm'
          }
        },
        description: `<em>상품의 최상단 기준 15mm, 최하단 기준 20mm 떨어진 위치부터 인쇄됩니다.</em>`
      },
      files: {
        ai: 'MD_StraightGlass_L_208.45x131_AI.zip',
        pdf: 'MD_StraightGlass_L_208.45x131_PDF.zip'
      }
    },
  ],
  TRANSLUCENT_REUSABLE_CUP: [
    {
      title: '',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'guide-translucent-reusable-cup',
        area: {
          workSpace: {
            size: '222.514mm x 110mm'
          }
        },
        description: `<em>캡을 제외한 상품의 최상단 기준 15mm 떨어진 위치부터 인쇄됩니다.</em>`
      },
      files: {
        ai: 'MD_ReusableCup_222.514x110_AI.zip',
        pdf: 'MD_ReusableCup_222.514x110_PDF.zip'
      }
    },
  ],
  REUSABLE_CUP: [
    {
      title: '',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'guide-reusable-cub-v2',
        area: {
          workSpace: {
            size: '251mm x 110mm'
          }
        },
        description: `<em>캡을 제외한 상품의 최상단 기준 15mm 떨어진 위치부터 인쇄됩니다.</em>`
      },
      files: {
        ai: 'MD_ReusableCup_251x110_AI.zip',
        pdf: 'MD_ReusableCup_251x110_PDF.zip'
      }
    },
  ],
  ECO_TUMBLER: [
    {
      title: '',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'guide-eco-tumbler',
        area: {
          workSpace: {
            size: '251mm x 110mm'
          }
        },
        description: `<em>캡을 제외한 상품의 최상단 기준 13mm 떨어진 위치부터 인쇄됩니다.</em>`
      },
      files: {
        ai: 'MD_EcoTumbler_251x110_AI.zip',
        pdf: 'MD_EcoTumbler_251x110_PDF.zip'
      }
    },
  ],
  NOTE_PAD: [
    {
      title: 'A5',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'guide-note-pad-148-x-210',
        area: {
          workSpace: {
            size: '154mm x 216mm'
          },
          cuttingLine: {
            size: '148mm x 210mm'
          },
          safeSpace: {
            size: '138mm x 200mm'
          }
        }
      },
      files: {
        ai: 'MD_NotePad_A5_148x210_AI.zip',
        pdf: 'MD_NotePad_A5_148x210_PDF.zip'
      }
    },
    {
      title: 'B5',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'guide-note-pad-182-x-257',
        area: {
          workSpace: {
            size: '188mm x 263mm'
          },
          cuttingLine: {
            size: '182mm x 257mm'
          },
          safeSpace: {
            size: '172mm x 247mm'
          }
        }
      },
      files: {
        ai: 'MD_NotePad_B5_182x257_AI.zip',
        pdf: 'MD_NotePad_B5_182x257_PDF.zip'
      }
    },
  ],
  MEMO_PAD: [
    {
      title: '90 x 90',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'guide-memo-pad-90-x-90',
        area: {
          workSpace: {
            size: '96mm x 96mm'
          },
          cuttingLine: {
            size: '90mm x 90mm'
          },
          safeSpace: {
            size: '80mm x 80mm'
          }
        }
      },
      files: {
        ai: 'MD_MemoPad_90x90_AI.zip',
        pdf: 'MD_MemoPad_90x90_PDF.zip'
      }
    },
    {
      title: '90 x 130',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'guide-memo-pad-90-x-130',
        area: {
          workSpace: {
            size: '96mm x 136mm'
          },
          cuttingLine: {
            size: '90mm x 130mm'
          },
          safeSpace: {
            size: '80mm x 120mm'
          }
        }
      },
      files: {
        ai: 'MD_MemoPad_90x130_AI.zip',
        pdf: 'MD_MemoPad_90x130_PDF.zip'
      }
    },
  ],
  PVC_DIARY: [
    {
      title: '',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'guide-pvc-cover-diary',
        area: {
          workSpace: {
            size: '396mm x 191mm'
          },
          cuttingLine: {
            size: '390mm x 185mm'
          },
          safeSpace: {
            size: '370mm x 165mm'
          }
        }
      },
      files: {
        ai: 'MD_Diary_PVC_Cover_390x185_AI.zip',
        pdf: 'MD_Diary_PVC_Cover_390x185_PDF.zip'
      }
    },
  ],
  SOFT_DIARY: [
    {
      title: '앞면',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'guide-soft-cover-diary-front',
        area: {
          workSpace: {
            size: '110mm x 170mm'
          },
          cuttingLine: {
            size: '130mm x 195mm'
          },
          safeSpace: {
            size: '100mm x 160mm'
          }
        }
      },
      files: {
        ai: 'MD_Diary_Soft_Front_110x170_AI.zip',
        pdf: 'MD_Diary_Soft_Front_110x170_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'guide-soft-cover-diary-back',
        area: {
          workSpace: {
            size: '110mm x 170mm'
          },
          cuttingLine: {
            size: '130mm x 195mm'
          },
          safeSpace: {
            size: '100mm x 160mm'
          }
        }
      },
      files: {
        ai: 'MD_Diary_Soft_Back_110x170_AI.zip',
        pdf: 'MD_Diary_Soft_Back_110x170_PDF.zip'
      }
    },
  ],
  HARD_DIARY: [
    {
      title: '앞면',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'guide-hard-cover-diary-front',
        area: {
          workSpace: {
            size: '140mm x 190mm'
          },
          cuttingLine: {
            size: '150mm x 210mm'
          },
          safeSpace: {
            size: '120mm x 170mm'
          }
        }
      },
      files: {
        ai: 'MD_Diary_Hard_Front_140x190_AI.zip',
        pdf: 'MD_Diary_Hard_Front_140x190_PDF.zip'
      }
    },
    {
      title: '뒷면',
      defaults: [],
      allows: ['defaults'],
      guide: {
        image: 'guide-hard-cover-diary-back',
        area: {
          workSpace: {
            size: '110mm x 190mm'
          },
          cuttingLine: {
            size: '150mm x 210mm'
          },
          safeSpace: {
            size: '90mm x 170mm'
          }
        }
      },
      files: {
        ai: 'MD_Diary_Hard_Back_110x190_AI.zip',
        pdf: 'MD_Diary_Hard_Back_110x190_PDF.zip'
      }
    },
  ],
  STANDARD_PEN: [
    {
      title: '',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'guide-standard-pen',
        area: {
          workSpace: {
            size: '35mm x 8mm'
          }
        }
      },
      files: {
        ai: 'MD_Pen_Standard_35x8_AI.zip',
        //pdf: 'MD_Pen_Standard_35x8_PDF.zip'
      }
    }
  ],
  BASIC_PEN: [
    {
      title: '',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'guide-basic-pen',
        area: {
          workSpace: {
            size: '100mm x 5mm'
          }
        }
      },
      files: {
        ai: 'MD_Pen_Basic_100x5_AI.zip',
        //pdf: 'MD_Pen_Basic_35x8_PDF.zip'
      }
    }
  ],
  LIGHT_PEN: [
    {
      title: '',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'guide-low-price-pen',
        area: {
          workSpace: {
            size: '35mm x 3.5mm'
          }
        }
      },
      files: {
        ai: 'MD_Pen_Light_35x3.5_AI.zip',
      }
    }
  ],
  ECO_PEN: [
    {
      title: '',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'guide-eco-pen',
        area: {
          workSpace: {
            size: '25mm x 6mm'
          }
        }
      },
      files: {
        ai: 'MD_Pen_ECO_25x6_AI.zip',
      }
    }
  ],
  FAN: [
    {
      title: '동글이',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'handfan-img-round',
        area: {
          workSpace: {
            size: '지름 194mm'
          },
          cuttingLine: {
            size: '지름 190mm'
          },
          safeSpace: {
            size: '지름 184mm'
          }
        }
      },
      files: {
        ai: 'MD_HandyFan_Round_190x190_AI.zip',
        pdf: 'MD_HandyFan_Round_190x190_PDF.zip'
      }
    },
    {
      title: '원형막대',
      defaults: ['defaults'],
      allows: ['defaults'],
      guide: {
        image: 'handfan-img-stick',
        area: {
          workSpace: {
            size: '지름 194mm'
          },
          cuttingLine: {
            size: '지름 190mm'
          },
          safeSpace: {
            size: '지름 184mm'
          }
        }
      },
      files: {
        ai: 'MD_HandyFan_Round_Handle_190x190_AI.zip',
        pdf: 'MD_HandyFan_Round_Handle_190x190_PDF.zip'
      }
    }
  ],
  CALENDAR_DESK: [
    {
      title: '가로 L',
      defaults: ['calendar_desk_standard'],
      allows: ['defaults', 'calendar_desk_standard', 'calendar_desk_opm_horizontal', 'calendar_desk_opm_vertical', 'calendar_desk_mini'],
      guide: {
        image: 'calendar-guide-original-width',
        area: {
          springSpace: {
            size: '상단에서 12mm'
          },
          workSpace: {
            size: '262mm x 162mm'
          },
          cuttingLine: {
            size: '260mm x 160mm'
          },
          safeSpace: {
            size: '240mm x 138mm'
          },
          tripodSpace: {
            size: '224mm x 23mm'
          },
        }
      },
      files: {
        ai: 'Calendar_Desk_L_Landscape_260x160_AI.zip',
        pdf: 'Calendar_Desk_L_Landscape_260x160_PDF.zip',
        indd: 'Calendar_Desk_L_Landscape_260x160_INDD.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.<br/>(<em class="blue">AI파일</em>의 경우 멀티페이지 작업이 가능한 <em class="blue">일러스트레이터 CS4버전</em>부터 작업이 가능합니다.)'
      }
    },
    {
      title: '가로 M',
      defaults: ['calendar_desk_opm_horizontal'],
      allows: ['defaults', 'calendar_desk_standard', 'calendar_desk_opm_horizontal', 'calendar_desk_opm_vertical', 'calendar_desk_mini'],
      guide: {
        image: 'calendar-guide-opm-width',
        area: {
          springSpace: {
            size: '상단에서 12mm'
          },
          workSpace: {
            size: '210mm x 150mm'
          },
          cuttingLine: {
            size: '208mm x 148mm'
          },
          safeSpace: {
            size: '188mm x 126mm'
          },
          tripodSpace: {
            size: '172mm x 23mm'
          },
        }
      },
      files: {
        ai: 'Calendar_Desk_M_Landscape_208x148_AI.zip',
        pdf: 'Calendar_Desk_M_Landscape_208x148_PDF.zip',
        indd: 'Calendar_Desk_M_Landscape_208x148_INDD.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.<br/>(<em class="blue">AI파일</em>의 경우 멀티페이지 작업이 가능한 <em class="blue">일러스트레이터 CS4버전</em>부터 작업이 가능합니다.)'
      }
    },
    {
      title: '세로 M',
      defaults: ['calendar_desk_opm_vertical'],
      allows: ['defaults', 'calendar_desk_standard', 'calendar_desk_opm_horizontal', 'calendar_desk_opm_vertical', 'calendar_desk_mini'],
      guide: {
        image: 'calendar-guide-original-height',
        area: {
          springSpace: {
            size: '상단에서 12mm'
          },
          workSpace: {
            size: '150mm x 210mm'
          },
          cuttingLine: {
            size: '148mm x 208mm'
          },
          safeSpace: {
            size: '128mm x 186mm'
          },
          tripodSpace: {
            size: '112mm x 23mm'
          },
        }
      },
      files: {
        ai: 'Calendar_Desk_M_Portrait_148x208_AI.zip',
        pdf: 'Calendar_Desk_M_Portrait_148x208_PDF.zip',
        indd: 'Calendar_Desk_M_Portrait_148x208_INDD.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.<br/>(<em class="blue">AI파일</em>의 경우 멀티페이지 작업이 가능한 <em class="blue">일러스트레이터 CS4버전</em>부터 작업이 가능합니다.)'
      }
    },
    {
      title: '세로 S',
      defaults: ['calendar_desk_mini'],
      allows: ['defaults', 'calendar_desk_standard', 'calendar_desk_opm_horizontal', 'calendar_desk_opm_vertical', 'calendar_desk_mini'],
      guide: {
        image: 'calendar-guide-mini-height',
        area: {
          springSpace: {
            size: '상단에서 12mm'
          },
          workSpace: {
            size: '90mm x 115mm'
          },
          cuttingLine: {
            size: '88mm x 113mm'
          },
          safeSpace: {
            size: '72mm x 93mm'
          },
          tripodSpace: {
            size: '52mm x 13mm'
          },
        }
      },
      files: {
        ai: 'Calendar_Desk_S_Portrait_88x113_AI.zip',
        pdf: 'Calendar_Desk_S_Portrait_88x113_PDF.zip',
        indd: 'Calendar_Desk_S_Portrait_88x113_INDD.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.<br/>(<em class="blue">AI파일</em>의 경우 멀티페이지 작업이 가능한 <em class="blue">일러스트레이터 CS4버전</em>부터 작업이 가능합니다.)'
      }
    }
  ],
  ENVELOPE:[
    {
      title: '대봉투 가로형',
      defaults: ['envelope'],
      allows: ['envelope-normal', 'defaults', 'envelope-normal-l-h'],
      guide: {
        image: 'envelope-guide-standard-big-row',
        area: {
          workSpace: {
            size: '388mm x 507mm'
          },
          cuttingLine: {
            size: '382mm x 501mm'
          },
          safeSpace: {
            size: '372mm x 455mm'
          },
          tripodSpace: {
            size: '330mm x 243mm'
          },
        }
      },
      files: {
        ai: 'Envelope_L_SideFlap_330x243_AI.zip',
        pdf: 'Envelope_L_SideFlap_330x243_PDF.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.'
      }
    },
    {
      title: '대봉투 세로형',
      defaults: ['envelope'],
      allows: ['envelope-normal', 'defaults', 'envelope-normal-l-v'],
      guide: {
        image: 'envelope-guide-standard-big-col',
        area: {
          workSpace: {
            size: '507mm x 388mm'
          },
          cuttingLine: {
            size: '501mm x 382mm'
          },
          safeSpace: {
            size: '455mm x 372mm'
          },
          tripodSpace: {
            size: '243mm x 330mm'
          },
        }
      },
      files: {
        ai: 'Envelope_L_TopFlap_243x330_AI.zip',
        pdf: 'Envelope_L_TopFlap_243x330_PDF.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.'
      }
    },
    {
      title: '중봉투 가로형',
      defaults: ['envelope'],
      allows: ['envelope-normal', 'defaults', 'envelope-normal-m-h'],
      guide: {
        image: 'envelope-guide-standard-medium-row',
        area: {
          workSpace: {
            size: '321mm x 406mm'
          },
          cuttingLine: {
            size: '315mm x 400mm'
          },
          safeSpace: {
            size: '305mm x 354mm'
          },
          tripodSpace: {
            size: '260mm x 190mm'
          },
        }
      },
      files: {
        ai: 'Envelope_M_SideFlap_260x190_AI.zip',
        pdf: 'Envelope_M_SideFlap_260x190_PDF.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.'
      }
    },
    {
      title: '중봉투 세로형',
      defaults: ['envelope'],
      allows: ['envelope-normal', 'defaults', 'envelope-normal-m-v'],
      guide: {
        image: 'envelope-guide-standard-medium-col',
        area: {
          workSpace: {
            size: '406mm x 321mm'
          },
          cuttingLine: {
            size: '400mm x 315mm'
          },
          safeSpace: {
            size: '354mm x 305mm'
          },
          tripodSpace: {
            size: '190mm x 260mm'
          },
        }
      },
      files: {
        ai: 'Envelope_M_TopFlap_190x260_AI.zip',
        pdf: 'Envelope_M_TopFlap_190x260_PDF.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.'
      }
    },
    {
      title: '소봉투 가로형',
      defaults: ['envelope'],
      allows: ['envelope-normal', 'defaults', 'envelope-normal-s-h'],
      guide: {
        image: 'envelope-guide-standard-small-row',
        area: {
          workSpace: {
            size: '261mm x 231.5mm'
          },
          cuttingLine: {
            size: '255mm x 225.5mm'
          },
          safeSpace: {
            size: '245mm x 189.5mm'
          },
          tripodSpace: {
            size: '220mm x 105mm'
          },
        }
      },
      files: {
        ai: 'Envelope_S_SideFlap_220x105_AI.zip',
        pdf: 'Envelope_S_SideFlap_220x105_PDF.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.'
      }
    },
    {
      title: '소봉투 세로형',
      defaults: ['envelope'],
      allows: ['envelope-normal', 'defaults', 'envelope-normal-s-v'],
      guide: {
        image: 'envelope-guide-standard-small-col',
        area: {
          workSpace: {
            size: '231.5mm x 261mm'
          },
          cuttingLine: {
            size: '225.5mm x 255mm'
          },
          safeSpace: {
            size: '189.5mm x 245mm'
          },
          tripodSpace: {
            size: '105mm x 220mm'
          },
        }
      },
      files: {
        ai: 'Envelope_S_TopFlap_105x220_AI.zip',
        pdf: 'Envelope_S_TopFlap_105x220_PDF.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.'
      }
    },
    {
      title: '캘린더 가로L',
      defaults: ['envelope'],
      allows: ['envelope-normal', 'defaults', 'envelope-normal-calendar-l-h'],
      guide: {
        image: 'envelope-guide-standard-calendar-row-l',
        area: {
          workSpace: {
            size: '607mm x 326mm'
          },
          cuttingLine: {
            size: '601mm x 320mm'
          },
          safeSpace: {
            size: '561mm x 310mm'
          },
          tripodSpace: {
            size: '293mm x 265mm'
          },
        }
      },
      files: {
        ai: 'Envelope_Calendar_L_Landscape_TopFlap_293x265_AI.zip',
        pdf: 'Envelope_Calendar_L_Landscape_TopFlap_293x265_PDF.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.'
      }
    },
    {
      title: '캘린더 가로M',
      defaults: ['envelope'],
      allows: ['envelope-normal', 'defaults', 'envelope-normal-calendar-m-h'],
      guide: {
        image: 'envelope-guide-standard-calendar-row-m',
        area: {
          workSpace: {
            size: '503mm x 314mm'
          },
          cuttingLine: {
            size: '497mm x 308mm'
          },
          safeSpace: {
            size: '457mm x 298mm'
          },
          tripodSpace: {
            size: '241mm x 253mm'
          },
        }
      },
      files: {
        ai: 'Envelope_Calendar_M_Landscape_TopFlap_241x253_AI.zip',
        pdf: 'Envelope_Calendar_M_Landscape_TopFlap_241x253_PDF.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.'
      }
    },
    {
      title: '캘린더 세로M',
      defaults: ['envelope'],
      allows: ['envelope-normal', 'defaults', 'envelope-normal-calendar-m-v'],
      guide: {
        image: 'envelope-guide-standard-calendar-col-m',
        area: {
          workSpace: {
            size: '383mm x 3744mm'
          },
          cuttingLine: {
            size: '377mm x 368mm'
          },
          safeSpace: {
            size: '337mm x 358mm'
          },
          tripodSpace: {
            size: '181mm x 313mm'
          },
        }
      },
      files: {
        ai: 'Envelope_Calendar_M_Portrait_TopFlap_181x313_AI.zip',
        pdf: 'Envelope_Calendar_M_Portrait_TopFlap_181x313_PDF.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.'
      }
    },
    {
      title: '캘린더 세로S',
      defaults: ['envelope'],
      allows: ['envelope-normal', 'defaults', 'envelope-normal-calendar-s-v'],
      guide: {
        image: 'envelope-guide-standard-calendar-col-s',
        area: {
          workSpace: {
            size: '258mm x 259mm'
          },
          cuttingLine: {
            size: '252mm x 253mm'
          },
          safeSpace: {
            size: '212mm x 243mm'
          },
          tripodSpace: {
            size: '121mm x 198mm'
          },
        }
      },
      files: {
        ai: 'Envelope_Calendar_S_Portrait_TopFlap_121x198_AI.zip',
        pdf: 'Envelope_Calendar_S_Portrait_TopFlap_121x198_PDF.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.'
      }
    },
    {
      title: '자켓형 소봉투',
      defaults: ['envelope'],
      allows: ['envelope-jacket', 'defaults', 'envelope-jacket-s'],
      guide: {
        image: 'envelope-guide-jacket-small',
        area: {
          workSpace: {
            size: '260.5mm x 235.5mm'
          },
          cuttingLine: {
            size: '254.5mm x 229.5mm'
          },
          safeSpace: {
            size: '214.5mm x 204.5mm'
          },
          tripodSpace: {
            size: '220mm x 105mm'
          },
        }
      },
      files: {
        ai: 'Envelope_S_StraightFlap_220x105_AI.zip',
        pdf: 'Envelope_S_StraightFlap_220x105_PDF.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.'
      }
    },
    {
      title: '5x7 봉투',
      defaults: ['envelope'],
      allows: ['envelope-guide', 'defaults', 'envelope-guide-5x7'],
      guide: {
        image: 'envelope-guide-info-57',
        area: {
          workSpace: {
            size: '348mm x 294mm'
          },
          cuttingLine: {
            size: '342mm x 288mm'
          },
          safeSpace: {
            size: '286mm x 245mm'
          },
          tripodSpace: {
            size: '182mm x 131mm'
          },
        }
      },
      files: {
        ai: 'Envelope_5x7_VFlap_182x131_AI.zip',
        pdf: 'Envelope_5x7_VFlap_182x131_PDF.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.'
      }
    },
    {
      title: '4x6 봉투',
      defaults: ['envelope'],
      allows: ['envelope-guide', 'defaults', 'envelope-guide-4x6'],
      guide: {
        image: 'envelope-guide-info-46',
        area: {
          workSpace: {
            size: '288mm x 243mm'
          },
          cuttingLine: {
            size: '282mm x 237mm'
          },
          safeSpace: {
            size: '241mm x 206mm'
          },
          tripodSpace: {
            size: '156mm x 106mm'
          },
        }
      },
      files: {
        ai: 'Envelope_4x6_VFlap_156x106_AI.zip',
        pdf: 'Envelope_4x6_VFlap_156x106_PDF.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.'
      }
    },
    {
      title: '쿠폰봉투',
      defaults: ['envelope'],
      allows: ['envelope-guide', 'defaults', 'envelope-guide-coupon'],
      guide: {
        image: 'envelope-guide-info-coupon',
        area: {
          workSpace: {
            size: '298mm x 186mm'
          },
          cuttingLine: {
            size: '292mm x 180mm'
          },
          safeSpace: {
            size: '242mm x 149mm'
          },
          tripodSpace: {
            size: '158mm x 80mm'
          },
        }
      },
      files: {
        ai: 'Envelope_Coupon_VFlap_158x80_AI.zip',
        pdf: 'Envelope_Coupon_VFlap_158x80_PDF.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.'
      }
    },
    {
      title: '미니봉투',
      defaults: ['envelope'],
      allows: ['envelope-guide', 'defaults', 'envelope-guide-mini'],
      guide: {
        image: 'envelope-guide-info-mini',
        area: {
          workSpace: {
            size: '190mm x 186mm'
          },
          cuttingLine: {
            size: '193mm x 180mm'
          },
          safeSpace: {
            size: '162mm x 154mm'
          },
          tripodSpace: {
            size: '107mm x 80mm'
          },
        }
      },
      files: {
        ai: 'Envelope_Mini_VFlap_107x80_AI.zip',
        pdf: 'Envelope_Mini_VFlap_107x80_PDF.zip'
      },
      footer: {
        text: '디자인 가이드를 다운로드하여 나만의 디자인을 만들어 보세요.'
      }
    }
  ],
  SHOPPINGBAG:[
    {
      title: '와이드형 중',
      defaults: ['shoppingbag'],
      allows: ['defaults'],
      guide: {
        image: 'guide-shoppingbag-wide-middle',
        area: {
          workSpace: {
            size: '920mm x 380mm'
          },
          cuttingLine: {
            size: '910mm x 370mm'
          },
          safeSpace: {
            size: '830mm x 188mm'
          }
        }
      },
      files: {
        ai: 'ShoppingBag_M_Wide_320x250x120_AI.zip',
        pdf: 'ShoppingBag_M_Wide_320x250x120_PDF.zip'
      }
    },
    {
      title: '와이드형 소',
      defaults: ['shoppingbag'],
      allows: ['defaults'],
      guide: {
        image: 'guide-shoppingbag-wide-small',
        area: {
          workSpace: {
            size: '710mm x 310mm'
          },
          cuttingLine: {
            size: '700mm x 300mm'
          },
          safeSpace: {
            size: '620mm x 138mm'
          }
        }
      },
      files: {
        ai: 'ShoppingBag_S_Wide_255x200x80_AI.zip',
        pdf: 'ShoppingBag_S_Wide_255x200x80_PDF.zip'
      }
    },
    {
      title: '세로형 대',
      defaults: ['shoppingbag'],
      allows: ['defaults'],
      guide: {
        image: 'guide-shoppingbag-column-large',
        area: {
          workSpace: {
            size: '920mm x 548mm'
          },
          cuttingLine: {
            size: '910mm x 538mm'
          },
          safeSpace: {
            size: '830mm x 343mm'
          }
        }
      },
      files: {
        ai: 'ShoppingBag_L_Portrait_300x408x140_AI.zip',
        pdf: 'ShoppingBag_L_Portrait_300x408x140_PDF.zip'
      }
    },
    {
      title: '세로형 중',
      defaults: ['shoppingbag'],
      allows: ['defaults'],
      guide: {
        image: 'guide-shoppingbag-column-middle',
        area: {
          workSpace: {
            size: '760mm x 474mm'
          },
          cuttingLine: {
            size: '750mm x 464mm'
          },
          safeSpace: {
            size: '670mm x 290mm'
          }
        }
      },
      files: {
        ai: 'ShoppingBag_M_Portrait_260x354x100_AI.zip',
        pdf: 'ShoppingBag_M_Portrait_260x354x100_PDF.zip'
      }
    },
    {
      title: '세로형 소',
      defaults: ['shoppingbag'],
      allows: ['defaults'],
      guide: {
        image: 'guide-shoppingbag-column-small',
        area: {
          workSpace: {
            size: '620mm x 387mm'
          },
          cuttingLine: {
            size: '610mm x 377mm'
          },
          safeSpace: {
            size: '530mm x 210mm'
          }
        }
      },
      files: {
        ai: 'ShoppingBag_S_Portrait_200x272x90_AI.zip',
        pdf: 'ShoppingBag_S_Portrait_200x272x90_PDF.zip'
      }
    }
  ]

};
