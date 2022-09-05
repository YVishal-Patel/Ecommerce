import React, {useState, useEffect} from 'react'
import './Card.css'
import visa from './visa.png'
import paypal from './paypal.png'
import mastercard from './mastercard.png'
import Rupay from './Rupay.png'
import Paytm from './paytm.png'
import './Responsive.css'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectedCartItems, selectedCartPrice, totalPrice } from '../Redux/Actions/Actions'

function Card() {

  const cartData = useSelector(state => state.cartItems.productData)
  const isLoading = useSelector(state => state.cartItems)
  const TotalPrice = useSelector(state => state.totalPrice.productPrice)
  const discountedPrice = useSelector(state => state.totalPrice.discountPrice)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handlePrice = () =>{
  let ProductPrice = 0
  cartData.map((item)=>(ProductPrice += item.quantity * item.productPrice))
  dispatch({type:selectedCartPrice, payload:ProductPrice})
}

  const handlePlus = (id, d)=>{
  dispatch({type:selectedCartItems, payload:(
    cartData.map((item)=> item.id == id ?{...item, quantity:item.quantity+d}:item)
    ) })
  }

  const totalValue = ()=>{
        let Price = 0;
        if(TotalPrice > 0){
        Price += TotalPrice - 99
        console.log(TotalPrice)}
        dispatch({type:totalPrice, payload: Price})
      }
  const removeItem = (id) =>{
    dispatch({type:selectedCartItems, payload:cartData.filter((item)=> item.id != id)})
  }

  useEffect(()=>{
    handlePrice();
    totalValue();
  })


{if(cartData.length !== 0){

return(<> <div className="container cart-body-main-container">
      <div className="card-body">
      <div className="card-heading">
          <div className="card-head">
          <span >Checkout</span>
          </div>
      </div>

      <div  className="container  data-table">
           
           <div className="row mt-3 ">
             <div className="col-8   table-data">

 { cartData?.map((item)=>{
  const {productName, productPrice, productDescription, productImg, brands, quantity, id} = item
  return <div key={id} className="row  mt-3 mb-3">
  <div className="col-2">
    <div className="table-img ">
      <img src={productImg} className="table-img-data" width="110px"  height='110px' alt="not found" />
    </div>
  </div>
  <div className="col-6">
    <div className="item-name">
      <span  className='item-ProductName '>{productName}</span>
      <div className="item-description">{productDescription}</div>
    </div>
  </div>
  <div className="quantity-card col-2 mt-n5">
    <div className="quantity-card">
    <button className='btn-value' disabled={quantity == 9} onClick={()=>handlePlus(id , 1)}> + </button>
    <input className="quantity-value"  value={quantity}    />
   <button className='btn-value' disabled={quantity == 1} onClick={()=>handlePlus(id, -1)}> - </button> 
    </div>
  </div>
  <div className="col-2 item-price d-flex flex-column mt-n5">
    <div className="item-ProductPrice">{productPrice}</div>
  <span  onClick={()=>removeItem(id)}> <i class="fa-solid fa-trash-can"></i></span>
  </div>

</div>
})
}
</div>


<div className="col-4  card-sidebar">
             <div className="total-value d-flex ">
                  <p className='price-heading m-3'>Price Details</p>
                </div>
                <div className="price-data d-flex justify-content-between m-3">
                  <span>Price</span>
                  <span>{"₹"}{TotalPrice}</span>
                </div>
                <div className="discount d-flex justify-content-between m-3">
                <span>Discount</span>
                  <span className='delivery-type'>{"₹"}99</span>
                </div>
                <div className="delivery-charge d-flex justify-content-between m-3">
                <span>Delivery Charge</span>
                  <span className='delivery-type'>Free</span>
                </div>
                <div className="total-amount d-flex justify-content-between m-3">
                  <span>Total Charge</span>
                  <span>{"₹"}{discountedPrice}</span>
                </div>
                <br />
              <Link to='/checkout'>  <button className=' w-100 checkout'>checkout <i class="fa-solid fa-right-long arrow1"></i></button></Link>
                  <hr className='mt-4'/>
                <div className="security mt-4 d-flex justify-content-center">
                  <i class="fa-solid fa-lock"></i>
                 <p className=' upper-data'> <span className=''> Secured by Snipcard</span></p>
                </div>
                <div className="card-type d-flex">
                  <img className="last-img" src={visa} alt="not found" />
                  <img className="last-img" src={mastercard} alt="not found" />
                  <img className="last-img" src={paypal} alt="not found" />
                  <img className="last-img" src={Rupay} alt="not found" />
                  <img className="last-img" src={Paytm} alt="not found" />

                </div>
              </div>
  </div>
             </div>
           </div>
            </div> 
         
        
         
            {/*------------------------ small screen -------------------------------  */}
 
  <div className="container small-screen-cart-container">
      <div className="card-body">
      <div className="card-heading">
          <div className="card-head">
          <span >Checkout</span>
          </div>
      </div>

      <div  className="container  data-table">
           
           <div className="row mt-3 ">
             <div className="col-12   table-data">
               


      {cartData?.map((item)=>{
        const {productName, productPrice, productDescription, productImg, brands, quantity, id} = item
      return <div key={id} className="row  mt-3 mb-3">
              <div className="col-3">
                <div className="table-img ">
                  <img src={productImg} className="table-img-data" width="110px"  height='110px' alt="not found" />
                </div>
              </div>
              <div className="col-7">
                <div className="item-name">
                  <span  className='item-ProductName '>{productName}</span>
                  <div className="item-description">{productDescription}</div>
                </div>


              <div className="quantity-card">
                <div className="quantity-card">
                <button className='btn-value' disabled={quantity == 9} onClick={()=>handlePlus(id , 1)}> + </button>
                <input className="quantity-value"  value={quantity}    />
               <button className='btn-value' disabled={quantity == 1} onClick={()=>handlePlus(id, -1)}> - </button> 
                </div>
              </div>
              </div>

              <div className="col-2 item-price">
                <div className="item-ProductPrice">{productPrice}</div>
              </div>
            </div>
            })}


</div>
             <div className="col-12  card-sidebar">
             <div className="total-value d-flex ">
                  <p className='price-heading m-3'>Price Details</p>
                </div>
                <div className="price-data d-flex justify-content-between m-3">
                  <span>Price</span>
                  <span>{"₹"}{TotalPrice}</span>
                </div>
                <div className="discount d-flex justify-content-between m-3">
                <span>Discount</span>
                  <span className='delivery-type'>{"₹"}99</span>
                </div>
                <div className="delivery-charge d-flex justify-content-between m-3">
                <span>Delivery Charge</span>
                  <span className='delivery-type'>Free</span>
                </div>
                <div className="total-amount d-flex justify-content-between m-3">
                  <span>Total Charge</span>
                  <span>{"₹"}{discountedPrice}</span>
                </div>
                <br />
                <button className=' w-100 checkout'>checkout <i class="fa-solid fa-right-long arrow1"></i></button>
                  <hr className='mt-4'/>
                <div className="security mt-4 d-flex justify-content-center">
                  <i class="fa-solid fa-lock"></i>
                 <p className=' upper-data'> <span className=''> Secured by Snipcard</span></p>
                </div>
                <div className="card-type d-flex">
                  <img className="last-img" src={visa} alt="not found" />
                  <img className="last-img" src={mastercard} alt="not found" />
                  <img className="last-img" src={paypal} alt="not found" />
                  <img className="last-img" src={Rupay} alt="not found" />
                  <img className="last-img" src={Paytm} alt="not found" />

                </div>
              </div>
  </div>
             </div>
           </div>
            </div> 
            </>)} else{
            return(  <div className='container mt-5 d-flex justify-content-center'>
           <span style={{color:isLoading? "blue":"black" }} className='text-center fs-4'> Cart is empty </span>
           <br />
           <button className='d-flex  mx-4 p-2 btn btn-secondary' onClick={()=> (navigate('/home') ) }>Back to Home</button>
           </div>
           )
          }}

}

export default Card