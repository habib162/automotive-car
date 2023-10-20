import React from 'react';
import { useContext } from "react";
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoute = ({children}) =>{
    const {currentUser,loading} = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return (
            <div className='text-center text-3xl'>
                <span className="loading loading-spinner text-success"></span>
            </div>
        )
    }
    if (currentUser) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>

}

export default PrivateRoute;