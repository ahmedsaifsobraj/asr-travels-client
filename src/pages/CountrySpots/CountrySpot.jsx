import React from 'react';

const CountrySpot = ({ spot }) => {
    const { img, spotname, country, location, description, cost, seasonality, time } = spot;
    return (
        <div className="card bg-base-100 w-80 shadow-xl mx-auto">
            <figure>
                <img className='w-full' style={{ height: '200px' }}
                    src={img}
                    alt={spotname} />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{spotname}</h2>
                <h3><span className='font-bold'>{country}</span></h3>
                <h3><span className='font-bold'>Location: </span>{location}</h3>
                <h3><span className='font-bold'>Travel Cost: $ </span>{cost}</h3>
                <h3><span className='font-bold'>Best Season: </span>{seasonality}</h3>
                <h3><span className='font-bold'>Traveling Time: </span>{time}</h3>
                <p className='text-justify'>{description}</p>
            </div>
        </div>
    );
}

export default CountrySpot;
