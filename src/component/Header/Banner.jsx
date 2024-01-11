import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
           <div className="carousel w-full  ">
  <div id="item1" className="carousel-item w-full">
    <img src="https://i.ibb.co/bNJxr4y/Untitled-1.gif" className="w-full " />
    <div className="text-right  absolute  lg:right-8 right-2 transform -translate-y-1/2 top-1/2 ">
            <h2 className="md:text-5xl text-2xl font-bold pt-4 text-rose-500" ><span className="text-white">Where Beauty<br /> meets Connection   </span ></h2>
            <h3 className="font-semibold text-white text-xs md:text-2xl py-6">Connecting Beauty service to you...</h3>
            <button ><Link to={`/allProducts`} className="btn  btn-outline text-white ">See More</Link></button>
            </div>
  </div> 
   

</div> 

        </div>
    );
};

export default Banner;