import { getAuth } from 'firebase/auth';
import React from 'react';
import { NavLink } from 'react-router-dom';
import app from '../../firebase.init';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';

const Header = () => {
    const auth = getAuth(app)
    const [user] = useAuthState(auth);
    const [signOut]=useSignOut(auth);

    const handleSignOut=async()=>{
        const success = await signOut();
        if(success){
            Swal.fire({
                title: "Success",
                text: "You have successfuly loged out.",
                icon: "success"
              });
        }
    }
    const links =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/alltouristspot'>Destinations</NavLink></li>
            <li><NavLink to='/addtouristspot'>Share Destination</NavLink></li>
            <li><NavLink to='/mylist'>My List</NavLink></li>
        </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl text-teal-500">ASR TRAVELS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            {
                user?.uid ? <div className="navbar-end">
                    <p onClick={handleSignOut} className="btn bg-teal-500	text-white">Sign Out</p>
                </div> : <div className="navbar-end"><NavLink to='/login' className="btn bg-teal-500	text-white">Login</NavLink>
                    <NavLink to='/register' className="btn bg-teal-500 text-white">Register</NavLink></div>
            }

        </div>
    );
}

export default Header;
