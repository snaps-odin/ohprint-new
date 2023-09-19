

import update from 'react-addons-update';
import { ActionTypes } from 'constants/index';

const initialState = {
	list: null,
	badgeCount: null
};

const findItemIndex = (state, item) => {
	let { projectCode } = item;
	let listName = null;
	let itemIndex = -1;

	[ 'webCartList' ].map((name, index) => {
		if (itemIndex < 0) {
			listName = name;
			itemIndex = state.list[ name ].findIndex((item, index) => {
				return String(item[ 'projectCode' ]) === String(projectCode);
			})
		}
	});

	return { listName, itemIndex }
};

const searchCartItem = (action) => {
  const { keyword, list : { webCartList }, searchType } = action;
  let searchList = null;

    if(keyword && searchType !== 'null'){
      searchList = (webCartList || []).filter((item)=>(item.projectName).indexOf(keyword) !== -1);
      searchList = (searchList || []).filter((item)=>!!(item.productGroupCode || '').match(/701|702|703|704|705|706|707/) ? searchType === "어패럴" :  item.productGroupName === searchType);

    }else{
      searchList = (webCartList || []).filter((item)=>(item.projectName).indexOf(keyword) !== -1);
    }

    if(!keyword && searchType !== 'null'){
      searchList = (webCartList || []).filter((item)=> {
        let isApparel = !!(item.productGroupCode || '').match(/701|702|703|704|705|706|707/);

        return (isApparel ? searchType === "어패럴" :  item.productGroupName === searchType)
      });
    }

  return {webCartList : (searchList || []).length > 0 ? searchList : []}
}

const searchCartType = (list) => {
  let searchType = new Set();

  //'productName' : 'productGroupName'


  //어패럴 productName
  //아니면 productGroupName
  //productCode

  (list.webCartList || []).map((item)=>{
    let isApparel = !!(item.productGroupCode || '').match(/701|702|703|704|705|706|707/);
    searchType.add(isApparel ? "어패럴" : item.productGroupName);
  })


  let res = Array.from(searchType).sort();

  return (res || []).reduce((target,item,idx)=>{
    target.push({label : item, value : item})
    return target;
  },[{label:"전체",value:'null'}])


}



export default function cart(state = initialState, action) {
	let { type } = action;

	switch (type) {
		case ActionTypes.RESET_CART:
			return update(state, { list: { $set: null } });
			break;

    case ActionTypes.SEARCH_CART:
      let list = searchCartItem(action);
      return update(state, { list: { $set: list }});

		case ActionTypes.UPDATE_CART:
			return update(state, { list: { $set: action[ 'list' ] }, searchType : { $set: searchCartType(action[ 'list' ]) } });
			break;

		case ActionTypes.UPDATE_CART_COUNT:
			return update(state, { badgeCount: { $set: action[ 'count' ] } });
			break;

		case ActionTypes.UPDATE_CART_ITEM:
			let { listName, itemIndex } = findItemIndex(state, action[ 'item' ]);

			switch (action[ 'mode' ]) {
				case 'DELETE':
					return update(state, { list: { [listName]: { $splice: [ [ itemIndex, 1 ] ] } } });
					break;

				default:
					return update(state, { list: { [listName]: { [itemIndex]: { $set: action[ 'item' ] } } } });
					break;
			}
			break;

		default:
			return state;
			break;
	}
}
