import React, { useEffect, useState } from 'react';
import AllToyCarCard from './AllToyCarCard';

const AllToyCar = () => {
    const [allToyCar, setAllToyCar] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/allToyCar')
        .then(res => res.json())
        .then(data => {
            setAllToyCar(data)
        })
    }, [])
    
    // console.log(allToyCar)

    return (
        <div>
            <h1>This is All Toy: {allToyCar.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    allToyCar.map(toyCar => <AllToyCarCard 
                        key={toyCar._id}
                        toyCar = {toyCar}
                        ></AllToyCarCard>)
                }
            </div>
        </div>
    );
};

export default AllToyCar;