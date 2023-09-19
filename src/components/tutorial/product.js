

import React from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';
import { change, Field, reduxForm } from 'redux-form';

import { ActionCS, ActionStore } from 'actions/index';
import { CSTypes } from 'constants/index';
import { getDatasetByName } from 'utils/dom';
import { getDeepValue } from 'utils/json';
import { addCdn } from 'utils/url';

import { SelectField } from 'components/common/fields';

import Tab from 'components/common/tab';
import GuideDefault from 'components/common/guides/default';
import GuideStickerDIY from 'components/common/guides/sticker-diy';
import GuideStickerFreeSize from 'components/common/guides/sticker-free-size';
import GuideStickerLayoutOption from 'components/common/guides/sticker-layout-option';
import GuideStickerBackgroundOption from 'components/common/guides/sticker-background-option';
import GuidePlaCardBannerSize from 'components/common/guides/placard-banner-size';
import GuideBusinessCardOption from 'components/common/guides/business-card-option';
import GuideEffectOption from "../common/guides/effect-option";
import GuideOptionSelect from 'components/common/guides/option-select';

import ApparelContents from 'components/store/intro/apparelContents';
import GuideMaker from 'components/common/guides/guideMaker';

import CommonGuide from './common-guide';
import optionSelect from "../common/guides/option-select";

/**
 * 임시로 cdn 하드코딩 해놨음
 * 제발 바꾸자 2020 / 01 / 23
 */
class Product extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			activeIndex: 0,
			activeSubIndex: 0,
      activeThreeIndex: 0,
			activeSubSubIndex:0,
      activeThreeSubIndex : 0
		};

		this.productMenus = [
			{
				label: '명함',
				productName: 'business-card',
				children: [
					{
						category: 'business-card',
						subCategory: 'basic'
					}
				]
			},
			{
				label: '스티커',
				productName: 'sticker',
				children: [
					{
						label: '낱장',
						category: 'sticker',
						subCategory: 'free-size'
					},
					{
						label: 'DIY',
						category: 'sticker',
						subCategory: 'diy'
					},
					{
						label: '원형',
						category: 'sticker',
						subCategory: 'circle'
					},
					{
						label: '정사각형',
						category: 'sticker',
						subCategory: 'square'
					},
					{
						label: '직사각형',
						category: 'sticker',
						subCategory: 'rectangle',
            children: [
              {
                label: '가로',
                category: 'sticker',
                subCategory: 'rectangleHorizontal',
                value: '0',
                children: [
                  {
                    label: '30 x 12',
                    category: 'sticker',
                    subCategory: 'rectangleHorizontal3012',
                    value: '0'
                  },
                  {
                    label: '40 x 26',
                    category: 'sticker',
                    subCategory: 'rectangleHorizontal4026',
                    value: '1'
                  },
                  {
                    label: '50 x 30',
                    category: 'sticker',
                    subCategory: 'rectangleHorizontal5030',
                    value: '2'
                  },
                  {
                    label: '65 x 42',
                    category: 'sticker',
                    subCategory: 'rectangleHorizontal6542',
                    value: '3'
                  },
                  {
                    label: '85 x 55',
                    category: 'sticker',
                    subCategory: 'rectangleHorizontal8555',
                    value: '4'
                  },
                  {
                    label: '105 x 70',
                    category: 'sticker',
                    subCategory: 'rectangleHorizontal10570',
                    value: '5'
                  },
                  {
                    label: '120 x 90',
                    category: 'sticker',
                    subCategory: 'rectangleHorizontal12090',
                    value: '6'
                  }
                ]
              },
              {
                label: '세로',
                category: 'sticker',
                subCategory: 'rectangleVertical',
                value: '1',
                children: [
                  {
                    label: '12 x 30',
                    category: 'sticker',
                    subCategory: 'rectangleVertical1230',
                    value: '0'
                  },
                  {
                    label: '26 x 40',
                    category: 'sticker',
                    subCategory: 'rectangleVertical2640',
                    value: '1'
                  },
                  {
                    label: '30 x 50',
                    category: 'sticker',
                    subCategory: 'rectangleVertical3050',
                    value: '2'
                  },
                  {
                    label: '42 x 65',
                    category: 'sticker',
                    subCategory: 'rectangleVertical4265',
                    value: '3'
                  },
                  {
                    label: '55 x 85',
                    category: 'sticker',
                    subCategory: 'rectangleVertical5585',
                    value: '4'
                  },
                  {
                    label: '70 x 105',
                    category: 'sticker',
                    subCategory: 'rectangleVertical70105',
                    value: '5'
                  },
                  {
                    label: '90 x 120',
                    category: 'sticker',
                    subCategory: 'rectangleVertical90120',
                    value: '6'
                  }
                ]
              }
            ]
					},
					{
						label: '와이드형',
						category: 'sticker',
						subCategory: 'wide',
            children: [
              {
                label: '가로',
                category: 'sticker',
                subCategory: 'wideHorizontal',
                value: '0',
                children: [
                  {
                    label: '40 x 10',
                    category: 'sticker',
                    subCategory: 'wideHorizontal4010',
                    value: '0'
                  },
                  {
                    label: '60 x 15',
                    category: 'sticker',
                    subCategory: 'wideHorizontal6015',
                    value: '1'
                  },
                  {
                    label: '80 x 20',
                    category: 'sticker',
                    subCategory: 'wideHorizontal8020',
                    value: '2'
                  }
                ]
              },
              {
                label: '세로',
                category: 'sticker',
                subCategory: 'wideVertical',
                value: '1',
                children: [
                  {
                    label: '10 x 40',
                    category: 'sticker',
                    subCategory: 'wideVertical1040',
                    value: '0'
                  },
                  {
                    label: '15 x 60',
                    category: 'sticker',
                    subCategory: 'wideVertical1560',
                    value: '1'
                  },
                  {
                    label: '20 x 80',
                    category: 'sticker',
                    subCategory: 'wideVertical2080',
                    value: '2'
                  }
                ]
              }
            ]
					},
          {
            label: '롤 스티커',
            category: 'sticker',
            subCategory: 'roll',
            children: [
              {
                label: '원',
                category: 'sticker',
                subCategory: 'roundRollSticker',
                value: '0',
                children: [
                  {
                    label: '20 x 20',
                    category: 'sticker',
                    subCategory: 'roundRollSticker20',
                    value: '0'
                  },
                  {
                    label: '30 x 30',
                    category: 'sticker',
                    subCategory: 'roundRollSticker30',
                    value: '1'
                  },
                  {
                    label: '45 x 45',
                    category: 'sticker',
                    subCategory: 'roundRollSticker45',
                    value: '2'
                  },
                  {
                    label: '60 x 60',
                    category: 'sticker',
                    subCategory: 'roundRollSticker60',
                    value: '3'
                  }
                ]
              },
              {
                label: '직사각 (가로)',
                category: 'rectangleRollSticker',
                value: '1',
                children: [
                  {
                    label: '30 x 18',
                    category: 'sticker',
                    subCategory: 'rectangleRollSticker3018',
                    value: '0'
                  },
                  {
                    label: '40 x 20',
                    category: 'sticker',
                    subCategory: 'rectangleRollSticker4020',
                    value: '1'
                  },
                  {
                    label: '50 x 30 (직각)',
                    category: 'sticker',
                    subCategory: 'rectangleRollSticker5030',
                    value: '2'
                  },
                  {
                    label: '50 x 30 (둥근)',
                    category: 'sticker',
                    subCategory: 'rectangleRollSticker5030round',
                    value: '3'
                  },
                  {
                    label: '60 x 40',
                    category: 'sticker',
                    subCategory: 'rectangleRollSticker6040',
                    value: '4'
                  },
                  {
                    label: '60 x 50',
                    category: 'sticker',
                    subCategory: 'rectangleRollSticker6050',
                    value: '5'
                  },
                  {
                    label: '70 x 30',
                    category: 'sticker',
                    subCategory: 'rectangleRollSticker7030',
                    value: '6'
                  },
                  {
                    label: '85 x 10',
                    category: 'sticker',
                    subCategory: 'rectangleRollSticker8518',
                    value: '7'
                  },
                  {
                    label: '85 x 55',
                    category: 'sticker',
                    subCategory: 'rectangleRollSticker8555',
                    value: '8'
                  }
                ]
              },
              {
                label: '직사각 (세로)',
                category: 'rectangleRollStickerVertical',
                value: '2',
                children: [
                  {
                    label: '18 x 30',
                    category: 'sticker',
                    subCategory: 'rectangleRollSticker1830',
                    value: '0'
                  },
                  {
                    label: '20 x 40',
                    category: 'sticker',
                    subCategory: 'rectangleRollSticker2040',
                    value: '1'
                  },
                  {
                    label: '30 x 50 (직각)',
                    category: 'sticker',
                    subCategory: 'rectangleRollSticker3050',
                    value: '2'
                  },
                  {
                    label: '30 x 50 (둥근)',
                    category: 'sticker',
                    subCategory: 'rectangleRollSticker3050round',
                    value: '3'
                  },
                  {
                    label: '40 x 60',
                    category: 'sticker',
                    subCategory: 'rectangleRollSticker4060',
                    value: '4'
                  },
                  {
                    label: '50 x 60',
                    category: 'sticker',
                    subCategory: 'rectangleRollSticker5060',
                    value: '5'
                  },
                  {
                    label: '30 x 70',
                    category: 'sticker',
                    subCategory: 'rectangleRollSticker3070',
                    value: '6'
                  },
                  {
                    label: '18 x 85',
                    category: 'sticker',
                    subCategory: 'rectangleRollSticker1885',
                    value: '7'
                  },
                  {
                    label: '55 x 85',
                    category: 'sticker',
                    subCategory: 'rectangleRollSticker5585',
                    value: '8'
                  }
                ]
              },
              {
                label: '하트',
                category: 'heartRollSticker',
                value: '3',
                children: [
                  {
                    label: '35 x 35',
                    category: 'sticker',
                    subCategory: 'heartRollSticker35',
                    value: '0'
                  },
                  {
                    label: '60 x 60',
                    category: 'sticker',
                    subCategory: 'heartRollSticker60',
                    value: '1'
                  }
                ]
              },
              {
                label: '별',
                category: 'starRollSticker',
                value: '4',
                children: [
                  {
                    label: '35 x 35',
                    category: 'sticker',
                    subCategory: 'starRollSticker35',
                    value: '0'
                  },
                  {
                    label: '60 x 60',
                    category: 'sticker',
                    subCategory: 'starRollSticker60',
                    value: '1'
                  }
                ]
              },
              {
                label: '정사각',
                category: 'squareRollSticker',
                value: '5',
                children: [
                  {
                    label: '20 x 20',
                    category: 'sticker',
                    subCategory: 'squareRollSticker20',
                    value: '0'
                  },
                  {
                    label: '30 x 30',
                    category: 'sticker',
                    subCategory: 'squareRollSticker30',
                    value: '1'
                  },
                  {
                    label: '45 x 45',
                    category: 'sticker',
                    subCategory: 'squareRollSticker45',
                    value: '2'
                  },
                  {
                    label: '60 x 60',
                    category: 'sticker',
                    subCategory: 'squareRollSticker60',
                    value: '3'
                  }
                ]
              }
            ]
          },
          {
            label: '컬러 데칼 스티커',
            category: 'color-decal',
            subCategory:'defaults',
            children: [
              {
                label: '가로',
                category: 'color-decal',
                subCategory: 'horizontal',
                value: '0',
                children: [
                  {
                    label: 'A5',
                    category: 'color-decal',
                    subCategory: 'horizontalA5',
                    value: '0'
                  },
                  {
                    label: 'A4',
                    category: 'color-decal',
                    subCategory: 'horizontalA4',
                    value: '1'
                  },
                  {
                    label: 'A3',
                    category: 'color-decal',
                    subCategory: 'horizontalA3',
                    value: '2'
                  },
                  {
                    label: 'A2',
                    category: 'color-decal',
                    subCategory: 'horizontalA2',
                    value: '3'
                  }
                ]
              },
              {
                label: '세로',
                category: 'color-decal',
                subCategory: 'vertical',
                value: '1',
                children: [
                  {
                    label: 'A5',
                    category: 'color-decal',
                    subCategory: 'verticalA5',
                    value: '0'
                  },
                  {
                    label: 'A4',
                    category: 'color-decal',
                    subCategory: 'verticalA4',
                    value: '1'
                  },
                  {
                    label: 'A3',
                    category: 'color-decal',
                    subCategory: 'verticalA3',
                    value: '2'
                  },
                  {
                    label: 'A2',
                    category: 'color-decal',
                    subCategory: 'verticalA2',
                    value: '3'
                  }
                ]
              },
              {
                label: '정사각',
                category: 'color-decal',
                subCategory: 'square',
                value: '2',
                children: [
                  {
                    label: '150 x 150',
                    category: 'color-decal',
                    subCategory: 'square150',
                    value: '0'
                  },
                  {
                    label: '250 x 250',
                    category: 'color-decal',
                    subCategory: 'square250',
                    value: '1'
                  },
                  {
                    label: '350 x 350',
                    category: 'color-decal',
                    subCategory: 'square350',
                    value: '2'
                  },
                  {
                    label: '450 x 450',
                    category: 'color-decal',
                    subCategory: 'square450',
                    value: '3'
                  }
                ]
              }
            ]
          },
          {
            label: '그래픽 데칼 스티커',
            category: 'graphic-decal',
            subCategory:'defaults',
            children: [
              {
                label: '가로',
                category: 'graphic-decal',
                subCategory: 'horizontal',
                value: '0',
                children: [
                  {
                    label: 'A5',
                    category: 'graphic-decal',
                    subCategory: 'horizontalA5',
                    value: '0'
                  },
                  {
                    label: 'A4',
                    category: 'graphic-decal',
                    subCategory: 'horizontalA4',
                    value: '1'
                  },
                  {
                    label: 'A3',
                    category: 'graphic-decal',
                    subCategory: 'horizontalA3',
                    value: '2'
                  },
                  {
                    label: 'A2',
                    category: 'graphic-decal',
                    subCategory: 'horizontalA2',
                    value: '3'
                  }
                ]
              },
              {
                label: '세로',
                category: 'graphic-decal',
                subCategory: 'vertical',
                value: '1',
                children: [
                  {
                    label: 'A5',
                    category: 'graphic-decal',
                    subCategory: 'verticalA5',
                    value: '0'
                  },
                  {
                    label: 'A4',
                    category: 'graphic-decal',
                    subCategory: 'verticalA4',
                    value: '1'
                  },
                  {
                    label: 'A3',
                    category: 'graphic-decal',
                    subCategory: 'verticalA3',
                    value: '2'
                  },
                  {
                    label: 'A2',
                    category: 'graphic-decal',
                    subCategory: 'verticalA2',
                    value: '3'
                  }
                ]
              },
              {
                label: '정사각',
                category: 'graphic-decal',
                subCategory: 'square',
                value: '2',
                children: [
                  {
                    label: '150 x 150',
                    category: 'graphic-decal',
                    subCategory: 'square150',
                    value: '0'
                  },
                  {
                    label: '250 x 250',
                    category: 'graphic-decal',
                    subCategory: 'square250',
                    value: '1'
                  },
                  {
                    label: '350 x 350',
                    category: 'graphic-decal',
                    subCategory: 'square350',
                    value: '2'
                  },
                  {
                    label: '450 x 450',
                    category: 'graphic-decal',
                    subCategory: 'square450',
                    value: '3'
                  }
                ]
              }
            ]
          },
/*					{
						label: 'A사이즈형',
						category: 'sticker',
						subCategory: 'a-size'
					}*/
				]
			},
      {
        label: 'MD',
        productName: 'md',
        children: [
          {
            label: '뉴 스택 글라스',
            category: 'new-stack-glass',
            subCategory:'defaults',
          },
          {
            label: '스트레이트 글라스',
            category: 'straight-glass',
            subCategory:'defaults',
          },
          {
            label: '반투명 리유저블컵',
            category: 'translucent-reusable-cup',
            subCategory:'defaults',
          },
          {
            label: '리유저블컵',
            category: 'reusable-cup',
            subCategory:'defaults',
          },
          {
            label: '에코 텀블러',
            category: 'eco-tumbler',
            subCategory:'defaults',
          },
          {
            label: '노트패드',
            category: 'note-pad',
            subCategory:'defaults',
          },
          {
            label: '메모패드',
            category: 'memo-pad',
            subCategory:'defaults',
          },
          {
            label: '투명PVC커버 다이어리',
            category: 'pvc-diary',
            subCategory:'defaults',
          },
          {
            label: '소프트커버 다이어리',
            category: 'soft-diary',
            subCategory:'defaults',
          },
          {
            label: '하드커버 다이어리',
            category: 'hard-diary',
            subCategory:'defaults',
          },
          {
            label: '베이직 볼펜',
            category: 'basic-pen',
            subCategory:'defaults',
          },
          {
            label: '스탠다드 볼펜',
            category: 'standard-pen',
            subCategory:'defaults',
          },
          {
            label: '라이트 볼펜',
            category: 'light-pen',
            subCategory:'defaults',
          },
          {
            label: '친환경 볼펜',
            category: 'eco-pen',
            subCategory:'defaults',
          },
          {
            label: '아크릴 키링',
            category: 'acrylic-keyring',
            subCategory:'defaults',
          },
          {
            label: '핀 버튼',
            category: 'pin-button',
            subCategory:'defaults',
          },
          {
            label: '거울 버튼',
            category: 'mirror-button',
            subCategory:'defaults',
          },
          {
            label: '자석 버튼',
            category: 'magnet-button',
            subCategory:'defaults',
          },
          {
            label: '스마트톡',
            category: 'smart-tok',
            subCategory:'defaults',
          }/*,
          {
            label: '부채',
            category: 'fan',
            subCategory:'defaults',
          }*/
        ]
      },
			{
				label: '배너/현수막',
				productName: 'banner',
				children: [
					{
						label: '현수막',
						category: 'placard-banner',
						subCategory: 'defaults'
					},
					{
						label: '스탠다드 배너',
						category: 'standard-banner',
						subCategory: 'defaults'
					},
					{
						label: '양면 배너',
						category: 'double-side-banner',
						subCategory: 'defaults'
					},
					{
						label: '롤업 배너',
						category: 'rollup-banner',
						subCategory: 'defaults'
					},
					{
						label: '미니 배너',
						category: 'mini-banner',
						subCategory: 'defaults'
					}
				]
			},
			{
				label: '사인/포스터',
				productName: 'signs-posters',
				children: [
					{
						label: '포스터',
						category: 'poster',
						subCategory: 'defaults'
					},
					{
						label: '보드 사인',
						category: 'board-sign',
						subCategory: 'defaults'
					},
					{
						label: '아크릴 사인',
						category: 'acrylic-sign',
						subCategory: 'defaults'
					},
					{
						label: '메탈 사인',
						category: 'metal-sign',
						subCategory: 'defaults'
					},
					{
						label: '원목 사인',
						category: 'wooden-frame-sign',
						subCategory: 'defaults'
					},
					{
						label: '테이블탑 사인',
						category: 'table-top-sign',
						subCategory: 'defaults'
					},
					{
						label: '카 마그넷',
						category: 'car-magnet',
						subCategory: 'defaults'
					},
					{
						label: 'A 프레임 사인',
						category: 'a-frame-sign',
						subCategory: 'defaults'
					}
				]
			},
			{
				label: '홍보물',
				productName: 'pr',
				children: [
					{
						label: '전단',
						category: 'flyer',
						subCategory: 'defaults'
					},
					{
						label: '브로슈어',
						category: 'brochure',
						subCategory: 'defaults'
					},
					{
						label: '메뉴판',
						category: 'menu',
						subCategory: 'defaults'
					},
					{
						label: '쿠폰',
						category: 'coupon',
						subCategory: 'defaults'
					},
					{
						label: '포스트카드',
						category: 'post-card',
						subCategory: 'defaults'
					}
				]
			},
      {
        label: '카드',
        productName: 'card',
        children: [
          {
            label: '플랫',
            category: 'card',
            subCategory: 'flat'
          },
          {
            label: '폴더',
            category: 'card',
            subCategory: 'folder'
          }
        ]
      },
      {
        label: '캘린더',
        productName: 'calendar-desk',
        children: [
          {
            category: 'calendar-desk',
            subCategory: 'calendar_desk_standard'
          }
        ]
      },
			{
				label: '어패럴',
				productName: 'apparel',
				children: [
					{
						label: '긴팔 티셔츠',
						category: 'apparel',
						subCategory: 'printstar-00102-cvl',
						value: '0',
						children: [
							{
								label: '프린트스타 17수 라운드 긴팔(남여공용)',
								category: 'apparel',
								subCategory: 'printstar-00102-cvl',
								value: '0'
							},
							{
								label: '프린트스타 17수 라운드 긴팔(유아동)',
								category: 'apparel',
								subCategory: 'printstar-00102-cvl-kids',
								value: '8802'
							}
						]
					},
					{
						label: '반팔 티셔츠',
						category: 'apparel',
						subCategory: 'printstar-085-cvt',
						value: '1',
						children: [
							{
								label: '길단 20수 라운드 반팔(남여공용)',
								category: 'apparel',
								subCategory: 'gildan-ha00',
								value: '9911'
							},
							{
								label: '길단 포켓 라운드 반팔(남여공용)',
								category: 'apparel',
								subCategory: 'gildan-2300',
								value: '9912'
							},
							{
								label: '길단 브이넥 반팔(남)',
								category: 'apparel',
								subCategory: 'gildan-63v00',
								value: '9913'
							},
							{
								label: '길단 브이넥 반팔(여)',
								category: 'apparel',
								subCategory: 'gildan-63v00l',
								value: '9914'
							},
							{
								label: '길단 래글런 반팔(남여공용)',
								category: 'apparel',
								subCategory: 'gildan-76500',
								value: '9915'
							},
							{
								label: '길단 링어 반팔(남여공용)',
								category: 'apparel',
								subCategory: 'gildan-76600',
								value: '9916'
							},
							{
								label: '길단 기능성 라운드 반팔(남여공용)',
								category: 'apparel',
								subCategory: 'gildan-42000',
								value: '9917'
							},
							{
								label: '길단 슬림 카라 반팔(남)',
								category: 'apparel',
								subCategory: 'gildan-73800',
								value: '9918'
							},
							{
								label: '길단 슬림 카라 반팔(여)',
								category: 'apparel',
								subCategory: 'gildan-73800l',
								value: '9919'
							},
							{
								label: '아메리칸어패럴 30수 프리미엄 반팔(남여공용)',
								category: 'apparel',
								subCategory: 'american-apparel-2001w',
								value: '9920'
							},
							{
								label: '아메리칸어패럴 30수 프리미엄 반팔(여)',
								category: 'apparel',
								subCategory: 'american-apparel-2102w',
								value: '9921'
							},
							{
								label: '앤빌 컬러믹스 라운드 반팔(남여공용)',
								category: 'apparel',
								subCategory: 'anvil-6750',
								value: '9922'
							},
							{
								label: '트리플에이 18수 라운드 반팔(남여공용)',
								category: 'apparel',
								subCategory: 'aaa-1301',
								value: '9923'
							},
							{
								label: '프린트스타 레이어드 카라 반팔(남여공용)',
								category: 'apparel',
								subCategory: 'printstar-195-byp',
								value: '9924'
							},
							{
								label: '프린트스타 17수 라운드 반팔(남여공용)',
								category: 'apparel',
								subCategory: 'printstar-085-cvt',
								value: '0'
							},
							{
								label: '프린트스타 17수 라운드 반팔(유아동)',
								category: 'apparel',
								subCategory: 'printstar-085-cvt-kids',
								value: '9926'
							},
							{
								label: '길단 18수 릴렉스핏 라운드 반팔(남여공용)',
								category: 'apparel',
								subCategory: 'gildan-2000',
								value: '9927'
							},
							{
								label: '길단 24수 네온 라운드 반팔(남여공용)',
								category: 'apparel',
								subCategory: 'gildan-76000',
								value: '9928'
							},
							{
								label: '길단 24수 파스텔 라운드 반팔(남여공용)',
								category: 'apparel',
								subCategory: 'gildan-76000p',
								value: '9929'
							},
							{
								label: '길단 스탠다드 카라 반팔(남여공용)',
								category: 'apparel',
								subCategory: 'gildan-6800',
								value: '9930'
							},
							{
								label: '길단 기능성 메시 라운드 반팔(남여공용)',
								category: 'apparel',
								subCategory: 'gildan-4bi00',
								value: '9931'
							},
							{
								label: '챔피온 릴렉스핏 라운드 반팔(남여공용)',
								category: 'apparel',
								subCategory: 'champion-t425',
								value: '9932'
							},
							{
								label: '오프린트미 프리미엄 크루넥 반팔(남여공용)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-p22001',
								value: '9933'
							}
						]
					},
					{
						label: '맨투맨/후드/집업',
						value: '2',
						category: 'apparel',
						subCategory: 'ohprintme-opm-100219',
						children: [
							{
								label: '오프린트미 베이직 맨투맨(남여공용)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-100219',
								value: '0'
							},
							{
								label: '오프린트미 베이직 후드티(남여공용)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-100216',
								value: '001011'
							},
							{
								label: '오프린트미 베이직 후드집업(남여공용)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-100217',
								value: '001013'
							},
							{
								label: '오프린트미 기모 맨투맨(남여공용)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-100346',
								value: '001010'
							},
							{
								label: '오프린트미 기모 후드티(남여공용)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-100347',
								value: '001012'
							},
							{
								label: '오프린트미 기모 후드 집업(남여공용)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-100348',
								value: '001014'
							},
							{
								label: '오프린트미 드라이 후드 집업(남여공용)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-100342',
								value: '001015'
							},
							{
								label: '오프린트미 베이직 맨투맨(유아동)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-100219-kids',
								value: '004009'
							},
							{
								label: '오프린트미 베이직 후드티(유아동)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-100216-kids',
								value: '004011'
							},
							{
								label: '오프린트미 베이직 후드집업(유아동)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-100217-kids',
								value: '004013'
							},
							{
								label: '오프린트미 드라이 후드 집업(유아동)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-100342-kids',
								value: '004015'
							}
						]

					},
					{
						label: '바지',
						category: 'apparel',
						subCategory: 'ohprintme-opm-100218',
						value: '3',
						children: [
							{
								label: '오프린트미 베이직 팬츠(남여공용)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-100218',
								value: '0'
							},
							{
								label: '오프린트미 베이직 팬츠(유아동)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-100218-kids',
								value: '7004016'
							}
						]

					},
					{
						label: '에코백',
						category: 'apparel',
						subCategory: 'ohprintme-opm-100777l',
						value: '4',
						children: [
							{
								label: '오프린트미 베이직 에코백(L)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-100777l',
								value: '0',
							},
							{
								label: '오프린트미 베이직 에코백(M)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-100777m',
								value: '7001018',
							},
							{
								label: '오프린트미 베이직 에코백(S)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-100777s',
								value: '7001019',
							},
							{
								label: '오프린트미 스탠다드 에코백(M)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-p22014m',
								value: '7001020',
							},
							{
								label: '오프린트미 스탠다드 에코백(L)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-p22015l',
								value: '7001021',
							},
							{
								label: '오프린트미 투포켓 에코백',
								category: 'apparel',
								subCategory: 'ohprintme-opm-p22016',
								value: '7001022',
							}
						]

					},
					{
						label: '파우치',
						category: 'apparel',
						subCategory: 'ohprintme-opm-p22011m',
						value: '5',
						children: [
							{
								label: '오프린트미 데일리 파우치바닥형(M)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-p22011m',
								value: '0'
							},
							{
								label: '오프린트미 스탠다드 파우치플랫형(M)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-p22012m',
								value: '5502'
							},
							{
								label: '오프린트미 스탠다드 파우치_플랫형(L)',
								category: 'apparel',
								subCategory: 'ohprintme-opm-p22013l',
								value: '5503'
							}
						]
					}
				]
			},
      {
        label: '봉투/쇼핑백',
        category: 'packaging',
        children: [
            {
              label: '봉투',
              category: 'envelope',
              subCategory: 'defaults',
              children: [
                {
                  label: '일반형',
                  category: 'envelope',
                  subCategory: 'envelope-normal',
                  value: '0',
                  children: [
                    {
                      label: '대봉투 가로형',
                      category: 'envelope',
                      subCategory: 'envelope-normal-l-h',
                      value: '0'
                    },
                    {
                      label: '대봉투 세로형',
                      category: 'envelope',
                      subCategory: 'envelope-normal-l-v',
                      value: '1802'
                    },
                    {
                      label: '중봉투 가로형',
                      category: 'envelope',
                      subCategory: 'envelope-normal-m-h',
                      value: '1803'
                    },
                    {
                      label: '중봉투 세로형',
                      category: 'envelope',
                      subCategory: 'envelope-normal-m-v',
                      value: '1804'
                    },
                    {
                      label: '소봉투 가로형',
                      category: 'envelope',
                      subCategory: 'envelope-normal-s-h',
                      value: '1805'
                    },
                    {
                      label: '소봉투 세로형',
                      category: 'envelope',
                      subCategory: 'envelope-normal-s-v',
                      value: '1806'
                    },
                    {
                      label: '캘린더 가로L',
                      category: 'envelope',
                      subCategory: 'envelope-normal-calendar-l-h',
                      value: '1807'
                    },
                    {
                      label: '캘린더 가로M',
                      category: 'envelope',
                      subCategory: 'envelope-normal-calendar-m-h',
                      value: '1808'
                    },
                    {
                      label: '캘린더 세로M',
                      category: 'envelope',
                      subCategory: 'envelope-normal-calendar-m-v',
                      value: '1809'
                    },
                    {
                      label: '캘린더 세로S',
                      category: 'envelope',
                      subCategory: 'envelope-normal-calendar-s-v',
                      value: '1810'
                    }
                  ]
                },
                {
                  label: '자켓형',
                  category: 'envelope',
                  subCategory: 'envelope-jacket',
                  value: '1',
                  children: [
                    {
                      label: '자켓형 소봉투',
                      category: 'envelope',
                      subCategory: 'envelope-jacket-s',
                      value: '0'
                    }
                  ]
                },
                {
                  label: '안내형',
                  category: 'envelope',
                  subCategory: 'envelope-guide',
                  value: '2',
                  children: [
                    {
                      label: '5x7 봉투',
                      category: 'envelope',
                      subCategory: 'envelope-guide-5x7',
                      value: '0'
                    },
                    {
                      label: '4x6 봉투',
                      category: 'envelope',
                      subCategory: 'envelope-guide-4x6',
                      value: '3802'
                    },
                    {
                      label: '쿠폰 봉투',
                      category: 'envelope',
                      subCategory: 'envelope-guide-coupon',
                      value: '3803'
                    },
                    {
                      label: '미니 봉투',
                      category: 'envelope',
                      subCategory: 'envelope-guide-mini',
                      value: '3804'
                    }
                  ]
                }
              ]
            },
            {
              label: '쇼핑백',
              category: 'shoppingbag',
              subCategory: 'defaults'
              /*children: [
                {
                  label: '와이드형 중',
                  category: 'packaging',
                  subCategory: 'shoppingbag-wide-m'
                },
                {
                  label: '와이드형 소',
                  category: 'packaging',
                  subCategory: 'shoppingbag-wide-s'
                },
                {
                  label: '세로형 대',
                  category: 'packaging',
                  subCategory: 'shoppingbag-vertical-l'
                },
                {
                  label: '세로형 중',
                  category: 'packaging',
                  subCategory: 'shoppingbag-vertical-m'
                },
                {
                  label: '세로형 소',
                  category: 'packaging',
                  subCategory: 'shoppingbag-vertical-s'
                }
              ]*/
            }
        ]
      }
		];

		this.onClickLogo = this.onClickLogo.bind(this);
		this.onClickMenu = this.onClickMenu.bind(this);
		this.onClickSubMenu = this.onClickSubMenu.bind(this);
		this.onChangeSubMenu = this.onChangeSubMenu.bind(this);
		this.changeApparelType = this.changeApparelType.bind(this);

		this.changeThreeType = this.changeThreeType.bind(this);
    this.onChangeThreeMenu = this.onChangeThreeMenu.bind(this);
	}

	onClickLogo() {
		let { actions: { handleUpdateCSPopItem } } = this.props;

		handleUpdateCSPopItem({
			type: CSTypes.TUTORIAL,
			value: {
				boardId: `tutorial-LOGO`,
				keyName: 'LOGO',
				index: 0
			}
		}, CSTypes.APPEND);
	}

	onClickMenu(event) {
		let { actions: { handleChangeFormValue } } = this.props;
		let { activeIndex: currentActiveIndex, activeSubSubIndex, activeThreeSubIndex } = this.state;

		let nextActiveIndex = Number(getDatasetByName(event.currentTarget, 'index'));

    let isApparel = (nextActiveIndex === 8);
    let isPackaging = (nextActiveIndex === 9);
    let isSticker = (nextActiveIndex === 1);
    let saveFindNum = (isApparel || isPackaging || isSticker);

		currentActiveIndex !== nextActiveIndex && Promise.all([
			handleChangeFormValue('submenu', 0),
      saveFindNum && handleChangeFormValue('submenu2', 0),
		]).then(() => {
			this.setState(update(this.state, {
				activeIndex: { $set: nextActiveIndex },
				activeSubIndex: { $set: 0 }
			}))
		});
	}

	onClickSubMenu(event) {
		let { actions: { handleChangeFormValue } } = this.props;
		let { activeSubIndex: currentActiveSubIndex, activeIndex } = this.state;

    let activeMenu = this.productMenus[ activeIndex ];
    let subMenus = getDeepValue(activeMenu || {}, `children`);
    let subMenuLabel = getDeepValue(subMenus[currentActiveSubIndex] || {}, `category`);
    let subMenuSubLabel = getDeepValue(subMenus[currentActiveSubIndex] || {}, `subCategory`);

    let nextActiveSubIndex = Number(getDatasetByName(event.currentTarget, 'index'));
    let subMenuIdx = nextActiveSubIndex;

    if((subMenuLabel === "sticker" || subMenuLabel === "color-decal" || subMenuLabel === "graphic-decal") && (nextActiveSubIndex === 4 || nextActiveSubIndex === 5 || nextActiveSubIndex === 6 || nextActiveSubIndex === 7 || nextActiveSubIndex === 8)){
      subMenuIdx = 0;
    }

		currentActiveSubIndex !== nextActiveSubIndex && Promise.all([
			handleChangeFormValue('submenu', subMenuIdx)
		]).then(() => {
			this.setState(update(this.state, {
				activeSubIndex: { $set: nextActiveSubIndex }
			}))
		});
	}

	onChangeSubMenu(subIndex) {
		let { actions: { handleChangeFormValue } } = this.props;
		let { activeSubIndex: currentActiveSubIndex } = this.state;

		currentActiveSubIndex !== subIndex && Promise.all([
			handleChangeFormValue('submenu', subIndex)
		]).then(() => {
			this.setState(update(this.state, {
				activeSubIndex: { $set: subIndex }
			}))
		});
	}

  changeApparelType(subIndex) {
    let { actions: { handleChangeFormValue } } = this.props;

    Promise.all([
      handleChangeFormValue('submenu2', subIndex)
    ]).then(() => {
      this.setState(update(this.state, {
        activeSubSubIndex: { $set: subIndex }
      }))
    });
  }

  onChangeThreeMenu(subIndex) {
    let { actions: { handleChangeFormValue } } = this.props;
    let { activeThreeIndex: currentActiveSubIndex } = this.state;

    currentActiveSubIndex !== subIndex && Promise.all([
      handleChangeFormValue('submenu', subIndex)
    ]).then(() => {
      this.setState(update(this.state, {
        activeThreeIndex: { $set: subIndex }
      }))
    });
  }

	changeThreeType(subIndex) {
		let { actions: { handleChangeFormValue } } = this.props;

		Promise.all([
			handleChangeFormValue('submenu2', subIndex)
		]).then(() => {
			this.setState(update(this.state, {
        activeThreeSubIndex: { $set: subIndex }
			}))
		});
	}

	checkFourLabel(subMenuLabel, subMenuSubLabel) {
	  if(subMenuLabel === "envelope") return true;
	  else if(subMenuLabel === "sticker") {
	    switch(subMenuSubLabel) {
        case 'rectangle':
        case 'wide':
        case 'roll':
          return true;
        default:
          return false;
      }
    }
	  else if(subMenuLabel === "color-decal") return true;
    else if(subMenuLabel === "graphic-decal") return true;
	  else return false;
  }

  render() {
		let { width, actions: { handleGetStoreProduct }, states  } = this.props;
		let { activeIndex, activeSubIndex, activeSubSubIndex, activeThreeIndex, activeThreeSubIndex, product } = this.state;
		let activeMenu = this.productMenus[ activeIndex ];

		let subMenus = getDeepValue(activeMenu || {}, `children`);
    let subMenuLabel = getDeepValue(subMenus[activeSubIndex] || {}, `category`);
    let subMenuSubLabel = getDeepValue(subMenus[activeSubIndex] || {}, `subCategory`);
		let threeDepthMenus = getDeepValue(subMenus[activeSubIndex] || {}, `children`);
    let fourDepthMenus = threeDepthMenus && getDeepValue(threeDepthMenus[activeThreeIndex] || {}, `children`);
    let isFourEnvelope = this.checkFourLabel(subMenuLabel, subMenuSubLabel);

		let findNum = !!isFourEnvelope ?
        (fourDepthMenus || []).findIndex((item) => {
          return Number(item['value']) === activeThreeSubIndex;
        })
      :
        (threeDepthMenus || []).findIndex((item) => {
          return Number(item['value']) === activeSubSubIndex;
        })

		findNum = ((findNum === -1) ? 0 : findNum);

		let activeSubMenu = (activeMenu['productName']==="apparel"  ? (threeDepthMenus || [])[ findNum ] : !!isFourEnvelope ? (fourDepthMenus || [])[ findNum ] : (subMenus || [])[ activeSubIndex ] );

		let { category, subCategory } = activeSubMenu || {};
    let isAcrylicKeyring = (category || '').match(/acrylic-keyring/i);
    let isFan = (category || '').match(/fan/i);
    let isCalendar = (category || '').match(/calendar/i);
    let isEnvelope = (category || '').match(/envelope/i);
		let pathname = `${category}/${subCategory}`;
		let sizeClassName = width <= 1140 ? 'small' : '';

		let labels = this.productMenus.reduce((target, guide) => {
			target.push(guide[ 'label' ]);
			return target;
		}, []);


    if(category === "acrylic-keyring" || category === "fan" || category === "calendar-desk" ||  category === "envelope") { product = Object.assign({}, product, handleGetStoreProduct(category, subCategory)) }

		let subLabels = (subMenus || []).reduce((target, menu, index) => {
			!sizeClassName
				?
				target.push(menu[ 'label' ])
				:
				target.push({
					label: menu[ 'label' ],
					value: index
				});

			return target;
		}, []);

		return (
			<section className="tutorial-product-wrap">
				<form>
					<div className={`inner ${sizeClassName ? sizeClassName : ''}`}>
						<section className="upload-file">
							<div>
								<h3>내 디자인 업로드</h3>

								<div className="image-panel">
									<div className="left">
										<img src={addCdn("/images/tutorial/design-upload-340348@2x.png")}/>
									</div>
									<div className="right first">
										<span className="title">PDF 업로드</span>

										<dl>
											<dt>원본 디자인 완벽 구현!</dt>
											<dd>
												PDF는 작업된 벡터 이미지를 제대로 구현할 수 있어요.<br/>
												* 벡터 : 모양과 선 형태로 이루어진 이미지로 확장이 가능하며 가장자리를 매끄럽게 표현해요.
											</dd>
											<dd>PDF는 인쇄에 최적화된 파일 포맷으로, 그래픽 디자인, 텍스트 및 도형 등이 포함된 디자인은 벡터 기반의 PDF로 저장해 주세요.</dd>
											<dd><em>Adobe Illustrator, Adobe Photoshop</em>과 같은 응용 프로그램에서 만들 수 있습니다.</dd>
										</dl>

										<dl>
											<dt>저용량, 고품질 인쇄!</dt>
											<dd>
												작업이 완료된 디자인을 PDF로 저장 시 품질은 압축하지 않고 저용량으로 저장 가능해요.<br/>
												디자인을 하나하나 살려 보다 선명하고 완벽하게 인쇄할 수 있어요.
											</dd>
										</dl>
									</div>
								</div>
							</div>
						</section>

						<section className="guides">
							<div>
								<h3>상품 별 작업 사이즈</h3>
								<div className="sub-title"><em>디자인 가이드</em>를 다운로드하여 작업해 주세요.</div>

								<div className="explanation">
									<ul>
										<li>파일 사이즈가 다를 경우 제작을 진행할 수 없습니다.</li>
										<li><em>Adobe Illustrator, Photoshop</em>과 같은 디자인 응용 프로그램 사용을 권장합니다.</li>
										<li>MS Office와 같은 문서 작업용 프로그램으로 만들 경우 업로드가 불가할 수 있습니다.</li>
										<li><em>낱장, DIY 스티커</em>는 별도의 파일 가이드 없이 유의사항을 참고하여 작업해 주세요.</li>
									</ul>
								</div>

								{React.cloneElement(<Tab/>, {
									labels,
									activeIndex,
									className: sizeClassName,
									tabWidth: `${100 / this.productMenus.length}%`,
									tabHeight: `50px`,
									actions: {
										handleChange: this.onClickMenu
									}
								})}

								{((subMenus || []).length > 1 && (!!(activeMenu[ 'productName' ] || '').match(/apparel/i) && !!threeDepthMenus)) && (
									React.cloneElement(<GuideOptionSelect/>, {
                    states,
										subMenus,
										threeDepthMenus,
										actions :{
											handleChange:this.onChangeSubMenu,
											handleChangeApparelType:this.changeApparelType,
										}

									})
								)}


								{((subMenus || []).length > 1 && !(activeMenu[ 'productName' ] || '').match(/apparel/i)) && (
									!sizeClassName
										?
										React.cloneElement(<Tab/>, {
											labels: subLabels,
											activeIndex: activeSubIndex,
											className: `sub-menu-tab ${activeMenu[ 'productName' ]} ${sizeClassName}`,
											tabWidth: `${100 / subMenus.length}%`,
											tabHeight: `50px`,
											actions: {
												handleChange: this.onClickSubMenu
											}
										})
										:
										<Field name="submenu"
										       className="sub-menu-dropdown box"
										       width={width - 32}
										       placeholder='선택'
										       options={subLabels}
										       onChange={(event, value) => this.onChangeSubMenu(Number(value))}
										       component={SelectField}/>


								)}

                {((threeDepthMenus || []).length > 1 && (!(activeMenu[ 'productName' ] || '').match(/apparel/i) && (subMenus[0][ 'category' ] === "envelope" || subMenus[0][ 'category' ] === "sticker") )) && (
                  React.cloneElement(<GuideOptionSelect/>, {
                    states,
                    subMenus : threeDepthMenus,
                    threeDepthMenus : fourDepthMenus,
                    actions :{
                      handleChange:this.onChangeThreeMenu,
                      handleChangeApparelType:this.changeThreeType,
                    }
                  })
                )}

                {!(pathname || '').match(/sticker\/free-size/i) && (
                  React.cloneElement(<GuideDefault/>, {
                    states,
                    width,
                    params: activeSubMenu
                  })
                )}


								<div className="guideMaker">
                  {(isAcrylicKeyring || isFan || isCalendar || isEnvelope ) && React.cloneElement(<GuideMaker/>,{
                    params:activeSubMenu,
                    product
                  })}
                </div>


								{(pathname || '').match(/sticker\/diy/i) && (
									React.cloneElement(<GuideStickerDIY/>, {
										width
									})
								)}

								{(pathname || '').match(/sticker\/free-size/i) && (
									React.cloneElement(<GuideStickerFreeSize/>, {
										width
									})
								)}

								{(
									(category || '').match(/sticker/i)
									&& !(subCategory || '').match(/diy|free-size/i)
								) && (
									React.cloneElement(<GuideStickerLayoutOption/>, {
										width
									})
								)}

								{(
									(category || '').match(/sticker/i)
								) && (
									React.cloneElement(<GuideStickerBackgroundOption/>, {
										className: 'tutorial',
										subCategory,
										width
									})
								)}

								{(category || '').match(/placard-banner/i) && (
									React.cloneElement(<GuidePlaCardBannerSize/>, {
										width
									})
								)}

								{(category || '').match(/business-card/i) && (
									React.cloneElement(<GuideBusinessCardOption/>, {
										className: 'tutorial',
										width
									})
								)}

								{(category || '').match(/(business-card|flyer|brochure|menu|post-card|coupon|card)/i) && (
									React.cloneElement(<GuideEffectOption/>, {
										className: 'tutorial',
										category,
										width
									})
								)}

							</div>
						</section>

						<CommonGuide/>
					</div>
				</form>
			</section>
		)
	}
}

const formName = 'tutorial-product';

const mapStateToProps = (state, ownerProps) => {
	return {
		initialValues: {
			submenu: 0
		},
    state
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			handleUpdateCSPopItem: (item, mode) => dispatch(ActionCS.updateCSPopItem(item, mode)),
      handleGetStoreProduct: (category, subCategory) => dispatch(ActionStore.getStoreProduct(category, subCategory)),

			handleChangeFormValue: (key, value) => dispatch(change(formName, key, value))
		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: formName
})(Product));
