import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/Auth.Context';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) return <h2 className='text-5xl'>Loding...</h2>
    if (user.uid) return children
    return <Navigate to="/login" from={location} replace></Navigate>
};

export default PrivateRoute;