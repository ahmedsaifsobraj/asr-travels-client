import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIN = (e) => {
        e.preventDefault();
        signInWithGoogle()
            .then((result) => {
                console.log(result.user);
                const user = result.user; // Extract user information
                const email = user.email;
                const userData = { email };

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then((res) => {
                console.log(res);
                Swal.fire({
                    title: "Login Successful",
                    text: "You have successfuly logged in.",
                    icon: "success"
                  });
                navigate('/');
            })
            .catch((error) => {
                alert('You are not a user, Register to become a user:', error);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen flex flex-col justify-center items-center">
            <div className="text-center mt-5 mb-8">
                <h1 className="text-5xl font-bold text-teal-500">Login</h1>
                <p className='mt-2'>Please sign in to continue.</p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl mb-8">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="input input-bordered"
                            required
                        />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-teal-500 text-white text-lg flex items-center justify-center ">
                            Login <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                        </button>
                    </div>
                </form>

                <div className="divider">OR</div>
                <button
                    onClick={handleGoogleSignIN}
                    className="btn bg-teal-500 text-white text-lg m-4"
                >
                    <FontAwesomeIcon icon={faGoogle} />
                    Sign In with Google
                </button>
                <p className='text-center my-4'>
                    <small>
                        Don't have an account?{' '}
                        <Link to="/register" className='text-teal-500 font-bold'>
                            Sign Up
                        </Link>
                    </small>
                </p>
            </div>
        </div>
    );
};

export default Login;
