import React, {useState, useEffect} from 'react'
import axios from 'axios'


function ApiIntergrate() {
    const[Datas, setDatas] = useState([])
    useEffect(()=>{
       axios.get('https://newsapi.org/v2/everything?q=tesla&from=2022-07-03&sortBy=publishedAt&apiKey=4b1d3f3d3087436dacf94be84387320f')
       .then((res)=> {setDatas(res.data.articles)
         console.log(res.data.articles)})
    },[])

    const handleClick = () =>{
     let filteredData = Datas.filter((item)=> item.author == "Gemma Ryles")
      setDatas(filteredData)
    }
  return (
      <>
    <div className="row">
        {/* <div> */}
        <div className="d-flex justify-content-between fs-5 m-3 ">
        {Datas.map((data)=>{
            return <div className='mx-1' key={data.id} >
                <p>{data.author}</p>
            </div>
        })}
        </div>

        <button className="btn btn-primary mx-2 " onClick={handleClick}> filter</button>
        {/* </div> */}  
{
    Datas.map((item)=>{
        return    <div  className="col-3 main-card-div ">
         <div key={item.id}>
                        <div class="card mt-5 " >
                            <div className="icons d-flex  ">
                       

            
            </div>
                            <div className="img d-flex justify-content-center w-100">
            <img src={item.urlToImage} class="card-img-top img-fluid"  alt="not found"/>
            </div>
            <div class="card-body">
            <div className="heading-body">
                <h5 class="card-title">{item.author} </h5>
                </div>
                <div className="rating d-flex justify-content-between">
                <h5 class="card-price">{item.content} </h5>
                    
                <div className="rate" style={{marginTop:"-0.5rem" }}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half"></i>
                <span className='rating-value' > 4.7</span>
                </div>
                <p>{item.description}</p>
                <p>{item.source.name}</p>
                </div>
                <span class="btn btn-primary main-btn">View Product</span>
            </div>
            </div>
                        </div>
        </div>
    })
}
</div>
      </>
  )
}

export default ApiIntergrate