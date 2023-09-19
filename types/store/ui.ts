export interface Ui{
    view : {
        width?: number
        height?: number
    },
    scroll : {
        targetY?: string | number | null
        easingType?: string | number | null
        owners?: Array<any>
    }
}