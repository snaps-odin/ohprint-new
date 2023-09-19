

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import config from './config';
import ui from './ui';
import cs from './cs';
import layer from './layer';
import user from './user';
import cart from './cart';
import order from './order';
import editor from './editor';
import bbs from './bbs';
import product from './product';
import log from './log';
import alarm from './alarm';
import qna from './qna';
import event from './event';

const reducers = combineReducers({
	config,
	ui,
	cs,
	layer,
	user,
	cart,
	order,
	editor,
	bbs,
	product,
	log,
	alarm,
  qna,
  event,
	form: formReducer
});

export default reducers;
