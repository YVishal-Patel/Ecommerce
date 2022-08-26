import { selectedProductItem,selectedProductImg } from "../Actions/Actions";

const initialState1 = {
    productData: [],
    isLoading:true,
    error:'',
    productImg:[]
}

export const selectedItem = (state = initialState1, {type, payload, isLoading, error}) =>{
    switch(type){
        case selectedProductImg:
            return {...state, productImg:payload};
        case selectedProductItem:
            return {...state, productData:payload, isLoading, error };
    }
    return state;
}