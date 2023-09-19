

import React from 'react';
import { Field } from 'redux-form';

import { TextAreaField } from 'components/common/fields';
import * as Validate from 'utils/validate';

export default class CommentInput extends React.Component {
	render() {
		let { reply } = this.props;

		return (
			<span className={`comment-input-wrap ${reply ? 'reply' : ''}`}>
				{reply && (<span className="icon icon-ripple-1215"/>)}

				<Field name="comment"
				       className="box"
				       placeholder="댓글로 이야기를 나누어 보세요!"
				       component={TextAreaField}
				       validate={[ Validate.required ]}/>

					<button type="button">등록</button>
			</span>
		)
	}
}
