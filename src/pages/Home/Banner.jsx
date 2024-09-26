import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img style={{height:'450px'}}
                        src="https://img.freepik.com/free-photo/cityscape-night-bangkok-thailand_335224-1020.jpg?t=st=1726427317~exp=1726430917~hmac=8dedb114188bde1a654aba47b886fb9b346bab755a8637cdfd40c8e9bf1c5b8e&w=1060"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <h3 className='text-2xl md:text-5xl text-white font-bold'>Bangkok</h3>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img style={{height:'450px'}}
                        src="https://img.freepik.com/free-photo/beautiful-architecture-building-exterior-kuala-lumpur-city-malaysia_74190-9951.jpg?t=st=1726428208~exp=1726431808~hmac=a448d238d6a6421137128d59f845b12a47d6b54707e23013fb883d7ee05c6693&w=900"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <h3 className='text-2xl md:text-5xl text-white font-bold'>Kualalampur</h3>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img style={{height:'450px'}}
                        src="https://images.unsplash.com/photo-1653932133705-851f4547eb2b?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <h3 className='text-2xl md:text-5xl text-white font-bold'>Dhaka</h3>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
