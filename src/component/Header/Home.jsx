import { Link, useLoaderData } from "react-router-dom";
import App from "../../App";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Banner from "./Banner";

import Brandcard from "../Category/Brandcard";
import { useEffect } from "react";


const Home = () => {
    const brandscard = useLoaderData();

    useEffect(() => {
      AOS.init();
    }, [])
    return (
        <div>
            <Banner></Banner>
           
           <div className="text-center p-6 font-semibold text-xl my-8">
       <h2>“Take your skincare routine to the next level with Wholy Dose. The <br /> clean and pure ingredients help plump skin.”</h2>
           </div>

            <div className="py-10 px-3">
            <h1 className="text-3xl text-center font-semibold pb-5">Brands</h1>
            <hr />
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 py-4 gap-8">
                {
                    brandscard.map((brandContainer) => (<Brandcard key={brandContainer._id} brandscard={brandContainer}></Brandcard>))
                }
            </div>
        </div>

        <div data-aos="fade-up">
        <div  className="    px-8 ">
        <div className=" grid md:grid-cols-2 sm:grid-cols-1 bg-base-100 ">
  <figure><img className=" " src="https://i.ibb.co/HgSQ9X8/25.png" alt="makeup" /></figure>
  <div className="card-body  text-center">
    <h2 className="text-2xl font-semibold py-2 ">Lakme 9 to 5 Long Wear Nail Color</h2>
    <p className="text-xs">Get a dash of charming color on your nails with Lakme 9 to 5long wear nail color. Lakme 9 to 5long wear nail color is a long lasting formula that locks moisture onto your nails while giving your nails a dazzling shine. Just apply a coat or two and let your nails do the rest. The long wear nail color are a collection specially designed for the excited you who needs a new shades for every mood and occasion, be it an office meeting, after office party or festival, there’s always a shade for you. </p>
    <div className="border-t-4 border-gray-950 lg:mx-16 "></div>
    
   <Link to='/allProducts'> <button className=" btn btn-outline  bg-rose-700 mt-2 text-white">Shop Now</button></Link>
   
  </div>

  
</div>
        </div>
            

        <div className="    px-8  ">
        <div className=" grid md:grid-cols-2 sm:grid-col-1 bg-base-100 ">
 
  <div className="card-body  text-center">
    <h2 className="text-3xl font-semibold py-6 ">Daily Deal</h2>
    <div className="border-t-4 border-gray-950 lg:mx-16 "></div>
    
   <Link to='/allProducts'> <button className=" btn btn-outline  bg-rose-700 mt-4 text-white">Shop Now</button></Link>
   
  </div>
  <figure><img className=" " src="https://i.ibb.co/GQCXwPv/23.png" alt="makeup" /></figure>

  
</div>
        </div>
            
        </div>

        <div className=" AboutUs py-8 px-4">
        <div className="hero   h-96" style={{backgroundImage: 'url(https://i.ibb.co/6gxwtJM/28.png)'}}>

  <div className=" text-center text-neutral-content ">
    <div className="hero-overlay bg-opacity-50 py-8 px-4 ">
      <h1 className="mb-2 mt-0 text-4xl font-bold">About US</h1>
      <h2>with love from Gleam Elegance</h2>
      <p className="mb-15 py-3 text-xs">It's our mission to redefine luxury beauty by creating amazing products at prices that don't break the bank. We imagine, develop, test and <br /> manufacture all under one roof for next level colour + formulas. We pride  ourselves on  being  100% cruelty-free, wallet-friendly and keeping <br /> our community at the center of our world.

</p>
     
    </div>
  </div>
</div>
        </div>


            <App></App>
        </div>
    );
};

export default Home;