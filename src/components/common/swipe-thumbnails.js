

import React from 'react';
import update from 'react-addons-update';

import Swiper from 'react-id-swiper';

export default class SwipeThumbnails extends React.Component {
  constructor(...args) {
    super(...args);

    this.scope = null;

    this.onChangeIndex = this.onChangeIndex.bind(this);

    this.setActiveIndex = this.setActiveIndex.bind(this);
    this.getActiveIndex = this.getActiveIndex.bind(this);
    this.updateScope = this.updateScope.bind(this);
    this.stopAutoplay = this.stopAutoplay.bind(this);
    this.startAutoplay = this.startAutoplay.bind(this);
  }

  onChangeIndex() {
    let { actions } = this.props;
    let { handleChange } = actions || {};

    handleChange && handleChange(this.getActiveIndex());
  }

  setActiveIndex(index) {
    /* 2019-11-10 변경 : Activity Index 설정 */
    let activeIndex = 0;                // 활성화된 Index
    let changePageStatus = true;       // 페이지 변경여부

    // 썸네일이미지를 클릭한 경우
    let minRange = parseInt(this.getActiveIndex());
    let maxRange = minRange+6;

    // 클릭한 썸네일이 현재 보여지고 있는 페이지에 있는지 체크 = 페이지 이동해야되는가?
    if(minRange <= index && maxRange >= index){
      changePageStatus = false;
    }

    if(parseInt(index/6) > 0){
      activeIndex = parseInt(index/6)+(index%6);
    }

    (this.scope && this.getActiveIndex() !== index && changePageStatus) && this.scope.slideTo(activeIndex);
  }

  getActiveIndex() {
    return this.scope ? this.scope['activeIndex'] : -1;
  }

  updateScope(component) {
    component && Promise.all([
      this.scope = component['swiper']
    ]).then(() => {
      //this.scope.on('slideChange', this.onChangeIndex);
    });
  }

  stopAutoplay() {
    this.scope.autoplay.stop();
  }

  startAutoplay() {
    this.scope.autoplay.start();
  }

  componentDidUpdate(prevProps, prevState) {
    let { isPause: prevIsPause } = prevProps;
    let { isPause: currentIsPause, options: { autoplay } } = this.props;

    autoplay &&
      (
        !Object.is(currentIsPause, prevIsPause) && currentIsPause
          ? this.stopAutoplay()
          : this.startAutoplay()
      )
  }

  componentWillUnmount() {
    this.scope = null;
  }

  render() {
    let { width, height, marginTop, options } = this.props;
    let { perViewCnt, spaceMargin, navigation, loop, effect, autoplay, noSwiping } = options || {};
    let mergeOptions = update({
      /* Default 값 설정  */
      slidesPerView:  perViewCnt ? perViewCnt : 3,
      spaceBetween: spaceMargin ? spaceMargin : 6,
      freeMode: true,
      loop: false,
      /*centeredSlides: true,*/
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagenation: {
        el: '.swiper-pagination',
        clickable: true
      }
    }, {
      sildesPerView: { $set: perViewCnt },
      spaceBetween: { $set:  spaceMargin },
      effect: { $set: effect || '' },
      autoplay: { $set: autoplay || false },
      noSwiping: { $set: noSwiping },
      navigation: { $merge: navigation || {} }
    });

    return (
      <div className="swipe-contents-wrap swiper swipe-thumbnail new_swiper_items"
        style={{ width: `${width}px`, height: `${height}px`, marginTop: `${marginTop}px` }}>

        <Swiper {...mergeOptions}
          ref={this.updateScope}>

          {this.props.children}
        </Swiper>
      </div>
    );
  }
}