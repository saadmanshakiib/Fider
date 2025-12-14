import React from 'react'
import './Hero.css'
import {useNavigate} from "react-router-dom";
const Hero = () => {
const navigate = useNavigate();

  return (
    <div>
      <div className='des'>
        <img className="des_pic" src='/src/images/home.png'/>
        <h3 className='about'>ABOUT FIDER</h3>
    <div className='desc'>
          <p className='description'>
Fider is your all-in-one food delivery companion that brings delicious meals from your favorite restaurants straight to your door. Our platform bridges the gap between local eateries, cloud kitchens, and customers, making food ordering fast, reliable, and enjoyable.

With Fider, you can explore a wide variety of cuisines — from spicy street food to premium restaurant dishes — all available in one simple app. We partner with trusted restaurants and delivery partners to ensure every meal arrives fresh, hot, and on time.<br/>

🚀 What Makes Fider Special<br/>

🍔 Discover Restaurants: Browse nearby restaurants and explore menus from different cuisines.<br/>

🛵 Fast Delivery: Our smart delivery system assigns the nearest rider to deliver your food quickly.<br/>

💳 Secure Payments: Enjoy seamless and secure checkout options.<br/>

⭐ Restaurant Reviews: Check real user ratings before you order.<br/>

Whether it’s lunch at work, dinner at home, or a midnight snack craving, Fider makes food delivery effortless and enjoyable.        
        </p>
    </div>


          {/*</div>*/}
          <div className='login-btn-dm'>
              <button className="dm-login-btn"
              onClick={() => {navigate('/DeliveryMan_login')}}>
              Delivery Man Login</button>
              <button className="user-login-btn" onClick={()=>navigate("/login")}>User Login</button>
          </div>
      </div>
    </div>
  )
}

export default Hero
