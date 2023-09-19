

export const POST_CARD = {
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

			PREMIUM_SOFT: {
				thumbnail: 'detail-paper-premiumsoft',
				title: '프리미엄 소프트',
				description: '자연스러운 광택과 깨끗함을<br/>'+
					'느낄 수있는 용지로 선명한<br/>'+
					'색재현성과 내구성이 우수합니다.',
				attentions: [
					'용지 무게 : 300gsm'
				]
			},

			PREMIUM_MATT: {
				thumbnail: 'detail-paper-premiummat',
				title: '프리미엄 매트',
				description: '부드럽고 따뜻한 느낌의 용지로 <br/>' +
					'깊이 있는 질감과 인쇄로<br/>' +
					'고급스러움을 느껴 보세요.',
				attentions: [
					'용지 무게 : 320gsm'
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
			}
		},
		variations: [
			//start
			{
				attributes: ['POSTCARD', 'SOFT', 'SOFT'],
				image: 'ad-postcard-soft'
			},

			{
				attributes: ['POSTCARD', 'SOFT', 'PREMIUM_SOFT'],
				image: 'ad-postcard-soft'
			},
			{
				attributes: ['POSTCARD','SOFT', 'PREMIUM_SOFT', 'GLOSSY'],
				image: 'ad-postcard-premium-soft-glossy'
			},
			{
				attributes: ['POSTCARD','SOFT', 'PREMIUM_SOFT', 'GOLD'],
				image: 'ad-postcard-premium-soft-gold'
			},
			{
				attributes: ['POSTCARD','SOFT', 'PREMIUM_SOFT', 'NONE'],
				image: 'ad-postcard-premium-soft-none'
			},
			{
				attributes: ['POSTCARD','SOFT', 'PREMIUM_SOFT', 'SILVER'],
				image: 'ad-postcard-premium-soft-silver'
			},

			{
				attributes: ['POSTCARD', 'SOFT', 'PREMIUM_MATT'],
				image: 'ad-postcard-matte'
			},
			{
				attributes: ['POSTCARD','SOFT', 'PREMIUM_MATT', 'GLOSSY'],
				image: 'ad-postcard-premium-matte-glossy'
			},
			{
				attributes: ['POSTCARD','SOFT', 'PREMIUM_MATT', 'GOLD'],
				image: 'ad-postcard-premium-matte-gold'
			},
			{
				attributes: ['POSTCARD','SOFT', 'PREMIUM_MATT', 'NONE'],
				image: 'ad-postcard-premium-matte-none'
			},
			{
				attributes: ['POSTCARD','SOFT', 'PREMIUM_MATT', 'SILVER'],
				image: 'ad-postcard-premium-matte-silver'
			},




			//end
			{
				attributes: ['POSTCARD', 'PREMIUM', 'GLOSSY'],
				image: 'ad-product-postcard-effectpaper-glossy'
			},
			{
				attributes: ['POSTCARD', 'PREMIUM', 'GOLD'],
				image: 'ad-product-postcard-effectpaper-gold'
			},
			{
				attributes: ['POSTCARD', 'PREMIUM', 'SILVER'],
				image: 'ad-product-postcard-effectpaper-silver'
			},
			{
				attributes: ['POSTCARD', 'PREMIUM', 'NONE'],
				image: 'ad-product-postcard-none'
			}
		],
		showcases: {

			//start
			PAPER_TITLE: {
				title: '다양한 용지를 확인해 보세요.',
				className: 'bg-white vertical-border'
			},
			SOFT_PAPER_POSTCARD: {
				deco: 'num-01-5030',
				title: '소프트 용지',
				descriptions: ['밝고 깨끗한 느낌을 가진 용지로 가격대비 우수한 품질을 가지고 있어요.<br/>용지 무게 : 250gsm'],
				className: 'bg-white col-2',
				children: [
					{
						image: 'ad-info-soft',
						attentions: [
							'약간의 광택이 있는 백색용지로 발색력이 좋아요. '
						]
					},
					{
						image: 'postcard-info-soft-02',
						attentions: [
							'일반적인 인쇄물에 가장 많이 쓰이는 용지로 경제적인 가격대를 가지고 있어요.',
							'밝고 가벼운 느낌을 줄 수 있어요.'
						]
					}
				]
			},

			PREMIUM_SOFT_PAPER_POSTCARD: {
				deco: 'num-02-5030',
				title: '프리미엄 소프트 용지',
				descriptions: ['자연스러운 광택과 높은 백색도로 깨끗함을 느껴보세요.<br/>용지 무게 : 300gsm'],
				className: 'bg-gray col-2',
				children: [
					{
						image: 'ad-info-premiumsoft',
						attentions: [
							'순백색의 고급 켄트지로 자연스러운 광택과 맑고 깨끗함을 느낄 수 있어요.',
							'매끄럽고 부드러운 질감과 우수한 내구성을 가지고 있어요. '
						]
					},
					{
						image: 'postcard-info-premiumsoft-02',
						attentions: [
							'망점 퍼짐을 최대한 억제하여 잉크 뭉침이 적고 세밀하고 선명하게 표현돼요.',
							'사진이나 이미지 재현에 탁월해요.'
						]
					}
				]
			},

			PREMIUM_MAT_PAPER_POSTCARD: {
				deco: 'num-03-5030',
				title: '프리미엄 매트 용지',
				descriptions: ['부드럽고 따뜻한 느낌으로 편안함을 전달해 보세요.<br/>용지 무게 : 320gsm'],
				className: 'bg-white col-2',
				children: [
					{
						image: 'ad-info-premiummat',
						attentions: [
							'잔잔한 미색이 도는 광택이 없는 고급 용지에요.',
							'부드러운 질감과 깊이 있는 인쇄감이 매력적이에요.'
						]
					},
					{
						image: 'postcard-info-premiummat-02',
						attentions: [
							'특수 코팅 처리로 최고의 인쇄효과를 내요.',
							'따뜻하고 차분한 느낌을 주는 디자인에 잘 어울려요.'
						]
					}
				]
			},

			ATMOSPHERE_EFFECT: {
				title: '분위기에 맞는 효과를 선택하세요.',
				descriptions: ['<em class="blue">프리미엄 소프트, 프리미엄 매트</em> 용지에서 선택 가능해요.<br/>효과 적용 시, 양면 코팅이 이뤄져 용지 본연의 특성이 달라질 수 있어요.'],
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
				descriptions: ['보통 평량(gsm)이 클수록 용지의 무게가 더 나가는 것으로,<br/>용지 특성에 따라 두께나 탄성은 다를 수 있어요.<br/>(용지 50매를 쌓은 높이예요.)'],
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
					}
				]
			},
		}
		},
		CONTENTS: {
			DEFAULTS: {
				title: '포스트카드',
				attentions: [
					'어디든, 메세지에 힘을 담아 보내세요.',
					'상품 홍보 및 초대장 등에 많이 사용돼요.'
				],
				services:[
					'PAPER_TITLE', 'SOFT_PAPER_POSTCARD','PREMIUM_SOFT_PAPER_POSTCARD','PREMIUM_MAT_PAPER_POSTCARD','ATMOSPHERE_EFFECT','NEW_TEXTURE','NEW_GSM'
				]
			}
		}

};
