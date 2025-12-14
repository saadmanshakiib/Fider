import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import './DeliverymanDashboard.css';
const DeliverymanDashboard = () => {

    const navigate = useNavigate();

    const [deliveryman, setDeliveryman] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:1234/deliveryman_me", {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
        })
            .then(async (response) => {
                if (!response.ok) {
                    const msg = await response.text();
                    throw new Error(msg);
                }
                return response.json();
            })
            .then((data) => {
                setDeliveryman(data);
                setLoading(false);
            })
            .catch((err) => {
                alert(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!deliveryman) {
        return <div>No profile found</div>;
    }

    return (
        <div>
            <h1>Deliveryman Dashboard</h1>
            <div className="profile">
                <h1>Name: {deliveryman.name}</h1>
                <h1>Phone: {deliveryman.phone}</h1>

            <div className="logout-btn">
                <button className="lg-out-btn" onClick={()=>navigate("/DeliveryMan_login")}>Logout</button>
            </div>

            </div>
        </div>
    );
};

export default DeliverymanDashboard;
