

export const ACRYLIC_SIGN = {
	COMMON: {
		option: {
			ACRYLIC_SIGN_A4: {
				thumbnail: 'detail-size-acrylic-a-4',
				title: 'A4',
				attentions: [
					'210mm x 297mm'
				]
			},
			ACRYLIC_SIGN_A3: {
				thumbnail: 'detail-size-acrylic-a-3',
				title: 'A3',
				attentions: [
					'297mm x 420mm'
				]
			},
			ACRYLIC_SIGN_A2: {
				thumbnail: 'detail-size-acrylic-a-2',
				title: 'A2',
				attentions: [
					'420mm x 594mm'
				]
			},
			ACRYLIC_SIGN_A1: {
				thumbnail: 'detail-size-acrylic-a-1',
				title: 'A1',
				attentions: [
					'594mm x 840mm'
				]
			},
			ACRYLIC_SIGN_B4: {
				thumbnail: 'detail-size-acrylic-b-4',
				title: 'B4',
				attentions: [
					'240mm x 347mm'
				]
			},
			ACRYLIC_SIGN_B3: {
				thumbnail: 'detail-size-acrylic-b-3',
				title: 'B3',
				attentions: [
					'347mm x 500mm'
				]
			},
			ACRYLIC_SIGN_B2: {
				thumbnail: 'detail-size-acrylic-b-2',
				title: 'B2',
				attentions: [
					'500mm x 720mm'
				]
			},
			METAL_WALL: {
				thumbnail: 'detail-option-acrylic-wall-gold',
				title: '금속 벽걸이',
				description: '알루미늄 금속 재질로 튼튼하게<br/>거치할 수 있어요.'
			},
			NOT_SELECTED: {
				thumbnail: 'detail-option-acrylic-wall-none',
				title: '선택 안함',
				description: '벽걸이 없이 제공되는 형태로, 원하는<br/>공간에 자유롭게 배치해 보세요.'
			}
		},
		variations: [
			{
				attributes: [ 'PP_GLOSSY', 'ACRYLIC_SIGN_A4', 'NOT_SELECTED' ],
				image: 'sp-product-acrylicsign-a-4'
			},
			{
				attributes: [ 'PP_GLOSSY', 'ACRYLIC_SIGN_A4', 'METAL_WALL' ],
				image: 'sp-product-acrylicsign-a-4'
			},
			{
				attributes: [ 'PP_GLOSSY', 'ACRYLIC_SIGN_A3', 'NOT_SELECTED' ],
				image: 'sp-product-acrylicsign-a-3'
			},
			{
				attributes: [ 'PP_GLOSSY', 'ACRYLIC_SIGN_A3', 'METAL_WALL' ],
				image: 'sp-product-acrylicsign-a-3'
			},
			{
				attributes: [ 'PP_GLOSSY', 'ACRYLIC_SIGN_A2', 'NOT_SELECTED' ],
				image: 'sp-product-acrylicsign-a-2'
			},
			{
				attributes: [ 'PP_GLOSSY', 'ACRYLIC_SIGN_A2', 'METAL_WALL' ],
				image: 'sp-product-acrylicsign-a-2'
			},
			{
				attributes: [ 'PP_GLOSSY', 'ACRYLIC_SIGN_A1', 'NOT_SELECTED' ],
				image: 'sp-product-acrylicsign-a-1'
			},
			{
				attributes: [ 'PP_GLOSSY', 'ACRYLIC_SIGN_A1', 'METAL_WALL' ],
				image: 'sp-product-acrylicsign-a-1'
			},
			{
				attributes: [ 'PP_GLOSSY', 'ACRYLIC_SIGN_B4', 'NOT_SELECTED' ],
				image: 'sp-product-acrylicsign-b-4'
			},
			{
				attributes: [ 'PP_GLOSSY', 'ACRYLIC_SIGN_B4', 'METAL_WALL' ],
				image: 'sp-product-acrylicsign-b-4'
			},
			{
				attributes: [ 'PP_GLOSSY', 'ACRYLIC_SIGN_B3', 'NOT_SELECTED' ],
				image: 'sp-product-acrylicsign-b-3'
			},
			{
				attributes: [ 'PP_GLOSSY', 'ACRYLIC_SIGN_B3', 'METAL_WALL' ],
				image: 'sp-product-acrylicsign-b-3'
			},
			{
				attributes: [ 'PP_GLOSSY', 'ACRYLIC_SIGN_B2', 'NOT_SELECTED' ],
				image: 'sp-product-acrylicsign-b-2'
			},
			{
				attributes: [ 'PP_GLOSSY', 'ACRYLIC_SIGN_B2', 'METAL_WALL' ],
				image: 'sp-product-acrylicsign-b-2'
			}
		],

		showcases: {
			//start
			ACRYLIC_SIGN_INTRODUCE: {
				title: '유리처럼 깨끗한 프리미엄 아크릴 사인',
				className: 'bg-white col-2',
				children: [
					{
						image: 'acrylic-info-01',
						attentions: [
							'뛰어난 광택과 생생한 색상표현으로 갤러리와 같은 고급스러운 분위기를 연출해요.'
						]
					},
					{
						image: 'acrylic-info-02',
						attentions: [
							'유리보다 고순도 아크릴과 알루미늄 복합 판넬로 만들어 튼튼하면서도 가벼워요.'
						]
					},
					{
						image: 'acrylic-info-03',
						attentions: [
							'6mm 두께에 45도 각도의 세심한 앞면 컷팅으로 입체감이 돋보여요.'
						]
					},
					{
						image: 'acrylic-info-04',
						attentions: [
							'수분과 오염에 강해 오랜 기간 사용해도 변하지 않아요<br/>(단, 옆면은 오염에 장시간 노출 시 변색 될 수 있음)'
						]
					}
				]
			},

			ACRYLIC_SIGN_WALL_HANGINGS: {
				title: '용도에 맞는 벽걸이를 선택하세요.',
				className: 'bg-gray col-2',
				children: [
					{
						image: 'info-acrylic-metalhook',
						descriptions: [
							'<h3>금속 벽걸이</h3><h5>알루미늄 소재로 튼튼하게 거치할 수 있어요.</h5>'
						]
					},
					{
						image: 'info-acrylic-nonehook',
						descriptions: [
							'<h3>선택 안함</h3><h5>벽걸이가 없는 형태로 원하는 곳에 자유롭게 배치해보세요.</h5>'
						]
					}
					]
			},

			ACRYLIC_SIGN_SIZE: {
				title: '필요한 사이즈를 확인하세요.',
				className: 'bg-white col-1',
				children: [
					{
						image: 'poster-size'
					}
				]
			}
		//end
		}
	},
	CONTENTS: {
		DEFAULTS: {
			title: '아크릴 사인',
			attentions: [
				'뛰어난 광택과 선명함 색감표현으로 홍보의 몰입도를<br/>높여보세요.'
			],
			services: [
				'ACRYLIC_SIGN_INTRODUCE','ACRYLIC_SIGN_WALL_HANGINGS','ACRYLIC_SIGN_SIZE'
			]
		}
	}
};