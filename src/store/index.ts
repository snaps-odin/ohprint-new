import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {useStoreUser} from "src/store/user";
import {isProduction} from "src/configs/properties";
import {useStoreUi} from "src/store/ui";
import {useStoreConfig} from "src/store/config";
import {useStoreLog} from "src/store/log";
import {useStoreProduct} from "src/store/product";
import {useStoreEvent} from "src/store/event";
import {useStoreCart} from "src/store/cart";
import {useStoreCs} from "src/store/cs";


const MergeStore = (set:any, get:any) => {
    return ({
        ...useStoreUser(set, get),
        ...useStoreUi(set, get),
        ...useStoreConfig(set, get),
        ...useStoreLog(set, get),
        ...useStoreProduct(set, get),
        ...useStoreEvent(set, get),
        ...useStoreCart(set, get),
        ...useStoreCs(set, get)
    });
};
//export const zStore = create<any>()(isProduction ? MergeStore : devtools(MergeStore))