import React, { useState } from 'react'
import newArr from './Data'
import { useParams } from 'react-router-dom'
import './SignUp/SignUp.css'
import './Responsive.css'


function ViewPage({handleCart,  handleWishlist}) {

    let {id} = useParams()
    
    let newData =  newArr.filter((val)=> val.id === parseInt(id))

    const [price , setPrice] = useState(newData)
      
  
  return (
      <>    
      {price.map((item)=>{
     return   <div key={item.id} className="container-fluid main-div-view ">
      <div className="container">
 <div className="row mt-4">
           <div id="viewpage-data" className="col-md-6 col-sm-12 ">
                      <div className="data-type">
               <div className="name-type">
                   <span className="name-type1"> {item.ProductName} </span>
               </div>
               <div className="price">
                   <span className="price1"> {item.ProductPrice} </span>
               </div>
               <div className="size-type">
                   <div className="size">
                       <span className="size2">Size</span>
                   </div>
                   <div className="d-flex justify-content-between sizes-data">
                       <div className="size1">S</div>
                       <div className="size1">M</div>
                       <div className="size1">L</div>
                       <div className="size1">XL</div>
                       <div className="size1">XXL</div>
                   </div>
               </div>
               <div className="description-type">
                   <p className="description-type1"> Description</p>
                   <span className="description-type2">Lorem ipsum dolor sit amet consectetur adipisicing elit. A atque cupiditate veniam quisquam iste iure inventore, explicabo consectetur nostrum sit vitae error ducimus fuga, deserunt quis nam neque aliquid officiis ullam harum autem. Iure sunt unde possimus rem dicta neque Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae numquam veniam obcaecati delectus eaque, modi quae quas quo ut in quisquam fuga fugiat officia neque assumenda. Inventore saepe illo ad.</span>
               </div>
               </div>
           </div>
              <div className="col-1 data"></div>
             <div id="viewpage-img" className="col-12 col-md-5 col-sm-12  view-types-data">
           <div className=" img-type">
               <img src={item.ProductImg} alt="not found" width='100%' height='430px' />
           </div>   
           <div className="btns d-flex justify-content-between">
           <div className="wishlist-btn">
                   <button onClick={()=>handleWishlist(item)} className="wishlist-btn1">Add to Wishlist <i class="fa-solid fa-right-long arrow1"></i></button>
               </div>
               <div className="wishlist-btn">
                   <button onClick={()=>handleCart(item)} className="wishlist-btn1">Add to Cart <i class="fa-solid fa-right-long arrow1"></i></button>
               </div>
               </div>
               </div>
       </div>
       
      </div>
      </div>  
      })}


{/* --------------------------------- small screen ------------------------------------------- */}

     
      </>
    
  )
}

export default ViewPage