

export const TEMPLATE_PRODUCTS = {
  NEW_STACK_GLASS: {
    NEW_STACK_GLASS_S: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [360, 440]
      }
    },
    NEW_STACK_GLASS_L: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [360, 440]
      }
    },
  },
  STRAIGHT_GLASS: {
    STRAIGHT_GLASS_M: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [360, 440]
      }
    },
    STRAIGHT_GLASS_L: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [360, 440]
      }
    },
  },
  TRANSLUCENT_REUSABLE_CUP: {
    TRANSLUCENT_REUSABLE_CUP: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [360, 440]
      }
    },
  },
  REUSABLE_CUP: {
    REUSABLE_CUP: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [360, 440]
      }
    },
  },
  ECO_TUMBLER: {
    ECO_TUMBLER: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [360, 440]
      }
    },
  },
  MEMO_PAD_90X90: {
    MEMO_PAD_90X90: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [ 360, 360 ],
        viewMaskImage: '/images/common/mask/list/popup-memo-pad-90-x-90@2x.png'
      }
    },
    MEMO_PAD_90X130: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [ 320, 462 ],
        viewMaskImage: '/images/common/mask/list/popup-memo-pad-90-x-130@2x.png'
      }
    }
  },
  NOTE_PAD_A5: {
    NOTE_PAD_A5: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [ 320, 453 ],
        viewMaskImage: '/images/common/mask/list/popup-note-pad-a-5@2x.png'
      }
    },
    NOTE_PAD_B5: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [ 320, 453 ],
        viewMaskImage: '/images/common/mask/list/popup-note-pad-b-5@2x.png'
      }
    },
  },
  HARD_DIARY: {
    HARD_DIARY: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [ 410, 490 ],
        viewStrapImage: [
          {colorCode: "554001", sort: 1, value: '/images/common/mask/list/list-hard-cover-black-front-strap@2x.png'},
          {colorCode: "554002", sort: 1, value: '/images/common/mask/list/list-hard-cover-grey-front-strap@2x.png'},
        ]
      }
    }
  },
  SOFT_DIARY: {
    SOFT_DIARY: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [ 410, 490 ],
        viewStrapImage: [
          {colorCode: "554003", sort: 1, value: '/images/common/mask/list/list-soft-cover-beige-front-strap@2x.png'},
          {colorCode: "554003", sort: 2, value: '/images/common/mask/list/list-soft-cover-beige-back-strap@2x.png'},
          {colorCode: "554004", sort: 1, value: '/images/common/mask/list/list-soft-cover-brown-front-strap@2x.png'},
          {colorCode: "554004", sort: 2, value: '/images/common/mask/list/list-soft-cover-brown-back-strap@2x.png'},
          {colorCode: "554005", sort: 1, value: '/images/common/mask/list/list-soft-cover-babypink-front-strap@2x.png'},
          {colorCode: "554005", sort: 2, value: '/images/common/mask/list/list-soft-cover-babypink-back-strap@2x.png'},
        ]
      }
    }
  },
  PVC_DIARY: {
    PVC_DIARY: {
      viewMode: 'HALF',
      vertical: {
        viewMaskImage: [
          {frameCode: "504001", value: '/images/common/mask/list/popup-pvc-cover-front@2x.png'},
          {frameCode: "504002", value: '/images/common/mask/list/popup-pvc-cover-back@2x.png'},
        ]
      }
    },
  },
	BUSINESS_CARD_NONE: {
		BUSINESS_CARD_8DOT5X5DOT5: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 211, 328 ],
				thumbnailSize: [ 52, 80 ]
			},
			horizontal: {
				viewSize: [ 322, 205 ],
				thumbnailSize: [ 80, 52 ]
			}
		},
		BUSINESS_CARD_9X5: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 194, 352 ],
				thumbnailSize: [ 45, 80 ]
			},
			horizontal: {
				viewSize: [ 340, 185 ],
				thumbnailSize: [ 80, 45 ]
			}
		},
		BUSINESS_CARD_6X6: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 230, 230 ],
				thumbnailSize: [ 80, 80 ]
			}
		}
	},
	TRANS_BUSINESS_CARD_NONE: {
		TRANS_BUSINESS_CARD_9X5: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 194, 340 ],
				thumbnailSize: [ 45, 80 ]
			},
			horizontal: {
				viewSize: [ 340, 194 ],
				thumbnailSize: [ 80, 45 ]
			}
		},
		TRANS_BUSINESS_CARD_8DOT5X5DOT5: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 211, 322 ],
				thumbnailSize: [ 52, 80 ]
			},
			horizontal: {
				viewSize: [ 322, 211 ],
				thumbnailSize: [ 80, 52 ]
			}
		},
		TRANS_BUSINESS_CARD_6X6: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 230, 230 ],
				thumbnailSize: [ 80, 80 ]
			}
		}
	},
	CARD_FLAT: {
		CARD_6X4: {
			viewMode: 'HALF',
			vertical: {
				viewSize: [ 218, 323 ]
			},
			horizontal: {
				viewSize: [ 322, 217 ]
			}
		},
		CARD_7X5: {
			viewMode: 'HALF',
			vertical: {
				viewSize: [ 234, 327 ]
			},
			horizontal: {
				viewSize: [ 326, 234 ]
			}
		},
		CARD_70X98: {
			viewMode: 'HALF',
			vertical: {
				viewSize: [ 234, 327 ]
			},
			horizontal: {
				viewSize: [ 326, 234 ]
			}
		}
	},
	CARD_FOLDER: {
		CARD_6X4: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 253, 379 ],
				thumbnailSize: [ 53, 79 ],
				viewPages: [
					{
						className: 'left',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'right',
						sides: [
							{ className: 'front', position: '0 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				],
				thumbnailPages: [
					{
						className: 'bi folded',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'pleated',
						sides: [
							{ className: 'back', position: '100% 0' }
						]
					}
				]
			},
			horizontal: {
				viewSize: [ 283, 189 ],
				thumbnailSize: [ 60, 40 ],
				viewPages: [
					{
						className: 'top',
						sides: [
							{ className: 'front', position: ' 0 100%' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'bottom',
						sides: [
							{ className: 'front', position: '0 0' },
							{ className: 'back', position: ' 0px 100%' }
						]
					}
				],
				thumbnailPages: [
					{
						className: 'bi folded',
						sides: [
							{ className: 'front', position: '0 100%' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'pleated',
						sides: [
							{ className: 'back', position: '0 100%' }
						]
					}
				]
			}
		},
		CARD_7X5: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 268, 380 ],
				thumbnailSize: [ 57, 81 ],
				viewPages: [
					{
						className: 'left',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'right',
						sides: [
							{ className: 'front', position: '0 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				],
				thumbnailPages: [
					{
						className: 'bi folded',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'pleated',
						sides: [
							{ className: 'back', position: '100% 0' }
						]
					}
				]
			},
			horizontal: {
				viewSize: [ 270, 191 ],
				thumbnailSize: [ 56, 40 ],
				viewPages: [
					{
						className: 'top',
						sides: [
							{ className: 'front', position: ' 0 100%' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'bottom',
						sides: [
							{ className: 'front', position: '0 0' },
							{ className: 'back', position: ' 0px 100%' }
						]
					}
				],
				thumbnailPages: [
					{
						className: 'bi folded',
						sides: [
							{ className: 'front', position: '0 100%' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'pleated',
						sides: [
							{ className: 'back', position: '0 100%' }
						]
					}
				]
			}
		},
		CARD_70X98: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 268, 380 ],
				thumbnailSize: [ 57, 81 ],
				viewPages: [
					{
						className: 'left',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'right',
						sides: [
							{ className: 'front', position: '0 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				],
				thumbnailPages: [
					{
						className: 'bi folded',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'pleated',
						sides: [
							{ className: 'back', position: '100% 0' }
						]
					}
				]
			},
			horizontal: {
				viewSize: [ 270, 191 ],
				thumbnailSize: [ 56, 40 ],
				viewPages: [
					{
						className: 'top',
						sides: [
							{ className: 'front', position: ' 0 100%' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'bottom',
						sides: [
							{ className: 'front', position: '0 0' },
							{ className: 'back', position: ' 0px 100%' }
						]
					}
				],
				thumbnailPages: [
					{
						className: 'bi folded',
						sides: [
							{ className: 'front', position: '0 100%' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'pleated',
						sides: [
							{ className: 'back', position: '0 100%' }
						]
					}
				]
			}
		}
	},

  COLOR_DECAL_STICKER_ATYPE: {
    COLOR_DECAL_STICKER_A5: {
      viewMode: 'FULL',
			vertical: {
				viewSize: [ 324, 460 ]
			},
			horizontal: {
				viewSize: [ 460, 324 ]
			}
    },
    COLOR_DECAL_STICKER_A4: {
      viewMode: 'FULL',
			vertical: {
				viewSize: [ 324, 460 ]
			},
			horizontal: {
				viewSize: [ 460, 324 ]
			}
    },
    COLOR_DECAL_STICKER_A3: {
      viewMode: 'FULL',
			vertical: {
				viewSize: [ 324, 460 ]
			},
			horizontal: {
				viewSize: [ 460, 324 ]
			}
    },
    COLOR_DECAL_STICKER_A2: {
      viewMode: 'FULL',
			vertical: {
				viewSize: [ 324, 460 ]
			},
			horizontal: {
				viewSize: [ 460, 324 ]
			}
    }
  },
  COLOR_DECAL_STICKER_SQUARE: {
    COLOR_DECAL_STICKER_150X150: {
      viewMode: 'FULL',
			vertical: {
				viewSize: [ 400, 400 ]
			},
			horizontal: {
				viewSize: [ 400, 400 ]
			}
    },
    COLOR_DECAL_STICKER_250X250: {
      viewMode: 'FULL',
			vertical: {
				viewSize: [ 400, 400 ]
			},
			horizontal: {
				viewSize: [ 400, 400 ]
			}
    },
    COLOR_DECAL_STICKER_350X350: {
      viewMode: 'FULL',
			vertical: {
				viewSize: [ 400, 400 ]
			},
			horizontal: {
				viewSize: [ 400, 400 ]
			}
    },
    COLOR_DECAL_STICKER_450X450: {
      viewMode: 'FULL',
			vertical: {
				viewSize: [ 400, 400 ]
			},
			horizontal: {
				viewSize: [ 400, 400 ]
			}
    }
  },
  GRAPHIC_DECAL_STICKER_ATYPE: {
    GRAPHIC_DECAL_STICKER_A5: {
      viewMode: 'FULL',
			vertical: {
				viewSize: [ 324, 460 ]
			},
			horizontal: {
				viewSize: [ 460, 324 ]
			}
    },
    GRAPHIC_DECAL_STICKER_A4: {
      viewMode: 'FULL',
			vertical: {
				viewSize: [ 324, 460 ]
			},
			horizontal: {
				viewSize: [ 460, 324 ]
			}
    },
    GRAPHIC_DECAL_STICKER_A3: {
      viewMode: 'FULL',
			vertical: {
				viewSize: [ 324, 460 ]
			},
			horizontal: {
				viewSize: [ 460, 324 ]
			}
    },
    GRAPHIC_DECAL_STICKER_A2: {
      viewMode: 'FULL',
			vertical: {
				viewSize: [ 324, 460 ]
			},
			horizontal: {
				viewSize: [ 460, 324 ]
			}
    }
  },
  GRAPHIC_DECAL_STICKER_SQUARE: {
    GRAPHIC_DECAL_STICKER_150X150: {
      viewMode: 'FULL',
			vertical: {
				viewSize: [ 400, 400 ]
			},
			horizontal: {
				viewSize: [ 400, 400 ]
			}
    },
    GRAPHIC_DECAL_STICKER_250X250: {
      viewMode: 'FULL',
			vertical: {
				viewSize: [ 400, 400 ]
			},
			horizontal: {
				viewSize: [ 400, 400 ]
			}
    },
    GRAPHIC_DECAL_STICKER_350X350: {
      viewMode: 'FULL',
			vertical: {
				viewSize: [ 400, 400 ]
			},
			horizontal: {
				viewSize: [ 400, 400 ]
			}
    },
    GRAPHIC_DECAL_STICKER_450X450: {
      viewMode: 'FULL',
			vertical: {
				viewSize: [ 400, 400 ]
			},
			horizontal: {
				viewSize: [ 400, 400 ]
			}
    }
  },

  STICKER_2ND_ROLL_HEART : {
    STICKER_2ND_ROLL_HEART_35X35:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 420, 420 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-heart-35@2x.png'
      }
    },
    STICKER_2ND_ROLL_HEART_60X60:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 420, 420 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-heart-60@2x.png'
      }
    },

  },
  STICKER_2ND_ROLL_STAR : {
    STICKER_2ND_ROLL_STAR_35X35:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 420, 420 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-star-35@2x.png'
      }
    },
    STICKER_2ND_ROLL_STAR_60X60:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 420, 420 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-star-60@2x.png'
      }
    },
  },
  STICKER_2ND_ROLL_SQUARE : {
    STICKER_2ND_ROLL_SQUARE_20X20:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 420, 420 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-square-20@2x.png'
      }
    },

    STICKER_2ND_ROLL_SQUARE_30X30:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 420, 420 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-square-30@2x.png'
      }
    },

    STICKER_2ND_ROLL_SQUARE_45X45:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 420, 420 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-square-45@2x.png'
      }
    },

    STICKER_2ND_ROLL_SQUARE_60X60:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 420, 420 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-square-60@2x.png'
      }
    },


  },
  STICKER_2ND_ROLL_ROUND:{
    STICKER_2ND_ROLL_ROUND_20X20:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 420, 420 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-round-20@2x.png'
      }
    },
    STICKER_2ND_ROLL_ROUND_30X30:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 420, 420 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-round-30@2x.png'
      }
    },
    STICKER_2ND_ROLL_ROUND_45X45:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 420, 420 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-round-4560@2x.png'
      }
    },
    STICKER_2ND_ROLL_ROUND_60X60:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 420, 420 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-round-4560@2x.png'
      }
    }
  },
  STICKER_2ND_ROLL_RECTANGULER: {
    STICKER_2ND_ROLL_RECTANGULER_85X18:{
      viewMode: 'FULL',
      horizontal: {
        viewSize: [ 483, 115 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-rec-85-x-18@2x.png'
      },
      vertical:{
        viewSize: [ 115, 483 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-rec-18-x-85@2x.png'
      }
    },


    STICKER_2ND_ROLL_RECTANGULER_70X30:{
      viewMode: 'FULL',
      horizontal: {
        viewSize: [ 483, 218 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-rec-70-x-30@2x.png'
      },
      vertical:{
        viewSize: [ 218, 483 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-rec-30-x-70@2x.png'
      }
    },


    STICKER_2ND_ROLL_RECTANGULER_60X50:{
      viewMode: 'FULL',
      horizontal: {
        viewSize: [ 483, 406 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-rec-60-x-50@2x.png'
      },
      vertical:{
        viewSize: [ 406, 483 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-rec-50-x-60@2x.png'
      }
    },


    STICKER_2ND_ROLL_RECTANGULER_60X40:{
      viewMode: 'FULL',
      horizontal: {
        viewSize: [ 461, 314 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-rec-60-x-40@2x.png'
      },
      vertical:{
        viewSize: [ 314, 461 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-rec-40-x-60@2x.png'
      }
    },


    STICKER_2ND_ROLL_RECTANGULER_50X30:{
      viewMode: 'FULL',
      horizontal: {
        viewSize: [ 483, 300 ],
        viewMaskImage: [
          {frameCode: "504001", value: "/images/common/mask/list/roll-sticker-popup-rec-50-x-30@2x.png"},
          {frameCode: "504002", value: "/images/common/mask/list/roll-sticker-popup-rec-50-x-30-round@2x.png"}
        ]
      },
      vertical:{
        viewSize: [ 300, 483 ],
        viewMaskImage: [
          {frameCode: "504001", value: "/images/common/mask/list/roll-sticker-popup-rec-30-x-50@2x.png"},
          {frameCode: "504002", value: "/images/common/mask/list/roll-sticker-popup-rec-30-x-50-round@2x.png"}
        ]

        //viewMaskImage: '/images/common/mask/list/roll-sticker-popup-rec-30-x-50@2x.png'
      }
    },

    STICKER_2ND_ROLL_RECTANGULER_40X20:{
      viewMode: 'FULL',
      horizontal: {
        viewSize: [ 483, 258 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-rec-40-x-20@2x.png'
      },
      vertical:{
        viewSize: [ 258, 483 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-rec-20-x-40@2x.png'
      }
    },

    STICKER_2ND_ROLL_RECTANGULER_30X18:{
      viewMode: 'FULL',
      horizontal: {
        viewSize: [ 483, 307 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-rec-30-x-18@2x.png'
      },
      vertical:{
        viewSize: [ 307, 483 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-rec-18-x-30@2x.png'
      }
    },

    STICKER_2ND_ROLL_RECTANGULER_85X55:{
      viewMode: 'FULL',
      horizontal: {
        viewSize: [ 483, 318 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-rectangle-85-x-55-detail@2x.png'
      },
      vertical:{
        viewSize: [ 318, 483 ],
        viewMaskImage: '/images/common/mask/list/roll-sticker-popup-rectangle-55-x-85-detail@2x.png'
      }
    }
  },
	STICKER_2ND_DIY: {
    STICKER_2ND_DIY_75X170: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [ 227, 500 ],
        viewMaskImage: '/images/common/mask/list/sticker-popup-diy-75-vertical@2x.png'
      },
      horizontal: {
        viewSize: [ 500, 227 ],
        viewMaskImage: '/images/common/mask/list/sticker-popup-diy-75-horizontal@2x.png'
      }
    },

    STICKER_2ND_DIY_100X100: {
      viewMode: 'FULL',
      square: {
        viewSize: [ 420, 420 ],
        viewMaskImage: '/images/common/mask/list/sticker-popup-diy-100@2x.png'
      }
    },

		STICKER_2ND_DIY_A6: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 356, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-diy-vertical@2x.png'
			},
			horizontal: {
				viewSize: [ 500, 356 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-diy-horizontal@2x.png'
			}
		},
		STICKER_2ND_DIY_A5: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 356, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-diy-vertical@2x.png'
			},
			horizontal: {
				viewSize: [ 500, 356 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-diy-horizontal@2x.png'
			}
		},
		STICKER_2ND_DIY_A4: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 356, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-diy-vertical@2x.png'
			},
			horizontal: {
				viewSize: [ 500, 356 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-diy-horizontal@2x.png'
			}
		}
	},
	STICKER_2ND_ROUND: {
    STICKER_2ND_ROUND_10X10: {
      viewMode: 'FULL',
      square: {
        viewSize: [ 374, 500 ],
        viewMaskImage: '/images/common/mask/list/sticker-popup-round-10@2x.png'
      }
    },
    STICKER_2ND_ROUND_15X15: {
      viewMode: 'FULL',
      square: {
        viewSize: [ 344, 500 ],
        viewMaskImage: '/images/common/mask/list/sticker-popup-round-15@2x.png'
      }
    },
    STICKER_2ND_ROUND_20X20: {
      viewMode: 'FULL',
      square: {
        viewSize: [ 364, 500 ],
        viewMaskImage: '/images/common/mask/list/sticker-popup-round-20@2x.png'
      }
    },
    STICKER_2ND_ROUND_25X25: {
      viewMode: 'FULL',
      square: {
        viewSize: [ 344, 500 ],
        viewMaskImage: '/images/common/mask/list/sticker-popup-round-25@2x.png'
      }
    },

		STICKER_2ND_ROUND_30X30: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 340, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-round-30@2x.png'
			}
		},
		STICKER_2ND_ROUND_40X40: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 381, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-round-40@2x.png'
			}
		},
		STICKER_2ND_ROUND_50X50: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 340, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-round-5060@2x.png'
			}
		},
		STICKER_2ND_ROUND_60X60: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 340, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-round-5060@2x.png'
			}
		},
		STICKER_2ND_ROUND_80X80: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 420, 420 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-round-80100@2x.png'
			}
		},
		STICKER_2ND_ROUND_100X100: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 420, 420 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-round-80100@2x.png'
			}
		}
	},
	STICKER_2ND_SQUARE: {
    STICKER_2ND_SQUARE_15X15: {
      viewMode: 'FULL',
      square: {
        viewSize: [ 380, 500 ],
        viewMaskImage: '/images/common/mask/list/sticker-popup-square-15@2x.png'
      }
    },
		STICKER_2ND_SQUARE_24X24: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 340, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-square-24@2x.png'
			}
		},
		STICKER_2ND_SQUARE_36X36: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 381, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-square-36@2x.png'
			}
		},
		STICKER_2ND_SQUARE_48X48: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 340, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-square-4860@2x.png'
			}
		},
		STICKER_2ND_SQUARE_60X60: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 340, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-square-4860@2x.png'
			}
		},
		STICKER_2ND_SQUARE_80X80: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 420, 420 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-square-80120@2x.png'
			}
		},
		STICKER_2ND_SQUARE_120X120: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 420, 420 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-square-80120@2x.png'
			}
		}
	},
	STICKER_2ND_RECTANGULER: {
    STICKER_2ND_RECTANGULER_30X12: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [ 356, 500 ],
        viewMaskImage: '/images/common/mask/list/sticker-popup-rectangle-12-x-30@2x.png'
      },
      horizontal: {
        viewSize: [ 500, 356 ],
        viewMaskImage: '/images/common/mask/list/sticker-popup-rectangle-30-x-12@2x.png'
      }
    },

    STICKER_2ND_RECTANGULER_50X30: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [ 500, 369 ],
        viewMaskImage: '/images/common/mask/list/sticker-popup-rectangle-30-x-50@2x.png'
      },
      horizontal: {
        viewSize: [ 369, 500 ],
        viewMaskImage: '/images/common/mask/list/sticker-popup-rectangle-50-x-30@2x.png'
      }
    },

    STICKER_2ND_RECTANGULER_105X70: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [ 340, 500 ],
        viewMaskImage: '/images/common/mask/list/sticker-popup-rectangle-70-x-105@2x.png'
      },
      horizontal: {
        viewSize: [ 500, 340 ],
        viewMaskImage: '/images/common/mask/list/sticker-popup-rectangle-105-x-70@2x.png'
      }
    },

    STICKER_2ND_RECTANGULER_120X90: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [ 378, 500 ],
        viewMaskImage: '/images/common/mask/list/sticker-popup-rectangle-90-x-120@2x.png'
      },
      horizontal: {
        viewSize: [ 500, 378 ],
        viewMaskImage: '/images/common/mask/list/sticker-popup-rectangle-120-x-90@2x.png'
      }
    },

		STICKER_2ND_RECTANGULER_40X26: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 356, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-rectangle-26-x-40@2x.png'
			},
			horizontal: {
				viewSize: [ 590, 420 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-rectangle-40-x-26@2x.png'
			}
		},
		STICKER_2ND_RECTANGULER_65X42: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 356, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-rectangle-42-x-65@2x.png'
			},
			horizontal: {
				viewSize: [ 592, 420 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-rectangle-65-x-42@2x.png'
			}
		},
		STICKER_2ND_RECTANGULER_85X55: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 354, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-rectangle-55-x-85@2x.png'
			},
			horizontal: {
				viewSize: [ 594, 420 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-rectangle-85-x-55@2x.png'
			}
		}
	},
	STICKER_2ND_WIDE: {
    STICKER_2ND_WIDE_60X15: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [ 500, 396 ],
        viewMaskImage: '/images/common/mask/list/sticker-popup-wide-15-x-60@2x.png'
      },
      horizontal: {
        viewSize: [ 396, 500 ],
        viewMaskImage: '/images/common/mask/list/sticker-popup-wide-60-x-15@2x.png'
      }
    },
		STICKER_2ND_WIDE_40X10: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 323, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-wide-10-x-40@2x.png'
			},
			horizontal: {
				viewSize: [ 650, 420 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-wide-40-x-10@2x.png'
			}
		},
		STICKER_2ND_WIDE_80X20: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 385, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-wide-20-x-80@2x.png'
			},
			horizontal: {
				viewSize: [ 546, 420 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-wide-80-x-20@2x.png'
			}
		},
	},
	STICKER_2ND_ATYPE: {
		STICKER_2ND_ATYPE_A6: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 356, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-a-vertical@2x.png'
			},
			horizontal: {
				viewSize: [ 500, 356 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-a-horizontal@2x.png'
			}
		},
		STICKER_2ND_ATYPE_A5: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 356, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-a-vertical@2x.png'
			},
			horizontal: {
				viewSize: [ 500, 356 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-a-horizontal@2x.png'
			}
		},
		STICKER_2ND_ATYPE_A4: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 356, 500 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-a-vertical@2x.png'
			},
			horizontal: {
				viewSize: [ 500, 356 ],
				viewMaskImage: '/images/common/mask/list/sticker-popup-a-horizontal@2x.png'
			}
		}
	},
	POSTER_NONE: {
		POSTER_A1: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/poster-popup-a@2x.png'
			}
		},
		POSTER_A2: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/poster-popup-a@2x.png'
			}
		},
		POSTER_A3: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/poster-popup-a@2x.png'
			}
		},
		POSTER_A4: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/poster-popup-a@2x.png'
			}
		},
		POSTER_B2: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 319, 460 ],
				viewMaskImage: '/images/common/mask/list/poster-popup-b@2x.png'
			}
		},
		POSTER_B3: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 319, 460 ],
				viewMaskImage: '/images/common/mask/list/poster-popup-b@2x.png'
			}
		},
		POSTER_B4: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 319, 460 ],
				viewMaskImage: '/images/common/mask/list/poster-popup-b@2x.png'
			}
		}
	},
	ACCESSORY_NONE: {
		ACCESSORY_NONE: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 480, 860 ],
				thumbnailSize: [ 80, 80 ]
			},
			horizontal: {
				viewSize: [ 860, 480 ],
				thumbnailSize: [ 80, 52 ]
			}
		}
	},
	FLYER_NONE: {
		FLYER_46: {
			viewMode: 'HALF',
			vertical: {
				viewSize: [ 221, 330 ]
			}
		},
		FLYER_57: {
			viewMode: 'HALF',
			vertical: {
				viewSize: [ 233, 330 ]
			}
		},
		FLYER_A4: {
			viewMode: 'HALF',
			vertical: {
				viewSize: [ 233, 330 ]
			}
		},
		FLYER_A5: {
			viewMode: 'HALF',
			vertical: {
				viewSize: [ 235, 330 ]
			}
		},
		FLYER_LONG: {
			viewMode: 'HALF',
			vertical: {
				viewSize: [ 155, 330 ]
			}
		},
		FLYER_SQUARE: {
			viewMode: 'HALF',
			square: {
				viewSize: [ 270, 270 ]
			}
		}
	},
	BROCHURE_BI_FOLD: {
		BROCHURE_A4: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 268, 380 ],
				thumbnailSize: [ 56, 80 ],
				viewPages: [
					{
						className: 'left',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'right',
						sides: [
							{ className: 'front', position: '0 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				],
				thumbnailPages: [
					{
						className: 'flipped',
						sides: [
							{ className: 'front', position: '100% 0' }
						]
					},
					{
						className: 'pleated',
						sides: [
							{ className: 'back', position: '100% 0' }
						]
					},
					{
						className: 'bi folded',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				]
			}
		},
		BROCHURE_A5: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 268, 380 ],
				thumbnailSize: [ 56, 80 ],
				viewPages: [
					{
						className: 'left',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'right',
						sides: [
							{ className: 'front', position: '0 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				],
				thumbnailPages: [
					{
						className: 'flipped',
						sides: [
							{ className: 'front', position: '100% 0' }
						]
					},
					{
						className: 'pleated',
						sides: [
							{ className: 'back', position: '100% 0' }
						]
					},
					{
						className: 'bi folded',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				]
			}
		},
		BROCHURE_LONG: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 179, 380 ],
				thumbnailSize: [ 38, 80 ],
				viewPages: [
					{
						className: 'left',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'right',
						sides: [
							{ className: 'front', position: '0 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				],
				thumbnailPages: [
					{
						className: 'flipped',
						sides: [
							{ className: 'front', position: '100% 0' }
						]
					},
					{
						className: 'pleated',
						sides: [
							{ className: 'back', position: '100% 0' }
						]
					},
					{
						className: 'bi folded',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				]
			}
		},
		BROCHURE_SQUARE: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 318, 320 ],
				thumbnailSize: [ 80, 80 ],
				viewPages: [
					{
						className: 'left',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'right',
						sides: [
							{ className: 'front', position: '0 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				],
				thumbnailPages: [
					{
						className: 'flipped',
						sides: [
							{ className: 'front', position: '100% 0' }
						]
					},
					{
						className: 'pleated',
						sides: [
							{ className: 'back', position: '100% 0' }
						]
					},
					{
						className: 'bi folded',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				]
			}
		}
	},
	BROCHURE_TRI_FOLD: {
		BROCHURE_A4: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 225, 320 ],
				thumbnailSize: [ 56, 80 ],
				viewPages: [
					{
						className: 'left',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'center',
						sides: [
							{ className: 'front', position: '50% 0' },
							{ className: 'back', position: '50% 0' }
						]
					},
					{
						className: 'right',
						sides: [
							{ className: 'front', position: '0 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				],
				thumbnailPages: [
					{
						className: 'flipped',
						sides: [
							{ className: 'front', position: '100% 0' }
						]
					},
					{
						className: 'pleated',
						sides: [
							{ className: 'back', position: '100% 0' }
						]
					},
					{
						className: 'tri folded',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'center', position: '0 0' },
							{ className: 'back', position: '50% 0' }
						]
					}
				]
			}
		},
		BROCHURE_A5: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 225, 320 ],
				thumbnailSize: [ 56, 80 ],
				viewPages: [
					{
						className: 'left',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'center',
						sides: [
							{ className: 'front', position: '50% 0' },
							{ className: 'back', position: '50% 0' }
						]
					},
					{
						className: 'right',
						sides: [
							{ className: 'front', position: '0 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				],
				thumbnailPages: [
					{
						className: 'flipped',
						sides: [
							{ className: 'front', position: '100% 0' }
						]
					},
					{
						className: 'pleated',
						sides: [
							{ className: 'back', position: '100% 0' }
						]
					},
					{
						className: 'tri folded',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'center', position: '0 0' },
							{ className: 'back', position: '50% 0' }
						]
					}
				]
			}
		},
		BROCHURE_LONG: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 177, 380 ],
				thumbnailSize: [ 38, 80 ],
				viewPages: [
					{
						className: 'left',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'center',
						sides: [
							{ className: 'front', position: '50% 0' },
							{ className: 'back', position: '50% 0' }
						]
					},
					{
						className: 'right',
						sides: [
							{ className: 'front', position: '0 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				],
				thumbnailPages: [
					{
						className: 'flipped',
						sides: [
							{ className: 'front', position: '100% 0' }
						]
					},
					{
						className: 'pleated',
						sides: [
							{ className: 'back', position: '100% 0' }
						]
					},
					{
						className: 'tri folded',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'center', position: '0 0' },
							{ className: 'back', position: '50% 0' }
						]
					}
				]
			}
		},
		BROCHURE_SQUARE: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 316, 320 ],
				thumbnailSize: [ 80, 80 ],
				viewPages: [
					{
						className: 'left',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'center',
						sides: [
							{ className: 'front', position: '50% 0' },
							{ className: 'back', position: '50% 0' }
						]
					},
					{
						className: 'right',
						sides: [
							{ className: 'front', position: '0 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				],
				thumbnailPages: [
					{
						className: 'flipped',
						sides: [
							{ className: 'front', position: '100% 0' }
						]
					},
					{
						className: 'pleated',
						sides: [
							{ className: 'back', position: '100% 0' }
						]
					},
					{
						className: 'tri folded',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'center', position: '0 0' },
							{ className: 'back', position: '50% 0' }
						]
					}
				]
			}
		}
	},
	MENU_FLAT: {
		MENU_A4: {
			viewMode: 'HALF',
			vertical: {
				viewSize: [ 233, 330 ]
			}
		},
		MENU_A5PLUS: {
			viewMode: 'HALF',
			vertical: {
				viewSize: [ 233, 330 ]
			}
		},
		MENU_A5: {
			viewMode: 'HALF',
			vertical: {
				viewSize: [ 233, 330 ]
			}
		}
	},
	MENU_BI_FOLD: {
		MENU_A4: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 268, 380 ],
				thumbnailSize: [ 56, 80 ],
				viewPages: [
					{
						className: 'left',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'right',
						sides: [
							{ className: 'front', position: '0 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				],
				thumbnailPages: [
					{
						className: 'flipped',
						sides: [
							{ className: 'front', position: '100% 0' }
						]
					},
					{
						className: 'pleated',
						sides: [
							{ className: 'back', position: '100% 0' }
						]
					},
					{
						className: 'bi folded',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				]
			}
		},
		MENU_A5PLUS: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 268, 380 ],
				thumbnailSize: [ 56, 80 ],
				viewPages: [
					{
						className: 'left',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'right',
						sides: [
							{ className: 'front', position: '0 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				],
				thumbnailPages: [
					{
						className: 'flipped',
						sides: [
							{ className: 'front', position: '100% 0' }
						]
					},
					{
						className: 'pleated',
						sides: [
							{ className: 'back', position: '100% 0' }
						]
					},
					{
						className: 'bi folded',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				]
			}
		},
		MENU_A5: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 268, 380 ],
				thumbnailSize: [ 56, 80 ],
				viewPages: [
					{
						className: 'left',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '0 0' }
						]
					},
					{
						className: 'right',
						sides: [
							{ className: 'front', position: '0 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				],
				thumbnailPages: [
					{
						className: 'flipped',
						sides: [
							{ className: 'front', position: '100% 0' }
						]
					},
					{
						className: 'pleated',
						sides: [
							{ className: 'back', position: '100% 0' }
						]
					},
					{
						className: 'bi folded',
						sides: [
							{ className: 'front', position: '100% 0' },
							{ className: 'back', position: '100% 0' }
						]
					}
				]
			}
		}
	},
	POSTCARD_NONE: {
		POSTCARD_NONE: {
			viewMode: 'HALF',
			horizontal: {
				viewSize: [ 322, 217 ]
			}
		}
	},
	COUPON_NONE: {
		COUPON_NONE: {
			viewMode: 'HALF',
			horizontal: {
				viewSize: [ 340, 158 ]
			}
		}
	},
	ACCESSORY_ENVELOPE: {
		ACCESSORY: {
			viewMode: 'FULL',
			horizontal: {
				viewSize: [ 860, 480 ],
				thumbnailSize: [ 80, 80 ]
			}
		}
	},
	ACCESSORY_BUSINESS_CARD_CASE: {
		ACCESSORY: {
			viewMode: 'FULL',
			horizontal: {
				viewSize: [ 860, 480 ],
				thumbnailSize: [ 80, 80 ]
			}
		}
	},
	ACCESSORY_SIGN_HOLDER: {
		ACCESSORY: {
			viewMode: 'FULL',
			horizontal: {
				viewSize: [ 860, 480 ],
				thumbnailSize: [ 80, 80 ]
			}
		}
	},
	PLACARD_BANNER_HORIZONTAL: {
		PLACARD_BANNER_5000X900: {
			viewMode: 'FULL',
			horizontal: {
				viewSize: [ 740, 133 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-wide@2x.png'
			}
		},
		PLACARD_BANNER_4000X700: {
			viewMode: 'FULL',
			horizontal: {
				viewSize: [ 740, 133 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-wide@2x.png'
			}
		},
		PLACARD_BANNER_2500X700: {
			viewMode: 'FULL',
			horizontal: {
				viewSize: [ 740, 133 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-wide@2x.png'
			}
		}
	},
	PLACARD_BANNER_VERTICAL: {
		PLACARD_BANNER_900X5000: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 90, 500 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-height@2x.png'
			}
		},
		PLACARD_BANNER_700X4000: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 90, 500 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-height@2x.png'
			}
		},
		PLACARD_BANNER_700X2500: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 90, 500 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-height@2x.png'
			}
		},
		PLACARD_BANNER_A2: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-a@2x.png'
			}
		},
		PLACARD_BANNER_A1: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-a@2x.png'
			}
		},
		PLACARD_BANNER_B2: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 319, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-b@2x.png'
			}
		}
	},
	PLACARD_BANNER_SQUARE: {
		PLACARD_BANNER_900X900: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 460, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-square@2x.png'
			}
		},
		PLACARD_BANNER_1200X1200: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 460, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-square@2x.png'
			}
		}
	},
	PLACARD_BANNER_FREESIZE_HORIZONTAL: {
		PLACARD_BANNER_FREESIZE: {
			viewMode: 'FULL',
			horizontal: {
				viewSize: [ 740, 133 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-wide@2x.png'
			}
		}
	},
	PLACARD_BANNER_FREESIZE_VERTICAL: {
		PLACARD_BANNER_FREESIZE: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 90, 500 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-height@2x.png'
			}
		}
	},
	PLACARD_BANNER_FREESIZE_SQUARE: {
		PLACARD_BANNER_FREESIZE: {
			viewMode: 'FULL',
			square: {
				viewSize: [ 460, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-square@2x.png'
			}
		}
	},
	PLACARD_BANNER_FREESIZE_ASIZE: {
		PLACARD_BANNER_FREESIZE: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-a@2x.png'
			}
		}
	},
	STANDARD_BANNER_NONE: {
		STANDARD_BANNER_600X1800: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 166, 500 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-600-x-1800@2x.png'
			}
		},
		STANDARD_BANNER_B2: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 319, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-b@2x.png'
			}
		},
		STANDARD_BANNER_A1: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-a@2x.png'
			}
		}
	},
	DOUBLE_SIDE_BANNER_NONE: {
		DOUBLE_SIDE_BANNER_600X1800: {
			viewMode: 'HALF',
			vertical: {
				viewSize: [ 166, 500 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-bothsides-600-x-1800@2x.png'
			}
		}
	},
	ROLLUP_BANNER_NONE: {
		ROLLUP_BANNER_850X2000: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 212, 500 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-850-x-2000@2x.png'
			}
		}
	},
	MINI_BANNER_NONE: {
		MINI_BANNER_150X300: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 230, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-150-x-300@2x.png'
			}
		},
		MINI_BANNER_180X420: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 197, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-180-x-420@2x.png'
			}
		}
	},
	BOARD_SIGN_NONE: {
		BOARD_SIGN_A4: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-board-a@2x.png'
			}
		},
		BOARD_SIGN_A3: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-board-a@2x.png'
			}
		},
		BOARD_SIGN_A2: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-board-a@2x.png'
			}
		},
		BOARD_SIGN_A1: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-board-a@2x.png'
			}
		},
		BOARD_SIGN_B4: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 319, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-board-b@2x.png'
			}
		},
		BOARD_SIGN_B3: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 319, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-board-b@2x.png'
			}
		},
		BOARD_SIGN_B2: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 319, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-board-b@2x.png'
			}
		}
	},
	ACRYLIC_SIGN_NONE: {
		ACRYLIC_SIGN_A4: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-acrylic-a@2x.png'
			}
		},
		ACRYLIC_SIGN_A3: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-acrylic-a@2x.png'
			}
		},
		ACRYLIC_SIGN_A2: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-acrylic-a@2x.png'
			}
		},
		ACRYLIC_SIGN_A1: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-acrylic-a@2x.png'
			}
		},
		ACRYLIC_SIGN_B4: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 319, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-acrylic-b@2x.png'
			}
		},
		ACRYLIC_SIGN_B3: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 319, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-acrylic-b@2x.png'
			}
		},
		ACRYLIC_SIGN_B2: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 319, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-acrylic-b@2x.png'
			}
		}
	},
	METAL_SIGN_NONE: {
		METAL_SIGN_A4: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-metal-a@2x.png'
			}
		},
		METAL_SIGN_A3: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-metal-a@2x.png'
			}
		},
		METAL_SIGN_A2: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-metal-a@2x.png'
			}
		},
		METAL_SIGN_A1: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-metal-a@2x.png'
			}
		},
		METAL_SIGN_B4: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 319, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-metal-b@2x.png'
			}
		},
		METAL_SIGN_B3: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 319, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-metal-b@2x.png'
			}
		},
		METAL_SIGN_B2: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 319, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-sign-metal-b@2x.png'
			}
		}
	},
	WOODEN_FRAME_SIGN_NONE: {
		WOODEN_FRAME_SIGN_A4: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: [
					{ frameCode: '504015', value: '/images/common/mask/list/sp-popup-sign-wood-a-34-natural@2x.png' },
					{ frameCode: '504016', value: '/images/common/mask/list/sp-popup-sign-wood-a-34-brown@2x.png' },
					{ frameCode: '504017', value: '/images/common/mask/list/sp-popup-sign-wood-a-34-black@2x.png' }
				]
			}
		},
		WOODEN_FRAME_SIGN_A3: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: [
					{ frameCode: '504015', value: '/images/common/mask/list/sp-popup-sign-wood-a-34-natural@2x.png' },
					{ frameCode: '504016', value: '/images/common/mask/list/sp-popup-sign-wood-a-34-brown@2x.png' },
					{ frameCode: '504017', value: '/images/common/mask/list/sp-popup-sign-wood-a-34-black@2x.png' }
				]
			}
		},
		WOODEN_FRAME_SIGN_A2: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 327, 463 ],
				viewMaskImage: [
					{ frameCode: '504015', value: '/images/common/mask/list/sp-popup-sign-wood-a-12-natural@2x.png' },
					{ frameCode: '504016', value: '/images/common/mask/list/sp-popup-sign-wood-a-12-brown@2x.png' },
					{ frameCode: '504017', value: '/images/common/mask/list/sp-popup-sign-wood-a-12-black@2x.png' }
				]
			}
		},
		WOODEN_FRAME_SIGN_A1: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 327, 463 ],
				viewMaskImage: [
					{ frameCode: '504015', value: '/images/common/mask/list/sp-popup-sign-wood-a-12-natural@2x.png' },
					{ frameCode: '504016', value: '/images/common/mask/list/sp-popup-sign-wood-a-12-brown@2x.png' },
					{ frameCode: '504017', value: '/images/common/mask/list/sp-popup-sign-wood-a-12-black@2x.png' }
				]
			}
		}
	},
	WINDOW_DECAL_NONE: {
		WINDOW_DECAL_A4: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-a@2x.png'
			}
		},
		WINDOW_DECAL_A3: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-a@2x.png'
			}
		},
		WINDOW_DECAL_A2: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-a@2x.png'
			}
		},
		WINDOW_DECAL_A1: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-a@2x.png'
			}
		},
		WINDOW_DECAL_B4: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 319, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-b@2x.png'
			}
		},
		WINDOW_DECAL_B3: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 319, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-b@2x.png'
			}
		},
		WINDOW_DECAL_B2: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 319, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-banner-b@2x.png'
			}
		}
	},
	TABLE_TOP_SIGN_NONE: {
		TABLE_TOP_SIGN_A6: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-tabletop-a@2x.png'
			}
		},
		TABLE_TOP_SIGN_A5: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-tabletop-a@2x.png'
			}
		},
		TABLE_TOP_SIGN_A4: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 325, 463 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-tabletop-a@2x.png'
			}
		}
	},
	CAR_MAGNET_NONE: {
		CAR_MAGNET_150X100: {
			viewMode: 'FULL',
			horizontal: {
				viewSize: [ 600, 400 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-carmagnet-600-x-400@2x.png'
			}
		},
		CAR_MAGNET_300X200: {
			viewMode: 'FULL',
			horizontal: {
				viewSize: [ 600, 400 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-carmagnet-600-x-400@2x.png'
			}
		},
		CAR_MAGNET_450X300: {
			viewMode: 'FULL',
			horizontal: {
				viewSize: [ 600, 400 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-carmagnet-600-x-400@2x.png'
			}
		},
		CAR_MAGNET_600X400: {
			viewMode: 'FULL',
			horizontal: {
				viewSize: [ 600, 400 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-carmagnet-600-x-400@2x.png'
			}
		},
		CAR_MAGNET_400X97: {
			viewMode: 'FULL',
			horizontal: {
				viewSize: [ 700, 175 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-carmagnet-1200-x-300@2x.png'
			}
		},
		CAR_MAGNET_800X200: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 700, 175 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-carmagnet-1200-x-300@2x.png'
			}
		},
		CAR_MAGNET_1000X250: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 700, 175 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-carmagnet-1200-x-300@2x.png'
			}
		},
		CAR_MAGNET_1200X300: {
			viewMode: 'FULL',
			vertical: {
				viewSize: [ 700, 175 ],
				viewMaskImage: '/images/common/mask/list/sp-popup-carmagnet-1200-x-300@2x.png'
			}
		}
	},
	A_FRAME_SIGN_NONE: {
		A_FRAME_SIGN_450X800: {
			viewMode: 'HALF',
			vertical: {
				viewSize: [ 258, 460 ],
				viewMaskImage: '/images/common/mask/list/sp-list-popup-sign-aframe-450-x-800@2x.png'
			}
		}
	},
	APPAREL_SHORT_SLEEVES_ROUND: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_SHORT_SLEEVES_POCKET: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_SHORT_SLEEVES_RAGLAN: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_SHORT_SLEEVES_RINGER: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_SHORT_SLEEVES_CROP: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_SHORT_SLEEVES_POLO: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_SHORT_SLEEVES_POLOPOCKET: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_SHORT_SLEEVES_VNECK: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_M2M: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_GIMO_M2M: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_HOODIE: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_GIMO_HOODIE: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_ZIPUP: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_GIMO_ZIPUP: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_DRY_ZIPUP: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_LONG_PANTS: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_ECHO_BAG: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_ECOBAG: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_POUCH: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
	APPAREL_LONG_SLEEVES_ROUND: {
		viewMode: 'FULL',
		vertical: {
			viewSize: [ 480, 480 ],
			thumbnailSize: [ 80, 80 ]
		}
	},
  APPAREL_ECOBAGV1: {
    viewMode: 'FULL',
    vertical: {
      viewSize: [ 480, 480 ],
      thumbnailSize: [ 80, 80 ]
    }
  },

//
  APPAREL_ONEPIECE: {
    viewMode: 'FULL',
    vertical: {
      viewSize: [ 480, 480 ],
      thumbnailSize: [ 80, 80 ]
    }
  },

  APPAREL_NEW_ECOBAG: {
    viewMode: 'FULL',
    vertical: {
      viewSize: [ 480, 480 ],
      thumbnailSize: [ 80, 80 ]
    }
  },

  APPAREL_ETC_M2M: {
    viewMode: 'FULL',
    vertical: {
      viewSize: [ 480, 480 ],
      thumbnailSize: [ 80, 80 ]
    }
  },


  PIN_BUTTON_ROUND:{
    PIN_BUTTON_32X32:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 400, 400 ],
        viewMaskImage: '/images/common/mask/list/popup-btn-circle-32@2x.png'
      }
    },

    PIN_BUTTON_38X38:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 400, 400 ],
        viewMaskImage: '/images/common/mask/list/popup-btn-circle-38@2x.png'
      }
    },
    PIN_BUTTON_44X44:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 400, 400 ],
        viewMaskImage: '/images/common/mask/list/popup-btn-circle-44@2x.png'
      }
    },
    PIN_BUTTON_58X58:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 400, 400 ],
        viewMaskImage: '/images/common/mask/list/popup-btn-circle-58@2x.png'
      }
    },
    PIN_BUTTON_75X75:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 400, 400 ],
        viewMaskImage: '/images/common/mask/list/popup-btn-circle-75@2x.png'
      }
    }
  },

  PIN_BUTTON_SQUARE:{
    PIN_BUTTON_37X37:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 400, 400 ],
        viewMaskImage: '/images/common/mask/list/popup-btn-square-37@2x.png'
      }
    },
    PIN_BUTTON_50X50:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 400, 400 ],
        viewMaskImage: '/images/common/mask/list/popup-btn-square-50@2x.png'
      }
    }
  },

  PIN_BUTTON_HEART:{
    PIN_BUTTON_57X52:{
      viewMode: 'FULL',
      horizontal: {
        viewSize: [ 388, 347 ],
        viewMaskImage: '/images/common/mask/list/popup-btn-sq-heart@2x.png'
      }
    }
  },


  MIRROR_BUTTON_ROUND:{
    MIRROR_BUTTON_58X58:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 400, 400 ],
        viewMaskImage: '/images/common/mask/list/popup-btn-circle-58@2x.png'
      }
    },
    MIRROR_BUTTON_75X75:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 400, 400 ],
        viewMaskImage: '/images/common/mask/list/popup-btn-circle-75@2x.png'
      }
    }
  },


//

  MAGNET_BUTTON_ROUND:{
    MAGNET_BUTTON_32X32:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 400, 400 ],
        viewMaskImage: '/images/common/mask/list/popup-btn-circle-32@2x.png'
      }
    },

    MAGNET_BUTTON_38X38:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 400, 400 ],
        viewMaskImage: '/images/common/mask/list/popup-btn-circle-38@2x.png'
      }
    },
    MAGNET_BUTTON_44X44:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 400, 400 ],
        viewMaskImage: '/images/common/mask/list/popup-btn-circle-44@2x.png'
      }
    },
    MAGNET_BUTTON_58X58:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 400, 400 ],
        viewMaskImage: '/images/common/mask/list/popup-btn-circle-58@2x.png'
      }
    },
    MAGNET_BUTTON_75X75:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 400, 400 ],
        viewMaskImage: '/images/common/mask/list/popup-btn-circle-75@2x.png'
      }
    }
  },

  MAGNET_BUTTON_SQUARE:{
    MAGNET_BUTTON_37X37:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 400, 400 ],
        viewMaskImage: '/images/common/mask/list/popup-btn-square-37@2x.png'
      }
    },
    MAGNET_BUTTON_50X50:{
      viewMode: 'FULL',
      square: {
        viewSize: [ 400, 400 ],
        viewMaskImage: '/images/common/mask/list/popup-btn-square-50@2x.png'
      }
    }
  },

  MAGNET_BUTTON_HEART:{
    MAGNET_BUTTON_57X52:{
      viewMode: 'FULL',
      horizontal: {
        viewSize: [ 388, 347 ],
        viewMaskImage: '/images/common/mask/list/popup-btn-sq-heart@2x.png'
      }
    }
  },

  SMART_TOK_ROUND:{
    SMART_TOK_37X37:{
      '520002':{
        viewMode: 'FULL',
        square: {
          viewSize: [ 312, 312 ],
          viewMaskImage: '/images/common/mask/list/popup-griptok-circle-black@2x.png'
        }
      },
      '520001':{
        viewMode: 'FULL',
        square: {
          viewSize: [ 312, 312 ],
          viewMaskImage: '/images/common/mask/list/popup-griptok-circle-white@2x.png'
        }
      }
    }
  },

  SMART_TOK_HEART:{
    SMART_TOK_54X49:{
      '520002':{
        viewMode: 'FULL',
        horizontal: {
          viewSize: [ 388, 347 ],
          viewMaskImage: '/images/common/mask/list/popup-griptok-heart-black@2x.png'
        }
      },
      '520001':{
        viewMode: 'FULL',
        horizontal: {
          viewSize: [ 388, 347 ],
          viewMaskImage: '/images/common/mask/list/popup-griptok-heart-white@2x.png'
        }
      }
    }
  },


  FAN_ROUND:{
    FAN_190X190 : {
      "504044": {
        viewMode: 'HALF',
        vertical: {
          viewSize: [371, 371],
          viewMaskImage: '/images/common/mask/list/handfan-popup-stick-front@2x.png',
          viewMaskImageBack: '/images/common/mask/list/handfan-popup-stick-back@2x.png'
        }
      },

      "504043":{
        viewMode: 'HALF',
        vertical: {
          viewSize: [371, 371],
          viewMaskImage: '/images/common/mask/list/handfan-popup-round-half@2x.png'
        }
      }
    }
  },

  TRANS_FAN_ROUND:{
    TRANS_FAN_190X190:{
      "504044":{
          viewMode: 'FULL',
          square: {
            viewSize: [ 371, 371 ],
            viewMaskImage: '/images/common/mask/list/handfan-popup-stick-clear-front@2x.png'
          }

      },
      "504043": {
        viewMode: 'FULL',
        square: {
          viewSize: [371, 371],
          viewMaskImage: '/images/common/mask/list/handfan-popup-round-full@2x.png'
        }
      }
    },

  },
  CALENDAR_DESK_HORIZONTAL:{
    CALENDAR_DESK_L: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [ 480, 480 ],
        thumbnailSize: [ 80, 80 ]
      }
    },

    CALENDAR_DESK_M: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [ 480, 480 ],
        thumbnailSize: [ 80, 80 ]
      }
    },

    CALENDAR_DESK_S: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [ 480, 480 ],
        thumbnailSize: [ 80, 80 ]
      }
    },
  },
  CALENDAR_DESK_VERTICAL:{
    CALENDAR_DESK_L: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [ 480, 480 ],
        thumbnailSize: [ 80, 80 ]
      }
    },

    CALENDAR_DESK_M: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [ 480, 480 ],
        thumbnailSize: [ 80, 80 ]

      }
    },

    CALENDAR_DESK_S: {
      viewMode: 'FULL',
      vertical: {
        viewSize: [ 480, 480 ],
        thumbnailSize: [ 80, 80 ]
      }
    },
  },
  ENVELOPE_NORMAL: {
    ENVELOPE_NORMAL_L: {
      viewMode: 'HALF',
      horizontal: {
        viewSize: [ 322, 238 ],
        viewMaskImage:  [
          { type: 'FRONT', value: '/images/common/mask/list/envelope-listpopup-standard-big-row-skin-01@2x.png' },
          { type: 'BACK', value: '/images/common/mask/list/envelope-listpopup-standard-big-row-skin-02@2x.png' },
        ]
      },
      vertical: {
        viewSize: [ 238, 322 ],
        viewMaskImage:  [
          { type: 'FRONT', value: '/images/common/mask/list/envelope-listpopup-standard-big-col-skin-01@2x.png' },
          { type: 'BACK', value: '/images/common/mask/list/envelope-listpopup-standard-big-col-skin-02@2x.png' },
        ]
      }
    },
    ENVELOPE_NORMAL_M: {
      viewMode: 'HALF',
      horizontal: {
        viewSize: [ 314, 230 ],
        viewMaskImage:  [
          { type: 'FRONT', value: '/images/common/mask/list/envelope-listpopup-standard-medium-row-skin-01@2x.png' },
          { type: 'BACK', value: '/images/common/mask/list/envelope-listpopup-standard-medium-row-skin-02@2x.png' },
        ]
      },
      vertical: {
        viewSize: [ 230, 314 ],
        viewMaskImage:  [
          { type: 'FRONT', value: '/images/common/mask/list/envelope-listpopup-standard-medium-col-skin-01@2x.png' },
          { type: 'BACK', value: '/images/common/mask/list/envelope-listpopup-standard-medium-col-skin-02@2x.png' },
        ]
      }
    },
    ENVELOPE_NORMAL_S: {
      viewMode: 'HALF',
      horizontal: {
        viewSize: [ 362, 174 ],
        viewMaskImage:  [
          { type: 'FRONT', value: '/images/common/mask/list/envelope-listpopup-standard-small-row-skin-01@2x.png' },
          { type: 'BACK', value: '/images/common/mask/list/envelope-listpopup-standard-small-row-skin-02@2x.png' },
        ]
      },
      vertical: {
        viewSize: [ 174, 362 ],
        viewMaskImage:  [
          { type: 'FRONT', value: '/images/common/mask/list/envelope-listpopup-standard-small-col-skin-01@2x.png' },
          { type: 'BACK', value: '/images/common/mask/list/envelope-listpopup-standard-small-col-skin-02@2x.png' },
        ]
      }
    },

    ENVELOPE_NORMAL_CHL: {
      viewMode: 'HALF',
      vertical: {
        viewSize: [ 330, 298 ],
        viewMaskImage:  [
          { type: 'FRONT', value: '/images/common/mask/list/envelope-listpopup-standard-calendar-row-l-skin-01@2x.png' },
          { type: 'BACK', value: '/images/common/mask/list/envelope-listpopup-standard-calendar-row-l-skin-02@2x.png' },
        ]
      }
    },

    ENVELOPE_NORMAL_CHM: {
      viewMode: 'HALF',
      vertical: {
        viewSize: [ 304, 320 ],
        viewMaskImage:  [
          { type: 'FRONT', value: '/images/common/mask/list/envelope-listpopup-standard-calendar-row-m-skin-01@2x.png' },
          { type: 'BACK', value: '/images/common/mask/list/envelope-listpopup-standard-calendar-row-m-skin-02@2x.png' },
        ]
      }
    },
    ENVELOPE_NORMAL_CVM: {
      viewMode: 'HALF',
      vertical: {
        viewSize: [ 238, 408 ],
        viewMaskImage:  [
          { type: 'FRONT', value: '/images/common/mask/list/envelope-listpopup-standard-calendar-col-m-skin-01@2x.png' },
          { type: 'BACK', value: '/images/common/mask/list/envelope-listpopup-standard-calendar-col-m-skin-02@2x.png' },
        ]
      }
    },
    ENVELOPE_NORMAL_CVS: {
      viewMode: 'HALF',
      vertical: {
        viewSize: [ 206, 334 ],
        viewMaskImage:  [
          { type: 'FRONT', value: '/images/common/mask/list/envelope-listpopup-standard-calendar-col-s-skin-01@2x.png' },
          { type: 'BACK', value: '/images/common/mask/list/envelope-listpopup-standard-calendar-col-s-skin-02@2x.png' },
        ]
      }
    },
  },
  ENVELOPE_JACKET : {
    ENVELOPE_JACKET_S: {
      viewMode: 'HALF',
      vertical: {
        viewSize: [ 376, 182 ],
        viewMaskImage:  [
          { type: 'FRONT', value: '/images/common/mask/list/envelope-listpopup-jacket-small-skin-01@2x.png' },
          { type: 'BACK', value: '/images/common/mask/list/envelope-listpopup-jacket-small-skin-02@2x.png' },
        ]
      }
    }
  },
  ENVELOPE_GUIDE : {
    ENVELOPE_GUIDE_5X7: {
      viewMode: 'HALF',
      vertical: {
        viewSize: [ 312, 226 ],
        viewMaskImage:  [
          { type: 'FRONT', value: '/images/common/mask/list/envelope-listpopup-info-57-skin-01@2x.png' },
          { type: 'BACK', value: '/images/common/mask/list/envelope-listpopup-info-57-skin-02@2x.png' },
        ]
      }
    },
    ENVELOPE_GUIDE_4X6: {
      viewMode: 'HALF',
      vertical: {
        viewSize: [ 318, 216 ],
        viewMaskImage:  [
          { type: 'FRONT', value: '/images/common/mask/list/envelope-listpopup-info-46-skin-01@2x.png' },
          { type: 'BACK', value: '/images/common/mask/list/envelope-listpopup-info-46-skin-02@2x.png' },
        ]
      }
    },
    ENVELOPE_GUIDE_COUPON: {
      viewMode: 'HALF',
      vertical: {
        viewSize: [ 344, 176 ],
        viewMaskImage:  [
          { type: 'FRONT', value: '/images/common/mask/list/envelope-listpopup-info-coupon-skin-01@2x.png' },
          { type: 'BACK', value: '/images/common/mask/list/envelope-listpopup-info-coupon-skin-02@2x.png' },
        ]
      }
    },
    ENVELOPE_GUIDE_MINI: {
      viewMode: 'HALF',
      vertical: {
        viewSize: [ 260, 196 ],
        viewMaskImage:  [
          { type: 'FRONT', value: '/images/common/mask/list/envelope-listpopup-info-mini-skin-01@2x.png' },
          { type: 'BACK', value: '/images/common/mask/list/envelope-listpopup-info-mini-skin-02@2x.png' },
        ]
      }
    }
  },
  SHOPPINGBAG_WIDE:{
    SHOPPINGBAG_WIDE_M: {
      viewMode: 'FULL',
      square: {
        viewSize: [ 506, 620 ],
        viewMaskImage: {
          frameCode:[
            { code : "504046", value : "/images/common/mask/list/shopping-skin-wide-white-middle@2x.png" },
            { code : "504047", value : "/images/common/mask/list/shopping-skin-wide-black-middle@2x.png" },
            { code : "504048", value : "/images/common/mask/list/shopping-skin-wide-brown-middle@2x.png" }
          ]
        }
      }
    },
    SHOPPINGBAG_WIDE_S: {
      viewMode: 'FULL',
      square: {
        viewSize: [ 506, 620 ],
        viewMaskImage: {
          frameCode:[
            { code : "504046", value : "/images/common/mask/list/shopping-skin-wide-white-small@2x.png" },
            { code : "504047", value : "/images/common/mask/list/shopping-skin-wide-black-small@2x.png" },
            { code : "504048", value : "/images/common/mask/list/shopping-skin-wide-brown-small@2x.png" }
          ]
        }
      }
    }
  },
  SHOPPINGBAG_VERTICAL: {
    SHOPPINGBAG_VERTICAL_L: {
      viewMode: 'FULL',
      square: {
        viewSize: [ 506, 620 ],
        viewMaskImage: {
          frameCode:[
            { code : "504046", value : "/images/common/mask/list/shopping-skin-col-white-large@2x.png" },
            { code : "504047", value : "/images/common/mask/list/shopping-skin-col-black-large@2x.png" },
            { code : "504048", value : "/images/common/mask/list/shopping-skin-col-brown-large@2x.png" }
          ]
        }
      }
    },
    SHOPPINGBAG_VERTICAL_M: {
      viewMode: 'FULL',
      square: {
        viewSize: [ 506, 620 ],
        viewMaskImage: {
          frameCode:[
            { code : "504046", value : "/images/common/mask/list/shopping-skin-col-white-middle@2x.png" },
            { code : "504047", value : "/images/common/mask/list/shopping-skin-col-black-middle@2x.png" },
            { code : "504048", value : "/images/common/mask/list/shopping-skin-col-brown-middle@2x.png" }
          ]
        }
      }
    },
    SHOPPINGBAG_VERTICAL_S: {
      viewMode: 'FULL',
      square: {
        viewSize: [ 506, 620 ],
        viewMaskImage: {
          frameCode:[
            { code : "504046", value : "/images/common/mask/list/shopping-skin-col-white-small@2x.png" },
            { code : "504047", value : "/images/common/mask/list/shopping-skin-col-black-small@2x.png" },
            { code : "504048", value : "/images/common/mask/list/shopping-skin-col-brown-small@2x.png" }
          ]
        }
      }
    }
  }
};
