import {useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";
//import './Nagad.css'

const Nagad=()=>{
    const numRef = useRef(null);
    const passRef = useRef(null);
    const navigate = useNavigate();

    const location = useLocation();
    const {totalPrice} = location.state || {totalPrice : 0};

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const number = await fetch("http://localhost:1234/nagad",{
                method: "POST",
                headers: {"content-type":"application/json"},
                body: JSON.stringify({
                    number : numRef.current.value,
                    password : passRef.current.value
                })
            })

            const result = await number.text();

            if(result.includes("No Nagad User Found")){
                alert('No Matched Account Found');
            }
            else{
                const balanceCheck = await fetch(`http://localhost:1234/checkbalance/${numRef.current.value}`, {
                    method: "GET",
                    headers: {"Content-Type": "application/json"}
                });

                const balance = await balanceCheck.json();
                if(balance < totalPrice){
                    alert("Low Balance");
                }
                else{
                    alert("Payment Confirmed of tk "+totalPrice);
                    navigate('/restaurants');
                }
            }
        }
        catch(err){
            alert(err);
        }
    }


    return(
        <div className="payment">
            <h1 className="heading1">Payment Page</h1>
            <div className="inputs">
                <input
                    type="text"
                    placeholder="Enter Nagad Mobile Number"
                    ref={numRef}
                />
                <input
                    type='password'
                    placeholder="Enter Nagad Password"
                    ref={passRef}
                />
                <button type ='submit' className="button" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}
export default Nagad;