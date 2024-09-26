import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = ({ country }) => {
    const { _id,img, country_name, des } = country;
    const navigate = useNavigate();
    const handleCountryDetails =()=>{
        navigate(`/countries/${_id}`);
    }
    const handleTouristSpots =()=>{
        navigate(`/spots/${country_name}`);
        console.log(country_name);
    } 
    return (
        <div onClick={handleTouristSpots} className="mx-auto card bg-base-200 w-92 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt={country_name}
                    className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{country_name}</h2>
                <p className='text-wrap'>{des.slice(0,200)}</p>
                <div className="card-actions">
                    <button className="btn bg-teal-500 text-white font-bold"  onClick={(e) => {
                            e.stopPropagation(); // Prevents the click from bubbling up to the card
                            handleCountryDetails();
                        }}>See More</button>
                </div>
            </div>
        </div>
    );
}

export default Country;
