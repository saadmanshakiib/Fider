import {useRef} from "react";
import '/src/AdminPanel/AddRestaurant.css';
const AddRestaurant=()=>{

    const restaurantNameRef = useRef();

    const handleAdd = async()=>{
       const response =  await fetch("http://localhost:1234/addrestaurants",{
            method : "POST",
            credentials : "include",
            headers : {"content-type" : "application/json"},
            body : JSON.stringify({
                name: restaurantNameRef.current.value
            })
        })

       if(response.status === 200){
           alert("Restaurant added successfully.");
       }
       else{
           alert(response.message);
       }
    }


    return (
        <div className="add-restaurant">
            <div className="add-restaurant-box">
                <div className="add-restaurant-inputs">
                    <input
                        type="text"
                        placeholder="Restaurant name"
                        ref={restaurantNameRef}
                    />
                    <button
                        className="addRestaurantButton"
                        onClick={handleAdd}
                    >
                        Add Restaurant
                    </button>
                </div>
            </div>
        </div>
    );


}
export default AddRestaurant;