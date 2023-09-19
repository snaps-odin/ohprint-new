

import React from 'react';
import update from 'react-addons-update';

import { getDatasetByName } from 'utils/dom';

import ScrollContents from 'components/common/scroll-contents';

export default class DropDown extends React.Component {
	constructor(...args) {
		super(...args);

		this.state = {
			active: false,
			scroll: {
				targetY: 0
			}
		};

		this.onChangeWheel = this.onChangeWheel.bind(this);
		this.onCompleteAnimation = this.onCompleteAnimation.bind(this);

		this.resetScroll = this.resetScroll.bind(this);

		this.onFocus = this.onFocus.bind(this);
		this.onBlur = this.onBlur.bind(this);
		this.onClickLabel = this.onClickLabel.bind(this);
		this.onClickChangeValue = this.onClickChangeValue.bind(this);
	}

	onChangeWheel(event) {
		this.state.scroll.targetY && this.resetScroll();
	}

	onCompleteAnimation(event) {
		this.state.scroll.targetY && this.resetScroll();
	}

	resetScroll() {
		this.setState(update(this.state, { scroll: { targetY: { $set: null } } }));
	}

	onFocus(event) {
		let { input, stepHeight, lists } = this.props;
		let focus = lists.length > 0
			? lists.filter(item => !item[ 'disabled' ]).findIndex(item => String(item[ 'value' ]) === String(input[ 'value' ])) :
			0;

		Promise.all([
			this.setState(update(this.state, { active: { $set: true } }))
		]).then(() => {
			this.setState(update(this.state, { scroll: { targetY: { $set: focus * (stepHeight || 34) } } }));
		});
	}

	onBlur(event) {
		this.setState(update(this.state, { active: { $set: false } }));
	}

	onClickLabel(event) {
		this.setState(update(this.state, { active: { $set: !this.state.active } }));
	}

	onClickChangeValue(event) {
		let { input } = this.props;

		event.stopPropagation();

		Promise.all([
			input.onChange(getDatasetByName(event.currentTarget, 'value'))
		]).then(() => {
			this.setState(update(this.state, { active: { $set: false } }));
		}).then(() => {
			input.onBlur();
		}).then(() => {
			this.dummy.focus();
		});
	}

	render() {
		let { input, className, disabled, placeholderLabel, placeholder, lists, width, height, stepHeight, resize } = this.props;
		let { active, scroll: { targetY } } = this.state;

		let enabled = lists.length > 0;
		let stepHeights = resize && stepHeight ? stepHeight * lists.length + 2 : 0;

		let scopeStyle = Object.assign({ width: `${width}px` },
			resize && active && stepHeights
				? { height: `${height ? Math.min(height, stepHeights) : stepHeights}px` }
				: {}
		);
		let containerStyle = { maxHeight: height ? `${height}px` : 'none' };

		let item = lists.find(item => String(item[ 'value' ]) === String(input[ 'value' ]));
		let label = placeholderLabel || (item ? item[ 'label' ] : placeholder);

		return (
			<div className={`dropdown-scope ${className || ''} ${(active && enabled) ? 'active' : ''}`}
			     style={scopeStyle}>

				<input {...input}
				       disabled={disabled}
				       onFocus={(event) => {
					       input.onFocus();
					       this.onFocus(event);
				       }}
				       onBlur={(event) => {
					       input.onBlur();
					       this.onBlur(event)
				       }}
				       readOnly={true}
				       autoComplete="off"
				       ref={(c) => {this.input = c;}}/>

				<input type="text"
				       className="input-dummy"
				       name={`${input[ 'name' ]}-dummy`}
				       ref={(c) => {this.dummy = c;}}/>

				<button type="button"
				        className={`${(!item && !placeholderLabel) ? 'empty' : ''}`}
				        disabled={disabled}
				        onMouseDown={this.onClickLabel}>{label}
				</button>

				{active && enabled && (
					<div style={containerStyle} ref={(c) => {this.container = c;}}>
						<ScrollContents className="inner"
						                parentEl={this.container}
						                targetY={targetY}
						                duration={1}
						                handleChangeWheel={this.onChangeWheel}
						                handleCompleteAnimation={this.onCompleteAnimation}>
							<ul>
								{lists.reduce((target, item, index) => {
									!item[ 'disabled' ] && target.push(
										<li key={`${input[ 'name' ]}-${index}`}
										    className={input[ 'value' ] === item[ 'value' ] ? 'selected' : null}
										    data-value={item[ 'value' ]}
										    onMouseDown={this.onClickChangeValue}>
											<button type="button">{item[ 'label' ]}</button>
										</li>
									);

									return target;
								}, [])}
							</ul>
						</ScrollContents>
					</div>
				)}
			</div>
		)
	}
}
