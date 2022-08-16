import React, {useState, useEffect} from 'react'
import './SignUp/SignUp.css'
import newArr from './Data'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import HomeCarousel from './HomeData/HomeCarousel'
import Slider from './HomeData/CarouselSlider'
import Slider1 from './HomeData/CarouselSlider1'
import Slider2 from './HomeData/CarouselSlider2'
import axios from 'axios'

function Home() {
  

    const [HomeData, setHomeData] = useState(null)
    console.log(HomeData) 
    const [loading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
 
    useEffect(()=>{
      setTimeout(()=>{
      fetch('http://localhost:8000/posts')
      .then(res => res.json())
      .then(res => {
        setHomeData(res)
        setIsLoading(false)
      }
      )
      .catch(err => {
        setError(err.msg)
      })
    //   .then( res =>{
    //     if(!res.ok){
    //       setError("could not fetch the data from that resources")
    //     }
    //      res.json()})
    //   .then(res =>{ 
    //     console.log(res, "response")
    //   setHomeData(res)
    //   setIsLoading(false)
    // })
    // .catch(err =>{
    //    console.log(err)
    //    setIsLoading(false)
    //   })
  },1000)},[])
    
  // const removeData1 = async (id) =>{
   

  // }  

         const removeData = async (id) =>{
          let data1 = [...HomeData]
          let data =  await axios.delete(`http://localhost:8000/posts/${id}`)
            
               
            let sweatData =   Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }) .then((result) => {
                      
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                   
    // console.log(id)
    let finalData = data1.splice(data,1)
    setHomeData(data1)
                  // val.splice(id,1)
              // setHomeData(val)
            } else if(result.isDenied){
                Swal.fire('not deleted')
            }
            
              })     
       }
    
return (
        <>
        {error && <div> {error}</div>}
        {loading && <div className='loading-spinner'> <i class="fa-solid fa-spinner spinner-sizing"></i></div>}
            {HomeData && <HomeCarousel data={HomeData} />}
     <div className="container">
      <div className="largeScreen">
            <Slider /> 
            </div>
            <div className="small-screen">
            <Slider1 />
              </div>   
              <div className="smaller-screen">
              <Slider2 />                    
              </div>
        <div className="row">
        { HomeData &&
          HomeData.map((item, id)=>{
         
    
        return  <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 main-card-div ">
            <div class="card mt-5 " >
                <div className="icons d-flex  ">
            <svg xmlns="http://www.w3.org/2000/svg" class="home-edit-icon"  fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
<Link to={`/edit/${item.id}`}>  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></Link>
</svg>

<svg onClick={()=> removeData(item.id)}  xmlns="http://www.w3.org/2000/svg" class="home-edit-icon1   " viewBox="0 0 20 20" fill="currentColor">
<path fill-rule="evenodd" d="M6.707 4.879A3 3 0 018.828 4H15a3 3 0 013 3v6a3 3 0 01-3 3H8.828a3 3 0 01-2.12-.879l-4.415-4.414a1 1 0 010-1.414l4.414-4.414zm4 2.414a1 1 0 00-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 101.414 1.414L12 11.414l1.293 1.293a1 1 0 001.414-1.414L13.414 10l1.293-1.293a1 1 0 00-1.414-1.414L12 8.586l-1.293-1.293z" clip-rule="evenodd" />
</svg>
</div>
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
    <Link to={`/viewpage/${item.id}`} class="btn btn-primary main-btn">View Product</Link>
</div>
</div>
            </div>
            
})   
}
        </div>
    
    </div> 
    
    
    </>
)
}
export default Home 