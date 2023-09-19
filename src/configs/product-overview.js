/*
  icon: 'sale-7070',
 */
export const PRODUCT_OVERVIEW = {
	BUSINESS_CARD: {
		description: '',
		image: 'kv-bizcard-25603800',
		children: [
			{
				title: '사이즈',
				description: '사이즈를 선택해 보세요.',
				children: [
					{
						title: '표준사이즈',
						description: '가장 일반적으로 사용되는 사이즈입니다.<br/>90mm x 50mm',
						image: 'size-basic-360266',
						link: '/store/business-card/intro/basic'
					},
					{
						title: 'OPM사이즈',
						description: '신용카드 사이즈로 지갑에 넣고 다니기 좋아요.<br/>85mm x 55mm',
						image: 'size-opm-360266',
						link: '/store/business-card/intro/opm'
					},
					{
						title: '정사각사이즈',
						description: '유니크한 사이즈로 명함 및 쿠폰으로도 활용해 보세요.<br/>60mm x 60mm',
						image: 'size-square-360266',
						link: '/store/business-card/intro/square'
					}
				]
			},
			{
				title: '효과',
				description: '효과를 선택해 보세요.',
				type: 'box',
				children: [
					{
						title: '박',
						description: '빛에 따라 반짝이는 효과로<br/>고급스럽게 표현가능해요.',
						image: 'effect-foil-360280',
            icon:'new-7070',
						link: '/store/business-card/intro/foil_print'
					},
					{
						title: '형압',
						description: '종이 그대로를 표현하여<br/>감각적으로 연출해보세요.',
						image: 'effect-press-360280',
            icon:'new-7070',
						link: '/store/business-card/intro/pressure'
					},
					{
						title: '스코딕스',
						description: '올록볼록 반짝이는 효과로<br/>특별함을 건네세요.',
						image: 'effect-scodix-360280',
            icon:'new-7070',
						link: '/store/business-card/intro/scodix'
					}
				]
			},
			{
				title: '용지',
				description: '용지를 선택해 보세요.',
				type: 'box',
				children: [
					{
						title: '소프트',
            badge: ['베스트셀러', '매끄러움'],
						description: '적당한 두께의 대중적인 용지로 <br/> 가격대비 높은 완성도를 경험하세요.',
						attention: [
							'용지 무게 : 250gsm',
							'3,400원 부터'
						],
						image: 'paper-soft-360280',
						link: '/store/business-card/intro/soft'
					},
					{
						title: '프리미엄 소프트',
            badge: ['스테디셀러', '매끄러움'],
						description: '자연스러운 광택과 깨끗함을 느낄 수 있는 용지로 <br/> 선명한 색재현성과 내구성이 우수합니다.',
						attention: [
							'용지 무게 : 270gsm',
							'4,400원 부터'
						],
						image: 'paper-premiumsoft-360280',
						link: '/store/business-card/intro/premium_soft'
					},
					{
						title: '프리미엄 매트',
            badge: ['베스트셀러', '단단함', '매트함'],
						description: '부드럽고 따뜻한 느낌의 용지로 깊이 있는 질감과 인쇄로 <br/> 고급스러움을 느껴 보세요.',
						attention: [
							'용지 무게 : 273gsm',
							'7,000원 부터'
						],
						image: 'paper-premiummat-360280',
						link: '/store/business-card/intro/premium_matt'
					},

/*					{
						title: '스탠다드',
						description: '적당한 두께와 우수한 색상 표현으로 가격<br/>대비 높은 완성도를 경험해 보세요.',
						attention: [
							'용지 무게 : 230gsm',
							'3,900원 부터'
						],
						image: 'paper-standard-360280',
						link: '/store/business-card/intro/standard'
					},*/
					{
						title: '오리지널',
						badge: ['베스트셀러', '단단함'],
						description: '실크 코팅되어 매끈한 감촉과 탄탄함을 느낄 수 있는<br/>우리만의 스페셜한 용지입니다.',
						attention: [
							'용지 무게 : 350gsm',
							'9,200원 부터'
						],
						image: 'paper-original-360280',
						link: '/store/business-card/intro/original'
					},
					{
						title: '럭스',
            badge: ['스테디셀러', '단단함', '매트함'],
						description: '차원이 다른 재질과 압도적인 두께감으로<br/>강한 인상을 남겨 보세요.',
						attention: [
							'용지 무게 : 734gsm',
							'20,900원 부터'
						],
						image: 'paper-lux-360280',
						link: '/store/business-card/intro/luxe'
					},
					{
						title: '리넨',
            badge: ['추천', '매트함'],
						description: '규칙적인 격자무늬 패턴과 고급스러운 촉감의 무광택 용지로<br/>편안하고 차분한 감성을 표현해보세요.',
						attention: [
							'용지 무게 : 270gsm',
							'7,700원 부터'
						],
						image: 'paper-linen-360280',
						link: '/store/business-card/intro/linen'
					},
					{
						title: '펠트',
            badge: ['추천', '매트함'],
						description: '친환경 그래픽 용지의 부드러운 감촉, 잔잔한 물결무늬의<br/>엠보싱은 강도와 탄력 또한 우수합니다.',
						attention: [
							'용지 무게 : 270gsm',
							'5,800원 부터'
						],
						image: 'paper-felt-360280',
						link: '/store/business-card/intro/felt'
					},
					{
						title: '펄',
            badge: ['추천'],
						description: '빛에 따라 반짝이는 은은한 진줏빛의 신비로운 소재로<br/>우아한 세련미가 돋보이는 용지입니다.',
						attention: [
							'용지 무게 : 240gsm',
							'6,900원 부터'
						],
						image: 'paper-pearl-360280',
						link: '/store/business-card/intro/pearl'
					},
					{
						title: '크라프트',
            badge: ['매트함'],
						description: '빈티지한 감성의 친환경 재생용지로<br/>편안한 분위기를 연출해 보세요.',
						attention: [
							'용지 무게 : 250gsm',
							'4,600원 부터'
						],
						image: 'paper-craft-360280',
						link: '/store/business-card/intro/craft'
					},
					{
						title: '투명',
            badge: ['스테디셀러', '매끄러움'],
						description: '투명하게 비치는 고품질 PET 소재의 찢기지 않는 두께감과<br/>방수 기능으로 오래도록 간직해 보세요.',
						attention: [
							'용지 무게 : 250gsm',
							'11,700원 부터'
						],
						image: 'paper-glossy-360280',
						link: '/store/business-card/intro/transparency'
					},
          {
            title: '매트블랙',
            badge: ['추천', '단단함', '매트함'],
            description: '평범한게 싫다면 프리미엄 블랙 용지로<br/>고급스러운 분위기를 연출해 보세요.',
            attention: [
              '용지 무게 : 270gsm',
              '9,900원 부터'
            ],
            image: 'paper-matteblack-360280',
            icon:'new-7070',
            link: '/store/business-card/intro/matt_black'
          },
          {
            title: '리사이클',
            badge: ['추천', '단단함', '매트함'],
            description: '100%재생 친환경 용지로<br/>중요할수록 특별하게 건네요.',
            attention: [
              '용지 무게 : 300gsm',
              '6,200원 부터'
            ],
            image: 'paper-recycle-360280',
            icon:'new-7070',
            link: '/store/business-card/intro/recycle'
          }
				]
			}
		]
	},
	STICKER: {
		description: '',
		image: 'kv-sticker-25603800',
		children: [
			{
				title: '형태',
				description: '형태를 선택해 보세요.',
				type: 'box borderBottomNone',
				children: [
					{
						title: '낱장',
						description: '직접 만든 이미지 모양 그대로 하나씩 낱장으로<br/>잘라주는 스티커를 만들어 주세요.',
						image: 'sp-sticker-diecut-360280',
						link: '/store/sticker/intro/free-size'
					},
					{
						title: 'DIY',
						description: '원하는 대로 배치하고, 모양대로 잘라주는<br/>세상에 없던 나만의 스티커를 만들어보세요.',
						image: 'sp-sticker-diy-360280',
						link: '/store/sticker/intro/diy'
					},
					{
						title: '원형',
						description: '총 6종 다양한 사이즈 원형스티커로 상품, 패키지 등에<br/>브랜드 로고를 더욱 돋보이게 연출해 보세요.',
						image: 'sp-sticker-circle-360280',
						link: '/store/sticker/intro/circle'
					},
					{
						title: '정사각형',
						description: '다양한 상품과 패키지에 총 6종 다양해진 정사각 스티커로<br/>상품의 세련미를 더해 보세요.',
						image: 'sp-sticker-square-360280',
						link: '/store/sticker/intro/square'
					},
					{
						title: '직사각형',
						description: '간단한 상품 정보나 전달하고 싶은 메시지가 있다면<br/>간편하게 스티커로 부착해 보세요.',
						image: 'sp-sticker-rec-360280',
						link: '/store/sticker/intro/rectangle'
					},
					{
						title: '와이드형',
						description: '2종의 다양한 사이즈로 식품, 베이커리, 플라워숍의 라벨이나<br/>네임 스티커로 활용하기 좋아요. ',
						image: 'sp-sticker-wide-360280',
						link: '/store/sticker/intro/wide'
					},
          {
            title: '롤스티커',
            description: '대량으로 넉넉하게, 롤타입으로 편리하게<br/>스티커를 이용할 수 있어요.',
            image: 'sp-sticker-roll-360280',
            link: '/store/sticker/intro/roll'
          },
          {
            title: '컬러 데칼',
            description: '우리 매장/가게/행사를 깔끔하게 홍보하고 안내할 수 있는 스티커를 만나보세요.',
            image: 'color-decal',
            icon:'new-7070',
            link: '/store/color-decal/intro/defaults'
          },
          {
            title: '그래픽 데칼',
            description: '우리 매장/가게/행사의 컨셉을 눈에 띄게 표현할 수 있는 스티커로 홍보하세요.',
            image: 'graphic-decal',
            icon:'new-7070',
            link: '/store/graphic-decal/intro/defaults'
          }
/*					{
						title: 'A사이즈형',
						description: '포스터나 광고용으로 제작하여 제품 홍보에<br/>간편하고 효율적으로 사용해 보세요.',
						image: 'sp-sticker-asize-360280',
						link: '/store/sticker/intro/a-size'
					}*/
				]
			},
			{
				title: '용지',
				description: '용지를 선택해 보세요.',
				type: 'box wide borderBottomNone',
				children: [
          {
            title: '스탠다드',
            description: '선명한 색상으로 표현되며 생활 방수 기능이 있는 용지로, 유포지와 유사해요.',
            attention: [
              '용지 무게 : 75gsm',
              '800원 부터'
            ],
            image: 'paper-standard-555280',
            link: '/store/sticker/intro/standard'
          },
          {
            title: '리무버블',
            description: '깔끔하게 떼었다가 붙일 수 있는 리무버블 용지입니다.',
            attention: [
              '용지 무게 : 100gsm',
              '900원 부터'
            ],
            image: 'paper-removable-555280',
            link: '/store/sticker/intro/repp80'
          },
					{
						title: '소프트',
						description: '다양하게 사용도가 높은 대중적인 용지에 코팅을 더해 내구성을 높였어요.',
						attention: [
							'용지 무게 : 90gsm',
							'600원 부터'
						],
						image: 'paper-soft-555280',
						link: '/store/sticker/intro/soft2'
					},
					{
						title: '매트',
						description: '내추럴한 느낌의 일반 복사 용지와 가장 비슷한 용지로. 연필로도 필기가 가능해요.',
						attention: [
							'용지 무게 : 80gsm',
							'700원 부터'
						],
						image: 'paper-mat-555280',
						link: '/store/sticker/intro/matt'
					},
          {
            title: '투명',
            description: '투명 비닐 재질로 깔끔한 느낌으로 표현되는 용지입니다.',
            attention: [
              '용지 무게 : 75gsm',
              '1,000원 부터'
            ],
            image: 'paper-clear-555280',
            link: '/store/sticker/intro/transparency'
          },
          {
            title: '홀로그램',
            description: '빛에 따라 반짝이며 주위를 집중시킬 수 있는 홀로그램지입니다.',
            attention: [
              '용지 무게 : 75gsm',
              '1,000원 부터'
            ],
            image: 'paper-hologram-555280',
            link: '/store/sticker/intro/hologram'
          },
					{
						title: '크라프트',
						description: '편안한 느낌을 줄 수 있는 친환경 재생용지입니다.',
						attention: [
							'용지 무게 : 75gsm',
							'800원 부터 '
						],
						image: 'paper-craft-555280',
						link: '/store/sticker/intro/craft'
					}
				]
			}/*,
      {
        title: '한 번에 많이 필요할 때는 롤스티커를 이용하면 편리하고 실속 있어요.',
        type: 'box wide',
        tabDisabled:true,
        centerItem:true,
        children: [
          {
            title: '롤스티커',
            description: '대량으로 넉넉하게, 롤타입으로 편리하게 스티커를 이용할 수 있어요.',
            attention: [
              '용지 무게 : 75gsm',
              '800원 부터'
            ],
            image: 'empty-image-555280',
            link: '/store/sticker/intro/roll'
          }
        ]
      }*/
		]
	},
	PR: {
		description: '',
		image: 'kv-ad-25603800',
		children: [
			{
				title: '상품',
				description: '상품을 선택해 보세요.',
				type: 'box',
				children: [
          {
            title: '전단',
            description: '단 한 장으로 원하는 정보를<br/>효과적으로 보여주세요.',
            image: 'ad-flyer-320320',
            link: '/store/flyer/intro/defaults'
          },
					{
						title: '브로슈어',
						description: '많은 정보를<br/>쉽고, 정확하게 전달해 보세요.',
						image: 'ad-brochure-320320',
						link: '/store/brochure/intro/defaults'
					},
					{
						title: '메뉴판',
						description: '선택의 순간도 즐겁게<br/>메뉴의 잠재력을 깨워보세요.',
						image: 'ad-menu-320320',
						link: '/store/menu/intro/defaults'
					},
					{
						title: '포스트카드',
						description: '어디든, 메시지에 힘을 담아 보내세요.',
						image: 'ad-postcard-320320',
						link: '/store/post-card/intro/defaults'
					},
					{
						title: '쿠폰',
						description: '놀라운 혜택, 더 놀랍게 전해보세요.',
						image: 'ad-coupon-320320',
						link: '/store/coupon/intro/defaults'
					}
				]
			}
		]
	},
	CARD: {
		description: '',
		image: 'kv-card-25603800',
		children: [
			{
				title: '형태',
				description: '형태를 선택해 보세요.',
				type: 'box wide',
				children: [
					{
						title: '플랫',
						description: '낱장 카드 형태로 간략한 내용을 담아 보세요.',
						image: 'card-flat-320320',
						link: '/store/card/intro/flat'
					},
					{
						title: '폴더',
						description: '접이식 카드 형태로 많은 내용을 담아 보세요.',
						image: 'card-folder-360360',
						link: '/store/card/intro/folder'
					}
				]
			},
			{
				title: '사이즈',
				description: '사이즈를 선택해 보세요.',
				children: [
					{
						title: '미니 사이즈',
						description: '한 손에 쏙 들어오는 아담한 사이즈로<br/>간결한 문장을 담아 감사의 인사를 전해보세요.',
						image: 'size-mini-360266',
						link: '/store/card/intro/70x98'
					},
					{
						title: '4 X 6 사이즈',
						description: '가장 일반적인 사이즈로 소소한 안부, 축하 인사를 전할 땐,<br/>따뜻한 메세지로 마음을 표현해 보세요.',
						image: 'size-4x6-360266',
						link: '/store/card/intro/4x6'
					},
					{
						title: '5 X 7 사이즈',
						description: '편지만큼 가득 채울 수 있는 이야기를 담아<br/>특별한 감동을 전할 수 있어요.',
						image: 'size-5x7-360266',
						link: '/store/card/intro/5x7'
					}
				]
			},
			{
				title: '효과',
				description: '효과를 선택해 보세요.',
				type: 'box',
				children: [
					{
						title: '투명 글로시',
						description: '투명하게 올록볼록 반짝이는 효과로<br/>매력적인 느낌을 연출해 보세요.',
						image: 'effect-glossy-360280',
						link: '/store/card/intro/glossy'
					},
					{
						title: '골드',
						description: '올록볼록 반짝이는 골드 효과로<br/>고급스러움을 더해 보세요.',
						image: 'effect-gold-360280',
						link: '/store/card/intro/gold'
					},
					{
						title: '실버',
						description: '올록볼록 반짝이는 실버 효과로<br/>특별함을 전달해 보세요.',
						image: 'effect-silver-360280',
						link: '/store/card/intro/silver'
					}
				]
			},
			{
				title: '용지',
				description: '용지를 선택해 보세요.',
				type: 'box paper',
				children: [
					//start
					{
						title: '소프트',
						description: '적당한 두께의 대중적인 용지로 <br/> 가격대비 높은 완성도를 경험하세요.',
						attention: [
							'용지 무게 : 250gsm',
							'2,200원 부터'
						],
						image: 'paper-soft-360280',
						link: '/store/card/intro/soft'
					},
					{
						title: '프리미엄 소프트',
						description: '자연스러운 광택과 깨끗함을 느낄 수 있는 용지로 <br/> 선명한 색재현성과 내구성이 우수합니다.',
						attention: [
							'용지 무게 : 300gsm',
							'2,500원 부터'
						],
						image: 'paper-premiumsoft-360280',
						link: '/store/card/intro/premium_soft'
					},
					{
						title: '프리미엄 매트',
						description: '부드럽고 따뜻한 느낌의 용지로 깊이 있는 질감과 인쇄로 <br/> 고급스러움을 느껴 보세요.',
						attention: [
							'용지 무게 : 273gsm',
							'5,000원 부터'
						],
						image: 'paper-premiummat-360280',
						link: '/store/card/intro/premium_matt'
					},
					//end
/*					{
						title: '스탠다드',
						description: '적당한 두께와 우수한 색상 표현으로 가격<br/>대비 높은 완성도를 경험해 보세요.',
						attention: [
							'용지 무게 : 230gsm',
							'1,900원 부터'
						],
						image: 'paper-standard-360280',
						link: '/store/card/intro/standard'
					},*/
					{
						title: '럭스',
						description: '차원이 다른 재질과 압도적인 두께감으로<br/>강한 인상을 남겨보세요.',
						attention: [
							'용지 무게 : 734gsm',
							'6,500원 부터',
							'플랫 카드 전용'
						],
						image: 'paper-lux-360280',
						link: '/store/card/intro/luxe'
					}
				]
			}
		]
	},
	ACCESSORY: {
		description: '',
		image: 'kv-acc-25603800',
		children: [
			{
				title: '상품',
				description: '상품을 선택해 보세요.',
				type: 'box accessory',
				children: [
					{
						title: '가죽 명함 지갑',
						description: '최고급 소가죽으로 제작된 핸드메이드 명함 지갑은<br/>특별한 선물이 될 거에요.',
						attention: [
							'3 Colors',
							'69,000원'
						],
						image: 'acc-wallet-360280',
						link: '/store/accessory/intro/leather-wallet'
					},
					{
						title: '알루미늄 명함 케이스',
						description: '미니멀리스트를 위한 깔끔하고<br/>세련된 느낌의 명함 케이스입니다.',
						attention: [
							'6,900원'
						],
						image: 'acc-aluminum-360280',
						link: '/store/accessory/intro/aluminium-case'
					},
					{
						title: '자석 명함 케이스',
						description: '자석으로 열고 닫을 수 있는<br/>우리만의 유니크한 명함 케이스입니다.',
						attention: [
							'3 Sizes / 5 Colors',
							'2,000원'
						],
						image: 'acc-case-360280',
						link: '/store/accessory/intro/magnetic-case'
					},
					{
						title: '무지봉투',
						description: '부드럽고 고급스러운 색감으로<br/>카드나 홍보물을 빛나게 해줄 봉투입니다.',
						attention: [
							'6 Sizes / 7 Colors',
							'900원 부터'
						],
						image: 'acc-envelope-360280',
						link: '/store/accessory/intro/envelope'
					},
					{
						title: '아크릴 홀더',
						description: '책상, 카운터, 테이블 어디든 간편하게<br/>올려놓고 메시지를 전달하세요.',
						attention: [
							'3 Sizes',
							'3,900원 부터'
						],
						image: 'acc-acrylicholder-360280',
						link: '/store/accessory/intro/acrylic-holder'
					},
					{
						title: '거치대 및 부자재',
						description: '배너와 현수막을 더욱 돋보이게 전시할<br/>거치대와 부자재입니다.',
						attention: [
							'8 Types',
							'1,200원 부터'
						],
						image: 'acc-material-360280',
						link: '/store/accessory/intro/stand'
					},
					{
						title: '이젤',
						description: '사인 제품을 안정적으로<br/>거치할 수 있는 블랙 이젤입니다.',
						attention: [
							'17,900원'
						],
						image: 'acc-easel-360280',
						link: '/store/accessory/intro/easel'
					},
          {
            title: '무지 크라프트 쇼핑백',
            description: '내구성이 탄탄한<br/>크라프트 무지 쇼핑백이에요.',
            attention: [
              '7 Types',
              '6,400원 부터'
            ],
            image: 'acc-shoppingbag-360280',
            link: '/store/accessory/intro/plain-kraft-shopping-bag'
          },
          {
            title: '롤스티커 디스펜서',
            description: '디스펜서로 편리하게 붙이고<br/>깔끔하게 정리할 수 있어요',
            attention: [
              '8,900원'
            ],
            image: 'acc-dispenser-360280',
            link: '/store/accessory/intro/dispenser'
          },
          {
            title: 'PVC 펜 파우치',
            description: '펜을 내입하여 패키지할 수 있어요.<br/>스티커를 포인트로 활용해 브랜딩해요.',
            attention: [
              '300원'
            ],
            image: 'acc-pen-pouch-360280',
            link: '/store/accessory/intro/pen-pouch'
          },
          {
            title: 'PVC 슬라이드 지퍼백',
            description: '다이어리와 펜 등 내입하여 패키지할 수 있어요.<br/>스티커를 포인트로 활용해 브랜딩해요.',
            attention: [
              '3 size',
              '600원 부터'
            ],
            image: 'acc-zipperbag-360280',
            link: '/store/accessory/intro/slide-zipperbag'
          },
          {
            title: '리유저블 스트로우',
            description: '텀블러에 쏙 넣어 빠지지 않게 사용할 수 있어요.',
            attention: [
              '2 Colors',
              '500원'
            ],
            image: 'acc-reusable-straw-360280',
            link: '/store/accessory/intro/reusable-straw'
          }
				]
			}
		]
	},
	BANNER: {
		description: '',
		image: 'kv-banner-25603800',
		children: [
			{
				title: '상품',
				description: '상품을 선택해 보세요.',
				type: 'box',
				children: [
					{
						title: '현수막',
						description: '실내, 실외 어디서든<br/>선명하게 홍보해 보세요.',
						image: 'sp-banner-360280',
						link: '/store/placard-banner/intro/defaults'
					},
					{
						title: '스탠다드 배너',
						description: '어떤 공간에서도 간편하게 설치하여<br/>홍보할 수 있어요.',
						image: 'sp-standardbanner-360280',
						link: '/store/standard-banner/intro/defaults'
					},
					{
						title: '양면 배너',
						description: '앞,뒤 양쪽으로 사용하고,<br/>2배의 홍보 효과를 얻을 수 있어요.',
						image: 'sp-bothsidebanner-360280',
						link: '/store/double-side-banner/intro/defaults'
					},
					{
						title: '롤업 배너',
						description: '접었다 폈다 할 수 있어 활용도가 높고<br/>편리하게 운반 가능해요.',
						image: 'sp-rollupbanner-360280',
						link: '/store/rollup-banner/intro/defaults'
					},
					{
						title: '미니 배너',
						description: '작은 사이즈로 테이블 및 선반 위 등<br/>좁은 공간에서도 홍보하기 좋아요.',
						image: 'sp-minibanner-360280',
						link: '/store/mini-banner/intro/defaults'
					}
				]
			}
		]
	},
	SIGNS_POSTERS: {
		description: '',
		image: 'kv-sign-25603800',
		children: [
			{
				title: '상품',
				description: '상품을 선택해 보세요.',
				type: 'box',
				children: [
					{
						title: '포스터',
						description: '모두의 시선을 주목시켜<br/>톡톡한 홍보 효과를 경험해 보세요.',
						image: 'sp-poster-360280',
						link: '/store/poster/intro/defaults'
					},
					{
						title: '보드 사인',
						description: '도톰한 두께감과 내구성을 겸비한<br/>홍보물을 제작해 보세요.',
						image: 'sp-boardsign-360280',
						link: '/store/board-sign/intro/defaults'
					},
					{
						title: '아크릴 사인',
						description: '뛰어난 광택과 선명함 색감표현으로<br/>홍보의 몰입도를 높여보세요.',
						image: 'sp-acrylicsign-360280',
						link: '/store/acrylic-sign/intro/defaults'
					},
					{
						title: '메탈 사인',
						description: '얇고, 가벼운 알루미늄 패널에 메탈 특유의<br/>광택으로 고급스러움을 느껴보세요.',
						image: 'sp-metalsign-360280',
						link: '/store/metal-sign/intro/defaults'
					},
					{
						title: '원목 사인',
						description: '원목의 나뭇결로 깔끔하고<br/>고급스러운 벽면을 연출해보세요.',
						image: 'sp-woodensign-360280',
						link: '/store/wooden-frame-sign/intro/defaults'
					},
					{
						title: '테이블탑 사인',
						description: '작지만 튼튼한 재질로 내구성이 좋으며,<br/>테이블 또는 선반 위에 홍보하기 좋아요.',
						image: 'sp-tabletop-360280',
						link: '/store/table-top-sign/intro/defaults'
					},
					{
						title: 'A 프레임 사인',
						description: '접이식으로 이동과 보관이 편리하고,<br/>철재 소재로 튼튼한 내구성을 자랑해요.',
						image: 'sp-aframe-360280',
						link: '/store/a-frame-sign/intro/defaults'
					},
					{
						title: '카 마그넷',
						description: '차량에 간편하게 탈부착 가능해<br/>이동 시 홍보용으로 사용하기 좋아요.',
						image: 'sp-carmagnetic-360280',
						link: '/store/car-magnet/intro/defaults'
					}
				]
			}
		]
	},

  MD: {
    description: '',
    image: 'kv-md-25603800',
    children: [
      {
        title: '데코',
        description: '데코 상품을 선택해 보세요.',
        type: 'box white',
        children: [
          {
            title: '부채',
            description: '무더운 여름 시원하게 홍보하세요.',
            image: 'md-handfan',
            link: '/store/fan/intro/defaults',
            icon: 'new-7070'
          },
          {
            title: '아크릴 키링',
            description: '내가 찾던 그 디자인을 아크릴 안에 쏙!<br/>다양한 종류와 고리 모양으로 원하는 키링을 만들어 보세요.',
            image: 'md-keyring',
            link: '/store/acrylic-keyring/intro/defaults'
          },
          {
            title: '핀 버튼',
            description: '뒷면에 안전핀이 있는 버튼으로<br/>패브릭 소재에 부착할 수 있어요.',
            image: 'md-pinbtn',
            link: '/store/pin-button/intro/defaults'
          },
          {
            title: '거울 버튼',
            description: '뒷면이 거울로 되어 있는 버튼으로<br/>원하는 디자인의 예쁜 거울을 완성할 수 있어요.',
            image: 'md-mirrorbtn',
            link: '/store/mirror-button/intro/defaults'
          },
          {
            title: '자석 버튼',
            description: '뒷면이 자석으로 되어 있는 버튼으로<br/>자석이 있는 면에 어디든 부착할 수 있어요.',
            image: 'md-magentbtn',
            link: '/store/magnet-button/intro/defaults'
          },
          {
            title: '스마트 톡',
            description: '스마트폰과 찰떡궁합, 손에 살짝만 걸치면 OK<br/>원하는 감성까지 더해보세요.',
            image: 'md-smarttok',
            link: '/store/smart-tok/intro/defaults'
          }
        ]
      },
      {
        title: '컵/텀블러',
        description: '컵/텀블러 상품을 선택해 보세요.',
        type: 'box white',
        children: [
          {
            title: '뉴 스택 글라스',
            description: '유니크한 디자인과 겹겹이 쌓을 수 있는 실용성도 함께!<br>소장 가치를 주는 굿즈로 제작해 보세요.',
            image: 'md-new-stack-glass',
            link: '/store/new-stack-glass/intro/defaults',
            icon: 'new-7070'
          },
          {
            title: '스트레이트 글라스',
            description: '베이직하고 견고한 강화유리 소재로 내구성은 물론<br/>인테리어에도 잘 어울려요.',
            image: 'md-straight-glass',
            link: '/store/straight-glass/intro/defaults',
            icon: 'new-7070'
          },
          {
            title: '반투명 리유저블컵',
            description: '음료 잔량을 확인할 수 있는 반투명 컬러로,<br/>감성을 더한 브랜드 굿즈를 제작 할 수 있어요.',
            image: 'md-trc',
            link: '/store/translucent-reusable-cup/intro/defaults',
            icon: 'new-7070'
          },
          {
            title: '리유저블컵',
            description: '그란데 사이즈로 용량도 넉넉하게,<br/>착한 가격으로 선물용으로도 넉넉하게 준비 할 수 있어요.',
            image: 'md-reusable-cup-v2',
            link: '/store/reusable-cup/intro/defaults'
          },
          {
            title: '에코 텀블러',
            description: '친환경 재생소재로 안전하게,<br/>파스텔톤의 4가지 색상으로 컬러감 있게 사용해요.',
            image: 'md-eco-tumbler',
            link: '/store/eco-tumbler/intro/defaults'
          },
        ]
      },
      {
        title: '문구',
        description: '문구 상품을 선택해 보세요.',
        type: 'box white',
        children: [
          {
            title: '라이트 볼펜',
            description: '합리적인 가격으로 부담없이 제작하여<br/>브랜드를 홍보해 보세요.',
            image: 'light-pen-v2',
            link: '/store/light-pen/intro/defaults',
            icon: 'new-7070'
          },
          {
            title: '친환경 볼펜',
            description: '친환경 소재 사용으로 안전하면서도,<br/>고급스러운 볼펜으로 내 브랜드의 가치를 전해보세요.',
            image: 'eco-pen',
            link: '/store/eco-pen/intro/defaults',
            icon: 'new-7070'
          },
          {
            title: '베이직 볼펜',
            description: '캐주얼함이 가득한 볼펜!<br/>특별함을 더해보세요.',
            image: 'md-basic-pen',
            link: '/store/basic-pen/intro/defaults',
          },
          {
            title: '스탠다드 볼펜',
            description: '누구나 좋아할 클래식한 볼펜!<br/>특별함을 더해보세요.',
            image: 'md-standard-pen',
            link: '/store/standard-pen/intro/defaults',
          },
          {
            title: '메모패드',
            description: '홍보 용도에 맞게 나만의 개성을 표현해 보세요.',
            image: 'md-memo-pad',
            link: '/store/memo-pad/intro/defaults'
          },
          {
            title: '노트패드',
            description: '다양하게 활용하여 브랜드를 홍보해 보세요.',
            image: 'md-note-pad',
            link: '/store/note-pad/intro/defaults'
          },
          {
            title: '투명PVC커버 다이어리',
            description: '자유롭게 디자인 가능한 다이어리에 브랜드를 담아보세요.',
            image: 'md-pvc-diary',
            link: '/store/pvc-diary/intro/defaults',
          },
          {
            title: '소프트커버 다이어리',
            description: '캐주얼한 디자인의 다이어리에 브랜드를 담아보세요.',
            image: 'md-soft-diary',
            link: '/store/soft-diary/intro/defaults',
          },
          {
            title: '하드커버 다이어리',
            description: '클래식한 디자인에 브랜드를 담아보세요.',
            image: 'md-hard-diary',
            link: '/store/hard-diary/intro/defaults',
          }
        ]
      },
    ]
  },

  PACKAGING: {
    description: '',
    image: 'kv-package',
    children: [
      {
        title: '상품',
        description: '상품을 선택해 보세요.',
        type: 'box packaging',
        centerItem:true,
        children: [
          {
            title: '봉투',
            description: '봉투 하나도 남다른 느낌<br/>중요할수록 특별하게 건네요.',
            image: 'package-envelope',
            link: '/store/envelope/intro/defaults'
          },
          {
            title: '쇼핑백',
            description: '걸어 다니는 우리 브랜드 홍보대사!<br/>어디서나 우리 브랜드를 알려요.',
            image: 'package-shoppingbag',
            link: '/store/shoppingbag/intro/defaults'
          }
        ]
      }
    ]
  },
	APPAREL: {
		description: '',
		image: 'kv-ss-apparel-25603800', //반팔
    // image: 'kv-fw-apparel-25603800', //긴팔
    //image: 'kv-new-ss-apparel-landing-visual-apparel',
		children: [
			{
				title: '상품'
			}
		]
	},
  FAIR: {
    description: '',
    image: 'kv-fw-apparel-25603800',
    //image: 'kv-ss-apparel-25603800',
    children: [
      {
        title: '상품'
      }
    ]
  }

};
