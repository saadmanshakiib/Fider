import {useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import './Deliverymansignup.css'
const DeliverymanSignUp=()=>{
    const phoneref = useRef();
    const passref  = useRef();
    const confirmPassref = useRef();
    const nameref = useRef();
    const navigate = useNavigate();

    const handleJoining = async(e)=>{
        e.preventDefault();
        const phoneCheck = phoneref.current.value.length === 11;
        const  passCheck = passref.current.value.length >=6;
        const matchedPass = passref.current.value === confirmPassref.current.value;

            if(phoneCheck && matchedPass && passCheck){
                    try{
                        const response = await fetch('http://localhost:1234/deliverymansignup',{
                            method : "POST",
                            credentials: "include",
                            headers: { "Content-Type": "application/json" },
                            body : JSON.stringify({
                                phone : phoneref.current.value,
                                pass : passref.current.value,
                                name : nameref.current.value,
                            })
                        })

                        const result = await response.text();
                        if(response.status === 200){
                            alert("Account Created Successfully");
                            navigate('/deliverymandashboard');
                        }
                        else if(result.includes("Account Already Exists")){
                        alert(result);
                        }
                    }
                    catch(error){
                        alert(error.message);
                    }

            }
            else {
                alert("Error")
            }
    }

    return(
        <div className="deliverymanSignUp">
                <div className="inputs">
                    <input
                        type="text"
                        placeholder="Enter Your Name"
                        ref = {nameref}
                    />

                    <input
                        type="text"
                        placeholder="Enter Phone Number"
                        ref = {phoneref}
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        ref = {passref}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        ref = {confirmPassref}
                    />
                    <p>Select State : </p>
                            <select>
                                <option></option>
                                <option>Basundhara</option>
                                <option>Baridhara</option>
                                <option>Jatrabari</option>
                                <option>Mogbazar</option>
                                <option>Uttara</option>
                                <option>Shahbagh</option>
                                <option>Motijheel</option>
                            </select>
                <button className="dman-join-btn"
                onClick={handleJoining}
                >Join</button>
                </div>
        </div>
    )
}
export default DeliverymanSignUp;