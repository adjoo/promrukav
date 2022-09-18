import {authAPI} from "./api";

export const store = {
    _state: {
        auth: {
            isAuth: false,
            login: '',
            email: '',
        }
    },
    _subscriber(s: any) {
        console.log('no-subscribers')
    }, //subscribed function
    subscribe(observer: any) {
        this._subscriber = observer
    }, //subscribe function to store
    dispatch(action: any) {

        this._state = authReducer(this._state, action) //all reducers

        this._subscriber(this._state)// call subscriber (rerender page)
    }
}
export type AppStateInterface = typeof store._state


const authReducer = (state: AppStateInterface, action: any): AppStateInterface => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            const {login, email} = action.payload
            return {
                ...state,
                auth: {isAuth: true, login, email}
            }
            break;
        }
        case 'DELETE_USER_DATA': {
            return {
                ...state,
                auth: {isAuth: false, login: '', email: ''}
            }
            break;
        }
        default:
            return state
    }
}


export const actions = {
    setUserData: (login: string, email: string)=> {
        return ({type: 'SET_USER_DATA', payload: {login, email}}) as const
    },
    deleteUserData: () => {
        return ({type: 'DELETE_USER_DATA', payload: {}}) as const
    },
}

export const asyncActions = {

    getAuthUserData:  async () => {
        try{
            const response = await authAPI.getMe()
            const userData = response.data
            store.dispatch(actions.setUserData(userData.login, userData.email))
            return
        } catch(e){
            console.log(e)
        }
    },
    login: async (userLogin: string, userPassword: string) => {
        try{
            const responseLogin = await authAPI.logIn(userLogin,userPassword)
            await asyncActions.getAuthUserData()
            return
        } catch(e){
            console.log(e)
        }
    },
    logout: async () => {
        try{
            await authAPI.logOut()
            store.dispatch(actions.deleteUserData())
            return
        } catch(e){
            console.log(e)
        }

    }



}
