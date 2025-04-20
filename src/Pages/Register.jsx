import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Register = () => {

const {createNewUser,setUser,setLoading,updateUserProfile} = useContext(AuthContext);
const [errors, setErrors] = useState({});
const navigate = useNavigate();




const handleSubmit=(event)=>{
    event.preventDefault();

    const form = new FormData(event.target);
   
  const name = form.get("name").trim();
  const email = form.get("email").trim();
  const photo = form.get("photo").trim();
  const password = form.get("password");
    // console.log(name,email,photo,password);
    // Regex patterns
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const urlRegex = /^https?:\/\/.+\.(jpg|jpeg|png|gif|svg|webp)?$/i;

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

  let newErrors = {};

if (!nameRegex.test(name)) {
  newErrors.name = "Name must contain only letters and spaces.";
}

if (!emailRegex.test(email)) {
  newErrors.email = "Please enter a valid email address.";
}

if (!urlRegex.test(photo)) {
  newErrors.photo = "Please enter a valid photo URL.";
}

if (!passwordRegex.test(password)) {
  newErrors.password = "Password must be at least 6 characters, include 1 uppercase and 1 number.";
}

if (Object.keys(newErrors).length > 0) {
  setErrors(newErrors);
  return;
}


    createNewUser(email,password)
    .then((result) => {
        // Signed up 
        const user = result.user;
        setUser(user);
        console.log("Signed up "+user);
        // setLoading(true);
        setErrors({});
        

        updateUserProfile({displayName:name,photoURL:photo}).then(()=>{
            navigate("/");

        }).catch((error)=>{
            console.log(error);
        })
        
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
      });
    

}

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-md shrink-0 rounded-none p-10">

                <h2 className="text-2xl font-semibold text-center pt-3">Register your account</h2>
                <form className="card-body" onSubmit={handleSubmit}>
                    <fieldset className="fieldset">
                    <label className="label">Your name</label>
                    <input type="text" name="name" className="input" placeholder="Name" />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    <label className="label">Photo url</label>
                    <input type="text" name="photo" className="input" placeholder="Photo-url" />
                    {errors.photo && <p className="text-red-500 text-sm">{errors.photo}</p>}
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        <label className="label">Password</label>
                        <input type="password" name="password"  className="input" placeholder="Password" />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>

                    <p className="
                    text-center font-semibold">
                        Already have an account ? <Link className="text-red-500" to={"/auth/login"}> Log In</Link>
                    </p>
                </form>
            </div>

        </div>
    );
};

export default Register;