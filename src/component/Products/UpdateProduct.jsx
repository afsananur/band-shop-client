import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const {  name, brand, price, photo } = product;


    
        
    const handleUpdateProduct =event =>{
   event.preventDefault();

   const form = event.target;
    const name =form.name.value;
    const brand =form.brand.value;
    const price =form.price.value;
    const photo =form.photo.value;

    const updatedProduct ={name,brand,photo,price};
    console.log(updatedProduct)






    // send data to the server 
    fetch(`http://localhost:5000/addproduct/${product._id}`, {
        method: 'PUT',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(updatedProduct),
      })
    .then(res => res.json())
    .then(data => {
      console.log(data);

      if(data.modifiedCount > 0){
        Swal.fire({
            icon: "success!",
            title: "Success",
            text: "Product updated Successfully",
            confirmButtonText: "Ok"
          });
          
      }
    })
    } 
   
    return (
      <div>
        <div className="px-24 py-10"  >
            <div className="bg-red-100 p-3 "  >
            
            <h2 className="text-center font-bold text-4xl py-8">Update Product </h2>
            <h2 className="text-center font-bold text-2xl py-8">{product.name} </h2>
            <form onSubmit={handleUpdateProduct}>
               <div className="grid grid-cols-2 sm:flex-row gap-10 justify-around">
               <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl  font-bold">Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={name} placeholder="Enter name" className="input input-bordered text-slate-600" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold">Brand Name</span>
                                    </label>
                                    <input type="text" name="brand" defaultValue={brand}  placeholder="Enter brand name" className="input input-bordered text-slate-600" />
                                </div>
                <div>
              
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold">Image</span>
                                    </label>
                                    <input type="text" name="photo" defaultValue={photo}  placeholder="Enter photo url" className="input input-bordered text-slate-600" />
                                </div>
                            </div>
                            <div className="lg:flex gap-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold ">Price</span>
                                    </label>
                                    <input type="text" name="price" defaultValue={price}  placeholder="Enter price" className="input input-bordered text-slate-600" />
                                </div>
                          
                            </div>
                </div>
               


                
                <div className="lg:mx-14 py-10 md:mx-10">
               
                <input className="btn bg-red-700 text-white w-full" type="submit" value="Update Product" />
              
                </div>
            </form>
            </div>
        </div>  
        </div>
    );
};

export default UpdateProduct;