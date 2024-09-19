import React from 'react';
import Banner from './Banner';
import Countries from './Countries';
import Introduction from './Introduction';
import About from './About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Introduction></Introduction>
            <Countries></Countries>
            <About></About>

        </div>
    );
}

export default Home;
