export interface BannerInfo{
    name?: string
    type?: string
    images?: string
    link?: string
    rateBeforeLogin?: number
    rateAfterLogin?: number
    zeroDealHide?: boolean
    [key: string]: any;
}