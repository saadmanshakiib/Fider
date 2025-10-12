import {Link, useLocation} from "react-router-dom";
import './Choose.css'
const Choose = () => {
    const location = useLocation();
    const {totalPrice} = location.state || {totalPrice : 0};
    return(
        <div className='container'>
            <div className='choose'>
            <h1 className='header'>Choose Payment Option</h1>
                <ul>
                    <li><Link to='/confirm' state={{totalPrice}}>Cash On Delivery</Link></li>
                    <li><Link to='/bkash' state={{totalPrice}}>Bkash</Link></li>
                    <li><Link to='/nagad' state={{totalPrice}}>Nagad</Link></li>
                </ul>
            </div>
        </div>
    )

}
export default Choose;