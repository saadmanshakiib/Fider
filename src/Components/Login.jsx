import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const emailRef  = useRef();
    const passRef = useRef();
    const navigate = useNavigate();

        const handleSubmit = async(e)=>{
              e.preventDefault();
               try{
                   const response = await fetch('http://localhost:1234/login',{
                       method: 'POST',
                       headers: {'content-type': 'application/json'},
                       body: JSON.stringify({
                       email: emailRef.current.value,
                       password: passRef.current.value
                   })
               });
                   if(response.status === 200){
                        navigate('/mainpage');
                   }
                   else{
                       alert("Error Finding Account");
                       return;
                   }
               }
               catch(error){
                   console.log(error);
               }
              
        }

        const handleNewUser=()=>{
                navigate('/SignUp');
        }


  return (
  <div className='login-page'>
      <div className='input-container'>
            <input
            type='text'
            placeholder='Enter Your Email'
            ref={emailRef}
            
            />
            <input
            type='password'
            placeholder = 'Enter Your Password'
            ref={passRef}
            />
            <button 
            onClick={handleSubmit}
            type='submit'
            >Login</button>

            <h3 className='newUser'>Doesnt Have Any Account?</h3>
            <button onClick={handleNewUser}>Create New Account</button>
    </div>
  </div>
  )
}

export default Login
