

import { LayerTypes } from 'constants/index';
import { ActionLayer } from 'actions/index';

const options = [
	{ label: '형태', keyName: 'shapeName' },
	{ label: '사이즈', keyName: 'sizeName' },
	{ label: '용지', keyName: 'paperName' },
	{ label: '무게', keyName: 'weightName' },
	{ label: '효과', keyName: 'effectName' },
	{ label: '인쇄 방식', keyName: 'printingMethodName' },
	{ label: '색상', keyName: 'colorName' },
	{ label: '부착면', keyName: 'attachSideName' },
	{ label: '소재', keyName: 'materialName' },
	{ label: '마감', keyName: 'finishName' },
	{ label: '거치대 및 마감', keyName: 'holderFinishName' },
	{ label: '로프길이', keyName: 'ropeLength' },
	{ label: '광택', keyName: 'glossName' },
	{ label: '벽걸이', keyName: 'wallHangingName' },
	{ label: '거치 방식', keyName: 'holderTypeName' },
	{ label: '프레임', keyName: 'frameColorName' },
	{ label: '칼선', keyName: 'cuttingMethodName' },
	{ label: '코팅', keyName: 'coatingName' },
	{ label: '모서리', keyName: 'frameName' },
	{ label: '수량', keyName: 'quantity' },
	{ label: '각인', keyName: 'engraveText' },
	{ label: '배너사이즈', keyName: 'bannerSize' },
	{ label: '유형', keyName: 'typeName' },
	{ label: '두께', keyName: 'paperThickness' }
];

export const getHardOptions = () => {
  return options;
}


export const getTemplateOptions = (data) => {
	return (dispatch, getState) => {
	  let newOptions = [];
		options.reduce((target, item) => {
				let { label, keyName } = item;

				(data && data[ keyName ]) && newOptions.push({
					label,
					value: ((keyName || '').match(/quantity/i))
						? `${data[ keyName ]}${data[ 'productUnitName' ] || '개'}`
						: data[ keyName ]
				});

				return target;
			}, Number(data[ 'designCount' ] || 0) > 0
				? [ { label: '디자인', value: `${data[ 'designCount' ]}` } ]
				: []
		);

    for(let i=1; i<6; i++){
      if(data['optionViewTitle'+i]){
        let item = {label:data['optionViewTitle'+i], value:data['optionViewText'+i]};
        newOptions.push(item);
      }
    }

    return newOptions;
	}
};

export const getTemplateSpec = (data) => {
	return (dispatch, getState) => {
    let newOptions = [];

      options.reduce((target, item) => {
          let { label, keyName } = item;

          (data && data[ keyName ] && !keyName.match(/shapeName|sizeName/)) &&
          newOptions.push({
            label,
            value: ((keyName || '').match(/quantity/i))
              ? `${data[ keyName ]}${data[ 'productUnitName' ] || '개'}`
              : data[ keyName ]
          });

          return target;
        }, []
      )

    for(let i=1; i<6; i++){
      if(data['optionViewTitle'+i]){
        let item = {label:data['optionViewTitle'+i], value:data['optionViewText'+i]};
        newOptions.push(item);
      }
    }

    return newOptions;
	}
};

export const getTemplateTitle = (data) => {
	return (dispatch, getState) => {
	  let optionsList = options.concat(
      { label: '디자인', keyName: 'designCount' },
      { label: '캘린더기간', keyName:  'calendarViewDate'}
    ).reduce((target, item) => {
        let { keyName } = item;

        (data && data[ keyName ] && !!keyName.match(/shapeName|sizeName|designCount|calendarViewDate/)) &&
        target.push(
          Object.is(keyName, 'designCount') && Number(data[ 'designCount' ] || 0) > 0
            ? `${data[ keyName ]}가지 디자인`
            : data[ keyName ]
        );


        return target;
      }, []).join(' / ')

		return optionsList
	}
};

export const executeAfterUserLogin = () => {
	return (dispatch, getState) => {
		let { user: { loggedIn } } = getState();

		return new Promise((resolve, reject) => {
			!loggedIn
				?
				dispatch(ActionLayer.openContentsLayer(LayerTypes.LOGIN, {
					redirect: () => resolve(),
					cancel: () => reject()
				}))
				:
				resolve();
		})
	}
};
