import {useNavigate} from "react-router-dom";

const adminPage=()=>{
    const navigate=useNavigate();
    return(
        <div>
            <div className="header"><h1>Admin Panel</h1></div>
            <div className="container">

                <button className="add-restaurant-btn" onClick={()=>navigate("/addrestaurant")}>Add Restaurant</button>
                <button className="dlt-restaurant-btn" onClick={()=>navigate("/deleterestaurant")}>Delete Restaurant</button>
                <button className="view-res-btn"onClick={()=>navigate("/allrestaurants")}>View All Restaurants</button>
                <button className="add-deliveryman-btn" onClick={()=>navigate("/adddeliveryman")}>Add Deliveryman</button>
                <button className="remove-deliveryman-btn" onClick={()=> navigate("/removedeliveryman")}>Remove Deliveryman</button>
            </div>
        </div>
    )
}
export default adminPage;