import React from "react";
import update from "react-addons-update";

import Attention from "components/common/attention";

export default class CouponBoardCouponTip extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      opened: false,
      title: "",
      isEnableOpen: false,
    };

    this.onClickOpen = this.onClickOpen.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
    this.getAllowProductList = this.getAllowProductList.bind(this);
  }

  onClickOpen(event) {
    this.setState({ opened: true });
    this.props.handleFocusTip(this.props.index);
  }

  onClickClose(event) {
    this.setState({ opened: false });
  }

  updateState(props) {
    let {
      item: { allowProductList },
    } = props;
    let title = "";
    let isEnableOpen = false;

    if (allowProductList.length > 0) {
      if (allowProductList.length === 1) {
        title = allowProductList[0];
      } else {
        title = "상품 보기";
        isEnableOpen = true;
      }
    } else {
      title = "전체 상품";
    }

    this.setState(update(this.state, { title: { $set: title }, isEnableOpen: { $set: isEnableOpen } }));
  }

  componentWillMount() {
    this.updateState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    let {
      index,
      focus: beforeFocus,
      item: { allowProductList: currentAllowProductList },
    } = this.props;
    let { opened } = this.state;
    let {
      item: { allowProductList: nextAllowProductList },
      focus: afterFocus,
    } = nextProps;

    !Object.is(currentAllowProductList, nextAllowProductList) && this.updateState(nextProps);

    if (!!opened) {
      this.setState(update(this.state, { opened: { $set: false } }));
    }
    //(opened && index !== focus) && this.setState(update(this.state, { opened: { $set: false } }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(Object.is(this.props, nextProps) && Object.is(this.state, nextState));
  }

  getAllowProductList() {
    let {
      item: { allowProductList },
    } = this.props;
    let res = [];

    res = allowProductList.reduce((target, item) => {
      let check = target.find((item2) => item2.value === item);
      !check && target.push({ value: String(item) });

      return target;
    }, []);

    return res;
  }

  render() {
    let { opened, title, isEnableOpen } = this.state;
    let {
      item: { allowProductList },
    } = this.props;

    return (
      <div>
        {isEnableOpen ? (
          <button type="button" onClick={this.onClickOpen}>
            {title}
          </button>
        ) : (
          `${title}`
        )}

        {opened && isEnableOpen && (
          <span>
            <p>적용상품</p>
            <div>
              {(allowProductList || []).length > 0 &&
                React.cloneElement(<Attention />, {
                  value: {
                    children: this.getAllowProductList(),
                  },
                })}
              {/*{allowProductList.map((item, index) => (
								<span className="desc">
									<span className="icon"/>
									<span>{item}</span>
								</span>
							))}*/}
            </div>

            <button type="button" className="icon icon-close-88" onClick={this.onClickClose} />
          </span>
        )}
      </div>
    );
  }
}
