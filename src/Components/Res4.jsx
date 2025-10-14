
import './Res4.css'

import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Res4 = () => {

    const [amount,setAmount]=useState(0);
    const [hilshaPrice,setHilshaPrice]=useState(0);

    const [specialPrice,setSpecialPrice]=useState(0);
    const [specialAmount,setSpecialAmount]=useState(0);

    const [chingriAmount,setChingriAmount]=useState(0);
    const [chingriPrice,setChingriPrice]=useState(0);

    const navigate = useNavigate();

    const totalPrice = chingriPrice + specialPrice + hilshaPrice;

///////burger
    const increaseAmount=()=>{
        setAmount(amount+1);
        setHilshaPrice(hilshaPrice+200);
    }
    const decreaseAmount=()=>{
        setAmount(amount-1);
        if(amount<=0) {
            setAmount(0);
            setHilshaPrice(0);
        }
        else {
            setHilshaPrice(hilshaPrice - 200);
        }
    }

//////////pizza1
    const increaseSpecialAmount=()=>{
        setSpecialAmount(specialAmount+1);
        setSpecialPrice(specialPrice + 370);
    }

    const decreaseSpecialAmount=()=>{
        setSpecialAmount(specialAmount-1);
        if(specialAmount<=0){
            setSpecialAmount(0);
            setSpecialPrice(0);
        }
        else setSpecialPrice(specialPrice-370);
    }


    const increaseChingriAmount=()=>{
        setChingriAmount(chingriAmount+1);
        setChingriPrice(chingriPrice + 180);
    }

    const decreaseChingriAmount=()=> {
        setChingriAmount(chingriAmount - 1);
        if (chingriAmount <= 0) {
            setChingriAmount(0);
            setChingriPrice(0);
        } else setChingriPrice(chingriPrice - 180);
    }


    return (
        <div className="res4_container">
            <h1 className="res4_heading">Fork & Flame</h1>

            <div className="lunch-grid">
                <div className='lunch1'>
                    <img className='lunch1_pic' src="/src/images/lunch1.png" alt=""/>
                    <h3 className='b_name'>Hilsha Fish Curry</h3>
                    <p className='lunch1_des'>With One Plate Full Of Rice & Extra Curry</p>
                    <div className='lunch1_controls'>
                        <button className='increase-btn' onClick={decreaseAmount}>-</button>
                        <p>{amount}</p>
                        <button className='decrease' onClick={increaseAmount}>+</button>
                        <p className='Price'>Price <span>{hilshaPrice}</span> BDT</p>
                    </div>
                </div>

                <div className='lunch2'>
                    <img className='lunch2_pic' src="/src/images/lunch2.png" alt=""/>
                    <h3 className='lunch2_name'>Special Bengali Platter</h3>
                    <p className='lunch2_des'>Special Platter With 3 Types of Bhorta and 1 Piece Hilsha</p>
                    <div className='controls'>
                        <button className='increase-btn' onClick={decreaseSpecialAmount}>-</button>
                        <p>{specialAmount}</p>
                        <button className='decrease' onClick={increaseSpecialAmount}>+</button>
                        <p className='specialPrice'>Price <span>{specialPrice}</span> BDT</p>
                    </div>
                </div>


                <div className='lunch3'>
                    <img className='lunch3_pic' src="/src/images/lunch3.png" alt=""/>
                    <h3 className='lunch3_name'>Chingri Torkari</h3>
                    <p className='lunch3_des'>Served With 3 Piece Of Chingri With Curry</p>
                    <div className='controls'>
                        <button className='increase-btn' onClick={decreaseChingriAmount}>-</button>
                        <p>{chingriAmount}</p>
                        <button className='decrease' onClick={increaseChingriAmount}>+</button>
                        <p className='chingriPrice'>Price <span>{chingriPrice}</span> BDT</p>
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
export default Res4;