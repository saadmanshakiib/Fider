import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Report from "./Components/Report.jsx"
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx";
import Restaurants from "./Components/Restaurants.jsx";

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
                   
                    </Routes>
            </Router>
        </div>
    )
}
export default Routee;