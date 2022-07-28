import React, {useState} from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import newArr from './Data'
import './SignUp/SignUp.css'

function Edit() {
  let {id} = useParams()
    let data  = newArr.find((item)=> item.id === parseInt(id))
    
    const [formData, setFormData] = useState([data])

    const navigate = useNavigate()

    const handleChange = (e,id) =>{
      let data = [...formData]
      data[id][e.target.name] = e.target.value
      setFormData(data)
    }

       
    const showToast = () => {
      toast(" Form is Updated!")
    };
   
    const redirectForm = () =>{
      if(toast){
        return <Navigate to='/' />
      }else{
        console.log("not found")
      }
    }

  const saveData = (e) =>{

    console.log(formData)
    showToast()
  
  }

  function action() {
    console.log('clickAction invoked');
  }
  
  const  handleSubmit = (e) =>{
    e.preventDefault()
    setTimeout(()=>navigate('/'),2000)
    // return <DelayLink delay={2000} to="/" clickAction={action} replace={false}></DelayLink>
    
    }

  return (
      <>
      {formData.map((item,id)=>{
        return  <div key={id} className="container-fluid">
        <div className="container">
          <div className="header mt-4 ">

               <p className="heading text-center"> Edit</p>
            <div className="form d-flex justify-content-center w-100 ">
              <form  onSubmit={handleSubmit} className=' '>
                <div className="form-data mt-3 mb-3 ">
                <label className='mt-1 mb-1 h5 flex-column-1 mb-2 ' htmlFor="ProductName  ">Product Name: </label>
                <input className='input' type="text" name="ProductName" value={item.ProductName} onChange={e=>handleChange(e,id)} />
                </div>  
                <div className="form-data mt-3 mb-3 ">
                <label className='mt-1 mb-1 h5 flex-column-1 mb-2 ' htmlFor="ProductPrice">Product Price: </label>
                <input type="text" className='input1' name="ProductPrice" value={item.ProductPrice} onChange={e=>handleChange(e,id)} />
                </div>
                <div className="form-data mt-3 mb-3">
                <label className='mt-1 mb-1 flex-column-1 h5 mb-3' htmlFor="ProductDescription">Product Description: </label>
                <textarea type="text" className='input2 w-100' rows={6} name='ProductDescription' value={item.ProductDescription} onChange={e=>handleChange(e,id)} />
                </div>
                <button className="btn btn-secondary mt-2 w-100" onClick={saveData} type="submit">Submit</button>
                <ToastContainer  />
              </form>
            </div>
          </div>
        </div>
      </div>
  })}
      </>
  )
}

export default Edit