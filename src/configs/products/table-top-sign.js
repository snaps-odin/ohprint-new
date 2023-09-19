

export const TABLE_TOP_SIGN = {
	COMMON: {
		option: {
			TABLE_TOP_SIGN_A6: {
				thumbnail: 'detail-size-tabletop-a-6',
				title: 'A6',
				attentions: [
					'105mm x 148mm'
				]
			},
			TABLE_TOP_SIGN_A5: {
				thumbnail: 'detail-size-tabletop-a-5',
				title: 'A5',
				attentions: [
					'148mm x 210mm'
				]
			},
			TABLE_TOP_SIGN_A4: {
				thumbnail: 'detail-size-tabletop-a-4',
				title: 'A4',
				attentions: [
					'210mm x 297mm'
				]
			}
		},
		variations: [
			{
				attributes: [ 'STANDARD_GLOSSY', 'TABLE_TOP_SIGN_A6' ],
				image: 'sp-product-tabletop-a-6'
			},
			{
				attributes: [ 'STANDARD_GLOSSY', 'TABLE_TOP_SIGN_A5' ],
				image: 'sp-product-tabletop-a-5'
			},
			{
				attributes: [ 'STANDARD_GLOSSY', 'TABLE_TOP_SIGN_A4' ],
				image: 'sp-product-tabletop-a-4'
			}
		],

		showcases: {
			//start
			TABLE_TOP_SIGN_INTRODUCE: {
				title: '작지만 시선을 끌기에 충분한 테이블탑 사인',
				className: 'bg-gray col-2',
				children: [
					{
						image: 'tabletop-info-01',
						attentions: [
							'앞에서는 지지대가 눈에 띄지 않아 깔끔하게 전시할 수 있어요.'
						]
					},
					{
						image: 'tabletop-info-02',
						attentions: [
							'프리미엄 포토 용지를 사용해 색상 표현이 뛰어나며 무광 코팅으로 고급스러움을 더했어요.'
						]
					},
					{
						image: 'tabletop-info-03',
						attentions: [
							'단단한 폼보드(5mm)에 실사 출력한 용지를 붙여 만들어요.'
						]
					},
					{
						image: 'tabletop-info-04',
						attentions: [
							'심플하지만 견고한 접이식 지지대로 어디든 안정적으로 세워 두세요.'
						]
					}
				]
			},
			TABLE_TOP_SIGN_SIZE: {
				title: '필요한 사이즈를 확인하세요.',
				className: 'bg-white col-1',
				children: [
					{
						image: 'tabletopsign-size'
					}
				]
			}
			//end
		}
	},
	CONTENTS: {
		DEFAULTS: {
			title: '테이블탑 사인',
			attentions: [
				'작지만 튼튼한 재질로 내구성이 좋으며,<br/>테이블 또는 선반 위에 홍보하기 좋아요.'
			],
			services: [
				'TABLE_TOP_SIGN_INTRODUCE','TABLE_TOP_SIGN_SIZE'
			]
		}
	}
};