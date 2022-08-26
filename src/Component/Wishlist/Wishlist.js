import React from 'react'
import './Wishlist.css'
import { Link, useParams } from 'react-router-dom'
import '../Responsive.css'
import { useSelector, useDispatch } from 'react-redux'
import { wishlistItem } from '../../Redux/Actions/Actions'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Wishlist() {

    const wishListProducts = useSelector(state => state.wishlist.productData)

    const dispatch = useDispatch()
   
    const navigate = useNavigate()

    const removeItem = async (id)=>{
        let data = [...wishListProducts]
        console.log(data)
        //  let remData = await axios.delete(`http://localhost:8000/posts/${id}`)
         dispatch({type:wishlistItem, payload:wishListProducts.filter((item)=> item.id !== id)})
    }

{if(wishListProducts.length == 0 || undefined){
    return ( <div className='d-flex justify-content-center mt-5'>
         <span className='mx-3 fs-4'>Wishlist is empty</span>
         <button className='btn btn-secondary p-2' onClick={()=> navigate('/home')}>Go to Home</button>
          </div>)
}}
  return (
      <>
    <div  className="container-fluid wish-div-main-bg-container">
          <div className="container  wishlist-main-container">
              <div className="wishlist-body">
              <div className="wishlist-heading ">
                  <span className="wish-heading "> My Wishlist</span>
              </div>
              { wishListProducts?.map((item, id)=>{
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
              {wishListProducts?.map((item)=>{
                const {productName, productPrice, productDescription, productImg, id} = item
              return   <div key={id} className="main-wish-container">
                  <div className="row main-wish-container-row">
                      <div className="col-3  wish-images">
                          <div className="small-scr-wish-images">
                      <img src={productImg} alt=" not found" className='wishlist-img' width='120px' height="120px" />
                      </div>
                      </div>

                     <div className="col-9 wish-small-container">
                     <div className="wishlist-small-data">
                      <Link to={`/viewpage/${id}`}>
                       <span className="wishlist-data">{productName}</span>
                       </Link>
                       </div>
                       <div className="wish-list-price d-flex justify-content-between">
                       <div className="wish-price">{"₹ " + productPrice}</div>
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
                       <span className="wish-description">{productDescription}</span>
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