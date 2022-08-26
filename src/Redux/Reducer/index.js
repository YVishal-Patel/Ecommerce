import { combineReducers } from "redux";
import { ProductApiData } from "./productReducer";
import { selectedItem } from "./ViewPage";
import { selectedCartsItems } from "./selectedCart";
import { wishlistItems } from "./wishlistData";
import { selectedProductPrice } from "./ProductPrice";
import { userSignIn } from "./UserSignIn";


const allReducer = combineReducers({
    productData:ProductApiData,
    singleItem:selectedItem,
    cartItems:selectedCartsItems,
    wishlist:wishlistItems,
    totalPrice:selectedProductPrice,
    auth_Sign_in: userSignIn
})

export default allReducer;