



const BrandContainer = ({brandContainer}) => {
    const { photo, brand,name,rating, price,details } = brandContainer || {};

    
    return (
     <div className="py-4">
     
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



          <div className="card-actions justify-between ">
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
                  
          </div>


                 
                    
                </div>
            </div>
     </div>
    );
};

export default BrandContainer;