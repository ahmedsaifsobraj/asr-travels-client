import React, { useEffect, useState } from 'react';
import TouristSpot from './TouristSpot';

const AllTouristSpot = () => {
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/spots', {
            method: 'GET',
            headers: {
                'content-type': 'application.json'
            },

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setSpots(data);
                console.log(data)
            })
    }, [])
    return (
        <div>
            <h1 className='text-5xl font-bold text-center text-teal-500 my-6'>Explore All Destinations</h1>
            <div className='my-6 grid lg:grid-cols-3 gap-4 '>
                {
                    spots.map(spot =><TouristSpot key={spot._id} spot={spot}></TouristSpot>)
                }
            </div>
        </div>

    );
}

export default AllTouristSpot;
