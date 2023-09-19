import {INITIAL_VALUE} from "src/store/initialValue";
import {InitialValue} from "../../types/store/initialValue";
import {User} from "../../types/store/user";

export const useStoreUser = (set:any, get:any) => ({
    user : {
        ...INITIAL_VALUE.user,
    },
    setUser : (args:User) => set(
        (state:InitialValue) => ({
            user : {
                ...state.user,
                ...args
            }
        })
    )
})