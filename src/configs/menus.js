/*
  tagName icon
  tagName: 'new',
  tagName: 'sale',

  children icon
  icon: 'new-3020'


 */
export const MENUS = [
	{
		name: '명함',
		path: '/store/business-card/overview',
    gaKey : 'business-card',
    tagName: null,
		children: [
			{ name: '사이즈', path: null, type: 'title' },
      { name: '표준사이즈', path: '/store/business-card/intro/basic', type: 'bullet', gaKey: 'basic' },
      { name: 'OPM사이즈', path: '/store/business-card/intro/opm', type: 'bullet', gaKey: 'opm' },
      { name: '정사각사이즈', path: '/store/business-card/intro/square', type: 'bullet', gaKey: 'square' },
      { name: '용지', path: null, type: 'title' },
      { name: '소프트', path: '/store/business-card/intro/soft', type: 'bullet', gaKey: 'soft' },
			{ name: '프리미엄 소프트', path: '/store/business-card/intro/premium_soft', type: 'bullet', gaKey: 'premium_soft'},
			{ name: '프리미엄 매트', path: '/store/business-card/intro/premium_matt', type: 'bullet', gaKey: 'premium_matt'},
			/*{ name: '스탠다드(삭제)', path: '/store/business-card/intro/standard', type: 'bullet', icon: 'new-3020'},*/
			{ name: '오리지널', path: '/store/business-card/intro/original', type: 'bullet', gaKey: 'original' },
			{ name: '럭스', path: '/store/business-card/intro/luxe', type: 'bullet', gaKey: 'luxe' },
			{ name: '리넨', path: '/store/business-card/intro/linen', type: 'bullet', gaKey: 'linen' },
			{ name: '펠트', path: '/store/business-card/intro/felt', type: 'bullet', gaKey: 'felt' },
			{ name: '펄', path: '/store/business-card/intro/pearl', type: 'bullet', gaKey: 'pearl' },
			{ name: '크라프트', path: '/store/business-card/intro/craft', type: 'bullet', gaKey: 'craft' },
			{ name: '투명', path: '/store/business-card/intro/transparency', type: 'bullet', gaKey: 'transparency' },
      { name: '매트블랙', path: '/store/business-card/intro/matt_black', type: 'bullet', gaKey: 'matt_black' },
      { name: '리사이클', path: '/store/business-card/intro/recycle', type: 'bullet', gaKey: 'recycle' },
			{ name: '효과', path: null, type: 'title' },
			{ name: '박', path: '/store/business-card/intro/foil_print', type: 'bullet', gaKey: 'foil_print' },
      { name: '형압', path: '/store/business-card/intro/pressure', type: 'bullet', gaKey: 'pressure' },
      { name: '스코딕스', path: '/store/business-card/intro/scodix', type: 'bullet', gaKey: 'scodix' },
		]
	},
	{
		name: '스티커',
		path: '/store/sticker/overview',
    gaKey: 'sticker',
    tagName: null,
		children: [
			{ name: '형태', path: null, type: 'title' },
			{ name: '낱장', path: '/store/sticker/intro/free-size', type: 'bullet', gaKey: 'free-size' },
			{ name: 'DIY', path: '/store/sticker/intro/diy', type: 'bullet', gaKey: 'diy' },
			{ name: '원형', path: '/store/sticker/intro/circle', type: 'bullet', gaKey: 'circle'},
			{ name: '정사각형', path: '/store/sticker/intro/square', type: 'bullet', gaKey: 'square' },
			{ name: '직사각형', path: '/store/sticker/intro/rectangle', type: 'bullet', gaKey: 'rectangle' },
			{ name: '와이드형', path: '/store/sticker/intro/wide', type: 'bullet', gaKey: 'wide' },
			/*{ name: 'A사이즈형', path: '/store/sticker/intro/a-size', type: 'bullet' },*/
      { name: '롤스티커', path: '/store/sticker/intro/roll', type: 'bullet', gaKey: 'roll' },
      { name: '컬러 데칼', path: '/store/color-decal/intro/defaults', type: 'bullet', gaKey: 'color-decal'},
      { name: '그래픽 데칼', path: '/store/graphic-decal/intro/defaults', type: 'bullet', gaKey: 'graphic-decal'},
			{ name: '용지', path: null, type: 'title' },
      { name: '스탠다드', path: '/store/sticker/intro/standard', type: 'bullet', gaKey: 'standard' },
      { name: '리무버블', path: '/store/sticker/intro/repp80', type: 'bullet', gaKey: 'repp80' },
      { name: '소프트', path: '/store/sticker/intro/soft2', type: 'bullet', gaKey: 'soft2'},
      { name: '매트', path: '/store/sticker/intro/matt', type: 'bullet', gaKey: 'matt'},
      { name: '투명', path: '/store/sticker/intro/transparency', type: 'bullet', gaKey: 'transparency' },
      { name: '홀로그램', path: '/store/sticker/intro/hologram', type: 'bullet', gaKey: 'hologram' },
			{ name: '크라프트', path: '/store/sticker/intro/craft', type: 'bullet', gaKey: 'craft' }
		]
	},
  {
    name: '어패럴',
    path: '/store/apparel/overview',
    tagName: 'upgrade',
    children: [
      { name: '상품', path: null, type: 'title' },
      { name: '반팔 티셔츠', path: '/store/apparel/overview?productGroupCode=701', type: 'bullet', gaKey: 'apparel' },
      { name: '긴팔 티셔츠', path: '/store/apparel/overview?productGroupCode=705', type: 'bullet', gaKey: 'apparel' },
      { name: '맨투맨/후드/집업', path: '/store/apparel/overview?productGroupCode=702', type: 'bullet', gaKey: 'apparel'  },
      { name: '바지', path: '/store/apparel/overview?productGroupCode=703', type: 'bullet', gaKey: 'apparel'   },
      { name: '에코백', path: '/store/apparel/overview?productGroupCode=704', type: 'bullet', gaKey: 'apparel' },
      { name: '파우치', path: '/store/apparel/overview?productGroupCode=706', type: 'bullet', gaKey: 'apparel' },
      { name: '원피스', path: '/store/apparel/overview?productGroupCode=707', type: 'bullet', gaKey: 'apparel' },
      { name: '성별', path: null, type: 'title' },
      { name: '여성', path: '/store/apparel/overview?genderCommonCode=537003', type: 'bullet', gaKey: 'apparel'  },
      { name: '남성', path: '/store/apparel/overview?genderCommonCode=537002', type: 'bullet', gaKey: 'apparel'  },
      { name: '유아동', path: '/store/apparel/overview?genderCommonCode=537004', type: 'bullet', gaKey: 'apparel'  },
      //{ path: '/store/apparel/intro', type: 'blank' }
    ]
  },
  {
    name: '배너/현수막',
    path: '/store/banner/overview',
    gaKey: 'banner',
    tagName: null,
    children: [
      { name: '현수막', path: '/store/placard-banner/intro/defaults', gaKey: 'placard-banner' },
      { name: '스탠다드 배너', path: '/store/standard-banner/intro/defaults', gaKey: 'standard-banner' },
      { name: '양면 배너', path: '/store/double-side-banner/intro/defaults', gaKey: 'double-side-banner' },
      { name: '롤업 배너', path: '/store/rollup-banner/intro/defaults', gaKey: 'rollup-banner' },
      { name: '미니 배너', path: '/store/mini-banner/intro/defaults', gaKey: 'mini-banner' }
    ]
  },
  {
    name: '사인/포스터',
    path: '/store/signs-posters/overview',
    gaKey: 'signs-posters',
    tagName: null,
    children: [
      { name: '포스터', path: '/store/poster/intro/defaults', gaKey: 'poster'},
      { name: '보드 사인', path: '/store/board-sign/intro/defaults', gaKey: 'board-sign'},
      { name: '아크릴 사인', path: '/store/acrylic-sign/intro/defaults', gaKey: 'acrylic-sign' },
      { name: '메탈 사인', path: '/store/metal-sign/intro/defaults', gaKey: 'metal-sign' },
      { name: '원목 사인', path: '/store/wooden-frame-sign/intro/defaults', gaKey: 'wooden-frame-sign' },
      //{ name: '윈도우 데칼', path: '/store/window-decal/intro/defaults' },
      { name: '테이블탑 사인', path: '/store/table-top-sign/intro/defaults', gaKey: 'table-top-sign' },
      { name: 'A 프레임 사인', path: '/store/a-frame-sign/intro/defaults', gaKey: 'a-frame-sign' },
      { name: '카 마그넷', path: '/store/car-magnet/intro/defaults', gaKey: 'car-magnet' }
    ]
  },
  {
    name: '홍보물',
    path: '/store/pr/overview',
    gaKey: 'pr',
    tagName: null,
    children: [
      { name: '전단', path: '/store/flyer/intro/defaults', gaKey: 'flyer' },
      { name: '브로슈어', path: '/store/brochure/intro/defaults', gaKey: 'brochure' },
      { name: '메뉴판', path: '/store/menu/intro/defaults', gaKey: 'menu' },
      { name: '포스트카드', path: '/store/post-card/intro/defaults', gaKey: 'post-card'  },
      { name: '쿠폰', path: '/store/coupon/intro/defaults', gaKey: 'coupon' },
    ]
  },
  {
    name: '봉투/쇼핑백',
    path: '/store/packaging/overview',
    gaKey: 'packing',
    tagName: null,
    children: [
      { name: '봉투', path: '/store/envelope/intro/defaults', gaKey: 'envelope' },
      { name: '쇼핑백', path: '/store/shoppingbag/intro/defaults', gaKey: 'shoppingBag' },
    ]
  },
  /*{
    name: '봉투',
    path: '/store/envelope/intro/defaults',
    gaKey: 'envelope',
    tagName: null,
    children: []
  },*/
  {
    name: 'MD',
    path: '/store/md/overview',
    gaKey: 'md',
    tagName: 'ice',
    children: [
      { name: '데코', path: null, type: 'title' },
      { name: '부채 🧊', path: '/store/fan/intro/defaults', type: 'bullet', gaKey: 'fan' },
      { name: '아크릴 키링', path: '/store/acrylic-keyring/intro/defaults', type: 'bullet', gaKey: 'acrylic-keyring' },
      { name: '핀 버튼', path: '/store/pin-button/intro/defaults', type: 'bullet', gaKey: 'pin-button' },
      { name: '거울버튼', path: '/store/mirror-button/intro/defaults', type: 'bullet', gaKey: 'mirror-button' },
      { name: '자석버튼', path: '/store/magnet-button/intro/defaults', type: 'bullet', gaKey: 'magnet-button' },
      { name: '스마트톡', path: '/store/smart-tok/intro/defaults', type: 'bullet', gaKey: 'smart-tok' },
      { name: '컵/텀블러', path: null, type: 'title' },
      { name: '뉴 스택 글라스', path: '/store/new-stack-glass/intro/defaults', type: 'bullet', gaKey: 'new-stack-glass', icon: 'new-1414' },
      { name: '스트레이트 글라스', path: '/store/straight-glass/intro/defaults', type: 'bullet', gaKey: 'straight-glass', icon: 'new-1414' },
      { name: '반투명 리유저블컵', path: '/store/translucent-reusable-cup/intro/defaults', type: 'bullet', gaKey: 'translucent-reusable-cup', icon: 'new-1414' },
      { name: '리유저블컵', path: '/store/reusable-cup/intro/defaults', type: 'bullet', gaKey: 'reusable-cup' },
      { name: '에코 텀블러', path: '/store/eco-tumbler/intro/defaults', type: 'bullet', gaKey: 'eco-tumbler' },
      { name: '문구', path: null, type: 'title' },
      { name: '라이트 볼펜', path: '/store/light-pen/intro/defaults', type: 'bullet', gaKey: 'light-pen'},
      { name: '친환경 볼펜', path: '/store/eco-pen/intro/defaults', type: 'bullet', gaKey: 'eco-pen'},
      { name: '베이직 볼펜', path: '/store/basic-pen/intro/defaults', type: 'bullet', gaKey: 'basic-pen'},
      { name: '스탠다드 볼펜', path: '/store/standard-pen/intro/defaults', type: 'bullet', gaKey: 'standard-pen' },
      { name: '메모패드', path: '/store/memo-pad/intro/defaults', type: 'bullet', gaKey: 'memo-pad' },
      { name: '노트패드', path: '/store/note-pad/intro/defaults', type: 'bullet', gaKey: 'note-pad' },
      { name: '투명PVC커버 다이어리', path: '/store/pvc-diary/intro/defaults', type: 'bullet', gaKey: 'pvc-diary' },
      { name: '하드커버 다이어리', path: '/store/hard-diary/intro/defaults', type: 'bullet', gaKey: 'hard-diary' },
      { name: '소프트커버 다이어리', path: '/store/soft-diary/intro/defaults', type: 'bullet', gaKey: 'soft-diary' },
    ]
  },
  {
    name: '카드',
    path: '/store/card/overview',
    gaKey: 'card',
    tagName: null,
    children: [
      { name: '형태', path: null, type: 'title' },
      { name: '플랫', path: '/store/card/intro/flat', type: 'bullet', gaKey: 'flat'},
      { name: '폴더', path: '/store/card/intro/folder', type: 'bullet', gaKey: 'folder'},
      { name: '사이즈', path: null, type: 'title' },
      { name: '미니', path: '/store/card/intro/70x98', type: 'bullet', gaKey: '70x98'},
      { name: '4 X 6', path: '/store/card/intro/4x6', type: 'bullet', gaKey: '4x6'},
      { name: '5 X 7', path: '/store/card/intro/5x7', type: 'bullet', gaKey: '5x7'},
      { name: '용지', path: null, type: 'title' },
      /*{ name: '스탠다드', path: '/store/card/intro/standard', type: 'bullet' },*/
      { name: '소프트', path: '/store/card/intro/soft', type: 'bullet', gaKey: 'soft'},
      { name: '프리미엄 소프트', path: '/store/card/intro/premium_soft', type: 'bullet', gaKey: 'premium_soft'},
      { name: '프리미엄 매트', path: '/store/card/intro/premium_matt', type: 'bullet', gaKey: 'premium_matt'},
      { name: '럭스', path: '/store/card/intro/luxe', type: 'bullet', gaKey: 'luxe' },
      { name: '효과', path: null, type: 'title' },
      { name: '투명 글로시', path: '/store/card/intro/glossy', type: 'bullet', gaKey: 'glossy'},
      { name: '골드', path: '/store/card/intro/gold', type: 'bullet', gaKey: 'gold'},
      { name: '실버', path: '/store/card/intro/silver', type: 'bullet', gaKey: 'silver'}
    ]
  },
  {
    name: '캘린더',
    path: '/store/calendar-desk/intro/defaults',
    gaKey: 'calendar-desk',
    // tagName: 'season',
    tagName: null,
    children: []
  },
	{
		name: '액세서리',
		path: '/store/accessory/overview',
    gaKey: 'accessory',
		tagName: null,
		children: [
			{ name: '가죽 명함 지갑', path: '/store/accessory/intro/leather-wallet', gaKey: 'leather-wallet' },
			{ name: '알루미늄 명함 케이스', path: '/store/accessory/intro/aluminium-case', gaKey: 'aluminium-case' },
			{ name: '자석 명함 케이스', path: '/store/accessory/intro/magnetic-case', gaKey: 'magnetic-case' },
			{ name: '무지 봉투', path: '/store/accessory/intro/envelope', gaKey: 'envelope' },
			{ name: '아크릴 홀더', path: '/store/accessory/intro/acrylic-holder', gaKey: 'acrylic-holder' },
			{ name: '거치대 및 부자재', path: '/store/accessory/intro/stand', gaKey: 'stand' },
			{ name: '이젤', path: '/store/accessory/intro/easel', gaKey: 'easel' },
      { name: '롤스티커 디스펜서', path: '/store/accessory/intro/dispenser', gaKey: 'dispenser' },
      { name: '무지 크라프트 쇼핑백', path: '/store/accessory/intro/plain-kraft-shopping-bag', gaKey: 'planKraftShoppingBag' },
      { name: 'PVC 펜 파우치', path: '/store/accessory/intro/pen-pouch', gaKey: 'pen-pouch'  },
      { name: 'PVC 슬라이드 지퍼백', path: '/store/accessory/intro/slide-zipperbag', gaKey: 'slide-zipperbag' },
      { name: '리유저블 스트로우', path: '/store/accessory/intro/reusable-straw', gaKey: 'reusable-straw'  },
		]
	}
];
