import React, {useState, useEffect} from 'react'
import newArr from './Data'
import './SignUp/SignUp.css'
import axios from 'axios'
import './Responsive.css'
import { Link,Navigate, NavLink, Route, useNavigate } 
from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import Wishlist from './Wishlist/Wishlist'


let handleData = [
  {
  navHome:"Home",
  navroute:'home',
  },
    {
      navHome:"Sale",
      navroute:"sale",  
  },
  {
    navHome:"Clothing",
    navroute:"clothing",  
},
{
  navHome:"Dresses",
  navroute:"dresses",  
},
{
  navHome:"Toys",
  navroute:"toys",  
},
{
  navHome:"Shoes",
  navroute:"shoes",  
},
{
  navHome:"Accessories",
  navroute:"accessories",  
},
{
  navHome:"Beauty",
  navroute:"beauty",  
},
{
  navHome:"Electronics",
  navroute:"electronics",  
},
{
  navHome:"Wishlist",
  navroute:"wishlist",  
},

  ]
  

function Header({cartL,setfilterstate,filterState}) {

  const allProducts = useSelector(state => state.productData.productData)
  const cartData = useSelector(state => state.cartItems.productData)
  const wishlistData = useSelector(state => state.wishlist.productData)
  const dispatch = useDispatch()

const [ArrayData , setArrayDatas] = useState()

const [filterData, setFilterDatas] = useState()
const[route, setRoute]=  useState(handleData)
const [ state, setState] = useState()

const navigate = useNavigate()

useEffect(()=>{
  fetchData()
},[])

const fetchData = async () =>{
 await(axios.get("http://localhost:8000/posts"))
 .then((res)=>{
  setArrayDatas(res.data)
  setFilterDatas(res.data)
})
}

const handleState = (e) =>{
  if(e.target.value == ''){
    setArrayDatas(filterData)
  }else{
    const filterValue = filterData.filter((item)=> item.productName.toLowerCase().includes(e.target.value.toLowerCase()) )
    setArrayDatas(filterValue)
    setfilterstate(ArrayData)
  }
  setState(e.target.value)
}


const handleRoute = (nav)=>{
  navigate(`/${nav}`);
}



  return (
    <>

      <nav className="navbar navbar-expand-lg main-div">
  <div className="container-fluid">
    <NavLink className="  small-logo" to="/">Brain Inventory</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse  header-navbar-collapse" id="navbarSupportedContent">
      <div className="row w-100 top-header">
        <div className="col-3 top-header-div">
          <input className=" w-75" type="text" placeholder='search' value={state} onChange={e => handleState(e)} />
          <NavLink  to="/search"> <i  className="fa-solid fa-magnifying-glass search-icon"></i></NavLink>
        </div>
        <div className="col-7 d-flex justify-content-center">
          <div className="logo-div">
            <span className="navbar-brand"> Brain Inventory </span>
          </div>
        </div>
        <div className="col-2 icons-header-div d-flex justify-content-center">

       <svg xmlns="http://www.w3.org/2000/svg" className="user-icon1 user-icon " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>

<NavLink to='/wishlist'>
<svg xmlns="http://www.w3.org/2000/svg" className="user-icon1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
</NavLink>
<span className="badge badgeData1">{wishlistData.length > 0 && wishlistData.length}</span>

            <NavLink to='/cart'>
          <svg xmlns="http://www.w3.org/2000/svg" className="user-icon1 user-iconed" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>
</NavLink>
          <span className="badge badgeData">{cartData.length > 0 && cartData.length}</span>

        </div>
      </div>
        <ul className="d-flex justify-content-center my-2">
         {route.map((item, id)=>{
           return <li><NavLink  to={`/${item.navroute && item.navroute }`} key={id}  onClick={()=>handleRoute(item.navroute)}  className=' header-data ' > {item.navHome}</NavLink></li> 
        })}
        </ul>
    </div>
  </div>
</nav>



{/* ------------------------------ For Smaller Screen -------------------------------------------  */}

<nav className="navbar navbar-expand-lg main-div1">
  <div className="container-fluid">
    
    <span className=" navbar-brand small-logo"> <i className="fa-solid fa-bars navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      > </i> <small> Brain Inventory</small> </span>

      <div className='logos' >
        <NavLink to="/wishlist">
      <svg style={{marginTop:'-0.13rem'}} xmlns="http://www.w3.org/2000/svg" className="user-icon1 user-iconed heart-small" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
</NavLink>
          <NavLink to="/cart">
          <svg  style={{marginTop:"-0.2rem"}} xmlns="http://www.w3.org/2000/svg" className="user-icon1 user-iconed" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" style={{color:"#fff"}} />
</svg>
</NavLink>
</div>
<span className="badge badgeData">{cartL}</span>
  
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <div className="row w-100 top-header">
        <div className="col-10 top-header-div">
          <input className=" w-100 search-field" type="text" placeholder='search'  value={state} onChange={e => handleState(e)} />
          <NavLink  to="/search"> <i  className="fa-solid fa-magnifying-glass search-icon"></i></NavLink>
        </div>
        <div className="col-2 icons-header-div d-flex justify-content-center">

       <svg xmlns="http://www.w3.org/2000/svg" className="user-icon1 user-icon " fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" className="user-icon1 user-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
           {/* <NavLink to="/cart">
          <svg  xmlns="http://www.w3.org/2000/svg" className="user-icon1 user-iconed" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" style={{color:"#fff"}} />
</svg>
</NavLink> */}
  
          

        </div>
      </div>
      <div className="container-header-data d-flex justify-content-center align-items-center  mt-3  w-100">
         <ul className="d-flex justify-content-center flex-column align-items-center small-scr-data  my-2" >
         {route.map((item)=>{
           return <li className="navbar-toggler list" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>handleRoute(item.navroute)} ><NavLink className=' header-data ' to='/'><span className=""> {item.navHome} </span></NavLink></li> 
        })}
        </ul>
      </div>
    </div>
  </div>
</nav>
      </>
  )
}

export default Header





// function Header() {
//   const [routes, setRoutes] = useState(handleData)

//   const navigate = useNavigate()


//   const handleRoute = (nav)=>{
//     console.log(nav);
//     navigate(`/${nav}`);
//   }
//   return (
//     <>
//    { routes.map((item)=>{
//       return <div onClick={() => handleRoute(item.navroute) }>
//         {console.log(handleRoute)}
//      <p>{item.navHome} </p>
//      <p>{item.navroute}</p>
//       </div>
//     })
//     }
//     </>
//   )
// }
// export default Header