export interface User{
    userId?:string | null
    loggedIn?:boolean | null
    fetching?:boolean | null
    fetchErrorMessage?:string | null
}