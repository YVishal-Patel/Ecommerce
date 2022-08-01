import React from 'react'
import './Search.css'
import { Link, useParams } from 'react-router-dom'

function Search({filterState,setfilterstate}) {
  console.log(filterState)

  let {id}=  useParams
  console.log(filterState)

  const sortedByPriceAscending = () => {
  let name = [...filterState].sort((a,b)=>a.ProductPrice - b.ProductPrice)
  console.log(name)
   setfilterstate(name)
  }

  const sortedByPriceDecending = () =>{
  let name = [...filterState].sort((a,b)=>a.ProductPrice - b.ProductPrice).reverse()
  setfilterstate(name)
  }

  const filerByBrands = (data)=>{
 let filterBrand = filterState.filter((item)=> item.brands == data )
 setfilterstate(filterBrand)
  }

  return (
    <>
    <div className="container-fluid">
      <div className="filterPage">
        <div className="row">
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
              <div className="sort-category">
              <label class="container-searchData">Calvin Klein
  <input type="checkbox" />
  <span  class="checkmark"></span>
</label>

<label class="container-searchData">Roadster
  <input type="checkbox"  />
  <span  class="checkmark"></span>
</label>

<label class="container-searchData">Everlane
  <input type="checkbox" />
  <span onCLick={filerByBrands} class="checkmark"></span>
</label>

<label class="container-searchData">Carhartt
  <input type="checkbox"/>
  <span onCLick={filerByBrands} class="checkmark"></span>
</label>

<label class="container-searchData">Brooklinen
  <input type="checkbox" />
  <span onCLick={filerByBrands} class="checkmark"></span>
</label>

<label class="container-searchData">Uniqlo
  <input type="checkbox" />
  <span onCLick={filerByBrands} class="checkmark"></span>
</label>

<label class="container-searchData">Velva
  <input type="checkbox"/>
  <span onCLick={filerByBrands} class="checkmark"></span>
</label>
              </div>
            </div>
          </div>
        </div>
        
        {
                      filterState.map((item, id)=>{

                
                    return  <div key={id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 main-card-div ">
                        <div class="card  " >

                            <div className="img d-flex justify-content-center w-100">
            <img src={item.ProductImg} class="card-img-top img-fluid"  alt="not found"/>
            </div>
            <div class="card-body">
            <div className="heading-body">
                <h5 class="card-title">{item.ProductName} </h5>
                </div>
                <div className="rating d-flex justify-content-between">
                <h5 class="card-price">{"₹ " + item.ProductPrice} </h5>
                    
                <div className="rate" style={{marginTop:"-0.5rem" }}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half"></i>
                <span className='rating-value' > 4.7</span>
                </div>
                </div>
                <p class="card-text">{item.ProductDescription}</p>
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