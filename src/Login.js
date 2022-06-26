import React,{useState} from 'react'
import './Login.css'
import {Link} from "react-router-dom"


function Login() {
  const [email,setemail] = useState('')
  const [password,setPassword] = useState('')



  return (
    <div className='login'>
      <Link to='/'>
      <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt="amzlogo"/>
     </Link>

     <div className='login__container'>
       <h1>Sign in</h1>
       <form>
         <h5>E-mail</h5>
         <input type='text'  />

         <h5>password</h5>
         <input type='password'  />

         <button type='submit'  className='login__signinbtn'>Sign In</button>

         <p>By continuing, you agree to Amazon's Clone Conditions of<a href=''>Use and Privacy Notice</a> .</p>
       </form>
       <button className='login__registerbtn'>Create your amazon account</button>

     </div>

     <div className='signin__footer'>
       <a href=''>Conditions of use</a>
       <a href=''>Privacy noticce</a>
       <a href=''>Help</a>
     </div>
     <p className='copyright'>© 2001-2022, Amazon.clone, Inc. or its affiliates</p>

    </div>
  )
}

export default Login