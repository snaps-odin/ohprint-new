

import React from 'react';
import { addCdn } from 'utils/url';

export default class ApparelContents extends React.Component {
	constructor(...args) {
		super(...args);
	}

	render() {
		return (
			<section className="store-intro-service-wrap fixed has-child borderTop">
					<div className="store-intro-services-showcase-wrap bg-white col-2">
						<div className="inner"><h1>내 디자인 업로드 <em>특수 열전사</em> 가이드</h1>
							<p>홀로그램, 글리터, 네온 전사 PDF 작업가이드</p>
							<ul>
								<li>
									<div className="top">
										<img src={addCdn("/images/store/intro/apparel/service/apparel-coating-guide-01@2x.jpg")} alt=""/>
									</div>
									<div className="bottom">
										<p>M100의 벡터 면으로 작업해 주세요. (비트맵 이미지 제작 불가)</p>
									</div>
								</li>
								<li>
									<div className="top">
										<img src={addCdn("/images/store/intro/apparel/service/apparel-coating-guide-02@2x.jpg")} alt=""/>
									</div>
									<div className="bottom">
										<p>Format 항목을 <em className="blue">PDF</em>로 선택한 후, Adobe PDF Preset은 <br/><em className="blue">[Illustrator Default]</em> 표시된 3개의 옵션 항목을 체크해 주세요.</p>
									</div>
								</li>
								<li>
									<div className="top">
										<img src={addCdn("/images/store/intro/apparel/service/apparel-coating-guide-03@2x.jpg")} alt=""/>
									</div>
									<div className="bottom">
										<p>
											<p className="apparelServiceSet">
													<span className="icon icon-wrong-1818"/>
													<span>
														선으로 디자인 시 실제 제작물이 디자인과 다르게 제작됩니다.<br/>
														<em className="blue">선을 면으로 변경하기 : 오브젝트(Object) - 패스(Path) - 윤곽선(Outline Stroke)</em>
													</span>
											</p>
										</p>
									</div>
								</li>
								<li>
									<div className="top">
										<img src={addCdn("/images/store/intro/apparel/service/apparel-coating-guide-04@2x.jpg")} alt=""/>
									</div>
									<div className="bottom">
										<p>
											<p className="apparelServiceSet">
												<span className="icon icon-right-1818 paddingTop5"/>
												<span>
													면으로 디자인 시 원하는 이미지로 제작할 수 있습니다.
												</span>
											</p>
										</p>
										<p><br/></p>
									</div>
								</li>
								<li>
									<div className="top">
										<img src={addCdn("/images/store/intro/apparel/service/apparel-coating-guide-05@2x.jpg")} alt=""/>
									</div>
									<div className="bottom">
										<p>
											<p className="apparelServiceSet">
												<span className="icon icon-wrong-1818"/>
												<span>
													여러 개의 오브젝트가 겹쳐 있으면 벡터 선을 따라 컷팅 되어 조각난 결과물이 제작됩니다.<br/>
													<em className="blue">
														여러 개의 오브젝트 하나로 합치기 : 패스파인더(Pathfinder)에서 결합(Unit) 등의<br/>
														합치기 기능 사용
													</em>
												</span>
											</p>
										</p>
									</div>
								</li>
								<li>
									<div className="top">
										<img src={addCdn("/images/store/intro/apparel/service/apparel-coating-guide-06@2x.jpg")} alt=""/>
									</div>
									<div className="bottom">
										<p>
											<p className="apparelServiceSet">
												<span className="icon icon-right-1818"/>
												<em>
													도형 작업 시 하나의 덩어리로 합쳐서 디자인 시 디자인과 동일하게 제작됩니다.
												</em>
											</p>
										</p>
										<p><br/></p>
									</div>
								</li>
							</ul>
						</div>
				</div>
			</section>
		)
	}
}
