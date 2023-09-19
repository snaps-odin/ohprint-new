

import React from 'react';
import update from 'react-addons-update';

import { PRODUCT_GUIDE } from 'configs/index';
import { getDatasetByName } from 'utils/dom';

import Tab from 'components/common/tab';
import GuideDefault from 'components/common/guides/default';
import GuideStickerDIY from 'components/common/guides/sticker-diy';
import GuideShoppingBag from 'components/common/guides/shopping-bag';
import GuideStickerFreeSize from 'components/common/guides/sticker-free-size';
import GuideStickerLayoutOption from 'components/common/guides/sticker-layout-option';
import GuideStickerBackgroundOption from 'components/common/guides/sticker-background-option';
import GuidePlaCardBannerSize from 'components/common/guides/placard-banner-size';
import GuideBusinessCardOption from 'components/common/guides/business-card-option';
import GuideEffectOption from 'components/common/guides/effect-option';
import GuideTabOption from 'components/common/guides/tab-option';
import GuideMaker from 'components/common/guides/guideMaker';
import shoppingBag from "../../../common/guides/shopping-bag";

export default class StoreIntroGuide extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			focus: 0
		};

		this.onClickMenu = this.onClickMenu.bind(this);
	}

	onClickMenu(event) {
		let { focus } = this.state;

		let index = Number(getDatasetByName(event.currentTarget, 'index'));

		focus !== index && this.setState(update(this.state, {
			focus: { $set: index }
		}));
	}

	getTab() {
		let { params } = this.props;
		let { category, subCategory } = params;

		let data = null;

		switch (category) {
      case 'pin-button':
          data = [
            {
              label: '원형',
              category: 'pin-button',
              subCategory:'circle'
            },
            {
              label: '사각형',
              category: 'pin-button',
              subCategory: 'square'
            },
            {
              label: '하트형',
              category: 'pin-button',
              subCategory: 'heart'
            }
          ]
        break;

      case 'magnet-button':
        data = [
          {
            label: '원형',
            category: 'magnet-button',
            subCategory:'circle'
          },
          {
            label: '사각형',
            category: 'magnet-button',
            subCategory: 'square'
          },
          {
            label: '하트형',
            category: 'magnet-button',
            subCategory: 'heart'
          }
        ]
        break;

      case 'color-decal':
        data = [
          {
            label: '가로',
            category: 'color-decal',
            subCategory: 'horizontal'
          },
          {
            label: '세로',
            category: 'color-decal',
            subCategory: 'vertical'
          },
          {
            label: '정사각',
            category: 'color-decal',
            subCategory: 'square'
          },
        ]
        break;

      case 'graphic-decal':
        data = [
          {
            label: '가로',
            category: 'graphic-decal',
            subCategory: 'horizontal'
          },
          {
            label: '세로',
            category: 'graphic-decal',
            subCategory: 'vertical'
          },
          {
            label: '정사각',
            category: 'graphic-decal',
            subCategory: 'square'
          },
        ]
        break;

			case 'sticker':
				switch (subCategory) {
          case 'roll':
            data = [
              {
                label: '원',
                category: 'sticker',
                subCategory: 'roundRollSticker'
              },
              {
                label: '직사각 (가로)',
                category: 'sticker',
                subCategory: 'rectangleRollSticker'
              },
              {
                label: '직사각 (세로)',
                category: 'sticker',
                subCategory: 'rectangleRollStickerVertical'
              },
              {
                label: '하트',
                category: 'sticker',
                subCategory: 'heartRollSticker'
              },
              {
                label: '별',
                category: 'sticker',
                subCategory: 'starRollSticker'
              },
              {
                label: '정사각',
                category: 'sticker',
                subCategory: 'squareRollSticker'
              }
            ]
            break;
          case 'rectangle':
            data = [
                {
                  label: '가로',
                  category: 'sticker',
                  subCategory: 'rectangleHorizontal'
                },
                {
                  label: '세로',
                  category: 'sticker',
                  subCategory: 'rectangleVertical'
                }
              ]
            break;
          case 'wide':
            data = [
              {
                label: '가로',
                category: 'sticker',
                subCategory: 'wideHorizontal'
              },
              {
                label: '세로',
                category: 'sticker',
                subCategory: 'wideVertical'
              }
            ]
            break;
					case 'diy':
					case `soft2`:
					case `matt`:
					case 'standard':
					case 'transparency':
					case 'craft':
					case 'hologram':
						data = [
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
								subCategory: 'rectangle'
							},
							{
								label: '와이드형',
								category: 'sticker',
								subCategory: 'wide'
							}
/*							{
								label: 'A사이즈형',
								category: 'sticker',
								subCategory: 'a-size'
							}*/
						];
						break;
				}
				break;

			case 'card':
				switch (subCategory) {
					case 'flat':
					case 'folder':
						break;

					case '70x98':
					case '4x6':
					case '5x7':
						data = [
							{
								label: '플랫',
								category: 'card',
								subCategory: `flat-${subCategory}`
							},
							{
								label: '폴더',
								category: 'card',
								subCategory: `folder-${subCategory}`
							}
						];
						break;

					default:
						data = [
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
						];
						break;
				}
				break;

      case 'envelope':
        data = [
          {
            label: '일반형',
            category: 'envelope',
            subCategory: `envelope-normal`
          },
          {
            label: '자켓형',
            category: 'envelope',
            subCategory: `envelope-jacket`
          },
          {
            label: '안내형',
            category: 'envelope',
            subCategory: `envelope-guide`
          }
        ];
        break;
		}

		return data;
	}

	render() {
		let { params, states, product, cdn } = this.props;
		let { focus } = this.state;
		let { category, subCategory } = params;

		let isSticker = (category || '').match(/sticker/i);
		let isRoll = (category || '').match(/sticker/i) && (subCategory || '').match(/roll/i);
		let isStickerDIY = isSticker && (subCategory || '').match(/diy/i);
		let isStickerFreeSize = isSticker && (subCategory || '').match(/free-size/i);
		let isPlaCardBanner = (category || '').match(/placard-banner/i);
		let isBusinessCard = (category || '').match(/business-card/i);
		let isPr = (category || '').match(/(flyer|brochure|menu|post-card|coupon)/i);
		let isCard = (category || '').match(/^card/i);
    let isAcrylicKeyring = (category || '').match(/acrylic-keyring/i);
    let isFan = (category || '').match(/fan/i);
    let isCalendar = (category || '').match(/calendar-desk/i);
    let isEnvelope = (category || '').match(/envelope/i);
    let isShoppingbag = (category || '').match(/shoppingbag/i);
    let isPen = (category || '').match(/standard-pen|basic-pen|light-pen|eco-pen/i);
    let isHardDiary = (category || '').match(/hard-diary/i);
    let isSoftDiary = (category || '').match(/soft-diary/i);
    let isMemoPad = (category || '').match(/memo-pad/i);
    let isNotePad = (category || '').match(/note-pad/i);
    let isCup = (category || '').match(/new-stack-glass|straight-glass|reusable-cup|eco-tumbler/i);
    let isDecalSticker = (category || '').match(/color-decal|graphic-decal/i);

		let tab = this.getTab();

		return (
			<section className="store-intro-guide-wrap"
			         ref={(c) => {this.el = c;}}>

				{
					isStickerFreeSize
						?
						React.cloneElement(<GuideStickerFreeSize/>, {
								width: 1140
							}
						)
						:
						(
							<div className="inner">
								<h3>친절한 가이드로 쉽고, 편하게!</h3>

								{(tab || []).length > 0 && (
									React.cloneElement(<Tab/>, {
										labels: tab.reduce((target, list) => {
											target.push(list[ 'label' ]);

											return target;
										}, []),
										activeIndex: focus,
										tabWidth: `${100 / tab.length}%`,
										tabHeight: `50px`,
										actions: {
											handleChange: this.onClickMenu
										}
									})
								)}

								{React.cloneElement(<GuideDefault/>, {
									states,
									params: tab ? tab[ focus ] : params
								})}

								{(
									isSticker
									&& (
										!isStickerDIY
										&& !isStickerFreeSize
                    && !isRoll
									)
								) && (
									React.cloneElement(<GuideStickerLayoutOption/>, {
										width: 1140
									})
								)}

								{isPlaCardBanner && (
									React.cloneElement(<GuidePlaCardBannerSize/>, {
										width: 1140
									})
								)}
							</div>
						)}

				{isStickerDIY && React.cloneElement(<GuideStickerDIY/>, {
						width: 1140
					}
				)}

				{(isSticker && !isRoll) && (
					React.cloneElement(<GuideStickerBackgroundOption/>, {
						width: 1140,
						subCategory
					})
				)}

				{isBusinessCard && (
					React.cloneElement(<GuideBusinessCardOption/>, {
						width: 1140
					})
				)}

				{(isPr || isCard || isCup) && (
					React.cloneElement(<GuideEffectOption/>, {
						width: 1140,
						category
					})
				)}

        {(isBusinessCard) && (
          React.cloneElement(<GuideTabOption/>, {
            width: 1140,
            category
          })
        )}

        {(isCalendar || isEnvelope || isShoppingbag || isPen || isHardDiary || isSoftDiary || isMemoPad || isNotePad || isCup || isDecalSticker) && React.cloneElement(<GuideMaker/>,{
          cdn,
          params,
          product
        })}

			</section>
		)
	}
}
