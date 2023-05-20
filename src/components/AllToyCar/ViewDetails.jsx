import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    // const singleToyCar = useParams()

    const toyCar = useLoaderData()
    console.log(8, toyCar)
    const {toyCarName, quantity, sellerName, sellerEmail, price, rating, detailsDescription, subCategory, photourl} = toyCar;

    // console.log(6, singleToyCar)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full flex-col lg:flex-row">
                <img src={photourl} className="w-1/2 h-96 rounded-lg shadow-2xl" />
                <div className='w-1/2 text-left ml-9'>
                    <h1 className="text-3xl font-bold">{toyCarName}</h1>
                    <p className='py-9'>{detailsDescription}</p>
                    <p className="py-1">Avaiable Quantity: {quantity}</p>
                    <p className="py-1">Seller-Name: {sellerName}</p>
                    <p className="py-1">Seller-Email: {sellerEmail}</p>
                    <p className="py-1">Price: ${price}</p>
                    <p className="py-1">Rating: {rating}/5</p>
                    <p className="py-1">Category: {subCategory}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;