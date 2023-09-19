export interface Cs{
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
    }
}