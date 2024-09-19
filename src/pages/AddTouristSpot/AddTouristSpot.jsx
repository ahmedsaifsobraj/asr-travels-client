import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth';

const AddTouristSpot = () => {
    const auth = getAuth(app)
    const [user] = useAuthState(auth);
    const handleAddSpots = e => {
        e.preventDefault();
        const form = e.target;
        const img = form.img.value;
        const spotname = form.spotname.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const seasonality = form.seasonality.value;
        const time = form.time.value;
        console.log(img, spotname, country, location, description, cost, seasonality, time);
        const spot = { img, spotname, country, location, description, cost, seasonality, time,  userId: user.uid };
        fetch('https://asr-travels-server.vercel.app/spots', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(spot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire({
                    title: "Success",
                    text: "You have successfuly added a tourist spot.",
                    icon: "success"
                });
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center my-6">
                    <h1 className="text-5xl font-bold">Share Tourist Spots</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleAddSpots} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="url" placeholder="img" name='img' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Spot Name</span>
                            </label>
                            <input type="spotname" placeholder="spotname" name='spotname' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select Country</span>
                            </label>
                            <select name='country' className="select select-bordered w-full max-w-xs" required >
                                <option>Bangladesh</option>
                                <option>Malaysia</option>
                                <option>Thailand</option>
                                <option>Indonesia</option>
                                <option>Vietnam</option>
                                <option>Cambodia</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input name='location' type="location" placeholder="location" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="description" placeholder="description" name='description' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Travel Cost</span>
                            </label>
                            <input type="number" min='10' steps='1' name='cost' placeholder="$" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <select name='seasonality' className="select select-bordered w-full max-w-xs" required>
                                <option>Summer</option>
                                <option>Winter</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <input type="text" placeholder="8 Hour" name='time' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary  bg-teal-500 text-white">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddTouristSpot;
