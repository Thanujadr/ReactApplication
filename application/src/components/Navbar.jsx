import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <div className="nav">
        <Link to="/home"> <h1 id="header">Dog Breeds</h1></Link> 
            <div id="line"></div>
        </div>
    )
}
export default Navbar;