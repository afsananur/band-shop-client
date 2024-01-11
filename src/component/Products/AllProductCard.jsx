import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AllProductCard = ({ product,  products, setProducts }) => {
   
    const { _id, name, brand, price,rating,  photo, details } = product;  

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addproduct/${_id}`, {
                    method: "DELETE"
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!!!",
                                text: "Product deleted successfully!!!",
                                icon: "success",
                                confirmButtonText: "Ok"
                            })
                            
                            const remaining = products.filter(product => product._id !== _id);
                            setProducts(remaining);
                        }
                    });
            }
        })
    }


    return (
       
        <div className="card w-96  bg-base-100 shadow-2xl">
        <figure><img className="h-80" src={photo} alt={photo} /></figure>
        <div className="card-body">
          <h2 className="card-title text-slate-500">
            {brand}
            
          </h2>
          <p className="text-lg font-bold"> {name}</p>
          <div className="card-actions justify-between pt-4">
            <div className="badge badge-outline text-lg font-semibold  ">Rating: {rating}</div> 
            <div className="badge badge-outline text-lg font-semibold ">Price: {price}</div>
          </div>



          <div className="card-actions justify-between pt-4">
          <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>view details</button>
              <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
          <figure><img className="h-64 py-3" src={photo} alt={photo} /></figure>
          <h2 className="card-title text-slate-500">
            {brand}
            
          </h2>
          <p className="text-lg font-bold"> {name}</p>
          <div className="card-actions justify-between pt-4">
            <div className="badge badge-outline text-lg font-semibold  ">Rating: {rating}</div> 
            <div className="badge badge-outline text-lg font-semibold ">Price: {price}</div>
          </div>
            <h2 className="text-xl  pt-4 font-semibold">Short Description:</h2>
            <hr />
                <p className="py-4 "> {details}</p>
                   <div className="modal-action">
                      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
                   <button className="btn">Close</button>
                           </form>
                          </div>
                       </div>
                  </dialog>
                  <Link to={`/updateProduct/${product._id}`}>
                                <button className="btn  w-full rounded">EDIT</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn btn-error ">DELETE</button>
          </div>


                 
                    
                </div>
            </div>
     
   
    );
};

export default AllProductCard;