import React, {useEffect, useRef} from 'react';
import {getScrollTop, setScrollTop} from "utils/scroll";
// @ts-ignore
import TweenFunctions from 'tween-functions';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {ActionUI} from "src/actions";

function ScrollContents(props:any) {
    const { targetY, handleChangeWheel, parentEl, duration, easingType, handleCompleteAnimation, className, children } = props;

    const values = useRef({
        start : null,
        end : null
    });

    const times = useRef({
        start: null,
        current: null
    });

    const id = useRef<any>(null);

    //const { setUi, ui } = zStore();

    const isEnableTargetY = (targetY:any) => {
        return targetY || targetY === 0;
    }

    useEffect(()=>{
        (parentEl || window).addEventListener('wheel', onWheel);
        (parentEl || window).addEventListener('touchmove', onWheel);
        return function cleanUp(){
            (parentEl || window).removeEventListener('wheel', onWheel);
            (parentEl || window).removeEventListener('touchmove', onWheel);
        }
    },[]);

    useEffect(()=>{
        isEnableTargetY(targetY)
    },[targetY])

    const onWheel = (event:any) => {
        isEnableTargetY(targetY) && stop();
        handleChangeWheel && handleChangeWheel();
    }

    const start = () => {
        if(isEnableTargetY(targetY)){
            values.current = { start: getScrollTop(parentEl), end: targetY };
            times.current = { start: null, current: null };
            window.requestAnimationFrame(animate)
        }else{
            stop()
        }
    }

    const stop = (isPassReset = null) => {

        Promise.all([
            id.current && window.cancelAnimationFrame(id.current)
        ]).then(() => {
            id.current = null;
        }).then(() => {
            (!isPassReset && isEnableTargetY(targetY)) && (
                !parentEl
                    ? props.actiosn.handleResetUIScroll()
                    : (handleCompleteAnimation && handleCompleteAnimation())
            );
        });
    }


    const animate = (timestamp:any) => {
        let durationTime = Number(duration || 500);

        times.current[ 'start' ] = !times.current[ 'start' ] ? timestamp : times.current[ 'start' ];
        // @ts-ignore
        times.current[ 'current' ] = timestamp - times.current[ 'start' ];

        setScrollTop(parentEl, TweenFunctions[ easingType || 'easeOutExpo' ](times.current[ 'current' ], values.current[ 'start' ], values.current[ 'end' ], durationTime));

        if (times.current[ 'current' ] || 0 >= durationTime) {
            setScrollTop(parentEl, values.current[ 'end' ]);

            stop();
        } else {
            id.current = window.requestAnimationFrame(animate)
        }
    }

    return (
        <div className={className}>{children}</div>
    )
}


const mapStateToProps = (state:any) => {
    return {}
};

const mapDispatchToProps = (dispatch:Dispatch<any>, ownerProps:any) => {
    return {
        actions: {
            handleResetUIScroll: () => dispatch(ActionUI.resetUIScroll())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ScrollContents);