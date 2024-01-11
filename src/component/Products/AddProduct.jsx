import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct =event =>{
        event.preventDefault();
     
        const form = event.target;
         const name =form.name.value;
         const brand =form.brand.value;
         const price =form.price.value;
         const rating =form.rating.value;
         const details =form.details.value;
         const photo =form.photo.value;
         const newProduct ={name,brand,photo,price,details,rating};
         console.log(newProduct);

          // send data to the server 
    fetch('http://localhost:5000/addproduct', {
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
            icon: "success!",
            title: "Success",
            text: "Product Added Successfully",
            confirmButtonText: "Ok"
          });
         
      }
      form.reset;
    })
     
    }     
    return (
        <div className="p-24 text-white ">
            <div className="bg-red-100 p-3" style={{backgroundImage: 'url(https://i.ibb.co/SRB6NDM/overhead-view-makeup-products-with-brushes-black-backdrop-23-2147899400.jpg)'}}>
            <h2 className="text-center font-bold text-3xl py-8">Add a Product </h2>
            <form onSubmit={handleAddProduct} >
               <div className="flex flex-col sm:flex-row gap-10 justify-around">
               <div className="lg:w-96 ">
                <div className="flex flex-col ">
                <span className="label-text py-3 text-white ">Name</span>
                <input type="text" name="name" placeholder="Enter Name" className="input input-bordered input-sm p-5 mb-5 w-full text-black" />
                </div>
                <div className="flex flex-col">
                <span className="label-text py-3 text-white ">Brand_Name</span>
                <input type="text" name="brand" placeholder="Enter Product Brand" className="input input-bordered p-5 mb-5  input-sm w-full text-black" />
                </div>
                <div className="flex flex-col">
                <span className="label-text py-3 text-white ">Photo</span>
                <input type="text" name="photo" placeholder="Enter Photo URL" className="input input-bordered input-sm text-black  p-5 mb-5 " />
                </div>
                

                </div>
                <div>
                <div className="lg:w-96">
                <div className="flex   flex-col">
                <span className="label-text py-3 text-white ">Price</span>
                <input type="text" name="price" placeholder="Enter Product Price" className="input text-black input-bordered p-5 mb-5 input-sm w-full " />
                </div>
                <div className="flex flex-col">
                <span className="label-text py-3 text-white ">rating</span>
                <input type="text" name="rating" placeholder="Enter Product rating" className="input input-bordered p-5 mb-5 input-sm w-full text-black" />
                </div>
                <div className="flex flex-col">
                <span className="label-text py-3 text-white ">Details</span>
                <input type="text" name="details" placeholder="Enter Product Details" className="input input-bordered input-sm w-full p-5 mb-5 text-black" />
                </div>
                </div>
                </div>
               </div>


                
                <div className="lg:mx-14 md:mx-10">
              
               
                <input className="btn bg-red-700 text-white w-full mb-8 " type="submit" value="Add Product" />
              
                </div>
            </form>
            </div>
        </div>
    );
};

export default AddProduct;