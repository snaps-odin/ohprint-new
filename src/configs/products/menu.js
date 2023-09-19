

export const MENU = {
	COMMON: {
		option: {
			SOFT2: {
				thumbnail: 'detail-paper-soft',
				title: '소프트',
				description: '깨끗하고 밝은 느낌을 가진 <br/>' +
					'백색용지로 대중적으로 가장 많이 <br/>' +
					'사용해요.',
				attentions: [
					'용지 무게 : 250gsm'
				]
			},

			PREMIUM_SOFT: {
				thumbnail: 'detail-paper-premiumsoft',
				title: '프리미엄 소프트',
				description: '자연스러운 광택과 깨끗함을<br/>'+
					'느낄 수있는 용지로 선명한<br/>'+
					'색재현성과 내구성이 우수합니다.',
				attentions: [
					'용지 두께(무게) : 두꺼움(230gsm),<br/>매우 두꺼움(300gsm)'
				]
			},

			PREMIUM_MATT: {
				thumbnail: 'detail-paper-premiummat',
				title: '프리미엄 매트',
				description: '부드럽고 따뜻한 느낌의 용지로 <br/>' +
					'깊이 있는 질감과 인쇄로<br/>' +
					'고급스러움을 느껴 보세요.',
				attentions: [
					'용지 두께(무게) : 두꺼움(250gsm),<br/>매우 두꺼움(320gsm)'
				]
			},
			MENU_FLAT: {
				thumbnail: 'detail-shape-menu-flat',
				title: '플랫'
			},
			MENU_BI_FOLD: {
				thumbnail: 'detail-shape-menu-folder',
				title: '폴더'
			},
			MENU_FLAT_A5: {
				thumbnail: 'detail-size-menu-flat-a-5',
				title: 'A5',
				attentions: [
					'148mm x 210mm'
				]
			},
			MENU_FLAT_A5PLUS: {
				thumbnail: 'detail-size-menu-flat-a-5-plus',
				title: 'A5+',
				attentions: [
					'178mm x 252mm'
				]
			},
			MENU_FLAT_A4: {
				thumbnail: 'detail-size-menu-flat-a-4',
				title: 'A4',
				attentions: [
					'210mm x 297mm'
				]
			},
			MENU_BI_FOLD_A5: {
				thumbnail: 'detail-size-menu-folder-a-5',
				title: 'A5',
				attentions: [
					'접힌 사이즈 : 148mm x 210mm',
					'펼친 사이즈 : 297mm x 210mm'
				]
			},
			MENU_BI_FOLD_A5PLUS: {
				thumbnail: 'detail-size-menu-folder-a-5-plus',
				title: 'A5+',
				attentions: [
					'접힌 사이즈 : 178mm x 252mm',
					'펼친 사이즈 : 356mm x 252mm'
				]
			},
			MENU_BI_FOLD_A4: {
				thumbnail: 'detail-size-menu-folder-a-4',
				title: 'A4',
				attentions: [
					'접힌 사이즈 : 210mm x 297mm',
					'펼친 사이즈 : 420mm x 297mm'
				]
			},
			MENU_GLOSSY: {
				thumbnail: 'detail-paper-light',
				title: '유광지',
				description: '탄탄한 내구성은 물론, 잔잔하게<br/>빛나는 광택으로 특별함을<br/>더해 보세요.',
				attentions: [
					`용지 무게 선택 가능<br/>(150gsm, 250gsm)`
				]
			},
			MENU_MATTE: {
				thumbnail: 'detail-paper-matt',
				title: '무광지',
				description: '매트하면서 부드러운 질감으로<br/>고급스러움을 전달해 보세요.',
				attentions: [
					`용지 무게 선택 가능<br/>(150gsm, 220gsm)`
				]
			},
			MENU_EFFECT: {
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
				attributes: [ 'MENU_FLAT', 'MENU_A5', 'SOFT2' ],
				image: 'ad-menu-flat-a-5-soft'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'GLOSSY' ],
				image: 'ad-menu-flat-a-5-premium-soft-glossy'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'GOLD' ],
				image: 'ad-menu-flat-a-5-premium-soft-gold'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'SILVER' ],
				image: 'ad-menu-flat-a-5-premium-soft-silver'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'NONE' ],
				image: 'ad-menu-flat-a-5-premium-soft-none'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'GLOSSY' ],
				image: 'ad-menu-flat-a-5-premium-matte-glossy'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'GOLD' ],
				image: 'ad-menu-flat-a-5-premium-matte-gold'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'SILVER' ],
				image: 'ad-menu-flat-a-5-premium-matte-silver'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'NONE' ],
				image: 'ad-menu-flat-a-5-premium-matte-none'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5PLUS', 'SOFT2' ],
				image: 'ad-menu-flat-a-5-plus-soft'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5PLUS', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'GLOSSY' ],
				image: 'ad-menu-flat-a-5-plus-premium-soft-glossy'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5PLUS', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'GOLD' ],
				image: 'ad-menu-flat-a-5-plus-premium-soft-gold'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5PLUS', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'SILVER' ],
				image: 'ad-menu-flat-a-5-plus-premium-soft-silver'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5PLUS', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'NONE' ],
				image: 'ad-menu-flat-a-5-plus-premium-soft-none'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5PLUS', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'GLOSSY' ],
				image: 'ad-menu-flat-a-5-plus-premium-matte-glossy'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5PLUS', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'GOLD' ],
				image: 'ad-menu-flat-a-5-plus-premium-matte-gold'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5PLUS', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'SILVER' ],
				image: 'ad-menu-flat-a-5-plus-premium-matte-silver'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5PLUS', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'NONE' ],
				image: 'ad-menu-flat-a-5-plus-premium-matte-none'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A4', 'SOFT2' ],
				image: 'ad-menu-flat-a-4-soft'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A4', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'GLOSSY' ],
				image: 'ad-menu-flat-a-4-premium-soft-glossy'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A4', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'GOLD' ],
				image: 'ad-menu-flat-a-4-premium-soft-gold'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A4', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'SILVER' ],
				image: 'ad-menu-flat-a-4-premium-soft-silver'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A4', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'NONE' ],
				image: 'ad-menu-flat-a-4-premium-soft-none'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A4', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'GLOSSY' ],
				image: 'ad-menu-flat-a-4-premium-matte-glossy'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A4', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'GOLD' ],
				image: 'ad-menu-flat-a-4-premium-matte-gold'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A4', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'SILVER' ],
				image: 'ad-menu-flat-a-4-premium-matte-silver'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A4', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'NONE' ],
				image: 'ad-menu-flat-a-4-premium-matte-none'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5', 'SOFT2' ],
				image: 'ad-menu-flat-a-5-soft'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'GLOSSY' ],
				image: 'ad-menu-flat-a-5-premium-soft-glossy'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'GOLD' ],
				image: 'ad-menu-flat-a-5-premium-soft-gold'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'SILVER' ],
				image: 'ad-menu-flat-a-5-premium-soft-silver'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'NONE' ],
				image: 'ad-menu-flat-a-5-premium-soft-none'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'GLOSSY' ],
				image: 'ad-menu-flat-a-5-premium-matte-glossy'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'GOLD' ],
				image: 'ad-menu-flat-a-5-premium-matte-gold'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'SILVER' ],
				image: 'ad-menu-flat-a-5-premium-matte-silver'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'NONE' ],
				image: 'ad-menu-flat-a-5-premium-matte-none'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5PLUS', 'SOFT2' ],
				image: 'ad-menu-flat-a-5-plus-soft'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5PLUS', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'GLOSSY' ],
				image: 'ad-menu-flat-a-5-plus-premium-soft-glossy'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5PLUS', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'GOLD' ],
				image: 'ad-menu-flat-a-5-plus-premium-soft-gold'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5PLUS', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'SILVER' ],
				image: 'ad-menu-flat-a-5-plus-premium-soft-silver'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5PLUS', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'NONE' ],
				image: 'ad-menu-flat-a-5-plus-premium-soft-none'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5PLUS', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'GLOSSY' ],
				image: 'ad-menu-flat-a-5-plus-premium-matte-glossy'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5PLUS', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'GOLD' ],
				image: 'ad-menu-flat-a-5-plus-premium-matte-gold'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5PLUS', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'SILVER' ],
				image: 'ad-menu-flat-a-5-plus-premium-matte-silver'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5PLUS', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'NONE' ],
				image: 'ad-menu-flat-a-5-plus-premium-matte-none'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A4', 'SOFT2' ],
				image: 'ad-menu-flat-a-4-soft'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A4', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'GLOSSY' ],
				image: 'ad-menu-flat-a-4-premium-soft-glossy'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A4', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'GOLD' ],
				image: 'ad-menu-flat-a-4-premium-soft-gold'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A4', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'SILVER' ],
				image: 'ad-menu-flat-a-4-premium-soft-silver'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A4', 'PREMIUM_SOFT', 'THICK', 'VERY_THICK', 'NONE' ],
				image: 'ad-menu-flat-a-4-premium-soft-none'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A4', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'GLOSSY' ],
				image: 'ad-menu-flat-a-4-premium-matte-glossy'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A4', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'GOLD' ],
				image: 'ad-menu-flat-a-4-premium-matte-gold'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A4', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'SILVER' ],
				image: 'ad-menu-flat-a-4-premium-matte-silver'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A4', 'PREMIUM_MATT', 'THICK', 'VERY_THICK', 'NONE' ],
				image: 'ad-menu-flat-a-4-premium-matte-none'
			},
			//end
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5', 'MENU_GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-flat-a-5-glazedpaper'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5', 'MENU_MATTE', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-flat-a-5-mattpaper'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5', 'MENU_EFFECT', 'GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-flat-a-5-effectpaper-glossy'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5', 'MENU_EFFECT', 'GOLD', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-flat-a-5-effectpaper-gold'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5', 'MENU_EFFECT', 'SILVER', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-flat-a-5-effectpaper-silver'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5PLUS', 'MENU_GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-flat-a-5-plus-glazedpaper'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5PLUS', 'MENU_MATTE', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-flat-a-5-plus-mattpaper'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5PLUS', 'MENU_EFFECT', 'GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-flat-a-5-plus-effectpaper-glossy'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5PLUS', 'MENU_EFFECT', 'GOLD', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-flat-a-5-plus-effectpaper-gold'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A5PLUS', 'MENU_EFFECT', 'SILVER', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-flat-a-5-plus-effectpaper-silver'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A4', 'MENU_GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-flat-a-4-glazedpaper'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A4', 'MENU_MATTE', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-flat-a-4-mattpaper'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A4', 'MENU_EFFECT', 'GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-flat-a-4-effectpaper-glossy'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A4', 'MENU_EFFECT', 'GOLD', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-flat-a-4-effectpaper-gold'
			},
			{
				attributes: [ 'MENU_FLAT', 'MENU_A4', 'MENU_EFFECT', 'SILVER', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-flat-a-4-effectpaper-silver'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5', 'MENU_GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-folder-a-5-glazedpaper'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5', 'MENU_MATTE', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-folder-a-5-mattpaper'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5', 'MENU_EFFECT', 'GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-folder-a-5-effectpaper-glossy'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5', 'MENU_EFFECT', 'GOLD', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-folder-a-5-effectpaper-gold'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5', 'MENU_EFFECT', 'SILVER', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-folder-a-5-effectpaper-silver'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5PLUS', 'MENU_GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-folder-a-5-plus-glazedpaper'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5PLUS', 'MENU_MATTE', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-folder-a-5-plus-mattpaper'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5PLUS', 'MENU_EFFECT', 'GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-folder-a-5-plus-effectpaper-glossy'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5PLUS', 'MENU_EFFECT', 'GOLD', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-folder-a-5-plus-effectpaper-gold'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A5PLUS', 'MENU_EFFECT', 'SILVER', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-folder-a-5-plus-effectpaper-silver'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A4', 'MENU_GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-folder-a-4-glazedpaper'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A4', 'MENU_MATTE', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-folder-a-4-mattpaper'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A4', 'MENU_EFFECT', 'GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-folder-a-4-effectpaper-glossy'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A4', 'MENU_EFFECT', 'GOLD', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-folder-a-4-effectpaper-gold'
			},
			{
				attributes: [ 'MENU_BI_FOLD', 'MENU_A4', 'MENU_EFFECT', 'SILVER', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-menu-folder-a-4-effectpaper-silver'
			}
		],
		showcases: {
			//start
			PAPER_TITLE: {
				title: '다양한 용지를 확인해 보세요.',
				className: 'bg-gray vertical-border'
			},
			SOFT_PAPER_BROCHURE_TITLE:{
				deco: 'num-01-5030',
				title: '소프트 용지',
				descriptions: [ '밝고 깨끗한 느낌을 가진 용지로 가격대비 우수한 품질을 가지고 있어요.<br/>용지 무게 : 250gsm' ],
				className: 'bg-gray col-2',
				children: [
					{
						image: 'ad-info-soft',
						attentions: [
							'약간의 광택이 있는 백색용지로 발색력이 좋아요. '
						]
					},
					{
						image: 'menu-info-soft-02',
						attentions: [
							'일반적인 인쇄물에 가장 많이 쓰이는 용지로 경제적인 가격대를 가지고 있어요.',
							'밝고 가벼운 느낌을 줄 수 있어요.'
						]
					}
				]
			},

			PREMIUM_SOFT_PAPER_BROCHURE: {
				deco: 'num-02-5030',
				title: '프리미엄 소프트 용지',
				descriptions: [ '자연스러운 광택과 높은 백색도로 깨끗함을 느껴보세요.<br/>용지 두께(무게) : 두꺼움(230gsm), 매우 두꺼움(300gsm)' ],
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
						image: 'menu-info-premiumsoft-02',
						attentions: [
							'망점 퍼짐을 최대한 억제하여 잉크 뭉침이 적고 세밀하고 선명하게 표현돼요.',
							'사진이나 이미지 재현에 탁월해요.'
						]
					}
				]
			},

			PREMIUM_MAT_PAPER_BROCHURE: {
				deco: 'num-03-5030',
				title: '프리미엄 매트 용지',
				descriptions: [ '부드럽고 따뜻한 느낌으로 편안함을 전달해 보세요.<br/>용지 두께(무게) : 두꺼움(250gsm), 매우 두꺼움(320gsm)' ],
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
						image: 'menu-info-premiummat-02',
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
				className: 'bg-gray col-3',
				children: [
					{
						image: 'paper-info-texture-soft-2',
						title: '소프트'
					},
					{
						image: 'paper-info-texture-premiumsoft-2',
						title: '프리미엄 소프트'
					},
					{
						image: 'paper-info-texture-premiummat-2',
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
						image: 'gsm-soft-250',
						title: '소프트',
						roundDescription: '250gsm'
					},
					{
						image: 'gsm-premiumsoft-230',
						title: '프리미엄 소프트(두꺼움)',
						roundDescription: '230gsm'
					},
					{
						image: 'gsm-premiumsoft-300',
						title: '프리미엄 소프트(매우 두꺼움)',
						roundDescription: '300gsm'
					},
					{
						image: 'gsm-premiummat-250',
						title: '프리미엄 매트(두꺼움)',
						roundDescription: '250gsm'
					},
					{
						image: 'gsm-premiummat-320',
						title: '프리미엄 매트(매우 두꺼움)',
						roundDescription: '320gsm'
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

			PR_SIZE: {
				title: '필요한 사이즈를 확인하세요.',
				className: 'bg-white col-1',
				children: [
					{
						image: 'menu-size'
					}
				]
			},



			//end
		}
	},
	CONTENTS: {
		DEFAULTS: {
			title: '메뉴판',
			attentions: [
				'선택의 순간도 즐겁게 메뉴의 잠재력을 깨워보세요.',
				'외식, 서비스업 등에서 메뉴 안내용으로 사용해 보세요.'
			],
			services: [
				'PAPER_TITLE','SOFT_PAPER_BROCHURE_TITLE','PREMIUM_SOFT_PAPER_BROCHURE','PREMIUM_MAT_PAPER_BROCHURE','ATMOSPHERE_EFFECT','NEW_TEXTURE','NEW_GSM','PAPER_ELASTIC','PR_FOLDER','PR_SIZE'
			]
		}
	}
};
