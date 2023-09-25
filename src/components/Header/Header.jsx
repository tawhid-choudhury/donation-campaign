import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png"
import "./Header.css"

const Header = () => {
    return (
        <div className="max-w-[1320px] m-auto py-12">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <img src={logo} alt="" />
                <div className="flex gap-[50px]">
                    <NavLink className="font-bold" to="/" >Home</NavLink>
                    <NavLink className="font-bold" to="/donation" >Donation</NavLink>
                    <NavLink className="font-bold" to="/statistics" >Statistics</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;