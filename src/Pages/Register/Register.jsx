
import {  useContext } from 'react';
import  {AuthContext} from '../Provider/AuthProvider';
import { Link } from "react-router-dom";


const Register = () => {
    const {createUser} =useContext (AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name =form.get('name');
        const email =form.get('email');
        const password =form.get('password');
        console.log(name, email, password);

        // create user 
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
       <div className="items-center ">
       

        <h2 className="text-center">Please Register</h2>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mb-6">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="Text" placeholder="Name" required name="name" className="input input-bordered"  />
        </div>
       
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
          Forgot password?
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center pb-4">Already have an account <Link to="/login" className="text-pink-500 font-semibold">Login</Link> </p>
    </div>
      </div>
    );
};

export default Register;