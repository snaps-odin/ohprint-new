

import React from 'react';

import { getDatasetByName } from 'utils/dom';
import {gtmV4_click_cs} from "configs/google-analytics/ga-v4";

export default class CSFloatingTab extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			tutorialMode: false
		};

		this.onClickTouch = this.onClickTouch.bind(this);
		this.onClickChange = this.onClickChange.bind(this);
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
	}

	onClickTouch(event) {
		let { states: { alarm: { qnaCount } }, actions: { handleChangeCSTabFocus, handleOpenCS, handleTouchCS } } = this.props;

		const focusIdx = qnaCount > 0 ? 2 : 0;

		Promise.all([
			this.setActive(false),
			handleChangeCSTabFocus(focusIdx),
			handleOpenCS()
		]).then(() => {
		  gtmV4_click_cs('FAQ');
			handleTouchCS();
		});
	}

	onClickChange(event) {
		let { states, actions } = this.props;
		let { cs: { floating: { tab: { focus }, opened } } } = states;
		let { handleChangeCSTitleBack, handleChangeCSTitlePop, handleChangeCSTabFocus, handleOpenCS, handleCloseCS } = actions;

		let index = Number(getDatasetByName(event.currentTarget, 'index'));
		const title = getDatasetByName(event.currentTarget, 'title');

		gtmV4_click_cs(title);

    if(index === 4) {
      window.zE('messenger', 'open');
      if(opened){
        handleCloseCS();
      }
    }

		focus !== index && Promise.all([
			handleChangeCSTitleBack(null),
			handleChangeCSTitlePop(null)
		]).then(() => {
			handleChangeCSTabFocus(index);
		});

		!opened && handleOpenCS();
	}

	onMouseEnter(event) {
		this.setActive(true);
	}

	onMouseLeave(event) {
		this.setActive(false);
	}

	setActive(isActive) {
		let { states: { cs: { floating: { opened, touched, tab: { width } } } }, actions: { handleChangeCSTabWidth } } = this.props;

		let nextWidth = (isActive || opened) ? 97 : 42;

		(touched && width !== nextWidth) && handleChangeCSTabWidth(nextWidth);
	}

	shouldComponentUpdate(nextProps, nextState) {
		let { states: { cs: { floating: { opened: nextOpened, tab: { focus: nextFocus, width: nextWidth }, touched: nextTouched } }, alarm: nextAlarm } } = nextProps;
		let { states: { cs: { floating: { opened: currentOpened, tab: { focus: currentFocus, width: currentWidth }, touched: currentTouched } }, alarm: currentAlarm } } = this.props;

		return !(
			Object.is(nextOpened, currentOpened) &&
			Object.is(nextFocus, currentFocus) &&
			Object.is(nextWidth, currentWidth) &&
			Object.is(nextTouched, currentTouched) &&
			Object.is(JSON.stringify(nextAlarm), JSON.stringify(currentAlarm)) &&
			Object.is(JSON.stringify(nextState), JSON.stringify(this.state))
		)
	}

	componentDidUpdate(prevProps, prevState) {
		let { states, actions, pathname } = this.props;
		let { cs: { floating: { tab: { focus } } } } = states;
		let { handleChangeCSTabFocus } = actions;
		let { tutorialMode: prevTutorialMode } = prevState;

		let tutorialMode = !!pathname.match(/\/editor/i);

		prevTutorialMode !== tutorialMode && this.setState({ tutorialMode });
		prevTutorialMode && !tutorialMode && focus === 3 && handleChangeCSTabFocus(0);
	}

  render() {
		let { states: { cs: { floating: { opened, tab: { focus, width }, touched } }, alarm: { alarmCount, qnaCount } } } = this.props;
		let { tutorialMode } = this.state;

		let style = { width: `${width}px` };

		return (
			<div className={`tab ${touched ? 'touched' : ''} ${tutorialMode ? 'tutorial' : ''}`}
			     style={style}
			     onMouseEnter={this.onMouseEnter}
			     onMouseLeave={this.onMouseLeave}
			     ref={(c) => {this.scope = c;}}>

				<ul>
					{!touched
						? (
							<li className={`${(alarmCount > 0 || qnaCount > 0) ? ' badge' : ''}`} onClick={this.onClickTouch}>
								<span className="icon icon-customer-w-2428"/>
								<span className="title">고객센터</span>
							</li>
						)
						: (
							[ { title: '알림', className: 'notice-w-2020', index: 3 },
								{ title: 'FAQ', className: 'search-w-2020', index: 0 },
								//{ title: '실시간톡', className: 'talk-w-2020', index: 1 },
								{ title: '1:1문의', className: 'write-w-2020', index: 1 },
                { title: '챗봇', className: 'chatbot-w-2020', index: 4 }

							].concat(tutorialMode
								? [ { title: '가이드', className: 'guide-w-2020', index: 2 } ]
								: []
							).map((item, index) => {
								let focused = Number(focus) === item[ 'index' ] && opened;
								//let showBadge = (item[ 'index' ] === 2 && qnaCount > 0) || (item[ 'index' ] === 4 && alarmCount > 0);
                let showBadge = false;

								return (
									<li className={`small${focused ? ' on' : ''}${showBadge ? ' badge' : ''}`}
									    data-index={item[ 'index' ]}
                      data-title={item[ 'title' ]}
									    onClick={this.onClickChange}>
										<span className={`icon icon-${item.className}${focused ? '-on' : ''}`}/>
										<span className="title">{item.title}</span>
									</li>
								)
							})
						)
					}
				</ul>
			</div>
		)
	}
}
