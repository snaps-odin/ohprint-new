

import React from 'react';

import { breaklines } from 'utils/string';
import { getDeepValue } from 'utils/json';

import { PRODUCTS }  from 'configs/index';
import {connect} from "react-redux";
import { addDomain } from 'utils/url';

import { getEditorParams } from 'utils/storage';
import { addCdn } from 'utils/url';

export default class GuideCouponOption extends React.Component {
	constructor(...args) {
		super(...args);

		this.category = 'COUPON';
		this.subCategory = 'DEFAULTS';
	}

	componentDidMount() {
	  let findParams = new URLSearchParams(getEditorParams().toString());

	  if(!!findParams && findParams.get('productCode') && findParams.get('productCode').length > 0){
	    let productCode = findParams.get('productCode').substr(0,1);

	    switch (productCode){
        case '6':
          this.category = 'ENVELOPE';
          break;
      }
    }

  }

  render() {
		let { className, width, isDownload, states: { config: { url: { cdn } } } } = this.props;
		let isSmall = (width && width < 1140) ? 'small' : '';
		let { showcases, guide } = PRODUCTS[ this.category ][ 'COMMON' ] || {};
		let { services, contents } = (this.category === "COUPON" ? PRODUCTS[ this.category ][ 'CONTENTS' ][ this.subCategory ] || {} : guide || {});

		return (
			<div className={`guide-excel-wrap ${className || ''}`}>
				{(services || []).length > 0 && (
					(services || []).reduce((target, service) => {
						let showcase = getDeepValue((this.category === "COUPON" ? showcases : contents), service) || {};

						let { className, title, description, children } = showcase;

						(showcase && String(service).includes('EXCEL') )
						&& target.push(
							<section className={className || ''}>
								<div className={`inner ${isSmall ? 'small' : ''}`}>
									<h3 dangerouslySetInnerHTML={{ __html: title }}/>

									{description && (
										<p dangerouslySetInnerHTML={{ __html: description }}/>
									)}

									{(children || []).length > 0 && (
										<ul className={`${isSmall ? 'small' : ''}`}>
											{(children || []).reduce((target, child) => {
												let { image, description } = child;

												target.push(
													<li>
														{image && (
															<div className="top">
																<img src={addCdn(`/images/store/intro/${String(this.category).toLowerCase()}/service/${image}@2x.jpg`)}/>
															</div>
														)}

														{description && (
															<div className="bottom">
																{description && (
																	<p dangerouslySetInnerHTML={{ __html: breaklines(description) }}/>
																)}
															</div>
														)}
													</li>
												);

												return target;
											}, [])}
										</ul>
									)}
								</div>
							</section>
						);

						return target;
					}, [])
				)}

				{isDownload && (
					<section className="excel-download">
						<a href={addDomain(cdn,'/Upload/front/productGuide/OHPRINTME_DATA_USER_UPLOAD.xls')}
						   download={`OHPRINTME_DATA_USER_UPLOAD.xls`}
						   target="_blank">
							<span>엑셀 파일 다운</span>
							<span className="icon icon-down-excel-714"/>
						</a>
					</section>
				)}
			</div>
		)
	}
}
