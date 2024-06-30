/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

  const[values,setValues]=useState({
    email:'',
    password:''
  })

  const [error,setError]=useState(null)

  const navigate=useNavigate()

  axios.defaults.withCredentials=true

  const handleSub=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/auth/adminlogin',values)
    .then(result=> {
      if(result.data.loginStatus){
        localStorage.setItem("valid",true )
        navigate('/dashboard')
      }else{
        setError(result.data.Error)
      }
      
    })
    .catch(err=> console.log(err))

  }


  return (
    <>
      <img src="https://www.einnosys.com/wp-content/uploads/2023/09/Best-Software-Solutions-for-Education-Industry.png" className='log-img' alt="Login" />

      <div className='Login'>
        <form onSubmit={handleSub}>
          <h2>Admin Login</h2>
          
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" name ='email' onChange={(e) => { setValues({...values, email: e.target.value}) }} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" name='password'  onChange={(e) => { setValues({...values,password:e.target.value}) }} className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className='text-danger'>
            {error && error}
          </div>
          <br />
          <button type="submit" className="btn btn-primary btn-sm btn-success w-100 rounded-100">Log In</button>
            
              <input type="checkbox" name='tick'  className="form-check-input my-3 me-1" id="tick" required/>
              <label className=' my-2'  htmlFor="tick">Agree to T&C</label>
           
        </form>
      </div>
    </>
  )
}

export default Login

