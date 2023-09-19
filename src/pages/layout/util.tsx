import React, {useEffect, useRef} from 'react';
import {
    addCdn,
    goEvents,
    goGiftCard,
    goHome,
    goLink,
    goMemberCoupon,
    goMemberDelivery,
    goMemberProfile,
    goOverview
} from "utils/url";

import {deleteUserLogout, requestUserGradeType} from "src/actions/user";
import {dataLayerLogin, dataLayerMoveSnaps} from "configs/google-analytics/ga";
import {gtmV4_login, gtmV4_user_property} from "configs/google-analytics/ga-v4";
import {getSnsName} from "utils/sns";
import {useRouter} from "next/router";
import {connect, useSelector} from "react-redux";
import {ActionCommon, ActionLayer, ActionUser} from "src/actions";
import {Dispatch} from "redux";
import {LayerTypes} from "src/constants";
import {InitialValue} from "../../../types/store/initialValue";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

function Util(props:any) {
    const {loggedIn,userLevel,userName} = useSelector((state:InitialValue) => state.user);

    const icons = useRef({
        welcome: 'icon-png-level-01-2626',
        revisit: 'icon-png-level-02-2626',
        thanks: 'icon-png-level-03-2626',
        impression: 'icon-png-level-04-2626',
        best: 'icon-png-level-05-2626'
    });

    //const { user } = zStore();
    const router = useRouter();

    useEffect(()=>{
        init();

    },[]);

    const init = async () => {
        const { states : {
            user: {
                loggedIn,
                userNo,
                userLevel,
                snsType,
                userId,
                userEmail,
                userName,
                userCellPhoneNumber,
                userPhoneNumber,
                receiveEmailAgreeYN,
                receiveSMSAgreeYN
            }
        } } = props;
        if(loggedIn){
            const result = await requestUserGradeType();

            let data = {
                userNo,
                userLevel,
                userId,
                email : userEmail,
                userName,
                phoneNumber : userCellPhoneNumber,
                phoneCell : userPhoneNumber,
                emailAgree : receiveEmailAgreeYN,
                phoneAgree : receiveSMSAgreeYN
            }

            gtmV4_login({method: `${getSnsName(snsType)}_로그인`, uid: userId});
            // @ts-ignore
            dataLayerLogin(data, result[0]);

            let data_v4 = {
                userNo,
                userId,    //고객 UID
                userLevel
            };

            // @ts-ignore
            gtmV4_user_property(data_v4, result[0]);

        }else{
            gtmV4_user_property({
                userNo: "",
                userId: "",    //고객 UID
                userLevel: ""
            }, []);
        }
    }

    const onClickGoHome = () => {
        goHome();
    }

    const onClickLogin = () => {
        props.actions.handleOpenContentsLayer(LayerTypes.LOGIN);
    }

    const onClickLogout = () => {
        props.actions.handleDeleteUserLogout();
    }
    
    const onClickJoin = () => {
        props.actions.handleOpenContentsLayer(LayerTypes.JOIN);
    }

    const onClickProfile = () => {
        //goMember(goMemberProfile);
        goMember(goMemberProfile);
    }

    const onClickDelivery = () => {
        goMember(goMemberDelivery);
    }

    const onClickGiftCard = () => {
        goGiftCard();
    }

    const onClickCoupon = () => {
        goMember(goMemberCoupon);
    }

    const onClickEvents = () => {
        goEvents();
    }

    const onClickCollaboration = () => {
        goLink("/collaboration");
    }

    const onClickOverviewApp = () => {
        goOverview('app');
    }

    const goMember = (callback:any) => {
        let { actions: { handleExecuteAfterUserLogin } } = props;

        handleExecuteAfterUserLogin().then(() => {
            callback();
        }).catch(function () {});
    }

    const onClickSnaps = async () => {
        const { states : { user } } = props;
        const result = await requestUserGradeType();


        dataLayerMoveSnaps(
            (user.loggedIn ? user : null),
            // @ts-ignore
            (user.loggedIn ? result[0] : null)
        );

        window.open('https://www.snaps.com/?utm_source=ohprint.me&utm_medium=referral&utm_campaign=main', '_blank');
    }

    const onClickOround = () =>{
        window.open('https://www.oround.com', '_blank');
    }


    return (
        <div className="util">
            <div className="container">
                <ul className="left">
                    <li>
                        <button type="button" className="icon icon-logo_ohprintme_4818 opm" onClick={onClickGoHome}/>
                    </li>
                    <li>
                        <button type="button" className="icon icon-logo_snaps_4818_off snaps" onClick={onClickSnaps}/>
                        {/*<a href="http://www.snaps.kr/" className="icon icon-logo_snaps_4818_off" target="_blank"/>*/}
                    </li>
                    <li>
                        <div className="oro">
                            <img src={addCdn(`/sprite/svg/logo-oro-off.svg`)} onClick={onClickOround}/>
                        </div>
                    </li>
                </ul>
                {/*<ul className="left">
						<li>
							<button onClick={onClickOverviewApp}>
								<span className="icon icon-app-2020"/>
								<span className="app">오프린트미 앱</span>
							</button>
						</li>
					</ul>*/}
                <ul className="right">
                    {[
                        (!loggedIn
                                ? { label: `<strong>로그인</strong>`, callback: onClickLogin }
                                : {
                                    // @ts-ignore
                                    label: `<span class="icon ${icons.current[ userLevel ]}"></span><span class="user"><strong>${userName}</strong>님 반갑습니다.</span>`,
                                    className: 'profile',
                                    callback: onClickProfile
                                }
                        ),
                        (!loggedIn
                                ? { label: `회원가입`, callback: onClickJoin }
                                : { label: `로그아웃`, callback: onClickLogout }
                        ),
                        { label: null, className: 'line', callback: null },
                        { label: `상품권`, callback: onClickGiftCard },
                        { label: `주문/배송`, callback: onClickDelivery },
                        { label: `쿠폰/머니`, callback: onClickCoupon },
                        { label: `이벤트`, callback: onClickEvents }
                    ].reduce((target, item) => {
                        let { label, className, callback } = item;


                        (label === "collabo") ?
                            target.push(
                                // @ts-ignore
                                <li key={label+className}>
                                    {
                                        <button className={className !== null ? className : undefined} onClick={callback || undefined}>
                                            <img className={"collabo"} src={addCdn("/images/common/hope-btn@2x.png")} alt={""}/>
                                        </button>
                                    }
                                </li>
                            )

                            :

                            target.push(
                                // @ts-ignore
                              <li key={label+className}>
                                    {callback
                                        ?
                                        (
                                            <button className={className !== null ? className : undefined} onClick={callback} dangerouslySetInnerHTML={{ __html: label || '' }}/>
                                        )
                                        :
                                        (
                                            <span className={className !== null ? className : undefined} dangerouslySetInnerHTML={{ __html: label || '' }}/>
                                        )
                                    }
                                </li>
                            )

                        return target;
                    }, [])}
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = (state:any) => {
    return {
        states: {
            user: state.user
        }
    }
};

const mapDispatchToProps = (dispatch:Dispatch<any>) => {
    return {
        actions: {
            handleOpenContentsLayer: (type:string, options:object   ) => dispatch(ActionLayer.openContentsLayer(type, options)),

            handleDeleteUserLogout: () => dispatch(ActionUser.deleteUserLogout()),
            handleRequestUserGradeType: () => dispatch(ActionUser.requestUserGradeType()),

            handleExecuteAfterUserLogin: () => dispatch(ActionCommon.executeAfterUserLogin())
        }
    }
};

export const getStaticProps = async ({ locale }: any) => {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Util);