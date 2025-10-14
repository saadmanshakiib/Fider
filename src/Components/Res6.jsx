
import './Res6.css'

import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Res6 = () => {

    const [amount,setAmount]=useState(0);
    const [cupcakePrice,setCupcakePrice]=useState(0);

    const [faludaPrice,setFaludaPrice]=useState(0);
    const [faludaAmount,setFaludaAmount]=useState(0);

    const [icecreamAmount,setIcecreamAmount]=useState(0);
    const [icecreamPrice,setIceCreamPrice]=useState(0);

    const navigate = useNavigate();

    const totalPrice = icecreamPrice + faludaPrice + cupcakePrice;

///////burger
    const increaseAmount=()=>{
        setAmount(amount+1);
        setCupcakePrice(cupcakePrice+80);
    }
    const decreaseAmount=()=>{
        setAmount(amount-1);
        if(amount<=0) {
            setAmount(0);
            setCupcakePrice(0);
        }
        else {
            setCupcakePrice(cupcakePrice - 80);
        }
    }

//////////pizza1
    const increaseFaludaAmount=()=>{
        setFaludaAmount(faludaAmount+1);
        setFaludaPrice(faludaPrice + 70);
    }

    const decreaseFaludaAmount=()=>{
        setFaludaAmount(faludaAmount-1);
        if(faludaAmount<=0){
            setFaludaAmount(0);
            setFaludaPrice(0);
        }
        else setFaludaPrice(faludaPrice-70);
    }


    const increaseIcecreamAmount=()=>{
        setIcecreamAmount(icecreamAmount+1);
        setIceCreamPrice(icecreamPrice + 50);
    }

    const decreaseIcecreamAmount=()=> {
        setIcecreamAmount(icecreamAmount - 1);
        if (icecreamAmount <= 0) {
            setIcecreamAmount(0);
            setIceCreamPrice(0);
        } else setIceCreamPrice(icecreamPrice - 50);
    }


    return (
        <div className="res6_container">
            <h1 className="res6_heading">Dessrt Hub</h1>

            <div className="dessert-grid">
                <div className='d1'>
                    <img className='d1_pic' src="/src/images/d1.png" alt=""/>
                    <h3 className='b_name'>Cupcake</h3>
                    <p className='d1_des'>Made With Chocolate Flavour</p>
                    <div className='d1_controls'>
                        <button className='increase-btn' onClick={decreaseAmount}>-</button>
                        <p>{amount}</p>
                        <button className='decrease' onClick={increaseAmount}>+</button>
                        <p className='Price'>Price <span>{cupcakePrice}</span> BDT</p>
                    </div>
                </div>

                <div className='d2'>
                    <img className='d2_pic' src="/src/images/d2.png" alt=""/>
                    <h3 className='d2_name'>Faluda</h3>
                    <p className='d2_des'>Special Homemade Faluda</p>
                    <div className='controls'>
                        <button className='increase-btn' onClick={decreaseFaludaAmount}>-</button>
                        <p>{faludaAmount}</p>
                        <button className='decrease' onClick={increaseFaludaAmount}>+</button>
                        <p className='faludaPrice'>Price <span>{faludaPrice}</span> BDT</p>
                    </div>
                </div>


                <div className='d3'>
                    <img className='d3_pic' src="/src/images/orange.png" alt=""/>
                    <h3 className='d3_name'>Melona Ice Cream</h3>
                    <p className='d3_des'>Imported Ice Cream</p>
                    <div className='controls'>
                        <button className='increase-btn' onClick={decreaseIcecreamAmount}>-</button>
                        <p>{icecreamAmount}</p>
                        <button className='decrease' onClick={increaseIcecreamAmount}>+</button>
                        <p className='icecreamPrice'>Price <span>{icecreamPrice}</span> BDT</p>
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
export default Res6;