// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";
import BrandContainer from "./BrandContainer";
import { useLoaderData, useParams } from "react-router-dom";

const Brands = () => {
  
  const [brandContainer, setBrandContainer] = useState([]);

  const {brand} = useParams();

  const brands = useLoaderData();

  useEffect(() => {
    const findBrand = brands?.find (brandContainer => brandContainer.brand == brand)
    setBrandContainer(findBrand);
    console.log(findBrand,"find");
  }, [brand, brands])
  
    return (
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
      
       <BrandContainer brandContainer={brandContainer}></BrandContainer>
      
  </div>
    );
};

export default Brands;