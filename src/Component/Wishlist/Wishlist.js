import React from 'react'
import './Wishlist.css'

function Wishlist({ wishlist,Setwishlist}) {
    console.log(wishlist, "wishlist")

    const removeItem = (id)=>{
        let data = [...wishlist]
        data.splice(id,1)
        Setwishlist(data)
    }
  return (
      <>
     
    <div  className="container-fluid">
          <div className="container  wishlist-main-container">
              <div className="wishlist-body">
              <div className="wishlist-heading ">
                  <span className="wish-heading "> My Wishlist</span>
              </div>
              {wishlist.map((item, id)=>{
              return   <div key={id} className="main-wish-container">
                  <div className="row main-wish-container-row">
                      <div className="col-2 wish-images">
                      <img src={item.ProductImg} alt=" not found" width='120px' height="120px" />
                      </div>
                      <div className="col-7 wish-data">
                       <span className="wishlist-data">{item.ProductName}</span>
                       <br />
                       <span className="wish-description">{item.ProductDescription}</span>
                      </div>
                      <div className="col-3 wish-operation">
                      <i onClick={removeItem} class="fa-solid fa-trash"></i>
                      <button className='btn-to-cart'>Add to Cart</button>
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