import moment from "moment";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 py-2">
            {/* <div className="logo">
                <img src={logo} className="w-[300px]"  alt="" srcset="" />
            </div> */}
            <div>
                <h1 className="logoName">The Bulletin Wire</h1>
            </div>

            <h2 className="text-base-400"> Journalism Without Fear or Feavour</h2>

            <p> {moment().format("dddd, MMMM Do YYYY")}</p>
            
        </div>
    );
};

export default Header;