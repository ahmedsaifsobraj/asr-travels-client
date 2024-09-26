import { getAuth } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import List from './List';

const MyList = () => {
    const auth = getAuth(app);
    const [user] = useAuthState(auth);
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        fetch(`https://asr-travels-server.vercel.app/spots/user/${user.uid}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => setSpots(data))

    }, [user]);

    return (
        <div>
            <h1 className='text-2xl lg:text-5xl font-bold text-center text-teal-500 my-6'>Destinations Shared By You</h1>
            <div className=' mx-auto my-6 grid lg:grid-cols-3 gap-4 px-5'>
                {
                    spots.map(spot => <List key={spot._id} spot={spot}></List>)
                }
            </div>
        </div>
    );

}

export default MyList;
