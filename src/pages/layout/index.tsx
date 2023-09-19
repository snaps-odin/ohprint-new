import React, { useEffect, useState } from "react";
import { isMobile } from "utils/validate";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { fireResize } from "utils/dom";
import { goMobile, isBlankModeByPathName, isBlankModeByPathNamePattern, isForceLoginPathName, isFullModeByPathName } from "utils/url";
import Router, { useRouter } from "next/router";
import { requestEvents, requestEventsDetailByIdx } from "src/actions/events";
import { checkOverTimeStartEnd } from "utils/date";
import { CDN_URL } from "src/configs/aws";
import ScrollContents from "src/components/common/scroll-contents";
import Header from "src/pages/layout/header";
import Footer from "src/pages/layout/footer";
import { connect, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { ActionConfig, ActionEvents, ActionLayer, ActionLog, ActionProduct, ActionUI, ActionUser } from "src/actions";
import Layer from "src/components/layer";
import CSFixed from "components/cs/fixed/index";
import { InitialValue } from "../../../types/store/initialValue";
import { closeLoadingLayer, openLoadingLayer } from "actions/layer";

function Layout(props: any) {
  const { t } = useTranslation();

  const { targetY, easingType } = useSelector((state: InitialValue) => state.ui.scroll);

  const router = useRouter();
  const dispatch = useDispatch<Dispatch<any>>();

  const fullMode = isFullModeByPathName(router.pathname);
  const blankMode = isBlankModeByPathName(router.pathname) || isBlankModeByPathNamePattern(router.pathname);

  const [ready, setReady] = useState(false);

  Router.events.on("routeChangeStart", (evts) => {
    //    console.log("routeChangeStart  ",evts);
    dispatch(openLoadingLayer());
  });

  Router.events.on("routeChangeComplete", (evts) => {
    //      console.log("routeChangeComplete  ",evts);
    dispatch(closeLoadingLayer());
  });

  Router.events.on("routeChangeError", (evts) => {
    //        console.log("routeChangeError  ",evts);
  });

  useEffect(() => {
    window.addEventListener("resize", onResize);

    init();

    return function cleanUp() {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    let fullMode = isFullModeByPathName(router.pathname);

    props.actions.handleUpdateUILocked(!!fullMode, "wrapper");
    props.actions.handleChangeLogHistory(router.pathname, {
      ...router.query,
      pathname: router.pathname,
    });
  }, [router.pathname]);

  const init = async () => {
    const mobileMode = isMobile();
    const forceLoginMode = isForceLoginPathName(router.pathname);

    const eventParams = {
      offset: 0,
      eventStatus: "GOING",
      limit: 9999,
    };

    if (!mobileMode || (mobileMode && ((router.query.fromM as string) || "").match(/Y/i))) {
      fireResize();
      props.actions.handleRequestConfig();
      props.actions.handleRequestProductGroup();
      const event261 = await dispatch(ActionEvents.requestEventsDetailByIdx(261));

      const allEventData = await dispatch(ActionEvents.requestEvents(eventParams));

      //0원딜 자동화 로직 추가
      let isZeroDeal = false;
      // @ts-ignore
      let zeroDealTargets = event261.footer;
      zeroDealTargets = zeroDealTargets.join("").slice();
      let parsedZeroDealArr = null;
      try {
        parsedZeroDealArr = JSON.parse(zeroDealTargets);
        (parsedZeroDealArr || []).some((targetDate: { startDate: string; endDate: string }) => {
          const startZeroDealDate = targetDate["startDate"];
          const endZeroDealDate = targetDate["endDate"];
          if (checkOverTimeStartEnd(startZeroDealDate, endZeroDealDate)) {
            isZeroDeal = true;
            return true;
          }
        });
      } catch (error) {
        console.error(error);
        isZeroDeal = false;
      }

      props.actions.handleZeroDealEvent(isZeroDeal);

      // @ts-ignore
      await eventSetting(allEventData);

      if (!forceLoginMode) {
        props.actions.handleRequestUserByToken();
        props.actions.handleUpdateLogVisit();
      }

      setReady(true);
    } else {
      goMobile(router.pathname, router.query);
    }
  };

  const eventSetting = async (allEventData: Array<any>) => {
    const eventData = await handleRequestBannerData();

    props.actions.handleEventSave(allEventData, eventData);
  };

  const handleRequestBannerData = async () => {
    return await fetch(`${CDN_URL}/eventBanners/web.json`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return [];
      });
  };

  const onResize = (event: any) => {
    props.actions.handleResizeUIView(event.currentTarget);
  };

  if (!ready) return null;

  return (
    <div>
      <ScrollContents targetY={targetY} easingType={easingType}>
        {!fullMode && !blankMode && React.cloneElement(<Header />, { location: router })}
        {props.children}
        {!fullMode && !blankMode && <Footer />}
        <Layer />
        {!blankMode && <CSFixed pathname={router.pathname} />}
      </ScrollContents>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    states: {
      state,
      user: state.user,
      ui: state.ui,
    },
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    actions: {
      handleRequestConfig: () => dispatch(ActionConfig.requestConfig()),

      handleResizeUIView: (rect: string | number | undefined) => dispatch(ActionUI.resizeUIView(rect)),
      handleResetUIScroll: () => dispatch(ActionUI.resetUIScroll()),
      handleUpdateUIScroll: (targetY: string | number | undefined, easingType: string | number | undefined) => dispatch(ActionUI.updateUIScroll(targetY, easingType)),
      handleUpdateUILocked: (locked: string | number | undefined, sourceName: string | number | undefined) => dispatch(ActionUI.updateUILocked(locked, sourceName)),

      handleRequestProductGroup: () => dispatch(ActionProduct.requestProductGroup()),

      handleRequestUserByToken: () => dispatch(ActionUser.requestUserByToken()),

      handleUpdateLogVisit: () => dispatch(ActionLog.updateLogVisit()),
      handleChangeLogHistory: (pathname: string | undefined, params: object) => dispatch(ActionLog.changeLogHistory(pathname, params)),

      handleOpenAlertLayer: (options: object | undefined) => dispatch(ActionLayer.openAlertLayer(options)),

      handleRequestEvents: (targetY: string | number | undefined) => dispatch(ActionEvents.requestEvents(targetY)),

      handleRequestEventsDetailByIdx: (idx: string | number | undefined) => dispatch(ActionEvents.requestEventsDetailByIdx(idx)),
      handleEventSave: (data: object | undefined, styled: object | undefined) => dispatch(ActionEvents.saveEventData(data, styled)),
      handleZeroDealEvent: (isZeroDeal: boolean) => dispatch(ActionEvents.saveZeroDeal(isZeroDeal)),

      handleOpenContentsLayer: (type: string, options: object | undefined) => dispatch(ActionLayer.openContentsLayer(type, options)),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
