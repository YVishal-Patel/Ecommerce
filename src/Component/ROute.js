import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ViewPage from './ViewPage'
import Header from './Header'
import SignUp from './SignUp/SignUp'
import Edit from './Edit'
import Card from './Card'
import Wishlist from './Wishlist/Wishlist'
import Search from './Search/Search'
import Sale from './Sale'
import Shoes from './Shoes'
import Beauty from './Beauty'
import Accessories from './Accessories'
import Toys from './Toys'
import Clothing from './Clothing'
import Watches from './Watches'





function ROute({cart, setCart, handleCart, handleWishlist,cartL, Setwishlist, wishlist, handleState,filterFunc,setfilterstate,filterState }) {
  
  return (
      <>
      <Header cartL={cartL} handleState={handleState} filterFunc={filterFunc} setfilterstate={setfilterstate} filterState={filterState} />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/viewpage/:id' element={<ViewPage handleCart={handleCart}  handleWishlist={handleWishlist} filterState={filterState} />}/>
          <Route path='/sign-up' element={<SignUp />} />
          <Route path="/edit/:id"  element={<Edit/>} />
          <Route path="/cart"  element={<Card cart={cart} setCart={setCart} handleCart={handleCart}  handleWishlist={handleWishlist} />} />
          <Route  path="/wishlist" element={<Wishlist Setwishlist={Setwishlist} handleWishlist={handleWishlist} wishlist={wishlist} Card cart={cart} setCart={setCart}/>} />
          <Route  path="/search" element={<Search filterState={filterState} setfilterstate={setfilterstate} value={true} />}   />
          <Route path='/sale' element={<Sale />} />
          <Route path='/shoes' element={<Shoes />} />
          <Route path='/sale' element={<Sale />} />
          <Route path='/wathces' element={<Watches />} />
          <Route path='/clothing' element={<Clothing />} />
          <Route path="/Beauty" element={<Beauty />} />
          <Route path="/acccessories" element={<Accessories />} />
          <Route path="/toys" element={<Toys />} />

      </Routes>

      {console.log(filterState)}
      </>
  )
}

export default ROute