    // import React, {useState} from 'react'


    // function DemoForm() {

    //     const [ formData, setFormData] = useState([{
    //         name:'', email:'', value:'' 
    //     },])
        
    //     const handleChange = (e,id) =>{
    //         let data = [...formData]
    //         data[id][e.target.name] = e.target.value
    //         setFormData(data)
            
    //     } 
    //     const submit = (event) =>{
    // event.preventDefault()
    // console.log(formData)
    //     }

    //     const addMore = () =>{
    //         let object = {
    //             name:'',
    //             email:'',
    //             value:'',
    //         }
    //         setFormData([...formData, object])
    //     }

    //     const removeData = (id) =>{
    //         let data = [...formData]
    //         data.splice(id, 1)
    //         setFormData(data)
    //         console.log(formData)
    //     }
    // return (
    //     <>
    //     <form onSubmit={submit}>
    //         { formData.map((item,id)=>{
    //             return <div key={id}>
    //             <input type="text" name="name" value={item.name} placeholder='enter name' onChange={e => handleChange(e,id)} />
    //         <input type="email" name="email" value={item.email} placeholder='enter email' onChange={(e)=>handleChange(e,id)}  />
    //         <input type="number" name='value' value={item.value} placeholder='enter value' onChange={(e)=>handleChange(e,id)} />
    //         <button onClick={addMore}>Add more...</button>
    //         <button onClick={removeData}>remove data</button>
    //         <button onClick={submit}>Submit</button>
    //         </div>
    //         })}
    //     </form>
    //     </>
    // )
    // }

    // export default DemoForm


import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function DemoForm() {
  const showToast = () => {
    toast(" Let’s toast to this toast today! ")
  };
 return (
    <div className='App'>
      <h1>Toastify React App</h1>
      <button onClick={showToast}>Pop that toast!</button>
      <ToastContainer />
     </div>
  );
}