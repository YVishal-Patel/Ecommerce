import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import ViewPage from './ViewPage'
import Header from './Header'
import SignUp from './SignUp/SignUp'
import Edit from './Edit'
import Card from './Card'


function ROute({cart, setCart, handleCart, handleWishlist,cartL }) {
  return (
      <>
      <Header cartL={cartL} />
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/viewpage/:id' element={<ViewPage handleCart={handleCart}  handleWishlist={handleWishlist} />}/>
          <Route path='/sign-up' element={<SignUp />} />
          <Route path="/edit/:id"  element={<Edit/>} />
          <Route path="/card"  element={<Card cart={cart} setCart={setCart} handleCart={handleCart}  handleWishlist={handleWishlist} />} />


      </Routes>
      </>
  )
}

export default ROute