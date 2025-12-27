import {useRef} from "react";
import './AddDeliveryman.css'
const AddDeliveryman=()=>{

    const deliverymanNumRef = useRef();
    const deliverymanNameRef = useRef()
    const deliverymanPassRef = useRef();

    const handleDeliverymanAdd = async()=> {
        if (deliverymanPassRef.current.value.length >= 6 && deliverymanNumRef.current.value.length === 11) {
            const response = await fetch("http://localhost:1234/adddeliveryman", {
                method: "POST",
                credentials: "include",
                headers: {"content-type": "application/json"},
                body: JSON.stringify({
                    name: deliverymanNameRef.current.value,
                    phone: deliverymanNumRef.current.value,
                    password: deliverymanPassRef.current.value,
                })
            })
            if (response.status === 200) {
                alert("Deliveryman Added Successfully");
            }
            else {
              const res = await response.text()
              alert(res);
            }
        } else {
            alert("please fill all the fields correctly");
        }
    }
    return(
        <div className="add-deliveryman">
            <div className="add-deliveryman-box">
                <div className="add-deliveryman-inputs">
                    <input
                        type="text"
                        placeholder="Deliveryman Name"
                        ref={deliverymanNameRef}
                    />
                    <input
                        type="text"
                        placeholder="Deliveryman Phone Number"
                        ref={deliverymanNumRef}
                    />
                    <input
                        type="password"
                        placeholder="Deliveryman Phone Password For Login"
                        ref={deliverymanPassRef}
                    />
                    <button
                        className="addDeliverymanButton"
                        onClick={handleDeliverymanAdd}
                    >
                        Add Deliveryman
                    </button>
                </div>
            </div>
        </div>

    )

}
export default AddDeliveryman;