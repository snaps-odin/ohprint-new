

export const COUPON = {
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
					'용지 무게 : 230gsm'
				]
			},

			PREMIUM_MATT: {
				thumbnail: 'detail-paper-premiummat',
				title: '프리미엄 매트',
				description: '부드럽고 따뜻한 느낌의 용지로 <br/>' +
					'깊이 있는 질감과 인쇄로<br/>' +
					'고급스러움을 느껴 보세요.',
				attentions: [
					'용지 무게 : 250gsm'
				]
			},
			COUPON_GLOSSY: {
				thumbnail: 'detail-paper-light',
				title: '유광지',
				description: '탄탄한 내구성은 물론, 잔잔하게<br/>빛나는 광택으로 특별함을<br/>더해 보세요.',
				attentions: [
					`용지 무게 선택 가능<br/>(150gsm, 250gsm)`
				]
			},
			COUPON_MATTE: {
				thumbnail: 'detail-paper-matt',
				title: '무광지',
				description: '매트하면서 부드러운 질감으로<br/>고급스러움을 전달해 보세요.',
				attentions: [
					`용지 무게 선택 가능<br/>(150gsm, 220gsm)`
				]
			},
			COUPON_EFFECT: {
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
				attributes: [ 'COUPON', 'SOFT2', 'NORMAL', 'THICK' ],
				image: 'ad-coupon-soft'
			},

			{
				attributes: [ 'COUPON', 'MATT', 'NORMAL', 'THICK' ],
				image: 'ad-coupon-matte'
			},

			{
				attributes: [ 'COUPON', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'NONE' ],
				image: 'ad-coupon-premium-soft-none'
			},

			{
				attributes: [ 'COUPON', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'GLOSSY' ],
				image: 'ad-coupon-premium-soft-glossy'
			},

			{
				attributes: [ 'COUPON', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'GOLD' ],
				image: 'ad-coupon-premium-soft-gold'
			},

			{
				attributes: [ 'COUPON', 'PREMIUM_SOFT', 'NORMAL', 'THICK', 'SILVER' ],
				image: 'ad-coupon-premium-soft-silver'
			},

			{
				attributes: [ 'COUPON', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'NONE' ],
				image: 'ad-coupon-premium-matte-none'
			},

			{
				attributes: [ 'COUPON', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'GLOSSY' ],
				image: 'ad-coupon-premium-matte-glossy'
			},

			{
				attributes: [ 'COUPON', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'GOLD' ],
				image: 'ad-coupon-premium-matte-gold'
			},

			{
				attributes: [ 'COUPON', 'PREMIUM_MATT', 'NORMAL', 'THICK', 'SILVER' ],
				image: 'ad-coupon-premium-matte-silver'
			},
			//end
			{
				attributes: [ 'COUPON', 'COUPON_GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-coupon-glazedpaper'
			},
			{
				attributes: [ 'COUPON', 'COUPON_MATTE', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-coupon-mattpaper'
			},
			{
				attributes: [ 'COUPON', 'COUPON_MATTE', 'COUPON_EFFECT', 'GLOSSY', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-coupon-effectpaper-glossy'
			},
			{
				attributes: [ 'COUPON', 'COUPON_MATTE', 'COUPON_EFFECT', 'GOLD', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-coupon-effectpaper-gold'
			},
			{
				attributes: [ 'COUPON', 'COUPON_MATTE', 'COUPON_EFFECT', 'SILVER', 'GSM150', 'GSM220', 'GSM250' ],
				image: 'ad-product-coupon-effectpaper-silver'
			}
		],
		showcases: {
			//start
			PAPER_TITLE: {
				title: '다양한 용지를 확인해 보세요.',
				className: 'bg-white vertical-border'
			},
			SOFT_PAPER_COUPON_TITLE:{
				deco: 'num-01-5030',
				title: '소프트 용지',
				descriptions: [ '밝고 깨끗한 느낌을 가진 용지로 가격대비 우수한 품질을 가지고 있어요.<br/>용지 두께(무게) : 보통(150gsm), 두꺼움(250gsm)' ],
				className: 'bg-white col-2',
				children: [
					{
						image: 'ad-info-soft',
						attentions: [
							'약간의 광택이 있는 백색용지로 발색력이 좋아요. '
						]
					},
					{
						image: 'coupon-info-soft-02',
						attentions: [
							'일반적인 인쇄물에 가장 많이 쓰이는 용지로 경제적인 가격대를 가지고 있어요.',
							'밝고 가벼운 느낌을 줄 수 있어요.'
						]
					}
				]
			},

			MAT_PAPER_COUPON: {
				deco: 'num-02-5030',
				title: '매트 용지',
				descriptions: [ '종이 본연을 텍스쳐를 느낄 수 있는 내추럴함이 돋보이는 용지에요.<br/>용지 두께(무게) : 보통(150gsm), 두꺼움(250gsm)' ],
				className: 'bg-gray col-2',
				children: [
					{
						image: 'ad-info-matte',
						attentions: [
							'일반 복사용지와 비슷한 재질로 내추럴한 느낌이에요.'
						]
					},
					{
						image: 'coupon-info-mat-02',
						attentions: [
							'종이 위에 연필로도 필기가 가능해요.'
						]
					}
				]
			},

			PREMIUM_SOFT_PAPER_COUPON: {
				deco: 'num-03-5030',
				title: '프리미엄 소프트 용지',
				descriptions: [ '자연스러운 광택과 높은 백색도로 깨끗함을 느껴보세요.<br/>용지 무게 : 230gsm' ],
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
						image: 'coupon-info-premiumsoft-02',
						attentions: [
							'망점 퍼짐을 최대한 억제하여 잉크 뭉침이 적고 세밀하고 선명하게 표현되.',
							'사진이나 이미지 재현에 탁월해요.'
						]
					}
				]
			},

			PREMIUM_MAT_PAPER_COUPON: {
				deco: 'num-04-5030',
				title: '프리미엄 매트 용지',
				descriptions: [ '부드럽고 따뜻한 느낌으로 편안함을 전달해 보세요.<br/>용지 무게 : 250gsm' ],
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
						image: 'coupon-info-premiummat-02',
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
						image: 'gsm-premiumsoft-230',
						title: '프리미엄 소프트',
						roundDescription: '230gsm'
					},
					{
						image: 'gsm-premiummat-250',
						title: '프리미엄 매트',
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
			COUPON_SIZE: {
				title: '필요한 사이즈를 확인하세요.',
				className: 'bg-white col-1 border-top',
				children: [
					{
						image: 'coupon-size'
					}
				]
			},

			//end
			COUPON_TITLE: {
				title: '가변 데이터로 특별한 쿠폰을 만들어 보세요.',
				className: 'bg-gray vertical-border',
				descriptions: [ '폰트 종류, 색상, 사이즈는 자유롭게 설정 가능해요.' ]
			},
			SERIAL_NUMBER: {
				deco: 'num-01-5030',
				title: '일련번호',
				descriptions: [ '수량만큼 순차적으로 일련번호가 자동으로 생성돼요.' ],
				className: 'bg-gray col-2',
				children: [
					{
						image: 'coupon-number-01-560360',
						attentions: [
							'편집기 > 가변 데이터의 [일련번호 생성] 버튼을 선택해 주세요.',
							`“00000001”부터 <em class="blue">8자리의 번호</em>가 수량만큼 자동으로 생성돼요.`
						]
					},
					{
						image: 'coupon-number-02-560360',
						attentions: [
							'수량이 많은 할인 행사권이나, 결혼 식권, 상품권 등에 넘버링 하기에  좋아요.'
						]
					}
				]
			},
			RANDOM_NUMBER: {
				deco: 'num-02-5030',
				title: '랜덤번호',
				descriptions: [ '숫자와 영문으로 조합된 랜덤번호가 자동 생성돼요.' ],
				className: 'bg-white col-2',
				children: [
					{
						image: 'coupon-random-01-560360',
						attentions: [
							'편집기 > 가변 데이터의 [랜덤번호 생성] 버튼을 선택해 주세요.',
							`숫자와 영문이 조합된 <em class="blue">16자리 랜덤 번호</em>가 수량만큼 자동으로 만들어져요.`
						]
					},
					{
						image: 'coupon-random-02-560360',
						attentions: [
							'추첨이나 선착순 이벤트를 진행할 때 효과적으로 활용할 수 있어요.'
						]
					}
				]
			},
			DIRECT_UPLOAD: {
				deco: 'num-03-5030',
				title: '직접 업로드',
				descriptions: [ '직접 만든 쿠폰 번호로 개인화된 쿠폰 코드를 만들 수 있어요.' ],
				className: 'bg-gray col-2',
				children: [
					{
						image: 'coupon-upload-01-560360',
						attentions: [
							'편집기 > 가변 데이터의 [직접 업로드] 버튼을 선택해 주세요.',
							`<em class="blue">[엑셀 파일 가이드]</em> 확인 후 양식에 맞춰 파일을 업로드 하면, <em class="blue">최대 5개</em>까지 원하는 쿠폰 번호를<br/>직접 만들 수 있어요.`
						]
					},
					{
						image: 'coupon-upload-02-560360',
						attentions: [
							'특별한 고객에게 의미를 담은 메시지로 개인화된 쿠폰 코드를 제공할 수 있어요.'
						]
					}
				]
			},
			EXCEL_TITLE: {
				title: '엑셀 파일 가이드',
				descriptions: [ '[직접 업로드]로 가변 데이터를 생성 할 경우 가이드에 맞춰 엑셀파일을 업로드해 주세요.' ],
				className: 'bg-white excel'
			},
			EXCEL_WRITE: {
				title: '가변 데이터 작성하기',
				className: 'bg-white col-2 border-top excel',
				children: [
					{
						image: 'coupon-excel-01',
						descriptions: [ '설정한 수량 만큼 원하는 가변 데이터(쿠폰 번호) 정보를 작성해 주세요.<br/>예 : 수량이 <em class="blue">100매</em>인 경우, [가변 데이터] <em class="blue">항목을 100번까지 작성</em>' ]
					},
					{
						image: 'coupon-excel-02',
						descriptions: [ '수량에 맞춰 입력한 가변 데이터가 자동으로 출력되어 제작됩니다.' ]
					},
					{
						image: 'coupon-excel-03',
						descriptions: [ '수량보다 가변 데이터가 적을 때' ]
					},
					{
						image: 'coupon-excel-04',
						descriptions: [ '작성되지 않은 가변 데이터는 출력되지 않기 때문에 여분의 쿠폰을 준비할 수 있어요.' ]
					},
					{
						image: 'coupon-excel-05',
						descriptions: [ '수량보다  가변 데이터가 많을 때' ]
					},
					{
						image: 'coupon-excel-06',
						descriptions: [ '설정한 상품의 수량만큼 상품이 제작되기 때문에 초과된 가변 데이터는 제작되지 않아요.' ]
					}
				]
			},
			EXCEL_MAX: {
				title: '최대 다섯 개의 가변 데이터를 직접 만들 수 있어요.',
				className: 'bg-white col-2 border-top excel',
				children: [
					{
						image: 'coupon-excel-07',
						descriptions: [ '하나의 가변 데이터를 입력하였을 경우' ]
					},
					{
						image: 'coupon-excel-08',
						descriptions: [ '작성된 내용 중 가장 긴 텍스트를 추출하여 미리 보기 형식으로 하나의 텍스트 상자가 생성돼요.' ]
					},
					{
						image: 'coupon-excel-09',
						descriptions: [ '여러 개의 가변 데이터를 입력하였을 경우' ]
					},
					{
						image: 'coupon-excel-10',
						descriptions: [ '작성한 항목의 개수만큼 여러 개의 텍스트 상자가 생성돼요.<br/><em class="blue">* 최대 다섯 개까지 생성 가능</em>' ]
					}
				]
			},
			EXCEL_DECO: {
				title: '일반 텍스트와 동일하게 폰트 크기, 색상 변경 등<br/>자유롭게 꾸며보세요.',
				className: 'bg-white col-2 border-top excel',
				children: [
					{
						image: 'coupon-edit-01',
						descriptions: [ '폰트 종류, 크기, 위치 조절 등 <em class="blue">간단한 편집이 가능해요.<em>' ]
					},
					{
						image: 'coupon-edit-02',
						descriptions: [ '다양한 색상이 지원되어 원하는 색상을 자유롭게 선택할 수 있어요.' ]
					}
				]
			}
		}
	},
	CONTENTS: {
		DEFAULTS: {
			title: '쿠폰',
			attentions: [
				'놀라운 혜택, 더 놀랍게 전해보세요.',
				'할인 쿠폰 및 초대장 등으로 사용해 보세요.'
			],
			services: [
				'PAPER_TITLE','SOFT_PAPER_COUPON_TITLE','MAT_PAPER_COUPON','PREMIUM_SOFT_PAPER_COUPON','PREMIUM_MAT_PAPER_COUPON','ATMOSPHERE_EFFECT','NEW_TEXTURE','NEW_GSM','PAPER_ELASTIC','COUPON_TITLE', 'SERIAL_NUMBER', 'RANDOM_NUMBER', 'DIRECT_UPLOAD', 'EXCEL_TITLE', 'EXCEL_WRITE', 'EXCEL_MAX', 'EXCEL_DECO'
			]
		}
	}
};
