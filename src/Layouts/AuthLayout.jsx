import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-[#F3F3F3]'>
            <header className='w-11/12 mx-auto py-3 '>
                <Navbar/>
            </header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default AuthLayout;