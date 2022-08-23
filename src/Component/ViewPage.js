import React, { useEffect, useState } from 'react'
import newArr from './Data'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectedProductItem } from '../Redux/Actions/Actions'
import './SignUp/SignUp.css'
import './Responsive.css'


function ViewPage({handleCart,  handleWishlist}) {

    const singleProductItem = useSelector(state =>state.singleItem)
    console.log(singleProductItem.productData)
    const dispatch = useDispatch()

    let {id} = useParams()

    const fetchData = () =>{
        return async (dispatch)=>{
        fetch(`http://localhost:8000/posts/${id}`)
        .then(res => res.json())
        .then(res => {
        dispatch({type:selectedProductItem, payload:res, isLoading:false, error:''})
        } )
        .catch(err =>{
            if(err){
                document.write("their is some error while fetching the data")
                dispatch({type:selectedProductItem, isLoading:true, error:"their is some error while fetching the data"})
            }
        })
    }
    }
      useEffect(()=>{
        dispatch(fetchData())
      }, [])
  
        const  {productName, productPrice, productImg} = singleProductItem.productData
      
  return (
      <>    
         <div  className="container-fluid main-div-view ">
      <div className="container">
 <div className="row mt-4">
           <div id="viewpage-data" className="col-md-6 col-sm-12 ">
                      <div className="data-type">
               <div className="name-type">
                   <span className="name-type1"> {productName} </span>
               </div>
               <div className="price">
                   <span className="price1"> {productPrice} </span>
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
                   <span className="description-type2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. A atque cupiditate veniam quisquam iste iure inventore, explicabo consectetur nostrum sit vitae error ducimus fuga, deserunt quis nam neque aliquid officiis ullam harum autem. Iure sunt unde possimus rem dicta neque Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae numquam veniam obcaecati delectus eaque, modi quae quas quo ut in quisquam fuga fugiat officia neque assumenda. Inventore saepe illo ad.</span>
               </div>
               </div>
           </div>
              <div className="col-1 data"></div>
             <div id="viewpage-img" className="col-12 col-md-5 col-sm-12  view-types-data">
           <div className=" img-type">
               <img src={productImg} alt="not found" width='100%' height='430px' />
           </div>   
           <div className="btns d-flex justify-content-between">
           <div className="wishlist-btn">
                   <button onClick={()=>handleWishlist(singleProductItem.productData)} className="wishlist-btn1">Add to Wishlist <i class="fa-solid fa-right-long arrow1"></i></button>
               </div>
               <div className="wishlist-btn">
                   <button onClick={()=>handleCart(singleProductItem.productData)} className="wishlist-btn1">Add to Cart <i class="fa-solid fa-right-long arrow1"></i></button>
               </div>
               </div>
               </div>
       </div>
       
      </div>
      </div>    


{/* --------------------------------- small screen ------------------------------------------- */}

     
      </>
    
  )
}

export default ViewPage