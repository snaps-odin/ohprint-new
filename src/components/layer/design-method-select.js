

import React from 'react';
import update from 'react-addons-update';
import { connect } from 'react-redux';

import { LayerTypes } from 'constants/index';
import { ActionStore, ActionCommon, ActionProduct } from 'actions/index';
import { getDatasetByName } from 'utils/dom';
import { goStore, addCdn } from 'utils/url';
import {gtmV4_select_editor} from "configs/google-analytics/ga-v4";

class DesignMethodSelect extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
		  selectInfo:null,
      accessoryInfo:null,
      ready : false,
			items: []
		};

		this.informations = [
			{
				title: '오프린트미 템플릿 사용하기',
				attentions: [
					'다양하게 준비된 디자인에서 아이디어를 얻어 보세요.',
					'선택한 디자인을 활용해 손쉽게 만들 수 있어요.',
					'완성 후 언제 어디서든 수정, 관리 할 수 있어요.'
				],
				image: 'design-template-360240',
				templateUseType: 'ALL'
			},
			{
				title: '직접 디자인 하기',
				attentions: [
					'준비된 로고, 클립아트, 이미지가 있으신가요?',
					'오프린트미 편집툴을 이용해 직접 디자인을 완성하세요.',
					'완성 후 언제 어디서든 수정, 관리 할 수 있어요.'
				],
				image: 'design-diy-360240',
				templateUseType: 'SELF_MADE'
			},
			{
				title: '내 디자인 업로드',
				attentions: [
					'완성된 디자인 파일이 있으신가요?',
					'작업 가이드에 맞는 PDF 파일을 업로드 해주세요.'
				],
				image: 'design-upload-360240',
				templateUseType: 'USER_MADE'
			}
		];

		this.onClickClose = this.onClickClose.bind(this);
		this.onClickGoDIY = this.onClickGoDIY.bind(this);
		this.onClickGoStoreList = this.onClickGoStoreList.bind(this);
    this.onClickMethod = this.onClickMethod.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer }, options } = this.props;
		let { callback } = options || {};

		callback && callback(false);
		handleCloseContentsLayer();
	}

	onClickGoDIY(event) {
		let { options: { params, category, subCategory }, actions: { handleExecuteEditor, handleExecuteAfterUserLogin } } = this.props;
		let { frameCodeList, colorCode, luxeColorCode, sideCodes } = params;
		let { items } = this.state;
		let templateUseType = getDatasetByName(event.currentTarget, 'template-use-type');
		let { templateCode, templateName  } = (items || []).find(item => item[ 'templateUseType' ] === templateUseType) || {};
		let updateParams = Object.assign({}, params, {
			templateCode,
			frameCodes: (frameCodeList ? (Array.isArray(frameCodeList) ? frameCodeList : [ frameCodeList ]) : []).join(','),
			colorCode: colorCode || luxeColorCode || null,
      sideCodes: (sideCodes ? (Array.isArray(sideCodes) ? sideCodes : [ sideCodes ]) : []).join(','),
		});

		updateParams[ 'luxeColorCode' ] && (delete updateParams[ 'luxeColorCode' ]);
    updateParams[ 'designSelectGa' ] = true;

		handleExecuteAfterUserLogin().then(() => {
			handleExecuteEditor({...updateParams, category, subCategory}, templateUseType);
		});
	}

	onClickGoStoreList() {
		let { options: { category, subCategory, params }, actions: { handleCloseContentsLayer } } = this.props;

		if(params.calendar){
		  params = Object.assign({}, params, { calendar: params.calendar.yearMonth })
    }

		Promise.all([
			handleCloseContentsLayer()
		]).then(() => {
			goStore('search', category, subCategory, params);
		});
	}

	componentDidMount() {
		let { actions: { handleRequestStore, handleUpdateTransparentModeLayer, handleRequestStoreAccessory, handleRequestStoreNavigation }, options } = this.props;
		let { params: listParams } = options || {};
		let params = Object.assign({}, listParams, {
			offset: 0,
			limit: 3,
			sortType: 'NEW',
			liked: false
		});

		Promise.all([
			handleUpdateTransparentModeLayer(true),
			handleRequestStore(params),
      handleRequestStoreAccessory(this.props.options.params),
      handleRequestStoreNavigation(this.props.options.category, this.props.options.params)
		]).then(results => {
			let { templateList } = results[ 1 ];
			let items = (templateList || []).filter(item => !!item[ 'templateUseType' ]);
			let { category, subCategory, params } = this.props.options;

      let isAcrylicKeyring = category === "acrylic-keyring";
      let isBusinessCard = category === "business-card";
      let isPen = category.match(/basic-pen|standard-pen|light-pen|eco-pen/i);

      if((isAcrylicKeyring || isPen) && subCategory === "defaults" ){
        (this.informations).splice(0,1);
      }
      if(isBusinessCard && params['pressureCode'] === "FIX") {
        (this.informations).splice(1,1);
      }

			this.setState(update(this.state, {
			  selectInfo: { $set : results[ 2 ] },
        accessoryInfo : { $set : results[ 3 ] },
				items: { $set: items },
        ready : { $set : true}
			}));

		});
	}

	componentWillUnmount() {
		let { actions: { handleUpdateTransparentModeLayer } } = this.props;

		handleUpdateTransparentModeLayer(false);
	}

	onClickMethod(event, templateUseType) {
    let idx = Number(getDatasetByName(event.currentTarget, 'template-idx')) + 1;
    let title = getDatasetByName(event.currentTarget, 'template-title');

	  switch(templateUseType){
      case 'USER_MADE':
        gtmV4_select_editor('select_pdf_editor', idx, title);
        this.onClickGoDIY(event);
        break;

      case 'SELF_MADE':
        gtmV4_select_editor('select_diy_editor', idx, title);
        this.onClickGoDIY(event);
        break;

      case 'ALL':
        gtmV4_select_editor('select_template_editor', idx, title);
        this.onClickGoStoreList();
        break;

      default:
        this.onClickGoStoreList();
        break;
    }
  }

	render() {
		let { states: { ui: { view: { width, height } } } } = this.props;
		let { items, ready } = this.state;
		let isCHeck = (this.informations).length === 2;


		return ready && (
			<div className="design-method-select-layer-wrap popup" style={{ width: `${width}px`, height: `${height}px` }}>
				<div className="container">

					<div className="middle">
						<div className="inner">
							<div className="top">
								<h3>어떻게 디자인 하고 싶으신가요?</h3>
							</div>

							<div className="bottom">
								<ul style={{ width: `${(this.informations).length <= 2 ? "auto" : "100%"}`}}>
									{this.informations.reduce((target, information, index) => {
										let { title, attentions, image, templateUseType } = information;
										let template = (items || []).find(item => item[ 'templateUseType' ] === templateUseType) || {};

										target.push(
											<li data-template-code={template[ 'templateCode' ]}
											    data-template-use-type={template[ 'templateUseType' ]}
                          data-template-title={title}
                          data-template-idx={index}
											    onClick={(event)=>this.onClickMethod(event, template[ 'templateUseType' ])}>
												<span className="top box">
													<span>
														<img src={addCdn(`/images/store/intro/common/${image}@2x.png`)}/>
													</span>
												</span>

												<span className="bottom box">
													<h4>{title}<span className="icon icon-arrow-btn"/></h4>

													{(attentions || []).length > 0 && (
														<dl>
															{attentions.reduce((target, attention) => {
																target.push(<dd>{attention}</dd>);

																return target;
															}, [])}
														</dl>
													)}
												</span>
											</li>
										);

										return target;
									}, [])}
								</ul>
							</div>
						</div>
					</div>
				</div>

				<button className="icon icon-close-2222 close" onClick={this.onClickClose}/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownerProps) => {
	return {
		states: {
			...ownerProps.states,

			ui: state.ui
		}
	}
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	let { options: { actions } } = ownerProps;

	return {
		actions: {
			...ownerProps.actions,
			...actions,

			handleRequestStore: (params) => dispatch(ActionStore.requestStore(params)),

      handleGetTemplateSpec: (data) => dispatch(ActionCommon.getTemplateSpec(data)),

			handleExecuteAfterUserLogin: () => dispatch(ActionCommon.executeAfterUserLogin()),
      handleRequestStoreAccessory: (productCode) => dispatch(ActionStore.requestStoreAccessory(productCode)),

      handleRequestStoreNavigation: (category, params) => dispatch(ActionStore.requestStoreNavigation(category, params))

		}
	}
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(DesignMethodSelect);
