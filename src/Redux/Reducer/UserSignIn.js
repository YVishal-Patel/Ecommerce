import { userSignin, countryAuthData } from "../Actions/Actions";

const initialState = {
    AuthData:[]
}

export const userSignIn = (state=initialState, {type, payload})=>{
    switch(type){
        case userSignin:
            return {...state, AuthData:payload}
    }
    return state;
}