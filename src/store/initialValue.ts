import {InitialValue} from "../../types/store/initialValue";

export const INITIAL_VALUE:InitialValue = {
    config: {},
    ui: {
        view: {
            width: null,
            height: null
        },
        scroll: {
            targetY: null,
            easingType: null,
            owners: []
        }
    },
    cs: {
        floating: {
            opened: false,
            touched: false,
            right: -100,
            height: 550,
            title: {
                back: null,
                pop: null
            },
            tab: {
                focus: null,
                width: 50
            },
            content: {
                talk: {
                    connected: false
                }
            }
        },
        pop: {
            touched: false,
            dragging: false,
            content: {
                items: []
            }
        },
        topScroll: {
            show: true
        }
    },
    layer: {
        timestamp: null,
        transparentMode: false,
        roundMode: false,
        contents: {
            type: null,
            options: null
        },
        alert: {
            options: null
        },
        loading: false
    },
    user: {
        userId:"",
        loggedIn:false,
        fetching:false,
        fetchErrorMessage:null,
        token:"",
        userNo:0,
        userName:"",
        userLevel:"",
        snsType:"",
        pushYN:null,
        isResetRestStatus:false,
        isCouponIssue:false,
        cntrCode:"KOR",
        email:"",
        phoneCell:"",
        phoneNumber:null,
        emailAgree:true,
        phoneAgree:true,
        userEmail:"",
        registrationDate:null,
        receiveEmailAgreeYN:"",
        userCellPhoneNumber:"",
        userPhoneNumber:null,
        receiveSMSAgreeYN:"",
        receiveConsultAgreeYN:"",
        userMoney:0
    },
    cart: {
        list: null,
        badgeCount: null
    },
    order: {
        code: null,
        offsetTimestamp: null,
        products: null,
        user: null,
        userHistories: null,
        userPayment: null,
        coupons: null,
        extraCoupons: null,
        deliveryMethods: null,
        deliveryAmountCheck: false,
        deliveryAmount: null,
        deliveryCoupons: null,
        lowestDiscountCoupons: null,
        useLowest: true,
        paymentMethods: null,
        creditCards: null,
        creditCardQuotas: null
    },
    editor: {
        data: {
            productCode: null,
            templateCode: null
        },
        templateUseType: 'ALL'
    },
    bbs: {
        products: null
    },
    product: {
        productGroups: null
    },
    log: {
        usedHistory: false,
        usedConversion: false
    },
    alarm: {
        alarmCount: 0,
        qnaCount: 0
    },
    qna: {
        lastUpdateItem: null
    },
    event: {
        eventList: [],
        isZeroDeal: false,
        eventStyle: []
    },
    form: {}
}