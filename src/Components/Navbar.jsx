import { Link } from "react-router-dom";

import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {

    //check env variable
    //  console.log(import.meta.env.VITE_a);

    const {user , logOut} = useContext(AuthContext);
    return (
        <div className="flex justify-between items-center">
            <div>
                <p>{user && user.email}</p>
            </div>
            <div className="nav space-x-5 ">

                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
                

            </div>
            <div className="login flex gap-2 items-center">
                <div className="">
                    {user && user.photoURL? (
                        <div className="flex gap-2 items-center">
                             <p>{user.displayName}</p>
                            <img className="w-13 rounded-full" src={user.photoURL} alt=""/>
                           
                        </div>
                    ):
                    <img src={userIcon} alt="" srcset="" />}
                </div>

                {
                    user? <button onClick={logOut} className="btn btn-neutral rounded-none px-2">Log Out</button> :
                    <Link to={'/auth/login'} className="btn btn-neutral rounded-none px-2">Login</Link>
                }

            </div>

            
        </div>
    );
};

export default Navbar;