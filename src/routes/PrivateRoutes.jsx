import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    // console.log(user)

    if(user){
        return children;
    }

    return <Navigate to='/login' replace={true}></Navigate>;
};

export default PrivateRoutes;