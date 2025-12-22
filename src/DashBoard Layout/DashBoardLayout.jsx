import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../Components/Sidebar/Sidebar';

const DashBoardLayout = () => (
    <div>
        <Sidebar></Sidebar>
        <div className='ml-70'>
            <Outlet></Outlet>
        </div>
    </div>
);

export default DashBoardLayout;