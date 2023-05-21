import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext);
    

    if(user){

        return children;
    }else{
        Swal.fire({
            title: 'Please Log in!',
            text: 'You Have To Log In First To View Details',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }

    return <Navigate to='/login' replace={true}></Navigate>;
};

export default PrivateRoutes;