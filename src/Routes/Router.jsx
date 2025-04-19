import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import HomeLayout from '../Layouts/HomeLayout';
import CategoryNews from '../Pages/CategoryNews';

const Router = () => {
    return (



        <Routes>
            <Route path="/" element={<HomeLayout />}>
            <Route index element={<Navigate to="/category/1" replace />} />
                <Route path="/category/:id" element={<CategoryNews/>} />



            </Route>
            <Route path='/news' element={<h1>news layout</h1>} />
            <Route path='/auth' element={<h1>login page</h1>} />
            <Route path='*' element={<h1>Error 404</h1>} />


        </Routes>




    );
};

export default Router;