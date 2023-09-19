

import update from 'react-addons-update';

import { ActionTypes, CSTypes } from 'constants/index';

const initialState = {
	floating: {
		opened: false,
		touched: false,
		right: -100,
		height: 550,
		title: {
			back: null,
			pop: null
		},
		tab: {
			focus: null,
			width: 50
		},
		content: {
			talk: {
				connected: false
			}
		}
	},
	pop: {
		touched: false,
		dragging: false,
		content: {
			items: []
		}
	},
	topScroll: {
		show: true
	}
};

const findPopItemIndex = (state, item) => {
	let { pop: { content: { items } } } = state;
	let { type, value: { boardId } } = item;

	return items.findIndex((item, index) => {
		return item[ 'type' ] === type && item[ 'value' ][ 'boardId' ] === boardId;
	});
};

const getNonQNAPopItems = (state) => {
	let { pop: { content: { items } } } = state;

	return (items || []).filter((item) => item[ 'type' ] !== CSTypes.QNA);
};

export default function cs(state = initialState, action) {
	let { type } = action;

	switch (type) {
		case ActionTypes.OPEN_CS:
			return update(state, { floating: { right: { $set: 440 }, opened: { $set: true } } });
			break;

		case ActionTypes.APPEAR_CS:
		case ActionTypes.CLOSE_CS:
			return update(state, { floating: { right: { $set: 0 }, opened: { $set: false } } });
			break;

		case ActionTypes.TOUCH_CS:
			return update(state, { floating: { touched: { $set: true } } });
			break;

		case ActionTypes.CHANGE_CS_TITLE_BACK:
			return update(state, { floating: { title: { back: { $set: action[ 'func' ] } } } });
			break;

		case ActionTypes.CHANGE_CS_TITLE_POP:
			return update(state, { floating: { title: { pop: { $set: action[ 'func' ] } } } });
			break;

		case ActionTypes.CHANGE_CS_TAB_WIDTH:
			return update(state, { floating: { tab: { width: { $set: action[ 'width' ] } } } });
			break;

		case ActionTypes.CHANGE_CS_TAB_FOCUS:
			return update(state, { floating: { tab: { focus: { $set: Number(action[ 'index' ]) } } } });
			break;

		case ActionTypes.RESET_CS_CONTENT_HEIGHT:
			return update(state, { floating: { height: { $set: !!action[ 'height' ] ? (action[ 'height' ] + (50 + 40)) : initialState.floating[ 'height' ] } } });
			break;

		case ActionTypes.CHANGE_CS_CONTENT_HEIGHT:
			return update(state, { floating: { height: { $set: state.floating[ 'height' ] + action[ 'height' ] } } });
			break;

		case ActionTypes.UPDATE_CS_POP_ITEM:
			let popItemIndex = findPopItemIndex(state, action[ 'item' ]);

			switch (action[ 'mode' ]) {
				case CSTypes.REMOVE:
					return popItemIndex !== -1
						? update(state, { pop: { content: { items: { $splice: [ [ popItemIndex, 1 ] ] } } } })
						: state;
					break;

				case CSTypes.REPLACE:
					return popItemIndex !== -1
						? update(state, { pop: { content: { items: { [popItemIndex]: { $set: action[ 'item' ] } } } } })
						: state;
					break;

				default:
					return popItemIndex === -1
						? update(state, { pop: { content: { items: { $push: [ action[ 'item' ] ] } } } })
						: state;
					break;
			}
			break;

		case ActionTypes.UPDATE_CS_TALK_CONNECT:
			return update(state, { floating: { content: { talk: { connected: { $set: action[ 'connected' ] } } } } });
			break;

		case ActionTypes.TOUCH_CS_POP_ITEM:
			return update(state, { pop: { touched: { $set: action[ 'touched' ] } } });
			break;

		case ActionTypes.DRAG_CS_POP_ITEM:
			return update(state, { pop: { dragging: { $set: action[ 'dragging' ] } } });
			break;

		case ActionTypes.SET_CS_TOP_SCROLL_SHOW:
			return update(state, { topScroll: { show: { $set: action[ 'show' ] } } });
			break;

		case ActionTypes.DELETE_CS_QNA_POP_ITEMS:
			return update(state, { pop: { content: { items: { $set: getNonQNAPopItems(state) } } } });
			break;

		default:
			return state;
			break;
	}
}