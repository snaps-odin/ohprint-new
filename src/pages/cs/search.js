

import React from 'react';
import { Field } from 'redux-form';

import { getDeepValue } from 'utils/json';

import { InputField } from 'components/common/fields';

export default class CSDefaultSearch extends React.Component {
  constructor(...args) {
    super(...args);

    this.onClickResetKeyword = this.onClickResetKeyword.bind(this);
  }

  componentDidMount() {
    let { index } = this.props;

    if (index === 0) {
      this.onClickResetKeyword();
    }
  }

  onClickResetKeyword() {
    let { actions: { handleUntouchField, handleChangeFormValue } } = this.props;

    handleChangeFormValue('faq.keyword', null);
    handleUntouchField('faq.keyword');
  }

  render() {
    let { states: { currentForm } } = this.props;

    let keyword = getDeepValue(currentForm, 'values.faq.keyword');

    return (
      <div className="cs-search-wrap">
        <div className="left">
					<span>
						<Field
              name="faq.keyword"
              className="box"
              placeholder="궁금한 사항을 입력해주세요."
              allowEnterKey={true}
              component={InputField}/>

						<span>
							{!!keyword && (
                <button className={`btn-submit icon icon-del-2222`}
                        type="button"
                        onClick={!!keyword ? this.onClickResetKeyword : null}/>
              )}

              {!!keyword && (
                <em>|</em>
              )}

              <button className={`btn-submit icon icon-search-2222`}
                      type="submit"/>
						</span>


					</span>
        </div>
        <div className="right">
          <span className="icon icon-call-6060"/>
          <span>
						<span>전화문의 <em>1577-4703</em></span>
						<span>운영시간 : 평일 09:30~17:30</span>
					</span>
        </div>
      </div>
    )
  }
}
