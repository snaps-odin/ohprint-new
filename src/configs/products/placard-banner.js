

export const PLACARD_BANNER = {
	COMMON: {
		option: {
			HORIZONTAL: {
				thumbnail: 'detail-banner-size-5000-x-900',
				title: '가로'
			},
			VERTICAL: {
				thumbnail: 'detail-banner-size-700-x-2500',
				title: '세로'
			},
			SQUARE: {
				thumbnail: 'detail-banner-size-900-x-900',
				title: '정사각'
			},
			MANUAL_SIZE: {
				thumbnail: 'detail-banner-size-free',
				title: '직접 입력'
			},
			PLACARD_BANNER_5000X900: {
				thumbnail: 'detail-banner-size-5000-x-900',
				title: '5000mm x 900mm'
			},
			PLACARD_BANNER_4000X700: {
				thumbnail: 'detail-banner-size-4000-x-700',
				title: '4000mm x 700mm'
			},
			PLACARD_BANNER_2500X700: {
				thumbnail: 'detail-banner-size-2500-x-700',
				title: '2500mm x 700mm'
			},
			PLACARD_BANNER_900X5000: {
				thumbnail: 'detail-banner-size-900-x-5000',
				title: '900mm x 5000mm'
			},
			PLACARD_BANNER_700X4000: {
				thumbnail: 'detail-banner-size-700-x-4000',
				title: '700mm x 4000mm'
			},
			PLACARD_BANNER_700X2500: {
				thumbnail: 'detail-banner-size-700-x-2500',
				title: '700mm x 2500mm'
			},
			PLACARD_BANNER_A2: {
				thumbnail: 'detail-banner-size-a-2',
				title: 'A2',
				attentions: [
					'420mm x 594mm'
				]
			},
			PLACARD_BANNER_A1: {
				thumbnail: 'detail-banner-size-a-1',
				title: 'A1',
				attentions: [
					'594mm x 840mm'
				]
			},
			PLACARD_BANNER_B2: {
				thumbnail: 'detail-banner-size-b-2',
				title: 'B2',
				attentions: [
					'500mm x 720mm'
				]
			},
			PLACARD_BANNER_900X900: {
				thumbnail: 'detail-banner-size-900-x-900',
				title: '900mm x 900mm'
			},
			PLACARD_BANNER_1200X1200: {
				thumbnail: 'detail-banner-size-1200-x-1200',
				title: '1200mm x 1200mm'
			},
			BANNER_CLOTH: {
				thumbnail: 'detail-banner-paper-standard',
				title: '현수막천',
				description: '가장 일반적인 소재로 다양한 용도로<br/>사용이 가능하나, 햇빛에 장기간<br/>노출될 경우 변색될 수 있어요.'
			},
			TENT_CLOTH: {
				thumbnail: 'detail-banner-paper-tent',
				title: '텐트천',
				description: '선명한 색감 표현은 물론,<br/>도톰한 두께감으로 비침이 적고<br/>내구성이 뛰어나요.',
				attentions: [
					'폴리에스테르 100%'
				]
			},
			MESH: {
				thumbnail: 'detail-banner-paper-mesh',
				title: '메쉬  ',
				description: '미세한 구멍이 촘촘히 있어 바람에<br/>강하고, 비에 젖어도 금세 말라 장기간<br/>실외에서 사용하기 좋아요.'
			},
			GLASS_ATTACH_RUBBER: {
				thumbnail: 'detail-banner-option-01',
				title: '유리 접착 고무',
				description: '네 모서리에 공기 압착 고무를 달아<br/>깔끔하게 유리에 붙일 수 있어요.'
			},
			METAL_RING: {
				thumbnail: 'detail-banner-option-02',
				title: '금속링 + 로프',
				description: '네 모서리에 금속링(아일렛)처리가<br/>되어 로프를 연결하여 설치하기<br/>편리해요.',
				attentions: [
					'로프 길이 10m'
				]
			},
			ROPE_ROUND_POLE: {
				thumbnail: 'detail-banner-option-03',
				title: '원형막대 + 로프',
				description: '양쪽 끝에 원형 나무 막대를 넣어<br/>바람이 불어도 안정되고 튼튼해서<br/>실외에서 사용하기 좋아요.',
				attentions: [
					'로프 길이 20m'
				]
			},
			SEWING: {
				thumbnail: 'detail-banner-option-04',
				title: '재봉선',
				description: '양쪽 끝에 봉이나 막대를<br/>끼울 수 있게 재봉하여 제공해요.',
				attentions: [
					'지름 10cm'
				]
			},
			NOT_SELECTED: {
				thumbnail: 'detail-banner-option-05',
				title: '선택 안함',
				description: '별도의 처리없이 해당 사이즈로<br/>재단되어 있어요.'
			}
		},
		variations: [
			{
				attributes: [ 'MANUAL_SIZE', 'BANNER_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-freesize'
			},
			{
				attributes: [ 'MANUAL_SIZE', 'BANNER_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-freesize'
			},
			{
				attributes: [ 'MANUAL_SIZE', 'BANNER_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-freesize'
			},
			{
				attributes: [ 'MANUAL_SIZE', 'BANNER_CLOTH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-freesize'
			},
			{
				attributes: [ 'MANUAL_SIZE', 'BANNER_CLOTH', 'SEWING' ],
				image: 'sp-product-banner-freesize'
			},
			{
				attributes: [ 'MANUAL_SIZE', 'TENT_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-freesize'
			},
			{
				attributes: [ 'MANUAL_SIZE', 'TENT_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-freesize'
			},
			{
				attributes: [ 'MANUAL_SIZE', 'TENT_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-freesize'
			},
			{
				attributes: [ 'MANUAL_SIZE', 'TENT_CLOTH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-freesize'
			},
			{
				attributes: [ 'MANUAL_SIZE', 'TENT_CLOTH', 'SEWING' ],
				image: 'sp-product-banner-freesize'
			},
			{
				attributes: [ 'MANUAL_SIZE', 'MESH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-freesize'
			},
			{
				attributes: [ 'MANUAL_SIZE', 'MESH', 'SEWING' ],
				image: 'sp-product-banner-freesize'
			},
			{
				attributes: [ 'MANUAL_SIZE', 'MESH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-freesize'
			},
			{
				attributes: [ 'MANUAL_SIZE', 'MESH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-freesize'
			},
			{
				attributes: [ 'MANUAL_SIZE', 'MESH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-freesize'
			},
			{
				attributes: [ 'MANUAL_SIZE', 'MESH', 'SEWING' ],
				image: 'sp-product-banner-freesize'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_5000X900', 'BANNER_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-5000-x-900'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_5000X900', 'BANNER_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-5000-x-900'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_5000X900', 'BANNER_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-5000-x-900'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_5000X900', 'BANNER_CLOTH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-5000-x-900'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_5000X900', 'BANNER_CLOTH', 'SEWING' ],
				image: 'sp-product-banner-5000-x-900'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_5000X900', 'TENT_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-5000-x-900'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_5000X900', 'TENT_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-5000-x-900'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_5000X900', 'TENT_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-5000-x-900'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_5000X900', 'TENT_CLOTH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-5000-x-900'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_5000X900', 'TENT_CLOTH', 'SEWING' ],
				image: 'sp-product-banner-5000-x-900'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_5000X900', 'MESH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-5000-x-900'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_5000X900', 'MESH', 'SEWING' ],
				image: 'sp-product-banner-5000-x-900'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_5000X900', 'MESH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-5000-x-900'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_5000X900', 'MESH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-5000-x-900'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_5000X900', 'MESH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-5000-x-900'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_5000X900', 'MESH', 'SEWING' ],
				image: 'sp-product-banner-5000-x-900'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_4000X700', 'BANNER_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-4000-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_4000X700', 'BANNER_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-4000-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_4000X700', 'BANNER_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-4000-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_4000X700', 'BANNER_CLOTH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-4000-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_4000X700', 'BANNER_CLOTH', 'SEWING' ],
				image: 'sp-product-banner-4000-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_4000X700', 'TENT_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-4000-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_4000X700', 'TENT_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-4000-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_4000X700', 'TENT_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-4000-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_4000X700', 'TENT_CLOTH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-4000-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_4000X700', 'TENT_CLOTH', 'SEWING' ],
				image: 'sp-product-banner-4000-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_4000X700', 'MESH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-4000-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_4000X700', 'MESH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-4000-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_4000X700', 'MESH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-4000-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_4000X700', 'MESH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-4000-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_4000X700', 'MESH', 'SEWING' ],
				image: 'sp-product-banner-4000-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_2500X700', 'BANNER_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-2500-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_2500X700', 'BANNER_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-2500-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_2500X700', 'BANNER_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-2500-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_2500X700', 'BANNER_CLOTH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-2500-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_2500X700', 'BANNER_CLOTH', 'SEWING' ],
				image: 'sp-product-banner-2500-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_2500X700', 'TENT_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-2500-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_2500X700', 'TENT_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-2500-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_2500X700', 'TENT_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-2500-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_2500X700', 'TENT_CLOTH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-2500-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_2500X700', 'TENT_CLOTH', 'SEWING' ],
				image: 'sp-product-banner-2500-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_2500X700', 'MESH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-2500-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_2500X700', 'MESH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-2500-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_2500X700', 'MESH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-2500-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_2500X700', 'MESH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-2500-x-700'
			},
			{
				attributes: [ 'HORIZONTAL', 'PLACARD_BANNER_2500X700', 'MESH', 'SEWING' ],
				image: 'sp-product-banner-2500-x-700'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_900X5000', 'BANNER_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-900-x-5000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_900X5000', 'BANNER_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-900-x-5000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_900X5000', 'BANNER_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-900-x-5000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_900X5000', 'BANNER_CLOTH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-900-x-5000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_900X5000', 'BANNER_CLOTH', 'SEWING' ],
				image: 'sp-product-banner-900-x-5000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_900X5000', 'TENT_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-900-x-5000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_900X5000', 'TENT_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-900-x-5000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_900X5000', 'TENT_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-900-x-5000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_900X5000', 'TENT_CLOTH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-900-x-5000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_900X5000', 'TENT_CLOTH', 'SEWING' ],
				image: 'sp-product-banner-900-x-5000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_900X5000', 'MESH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-900-x-5000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_900X5000', 'MESH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-900-x-5000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_900X5000', 'MESH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-900-x-5000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_900X5000', 'MESH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-900-x-5000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_900X5000', 'MESH', 'SEWING' ],
				image: 'sp-product-banner-900-x-5000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X4000', 'BANNER_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-700-x-4000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X4000', 'BANNER_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-700-x-4000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X4000', 'BANNER_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-700-x-4000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X4000', 'BANNER_CLOTH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-700-x-4000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X4000', 'BANNER_CLOTH', 'SEWING' ],
				image: 'sp-product-banner-700-x-4000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X4000', 'TENT_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-700-x-4000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X4000', 'TENT_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-700-x-4000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X4000', 'TENT_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-700-x-4000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X4000', 'TENT_CLOTH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-700-x-4000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X4000', 'TENT_CLOTH', 'SEWING' ],
				image: 'sp-product-banner-700-x-4000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X4000', 'MESH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-700-x-4000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X4000', 'MESH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-700-x-4000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X4000', 'MESH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-700-x-4000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X4000', 'MESH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-700-x-4000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X4000', 'MESH', 'SEWING' ],
				image: 'sp-product-banner-700-x-4000'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X2500', 'BANNER_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-700-x-2500'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X2500', 'BANNER_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-700-x-2500'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X2500', 'BANNER_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-700-x-2500'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X2500', 'BANNER_CLOTH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-700-x-2500'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X2500', 'BANNER_CLOTH', 'SEWING' ],
				image: 'sp-product-banner-700-x-2500'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X2500', 'TENT_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-700-x-2500'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X2500', 'TENT_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-700-x-2500'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X2500', 'TENT_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-700-x-2500'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X2500', 'TENT_CLOTH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-700-x-2500'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X2500', 'TENT_CLOTH', 'SEWING' ],
				image: 'sp-product-banner-700-x-2500'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X2500', 'MESH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-700-x-2500'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X2500', 'MESH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-700-x-2500'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X2500', 'MESH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-700-x-2500'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X2500', 'MESH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-700-x-2500'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_700X2500', 'MESH', 'SEWING' ],
				image: 'sp-product-banner-700-x-2500'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_A2', 'BANNER_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-a-2'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_A2', 'BANNER_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-a-2'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_A2', 'BANNER_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-a-2'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_A2', 'TENT_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-a-2'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_A2', 'TENT_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-a-2'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_A2', 'TENT_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-a-2'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_A2', 'MESH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-a-2'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_A2', 'MESH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-a-2'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_A2', 'MESH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-a-2'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_A1', 'BANNER_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-a-1'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_A1', 'BANNER_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-a-1'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_A1', 'BANNER_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-a-1'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_A1', 'TENT_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-a-1'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_A1', 'TENT_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-a-1'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_A1', 'TENT_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-a-1'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_A1', 'MESH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-a-1'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_A1', 'MESH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-a-1'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_A1', 'MESH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-a-1'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_B2', 'BANNER_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-b-2'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_B2', 'BANNER_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-b-2'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_B2', 'BANNER_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-b-2'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_B2', 'TENT_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-b-2'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_B2', 'TENT_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-b-2'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_B2', 'TENT_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-b-2'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_B2', 'MESH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-b-2'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_B2', 'MESH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-b-2'
			},
			{
				attributes: [ 'VERTICAL', 'PLACARD_BANNER_B2', 'MESH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-b-2'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_900X900', 'BANNER_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-900-x-900'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_900X900', 'BANNER_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-900-x-900'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_900X900', 'BANNER_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-900-x-900'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_900X900', 'BANNER_CLOTH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-900-x-900'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_900X900', 'BANNER_CLOTH', 'SEWING' ],
				image: 'sp-product-banner-900-x-900'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_900X900', 'TENT_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-900-x-900'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_900X900', 'TENT_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-900-x-900'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_900X900', 'TENT_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-900-x-900'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_900X900', 'TENT_CLOTH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-900-x-900'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_900X900', 'TENT_CLOTH', 'SEWING' ],
				image: 'sp-product-banner-900-x-900'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_900X900', 'MESH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-900-x-900'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_900X900', 'MESH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-900-x-900'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_900X900', 'MESH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-900-x-900'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_900X900', 'MESH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-900-x-900'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_900X900', 'MESH', 'SEWING' ],
				image: 'sp-product-banner-900-x-900'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_1200X1200', 'BANNER_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-1200-x-1200'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_1200X1200', 'BANNER_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-1200-x-1200'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_1200X1200', 'BANNER_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-1200-x-1200'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_1200X1200', 'BANNER_CLOTH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-1200-x-1200'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_1200X1200', 'BANNER_CLOTH', 'SEWING' ],
				image: 'sp-product-banner-1200-x-1200'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_1200X1200', 'TENT_CLOTH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-1200-x-1200'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_1200X1200', 'TENT_CLOTH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-1200-x-1200'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_1200X1200', 'TENT_CLOTH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-1200-x-1200'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_1200X1200', 'TENT_CLOTH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-1200-x-1200'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_1200X1200', 'TENT_CLOTH', 'SEWING' ],
				image: 'sp-product-banner-1200-x-1200'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_1200X1200', 'MESH', 'NOT_SELECTED' ],
				image: 'sp-product-banner-1200-x-1200'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_1200X1200', 'MESH', 'GLASS_ATTACH_RUBBER' ],
				image: 'sp-product-banner-1200-x-1200'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_1200X1200', 'MESH', 'METAL_RING', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-1200-x-1200'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_1200X1200', 'MESH', 'ROPE_ROUND_POLE', '_3M', '_10M', '_20M' ],
				image: 'sp-product-banner-1200-x-1200'
			},
			{
				attributes: [ 'SQUARE', 'PLACARD_BANNER_1200X1200', 'MESH', 'SEWING' ],
				image: 'sp-product-banner-1200-x-1200'
			}
		]
	},
	CONTENTS: {
		DEFAULTS: {
			title: '현수막',
			attentions: [
				'실내, 실외 어디서든 선명하게 홍보해 보세요.',
				`직접 입력 옵션으로 원하는 사이즈 현수막을<br/>만들어보세요.`,
				'최소 200 x 200mm ~ 최대 3,000 x 25,000mm'
			]
		}
	}
};
