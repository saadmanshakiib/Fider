import { useRef} from "react";
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
        const matchedPass = passref.current.value.length === confirmPassref.current.value;
            if(phoneCheck && matchedPass && passCheck){
               // navigate("/deliverymanhome");
                    try{
                        const resposne = await fetch('http://localhost:1234/deliverymanlogin',{
                            method : "POST",
                            headers:{"content -type": "application/json"},
                            body : JSON.stringify({
                                phone : phoneref.current.value,
                                pass : passref.current.value,
                                nameref : nameref.current.value,
                            })
                        })
                        if(resposne.status === 200){
                            navigate('/mainpage')
                        }
                        else{
                        alert(resposne.message);
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