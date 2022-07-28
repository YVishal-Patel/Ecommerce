import React, {useState} from 'react'
import './SignUp/SignUp.css'
import { Link } from 'react-router-dom'
import './Responsive.css'

function Header({cartL}) {


  return (
      <>
      <nav class="navbar navbar-expand-lg main-div">
  <div class="container-fluid">
    <Link class="  small-logo" to="/">Brain Inventory</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse  " id="navbarSupportedContent">
      <div className="row w-100 top-header">
        <div className="col-3 top-header-div">
          <input class=" w-75" type="text" placeholder='search' />
          <i class="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
        <div className="col-7 d-flex justify-content-center">
          <div className="logo-div">
          <Link class="navbar-brand" to="/"><span> Brain Inventory </span></Link>
          </div>
        </div>
        <div className="col-2 icons-header-div d-flex justify-content-center">

       <svg xmlns="http://www.w3.org/2000/svg" class="user-icon1 user-icon " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" class="user-icon1 user-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>

            <Link to="/card">
          <svg xmlns="http://www.w3.org/2000/svg" class="user-icon1 user-iconed" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>
  </Link>
          <span class="badge badgeData">{cartL}</span>

        </div>
      </div>
      <div className="container d-flex justify-content-center  mt-3 d-flex w-100">
        <ul className="d-flex justify-content-center">
          <li className='list'><Link className='header-data'  to='#'> New Arrival</Link></li>
          <li  className='list'><Link className='header-data' to='#'>Sale</Link></li>
          <li  className='list'><Link className='header-data' to='#'>Clothing</Link></li>
          <li  className='list'><Link className='header-data' to='#'>Dresses</Link></li>
          <li  className='list'><Link className='header-data' to='#'>Toys</Link></li>
          <li  className='list'><Link className='header-data' to='#'>Shoes</Link></li>
          <li  className='list'><Link className='header-data' to='#'>Accessories</Link></li>
          <li  className='list'><Link className='header-data' to='#'>Beauty</Link></li>
          <li   className='list'><Link className='header-data' to='#'>Watches</Link></li>
          <li  className='list'><Link className='header-data' to='#'>Electronics</Link></li> 
        </ul>
      </div>
    </div>
  </div>
</nav>



{/* ------------------------------ For Smaller Screen -------------------------------------------  */}

<nav class="navbar navbar-expand-lg main-div1">
  <div class="container-fluid">
    <Link class=" navbar-brand small-logo" to="/">Brain Inventory</Link>
    <i class="fa-solid fa-bars navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      // <span class="navbar-toggler-icon"></span>
      ></i>
    <div class="collapse navbar-collapse  " id="navbarSupportedContent">
      <div className="row w-100 top-header">
        <div className="col-10 top-header-div">
          <input class=" w-100 search-field" type="text" placeholder='search' />
          <i class="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
        {/* <div className="col-1"></div> */}
        <div className="col-2 icons-header-div d-flex justify-content-center">

       <svg xmlns="http://www.w3.org/2000/svg" class="user-icon1 user-icon " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" class="user-icon1 user-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>

            <Link to="/card">
          <svg xmlns="http://www.w3.org/2000/svg" class="user-icon1 user-iconed" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>
  </Link>
          <span class="badge badgeData">{cartL}</span>

        </div>
      </div>
      <div className="container-header-data d-flex justify-content-center  mt-3 d-flex w-100">
        <ul className="d-flex justify-content-center container-header-data">
          <li className='list'><Link className='header-data'  to='#'> New Arrival</Link></li>
          <li  className='list'><Link className='header-data' to='#'>Sale</Link></li>
          <li  className='list'><Link className='header-data' to='#'>Clothing</Link></li>
          <li  className='list'><Link className='header-data' to='#'>Dresses</Link></li>
          <li  className='list'><Link className='header-data' to='#'>Toys</Link></li>
          <li  className='list'><Link className='header-data' to='#'>Shoes</Link></li>
          <li  className='list'><Link className='header-data' to='#'>Accessories</Link></li>
          <li  className='list'><Link className='header-data' to='#'>Beauty</Link></li>
          <li   className='list'><Link className='header-data' to='#'>Watches</Link></li>
          <li  className='list'><Link className='header-data' to='#'>Electronics</Link></li> 
        </ul>
      </div>
    </div>
  </div>
</nav>
      </>
  )
}

export default Header