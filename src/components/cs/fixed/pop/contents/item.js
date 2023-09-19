

import React from 'react';

import { CSTypes } from 'constants/index';
import { getPosition, getWidth, getHeight } from 'utils/dom';

import FAQItem from 'components/cs/fixed/common/faq-item';
import QNAItem from 'components/cs/fixed/common/qna-item';
import TalkItem from 'components/cs/fixed/common/talk-item';
import TutorialItem from 'components/cs/fixed/common/tutorial-item';
import Alert from 'components/cs/fixed/common/alert';

export default class CSPopItem extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			x: null,
			y: null,
			width: null,
			height: null,

			alert: {
				description: null,
				privacy: null,
				confirm: false,
				confirmLabel: null,
				callback: null
			}
		};

		this.drag = {
			start: {
				x: null,
				y: null
			},
			enable: false,
		};

		this.expand = {
			start: {
				x: null,
				y: null
			},
			enable: false
		};

		this.step = 60;

		this.els = [
			{ component: <FAQItem/>, type: CSTypes.FAQ, title: 'FAQ', className: 'faq' },
			{ component: <QNAItem/>, type: CSTypes.QNA, title: '1:1 문의', className: 'qna' },
			//₩{ component: <TalkItem/>, type: CSTypes.TALK, title: '실시간 톡상담', className: 'talk' },
			{ component: <TutorialItem/>, type: CSTypes.TUTORIAL, title: '작업 가이드', className: 'tutorial' }
		];

		this.onResizeHeight = this.onResizeHeight.bind(this);
		this.onFocus = this.onFocus.bind(this);

		this.onStartDrag = this.onStartDrag.bind(this);
		this.onStopDrag = this.onStopDrag.bind(this);
		this.onMoveDrag = this.onMoveDrag.bind(this);

		this.onStartExpand = this.onStartExpand.bind(this);
		this.onStopExpand = this.onStopExpand.bind(this);
		this.onMoveExpand = this.onMoveExpand.bind(this);

		this.onClickClose = this.onClickClose.bind(this);

		this.openAlert = this.openAlert.bind(this);
		this.closeAlert = this.closeAlert.bind(this);
	}

	onFocus(event) {
		let { actions: { handleTouchCSPopItem, handleFocusItem }, item: { value: { boardId } } } = this.props;

		Promise.all([
			handleTouchCSPopItem(true)
		]).then(() => {
			handleFocusItem(boardId);
		});
	}

	onStartDrag(event) {
		let { actions: { handleDragCSPopItem } } = this.props;

		let { enable } = this.drag;
		let { left, top } = getPosition(this.scope);
		let { pageX, pageY } = event;

		!enable && Promise.all([
			handleDragCSPopItem(true)
		]).then(() => {
			this.drag = {
				start: {
					x: pageX - left,
					y: pageY - top,
				},
				enable: true
			};
		});
	}

	onStopDrag(event) {
		let { actions: { handleDragCSPopItem } } = this.props;

		Promise.all([
			handleDragCSPopItem(false)
		]).then(() => {
			this.drag[ 'enable' ] = false;
		});
	}

	onMoveDrag(event) {
		let { start: { x, y }, enable } = this.drag;
		let { pageX, pageY } = event;

		enable && this.setState({ x: Math.max(0, pageX - x), y: Math.max(0, pageY - y) });
	}

	onStartExpand(event) {
		let { actions: { handleDragCSPopItem } } = this.props;

		let { enable } = this.expand;
		let { pageX, pageY } = event;

		!enable && Promise.all([
			handleDragCSPopItem(true)
		]).then(() => {
			this.expand = {
				start: {
					x: pageX,
					y: pageY,
				},
				enable: true
			};
		});
	}

	onStopExpand(event) {
		let { actions: { handleDragCSPopItem } } = this.props;

		Promise.all([
			handleDragCSPopItem(false)
		]).then(() => {
			this.expand[ 'enable' ] = false;
		});
	}

	onMoveExpand(event) {
		let { width, height } = this.state;
		let { start: { x, y }, enable } = this.expand;
		let { pageX, pageY } = event;

		enable && Promise.all([
			(this.expand[ 'start' ] = { x: pageX, y: pageY })
		]).then(() => {
			this.setState({
				width: Math.max(200, width + (pageX - x)),
				height: Math.max(50, height + (pageY - y))
			});
		});
	}

	onClickClose(event) {
		let { actions: { handleUpdateCSPopItem }, item } = this.props;

		handleUpdateCSPopItem(item, CSTypes.REMOVE);
	}

	onResizeHeight(height) {
		let { y } = this.state;

		this.setState({ height: this.getBoundHeight(y, getHeight(this.top) + height) })
	}

	getBoundHeight(y, height) {
		let { states: { ui: { view } } } = this.props;

		return (view[ 'height' ] < (height + y + this.step)) ? view[ 'height' ] - (y + this.step) : height;
	}

	openAlert(params) {
		let { description, privacy, confirm, confirmLabel, callback } = params;

		this.setState({ alert: { description, privacy, confirm, confirmLabel, callback } });
	}

	closeAlert() {
		this.setState({ alert: { description: null, privacy: null, confirm: false, confirmLabel: null, callback: null } });
	}

	componentDidMount() {
		let { index, item: { type } } = this.props;

		Promise.all([
			this.setState({
				x: (index + 1) * this.step,
				y: (index + 1) * this.step,
				width: getWidth(this.bottom),
				height: type === CSTypes.TALK
					? 590
					: this.getBoundHeight((index + 1) * this.step, getHeight(this.top) + getHeight(this.bottom))
			})
		]).then(() => {
			window.addEventListener('mousemove', this.onMoveDrag);
			window.addEventListener('mouseup', this.onStopDrag);
			window.addEventListener('mousemove', this.onMoveExpand);
			window.addEventListener('mouseup', this.onStopExpand);
		});
	}

	componentWillUnmount() {
		window.removeEventListener('mousemove', this.onMoveDrag);
		window.removeEventListener('mouseup', this.onStopDrag);
		window.removeEventListener('mousemove', this.onMoveExpand);
		window.removeEventListener('mouseup', this.onStopExpand);
	}

	render() {
		let { states, actions, field, item: { type, value }, active } = this.props;
		let { keyName } = value;
		let { x, y, width, height, alert } = this.state;

		let el = this.els.find((item, index) => item[ 'type' ] === type);
		let { component, title, className } = el;

		let scopeStyle = { left: `${x}px`, top: `${y}px`, width: `${width}px`, height: `${height}px` };
		let bottomStyle = { height: `${height - (50 + (type === CSTypes.FAQ ? 16 : 0))}px` };

		return (
			<div className={`item ${active ? 'active' : ''}`}
			     style={scopeStyle}
			     onMouseDown={this.onFocus}
			     ref={(c) => { this.scope = c;}}>

				<div className="container">
					<div className="top"
					     onMouseDown={this.onStartDrag}
					     ref={(c) => {this.top = c;}}>

						<span className="tit">{title}</span>
					</div>

					<div className={`bottom ${className}`}
					     style={bottomStyle}
					     ref={(c) => {this.bottom = c;}}>

						{React.cloneElement(component, {
							key: value[ 'boardId' ],
							states,
							actions: {
								...actions,
								handleResizeHeight: this.onResizeHeight,
								handleOpenAlert: this.openAlert,
								handleCloseAlert: this.closeAlert
							},
							value,
							field,
							width,
							height,
							spread: true,
							pop: true
						})}
					</div>
				</div>

				<button className="icon icon-close-1414 close"
				        type="button"
				        onClick={this.onClickClose}/>

				<span className="icon icon-expand-1616 expand"
				      onMouseDown={this.onStartExpand}/>

				{React.cloneElement(<Alert/>, {
					alert,
					actions: {
						...actions,
						handleCloseAlert: this.closeAlert
					}
				})}
			</div>
		)
	}
}
