

import React from 'react';

import { CSTypes } from 'constants/index';
import { getHeight, getDatasetByName } from 'utils/dom';

class CSFloatingContentsTutorial extends React.Component {
	constructor(...args) {
		super(...args);

		this.onClickAppendPop = this.onClickAppendPop.bind(this);
	}

	onClickAppendPop(event) {
		let { actions: { handleUpdateCSPopItem } } = this.props;

		let index = getDatasetByName(event.currentTarget, 'index');
		let keyName = getDatasetByName(event.currentTarget, 'key');

		handleUpdateCSPopItem({
			type: CSTypes.TUTORIAL,
			value: {
				boardId: `tutorial-${keyName}`,
				keyName,
				index
			}
		}, CSTypes.APPEND);
	}

	resizeHeight() {
		let { actions: { handleResetCSContentHeight } } = this.props;

		handleResetCSContentHeight(getHeight(this.scope));
	}

	componentDidMount() {
		this.resizeHeight();
	}

	render() {
		return (
			<div className="inner tutorial" ref={(c) => {this.scope = c;}}>
				<span>
					상품 제작이 어려우시다면,<br/>
					현재 작업하고 있는 상품의 작업 가이드를 확인해보세요.
				</span>

				<ul>
					{[
							{ name: '작업 가이드', key: 'GUIDE' },
							{ name: '로고 만들기 안내', key: 'LOGO' },
							{ name: '클립아트 디자인 가이드', key: 'CLIPART' },
							{ name: '엑셀 파일 가이드', key: 'EXCEL' },
              { name: 'QR 코드 안내', key: 'QR' },
						].reduce((target, item, index) => {
							target.push(
								<li data-index={index}
								    data-key={item[ 'key' ]}
								    onClick={this.onClickAppendPop}>

								<span className="title">
									{item[ 'name' ]}
								</span>

									<span className="icon icon-layer-1414"/>
								</li>
							);

							return target;
						}, [])}
					<li/>
				</ul>
			</div>
		)
	}
}

module.exports = CSFloatingContentsTutorial;
