

export const FLYER = {
	COMMON: {
		option: {
			SOFT2: {
				thumbnail: 'detail-paper-soft',
				title: '소프트',
				description: '깨끗하고 밝은 느낌을 가진 <br/>' +
					'백색용지로 대중적으로 가장 많이 <br/>' +
					'사용해요.',
				attentions: [
					'용지 두께(무게) : 얇음(90gsm),<br/>보통(120gsm), 두꺼움(180gsm)'
				]
			},

			MATT: {
				thumbnail: 'detail-paper-mat',
				title: '매트',
				description: '내추럴한 느낌의 일반 복사 용지와<br/>'+
					'가장 비슷한 용지로 연필로도 필기가<br/>'+
					'가능해요.',
				attentions: [
					'용지 두께(무게) : 얇음(90gsm),<br/>보통(120gsm), 두꺼움(180gsm)'
				]
			},

			PREMIUM_SOFT: {
				thumbnail: 'detail-paper-premiumsoft',
				title: '프리미엄 소프트',
				description: '자연스러운 광택과 깨끗함을<br/>'+
					'느낄 수있는 용지로 선명한<br/>'+
					'색재현성과 내구성이 우수합니다.',
				attentions: [
					'용지 두께(무게) : 보통(160gsm),<br/>두꺼움(230gsm)'
				]
			},

			PREMIUM_MATT: {
				thumbnail: 'detail-paper-premiummat',
				title: '프리미엄 매트',
				description: '부드럽고 따뜻한 느낌의 용지로 <br/>' +
					'깊이 있는 질감과 인쇄로<br/>' +
					'고급스러움을 느껴 보세요.',
				attentions: [
					'용지 두께(무게) : 보통(151gsm),<br/>두꺼움(250gsm)'
				]
			},
			FLYER_46: {
				thumbnail: 'detail-size-flyer-4-x-6',
				title: '4 x 6',
				attentions: [
					'102mm x 152mm'
				]
			},
			FLYER_57: {
				thumbnail: 'detail-size-flyer-5-x-7',
				title: '5 x 7',
				attentions: [
					'127mm x 178mm'
				]
			},
			FLYER_SQUARE: {
				thumbnail: 'detail-size-flyer-square',
				title: 'Square',
				attentions: [
					'145mm x 145mm'
				]
			},
			FLYER_LONG: {
				thumbnail: 'detail-size-flyer-long',
				title: 'Long',
				attentions: [
					'99mm x 210mm'
				]
			},
			FLYER_A5: {
				thumbnail: 'detail-size-flyer-a-5',
				title: 'A5',
				attentions: [
					'148mm x 210mm'
				]
			},
			FLYER_A4: {
				thumbnail: 'detail-size-flyer-a-4',
				title: 'A4',
				attentions: [
					'210mm x 297mm'
				]
			},
			FLYER_GLOSSY: {
				thumbnail: 'detail-paper-light',
				title: '유광지',
				description: '탄탄한 내구성은 물론, 잔잔하게<br/>빛나는 광택으로 특별함을<br/>더해 보세요.',
				attentions: [
					`용지 무게 선택 가능<br/>(150gsm, 250gsm)`
				]
			},
			FLYER_MATTE: {
				thumbnail: 'detail-paper-matt',
				title: '무광지',
				description: '매트하면서 부드러운 질감으로<br/>고급스러움을 전달해 보세요.',
				attentions: [
					`용지 무게 선택 가능<br/>(150gsm, 220gsm)`
				]
			},
			FLYER_EFFECT: {
				thumbnail: 'detail-paper-premium',
				title: '효과지',
				description: '실크 코팅되어 매끈한 감촉과<br/>탄탄함을 느낄 수 있는 우리만의<br/>스페셜한 용지입니다.',
				attentions: [
					'양면 실크 코팅',
					`용지 무게 선택 가능<br/>(150gsm, 250gsm)`,
					`3가지 효과 적용 가능<br/>(투명 글로시, 골드, 실버)`
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
			}
		},
		variations: [
			//start
			{
				attributes: [ 'FLYER_46', 'SOFT2', 'THIN', 'NORMAL', 'THICK' ],
				image: 'ad-flyer-4-x-6-soft'
			},

			{
				attributes: [ 'FLYER_46', 'MATT', 'THIN', 'NORMAL', 'THICK' ],
				image: 'ad-flyer-4-x-6-matte'
			},

			{
				attributes: [ 'FLYER_46', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'NONE' ],
				image: 'ad-flyer-4-x-6-premium-soft-none'
			},

			{
				attributes: [ 'FLYER_46', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'GLOSSY' ],
				image: 'ad-flyer-4-x-6-premium-soft-glossy'
			},

			{
				attributes: [ 'FLYER_46', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'GOLD' ],
				image: 'ad-flyer-4-x-6-premium-soft-gold'
			},

			{
				attributes: [ 'FLYER_46', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'SILVER' ],
				image: 'ad-flyer-4-x-6-premium-soft-silver'
			},

			{
				attributes: [ 'FLYER_46', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'NONE' ],
				image: 'ad-flyer-4-x-6-premium-matte-none'
			},

			{
				attributes: [ 'FLYER_46', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'GLOSSY' ],
				image: 'ad-flyer-4-x-6-premium-matte-glossy'
			},

			{
				attributes: [ 'FLYER_46', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'GOLD' ],
				image: 'ad-flyer-4-x-6-premium-matte-gold'
			},

			{
				attributes: [ 'FLYER_46', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'SILVER' ],
				image: 'ad-flyer-4-x-6-premium-matte-silver'
			},

			{
				attributes: [ 'FLYER_57', 'SOFT2', 'THIN', 'NORMAL', 'THICK' ],
				image: 'ad-flyer-5-x-7-soft'
			},

			{
				attributes: [ 'FLYER_57', 'MATT', 'THIN', 'NORMAL', 'THICK' ],
				image: 'ad-flyer-5-x-7-matte'
			},

			{
				attributes: [ 'FLYER_57', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'NONE' ],
				image: 'ad-flyer-5-x-7-premium-soft-none'
			},

			{
				attributes: [ 'FLYER_57', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'GLOSSY' ],
				image: 'ad-flyer-5-x-7-premium-soft-glossy'
			},

			{
				attributes: [ 'FLYER_57', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'GOLD' ],
				image: 'ad-flyer-5-x-7-premium-soft-gold'
			},

			{
				attributes: [ 'FLYER_57', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'SILVER' ],
				image: 'ad-flyer-5-x-7-premium-soft-silver'
			},

			{
				attributes: [ 'FLYER_57', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'NONE' ],
				image: 'ad-flyer-5-x-7-premium-matte-none'
			},

			{
				attributes: [ 'FLYER_57', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'GLOSSY' ],
				image: 'ad-flyer-5-x-7-premium-matte-glossy'
			},

			{
				attributes: [ 'FLYER_57', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'GOLD' ],
				image: 'ad-flyer-5-x-7-premium-matte-gold'
			},

			{
				attributes: [ 'FLYER_57', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'SILVER' ],
				image: 'ad-flyer-5-x-7-premium-matte-silver'
			},

			{
				attributes: [ 'FLYER_SQUARE', 'SOFT2', 'THIN', 'NORMAL', 'THICK' ],
				image: 'ad-flyer-square-soft'
			},

			{
				attributes: [ 'FLYER_SQUARE', 'MATT', 'THIN', 'NORMAL', 'THICK' ],
				image: 'ad-flyer-square-matte'
			},

			{
				attributes: [ 'FLYER_SQUARE', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'NONE' ],
				image: 'ad-flyer-square-premium-soft-none'
			},

			{
				attributes: [ 'FLYER_SQUARE', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'GLOSSY' ],
				image: 'ad-flyer-square-premium-soft-glossy'
			},

			{
				attributes: [ 'FLYER_SQUARE', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'GOLD' ],
				image: 'ad-flyer-square-premium-soft-gold'
			},

			{
				attributes: [ 'FLYER_SQUARE', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'SILVER' ],
				image: 'ad-flyer-square-premium-soft-silver'
			},

			{
				attributes: [ 'FLYER_SQUARE', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'NONE' ],
				image: 'ad-flyer-square-premium-matte-none'
			},

			{
				attributes: [ 'FLYER_SQUARE', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'GLOSSY' ],
				image: 'ad-flyer-square-premium-matte-glossy'
			},

			{
				attributes: [ 'FLYER_SQUARE', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'GOLD' ],
				image: 'ad-flyer-square-premium-matte-gold'
			},

			{
				attributes: [ 'FLYER_SQUARE', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'SILVER' ],
				image: 'ad-flyer-square-premium-matte-silver'
			},

			{
				attributes: [ 'FLYER_LONG', 'SOFT2', 'THIN', 'NORMAL', 'THICK' ],
				image: 'ad-flyer-long-soft'
			},

			{
				attributes: [ 'FLYER_LONG', 'MATT', 'THIN', 'NORMAL', 'THICK' ],
				image: 'ad-flyer-long-matte'
			},

			{
				attributes: [ 'FLYER_LONG', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'NONE' ],
				image: 'ad-flyer-long-premium-soft-none'
			},

			{
				attributes: [ 'FLYER_LONG', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'GLOSSY' ],
				image: 'ad-flyer-long-premium-soft-glossy'
			},

			{
				attributes: [ 'FLYER_LONG', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'GOLD' ],
				image: 'ad-flyer-long-premium-soft-gold'
			},

			{
				attributes: [ 'FLYER_LONG', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'SILVER' ],
				image: 'ad-flyer-long-premium-soft-silver'
			},

			{
				attributes: [ 'FLYER_LONG', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'NONE' ],
				image: 'ad-flyer-long-premium-matte-none'
			},

			{
				attributes: [ 'FLYER_LONG', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'GLOSSY' ],
				image: 'ad-flyer-long-premium-matte-glossy'
			},

			{
				attributes: [ 'FLYER_LONG', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'GOLD' ],
				image: 'ad-flyer-long-premium-matte-gold'
			},

			{
				attributes: [ 'FLYER_LONG', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'SILVER' ],
				image: 'ad-flyer-long-premium-matte-silver'
			},

			{
				attributes: [ 'FLYER_A5', 'SOFT2', 'THIN', 'NORMAL', 'THICK' ],
				image: 'ad-flyer-a-5-soft'
			},

			{
				attributes: [ 'FLYER_A5', 'MATT', 'THIN', 'NORMAL', 'THICK' ],
				image: 'ad-flyer-a-5-matte'
			},

			{
				attributes: [ 'FLYER_A5', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'NONE' ],
				image: 'ad-flyer-a-5-premium-soft-none'
			},

			{
				attributes: [ 'FLYER_A5', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'GLOSSY' ],
				image: 'ad-flyer-a-5-premium-soft-glossy'
			},

			{
				attributes: [ 'FLYER_A5', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'GOLD' ],
				image: 'ad-flyer-a-5-premium-soft-gold'
			},

			{
				attributes: [ 'FLYER_A5', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'SILVER' ],
				image: 'ad-flyer-a-5-premium-soft-silver'
			},

			{
				attributes: [ 'FLYER_A5', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'NONE' ],
				image: 'ad-flyer-a-5-premium-matte-none'
			},

			{
				attributes: [ 'FLYER_A5', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'GLOSSY' ],
				image: 'ad-flyer-a-5-premium-matte-glossy'
			},

			{
				attributes: [ 'FLYER_A5', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'GOLD' ],
				image: 'ad-flyer-a-5-premium-matte-gold'
			},

			{
				attributes: [ 'FLYER_A5', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'SILVER' ],
				image: 'ad-flyer-a-5-premium-matte-silver'
			},


			{
				attributes: [ 'FLYER_A6', 'SOFT2', 'THIN', 'NORMAL', 'THICK' ],
				image: 'ad-flyer-a-6-soft'
			},

			{
				attributes: [ 'FLYER_A6', 'MATT', 'THIN', 'NORMAL', 'THICK' ],
				image: 'ad-flyer-a-6-matte'
			},

			{
				attributes: [ 'FLYER_A6', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'NONE' ],
				image: 'ad-flyer-a-6-premium-soft-none'
			},

			{
				attributes: [ 'FLYER_A6', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'GLOSSY' ],
				image: 'ad-flyer-a-6-premium-soft-glossy'
			},

			{
				attributes: [ 'FLYER_A6', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'GOLD' ],
				image: 'ad-flyer-a-6-premium-soft-gold'
			},

			{
				attributes: [ 'FLYER_A6', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'SILVER' ],
				image: 'ad-flyer-a-6-premium-soft-silver'
			},

			{
				attributes: [ 'FLYER_A6', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'NONE' ],
				image: 'ad-flyer-a-6-premium-matte-none'
			},

			{
				attributes: [ 'FLYER_A6', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'GLOSSY' ],
				image: 'ad-flyer-a-6-premium-matte-glossy'
			},

			{
				attributes: [ 'FLYER_A6', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'GOLD' ],
				image: 'ad-flyer-a-6-premium-matte-gold'
			},

			{
				attributes: [ 'FLYER_A6', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'SILVER' ],
				image: 'ad-flyer-a-6-premium-matte-silver'
			},
			{
				attributes: [ 'FLYER_A4', 'SOFT2', 'THIN', 'NORMAL', 'THICK' ],
				image: 'ad-flyer-a-4-soft'
			},

			{
				attributes: [ 'FLYER_A4', 'MATT', 'THIN', 'NORMAL', 'THICK' ],
				image: 'ad-flyer-a-4-matte'
			},

			{
				attributes: [ 'FLYER_A4', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'NONE' ],
				image: 'ad-flyer-a-4-premium-soft-none'
			},

			{
				attributes: [ 'FLYER_A4', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'GLOSSY' ],
				image: 'ad-flyer-a-4-premium-soft-glossy'
			},

			{
				attributes: [ 'FLYER_A4', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'GOLD' ],
				image: 'ad-flyer-a-4-premium-soft-gold'
			},

			{
				attributes: [ 'FLYER_A4', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'SILVER' ],
				image: 'ad-flyer-a-4-premium-soft-silver'
			},

			{
				attributes: [ 'FLYER_A4', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'NONE' ],
				image: 'ad-flyer-a-4-premium-matte-none'
			},

			{
				attributes: [ 'FLYER_A4', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'GLOSSY' ],
				image: 'ad-flyer-a-4-premium-matte-glossy'
			},

			{
				attributes: [ 'FLYER_A4', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'GOLD' ],
				image: 'ad-flyer-a-4-premium-matte-gold'
			},

			{
				attributes: [ 'FLYER_A4', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'SILVER' ],
				image: 'ad-flyer-a-4-premium-matte-silver'
			},
			//end
			{
				attributes: [ 'FLYER_46', 'FLYER_GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-4-x-6-glazedpaper'
			},
			{
				attributes: [ 'FLYER_46', 'FLYER_MATTE', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-4-x-6-mattpaper'
			},
			{
				attributes: [ 'FLYER_46', 'FLYER_EFFECT', 'GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-4-x-6-effectpaper-glossy'
			},
			{
				attributes: [ 'FLYER_46', 'FLYER_EFFECT', 'GOLD', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-4-x-6-effectpaper-gold'
			},
			{
				attributes: [ 'FLYER_46', 'FLYER_EFFECT', 'SILVER', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-4-x-6-effectpaper-silver'
			},
			{
				attributes: [ 'FLYER_57', 'FLYER_GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-5-x-7-glazedpaper'
			},
			{
				attributes: [ 'FLYER_57', 'FLYER_MATTE', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-5-x-7-mattpaper'
			},
			{
				attributes: [ 'FLYER_57', 'FLYER_EFFECT', 'GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-5-x-7-effectpaper-glossy'
			},
			{
				attributes: [ 'FLYER_57', 'FLYER_EFFECT', 'GOLD', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-5-x-7-effectpaper-gold'
			},
			{
				attributes: [ 'FLYER_57', 'FLYER_EFFECT', 'SILVER', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-5-x-7-effectpaper-silver'
			},
			{
				attributes: [ 'FLYER_SQUARE', 'FLYER_GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-square-glazedpaper'
			},
			{
				attributes: [ 'FLYER_SQUARE', 'FLYER_MATTE', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-square-mattpaper'
			},
			{
				attributes: [ 'FLYER_SQUARE', 'FLYER_EFFECT', 'GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-square-effectpaper-glossy'
			},
			{
				attributes: [ 'FLYER_SQUARE', 'FLYER_EFFECT', 'GOLD', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-square-effectpaper-gold'
			},
			{
				attributes: [ 'FLYER_SQUARE', 'FLYER_EFFECT', 'SILVER', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-square-effectpaper-silver'
			},
			{
				attributes: [ 'FLYER_LONG', 'FLYER_GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-long-glazedpaper'
			},
			{
				attributes: [ 'FLYER_LONG', 'FLYER_MATTE', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-long-mattpaper'
			},
			{
				attributes: [ 'FLYER_LONG', 'FLYER_EFFECT', 'GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-long-effectpaper-glossy'
			},
			{
				attributes: [ 'FLYER_LONG', 'FLYER_EFFECT', 'GOLD', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-long-effectpaper-gold'
			},
			{
				attributes: [ 'FLYER_LONG', 'FLYER_EFFECT', 'SILVER', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-long-effectpaper-silver'
			},
			{
				attributes: [ 'FLYER_A5', 'FLYER_GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-a-5-glazedpaper'
			},
			{
				attributes: [ 'FLYER_A5', 'FLYER_MATTE', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-a-5-mattpaper'
			},
			{
				attributes: [ 'FLYER_A5', 'FLYER_EFFECT', 'GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-a-5-effectpaper-glossy'
			},
			{
				attributes: [ 'FLYER_A5', 'FLYER_EFFECT', 'GOLD', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-a-5-effectpaper-gold'
			},
			{
				attributes: [ 'FLYER_A5', 'FLYER_EFFECT', 'SILVER', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-a-5-effectpaper-silver'
			},
			{
				attributes: [ 'FLYER_A4', 'FLYER_GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-a-4-glazedpaper'
			},
			{
				attributes: [ 'FLYER_A4', 'FLYER_MATTE', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-a-4-mattpaper'
			},
			{
				attributes: [ 'FLYER_A4', 'FLYER_EFFECT', 'GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-a-4-effectpaper-glossy'
			},
			{
				attributes: [ 'FLYER_A4', 'FLYER_EFFECT', 'GOLD', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-a-4-effectpaper-gold'
			},
			{
				attributes: [ 'FLYER_A4', 'FLYER_EFFECT', 'SILVER', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-flyer-a-4-effectpaper-silver'
			}
		],
		showcases: {
			//start
			PAPER_TITLE: {
				title: '다양한 용지를 확인해 보세요.',
				className: 'bg-white vertical-border'
			},
			SOFT_PAPER_FLYER_TITLE:{
				deco: 'num-01-5030',
				title: '소프트 용지',
				descriptions: [ '밝고 깨끗한 느낌을 가진 용지로 가격대비 우수한 품질을 가지고 있어요.<br/>용지 두께(무게) : 얇음(90gsm), 보통(120gsm), 두꺼움(180gsm)' ],
				className: 'bg-white col-2',
				children: [
					{
						image: 'ad-info-soft',
						attentions: [
							'약간의 광택이 있는 백색용지로 발색력이 좋아요. '
						]
					},
					{
						image: 'flyer-info-soft-02',
						attentions: [
							'일반적인 인쇄물에 가장 많이 쓰이는 용지로 경제적인 가격대를 가지고 있어요.',
							'밝고 가벼운 느낌을 줄 수 있어요.'
						]
					}
				]
			},

			PREMIUM_SOFT_PAPER_FLYER: {
				deco: 'num-02-5030',
				title: '매트 용지',
				descriptions: [ '종이 본연을 텍스쳐를 느낄 수 있는 내추럴함이 돋보이는 용지에요.<br/>용지 두께(무게) : 얇음(90gsm), 보통(120gsm), 두꺼움(180gsm)' ],
				className: 'bg-gray col-2',
				children: [
					{
						image: 'ad-info-matte',
						attentions: [
							'일반 복사용지와 비슷한 재질로 내추럴한 느낌이에요.'
						]
					},
					{
						image: 'flyer-info-mat-02',
						attentions: [
							'종이 위에 연필로도 필기가 가능해요.'
						]
					}
				]
			},

			PREMIUM_MAT_PAPER_FLYER: {
				deco: 'num-03-5030',
				title: '프리미엄 소프트 용지',
				descriptions: [ '자연스러운 광택과 높은 백색도로 깨끗함을 느껴보세요.<br/>용지 두께(무게) : 보통(160gsm), 두꺼움(230gsm)' ],
				className: 'bg-white col-2',
				children: [
					{
						image: 'ad-info-premiumsoft',
						attentions: [
							'순백색의 고급 켄트지로 자연스러운 광택과 맑고 깨끗함을 느낄 수 있어요.',
							'매끄럽고 부드러운 질감과 우수한 내구성을 가지고 있어요. '
						]
					},
					{
						image: 'flyer-info-premiumsoft-02',
						attentions: [
							'망점 퍼짐을 최대한 억제하여 잉크 뭉침이 적고 세밀하고 선명하게 표현돼요.',
							'사진이나 이미지 재현에 탁월해요.'
						]
					}
				]
			},

			PREMIUM_ORIGINAL_PAPER_FLYER: {
				deco: 'num-04-5030',
				title: '프리미엄 매트 용지',
				descriptions: [ '부드럽고 따뜻한 느낌으로 편안함을 전달해 보세요.<br/>용지 두께(무게) : 보통(151gsm), 두꺼움(250gsm)' ],
				className: 'bg-gray col-2',
				children: [
					{
						image: 'ad-info-premiummat',
						attentions: [
							'잔잔한 미색이 도는 광택이 없는 고급 용지에요.',
							'부드러운 질감과 깊이 있는 인쇄감이 매력적이에요.'
						]
					},
					{
						image: 'flyer-info-premiummat-02',
						attentions: [
							'특수 코팅 처리로 최고의 인쇄효과를 내요.',
							'따뜻하고 차분한 느낌을 주는 디자인에 잘 어울려요.'
						]
					}
				]
			},

			ATMOSPHERE_EFFECT: {
				title: '분위기에 맞는 효과를 선택하세요.',
				descriptions: [ '<em class="blue">프리미엄 소프트, 프리미엄 매트</em> 용지에서 선택 가능해요.<br/>효과 적용 시, 양면 코팅이 이뤄져 용지 본연의 특성이 달라질 수 있어요.' ],
				className: 'bg-white col-3',
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

			NEW_TEXTURE: {
				title: '용지의 질감을 확인해 보세요.',
				className: 'bg-gray col-4',
				children: [
					{
						image: 'paper-info-texture-soft',
						title: '소프트'
					},
					{
						image: 'paper-info-texture-mat',
						title: '매트'
					},
					{
						image: 'paper-info-texture-premiumsoft',
						title: '프리미엄 소프트'
					},
					{
						image: 'paper-info-texture-premiummat',
						title: '프리미엄 매트'
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
						image: 'gsm-soft-90',
						title: '소프트(얇음)',
						roundDescription: '90gsm'
					},
					{
						image: 'gsm-soft-120',
						title: '소프트(보통)',
						roundDescription: '120gsm'
					},
					{
						image: 'gsm-soft-180',
						title: '소프트(두꺼움)',
						roundDescription: '180gsm'
					},
					{
						image: 'gsm-mat-90',
						title: '매트(얇음)',
						roundDescription: '90gsm'
					},
					{
						image: 'gsm-mat-120',
						title: '매트(보통)',
						roundDescription: '120gsm'
					},
					{
						image: 'gsm-mat-180',
						title: '매트(두꺼움)',
						roundDescription: '180gsm'
					},
					{
						image: 'gsm-premiumsoft-160',
						title: '프리미엄 소프트(보통)',
						roundDescription: '160gsm'
					},
					{
						image: 'gsm-premiumsoft-230',
						title: '프리미엄 소프트(두꺼움)',
						roundDescription: '230gsm'
					},
					{
						image: 'gsm-premiummat-151',
						title: '프리미엄 매트(보통)',
						roundDescription: '151gsm'
					},
					{
						image: 'gsm-premiummat-250',
						title: '프리미엄 매트(두꺼움)',
						roundDescription: '250gsm'
					}
				]
			},

			PAPER_ELASTIC:{
				title: '용지 탄성을 확인해 보세요.',
				className: 'bg-white col-2 border-top',
				children: [
					{
						image: 'paper-gsm-150',
						title: '150gsm'
					},
					{
						image: 'paper-gsm-220',
						title: '250gsm'
					}
				]
			},

			PR_FOLDER:{
				title: '깔끔한 접지를 확인하세요.',
				className: 'bg-gray col-2',
				children: [
					{
						image: 'brochure-folder-01',
						descriptions: [ '매끄럽고 깔끔하게 접히도록 오시 가공 후 접지 작업을 진행합니다.']
					},
					{
						image: 'brochure-folder-02',
						descriptions: [ '직접 접지 마세요. 폴더 상품은 기본으로 모두 접어서 보내드려요.' ]
					}
				]
			},

			PR_PACKAGE: {
				title: '특별한 패키지에 예쁘게 담아 드립니다.',
				descriptions: [ '사이즈에 꼭 맞는 스탠딩 패키지를 함께 드려요. (100매~200매 구매 시 제공)' ],
				className: 'bg-gray col-2 border-top',
				children: [
					{
						image: 'brochure-package-01'
					},
					{
						image: 'brochure-package-02'
					}
				]
			},

			PR_SIZE: {
				title: '필요한 사이즈를 확인하세요.',
				className: 'bg-white col-1',
				children: [
					{
						image: 'flyer-size'
					}
				]
			},

			//end
		}
	},
	CONTENTS: {
		DEFAULTS: {
			title: '전단',
			attentions: [
				'단 한장으로 원하는 정보를 효과적으로 보여주세요.',
				'이벤트, 판촉 행사, 제품 출시 안내 등에 사용해 보세요.'
			],
			services: [
				'PAPER_TITLE','SOFT_PAPER_FLYER_TITLE','PREMIUM_SOFT_PAPER_FLYER','PREMIUM_MAT_PAPER_FLYER','PREMIUM_ORIGINAL_PAPER_FLYER','ATMOSPHERE_EFFECT','NEW_TEXTURE','NEW_GSM','PAPER_ELASTIC','PR_PACKAGE','PR_SIZE'
			]
		}
	}
};
