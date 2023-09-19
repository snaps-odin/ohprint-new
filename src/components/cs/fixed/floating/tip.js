

import React from 'react';
import update from 'react-addons-update';

import { getAMinute } from 'utils/date';
import { isCollisionByPoint } from 'utils/dom';

export default class CSFloatingTip extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			opened: false
		};

		this.interval = {
			id: null,
			sec: getAMinute() * 5
		};

		this.onChangeUserAction = this.onChangeUserAction.bind(this);
	}

	onChangeUserAction(event) {
		let { states: { alarm: { qnaCount } } } = this.props;
		let { type } = event;

		switch (type) {
			case 'mousemove':
			case 'wheel':
				this.resetTimer();
				break;

			case 'mousedown':
				let { clientX, clientY } = event;
				let isCollision = this.scope && isCollisionByPoint(this.scope, clientX, clientY);

				Promise.all([
					isCollision && (qnaCount > 0 ? this.openQNA() : this.openFAQ()),
					this.setState(update(this.state, { opened: { $set: false } }))
				]).then(() => {
					this.resetTimer();
				});
				break;
		}
	}

	openFAQ() {
		let { actions: { handleChangeCSTitleBack, handleChangeCSTitlePop, handleTouchCS, handleChangeCSTabFocus, handleChangeCSTabWidth, handleOpenCS } } = this.props;

		Promise.all([
			handleChangeCSTitleBack(null),
			handleChangeCSTitlePop(null),
			handleChangeCSTabFocus(0),
			handleChangeCSTabWidth(97),
			handleOpenCS()
		]).then(() => {
			handleTouchCS();
		});
	}

	openQNA() {
		let { actions: { handleChangeCSTitleBack, handleChangeCSTitlePop, handleTouchCS, handleChangeCSTabFocus, handleChangeCSTabWidth, handleOpenCS } } = this.props;

		Promise.all([
			handleChangeCSTitleBack(null),
			handleChangeCSTitlePop(null),
			handleChangeCSTabFocus(2),
			handleChangeCSTabWidth(97),
			handleOpenCS()
		]).then(() => {
			handleTouchCS();
		});
	}

	resetTimer() {
		let { states: { cs: { floating } }, pathname } = this.props;
		let { ready, opened } = this.state;

		let isEnableReset = ready && !opened && !floating[ 'opened' ] && !pathname.match(/\/editor/i);

		Promise.all([
			this.clearTimer()
		]).then(() => {
			isEnableReset && (this.interval[ 'id' ] = window.setTimeout(() => {
				this.setState(update(this.state, { opened: { $set: true } }))
			}, this.interval[ 'sec' ]));
		});
	}

	clearTimer() {
		this.interval[ 'id' ] && window.clearTimeout(this.interval[ 'id' ]);
	}

	componentDidUpdate(prevProps, prevState) {
		let { pathname: prevPathName, states: { alarm: { qnaCount: prevQnaCount } } } = prevProps;
		let { pathname: currentPathName, states: { alarm: { qnaCount: currentQnaCount }, cs: { floating } } } = this.props;
		let { opened } = this.state;

		currentQnaCount > 0
			? (!opened && currentQnaCount !== prevQnaCount && !floating[ 'opened' ]) && this.setState(update(this.state, { opened: { $set: true } }))
			: !Object.is(prevPathName, currentPathName) && this.resetTimer();
	}

	componentDidMount() {
		let { states: { alarm: { qnaCount } } } = this.props;

		window.setTimeout(() => {
			Promise.all([
				window.addEventListener('mousemove', this.onChangeUserAction),
				window.addEventListener('mousedown', this.onChangeUserAction),
				window.addEventListener('wheel', this.onChangeUserAction)
			]).then(() => {
				this.setState({ ready: true });
			}).then(() => {
				qnaCount > 0
					? this.setState(update(this.state, { opened: { $set: true } }))
					: this.resetTimer();
			});
		}, 1000);
	}

	componentWillUnmount() {
		window.removeEventListener('mousemove', this.onChangeUserAction);
		window.removeEventListener('mousedown', this.onChangeUserAction);
		window.removeEventListener('wheel', this.onChangeUserAction);
	}

	render() {
		let { states: { cs: { floating: { tab: { width }, touched } }, alarm: { qnaCount } } } = this.props;
		let { ready, opened } = this.state;

		return (
			<div className={`tip ${touched ? 'touched' : ''} ${qnaCount > 0 ? 'alarm' : ''}`}
			     style={{ right: `${width}px` }}
			     ref={(c) => {this.scope = c;}}>

				{(ready && opened) && (
					<div className="inner">
						<span className="message">
							{qnaCount > 0 ? '문의하신 내용에 답변이 등록되었습니다.' : '혹시, 도움이 필요하신가요?'}
						</span>

						<span className="icon icon-arrow-58"/>
					</div>
				)}
			</div>
		)
	}
}