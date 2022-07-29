import React, {useState, useEffect} from 'react'
import './Card.css'
import newArr from './Data'
import visa from './visa.png'
import paypal from './paypal.png'
import mastercard from './mastercard.png'
import Rupay from './Rupay.png'
import Paytm from './paytm.png'
import './Responsive.css'

function Card({cart, setCart}) {

  const [ price, setPrice] = useState()
  const [ totalPrice, setTotalPrice] = useState()


  useEffect(()=>{
    handlePrice()
    totalValue()
  })

const handlePrice = () =>{
  let ProductPrice = 0
  cart.map((item)=>(ProductPrice += item.quantity * item.ProductPrice))
  setPrice(ProductPrice)
}

  const handlePlus = (id, d)=>{
   setCart(cart =>
    cart.map((item)=> item.id == id ? {...item, quantity:item.quantity+d}:item)
    )  
  }

  const totalValue = ()=>{
    let TotalPrice = 0;
    TotalPrice += price - 99
    setTotalPrice(TotalPrice)
  }

  return (<>
  <div className="container cart-body-main-container">
      <div className="card-body">
      <div className="card-heading">
          <div className="card-head">
          <span >Checkout</span>
          </div>
      </div>

      <div  className="container  data-table">
           
           <div className="row mt-3 ">
             <div className="col-8   table-data">
               


      {cart.map((item, id)=>{
      return <div key={id} className="row  mt-3 mb-3">
              <div className="col-2">
                <div className="table-img ">
                  <img src={item.ProductImg} className="table-img-data" width="110px"  height='110px' alt="not found" />
                </div>
              </div>
              <div className="col-6">
                <div className="item-name">
                  <span  className='item-ProductName '>{item.ProductName}</span>
                  <div className="item-description">{item.ProductDescription}</div>
                </div>
              </div>
              <div className="quantity-card col-2">
                <div className="quantity-card">
                <button className='btn-value' disabled={item.quantity == 9} onClick={()=>handlePlus(item.id , 1)}> + </button>
                <input className="quantity-value"  value={item.quantity}    />
               <button className='btn-value' disabled={item.quantity == 1} onClick={()=>handlePlus(item.id, -1)}> - </button> 
                </div>
              </div>
              <div className="col-2 item-price">
                <div className="item-ProductPrice">{item.ProductPrice}</div>
              </div>
            </div>
            })}


</div>
             <div className="col-4  card-sidebar">
             <div className="total-value d-flex ">
                  <p className='price-heading m-3'>Price Details</p>
                </div>
                <div className="price-data d-flex justify-content-between m-3">
                  <span>Price</span>
                  <span>{"₹"}{price}</span>
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
                  <span>{"₹"}{totalPrice}</span>
                </div>
                {/* <span className='m-3'>Shopping, taxes and discounts calculated at checkbox.</span> */}
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
               


      {cart.map((item, id)=>{
      return <div key={id} className="row  mt-3 mb-3">
              <div className="col-3">
                <div className="table-img ">
                  <img src={item.ProductImg} className="table-img-data" width="110px"  height='110px' alt="not found" />
                </div>
              </div>
              <div className="col-7">
                <div className="item-name">
                  <span  className='item-ProductName '>{item.ProductName}</span>
                  <div className="item-description">{item.ProductDescription}</div>
                </div>


              <div className="quantity-card">
                <div className="quantity-card">
                <button className='btn-value' disabled={item.quantity == 9} onClick={()=>handlePlus(item.id , 1)}> + </button>
                <input className="quantity-value"  value={item.quantity}    />
               <button className='btn-value' disabled={item.quantity == 1} onClick={()=>handlePlus(item.id, -1)}> - </button> 
                </div>
              </div>
              </div>

              <div className="col-2 item-price">
                <div className="item-ProductPrice">{item.ProductPrice}</div>
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
                  <span>{"₹"}{price}</span>
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
                  <span>{"₹"}{totalPrice}</span>
                </div>
                {/* <span className='m-3'>Shopping, taxes and discounts calculated at checkbox.</span> */}
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

  </>
  )
}

export default Card