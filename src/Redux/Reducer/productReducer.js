import { ItemData } from "../Actions/Actions"
import { selectedProductItem,selectedCartItems, selectedWishlistItems, selectedCartPrice,totalPrice,filterProductData, wishlistItem, userSignUp } from "../Actions/Actions"

const initialState = {
    productData: [],
    isLoading:true,
    error:'',
}

export const ProductApiData = (state = initialState, {type, payload, isLoading, error}) =>{
    switch(type){
        case ItemData:
            return {...state, productData:payload, isLoading, error };
    }
    return state;
}
