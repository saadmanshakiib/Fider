import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import './Profile.css'
const Profile = () => {
     const [user, setUser] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const navigate = useNavigate();

        useEffect(() => {
            fetch('http://localhost:1234/me',{
                method: 'GET',
                credentials: "include",
                headers:{"content-Type": "application/json"},
            })

                .then(async (res)=>{
                    if(!res.ok){
                        alert(res);
                        console.log(res);
                    }
                    return res.json();

                })
                .then((data)=>{
                    setUser(data);
                    setLoading(false);
                })
                .catch((err)=>{
                    setError(err.message);
                    setLoading(false);
                })
        }, []);
        if(loading){
            return <p>Loading...</p>;
        }
        if(error){
            return <p>Error: {error.message}</p>;
        }

    return (
        <div className="profile-page">
            <h1>Profile</h1>
            {user ? (
                <div className="profile-card">
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            ) : (
                <p>No user data found.</p>
            )}
            <button onClick={()=>{navigate('/login')}}>Logout</button>
        </div>

    )
}

export default Profile;