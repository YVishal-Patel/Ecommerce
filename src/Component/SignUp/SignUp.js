import React, {useState, useEffect}  from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { useDispatch, useSelector } from 'react-redux';
import { userSignin } from '../../Redux/Actions/Actions';

import "./SignUp.css"

function SignUp() {

  const userSignIn = useSelector(state => state.auth_Sign_in)
  console.log(userSignIn, "userSignin")
  const dispatch = useDispatch()

  console.log(userSignIn)
  
  const [country , setCountry] = useState('')
  const [ region , setRegion] = useState('')
  const [user, setUser] = useState(null)


  const  selectCountry  =  (val) => {
    setCountry(val);
  }

  const selectRegion =  (val)  => {
    setRegion(val);
  }


  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
      address1: Yup.string()
      .required('address is required')
      .min(10, 'address must be at least 10 characters')
      .max(100, 'address must not exceed 100 characters'),
      Number: Yup.string()
      .required('Number is required')
      .min(10, 'Number must be at least 10 characters')
      .max(10, 'Number must not exceed 10 characters'),
      postcode: Yup.string()
      .required('postcode is required'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit = (data, country, region) => {
    let userData = JSON.stringify(country, region )
    console.log(userData)
    dispatch({type:userSignin, payload:{...data, country, region}})
    // reset()
    return false;
  };
 
  useEffect(()=>{
  reset(user)
  }, [user])

  return (
 <>
        <div className="container-fluid main-container">
          <div className="container">
          <div className="d-flex  justify-content-center mini-container  ">
            <div className="register-form mt-5 w-75 ">
              <p className='heading text-center'>Create an Account</p>

      {!user &&
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex  form-main">
        <div className="w-50 form-group">
          <label>Full Name</label>
          <input
            name="fullname"
            type="text"
            {...register('fullname')}
            className={` form-control ${errors.fullname ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.fullname?.message}</div>
        </div>
        <div className="w-50 form-group">
          <label>Username</label>
          <input
            name="username"
            type="text"
            {...register('username')}
            className={` form-control ${errors.username ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.username?.message}</div>
        </div>
        </div>
        <div className="d-flex  form-main">
        <div className="w-50 mt-3 form-group">
          <label>Email</label>
          <input
            name="email"
            type="text"
            {...register('email')}
            className={` form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <div className="w-50 mt-3 form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        </div>
        <div className="d-flex  form-main">
        <div className="w-50  mt-3 form-group">
          <label>Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            {...register('confirmPassword')}
            className={`form-control ${
              errors.confirmPassword ? 'is-invalid' : ''
            }`}
          />
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>
        
        <div className="w-50 mt-3 form-group">
        <label>Birthaday Month</label>
        <select className=' select-data' {...register("birthadayMonth")}>
        <option value="January">---</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
      </div>
      </div>
      <div className="d-flex  form-main">
      <div className="w-50 mt-3 form-group">
      <label>Birthaday Date</label>
      <select className='select-data' {...register("birthadayDate")}>
      <option value="1">---</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
        <option value="26">26</option>
        <option value="27">27</option>
        <option value="28">28</option>
        <option value="29">29</option>
        <option value="30">30</option>
        <option value="31">31</option>

      </select>
      </div>
    
      <div className="w-50  mt-3 form-group">
          <label htmlFor="address1">Address Line 1</label>
          <input type="text" name="address1" {...register('address1')} 
           className={`form-control ${
            errors.address1 ? 'is-invalid' : ''
          }`} />
          <div className="invalid-feedback">{errors.address1?.message}</div>
          </div>  
          </div>

          <div className="d-flex  form-main">
          <div className="w-50 mt-3 form-group">           
          <label htmlFor="address2">Address Line 2</label>
          <input type="text" name="address2" {...register('address2')} 
           className={`form-control ${
            errors.address1 ? 'is-invalid' : ''
          }`} />
          </div>

          <div className="w-50 mt-3 form-group">
          <label htmlFor="Number">Number </label>
          <input type="number" name="Number" {...register('Number')}
          className={`form-control ${
            errors.address1 ? 'is-invalid' : ''
          }`}
            />
          <div className="invalid-feedback">{errors.Number?.message}</div>
          </div>
          </div>
          <div className="d-flex  form-main">
          <div className='mt-3'>
             <label htmlFor="country">Country</label>
        <CountryDropdown className="select-data1"
         country={country}
           value={country}
            onChange={(val) => selectCountry(val)} /> 

        <RegionDropdown className="mt-3 select-data1"
          country={country}
          value={region}
          onChange={(val) =>selectRegion(val)} />
          {console.log(region)}
      </div>

          <div className="w-50 mt-3  form-group"> 
          <label htmlFor="postcode">Zip/Postcode</label>
          <input type="number" name="postcode" {...register('postcode')} 
           className={`postcode form-control ${
            errors.address1 ? 'is-invalid' : ''
          }`}
           />
           <div className="invalid-feedback">{errors.postcode?.message}</div>
           </div>  
           
      </div>

          <div className="mt-3 form-group form-check"> 
          <input
            name="acceptTerms"
            type="checkbox"
            {...register('acceptTerms')}
            className={`form-check-input ${
              errors.acceptTerms ? 'is-invalid' : ''
            }`}
          />

          <label htmlFor="acceptTerms" className="form-check-label">
            I have read and agree to the Terms
          </label>
          <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
        </div>

        <div className="mt-3 form-group">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <button
            type="button"
            onClick={()=>reset()}
            className="btn btn-warning float-right"
          >
            Reset
          </button>
        </div>
      </form>
}
{user &&
                    <div className="text-center p-3">
                        <span className="spinner-border spinner-border-lg align-center"></span>
                    </div>
                }
    </div>
          </div>
          </div>
        </div>



    </>
  );
};
export default SignUp;