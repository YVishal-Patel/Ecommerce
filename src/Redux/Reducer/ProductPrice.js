import { selectedCartPrice, totalPrice } from "../Actions/Actions";

const initialState = {
    productPrice:0,
    discountPrice:0,
}


export const selectedProductPrice = (state = initialState, {type, payload}) =>{
    switch(type){
        case selectedCartPrice:
            return {...state, productPrice:payload};
            case totalPrice:
            return {...state, discountPrice:payload }
    }
    return state;
}