

import React from 'react';
import { addCdn } from 'utils/url';

export default class StoreIntroServiceDefaults extends React.Component {
	constructor(props) {
		super(props);

		this.informations = [
			{
				title: '오프린트미 템플릿 사용하기',
				attentions: [
					'다양하게 준비된 디자인에서 아이디어를 얻어 보세요.',
					'선택한 디자인을 활용해 손쉽게 만들 수 있어요.',
					'완성 후 언제 어디서든 수정, 관리 할 수 있어요.'
				],
				image: 'design-template-360240'
			},
			{
				title: '직접 디자인 하기',
				attentions: [
					'준비된 로고, 클립아트, 이미지가 있으신가요?',
					'오프린트미 편집툴을 이용해 직접 디자인을 완성하세요.',
					'완성 후 언제 어디서든 수정, 관리 할 수 있어요.'
				],
				image: 'design-diy-360240'
			},
			{
				title: '내 디자인 업로드',
				attentions: [
					'완성된 디자인 파일이 있으신가요?',
					'작업 가이드에 맞는 PDF 파일을 업로드 해주세요.'
				],
				image: 'design-upload-360240',
				showGuideButton: true
			}
		];

		this.onClickGuide = this.onClickGuide.bind(this);
	}

	onClickGuide(event) {
		let { actions: { handleShowGuide } } = this.props;

		handleShowGuide();
	}

  render() {
    let { params: { category } } = this.props;

		return (
			<div className="inner">
				<h3>쉽고 빠르게 나만의 디자인을 만들어 보세요.</h3>

				<ul className="designCenter">
					{this.informations.reduce((target, information, index) => {
						let { title, attentions, image, showGuideButton } = information;

						let isAcrylicKeyring = category === "acrylic-keyring";
            let isPen = category.match(/basic-pen|standard-pen|light-pen|eco-pen/i);

						let isView = ((isAcrylicKeyring || isPen) && index === 0 );

            !isView && target.push(
							<li className="">
								<span className="top box">
									<span>
										<img src={addCdn(`/images/store/intro/common/${image}@2x.png`)}/>
									</span>
								</span>

								<span className="bottom box">
									<h4>{title}</h4>

									{(attentions || []).length > 0 && (
										<dl>
											{attentions.reduce((target, attention) => {
												target.push(<dd>{attention}</dd>);

												return target;
											}, [])}
										</dl>
									)}

									{showGuideButton && (
										<button type="button" onClick={this.onClickGuide}>작업 가이드 보기</button>
									)}
								</span>
							</li>
						);

						return target;
					}, [])}
				</ul>
			</div>
		)
	}
}
