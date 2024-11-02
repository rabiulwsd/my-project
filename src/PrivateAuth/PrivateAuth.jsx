import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../PrivateRoute/PrivateRoute';

const PrivateAuth = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    else if(user){
     return children   
    }
    return <Navigate to={"/login"}></Navigate>;
};

export default PrivateAuth;