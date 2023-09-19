import {INITIAL_VALUE} from "src/store/initialValue";
import {InitialValue} from "../../types/store/initialValue";
import {Event} from "../../types/store/event";

export const useStoreEvent = (set:any, get:any) => ({
    event : {
        ...INITIAL_VALUE.event,
    },
    setEvent : (args:Event) => set(
        (state:InitialValue) => ({
            event : {
                ...state.event,
                ...args
            }
        })
    )
})