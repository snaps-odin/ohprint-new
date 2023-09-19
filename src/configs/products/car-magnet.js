

export const CAR_MAGNET = {
	COMMON: {
		option: {
			CAR_MAGNET_150X100: {
				thumbnail: 'detail-size-carmagnetic-150100',
				title: '150mm x 100mm'
			},
			CAR_MAGNET_300X200: {
				thumbnail: 'detail-size-carmagnetic-300200',
				title: '300mm x 200mm'
			}
			, CAR_MAGNET_450X300: {
				thumbnail: 'detail-size-carmagnetic-450300',
				title: '450mm x 300mm'
			},
			CAR_MAGNET_600X400: {
				thumbnail: 'detail-size-carmagnetic-600400',
				title: '600mm x 400mm'
			},
			CAR_MAGNET_400X97: {
				thumbnail: 'detail-size-carmagnetic-40097',
				title: '400mm x 97mm'
			},
			CAR_MAGNET_800X200: {
				thumbnail: 'detail-size-carmagnetic-800200',
				title: '800mm x 200mm'
			},
			CAR_MAGNET_1000X250: {
				thumbnail: 'detail-size-carmagnetic-1000250',
				title: '1000mm x 250mm'
			},
			CAR_MAGNET_1200X300: {
				thumbnail: 'detail-size-carmagnetic-1200300',
				title: '1200mm x 300mm'
			}
		},
		variations: [
			{
				attributes: [ 'PVC', 'CAR_MAGNET_150X100' ],
				image: 'sp-product-carmagnetic-150-x-100'
			},
			{
				attributes: [ 'PVC', 'CAR_MAGNET_300X200' ],
				image: 'sp-product-carmagnetic-300-x-200'
			},
			{
				attributes: [ 'PVC', 'CAR_MAGNET_450X300' ],
				image: 'sp-product-carmagnetic-450-x-300'
			},
			{
				attributes: [ 'PVC', 'CAR_MAGNET_600X400' ],
				image: 'sp-product-carmagnetic-600-x-400'
			},
			{
				attributes: [ 'PVC', 'CAR_MAGNET_400X97' ],
				image: 'sp-product-carmagnetic-400-x-97'
			},
			{
				attributes: [ 'PVC', 'CAR_MAGNET_800X200' ],
				image: 'sp-product-carmagnetic-800-x-200'
			},
			{
				attributes: [ 'PVC', 'CAR_MAGNET_1000X250' ],
				image: 'sp-product-carmagnetic-1000-x-250'
			},
			{
				attributes: [ 'PVC', 'CAR_MAGNET_1200X300' ],
				image: 'sp-product-carmagnetic-1200-x-300'
			}
		],

		showcases: {
			//start
			CAR_MARGNET_INTRODUCE: {
				title: '필요할 때마다 떼었다 붙이는 카 마그넷',
				className: 'bg-gray col-2',
				children: [
					{
						image: 'carmagnet-info-01',
						attentions: [
							'뒷면은 얇지만 탄탄한 자석 소재(2t)로 강력하게 붙어 있어요. '
						]
					},
					{
						image: 'carmagnet-info-02',
						attentions: [
							'앞면은 프리미엄 포토 용지를 사용해 색상 표현이 뛰어나고 무광 코팅으로 고급스러워요.'
						]
					},
					{
						image: 'carmagnet-info-03',
						attentions: [
							'손으로 쉽게 붙이고 뗄 수 있어요.',
							'안전을 위해 굴곡이 없는 평평한 면에 부착해 주세요.'
						]
					},
					{
						image: 'carmagnet-info-04',
						attentions: [
							'모서리는 라운드 커팅 되어 있어 들뜸 없이 부드러워요.'
						]
					}
				]
			},
			CAR_MARGNET_SIZE: {
				title: '필요한 사이즈를 확인하세요.',
				className: 'bg-white col-1',
				children: [
					{
						image: 'carmagnet-size'
					}
				]
			}
			//end
		}




	},
	CONTENTS: {
		DEFAULTS: {
			title: '카 마그넷',
			attentions: [
				'차량에 간편하게 탈부착 가능해 이동 시 홍보용으로<br/>사용하기 좋아요.'
			],
			services: [
				'CAR_MARGNET_INTRODUCE','CAR_MARGNET_SIZE'
			]
		}
	}
};