'use strict';

import React from 'react';

import { getADay, getTimestamp } from 'utils/date';
import { toDate } from 'utils/format';
import { getLocationOrigin } from 'utils/url';
import { embedPay } from 'utils/ini-pay';

export default class Embed extends React.Component {
	componentDidMount() {
		embedPay('iniStdForm');
	}

	render() {
		let { query } = this.props;

		let isChange = !!query[ 'change' ].match('Y');
		let returnUrl = `${getLocationOrigin()}/v1/payment${isChange ? '/change' : ''}/${query[ 'userNo' ]}/${query[ 'orderCode' ]}/WEB/inicis`;
		let closeUrl = `${getLocationOrigin()}/payment/close`;

		let method = query[ 'methodName' ]
			.replace('CREDIT_CARD', 'onlyacard')
			.replace('DIRECT_BANK', 'DirectBank')
			.replace('VIRTUAL_BANK', 'VBank')
			.replace('PHONE_BILL', 'HPP')
			.replace('PAYCO', 'onlypayco')
			.replace('SSP_PAY', 'onlyssp');

		(query[ 'cardTypeKeyName' ] || '').match(/BC|KB|WOORI|BUSAN|DAEGU|KYUNGNAM|GWANGJU|JEONBUK|SUHYUP|SHINHYUP|JEJU|MG|POSTBANK|KAKAOBANK/i)
		&& (method = method.replace('onlyacard', 'onlyvcard'));

		let limitDate = toDate(getTimestamp(Number(query[ 'timestamp' ]) + getADay() * 7), 'YYYYMMDD');

		let acceptMethod = `${(query[ 'cardTypeKeyName' ] || '').match(/KAKAOBANK/) ? '' : 'cardonly:'}HPP(2):HPREG${query[ 'escrow' ].match(/Y/) ? ':useescrow' : ''}:vbanknoreg:Vbank(${limitDate})`;

		return (
			<div className="container">
				<form id="iniStdForm" name="iniStdForm" method="POST">
					<input type="hidden" name="version" value="1.0"/>
					<input type="hidden" name="mid" value={query[ 'marketId' ]}/>
					<input type="hidden" name="goodname" value={query[ 'title' ]}/>
					<input type="hidden" name="oid" value={query[ 'orderCode' ]}/>
					<input type="hidden" name="price" value={query[ 'price' ]}/>
					<input type="hidden" name="currency" value="WON"/>
					<input type="hidden" name="buyername" value={query[ 'userName' ]}/>
					<input type="hidden" name="buyertel" value={query[ 'userCellPhoneNumber' ]}/>
					<input type="hidden" name="buyeremail" value={query[ 'userEmail' ]}/>
					<input type="hidden" name="timestamp" value={query[ 'timestamp' ]}/>
					<input type="hidden" name="signature" value={query[ 'signature' ]}/>
					<input type="hidden" name="returnUrl" value={returnUrl}/>
					<input type="hidden" name="closeUrl" value={closeUrl}/>
					<input type="hidden" name="mKey" value={query[ 'marketKey' ]}/>
					<input type="hidden" name="gopaymethod" value={method}/>
					<input type="hidden" name="acceptmethod" value={acceptMethod}/>
					<input type="hidden" name="languageView" value="ko"/>
					<input type="hidden" name="charset" value="UTF-8"/>
					<input type="hidden" name="payViewType" value="overlay"/>
					{/*<input type="hidden" name="ini_onlycardcode" value={query[ 'cardTypeCode' ]}/>*/}
					<input type="hidden" name="ini_cardcode" value={query[ 'cardTypeCode' ] || ''}/>
					<input type="hidden" name="ansim_quota" value={query[ 'cardQuotaCode' ] || ''}/>
					<input type="hidden" name="quotabase" value={query[ 'cardQuotaCode' ] || ''}/>
					<input type="hidden" id="requestByJs" name="requestByJs" value="true"/>
				</form>
			</div>
		)
	}
}