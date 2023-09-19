

import React from 'react';
import { Field } from 'redux-form';

import { getDeepValue } from 'utils/json';

import { CheckBoxField } from 'components/common/fields';

export default class Filter extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickGoIntro = this.onClickGoIntro.bind(this);
		this.onClickToggle = this.onClickToggle.bind(this);
		this.onClickReset = this.onClickReset.bind(this);
		this.onAddText = this.onAddText.bind(this);
	}

	onClickGoIntro(event) {
		let { actions: { handleGoIntro } } = this.props;

		handleGoIntro();
	}

	onClickToggle(event) {
		let { actions: { handleToggle } } = this.props;

		handleToggle();
	}

	onClickReset(event) {
		let { actions: { handleReset } } = this.props;

		handleReset();
	}

	onAddText(productShapeType, productCode){
	  let { totalOption } = this.props;
	  /*let pst = String(productShapeType).toLowerCase();
    let pc = String(productCode).toLowerCase();*/

    let findListShapeType = (totalOption || []).find((item)=> item.keyName === "productShapeType");
    let findListProductCode = (totalOption || []).find((item)=> item.keyName === "productCode");


    if(findListShapeType && findListProductCode){
      let productShapeTypeText = (findListShapeType.child || []).find((item)=> item.value === (productShapeType).toUpperCase()).label;
      let productCodeText = (findListProductCode.child || []).find((item)=> item.value === String(productCode)).label;

      return "캘린더 "+productShapeTypeText+" "+productCodeText;
    }else{
      return "캘린더";
    }
  }


	render() {
		let { states, query, filter, product, category } = this.props;
		let { currentForm } = states;
		let { selectedTemplateCode, productCode, productShapeType } = query;
		let { opened, navigation, items } = filter;
    let isCalendarDesk = !!String(category).match(/calendar-desk/i);

		let values = getDeepValue(currentForm, `values.search.filterYN`) || {};

		let productName =  isCalendarDesk ? this.onAddText(productShapeType, productCode) : product[ 'content' ][ 'title' ];

		let optionLabels = navigation.reduce((target, item) => {
			!(productName || '').match(item) && target.push(
				<li className="item">
					<span>{item}</span>
				</li>
			);

			return target;
		}, []);

		let isSelected = [ 'jobCodes', 'themeCodes', 'colorCodes', 'shapeCodes', 'usageCodes', 'industryCodes' ].findIndex(keyName => !!query[ keyName ]) >= 0;

		return (
			<div className="store-search-filter-wrap">
				<div className="container">
					<div className="top">
						<div className="inner">
							<ul className="left">
								<li>
									<h2>{String(productName).replace(/<br\/>/g, ' ')}</h2>
								</li>

								{(!selectedTemplateCode && (optionLabels || []).length > 0) && (
									optionLabels
								)}

								{!selectedTemplateCode && [ 'jobCodes', 'themeCodes', 'colorCodes', 'shapeCodes', 'usageCodes', 'industryCodes' ].reduce((target, keyName) => {
									let children = (filter && filter[ 'items' ].length > 0)
										? (filter[ 'items' ].find(item => Object.is(item[ 'keyName' ], keyName)) || {})[ 'child' ]
										: [];

									let selected = (children || []).filter((child, index) => (values[ keyName ] && values[ keyName ][ index ]));

									selected.length > 0 && target.push(
										keyName.match(/colorCodes/i)
											?
											selected.reduce((target, item) => {
												target.push(
													<li className={`item ${keyName}`}>
														<span className={`icon ${(item[ 'attr' ] || '').toLowerCase()}`}/>
													</li>
												);

												return target;

											}, [])
											:
											(
												<li className={`item ${keyName}`}>
													<span>{(selected.length > 1) ? `${selected[ 0 ][ 'label' ]} 외 ${selected.length - 1}종` : selected[ 0 ][ 'label' ]}</span>
												</li>
											)
									);

									return target;
								}, [])}

							</ul>

							{!selectedTemplateCode && (
								<div className="right">
									<button type="button"
									        onClick={this.onClickToggle}>
										<span className={`icon-filter-${opened ? 'close' : 'open'}-1414`}/>
										<span className="text">
											<span>{`필터${opened ? '닫기' : '열기'}`}</span>
										</span>
									</button>
								</div>
							)}
						</div>
					</div>

					{!selectedTemplateCode && (
						<div className="bottom">
							<div className="top">
								{(items || []).reduce((target, item, index) => {
									let isColorField = String(item[ 'keyName' ]).match(/colorCodes/i);
									let w = Math.round(100 / items.length);

									target.push(
										<div className={`panel ${isColorField ? 'color-type' : ''}`} style={{ width: `${w}%` }}>
											<div className="top">
												<h3>{item[ 'title' ]}</h3>
											</div>

											<ul className="bottom">
												{item[ 'child' ].reduce((target, child, index) => {
													target.push(
														<li>
															<Field name={`search.editFilterYN.${item[ 'keyName' ]}[${index}]`}
															       className={isColorField ? `circle ${String(child[ 'attr' ]).toLowerCase()}` : ''}
															       label={isColorField ? '' : child[ 'label' ]}
															       component={CheckBoxField}/>
														</li>
													);

													return target;
												}, [])}
											</ul>
										</div>
									);

									return target;
								}, [])}
							</div>

							<div className="bottom">
								<button type="button"
								        disabled={!isSelected}
								        onClick={this.onClickReset}>
									<span className="icon icon-reset-1414"/>
									<span>선택해제</span>
								</button>

								<button type="submit"
								        className="btn-blue-medium">적용
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		)
	}
}
