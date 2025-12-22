import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../Provider/AuthProvieder';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [users, setUsers] = useState([])


    useEffect(() => {

        axiosSecure.get('/users')
            .then(res => {
                setUsers(res.data)
            })
    }, [axiosSecure])

    console.log(users);

    return (
        <div>
            All
        </div>
    );
};

export default AllUsers;