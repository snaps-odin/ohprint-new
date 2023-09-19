

export const MINI_BANNER = {
	COMMON: {
		option: {
			MINI_BANNER_150X300: {
				thumbnail: 'detail-minibanner-size-150-x-300',
				title: '150mm x 300mm'
			},
			MINI_BANNER_180X420: {
				thumbnail: 'detail-minibanner-size-180-x-420',
				title: '180mm x 420mm'
			},
			CLEAR_HOLDER: {
				thumbnail: 'detail-minibanner-option-01',
				title: '투명 거치대',
				description: '일체형으로 되어있어 쉽게 조립<br/>가능하고 보관과 운반이 용이해요.'
			},
			NOT_SELECTED: {
				thumbnail: 'detail-minibanner-option-02',
				title: '선택 안함',
				description: '네 모서리에 3mm 지름의 구멍이<br/>뚫려있어 전용 거치대를 사용하여<br/>거치할 수 있어요.'
			}
		},
		variations: [
			{
				attributes: [ 'PET', 'MINI_BANNER_150X300', 'NOT_SELECTED' ],
				image: 'sp-product-minibanner-150-x-300-none'
			},
			{
				attributes: [ 'PET', 'MINI_BANNER_150X300', 'CLEAR_HOLDER' ],
				image: 'sp-product-minibanner-150-x-300'
			},
			{
				attributes: [ 'PET', 'MINI_BANNER_180X420', 'NOT_SELECTED' ],
				image: 'sp-product-minibanner-180-x-420-none'
			},
			{
				attributes: [ 'PET', 'MINI_BANNER_180X420', 'CLEAR_HOLDER' ],
				image: 'sp-product-minibanner-180-x-420'
			}
		]
	},
	CONTENTS: {
		DEFAULTS: {
			title: '미니 배너',
			attentions: [
				'작은 사이즈로 테이블 및 선반 위 등 좁은 공간에서도<br/>홍보하기 좋아요.',
				'소재 : PET'
			]
		}
	}
};
