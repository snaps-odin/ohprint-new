

export const DOUBLE_SIDE_BANNER = {
	COMMON: {
		option: {
			PET: {
				thumbnail: 'detail-doubleside-paper-pet',
				title: 'PET',
				description: '탄탄한 소재로 내구성이 우수하며,<br/>변색의 우려가 적고 오염에도 강해요.'
			},
			MESH: {
				thumbnail: 'detail-doubleside-paper-mesh',
				title: '메쉬',
				description: '미세한 구멍이 촘촘하게 있어 바람에<br/>강하고, 비에 젖어도 금세 말라 장기간<br/>실외에서 사용하기 좋아요.'
			},
			DOUBLE_SIDE_HOLDER: {
				thumbnail: 'detail-doubleside-option-01',
				title: '양면 거치대',
				description: '물통 받침 일체형으로 앞,뒤<br/>양쪽으로 사용가능하며, 실외에서<br/>안정적으로 거치 가능해요.',
				attentions: [
					'금속링(아일렛) 마감'
				]
			},
			GLASS_ATTACH_RUBBER: {
				thumbnail: 'detail-doubleside-option-02',
				title: '유리 접착 고무',
				description: '네 모서리에 금속링처리가 되어<br/>공기압착 고무를 달아 유리에<br/>붙일 수 있어요. 유리 접착 고무는<br/>탈부착 가능해요.'
			}
		},
		variations: [
			{
				attributes: [ 'DOUBLE_SIDE_BANNER', 'PET', 'NOT_SELECTED' ],
				image: 'sp-product-double-side-banner'
			},
			{
				attributes: [ 'DOUBLE_SIDE_BANNER', 'PET', 'DOUBLE_SIDE_HOLDER' ],
				image: 'sp-product-double-side-banner'
			},
			{
				attributes: [ 'DOUBLE_SIDE_BANNER', 'PET', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-double-side-banner-none'
			},
			{
				attributes: [ 'DOUBLE_SIDE_BANNER', 'MESH', 'NOT_SELECTED' ],
				image: 'sp-product-double-side-banner'
			},
			{
				attributes: [ 'DOUBLE_SIDE_BANNER', 'MESH', 'DOUBLE_SIDE_HOLDER' ],
				image: 'sp-product-double-side-banner'
			},
			{
				attributes: [ 'DOUBLE_SIDE_BANNER', 'MESH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-double-side-banner-none'
			}
		]
	},
	CONTENTS: {
		DEFAULTS: {
			title: '양면 배너',
			attentions: [
				'앞, 뒤 양쪽으로 사용하고,<br/>2배의 홍보 효과를 얻을 수 있어요.',
				'사이즈 : 600mm x 1800mm'
			]
		}
	}
};
