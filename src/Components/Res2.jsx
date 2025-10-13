
import './Res2.css'

import {useState} from "react";
import {useNavigate} from "react-router-dom";


const Res2 = () => {

    const [amount,setAmount]=useState(0);
    const [kacchiPrice,setKacchiPrice]=useState(0);
    const [khichuriPrice,setKhichuriPrice]=useState(0);
    const [khichuriAmount,setKhicuriAmount]=useState(0);

    const [biriyaniAmount,setBiriyaniAmount]=useState(0);
    const [biriyaniPrice,setBiriyaniPrice]=useState(0);

    const navigate = useNavigate();

    const totalPrice = kacchiPrice + khichuriPrice + biriyaniPrice;

///////burger
    const increaseAmount=()=>{
        setAmount(amount+1);
        setKacchiPrice(kacchiPrice+380);
    }
    const decreaseAmount=()=>{
        setAmount(amount-1);
        if(amount<=0) {
            setAmount(0);
            setKacchiPrice(0);
        }
        else {
            setKacchiPrice(kacchiPrice - 380);
        }
    }

//////////khichuri
    const increaseKhichuriAmount=()=>{
        setKhicuriAmount(khichuriAmount+1);
        setKhichuriPrice(khichuriPrice + 250);
    }

    const decreaseKhichuriAmount=()=>{
        setKhicuriAmount(khichuriAmount-1);
        if(khichuriAmount<=0){
            setKhicuriAmount(0);
            setKhichuriPrice(0);
        }
        else setKhichuriPrice(khichuriPrice-250);
    }


    const increaseBiriyaniAmount=()=>{
        setBiriyaniAmount(biriyaniAmount+1);
        setBiriyaniPrice(biriyaniPrice + 220);
    }

    const decreaseBiriyaniAmount=()=> {
        setBiriyaniAmount(biriyaniAmount - 1);
        if (biriyaniAmount <= 0) {
            setBiriyaniAmount(0);
            setBiriyaniPrice(0);
        } else setBiriyaniPrice(biriyaniPrice - 220);
    }


    return (
        <div className="res2_container">
            <h1 className="res2_heading">Savoré</h1>

            <div className="dinner-grid">
                <div className='dinner1'>
                    <img className='dinner1_pic' src="/src/images/dinner1.png" alt="kacchi"/>
                    <h3 className='dinner1_name'>Special Kacchi</h3>
                    <p className='dinner1_des'>Made With Fresh Imported Meat & Bashumoti Rice</p>
                    <div className='dinner_controls'>
                        <button className='increase-btn' onClick={decreaseAmount}>-</button>
                        <p>{amount}</p>
                        <button className='decrease' onClick={increaseAmount}>+</button>
                        <p className='burgerPrice'>Price <span>{kacchiPrice}</span> BDT</p>
                    </div>
                </div>

                <div className='dinner2'>
                    <img className='dinner2_pic' src="/src/images/dinner2.png" alt="khichuri"/>
                    <h3 className='dinner2_name'>Beef Khichuri </h3>
                    <p className='dinner2_des'>Made With Special Imported Beef & Extra Rice </p>
                    <div className='dinner2_controls'>
                        <button className='increase-btn' onClick={decreaseKhichuriAmount}>-</button>
                        <p>{khichuriAmount}</p>
                        <button className='decrease' onClick={increaseKhichuriAmount}>+</button>
                        <p className='pizzaPrice'>Price <span>{khichuriPrice}</span> BDT</p>
                    </div>
                </div>


                <div className='dinner3'>
                    <img className='dinner3_pic' src="/src/images/dinner3.png" alt="dinner3"/>
                    <h3 className='dinner3_name'>Mutton Biriyani</h3>
                    <p className='des3'>Mutton Biriyani Made With Special Rice & Deshi Murgi</p>
                    <div className='dinner3_controls'>
                        <button className='increase-btn' onClick={decreaseBiriyaniAmount}>-</button>
                        <p>{biriyaniAmount}</p>
                        <button className='decrease' onClick={increaseBiriyaniAmount}>+</button>
                        <p className='biriyaniPrice'>Price <span>{biriyaniPrice}</span> BDT</p>
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
export default Res2;