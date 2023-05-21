import React, { useEffect, useState } from 'react';
import AllToyCarCard from './AllToyCarCard';
import Home from '../Home/Home';

const AllToyCar = () => {
    const [allToyCar, setAllToyCar] = useState([]);
    // const [allToyCar1, setAllToyCar1] = useState([]);

    useEffect(() =>{
        fetch('https://get-toy-cars-server.vercel.app/allToyCar')
        .then(res => res.json())
        .then(data => {
            setAllToyCar(data)
            
        })
    }, [])

    
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