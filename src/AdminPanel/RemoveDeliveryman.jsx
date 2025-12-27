// import {useEffect} from "react";

import {useEffect, useState} from "react";

const RemoveDeliveryman = ()=>{

    const [deliveryman, setDeliveryman] = useState([]);

    const removeDeliveryman = (id)=>{

    fetch(`/http://localhost:1234/removedeliveryman/${id}`, {
        method: "DELETE",
        credentials: "include",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then( async (res)=>{
        if(!res.status === 200){
            alert("something went wrong!");
        }
        return res.text();
    }).then(()=>{
        alert("Successfully Deleted");
        setDeliveryman(prev => prev.filter(r => r.id !== id));
    })

    }

    useEffect(()=>{

        fetch('http://localhost:1234/removedeliveryman',{
            method : "GET",
            credentials : "include",
            headers : {"content-type" : "application/json"}

        })
            .then( async (res)=>{
                if(!res.ok){
                    alert("Falied to load");
                }
                return res.json();
            })
            .then((data)=>{
                setDeliveryman(data);
            })
    },[])


    return(
        <div className="removeDeliveryman">
            <h1 className="list">List Of All Deliverymen </h1>
            <div className="list">
                {deliveryman.map((deliveryman)=> (
                    <div
                        key={deliveryman.id}
                        className="restaurant-card">
                        <h3>{deliveryman.name}</h3>
                        <button onClick={() => removeDeliveryman(deliveryman.id)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default RemoveDeliveryman;