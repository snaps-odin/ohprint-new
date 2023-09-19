

import { PRODUCTS,PRODUCT_TOP_FIXED_NAV } from 'configs/index';
import { ActionTypes, ApiMethods } from 'constants/index';
import { ActionProduct } from 'actions/index';
import { requestAPI, requestJSON } from 'utils/api';
import { getDeepValue } from 'utils/json';
import { snakeToCamel } from 'utils/string';

export const getStoreProduct = (category, subCategory) => {
	return (dispatch, getState) => {
		let categoryName = (category || '').toUpperCase().replace(/-/g, '_');
		let subCategoryName = (subCategory || '').toUpperCase().replace(/-/g, '_');
		let fixed_nav_value = (PRODUCT_TOP_FIXED_NAV[ subCategoryName ] ? PRODUCT_TOP_FIXED_NAV[ subCategoryName ] : PRODUCT_TOP_FIXED_NAV[ categoryName ]);
		fixed_nav_value = (fixed_nav_value ? fixed_nav_value : PRODUCT_TOP_FIXED_NAV[ "DEFAULT" ]);

		return {
			common: PRODUCTS[ categoryName ][ 'COMMON' ],
			content: PRODUCTS[ categoryName ][ 'CONTENTS' ][ subCategoryName ],
			fixed_nav: fixed_nav_value
		}
	};
};

export const getStoreOptionTypes = (category, subCategory) => {
	let type;

	switch (`${category}`.toLowerCase()) {
		case 'sticker':
			switch (subCategory) {
				case 'circle':
					type = 'round';
					break;

				case 'rectangle':
					type = 'rectanguler';
					break;

				case 'square':
					type = 'square';
					break;

				case 'a-size':
					type = 'a_size';
					break;

				case 'free-size':
				case 'freeSize':
					type = 'freeSize';
					break;

				default:
					type = (subCategory || '').toLowerCase();
					break;
			}
			break;

		case 'card':
			switch (subCategory) {
				case '70x98':
				case '4x6':
				case '5x7':
					type = `card${subCategory}`.replace(/4x6/, '6x4').replace(/5x7/, '7x5');
					break;

				default:
					type = (subCategory || '').toLowerCase();
					break;
			}
			break;

		case 'accessory':
			switch (subCategory) {
				case 'leather-wallet':
					type = 'leatherBusinessCardWallet';
					break;

				case 'magnetic-case':
					type = 'businessCardCase';
					break;

				case 'stand':
					type = 'holderSubsidiary';
					break;

        case 'slide-zipperbag':
          type = 'slideZipperBag';
          break;

				default:
					type = snakeToCamel(subCategory);
					break;
			}
			break;

		default:
			type = subCategory.toLowerCase();
			break;
	}

	return type;
};

export const requestStore = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/store',
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestStoreFilter = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/store/filter',
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestStoreNavigation = (category, params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/store/${snakeToCamel(category)}/navigation`,
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const createStoreLike = (templateCode, productCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: `/store/like/${templateCode}/${productCode}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const deleteStoreLike = (templateCode, productCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.DELETE,
			url: `/store/like/${templateCode}/${productCode}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const createStoreCart = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: `/store/cart`,
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestStoreDesignDetail = (type, item, selectedIndex) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.POST,
			url: '/store/design/detail',
			params: {
				type,
				item,
				selectedIndex
			}
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	};
};

export const requestStorePrice = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/store/price',
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestStoreDefault = (category, subCategory) => {
	return (dispatch, getStore) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/store/${snakeToCamel(category)}/default`,
			params: {
				storeOptionType: getStoreOptionTypes(category, subCategory)
			}
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		})
	}
};

export const requestStoreOptions = (category, subCategory, projectCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/store/${snakeToCamel(category)}/option`,
			params: {
				projectCode,
				storeOptionType: getStoreOptionTypes(category, subCategory)
			}
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestStoreOptionSize = (category, subCategory, params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/store/${snakeToCamel(category)}/option/size`,
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestStoreOptionEnable = (category, subCategory, params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/store/${snakeToCamel(category)}/option/enable`,
			params: {
				...params,
				storeOptionType: getStoreOptionTypes(category, subCategory)
			}
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestStoreEssential = (category, subCategory, params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/store/${snakeToCamel(category)}/essential`,
			params: {
				...params,
				storeOptionType: getStoreOptionTypes(category, subCategory)
			}
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestStoreAccessory = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/store/accessory',
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		})
	}
};

export const requestStorePriceOption = (category, subCategory) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/store/${snakeToCamel(category)}/price/option`,
			params: {
				storeOptionType: getStoreOptionTypes(category, subCategory)
			}
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	};
};

export const requestStorePriceByCategory = (category, subCategory, params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/store/${snakeToCamel(category)}/price`,
			params: {
				...params,
				storeOptionType: getStoreOptionTypes(category, subCategory)
			}
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestStoreAccessoryOption = (category, subCategory) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: '/store/accessory/option'
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestStoreProductGalleryByProductCode = (category, subCategory, produceCode) => {
	return (dispatch, getState) => {
		let storeOptionType = getStoreOptionTypes(category, subCategory);

		return requestAPI({
			method: ApiMethods.GET,
			url: `/store/productGallery/${produceCode}/${storeOptionType}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestStoreProductGallery = (category, subCategory) => {
	return (dispatch, getState) => {
		let productGroupCode = dispatch(ActionProduct.getProductByCategory(category))[ 'value' ];
		let storeOptionType = getStoreOptionTypes(category, subCategory);

		return requestAPI({
			method: ApiMethods.GET,
			url: `/store/productGallery/${productGroupCode}/${storeOptionType}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestStoreOptionType = (productCode) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/store/${productCode}/storeOptionType`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestStoreApparelProduct = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/store/apparel/product`,
			params
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestStoreApparelProductOption = (params) => {
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/store/apparel/product/option`,
			params: params || {}
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestStoreApparelValidation = (category, subCategory) => {
	let storeOptionType = getStoreOptionTypes(category, subCategory);
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/store/apparel/${storeOptionType}/validation`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestStoreApparelProductByOptionType = (category, subCategory) => {
	let storeOptionType = getStoreOptionTypes(category, subCategory);
	return (dispatch, getState) => {
		return requestAPI({
			method: ApiMethods.GET,
			url: `/store/apparel/product/${storeOptionType}`
		}).then(result => {
			let { data } = result;

			return data;
		}).catch(error => {
			throw error;
		});
	}
};

export const requestStoreAccessoryOptionName = (productCode) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.GET,
      url: `/store/${productCode}/accessory`
    }).then(result => {
      let { data } = result;

      return data;
    }).catch(error => {
      throw error;
    });
  }
};

export const requestStoreProductName = (productCode) => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.GET,
      url: `/store/${productCode}/productName`
    }).then(result => {
      let { data } = result;

      return data;
    }).catch(error => {
      throw error;
    });
  }
};

export const requestStoreCalendarYearMonth = () => {
  return (dispatch, getState) => {
    return requestAPI({
      method: ApiMethods.GET,
      url: `/store/calendarDesk/yearMonth`
    })
      .then(result => {
        let { data } = result;

        return data;
      })
      .catch(error => {
        throw error;
      });
  };
};
