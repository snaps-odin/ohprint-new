

export const CARD = {
	COMMON: {
		option: {
			SOFT: {
				thumbnail: 'detail-paper-soft',
				title: '소프트',
				description: '깨끗하고 밝은 느낌을 가진 <br/>' +
					'백색용지로 대중적으로 가장 많이 <br/>' +
					'사용해요.',
				attentions: [
					'용지 무게 : 250gsm'
				]
			},

			SUNSHINE300: {
				thumbnail: 'detail-paper-premiumsoft',
				title: '프리미엄 소프트',
				description: '자연스러운 광택과 깨끗함을<br/>'+
				'느낄 수있는 용지로 선명한<br/>'+
				'색재현성과 내구성이 우수합니다.',
				attentions: [
					'용지 무게 : 300gsm'
				]
			},

			BANNUBO320: {
				thumbnail: 'detail-paper-premiummat',
				title: '프리미엄 매트',
				description: '부드럽고 따뜻한 느낌의 용지로 <br/>' +
					'깊이 있는 질감과 인쇄로<br/>' +
					'고급스러움을 느껴 보세요.',
				attentions: [
					'용지 무게 : 320gsm'
				]
			},

			CARD_FLAT: {
				thumbnail: 'detail-size-flatcard',
				title: '플랫',
				description: '낱장 카드 형태로<br/>간략한 내용을 담아 보세요.'
			},
			CARD_FOLDER: {
				thumbnail: 'detail-size-foldercard',
				title: '폴더',
				description: '접이식 카드 형태로<br/>많은 내용을 담아 보세요.'
			},
			CARD_FLAT_70X98: {
				thumbnail: 'detail-size-flatcard-mini',
				title: '미니',
				attentions: [
					'70mm x 98mm'
				]
			},
			CARD_FLAT_64: {
				thumbnail: 'detail-size-flatcard-4-x-6',
				title: '4 x 6',
				attentions: [
					'102mm x 152mm'
				]
			},
			CARD_FLAT_75: {
				thumbnail: 'detail-size-flatcard-5-x-7',
				title: '5 x 7',
				attentions: [
					'127mm x 178mm'
				]
			},
			CARD_FOLDER_70X98: {
				thumbnail: 'detail-size-foldercard-mini',
				title: '미니',
				attentions: [
					'접힌 사이즈 : 70mm x 98mm',
					'펼친 사이즈 : 140mm x 98mm'
				]
			},
			CARD_FOLDER_64: {
				thumbnail: 'detail-size-foldercard-4-x-6',
				title: '4 x 6',
				attentions: [
					'접힌 사이즈 : 102mm x 152mm',
					'펼친 사이즈 : 204mm x 152mm'
				]
			},
			CARD_FOLDER_75: {
				thumbnail: 'detail-size-foldercard-5-x-7',
				title: '5 x 7',
				attentions: [
					'접힌 사이즈 : 127mm x 178mm',
					'펼친 사이즈 : 254mm x 178mm'
				]
			},
			STANDARD: {
				thumbnail: 'detail-paper-standard',
				title: '스탠다드',
				description: '적당한 두께와 우수한 색상<br/>표현으로 가격 대비 높은 완성도를</br>경험해 보세요.',
				attentions: [
					'용지 무게 : 230gsm',
					'앞면 실크 코팅',
					`3가지 효과 적용 가능 <br/>(투명 글로시, 골드, 실버)`
				]
			},
			PREMIUM: {
				thumbnail: 'detail-paper-original',
				title: '오리지널',
				description: '실크 코팅되어 매끈한 감촉과<br/>탄탄함을 느낄 수 있는 우리만의<br/>스페셜한 용지입니다.',
				attentions: [
					'용지 무게 : 352gsm',
					'앞면 실크 코팅',
					`3가지 효과 적용 가능 <br/>(투명 글로시, 골드, 실버)`
				]
			},
			LUXE: {
				thumbnail: 'detail-paper-lux',
				title: '럭스',
				description: '차원이 다른 재질과 압도적인<br/>두께감으로 강한 인상을 남겨 보세요.',
				attentions: [
					'용지 무게 : 734gsm',
					`옆면에 4가지 컬러 제공<br/> (블루, 민트, 오렌지, 레드)`
				]
			},
			GLOSSY: {
				thumbnail: 'detail-effect-glossy',
				title: '투명 글로시',
				description: '투명하게 올록볼록 반짝이는 효과로<br/>매력적인 느낌을 연출해 보세요.'
			},
			GOLD: {
				thumbnail: 'detail-effect-gold',
				title: '골드',
				description: '올록볼록 반짝이는 골드 효과로<br/>고급스러움을 더해 보세요.'
			},
			SILVER: {
				thumbnail: 'detail-effect-silver',
				title: '실버',
				description: '올록볼록 반짝이는 실버 효과로<br/>특별함을 전달해 보세요.'
			},
			NONE: {
				thumbnail: 'detail-effect-none',
				title: '효과 없음',
				description: '효과 적용이 안된 오리지널<br/>기본 용지입니다.'
			},
			BLACK: {
				thumbnail: 'detail-lux-black',
				title: '블랙'
			},
			BLUE: {
				thumbnail: 'detail-lux-blue',
				title: '블루'
			},
			MINT: {
				thumbnail: 'detail-lux-mint',
				title: '민트'
			},
			ORANGE: {
				thumbnail: 'detail-lux-orange',
				title: '오렌지'
			},
			RED: {
				thumbnail: 'detail-lux-red',
				title: '레드'
			}
		},
		variations: [
			//start

			//flat
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'SOFT' ],
				image: 'card-flat-mini-soft'
			},

			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'SUNSHINE300', 'GLOSSY' ],
				image: 'card-flat-mini-premium-soft-glossy'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'SUNSHINE300', 'GOLD' ],
				image: 'card-flat-mini-premium-soft-gold'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'SUNSHINE300', 'SILVER' ],
				image: 'card-flat-mini-premium-soft-silver'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'SUNSHINE300', 'NONE' ],
				image: 'card-flat-mini-premium-soft-none'
			},

			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'BANNUBO320', 'GLOSSY' ],
				image: 'card-flat-mini-premium-matte-glossy'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'BANNUBO320', 'GOLD' ],
				image: 'card-flat-mini-premium-matte-gold'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'BANNUBO320', 'SILVER' ],
				image: 'card-flat-mini-premium-matte-silver'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'BANNUBO320', 'NONE' ],
				image: 'card-flat-mini-premium-matte-none'
			},

			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'SOFT' ],
				image: 'card-flat-4-x-6-soft'
			},

			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'SUNSHINE300', 'GLOSSY' ],
				image: 'card-flat-4-x-6-premium-soft-glossy'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'SUNSHINE300', 'GOLD' ],
				image: 'card-flat-4-x-6-premium-soft-gold'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'SUNSHINE300', 'SILVER' ],
				image: 'card-flat-4-x-6-premium-soft-silver'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'SUNSHINE300', 'NONE' ],
				image: 'card-flat-4-x-6-premium-soft-none'
			},

			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'BANNUBO320', 'GLOSSY' ],
				image: 'card-flat-4-x-6-premium-matte-glossy'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'BANNUBO320', 'GOLD' ],
				image: 'card-flat-4-x-6-premium-matte-gold'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'BANNUBO320', 'SILVER' ],
				image: 'card-flat-4-x-6-premium-matte-silver'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'BANNUBO320', 'NONE' ],
				image: 'card-flat-4-x-6-premium-matte-none'
			},

			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'SOFT' ],
				image: 'card-flat-5-x-7-soft'
			},

			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'SUNSHINE300', 'GLOSSY' ],
				image: 'card-flat-5-x-7-premium-soft-glossy'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'SUNSHINE300', 'GOLD' ],
				image: 'card-flat-5-x-7-premium-soft-gold'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'SUNSHINE300', 'SILVER' ],
				image: 'card-flat-5-x-7-premium-soft-silver'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'SUNSHINE300', 'NONE' ],
				image: 'card-flat-5-x-7-premium-soft-none'
			},

			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'BANNUBO320', 'GLOSSY' ],
				image: 'card-flat-5-x-7-premium-matte-glossy'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'BANNUBO320', 'GOLD' ],
				image: 'card-flat-5-x-7-premium-matte-gold'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'BANNUBO320', 'SILVER' ],
				image: 'card-flat-5-x-7-premium-matte-silver'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'BANNUBO320', 'NONE' ],
				image: 'card-flat-5-x-7-premium-matte-none'
			},

			//folder
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_70X98', 'SOFT' ],
				image: 'card-folder-mini-soft'
			},

			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_70X98', 'SUNSHINE300', 'GLOSSY' ],
				image: 'card-folder-mini-premium-soft-glossy'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_70X98', 'SUNSHINE300', 'GOLD' ],
				image: 'card-folder-mini-premium-soft-gold'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_70X98', 'SUNSHINE300', 'SILVER' ],
				image: 'card-folder-mini-premium-soft-silver'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_70X98', 'SUNSHINE300', 'NONE' ],
				image: 'card-folder-mini-premium-soft-none'
			},

			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_70X98', 'BANNUBO320', 'GLOSSY' ],
				image: 'card-folder-mini-premium-matte-glossy'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_70X98', 'BANNUBO320', 'GOLD' ],
				image: 'card-folder-mini-premium-matte-gold'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_70X98', 'BANNUBO320', 'SILVER' ],
				image: 'card-folder-mini-premium-matte-silver'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_70X98', 'BANNUBO320', 'NONE' ],
				image: 'card-folder-mini-premium-matte-none'
			},

			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_64', 'SOFT' ],
				image: 'card-folder-4-x-6-soft'
			},

			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_64', 'SUNSHINE300', 'GLOSSY' ],
				image: 'card-folder-4-x-6-premium-soft-glossy'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_64', 'SUNSHINE300', 'GOLD' ],
				image: 'card-folder-4-x-6-premium-soft-gold'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_64', 'SUNSHINE300', 'SILVER' ],
				image: 'card-folder-4-x-6-premium-soft-silver'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_64', 'SUNSHINE300', 'NONE' ],
				image: 'card-folder-4-x-6-premium-soft-none'
			},

			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_64', 'BANNUBO320', 'GLOSSY' ],
				image: 'card-folder-4-x-6-premium-matte-glossy'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_64', 'BANNUBO320', 'GOLD' ],
				image: 'card-folder-4-x-6-premium-matte-gold'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_64', 'BANNUBO320', 'SILVER' ],
				image: 'card-folder-4-x-6-premium-matte-silver'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_64', 'BANNUBO320', 'NONE' ],
				image: 'card-folder-4-x-6-premium-matte-none'
			},

			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_75', 'SOFT' ],
				image: 'card-folder-5-x-7-soft'
			},

			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_75', 'SUNSHINE300', 'GLOSSY' ],
				image: 'card-folder-5-x-7-premium-soft-glossy'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_75', 'SUNSHINE300', 'GOLD' ],
				image: 'card-folder-5-x-7-premium-soft-gold'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_75', 'SUNSHINE300', 'SILVER' ],
				image: 'card-folder-5-x-7-premium-soft-silver'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_75', 'SUNSHINE300', 'NONE' ],
				image: 'card-folder-5-x-7-premium-soft-none'
			},

			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_75', 'BANNUBO320', 'GLOSSY' ],
				image: 'card-folder-5-x-7-premium-matte-glossy'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_75', 'BANNUBO320', 'GOLD' ],
				image: 'card-folder-5-x-7-premium-matte-gold'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_75', 'BANNUBO320', 'SILVER' ],
				image: 'card-folder-5-x-7-premium-matte-silver'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_75', 'BANNUBO320', 'NONE' ],
				image: 'card-folder-5-x-7-premium-matte-none'
			},


			//end

			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'STANDARD', 'GLOSSY' ],
				image: 'card-product-01-flat-mini-standard-glossy'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'STANDARD', 'GOLD' ],
				image: 'card-product-01-flat-mini-standard-gold'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'STANDARD', 'SILVER' ],
				image: 'card-product-01-flat-mini-standard-silver'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'STANDARD', 'NONE' ],
				image: 'card-product-01-flat-mini-standard-normal'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'PREMIUM', 'GLOSSY' ],
				image: 'card-product-01-flat-mini-glossy'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'PREMIUM', 'GOLD' ],
				image: 'card-product-01-flat-mini-gold'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'PREMIUM', 'SILVER' ],
				image: 'card-product-01-flat-mini-silver'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'PREMIUM', 'NONE' ],
				image: 'card-product-01-flat-mini-normal'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'LUXE', 'BLACK' ],
				image: 'card-product-01-flat-mini-luxe-black'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'LUXE', 'BLUE' ],
				image: 'card-product-01-flat-mini-luxe-blue'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'LUXE', 'MINT' ],
				image: 'card-product-01-flat-mini-luxe-mint'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'LUXE', 'ORANGE' ],
				image: 'card-product-01-flat-mini-luxe-orange'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_70X98', 'LUXE', 'RED' ],
				image: 'card-product-01-flat-mini-luxe-red'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'STANDARD', 'GLOSSY' ],
				image: 'card-product-standard-flat-46-glossy'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'STANDARD', 'GOLD' ],
				image: 'card-product-standard-flat-46-gold'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'STANDARD', 'SILVER' ],
				image: 'card-product-standard-flat-46-silver'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'STANDARD', 'NONE' ],
				image: 'card-product-standard-flat-46-normal'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'PREMIUM', 'GLOSSY' ],
				image: 'card-product-01-flat-46-glossy'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'PREMIUM', 'GOLD' ],
				image: 'card-product-01-flat-46-gold'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'PREMIUM', 'SILVER' ],
				image: 'card-product-01-flat-46-silver'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'PREMIUM', 'NONE' ],
				image: 'card-product-01-flat-46-none'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'LUXE', 'BLACK' ],
				image: 'card-product-01-flat-46-luxe-black'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'LUXE', 'BLUE' ],
				image: 'card-product-01-flat-46-luxe-blue'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'LUXE', 'MINT' ],
				image: 'card-product-01-flat-46-luxe-mint'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'LUXE', 'ORANGE' ],
				image: 'card-product-01-flat-46-luxe-orange'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_64', 'LUXE', 'RED' ],
				image: 'card-product-01-flat-46-luxe-red'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'STANDARD', 'GLOSSY' ],
				image: 'card-product-standard-flat-57-glossy'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'STANDARD', 'GOLD' ],
				image: 'card-product-standard-flat-57-gold'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'STANDARD', 'SILVER' ],
				image: 'card-product-standard-flat-57-silver'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'STANDARD', 'NONE' ],
				image: 'card-product-standard-flat-57-normal'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'PREMIUM', 'GLOSSY' ],
				image: 'card-product-01-flat-57-glossy'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'PREMIUM', 'GOLD' ],
				image: 'card-product-01-flat-57-gold'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'PREMIUM', 'SILVER' ],
				image: 'card-product-01-flat-57-silver'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'PREMIUM', 'NONE' ],
				image: 'card-product-01-flat-57-none'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'LUXE', 'BLACK' ],
				image: 'card-product-01-flat-57-luxe-black'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'LUXE', 'BLUE' ],
				image: 'card-product-01-flat-57-luxe-blue'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'LUXE', 'MINT' ],
				image: 'card-product-01-flat-57-luxe-mint'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'LUXE', 'ORANGE' ],
				image: 'card-product-01-flat-57-luxe-orange'
			},
			{
				attributes: [ 'CARD_FLAT', 'CARD_FLAT_75', 'LUXE', 'RED' ],
				image: 'card-product-01-flat-57-luxe-red'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_70X98', 'STANDARD', 'GLOSSY' ],
				image: 'card-product-02-folder-mini-standard-glossy'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_70X98', 'STANDARD', 'GOLD' ],
				image: 'card-product-02-folder-mini-standard-gold'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_70X98', 'STANDARD', 'SILVER' ],
				image: 'card-product-02-folder-mini-standard-silver'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_70X98', 'STANDARD', 'NONE' ],
				image: 'card-product-02-folder-mini-standard-normal'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_70X98', 'PREMIUM', 'GLOSSY' ],
				image: 'card-product-02-folder-mini-glossy'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_70X98', 'PREMIUM', 'GOLD' ],
				image: 'card-product-02-folder-mini-gold'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_70X98', 'PREMIUM', 'SILVER' ],
				image: 'card-product-02-folder-mini-silver'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_70X98', 'PREMIUM', 'NONE' ],
				image: 'card-product-02-folder-mini-normal'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_64', 'STANDARD', 'GLOSSY' ],
				image: 'card-product-standard-folder-46-glossy'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_64', 'STANDARD', 'GOLD' ],
				image: 'card-product-standard-folder-46-gold'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_64', 'STANDARD', 'SILVER' ],
				image: 'card-product-standard-folder-46-silver'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_64', 'STANDARD', 'NONE' ],
				image: 'card-product-standard-folder-46-normal'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_64', 'PREMIUM', 'GLOSSY' ],
				image: 'card-product-02-folder-46-glossy'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_64', 'PREMIUM', 'GOLD' ],
				image: 'card-product-02-folder-46-gold'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_64', 'PREMIUM', 'SILVER' ],
				image: 'card-product-02-folder-46-silver'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_64', 'PREMIUM', 'NONE' ],
				image: 'card-product-02-folder-46-none'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_75', 'STANDARD', 'GLOSSY' ],
				image: 'card-product-standard-folder-57-glossy'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_75', 'STANDARD', 'GOLD' ],
				image: 'card-product-standard-folder-57-gold'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_75', 'STANDARD', 'SILVER' ],
				image: 'card-product-standard-folder-57-silver'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_75', 'STANDARD', 'NONE' ],
				image: 'card-product-standard-folder-57-normal'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_75', 'PREMIUM', 'GLOSSY' ],
				image: 'card-product-02-folder-57-glossy'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_75', 'PREMIUM', 'GOLD' ],
				image: 'card-product-02-folder-57-gold'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_75', 'PREMIUM', 'SILVER' ],
				image: 'card-product-02-folder-57-silver'
			},
			{
				attributes: [ 'CARD_FOLDER', 'CARD_FOLDER_75', 'PREMIUM', 'NONE' ],
				image: 'card-product-02-folder-57-none'
			}
		],
		showcases:{
			//start
			//soft
			PAPER_TITLE: {
				title: '다양한 용지를 확인해 보세요.',
				className: 'bg-white vertical-border'
			},
			SOFT_PAPER:{
				deco: 'num-01-5030',
				title: '소프트 용지',
				descriptions: [ '가격대비 우수한 품질로 부담 없이 사용할 수 있는 용지에요.<br/>용지 무게 : 250gsm' ],
				className: 'bg-white col-2',
				children: [
					{
						image: 'bizcard-info-soft-01',
						attentions: [
							'차분한 느낌의 용지로 은은한 광택과 부드러운 표면감을 가지고 있어요.'
						]
					},
					{
						image: 'card-info-soft-02',
						attentions: [
							'적당한 두께와 우수한 색상표현으로 어떤 디자인도 잘 어울려요.'
						]
					}
				]
			},

			PREMIUM_SOFT_PAPER: {
				deco: 'num-02-5030',
				title: '프리미엄 소프트 용지',
				descriptions: [ '자연스러운 광택과 높은 백색도로 깨끗함을 느껴보세요.<br/>용지 무게 : 300gsm' ],
				className: 'bg-gray col-2',
				children: [
					{
						image: 'bizcard-info-premiumsoft-01',
						attentions: [
							'순백색의 고급 켄트지로 자연스러운 광택과 맑고 깨끗함을 느낄 수 있어요.',
							'매끄럽고 부드러운 질감과 우수한 내구성을 가지고 있어요. '
						]
					},
					{
						image: 'card-info-premiumsoft-02',
						attentions: [
							'망점 퍼짐을 최대한 억제하여 잉크 뭉침이 적고 세밀하고 선명하게 표현돼요.',
							'사진이나 이미지 재현에 탁월해요.'
						]
					}
				]
			},

			PREMIUM_MAT_PAPER: {
				deco: 'num-03-5030',
				title: '프리미엄 매트 용지',
				descriptions: [ '부드럽고 따뜻한 느낌으로 편안함을 전달해 보세요.<br/>용지 무게 : 320gsm' ],
				className: 'bg-white col-2',
				children: [
					{
						image: 'bizcard-info-premiummat-01',
						attentions: [
							'잔잔한 미색이 도는 광택이 없는 고급 용지에요.',
							'부드러운 질감과 깊이 있는 인쇄감이 매력적이에요.'
						]
					},
					{
						image: 'card-info-premiummat-02',
						attentions: [
							'특수 코팅 처리로 최고의 인쇄효과를 내요.',
							'따뜻하고 차분한 느낌을 주는 디자인에 잘 어울려요.'
						]
					}
				]
			},

			PREMIUM_LUX_PAPER: {
				deco: 'num-04-5030',
				title: '럭스 용지',
				descriptions: [ '<em class="blue">더욱 강력한 품질의 용지로 업그레이드 되었습니다.</em><br/>차원이 다른 두께 감으로 어디에도 없을 유니크 함을 가지고 있어요.<br/>용지 무게 : 734gsm' ],
				className: 'bg-gray col-2',
				children: [
					{
						image: 'bizcard-info-luxe-01',
						attentions: [
							'고급 용지를 여러 장 겹쳐 압축 가공한 특수 용지에요.',
							'부드러운 질감과 특별한 옆면 색상으로 고급스러움이 느껴져요.'
						]
					},
					{
						image: 'card-info-luxe-02',
						attentions: [
							'디자인과 다양한 옆면 색상의 조화로 색다른 느낌을 표현할 수 있어요.',
							'용지 위 펜으로 써도 잘 번지지 않아, 메시지 카드로 사용하기에도 좋아요.'
						]
					}
				]
			},

			OFFSET_LUXE_COLOR: {
				title: '다양한 옆면 색상을 확인해 보세요.',
				className: 'bg-gray col-5 border-top',
				children: [
					{
						image: 'bizcard-info-luxe-color-01',
						title: '블랙'
					},
					{
						image: 'bizcard-info-luxe-color-02',
						title: '블루'
					},
					{
						image: 'bizcard-info-luxe-color-03',
						title: '민트'
					},
					{
						image: 'bizcard-info-luxe-color-04',
						title: '오렌지'
					},
					{
						image: 'bizcard-info-luxe-color-05',
						title: '레드'
					}
				]
			},

			ATMOSPHERE_EFFECT: {
				title: '분위기에 맞는 효과를 선택하세요.',
				descriptions: [ '<em class="blue">프리미엄 소프트, 프리미엄 매트</em> 용지에서 선택 가능해요.<br/>효과 적용 시, 양면 코팅이 이뤄져 용지 본연의 특성이 달라질 수 있어요.' ],
				className: 'bg-white col-3 border-top',
				children: [
					{
						image: 'bizcard-info-original-effect-01',
						title: '투명 글로시'
					},
					{
						image: 'bizcard-info-original-effect-02',
						title: '골드'
					},
					{
						image: 'bizcard-info-original-effect-03',
						title: '실버'
					}
				]
			},

			PAPER_TEXTURE: {
				title: '용지의 질감을 확인해 보세요.',
				className: 'bg-gray col-4',
				children: [
					{
						image: 'paper-info-texture-soft',
						title: '소프트'
					},
					{
						image: 'paper-info-texture-premiumsoft',
						title: '프리미엄 소프트'
					},
					{
						image: 'paper-info-texture-premiummat',
						title: '프리미엄 매트'
					},
					{
						image: 'paper-info-texture-luxe',
						title: '럭스'
					}
				]
			},

			NEW_GSM: {
				title: '용지 두께를 확인해 보세요.',
				descriptions: [ '보통 평량(gsm)이 클수록 용지의 무게가 더 나가는 것으로,<br/>용지 특성에 따라 두께나 탄성은 다를 수 있어요.<br/>(용지 50매를 쌓은 높이예요.)' ],
				className: 'bg-white col-4',
				children: [
					{
						image: 'gsm-basic-80',
						title: '일반적인 사무용지',
						roundDescription: '80gsm'
					},
					{
						image: 'gsm-soft-250',
						title: '소프트',
						roundDescription: '250gsm'
					},
					{
						image: 'gsm-premiumsoft-300',
						title: '프리미엄 소프트',
						roundDescription: '300gsm'
					},
					{
						image: 'gsm-premiummat-320',
						title: '프리미엄 매트',
						roundDescription: '320gsm'
					},
					{
						image: 'bizcard-info-gsm-luxe',
						title: '럭스',
						roundDescription: '734gsm'
					}
				]
			},

			CARD_FOLDER:{
				title: '깔끔한 접지를 확인하세요.',
				className: 'bg-gray col-2',
				children: [
					{
						image: 'brochure-folder-01',
						title: '매끄럽고 깔끔하게 접히도록 오시 가공 후 접지 작업을 진행합니다.'
					},
					{
						image: 'brochure-folder-02',
						title: '직접 접지 마세요. 폴더 상품은 기본으로 모두 접어서 보내드려요.'
					}
				]
			},

			CARD_SIZE:{
				title: '필요한 사이즈를 확인하세요.',
				className: 'bg-white col-1',
				children: [
					{
						image: 'card-size'
					}
				]
			}

			//end
		},
	},


	CONTENTS: {
		FLAT: {
			title: '플랫 카드',
			attentions: [
				'낱장카드 형태로 간략한 내용을 담아보세요.',
				'초대장 및 인사, 축하 카드 등에 사용하기 좋아요.'
			],
			services:[
				'PAPER_TITLE','SOFT_PAPER','PREMIUM_SOFT_PAPER','PREMIUM_MAT_PAPER','PREMIUM_LUX_PAPER','OFFSET_LUXE_COLOR','ATMOSPHERE_EFFECT','PAPER_TEXTURE','NEW_GSM','CARD_SIZE'
			]
		},
		FOLDER: {
			title: '폴더 카드',
			attentions: [
				'접이식 카드 형태로 많은 내용을 담아보세요.',
				'초대장 및 인사, 축하 카드 등에 사용하기 좋아요.'
			],
			services:[
				'PAPER_TITLE','SOFT_PAPER','PREMIUM_SOFT_PAPER','PREMIUM_MAT_PAPER','PREMIUM_LUX_PAPER','OFFSET_LUXE_COLOR','ATMOSPHERE_EFFECT','PAPER_TEXTURE','NEW_GSM','CARD_FOLDER','CARD_SIZE'
			]
		},
		'70X98': {
			title: '미니 카드',
			attentions: [
				'한 손에 쏙 들어오는 아담한 사이즈로 간결한 문장을<br/>담아 감사의 인사를 전해보세요.'
			],
			services:[
				'PAPER_TITLE','SOFT_PAPER','PREMIUM_SOFT_PAPER','PREMIUM_MAT_PAPER','PREMIUM_LUX_PAPER','OFFSET_LUXE_COLOR','ATMOSPHERE_EFFECT','PAPER_TEXTURE','NEW_GSM','CARD_FOLDER','CARD_SIZE'
			]
		},
		'4X6': {
			title: '4 X 6 카드',
			attentions: [
				'가장 일반적인 사이즈로 소소한 안부, 축하 인사를<br/>전할 땐, 따뜻한 메세지로 마음을 표현해 보세요.'
			],
			services:[
				'PAPER_TITLE','SOFT_PAPER','PREMIUM_SOFT_PAPER','PREMIUM_MAT_PAPER','PREMIUM_LUX_PAPER','OFFSET_LUXE_COLOR','ATMOSPHERE_EFFECT','PAPER_TEXTURE','NEW_GSM','CARD_FOLDER','CARD_SIZE'
			]
		},
		'5X7': {
			title: '5 X 7 카드',
			attentions: [
				'편지만큼 가득 채울 수 있는 이야기를 담아<br/>특별한 감동을 전할 수 있어요.'
			],
			services:[
				'PAPER_TITLE','SOFT_PAPER','PREMIUM_SOFT_PAPER','PREMIUM_MAT_PAPER','PREMIUM_LUX_PAPER','OFFSET_LUXE_COLOR','ATMOSPHERE_EFFECT','PAPER_TEXTURE','NEW_GSM','CARD_FOLDER','CARD_SIZE'
			]
		},
		STANDARD: {
			title: '스탠다드 카드',
			attentions: [
				'적당한 두께와 우수한 색상 표현으로<br/>가격 대비 높은 완성도를 경험해 보세요.',
				'용지 무게: 230gsm'
			],
			services:[
				'PAPER_TITLE','SOFT_PAPER','PREMIUM_SOFT_PAPER','PREMIUM_MAT_PAPER','PREMIUM_LUX_PAPER','OFFSET_LUXE_COLOR','ATMOSPHERE_EFFECT','PAPER_TEXTURE','NEW_GSM','CARD_FOLDER','CARD_SIZE'
			]
		},

		SOFT: {
			title: '소프트 카드',
			attentions: [
				'적당한 두께의 대중적인 용지로<br/>가격대비 높은 완성도를 경험하세요.',
				'용지 무게: 250gsm'
			],
			services:[
				'PAPER_TITLE','SOFT_PAPER','PREMIUM_SOFT_PAPER','PREMIUM_MAT_PAPER','PREMIUM_LUX_PAPER','OFFSET_LUXE_COLOR','ATMOSPHERE_EFFECT','PAPER_TEXTURE','NEW_GSM','CARD_FOLDER','CARD_SIZE'
			]
		},
		PREMIUM_SOFT: {
			title: '프리미엄 소프트 카드',
			attentions: [
				'자연스러운 광택과 깨끗함을 느낄 수 있는 용지로<br/>선명한 색재현성과 내구성이 우수합니다.',
				'용지 무게: 300gsm'
			],
			services:[
				'PAPER_TITLE','SOFT_PAPER','PREMIUM_SOFT_PAPER','PREMIUM_MAT_PAPER','PREMIUM_LUX_PAPER','OFFSET_LUXE_COLOR','ATMOSPHERE_EFFECT','PAPER_TEXTURE','NEW_GSM','CARD_FOLDER','CARD_SIZE'
			]
		},
		PREMIUM_MATT: {
			title: '프리미엄 매트 카드',
			attentions: [
				'부드럽고 따뜻한 느낌의 용지로 깊이 있는 질감과<br/>인쇄로  고급스러움을 느껴 보세요.',
				'용지 무게: 320gsm'
			],
			services:[
				'PAPER_TITLE','SOFT_PAPER','PREMIUM_SOFT_PAPER','PREMIUM_MAT_PAPER','PREMIUM_LUX_PAPER','OFFSET_LUXE_COLOR','ATMOSPHERE_EFFECT','PAPER_TEXTURE','NEW_GSM','CARD_FOLDER','CARD_SIZE'
			]
		},
		ORIGINAL: {
			title: '오리지널 카드',
			attentions: [
				'실크 코팅되어 매끈한 감촉과 탄탄함을 느낄 수 있는 우<br/>리만의 스페셜한 용지입니다.',
				'용지 무게: 350gsm'
			],
			services:[
				'PAPER_TITLE','SOFT_PAPER','PREMIUM_SOFT_PAPER','PREMIUM_MAT_PAPER','PREMIUM_LUX_PAPER','OFFSET_LUXE_COLOR','ATMOSPHERE_EFFECT','PAPER_TEXTURE','NEW_GSM','CARD_FOLDER','CARD_SIZE'
			]
		},
		LUXE: {
			title: '럭스 카드',
			attentions: [
				'<em class="blue">더욱 강력한 품질의 럭스 용지로 업그레이드<br/>되었습니다.</em>',
				'차원이 다른 재질과 압도적인 두께감으로<br/>강한 인상을 남겨보세요.',
				'용지 무게: 734gsm',
				'플랫 카드 전용'
			],
			services:[
				'PAPER_TITLE','SOFT_PAPER','PREMIUM_SOFT_PAPER','PREMIUM_MAT_PAPER','PREMIUM_LUX_PAPER','OFFSET_LUXE_COLOR','ATMOSPHERE_EFFECT','PAPER_TEXTURE','NEW_GSM','CARD_FOLDER','CARD_SIZE'
			]
		},
		GLOSSY: {
			title: '투명 글로시 카드',
			attentions: [
				'투명하게 올록볼록 반짝이는 효과로<br/>매력적인 느낌을 연출해 보세요.',
				'용지 종류 : 프리미엄 소프트, 프리미엄 매트'
			],
			services:[
				'PAPER_TITLE','SOFT_PAPER','PREMIUM_SOFT_PAPER','PREMIUM_MAT_PAPER','PREMIUM_LUX_PAPER','OFFSET_LUXE_COLOR','ATMOSPHERE_EFFECT','PAPER_TEXTURE','NEW_GSM','CARD_FOLDER','CARD_SIZE'
			]
		},
		GOLD: {
			title: '골드 카드',
			attentions: [
				'올록볼록 반짝이는 골드 효과로<br/>고급스러움을 더해 보세요.',
				'용지 종류 : 프리미엄 소프트, 프리미엄 매트'
			],
			services:[
				'PAPER_TITLE','SOFT_PAPER','PREMIUM_SOFT_PAPER','PREMIUM_MAT_PAPER','PREMIUM_LUX_PAPER','OFFSET_LUXE_COLOR','ATMOSPHERE_EFFECT','PAPER_TEXTURE','NEW_GSM','CARD_FOLDER','CARD_SIZE'
			]
		},
		SILVER: {
			title: '실버 카드',
			attentions: [
				'올록볼록 반짝이는 실버 효과로<br/>특별함을 전달해 보세요.',
				'용지 종류 : 프리미엄 소프트, 프리미엄 매트'
			],
			services:[
				'PAPER_TITLE','SOFT_PAPER','PREMIUM_SOFT_PAPER','PREMIUM_MAT_PAPER','PREMIUM_LUX_PAPER','OFFSET_LUXE_COLOR','ATMOSPHERE_EFFECT','PAPER_TEXTURE','NEW_GSM','CARD_FOLDER','CARD_SIZE'
			]
		}
	}
};
