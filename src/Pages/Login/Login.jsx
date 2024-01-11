import { Link, useLocation, useNavigate } from "react-router-dom";


import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Login = () => {

    const {createUser} = useContext(AuthContext);
   
    const location =useLocation();
    const navigate = useNavigate();
    console.log('location',location)
    


   

    const handleLogin = e => {
        e.preventDefault();
       const form=e.target;
       const email =form.email.value;
       const password =form.password.value;
        console.log(email,password);

        createUser(email,password)
        .then(result => {
            console.log(result.user);
            
            //navigate after login
            navigate (location?.state ? location.state : '/');
        })
        .catch(error => {
            console.error(error);
        })
       
    }
    return (
        <div >

        <h2 className="text-center">Please Login</h2>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mb-6">
      <form onSubmit={handleLogin}className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" required name="email" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered" required name="password" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="pl-4 mb-8">
                Do not have an account? Please{" "}
                <Link to="/register">
                  <button className="btn-link font-bold">Register</button>
                </Link>
              </p>
              
             
    </div>
      </div>
    );
};

export default Login;