

import React from 'react';
import update from 'react-addons-update';
import { change, Field, reduxForm } from "redux-form";
import { SelectField } from 'components/common/fields';
import { connect } from "react-redux";
import { ActionLayer, ActionFair, ActionCommon } from 'actions/index';
import { getDeepValue } from 'utils/json';
import * as Validate from 'utils/validate';

class FairApparelSizeAlert extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      size : []
    }

    this.onClickClose = this.onClickClose.bind(this);
    this.onClickSaveCart = this.onClickSaveCart.bind(this);
  }

  onClickSaveCart(){
    let itemCnt = 1;
    let baseProjCode = this.props.options.product.baseProjCode;
    let { handleCreateStoreFairCart, handleCloseContentsLayer, handleOpenAlertLayer, handleOpenLoadingLayer, handleExecuteAfterUserLogin, handleCloseLoadingLayer } = this.props.actions;
    let cartSaveLayer = this.props.options.cartSaveLayer;

//pairCreatorProductReqParam
    handleExecuteAfterUserLogin().then(() => {
      Promise.all([
        handleCloseContentsLayer(),
        handleCreateStoreFairCart(baseProjCode, 1, {
          fairCreatorProductReqParam : this.props.states.currentForm.values.optionId
        }),
        handleOpenLoadingLayer()
      ]).then((result) => {

        Promise.all([
          handleCloseLoadingLayer()
        ]).then(()=>{
          cartSaveLayer();
        })

      }).catch((err) => {
        Promise.all([
          handleCloseContentsLayer()
        ]).then((result) => {
          handleOpenAlertLayer({
            description: err
          })
        });
      })
    })




  }

  onClickClose(event) {
    let { actions: { handleCloseContentsLayer } } = this.props;

    handleCloseContentsLayer();
  }

  shouldComponentUpdate(nextProps, nextState) {
    let nowOptions = this.props.options.product;
    let nextOptions = nextProps.options.product;

    let isSizeChangeOld = this.props.valid;
    let isSizeChangeNext = nextProps.valid;

    return !(
      Object.is(nowOptions, nextOptions) && Object.is(JSON.stringify(nowOptions), JSON.stringify(nextOptions)) && Object.is(isSizeChangeOld, isSizeChangeNext)
    );
  }

  componentWillMount() {
    let contents = this.props.options.productInfo.COMMON.showcases;

    let sizeInfo = this.props.options.product.prodSizeInfo;
    sizeInfo = sizeInfo && sizeInfo.toUpperCase().replace(/-/g, '_')+"_SIZE_INFORMATION";
    /*PRINTSTAR_085_CVT_INFORMATION,
      PRINTSTAR_085_CVT_SIZE_INFORMATION*/

    this.setState(update(this.state,{
      size : {$set : contents[sizeInfo] }
    }))
  }




  render() {
    let { handleSubmit, valid } = this.props;
    let optionsa = this.props.options.product.sizeList;
    let productName = this.props.options.product.prodName;
    let sizeTitle = (this.state.size) && this.state.size.subTitle;
    let sizeContetns = (this.state.size) && this.state.size.children;
    let sizeProductName = (this.state.size) && this.state.size.productName;

    return (
      <div className="fair-apparel-size-layer-wrap">
        <div className="container">
          <form>
            <div className="top">
              <h2>{productName}</h2>
            </div>

            <div className="middle">
              <div className="sizeSelectMap">
                <label>사이즈를 선택해 주세요.</label>
                <div className="sizeContents">
                  <div className="fieldSelect">
                    <Field name="optionId"
                           className="box"
                           options={optionsa}
                           width={408}
                           placeholder="사이즈를 선택해 주세요."
                           validate={[ Validate.required ]}
                           component={SelectField}
                    />
                  </div>
                  <div className="sizeButtomMap">
                    <button type="button" className="btn-white-medium" onClick={this.onClickClose} >취소</button>
                    <button type="button" className="btn-blue-medium" disabled={!valid}  onClick={this.onClickSaveCart}>장바구니 담기</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bottom">
              <div className="table-wrap">
                <div className="caption">{sizeProductName}</div>
                <table>
                  <thead>
                    <tr>
                      {
                        (sizeTitle || []).reduce((target,item,idx) => {
                          target.push(<th>{item}</th>);
                          return target;
                        },[])
                      }
                    </tr>
                  </thead>
                  <tbody>
                  {
                    (sizeContetns || []).reduce((target,item,idx) => {
                      let { descriptions } = item;
                      target.push(
                        <tr>
                          {(descriptions || []).reduce((target,item,idx) => {
                            target.push(<td>{item}</td>)
                            return target;
                          },[])}
                        </tr>
                      )
                      return target;
                    },[])
                  }
                  </tbody>
                </table>
              </div>
            </div>


          </form>
        </div>


        <button type="button" className="icon-close-w-1414 close" onClick={this.onClickClose}/>
      </div>
    )
  }
}

const formName = 'fair-size-option';

const mapStateToProps = (state) => {
  return {
    states: {
      currentForm: state.form[ formName ],
    }
  }
};

const mapDispatchToProps = (dispatch, ownerProps) => {
  return {
    actions: {
      handleCloseContentsLayer: () => dispatch(ActionLayer.closeContentsLayer()),
      handleChangeFormValue: (key, value) => dispatch(change(formName, key, value)),
      handleOpenLoadingLayer: (options) => dispatch(ActionLayer.openLoadingLayer()),
      handleExecuteAfterUserLogin: () => dispatch(ActionCommon.executeAfterUserLogin()),
      handleCloseLoadingLayer: () => dispatch(ActionLayer.closeLoadingLayer()),
      handleCreateStoreFairCart: (prdCode,itemCnt, params) => dispatch(ActionFair.createStoreFairCart(prdCode,itemCnt, params)),
      handleOpenAlertLayer: (options) => dispatch(ActionLayer.openAlertLayer(options))
    }
  }
};

const validate = (values, props) => {
  return null;
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: formName,
  validate
})(FairApparelSizeAlert));
