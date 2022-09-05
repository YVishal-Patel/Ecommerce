import React, {useState} from 'react'
import SignIn from './Component/Sign/SignIn'
import SignUp from './Component/SignUp/SignUp'
import { BrowserRouter,Navigate, useNavigate } from 'react-router-dom'
import ROute from './Component/ROute'
import Swal from 'sweetalert2'
import { selectedCartItems, wishlistItem } from './Redux/Actions/Actions'
import { useSelector, useDispatch } from 'react-redux'
import DemoAction from './Component/DemoAction'
import DemoClass from './DemoClass'
import JustLike from './Component/JustLike'




function App() {

  const cartData = useSelector(state => state.cartItems.productData)
  const wishlistData = useSelector(state => state.wishlist.productData)
  const dispatch = useDispatch()


const[filterState, setfilterstate] = useState([])





const handleWishlist = (item) => {
  if (item && wishlistData.indexOf(item) !== -1) return;
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Item Added to wishlist',
      showConfirmButton: false,
      timer: 1500
    })
  let wishlistDatas = [...wishlistData, item]
  const unique = [...new Map(wishlistDatas.map((m) => [m.id, m])).values()];
  dispatch({type:wishlistItem, payload:unique})
 
};

const handleCart = (item) => {
  if (item && cartData.indexOf(item) !== -1) return;
  let data = [...cartData, item] 
  const unique = [...new Map(data.map((m) => [m.id, m])).values()];
  dispatch({type:selectedCartItems, payload:unique})
};


  return (
    <>
    
   <BrowserRouter>
     {/* <ROute  handleCart={handleCart} handleWishlist={handleWishlist} setfilterstate={setfilterstate} filterState={filterState} name={"raghav"} /> */}
      <DemoClass /> 
     {/* <JustLike /> */}
    </BrowserRouter>   
    
    </>
  )
}

export default App