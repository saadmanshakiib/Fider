
import './Res1.css'

import {useState} from "react";

const Res1 = () => {

    const [amount,setAmount]=useState(0);
    const [burgerPrice,setBurgerPrice]=useState(0);
    const [pizzaPrice,setPizzaPrice]=useState(0);
    const [pizzaAmount,setPizzaAmount]=useState(0);
    const [pizzaAmount2,setPizzaAmount2]=useState(0);
    const [pizzaPrice2,setPizzaPrice2]=useState(0);
///////burger
    const increaseAmount=()=>{
            setAmount(amount+1);
            setBurgerPrice(burgerPrice+230);
    }
    const decreaseAmount=()=>{
        setAmount(amount-1);
        if(amount<=0) {
            setAmount(0);
            setBurgerPrice(0);
        }
        else setBurgerPrice(burgerPrice-230);
    }
//////////pizza1
        const increasePizzaAmount=()=>{
        setPizzaAmount(pizzaAmount+1);
        setPizzaPrice(pizzaPrice + 340);
        }

        const decreasePizzaAmount=()=>{
        setPizzaAmount(pizzaAmount-1);
        if(pizzaAmount<=0){
            setPizzaAmount(0);
            setPizzaPrice(0);
        }
        else setPizzaPrice(pizzaPrice-340);
        }


    const increasePizzaAmount2=()=>{
        setPizzaAmount2(pizzaAmount2+1);
        setPizzaPrice2(pizzaPrice2 + 380);
    }

    const decreasePizzaAmount2=()=>{
        setPizzaAmount2(pizzaAmount2-1);
        if(pizzaAmount2<=0){
            setPizzaAmount2(0);
            setPizzaPrice2(0);
        }
        else setPizzaPrice2(pizzaPrice2-380);
    }


    return (
        <div className="container">
            <h1 className="heading">The Gilded Spoon</h1>

            <div className="snacks-grid">
                <div className='snacks1'>
                    <img className='snacks1_pic' src="/src/images/snacks1.png" alt="burger"/>
                    <h3 className='snacks_name'>Cheese Burger</h3>
                    <p className='des1'>Made With Extra Cheese & Garlic Chicken</p>
                    <div className='controls'>
                        <button className='increase-btn' onClick={decreaseAmount}>-</button>
                        <p>{amount}</p>
                        <button className='decrease' onClick={increaseAmount}>+</button>
                        <p className='burgerPrice'>Price <span>{burgerPrice}</span> BDT</p>
                    </div>
                </div>

                <div className='snacks2'>
                    <img className='snacks2_pic' src="/src/images/snacks2.png" alt="pizza"/>
                    <h3 className='snacks2_name'>No Rise Dough Pizza</h3>
                    <p className='des2'>Made With Special Cheese & Spicy </p>
                   <div className='controls'>
                       <button className='increase-btn' onClick={decreasePizzaAmount}>-</button>
                       <p>{pizzaAmount}</p>
                       <button className='decrease' onClick={increasePizzaAmount}>+</button>
                       <p className='pizzaPrice'>Price <span>{pizzaPrice}</span> BDT</p>
                   </div>
                </div>


                <div className='snacks3'>
                    <img className='snacks3_pic' src="/src/images/snacks3.png" alt="pizza2"/>
                    <h3 className='snacks3_name'>Tomato Mozzarella Pizza</h3>
                    <p className='des3'>Made With Special Cheese & Spicy </p>
                    <div className='controls'>
                        <button className='increase-btn' onClick={decreasePizzaAmount2}>-</button>
                        <p>{pizzaAmount2}</p>
                        <button className='decrease' onClick={increasePizzaAmount2}>+</button>
                        <p className='pizzaPrice2'>Price <span>{pizzaPrice2}</span> BDT</p>
                    </div>
                </div>
            </div>

        </div>
    )
    }
    export default Res1;