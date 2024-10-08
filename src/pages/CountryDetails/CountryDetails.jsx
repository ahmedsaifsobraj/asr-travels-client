import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const { id } = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        fetch(`https://asr-travels-server.vercel.app/countries/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCountry(data);
            }
            )

    }, [id])
    return (
        <div className="card lg:card-side bg-base-200 shadow-xl mt-8 mb-8 px-4">
            <figure>
                <img
                    src={country.img}
                    alt={country.country_name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{country.country_name}</h2>
                <p>{country.des}</p>
            </div>
        </div>

    );
}

export default CountryDetails;
