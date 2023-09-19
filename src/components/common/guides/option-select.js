

import React from 'react';
import update from 'react-addons-update';

import { PRODUCT_GUIDE } from 'configs/index';
import { getDatasetByName } from 'utils/dom';
import { getDeepValue } from 'utils/json';
import { breaklines } from 'utils/string';

import ImageLoader from 'components/common/image-loader';
import Attention from 'components/common/attention';
import { change, Field, reduxForm } from "redux-form";
import { SelectField } from 'components/common/fields';
import { connect } from "react-redux";

export default class GuideOptionSelect extends React.Component {
	constructor(...args) {
		super(...args);
	}

	render() {
		let { subMenus, threeDepthMenus, type, actions:{ handleChange, handleChangeApparelType} }  = this.props;

		return (
			<div className="guideNav"
				ref={(c) => {this.el = c;}}>
				<Field name="submenu"
				       className="sub-menu-dropdown box"
				       width="327"
				       placeholder='선택'
				       options={subMenus}
				       onChange={(event, value) => handleChange(Number(value))}
				       component={SelectField}/>

				<Field name="submenu2"
				       className="sub-menu-dropdown box"
				       width="814"
				       placeholder='선택'
				       options={threeDepthMenus}
				       onChange={(event, value) => handleChangeApparelType(Number(value))}
				       component={SelectField}/>
			</div>
		)

	}


}
