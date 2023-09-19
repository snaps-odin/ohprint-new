import {INITIAL_VALUE} from "src/store/initialValue";
import {InitialValue} from "../../types/store/initialValue";
import {Log} from "../../types/store/log";

export const useStoreLog = (set:any, get:any) => ({
    log : {
        ...INITIAL_VALUE.log,
    },
    setLog : (args:Log) => set(
        (state:InitialValue) => ({
            log : {
                ...state.log,
                ...args
            }
        })
    )
})