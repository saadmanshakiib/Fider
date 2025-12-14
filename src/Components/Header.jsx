       import {Link} from "react-router-dom";
       import './Header.css'

        const Header=()=>{
                return(
                    <>
                    <div className="header">
                        <h2>FIDER</h2>
                    </div>
                        <nav className="Nav">
                            <ul className = "navLinks">
                                <li><Link to="/mainpage">Home</Link></li>
                                {/*<li><Link to="/restaurants">Restaurants</Link></li>*/}
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/report">Report</Link></li>
                            </ul>
                        </nav>

                    </>

                )
        }
        export default Header;