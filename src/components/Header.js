import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () =>{
    const [btnlogin,setBtnLogin] = useState("Login");
    const onlineStatus =  useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="flex justify-between items-center shadow-md bg-white sticky top-0">
            <div className="logo">
                <img className="w-24" src={LOGO_URL} alt="logo" />
            </div>
            <div className="">
                <ul className="flex m-5">
                    <li className="px-4 font-bold hover:text-orange-500">Online Status: {onlineStatus? 'online':'offline'}</li>
                    <li className="px-4 font-bold hover:text-orange-500 "><Link to="/">Home </Link></li>
                    <li className="px-4 font-bold hover:text-orange-500"><Link to="/about">About Us</Link></li>
                    <li className="px-4 font-bold hover:text-orange-500"><Link to="/contact">Contact</Link></li>
                    <li className="px-4 font-bold hover:text-orange-500">Cart</li>
                    <li className="px-4"><button className="bg-blue-300 px-4 rounded-md text-white" onClick={()=>{
                        btnlogin=="Login"?setBtnLogin("Logout"):setBtnLogin("Login");
                    }}>{btnlogin}</button></li>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
}
export default Header;