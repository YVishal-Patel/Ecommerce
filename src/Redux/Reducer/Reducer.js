import { ItemData } from "../Actions/Actions"
import { selectedProductItem,selectedCartItems, selectedWishlistItems, selectedCartPrice,totalPrice,filterProductData } from "../Actions/Actions"

const initialState = {
    productData: [],
    isLoading:true,
    error:'',
    productPrice:0,
    discountPrice:0,
    filterData:[]
}

export const ProductApiData = (state = initialState, {type, payload, isLoading, error}) =>{
    switch(type){
        case ItemData:
            return {...state, productData:payload, isLoading, error };
    }
    return state;
}


export const selectedItem = (state = initialState, {type, payload, isLoading, error}) =>{
    switch(type){
        case selectedProductItem:
            return {...state, productData:payload, isLoading, error };
    }
    return state;
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

export const selectedWishlistsItems = (state = initialState, {type, payload}) =>{
    switch(type){
        case selectedWishlistItems:
            return {...state, productData:payload}
    }
    return state;
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