import { combineReducers } from "redux";
import { ProductApiData,selectedItem,selectedCartsItems, selectedWishlistsItems, selectedProductPrice } from "./Reducer";

const allReducer = combineReducers({
    productData:ProductApiData,
    singleItem:selectedItem,
    cartItems:selectedCartsItems,
    wishlistItems:selectedWishlistsItems,
    totalPrice:selectedProductPrice
})

export default allReducer;