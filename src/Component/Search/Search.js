import React, {useState, useEffect} from 'react'
import './Search.css'
import { Link, useParams } from 'react-router-dom'
import newArr from '../Data'
import axios from 'axios'

function Search({filterState,setfilterstate, value}) {
  const [state, setState] = useState([])
  // console.log(state)
  console.log(filterState)

  let {id}=  useParams
  console.log(filterState)

  const fetchData = async () =>{
  await axios.get('http://localhost:8000/posts')
  .then((res)=> setState(res.data))
  }
  useEffect(()=>{
    fetchData()
  }, [])

  const sortedByPriceAscending = () => {
  let name = [...filterState].sort((a,b)=>a.productPrice - b.productPrice)
  console.log(name)
   setfilterstate(name)
  }

  const sortedByPriceDecending = () =>{
  let name = [...filterState].sort((a,b)=>a.productPrice - b.productPrice).reverse()
  setfilterstate(name)
  }

  const handleClick = (handleValue) =>{
    const valUe =  state.filter((item)=>{ return item.brands == handleValue})
    setfilterstate(valUe)
    console.log(valUe)
  }

  let newCLass = {
    backgroundColor:'black',
    color:"white"
  }
  return (
    <>
    <div className="container-fluid">
      <div className="filterPage">
        <div className="row search-row">
        <div className="col-3 search-sort-div  ">
          <div className="heading-search d-flex justify-content-between">
            Sorted by Price
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fa-solid fa-arrow-down-short-wide   bars-search"></i>
          </button>
          </div>
          <div className="container-fluid collapse navbar-collapse  " id="navbarSupportedContent1">
            <div className="w-100  ">
              <div className="d-flex justify-content-between ">
               <span class="price-search" onClick={sortedByPriceAscending}>Price Low to high</span>
               <span class="price-search" onClick={sortedByPriceDecending}>Price  high to Low</span>
               </div>
               <div className="heading-search catefory-search ">
                Categories:
          </div>
<p className='container-searchData' onClick={()=>handleClick('Calvin Klein')}>Calvin Klein</p>
              <p className='container-searchData'  onClick={()=>handleClick('Roadster')}>Roadster</p>
              <p className='container-searchData' onClick={()=>handleClick('Everlane')}>Everlane</p>
              <p className='container-searchData' onClick={()=>handleClick('Carhartt')}>Carhartt</p>
              <p className='container-searchData' onClick={()=>handleClick('Brooklinen')}>Brooklinen</p>
              <p className='container-searchData' onClick={()=>handleClick('Uniqlo')}>Uniqlo</p>
              <p className='container-searchData' onClick={()=>handleClick('Velva')}>Velva</p>
            </div>
          </div>
        </div>
        
        {
                      filterState.map((item, id)=>{

                
                    return  <div key={id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 main-card-div ">
                        <div class="card  " >

                            <div className="img d-flex justify-content-center w-100">
            <img src={item.productImg} class="card-img-top img-fluid"  alt="not found"/>
            </div>
            <div class="card-body">
            <div className="heading-body">
                <h5 class="card-title">{item.productName} </h5>
                </div>
                <div className="rating d-flex justify-content-between">
                <h5 class="card-price">{"₹ " + item.productPrice} </h5>
                    
                <div className="rate" style={{marginTop:"-0.5rem" }}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half"></i>
                <span className='rating-value' > 4.7</span>
                </div>
                </div>
                <p class="card-text">{item.productDescription}</p>
                <span className="card-brands">{item.brands}</span>
                <Link to={`/viewpage/${id}`} class="btn btn-primary main-btn">View Product</Link>
            </div>
            </div>
                        </div>
                        
            })   
        }
      
        </div>
      </div>
    </div>

  
 
    </>
  )
}

export default Search