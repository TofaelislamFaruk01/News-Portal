import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import HomeLayout from '../Layouts/HomeLayout';
import CategoryNews from '../Pages/CategoryNews';
import AuthLayout from '../Layouts/AuthLayout';
import LogIn from '../Pages/LogIn';
import Register from '../Pages/Register';
import NewsDetails from '../Pages/NewsDetails';
import PrivateRoute from './PrivateRoute';
import About from '../Pages/About';

const Router = createBrowserRouter([

    {
        path:'/',
        element: <HomeLayout/>,
        children:[

            {
                index:true,
                element: <Navigate to={"/category/01"} replace/>
            },
            {
                path: 'category/:id',
        element: <CategoryNews />,
        loader:({params})=>
            fetch(
                `https://openapi.programming-hero.com/api/news/category/${params.id}`
            ),
            }
        ]
    },
    {
        path: '/news/:id',
    element: <PrivateRoute>
        <NewsDetails/>
    </PrivateRoute>,
    loader:({params})=>
        fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),

    
    },
    {
        path: '/auth',
    element: <AuthLayout/>,
    children:[
        {
            path:'/auth/login',
            element: <LogIn/>
        },
        {
            path:'/auth/register',
            element: <Register/>
        },

    ]
    },
    {
        path: '/career',
    element: <h1 className='text-center mt-10 text-base-500'>Cooming soon...</h1>,
    },
    {
        path: '/about',
    element: <About/>,
    },
    {
        path: '*',
    element: <h1 className='text-center mt-10'>Error 404 - Page Not Found</h1>,
    },



]);

export default Router;