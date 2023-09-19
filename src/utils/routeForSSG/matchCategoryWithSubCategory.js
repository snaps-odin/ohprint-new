import {accessory, businessCard, card, sticker} from "utils/routeForSSG/subCategory";

export const matchCategoryWithSubCategory = (category) => {
  let subCategoryList = []

  switch (category) {
    case "sticker":
      subCategoryList = sticker
      break;

    case "business-card":
      subCategoryList = businessCard
      break;

    case "card":
      subCategoryList = card
      break;

    case "accessory":
      subCategoryList = accessory
      break;

    default :
      subCategoryList = ["defaults"]
  }

  return subCategoryList
}