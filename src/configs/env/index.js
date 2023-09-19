import {API_PATH, EDITOR_PATH} from "./fixed";
import {
  API_DEV,
  API_PRD,
  API_STG,
  API_TEMP,
  API_TEMP2,
  EDITOR_DEV,
  EDITOR_PRD,
  EDITOR_STG,
  EDITOR_TEMP, EDITOR_TEMP2
} from "./server-list";
import {apiMode} from "src/configs";

const API_SERVER = (apiMode === "etc") ? API_PATH : undefined;
const EDITOR_URL = (apiMode === "etc") ? EDITOR_PATH : undefined;

const util = {
  API_URL : () => {
    if(API_SERVER) return API_SERVER;

    switch (apiMode){
      case "dev": return API_DEV;
      case "stg": return API_STG;
      case "temp": return API_TEMP;
      case "temp2": return API_TEMP2;
      case "prd": return API_PRD;
      default:
        return API_PATH || API_STG
    }
  },

  EDITOR_URL : () => {
    if(EDITOR_URL) return EDITOR_URL;

    switch (apiMode){
      case "dev": return EDITOR_DEV;
      case "stg": return EDITOR_STG;
      case "temp": return EDITOR_TEMP;
      case "temp2": return EDITOR_TEMP2;
      case "prd": return EDITOR_PRD;
      default:
        return EDITOR_PATH || EDITOR_STG;
    }
  }

}


export const ENV = {
  API_URL : util.API_URL(),
  EDITOR_URL : util.EDITOR_URL()
}




