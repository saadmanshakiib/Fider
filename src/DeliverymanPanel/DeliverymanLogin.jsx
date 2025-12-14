import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Deliverymanlogin.css';

const DeliverymanLogin = () => {

    const phoneref  = useRef();
    const passRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async(e)=> {
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:1234/deliverymanlogin',{
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify({
                    phone: phoneref.current.value,
                    password: passRef.current.value
                })
            });
            if(response.ok){
                navigate('/deliverymandashboard');
            }
            else{
                alert("Error Finding Account");
            }
        }
        catch(error){
            console.log(error);
        }

    }

    /////////////////////sign up for new user///////////////
    const handleNewUser=()=>{
        navigate('/deliverymansignup');
    }
///////////////////////////////////////////////////

    return (
        <div className='login-page'>
            <div className='input-container'>
                <input
                    type='text'
                    placeholder='Enter Your Phone Number'
                    ref={phoneref}

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
                <button onClick={handleNewUser}>Join Our Community As A Deliveryman </button>
            </div>
        </div>
    )
}

export default DeliverymanLogin;
