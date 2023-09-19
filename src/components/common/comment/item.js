

import React from 'react';

export default class CommentItem extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickToggle = this.onClickToggle.bind(this);
	}

	onClickToggle(event) {
		let { actions: { handleOpen, handleClose }, index, item } = this.props;

		!item[ 'opened' ] ? handleOpen(index) : handleClose(index);
	}

	render() {
		let { reply, isLast } = this.props;

		return (
			<span className={`comment-item-wrap ${reply ? 'reply' : ''}`}>
				{reply && (<span className="icon icon-ripple-1215"/>)}

				<span className={isLast ? 'last' : ''}>
					<span className="title">헤일리 <em>2017/03/25 07:00</em></span>
					<span className="content">
						가봤다는 사실보다 더 중요한건 마음이 조금 움직였음을 기억하는일이라는 문구가 가슴에 와닿네요 ㅠ ㅠ !<br/>
						어떻게 이렇게 만들죠?! 완전 신기ㅜㅠ대단하세요ㅜㅠ<br/>
						진짜.... 잘 만드셨네요..... 부럽...
					</span>
				</span>

				<span className={isLast ? 'last' : ''}>
					{!reply && (<button type="button" onClick={this.onClickToggle}>답글달기</button>)}
					{!reply && (<span className="line">|</span>)}
					<button type="button" onClick={this.onClickToggle}>삭제</button>
				</span>
			</span>
		)
	}
}