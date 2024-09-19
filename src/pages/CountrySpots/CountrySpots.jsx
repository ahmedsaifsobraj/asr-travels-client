import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CountrySpot from './CountrySpot';

const CountrySpots = () => {
    const { country } = useParams();
    console.log(country);
    const [spots, setSpots] = useState([]);
    useEffect(() => {
        fetch(`https://asr-travels-server.vercel.app/spots/${country}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSpots(data);
            }
            )

    }, [country])
    return (
        <div>
            <h1 className='text-5xl font-bold text-center text-teal-500 my-6'>Attractions Of {country}</h1>
            <div className='my-6 grid lg:grid-cols-3 gap-4 '>
                {spots.map(spot => <CountrySpot key={spot._id} spot={spot}></CountrySpot>)}
            </div>
        </div>
    );
}

export default CountrySpots;
