import React from 'react';
import { useParams } from 'react-router-dom';

const ViewDetails = () => {
    const singleToyCar = useParams()
    console.log(6, singleToyCar)
    return (
        <div>
            <h1>This is View Details</h1>
        </div>
    );
};

export default ViewDetails;