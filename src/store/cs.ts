import {INITIAL_VALUE} from "src/store/initialValue";
import {InitialValue} from "../../types/store/initialValue";
import {Cs} from "../../types/store/cs";

export const useStoreCs = (set:any, get:any) => ({
    cs : {
        ...INITIAL_VALUE.cs,
    },
    setCs : (args:Cs) => set(
        (state:InitialValue) => ({
            cs : {
                ...state.cs,
                ...args
            }
        })
    )
})