import React from 'react';
import update from 'react-addons-update';

import { getWidth, getHeight } from 'utils/dom';

import ImageLoader from 'components/common/image-loader';

export default class ThumbnailProductApparel extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: {
				skin: false,
				design: false
			}
		};

		this.onUpdateValid = this.onUpdateValid.bind(this);
    this.getProductInfo = this.getProductInfo.bind(this);
	}

	onUpdateValid(isValid, rectangle, type) {
		this.setState(update(this.state, {
			loaded: {
				[ type ]: { $set: isValid }
			}
		}));
	}

	getProductInfo(){
    let { productCode } = this.props;

    return productCode ? productCode.substr(0,3) : '000';
  }

	getStyle() {
		let { position, frameType, etcType, productCode } = this.props;

		let width = getWidth(this.layer) ;
		let height = (etcType && etcType === 'loading') ? "264" : getHeight(this.layer);

		let isBottomPosition = frameType.match(/POSITION_NECK_BACK/i);
		let isFullImage =
			(etcType && etcType.match(/apparel|loading/i)) ? true : frameType.match(/POSITION_RIGHT_ARM|POSITION_LEFT_ARM/i);

//618 : 247 = 580 : x
		let marginSize = height - width;
		let positionY = isFullImage ? -(height * position / 100) : marginSize / 2 - (width * position / 100) + (isBottomPosition ? (marginSize / 2) : 0);

		let prdCode = this.getProductInfo();
//-7.14px

    if(prdCode === "707" && (frameType === "POSITION_BACK" || frameType === "POSITION_FRONT")){
      height *= 0.65;
      marginSize = height - width;
      positionY -= 105;
    }

    if(prdCode === "707" && frameType.match(/POSITION_NECK_BACK|POSITION_RIGHT_ARM|POSITION_LEFT_ARM/i)){
      positionY += 10;
    }

    if(productCode === "705003001001" || productCode === "705003001002" || productCode === "705003001003"){
      positionY += 10;
    }

		return {
			skinStyle: isFullImage
				?
				{
					width: `${(etcType && etcType === 'loading') ? "264" : height}px`,
					height: `${height}px`,
					marginLeft: `${marginSize / 2 * -1}px`
				}
				:
				this.state.loaded.skin ? {
					marginTop: `${isBottomPosition ? marginSize : marginSize / 2}px`
				} : {},
			designStyle: { top: `${positionY}px` },
			isFullImage
		};
	}

	render() {
		let { imageUrl, isEmpty, skinUrl } = this.props;
		let { loaded: { skin, design } } = this.state;
		let { skinStyle, isFullImage, designStyle } = this.getStyle();

		return (
			<div className="image-skin-loader-wrap" ref={c => c && (this.layer = c)}>
				<ImageLoader
					className="skin"
					imageUrl={skinUrl}
					isSizeFixed={isFullImage}
					style={skinStyle}
					handleUpdateValid={(isValid, rectangle) => this.onUpdateValid(isValid, rectangle, 'skin')}
				/>
				{
					!!skin && imageUrl && (
						<ImageLoader
							className="design"
							imageUrl={imageUrl}
							// isEmpty={isEmpty}
							isSizeFixed={isFullImage}
							style={isFullImage ? Object.assign({}, skinStyle, designStyle) : designStyle}
							showNotFound={false}
							handleUpdateValid={(isValid, rectangle) => this.onUpdateValid(isValid, rectangle, 'design')}
						/>
					)
				}
			</div>
		)
	}
}
