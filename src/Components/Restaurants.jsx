import React from 'react'
    import './Restaurants.css'
import {useNavigate} from "react-router-dom";
function Restaurants() {
    const navigate = useNavigate();
  return (
    <div className="all_res">
        <h1>Find Restaurants Here</h1>

        <div className='res1'>
          <h2 className='res1_header'>The Gilded Spoon</h2>
          <img className='res1_img' src='/src/images/res1.png'></img>
          <p className='des1'>Popular For Snacks</p>
            <p>Rating 4.6/5.00</p>
            <button className="btn1" onClick={()=>{navigate('/Res1')}}>Check</button>
      </div>

        <div className='res2'>
            <h2 className='res2_header'>Savoré</h2>
            <img className='res2_img' src='/src/images/res2.png'></img>
            <p className='des2'>Popular For Dinner Items</p>
            <p>Rating 4.8/5.00</p>
            <button className="btn2" onClick={()=>{navigate('/Res2')}}>Check</button>
        </div>


        <div className='res3'>
            <h2 className='res3_header'>FlavorNest</h2>
            <img className='res3_img' src='/src/images/res3.png'></img>
            <p className='des3'>Popular For Breakfast Items</p>
            <p>Rating 4.5/5.00</p>
            <button className="btn3" onClick={()=>{navigate('/Res3')}}>Check</button>
        </div>


        <div className='res4'>
            <h2 className='res4_header'>Fork & Flame</h2>
            <img className='res4_img' src='/src/images/res4.png'></img>
            <p className='des4'>Popular For Lunch Items</p>
            <p>Rating 4.6/5.00</p>
            <button className="btn4" onClick={()=>{navigate('/Res4')}}>Check</button>
        </div>


        <div className='res5'>
            <h2 className='res5_header'>Juice Bar</h2>
            <img className='res5_img' src='/src/images/res5.png'></img>
            <p className='des5'>Popular For Juice Items</p>
            <p>Rating 4.5/5.00</p>
            <button className="btn5" onClick={()=>{navigate('/Res5')}}>Check</button>
        </div>


        <div className='res6'>
            <h2 className='res6_header'>Desert Hub</h2>
            <img className='res6_img' src='/src/images/res6.png'></img>
            <p className='des6'>Popular For Desert Items</p>
            <p>Rating 4.4/5.00</p>
            <button className="btn6" onClick={()=>{navigate('/Res6')}}>Check</button>
        </div>

    </div>
  )
}

export default Restaurants
