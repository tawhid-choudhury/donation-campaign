import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.png"
import "./Header.css"

const Header = () => {
    return (
        <div className="max-w-[1320px] m-auto">
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <img src={logo} alt="" />
                <div className="flex gap-[50px]">
                    <NavLink className="font-bold" to="/" activeClassName="active">Home</NavLink>
                    <NavLink className="font-bold" to="/donation" activeClassName="active">Donation</NavLink>
                    <NavLink className="font-bold" to="/statistics" activeClassName="active">Statistics</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;