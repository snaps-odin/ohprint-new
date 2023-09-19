import {INITIAL_VALUE} from "src/store/initialValue";
import {InitialValue} from "../../types/store/initialValue";
import {Ui} from "../../types/store/ui";

export const useStoreUi = (set:any, get:any) => ({
    ui : {
        ...INITIAL_VALUE.ui,
    },
    setUi : (args:Ui) => set(
        (state:InitialValue) => ({
            ui : {
                ...state.ui,
                ...args
            }
        })
    )
})