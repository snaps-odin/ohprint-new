

export const ACRYLIC_KEYRING = {
	COMMON: {
		option: {
      MANUAL_SIZE: {
				thumbnail: 'detail-keyring-shape-free',
				title: '자율',
				description: '최소 10mm부터 최대100mm 까지<br/>입력 가능하며, 업로드된 이미지에 따<br/>라 크기가 자동 조정됩니다.',
				attentions: [
					'<em class="blue">자유롭게 다양한 모양의 이미지 및<br/>디자인을 업로드하여 제작</em>'
				]
			},
      ROUND_MANUAL_SIZE: {
        thumbnail: 'detail-keyring-shape-circle',
        title: '원형',
        description: '최소 10mm부터 최대 100mm 까지<br/>의 입력된 지름 사이즈의 원 모양 키<br/>링을 만들어요. (여백 제외 사이즈)',
        attentions: [
          '<em class="blue">정해진 대지 위에 직접 디자인하여<br/>제작</em>'
        ]
      },
      SQUARE_MANUAL_SIZE: {
        thumbnail: 'detail-keyring-shape-square',
        title: '사각형',
        description: '최소 10mm부터 최대 100mm 까지<br/>의 입력된 사이즈의 정사각형 모양 키<br/>링을 만들어요. (여백 제외 사이즈)',
        attentions: [
          '<em class="blue">정해진 대지 위에 직접 디자인하여<br/>제작</em>'
        ]
      },
      ACRYLIC_KEYRING_HEART: {
        thumbnail: 'detail-keyring-shape-heart',
        title: '하트형',
        description: '선택한 사이즈의 하트 모양 키링을 만<br/>들어요. (여백 제외 사이즈)',
        attentions: [
          '<em class="blue">정해진 대지 위에 직접 디자인하여<br/>제작</em>'
        ]
      },
      ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30: {
        thumbnail: 'detail-keyring-size-4438',
        title: '34 x 30',
        description: '2mm의 재단 여백을 포함한 사이즈<br/>는 38mm x 34mm입니다.',
        attentions: [
          '<em class="blue">정해진 대지 위에 직접 디자인하여<br/>제작</em>'
        ]
      },
      ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40: {
        thumbnail: 'detail-keyring-size-3428',
        title: '46 x 40',
        description: '2mm의 재단 여백을 포함한 사이즈<br/>는 50mm x 44mm입니다.',
        attentions: [
          '<em class="blue">정해진 대지 위에 직접 디자인하여<br/>제작</em>'
        ]
      },
      ACRYLIC_TRANSPARENCY: {
        thumbnail: 'detail-keyring-acrylic-glass',
        title: '기본 투명',
        description: '기본적인 투명 아크릴이에요.'
      },
      ACRYLIC_HOLOGRAM: {
        thumbnail: 'detail-keyring-acrylic-hologram',
        title: '홀로그램',
        description: '방향에 따라 다른 빛깔을 띄는<br/>홀로그램으로 입체감이 느껴지는<br/>아크릴이에요.'
      },
      ACRYLIC_GLITTER_SILVER: {
        thumbnail: 'detail-keyring-acrylic-glitter-glass',
        title: '글리터 실버',
        description: '투명 아크릴에 실버 글리터가<br/>반짝반짝 빛나요.'
      },
      ACRYLIC_GLITTER_GOLD: {
        thumbnail: 'detail-keyring-acrylic-glitter-gold',
        title: '글리터 골드',
        description: '골드색을 입은 투명 아크릴에<br/>골드 글리터가 반짝반짝 빛나요.'
      },
      RING_LOCK: {
        thumbnail: 'detail-keyring-rign-lock',
        title: '자물쇠'
      },
      RING_HEART: {
        thumbnail: 'detail-keyring-rign-heart',
        title: '하트형'
      },
      RING_MC: {
        thumbnail: 'detail-keyring-rign-bead',
        title: '구슬체인',
        description: '구슬체인 선택 시 2개 수량이<br/>발송됩니다.'
      },
      NOT_SELECTED: {
        thumbnail: 'detail-keyring-rign-none',
        title: '선택 안함'
      },
      RING_LOCK_SILVER: {
        thumbnail: 'detail-keyring-rign-lock-color-silver',
        title: '실버'
      },
      RING_LOCK_GOLD: {
        thumbnail: 'detail-keyring-rign-lock-color-gold',
        title: '골드'
      },
      RING_LOCK_ROSEGOLD: {
        thumbnail: 'detail-keyring-rign-lock-color-rosegold',
        title: '로즈 골드'
      },
      RING_HEART_SILVER: {
        thumbnail: 'detail-keyring-rign-heart-color-silver',
        title: '실버'
      },
      RING_HEART_GOLD: {
        thumbnail: 'detail-keyring-rign-heart-color-gold',
        title: '골드'
      },
      RING_HEART_ROSEGOLD: {
        thumbnail: 'detail-keyring-rign-heart-color-rosegold',
        title: '로즈 골드'
      },
      RING_MC_SILVER: {
        thumbnail: 'detail-keyring-rign-bead-color-silver',
        title: '실버'
      },
      RING_MC_WHITE: {
        thumbnail: 'detail-keyring-rign-bead-color-white',
        title: '화이트'
      },
      RING_MC_GRAY: {
        thumbnail: 'detail-keyring-rign-bead-color-gray',
        title: '그레이'
      },
      RING_MC_BLACK: {
        thumbnail: 'detail-keyring-rign-bead-color-black',
        title: '블랙'
      },
      RING_MC_PINK: {
        thumbnail: 'detail-keyring-rign-bead-color-pink',
        title: '핑크'
      },
      RING_MC_VIOLET: {
        thumbnail: 'detail-keyring-rign-bead-color-violet',
        title: '바이올렛'
      },
      RING_MC_MINT: {
        thumbnail: 'detail-keyring-rign-bead-color-mint',
        title: '민트'
      },





		},
		variations: [

		  //자율형
		  //투명
		  //자물쇠
			{
				attributes: [ 'ACRYLIC_TRANSPARENCY', 'MANUAL_SIZE', 'RING_LOCK', 'SILVER' ],
				image: 'keyring-free-glass-lock-silver'
			},
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'MANUAL_SIZE', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-free-glass-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'MANUAL_SIZE', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-free-glass-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'MANUAL_SIZE', 'RING_HEART', 'SILVER' ],
        image: 'keyring-free-glass-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'MANUAL_SIZE', 'RING_HEART', 'GOLD' ],
        image: 'keyring-free-glass-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'MANUAL_SIZE', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-free-glass-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'MANUAL_SIZE', 'RING_MC', 'SILVER' ],
        image: 'keyring-free-glass-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'MANUAL_SIZE', 'RING_MC', 'WHITE' ],
        image: 'keyring-free-glass-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'MANUAL_SIZE', 'RING_MC', 'GRAY' ],
        image: 'keyring-free-glass-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'MANUAL_SIZE', 'RING_MC', 'BLACK' ],
        image: 'keyring-free-glass-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'MANUAL_SIZE', 'RING_MC', 'PINK' ],
        image: 'keyring-free-glass-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'MANUAL_SIZE', 'RING_MC', 'VIOLET' ],
        image: 'keyring-free-glass-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'MANUAL_SIZE', 'RING_MC', 'MINT' ],
        image: 'keyring-free-glass-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'MANUAL_SIZE', 'NOT_SELECTED' ],
        image: 'keyring-free-glass-none'
      },


      //홀로그램
      //자물쇠
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'MANUAL_SIZE', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-free-hologram-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'MANUAL_SIZE', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-free-hologram-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'MANUAL_SIZE', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-free-hologram-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'MANUAL_SIZE', 'RING_HEART', 'SILVER' ],
        image: 'keyring-free-hologram-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'MANUAL_SIZE', 'RING_HEART', 'GOLD' ],
        image: 'keyring-free-hologram-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'MANUAL_SIZE', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-free-hologram-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'MANUAL_SIZE', 'RING_MC', 'SILVER' ],
        image: 'keyring-free-hologram-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'MANUAL_SIZE', 'RING_MC', 'WHITE' ],
        image: 'keyring-free-hologram-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'MANUAL_SIZE', 'RING_MC', 'GRAY' ],
        image: 'keyring-free-hologram-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'MANUAL_SIZE', 'RING_MC', 'BLACK' ],
        image: 'keyring-free-hologram-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'MANUAL_SIZE', 'RING_MC', 'PINK' ],
        image: 'keyring-free-hologram-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'MANUAL_SIZE', 'RING_MC', 'VIOLET' ],
        image: 'keyring-free-hologram-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'MANUAL_SIZE', 'RING_MC', 'MINT' ],
        image: 'keyring-free-hologram-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'MANUAL_SIZE', 'NOT_SELECTED' ],
        image: 'keyring-free-hologram-none'
      },




      //글리터 실버
      //자물쇠
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'MANUAL_SIZE', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-free-glitter-glass-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'MANUAL_SIZE', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-free-glitter-glass-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'MANUAL_SIZE', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-free-glitter-glass-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'MANUAL_SIZE', 'RING_HEART', 'SILVER' ],
        image: 'keyring-free-glitter-glass-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'MANUAL_SIZE', 'RING_HEART', 'GOLD' ],
        image: 'keyring-free-glitter-glass-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'MANUAL_SIZE', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-free-glitter-glass-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'MANUAL_SIZE', 'RING_MC', 'SILVER' ],
        image: 'keyring-free-glitter-glass-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'MANUAL_SIZE', 'RING_MC', 'WHITE' ],
        image: 'keyring-free-glitter-glass-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'MANUAL_SIZE', 'RING_MC', 'GRAY' ],
        image: 'keyring-free-glitter-glass-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'MANUAL_SIZE', 'RING_MC', 'BLACK' ],
        image: 'keyring-free-glitter-glass-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'MANUAL_SIZE', 'RING_MC', 'PINK' ],
        image: 'keyring-free-glitter-glass-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'MANUAL_SIZE', 'RING_MC', 'VIOLET' ],
        image: 'keyring-free-glitter-glass-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'MANUAL_SIZE', 'RING_MC', 'MINT' ],
        image: 'keyring-free-glitter-glass-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'MANUAL_SIZE', 'NOT_SELECTED' ],
        image: 'keyring-free-glitter-glass-none'
      },





      //글리터 실버
      //자물쇠
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'MANUAL_SIZE', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-free-glitter-gold-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'MANUAL_SIZE', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-free-glitter-gold-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'MANUAL_SIZE', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-free-glitter-gold-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'MANUAL_SIZE', 'RING_HEART', 'SILVER' ],
        image: 'keyring-free-glitter-gold-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'MANUAL_SIZE', 'RING_HEART', 'GOLD' ],
        image: 'keyring-free-glitter-gold-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'MANUAL_SIZE', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-free-glitter-gold-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'MANUAL_SIZE', 'RING_MC', 'SILVER' ],
        image: 'keyring-free-glitter-gold-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'MANUAL_SIZE', 'RING_MC', 'WHITE' ],
        image: 'keyring-free-glitter-gold-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'MANUAL_SIZE', 'RING_MC', 'GRAY' ],
        image: 'keyring-free-glitter-gold-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'MANUAL_SIZE', 'RING_MC', 'BLACK' ],
        image: 'keyring-free-glitter-gold-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'MANUAL_SIZE', 'RING_MC', 'PINK' ],
        image: 'keyring-free-glitter-gold-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'MANUAL_SIZE', 'RING_MC', 'VIOLET' ],
        image: 'keyring-free-glitter-gold-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'MANUAL_SIZE', 'RING_MC', 'MINT' ],
        image: 'keyring-free-glitter-gold-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'MANUAL_SIZE', 'NOT_SELECTED' ],
        image: 'keyring-free-glitter-gold-none'
      },




      //원형
      //투명
      //자물쇠
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ROUND_MANUAL_SIZE', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-circle-glass-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ROUND_MANUAL_SIZE', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-circle-glass-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ROUND_MANUAL_SIZE', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-circle-glass-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ROUND_MANUAL_SIZE', 'RING_HEART', 'SILVER' ],
        image: 'keyring-circle-glass-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ROUND_MANUAL_SIZE', 'RING_HEART', 'GOLD' ],
        image: 'keyring-circle-glass-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ROUND_MANUAL_SIZE', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-circle-glass-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ROUND_MANUAL_SIZE', 'RING_MC', 'SILVER' ],
        image: 'keyring-circle-glass-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ROUND_MANUAL_SIZE', 'RING_MC', 'WHITE' ],
        image: 'keyring-circle-glass-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ROUND_MANUAL_SIZE', 'RING_MC', 'GRAY' ],
        image: 'keyring-circle-glass-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ROUND_MANUAL_SIZE', 'RING_MC', 'BLACK' ],
        image: 'keyring-circle-glass-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ROUND_MANUAL_SIZE', 'RING_MC', 'PINK' ],
        image: 'keyring-circle-glass-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ROUND_MANUAL_SIZE', 'RING_MC', 'VIOLET' ],
        image: 'keyring-circle-glass-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ROUND_MANUAL_SIZE', 'RING_MC', 'MINT' ],
        image: 'keyring-circle-glass-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ROUND_MANUAL_SIZE', 'NOT_SELECTED' ],
        image: 'keyring-circle-glass-none'
      },


      //홀로그램
      //자물쇠
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ROUND_MANUAL_SIZE', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-circle-hologram-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ROUND_MANUAL_SIZE', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-circle-hologram-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ROUND_MANUAL_SIZE', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-circle-hologram-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ROUND_MANUAL_SIZE', 'RING_HEART', 'SILVER' ],
        image: 'keyring-circle-hologram-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ROUND_MANUAL_SIZE', 'RING_HEART', 'GOLD' ],
        image: 'keyring-circle-hologram-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ROUND_MANUAL_SIZE', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-circle-hologram-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ROUND_MANUAL_SIZE', 'RING_MC', 'SILVER' ],
        image: 'keyring-circle-hologram-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ROUND_MANUAL_SIZE', 'RING_MC', 'WHITE' ],
        image: 'keyring-circle-hologram-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ROUND_MANUAL_SIZE', 'RING_MC', 'GRAY' ],
        image: 'keyring-circle-hologram-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ROUND_MANUAL_SIZE', 'RING_MC', 'BLACK' ],
        image: 'keyring-circle-hologram-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ROUND_MANUAL_SIZE', 'RING_MC', 'PINK' ],
        image: 'keyring-circle-hologram-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ROUND_MANUAL_SIZE', 'RING_MC', 'VIOLET' ],
        image: 'keyring-circle-hologram-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ROUND_MANUAL_SIZE', 'RING_MC', 'MINT' ],
        image: 'keyring-circle-hologram-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ROUND_MANUAL_SIZE', 'NOT_SELECTED' ],
        image: 'keyring-circle-hologram-none'
      },




      //글리터 실버
      //자물쇠
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ROUND_MANUAL_SIZE', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-circle-glitter-glass-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ROUND_MANUAL_SIZE', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-circle-glitter-glass-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ROUND_MANUAL_SIZE', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-circle-glitter-glass-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ROUND_MANUAL_SIZE', 'RING_HEART', 'SILVER' ],
        image: 'keyring-circle-glitter-glass-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ROUND_MANUAL_SIZE', 'RING_HEART', 'GOLD' ],
        image: 'keyring-circle-glitter-glass-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ROUND_MANUAL_SIZE', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-circle-glitter-glass-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ROUND_MANUAL_SIZE', 'RING_MC', 'SILVER' ],
        image: 'keyring-circle-glitter-glass-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ROUND_MANUAL_SIZE', 'RING_MC', 'WHITE' ],
        image: 'keyring-circle-glitter-glass-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ROUND_MANUAL_SIZE', 'RING_MC', 'GRAY' ],
        image: 'keyring-circle-glitter-glass-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ROUND_MANUAL_SIZE', 'RING_MC', 'BLACK' ],
        image: 'keyring-circle-glitter-glass-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ROUND_MANUAL_SIZE', 'RING_MC', 'PINK' ],
        image: 'keyring-circle-glitter-glass-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ROUND_MANUAL_SIZE', 'RING_MC', 'VIOLET' ],
        image: 'keyring-circle-glitter-glass-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ROUND_MANUAL_SIZE', 'RING_MC', 'MINT' ],
        image: 'keyring-circle-glitter-glass-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ROUND_MANUAL_SIZE', 'NOT_SELECTED' ],
        image: 'keyring-circle-glitter-glass-none'
      },





      //글리터 실버
      //자물쇠
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ROUND_MANUAL_SIZE', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-circle-glitter-gold-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ROUND_MANUAL_SIZE', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-circle-glitter-gold-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ROUND_MANUAL_SIZE', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-circle-glitter-gold-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ROUND_MANUAL_SIZE', 'RING_HEART', 'SILVER' ],
        image: 'keyring-circle-glitter-gold-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ROUND_MANUAL_SIZE', 'RING_HEART', 'GOLD' ],
        image: 'keyring-circle-glitter-gold-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ROUND_MANUAL_SIZE', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-circle-glitter-gold-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ROUND_MANUAL_SIZE', 'RING_MC', 'SILVER' ],
        image: 'keyring-circle-glitter-gold-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ROUND_MANUAL_SIZE', 'RING_MC', 'WHITE' ],
        image: 'keyring-circle-glitter-gold-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ROUND_MANUAL_SIZE', 'RING_MC', 'GRAY' ],
        image: 'keyring-circle-glitter-gold-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ROUND_MANUAL_SIZE', 'RING_MC', 'BLACK' ],
        image: 'keyring-circle-glitter-gold-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ROUND_MANUAL_SIZE', 'RING_MC', 'PINK' ],
        image: 'keyring-circle-glitter-gold-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ROUND_MANUAL_SIZE', 'RING_MC', 'VIOLET' ],
        image: 'keyring-circle-glitter-gold-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ROUND_MANUAL_SIZE', 'RING_MC', 'MINT' ],
        image: 'keyring-circle-glitter-gold-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ROUND_MANUAL_SIZE', 'NOT_SELECTED' ],
        image: 'keyring-circle-glitter-gold-none'
      },



      //사각형
      //투명
      //자물쇠
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'SQUARE_MANUAL_SIZE', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-square-glass-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'SQUARE_MANUAL_SIZE', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-square-glass-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'SQUARE_MANUAL_SIZE', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-square-glass-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'SQUARE_MANUAL_SIZE', 'RING_HEART', 'SILVER' ],
        image: 'keyring-square-glass-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'SQUARE_MANUAL_SIZE', 'RING_HEART', 'GOLD' ],
        image: 'keyring-square-glass-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'SQUARE_MANUAL_SIZE', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-square-glass-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'SILVER' ],
        image: 'keyring-square-glass-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'WHITE' ],
        image: 'keyring-square-glass-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'GRAY' ],
        image: 'keyring-square-glass-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'BLACK' ],
        image: 'keyring-square-glass-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'PINK' ],
        image: 'keyring-square-glass-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'VIOLET' ],
        image: 'keyring-square-glass-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'MINT' ],
        image: 'keyring-square-glass-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'SQUARE_MANUAL_SIZE', 'NOT_SELECTED' ],
        image: 'keyring-square-glass-none'
      },


      //홀로그램
      //자물쇠
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'SQUARE_MANUAL_SIZE', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-square-hologram-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'SQUARE_MANUAL_SIZE', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-square-hologram-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'SQUARE_MANUAL_SIZE', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-square-hologram-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'SQUARE_MANUAL_SIZE', 'RING_HEART', 'SILVER' ],
        image: 'keyring-square-hologram-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'SQUARE_MANUAL_SIZE', 'RING_HEART', 'GOLD' ],
        image: 'keyring-square-hologram-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'SQUARE_MANUAL_SIZE', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-square-hologram-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'SILVER' ],
        image: 'keyring-square-hologram-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'WHITE' ],
        image: 'keyring-square-hologram-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'GRAY' ],
        image: 'keyring-square-hologram-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'BLACK' ],
        image: 'keyring-square-hologram-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'PINK' ],
        image: 'keyring-square-hologram-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'VIOLET' ],
        image: 'keyring-square-hologram-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'MINT' ],
        image: 'keyring-square-hologram-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'SQUARE_MANUAL_SIZE', 'NOT_SELECTED' ],
        image: 'keyring-square-hologram-none'
      },




      //글리터 실버
      //자물쇠
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'SQUARE_MANUAL_SIZE', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-square-glitter-glass-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'SQUARE_MANUAL_SIZE', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-square-glitter-glass-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'SQUARE_MANUAL_SIZE', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-square-glitter-glass-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'SQUARE_MANUAL_SIZE', 'RING_HEART', 'SILVER' ],
        image: 'keyring-square-glitter-glass-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'SQUARE_MANUAL_SIZE', 'RING_HEART', 'GOLD' ],
        image: 'keyring-square-glitter-glass-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'SQUARE_MANUAL_SIZE', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-square-glitter-glass-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'SILVER' ],
        image: 'keyring-square-glitter-glass-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'WHITE' ],
        image: 'keyring-square-glitter-glass-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'GRAY' ],
        image: 'keyring-square-glitter-glass-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'BLACK' ],
        image: 'keyring-square-glitter-glass-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'PINK' ],
        image: 'keyring-square-glitter-glass-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'VIOLET' ],
        image: 'keyring-square-glitter-glass-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'MINT' ],
        image: 'keyring-square-glitter-glass-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'SQUARE_MANUAL_SIZE', 'NOT_SELECTED' ],
        image: 'keyring-square-glitter-glass-none'
      },





      //글리터 실버
      //자물쇠
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'SQUARE_MANUAL_SIZE', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-square-glitter-gold-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'SQUARE_MANUAL_SIZE', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-square-glitter-gold-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'SQUARE_MANUAL_SIZE', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-square-glitter-gold-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'SQUARE_MANUAL_SIZE', 'RING_HEART', 'SILVER' ],
        image: 'keyring-square-glitter-gold-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'SQUARE_MANUAL_SIZE', 'RING_HEART', 'GOLD' ],
        image: 'keyring-square-glitter-gold-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'SQUARE_MANUAL_SIZE', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-square-glitter-gold-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'SILVER' ],
        image: 'keyring-square-glitter-gold-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'WHITE' ],
        image: 'keyring-square-glitter-gold-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'GRAY' ],
        image: 'keyring-square-glitter-gold-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'BLACK' ],
        image: 'keyring-square-glitter-gold-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'PINK' ],
        image: 'keyring-square-glitter-gold-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'VIOLET' ],
        image: 'keyring-square-glitter-gold-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'SQUARE_MANUAL_SIZE', 'RING_MC', 'MINT' ],
        image: 'keyring-square-glitter-gold-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'SQUARE_MANUAL_SIZE', 'NOT_SELECTED' ],
        image: 'keyring-square-glitter-gold-none'
      },






      //하트형
      //46x40
      //투명
      //자물쇠
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-heart-46-glass-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-heart-46-glass-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-heart-46-glass-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_HEART', 'SILVER' ],
        image: 'keyring-heart-46-glass-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_HEART', 'GOLD' ],
        image: 'keyring-heart-46-glass-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-heart-46-glass-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'SILVER' ],
        image: 'keyring-heart-46-glass-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'WHITE' ],
        image: 'keyring-heart-46-glass-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'GRAY' ],
        image: 'keyring-heart-46-glass-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'BLACK' ],
        image: 'keyring-heart-46-glass-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'PINK' ],
        image: 'keyring-heart-46-glass-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'VIOLET' ],
        image: 'keyring-heart-46-glass-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'MINT' ],
        image: 'keyring-heart-46-glass-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'NOT_SELECTED' ],
        image: 'keyring-heart-46-glass-none'
      },


      //홀로그램
      //자물쇠
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-heart-46-hologram-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-heart-46-hologram-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-heart-46-hologram-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_HEART', 'SILVER' ],
        image: 'keyring-heart-46-hologram-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_HEART', 'GOLD' ],
        image: 'keyring-heart-46-hologram-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-heart-46-hologram-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'SILVER' ],
        image: 'keyring-heart-46-hologram-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'WHITE' ],
        image: 'keyring-heart-46-hologram-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'GRAY' ],
        image: 'keyring-heart-46-hologram-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'BLACK' ],
        image: 'keyring-heart-46-hologram-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'PINK' ],
        image: 'keyring-heart-46-hologram-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'VIOLET' ],
        image: 'keyring-heart-46-hologram-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'MINT' ],
        image: 'keyring-heart-46-hologram-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'NOT_SELECTED' ],
        image: 'keyring-heart-46-hologram-none'
      },




      //글리터 실버
      //자물쇠
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-heart-46-glitter-glass-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-heart-46-glitter-glass-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-heart-46-glitter-glass-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_HEART', 'SILVER' ],
        image: 'keyring-heart-46-glitter-glass-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_HEART', 'GOLD' ],
        image: 'keyring-heart-46-glitter-glass-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-heart-46-glitter-glass-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'SILVER' ],
        image: 'keyring-heart-46-glitter-glass-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'WHITE' ],
        image: 'keyring-heart-46-glitter-glass-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'GRAY' ],
        image: 'keyring-heart-46-glitter-glass-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'BLACK' ],
        image: 'keyring-heart-46-glitter-glass-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'PINK' ],
        image: 'keyring-heart-46-glitter-glass-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'VIOLET' ],
        image: 'keyring-heart-46-glitter-glass-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'MINT' ],
        image: 'keyring-heart-46-glitter-glass-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'NOT_SELECTED' ],
        image: 'keyring-heart-46-glitter-glass-none'
      },





      //글리터 실버
      //자물쇠
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-heart-46-glitter-gold-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-heart-46-glitter-gold-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-heart-46-glitter-gold-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_HEART', 'SILVER' ],
        image: 'keyring-heart-46-glitter-gold-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_HEART', 'GOLD' ],
        image: 'keyring-heart-46-glitter-gold-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-heart-46-glitter-gold-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'SILVER' ],
        image: 'keyring-heart-46-glitter-gold-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'WHITE' ],
        image: 'keyring-heart-46-glitter-gold-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'GRAY' ],
        image: 'keyring-heart-46-glitter-gold-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'BLACK' ],
        image: 'keyring-heart-46-glitter-gold-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'PINK' ],
        image: 'keyring-heart-46-glitter-gold-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'VIOLET' ],
        image: 'keyring-heart-46-glitter-gold-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'RING_MC', 'MINT' ],
        image: 'keyring-heart-46-glitter-gold-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_46X40', 'NOT_SELECTED' ],
        image: 'keyring-heart-46-glitter-gold-none'
      },


      //하트형
      //34x30
      //투명
      //자물쇠
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-heart-34-glass-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-heart-34-glass-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-heart-34-glass-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_HEART', 'SILVER' ],
        image: 'keyring-heart-34-glass-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_HEART', 'GOLD' ],
        image: 'keyring-heart-34-glass-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-heart-34-glass-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'SILVER' ],
        image: 'keyring-heart-34-glass-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'WHITE' ],
        image: 'keyring-heart-34-glass-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'GRAY' ],
        image: 'keyring-heart-34-glass-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'BLACK' ],
        image: 'keyring-heart-34-glass-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'PINK' ],
        image: 'keyring-heart-34-glass-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'VIOLET' ],
        image: 'keyring-heart-34-glass-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'MINT' ],
        image: 'keyring-heart-34-glass-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_TRANSPARENCY', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'NOT_SELECTED' ],
        image: 'keyring-heart-34-glass-none'
      },


      //홀로그램
      //자물쇠
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-heart-34-hologram-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-heart-34-hologram-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-heart-34-hologram-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_HEART', 'SILVER' ],
        image: 'keyring-heart-34-hologram-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_HEART', 'GOLD' ],
        image: 'keyring-heart-34-hologram-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-heart-34-hologram-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'SILVER' ],
        image: 'keyring-heart-34-hologram-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'WHITE' ],
        image: 'keyring-heart-34-hologram-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'GRAY' ],
        image: 'keyring-heart-34-hologram-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'BLACK' ],
        image: 'keyring-heart-34-hologram-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'PINK' ],
        image: 'keyring-heart-34-hologram-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'VIOLET' ],
        image: 'keyring-heart-34-hologram-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'MINT' ],
        image: 'keyring-heart-34-hologram-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_HOLOGRAM', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'NOT_SELECTED' ],
        image: 'keyring-heart-34-hologram-none'
      },




      //글리터 실버
      //자물쇠
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-heart-34-glitter-glass-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-heart-34-glitter-glass-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-heart-34-glitter-glass-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_HEART', 'SILVER' ],
        image: 'keyring-heart-34-glitter-glass-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_HEART', 'GOLD' ],
        image: 'keyring-heart-34-glitter-glass-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-heart-34-glitter-glass-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'SILVER' ],
        image: 'keyring-heart-34-glitter-glass-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'WHITE' ],
        image: 'keyring-heart-34-glitter-glass-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'GRAY' ],
        image: 'keyring-heart-34-glitter-glass-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'BLACK' ],
        image: 'keyring-heart-34-glitter-glass-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'PINK' ],
        image: 'keyring-heart-34-glitter-glass-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'VIOLET' ],
        image: 'keyring-heart-34-glitter-glass-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'MINT' ],
        image: 'keyring-heart-34-glitter-glass-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_GLITTER_SILVER', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'NOT_SELECTED' ],
        image: 'keyring-heart-34-glitter-glass-none'
      },





      //글리터 실버
      //자물쇠
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_LOCK', 'SILVER' ],
        image: 'keyring-heart-34-glitter-gold-lock-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_LOCK', 'GOLD' ],
        image: 'keyring-heart-34-glitter-gold-lock-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_LOCK', 'ROSEGOLD' ],
        image: 'keyring-heart-34-glitter-gold-lock-rosegold'
      },

      //하트형
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_HEART', 'SILVER' ],
        image: 'keyring-heart-34-glitter-gold-heart-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_HEART', 'GOLD' ],
        image: 'keyring-heart-34-glitter-gold-heart-gold'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_HEART', 'ROSEGOLD' ],
        image: 'keyring-heart-34-glitter-gold-heart-rosegold'
      },

      //구슬체인
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'SILVER' ],
        image: 'keyring-heart-34-glitter-gold-bead-silver'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'WHITE' ],
        image: 'keyring-heart-34-glitter-gold-bead-white'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'GRAY' ],
        image: 'keyring-heart-34-glitter-gold-bead-gray'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'BLACK' ],
        image: 'keyring-heart-34-glitter-gold-bead-black'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'PINK' ],
        image: 'keyring-heart-34-glitter-gold-bead-pink'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'VIOLET' ],
        image: 'keyring-heart-34-glitter-gold-bead-violet'
      },
      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'RING_MC', 'MINT' ],
        image: 'keyring-heart-34-glitter-gold-bead-mint'
      },

      {
        attributes: [ 'ACRYLIC_GLITTER_GOLD', 'ACRYLIC_KEYRING_HEART', 'ACRYLIC_KEYRING_ACRYLIC_KEYRING_HEART_34X30', 'NOT_SELECTED' ],
        image: 'keyring-heart-34-glitter-gold-none'
      },

		],
		showcases: {
      KEYRING_ADVERTISE: {
        title: '반짝반짝 아크릴 키링으로 홍보하세요.',
        className: 'bg-white col-2',
        children: [
          {
            image: 'keyring-info-img-01',
            attentions: [
              '브랜드 홍보를 위해 제작해요.'
            ]
          },
          {
            image: 'keyring-info-img-02',
            attentions: [
              '소모임이나 단체에서 우리만의 아이덴티티를 표현해요.'
            ]
          }
        ]
      },

      KEYRING_DESIGNER: {
        title: '나도 이제 아크릴 키링 디자이너',
        className: 'bg-white col-2 border-top',
        children: [
          {
            image: 'keyring-info-img-03',
            attentions: [
              '나만의 이미지로 개성 있게 만들어요.'
            ]
          },
          {
            image: 'keyring-info-img-04',
            attentions: [
              '이름이나 원하는 텍스트로 깔끔하게 만들 수도 있어요.'
            ]
          }
        ]
      },

      KEYRING_TYPE : {
        title: "다양한 아크릴 종류를 만나보세요.",
        className: "col-4 bg-gray",
        children: [
          {
            title: ["기본 투명"],
            image: "keyring-info-acrylic-glass"
          },
          {
            title: ["홀로그램"],
            image: "keyring-info-acrylic-hologram"
          },
          {
            title: ["글리터 실버"],
            image: "keyring-info-acrylic-glitter-glass"
          },
          {
            title: ["글리터 골드"],
            image: "keyring-info-acrylic-glitter-gold"
          }
        ]
      },

      KEYRING_PRINTING_COTTON: {
        title: '아크릴 종류에 따른 인쇄 면',
        className: 'bg-white col-2',
        children: [
          {
            image: 'keyring-info-acrylic-print-01',
            title:['기본 투명'],
            descriptions: [
              "배면 인쇄 : 아크릴의 뒷면에 인쇄 됩니다.<br/>" +
              "* 뒷면에서 확인 시 글자가 반전되어 보여집니다."
            ],
          },
          {
            image: 'keyring-info-acrylic-print-02',
            title:['홀로그램 및 글리터'],
            descriptions: [
              "전면 인쇄 : 아크릴 앞면에 인쇄 됩니다."
            ],
          }
        ]
      },

      KEYRING_CHAIN_WITH_RINGS: {
        title: '특별함을 더해줄 고리와 체인',
        className: 'bg-white col-3 border-top',
        children: [
          {
            image: 'keyring-info-rign-lock',
            title:['자물쇠'],
            descriptions: [
              "실버, 골드, 로즈골드"
            ],
          },
          {
            image: 'keyring-info-rign-heart',
            title:['하트형'],
            descriptions: [
              "실버, 골드, 로즈골드"
            ],
          },
          {
            image: 'keyring-info-rign-bead',
            title:['구슬 체인'],
            descriptions: [
              "실버, 화이트, 그레이, 블랙, 핑크, 바이올렛, 민트<br/>" +
              "(구슬체인 선택 시 2개 수량이 발송됩니다.)"
            ],
          }
        ]
      },

      KEYRING_SELECT_SIZE : {
        title: "선택 가능한 사이즈를 확인하세요.",
        className: "col-2 bg-white border-top",
        children: [
          {
            title: ["자율 사이즈"],
            image: "keyring-info-shape-free"
          },
          {
            title: ["원형"],
            image: "keyring-info-shape-circle"
          },
          {
            title: ["사각형"],
            image: "keyring-info-shape-square"
          },
          {
            title: ["하트형"],
            image: "keyring-info-shape-heart"
          }
        ]
      },

      KEYRING_ORDER_NOTES: {
        title: '주문 시 유의사항',
        className: 'bg-white col-3 border-top',
        children: [
          {
            image: 'keyring-info-notice-01',
            title:['화이트 인쇄 밀림현상'],
            descriptions: [
              "화이트 인쇄가 기본 제공되며, 컬러 인쇄 영역과 <br/>" +
              "화이트 인쇄 영역에 오차가 발생할 수 있습니다."
            ],
          },
          {
            image: 'keyring-info-notice-02',
            title:['수령 후 필름 제거'],
            descriptions: [
              "표면 보호를 위해 아크릴 한쪽 면에<br/>" +
              "얇은 필름이 부착되어 있습니다."
            ],
          },
          {
            image: 'keyring-info-notice-03',
            title:['고리 조립 예외 사항'],
            descriptions: [
              "<em class='blue'>고리 구멍인지 직관적으로 알 수 없는 디자인</em>과<br/>"+
              "<em class='blue'>구슬 체인</em>을 선택한 경우에는<br/>"+
              "고리 조립 작업 없이 출고됩니다."
            ],
          }
        ]
      },
		},

    guide:{
		  contents:{
        DESIGN_IT_YOURSELF: {
          title: '직접 디자인 하기',
          className: 'bg-white vertical-border',
          menuIndex: 0
        },

        AUTONOMOUS_FORM: {
          deco: 'num-01-5030',
          title: '<em>자율</em> 형태',
          className: 'bg-white col-2',
          children: [
            {
              image: 'keyring-info-guide-0101',
              attentions: [
                '10mm~100mm 사이즈를 입력 후 원하는 이미지를 올려보세요.'
              ]
            },
            {
              image: 'keyring-info-guide-0102',
              attentions: [
                '업로드된 이미지 가장자리 2mm 여백이 추가되며, 이미지 비율에 맞춰 가격이 자동 조정됩니다.'
              ]
            }
          ]
        },


        ROUND_SQUARE_HEART_SHAPED: {
          deco: 'num-02-5030',
          title: '<em>원형, 사각형, 하트형</em> 형태',
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'keyring-info-guide-0201',
              attentions: [
                '사이즈를 입력 또는 선택 후 정해진 형태 위에 디자인 할 수 있어요.'
              ]
            },
            {
              image: 'keyring-info-guide-0202',
              attentions: [
                '디자인 템플릿 등을 활용하여 자유롭게 만들어요.',
                '단, 선택된 사이즈 가장자리 2mm 여백에는 디자인할 수 없어요.'
              ]
            }
          ]
        },

        POSITIONING_THE_RINGS: {
          deco: 'num-03-5030',
          title: '<em>고리 위치</em> 정하기',
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'keyring-info-guide-0301',
              attentions: [
                '<em class="blue">[이미지 밖으로 고리 만들기]</em> 이미지를 밖을 따라 원하는 위치에 고리를 만들 수 있어요.'
              ]
            },
            {
              image: 'keyring-info-guide-0302',
              attentions: [
                '<em class="blue">[이미지 안으로 고리 만들기]</em> 이미지 안쪽을 따라 원하는 위치에 고리를 만들 수 있어요.'
              ]
            }
          ]
        },


        OPERATION_NOTES: {
          deco: 'num-04-5030',
          title: '작업 유의사항',
          descriptions: [
            "자율 형태에서 해당됨"
          ],
          className: 'bg-white col-2 border-top border-bottom',
          children: [
            {
              image: 'keyring-info-guide-0401',
              attentions: [
                '하나로 연결되어 있지 않은 이미지는 키링으로 만들 수 없어요.'
              ]
            },
            {
              image: 'keyring-info-guide-0402',
              attentions: [
                '떨어진 이미지는 하나의 덩어리로 만들어 주세요.'
              ]
            }
          ]
        },


        UPLOAD_MY_DESIGN:{
          title: '내 디자인 업로드(PDF)',
          className: 'bg-white vertical-border',
          descriptions: [
            "자율 형태에서 해당됨"
          ],
          aiDownload:[
            {
              title : "AI 예시파일 다운로드",
              img: "down-il-714",
              path : "Upload/front/productGuide",
              file : "MD_AcrylicKeyring_Freesize_Designsample_44x42_AI.zip"
            }
          ],
          menuIndex: 1
        },

        AIRBOARD_SIZE: {
          deco: 'num-01-5030',
          title: '<em>PDF 대지(Artboard)</em> 사이즈 결정하기',
          className: 'bg-white col-2',
          children: [
            {
              image: 'keyring-info-guide-pdf-0101',
              attentions: [
                '<em class="blue">칼선 크기에 맞춰 대지(Artboard) 사이즈</em>를 만들어 주세요.'
              ]
            },
            {
              image: 'keyring-info-guide-pdf-0102',
              attentions: [
                '칼선 영역보다 대지 사이즈가 커도 제작 시 문제는 없지만, 대지 사이즈에 따라<br/>' +
                '가격이 결정되므로 유의해주세요.',
                '칼선 및 인쇄 영역이 대지 밖에 있는 경우 제작되지 않습니다.'
              ]
            }
          ]
        },

        LAYER_GUIDE: {
          deco: 'num-02-5030',
          title: '레이어 가이드<br/><br/>',
          descriptionTitle: [
            "하나. <em class='blue'>[cut] > [print] > [white]</em> 순서와 이름의 레이어로 작업해 주세요."
          ],
          descriptions: [
            "레이어 순서 및 레이어명 변경 시 오류로 제작이 불가합니다."
          ],
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'keyring-info-guide-pdf-0201'
            },
            {
              image: 'keyring-info-guide-pdf-0201'
            }
          ]
        },


        LAYER_GUIDE_2: {
          descriptionTitle: [
            "둘. <em class='blue'>[print]레이어</em>는 퀄리티 있는 완성품을 위해 <em class='blue'>한 번 더 인쇄</em>합니다."
          ],
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'keyring-info-guide-pdf-0203',
              attentions: [
                "<em class='blue'>[투명]</em> 아크릴 (배면인쇄)"
              ]
            },
            {
              image: 'keyring-info-guide-pdf-0204',
              attentions: [
                "<em class='blue'>[홀로그램 및 글리터]</em> 아크릴 (전면인쇄)"
              ]
            }
          ]
        },

        LAYER_GUIDE_3: {
          descriptionTitle: [
            "셋. <em class='blue'>[print] 레이어</em>와 <em class='blue'>[white] 레이어</em>는 <em class='blue'>선택적으로 디자인</em> 할 수 있어요."
          ],
          descriptions: [
            "작업하지 않은 레이어는 반드시 삭제해 주세요."
          ],
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'keyring-info-guide-pdf-0205',
              attentions: [
                '<em class="blue">이미지가 선명한 작업</em>을 원할 경우 - [cut], [print], [white] 작업'
              ]
            },
            {
              image: 'keyring-info-guide-pdf-0206',
              attentions: [
                '<em class="blue">반투명</em>하게 뒤가 비쳐 보임 - [cut], [print] 작업'
              ]
            },
            {
              image: 'keyring-info-guide-pdf-0207',
              attentions: [
                '<em class="blue">흰색만 인쇄하기</em>를 원할 경우 - [cut], [white] 작업'
              ]
            },
            {
              image: 'keyring-info-guide-pdf-0208',
              attentions: [
                '인쇄하지 않고, <em class="blue">커팅만 원하는 경우</em> - [cut] 작업'
              ]
            }
          ]
        },


        CUTTING_WORK_GUIDE: {
          deco: 'num-03-5030',
          title: '칼선(cut) 작업 가이드<br/><br/>',
          descriptionTitle: [
            "하나. <em class='blue'>M100 색상, 0.5pt 두께의 벡터 선</em>으로 그려주세요."
          ],
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'keyring-info-guide-pdf-0301',
              attentions: [
                '단면(Cap) / 모퉁이(Corner) / 선 정렬(Align Stroke) / 점선(Dashed Line)은,<br/>'+
                '<em class="blue">디폴트값을 사용</em>해주세요.'
              ]
            },
            {
              image: 'keyring-info-guide-pdf-0302',
              attentions: [
                '벡터 선을 <em class="blue">면으로 변경(Expand, Outline Stroke)하지 마세요.</em>'
              ]
            }
          ]
        },

        CUTTING_WORK_GUIDE_2: {
          descriptionTitle: [
            '둘. <em class="blue">고리 구멍은 직경 3mm</em> 이상, <em class="blue">구멍 외곽은 최소 2mm</em>로 작업해 주세요.'
          ],
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'keyring-info-guide-pdf-0303',
              attentions: [
                '구멍을 <em class="blue">바깥쪽으로 배치</em>할 경우'
              ]
            },
            {
              image: 'keyring-info-guide-pdf-0304',
              attentions: [
                '고리 구멍을 <em class="blue">안쪽으로 배치</em>할 경우'
              ]
            }
          ]
        },


        PRINT_OPERATION_GUIDE: {
          deco: 'num-04-5030',
          title: '인쇄(print) 작업 가이드<br/><br/>',
          descriptionTitle: [
            '하나. 벡터 및 비트맵 등으로 <em class="blue">인쇄되는 면의 디자인을 작업</em>해주세요.'
          ],
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'keyring-info-guide-pdf-0401',
              attentions: [
                '비트맵 이미지, 벡터 이미지 모두 다 사용 가능해요.',
                '<em class="blue">이미지 임베딩 처리는 필수입니다.</em>'
              ]
            },
            {
              image: 'keyring-info-guide-pdf-0402',
              attentions: [
                '단면(Cap) / 모퉁이(Corner) / 선 정렬(Align Stroke) / 점선(Dashed Line)은,<br/>'+
                '<em class="blue">디폴트값을 사용</em>해주세요. '
              ]
            }
          ]
        },

        PRINT_OPERATION_GUIDE_2: {
          descriptionTitle: [
            '둘. [Print] 레이어의 <em class="blue">화이트 색상은 인쇄되지 않습니다.</em>'
          ],
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'keyring-info-guide-pdf-0403',
              attentions: [
                '[print] 레이어에 화이트 색상 디자인이 있어도 투명하게 제작됩니다.'
              ]
            },
            {
              image: 'keyring-info-guide-pdf-0404',
              attentions: [
                '[print] 레이어의 유색 컬러 기준으로 인쇄됩니다.'
              ]
            }
          ]
        },



        WHITE_PRINT_JOB_GUIDE: {
          deco: 'num-05-5030',
          title: '화이트 인쇄(white) 작업 가이드<br/><br/>',
          descriptionTitle: [
            '하나. <em class="blue">M100 색상의 백터면</em>으로 작업해주세요.'
          ],
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'keyring-info-guide-pdf-0501'
            },
            {
              image: 'keyring-info-guide-pdf-0502'
            }
          ]
        },

        WHITE_PRINT_JOB_GUIDE_2: {
          descriptionTitle: [
            '둘. <em class="blue">선명한 인쇄 또는 화이트 인쇄를 원하는 영역에 작업해주세요.</em>'
          ],
          descriptions: [
            '화이트 밀림 선이 보이지 않게 하기 위해 화이트 도형을<br/>' +
            '0.2mm 정도 줄여서 작업하는 것을 추천합니다.'
          ],

          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'keyring-info-guide-pdf-0503',
              attentions: [
                '[white] 레이어에 디자인영역과 <em class="blue">동일한 벡터 면을 채운 경우</em>'
              ]
            },
            {
              image: 'keyring-info-guide-pdf-0504',
              attentions: [
                '[white] 레이어에 <em class="blue">부분적으로 벡터 면을 채운 경우</em>'
              ]
            }
          ]
        },


        OPERATION_NOTES_A: {
          deco: 'num-06-5030',
          title: '작업 유의사항<br/><br/>',
          descriptionTitle: [
            '하나. <em class="blue">인쇄 면과 칼선이 겹쳐질 경우</em> 인쇄 면이 벗겨질 수 있어요. '
          ],
          descriptions: [
            '1~2mm 여백을 두고 작업하는 것이 좋습니다.'
          ],
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'keyring-info-guide-pdf-0601'
            },
            {
              image: 'keyring-info-guide-pdf-0602'
            }
          ]
        },

        OPERATION_NOTES_A_2: {
          descriptionTitle: [
            '둘. <em class="blue">폭 3mm 이하의 얇은 도형</em>은 제작 후 손상될 수 있어요.'
          ],
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'keyring-info-guide-pdf-0603'
            },
            {
              image: 'keyring-info-guide-pdf-0604'
            }
          ]
        },

        OPERATION_NOTES_A_3: {
          descriptionTitle: [
            '셋. <em class="blue">너무 복잡한 형태의 도형</em>은 제작이 불가능 할 수 있어요.'
          ],
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'keyring-info-guide-pdf-0605'
            },
            {
              image: 'keyring-info-guide-pdf-0606'
            }
          ]
        },

        OPERATION_NOTES_A_4: {
          descriptionTitle: [
            '넷. <em class="blue">제일 바깥쪽</em>에 있는 칼선 기준으로 <em class="blue">최종 결과물</em>이 완성됩니다.'
          ],
          descriptions: [
            '안쪽에 있는 칼선으로 분리된 아크릴은 완성품과 관련이 없습니다.'
          ],
          className: 'bg-white col-2 border-top',
          children: [
            {
              image: 'keyring-info-guide-pdf-0607'
            },
            {
              image: 'keyring-info-guide-pdf-0608'
            }
          ]
        },

      },
      services: [
        'DESIGN_IT_YOURSELF',
        'AUTONOMOUS_FORM',
        'ROUND_SQUARE_HEART_SHAPED',
        'POSITIONING_THE_RINGS',
        'OPERATION_NOTES',
        'UPLOAD_MY_DESIGN',//1
        'AIRBOARD_SIZE',
        'LAYER_GUIDE',
        'LAYER_GUIDE_2',
        'LAYER_GUIDE_3',
        'CUTTING_WORK_GUIDE',
        'CUTTING_WORK_GUIDE_2',
        'PRINT_OPERATION_GUIDE',
        'PRINT_OPERATION_GUIDE_2',
        'WHITE_PRINT_JOB_GUIDE',
        'WHITE_PRINT_JOB_GUIDE_2',
        'OPERATION_NOTES_A',
        'OPERATION_NOTES_A_2',
        'OPERATION_NOTES_A_3',
        'OPERATION_NOTES_A_4',

      ]
    }
	},




	CONTENTS: {
		DEFAULTS: {
      title: '아크릴 키링',
      attentions: [
        '내가 찾던 그 디자인을 아크릴 안에 쏙!',
        '다양한 종류와 고리 모양으로 원하는 키링을 만들어 보세요.'
      ],
      services: [
        'KEYRING_ADVERTISE',
        'KEYRING_DESIGNER',
        'KEYRING_TYPE',
        'KEYRING_PRINTING_COTTON',
        'KEYRING_CHAIN_WITH_RINGS',
        'KEYRING_SELECT_SIZE',
        'KEYRING_ORDER_NOTES'
      ]
		}
	}
};
