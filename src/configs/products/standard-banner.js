

export const STANDARD_BANNER = {
	COMMON: {
		option: {
			STANDARD_BANNER_600X1800: {
				thumbnail: 'detail-standardbanner-size-600-x-1800',
				title: '600mm x 1800mm'
			},
			STANDARD_BANNER_B2: {
				thumbnail: 'detail-standardbanner-size-b-2',
				title: 'B2',
				attentions: [
					'500mm x 720mm'
				]
			},
			STANDARD_BANNER_A1: {
				thumbnail: 'detail-standardbanner-size-a-1',
				title: 'A1',
				attentions: [
					'594mm x 840mm'
				]
			},
			PET: {
				thumbnail: 'detail-standardbanner-paper-pet',
				title: 'PET',
				description: '탄탄한 소재로 내구성이 우수하며,<br/>변색의 우려가 적고 오염에도 강해요.'
			},
			MESH: {
				thumbnail: 'detail-standardbanner-paper-mesh',
				title: '메쉬',
				description: '미세한 구멍이 촘촘하게 있어 바람에<br/>강하고, 비에 젖어도 금세 말라 장기간<br/>실외에서 사용하기 좋아요.'
			},
			X_TYPE: {
				thumbnail: 'detail-standardbanner-option-01',
				title: 'X형',
				description: '최적의 배너 각도를 연출하며,<br/>깔끔하고 가벼워 다양한 공간에서<br/>쉽게 설치할 수 있어요.',
				attentions: [
					'금속링(아일렛) 마감'
				]
			},
			Y_TYPE: {
				thumbnail: 'detail-standardbanner-option-02',
				title: 'Y형',
				description: '물통 받침 일체형으로 실외에서<br/>안정적으로 거치 가능해요.',
				attentions: [
					'금속링(아일렛) 마감'
				]
			},
			I_TYPE: {
				thumbnail: 'detail-standardbanner-option-03',
				title: 'I형',
				description: '공간을 적게 차지하고, 설치와 이동이<br/>편리해요. 포토월, 인터뷰존등에<br/>사용해 보세요.'
			},
			STAND_I_TYPE: {
				thumbnail: 'detail-standardbanner-option-04',
				title: '스탠드 I형',
				description: '인쇄물의 윗면과 아랫면을 고정 시켜<br/>실내 공간 어디에서든 주목도를<br/>높일 수 있어요.'
			},
			GLASS_ATTACH_RUBBER: {
				thumbnail: 'detail-standardbanner-option-05',
				title: '유리 접착 고무',
				description: '네 모서리에 금속링 처리가 되어<br/>공기 압착 고무를 달아 유리에<br/>붙일 수 있어요. 유리 접착 고무는<br/>탈부착 가능해요'
			},
			NOT_SELECTED: {
				thumbnail: 'detail-standardbanner-option-06',
				title: '선택 안함',
				description: '해당 사이즈에 맞게 재단 처리 되어<br/>양면테이프를 이용해 부착하거나<br/>I형 및 스탠드I형의 출력물을<br/>교체할수 있어요.'
			}
		},
		variations: [
			{
				attributes: [ 'STANDARD_BANNER_600X1800', 'PET', 'NOT_SELECTED' ],
				image: 'sp-product-standardbanner-600-x-1800'
			},
			{
				attributes: [ 'STANDARD_BANNER_600X1800', 'PET', 'X_TYPE' ],
				image: 'sp-product-standardbanner-option-x'
			},
			{
				attributes: [ 'STANDARD_BANNER_600X1800', 'PET', 'Y_TYPE' ],
				image: 'sp-product-standardbanner-option-y'
			},
			{
				attributes: [ 'STANDARD_BANNER_600X1800', 'PET', 'I_TYPE' ],
				image: 'sp-product-standardbanner-option-i'
			},
			{
				attributes: [ 'STANDARD_BANNER_600X1800', 'PET', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-standardbanner-600-x-1800-none'
			},
			{
				attributes: [ 'STANDARD_BANNER_600X1800', 'MESH', 'NOT_SELECTED' ],
				image: 'sp-product-standardbanner-600-x-1800-none'
			},
			{
				attributes: [ 'STANDARD_BANNER_600X1800', 'MESH', 'Y_TYPE' ],
				image: 'sp-product-standardbanner-option-y'
			},
			{
				attributes: [ 'STANDARD_BANNER_600X1800', 'MESH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-standardbanner-600-x-1800'
			},
			{
				attributes: [ 'STANDARD_BANNER_B2', 'PET', 'NOT_SELECTED' ],
				image: 'sp-product-standardbanner-option-b-2-none'
			},
			{
				attributes: [ 'STANDARD_BANNER_B2', 'PET', 'STAND_I_TYPE' ],
				image: 'sp-product-standardbanner-option-stand-i-b-2'
			},
			{
				attributes: [ 'STANDARD_BANNER_B2', 'PET', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-standardbanner-b-2'
			},
			{
				attributes: [ 'STANDARD_BANNER_A1', 'PET', 'NOT_SELECTED' ],
				image: 'sp-product-standardbanner-option-a-1-none'
			},
			{
				attributes: [ 'STANDARD_BANNER_A1', 'PET', 'STAND_I_TYPE' ],
				image: 'sp-product-standardbanner-option-stand-i-a-1'
			},
			{
				attributes: [ 'STANDARD_BANNER_A1', 'PET', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-standardbanner-a-1'
			}
		]
	},
	CONTENTS: {
		DEFAULTS: {
			title: '스탠다드 배너',
			attentions: [
				'어떤 공간에서도 간편하게 설치하여 홍보할 수 있어요.'
			]
		}
	}
};
