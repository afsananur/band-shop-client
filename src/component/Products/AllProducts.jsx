import { useState } from "react";
import AllProductCard from "./AllProductCard";
import { useLoaderData } from "react-router-dom";

const AllProducts = () => {
    const allProduct = useLoaderData();
    const [products, setProducts] = useState(allProduct);

    return (
        <div className="">
        <h1 className="text-5xl font-extrabold text-slate-500 text-center p-10">Total Products: {allProduct.length}</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 px-5 gap-4">
        {
            allProduct.map(product => <AllProductCard key={product._id} product={product} products={products}  setProducts={setProducts}></AllProductCard>)
        }
        </div>
    </div>
    );
};

export default AllProducts;