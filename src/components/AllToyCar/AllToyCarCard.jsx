import React from 'react';
import { Link } from 'react-router-dom';

const AllToyCarCard = ({ toyCar }) => {

    // const navigate = useNavigate();

    const handleViewDetails = id =>{
        //    console.log(id);
        //    navigate("/");
    }

    // console.log(toyCar)

    const {_id, toyCarName, quantity, sellerName,  price,  subCategory, photourl} = toyCar;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photourl} className='w-full h-60' alt="Toy Car" /></figure>
            <div className="text-left mt-6">
                <h2 className="card-title">{toyCarName}</h2>
                <p>Avaiable Quantity: {quantity}</p>
                <p>Price: ${price}</p>
                <p>Category: {subCategory}</p>
                <p>Seller Name: {sellerName}</p>
                <div className="card-actions justify-end">
                {/* <Navigate to="/toyCar" onClick={() => handleViewDetails(_id)} replace={true} /> */}
                    <Link to={`/toyCar/${_id}`}><button onClick={() => handleViewDetails(_id)} className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllToyCarCard;