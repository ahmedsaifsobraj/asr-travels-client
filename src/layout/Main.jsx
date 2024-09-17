import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';

const Main = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Main;
