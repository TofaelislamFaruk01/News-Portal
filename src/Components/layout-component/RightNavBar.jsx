import FindUs from "../FindUs";
import SocialLogIn from "../SocialLogIn";


const RightNavBar = () => {
    return (
        <div className="space-y-5">
            <SocialLogIn/>
            <FindUs/>
            
        </div>
    );
};

export default RightNavBar;