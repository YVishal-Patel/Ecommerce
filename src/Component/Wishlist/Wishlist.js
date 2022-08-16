import React from 'react'
import './Wishlist.css'
import { Link, useParams } from 'react-router-dom'
import '../Responsive.css'
import axios from 'axios'

function Wishlist({ wishlist,Setwishlist}) {
    console.log(wishlist)

    let {id} = useParams()
    console.log(id)

    const removeItem = async (id)=>{
        let data = [...wishlist]
         let remData = await axios.get(`http://localhost:8000/posts/${id}`)
        data.splice(remData,1)
        Setwishlist(data)
    }

    // const handleCartData = (id) =>{
    //     let data = [...wishlist]
    //     let removedData = data.splice(id, 1)
    //     Setwishlist(data)
    //     if(cart.indexOf(removedData) !== id) {;
    //     setCart([...cart, (removedData)].flat())
    // }
    //     console.log(removedData)
    //     console.log(cart)
    // }

  return (
      <>
     
    <div  className="container-fluid wish-div-main-bg-container">
          <div className="container  wishlist-main-container">
              <div className="wishlist-body">
              <div className="wishlist-heading ">
                  <span className="wish-heading "> My Wishlist</span>
              </div>
              {wishlist.map((item, id)=>{
              return   <div key={id} className="main-wish-container">
                  <div className="row main-wish-container-row">
                      <div className="col-2   wish-images">
                      <img src={item.productImg} alt=" not found" className='wishlist-img' width='120px' height="120px" />
                      </div>
                      <div className="col-8  wish-data">
                          <Link to={`/viewpage/${item.id}`}>
                       <span className="wishlist-data">{item.productName}</span>
                       </Link>
                       
                       <br />
                       <span className='rating-stars'>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star-half"></i>
                <span className='rating-value-wish' > 4.7</span>
                       </span>
                       <br />
                       <span className="wish-description">{item.productDescription}</span>
                       <br />
                       <div className="wish-price">{"₹ " + item.productPrice}</div>
                      </div>
                      <div className="col-2  wish-operation">
                      <i onClick={()=>removeItem(item.id)} class="fa-solid fa-trash"></i>
                      {/* <button onClick={handleCartData} className='btn-to-cart'>Add to Cart</button> */}
                      </div>
                  </div>
              </div>

})}
          </div>
          </div>
      </div>
  

  {/*------------------------------ small screen --------------------------------------  */}

  <div  className="container-fluid small-wish-div-main">
          <div className="container  wishlist-main-container">
              <div className="wishlist-body">
              <div className="wishlist-heading ">
                  <span className="wish-heading "> My Wishlist</span>
              </div>
              {wishlist.map((item, id)=>{
              return   <div key={id} className="main-wish-container">
                  <div className="row main-wish-container-row">
                      <div className="col-3  wish-images">
                          <div className="small-scr-wish-images">
                      <img src={item.ProductImg} alt=" not found" className='wishlist-img' width='120px' height="120px" />
                      </div>
                      </div>

                     <div className="col-9 wish-small-container">
                     <div className="wishlist-small-data">
                      <Link to={`/viewpage/${item.id}`}>
                       <span className="wishlist-data">{item.ProductName}</span>
                       </Link>
                       </div>
                       <div className="wish-list-price d-flex justify-content-between">
                       <div className="wish-price">{"₹ " + item.ProductPrice}</div>
                       <br />
                       <div className="rating-small-data">
                       <span className='rating-stars'>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star-half"></i>
                <span className='rating-value-wish' > 4.7</span>
                       </span>
                       </div>
                       </div>

                       <div className="">
                       <span className="wish-description">{item.ProductDescription}</span>
                       </div>

                       <div className="wish-operation">
                      <i onClick={removeItem} class="fa-solid fa-trash"></i>
                      {/* <button onClick={handleCartData} className='btn-to-cart'>Add to Cart</button> */}
                      </div>

                     </div>

                      
                        
                     
                       

                      
                  </div>
              </div>

})}
          </div>
          </div>
      </div>
      </>
  )
}

export default Wishlist