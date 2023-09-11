import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto font-mono leading-7'>
            <Home></Home>
        </div>
    );
};

export default Main;