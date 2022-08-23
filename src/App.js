import React, {useState} from 'react'
import SignIn from './Component/Sign/SignIn'
import SignUp from './Component/SignUp/SignUp'
import { BrowserRouter,Navigate, useNavigate } from 'react-router-dom'
import ROute from './Component/ROute'
import Swal from 'sweetalert2'
import { selectedCartItems, selectedWishlistItems } from './Redux/Actions/Actions'
import { useSelector, useDispatch } from 'react-redux'




function App() {

  const cartData = useSelector(state => state.cartItems.productData)
  const wishlistData = useSelector(state => state.wishlistItems.productData)
  const dispatch = useDispatch()


const[filterState, setfilterstate] = useState([])


console.log(filterState, "filtered state")


const handleWishlist = (item) => {
  if (item && wishlistData.indexOf(item) !== -1) return;
  dispatch({type:selectedWishlistItems, payload:[...wishlistData, item]})
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Item Added to wishlist',
    showConfirmButton: false,
    timer: 1500
  })
};

const handleCart = (item) => {
  if (item && cartData.indexOf(item) !== -1) return;
  dispatch({type:selectedCartItems, payload:[...cartData, item]})
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Item Added to Cart',
    showConfirmButton: false,
    timer: 1500
  })
};


  return (
    <>
    
   <BrowserRouter>
     <ROute  handleCart={handleCart} handleWishlist={handleWishlist} setfilterstate={setfilterstate} filterState={filterState} name={"raghav"} />
    </BrowserRouter>   
    
    </>
  )
}

export default App