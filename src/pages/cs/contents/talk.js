

import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { CSTypes, LayerTypes } from 'constants/index';
import { getHeight } from 'utils/dom';
import * as Validate from 'utils/validate';
import * as Normalize from 'utils/normalize';

import { InputField, CheckBoxField, SelectField, TextAreaField } from 'components/common/fields';

class CSDefaultContentsTalk extends React.Component {
  constructor(...args) {
    super(...args);

    this.height = null;

    this.category = [
      { label: '배송 문의', value: '337200' },
      { label: '상품 문의', value: '337300' },
      { label: '편집기 사용 문의', value: '337400' },
      { label: '상품 주문 및 교환/취소/쿠폰 문의 ', value: '337500' },
      { label: '기타문의  ', value: '337600' }
    ];

    this.onClickPrivacy = this.onClickPrivacy.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onClickPrivacy(event) {
    let { actions: { handleOpenContentsLayer } } = this.props;

    handleOpenContentsLayer(LayerTypes.POLICY_PRIVATE);
  }

  onSubmit(values) {
    let { states: { cs }, actions: { handleUpdateCSPopItem, handleCloseCS } } = this.props;
    let { floating: { content: { talk: { connected } } } } = cs;

    let categoryName = this.category.find((item, index) => item[ 'value' ] === values[ 'categoryId' ])[ 'label' ];

    !connected && handleUpdateCSPopItem({
      type: CSTypes.TALK, value: {
        ...values,
        boardId: 'talk',
        categoryName
      }
    });
  }

  render() {
    let { states: { cs, user }, handleSubmit, submitting, valid } = this.props;
    let { floating: { content: { talk: { connected } } } } = cs;
    let { loggedIn, userCellPhoneNumber } = user;
    let category = this.category;

    return (
      <div className={`inner talk`} ref={(c) => {this.scope = c;}}>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className="top">
						<span className="left">
							<span>
								실시간톡을 이용하시면 좀 더 빠른 상담을 받으실 수 있습니다.<br/>
								상담을 시작하기 전 상담에 필요한 내용을 간략하게 입력해 주세요.
							</span>
						</span>
            <span className="right">
							<span className="title">톡상담 가능시간</span>
							<span className="desc">평일 09:30 ~ 17:30 (점심시간 12:00~13:00)</span>
						</span>
          </div>

          <div className="middle">
            {!loggedIn && (
              <div>
                <span className="title">이름 <em>*</em></span>
                <Field name="userName"
                       type="text"
                       className="box"
                       maxLength={15}
                       placeholder="이름을 입력해 주세요."
                       component={InputField}
                       validate={[ Validate.required ]}/>
              </div>
            )}

            {!Validate.isPhoneNumber(userCellPhoneNumber) && (
              <div>
                <span className="title">연락처 <em>*</em></span>
                <Field name="userCellPhoneNumber"
                       type="text"
                       className="box"
                       placeholder="연락처를 입력해 주세요."
                       maxLength={13}
                       component={InputField}
                       validate={[ Validate.required, Validate.phoneNumber ]}/>
              </div>
            )}

            <div>
              <span className="title">상담유형 <em>*</em></span>
              <Field name="categoryId"
                     placeholder="상담유형을 선택해 주세요."
                     className="box"
                     width={340}
                     options={category}
                     component={SelectField}
                     validate={[ Validate.required ]}/>
            </div>

            <div>
              <span className="title">상담내용 <em>*</em></span>
              <Field name="contents"
                     placeholder="상담하실 내용을 입력해 주세요."
                     className="box"
                     maxLength={2000}
                     showLength={true}
                     component={TextAreaField}
                     validate={[ Validate.required ]}
                     normalize={Normalize.maxLength(2000)}/>
            </div>
          </div>

          <div className="bottom">
            {!loggedIn && (
              <span>
								<Field name="agreement"
                       label="개인정보 이용동의"
                       component={CheckBoxField}
                       validate={[ Validate.required ]}/>

								<button type="button"
                        onClick={this.onClickPrivacy}>전문보기</button>
							</span>

            )}

            <button type="submit"
                    disabled={connected || submitting}
                    className={`btn-${(!connected && valid) ? 'blue-medium' : 'gray-medium'}`}>톡 상담 시작</button>
          </div>
        </form>
      </div>
    )
  }
}

const formName = 'cs-default-talk';

const mapStateToProps = (state, ownerProps) => {
  let { user: { userName, userId, userCellPhoneNumber } } = ownerProps.states;

  return {
    states: {
      ...ownerProps.states,

      currentForm: state.form[ formName ],
    },
    initialValues: {
      userName,
      userId,
      userCellPhoneNumber: !Validate.isPhoneNumber(userCellPhoneNumber) ? null : userCellPhoneNumber,
      category: null,
      contents: null
    }
  }
};

CSDefaultContentsTalk = reduxForm({
  form: formName,
  enableReinitialize: true
})(CSDefaultContentsTalk);

module.exports = connect(mapStateToProps)(CSDefaultContentsTalk);
