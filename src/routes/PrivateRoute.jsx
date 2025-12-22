import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvieder';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading, roleloading } = useContext(AuthContext)

    if (loading || roleloading) {
        return <p>Loading..........</p>
    }
    if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }
    return children
};

export default PrivateRoute;