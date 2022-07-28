import React from 'react'
import { useForm } from "react-hook-form";

function SignIn() {
 

    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        localStorage.setItem("email",data.email)
        localStorage.setItem("password",data.password)
      }
  return (<>
 
  <form onSubmit={handleSubmit(onSubmit)}>
  <div >
    <input type="email" className="form-control inputfield" id="email"  placeholder="Email"  {...register("email", 
                        { 
                            required: true,  
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                        })} /> 
                        {errors.email && <p className="required-field">Please enter a valid email</p>}
  </div>
  <div>
    <input type="password" className="form-control inputfield" id="pass" placeholder="Password" {...register("password", {
                            required: true,
                            pattern: /^(?=.*\d)(?=.*[a-z]).{6,15}$/
                        })}/>
                        {errors.password && <p className="required-field">Password  is required.</p>}
  </div>
  <button type="submit" className="btn btn-primary main-btn">  Sign in </button>
</form>

  </>)
}

export default SignIn;