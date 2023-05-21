import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const MyToyCar = () => {
    const [user] = useContext(AuthContext);
    const [myToy, setMyToy] = useState([]);

    const url = `http://localhost:5000/allToyCar?email=${user.email}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {

        })
    } ,[])

    return (
        <div>
            
        </div>
    );
};

export default MyToyCar;