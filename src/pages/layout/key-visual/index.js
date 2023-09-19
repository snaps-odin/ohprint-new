import React, { useEffect, useRef, useState } from "react";
import { CDN_URL } from "configs/aws";
import { connect, useSelector } from "react-redux";
import { InitialValue } from "../../../../types/store/initialValue";
import SwipeContents from "components/common/swipe-contents";
import { ActionEvents } from "src/actions";
import SlideTemplate from "src/pages/layout/key-visual/template";
import LoadingAnimation from "components/common/loading-animation";

function HomeKeyVisual(props) {
  const [focus, setFocus] = useState();
  const [items, setItems] = useState([]);

  const contents = useRef();

  const { list: eventList } = useSelector((state) => state.event.eventList);

  useEffect(() => {
    onCheckBannerEndDate();
  }, [eventList]);

  const handleRequestBannerData = () => {
    return fetch(`${CDN_URL}/eventBanners/web.json`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return [];
      });
  };

  const onCheckBannerEndDate = async () => {
    if (!eventList) return;
    let eventStyle = await handleRequestBannerData();

    // data : footer의 데이터
    // eventList : 전체 list
    let newItemArr = (eventStyle || []).reduce((target, val, index) => {
      let checkPlease = eventList.find((el) => el.idx === val.idx);

      let types = val.type || "events";

      (checkPlease || types === "always") && !!val.isSwitch && val.idx !== 232 && target.push(val);
      return target;
    }, []);

    // hint: 이벤트 중 메인 키미는 안나오고 이벤트 패이지 썸내일과 이벤트 페이지만 나오도록 임시 설정
    const indexOfBannerToExclude = newItemArr.findIndex((item) => item.idx === 512);
    if (indexOfBannerToExclude >= 0) {
      newItemArr.splice(indexOfBannerToExclude, 1);
    }

    setItems(newItemArr);
  };

  const onChangeContent = (index) => {
    setFocus(index);
  };

  const onChangeSlide = (index) => {
    focus === index && contents.current && contents.current.setActiveIndex(index >= items.length - 1 ? 0 : index + 1);
  };

  if (items.length <= 0) {
    return (
      <section className="home-key-visual-wrap">
        <div className={"loadingMap"}>
          <LoadingAnimation />
        </div>
      </section>
    );
  }

  return (
    <section className="home-key-visual-wrap">
      {/*{(checkOverTimeStartEnd('2022-12-14 00:00:00', '2022-12-25 23:59:59') || !checkEnv) && <div className="snow"/>}*/}
      <div className="swipe-key-visual">
        {React.cloneElement(<SwipeContents />, {
          options: {
            noSwiping: items && items.length <= 1,
            navigation:
              items && items.length <= 1
                ? {
                    nextEl: null,
                    prevEl: null,
                  }
                : {},
            pagination: { el: items && items.length <= 1 ? null : ".swiper-pagination" },
          },
          actions: {
            handleChange: onChangeContent,
          },
          ref: (c) => {
            contents.current = c;
          },
          children: items.reduce((target, slide, index) => {
            target.push(
              <div className={`slide-template-wrap `}>
                {React.cloneElement(<SlideTemplate />, {
                  index,
                  totalCount: items.length,
                  isActive: focus === index,
                  actions: {
                    handleChange: onChangeSlide,
                  },
                  idx: slide.idx,
                  image: slide.image,
                  des: slide.des,
                  title: slide.title,
                  style: slide.style,
                  titleImage: slide.titleImage,
                  btnText: slide.btnText,
                  isBtn: slide.isBtn,
                })}
              </div>,
            );

            return target;
          }, []),
        })}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    event: state.event.eventList,
    eventStyle: state.event.eventStyle,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      handleRequestEvents: (targetY, easingType) => dispatch(ActionEvents.requestEvents(targetY, easingType)),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeKeyVisual);
