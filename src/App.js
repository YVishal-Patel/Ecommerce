import React, {useState} from 'react'
import SignIn from './Component/Sign/SignIn'
import SignUp from './Component/SignUp/SignUp'
import { BrowserRouter,Navigate, useNavigate } from 'react-router-dom'
import ROute from './Component/ROute'
import CalculateValue from './Component/CalculateValue'
import Swal from 'sweetalert2'
import newArr from './Component/Data'



function App() {
  const [cart, setCart] = useState([])
const [wishlist, Setwishlist] = useState([])

const[filterState, setfilterstate] = useState([])


console.log(filterState)


const handleWishlist = (item) => {
  if (wishlist.indexOf(item) !== -1) return;
  Setwishlist([...wishlist, item]);
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Item Added to wishlist',
    showConfirmButton: false,
    timer: 1500
  })
};
// console.log(wishlist)

const handleCart = (item) => {
  if (cart.indexOf(item) !== -1) return;
  setCart([...cart, item]);
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
     <ROute cart={cart} setCart={setCart} wishlist={wishlist} handleCart={handleCart} handleWishlist={handleWishlist} Setwishlist={Setwishlist} cartL ={cart.length} setfilterstate={setfilterstate} filterState={filterState} name={"raghav"} />
    </BrowserRouter>  
    </>
  )
}

export default App