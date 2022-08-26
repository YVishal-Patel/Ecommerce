import { wishlistItem } from "../Actions/Actions";

const initialState = {
    productData: [],
}

export const wishlistItems = (state=initialState, {type, payload}) =>{
    switch(type){
        case wishlistItem:
            return {...state, productData:payload}
    }
    return state;
}
