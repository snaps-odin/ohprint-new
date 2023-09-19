import React, {useEffect, useRef, useState} from 'react';
import {BannerInfo} from "../../../types/pages/layout/banner";
import {addCdn, goEvents, goLink} from "utils/url";
import {getEventBannerHide, setEventBannerHide} from "utils/storage";
import {BANNERS} from "src/configs/top-banner";
import {connect, useSelector} from "react-redux";
import {InitialValue} from "../../../types/store/initialValue";

function Banner(props:any) {
    const [isShowBanner, setIsShowBanner] = useState(false);
    const bannerKey = useRef('eraser');
    const banner = useRef<Array<BannerInfo>>([]);
    const viewBanner = useRef<BannerInfo>({});


    const {loggedIn} = useSelector((state:InitialValue) => state.user);
    const {isZeroDeal} = useSelector((state:InitialValue) => state.event);


    useEffect(()=>{
        selectBanner();
    },[]);

    useEffect(()=>{
        if(loggedIn && viewBanner.current.name === "join") {
            selectBanner();
        }

    },[loggedIn])

    const onClickBanner = () => {
        let bannerInfo = viewBanner.current;
        //goLink('/overview/app?utm_source=opm_pc_webmain_banner&utm_medium=app_3000');
        //goLink('/store/apparel/overview?utm_source=opm_pc_webmain_banner&utm_medium=apparel_20off');
        //goLink('/overview/app?utm_source=opm_pc_webmain_banner&utm_medium=app_3000');

        switch(bannerInfo.type){
            case 'event':
                goEvents(bannerInfo.link);
                break;

            case 'always':
            default:
                goLink(bannerInfo.link);
                break;
        }
    }

    const onClickHideBanner = (event:any) => {
        event.stopPropagation();

        setEventBannerHide('Y');
        setIsShowBanner(false);
    }

    const selectBanner = () => {
        banner.current = BANNERS;
        viewBanner.current = (banner.current)[0];

        let bannerlist = banner.current;
        let fieldName = loggedIn ? "rateAfterLogin" : "rateBeforeLogin";

        if(isZeroDeal) bannerlist = bannerlist.filter(item => item.zeroDealHide!==true);

        bannerlist = bannerlist
            .filter(item => item[fieldName] !== 0)

        const randomKey = Math.floor(Math.random()*100+1);

        const arr = Array.from({ length: 100}, (_, i) => i + 1);

        let bannerKey = 0;

        for(let i=0; i<bannerlist.length; i++){
            const nowItem = bannerlist[i][fieldName];
            let nowArr = [];
            if(i === 0){
                nowArr = arr.slice(0, nowItem);
            }else{
                nowArr = arr.slice(bannerlist[i-1][fieldName], bannerlist[i-1][fieldName]+nowItem);
            }

            if(nowArr.find(item => item === randomKey)){
                bannerKey = i;
                break;
            }
        }

        viewBanner.current = bannerlist[bannerKey];

        if(getEventBannerHide() !== 'Y'){
          setIsShowBanner(true);
        }
    }

    if(!isShowBanner) return null;

    return (
        <div className="banner"
             style={{background: `url('${addCdn(viewBanner.current.images)}') center center / cover`}}
        >
            <div>
                <span onClick={onClickBanner}>
                    <button className="icon icon-close-w-1414 close"
                            type="button"
                            onClick={onClickHideBanner}/>
                </span>
            </div>
        </div>
    );
}


const mapStateToProps = (state:any) => {

    return {
        states: {
            user: state.user,
            event:state.event.eventList,
            isZeroDeal: state.event.isZeroDeal
        }
    };
};

const mapDispatchToProps = () => {
    return {
        actions: {
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);