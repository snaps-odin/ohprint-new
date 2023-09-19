import {INITIAL_VALUE} from "src/store/initialValue";
import {InitialValue} from "../../types/store/initialValue";
import {Cart} from "../../types/store/cart";

export const useStoreCart = (set:any, get:any) => ({
    cart : {
        ...INITIAL_VALUE.cart,
    },
    setCart : (args:Cart) => set(
        (state:InitialValue) => ({
            cart : {
                ...state.cart,
                ...args
            }
        })
    )
})