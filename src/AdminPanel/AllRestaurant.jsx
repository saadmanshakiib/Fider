import { useEffect, useState } from "react";
import '/src/Components/AllRestaurants.css';

const AllRestaurant = () => {

    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState("");

    const removeRestaurant = (id) => {
        fetch(`http://localhost:1234/removerestaurants/${id}`, {
            method: "DELETE",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
        })
            .then(response => {
                if (!response.ok) {
                   throw new Error("Failed To Delete");
                }
                return response.text();
            })
            .then(() => {
                alert("Successfully Deleted");
                setRestaurants(prev => prev.filter(r => r.id !== id));
            })
            .catch(error => alert(error.message));
    };


    useEffect(() => {
        fetch(`http://localhost:1234/allrestaurants`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(async (res) => {
                if (!res.ok) {
                    const err = await res.json();
                    throw new Error(err.message || "Failed to fetch restaurants");
                }
                return res.json();
            })
            .then((data) => {
                setRestaurants(data);
            })
            .catch((err) => {
                setError(err.message);
            });
    },[]);

    return (
        <div className="all-restaurants">
            <h1>List Of All Restaurants</h1>

            {
                error && <p className="error-text">{error}</p>
            }

            {
                !error && restaurants.length === 0 && (
                <p className="no-data">No restaurants found</p>
            )
            }

            {restaurants.map((restaurant) => (
                <div
                    key={restaurant.id}
                    className="restaurant-card">
                    <h3>{restaurant.name}</h3>
                    <button onClick={() => removeRestaurant(restaurant.id)}>
                        Remove
                    </button>
                </div>
            ))}
        </div>
    );
};

export default AllRestaurant;





// import {useEffect, useState} from "react";
//
// const AllRestaurant=()=>{
//
//     const [restaurants, setRestaurants] = useState();
//
//
//     useEffect(()=>{
//         fetch("http://localhost:1234/allrestaurants", {
//             credentials: "include",
//             method: "GET",
//             headers: {"content-type": "application/json"},
//         })
//             .then(async (res)=>{
//                 if(!res.ok){
//                     alert(res.json());
//                     return "something went wrong";
//                 }
//                 return res.json();
//             })
//             .then((restaurants)=>{
//                     setRestaurants(restaurants);
//             })
//             .catch((err)=>{
//                 alert(err);
//             })
//     },[])
//
//
//
//     return(
//         <div>
//             <h1>List Of All Restaurants </h1>
//
//         </div>
//     )
//
// }
// export default AllRestaurant;