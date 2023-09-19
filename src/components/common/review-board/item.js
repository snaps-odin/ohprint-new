import React from 'react';

import { addDomain, goGallery } from 'utils/url';
import { clearStyle, clearIMGTag, clearBRTag, breaklines } from 'utils/string';
import { toDate } from 'utils/format';

import Grades from 'components/common/grades';
import ThumbnailProduct from 'components/common/thumbnail-product';
import ThumbnailProductApparel from 'components/common/thumbnail-product-apparel';
import ImageLoader from 'components/common/image-loader';

export default class ReviewItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			opened: false
		};

		this.onClickToggle = this.onClickToggle.bind(this);
	}

	onClickToggle(event) {
		let { opened } = this.state;

		this.setState({ opened: !opened });
	}

	getContents(isClearBRTag) {
		let { item } = this.props;

		let html = clearStyle(item[ 'content' ]);
		html = clearIMGTag(html);
		html = isClearBRTag ? clearBRTag(html) : html;
		html = !isClearBRTag ? breaklines(html) : html;

		return {
			__html: item[ 'content' ] ? html : null
		}
	}

	render() {
		let { actions, states, item, index } = this.props;
		let { handleGetTemplateOptions } = actions;
		let { config: { url: { cdn: cdnUrl } } } = states;
    let { creatorProjCode, productOption : { frameColorCode } } = item;
		let { opened } = this.state;


		let isAccessory = !!(item[ 'productGroupCode' ] || '').match(/901/);
		let isApparel = !!(item[ 'productGroupCode' ] || '').match(/701|702|703|704|705|706|707/);

		let options = handleGetTemplateOptions(item[ 'productOption' ] || '');
		let names = isAccessory ? item[ 'productGroupName' ] : `${item[ 'productName' ]} [${item[ 'projectName' ]}]`;

		(creatorProjCode) && (names = `${item[ 'productName' ]}`);

		return (
			<li>
				<div className="top" onClick={this.onClickToggle}>
					<span>{index}</span>
					<span>
						{isApparel
							?
							<ThumbnailProductApparel
								imageUrl={addDomain(cdnUrl, item.middleImage)}
								isEmpty={!item.userMake}
								skinUrl={addDomain(cdnUrl, item.thumbnailSkinUrl)}
								frameType={item.frameType || ''}
								position={item.position || 0}
							/>
							:
							<ThumbnailProduct
								imageUrl={addDomain(cdnUrl, item.middleImage)}
								isEmpty={!item.userMake}
								productCode={item.productCode}
								frameCode={item.frameCode}
								paperCode={item.paperCode}
								directionType={item.directionCode}
                colorCode={frameColorCode}
								type="showcase"
							/>
						}
					</span>
					<span>
						<span className="title">
							{item.title}
						</span>
            {(!creatorProjCode) ? (
              <span className="names">
                {names}
                    <em>|</em>
                옵션 :
                {(options || []).length > 0 && (
                  options.reduce((target, option) => {
                    let { value } = option;
                    target.push(value);
                    return target;
                  }, []).join(' / '))}
						  </span>
            )
            :
            (
              <span className="names">
                {names}
						  </span>
            )

            }

						<span className="description"
						      dangerouslySetInnerHTML={this.getContents(true)} />
						<span className="date">
							{toDate(item.registerDate, 'YYYY.MM.DD')}
							<em>|</em>
							{item.userName}
						</span>
					</span>
					<span>
						{item.filePath && (<span className="icon icon-photo-2018" />)}
					</span>
					<span>
						<Grades maxLength={5} focus={item.starRating} />
					</span>
					<span>
						<span className={`icon icon-open-1212${opened ? '-on' : ''}`} />
					</span>
				</div>

				{opened && (
					<div className="bottom">
						<span dangerouslySetInnerHTML={this.getContents(false)}/>
						{item.filePath && (
							<ImageLoader className="image" imageUrl={addDomain(cdnUrl, item.filePath)} />
						)}
					</div>
				)}
			</li>
		)
	}
}
