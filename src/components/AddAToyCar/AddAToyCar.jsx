import { data } from 'autoprefixer';
import React from 'react';
import Swal from 'sweetalert2';

const AddAToyCar = () => {

    const handleAddAToy = event =>{
        event.preventDefault()

        const form = event.target;
        const toyCarName = form.name.value;
        const quantity = form.quantity.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const detailsDescription = form.detailsDescription.value;
        const subCategory = form.subCategory.value;
        const photourl = form.photourl.value;
        console.log(subCategory)

        const newToyCar = {toyCarName, quantity, sellerName, sellerEmail, price, rating, detailsDescription, subCategory, photourl}

        fetch(`http://localhost:5000/addToy`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newToyCar)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Swal.fire({
                title: 'success',
                text: 'Do you want to continue',
                icon: 'success',
                confirmButtonText: 'Added Successfully'
              })
              form.reset()
        })

    }
 
    return (
        <div>
            <h1 className='text-3xl font-bold mt-20 mb-16'>Add A Toy Car</h1>
            <form onSubmit={handleAddAToy} className='bg-blue-300 p-10'>
                {/* row : name and quantity */}
                <div className='md:flex'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Car Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Toy Car Name" className="input input-bordered w-full mr-10" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Available quantity" className="input input-bordered w-full mr-10" />
                        </label>
                    </div>
                </div>
                {/* row : seller name and seller email */}
                <div className='md:flex'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='sellerName' placeholder="Seller Name" className="input input-bordered w-full mr-10" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='sellerEmail' placeholder="Seller Email" className="input input-bordered w-full mr-10" />
                        </label>
                    </div>
                </div>
                {/* row : Price and Rating */}
                <div className='md:flex'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='price' placeholder="Price" className="input input-bordered w-full mr-10" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='rating' placeholder="Rating" className="input input-bordered w-full mr-10" />
                        </label>
                    </div>
                </div>
                {/* row : Details Description and Sub Catagory */}
                <div className='md:flex'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Details Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='detailsDescription' placeholder="Details Description" className="input input-bordered w-full mr-10" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <select name='subCategory' className="select select-bordered w-full max-w-xs bordered mt-9">
                            <option disabled selected>Sub-Category</option>
                            <option>Toy Truck</option>
                            <option>Toy Bus</option>
                            <option>Toy Truck</option>
                            <option>Toy Zip</option>
                            <option>Toy car</option>
                        </select>
                    </div>
                </div>
                {/* row : Picture URL of the toy */}
                <div className='md:flex'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Picture URL of the toy</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='photourl' placeholder="Picture URL of the toy" className="input input-bordered w-full mr-10" />
                        </label>
                    </div>
                </div>
                <button type='submit' className="btn btn-outline btn-success mt-10">Add A Toy Car</button>
            </form>
        </div>
    );
};

export default AddAToyCar;