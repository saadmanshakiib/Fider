import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Report from "./Components/Report.jsx"
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx";
import Restaurants from "./Components/Restaurants.jsx";
import Res1 from "./Components/Res1.jsx";
import Res2 from "./Components/Res2.jsx";
import Res3 from "./Components/Res3.jsx";
import Res4 from "./Components/Res4.jsx";
import Res5 from "./Components/Res5.jsx";
import Res6 from "./Components/Res6.jsx";
import Bkash from "./Components/Bkash.jsx";
import Choose from "./Components/Choose.jsx";
import Nagad from "./Components/Nagad.jsx";

const Routee=()=>{
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/mainpage"
                           element={
                        <>
                            <Header/>
                            <Hero/>
                            <Footer/>
                        </>
                    }
                    />

                    <Route path="/about" element={<About/>}/>
                    <Route path="/report" element={<Report/>}/>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path="/restaurants" element={<Restaurants/>}/>

                    <Route path="/Res1" element={<Res1/>}/>
                    <Route path="/Res2" element={<Res2/>}/>
                    <Route path="/Res3" element={<Res3/>}/>
                    <Route path="/Res4" element={<Res4/>}/>
                    <Route path="/Res6" element={<Res6/>}/>
                    <Route path="/Res5" element={<Res5/>}/>
                    <Route path="/choose" element={<Choose/>}/>
                    <Route path="/bkash" element={<Bkash/>}/>
                    <Route path="/nagad" element={<Nagad/>}/>




                </Routes>
            </Router>
        </div>
    )
}
export default Routee;