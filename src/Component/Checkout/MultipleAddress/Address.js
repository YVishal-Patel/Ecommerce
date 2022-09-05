import React, {useState, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addressData } from '../../../Redux/Actions/Actions'
import './Address.css'

const Address = () => {

  const count = useRef(false)
  const addressField = useRef()

  const addressData = useSelector(state => state.addressUserData.userData)
  const dispatch = useDispatch()
  

  const [inputField, setInputField] = useState([
    { name:'', number:'', pincode:'', locality:'', Address:'', landmark:'', state:''}
  ])

  console.log(inputField, "inputfield")

   const handleChange = (e, idx) =>{
   let data = [...inputField];
   data[idx][e.target.name] = e.target.value;
   dispatch({type:addressData, payload:data})
   setInputField(data)
   }

   const addFields = (e) =>{
     addressField.current.style.display = 'block';
     count.current.style.display = 'none'
     e.preventDefault()
       let fields = { name:'', number:'', pincode:'', locality:'', Address:'', landmark:'',state:''}
       setInputField([...inputField, fields])
    dispatch({type:addressData, payload:[...addressData, ...fields]})
  
   }

   const removeItem = () =>{
    // let data = [...inputField]
    //  data.splice(idx,1)
    // setInputField(data)
    // dispatch({type:addressData, payload:data})
    count.current.style.display = 'block';
    addressField.current.style.display = 'none'

   }
  
   const handleSubmit = (e) =>{
     if(inputField[0].name.length > 10 && inputField[0].number.length == 10 && inputField[0].Address.length > 20 && inputField[0].pincode.length >= 5 || inputField[0].landmark.length || 5 && inputField[0].state.length >= 6){
    e.preventDefault()
    console.log(inputField)
    count.current.style.display = 'block'
    addressField.current.style.display = 'none'
  }else{
    e.preventDefault()
    alert("please enter the required field")
  }
   }


  return (
    <>
    <div className="container-fluid">
        <div className="container addresses">
            <div className="checkout-main">
            <div className="checkout-heading mt-4">
                <span className="checkout-heading-data mx-2">Checkout</span>
            </div>
            <div className="user-address-data">
              <div className="user-address-heading mt-4 mx-2">
                <span className="address-data">Address</span>
              </div>
            </div>
            </div>
             
            <div 
             className="d-flex flex-column address-user-data">
            <div className="d-flex mt-3">
              <span className="address-name mx-3 fs-5">Vishal Patel</span>
              <span className="address-number mx-2 ">9373182856</span>
              <span className="address-number mx-2 ">452001</span>
            </div>
            <div className="address-address mx-3 mb-3">
              <span className='address-address-data'>Nehru Nagar Indore</span>
            </div>
          </div>
            
            {inputField?.map((item, idx)=>{
              const {name, number, pincode, Address,state} = item
              return(<> <div key={idx} className="d-flex flex-column address-user-data">
          <div className="d-flex mt-3">
              <span className="address-name mx-3 fs-5">{name}</span>
              <span className="address-number mx-2 ">{number}</span>
              <span className="address-number mx-2 ">{pincode}</span>
            </div>
            <div className="address-address mx-3 mb-3">
              <span className='address-address-data'>{Address}</span>
            </div>
          </div>
            </>)
           })}

            <div  className="form-address-data ">
            <form ref={addressField} onSubmit={handleSubmit}>
                 
              {inputField?.map((item, idx)=>{
        return(<div  className="row mt-2"> 
              <div  className="col-4">
               <label className='label mx-2' key={idx} htmlFor="name"> Name
               <br />
                <input  className='' type="text" name="name" placeholder='name' value={item.name} onChange={(e)=>handleChange(e, idx)}  />
                <br />
                {inputField[0].name.length > 0 && inputField[0].name.length < 9? <span className='erorr-address'><i class="fa-solid fa-circle-exclamation mx-1"></i> Name must contain 10 character</span>:<span></span>}
              </label>
               
              <label className='label mx-2' htmlFor="number"> Number
              <br />
                <input className='' type="number" name="number" placeholder='number' value={item.number} onChange={(e)=>handleChange(e, idx)} />
                <br />
                {inputField[0].name.number > 0 &&  inputField[0].number.length < 10 || inputField[0].number.length > 10 ? <span className='erorr-address'><i class="fa-solid fa-circle-exclamation mx-1"></i> number must contain 10 character</span>:<span></span>}
              </label>
               </div>
               <div className="col-4">
              <label className='label mx-2' htmlFor="Address"> Address
              <br />
                <input className='' type="state" name="Address" placeholder='Address' value={item.Address} onChange={(e)=>handleChange(e, idx)} />
                <br />
                {inputField[0].Address.length > 0 && inputField[0].Address.length < 25? <span className='erorr-address'><i class="fa-solid fa-circle-exclamation mx-1"></i> address must contain 25 character</span>:<span></span>}
              </label> 
              

              <label className='label mx-2' htmlFor="locality"> Locality
              <br />
                <input className='' type="" name="locality" placeholder='locality' value={item.locality} onChange={(e)=>handleChange(e, idx)} />
                <br />
                {inputField[0].locality.length > 0 &&  inputField[0].locality.length < 10? <span className='erorr-address'><i class="fa-solid fa-circle-exclamation mx-1"></i> locality must contain 10 character</span>:<span></span>}
              </label>
              </div>
               <div className="col-4">
              <label className='label mx-2' htmlFor="pincode"> Pincode
              <br />
                <input className='' type="number" name="pincode" placeholder='pincode' value={item.pincode} onChange={(e)=>handleChange(e, idx)} />
                <br />
                {inputField[0].pincode.length > 0 && inputField[0].pincode.length < 6? <span className='erorr-address'><i class="fa-solid fa-circle-exclamation mx-1"></i> pincode must contain 6 character</span>:<span></span>}
              </label>

              <label className='label mx-2' htmlFor="landmark"> Landmark
              <br />
                <input className='' type="text" name="landmark" placeholder='landmark' value={item.landmark} onChange={(e)=>handleChange(e, idx)} />
                <br />
                {inputField[0].landmark.length > 0 && inputField[0].landmark.length < 6? <span className='erorr-address'><i class="fa-solid fa-circle-exclamation mx-1"></i> Landmark must contain 6 character</span>:<span></span>}
              </label>

              <label className='label mx-2' htmlFor="state"> State
              <br />
                <input className='' type="state" name="state" placeholder='state' value={item.state} onChange={(e)=>handleChange(e, idx)} />
                <br />
                {inputField[0].state.length > 0 && inputField[0].state.length < 6? <span className='erorr-address'><i class="fa-solid fa-circle-exclamation mx-1"></i> State must contain 6 character</span>:<span></span>}
              </label>
              </div>
           
               </div> )    
})}

             <button onClick={handleSubmit} className="btn btn-primary my-4">submit</button>
             <button className='btn btn-danger my-4 mx-4'  onClick={removeItem}>Remove Item</button>
            </form>
            <div className="flex flex-column "></div>
            <button className='btn btn-secondary mt-5 btn-more' style={{height:"40px",  width:"250px"}} ref={count} onClick={addFields} >Add More</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Address