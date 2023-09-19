

import update from 'react-addons-update';

import { ActionTypes } from 'constants/index';
import {forEach} from "react-bootstrap/ElementChildren";

const initialState = {
	data: {
		productCode: null,
		templateCode: null
	},
	templateUseType: "ALL"
};

const nullFilter = (data) => {
  let tempData = Object.assign({}, data, {});
  let keys = Object.keys(tempData);

  return (keys || []).reduce((target,item,idx)=>{


    let checkCalendarStartData = (item === "calendarStartDate" && tempData[item] === "000000");

    (tempData[item] && !checkCalendarStartData) && (target[item] = tempData[item])

    return target;
  },{});
}

export default function editor(state = initialState, action) {
	let { type } = action;

	switch (type) {
		case ActionTypes.UPDATE_EDITOR_PARAMS:
			return update(state, {
				data: { $set: nullFilter(action['data']) },
				templateUseType: { $set: action[ 'templateUseType' ] }
			});
			break;

		case ActionTypes.RESET_EDITOR_PARAMS:
			return update(initialState, { templateUseType: { $set: state.templateUseType } });
			break;

    case ActionTypes.UPDATE_GA_PARAMS:
      return update(state, {
        ga: { $set: action['data'] }
      });
      break;

		default:
			return state;
			break;
	}
}
