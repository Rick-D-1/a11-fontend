import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvieder';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading, roleloading, UserStatus } = useContext(AuthContext)

    if (loading || roleloading) {
        return <p>Loading..........</p>
    }
    if (!user || !UserStatus == 'active') {
        return <Navigate to={'/login'}></Navigate>
    }
    return children
};

export default PrivateRoute;