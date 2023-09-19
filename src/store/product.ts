import {INITIAL_VALUE} from "src/store/initialValue";
import {InitialValue} from "../../types/store/initialValue";
import {Product} from "../../types/store/product";

export const useStoreProduct = (set:any, get:any) => ({
    product : {
        ...INITIAL_VALUE.product,
    },
    setProduct : (args:Product) => set(
        (state:InitialValue) => ({
            product : {
                ...state.product,
                ...args
            }
        })
    )
})