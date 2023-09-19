import {INITIAL_VALUE} from "src/store/initialValue";
import {InitialValue} from "../../types/store/initialValue";

export const useStoreConfig = (set:any, get:any) => ({
    config : {
        ...INITIAL_VALUE.config,
    },
    setConfig : (args:any) => set(
        (state:InitialValue) => ({
            config : {
                ...state.config,
                ...args
            }
        })
    )
})