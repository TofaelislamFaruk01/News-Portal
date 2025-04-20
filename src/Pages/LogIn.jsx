import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const LogIn = () => {

    const {setUser,logIn,setLoading}=useContext(AuthContext);
    const [error,setError]=useState(null);
    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email= form.email.value;
        const password = form.password.value;
        // console.log({email,password});
        logIn(email,password)
        .then((result)=>{
            // console.log("Signed in")
        const user = result.user;
        setUser(user);
        // setLoading(true);
        navigate(location?.state ? location.state : "/");
        }
            
        )
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorCode,errorMessage);
            setError(errorCode);
          });
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none p-10">

                <h2 className="text-2xl font-semibold text-center pt-3">Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name="password"  className="input" placeholder="Password" />
                        {
                            error && <p className="text-red-500 text-sm">{error}</p>
                        }


                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>

                    <p className="
                    text-center font-semibold">
                        Don't have an account ? <Link className="text-red-500" to={"/auth/register"}> Register</Link>
                    </p>
                </form>
            </div>

        </div>


    );
};

export default LogIn;