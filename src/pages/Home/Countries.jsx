import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/countries',{
            method:'GET',
            headers:{
                'content-type':'application/json'
            }
        })
        .then(res =>res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div className='my-8'>
            <h3 className='text-center font-bold text-teal-500 text-3xl'>Explore Countries</h3>
            <div className='grid lg:grid-cols-3 gap-3'>
                {
                    countries.map(country=><Country key={country._id} country={country}></Country>)
                }
            </div>

        </div>
    );
}

export default Countries;
