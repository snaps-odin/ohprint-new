import React from 'react';
import update from 'react-addons-update';

import { addCdn } from 'utils/url';
import ImageLoader from 'components/common/image-loader';

export default class ThumbnailProductDiary extends React.Component {
	constructor(props) {
		super(props);

    this.state = {
      ready: false,
      isValid: false
    };

    this.mask = {
      'hard-diary': {
        '554001': {
          'position_front': {
            strap: 'list-hard-cover-black-front-strap'
          }
        },
        '554002': {
          'position_front': {
            strap: 'list-hard-cover-grey-front-strap'
          }
        }
      },
      'soft-diary': {
        '554003': {
          'position_front': {
            strap: 'list-soft-cover-beige-front-strap'
          },
          'position_back': {
            strap: 'list-soft-cover-beige-back-strap'
          }
        },
        '554004': {
          'position_front': {
            strap: 'list-soft-cover-brown-front-strap'
          },
          'position_back': {
            strap: 'list-soft-cover-brown-back-strap'
          }
        },
        '554005': {
          'position_front': {
            strap: 'list-soft-cover-babypink-front-strap'
          },
          'position_back': {
            strap: 'list-soft-cover-babypink-back-strap'
          }
        }
      },
    }

		this.onUpdateValid = this.onUpdateValid.bind(this);
	}

  onUpdateValid(isValid) {
    this.setState(update(this.state, {
      ready: { $set: true },
      isValid: { $set: isValid }
    }));
  }

	render() {
		let { imageUrl, isEmpty, skinUrl } = this.props;
    let { frameType, colorCode, category } = this.props;
    let { ready, isValid } = this.state;

    let strapImageUrl = ''

    try {
      strapImageUrl = `/images/common/mask/showcase/${this.mask[category][colorCode][frameType.toLowerCase()]['strap']}@2x.png`;
    }
    catch(e) {}

		return (
			<div className="image-skin-loader-wrap sky">
				<ImageLoader
					className="skin"
					imageUrl={skinUrl}
          isSizeFixed={null}
          customStyle={true}
          handleUpdateValid={this.onUpdateValid}
				/>
				{
          (ready && isValid) && (
						<ImageLoader
							className="design"
							imageUrl={imageUrl}
							showNotFound={false}
              isSizeFixed={null}
              customStyle={true}
              handleUpdateValid={this.onUpdateValid}
						/>
					)
				}

        <div style={{
            position: 'absolute',
            top: '0',
            background: `url(${addCdn(strapImageUrl)}) center center / contain no-repeat`,
          }}
        />
			</div>
		)
	}
}
