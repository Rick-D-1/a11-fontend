import React from 'react';
import { Outlet } from 'react-router';
import Nabbar from '../Components/NabBar/Nabbar';

const Root = () => {
    return (
        <div>
            <Nabbar></Nabbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;