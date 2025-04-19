import { Link } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import userIcon from "../assets/user.png"


const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div>

            </div>
            <div className="nav space-x-5 ">

                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
                

            </div>
            <div className="login flex gap-2 items-center">
                <div className="">
                    <img src={userIcon} alt="" srcset="" />
                </div>
                    <button className="btn btn-neutral rounded-none px-2">Login</button>

            </div>

            
        </div>
    );
};

export default Navbar;