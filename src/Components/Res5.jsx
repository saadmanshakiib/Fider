
import './Res5.css'

import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Res5 = () => {

    const [amount,setAmount]=useState(0);
    const [mangoJuicePrice,setMangoJuicePrice]=useState(0);

    const [lichiPrice,setLichiPrice]=useState(0);
    const [lichiAmount,setLichiAmount]=useState(0);

    const [orangeAmount,setOrangeAmount]=useState(0);
    const [orangePrice,setOrangePrice]=useState(0);

    const navigate = useNavigate();

    const totalPrice = orangePrice + lichiPrice + mangoJuicePrice;

///////burger
    const increaseAmount=()=>{
        setAmount(amount+1);
        setMangoJuicePrice(mangoJuicePrice+50);
    }
    const decreaseAmount=()=>{
        setAmount(amount-1);
        if(amount<=0) {
            setAmount(0);
            setMangoJuicePrice(0);
        }
        else {
            setMangoJuicePrice(mangoJuicePrice - 50);
        }
    }

//////////pizza1
    const increaseLichyAmount=()=>{
        setLichiAmount(lichiAmount+1);
        setLichiPrice(lichiPrice + 70);
    }

    const decreaseLichyAmount=()=>{
        setLichiAmount(lichiAmount-1);
        if(lichiAmount<=0){
            setLichiAmount(0);
            setLichiPrice(0);
        }
        else setLichiPrice(lichiPrice-70);
    }


    const increaseOrangeAmount=()=>{
        setOrangeAmount(orangeAmount+1);
        setOrangePrice(orangePrice + 50);
    }

    const decreaseOrangeAmount=()=> {
        setOrangeAmount(orangeAmount - 1);
        if (orangeAmount <= 0) {
            setOrangeAmount(0);
            setOrangePrice(0);
        } else setOrangePrice(orangePrice - 50);
    }


    return (
        <div className="res5_container">
            <h1 className="res5_heading">Juice Bar</h1>

            <div className="juice-grid">
                <div className='juice1'>
                    <img className='juice1_pic' src="/src/images/juice1.png" alt=""/>
                    <h3 className='b_name'>Mango Juice</h3>
                    <p className='juice1_des'>Made With Fresh Mangoes</p>
                    <div className='juice1_controls'>
                        <button className='increase-btn' onClick={decreaseAmount}>-</button>
                        <p>{amount}</p>
                        <button className='decrease' onClick={increaseAmount}>+</button>
                        <p className='Price'>Price <span>{mangoJuicePrice}</span> BDT</p>
                    </div>
                </div>

                <div className='juice2'>
                    <img className='juice2_pic' src="/src/images/juice2.png" alt=""/>
                    <h3 className='juice2_name'>Lichi Juice</h3>
                    <p className='juice2_des'>Special Homemade Lichi Juice</p>
                    <div className='controls'>
                        <button className='increase-btn' onClick={decreaseLichyAmount}>-</button>
                        <p>{lichiAmount}</p>
                        <button className='decrease' onClick={increaseLichyAmount}>+</button>
                        <p className='lichiPrice'>Price <span>{lichiPrice}</span> BDT</p>
                    </div>
                </div>


                <div className='juice3'>
                    <img className='juice3_pic' src="/src/images/orange.png" alt=""/>
                    <h3 className='juice3_name'>Orange Juice</h3>
                    <p className='juice3_des'>Made With Imported Orange</p>
                    <div className='controls'>
                        <button className='increase-btn' onClick={decreaseOrangeAmount}>-</button>
                        <p>{orangeAmount}</p>
                        <button className='decrease' onClick={increaseOrangeAmount}>+</button>
                        <p className='orangePrice'>Price <span>{orangePrice}</span> BDT</p>
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
export default Res5;