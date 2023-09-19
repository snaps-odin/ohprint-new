

import React from 'react';
import { connect } from 'react-redux';

import { ActionEditor } from 'actions/index';
import { getDatasetByName, getHeight } from 'utils/dom';

class ProjectEdit extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickClose = this.onClickClose.bind(this);
		this.onClickEdit = this.onClickEdit.bind(this);
	}

	onClickClose(event) {
		let { actions: { handleCloseContentsLayer } } = this.props;

		handleCloseContentsLayer();
	}

	onClickEdit(event) {
		let { actions: { handleCloseContentsLayer }, options: { items, actions: { handleGoEditor } } } = this.props;

		let index = getDatasetByName(event.currentTarget, 'index');

		Promise.all([
			handleGoEditor(items[ index ])
		]).then(() => {
			handleCloseContentsLayer();
		});
	}

	componentDidMount() {
		let { actions:{ handleUpdateLayer } } = this.props;

		handleUpdateLayer();
	}

	render() {
		let { states: { ui: { view: { height } } }, options: { items } } = this.props;

		let middleHeight = height < (50 + getHeight(this.inner) + 60 )
			? height - (50 + 60)
			: null;

		return (
			<div className="project-edit-layer-wrap popup">
				<div className="container">
					<div className="top">
						<h2>편집상태 확인</h2>
					</div>

					<div className="middle" style={middleHeight ? { height: `${middleHeight}px` } : null}>
						<div className="inner" ref={(c) => {this.inner = c;}}>
							<h3>개편된 상품이 포함되어 있습니다.</h3>
							<span>해당 상품의 [편집] 버튼을 클릭하여 레이아웃을<br/>변경한 후 주문해 주세요. </span>

							<table border={0}>
								<colgroup>
									<col style={{ width: '390px' }}/>
									<col style={{ width: '50px' }}/>
								</colgroup>
								<tbody>
								{(items || {}).reduce((target, item, index) => {
									target.push(
										<tr>
											<td>
												{`[${item[ 'productGroupName' ]}] ${item[ 'shapeName' ]}`}
												{item[ 'projectName' ] ? ` / ${item[ 'projectName' ]}` : ''}
											</td>
											<td>
												<button type="button"
												        className="btn-white-small"
												        data-index={index}
												        onClick={this.onClickEdit}>편집
												</button>
											</td>
										</tr>
									);

									return target;
								}, [])}
								</tbody>

							</table>
						</div>
					</div>
				</div>

				<button className="icon icon-close-w-1414 close"
				        type="button"
				        onClick={this.onClickClose}/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownerProps) => {
	return {
		states: {
			...ownerProps.states
		}
	};
};

const mapDispatchToProps = (dispatch, ownerProps) => {
	return {
		actions: {
			...ownerProps.actions
		}
	};
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ProjectEdit);