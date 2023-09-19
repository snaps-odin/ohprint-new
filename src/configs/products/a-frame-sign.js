

export const A_FRAME_SIGN = {
	COMMON: {
		option: {
			WHITE: {
				thumbnail: 'detail-aframe-color-white',
				title: '화이트',
				description: '출력물과 함께 화이트 색상의<br/>A 프레임이 함께 제공돼요.'
			},
			BLACK: {
				thumbnail: 'detail-aframe-color-black',
				title: '블랙',
				description: '출력물과 함께 블랙 색상의<br/>A 프레임이 함께 제공돼요.'
			},
			NOT_SELECTED: {
				thumbnail: 'detail-aframe-none',
				title: '선택 안함',
				description: '프레임 없이 제공되는 형태로,<br/>기존 사용 중인 A 프레임에<br/>출력물을 교체할 수 있어요.'
			}
		},
		variations: [
			{
				attributes: [ 'A_FRAME_SIGN_450X800', 'STANDARD_GLOSSY', 'WHITE' ],
				image: 'sp-list-sign-aframe-white-450-x-800'
			},
			{
				attributes: [ 'A_FRAME_SIGN_450X800', 'STANDARD_GLOSSY', 'BLACK' ],
				image: 'sp-list-sign-aframe-black-450-x-800'
			},
			{
				attributes: [ 'A_FRAME_SIGN_450X800', 'STANDARD_GLOSSY', 'NOT_SELECTED' ],
				image: 'sp-list-sign-aframe-none-450-x-800'
			}
		],

		showcases: {
			//start
			A_FRAME_SIGN_INTRODUCE: {
				title: '스타일과 실용성을 모두 겸비한 A프레임 사인',
				className: 'bg-gray col-2',
				children: [
					{
						image: 'aframe-info-01',
						attentions: [
							'뛰어난 내구성의 철제 프레임으로 안정적으로 세워 두세요.'
						]
					},
					{
						image: 'aframe-info-02',
						attentions: [
							'손쉽게 이동할 수 있는 손잡이가 달려있어요.'
						]
					},
					{
						image: 'aframe-info-03',
						attentions: [
							'접이식으로 보관이 용이해요. '
						]
					},
					{
						image: 'aframe-info-04',
						attentions: [
							'언제든 새로운 내용으로 바꾸어 사용할 수 있어요.'
						]
					},
					{
						image: 'aframe-info-05',
						attentions: [
							'프리미엄 포토 용지를 사용해 색상 표현이 뛰어나며 무광 코팅으로 고급스러움을 더했어요.'
						]
					},
					{
						image: 'aframe-info-06',
						attentions: [
							'견고한 포맥스 보드(5mm)를 덧대어 뒤틀림이 적고 오랫동안 사용할 수 있어요.'
						]
					}
				]
			},
			A_FRAME_SIGN_SIZE: {
				title: '프레임 색상에 따라 분위기가 달라져요.',
				className: 'bg-white col-2',
				children: [
					{
						image: 'aframe-white',
						descriptions: [
							'화이트'
						]
					},
					{
						image: 'aframe-black',
						descriptions: [
							'블랙'
						]
					}
				]
			}
			//end
		}
	},
	CONTENTS: {
		DEFAULTS: {
			title: 'A 프레임 사인',
			attentions: [
				'접이식으로 이동과 보관이 편리하고, 철재 소재로<br/>튼튼한 내구성을 자랑해요.',
				'사이즈 : 450mm x 800mm'
			],
			services: [
				'A_FRAME_SIGN_INTRODUCE','A_FRAME_SIGN_SIZE'
			]
		}
	}
};