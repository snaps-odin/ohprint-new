

import React from 'react';
import { addCdn } from 'utils/url';

export default class HomePromotePoint extends React.Component {
	constructor(...args) {
		super(...args);

		this.points = [
			{
				title: '언제나 특급 배송',
				description: '오! 빠른 배송 서비스<br/>5만원 이상 구매 시 무료배송',
				image: '/images/home/time-8080@2x.png'
			},
			{
				title: '품질 보증 약속',
				description: '상품 문제 시<br/>100% 재제작 또는 환불',
				image: '/images/home/warranty-8080@2x.png'
			},
			{
				title: '쉽고 빠른 제작',
				description: '별도 프로그램 설치 없이<br/>웹페이지에서 간편하게 편집',
				image: '/images/home/edit-8080@2x.png'
			}
		];
	}

	render() {
		return (
			<section className="home-promote-point-wrap">
				<div className="inner">
					<ul>
						{this.points.reduce((target, item) => {
							target.push(<li>
								<div>
									<div className="left">
										<div style={{ background: `url(${addCdn(item[ 'image' ])}) 0 0 / cover no-repeat` }}/>
									</div>
									<div className="right">
										<span className="title">{item.title}</span>
										<span className="sub-desc" dangerouslySetInnerHTML={{ __html: item[ 'description' ] }}/>
									</div>
								</div>
							</li>);

							return target;
						}, [])}
					</ul>
				</div>
			</section>
		)
	}
}
