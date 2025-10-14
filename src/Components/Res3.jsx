
import './Res3.css'

import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Res3 = () => {

    const [amount,setAmount]=useState(0);
    const [specialPrice,setSpecialPrice]=useState(0);
    const [coffeePrice,setCoffeePrice]=useState(0);
    const [coffeeAmount,setCoffeeAmount]=useState(0);
    const [omletAmount,setOmletAmount]=useState(0);
    const [omletPrice,setOmletPrice]=useState(0);

    const navigate = useNavigate();

    const totalPrice = omletPrice + coffeePrice + specialPrice;

///////burger
    const increaseAmount=()=>{
        setAmount(amount+1);
        setSpecialPrice(specialPrice+150);
    }
    const decreaseAmount=()=>{
        setAmount(amount-1);
        if(amount<=0) {
            setAmount(0);
            setSpecialPrice(0);
        }
        else {
            setSpecialPrice(specialPrice - 150);
        }
    }

//////////pizza1
    const increaseCoffeeAmount=()=>{
        setCoffeeAmount(coffeeAmount+1);
        setCoffeePrice(coffeePrice + 370);
    }

    const decreaseCoffeeAmount=()=>{
        setCoffeeAmount(coffeeAmount-1);
        if(coffeeAmount<=0){
            setCoffeeAmount(0);
            setCoffeePrice(0);
        }
        else setCoffeePrice(coffeePrice-370);
    }


    const increaseOmletAmount=()=>{
        setOmletAmount(omletAmount+1);
        setOmletPrice(omletPrice + 120);
    }

    const decreaseOmletAmount=()=> {
        setOmletAmount(omletAmount - 1);
        if (omletAmount <= 0) {
            setOmletAmount(0);
            setOmletPrice(0);
        } else setOmletPrice(omletPrice - 120);
    }


    return (
        <div className="res3_container">
            <h1 className="res3_heading">FlavorNest</h1>

            <div className="breakfast-grid">
                <div className='b1'>
                    <img className='b1_pic' src="/src/images/b1.png" alt="egg"/>
                    <h3 className='b_name'>Special Breakfast</h3>
                    <p className='b1_des'>Fresh Omlets & 2 Piece of Breads With Mango Juice </p>
                    <div className='b1_controls'>
                        <button className='increase-btn' onClick={decreaseAmount}>-</button>
                        <p>{amount}</p>
                        <button className='decrease' onClick={increaseAmount}>+</button>
                        <p className='Price'>Price <span>{specialPrice}</span> BDT</p>
                    </div>
                </div>

                <div className='b2'>
                    <img className='b2_pic' src="/src/images/b2.png" alt="pizza"/>
                    <h3 className='b2_name'>Coffee</h3>
                    <p className='b2_des'>Coffee with Bread </p>
                    <div className='controls'>
                        <button className='increase-btn' onClick={decreaseCoffeeAmount}>-</button>
                        <p>{coffeeAmount}</p>
                        <button className='decrease' onClick={increaseCoffeeAmount}>+</button>
                        <p className='coffeePrice'>Price <span>{coffeePrice}</span> BDT</p>
                    </div>
                </div>


                <div className='b3'>
                    <img className='b3_pic' src="/src/images/b3.png" alt="omlet"/>
                    <h3 className='b3_name'>Fresh Omlet</h3>
                    <p className='b3_des'>Made With Special Masala & Spice </p>
                    <div className='controls'>
                        <button className='increase-btn' onClick={decreaseOmletAmount}>-</button>
                        <p>{omletAmount}</p>
                        <button className='decrease' onClick={increaseOmletAmount}>+</button>
                        <p className='omletPrice'>Price <span>{omletPrice}</span> BDT</p>
                    </div>
                </div>
            </div>
            <div className='cart'>
                <button className="cart-btn" onClick={
                    ()=>{
                        if(totalPrice !== 0){
                            navigate('/choose',{state : {totalPrice}});
                        }
                        else{
                            alert("Empty Cart");
                            return;
                        }
                    }}>Cart <span>{totalPrice}</span></button>
            </div>

        </div>
    )
}
export default Res3;