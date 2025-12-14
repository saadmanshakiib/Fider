import {useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import './Bkash.css'
const Bkash=()=>{
    const numRef = useRef(null);
    const passRef = useRef(null);
    const navigate = useNavigate();

            const location = useLocation();
            const {totalPrice} = location.state || {totalPrice : 0};

        const handleSubmit = async (e) => {
            e.preventDefault();
            try{
                const number = await fetch("http://localhost:1234/bkash",{
                    method: "POST",
                    headers: {"content-type":"application/json"},
                    body: JSON.stringify({
                        number : numRef.current.value,
                        password : passRef.current.value
                    })
                })

                const result = await number.text();

                if(result.includes("No Bkash User Found")){
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
                        await fetch(`http://localhost:1234/saveorder`, {
                            method : "POST",
                            credentials : "include",
                            headers : {"content-type" : "application/json"},
                            body: JSON.stringify({
                                // restaurantId : location.state?.restaurantId || 1,
                                totalPrice: totalPrice
                            })

                        })
                        navigate('/restaurants',{replace : true});
                    }
                }
            }
            catch(err){
                alert(err);
            }
        }


return(
    <div className="payment">
    <h1 className="heading1">Bkash Payment </h1>
        <div className="inputs">
            <input
            type="text"
            placeholder="Enter Bkash Mobile Number"
            ref={numRef}
            />
            <input
            type='password'
            placeholder="Enter Bkash Password"
            ref={passRef}
            />
            <button type ='submit' className="button" onClick={handleSubmit}>Submit</button>
        </div>
    </div>
)
}
export default Bkash;