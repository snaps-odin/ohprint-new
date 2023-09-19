

export const WOODEN_FRAME_SIGN = {
	COMMON: {
		option: {
			WOODEN_FRAME_SIGN_A4: {
				thumbnail: 'detail-size-wood-a-4',
				title: 'A4',
				attentions: [
					'210mm x 297mm'
				]
			},
			WOODEN_FRAME_SIGN_A3: {
				thumbnail: 'detail-size-wood-a-3',
				title: 'A3',
				attentions: [
					'297mm x 420mm'
				]
			},
			WOODEN_FRAME_SIGN_A2: {
				thumbnail: 'detail-size-wood-a-2',
				title: 'A2',
				attentions: [
					'420mm x 594mm'
				]
			},
			WOODEN_FRAME_SIGN_A1: {
				thumbnail: 'detail-size-wood-a-1',
				title: 'A1',
				attentions: [
					'594mm x 840mm'
				]
			},
			NATURAL: {
				thumbnail: 'detail-option-frame-natural',
				title: '내추럴',
				description: '천연 원목의 나뭇결이 그대로<br/>살아있어 따뜻함이 느껴져요.'
			},
			WALNUT: {
				thumbnail: 'detail-option-frame-walnut',
				title: '월넛',
				description: '깊고 진한 갈색으로 견고하고<br/>우아하게 표현할 수 있어요.'
			},
			BLACK: {
				thumbnail: 'detail-option-frame-black',
				title: '블랙',
				description: '무채색의 심플한 고급스러움을<br/>한껏 느낄 수 있어요.'
			}
		},
		variations: [
			{
				attributes: [ 'PRO_PHOTO', 'WOODEN_FRAME_SIGN_A4', 'NATURAL' ],
				image: 'sp-product-woodensign-natural-a-4'
			},
			{
				attributes: [ 'PRO_PHOTO', 'WOODEN_FRAME_SIGN_A4', 'WALNUT' ],
				image: 'sp-product-woodensign-walnut-a-4'
			},
			{
				attributes: [ 'PRO_PHOTO', 'WOODEN_FRAME_SIGN_A4', 'BLACK' ],
				image: 'sp-product-woodensign-black-a-4'
			},
			{
				attributes: [ 'PRO_PHOTO', 'WOODEN_FRAME_SIGN_A3', 'NATURAL' ],
				image: 'sp-product-woodensign-natural-a-3'
			},
			{
				attributes: [ 'PRO_PHOTO', 'WOODEN_FRAME_SIGN_A3', 'WALNUT' ],
				image: 'sp-product-woodensign-walnut-a-3'
			},
			{
				attributes: [ 'PRO_PHOTO', 'WOODEN_FRAME_SIGN_A3', 'BLACK' ],
				image: 'sp-product-woodensign-black-a-3'
			},
			{
				attributes: [ 'PRO_PHOTO', 'WOODEN_FRAME_SIGN_A2', 'NATURAL' ],
				image: 'sp-product-woodensign-natural-a-2'
			},
			{
				attributes: [ 'PRO_PHOTO', 'WOODEN_FRAME_SIGN_A2', 'WALNUT' ],
				image: 'sp-product-woodensign-walnut-a-2'
			},
			{
				attributes: [ 'PRO_PHOTO', 'WOODEN_FRAME_SIGN_A2', 'BLACK' ],
				image: 'sp-product-woodensign-black-a-2'
			},
			{
				attributes: [ 'PRO_PHOTO', 'WOODEN_FRAME_SIGN_A1', 'NATURAL' ],
				image: 'sp-product-woodensign-natural-a-1'
			},
			{
				attributes: [ 'PRO_PHOTO', 'WOODEN_FRAME_SIGN_A1', 'WALNUT' ],
				image: 'sp-product-woodensign-walnut-a-1'
			},
			{
				attributes: [ 'PRO_PHOTO', 'WOODEN_FRAME_SIGN_A1', 'BLACK' ],
				image: 'sp-product-woodensign-black-a-1'
			}
		],

		showcases: {
			//start
			WOODEN_FRAME_SIGN_INTRODUCE: {
				title: '편안한 분위기를 연출하는 원목 사인',
				className: 'bg-white col-2',
				children: [
					{
						image: 'woodsign-info-01',
						attentions: [
							'아름다운 나뭇결은 따뜻하고 편안한 느낌을 줍니다.'
						]
					},
					{
						image: 'woodsign-info-02',
						attentions: [
							'모서리는 전통적인 짜맞춤 방식으로 본드 사용을 최소화 했어요.'
						]
					},
					{
						image: 'woodsign-info-03',
						attentions: [
							'앞면은 고광택 유리를 사용해 내용물을 변함없이 보존해요.'
						]
					},
					{
						image: 'woodsign-info-04',
						attentions: [
							'고급스럽게 마감된 뒷면에는 쉽게 걸 수 있는 벽걸이용 끈이 달려 있어요.'
						]
					}
				]
			},

			WOODEN_FRAME_SIGN_POLISH: {
				title: '원하는 분위기의 프레임을 확인하세요.',
				className: 'bg-gray vertical-border'
			},

			WOODEN_FRAME_SIGN_NATURAL: {
				deco: 'num-01-5030',
				title: '내추럴',
				className: 'bg-gray col-2',
				children: [
					{
						image: 'woodsign-natural-01',
						attentions: [
							'천연 원목의 나무 결이 그대로 느껴져 따뜻하고 편안해요.'
						]
					},
					{
						image: 'woodsign-natural-02',
						attentions: [
							'자연을 모티브로 하거나 밝은 디자인에 어울려요.'
						]
					}
				]
			},

			WOODEN_FRAME_SIGN_WALNUT: {
				deco: 'num-02-5030',
				title: '월넛',
				className: 'bg-white col-2',
				children: [
					{
						image: 'woodsign-walnut-01',
						attentions: [
							'깊고 진한 나무 색으로 우아하고 고급스러운 느낌이에요.'
						]
					},
					{
						image: 'woodsign-walnut-02',
						attentions: [
							'사진 이미지나 톤 다운된 디자인을 잘 담아줘요.'
						]
					}
				]
			},

			WOODEN_FRAME_SIGN_BLACK: {
				deco: 'num-03-5030',
				title: '블랙',
				className: 'bg-gray col-2',
				children: [
					{
						image: 'woodsign-black-01',
						attentions: [
							'모던하고 심플한 무채색의 블랙 컬러에 원목의 질감도 살아있어요. '
						]
					},
					{
						image: 'woodsign-black-02',
						attentions: [
							'화려하거나 단조로운 컬러의 디자인 어디에나 잘 어울려요.'
						]
					}
				]
			},

			WOODEN_FRAME_SIGN_SIZE: {
				title: '필요한 사이즈를 확인하세요.',
				className: 'bg-white col-1',
				children: [
					{
						image: 'woodsign-size'
					}
				]
			}
		//end
		}



	},
	CONTENTS: {
		DEFAULTS: {
			title: '원목 사인',
			attentions: [
				'원목의 나뭇결로 깔끔하고 고급스러운 벽면을<br/>연출해보세요.'
			],
			services: [
				'WOODEN_FRAME_SIGN_INTRODUCE','WOODEN_FRAME_SIGN_POLISH','WOODEN_FRAME_SIGN_NATURAL','WOODEN_FRAME_SIGN_WALNUT','WOODEN_FRAME_SIGN_BLACK','WOODEN_FRAME_SIGN_SIZE'
			]
		}
	}
};