import React, {useEffect, useRef} from 'react';
import {goLink} from "utils/url";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import { getPosition } from 'utils/dom';
import {ActionHome, ActionLayer, ActionProduct, ActionUI} from "src/actions";
import {getScrollTop} from "utils/scroll";
import {useRouter} from "next/router";
import * as CRITHO from 'utils/criteo';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import HomeKeyVisual from "src/pages/layout/key-visual";
import PromotePoint from 'components/home/promote-point';
import Product from 'components/home/product';
import Instagram from 'components/home/instagram';
import SamplePack from 'components/home/sample-pack';
import {isProduction} from "configs/properties";

function Home(props:any) {
    const router = useRouter();
    const samplePack = useRef(null);

    useEffect(()=>{
        const { query } = router;

        // @ts-ignore
        let scrollTarget = null;

        CRITHO.home();

        window.setTimeout(() => {
            if (query && query[ 'option' ]) {
                switch (String(query[ 'option' ])) {
                    case 'sample-pack':
                        // @ts-ignore
                        scrollTarget = (samplePack.current).el;
                        break;
                }
            }
            // @ts-ignore
            scrollTarget && props.actions.handleUpdateUIScroll(getPosition(scrollTarget).top + getScrollTop(), 'easeInExpo');
        }, 1000);
    },[])
    const goBoard = () => {
        goLink('/notice?view=0')
    }



    return (
        <div className="home-wrap">
            <div className="container">
{/*                <Lazyload  throttle={200} height={100}>
                    <HomeKeyVisual/>
                </Lazyload>*/}
                <HomeKeyVisual/>
                <PromotePoint/>
                <Product
                    states={props.states}
                    actions={props.actions}
                />
                {isProduction && <Instagram/>}

                <SamplePack
                    states={props.states}
                    actions={props.actions}
                    ref={samplePack}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state:any) => {
    return {
        states: {
            config: state.config,
            user: state.user,
            product: state.product,
        }
    }
};

const mapDispatchToProps = (dispatch:Dispatch<any>) => {
    return {
        actions: {
            handleUpdateUIScroll: (targetY:string, easingType:string) => dispatch(ActionUI.updateUIScroll(targetY, easingType)),

            handleOpenAlertLayer: (options:object) => dispatch(ActionLayer.openAlertLayer(options)),
            handleOpenContentsLayer: (type:string, options:object) => dispatch(ActionLayer.openContentsLayer(type, options)),

            handleRequestHomeBestReview: () => dispatch(ActionHome.requestHomeBestReview()),
            handleRequestHomeLatelyBag: () => dispatch(ActionHome.requestHomeLatelyBag()),

            handleGetProductByProductGroupCode: (productGroupCode:string) => dispatch(ActionProduct.getProductByProductGroupCode(productGroupCode))
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


export default connect(mapStateToProps, mapDispatchToProps)(Home);
