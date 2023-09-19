export interface Product{
    productGroups : Array<{
        keyName:string
        category:string
        subCategory:string
        label:string
        value:string
        attr:string
        pieces:any
        options:any
    }>
}