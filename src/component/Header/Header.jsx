
import { NavLink } from "react-router-dom";

import {AuthContext} from "../../Pages/Provider/AuthProvider"
import { useContext } from "react";

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
        .then()
        .catch()
    };

    const navLinks = (
        <>
          <li><NavLink  to="/" className={({isActive , isPending}) => isPending ? 'pending' : isActive ? 'text-rose-500 underline' : ''}> Home</NavLink></li>
          <li><NavLink  to="/allProducts" className={({isActive , isPending}) => isPending ? 'pending' : isActive ? 'text-rose-500 underline' : ''}>All Products</NavLink></li>

          <li><NavLink to="/addproduct" className={({isActive , isPending}) => isPending ? 'pending' : isActive ? 'text-rose-500 underline' : ''}>Add Products</NavLink></li>

              
   {
      user ? <button onClick={handleSignOut}>Sign Out </button>
      :
      <li><NavLink  to="/Login" className={({isActive , isPending}) => isPending ? 'pending' : isActive ? 'text-rose-500 underline' : ''}>Log In</NavLink></li>
   }
        </>
      )
    
  
    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <img className="h-24 pl-8" src="https://i.ibb.co/Ybtzshh/30.jpg" alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
          {navLinks} 
           
          </ul>
        </div>
      </div>
    );
};

export default Header;