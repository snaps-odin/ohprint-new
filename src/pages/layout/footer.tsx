import React from 'react';
import {goCS, goLink, goOverview, goPolicy} from 'utils/url';
import {LayerTypes} from "src/constants";
import {useSelector} from "react-redux";
import {InitialValue} from "../../../types/store/initialValue";
import {useRouter} from "next/router";

function Footer(props:any) {
	const router = useRouter();

	const {isZeroDeal} = useSelector((state:InitialValue) => state.event);


	const onClickNotice = () => {
		console.log("!")
		goLink("/notice");
	}

	const onClickPolicyPrivacy = () => {
		goPolicy('privacy');
	}

	const onClickPolicyTerms = () => {
		goPolicy('terms');
	}

	const onClickCS = () => {
		goCS('faq');
	}

	const onClickTutorial = () => {
		goLink('/tutorial');
	}

	const onClickEraser = () => {
		goLink('/overview/eraser');
	}

	const onClickOverviewApp = () => {
		goOverview('app');
	}

	const onClickPolicyNotification = () => {
		let { actions: { handleOpenContentsLayer } } = props;

		handleOpenContentsLayer(LayerTypes.POLICY_NOTIFICATION);
	}

	const onClickWritePopup = () => {
		let { actions: { handleOpenContentsLayer } } = props;

		handleOpenContentsLayer(LayerTypes.CS_WRITE);
	}

	const onClickWriteButton = () => {
		let { actions: { handleChangeCSTabFocus, handleOpenCS, handleTouchCS, handleChangeCSTabWidth } } = props;

		Promise.all([
			handleChangeCSTabFocus(1),
			handleOpenCS(),
			handleChangeCSTabWidth(97)
		]).then(() => {
			handleTouchCS();
		});
	}

    return (
		<div className="footer-wrap">
			<div className="container">
				<div className="top">
					<ul className="left">
						<li>
							<a href="https://www.webling.kr/" target="_blank">회사소개</a>
							<span className="line">|</span>
						</li>
						<li>
							<button type="button" onClick={onClickCS}>
								<span>고객센터</span>
							</button>
							<span className="line">|</span>
						</li>
						<li>
							<button type="button" onClick={onClickPolicyTerms}>
								<span>이용약관</span>
							</button>
							<span className="line">|</span>
						</li>
						<li>
							<button type="button" onClick={onClickPolicyPrivacy}>
									<span>
										<strong>개인정보처리방침</strong>
									</span>
							</button>
							<span className="line">|</span>
						</li>
						<li>
							<a href="https://www.webling.kr/contact/write" target="_blank">제휴문의</a>
							<span className="line">|</span>
						</li>
						<li>
							<button type="button" onClick={onClickNotice}>
								<span>공지사항</span>
							</button>
							<span className="line">|</span>
						</li>
						<li>
							<button type="button" onClick={onClickTutorial}>
								<span>작업가이드</span>
							</button>
							<span className="line">|</span>
						</li>
						<li>
							<button type="button" onClick={onClickEraser}>
								<span>오려내기</span>
							</button>
							<span className="line">|</span>
						</li>
						<li>
							<button type="button" onClick={!isZeroDeal && onClickOverviewApp }>
								<span>오프린트미 앱</span>
							</button>
						</li>
						{/*              <li>
                <button type="button" onClick={onClickNotice}>
                  <span>공지사항</span>
                </button>
              </li>*/}
					</ul>
					<div className="right">
						<a className="icon icon-facebook-1818"
						   href="https://www.facebook.com/ohprintme-808560542651870/"
						   target="_blank"/>

						<a className="icon icon-instagram-1818"
						   href="https://www.instagram.com/ohprint.me/"
						   target="_blank"/>

						<a className="icon icon-blog-1818"
						   href="https://blog.naver.com/ohprintme/"
						   target="_blank"/>
					</div>
				</div>
				<div className="bottom">
					오프린트미 ㈜위블링 대표이사 김성경 사업자등록번호 104-81-50311 통신판매신고 2019-서울영등포-1925<br/>
					개인정보보호책임자 : 조기연 서울시 영등포구 여의대로 24, 21층 | <span onClick={onClickWritePopup}>고객만족센터 1577-4703</span>
					<button onClick={onClickWriteButton}>1:1 문의</button><br/>
					호스팅사업자 : 아마존웹서비시즈(Amazon Web Services)
				</div>
			</div>
		</div>
    );
}

export default Footer;