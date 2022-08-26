import { selectedCartItems, filterProductData } from "../Actions/Actions";

const initialState = {
    productData: [],
    filterData:[]
}

export const selectedCartsItems = (state = initialState, {type, payload}) =>{
    switch(type){
        case selectedCartItems:
            return {...state, productData:payload};
        case filterProductData:
            return {...state, filterData:payload}
    }
    return state;
}