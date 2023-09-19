export interface InitialValue{
    config: object
    ui: {
        view: {
            width?: number | null
            height?: number | null
        },
        scroll: {
            targetY?: string | number| null
            easingType?: string | number| null
            owners?: Array<any>
        }
    },
    cs: {
        floating: {
            opened?: boolean
            touched?: boolean
            right?: string | number
            height?: string | number
            title: {
                back?: string | number | null
                pop?: string | number | null
            },
            tab: {
                focus?: string | number | null
                width?: string | number
            },
            content: {
                talk: {
                    connected?: false
                }
            }
        },
        pop: {
            touched?: boolean
            dragging?: boolean
            content: {
                items?: Array<any>
            }
        },
        topScroll: {
            show?: true
        }
    },
    layer: {
        timestamp?: string | number | null
        transparentMode?: boolean
        roundMode?: boolean
        contents: {
            type?: string | number | null
            options?: string | number | null
        },
        alert: {
            options?: string | number | null
        },
        loading?: false
    },
    user: {
        userId?:string
        loggedIn?:false
        fetching?:false
        fetchErrorMessage?:string|null
        token?:string
        userNo?:number
        userName?:string
        userLevel?:string
        snsType?:string
        pushYN?:string|null
        isResetRestStatus?:boolean
        isCouponIssue?:boolean
        cntrCode?:string
        email?:string
        phoneCell?:string
        phoneNumber?:string|number|null
        emailAgree?:boolean
        phoneAgree?:boolean
        userEmail?:string
        registrationDate?:string|null
        receiveEmailAgreeYN?:string
        userCellPhoneNumber?:string
        userPhoneNumber?:string|number|null
        receiveSMSAgreeYN?:string
        receiveConsultAgreeYN?:string
        userMoney?:number
    },
    cart: {
        list?: string | number | null
        badgeCount?: string | number | null
    },
    order: {
        code?: string | number | null
        offsetTimestamp?: string | number | null
        products?: string | number | null
        user?: string | number | null
        userHistories?: string | number | null
        userPayment?: string | number | null
        coupons?: string | number | null
        extraCoupons?: string | number | null
        deliveryMethods?: string | number | null
        deliveryAmountCheck?: boolean
        deliveryAmount?: string | number | null
        deliveryCoupons?: string | number | null
        lowestDiscountCoupons?: string | number | null
        useLowest?: true,
        paymentMethods?: string | number | null
        creditCards?: string | number | null
        creditCardQuotas?: string | number | null
    },
    editor: {
        data: {
            productCode?: string | number | null
            templateCode?: string | number | null
        },
        templateUseType?: string | number | null
    },
    bbs: {
        products?: string | number | null
    },
    product: {
        productGroups?: string | number | null
    },
    log: {
        usedHistory?: boolean
        usedConversion?: false
    },
    alarm: {
        alarmCount?: string | number
        qnaCount?: string | number
    },
    qna: {
        lastUpdateItem?: string | number | null
    },
    event: {
        eventList?: Array<any>
        isZeroDeal?: false
        eventStyle?: Array<any>
    },
    form?: object
}