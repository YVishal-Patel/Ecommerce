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
import NoMatch from './NoMatch'
import Electronics from './Electronics'
import Dresses from './Dresses'





function ROute({ handleCart, handleWishlist,  handleState,filterFunc,setfilterstate,filterState }) {
  
  return (
      <>
      <Header  handleState={handleState} filterFunc={filterFunc} setfilterstate={setfilterstate} filterState={filterState} />
      <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/viewpage/:id' element={<ViewPage handleCart={handleCart}  handleWishlist={handleWishlist} filterState={filterState} />}/>
          <Route path='/sign-up' element={<SignUp />} />
          <Route path="/edit/:id"  element={<Edit/>} />
          <Route path="/cart"  element={<Card  handleCart={handleCart}  handleWishlist={handleWishlist} />} />
          <Route  path="/wishlist" element={<Wishlist  handleWishlist={handleWishlist}  Card />} />
          <Route  path="/search" element={<Search filterState={filterState} setfilterstate={setfilterstate} value={true} />}   />
          <Route path='/sale' element={<Sale />} />
          <Route path='/shoes:data' element={<Shoes />} />
          <Route path='/sale' element={<Sale />} />
          <Route path='/wathces' element={<Watches />} />
          <Route path='/clothing' element={<Clothing />} />
          <Route path="/Beauty" element={<Beauty />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/dresses" element={<Dresses />} />
          <Route path='*' element={<NoMatch />}  />

      </Routes>

      {console.log(filterState)}
      </>
  )
}

export default ROute