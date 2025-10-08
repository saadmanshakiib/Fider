import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
const SignUp = () => {

    const emailRef = useRef();
    const passref = useRef();
    const confirmRef = useRef();
    const navigate = useNavigate();

                const handleSignup = async ()=>{
                   const userInputEmail = emailRef.current.value;
                        if(passref.current.value.length < 6 && passref.current.value.length >=1){
                                alert("Password Must Be 6 Character")
                                passref.current.value = "";
                                confirmRef.current.vaue = "";
                                return;
                        }
                        else if(userInputEmail === "" || passref.current.value === "" || confirmRef.current.value ===""){
                            alert("Please Fill All The Fields");
                        }
                        else if(passref.current.value != confirmRef.current.value){
                            alert("passwords Dont Match");
                            return;
                        }
                        else if(!userInputEmail.endsWith("@gmail.com")){
                            alert("Not a Valid Email");
                            return;
                        }
                        else{

                            if(passref.current.value === confirmRef.current.value && userInputEmail.endsWith("@gmail.com")){

                                const userData = {
                                    email : emailRef.current.value,
                                    password : passref.current.value
                                }
                                    const response = await fetch("http://localhost:1234/signup",{
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify(userData),
                            });
                            const result = await response.text();
                            alert(result);
                            if(result.includes("Created")){
                                navigate("/");
                            }
                        }
                        
                        }
                }

  return (
    <div>
        <div className='signup-page'>
            <div className='input-container-signup'>
            <input 
            type = 'text'
            placeholder='Enter Your Email'
            ref={emailRef}
            required
            />
            <input
            type='password'
            placeholder='Enter Your 6 Digit Password'
            ref = {passref}
            required
            />
            <input
            type='password'
            placeholder='Confirm Your Password'
            ref = {confirmRef}
            required
            />
                        <button onClick={handleSignup}>SignUp</button>
                <button onClick={()=>{navigate('/')}}>Back</button>
        </div>
        </div>
    </div>
  )
}

export default SignUp
