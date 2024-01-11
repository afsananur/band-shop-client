import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Brandcard = ({brandscard}) => {
  const {brand, cover } = brandscard;

    useEffect(() => {
        AOS.init();
      }, [])

    return (
   <div data-aos="fade-up">
        <div className="card  w-full shadow-xl">
                    <figure >
                        <img className="w-full  h-80" src={cover}></img>
                    </figure>
                    <div className="flex justify-center items-center pb-5">
                        <Link className="btn glass w-full " to={`/brand/${brand}`}>
                        <button className="text-3xl text-slate-500 font-extrabold">{brand}</button>
                        </Link>
                    </div>
                </div>
        
   </div>
    );
};

export default Brandcard;