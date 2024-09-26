import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://asr-travels-server.vercel.app/countries',{
            method:'GET',
            headers:{
                'content-type':'application/json'
            }
        })
        .then(res =>res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div className='mt-8 mx-auto'>
            <h3 className='text-center font-bold text-teal-500 text-2xl md:text-5xl mb-6'>Explore Countries</h3>
            <div className='grid lg:grid-cols-3 gap-3'>
                {
                    countries.map(country=><Country key={country._id} country={country}></Country>)
                }
            </div>

        </div>
    );
}

export default Countries;
