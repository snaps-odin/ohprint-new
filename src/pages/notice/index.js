import React from 'react';
import NoticeItem from './item';
import {connect} from "react-redux";
import {ActionNotice, ActionUI} from 'actions/index';
import update from "react-addons-update";
import Pagination from 'components/common/pagination';
import {getDatasetByName} from 'utils/dom';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {withRouter} from "next/router";

class Notice extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      noticeList : [],
      items: [],
      offset: 0,
      limit: 10,
      openedIndex: null
    }

    this.onClickToggle = this.onClickToggle.bind(this);
    this.onChangeOffset = this.onChangeOffset.bind(this);
    this.requestReviews = this.requestReviews.bind(this);
    this.onClickCustomToggle = this.onClickCustomToggle.bind(this);
  }

  onClickToggle(event){
    const { openedIndex } = this.state;
    const currentIdx = getDatasetByName(event.currentTarget, 'index');
    let updateIdx = null;

    if(openedIndex !== currentIdx){
      updateIdx = currentIdx;
    }

    this.setState(update(this.state,{openedIndex : {$set : updateIdx}}));
  }

  onClickCustomToggle(viewNumber){
    this.setState(update(this.state,{openedIndex : {$set : viewNumber}}));
  }

  componentDidMount() {
    this.init();
  }


  init = async () => {
    await this.requestReviews(0).then(r => {});
  }

  onChangeOffset(offset) {
    const { actions: { handleUpdateUIScroll } } = this.props;
    const { openedIndex } = this.state;
    Promise.all([
      (this.isFocus = true)
    ]).then(() => {

      this.setState(update(this.state, {
        openedIndex : {$set : null}
      }));

      if(!!openedIndex){
        window.setTimeout(() => {
          this.requestReviews(offset).then(r => {});
         // handleUpdateUIScroll(0);
        }, 450)
      }else{
        this.requestReviews(offset).then(r => {});
        //handleUpdateUIScroll(0);
      }
    });
  }


  async requestReviews(offset){
    const { actions : { handleRequestNotice } } = this.props;
    const { limit } = this.state;

    let params = {
      offset,
      limit,
      noticeMode : "NOTICE"
    }

    let data = await handleRequestNotice(params);

    this.setState(update(this.state, {
      offset : {$set : offset},
      items : {$set : data.noticeList},
      totalCount : {$set : data.totalCount}
    }));

    setTimeout(()=>{
      const { router : { query : { view } } } = this.props;

      if(view){
        this.onClickCustomToggle(view);
      }
    },500)
  }



  render() {
    const { items, totalCount, offset, limit, openedIndex } = this.state;
    const { states } = this.props;

		return (
		  <div className="notice-board-wrap">
        <div className={"top"}>
          <span>공지사항</span>
        </div>

        <div className={"middle"}>
          <div className={"notice-table-container"}>
            <div className={"notice-table-header"}>
              <div>번호</div>
              <div>제목</div>
              <div>작성일</div>
            </div>

            {
              (items && items.length > 0) ?
                items.reduce((target,item,index)=>{
                  target.push(
                    React.cloneElement(<NoticeItem/>, {
                      item,
                      states,
                      totalCount,
                      offset,
                      index,
                      handleToggle: this.onClickToggle,
                      opened: (openedIndex === index+"")
                    })
                  )
                  return target;
                },[])

                :
                <div className={"noitce-none"}>
                  <span>아직 작성된 공지사항이 없습니다.</span>
                </div>
            }




            <div className={'notice-pagination'}>
              {totalCount > 0 && React.cloneElement(<Pagination/>, {
                offset,
                limit,
                totalCount,
                handleChangeOffset: this.onChangeOffset
              })}
            </div>

          </div>

        </div>



      </div>
		)
	}
}

const mapStateToProps = (state, ownerProps) => {
  return {
    states: {
      config: state.config
    }
  }
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      handleRequestNotice: (params) => dispatch(ActionNotice.requestNotice(params)),
      handleUpdateUIScroll: (targetY, easingType) => dispatch(ActionUI.updateUIScroll(targetY, easingType)),
    }
  }
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Notice));
