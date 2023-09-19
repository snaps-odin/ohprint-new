

export const POSTER = {
	COMMON: {
		option: {
			SOFT2: {
				thumbnail: 'detail-paper-soft',
				title: '소프트',
				description: '깨끗하고 밝은 느낌을 가진 <br/>' +
					'백색용지로 대중적으로 가장 많이 <br/>' +
					'사용해요.',
				attentions: [
					'용지 두께(무게) : 보통(150gsm),<br/>두꺼움(250gsm)'
				]
			},

			MATT: {
				thumbnail: 'detail-paper-mat',
				title: '매트',
				description: '내추럴한 느낌의 일반 복사 용지와<br/>'+
					'가장 비슷한 용지로 연필로도 필기가<br/>'+
					'가능해요.',
				attentions: [
					'용지 두께(무게) : 보통(150gsm),<br/>두꺼움(250gsm)'
				]
			},

			PREMIUM_SOFT: {
				thumbnail: 'detail-paper-premiumsoft',
				title: '프리미엄 소프트',
				description: '자연스러운 광택과 깨끗함을<br/>'+
					'느낄 수있는 용지로 선명한<br/>'+
					'색재현성과 내구성이 우수합니다.',
				attentions: [
					'용지 두께(무게) : 보통(160gsm),<br/>두꺼움(270gsm)'
				]
			},

			PREMIUM_MATT: {
				thumbnail: 'detail-paper-premiummat',
				title: '프리미엄 매트',
				description: '부드럽고 따뜻한 느낌의 용지로 <br/>' +
					'깊이 있는 질감과 인쇄로<br/>' +
					'고급스러움을 느껴 보세요.',
				attentions: [
					'용지 두께(무게) : 보통(151gsm),<br/>두꺼움(273gsm)'
				]
			},

			POSTER_A4: {
				thumbnail: 'detail-size-poster-a-4',
				title: 'A4',
				attentions: [
					'210mm x 297mm'
				]
			},
			POSTER_A3: {
				thumbnail: 'detail-size-poster-a-3',
				title: 'A3',
				attentions: [
					'297mm x 420mm'
				]
			},
			POSTER_A2: {
				thumbnail: 'detail-size-poster-a-2',
				title: 'A2',
				attentions: [
					'420mm x 594mm'
				]
			},
			POSTER_A1: {
				thumbnail: 'detail-size-poster-a-1',
				title: 'A1',
				attentions: [
					'594mm x 840mm'
				]
			},
			POSTER_B4: {
				thumbnail: 'detail-size-poster-b-4',
				title: 'B4',
				attentions: [
					'240mm x 347mm'
				]
			},
			POSTER_B3: {
				thumbnail: 'detail-size-poster-b-3',
				title: 'B3',
				attentions: [
					'347mm x 500mm'
				]
			},
			POSTER_B2: {
				thumbnail: 'detail-size-poster-b-2',
				title: 'B2',
				attentions: [
					'500mm x 720mm'
				]
			},
			GLOSSY: {
				thumbnail: 'detail-paper-light',
				title: '유광지',
				description: '탄탄한 내구성은 물론, 잔잔하게<br/>빛나는 광택으로 특별함을<br/>더해 보세요.',
				attentions: [
					'앞면 유광 코팅',
					`용지 무게 선택 가능<br/>(180gsm, 250gsm)`
				]
			},
			MATTE: {
				thumbnail: 'detail-paper-matt',
				title: '무광지',
				description: '매트하면서 부드러운 질감으로<br/>고급스러움을 전달해 보세요.',
				attentions: [
					`용지 무게 선택 가능<br/>(150gsm, 220gsm)`
				]
			}
		},
		variations: [
			//start
			{
				attributes: [ 'POSTER_A4', 'SOFT2', 'NORMAL', 'THICK' ],
				image: 'poster-a-4-soft'
			},
			{
				attributes: [ 'POSTER_A4', 'MATT', 'NORMAL', 'THICK' ],
				image: 'poster-a-4-matte'
			},
			{
				attributes: [ 'POSTER_A4', 'PREMIUM_SOFT', 'NORMAL', 'THICK' ],
				image: 'poster-a-4-premium-soft'
			},
			{
				attributes: [ 'POSTER_A4', 'PREMIUM_MATT', 'NORMAL', 'THICK' ],
				image: 'poster-a-4-premium-matte'
			},
			{
				attributes: [ 'POSTER_A3', 'SOFT2', 'NORMAL', 'THICK' ],
				image: 'poster-a-3-soft'
			},
			{
				attributes: [ 'POSTER_A3', 'MATT', 'NORMAL', 'THICK' ],
				image: 'poster-a-3-matte'
			},
			{
				attributes: [ 'POSTER_A3', 'PREMIUM_SOFT', 'NORMAL', 'THICK' ],
				image: 'poster-a-3-premium-soft'
			},
			{
				attributes: [ 'POSTER_A3', 'PREMIUM_MATT', 'NORMAL', 'THICK' ],
				image: 'poster-a-3-premium-matte'
			},
			{
				attributes: [ 'POSTER_A2', 'SOFT2', 'NORMAL', 'THICK' ],
				image: 'poster-a-2-soft'
			},
			{
				attributes: [ 'POSTER_A2', 'MATT', 'NORMAL', 'THICK' ],
				image: 'poster-a-2-matte'
			},
			{
				attributes: [ 'POSTER_A2', 'PREMIUM_SOFT', 'NORMAL', 'THICK' ],
				image: 'poster-a-2-premium-soft'
			},
			{
				attributes: [ 'POSTER_A2', 'PREMIUM_MATT', 'NORMAL', 'THICK' ],
				image: 'poster-a-2-premium-matte'
			},
			{
				attributes: [ 'POSTER_A1', 'SOFT2', 'NORMAL', 'THICK' ],
				image: 'poster-a-1-soft'
			},
			{
				attributes: [ 'POSTER_A1', 'MATT', 'NORMAL', 'THICK' ],
				image: 'poster-a-1-matte'
			},
			{
				attributes: [ 'POSTER_A1', 'PREMIUM_SOFT', 'NORMAL', 'THICK' ],
				image: 'poster-a-1-premium-soft'
			},
			{
				attributes: [ 'POSTER_A1', 'PREMIUM_MATT', 'NORMAL', 'THICK' ],
				image: 'poster-a-1-premium-matte'
			},
			{
				attributes: [ 'POSTER_B4', 'SOFT2', 'NORMAL', 'THICK' ],
				image: 'poster-b-4-soft'
			},
			{
				attributes: [ 'POSTER_B4', 'MATT', 'NORMAL', 'THICK' ],
				image: 'poster-b-4-matte'
			},
			{
				attributes: [ 'POSTER_B4', 'PREMIUM_SOFT', 'NORMAL', 'THICK' ],
				image: 'poster-b-4-premium-soft'
			},
			{
				attributes: [ 'POSTER_B4', 'PREMIUM_MATT', 'NORMAL', 'THICK' ],
				image: 'poster-b-4-premium-matte'
			},
			{
				attributes: [ 'POSTER_B3', 'SOFT2', 'NORMAL', 'THICK' ],
				image: 'poster-b-3-soft'
			},
			{
				attributes: [ 'POSTER_B3', 'MATT', 'NORMAL', 'THICK' ],
				image: 'poster-b-3-matte'
			},
			{
				attributes: [ 'POSTER_B3', 'PREMIUM_SOFT', 'NORMAL', 'THICK' ],
				image: 'poster-b-3-premium-soft'
			},
			{
				attributes: [ 'POSTER_B3', 'PREMIUM_MATT', 'NORMAL', 'THICK' ],
				image: 'poster-b-3-premium-matte'
			},
			{
				attributes: [ 'POSTER_B2', 'SOFT2', 'NORMAL', 'THICK' ],
				image: 'poster-b-2-soft'
			},
			{
				attributes: [ 'POSTER_B2', 'MATT', 'NORMAL', 'THICK' ],
				image: 'poster-b-2-matte'
			},
			{
				attributes: [ 'POSTER_B2', 'PREMIUM_SOFT', 'NORMAL', 'THICK' ],
				image: 'poster-b-2-premium-soft'
			},
			{
				attributes: [ 'POSTER_B2', 'PREMIUM_MATT', 'NORMAL', 'THICK' ],
				image: 'poster-b-2-premium-matte'
			},




			//end
			{
				attributes: [ 'POSTER_A4', 'MATTE', 'GSM150', 'GSM180', 'GSM220', 'GSM250' ],
				image: 'poster-a-4-mattpaper'
			},
			{
				attributes: [ 'POSTER_A3', 'MATTE', 'GSM150', 'GSM180', 'GSM220', 'GSM250' ],
				image: 'poster-a-3-mattpaper'
			},
			{
				attributes: [ 'POSTER_A2', 'MATTE', 'GSM150', 'GSM180', 'GSM220', 'GSM250' ],
				image: 'poster-a-2-mattpaper'
			},
			{
				attributes: [ 'POSTER_A1', 'MATTE', 'GSM150', 'GSM180', 'GSM220', 'GSM250' ],
				image: 'poster-a-1-mattpaper'
			},
			{
				attributes: [ 'POSTER_B4', 'MATTE', 'GSM150', 'GSM180', 'GSM220', 'GSM250' ],
				image: 'poster-b-4-mattpaper'
			},
			{
				attributes: [ 'POSTER_B3', 'MATTE', 'GSM150', 'GSM180', 'GSM220', 'GSM250' ],
				image: 'poster-b-3-mattpaper'
			},
			{
				attributes: [ 'POSTER_B2', 'MATTE', 'GSM150', 'GSM180', 'GSM220', 'GSM250' ],
				image: 'poster-b-2-mattpaper'
			},
			{
				attributes: [ 'POSTER_A4', 'GLOSSY', 'GSM150', 'GSM180', 'GSM220', 'GSM250' ],
				image: 'poster-a-4-glazedpaper'
			},
			{
				attributes: [ 'POSTER_A3', 'GLOSSY', 'GSM150', 'GSM180', 'GSM220', 'GSM250' ],
				image: 'poster-a-3-glazedpaper'
			},
			{
				attributes: [ 'POSTER_A2', 'GLOSSY', 'GSM150', 'GSM180', 'GSM220', 'GSM250' ],
				image: 'poster-a-2-glazedpaper'
			},
			{
				attributes: [ 'POSTER_A1', 'GLOSSY', 'GSM150', 'GSM180', 'GSM220', 'GSM250' ],
				image: 'poster-a-1-glazedpaper'
			},
			{
				attributes: [ 'POSTER_B4', 'GLOSSY', 'GSM150', 'GSM180', 'GSM220', 'GSM250' ],
				image: 'poster-b-4-glazedpaper'
			},
			{
				attributes: [ 'POSTER_B3', 'GLOSSY', 'GSM150', 'GSM180', 'GSM220', 'GSM250' ],
				image: 'poster-b-3-glazedpaper'
			},
			{
				attributes: [ 'POSTER_B2', 'GLOSSY', 'GSM150', 'GSM180', 'GSM220', 'GSM250' ],
				image: 'poster-b-2-glazedpaper'
			}
		],
		showcases: {
			//start
			POSTER_TITLE: {
				title: '분위기에 맞는 용지를 확인해 보세요.',
				className: 'bg-gray vertical-border'
			},

			SOFT_PAPER_TITLE: {
				deco: 'num-01-5030',
				title: '소프트 용지',
				descriptions: ['밝고 깨끗한 느낌을 가진 용지로 가격대비 우수한 품질을 가지고 있어요.<br/>용지 두께(무게) : 보통(150gsm), 두꺼움(250gsm)'],
				className: 'bg-gray col-2',
				children: [
					{
						image: 'poster-info-soft-01',
						attentions: [
							'약간의 광택이 있는 백색용지로 발색력이 좋아요.'
						]
					},
					{
						image: 'poster-info-soft-02',
						attentions: [
							'일반적인 인쇄물에 가장 많이 쓰이는 용지로 경제적인 가격대를 가지고 있어요.',
							'밝고 가벼운 느낌을 줄 수 있어요.'
						]
					}
				]
			},

			MAT_PAPER: {
				deco: 'num-02-5030',
				title: '매트 용지',
				descriptions: [ '종이 본연을 텍스쳐를 느낄 수 있는 내추럴함이 돋보이는 용지에요.<br/>용지 두께(무게) : 보통(150gsm), 두꺼움(250gsm)' ],
				className: 'bg-white col-2',
				children: [
					{
						image: 'poster-info-mat-01',
						attentions: [
							'일반 복사용지와 비슷한 재질로 내추럴한 느낌이에요.'
						]
					},
					{
						image: 'poster-info-mat-02',
						attentions: [
							'종이 위에 연필로도 필기가 가능해요.'
						]
					}
				]
			},

			PREMIUM_SOFT_PAPER: {
				deco: 'num-03-5030',
				title: '프리미엄 소프트 용지',
				descriptions: [ '자연스러운 광택과 높은 백색도로 깨끗함을 느껴보세요.<br/>용지 두께(무게) : 보통(160gsm), 두꺼움(270gsm)' ],
				className: 'bg-gray col-2',
				children: [
					{
						image: 'poster-info-premiumsoft-01',
						attentions: [
							'순백색의 고급 켄트지로 자연스러운 광택과 맑고 깨끗함을 느낄 수 있어요.',
							'매끄럽고 부드러운 질감과 우수한 내구성을 가지고 있어요. '
						]
					},
					{
						image: 'poster-info-premiumsoft-02',
						attentions: [
							'망점 퍼짐을 최대한 억제하여 잉크 뭉침이 적고 세밀하고 선명하게 표현돼요.',
							'사진이나 이미지 재현에 탁월해요.'
						]
					}
				]
			},

			PREMIUM_MAT_PAPER: {
				deco: 'num-04-5030',
				title: '프리미엄 매트 용지',
				descriptions: [ '부드럽고 따뜻한 느낌으로 편안함을 전달해 보세요.<br/>용지 두께(무게) : 보통(151gsm), 두꺼움(273gsm)' ],
				className: 'bg-white col-2',
				children: [
					{
						image: 'poster-info-premiummat-01',
						attentions: [
							'잔잔한 미색이 도는 광택이 없는 고급 용지에요.',
							'부드러운 질감과 깊이 있는 인쇄감이 매력적이에요.'
						]
					},
					{
						image: 'poster-info-premiummat-02',
						attentions: [
							'특수 코팅 처리로 최고의 인쇄효과를 내요.',
							'따뜻하고 차분한 느낌을 주는 디자인에 잘 어울려요.'
						]
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

			PAPER_THICKNESS: {
				title: '용지 두께를 확인해 보세요.',
				descriptions: ['보통 평량(gsm)이 클수록 용지의 무게가 더 나가는 것으로,<br/>용지 특성에 따라 두께나 탄성은 다를 수 있어요.<br/>(용지 50매를 쌓은 높이예요.)'],
				className: 'bg-white col-4',
				children: [
					{
						image: 'poster-info-gsm-basic',
						title: '일반적인 사무용지',
						roundDescription: '80gsm'
					},
					{
						image: 'gsm-soft-150',
						title: '소프트(보통)',
						roundDescription: '150gsm'
					},
					{
						image: 'gsm-soft-250',
						title: '소프트(두꺼움)',
						roundDescription: '250gsm'
					},
					{
						image: 'gsm-mat-150',
						title: '매트(보통)',
						roundDescription: '150gsm'
					},
					{
						image: 'gsm-mat-250',
						title: '매트(두꺼움)',
						roundDescription: '250gsm'
					},
					{
						image: 'gsm-premiumsoft-160',
						title: '프리미엄 소프트(보통)',
						roundDescription: '160gsm'
					},
					{
						image: 'gsm-premiumsoft-270',
						title: '프리미엄 소프트(두꺼움)',
						roundDescription: '270gsm'
					},
					{
						image: 'gsm-premiummat-151',
						title: '프리미엄 매트(보통)',
						roundDescription: '151gsm'
					},
					{
						image: 'gsm-premiummat-273',
						title: '프리미엄 매트(두꺼움)',
						roundDescription: '273gsm'
					},

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

			USE_SIZE:{
				title: '필요한 사이즈를 확인하세요.',
				className: 'bg-white col-1 border-top',
				children: [
						{
							image: 'poster-size'
						}
					]
			},




		//end
		}
	},
	CONTENTS: {
		DEFAULTS: {
			title: '포스터',
			attentions: [
				'모두의 시선을 주목시켜 톡톡한 홍보효과를<br/>경험해 보세요.',
				'공연, 행사, 제품 등을 눈에 띄게 홍보하기 좋아요.'
			],
			services: [
				'POSTER_TITLE','SOFT_PAPER_TITLE','MAT_PAPER','PREMIUM_SOFT_PAPER','PREMIUM_MAT_PAPER','PAPER_TEXTURE','PAPER_THICKNESS','PAPER_ELASTIC','USE_SIZE'
			]
		}
	}
};
