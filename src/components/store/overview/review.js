import React from "react";
import update from "react-addons-update";

import { getDatasetByName } from "utils/dom";

import ReviewBoard from "components/common/review-board";
import Pagination from "components/common/pagination";
import { withRouter } from "next/router";

class Review extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      mode: null,
      items: [],
      offset: 0,
      limit: 5,
      totalCount: 0,
      totalPhotoCount: 0,
    };

    this.buttons = [
      { label: "전체 리뷰", value: "NORMAL" },
      { label: "포토 리뷰", value: "PHOTO" },
    ];

    this.isFocus = false;

    this.onChangeOffset = this.onChangeOffset.bind(this);
    this.onClickChangeMode = this.onClickChangeMode.bind(this);
  }

  onChangeOffset(offset) {
    Promise.all([(this.isFocus = true)]).then(() => {
      this.requestReviews(offset);
    });
  }

  onClickChangeMode(event) {
    let { mode: currentMode } = this.state;

    let mode = getDatasetByName(event.currentTarget, "mode");

    currentMode !== mode &&
      Promise.all([
        this.setState(
          update(this.state, {
            mode: { $set: mode },
          }),
        ),
      ]).then(() => {
        this.requestReviews(0);
      });
  }

  requestReviews(offset) {
    let {
      product,
      actions: { handleRequestReviews, handleFocusScroll },
      router: {
        query: { category },
      },
      productApparelCode,
    } = this.props;
    let { mode, limit } = this.state;

    let reviewFocusIndex = product ? (product["children"] || []).length : 0;
    let params = {
      category,
      offset,
      limit,
      reviewType: mode,
    };

    handleRequestReviews(params, productApparelCode)
      .then((result) => {
        let { reviewList, totalCount, totalPhotoCount } = result;

        this.setState(
          update(this.state, {
            items: { $set: reviewList },
            offset: { $set: offset },
            totalCount: { $set: totalCount },
            totalPhotoCount: { $set: totalPhotoCount },
          }),
        );
      })
      .then(() => {
        this.isFocus &&
          window.setTimeout(() => {
            handleFocusScroll(reviewFocusIndex);
          }, 100);
      })
      .then(() => {
        this.isFocus = false;
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    let { params: nextParams } = nextProps;
    let { params: currentParams } = this.props;

    return !(Object.is(nextParams, currentParams) && Object.is(JSON.stringify(nextState), JSON.stringify(this.state)));
  }

  initialize() {
    Promise.all([
      this.setState(
        update(this.state, {
          mode: { $set: this.buttons[0]["value"] },
        }),
      ),
    ]).then(() => {
      this.requestReviews(0);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    let { params: prevParams } = prevProps;
    let { params: currentParams } = this.props;

    !Object.is(JSON.stringify(prevParams), JSON.stringify(currentParams)) && this.initialize();
  }

  componentDidMount() {
    this.initialize();
  }

  render() {
    let { actions, states, params } = this.props;
    let { mode, items, offset, limit, totalCount, totalPhotoCount } = this.state;

    let selectedTotalCount = (mode || "").match(/NORMAL/) ? totalCount : totalPhotoCount;

    return (
      <section
        className="store-overview-review-wrap"
        ref={(c) => {
          this.el = c;
        }}
      >
        <h3>써본 사람이 직접 말해요.</h3>

        <div>
          {this.buttons.reduce((target, button) => {
            let { label, value } = button;

            let isActive = (mode || "").match(value);

            target.push(
              <span className={isActive ? "active" : null}>
                <button type="button" data-mode={value} onClick={this.onClickChangeMode}>
                  {`${label} ${(value || "").match(/NORMAL/) ? totalCount : totalPhotoCount}`}
                </button>
              </span>,
            );

            return target;
          }, [])}

          {React.cloneElement(<ReviewBoard />, {
            actions,
            states,
            items,
            offset,
            totalCount: selectedTotalCount,
            params,
          })}
        </div>

        {totalCount > 0 &&
          React.cloneElement(<Pagination />, {
            offset,
            limit,
            totalCount: selectedTotalCount,
            handleChangeOffset: this.onChangeOffset,
          })}
      </section>
    );
  }
}

export default withRouter(Review);
